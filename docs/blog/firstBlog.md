# vuePress+github搭建博客

### 一、vuePress本地项目
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
heroImage后面的图片是放在`.vuepress/public`下面的,自动读取

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
        repo: 'https://github.com/xxxxxxx/blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/firstBlog.md' }
        ]
    }
}
```
在 `docs` 目录下新建 `blog `文件夹。
在 `blog` 目录下创建 `/blog/firstBlog.md` 作为我们第一篇博客的内容：
```
# 博客

这里随便写内容了。。。

比如我的就是该页内容
```

10、加侧边栏
```js
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

### 二、部署
1. 在github上新建项目
2. 把本地项目push到远程仓库
3. 修改` .vupress/config.js`的仓库目录
4. `base `设置为与远程仓库` /<REPO>/`同名，比如我的远程是`blog`，本地是`blog-heye`，就改成blog。
5. 根目录下创建一个`deploy.sh`文件

```
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
双击` deploy.sh` 运行脚本，会自动在我们的 GitHub 仓库中，创建一个名为 `gh-pages `的分支，而我们要部署到` GitHub Pages `的正是这个分支。

如果`docs/.vuepress/dist`已经生成，在github上没有找到`gh-pages`分支，说明提交出错.
修改deploy.sh提交地址为http格式如下：
```
git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

```

6. 在 `GitHub` 项目点击` Setting `按钮，找到 `GitHub Pages - Source`，选择 `gh-pages `分支，点击 `Save`按钮后，静静地等待它部署完成即可。
但是我设置的时候发现已经默认是`gh-pages `分支了。

### 最后

博客地址：https://heye1109.github.io/blog

github：https://github.com/heye1109/blog/

每次更新内容，就push，然后双击deploy.sh即可

<br/>

#### 参考链接：

[vuePress官网](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85)

[VuePress + GitHub Pages 搭建个人博客](https://www.jianshu.com/p/6e8c608f24c8)
