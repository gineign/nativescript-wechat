import {Observable} from 'data/observable';
import {Wechat} from 'nativescript-wechat';

export class HelloWorldModel extends Observable {
  public message: string;
  private wechat: Wechat;

  constructor() {
    super();

    this.wechat = new Wechat();
    this.message = this.wechat.message;
  }
}