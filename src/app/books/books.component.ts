import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Books';
import { Store } from '@ngrx/store';
import * as BooksActions from './state/actions/books/books.actions';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books$!: Observable<Book[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(BooksActions.loadBooks())
  }

}
