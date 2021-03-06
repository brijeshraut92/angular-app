import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    // isLoginMode = true; 
    constructor(private router: Router,
        private authService: AuthService) { }
    isLoginMode = true;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
        
    }
    onSubmit(form: NgForm) {
        console.log(form.value)
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        if (this.isLoginMode) {
            
        } else {
            this.authService.signup(email, password).subscribe(
                resData => {
                    console.log(resData);
                }, 
                // error => {
                //     console.log(error);
                // }
                );

            form.reset();
            this.router.navigate(['home']);
            alert('login Sucessfull')
        }
    }

}