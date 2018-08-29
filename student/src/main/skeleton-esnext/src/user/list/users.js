import {inject, bindable} from "aurelia-framework";
import {StudentService} from "apiServices/student-service";


@inject(StudentService)

export class Users{
 constructor(studentService){
	
	 this.studentService = studentService;
	 //this.router=router;	
	 this.users = [];
	 this.rowData= true;
	
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
 }
 
 
 

 
 
}