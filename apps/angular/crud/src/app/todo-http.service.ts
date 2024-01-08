import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  TODO_REQ_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodoList() {
    return this.http.get<TodoItem[]>(this.TODO_REQ_URL);
  }

  updateTodoItem(id: number, body: { [key: string]: unknown }) {
    return this.http.put<TodoItem>(
      `${this.TODO_REQ_URL}/${id}`,
      JSON.stringify(body),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }
}
