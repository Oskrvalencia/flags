import { Injectable } from '@angular/core';
import { Flags } from '../classes/flag.class';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  public flag: Flags;

  constructor() {
    this.flag = {};
  }
}
