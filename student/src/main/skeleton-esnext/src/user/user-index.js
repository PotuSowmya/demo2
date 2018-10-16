export class UserIndex {
  heading = 'Child Router';

	 configureRouter(config, router) {
		    this.router = router;
		    config.title = 'user';
		    config.map([
		      { route: ['','userList'], href:'userList', name: 'userList', moduleId: 'user/list/user-list',nav: false,breadcrumb: true,title:'List' }
		    ]);

  
  }
}