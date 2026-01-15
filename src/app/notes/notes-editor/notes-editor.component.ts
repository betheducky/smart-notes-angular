import { Component, OnChanges, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Note } from '../../core/models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './notes-editor.component.html',
  styleUrl: './notes-editor.component.scss'
})
export class NotesEditorComponent implements OnChanges {

  @Input() note:Note | null = null;
  @Output() save = new EventEmitter<Note>();
  @Output() delete = new EventEmitter<string>();

  form?: FormGroup;
  private draft!: Note;
  isDirty: boolean = false;

  ngOnChanges() {
      if(!this.note) return;

      this.draft = structuredClone(this.note);

      this.form = new FormGroup({
        title: new FormControl(this.draft.title),
        content: new FormControl(this.draft.content)
      });

      this.form.valueChanges.subscribe(() => {
        this.isDirty = true;
      });
  }

  onSave() {
    if (!this.draft) return;
      
      const updatedNote: Note = {
        ...this.draft,
        ...this.form!.value,
        updatedAt: new Date()
    }

    this.save.emit(updatedNote);
    this.isDirty = false;

    this.draft = structuredClone(updatedNote);
  }
}
