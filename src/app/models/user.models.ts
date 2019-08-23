export declare class AzureUserInfo {
    name: string;
}


export class User {

    public azureUserInfo: AzureUserInfo;
    // public firstName: string;
    // public lastName: string;
    public name: string;
    public email: string;
    public idToken: string;
    public correlationId: string;

    constructor(token: string) {
        const azureAuthenticationResult: AzureUserInfo = this.parseJwt(token);
        if (azureAuthenticationResult) {
            this.azureUserInfo = azureAuthenticationResult;
            this.idToken = localStorage.getItem('msal.client.info');
            this.name = azureAuthenticationResult.name;
        }
    }

    public parseJwt(token): AzureUserInfo {
        if (token) {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }
        return null;
    }
}
