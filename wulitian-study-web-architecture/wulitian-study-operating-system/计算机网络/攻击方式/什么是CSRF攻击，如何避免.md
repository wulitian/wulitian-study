# 什么是CSRF攻击，如何避免

#### 什么是CSRF

CSRF，跨站请求伪造（英文全称是Cross-site request forgery），是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法

Tom登陆银行，没有退出，浏览器包含了Tom在银行的身份认证信息。

黑客将伪造的转账请求，包含在在帖子

Tom在银行网站保持登陆的情况下，浏览帖子

将伪造的转账请求连同身份认证信息，发送到银行网站

银行网站看到身份认证信息，以为就是Tom的合法操作，最后造成Tom资金损失。

#### 怎么解决CSRF攻击呢？

检查Referer字段。

添加校验token。



