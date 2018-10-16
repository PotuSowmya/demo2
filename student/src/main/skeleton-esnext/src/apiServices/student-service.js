import {inject} from 'aurelia-framework';
import {ApiServiceUtil} from '../util/api-service-util'

@inject(ApiServiceUtil)


export class StudentService{
	
		constructor(apiServiceUtil) {
			this.apiServiceUtil = apiServiceUtil;
			console.log("Student API services");
		}
		
		async create(data){
		 		
			debugger;
			var response = await this.apiServiceUtil.fetch('api.module.user.create', data  , 'post', true);
			return response;
		}
		
		async update(data){
			debugger;
			var response = await this.apiServiceUtil.fetch('api.module.user.update', data  , 'post', true);
			return response;
		}
		
		/*async getList(gridOptions){
			debugger;
			var response = await this.apiServiceUtil.fetch('api.module.branches.list', gridOptions  , 'post', true);
			return response;
		}*/
		
		async getById(id){
			debugger;
			var response = await this.apiServiceUtil.fetch('api.module.user.get', id  , 'get', true);
			
			return response;
		}
		
		async getUsers(){
			debugger;
			var response = await this.apiServiceUtil.fetch('api.module.user.getUsers', ''  , 'get', true);
			
			return response;
		}
		
	     
	}
