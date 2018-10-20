import { Component, OnInit } from '@angular/core';

import { StoreService } from 'ng-barn';

import { User } from '../../models/user';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  list: User[];

  constructor(
    private store: StoreService
  ) {
    store.select('users');
  }

  ngOnInit() {
    this.list = this.store.get();
  }

}
