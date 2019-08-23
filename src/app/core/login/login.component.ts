import { Component, OnDestroy, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    public loggedIn: boolean;
    public userInfo: any = null;
    private subscription: Subscription;
    public isIframe: boolean;

    constructor(private broadcastService: BroadcastService, private authService: MsalService) {
        //  This is to avoid reload during acquireTokenSilent() because of hidden iframe
        this.isIframe = window !== window.parent && !window.opener;
        if (this.authService.getUser()) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }

    login(): void {
        this.authService.loginPopup(['user.read', 'api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user']);
    }

    logout(): void {
        this.authService.logout();
    }


    ngOnInit(): void {

        this.broadcastService.subscribe('msal:loginFailure', (payload) => {
            console.log('login failure ' + JSON.stringify(payload));
            this.loggedIn = false;

        });

        this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
            console.log('login success ' + JSON.stringify(payload));
            this.loggedIn = true;
        });

    }

    ngOnDestroy() {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
