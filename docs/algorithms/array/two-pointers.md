# 双指针

双指针是数组问题中最常用的技巧之一。

## 什么是双指针

双指针技巧是指使用两个指针在数组中移动，来解决特定问题的方法。

## 常见类型

### 1. 对撞指针

两个指针分别从数组两端开始，向中间移动。

```javascript
function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [-1, -1];
}
```

**应用场景**：
- 两数之和（有序数组）
- 反转数组
- 判断回文串

### 2. 快慢指针

两个指针以不同速度移动。

```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  
  return slow + 1;
}
```

**应用场景**：
- 删除重复元素
- 移动零
- 链表找环

### 3. 同向指针

两个指针同向移动，保持一定关系。

```javascript
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  
  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  
  return maxSum / k;
}
```

**应用场景**：
- 固定窗口问题
- 子数组问题

## 解题技巧

1. **确定指针起始位置**：根据问题特点选择合适的初始位置
2. **明确移动条件**：什么情况下移动哪个指针
3. **注意边界条件**：防止指针越界

## 练习题目

- LeetCode 167: 两数之和 II
- LeetCode 26: 删除有序数组中的重复项
- LeetCode 283: 移动零
- LeetCode 11: 盛最多水的容器

下一节：[滑动窗口](./sliding-window.md)
