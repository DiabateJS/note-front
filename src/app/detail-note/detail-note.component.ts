import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.component.html',
  styleUrls: ['./detail-note.component.css']
})
export class DetailNoteComponent implements OnInit {

  @Input()
  note: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
