import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { forkJoin, Observable,of } from 'rxjs';
import { map,mergeMap } from 'rxjs/operators';
// import { Butler } from "@services/butler.service";
import { Yeoman } from './yeoman.service';
import { AuthRESTService } from "./auth-rest.service";

export interface CardInterface {
	id?: number;
	name: string;
	identity:string;
	bornDate: string;
	active: boolean;
	imageUrl: string;
	urlImage: string;
  }

export interface PostInterface{
	id?:number;
}
 export interface PayInterface{
	id?:number;
 }

 export interface RequestInterface{
	id?:number;
 }

export interface UserInterface {
	id?:number;
}

export interface MessageInterface{
	id?:number;
}

export interface OrderInterface {
}
export interface PartInterface {
}
export interface ClientInterface {
}
export interface MessageInterface {
}
export interface ChatInterface {
}
export interface DistInterface {
}
export interface ProductInterface {
}

export interface BranchInterface {
}
export interface CarInterface {
}
export interface MemberInterface {

}




export interface TicketInterface {
}
export interface SerialInterface {
	serialT:string,
}
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	//ticket: Observable<any>;
	url:any;
	cards:any;
	orders:any;
	clients:any;
	dists:any;
	client:any;
	chat:any;
	messages:any;
	chats:any;
	cars:any;
	parts:any;
	branch:any;
	cierre:any;
	serial:any;
	transactions:any;
  	constructor(
	  	// public butler:Butler, 
		public yeoman: Yeoman,
  		private AuthRESTService:AuthRESTService,
 	 	private http: HttpClient
  	) {
		}
  	headers : HttpHeaders = new HttpHeaders({  		
		  "Content-Type":"application/json"	
	});


	// updateOrderStatus(orderId: string, newStatus: string): Observable<any> {
	// 	const url = `${this.yeoman.origin.restUrl}/orders/${orderId}`; // Reemplaza con la URL y el endpoint correctos
	// 	const body = { status: newStatus }; // Datos a enviar en el cuerpo de la solicitud
	
	// 	return this.http.put(url, body); // Realiza la solicitud PUT
	//   }

	  
	// changePassword(userId: string, newPassword: string): Observable<string> {
	// 	const url = `${this.yeoman.origin.restUrl}/api/user/changePassword`;
	// 	const requestBody = { userId, newPassword };
	
	// 	return this.http.post<string>(url, requestBody, { headers: this.headers });
	//   }

	  changePassword(userId: string, newPassword: string): Observable<any> {
		const url = `${this.yeoman.origin.restUrl}/api/UserPasswords/changePassword`;
		const data = { userId, newPassword };
		return this.http.post(url, data);
	  }


	
	deleteProduct(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}/?access_token$={token}`;
		return this.http
		.delete<PartInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	
	
	


	
	getAllProducts(){
		const url_api = this.yeoman.origin.restUrl+'/api/products';
		return this.http.get(url_api);
	}

	
	getAllCategory(){
		const url_api = this.yeoman.origin.restUrl+'/api/categories';
		return this.http.get(url_api);
	}

	
	deleteOrder(orderId: string): Observable<void> {
		const token = this.AuthRESTService.getToken();
		const url_api = `${this.yeoman.origin.restUrl}/api/orders/${orderId}/?access_token=${token}`;

		return this.http.delete<void>(url_api, { headers: this.headers });
	}
	



	
	
	


	getProduct(id: string){
		const url_api = this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http.get(url_api);
	}

	getCategory(id: string){
		const url_api = this.yeoman.origin.restUrl+ `/api/categories/${id}`;
		return this.http.get(url_api);
	}

	



	orderUpdate(order : OrderInterface , id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/orders/${id}`;
		return this.http
		.put<CarInterface>(url_api, order)
		.pipe(map(data => data));
	}
	carUpdate(car :CarInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cars/${id}`;
		return this.http
		.put<CarInterface>(url_api, car)
		.pipe(map(data => data));
	}
	
	


	
	saveProduct(product :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/products';
		return this.http
		.post<ProductInterface>(url_api, product)
		.pipe(map(data => data));
	}

	saveClient(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/clients';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	
	
	
}