# css中让页面里的字体变清晰，变细用CSS怎么做

#### 精简回答：

1.CSS3里面加入了一个-webkit-font-smoothing属性。这个属性可以使页面上的字体抗锯齿,使用后字体看起来会更清晰舒服。加上之后就顿时感觉页面小清晰了。
  
- 为了对比明显先将-webkit-font-smoothing设置为none，非常模糊。
  
- 将-webkit-font-smoothing:antialiased，变得非常平滑，效果非常不错。
  
- 常用三个属性：none | subpixel-antialiased | antialiased

