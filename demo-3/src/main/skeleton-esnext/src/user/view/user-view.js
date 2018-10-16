import {inject, bindable} from "aurelia-framework";
import {StudentService} from "apiServices/student-service";
import {Router} from 'aurelia-router';

				
@inject(Router, StudentService)

export class UserView{
	
	constructor(router, studentService){
		debugger;
		this.router = router;
		this.studentService = studentService;
		this.userData = {};
	}
	
	activate(params){
		debugger;
		this.userId = params.id;
		this.getuserData(this.userId );
	}
	
	
	async getuserData(userId){
		debugger;
		let response = await this.studentService.getDataById(userId);
		debugger;
		if(response != null){
			debugger;
			if(response.statusCode == 200){
				debugger;
				this.userData = response.result;
                console.log(this.userData);	
                
			}else{
				debugger;
				console.log("response null");	
			}
			
			
		}else{
			
		}
		
	}
	
	
}