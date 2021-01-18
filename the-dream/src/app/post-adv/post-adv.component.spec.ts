import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdvComponent } from './post-adv.component';

describe('PostAdvComponent', () => {
  let component: PostAdvComponent;
  let fixture: ComponentFixture<PostAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
