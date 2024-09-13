import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, NgForm, Validators, FormArray, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  uploadImageForm :FormGroup;
  constructor(private fb : FormBuilder) { }


  ngOnInit(): void {
    this.uploadImageForm = this.fb.group({
      imageName: [null, Validators.required],
      image: [null, [Validators.required, imageFormat('pdf')] ],
    });
  }



  uploadFile(event) {
    // const imageName = event.target.files[0];
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.uploadImageForm.patchValue({
      image: file
    });


    // this.uploadImageForm.get('image').updateValueAndValidity()

    // console.log("am form", this.uploadImageForm)
    // this.uploadImageForm.get('image').updateValueAndValidity()

  }
  submitUploadImg(){
    if(this.uploadImageForm.controls.image.invalid){
      if(this.uploadImageForm.controls.image.errors.required){
           console.log('Image is required')


       }
    }else{
      console.log(this.uploadImageForm.value)
    }

  }


}

function imageFormat(getext: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if(control.value !== null){
      const file = control.value;
      let fileName = file.name;
      let ext = fileName.substring(fileName.lastIndexOf('.') + 1)
      console.log(ext, getext)

      if (ext !== getext) {
         return { 'imageFormat': true };
      } else {
        return null;
      }
    }

    // if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
    //   return null;
    // } else {
    //   return { 'emailDomain': true };
    // }


  };
}
