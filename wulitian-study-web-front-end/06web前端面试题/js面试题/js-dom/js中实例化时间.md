# js中实例化时间

#### 精简回答：

1. new Date("month dd,yyyy hh:mm:ss");

2. new Date("month dd,yyyy");

3. new Date(yyyy,mth,dd,hh,mm,ss);

4. new Date(yyyy,mth,dd);

5. new Date(ms);

注意最后一种形式，参数表示的是需要创建的时间和GMT时间1970年1月1日之间相差的毫秒数。各种函数的含义如下：

month:用英文表示月份名称，从January到December

mth:用整数表示月份，从（１月）到１１（１２月）

dd:表示一个月中的第几天，从1到31

yyyy:四位数表示的年份

hh:小时数，从0（午夜）到23（晚11点）

mm:分钟数，从0到59的整数

ss:秒数，从0到59的整数

ms:毫秒数，为大于等于0的整数
