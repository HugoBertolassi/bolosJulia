import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoloEditarComponent } from './dialog-bolo-editar.component';

describe('DialogBoloEditarComponent', () => {
  let component: DialogBoloEditarComponent;
  let fixture: ComponentFixture<DialogBoloEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoloEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBoloEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
