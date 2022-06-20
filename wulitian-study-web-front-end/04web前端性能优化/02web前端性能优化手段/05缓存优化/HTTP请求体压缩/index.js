var rawBody = 'content=test';
var rawLen = rawBody.length;

var bufBody = new Uint8Array(rawLen);
for(var i = 0; i < rawLen; i++) {
    bufBody[i] = rawBody.charCodeAt(i);
}

var format = 'gzip'; // gzip | deflate | deflate-raw
var buf;

switch(format) {
    case 'gzip':
        buf = window.pako.gzip(bufBody);
        break;
    case 'deflate':
        buf = window.pako.deflate(bufBody);
        break;
    case 'deflate-raw':
        buf = window.pako.deflateRaw(bufBody);
        break;
}

var xhr = new XMLHttpRequest();
xhr.open('POST', '/node/');

xhr.setRequestHeader('Content-Encoding', format);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

xhr.send(buf);
