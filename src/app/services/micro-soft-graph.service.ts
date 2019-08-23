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

  constructor() { }
}
