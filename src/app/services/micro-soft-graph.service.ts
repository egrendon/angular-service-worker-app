import { Injectable } from '@angular/core';


export class AppConfig {
    public static CLIENT_ID = 'b54e9f4a-240f-4afb-8781-9aa9840a3ab7';
    public static TENANT_ID = 'drivetime.com';
    public static GRAPH_RESOURCE = 'https://graph.microsoft.com';

    // tenant: string = 'drivetime.com';
    // clientId: string; //= '26d4dc88-9921-4b66-ac29-491a265af5e9'
    // cacheLocation: string = 'localStorage';
    // loadFrameTimeout: string = '30000'; //overwrite default LOADFRAME_TIMEOUT (6ms)
}


@Injectable({
  providedIn: 'root'
})
export class MicroSoftGraphService {


    private accessToken;
    private id_token;
    private stateResponse;
    protected cryptObj = window.crypto;
    protected Sessionstore = sessionStorage.AppaccessToken === 'undefined' || sessionStorage.AppaccessToken == null;

    constructor() {
      this.initValues();
    }

    public initValues(): void {
        if (this.Sessionstore) {
            this.getTokenResponse();
            sessionStorage.AppaccessToken = this.accessToken;
            sessionStorage.idToken = this.id_token;
            sessionStorage.respState = this.stateResponse;
        }
    }


    private getTokenResponse() {
        if (location.hash) {
            if (location.hash.split('access_token=')) {
                this.accessToken = location.hash.split('access_token=')[1].split('&')[0];
                this.id_token = location.hash.split('id_token=')[1].split('&')[0];
                this.stateResponse = location.hash.split('state=')[1].split('&')[0];
            }
        }
    }


    // Generates guid for nonce and state
    guid() {
        // An array of 8 16-bit unsigned integers
        const buf = new Uint16Array(8);
        this.cryptObj.getRandomValues(buf);

        function s4(num) {
            let ret = num.toString(16); // The number will show as an hexadecimal value
            while (ret.length < 4) {
                ret = '0' + ret;
            }
            return ret;
        }


        return s4(buf[0]) + s4(buf[1]) + '-' + s4(buf[2]) + '-' + s4(buf[3]) + '-' +
            s4(buf[4]) + '-' + s4(buf[5]) + s4(buf[6]) + s4(buf[7]);
    }


    login() {
        sessionStorage.nonce = this.guid();
        sessionStorage.state = this.guid();

        window.location.href = 'https://login.microsoftonline.com/' + AppConfig.TENANT_ID +

            '/oauth2/authorize?client_id=' + AppConfig.CLIENT_ID +
            '&response_type=token+id_token&resource=' +
            AppConfig.GRAPH_RESOURCE + '&state=' + sessionStorage.state +
            ' &nonce=' + sessionStorage.nonce + '&redirect_uri=http://localhost:4200';


    }
}
