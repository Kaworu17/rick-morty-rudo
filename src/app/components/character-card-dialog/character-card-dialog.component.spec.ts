import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardDialogComponent } from './character-card-dialog.component';
import { Character } from '../../models/character.model';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

describe('CharacterCardDialogComponent', () => {
  let component: CharacterCardDialogComponent;
  let fixture: ComponentFixture<CharacterCardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCardDialogComponent],
      providers: [MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }],
    });
    fixture = TestBed.createComponent(CharacterCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
