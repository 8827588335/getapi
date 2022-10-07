import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any
  
  postUserValue(value: any){
    console.warn(value)
    
  }
  constructor(private userData:UsersdataService){
    
  }

  //
  getUsersData(){
    this.userData.users().subscribe((data)=>{
      this.users = data;
    });
  }
//back end se data front end(UI:user interface) me lane ke liy code 
getallusers(){
  this.userData.getallusers().subscribe((data)=>{
    this.users =data;
  })
}


//front end se data back end me bhejne ke liy code
  postUserFormData(data:any){
    console.warn(data);
    console.log("function is working")
    this.userData.addUser(data).subscribe((result)=>{
      console.warn(result)
      
    })
    this.getallusers()//post data(postUserFormData) our get data(getallusers) ka function ek sath chal raha h is code ne
  }
   

  //frontend(user interface) se table ka data,database se API ke throw ek click karne par delete karen ke liy code
  delete(id:any){
    var data={
      id: id,
      // var data = {"id":11 }//frontend(user interface) se table ka data,database se API ke throw ID by ID delete karen ke liy code
  }
    this.userData.deleteuser(data).subscribe((data)=>{
      this.users =data;
      console.log("Row is deleted")
      
    })
  }

  //frontend(user interface) se table ka data,database se API ke throw ek click karne par update karne karen ke liy code
  updatequery(data:any){
    console.log("update is working")
    this.userData.updatequery(data).subscribe((data)=>{
      this.users =data;
    })
  }

  ngOnInit(): void {
  }

   

}
