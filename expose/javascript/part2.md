# Part2. A Little More of a challenge
1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. 
   * It will print the total number of index which we create in line 19 which is **3**, since **var i** can be drclared in the function scope.
2. ^^^What will happen at line 13 and why? If the code causes an error, explain why^^^
   * It will print the discountPrice, which is 150, since **var i** can be drclared in the function scope, the last element in the discounted array is 300 and discount is 0.5.
3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   * It will print the finalPrice which is 150 since the last push element to the discounted array is 150.
4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
   * This function will return the array of discounted which is **[50,100,150]**. In the for loop, we calculate the discount price and push the finalprice to the discount, in line 16, it will return the array of discounted.
5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   * It will show the error since i is out of for loop and i declared as **let** is not in the block scope. So it will show the error said " i is not defined"
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   * The code cause an error since discountedPrice is declared in the for loop, **let** can only let variable declared in the block scope. So in line13, discountedPrice is out of for loop. Therefore, the result will show that “ discountedPrice is not defined.
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   * It will print 150 which is the price that 300 uses discount. Since we declared finalPrice in the function scope, not in the for loop, we can print it in line 14.
8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
   * The function will return the array of discounted since we declare discounted[] in the function scope.
9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
   ^^^
   * The code causes an error. It will show that "i is not defined". The reason is i declared in for loop and variables declared as **let** can only in the block scope. 
10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why.
     * It will print the length of prices, which is **"3"**. First we declared length as prices.length at line 4, and we did not change anything about it. When the code run to line 12, it will print the length that we declared.
11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
     * It will return the array of discounted. We declared discounted as a const array, then we push the discountedPrice in to discounted. Finally, we return it in line 14. If we use discountPrice function as line 17, it will return the discounted array as **[50,100,150]**.
## Data Types
12. Given the above Object, write the notation for: 
    1. Accessing the value of the name property in the student object 
       * **student.name**
    2. Accessing thevalue of the Grad Year property in the student object
       * **student["Grad Year"]**
    3. Calling the function for the greeting property in the student object
       * **student.greeting**
    4. Accessing the name property of the object in the Favorite Teacher property in student
       * **student["Favorite Teacher"].name**
    5. Access index zero in the array of the courseLoad property of the student object
       * **student.courseLoad[0]**
## Basic Operators & Type Conversion
13. Arithmetic
    1. '3'+2: Output: **"32"**, since integers map to their ecact string representation.
    2. '3'-2: Output: **1**, since the string become integer because of "-".
    3. 3 + null: Output: **3**, since null become integer 0, then 3+0 = 0.
    4. true + 3: Output: **4** , sicne true maps to 1 and 1+3 is 4.
    5. false + null: Output: **0**, since false and null are becomed 0 then 0+0 = 0.
    6. '3' + undefined: Output: **"3undefined"**, since undefined is coverted to string then two string added.
    7. '3' - undefined: Output: **NaN**, since 3 can notsubstract undefined, so it will be NaN.
14. Comparison
    1. ‘2’ > 1:  Output: **true**, since string 2 become number 2 and 2 is greater than 1.
    2. ‘2’ < ‘12’:  Output: **false**, since the string always compare the first character, since 2 is greater than 1, so it the answer is false.
    3. 2 == ‘2’: Output: **true**, since string 2 become number 2, 2 is equal to 2.
    4. 2 === ‘2’: Output: **false**, since the type is different.
    5. true == 2: Output: **false**, since true is equal to 1, 1 is less than 2.
    6. true === Boolean(2): Output: **true**, since Boolean(2) is true, true is equal to true. 
15. Explain the difference between the == and === operators.
    * The == operator type converts the operands before comparing them, while the "===" operator compares the values along with the data types of the operands.
## Function
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    * It will return a newArr which the elements are [2,4,6]. In line 13, function modifyArray has two parameter: [1,2,3] and doSomething. Then it will go into the function scope. In line 2 we create a newArr, then we go over [1,2,3], then we call doSomething, doSomething has one parameter and it will return the 2*number. So in line 4, we first call doSomething and make the element in array become double, then we push it in to newArr one by one. Then the code go to line6 and return the newArr.
19. What is the output of the above code? 
    * 1 4 3 2. First, it will print 1 and line 3 it has delay for one second, then it will go to line 4, since then setTimeout still delay the execution of the log, so 4 will print after 1 then 3 and final is 2.