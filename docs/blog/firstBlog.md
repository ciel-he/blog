# vuePress+github搭建博客

### vuePress本地项目
[Vuepress官网](https://vuepress.vuejs.org/zh/)


构建基本项目结构
1、新建一个名为 blog-heye 的文件夹，进入到该文件夹目录下
```
# 按默认配置初始化一个项目，此时会在当前目录下生成 package.json 文件
npm init -y
```

2、将 VuePress 作为一个本地依赖安装
```
npm install -D vuepress
```

3、在 package.json 里的 scripts 中添加如下代码，不需要修改其它代码
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

4、在项目根目录下，新建 docs 文件夹
```
mkdir docs
```



5、新建一个 markdown 文件

```
echo '# Hello VuePress!' > docs/README.md
```


6、输入命令启动项目，在浏览器中访问 `http://localhost:8080/ `即可预览效果

```
npm run docs:dev
```

7、修改默认主题

打开README.md，修改为：

```

---
home: true
heroImage: /hero.png        
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

8、配置路由
```js
// 新建 .vuepress 文件夹
mkdir docs\.vuepress

//在 .vuepress 文件夹下新建 config.js 文件

//config.js 便是一个 Vuepress 网站必要的配置文件，在其中添加如下代码：

module.exports = {
  base: '/blog-demo/',  //站点的基础路径
  title: 'blog-demo',   //网站的标题
  description: 'Vuepress blog demo'  //描述
}

```

9、配置导航

在` .vupress/config.js` 文件添加一些导航栏链接：
```
module.exports = {
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/xxxxxxx/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ]
    }
}
```

10、加侧边栏
```
//.vupress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客']
    ]
  }
}
```

### 部署

