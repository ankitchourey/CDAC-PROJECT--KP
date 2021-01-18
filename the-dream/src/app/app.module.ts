import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { DropdownDirective } from './home/dropdown.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routing.module';
import { SlidersComponent } from './sliders/sliders.component';
import { ServicesComponent } from './services/services.component';
import { authInterceptorProviders } from './ngservice/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ViewvendorComponent } from './viewvendor/viewvendor.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PostAdvComponent } from './post-adv/post-adv.component';
import { PhotoAdvComponent } from './photo-adv/photo-adv.component';
import { CommonModule } from '@angular/common';
import { ViewMyAdsComponent } from './view-my-ads/view-my-ads.component';
import { EditAdvComponent } from './edit-adv/edit-adv.component';
import { ViewFeedbacksComponent } from './view-feedbacks/view-feedbacks.component';
import { ViewEnquiriesComponent } from './view-enquiries/view-enquiries.component';




@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    DropdownDirective,
    SlidersComponent,
    ViewvendorComponent,
    EditDetailsComponent,
    FeedbackComponent,
    PostAdvComponent,
    PhotoAdvComponent,
    ViewMyAdsComponent,
    EditAdvComponent,
    ViewFeedbacksComponent,
    ViewEnquiriesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
