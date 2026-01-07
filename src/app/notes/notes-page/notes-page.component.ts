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
export class NotesPageComponent implements OnInit {

  selectedNoteId: string | null = null;
  notes: Note[] | null = null;

  constructor(private noteService: NoteService){}
  
  ngOnInit(): void {
      this.noteService.getNotes();
      this.noteService.getActiveNote();
  }

  handleEditNote(note: Note): void {
    this.selectedNoteId = note.id;
  }

}
