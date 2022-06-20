# js中的cookie与session

#### cookie::介绍

cookie是服务端生成的；
Cookie 是用户浏览器保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。
1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）。
2. 个性化设置（如用户自定义设置、主题等）。
3. 浏览器行为跟踪（如跟踪分析用户行为等）。

#### cookie::Domain

该标识指定主机可以接受cookie,不指定默认为当前文档，不包含子域名，如果指定domain，则一般包含子域名。

#### cookie::path

Path 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 %x2F (/) 作为路径分隔符，子路径也会被匹配。

#### cookie::Expires/Max-Age

Cookie的过期时间，过期后将会自动删除。

#### cookie::HttpOnly

为了避免xss攻击，Document.cookie无法访问带有HttpOnly标识的cookie。

#### cookie::Secure

标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端。

#### cookie::SameSite

SameSite Cookie 允许服务器要求某个 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

#### cookie::发送情况

老版本浏览器中：链接、预加载、get表单、post表单、iframe、AJAX、image均会发送cookie。

新版本浏览器中，链接、预加载、get表单发送cookie，post表单、iframe、AJAX、image均不发送cookie。

#### session::介绍

session是一种服务端机制，服务端使用一种散列表结构来保存信息，当程序需要为某一个客户端创建一个session时
服务器首先检查这个客户端的请求里是否已包含了一个 Session ID，如果包含直接使用，不包含创建一个session,
并且生成一个Session ID,Session ID不重复有不容易找出规律

#### session::传输方式

cookie传输

url传输

表单隐藏字段传输

#### cookie与session区别

- 存储位置：Cookie 保存在客户端，Session 保存在服务端；
- 有效期，Cookie 可以存储很长时间，Session 只能存在于一次会话中，浏览器关闭之后 Session 就失效了；
- 安全性，Cookie 存储在客户端容易被盗取或者利用，Session 在服务端比较安全；
- 存储大小，Cookie 能存储 4K 的数据，Session 较大；
- 存取方式，Cookie 中只能保存 ASCII 字符串，假如需求存取 Unicode 字符或者二进制数据，需求先进行编码。Session 中能够存取任何类型的数据；
- 服务器压力，Session 是存储在服务端的，巨大并发的时候会使服务器资源急速飙升。Cookie 则不存在此问题；










