import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  constructor(private formBuilder : FormBuilder){}
  profileForm=this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    address:['',Validators.required],
    dob:['',Validators.required],
    gender:['',Validators.required],
    
  });
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}
