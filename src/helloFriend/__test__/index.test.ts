import * as assert from 'assert';
import * as sinon from 'sinon';
import * as uuid from 'uuid';

import { helloFriend } from '..';

it('helloFriend: should print Hello Friend', () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const req = {
    query: {},
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloFriend(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, ['Hello Friend']);
});

it('helloFriend: should print a name', () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const name = uuid.v4();
  const req = {
    query: { name: name },
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloFriend(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, [`Hello ${name}`]);
});
