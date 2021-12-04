import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtClientService } from '../shared/jwt-client.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('f') signInForm: NgForm;

  constructor(private jwtClientService: JwtClientService) { }

  ngOnInit(): void {
    // this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.jwtClientService.generateToken(authRequest);
    // resp.subscribe((data: any)=> {
    //   console.log("===data.jwtToken====", data.jwtToken)
    //   this.accessApi(data.jwtToken);
    // });
      }


    //   public accessApi(token: string){
    //     console.log('=========token====', token);
    // let resp=this.jwtClientService.welcome(token);
    // resp.subscribe(data=>this.response=data);
    //   }

    onSignIn() {
      console.log('======signInForm===', this.signInForm);
      let authRequest = {
        "emailId": this.signInForm.value.emailId,
        "password": this.signInForm.value.password
      };
      console.log('=====authRequest====', authRequest);
      this.jwtClientService.generateToken(authRequest);

    }

}
