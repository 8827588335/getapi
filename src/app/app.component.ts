import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getapi';
  users: any
  constructor(private userData: UsersdataService, private http: HttpClient) {

    
    // userData.users().subscribe((data) => {
    //   console.log("Subscribed response",data);

    //   console.warn("data", data);
    //   this.users = data

    // });

  }

  // async getUsers() {
  //   try {
  //     this.userData.users().subscribe((response: any) => {
  //       console.log("APi Response", response);
  //     })

  //   } catch (error) {
  //     console.log(error);
  //   }
  }


