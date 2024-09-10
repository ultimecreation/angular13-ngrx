import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BooksActions from '../../actions/books/books.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BookService } from 'src/app/books/services/book.service';
import { Book } from 'src/app/models/Books';


@Injectable()
export class BookEffects {


  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.loadBooks),
    mergeMap(() => this.bookService.getBooks().pipe(
      map((books: Book[]) => BooksActions.loadBooksSuccess({ books })),
      catchError(error => of(BooksActions.loadBooksFailure({ error: error.body.error })))
    ))
  ))

  addBook$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.addBook),
    mergeMap(({ book }) => this.bookService.addBook(book).pipe(
      map((book: Book) => BooksActions.addBookSuccess({ book })),
      catchError(error => of(BooksActions.addBookFailure({ error: error.body.error })))
    ))
  ))

  deleteBook$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.bookActions.deletebook),
    mergeMap(({ id }) => this.bookService.deleteBook(id).pipe(
      map(() => BooksActions.bookActions.deletebooksuccess({ id })),
      catchError(error => of(BooksActions.bookActions.deletebookfailure({ error: error })))
    ))
  ))

  updateBook$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.bookActions.updatebook),
    mergeMap(({ book }) => this.bookService.updateBook(book).pipe(
      map(() => BooksActions.bookActions.updatebooksuccess({ book })),
      catchError(error => of(BooksActions.bookActions.updatebookfailure({ error: error })))
    ))
  ))

  constructor(private actions$: Actions, private bookService: BookService) {

  }

}
