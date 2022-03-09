import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

interface AuthResponseData { }

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDDKPXJp848uvo9LXgtZXMAYec_5NHDLW8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );

    }
}