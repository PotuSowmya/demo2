export class LoaderFlag{
	
	loaderActive = false;	

	start(){
		debugger;
		// document.getElementById("loader-block").style.display = 'block';
		this.loaderActive = true;
		
	}
	
	end(){
		debugger;
		//document.getElementById("loader-block").style.display = 'none';
		this.loaderActive = false;
		
	}
}