import { Component } from '@angular/core';
import { Character } from 'src/app/models/api-response.model';
import { Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-character-card-dialog',
  templateUrl: './character-card-dialog.component.html',
  styleUrls: ['./character-card-dialog.component.less'],
})
export class CharacterCardDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Character) {}
}
