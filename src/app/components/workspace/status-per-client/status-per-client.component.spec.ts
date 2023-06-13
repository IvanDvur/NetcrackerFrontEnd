import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPerClientComponent } from './status-per-client.component';

describe('StatusPerClientComponent', () => {
  let component: StatusPerClientComponent;
  let fixture: ComponentFixture<StatusPerClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusPerClientComponent]
    });
    fixture = TestBed.createComponent(StatusPerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
