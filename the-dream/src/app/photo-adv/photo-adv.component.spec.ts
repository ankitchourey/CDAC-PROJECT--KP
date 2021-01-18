import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAdvComponent } from './photo-adv.component';

describe('PhotoAdvComponent', () => {
  let component: PhotoAdvComponent;
  let fixture: ComponentFixture<PhotoAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
