import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NotesResponse } from './notes.response';
import { NoteResponse } from './note.response';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  urlBase: string = "";
  constructor(private http: HttpClient) {
    this.urlBase = "http://localhost:85/note-api/index.php?";
  }

  getNotes(): Observable<NotesResponse> {
    const url = this.urlBase + "entity=note&method=getall&params=";
    return this.http.get<NotesResponse>(url);
  }

  getNoteById(id): Observable<NoteResponse>{
    const url = this.urlBase + "entity=note&method=get&params="+id;
    return this.http.get<NoteResponse>(url);
  }
}
