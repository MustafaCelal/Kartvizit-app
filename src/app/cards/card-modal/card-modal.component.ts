import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css'],
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private matSnackBar: MatSnackBar,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {}

  ngOnInit(): void {
    // console.log(this.data);

    this.cardForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.maxLength(50)],
      title: [
        this.data?.title || '',
        [Validators.required, Validators.maxLength(255)],
      ],
      phone: [
        this.data?.phone || '',
        [Validators.required, Validators.maxLength(20)],
      ],
      email: [
        this.data?.email || '',
        [Validators.email, Validators.maxLength(50)],
      ],
      address: [this.data?.address || '', Validators.maxLength(255)],
    });
  }

  addCard(): void {
    this.showSpinner = true;
    console.log(this.cardForm.value);
    this.cardService.addCards(this.cardForm.value).subscribe(
      (res: any) => {
        this.getSuccess(res || 'Kartvizit başarıyla eklendi mi?');
      },
      (err: any) => {
        this.getError(err.message || 'Kartvizit eklenemedi mi?');
      }
    );
  }

  updateCard(): void {
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe(
      (res) => {
        this.getSuccess(res || 'Kartvizit başarıyla düzenlendi mi?');
      },
      (err: any) => {
        this.getError(err.message || 'Kartvizit düzenlenemedi mi?');
      }
    );
  }

  deleteCard(): void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.data.id).subscribe(
      (res: any) => {
        this.getSuccess(res || 'Kartvizit başarıyla silindi mi?');
      },
      (err: any) => {
        this.getError(err.message || 'Kartvizit silinemedi mi?');
      }
    );
  }

  getSuccess(message: string) {
    this.snackbarService.createSnackbar('success', message);

    this.cardService.getCards();
    this.showSpinner = false;
    this.dialogRef.close();
  }
  getError(message: string) {
    this.snackbarService.createSnackbar('error', message);
    this.showSpinner = false;
  }
}
