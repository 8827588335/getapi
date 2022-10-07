import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users: any;
  url = "http://localhost:4000/";
  user: any;
  newUser: any;
  customer: any;
  constructor(private http: HttpClient) { }

  getallusers() {
    console.log("function is here")
    this.http.get(this.url + 'getallcustomer').subscribe((data: any) => {
      console.log("all users data is here", data);
      console.log("user data is here", data.userdata);
      this.customer = data.userdata;
    })
  }
  //back end se data front end(UI:user interface) me lane ke liy code 
  // getallusers(){
  //   this.userData.getallusers().subscribe((data: any)=>{
  //     this.newusers =data;
  //   })
  // }


  //front end se data back end me bhejne ke liy code
  postUserFormData(data: any) {
    console.log(data)
    console.log("function is working",data)
    // let newData={
    //   id:201,    //ager data with value code se bhejnna hai to aise code karege
    //   name:'kapil',
    //   email:"email1",
    //   phone:7874869
    // }
    this.http.post(this.url + 'addcustomer',data).subscribe((data: any) => {
      console.log("all users are here",data)
      this.customer = data;

    })
     this.getallusers()//post data(postUserFormData) our get data(getallusers) ka function ek sath chal raha h is code ne
  }
  


  //frontend(user interface) se table ka data,database se API ke throw ek click karne par delete karen ke liy code
  delete(id: any) {
    var data={
      id: id,
    }
    console.log("Row is deleted",data)
    this.http.post(this.url + 'deletecustomer',data).subscribe((data: any) => {
      console.log(`res.status`);
      this.customer = data;
      console.log("Row is deleted",data)
    })
    this.getallusers()
  }

  //frontend(user interface) se table ka data,database se API ke throw ek click karne par update karne karen ke liy code
  updatequery(data: any) {
    console.log("update is working",data)
    this.http.post(this.url + 'updatecustomer',data).subscribe((data: any) => {
      console.log("i am here",data)
      this.customer = data;
    })
    this.getallusers()
  }

  ngOnInit(): void {
  }

}
