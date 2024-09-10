import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from '../../actions/books/books.actions';
import { Book } from 'src/app/models/Books';
import { ExpressionStatement } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';


export const booksFeatureKey = 'books';
export interface BookState {
  books: Book[]
  selectedBook: Book | null
  error: Error | HttpErrorResponse | string | null
}
export interface State {
  readonly [booksFeatureKey]: BookState
}

export const initialState: BookState = {
  books: [],
  selectedBook: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(BookActions.loadBooksSuccess, (state, { books }) => {
    return {
      ...state,
      books
    }
  }),
  on(BookActions.addBook, (state) => {
    return {
      ...state
    }
  }),
  on(BookActions.addBookSuccess, (state, payload) => {
    return {
      ...state,
      books: [...state.books, payload.book]
    }
  }),
  on(BookActions.addBookFailure, (state, payload) => {
    return {
      ...state,
      error: payload.error
    }
  }),
  on(BookActions.bookActions.deletebooksuccess, (state, payload) => {
    return {
      ...state,
      books: state.books.filter((book) => book.id !== payload.id)
    }
  }),
  on(BookActions.bookActions.updatebooksuccess, (state, payload) => {
    const updatedBooks: Book[] = state.books.map(existingBook => existingBook.id === payload.book.id
      ? payload.book
      : existingBook
    )

    return {
      ...state,
      books: updatedBooks
    }
  })
);
