import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../notes/note';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  savedNotes: Note[] = [];
  constructor(private storage: Storage) {
    this.loadNotes();
  }

  saveNote(note: Note) {
    const exist = this.savedNotes.find(
      savedNote => savedNote.title === note.title
    );
    if (!exist) {
      this.savedNotes.unshift(note);
      this.storage.set('notes', this.savedNotes);
    }
  }

  async loadNotes() {
    const notesFound = await this.storage.get('notes');
    if (notesFound) {
      this.savedNotes = notesFound;
    }
  }

  async deleteNote(note: Note) {
    const indexNote = this.savedNotes.indexOf(note);
    if (indexNote !== -1) {
      this.savedNotes.splice(indexNote, 1);
    }
    this.storage.set('notes', this.savedNotes);
  }
}
