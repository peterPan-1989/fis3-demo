
var root = fis.project.getProjectPath();


var outDir = './output',
    staticDir = outDir + "/static";

fis
    .hook('amd', {
        baseUrl: '/',
        paths: {
            'jquery': 'lib/jquery/jquery'

        },
        shim : {
            "jquery" : {
                exports: '$'
            }
        }
    })
    //less 输出
    .match(/^\/css\/common\/([^\/]+?)\.less/, {
        release: false
    },true)
    .match(/\.less$/, {
        parser: fis.plugin('less', {}),
        rExt: '.css'
    })
    //html 配置
    .match(/\.tpl/, {
        isHtmlLike : true,
        useHash : false
    },100)

    //隐藏mock文件
    .match(/\.mock/,{
        release : false
    })

    .match('*', {
        useHash : true,
        deploy: fis.plugin('local-deliver', {
            to: staticDir
        })
    },1)

//解释tpl模版
    .match(/\.tpl/, {
        rExt : '.html',
        loaderLang: 'html',
        parser :fis.plugin('velocity', {
            loadJs: true,
            loader: 'requirejs',
            loadSync: true,
            root: [root]
        })
    },100)

    /*.match('::package', {
        postpackager: fis.plugin('loader', {
            resourceType: 'amd',
            useInlineMap: true,
            allInOne: true
        })
    })*/






