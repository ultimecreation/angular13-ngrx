import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { addBook, addBookSuccess, bookActions } from '../state/actions/books/books.actions';
import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { getBooksError } from '../state/selectors/book/book.selectors';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription()
  public booksForm!: FormGroup
  public error$!: Observable<string | Error | HttpErrorResponse | null>
  constructor(private fb: FormBuilder, private store: Store, private actionsSubject: ActionsSubject) { }

  ngOnInit(): void {
    this.booksForm = this.fb.group({
      id: [''],
      title: [''],
      author: [''],
      publisher: [''],
    })

    this.error$ = this.store.select(getBooksError)
    this.subscriptions.add(
      this.actionsSubject
        .pipe(
          ofType(addBookSuccess, bookActions.updatebooksuccess)
        )
        .subscribe(() => this.booksForm.reset())
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  onSubmit(): void {
    const book = {
      id: this.booksForm.value.id as number,
      title: this.booksForm.value.title,
      author: this.booksForm.value.author,
      publisher: this.booksForm.value.publisher
    }
    if (this.booksForm.value.id !== '') {
      return this.store.dispatch(bookActions.updatebook({ book }))

    } else {
      return this.store.dispatch(addBook({ book }))


    }



  }

}
