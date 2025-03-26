import { Note } from './note';

export interface NoteResponse {
  error: boolean,
  data: Note;
  message: String;
}