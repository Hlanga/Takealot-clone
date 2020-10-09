import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteCarouselComponent } from './infinite-carousel.component';

describe('InfiniteCarouselComponent', () => {
  let component: InfiniteCarouselComponent;
  let fixture: ComponentFixture<InfiniteCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
