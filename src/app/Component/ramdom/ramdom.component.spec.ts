import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamdomComponent } from './ramdom.component';

describe('RamdomComponent', () => {
  let component: RamdomComponent;
  let fixture: ComponentFixture<RamdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamdomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
