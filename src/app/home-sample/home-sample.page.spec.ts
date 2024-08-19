import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSamplePage } from './home-sample.page';

describe('HomeSamplePage', () => {
  let component: HomeSamplePage;
  let fixture: ComponentFixture<HomeSamplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
