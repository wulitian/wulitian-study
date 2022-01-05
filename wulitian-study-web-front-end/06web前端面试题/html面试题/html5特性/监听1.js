let data = " ";
let onconnect = function (event) {
   let port = event.ports[0];
   port.onmessage = function (e) {
       if (e.data === "get") {
           port.postMessage(data);
       } else {
           data = e.data;
       }
   };
};
