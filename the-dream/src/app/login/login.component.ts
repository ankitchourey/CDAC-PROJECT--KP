import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginRequest } from '../models/LoginRequest';
import { AuthService } from '../ngservice/auth.service';
import { RoleService } from '../ngservice/role-service.service';
import { TokenStorageService } from '../ngservice/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = '';
  username ='';
  isUser:boolean = false;
  id:number;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor(private route: ActivatedRoute, private roleService: RoleService,
    private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.title = this.roleService.getRole(this.id);
        if(this.title === 'User')
         this.isUser = true;
         else
          this.isUser = false;
      });
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      }
  }

  onSubmit(form: NgForm) {
    const credentials = new LoginRequest(form.value.name,form.value.pwd);
    this.authService.login(credentials).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.username = this.tokenStorage.getUser().username;
        setTimeout(()=> { this.reloadPage(); },3000); 
      },
      err => {
        //this.errorMessage = err.error.message;
        console.log(err);
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    //window.location.reload();
    this.router.navigate(['./home/dreamcatchers']).then(() => {
      window.location.reload();
    });
  }

  onReset(form:NgForm){
    //this.isLoginFailed = false;
    form.reset();
  }

  onCancel(){
    this.router.navigate(['./home/dreamcatchers']);
  }

}
