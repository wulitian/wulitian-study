# css中position，float，position关系

#### 精简回答：

1. 当dispaly不是none时，定位不是absolute也不是fixed,浮动也是none,元素不是根元素，此时display是所设置的特定值

2. 当display不是none时，定位是absolute或者fixed，此时浮动会变为none，display(除inline-table)都换转换成block

3. 当display不是none时，定位不是absolute也不是fixed,浮动不是none，display(除inline-table)都换转换成block

4. 当display是none时，position,float不起作用
