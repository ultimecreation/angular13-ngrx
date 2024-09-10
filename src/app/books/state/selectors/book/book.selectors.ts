import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksFeatureKey, BookState } from '../../reducers/book/book.reducer';

const selectBooksFeature = createFeatureSelector<BookState>(booksFeatureKey)
export const getBooks = createSelector(
    selectBooksFeature,
    (state: BookState) => state.books
)

export const getBooksError = createSelector(
    selectBooksFeature,
    (state: BookState) => state.error
)