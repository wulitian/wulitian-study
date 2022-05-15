# vue中钩子函数

#### 精简回答：

1. 页面控制导航跳转，beforeEach,afterEach一般用于页面title修改一般需要登录页面调整页面重定向功能。beforeEach主要由三个参数to,from,next
- to:route即将进入目标的对象

- from：当前导航正要离开的页面

- next function一定要调用该方法的resolve这个钩子，执行效果依赖next参数，可以控制页面跳转




