import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVideoShowComponent } from './dialog-video-show.component';

describe('DialogVideoShowComponent', () => {
  let component: DialogVideoShowComponent;
  let fixture: ComponentFixture<DialogVideoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVideoShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVideoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
