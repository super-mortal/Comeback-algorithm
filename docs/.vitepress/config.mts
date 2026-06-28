import { defineConfig } from 'vitepress'
import { generateChaptersSidebar } from './sidebar-chapters'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "逆袭算法",
  description: "Comeback Algorithm - 原创小说网站",
  lang: 'zh-CN',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/novel/chapters/01' },
      { text: '章节目录', link: '/novel/' },
      { text: '创作资料', link: '/meta/' }
    ],

    sidebar: {
      '/novel/': generateChaptersSidebar(),
      
      '/meta/': [
        {
          text: '核心设定',
          collapsed: false,
          items: [
            { text: '故事前提', link: '/meta/premise' },
            { text: '世界观规则', link: '/meta/world-rules' },
            { text: '人物关系', link: '/meta/relationships' }
          ]
        },
        {
          text: '结构设计',
          collapsed: false,
          items: [
            { text: '完整大纲', link: '/meta/outline' },
            { text: '分层大纲', link: '/meta/layered-outline' },
            { text: '伏笔账本', link: '/meta/foreshadowing' },
            { text: '时间线', link: '/meta/timeline' }
          ]
        },
        {
          text: '角色档案',
          collapsed: false,
          items: [
            { text: '角色档案', link: '/meta/characters' }
          ]
        }
      ],
      
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '如何使用', link: '/guide/getting-started' },
            { text: '学习路线', link: '/guide/learning-path' }
          ]
        },
        {
          text: '基础知识',
          items: [
            { text: '时间复杂度', link: '/guide/time-complexity' },
            { text: '空间复杂度', link: '/guide/space-complexity' },
            { text: '常用技巧', link: '/guide/common-tricks' }
          ]
        }
      ],
      
      '/algorithms/': [
        {
          text: '数组',
          collapsed: false,
          items: [
            { text: '概述', link: '/algorithms/array/' },
            { text: '双指针', link: '/algorithms/array/two-pointers' },
            { text: '滑动窗口', link: '/algorithms/array/sliding-window' }
          ]
        },
        {
          text: '链表',
          collapsed: false,
          items: [
            { text: '概述', link: '/algorithms/linked-list/' },
            { text: '反转链表', link: '/algorithms/linked-list/reverse' },
            { text: '快慢指针', link: '/algorithms/linked-list/fast-slow' }
          ]
        },
        {
          text: '树',
          collapsed: false,
          items: [
            { text: '概述', link: '/algorithms/tree/' },
            { text: '遍历', link: '/algorithms/tree/traversal' },
            { text: '二叉搜索树', link: '/algorithms/tree/bst' }
          ]
        },
        {
          text: '动态规划',
          collapsed: false,
          items: [
            { text: '概述', link: '/algorithms/dynamic-programming/' },
            { text: '入门题目', link: '/algorithms/dynamic-programming/basics' }
          ]
        },
        {
          text: '回溯算法',
          collapsed: false,
          items: [
            { text: '概述', link: '/algorithms/backtracking/' },
            { text: '排列组合', link: '/algorithms/backtracking/permutation' }
          ]
        }
      ],
      
      '/solutions/': [
        {
          text: '题解列表',
          items: [
            { text: '全部题解', link: '/solutions/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/super-mortal/comeback-algorithm' }
    ],

    footer: {
      message: '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank">CC BY-NC-ND 4.0 许可</a> | 禁止商用 | 内容由 AI 辅助生成',
      copyright: 'Copyright © 2026'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
