import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  users: any;
  newuser: any;
  url = "http://localhost:5000/";
  user: any;
  newUser: any;
  simpleForm: any;
  constructor(private http: HttpClient) { }

  getuser(id: any) {
    console.log("user is here")
    this.http.get(this.url + 'getuser/' + id).subscribe((id: any) => {
      console.log("get user in form", id)
      if (id.success == 1) {
        alert("get user successfully");
        // this.simpleForm.controls['id'].setValue(305)
        // console.log("i am here")
        this.simpleForm.patchValue({
          id: 302
        })
      }
      else {
        alert(id.message)
      }

    }, (error) => {

      console.log("In error block", error);
      alert(error.error.message)
    })
  }



  getallusers() {
    console.log("function is here")
    this.http.get(this.url + 'getalluser').subscribe((data: any) => {
      console.log("Response get all users in table", data);
      if (data.success == 1) {
        // alert("get all users successfully");
        this.newuser = data.data;
        //  this.getallusers()//
      }
      else {
        alert(data.message)
      }

    }, (error) => {

      console.log("In error block", error);
      alert(error.error.message)
      // this.newuser = data.userdata;
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
    console.log("function is working", data)
    // let newData={
    //   id:201,    //ager data with value code se bhejnna hai to aise code karege
    //   name:'kapil',
    //   email:"email1",
    //   phone:7874869
    // }
    this.http.post(this.url + 'adduser', data).subscribe((response: any) => {
      console.log("Response of add user is here", response);
      console.log("status", response.status);
      console.log("success", response.success);
      console.log("Message", response.message)
      if (response.success == 1) {
        alert("user is added successfully");
        this.getallusers()
      }
      else {
        alert(response.message)
      }
    }, (error) => {
      console.log("In error block", error);
      alert(error.error.message)
    })
    // this.getallusers()//post data(postUserFormData) our get data(getallusers) ka function ek sath chal raha h is code ne
  }



  //frontend(user interface) se table ka data,database se API ke throw ek click karne par delete karen ke liy code
  delete(id: any) {
    var data = {
      id: id,
    }
    console.log("Row is deleted", data)
    this.http.post(this.url + 'deleteuser', data).subscribe((response: any) => {
      console.log("Response deletion user in table", response)
      if (response.success == 1) {
        alert("deletion is successfully")
        this.newuser = response.id;
        this.getallusers()
      }
      else {
        alert(response.message)
      }
    }, (error) => {
      console.log("In error block", error);
      alert(error.error.message)
    })
  }

  //frontend(user interface) se table ka data,database se API ke throw ek click karne par update karne karen ke liy code
  updatequery(data: any) {
    console.log("update is working", data)
    this.http.post(this.url + 'updateuser', data).subscribe((response: any) => {
      console.log("Response update user in table", response);
      if (response.success == 1) {
        alert("update user successfully");
        this.getallusers()
      }
      else {
        alert(response.message)
      }
    }, (error) => {
      console.log("In error block", error);
      alert(error.error.message)
    })

  }

  ngOnInit(): void {
    this.getallusers()
  }

}
