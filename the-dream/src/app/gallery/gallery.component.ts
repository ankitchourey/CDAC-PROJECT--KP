import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  title = 'Services';
  images:String[];

  constructor() {
    this.images = [ "assets/images/gallery/destination1.jpg",
    "assets/images/gallery/wedding1.jpg",
    "assets/images/gallery/bride2.jpg",
    "assets/images/gallery/bride1.jpg", 
    "assets/images/gallery/bride3.jpg",
    "assets/images/gallery/party1.jpg",
    "assets/images/gallery/groom1.jpg",
    "assets/images/gallery/destination2.jpg",
    "assets/images/gallery/wedding2.jpg"
   ];
     }

  ngOnInit(): void {
  }

}
