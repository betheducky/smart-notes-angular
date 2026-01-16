import { Component, OnInit } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NoteService } from '../../core/services/note.service';
import { NotesEditorComponent } from '../notes-editor/notes-editor.component';
import { NotesListComponent } from '../notes-list/notes-list.component';

export type NoteViewMode = 'active' | 'all' | 'archived';


@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [
    NotesEditorComponent,
    NotesListComponent
  ],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss'
})

export class NotesPageComponent {

  viewMode: NoteViewMode = 'active';

  constructor(private noteService: NoteService){}
  

  get visibleNotes() {
    switch(this.viewMode) {
      case 'all':
        return this.allNotes;
      case 'archived':
        return this.archivedNotes;
      default:
        return this.activeNotes;
    }
  }

  onViewChange(view: NoteViewMode) {
    this.viewMode = view;
  }

  get allNotes() {
    return this.noteService.getNotes();
  }

  get activeNotes() {
    return this.noteService.getActiveNotes();
  }

  get selectedNote() {
    return this.noteService.getSelectedNote();
  }

  get archivedNotes() {
    return this.noteService.getArchivedNotes();
  }

  get totalNoteCount() {
    return this.noteService.getTotalNoteCount();
  }

  get totalArchiveCount() {
    return this.noteService.getArchiveCount();
  }

  get totalActiveCount() {
    return this.noteService.getActiveNoteCount();
  }

  onSelect(id: string) {
    this.noteService.selectNote(id);
  }

  onCreate() {
    this.noteService.createNote();
  }

  onArchive(id: string) {
    this.noteService.archiveNote(id);
  }

  onSave(note: Note) {
    this.noteService.updateNote(note);
  }

  onDelete(id: string) {
    this.noteService.deleteNote(id);
  }

  onCancel() {
    this.noteService.cancelSelected();
  }

  onReset() {
    this.noteService.resetData();
  }

}
