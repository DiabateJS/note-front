import { Component } from '@angular/core';
import { NoteService } from './note.service';
import { CategorieService } from './categorie.service';
import { NotesResponse } from './notes.response';
import { NoteResponse } from './note.response';
import { Note } from './note';
import { Categorie } from './categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[];
  categories: Categorie[];
  currentNote: Note;
  isDisplayNote: boolean = true;
  isCreateNote: boolean = false;


  constructor(private noteService: NoteService,
              private categorieService: CategorieService
  ){
      this.noteService.getNotes().subscribe((notesResponse: NotesResponse) => {
        console.log(notesResponse);
        if (!notesResponse.error){
          this.notes = notesResponse.data;
          console.log(this.notes);
        }
      });
      this.categorieService.getCategories().subscribe(categories => {
        this.categories = categories;
        console.log(categories);
      });
  }

  display(id: number){
    this.isDisplayNote = true;
    this.isCreateNote = false;
    console.log("id = "+id);
    this.noteService.getNoteById(id).subscribe((noteResponse: NoteResponse) => {
      console.log(noteResponse);
      if (!noteResponse.error){
        this.currentNote = noteResponse.data;
        console.log(this.currentNote);
      }
    });
  }

  displayCreateNoteForm(){
    this.isCreateNote = true;
    this.isDisplayNote = false;
  }

  doDeleteNote(){
  }

}
