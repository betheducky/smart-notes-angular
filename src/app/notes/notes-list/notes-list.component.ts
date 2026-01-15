import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {

  @Input() notes: Note[] = [];
  @Input() activeNoteId?: string;
  @Output() select = new EventEmitter<string>();
  @Output() create = new EventEmitter<Note>();
  @Output() archive = new EventEmitter<string>();
}
