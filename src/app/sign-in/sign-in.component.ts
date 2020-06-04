import { Component, Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  title = 'Angular Form Validation Tutorial'
  errorMessage = '';

    contextmenu = false;
    contextmenuX = 0;
    contextmenuY = 0;
    contextMenuForGeocache: "MyGeocache";
    innerWidth: any;
    innerHeight: any;
  signinForm: FormGroup;
  
  ngOnInit() {
    // for determining where the put the context menu -- on the screen ;-) 
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    }
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
     
    this.signinForm = this.fb.group({
       username: ['', [Validators.required,Validators.pattern(/admin/)] ],
       password: ['', [Validators.required,Validators.pattern(/admin/)] ],
      //  validName:"admin",
    });
  }
  checker(a,b){
    if(a!='admin' || b!='admin'){
      return true;
    }else{
      return false
    }
  }
  
  
}