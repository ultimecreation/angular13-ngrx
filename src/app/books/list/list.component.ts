import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/Books';
import { getBooks } from '../state/selectors/book/book.selectors';
import { bookActions } from '../state/actions/books/books.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public books$!: Observable<Book[]>
  @Input() public booksForm!: FormGroup
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.books$ = this.store.select(getBooks)
  }

  public deleteBook(id: number): void {
    this.store.dispatch(bookActions.deletebook({ id }))
  }

  public editBook(book: Book): void {
    this.booksForm.patchValue({
      ...book,
      id: book.id,
    })
  }

}
