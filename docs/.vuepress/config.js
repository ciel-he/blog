module.exports = {
  base: '/blog-heye/',
  title: 'blog-heye',
  description: 'Vuepress blog demo',

  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/xxxxxxx/blog-demo',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FirstBlog', link: '/blog/firstBlog.md' }
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/firstBlog.md', '我的第一篇博客']
    ]
  }
}
