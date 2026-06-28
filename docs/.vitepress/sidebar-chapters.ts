// 自动生成章节侧边栏配置
export function generateChaptersSidebar() {
  const chapters = []
  
  // 生成1-254章的配置
  for (let i = 1; i <= 254; i++) {
    const num = String(i).padStart(2, '0')
    chapters.push({
      text: `第${i}章`,
      link: `/novel/chapters/${num}`
    })
  }
  
  // 按每50章分组
  const groups = []
  const groupSize = 50
  
  for (let i = 0; i < chapters.length; i += groupSize) {
    const start = i + 1
    const end = Math.min(i + groupSize, chapters.length)
    
    groups.push({
      text: `第${start}-${end}章`,
      collapsed: i > 0, // 第一组默认展开，其他折叠
      items: chapters.slice(i, i + groupSize)
    })
  }
  
  return [
    {
      text: '章节目录',
      items: [
        { text: '返回目录页', link: '/novel/' }
      ]
    },
    ...groups
  ]
}
