import { Routes } from '@angular/router';
import { NotesPageComponent } from './notes/notes-page/notes-page.component';

export const routes: Routes = [
    {path: '', redirectTo: "notes", pathMatch: "full"},
{ path: "notes", component: NotesPageComponent },
{ path: "notes/:id", component: NotesPageComponent }
];
