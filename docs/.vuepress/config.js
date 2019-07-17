module.exports = {
    base: '/blog/',
    title: '一条大何全靠浪',
    description: '~~~~~~~~~',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/heye1109/blog',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            {text: '主页', link: '/'},
            {text: '博客', link: '/blog/firstBlog.md'},
            {
                text: '求索',
                items: [
                    // link：指向链接也可以是外网链接
                    {text: 'Segmentfault', link: 'https://segmentfault.com/u/mulander'},
                ]
            },
        ],
        sidebar: [
            ['/', '首页'],
            {
                title: '我的博客',
                children: [
                    ['/blog/firstBlog.md', 'vuePress+github搭建博客'],
                    ['/blog/vue.md', 'md中使用vue']
                ]
            }

        ]
    }
}
