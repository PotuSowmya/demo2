import {inject,Aurelia} from 'aurelia-framework';
import {Router} from 'aurelia-router';
@inject(Aurelia, Router)
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';

    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'user', name: 'userIndex',  moduleId: 'user/user-index', nav: true, title: 'user'}
       
      ]);

    this.router = router;
  }
}
