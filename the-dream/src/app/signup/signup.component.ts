import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SignupRequest } from '../models/SignupRequest';
import { AuthService } from '../ngservice/auth.service';
import { RoleService } from '../ngservice/role-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id:string;
  arr:any[];


  constructor(private route: ActivatedRoute,private router: Router , private authService: AuthService) {
    this.arr = [];
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['title'];
        this.arr.push(this.id);
  });
}

  onSubmit(form: NgForm) {
    const user = new SignupRequest(form.value.uname,form.value.name, form.value.pwd, form.value.email,this.arr);
    console.log(user + " " + this.id);
    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout( () => {this.router.navigate(['./home/dreamcatchers'])},2000);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onReset(form:NgForm){
    form.reset();
  }

  onCancel(){
    this.router.navigate(['./home/dreamcatchers']);
  }

}
