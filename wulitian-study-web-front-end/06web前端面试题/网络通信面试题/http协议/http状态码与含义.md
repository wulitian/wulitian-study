# http状态码与含义

#### 精简回答：

1. 1xx信息状态码：100 Continue 继续，⼀般在发送 post 请求时，已发送了 http header 之后服务端将返回此信息，表示确认，之后发送具体参数信息

2. 2xx成功状态码：200 OK 正常返回信息，201 Created 请求成功并且服务器创建了新的资源，202 Accepted 服务器已接受请求，但尚未处理

3. 3xx重定向状态码：301 Moved Permanently 请求的⽹⻚已永久移动到新位置。302 Found 临时性重定向。303 See Other 临时性重定向，且总是使⽤ GET 请求新的 URI 。304 Not Modified ⾃从上次请求后，请求的⽹⻚未修改过。

4. 4xx客户端错误：400 Bad Request 服务器⽆法理解请求的格式，客户端不应当尝试再次使⽤相同的内。容发起请求。401 Unauthorized 请求未授权。403 Forbidden 禁⽌访问。404 Not Found 找不到如何与 URI 相匹配的资源。

5. 5xx服务端错误：500 Internal Server Error 最常⻅的服务器端错误。503 Service Unavailable 服务器端暂时⽆法处理请求（可能是过载或维护）。

