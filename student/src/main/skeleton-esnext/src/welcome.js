//import {computedFrom} from 'aurelia-framework';
//import {inject} from 'aurelia-framework';
//import {StudentApiServices} from 'apiServices/student-api/student-api-services';
//import {DialogController} from 'aurelia-dialog';
//@inject(StudentApiServices)
export class Welcome {
 /* constructor(dialogController,studentApiServices){
	  this.studentApiServices=studentApiServices;
	 // this.dialogController=dialogController;
	  this.student={};
  }
  
  async createStudentFn(){
	  
		let response = await this.studentApiServices.create(this.student);
		console.log("response "+response)
		debugger;
		if(response != null) {
    		if(response.statusCode == 200){
				this.alertMessage = response.showMessage;
				this.alertStatusCode = response.statusCode;
    			//this.enableButton();
    			//this.dialogController.ok(response);
    		}
    		else {
    			this.alertMessage = response.showMessage;
				this.alertStatusCode = response.statusCode;
				//this.enableButton();
	    	}
    	}
	
  }
  
}*/
//heading = 'Welcome to the Aurelia Navigation App!';
firstName = 'John';
lastName = 'Doe';
previousValue = this.fullName;

//Getters can't be directly observed, so they must be dirty checked.
//However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
//To optimize by declaring the properties that this getter is computed from, uncomment the line below
//as well as the corresponding import above.
//@computedFrom('firstName', 'lastName')
get fullName() {
  return `${this.firstName} ${this.lastName}`;
}

submit() {
  this.previousValue = this.fullName;
  alert(`Welcome, ${this.fullName}!`);
}

canDeactivate() {
  if (this.fullName !== this.previousValue) {
    return confirm('Are you sure you want to leave?');
  }
}
}

export class UpperValueConverter {
toView(value) {
  return value && value.toUpperCase();
}
}