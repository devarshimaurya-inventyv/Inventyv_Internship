import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchController } from './search-controller';

describe('SearchController', () => {
  let component: SearchController;
  let fixture: ComponentFixture<SearchController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchController]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
