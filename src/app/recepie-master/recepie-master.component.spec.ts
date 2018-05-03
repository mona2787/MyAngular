import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieMasterComponent } from './recepie-master.component';

describe('RecepieMasterComponent', () => {
  let component: RecepieMasterComponent;
  let fixture: ComponentFixture<RecepieMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
