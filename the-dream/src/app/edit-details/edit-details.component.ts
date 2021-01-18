import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../ngservice/auth.service';
import { TokenStorageService } from '../ngservice/token-storage.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  isLoggedIn:boolean;
  isFailure:boolean;
  role: string;
  id:number;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private router:Router) {
    this.isLoggedIn = false;
  this.isFailure = false;
   }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorageService.getUser().roles;
      this.id = this.tokenStorageService.getUser().id;
    }
  }

  onSubmit(form:NgForm){
    const user = new User(this.id,form.value.uname,form.value.name, form.value.pwd, form.value.email,[this.role]);
    //console.log(user + " " + this.role);
   this.authService.editUser(user).subscribe(
     data => {
      this.router.navigate(['./home/dreamcatchers']).then(() => {
        this.tokenStorageService.signOut();
    window.location.reload();
      });
     },
     err => {
         console.log(err);
         this.isFailure = true;
     }
   );
  }

}
