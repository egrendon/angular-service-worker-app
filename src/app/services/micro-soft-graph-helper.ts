import {
    Injectable
} from '@angular/core';
import { AppConfig } from './micro-soft-graph.service';


let accessToken;
let id_token;
let stateResponse;
const cryptObj = window.crypto;
const Sessionstore = sessionStorage.AppaccessToken === 'undefined' || sessionStorage.AppaccessToken == null;


@Injectable()


export class MsGraphAuthHelper {


    constructor() {


        if (Sessionstore) {
            this.getTokenResponse();
            sessionStorage.AppaccessToken = accessToken;
            sessionStorage.idToken = id_token;
            sessionStorage.respState = stateResponse;
        }


    }


    private getTokenResponse() {
        if (location.hash) {
            if (location.hash.split('access_token=')) {
                accessToken = location.hash.split('access_token=')[1].split('&')[0];
                id_token = location.hash.split('id_token=')[1].split('&')[0];
                stateResponse = location.hash.split('state=')[1].split('&')[0];
            }
        }
    }


    // Generates guid for nonce and state
    guid() {
        // An array of 8 16-bit unsigned integers
        const buf = new Uint16Array(8);
        cryptObj.getRandomValues(buf);

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
