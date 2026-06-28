# 回溯算法

回溯算法是一种通过探索所有可能的候选解来找出所有解的算法。

## 什么是回溯

回溯是一种暴力搜索方法，通过不断尝试来寻找问题的解。当发现当前路径不可行时，就回退到上一步，尝试其他路径。

## 核心思想

回溯算法的基本思路是：
1. **选择**：做出一个选择
2. **探索**：递归探索这个选择的后续
3. **撤销**：撤销这个选择，回到之前的状态

## 回溯模板

```javascript
function backtrack(path, choices) {
  // 结束条件
  if (满足结束条件) {
    result.push([...path]);
    return;
  }
  
  // 遍历所有选择
  for (let choice of choices) {
    // 做选择
    path.push(choice);
    
    // 递归
    backtrack(path, newChoices);
    
    // 撤销选择
    path.pop();
  }
}
```

## 经典问题

### 全排列

```javascript
function permute(nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);
  
  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      
      path.push(nums[i]);
      used[i] = true;
      
      backtrack(path);
      
      path.pop();
      used[i] = false;
    }
  }
  
  backtrack([]);
  return result;
}
```

## 常见类型

1. **排列问题**：全排列、下一个排列
2. **组合问题**：组合总和、子集
3. **搜索问题**：N 皇后、数独
4. **分割问题**：分割回文串

## 优化技巧

1. **剪枝**：提前判断当前路径是否可行
2. **排序**：先排序可以方便剪枝
3. **去重**：使用标记数组避免重复

继续学习：[排列组合](./permutation.md)
