export class UserIndex {
  heading = 'Child Router';

	 configureRouter(config, router) {
		    this.router = router;
		    config.title = 'user';
		    config.map([
		      { route: ['','userList'], href:'userList', name: 'userList', moduleId: 'user/list/users',nav: false,title:'List' },
		      { route: 'userCreate', name: 'userCreate', moduleId: 'user/createOrUpdate/user-create-update', nav: false,title:'Create'},
		      { route: 'userUpdate/:id?', href:'userUpdate', name: 'userUpdate', moduleId: 'user/createOrUpdate/user-create-update', nav: false, title:'Update'},
		      { route: 'userView/:id?', href:'userView', name: 'userView', moduleId: 'user/view/user-view',nav: false, title:'View'}
		   ]);

  
  }
}