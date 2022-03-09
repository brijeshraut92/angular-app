import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

//optional//
// interface AuthResponseData {
//     idToken: string 
//     IDToken: string
//     email: string
//     refreshToken: string
//     expiresIn: string
//     localId: string
// }

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }
    signup(email: string, password: string) {
        return this.http.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDDKPXJp848uvo9LXgtZXMAYec_5NHDLW8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );

    }
}