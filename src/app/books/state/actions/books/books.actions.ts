import { createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from 'src/app/models/Books';

export const loadBooks = createAction(
  '[Books] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Books] add Book',
  props<{ book: Book }>()
);

export const addBookSuccess = createAction(
  '[Books] add Book Success',
  props<{ book: Book }>()
);

export const addBookFailure = createAction(
  '[Books] add Book Failure',
  props<{ error: any }>()
);

export const bookActions = createActionGroup({
  source: 'Books',
  events: {
    'deleteBook': props<{ id: number }>(),
    'deleteBookSuccess': props<{ id: number }>(),
    'deleteBookFailure': props<{ error: any }>(),
    'updateBook': props<{ book: Book }>(),
    'updateBookSuccess': props<{ book: Book }>(),
    'updateBookFailure': props<{ error: any }>(),
  }
})
