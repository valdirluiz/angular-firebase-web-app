import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHospedeComponent } from './edit-hospede.component';

describe('EditHospedeComponent', () => {
  let component: EditHospedeComponent;
  let fixture: ComponentFixture<EditHospedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHospedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
