import {bindable} from "aurelia-framework";
import {inject} from 'aurelia-dependency-injection';
import {StudentService} from "apiServices/student-service";
import {Router} from 'aurelia-router';
import {DialogController} from 'aurelia-dialog';
import {BootstrapFormRenderer} from '../../bootstrap-form-renderer';
import {ValidationControllerFactory, ValidationController, ValidationRules, validateTrigger} from 'aurelia-validation';

@inject(Router,StudentService,DialogController,ValidationControllerFactory)
export class UserCreateUpdate{
	 
  constructor(router,studentService,dialogController,controllerFactory){
	  
	  this.dialogController = dialogController;
	  this.controller = controllerFactory.createForCurrentScope();
	  this.controller.addRenderer(new BootstrapFormRenderer());
	  this.studentService = studentService;
	  this.router=router;
	  this.user  = {};
	  this.rowData= true;
	  this.routeNavigate = null;
  }
  activate(user){
		debugger;
			
		this.user = user;
		
  }
  
  async createOrUpdateUserFn(){
	  
	  ValidationRules
		 .ensure('name').required()
		 .ensure('country').required()
		 .on(this.user);
		debugger;
		  let validationResult = await this.controller.validate();
		debugger;
			if(validationResult.valid){
		debugger;
			let response  = null;
			response = await this.studentService.create(this.user);
			debugger;
				if(response != null) {
	    			this.showMessage = response.showMessage;
		    		if(response.statusCode == 200){
		    			console.log("success");
		    			this.dialogController.ok(response);
		    			this.enableButton();
		    			
		    			debugger;
		    		}
		    		else {
						this.alertBind = true;
 					   this.resultOfAlert = false;
 					//setTimeout(() => this.alertBind = false, 2000);*/

		    			this.enableButton();
		    			console.log("failed");
			    	}
		    	}
			}
   }
  
  /*async getUserData(instructionId){
		debugger;
		let response = await this.studentService.getById(instructionId);
		debugger;
		if(response != null){
			debugger;
			if(response.statusCode == 200){
				debugger;
				this.testInstructions = response.result;
              console.log(this.testInstructions);	
              
			}else{
				debugger;
				console.log("response null");	
			}
			
			
		}else{
			
		}
		
	}
  
  async getUsersList(){
		
		let response = await this.studentService.getUsers();
			
			debugger;
			if(response != null) {
				debugger;
				this.showMessage = response.showMessage;
				if(response.statusCode == 200) {
					this.rowData= true;
					
					 this.users=response.result;
					 debugger;
					 console.log("this.users    "+this.users);
						
					 this.rowData= true;
				}
				else{
					console.log('student failed failed ');
					this.rowData= false;
				}
			}
			
			else{
				console.log('student api service call failed failed ');
				this.rowData= false;
			}
	 }*/
	 
  
}

