import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import * as UserActions from "./actions";
import { UsersService } from "../services/users/users.service";
import { User } from "../models/User";

@Injectable()
export class AppEffects {

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            mergeMap(action => this.usersService.getUsers().pipe(
                map((users: User[]) => UserActions.loadUsersSuccess({ users })),
                catchError((error) => of(UserActions.loadUsersFailure({ error: error.body.error })))
            ))
        )
    )

    constructor(private actions$: Actions, private usersService: UsersService) { }
}