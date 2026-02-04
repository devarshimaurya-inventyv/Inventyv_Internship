import { TestBed } from '@angular/core/testing';

import { UserCartList } from './user-cart-list';

describe('UserCartList', () => {
  let service: UserCartList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCartList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
