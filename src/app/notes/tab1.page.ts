import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Note } from './note';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  notes: Note[] = [];
  searchText = '';

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    public dataLocalService: DataLocalService
  ) {}

  search(event: any) {
    this.searchText = event.detail.value;
  }

  reorder(event: any) {
    event.detail.complete();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'red',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
            this.socialSharing.share(
              'Title : A note was shared with you',
              'Subject: This note was share with you.',
              'https://ionicframework.com/docs/native/social-sharing'
            );
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
