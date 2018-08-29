import {inject, bindable} from "aurelia-framework";
import {StudentService} from "apiServices/student-service";
import {Router} from 'aurelia-router';
@inject(Router,StudentService)
export class UserCreateUpdate{
	
  constructor(router,studentService){
			
		 this.studentService = studentService;
			this.router=router;
			this.user  = {};
			this.rowData= true;
			this.routeNavigate = null;
  }
  activate(params){
		debugger;
		if(params != null){
			debugger;
			this.user.id = params.id;
			//this.getInstrData(this.user.id);
		}else{
			this.user = {};
		}
		
	}
  async createOrUpdateUserFn(){
		
		 debugger;
			
				//this.disableButton();
				let response  = null;
				
				/*if(this.user.id){
					response = await this.studentService.update(this.user);
					//this.routeNavigate = 'UPDATE';
				}else{*/
					response = await this.studentService.create(this.user);
					//this.routeNavigate = 'CREATE';
				//}

				debugger;
				if(response != null) {
	    			this.showMessage = response.showMessage;
		    		if(response.statusCode == 200){
		    			console.log("failed");
		    			/*
		    			if(this.routeNavigate == 'CREATE'){
		    				this.router.navigate('userList');
		    			}else{
		    				this.router.navigate('instructionView/'+this.user.id);
		    			}*/
		    			
		    			debugger;
		    		}
		    		else {
						//this.alertBind = true;
 					/*this.resultOfAlert = false;
 					setTimeout(() => this.alertBind = false, 2000);*/

		    			//this.enableButton();
		    			console.log("failed");
			    	}
		    	}
			
		 
	  }
}