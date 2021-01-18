import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditAdvComponent } from './edit-adv/edit-adv.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotoAdvComponent } from './photo-adv/photo-adv.component';
import { PostAdvComponent } from './post-adv/post-adv.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { SlidersComponent } from './sliders/sliders.component';
import { ViewEnquiriesComponent } from './view-enquiries/view-enquiries.component';
import { ViewFeedbacksComponent } from './view-feedbacks/view-feedbacks.component';
import { ViewMyAdsComponent } from './view-my-ads/view-my-ads.component';
import { ViewvendorComponent } from './viewvendor/viewvendor.component';


const approutes: Routes = [
    {path: '', redirectTo: '/home/dreamcatchers', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, children: [ 
    { path: 'services/:id', component: ServicesComponent}, 
    {path: 'gallery', component: GalleryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'login/:id', component: LoginComponent},
    {path: 'signup/:title', component: SignupComponent},
    {path: 'dreamcatchers', component: SlidersComponent},
    {path: 'vendor/:id', component: ViewvendorComponent},
    {path: 'edit', component: EditDetailsComponent},
    {path:'advertise',component: PostAdvComponent},
    {path:'advertise/photo/:id',component: PhotoAdvComponent},
    {path: 'view',component: ViewMyAdsComponent},
    {path:'editAd/:id',component: EditAdvComponent},
    {path: 'enquiries/:id',component: ViewEnquiriesComponent},
    {path:'view_feedbacks',component: ViewFeedbacksComponent}
]},
];
@NgModule({
    imports: [RouterModule.forRoot(approutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}