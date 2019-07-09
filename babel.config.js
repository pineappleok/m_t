module.exports = {
    presets: [
        '@vue/app'
    ],
    /* plugins:[
        [
            'import',
            {
                libraryName: 'vant',
                libraryDirectory: 'es',
                // 指定样式路径
                style: name => `${name}/style/less`
            },
            'vant'
        ]
    ] */
    // 自动按需引入配置
    /* plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ] */
}
