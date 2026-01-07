import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {

  @Input() note!: Note;
  @Output() selectedNoteId = new EventEmitter<string>();

  onSelect(noteId: string) {
    this.selectedNoteId.emit(noteId);
  }
}
