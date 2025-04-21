import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponentComponent } from './sample-test-component.component';

describe('SampleTestComponentComponent', () => {
  let component: SampleTestComponentComponent;
  let fixture: ComponentFixture<SampleTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
