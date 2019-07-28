# 基于`react-react-app`引入`react-router`的脚手架搭建 #
## 一、 背景说明 ##
基于`react-react-app`创建的项目是没有集成`Router`路由跳转的功能，要使用路由跳转功能就必须在创建的工程里面引入`Route`r这个库,以下就是如何在工程中引入`Route`r的步骤。

## 二、 添加`Router`库操作步骤 ##
### 1、 创建一个简单的`react`项目
在你保存项目文件的文件夹中新建一个文件夹，命名成你想要的工程名字（如`react-router-demo`等），进入新建的文件夹中，然后在文件夹空白处按住`shirft`键`+`鼠标右键弹出一个菜单，接着点击打开“此处打开命令窗口”。

![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/cmd1.png "cnd")

在命令窗口中输入

	creact-react-app react-router-demo

空格之后就是项目名称,然后按enter执行。

![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/cmd2.png "cnd")

创建好的项目的文件夹结构如下:

	├── node_modules                  // 模块安装依赖包
	├── public                        //公共文件，可以不用管
	│   ├── favicon.ico               //图标
	│   ├── index.html                //入口html
	│   ├── manifest.json             //manifest配置文件，指定应用名称、图标等信息
	├── src 						  //编写自己代码的存放文件
	│   ├── App.css                   //app的引用css文件
	│   ├── App.js					  //组件js文件
	│   ├── App.test.js               //测试文件
	│   ├── index.css                 //idnex引用的css文件
	│   └── index.js				  //页面入口文件
	│   ├── logo.svg                  //页面图片
	│   ├── serviceWorker.js          //加速程序运行文件
	├──.gitignore                     //提交到远程代码库时要忽略的文件
	├──package.json                   //用来声明项目的各种模块安装信息，脚本信息等
	├──package-lock.json              //用来锁定模块安装版本的，确保安装的模块版本一致
	├──README.md					  //盛放关于这个项目的说明文件
	

### 2、 打开新建的react项目
进入新建的项目的文件夹中，像创建`react`项目一样打开命令窗口，在窗口中输入

	npm start

![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/cmd4.png "cnd")

运行一下项目，测试一下是否运行正常。如果正常运行就会自动在浏览器窗口中打开这个项目，效果如下：

![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/runresult.png "cnd")

### 3、 在react项目中添加Router库
在项目文件夹中打开命令窗口，在窗口中输入

	npm install react-router-dom --save dev

`dev`表示`react-router-dom`的保存路径。

![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/cmd3.png "cnd")

这样将会在`react`项目中添加路由库。

## 三、 项目中使用Router ##
### 1、 在入口文件中引入`Router`
在项目文件夹中找到`src`文件夹，然后找到入口文件`index.js`并打开它， 在它的顶部引入项目所需要的`Router`库的组件，比如

	import { BrowserRouter, Route, Link } from 'react-router-dom';

这样就可以在`index.js`中使用 `BrowserRouter`, `Route`和`Link`组件去构建网页了。
#### 注意：
（1）、`react-route`r到现在为止已经更新到了`V5`版本，各个版本之间的引入方法有点差异，引入方式错误将会报错，具体引入方式如下：
v2和v3版

	import { Router, Route, Link } from 'react-router-dom';

v4和v5版

	import { BrowserRouter, Route, Link } from 'react-router-dom';

（2）、为了方便使用可以对`BrowserRouter`进行重命名操作，具体如下

	import { BrowserRouter as Router } from 'react-router-dom';

### 2、 文件中如何使用`Router`
首先在入口文件`index.js`中注册一个路由`Router`,具体写法如下

	ReactDOM.render(
		<Router>
			<App />
		</Router>, 
		document.getElementById('root')
	);

这样就在项目中注册了一个路由，其中`<App />`就是项目中自定义的组件，由于`Router`组件是根节点，这个`Router`就能管理项目中的所有组件。
#### 注意： 
除了`v5`版本的`react-router`，其他版本的`react-router`的`Router`组件都只可以拥有一个子节点，否则会报错。

### 3、 创建两个组件
在`src`文件夹中创建一个`components`文件夹，用来存放自定义的组件。现在创建两个组件分别命名为`home.js`和`about.js`，具体代码如下

`Home`组件的代码：

	import React, { Component } from 'react';
	class Home extends Component {
		render() {
			return (
				<div>
					<p>我是一个主页Home</p>
				</div>
			);
		}
	}
	export default Home;

`Abouot`组件的代码：

	import React, { Component } from 'react';
	class About extends Component {
		render() {
			return (
				<div>
					<p>我是about</p>
				</div>
			);
		}
	}
	export default About;

### 4、 在`App`组件中用`Route`进行路径配置
在`App.js`文件中引入`Route`和`Link`组件，代码如下

	import { Route, Link } from 'react-router-dom';

把自定义的两个组件也引进来，代码如下

	import About from './components/about';
	import Home from './components/home';

在`App`中进行组件组装

	class App extends Component {
    	render() {
        	return (
            	<div>
                	<p>我是App组件</p>
                	<div>
                    	<Link to="/home">跳到home</Link><br />
                    	<Link to="/about">跳到about</Link>
                	</div>

                	<Route path="/home" component={ Home } />
                	<Route path="/about" component={ About } />
            	</div>
        	);
    	}
	}

其中

	<Route path="/home" component={ Home } />
	<Route path="/about" component={ About } />

表示路由路径的配置，其中path属性表示路径，conponent表示组件，整段代码的意思就是把自定义的组件和相应的路径进行映射，只要项目中有代码触发了这个路径，就会渲染相对应的组件。其中触发路由跳转的方式的有Link标签，和history.push()这两个方法。

在这里就是用了Link标签的方式跳转：

	<Link to="/home">跳到home</Link><br />
	<Link to="/about">跳到about</Link>


运行界面如下

初次加载只加载了App组件的内容


![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/app.png "result")


点击'跳到home'，就会跳到`Home`组件的内容


![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/home.png "result")


点击'跳到about'，就会跳到`About`组件的内容

![markdown](https://github.com/Lishengzuo/react-router-demo/raw/master/docimages/about.png "result")

这样就在项目中实现了使用Router控制页面跳转的效果。






 