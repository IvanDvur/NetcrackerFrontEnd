import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplatesComponent } from './user-templates.component';

describe('UserTemplatesComponent', () => {
  let component: UserTemplatesComponent;
  let fixture: ComponentFixture<UserTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTemplatesComponent]
    });
    fixture = TestBed.createComponent(UserTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
