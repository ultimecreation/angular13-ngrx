import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './state/reducer';
import { User } from './models/User';
import { getError, getIsLoaded, getUser, getUsers } from './state/selectors';
import { loadUsers, RootActions } from './state/actions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable<User> = {} as Observable<User>
  public users$!: Observable<User[]>
  public isLoading$!: Observable<boolean>
  public error$!: Observable<HttpErrorResponse | Error | string | undefined>
  constructor(private store: Store<State>, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.store.dispatch(RootActions.initApp())
    // this.user = this.store.select((state: any) => state.root.user)
    this.user = this.store.pipe(select(getUser))
    this.users$ = this.store.pipe(select(getUsers))
    this.isLoading$ = this.store.pipe(select(getIsLoaded))
    this.error$ = this.store.pipe(select(getError))
  }

  public changeUsername() {
    this.store.dispatch(RootActions.changeusername({ username: 'Nas' }))
    // this.store.dispatch(changeIsAdmin({ isAdmin: true }))
  }

  loadUsers(): void {
    this.store.dispatch(loadUsers())
  }
}
