import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/models/Books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BOOK_API_URL = 'api/books'

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.BOOK_API_URL).pipe(

    )
  }

  addBook(book: Book): Observable<Book> {
    const body = { ...book, id: null }
    return this.httpClient.post<Book>(this.BOOK_API_URL, body)
  }

  deleteBook(id: number): Observable<{}> {
    const url = `${this.BOOK_API_URL}/${id}`
    return this.httpClient.delete<Book>(url)
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.BOOK_API_URL}/${book.id}`, book)

  }
}
