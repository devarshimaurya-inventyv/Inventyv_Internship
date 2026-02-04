import { TestBed } from '@angular/core/testing';

import { ProductFetch } from './product-fetch';

describe('PrdouctFetch', () => {
  let service: ProductFetch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFetch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
