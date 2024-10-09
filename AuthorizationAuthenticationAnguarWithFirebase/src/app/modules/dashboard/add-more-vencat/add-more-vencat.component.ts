import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CanComponentLeave } from 'src/app/_guards/unsaved-changes.guard';
import { MasterService } from 'src/app/_services/master.service';

@Component({
  selector: 'app-add-more-vencat',
  templateUrl: './add-more-vencat.component.html',
  styleUrls: ['./add-more-vencat.component.css']
})
export class AddMoreVencatComponent implements CanComponentLeave, OnInit {
  employeeForm : FormGroup;
  constructor(private fb : FormBuilder, private _service : MasterService) { }

  validationMessages = {
    'employeeName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    }
    // ,
    // 'skill': {
    //   'required': 'Skill is required.',
    //   'emailDomain': 'Email domain should be dell.com'
    // },
    // 'exp': {
    //   'required': 'Exprience is required.'
    //  }
  };

  formErrors = {
    'employeeName' : ''
    // ,
    // 'skill': '',
    // 'exp' : ''
  }


  canLeave () : boolean{
    if(this.employeeForm.dirty){
      return window.confirm("You have some unsaved changes. Save it before leaving")
    }
    return true;
  }

  ngOnInit(): void {
      this.employeeForm = this.fb.group({
          employeeName : ['', Validators.required],
          skillsSet : this.fb.array([this.addSkillGroup()])
      });

      this.employeeForm.valueChanges.subscribe(data => {
        console.log('valueChanged')
        this.logValidationForm(this.employeeForm)
      })
  }

  loadData(){
    // this.logValidationForm(this.employeeForm)
    // console.log(this.formErrors);
  }

  logValidationForm(empFromGroup : FormGroup = this.employeeForm){
    Object.keys(empFromGroup.controls).forEach((key:string) => {
        console.log('formControlKey111111', key)
        const abstractControl = empFromGroup.get(key)

         this.formErrors[key] = '';
         if(abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty
          || abstractControl.value !== '' )){
            //in messages will get all massages for error
            const messages = this.validationMessages[key];
            // console.log(messages);
            //check which error is there
            for(const errorKey in abstractControl.errors  ){
              // show message as per error
              if(errorKey){

                this.formErrors[key] += messages[errorKey] + '';
              }
            }
         }

        //  **as we are showing from array validation messages in templete static no need below code
        // if( abstractControl instanceof FormArray){

        //   for(const control of abstractControl.controls){
        //     if(control instanceof FormGroup){
        //       this.logValidationForm(control)
        //     }
        //   }


        // }
    })

  }

  addSkillGroup() :FormGroup{
    return this.fb.group({
      skill : ['', Validators.required],
      exp : ['', Validators.required]
   })
  }

  onSubmt(){

     console.log(this.employeeForm.value)
     this._service.saveProduct(this.employeeForm.value).subscribe(res => {
        console.log('test', res);
     }, err => {
        console.log('err', err)
     });
  }

  addSkills(){
    (<FormArray>this.employeeForm.get('skillsSet')).push(this.addSkillGroup())
  }

  removeSkill(deleteIndex : number){
       const skillFormArray = (<FormArray>this.employeeForm.get('skillsSet'));
       skillFormArray.removeAt(deleteIndex);
  }


}
