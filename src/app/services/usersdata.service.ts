import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  updateuser(data: any) {
    throw new Error('Method not implemented.');
  }
url ="http://localhost:3000/";
  constructor(private http:HttpClient) {}

  users(){
    console.log("Bhai me users function hun or me chal raha hu");
    return this.http.get(this.url);
  }
  //data base se front end me data lane ke liy aise function banate hai
  getallusers(){
    console.log("Bhai me chal raha hu")
    return this.http.get(this.url+'getallusers');
  }


  //frount end se form data ko database me bhejne ke liy  aise function banate hai 
  addUser(data:any){
    console.log("service is working")
    return this.http.post(this.url+'adduser',data);
  }


  //frontend(UI:User Interface) se form data ko database se delete karne ke liy aise function banate hai
  deleteuser(data:any){
    console.log("Row is deleted")
    return this.http.post(this.url+'deleteuser',data);
  }

//frontend(UI:User Interface) se form data ko database me  update  karne ke liy aise function banate hai
  updatequery(data: any){
    console.log("update is is working")
    return this.http.post(this.url+'updateuser',data);
  }

  
}
