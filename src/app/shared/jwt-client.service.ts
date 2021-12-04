import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private httpClient: HttpClient, private router: Router) { }


  public generateToken(request: any) {
    return this.httpClient.post<string>("http://localhost:8080/authenticate", request).subscribe(data => {
      this.setSession(data);
      this.router.navigate(['/home'])
    });
  }

  private setSession(authResult: any) {
    // const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('token', authResult.jwtToken);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}


  public welcome(token: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:8080/", {headers, responseType: 'text' as 'json' });
  }
}
