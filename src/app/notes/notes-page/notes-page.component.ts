import { Component, OnInit } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NoteService } from '../../core/services/note.service';
import { NotesEditorComponent } from '../notes-editor/notes-editor.component';
import { NotesListComponent } from '../notes-list/notes-list.component';


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

  constructor(private noteService: NoteService){}
  

  get notes() {
    return this.noteService.getNotes();
  }

  get totalNoteCount() {
    return this.noteService.getTotalNoteCount();
  }

  get activeNote() {
    return this.noteService.getActiveNote();
  }

  get archivedNotes() {
    return this.noteService.getArchivedNotes();
  }

  get totalArchiveCount() {
    return this.noteService.getArchiveCount();
  }

  onSelect(id: string) {
    this.noteService.selectNote(id);
  }

  onCreate() {
    this.noteService.createNote();
  }

  onToggleArchive(id: string) {
    this.noteService.toggleArchive(id);
  }

  onSave(note: Note) {
    this.noteService.updateNote(note);
  }

  onDelete(id: string) {
    this.noteService.deleteNote(id);
  }


}
