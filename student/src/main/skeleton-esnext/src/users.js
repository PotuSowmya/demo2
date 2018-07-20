import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

let httpClient = new HttpClient();
export class Users {
  heading = 'Github Users';
 
constructor(){
	 this.users = [];
}
 /* constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:7777/api/student/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('create')
      .then(response => response.json())
      .then(users => this.users = users);
  }*/
 /* myPostData = {"id":"3",
	"name":"sss2",

	"country":"India"}
		
	   postData(myPostData) {
	      httpClient.fetch('http://localhost:7777/api/student/create', {
	         method: "POST",
	         headers: {
                 'content-type': 'application/json',
	         },
	         body: data == null || data == undefined?'':JSON.stringify(data)
	      })
			
	      .then(response => response.json())
	      .then(data => {
	         console.log(data);
	      });
	   }*/
  
  getData() {
      httpClient.fetch('http://localhost:7777/api/student/get')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         debugger;
        
         this.users=data;
         console.log("users"+this.users);
        return  this.users;
      });
      debugger;
     
      //
   }

  
}
