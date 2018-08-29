export class UserIndex {
  //heading = 'Child Router';

  configureRouter(config, router) {
	  this.router = router;
		debugger;
    config.map([
    	{ route: ['','userList'], href:'userList', name: 'userList', moduleId: 'user/list/users',nav: false,title:'List' },
        { route: 'usersCreate',name: 'usersCreate', moduleId: 'user/createOrUpdate/user-create-update',nav: false, title:'Create'}
       /* { route: 'userUpdate/:id?', href:'userUpdate', name: 'userUpdate', moduleId: 'user/createOrUpdate/user-create-update', title:'Update'}*/
    ]);

  
  }
}