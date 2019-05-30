import { Component } from '@angular/core';
import{Router}from '@angular/router'
import{CryptoService} from './crypto.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

 

  book:string="two states";
 // username:string
 // pasword:string

 coursename: string ="Angular"
 dates:string="12.04.2019"
 purchaseDate: string = "1/17/2018"

 product: Object = {
  "productCode": "PROD_P001", "productName": "Laptop", "productPrice": 25000,
  "purchaseDate": "5/12/2017", "productTax": "0.1", "productRating": 4.53
};


 changename(){

this.coursename ="TYPESCRIPT";


 }
coins= [];
  constructor(private router:Router, private cryptoservice:CryptoService){

    this.coins=this.cryptoservice.getItems();
  }



  //onSubmit(form){
   
//console.log(form.value)

//var username=form.value.username
//console.log(username)
//var pasword= form.value.password
//console.log(pasword)

//if(username =='admin' && pasword =="admin"){

//this.router.navigate(['dashboard'])

}

  //}







//}
