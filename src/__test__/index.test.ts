import assert from 'assert';
import sinon from 'sinon';
import uuid from 'uuid';

import { helloWorld } from '..';

it('helloHttp: should print hello world', () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const req = {
    query: {},
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloWorld(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, ['Hello World']);
});

it('helloHttp: should print a name', () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const name = uuid.v4();
  const req = {
    query: { name: name },
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloWorld(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, [`Hello ${name}`]);
});
