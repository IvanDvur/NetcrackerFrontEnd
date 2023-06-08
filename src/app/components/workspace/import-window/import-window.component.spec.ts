import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportWindowComponent } from './import-window.component';

describe('ImportWindowComponent', () => {
  let component: ImportWindowComponent;
  let fixture: ComponentFixture<ImportWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportWindowComponent]
    });
    fixture = TestBed.createComponent(ImportWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
