import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private activeNoteId: string | null = null;

  constructor() {
    this.load();
  }

  load(): void {
    const data = localStorage.getItem('noteData');
    this.notes = data ? JSON.parse(data) : [];
  }

  save(): void {
    localStorage.setItem('noteData', JSON.stringify(this.notes));
  }

  getNotes(): Note[] {
    return this.notes;
  }

  getTotalNoteCount(): number {
    return this.notes.length;
  }

  getActiveNote(): Note | null {
    return this.notes.find((note) => note.id === this.activeNoteId) ?? null;
  }

  selectNote(id: string): void {
    this.activeNoteId = id;
  }

  getArchivedNotes(): Note[] {
    return this.notes.filter(n => n.isArchived);
  }

  getArchiveCount(): number {
    return this.getArchivedNotes.length;
  }

  createNote(): Note {
    const newNote = {
      id: uuidv4(),
      title: "New Note",
      content: "Description of new note...",
      isArchived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.notes.push(newNote);
    this.save();
    this.activeNoteId = newNote.id;
    return newNote;
  }

  updateNote(updatedNote: Note): void {
    this.notes = this.notes.map((note) => note.id === updatedNote.id ? { ...updatedNote, updatedAt: new Date() } : note);
    this.save();
  }

  toggleArchive(noteId: string) {
    this.notes = this.notes.map((note) =>
      note.id === noteId
      ? {...note, isArchived: !note.isArchived}
      : note
    );
    if(this.activeNoteId === noteId) {
      this.activeNoteId = null;
    }
    this.save();
  }

  deleteNote(noteId: string): void {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    if(this.activeNoteId === noteId) {
      this.activeNoteId = null;
    }
    this.save();
  }

  resetData(): void {
    localStorage.removeItem('noteData');
  }

}
