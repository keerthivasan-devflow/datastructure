

## Remove Outermost Parantheses using Stack
```html
initialize an empty stack
initialize result as an empty string

for each character ch in string s:
    if ch is an opening bracket:
        push ch onto stack
        if stack size > 1:
            result = result + ch

    else if ch is a closing bracket:
        if stack size > 1:
            result = result + ch
        pop top element from stack
return result
```

## Next Greater Element

```html
function nextGreaterElement(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let foundIndex = nums2.indexOf(nums1[i]);
    let nextGreater = -1;
    for (let j = foundIndex + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        nextGreater = nums2[j];
        break;
      }
    }
    result.push(nextGreater);
  }
  return result;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// Output: [-1, 3, -1]
```

```html
function nextGreaterElement(nums1, nums2):
    create empty map ngeMap
    create empty stack
    
    n = length of nums2
    
    push nums2[n-1] onto stack
    set ngeMap[nums2[n-1]] = -1
    
    for i from n-2 down to 0:
        while stack is not empty:
            top = stack.peek()
            if nums2[i] > top:
                stack.pop()
            else:
                ngeMap[nums2[i]] = top
                break
        
        if stack is empty:
            ngeMap[nums2[i]] = -1
        
        push nums2[i] onto stack
    
    create result list by mapping each element e in nums1 to ngeMap[e]
    
    return result
```


```html
| i | n | top | arr[i]  | arr[top]  | Stack Before| Stack After| res[i] |
| - | - | --- | ------- | --------- | ----------- | ---------- | -------|
| 6 | 8 | 7   | 76      | 73        | [7]         | [6]        | 0      |
| 5 | 8 | 6   | 72      | 76        | [6]         | [6, 5]     | 1      |
| 4 | 8 | 5   | 69      | 72        | [6, 5]      | [6, 5, 4]  | 1      |
| 3 | 8 | 4   | 71      | 69        | [6, 5, 4]   | [6, 5, 3]  | 2      |
| 2 | 8 | 3   | 75      | 71        | [6, 5, 3]   | [2]        | 4      |
| 1 | 8 | 2   | 74      | 75        | [2]         | [2, 1]     | 1      |
| 0 | 8 | 1   | 73      | 74        | [2, 1]      | [2, 1, 0]  | 1      |
```