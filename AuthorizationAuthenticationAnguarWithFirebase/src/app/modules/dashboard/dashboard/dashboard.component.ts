import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, NgForm, Validators, FormArray} from '@angular/forms';
import { MasterService } from 'src/app/_services/master.service';
import{filter, map} from 'rxjs/operators';
import { CanComponentLeave } from 'src/app/_guards/unsaved-changes.guard';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements CanComponentLeave, OnInit, AfterContentChecked {
  empFrom : FormGroup;



  constructor(private fb : FormBuilder, private _masterService:MasterService) { }

  ngOnInit(): void {
      this.empFrom = this.fb.group({
        employeeName: ['', Validators.required],
        skillExp : this.fb.array([this.initItemRow()])
      });


      this.fetchRoot()



  }



  canLeave () : boolean{
    if(this.empFrom.dirty){
      return window.confirm("You have some unsaved changes. Save it before leaving")
    }
    return true;
  }

  // on window tab close
  // @HostListener('window:beforeunload, [$event]')
  // public onBeforeUnload(): void {
  //   this.canLeave();
  // }


  ngAfterContentChecked(): void{
    console.log('xx', this.empFrom.get('skillExp'));
  }

  get skillExpArry(){
    return this.empFrom.get('skillExp') as FormArray;

  }

  get f() {
    return this.empFrom.controls;
  }

  addMore(){
    this.skillExpArry.push(this.initItemRow());
  }

  deleteRow(index:number){
    this.skillExpArry.removeAt(index);
  }


  initItemRow(){
    return this.fb.group({
       skill : ['', Validators.required],
       exp : ['',  Validators.required]
    });
  }

  empSubmit(){
    // console.log(this.empFrom);
    if(this.empFrom.valid){
      console.log(this.empFrom);
      console.log(this.empFrom.value);
    } else {
      console.log("formIsInvalid");
    }

  }

  savePass(){

  }


  fetchRoot(){

     this._masterService.getRoot().pipe( map(resData =>
       {

       const rootArray = [];
       for(const key in resData){
         if(resData.hasOwnProperty(key)){
           // console.log({...resData[key]});
           rootArray.push({rootID : key, ...resData[key] })
         }

       }
       return rootArray;
     }
     ))
     .subscribe( roots => {
       console.log("GetRoot:", roots);


       // this.roots= roots;
     },

     (error: any) => {

       console.log("GetRootError:", error)


      }
     );
  }

}
