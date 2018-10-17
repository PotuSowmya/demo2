import {inject, bindable} from "aurelia-framework";
import {StudentService} from "apiServices/student-service";
import {Router} from 'aurelia-router';
import {DialogService} from 'aurelia-dialog';
import {ValidationControllerFactory, ValidationController, ValidationRules, validateTrigger} from 'aurelia-validation';
import {UserCreateUpdate} from "user/createOrUpdate/user-create-update";
@inject(Router,StudentService,DialogService)
export class userList{
	
  constructor(router,studentService,dialogService){
	  this.dialogService=dialogService;
	  this.studentService = studentService;
	  this.router=router;
	  this.users = [];
	  this.rowData= true;
	  this.routeNavigate = null;
   }
  activate(params){
	  this.getUsersList();
  }
	 
 async getUsersList(){
	debugger;
		let response = await this.studentService.getUsers();
			
			debugger;
			if(response != null) {
				debugger;
				this.showMessage = response.showMessage;
				if(response.statusCode == 200) {
					this.rowData= true;
					
					 this.users=response.result;
					 debugger;
					// console.log("this.users    "+users);
						
					 this.rowData= true;
				}
				else{
					console.log('student failed failed ');
					this.rowData= false;
				}
				debugger;
			}
			
			else{
				console.log('student api service call failed failed ');
				this.rowData= false;
			}
			
			
	 }

 createUser(){

	   let user = {};

			debugger;
			 this.dialogService.open( {viewModel: UserCreateUpdate, model: user }).then(response => {
		         console.log(response);
	
	            if (!response.wasCancelled) {
	              if(response.statusCode == 200) {
	            	  debugger;
	            	  this.getUsersList();
	            	  console.log(response.output);
	              }
	              else{
	            	  console.log('create failed ');
	              }
	            } else {
	            	  debugger;
	            	console.log('Confirmation Cancelled');
	            	this.getUsersList();
	            }
	            
	       });

	}
}