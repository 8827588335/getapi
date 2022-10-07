import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayOutComponent } from './flex-lay-out.component';

describe('FlexLayOutComponent', () => {
  let component: FlexLayOutComponent;
  let fixture: ComponentFixture<FlexLayOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexLayOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
