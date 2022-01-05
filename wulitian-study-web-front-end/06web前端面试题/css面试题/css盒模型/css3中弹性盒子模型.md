# css3中弹性盒子模型

#### 精简回答：

设为Flex布局以后（ display: flex;），子元素的float、clear和vertical-align属性将失效。
采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。
它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。
主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

1. 容器的属性：以下6个属性设置在容器上（justify-content和align-items、flex-wrap:wrap最常用的）。

- justify-content：定义了项目在主轴上的对齐方式。它可能取5个值
    center： 居中
    flex-start（默认值）：左对齐
    flex-end：右对齐
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    
- align-items：属性定义项目在交叉轴上如何对齐。它可能取5个值。
    center：交叉轴的中点对齐。
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    baseline: 项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
    
- flex-flow：flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

- flex-direction：属性决定主轴的方向（即项目的排列方向）；
    row（默认值）：主轴为水平方向，起点在左端。
    row-reverse：主轴为水平方向，起点在右端。
    column：主轴为垂直方向，起点在上沿。
    column-reverse：主轴为垂直方向，起点在下沿。
    
- flex-wrap：默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。它可能取三个值。
（1）nowrap（默认）：不换行。
（2）wrap：换行，第一行在上方。【这个属性经常用】
（3）wrap-reverse：换行，第一行在下方。

- align-content：属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
    flex-start：与交叉轴的起点对齐。
    flex-end：与交叉轴的终点对齐。
    center：与交叉轴的中点对齐。
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。stretch（默认值）：轴线占满整个交叉轴。
    
2. 项目的属性总结：以下6个属性设置在项目上。（align-self、flex、order）

- align-self：
属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch；该属性可能取6个值，除了auto，其他都与align-items属性完全一致。auto / flex-start / flex-end / center / baseline / stretch;

- flex：
属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

- order：
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

- flex-grow：
属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

- flex-shrink：
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

- flex-basis：
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

