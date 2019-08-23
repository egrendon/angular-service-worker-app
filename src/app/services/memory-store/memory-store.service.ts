/*
  The memory store contains references to individual classes that store and publish data changes.
  The individual classes are responsible for publishing and storing data.
  Views will need to subscribe to the changes coming from the individual classes.
*/
import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { GenericMemoryData } from './generic-memory-store-data-model';

@Injectable()
export class MemoryStoreService {

    private _user: GenericMemoryData<User>;

    constructor() {

    }

    public user(): GenericMemoryData<User> {
        if (!this._user) {
            this._user = new GenericMemoryData();
        }
        return this._user;
    }

}
