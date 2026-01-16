import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private selectedNoteId: string | null = null;

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

  getActiveNotes(): Note[] {
    return this.notes.filter((note) => !note.isArchived);
  }

  getActiveNoteCount(): number {
    return this.getActiveNotes().length;
  }

  getTotalNoteCount(): number {
    return this.notes.length;
  }

  getSelectedNote(): Note | null {
    return this.notes.find((note) => note.id === this.selectedNoteId) ?? null;
  }

  selectNote(id: string): void {
    this.selectedNoteId = id;
  }

  cancelSelected(): void {
    this.selectedNoteId = null;
  }

  getArchivedNotes(): Note[] {
    return this.notes.filter(n => n.isArchived);
  }

  getArchiveCount(): number {
    return this.getArchivedNotes().length;
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
    this.selectedNoteId = newNote.id;
    return newNote;
  }

  updateNote(updatedNote: Note): void {
    this.notes = this.notes.map((note) => note.id === updatedNote.id ? { ...updatedNote, updatedAt: new Date() } : note);
    this.save();
  }

  archiveNote(noteId: string) {
    this.notes = this.notes.map((note) =>
      note.id === noteId
      ? {...note, isArchived: !note.isArchived}
      : note
    );
    if(this.selectedNoteId === noteId) {
      this.selectedNoteId = null;
    }
    this.save();
  }

  deleteNote(noteId: string): void {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    if(this.selectedNoteId === noteId) {
      this.selectedNoteId = null;
    }
    this.save();
  }

  resetData(): void {
    localStorage.removeItem('noteData');
    this.load();
  }

}
