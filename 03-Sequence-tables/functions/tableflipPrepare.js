'use strict';

function handler(params) {
  // __ow_path contains the full path, we need the last part only for the document id
  params.docid = params.__ow_path.split('/').slice(-1);
  return params;
}

exports.handler = handler;
