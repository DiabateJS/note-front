import { Component } from '@angular/core';
import { NoteService } from './note.service';
import { NotesResponse } from './notes.response';
import { NoteResponse } from './note.response';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[];
  currentNote: Note;


  constructor(private noteService: NoteService){
      this.noteService.getNotes().subscribe((notesResponse: NotesResponse) => {
        console.log(notesResponse);
        if (!notesResponse.error){
          this.notes = notesResponse.data;
          console.log(this.notes);
        }
      });
  }

  display(id: number){
    console.log("id = "+id);
    this.noteService.getNoteById(id).subscribe((noteResponse: NoteResponse) => {
      console.log(noteResponse);
      if (!noteResponse.error){
        this.currentNote = noteResponse.data;
        console.log(this.currentNote);
      }
    });
  }

}
