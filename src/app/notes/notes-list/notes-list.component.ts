import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { CommonModule } from '@angular/common';
import { NoteViewMode } from '../notes-page/notes-page.component';

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
  @Input() noteCount!: number;
  @Input() archiveCount!: number;
  @Input() activeCount!: number;
  @Output() viewMode = new EventEmitter<NoteViewMode>();
  @Output() select = new EventEmitter<string>();
  @Output() create = new EventEmitter<null>();
  @Output() archive = new EventEmitter<string>();
  @Output() resetAll = new EventEmitter<null>();
}
