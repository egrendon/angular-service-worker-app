import { Component, OnInit } from '@angular/core';
import { PwaService } from '../../services/pwa.service';
import { MemoryStoreService } from '../../services/memory-store/memory-store.service';
import { Subject } from 'rxjs';
import { User } from '../../models/user.models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public user: User;

    constructor(public pwaService: PwaService, public memoryStoreService: MemoryStoreService) {

    }

    ngOnInit() {
        this.memoryStoreService.user().dataSubject
            .subscribe((user: User) => {
                    this.user = user;
                }
            );
    }

}
