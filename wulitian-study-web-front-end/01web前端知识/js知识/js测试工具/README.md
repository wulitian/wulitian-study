# JSLint、JSHint、JSCS、ESLint

AVA

AVA是Node.js测试运行工具，提供简洁的API、详细的错误输出并支持新的语言功能和进程隔离。AVA适合测试Node.js模块和服务器应用程序，但可能不适合测试UI应用程序。AVA提供了将测试标记为“待办事项”任务的功能。每个测试文件运行都是单独的过程。其他优点包括AVA的简约和速度、简单的测试语法以及同时运行多个测试的功能。AVA还支持异步函数和可观察对象(observable)——可观察对象是一种类型，可用于对DOM事件等基于推送的数据源进行建模。

AVA安装：https://github.com/avajs/ava

Cucumber.js

用JavaScript实现的Cucumber测试工具：Cucumber.js运行于受维护的Node.js版本上和现代Web浏览器中。Cucumber项目提到的优点包括：团队沟通和运行用“普通”语言编写的自动化测试的功能，这意味着团队中任何人都可以阅读它们。因此，可以改善沟通、协作和信任。Cucumber.js包含一个可执行文件来运行测试套件，因此全局安装时不起作用。(Cucumber在支持文件中必不可少，全局安装的模块并非必不可少。)

Cucumber.js安装：https://github.com/cucumber/cucumber-js

Enzyme

Enzyme是面向React JavaScript UI库的测试实用工具。它旨在使React组件的输出测试起来更容易。开发人员可以根据输出操作、遍历和模拟运行时环境。Enzyme API模仿jQuery API来实现DOM操作和遍历。Enzyme对于测试运行工具或断言库并非固执己见。如果开发人员想使用Enzyme以及自定义断言和便利功能来测试React组件，可以考虑使用chai-enzyme和Mocha/Chai组合、jasmine-enzyme和Jasmine组合或jest-enzyme和Jest组合。Enzyme还可用于测试React Native组件。

Enzyme安装：https://airbnb.io/enzyme/

Karma

Karma是JavaScript的测试运行工具，可以在多个浏览器中执行代码。支持各大浏览器，包括移动浏览器。该项目背后的开发人员称，在Karma提供的环境中，开发人员不必设置大量配置，但可以编写代码并从测试中获得即时反馈。Karma专为低级(单元)测试而设计。Karma不是测试框架或断言库，它启动HTTP服务器，并使用开发人员青睐的测试框架生成测试运行工具文件。它提供了面向Jasmine、Mocha和QUnit等框架的插件。

Karma安装：https://www.npmjs.com/package/karma

Jasmine

Jasmine号称是用于测试JavaScript的“行为驱动”框架。它不依赖其他JavaScript框架，也不需要DOM。支持者提到其语法有助于轻松编写测试。Jasmine由Pivotal Labs维护，适用于测试网站、Node.js项目以及JavaScript可以运行的任何其他环境。Jasmine旨在为各种不同的使用场景和浏览器带来易于测试的优点，与JavaScript框架无关，这让开发人员能够测试来自React、Angular或其他任何JavaScript库的代码。Jasmine力求最小依赖性，同时保持小巧、易于维护。

Jasmine安装：https://github.com/jasmine/jasmine

Jest

Jest号称是一款全面的JavaScript测试解决方案，对于大多数JavaScript项目而言，开箱即用、无需配置。测试有独特的全局状态，可以并行运行。之前失败的测试先运行，运行根据测试文件的长度重新加以组织。与流行的JavaScript技术兼容，包括Angular、Babel、Node.js、React和Vue。可以运行测试以跟踪庞大对象，快照与测试或嵌入式内联放在一起。在测试文件中，Jest将方法和对象放入到全局环境中，无需导入它们。

Jest安装：https://github.com/facebook/jest

Luna

Luna是一个自成一体的JavaScript单元测试框架，无需配置。产品文档显示，开发人员在几分钟内就可以让第一批单元测试运行起来。生成代码覆盖报告，不用安装其他任何模块。测试必须编写成ES6模块，默认情况下在浏览器中运行测试。支持并发，测试组并行运行。Luna的部分灵感来自面向谷歌Go语言的内置测试。Luna不支持转译(transpiling)，因此无法与CoffeeScript或TypeScript兼容。它还缺少对旧版浏览器的支持。

Luna安装：https://github.com/ccampbell/luna

Mocha

Mocha是一个功能丰富的测试框架，在Node.js和浏览器中运行，承诺使异步代码测试起来“简单又有趣”。测试串行运行，支持者称这便于准确而灵活的报告，同时将未捕获的异常与准确的测试用例对应起来。至于持续测试方面，开发人员可以使用Wallaby.js工具，借助任何断言库实现Mocha的实时代码覆盖。Mocha还与应用程序框架集成，比如通过Konacha，这让开发人员可以使用Mocha在Ruby on Rails应用程序中测试JavaScript。还有许多编辑器插件，比如面向Visual Studio Code的Mocha侧边栏扩展。

Mocha安装：https://mochajs.org/#installation

Protractor

Protractor是一款面向Angular及前身AngularJS的端到端测试框架。测试在浏览器中针对应用程序来运行，Proctractor就像用户那样与应用程序进行交互。支持针对Angular的定位器策略，以测试Angular元素，无需任何设置。网页一完成等待的测试，自动等待功能使Protractor能够执行测试下一步。Protractor建立在WebdriverJS的基础上，后者是用JavaScript实现的用于测试的Selenium浏览器自动化工具。

Protractor安装：http://www.protractortest.org/#/

QUnit

QUnit是一个被JQuery、jQuery UI和jQuery Mobile等项目使用的JavaScript单元测试框架。实际上，QUnit最初由jQuery的发明人John Resig开发而成，作为jQuery的一部分。QUnit号称速度快、易于使用，拥有自成一体但简洁、易于扩展的API，可用于测试任何普通的JavaScript代码。测试或断言失败时，QUnit承诺尽快提供反馈，有足够的细节来查明问题。QUnit中的断言方法遵循CommonJS单元测试规范。QUnit支持有赖于jQuery 3.x的浏览器，包括Chrome、Edge、Firefox、Internet Explorer和Safari的各种版本。

QUnit安装：https://qunitjs.com/
