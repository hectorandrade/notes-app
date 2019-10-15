import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.page.html',
  styleUrls: ['./editnote.page.scss']
})
export class EditnotePage implements OnInit {
  isReminder = false;

  note = {
    title: '',
    description: '',
    isReminder: false,
    timeReminder: ''
  };

  constructor(private dataLocalService: DataLocalService) {}

  ngOnInit() {}

  setReminder(event) {
    console.log(event);
    this.isReminder = event.checked;
  }

  onSubmitTemplate() {
    this.dataLocalService.saveNote(this.note);
  }
}
