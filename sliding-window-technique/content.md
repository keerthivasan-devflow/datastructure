- https://builtin.com/data-science/sliding-window-algorithm

## What is sliding window algorithm?

- The sliding window algorithm is a problem-solving technique that’s designed to transform two nested loops into a single loop. It applies to arrays, lists or strings. Such problems are often approached with brute-force solutions that run in O(n²) or O(n³), but these are inefficient for large inputs.

## Below are some fundamental clues to identify sliding window algorithm problems

Examples : array, list or string type of data structure

- Fixed Sliding Window (Fixed length) - Finding maximum or minimum subarray, substrings which satisfy some specific condition.
- Dynamic Sliding Window (Variable length) - Concept is mainly based on ideas like the longest or shortest sequence of something that satisfies a given condition perfectly.

## Below is the basic steps to solve problems related to the sliding window technique:

- Use a HashMap or dictionary to count a specific array input and increase the window toward the right using an outer loop or advance window.
- Use an inner loop (or pointer) to shrink the window from the left when certain conditions are met.
- Store the maximum (or minimum) value found in any valid window during iteration, depending on the problem's goal.

## Examples

- Maximum Sum Subarray of Size K
  - Given an array of positive integers and a positive number k, find the maximum sum of any contiguous subarray of size k


# Sliding Window Technique

Definition: A specific kind of two-pointer approach where the window (subarray or substring) is "slid" across the data while maintaining a condition (like a fixed size or a sum).

Use Case: Problems involving subarrays, substrings, max/min in window, etc.

Typical Pattern:

One pointer expands the window (usually the right pointer).
The other (usually left) shrinks it to maintain a constraint (like length or sum).
The sliding window technique is a special case of the two-pointer technique. All sliding window problems use two pointers, but not all two-pointer problems are sliding window problems.


4. Finding the shortest/longest subarray with a condition
Often used with hash maps or sets to track elements.

let left = 0;
let set = new Set();

for (let right = 0; right < s.length; right++) {
  while (set.has(s[right])) {
    set.delete(s[left]);
    left++;
  }
  set.add(s[right]);
  // track max length here
}
