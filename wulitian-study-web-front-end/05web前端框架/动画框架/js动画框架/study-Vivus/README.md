# vivus.js

#### 介绍

Vivus is a lightweight JavaScript class (with no dependencies) that allows you to animate SVGs, giving them the appearance of being drawn. There are a variety of different animations available, as well as the option to create a custom script to draw your SVG in whatever way you like.284/5000

Vivus是一个轻量级的JavaScript类(没有依赖关系)，它允许你动画化SVG，给它们一种被绘制的外观。有各种不同的动画可用，以及创建自定义脚本以任何您喜欢的方式绘制您的SVG的选项。

#### 安装方式

NPM: npm install vivus

Bower: bower install vivus

jsDelivr CDN: //cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js

#### 使用说明

Vivus Instant在线尝试只需上传svg

Codrops这个网站动画例子颇多

构造器

Vivus构造函数要求3个参数:

1.要与之交互的DOM元素的标识(或对象)。它可以是一个内嵌的支持向量组，也可以是一个从选项文件中附加对象标签的包装元素

2.选项对象

3.动画结束时调用的回调(可选)

svg 自定义属性

 data-ignore (boolean) 属性标识svg指定path活link 忽略动画

 data-start (integer) 动画开始时间
 
 data-duration (integer) 路径动画持续时间

Option list
| 属性    | 类型   | 解释   |
| :-----: | :----: | :----: |
|type                 |String    |定义使用那种动画delayed, sync, oneByOne, script, scenario or scenario-sync. [Default: delayed]|
|file                 |String    |链接到要制作动画的SVG。如果设置，Vivus将创建一个对象标签，并将其附加到给定构造函数的DOM元素中。请注意，在使用Vivus实例之前，请使用onReady回调。|
|start                |String    |inViewport manual autostart[Default: inViewport] 定义如何触发动画|
|duration             |integer   |Animation duration, in frames. [Default: 200] 定义动画持续时间|
|delay                |integer   |绘制第一个和最后一个的时间间隔|
|onReady              |function  |当实例准备好播放时调用函数。|
|pathTimingFunction   |function  |为SVG的每个路径元素计时动画功能。检查定时功能部分。|为了给予更多的自由，可以覆盖每个路径和/或整个SVG的动画。它的工作原理有点像CSS的动画计时功能。但是它没有使用三次贝塞尔函数，而是使用了一个简单的JavaScript函数。它必须接受一个数字作为参数(在0到1之间)，然后返回一个数字(也在0到1之间)。是个钩子。如果您不想创建自己的，计时方法可以通过构造函数对象获得:EASE、EASE_IN、EASE_OUT和EASE_OUT_BOUNCE。然后在选项对象中设置它来享受它们。
|animTimingFunction   |function  |完整SVG的定时动画功能。检查定时功能部分。|
|dashGap              |integer   |动画初始状态出现小故障时增加。[默认值:2]|
|forceRender          |boolean   |让浏览器重新呈现所有更新的路径项。默认情况下，该值仅在IE上为真。(有关更多详细信息，请查看“疑难解答”部分)。|
|reverseStack         |boolean   |颠倒顺序[Default: false]|
|selfDestroy          |boolean   |移除SVG上的所有额外样式，并将其保留为原始样式。|
 
 Methods
| 属性    | 解释   |
| :-----: | :----: |
| play(speed, callback)  | 以参数中给定的速度播放动画。该值可以是负值表示向后，在0和1之间表示缓慢，大于1表示加速，小于0表示从当前状态反向。[默认值:1]。动画完成后执行的回调(可选)|
| stop()| 停止动画|
| reset()| 将svg 重新初始化为原始状态|
| finish()| 将svg 设置为最终状态绘制|
| setFrameProgress(progress)| 动画进度必须是0或1之间的数字|
| getStatus()| 获取当前动画进程 start, progress, end|
| destroy()| 重置svg 但实例无序|

Troubleshoot

Internet Explorer
Some SVG weren't working at all. The only solution found was to clone and replace each updated path element. Of course this solution requires more resources and a lot of DOM manipulation, but it will give a smooth animation like other browsers. This fallback is only applied on Internet Explorer (all versions), and can be disabled via the option forceRender.
Replacing each updated path by a clone was the only way to force IE to re-render the SVG. On some SVGs this trick is not necessary, but IE can be a bit tricky with this. If you're worried about performance, I would recommend checking if your SVG works correctly by disabling the forceRender option. If it works correctly on IE, then keep it like this.
By default, forceRender is true on Internet Explorer only.
Internet Explorer某些SVG根本无法工作。找到的唯一解决方案是克隆并替换每个更新的路径元素。当然，该解决方案需要更多的资源和大量的DOM操作，但是它将像其他浏览器一样提供平滑的动画效果。此后备仅适用于Internet Explorer（所有版本），并且可以通过选项forceRender禁用。用克隆替换每个更新的路径是强制IE重新呈现SVG的唯一方法。在某些SVG上，此技巧不是必需的，但是IE在此方面可能会有些棘手。如果您担心性能，建议您通过禁用forceRender选项来检查SVG是否正常工作。如果它在IE上正常运行，则保持这种状态。默认情况下，forceRender仅在Internet Explorer上为true。

Firefox
For Firefox users, you might encounter some glitches depending on your SVG and browser version. On versions before 36, there is a problem retrieving path length via getTotalLength method. Returning 174321516544 instead of 209 (I'm not exaggerating, this comes from a real case), messing up the entire animation treatment. Unfortunately, there's nothing that this library can do, this is due to Firefox. I hope to find a workaround, but at the moment I can only recommend that you test your animation on previous versions of Firefox.Debug
对于Firefox用户，根据您的SVG和浏览器版本，您可能会遇到一些故障。在36之前的版本上，通过getTotalLength方法检索路径长度存在问题。返回174321516544而不是209（我并不夸张，这来自真实情况），弄乱了整个动画处理过程。不幸的是，由于Firefox，该库无能为力。我希望找到一种解决方法，但目前，我仅建议您在Firefox的早期版本上测试动画。

For an easier debug have a look to the attribute map of your Vivus object. This contains the mapping of your animation. If you're using a modern browser, I recommend console.table to get a nice output of the array which will make your debug easier.
调试为了使调试更容易，请查看Vivus对象的属性映射。这包含动画的映射。如果您使用的是现代浏览器，建议您使用console.table获得该数组的良好输出，这将使调试更加容易。
const logo = new Vivus('myLogo', { type: 'scenario-sync' });
// The property 'map' contain all the SVG mapping
console.table(logo.map);
