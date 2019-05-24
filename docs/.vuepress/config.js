module.exports = {
    base: '/test_vuepress/',
    title: 'Site de test - VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Accueil', link: '/' },
            { text: 'Tests', link: '/tests/' }
        ]
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: true },
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2, 3] },
        config: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-mark'))
        }
    },
    plugins: [
        [
            'prismjs',
            {
                toolbar: true, //default false
                keyboard: true, //default false
                previewer: true, //default false
            },
        ],
    ],
}
