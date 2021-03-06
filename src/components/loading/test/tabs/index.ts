import {Component} from '@angular/core';
import {ionicBootstrap, ActionSheet, Loading, NavController, ViewController, Platform} from '../../../../../src';


@Component({
  templateUrl: 'main.html'
})
class E2EPage {
  constructor(private nav: NavController, private platform: Platform) {}

  presentLoading() {
    let loading = Loading.create({
      spinner: 'hide',
      content: 'Loading...',
      duration: 1000
    });

    this.nav.present(loading);
  }

  presentLoadingNav() {
    let loading = Loading.create({
      content: 'Please wait...',
    });

    this.nav.present(loading);

    setTimeout(() => {
      this.nav.push(Page2);

      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    }, 1000);
  }

}

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Page 2</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>Some content</ion-content>
  `
})
class Page2 {
  constructor(private nav: NavController, private platform: Platform) {}
}

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Plain List" tabIcon="star" [root]="root1"></ion-tab>
      <ion-tab tabTitle="Schedule" tabIcon="globe" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Stopwatch" tabIcon="stopwatch" [root]="root3"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  private root1 = E2EPage;
  private root2 = Page2;
  private root3 = E2EPage;

  constructor() {

  }
}

@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
class E2EApp {
  root = TabsPage;
}

ionicBootstrap(E2EApp);
