var Wechat = require("nativescript-wechat").Wechat;
var wechat = new Wechat();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(wechat.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(wechat.functionname()).toEqual(jasmine.any(Promise));
  });
});