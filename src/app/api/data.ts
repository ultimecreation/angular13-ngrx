import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";

import { User } from "../models/User";
import { Book } from "../models/Books";

export class Data implements InMemoryDbService {

    createDb(): Record<string, User[] | Book[]> {
        const users: User[] = [
            { id: 0, username: 'Test 1', isAdmin: false },
            { id: 1, username: 'Test 2', isAdmin: true },
        ]
        const books: Book[] = [
            { id: 0, title: 'Book 1', author: 'Sarthe', publisher: 'publisher 1' },
            { id: 1, title: 'Book 2', author: 'Racine', publisher: 'publisher 2' },
        ]
        return { users, books }
    }

    genId(books: Book[]): number {
        return books.length > 0
            ? Math.max(...books.map(book => book.id)) + 1
            : 1
    }
}