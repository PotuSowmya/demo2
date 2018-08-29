import {inject,Aurelia} from 'aurelia-framework';
import {Router} from 'aurelia-router';
@inject(Aurelia, Router)
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    this.router = router;
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'user/user-index',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

  
  }
}
