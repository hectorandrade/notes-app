import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Note } from './note';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../services/data-local.service';
import { Router, NavigationExtras } from '@angular/router';

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
    public dataLocalService: DataLocalService,
    private router: Router,
    public alertController: AlertController
  ) {}

  search(event: any) {
    this.searchText = event.detail.value;
  }

  reorder(event: any) {
    event.detail.complete();
  }

  redirectToNote(item: Note) {
    const navigationExtras: NavigationExtras = {
      state: {
        note: item,
        isUpdate: true
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['editnote'], navigationExtras);
  }

  async archiveNote(item: Note) {
    const alert = await this.alertController.create({
      header: 'NOT AVAILABLE',
      subHeader: 'This option will be enabled soon',
      message:
        'Sorry, for time issues we could not develop this part. But this one will be available soon.',
      buttons: ['OK']
    });

    await alert.present();
  }

  deleteNote(note: Note) {
    this.dataLocalService.deleteNote(note);
  }

  async presentActionSheet(item: Note) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Note Options',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'red',
          handler: () => {
            this.deleteNote(item);
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
