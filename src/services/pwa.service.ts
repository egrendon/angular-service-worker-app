import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  private promptEvent;

    constructor(private swUpdate: SwUpdate) {
      debugger;
      swUpdate.available.subscribe(event => {
            console.log(event);
            if (PwaService.askUserToUpdate()) {
                window.location.reload();
            }
        });
      window.addEventListener('beforeinstallprompt', event => {
            this.promptEvent = event;
        });
    }

    public static askUserToUpdate() {
        return false;
    }

    public installPwa(): void {
        this.promptEvent.prompt();
    }
}
