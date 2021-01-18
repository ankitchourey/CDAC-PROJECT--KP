import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../ngservice/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  id = [];
  category = [];
  private roles: string;
  isLoggedIn = false;
  //isLoginFailed = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isAdmin:boolean;
  userId:number;

  constructor(private tokenStorageService:TokenStorageService, private router: Router) { 
    this.isAdmin = false;
  }

  ngOnInit(): void {
    this.id = [0,1];
    this.category = [1,2,3,4,5,6];
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles[0];
       console.log(this.roles);
       this.userId = this.tokenStorageService.getUser().id;
      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
     if(this.roles == "ROLE_ADMIN")
        this.isAdmin = true;
      
      console.log(user);
    }
  }

  editProf(){
    this.router.navigate(['./home/edit']);
  }
 
  postAdv(){
    this.router.navigate(['./home/advertise']);
  }

  viewAds(){
    this.router.navigate(['./home/view']);
  }

  /* getAdsByCategory(){
   this.router.navigate(['./home/services'])
  } */

  navTo(id:number){
    this.router.navigate(['/home/services',id]).then(() => {window.location.reload();});
  }


  viewFeedbacks(){
    this.router.navigate(['./home/view_feedbacks']);
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['./home/dreamcatchers']).then(() => {
      window.location.reload();
    });
  }


}
