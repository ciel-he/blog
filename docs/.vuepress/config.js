module.exports = {
  base: '/blog/',
  title: '一条大何全靠浪',
  description: 'Vuepress blog demo',

  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/heye1109/blog',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/firstBlog.md' }
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/firstBlog.md', 'vuePress+github搭建博客']
    ]
  }
}
