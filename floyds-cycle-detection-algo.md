
Floyd’s Cycle Detection Algorithm (also known as the Tortoise and Hare Algorithm) is a classic algorithm used in data structures and algorithms (DSA) to detect cycles in a sequence of values, most commonly in linked lists.

# Purpose
To detect if a cycle exists in a linked list or any sequence that can be represented as a series of pointers/references (like in a function f(x) where x maps to another value).

# How It Works - It uses slow and faster pointer approach
- Slow Pointer (Tortoise): moves one step at a time.
- Fast Pointer (Hare): moves two steps at a time.

# Steps
- Initialize both pointers at the head of the list.
- Move the slow pointer by one node and the fast pointer by two nodes in each iteration.
- If there is a cycle, the fast pointer will eventually meet the slow pointer.

