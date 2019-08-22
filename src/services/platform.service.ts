import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
    providedIn: 'root'
})
export class PlatformService {

    private deviceInfo = null;
    public isMobile: boolean;
    public isTablet: boolean;
    public isDesktopDevice: boolean;

    constructor(private deviceService: DeviceDetectorService) {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.isMobile = this.deviceService.isMobile();
        this.isTablet = this.deviceService.isTablet();
        this.isDesktopDevice = this.deviceService.isDesktop();
    }

    public logOutPlatform(): void {
        console.log(`*******************************************************`);
        console.log(`${JSON.stringify(this.deviceInfo)}`);
        console.log(`Is mobile ${this.isMobile}`);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
        console.log(`Is tablet ${this.isTablet}`);  // returns if the device us a tablet (iPad etc)
        console.log(`Is desktop ${this.isDesktopDevice}`); // returns if the app is running on a Desktop browser.
        console.log(`*******************************************************\n`);
    }
}
