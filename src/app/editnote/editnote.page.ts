import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.page.html',
  styleUrls: ['./editnote.page.scss']
})
export class EditnotePage implements OnInit {
  titlePage = 'Create Note';
  isReminder = false;

  note = {
    title: '',
    description: '',
    isReminder: false,
    timeReminder: ''
  };

  constructor(
    private dataLocalService: DataLocalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.note = this.router.getCurrentNavigation().extras.state.note;
        const isUpdate = this.router.getCurrentNavigation().extras.state
          .isUpdate;
        if (isUpdate) {
          this.titlePage = 'Modify Note';
        }
      }
    });
  }

  ngOnInit() {}

  setReminder(event) {
    console.log(event);
    this.isReminder = event.checked;
  }

  onSubmitTemplate() {
    this.dataLocalService.saveNote(this.note);
  }
}
