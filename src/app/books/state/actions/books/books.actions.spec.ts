import * as fromBooks from './books.actions';

describe('loadBookss', () => {
  it('should return an action', () => {
    expect(fromBooks.loadBooks().type).toBe('[Books] Load Bookss');
  });
});
