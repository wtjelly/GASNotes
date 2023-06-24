function sendPostRequestMk(){
  // Make a POST request with a JSON payload.
  var data = {
      "i": "TOKEN", // Misskeyのアクセストークン
      "text": "ノート本文",
      "visibility": "home",　// ノートの公開範囲
  };
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data)
  };
  UrlFetchApp.fetch('https://example.com', options);
}
