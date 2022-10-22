1. What was the bug?
   * The bug is when user put first number and seond number then calculate, the **Sum** will become union of those number. For example, 2+2 will become 22. Other bug is in the function calculateSum, both line in the function scope forget ";" in the end of code.
2. How would you fix it?
   * The reason why that happen because those two number become string, they are not number. So I just create a variable called Summy and add + to make string become integer. For other bug, we just add ";" in the end of the code.
  * ![fix Image](/explore/devtools/fix.png)
