var NativescriptWechat = require("nativescript-nativescript-wechat").NativescriptWechat;
var nativescriptWechat = new NativescriptWechat();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(nativescriptWechat.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(nativescriptWechat.functionname()).toEqual(jasmine.any(Promise));
  });
});