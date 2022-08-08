import { TestBed } from '@angular/core/testing';

import { FriendManagerService } from './friend-manager.service';

describe('FriendManagerService', () => {
  let service: FriendManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
