import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableTextBoxComponent } from './draggable-text-box.component';

describe('DraggableTextBoxComponent', () => {
  let component: DraggableTextBoxComponent;
  let fixture: ComponentFixture<DraggableTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableTextBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
