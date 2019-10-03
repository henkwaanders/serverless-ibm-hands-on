'use strict';

function handler(doc) {
  return Promise.resolve({
    headers: { 'Content-type': 'text/html' },
    statusCode: 200,
    body: '<b>'+doc.data+'</b>'
});
}

exports.handler = handler;
