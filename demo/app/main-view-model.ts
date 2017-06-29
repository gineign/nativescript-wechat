import {Observable} from 'data/observable';
import {NativescriptWechat} from 'nativescript-nativescript-wechat';

export class HelloWorldModel extends Observable {
  public message: string;
  private nativescriptWechat: NativescriptWechat;

  constructor() {
    super();

    this.nativescriptWechat = new NativescriptWechat();
    this.message = this.nativescriptWechat.message;
  }
}