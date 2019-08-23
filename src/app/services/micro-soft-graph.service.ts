import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { MsalService } from '@azure/msal-angular';
import { MemoryStoreService } from './memory-store/memory-store.service';

export const OAuthSettings = {
    appId: 'b54e9f4a-240f-4afb-8781-9aa9840a3ab7',
    scopes: [
        'user.read',
        'calendars.read'
    ]
};


@Injectable({
  providedIn: 'root'
})
export class MicroSoftGraphService {
    public authenticated: boolean;
    public user: User;

    constructor(private msalService: MsalService, private memoryStoreService: MemoryStoreService) {

        this.authenticated = false;
        this.user = null;
    }

    // Prompt the user to sign in and
    // grant consent to the requested permission scopes
    async signIn(): Promise<void> {
        const result = await this.msalService.loginPopup(OAuthSettings.scopes)
            .catch((reason) => {
                console.log('Login failed', JSON.stringify(reason, null, 2));
            });

        if (result) {
            this.authenticated = true;
            // Temporary placeholder
            this.user = new User(result);
            this.memoryStoreService.user().publish(this.user);
        }
    }

    // Sign out
    signOut(): void {
        this.msalService.logout();
        this.user = null;
        this.authenticated = false;
        this.memoryStoreService.user().publish(null);
    }

    // Silently request an access token
    async getAccessToken(): Promise<string> {
        const result = await this.msalService.acquireTokenSilent(OAuthSettings.scopes)
            .catch((reason) => {
                console.log('Get token failed', JSON.stringify(reason, null, 2));
            });

        // Temporary to display token in an error box
        if (result) {
            console.log('Token acquired', result);
        }
        return result;
    }

}
