//import { text } from 'stream/consumers'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
//  base: "/honglou-dome/",
  title: "Go社区：小众的福音",
  description: "红楼Go,字母圈的福音",
  themeConfig: {
    outlineTitle:"文章目录",
           // 设置搜索框的样式
           search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索文档",
                  buttonAriaLabel: "搜索文档",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询条件",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
       
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '介绍', link: '/giude/jieshao' },
    //  { text: '使用指南', link: '/menu1/',activeMatch:'/menu1/' },
      { text: '相关链接', items: [
        {text:"李衍",link:"/menu2/"},
        {text:"相亲去了",link:"/"},
        {text:"回头做",link:"/"},
        {text:"合作相关",link:"/"},
      ]},
      { text: '生态系统', items: [
        {text:"团队",link:"/giude/tuandui"},
        {text:"加入我们",link:"/giude/jiaru"},
        {text:"反馈建议",link:"/giude/fankui"},

      ]},
      { text: '给大家的寄语', link: '/giude/jiyu' },
    ],

    sidebar: {
      //第一个页面
    '/menu1/': [
      {
        text: 'Go全系产品',
        items: [
          { text: '123', link: '/menu1/a' }, 
          { text: 'One', link: '/menu1/b' }, 
          { text: 'Two', link: '/menu1/c' },
          { text: 'ccc', link: '/menu1/d' },
        ]
      },
      {
        text: '合作产品',
        collapsed:true,
        items: [
          { text: '123', link: '/menu1/e' }, 
          { text: 'One', link: '/menu1/f' }, 
          { text: 'Two', link: '/menu1/l' },
          { text: 'ccc', link: '/menu1/m' },
        ]
      }
    ],
      //第二个页面
    '/menu2/': [
      {
        text: 'Config',
        items: [    
          { text: 'Index', link: '/menu2/a' }, 
          { text: 'Three', link: '/menu2/b' }, 
          { text: 'Four', link: '/menu2/c' } 
        ]
      }
    ]
  },

/*第三种    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/a.md' },
            { text: 'One', link: '/guide/b.md' },
            { text: 'Two', link: '/guide/c.md' }
          ]
        }
      ],
      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ],
    },  */        

/*    sidebar:{
      '/menu1':[
        {
          text: 'section 1',
          collapsed: true,
          items:[
            {text:'a',link:'/menu1/d'},
            {text:'b',link:'/menu1/a'},
            {text:'a',link:'/menu1/b'},
            {text:'b',link:'/menu1/c'},
           ]
        },
        {
          text: 'section 2',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 3',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
      ],
      '/menu2':[
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
      ],
      '/menu3':[
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
      ],
      '/menu5':[
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
        {
          text: 'section 1',
          collapsed: false,
          items:[
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            {text:'a',link:'/menu1/'},
            {text:'b',link:'/menu1/'},
            ]
        },
      ],
    },*/

    /*第二种
    sidebar:[
      {
        text:'',
        items:[
          {text:"",link:''},
          {text:"",link:''},
          {text:"",link:''},
        ]
      },
      {
        text:'',
        items:[
          {text:"",link:''},
          {text:"",link:''},
          {text:"",link:''},
        ]
      },
      {
        text:'',
        items:[
          {text:"",link:''},
          {text:"",link:''},
          {text:"",link:''},
        ]
      },
    ],  */
    socialLinks: [
      { icon: 'instagram', link: '' }
    ],
  
    footer: {
      copyright: `
         MIT Licensed | Copyright © 2024-present Go社区 · 李衍（Yan-Li）<br>
          <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">晋ICP备2022005206号-2</a>
        `
      }
    }
})
