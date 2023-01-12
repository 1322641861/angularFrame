import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  public storageObj: any = {};

  set(key: string, value: any) {
    this.storageObj[key] = value;
  }

  get(key: string) {
    return this.storageObj[key];
  }

  remove(key: string) {
    delete this.storageObj[key]
  }
}