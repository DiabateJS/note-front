import { Note } from './note';

export interface NotesResponse {
  data: Note[],
  error: boolean,
  message: string
}