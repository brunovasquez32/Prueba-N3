import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesContactanosComponent } from './solicitudes-contactanos.component';

describe('SolicitudesContactanosComponent', () => {
  let component: SolicitudesContactanosComponent;
  let fixture: ComponentFixture<SolicitudesContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudesContactanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
