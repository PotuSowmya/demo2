import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {AureliaConfiguration} from 'aurelia-configuration';
//import {AuthService} from 'aurelia-authentication';
//import * as nprogress from 'nprogress';
import {LoaderFlag} from 'resources/loader-flag';


@inject(AureliaConfiguration, HttpClient,LoaderFlag)
export class ApiServiceUtil{

	
	constructor(config, httpClient,loaderFlag){
		
		console.log("hello am in api service util");
		this.config = config;

		//this.authService = authService;
		
		this.loaderFlag = loaderFlag;


	httpClient.configure(config => {
      config
        .withInterceptor({

	      responseError(error) {
	    	  console.log("responseError"+error)
	      }
	    })
        .useStandardConfiguration()
        .withBaseUrl(this.url)
        .withDefaults({
            credentials: 'include' // required to include cookie in request
           
        });
    });

		this.httpClient = httpClient;
	}



	async fetch(target, data, method,loaderFlag){

		let fullUrl = this.getEndPointUrl(target);
		
		let jsonData = null;

		try{
			if(loaderFlag)
				this.showLoader();
			if(method == undefined || method == null){
				method = 'get';
			} 

		/*	console.log("authService in ApiServiceUtil:"+this.authService);
			if(this.authService == false){
				console.log("user is not loggin,.pls loing");
				alert("you are not loggedin");

			}else{
				console.log("this.authService.getAccessToken():"+this.authService.getAccessToken());
			}*/
			debugger;

			let responseData = null;
			if(method == 'get')
			{
				debugger;
				responseData = await this.httpClient.fetch(data==null?fullUrl:fullUrl+"/"+data, 
				{
	                 method: method,        
	                 headers: {
	                   'content-type': 'application/json',
	                   
	                  // 	"X-Authorization" :"Bearer "+this.authService.getAccessToken()
	                   
	                 }
	                 
	              }
				);
			}else
			{
				debugger;
				responseData = await this.httpClient.fetch(fullUrl, 
				{
	                 method: method,        
	                 headers: {
	                   'content-type': 'application/json',
	                   
	                 //  'X-Authorization' :"Bearer "+this.authService.getAccessToken()
	                  
	                 },
	                 body: data == null || data == undefined?'':JSON.stringify(data)
	                 
	              }
				);
			}
			
			if(responseData.ok){
				jsonData = responseData.json();
			}else{
				debugger;
				console.log("call failed:"+responseData.status+", "+responseData.statusText);
			}
		}catch(error){
			debugger;
			if(loaderFlag)
				this.hideLoader();
			console.log("Fetch Error:"+error);
		}
		debugger;
		if(loaderFlag)
			this.hideLoader();
		return jsonData;
	}
	
	
/*	async fetchUpload(target, data, method){
debugger;
		let fullUrl = this.getEndPointUrl(target);

		let jsonData = null;
		debugger;
		try{
			this.showLoader();
			if(method == undefined || method == null){
				method = 'get';
			}
			console.log("authService in ApiServiceUtil:"+this.authService);
			if(this.authService == false){
				console.log("user is not loggin,.pls loing");
				alert("you are not loggedin");

			}else{
				console.log("this.authService.getAccessToken():"+this.authService.getAccessToken());
			}
			debugger;

			let responseData = null;
			if(method == 'get')
			{
				debugger;
				responseData = await this.httpClient.fetch(data==null?fullUrl:fullUrl+"/"+data, 
				{
	                 method: method,        
	                 headers: {
	                 
	                   
	                   	//"X-Authorization" :"Bearer "+this.authService.getAccessToken()
	                   
	                 }
	                 
	              }
				);
			}else
			{
				debugger;
				responseData = await this.httpClient.fetch(fullUrl, 
				{
	                 method: method,        
	                 headers: {
	                   
	                   
	                   'X-Authorization' :"Bearer "+this.authService.getAccessToken()
	                  
	                 },
	                 body: data == null || data == undefined?'':data
	                 
	              }
				); 
			}

			
			
			if(responseData.ok){
				jsonData = responseData.json();
			}else{
				console.log("call failed:"+responseData.status+", "+responseData.statusText);
			}
		}catch(error){
			this.hideLoader();
			console.log(error);
		}
		this.hideLoader();
		return jsonData;
	}
	
	
	async fetchDownload(target, data, method){

		let fullUrl = this.getEndPointUrl(target);

		let jsonData = null;

		try{
			this.showLoader();
			if(method == undefined || method == null){
				method = 'get';
			}

			console.log("authService in ApiServiceUtil:"+this.authService);
			if(this.authService == false){
				console.log("user is not loggin,.pls loing");
				alert("you are not loggedin");

			}else{
				console.log("this.authService.getAccessToken():"+this.authService.getAccessToken());
			}
			debugger;

			let responseData = null;
			if(method == 'get')
			{
				debugger;
				responseData = await this.httpClient.fetch(data==null?fullUrl:fullUrl+"/"+data, 
				{
	                 method: method,        
	                 headers: {
	                 
	                   
	                   	"X-Authorization" :"Bearer "+this.authService.getAccessToken()
	                   
	                 }
	                 
	              }
				);
			}else
			{
				debugger;
				responseData = await this.httpClient.fetch(fullUrl, 
				{
	                 method: method,        
	                 headers: {
	                  	 'content-type': 'application/json',
	                   
	                   'X-Authorization' :"Bearer "+this.authService.getAccessToken()
	                  
	                 },
	                 body: data == null || data == undefined?'':JSON.stringify(data)
	                 
	              }
				);
			}
			
			if(responseData.ok){
				jsonData = responseData.blob();
			}else{
				console.log("call failed:"+responseData.status+", "+responseData.statusText);
			}
		}catch(error){
			this.hideLoader();
			console.log(error);
		}
		this.hideLoader();
		return jsonData;
	}*/
	

	getEndPointUrl(target){

		let url = this.config.get(target);

		let splitKey = target.split('.');

		let configValue = undefined;

		if(splitKey.length > 2){
			let objList = url;
			for(let i=2;i<splitKey.length && objList != undefined ;i++){
				objList = objList[splitKey[i]];
			}
			configValue = objList;
		}else{
			configValue = url;
		}
		debugger;
		let appPath = this.config.get("api.appPath");
		let host  = this.config.get("api.endpoint");
		let hostNameInUrl = null;
		let fullUrl = null;
		let port = null;
		if(host != null && host != ""){
			debugger;
			if(appPath != null && appPath != ''){
				fullUrl = host + appPath + configValue;
			}else{
				fullUrl = host + configValue;
			}
		}else{
			debugger;
			hostNameInUrl = window.location.hostname;
			port = window.location.port;
			fullUrl = window.location.protocol + "//" + hostNameInUrl;
			if(port != ""){
				fullUrl += ":"+ port;
			}
			if(appPath != null && appPath != ""){
				fullUrl += appPath;
			}
			fullUrl += configValue;
		}
		return fullUrl;
	}
	
	hideLoader() {
		this.loaderFlag.end();
	}
	
	showLoader() {
		this.loaderFlag.start();
	}

}