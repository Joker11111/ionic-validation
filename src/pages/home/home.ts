import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { PasswordValidation } from './passwordvalidation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  complexForm: FormGroup;
  

  
  constructor(public navCtrl: NavController,fb: FormBuilder) {
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'email':[null,Validators.compose([Validators.required, Validators.email])],
      'password':[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'confirmPassword':null,      
      'gender' : [null,Validators.required],
      'hiking' : false,
      'running' :false,
      'swimming' :false
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })

  }
  submitForm(complexForm: any): void{
    if(!complexForm.valid)
    {
       alert('now  it is valid')
      }
   
    else{
      alert('now  it is good now ')
    }
    
    
    console.log('Form Data: ');
    console.log(complexForm);
  }


}
