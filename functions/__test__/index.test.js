"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const sinon_1 = __importDefault(require("sinon"));
const uuid_1 = __importDefault(require("uuid"));
const __1 = require("..");
it('helloHttp: should print hello world', () => {
    // Mock ExpressJS 'req' and 'res' parameters
    const req = {
        query: {},
        body: {}
    };
    const res = { send: sinon_1.default.stub() };
    // Call tested function
    __1.helloWorld(req, res);
    // Verify behavior of tested function
    assert_1.default.ok(res.send.calledOnce);
    assert_1.default.deepStrictEqual(res.send.firstCall.args, ['Hello World']);
});
it('helloHttp: should print a name', () => {
    // Mock ExpressJS 'req' and 'res' parameters
    const name = uuid_1.default.v4();
    const req = {
        query: { name: name },
        body: {}
    };
    const res = { send: sinon_1.default.stub() };
    // Call tested function
    __1.helloWorld(req, res);
    // Verify behavior of tested function
    assert_1.default.ok(res.send.calledOnce);
    assert_1.default.deepStrictEqual(res.send.firstCall.args, [`Hello ${name}`]);
});
