const questions = [
  
  {
  type: "radio",

  question: `

[1.a.2] Consider the accompanying definition of a recursive function below. Which of the following statements represents the base case?

<pre><code class="language-python">def foo(n):                   # Line 1
    if (n == 0):              # Line 2
        return 0              # Line 3
    else:                     # Line 4
        return n + foo(n - 1) # Line 5</code></pre>

`,

  answers: [
    "Statements in Lines 1-5.",
    "Statements in Lines 2 and 3.",
    "Statements in Lines 4 and 5.",
    "Statements in Lines 3, 4, and 5."
  ],

  correct: "Statements in Lines 2 and 3.",

  explanation: `
The <strong>base case</strong> is the condition that stops the recursion.

<pre><code class="language-python">if (n == 0):
    return 0</code></pre>

When <code>n == 0</code>, the function returns a value immediately and does not make another recursive call.

The recursive case is:

<pre><code class="language-python">return n + foo(n - 1)</code></pre>

because the function calls itself with a smaller value of <code>n</code>.

Therefore, the correct answer is <strong>Statements in Lines 2 and 3.</strong>
`
},

{
  type: "radio",
  question: `
[1.a.2] Consider the accompanying definition of a recursive function below. Which of the following statements represent the general case?

<pre><code class="language-python">def foo(n):                    # Line 1
    if (n == 0):               # Line 2
        return 0               # Line 3
    else:                      # Line 4
        return n + foo(n - 1)  # Line 5</code></pre>
`,
  answers: [
    "Statements in Lines 1-5.",
    "Statements in Lines 4 and 5.",
    "Statements in Lines 3, 4, and 5.",
    "Statements in Lines 2 and 3."
  ],
  correct: "Statements in Lines 4 and 5.",
  explanation: `
The <strong>general case</strong> is the part of the recursive function that performs the recursive call.<br><br>

<strong>Line 4</strong> (<code>else:</code>) begins the general case.<br>
<strong>Line 5</strong> (<code>return n + foo(n - 1)</code>) performs the recursive call.<br><br>

The base case is handled by <strong>Lines 2 and 3</strong>.<br><br>

Therefore, the correct answer is <strong>Statements in Lines 4 and 5.</strong>
`
},

{
  type: "checkbox",
  question: `
Fill in the code to complete the following function for computing factorial. Please select all that apply.

<pre><code class="language-python">def factorial(n):
    if n == 0:    # Base case
        return 1
    else:
        return ____________  # Recursive call</code></pre>
`,
  answers: [
    "n * (n - 1)",
    "n",
    "n * factorial(n - 1)",
    "factorial(n - 1) * n"
  ],
  correct: [
    "n * factorial(n - 1)",
    "factorial(n - 1) * n"
  ],
  explanation: `
A recursive factorial function multiplies <code>n</code> by the factorial of the previous number.<br><br>

Both of the following expressions are mathematically equivalent:<br>
<ul>
<li><code>n * factorial(n - 1)</code></li>
<li><code>factorial(n - 1) * n</code></li>
</ul>

The other choices are incorrect because they either do not make a recursive call or do not compute the factorial correctly.<br><br>

Therefore, the correct answers are:<br>
<strong>n * factorial(n - 1)</strong><br>
<strong>factorial(n - 1) * n</strong>
`
},
{
  type: "radio",
  question: "How many times is the recursive <code>moveDisks</code> function invoked for 4 disks?",
  answers: [
    "5",
    "10",
    "15",
    "20"
  ],
  correct: "15",
  explanation: `
The Tower of Hanoi recursive function follows the recurrence:

<pre><code class="language-python">T(n) = 2T(n - 1) + 1</code></pre>

For 4 disks:

<ul>
<li>T(1) = 1</li>
<li>T(2) = 3</li>
<li>T(3) = 7</li>
<li>T(4) = 15</li>
</ul>

Therefore, the recursive <code>moveDisks</code> function is invoked <strong>15</strong> times.
`
},
{
  type: "radio",
  question: "How many times is the factorial function in LiveExample 15.1 invoked for factorial(5)?",
  answers: [
    "3",
    "4",
    "5",
    "6"
  ],
  correct: "6",
  explanation: `
The recursive calls are:

<pre><code class="language-python">factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
factorial(0)</code></pre>

The function is invoked once for each value from <strong>5</strong> down to <strong>0</strong>, including the base case.

Therefore, the total number of function invocations is <strong>6</strong>.
`
},

{
  type: "radio",
  question: "How many times is the recursive moveDisks function invoked for 3 disks?",
  answers: [
    "3",
    "7",
    "10",
    "14"
  ],
  correct: "7",
  explanation: `
The recursive algorithm follows this recurrence:

<pre><code class="language-python">T(n) = 2T(n-1) + 1
T(0) = 0</code></pre>

For <strong>3 disks</strong>:

<pre><code class="language-python">moveDisks(3)
├── moveDisks(2)
│   ├── moveDisks(1)
│   └── moveDisks(1)
└── moveDisks(2)
    ├── moveDisks(1)
    └── moveDisks(1)</code></pre>

Counting every invocation:

<pre><code class="language-python">moveDisks(3)  = 1
moveDisks(2)  = 2
moveDisks(1)  = 4
----------------
Total calls    = 7</code></pre>

Therefore, the correct answer is <strong>7</strong>.
`
},
{
  type: "radio",
  question: `
Analyze the following code:

<pre><code class="language-python">def xfunction(x, length):
    print(x[length - 1], end=" ")
    xfunction(x, length - 1)

x = [1, 2, 3, 4, 5]
xfunction(x, 5)</code></pre>
`,
  answers: [
    "The program displays 1 2 3 4 6.",
    "The program displays 1 2 3 4 5 and then raises an index out of range exception.",
    "The program displays 5 4 3 2 1.",
    "The program displays 5 4 3 2 1 5 4 3 2 1 and then raises an index out of range exception."
  ],
  correct: "The program displays 5 4 3 2 1 5 4 3 2 1 and then raises an index out of range exception.",
  explanation: `
The function has <strong>no base case</strong>, so it keeps calling itself recursively.

<br><br>

It first prints:
<pre><code>5 4 3 2 1</code></pre>

When <code>length</code> becomes <code>0</code>, Python accesses
<code>x[-1]</code>, which is the last element of the list, so it prints:
<pre><code>5 4 3 2 1</code></pre>

again.

<br><br>

The recursion continues until Python attempts to access
<code>x[-6]</code>, which does not exist, causing an
<strong>IndexError (list index out of range)</strong>.

<br><br>

Therefore, the correct answer is:

<strong>The program displays 5 4 3 2 1 5 4 3 2 1 and then raises an index out of range exception.</strong>
`
},
{
  type: "radio",
  question: `
What are the base cases in the following recursive function?

<pre><code class="language-python">def xfunction(n):
    if n > 0:
        print(n % 10)
        xfunction(n // 10)</code></pre>
`,
  answers: [
    "n > 0",
    "n <= 0",
    "no base cases",
    "n < 0"
  ],
  correct: "n <= 0",
  explanation: `
The recursive function only calls itself while <code>n > 0</code>.

<br><br>

When <code>n</code> becomes <code>0</code> (or any value less than 0), the
condition <code>n > 0</code> is false, so the function stops making recursive
calls and returns automatically.

<br><br>

Therefore, the recursion terminates when:

<pre><code>n <= 0</code></pre>

This is the <strong>base case</strong>.

<br><br>

Therefore, the correct answer is:

<strong>n <= 0</strong>.
`
},
{
  type: "checkbox",

  question: `
Fill in the code to complete the following function for computing a Fibonacci number.
Please select all that apply.

<pre><code class="language-python">def fib(index):
    if index == 0:      # Base case
        return 0
    elif index == 1:    # Base case
        return 1
    else:               # Reduction and recursive calls
        return ____________________</code></pre>
`,

  answers: [
    "fib(index - 1)",
    "fib(index - 2)",
    "fib(index - 1) + fib(index - 2)",
    "fib(index - 2) + fib(index - 1)"
  ],

  correct: [
    "fib(index - 1) + fib(index - 2)",
    "fib(index - 2) + fib(index - 1)"
  ],

  explanation: `
The Fibonacci recursive definition is:

<pre><code class="language-python">fib(index) = fib(index - 1) + fib(index - 2)</code></pre>

The order of addition does not matter because addition is commutative:

<pre><code class="language-python">a + b == b + a</code></pre>

Therefore both of these are correct:

<pre><code class="language-python">fib(index - 1) + fib(index - 2)

fib(index - 2) + fib(index - 1)</code></pre>

The first two choices are incorrect because they make only one recursive call instead of two.
`
},

{
  type: "radio",

  question: `
How many times is the <span class="keyword">fib</span> function in LiveExample 15.2 invoked for <span class="keyword">fib(5)</span>?
`,

  answers: [
    "14",
    "15",
    "25",
    "31",
    "32"
  ],

  correct: "15",

  explanation: `
Every recursive call counts as one invocation.

The call tree for <code>fib(5)</code> is:

<pre><code class="language-python">fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1)
│   │   │   └── fib(0)
│   │   └── fib(1)
│   └── fib(2)
│       ├── fib(1)
│       └── fib(0)
└── fib(3)
    ├── fib(2)
    │   ├── fib(1)
    │   └── fib(0)
    └── fib(1)</code></pre>

Counting every call gives a total of <strong>15</strong> function invocations.

Therefore, the correct answer is <strong>15</strong>.
`
},
{
  type: "checkbox",
  question: `
Fill in the code to complete the following function for checking whether a string is a palindrome.
Please select all that apply.

<pre><code class="language-python">def isPalindrome(s):
    return isPalindromeHelper(s, 0, len(s) - 1)

def isPalindromeHelper(s, low, high):
    if high <= low:  # Base case
        return True
    elif s[low] != s[high]:  # Base case
        return False
    else:
        return __________________________</code></pre>
`,
  answers: [
    "isPalindromeHelper(s)",
    "isPalindromeHelper(s, low, high)",
    "isPalindromeHelper(s, low + 1, high)",
    "isPalindromeHelper(s, low, high - 1)",
    "isPalindromeHelper(s, low + 1, high - 1)"
  ],
  correct: [
    "isPalindromeHelper(s, low + 1, high - 1)"
  ],
  explanation: `
After confirming that the first and last characters are equal,
the recursive call should continue checking the substring inside them.

<pre><code class="language-python">return isPalindromeHelper(s, low + 1, high - 1)</code></pre>

The <code>low</code> index moves one position to the right,
and the <code>high</code> index moves one position to the left.

Therefore, the correct answer is:

<strong>isPalindromeHelper(s, low + 1, high - 1)</strong>.
`
},
{
  type: "radio",
  question: `
What is the maximum number of the activation records when running
<strong>ComputeFactorialTailRecursion.py</strong> with input <strong>3</strong>?
Count invoking the main function as <strong>1 activation record</strong>.
`,
  answers: [
    "1",
    "2",
    "3",
    "4"
  ],
  correct: "3",
  explanation: `
An <strong>activation record</strong> (stack frame) is created whenever a function is called.

In <strong>ComputeFactorialTailRecursion.py</strong>, the maximum number of activation records on the call stack for input <strong>3</strong> is <strong>2</strong>.

The call stack consists of:
<ul>
  <li>The main function (counted as 1 activation record).</li>
  <li>One active recursive function call.</li>
</ul>

Therefore, the maximum number of activation records is <strong>2</strong>.
`
},
{
  type: "radio",
  question: `
Fill in the code to complete the following function for checking
whether a string is a palindrome.
<br><br>

<pre><code class="language-python">def isPalindrome(s):
    if len(s) <= 1:  # Base case
        return True
    elif ______________________
        return False
    else:
        return isPalindrome(s[1:-1])</code></pre>
`,
  answers: [
    "s[0] != s[-1]  # Base case",
    "s[0] != s[len(s)]  # Base case",
    "s[1] != s[len(s) - 1]  # Base case",
    "s[1] != s[len(s)]  # Base case"
  ],
  correct: "s[0] != s[-1]  # Base case",
  explanation: `
To determine whether a string is a palindrome:

<pre><code class="language-python">if len(s) <= 1:
    return True
elif s[0] != s[-1]:
    return False
else:
    return isPalindrome(s[1:-1])</code></pre>

The function first compares the <strong>first</strong> and <strong>last</strong> characters.

If they are different, the string is <strong>not</strong> a palindrome, so it returns <strong>False</strong>.

If they are equal, the function recursively checks the substring without the first and last characters.

Therefore, the correct answer is:

<strong>s[0] != s[-1]</strong>.
`
},

{
  type: "radio",
  question: `
What will be displayed by the following code?

<pre><code class="language-python">def main():
    s = "abcdabc"; ch = 'a'
    times = count(s, ch)
    print(ch + " appears " + str(times) +
          (" times " if times > 1 else " time ") + "in " + s)

def count(s, a):
    return countHelper(s, a, len(s) - 1)

def countHelper(s, a, high):
    result = 0
    if high > 0:
        result = countHelper(s, a, high - 1) + (1 if s[high] == a else 0)
    return result

main()</code></pre>
`,
  answers: [
    "a appears 1 times in abcdabc",
    "a appears 2 times in abcdabc",
    "a appears 1 time in abcdabc",
    "a appears 2 time in abcdabc"
  ],
  correct: "a appears 1 time in abcdabc",
  explanation: `
The string is <code>"abcdabc"</code>.

The letter <code>a</code> appears at indexes <strong>0</strong> and <strong>4</strong>.

However, the recursive function uses:

<pre><code class="language-python">if high > 0:</code></pre>

This means it checks indexes <strong>6, 5, 4, 3, 2, 1</strong>, but it never checks index <strong>0</strong>.

Therefore, only the <code>a</code> at index <strong>4</strong> is counted.

So:

<pre><code>times = 1</code></pre>

Because <code>times > 1</code> is false, the program uses <strong>" time "</strong>, not <strong>" times "</strong>.

Therefore, the output is:

<strong>a appears 1 time in abcdabc</strong>
`
},
{
  type: "radio",
  question: `
Show the output of the following code:
<br><br>

<pre><code class="language-python">def f2(n, result):
    if n == 0:
        return 0
    else:
        return f2(n - 1, n + result)

print(f2(2, 0))</code></pre>
`,
  answers: [
    "0",
    "1",
    "2",
    "3"
  ],
  correct: "0",
  explanation: `
Trace the recursive calls:

<pre><code>f2(2, 0)
→ f2(1, 2)
→ f2(0, 3)
→ return 0</code></pre>

Although <code>result</code> is updated during each recursive call, it is never returned.

When the base case <code>n == 0</code> is reached, the function always returns <code>0</code>, and that value is propagated back through every recursive call.

Therefore, the output is:

<pre><code>0</code></pre>
`
},
{
  type: "radio",
  question: `
What is the return value for <code>xfunction(4)</code> after calling the following function?<br><br>

<pre><code class="language-python">def xfunction(n):
    if n == 1:
        return 1
    else:
        return n + xfunction(n - 1)</code></pre>
`,
  answers: [
    "12",
    "11",
    "10",
    "9"
  ],
  correct: "10",
  explanation: `
The function recursively adds all integers from <strong>n</strong> down to <strong>1</strong>.

<pre><code class="language-python">xfunction(4)
= 4 + xfunction(3)
= 4 + (3 + xfunction(2))
= 4 + 3 + (2 + xfunction(1))
= 4 + 3 + 2 + 1
= 10</code></pre>

Therefore, the correct answer is <strong>10</strong>.
`
},
{
  type: "checkbox",
  question: `
Which of the following statements are true? Please select all that apply.
`,
  answers: [
    "Every recursive function must have a base case or a stopping condition.",
    "Every recursive call reduces the original problem, bringing it increasingly closer to a base case until it becomes that base case.",
    "Infinite recursion can occur if recursion does not reduce the problem in a manner that allows it to eventually converge into the base case.",
    "Every recursive function must have a return value.",
    "A recursive function is invoked differently from a non-recursive function."
  ],
  correct: [
    "Every recursive function must have a base case or a stopping condition.",
    "Every recursive call reduces the original problem, bringing it increasingly closer to a base case until it becomes that base case.",
    "Infinite recursion can occur if recursion does not reduce the problem in a manner that allows it to eventually converge into the base case."
  ],
  explanation: `
A recursive function should include:

<ul>
<li><strong>A base case</strong> (stopping condition).</li>
<li><strong>A recursive step</strong> that makes the problem smaller each time.</li>
<li>If the problem is not reduced toward the base case, the recursion may continue forever, causing <strong>infinite recursion</strong>.</li>
</ul>

<strong>Statement 4</strong> is false because not every recursive function must return a value. Some recursive functions simply perform an action (for example, printing).

<strong>Statement 5</strong> is false because recursive functions are called exactly the same way as ordinary functions.
`
},
{
  type: "radio",
  question: `
Analyze the following two programs:

<pre><code class="language-python">A:
def xfunction(length):
    if length > 1:
        print(length - 1, end = " ")
        xfunction(length - 1)

xfunction(5)

B:
def xfunction(length):
    while length > 1:
        print(length - 1, end = " ")
        xfunction(length - 1)

xfunction(5)</code></pre>
`,
  answers: [
    "The two programs produce the same output 5 4 3 2 1.",
    "The two programs produce the same output 1 2 3 4 5.",
    "The two programs produce the same output 4 3 2 1.",
    "The two programs produce the same output 1 2 3 4.",
    "Program A produces the output 4 3 2 1 and Program B runs infinitely."
  ],
  correct: "Program A produces the output 4 3 2 1 and Program B runs infinitely.",
  explanation: `
<strong>Program A:</strong><br><br>

The function uses an <code>if</code> statement.<br>
Starting with <code>xfunction(5)</code>:<br><br>

<code>5 → prints 4</code><br>
<code>4 → prints 3</code><br>
<code>3 → prints 2</code><br>
<code>2 → prints 1</code><br>
<code>1 → stops</code><br><br>

Therefore, Program A prints:<br>
<strong>4 3 2 1</strong><br><br>

<strong>Program B:</strong><br><br>

It uses a <code>while length > 1</code> loop. The value of <code>length</code> in the current function call is never changed.<br><br>

After the recursive call returns, the same <code>while</code> condition is still true, so the loop calls the function again and again.<br><br>

Therefore, Program B runs indefinitely.<br><br>

Correct answer: <strong>Program A produces the output 4 3 2 1 and Program B runs infinitely.</strong>
`
},
{
  type: "radio",
  question: `
Analyze the following recursive function.

<pre><code class="language-python">def factorial(n):
    return n * factorial(n - 1)</code></pre>
`,
  answers: [
    "Invoking factorial(0) returns 0.",
    "Invoking factorial(1) returns 1.",
    "Invoking factorial(2) returns 2.",
    "Invoking factorial(3) returns 6.",
    "When factorial(n) is called with n having any values, it runs infinitely and causes a RecursionError exception."
  ],
  correct: "When factorial(n) is called with n having any values, it runs infinitely and causes a RecursionError exception.",
  explanation: `
This function has <strong>no base case</strong>.<br><br>

A recursive function must eventually stop by reaching a condition that returns a value without making another recursive call.<br><br>

Here, every call immediately executes:<br>

<pre><code class="language-python">return n * factorial(n - 1)</code></pre>

Even when <code>n</code> becomes 0, then -1, -2, and so on, the function continues calling itself forever.<br><br>

Eventually Python reaches its maximum recursion depth and raises a <strong>RecursionError</strong>.<br><br>

Therefore, the correct answer is:<br>
<strong>When factorial(n) is called with n having any values, it runs infinitely and causes a RecursionError exception.</strong>
`
},
{
  type: "radio",
  question: `
Analyze the following functions.

<pre><code class="language-python">def f1(n):
    if n == 0:
        return 0
    else:
        return n + f1(n - 1)

def f2(n, result):
    if n == 0:
        return result
    else:
        return f2(n - 1, n + result)

print(f1(3))
print(f2(3, 0))</code></pre>
`,
  answers: [
    "f1 is tail-recursive, but f2 is not.",
    "f2 is tail-recursive, but f1 is not.",
    "f1 and f2 are both tail-recursive.",
    "Neither f1 nor f2 is tail-recursive."
  ],
  correct: "f2 is tail-recursive, but f1 is not.",
  explanation: `
A <strong>tail-recursive</strong> function makes its recursive call as the <strong>last operation</strong> before returning.<br><br>

<strong>Function f1:</strong><br>

<pre><code class="language-python">return n + f1(n - 1)</code></pre>

The recursive call is <strong>not</strong> the last operation because Python must still add <code>n</code> after the call returns. Therefore, <strong>f1 is not tail-recursive</strong>.<br><br>

<strong>Function f2:</strong><br>

<pre><code class="language-python">return f2(n - 1, n + result)</code></pre>

The recursive call is the very last operation. Nothing remains to be done after it returns. Therefore, <strong>f2 is tail-recursive</strong>.<br><br>

Therefore, the correct answer is:<br>
<strong>f2 is tail-recursive, but f1 is not.</strong>
`
},
{
  type: "radio",
  question: "Which of the following statements are true?",
  answers: [
    "The Fibonacci series begins with 0 and 1, and each subsequent number is the sum of the preceding two numbers in the series.",
    "The Fibonacci series begins with 1 and 1, and each subsequent number is the sum of the preceding two numbers in the series.",
    "The Fibonacci series begins with 1 and 2, and each subsequent number is the sum of the preceding two numbers in the series.",
    "The Fibonacci series begins with 2 and 3, and each subsequent number is the sum of the preceding two numbers in the series."
  ],
  correct: "The Fibonacci series begins with 0 and 1, and each subsequent number is the sum of the preceding two numbers in the series.",
  explanation: `
The <strong>Fibonacci sequence</strong> traditionally begins with <strong>0</strong> and <strong>1</strong>.<br><br>

Each new number is obtained by adding the previous two numbers:<br><br>

<pre><code>0, 1, 1, 2, 3, 5, 8, 13, 21, ...</code></pre>

Therefore, the correct answer is:<br>
<strong>The Fibonacci series begins with 0 and 1, and each subsequent number is the sum of the preceding two numbers in the series.</strong>
`
},
{
  type: "radio",
  question: `
In the following function, what is the base case?<br><br>

<pre><code class="language-python">def xfunction(n):
    if n == 1:
        return 1
    else:
        return n + xfunction(n - 1)</code></pre>
`,
  answers: [
    "n is 1.",
    "n is greater than 1.",
    "n is less than 1.",
    "no base case."
  ],
  correct: "n is 1.",
  explanation: `
The <strong>base case</strong> is the condition that stops the recursion.<br><br>

In this function, recursion stops when:

<pre><code>if n == 1:
    return 1</code></pre>

At that point, the function returns <code>1</code> without making another recursive call.<br><br>

Therefore, the correct answer is <strong>n is 1.</strong>
`
},
{
  type: "radio",
  question: `
Which of the following statements is false?
`,
  answers: [
    "Recursive functions run faster than non-recursive functions.",
    "Recursive functions usually take more memory space than non-recursive functions.",
    "A recursive function can always be replaced by a non-recursive function.",
    "In some cases, however, using recursion enables you to give a natural, straightforward, simple solution to a program that would otherwise be difficult to solve."
  ],
  correct: "Recursive functions run faster than non-recursive functions.",
  explanation: `
Recursive functions are <strong>not inherently faster</strong> than non-recursive (iterative) functions. In fact, recursion often introduces additional function-call overhead and uses extra stack memory.<br><br>

The other statements are true:
<ul>
  <li>Recursive functions usually use more memory because each recursive call creates a new activation record on the call stack.</li>
  <li>Any recursive algorithm can be rewritten as an iterative (non-recursive) algorithm.</li>
  <li>Recursion often provides a simpler and more natural solution for problems such as tree traversal, divide-and-conquer algorithms, and backtracking.</li>
</ul>

Therefore, the false statement is <strong>"Recursive functions run faster than non-recursive functions."</strong>
`
},
{
  type: "radio",
  question: `
Fill in the code to complete the following function for sorting a list.
<br><br>

<pre><code class="language-python">def sort(lst):
    ____________________   # Sort the entire list

def sortHelper(lst, low, high):
    if low < high:
        # Find the smallest number and its index in lst[low .. high]
        indexOfMin = low
        min = lst[low]

        for i in range(low + 1, high + 1):
            if lst[i] < min:
                min = lst[i]
                indexOfMin = i

        # Swap the smallest in lst[low .. high] with lst[low]
        lst[indexOfMin] = lst[low]
        lst[low] = min

        # Sort the remaining list[low + 1 .. high]
        sortHelper(lst, low + 1, high)</code></pre>
`,
  answers: [
    "sortHelper(lst)",
    "sortHelper(lst, len(lst) - 1)",
    "sortHelper(lst, 0, len(lst) - 1)",
    "sortHelper(lst, 0, len(lst) - 2)"
  ],
  correct: "sortHelper(lst, 0, len(lst) - 1)",
  explanation: `
The helper function requires <strong>three arguments</strong>:
<ul>
  <li><strong>lst</strong> — the list to sort</li>
  <li><strong>low</strong> — the starting index (0)</li>
  <li><strong>high</strong> — the ending index (<code>len(lst) - 1</code>)</li>
</ul>

To sort the entire list, the initial call must be:

<pre><code class="language-python">sortHelper(lst, 0, len(lst) - 1)</code></pre>

Therefore, the correct answer is
<strong>sortHelper(lst, 0, len(lst) - 1)</strong>.
`
},
{
  type: "radio",
  question: `
Fill in the code to complete the following function for binary search.

<pre><code class="language-python">def recursiveBinarySearch(lst, key):
    low = 0
    high = len(lst) - 1
    return _______________________________

def recursiveBinarySearchHelper(lst, key, low, high):
    if low > high:    # The list has been exhausted without a match
        return -1

    mid = (low + high) // 2

    if key < lst[mid]:
        return recursiveBinarySearchHelper(lst, key, low, mid - 1)
    elif key == lst[mid]:
        return mid
    else:
        return recursiveBinarySearchHelper(lst, key, mid + 1, high)</code></pre>
`,
  answers: [
    "recursiveBinarySearchHelper(lst, key)",
    "recursiveBinarySearchHelper(lst, key, low + 1, high - 1)",
    "recursiveBinarySearchHelper(lst, key, low - 1, high + 1)",
    "recursiveBinarySearchHelper(lst, key, low, high)"
  ],
  correct: "recursiveBinarySearchHelper(lst, key, low, high)",
  explanation: `
The helper function requires four arguments:
<ul>
  <li><strong>lst</strong> — the list to search</li>
  <li><strong>key</strong> — the value being searched for</li>
  <li><strong>low</strong> — the starting index (0)</li>
  <li><strong>high</strong> — the ending index (<code>len(lst) - 1</code>)</li>
</ul>

The wrapper function initializes the search boundaries and then calls:

<pre><code class="language-python">recursiveBinarySearchHelper(lst, key, low, high)</code></pre>

Therefore, the correct answer is
<strong>recursiveBinarySearchHelper(lst, key, low, high)</strong>.
`
},

{
  type: "radio",
  question: `
The time complexity for the selection sort algorithm in the text is ________.
`,
  answers: [
    "O(nlogn)",
    "O(n^2)",
    "O(logn)",
    "O(2^n)"
  ],
  correct: "O(n^2)",
  explanation: `
Selection sort repeatedly scans the unsorted portion of the array to find the smallest element.

It performs approximately <strong>n × n / 2</strong> comparisons, giving a time complexity of:

<pre><code>O(n²)</code></pre>

Therefore, the correct answer is <strong>O(n²)</strong>.
`
},

{
  type: "radio",
  question: `
The time complexity for the Towers of Hanoi algorithm in the text is ________.
`,
  answers: [
    "O(n)",
    "O(n^2)",
    "O(n^3)",
    "O(2^n)"
  ],
  correct: "O(2^n)",
  explanation: `
The recursive Towers of Hanoi algorithm satisfies the recurrence:

<pre><code>T(n) = 2T(n - 1) + 1</code></pre>

Its solution is:

<pre><code>T(n) = 2ⁿ - 1</code></pre>

Ignoring constants, the time complexity is:

<pre><code>O(2ⁿ)</code></pre>

Therefore, the correct answer is <strong>O(2^n)</strong>.
`
},
{
  type: "radio",
  question: `
The gift-wrapping algorithm for finding a convex hull takes ____________ time.
`,
  answers: [
    "O(n)",
    "O(nlogn)",
    "O(logn)",
    "O(n^2)"
  ],
  correct: "O(n^2)",
  explanation: `
The <strong>gift-wrapping (Jarvis March)</strong> algorithm repeatedly finds the next point on the convex hull by scanning all points.

In the worst case, it performs approximately <strong>n</strong> scans of <strong>n</strong> points, giving a worst-case time complexity of:

<pre><code>O(n²)</code></pre>

Therefore, the correct answer is <strong>O(n²)</strong>.
`
},
{
  type: "radio",
  question: `
Estimating an algorithm efficiency is ________.
`,
  answers: [
    "to measure its actual execution time.",
    "to estimate its execution time.",
    "to estimate its growth function."
  ],
  correct: "to estimate its growth function.",
  explanation: `
Algorithm analysis focuses on how an algorithm's running time grows as the input size increases.

Rather than measuring the actual execution time on a specific computer, we estimate the algorithm's <strong>growth function</strong> (Big-O notation).

Therefore, the correct answer is <strong>to estimate its growth function.</strong>
`
},
{
  type: "radio",
  question: `
On an average, linear search searches ________ if the element is in the list.
`,
  answers: [
    "the whole list",
    "half of the list",
    "just one element in the list",
    "one fourth of the list"
  ],
  correct: "half of the list",
  explanation: `
In a linear search, the algorithm checks elements one by one from the beginning of the list.

If the target element is present, it is found after checking about <strong>half of the list on average</strong>.

Therefore, the correct answer is <strong>half of the list</strong>.
`
},
{
  type: "radio",
  question: `
<strong>______________</strong> approach is the process of solving subproblems, then combining the solutions of the subproblems to obtain an overall solution.

This naturally leads to a recursive solution. However, it would be inefficient to use recursion, because the subproblems overlap.

The key idea behind dynamic programming is to solve each subproblem only once and store the results for subproblems for later use to avoid redundant computing of the subproblems.
`,
  answers: [
    "Divide-and-conquer",
    "Dynamic programming",
    "Brutal-force",
    "Backtracking"
  ],
  correct: "Dynamic programming",
  explanation: `
<strong>Dynamic programming</strong> solves problems by breaking them into overlapping subproblems, solving each subproblem only once, and storing its result for future use.

This avoids redundant computations and greatly improves efficiency compared to a naive recursive solution.

Therefore, the correct answer is <strong>Dynamic programming</strong>.
`
},
{
  type: "radio",
  question: `
The time complexity for the closest pair of points problem using divide-and-conquer is ________.
`,
  answers: [
    "O(n)",
    "O(nlogn)",
    "O(logn)",
    "O(2^n)"
  ],
  correct: "O(nlogn)",
  explanation: `
The divide-and-conquer algorithm for the closest pair of points recursively divides the points into two halves and combines the results efficiently.

Its running time satisfies the recurrence:

<pre><code>T(n) = 2T(n/2) + O(n)</code></pre>

which solves to:

<pre><code>O(n log n)</code></pre>

Therefore, the correct answer is <strong>O(nlogn)</strong>.
`
},
{
  type: "radio",
  question: `
O(1) is ________.
`,
  answers: [
    "constant time",
    "logarithmic time",
    "linear time",
    "log-linear time"
  ],
  correct: "constant time",
  explanation: `
<strong>O(1)</strong> means the running time does not depend on the input size.

The algorithm always performs the same amount of work regardless of how large the input is.

Therefore, <strong>O(1)</strong> is called <strong>constant time</strong>.
`
},
{
  type: "radio",
  question: `
The time complexity for the Sieve of Eratosthenes algorithm is ________.
`,
  answers: [
    "O(n)",
    "O(n log log n)",
    "O(logn)",
    "O(2^n)"
  ],
  correct: "O(n log log n)",
  explanation: `
The <strong>Sieve of Eratosthenes</strong> finds all prime numbers up to <code>n</code> by repeatedly marking multiples of each prime number.

Its time complexity is:

<pre><code>O(n log log n)</code></pre>

which is much more efficient than checking each number individually.

Therefore, the correct answer is <strong>O(n log log n)</strong>.
`
},
{
  type: "radio",
  question: `
The ________ approach searches for a candidate solution incrementally, abandoning that option as soon as it determines that the candidate cannot possibly be a valid solution, and then looks for a new candidate.
`,
  answers: [
    "Divide-and-conquer",
    "Dynamic programming",
    "Brutal-force",
    "Backtracking"
  ],
  correct: "Backtracking",
  explanation: `
<strong>Backtracking</strong> builds a solution step by step.

Whenever a partial solution cannot possibly lead to a valid complete solution, the algorithm abandons it (backtracks) and tries another possibility.

Therefore, the correct answer is <strong>Backtracking</strong>.
`
},
{
  type: "radio",
  question: `
The time complexity for the Euclid's algorithm is ________.
`,
  answers: [
    "O(n)",
    "O(n^2)",
    "O(logn)",
    "O(2^n)"
  ],
  correct: "O(logn)",
  explanation: `
Euclid's algorithm computes the greatest common divisor (GCD) by repeatedly replacing the larger number with the remainder of the division.

The number of recursive (or iterative) steps grows logarithmically with the input size.

Its time complexity is:

<pre><code>O(log n)</code></pre>

Therefore, the correct answer is <strong>O(logn)</strong>.
`
},
{
  type: "checkbox",
  question: `
Which of the following complexity is <strong>O(nlogn)</strong>? Please select all that apply.
`,
  answers: [
    "300n + 400n*n",
    "23nlogn + 50",
    "45n + 45nlogn + 503",
    "n*n*n + nlogn"
  ],
  correct: [
    "23nlogn + 50",
    "45n + 45nlogn + 503"
  ],
  explanation: `
Big-O notation ignores constants and lower-order terms.

<ul>
<li><strong>300n + 400n²</strong> → <strong>O(n²)</strong></li>
<li><strong>23nlogn + 50</strong> → <strong>O(nlogn)</strong></li>
<li><strong>45n + 45nlogn + 503</strong> → <strong>O(nlogn)</strong></li>
<li><strong>n³ + nlogn</strong> → <strong>O(n³)</strong></li>
</ul>

Therefore, the correct answers are:

<ul>
<li><strong>23nlogn + 50</strong></li>
<li><strong>45n + 45nlogn + 503</strong></li>
</ul>
`
},
{
  type: "radio",
  question: `
An input that results in the shortest execution time is called the ____________.
`,
  answers: [
    "best-case input",
    "worst-case input",
    "average-case input"
  ],
  correct: "best-case input",
  explanation: `
The <strong>best-case input</strong> is the input that allows an algorithm to finish in the shortest possible execution time.

Therefore, the correct answer is <strong>best-case input</strong>.
`
},
{
  type: "radio",
  question: `
For a sorted list of <strong>1024</strong> elements, a binary search takes at most ________ comparisons.

Note that checking whether an element is greater than, equal to, or less than another element counts as one comparison.
`,
  answers: [
    "11",
    "100",
    "512",
    "6"
  ],
  correct: "11",
  explanation: `
Binary search has a worst-case time complexity of <strong>O(log₂ n)</strong>.

Since:

<pre><code>1024 = 2¹⁰</code></pre>

the maximum number of comparisons is:

<pre><code>log₂(1024) + 1 = 10 + 1 = 11</code></pre>

Therefore, the correct answer is <strong>11</strong>.
`
},
{
  type: "radio",
  question: `
The time complexity for the algorithm using the dynamic programming approach for finding Fibonacci numbers is ________.
`,
  answers: [
    "O(n)",
    "O(n^2)",
    "O(logn)",
    "O(2^n)"
  ],
  correct: "O(n)",
  explanation: `
Using <strong>dynamic programming</strong>, each Fibonacci number is computed only once and stored for later use.

This eliminates repeated computations performed by the recursive algorithm.

The running time is:

<pre><code>O(n)</code></pre>

Therefore, the correct answer is <strong>O(n)</strong>.
`
},
{
  type: "radio",
  question: `
The time complexity for the recursive Fibonacci algorithm in the text is ________.
`,
  answers: [
    "O(nlogn)",
    "O(n^2)",
    "O(logn)",
    "O(2^n)"
  ],
  correct: "O(2^n)",
  explanation: `
The naive recursive Fibonacci algorithm repeatedly recomputes the same subproblems.

Its recurrence is:

<pre><code>T(n) = T(n - 1) + T(n - 2) + O(1)</code></pre>

This results in an exponential running time:

<pre><code>O(2^n)</code></pre>

Therefore, the correct answer is <strong>O(2^n)</strong>.
`
},
{
  type: "radio",
  question: `
________ approach divides the problem into subproblems, solves the subproblems, then combines the solutions of the subproblems to obtain the solution for the entire problem.

Unlike the ________ approach, the subproblems in the divide-and-conquer approach don't overlap. A subproblem is like the original problem with a smaller size, so you can apply recursion to solve the problem.
`,
  answers: [
    "Divide-and-conquer/dynamic programming",
    "Dynamic programming/divide-and-conquer",
    "Brutal-force/divide-and-conquer",
    "Backtracking/dynamic programming"
  ],
  correct: "Divide-and-conquer/dynamic programming",
  explanation: `
<strong>Divide-and-conquer</strong> recursively divides a problem into smaller independent subproblems, solves them, and combines their solutions.

<strong>Dynamic programming</strong> also breaks a problem into subproblems, but those subproblems overlap, so previously computed results are stored and reused.

Therefore, the correct answer is:

<strong>Divide-and-conquer / dynamic programming</strong>.
`
},
{
  type: "checkbox",
  question: `
Why is the analysis often for the worst case? Please select all that apply.
`,
  answers: [
    "Best-case is not representative.",
    "Worst-case is not representative, but worst-case analysis is very useful. You can show that the algorithm will never be slower than the worst-case.",
    "Average-case analysis is ideal, but difficult to perform, because it is hard to determine the relative probabilities and distributions of various input instances for many problems."
  ],
  correct: [
    "Best-case is not representative.",
    "Worst-case is not representative, but worst-case analysis is very useful. You can show that the algorithm will never be slower than the worst-case.",
    "Average-case analysis is ideal, but difficult to perform, because it is hard to determine the relative probabilities and distributions of various input instances for many problems."
  ],
  explanation: `
All three statements are true.

<ul>
<li><strong>Best-case analysis</strong> is usually not representative of typical performance.</li>
<li><strong>Worst-case analysis</strong> provides an upper bound on running time, guaranteeing the algorithm will never perform worse than that bound.</li>
<li><strong>Average-case analysis</strong> is often more realistic but usually much harder because it requires knowledge of the probability distribution of inputs.</li>
</ul>

Therefore, <strong>all three answers are correct.</strong>
`
},
{
  type: "radio",
  question: `
To find a match for a string of size <strong>m</strong> in a text of size <strong>n</strong>, the Boyer-Moore algorithm would take ____________ in the worst case.
`,
  answers: [
    "O(n) time",
    "O(m) time",
    "O(n + m) time",
    "O(m*n) time"
  ],
  correct: "O(m*n) time",
  explanation: `
Although Boyer-Moore is very efficient in practice, its classical worst-case running time is

<pre><code>O(m × n)</code></pre>

where:
<ul>
<li><strong>m</strong> = pattern length</li>
<li><strong>n</strong> = text length</li>
</ul>

Therefore, the correct answer is <strong>O(m*n) time</strong>.
`
},
{
  type: "radio",
  question: `
To find a match for a string of size <strong>m</strong> in a text of size <strong>n</strong>, the KMP algorithm would take ____________ in the worst case.
`,
  answers: [
    "O(n) time",
    "O(m) time",
    "O(n + m) time",
    "O(m*n) time"
  ],
  correct: "O(n + m) time",
  explanation: `
The Knuth-Morris-Pratt (KMP) algorithm first preprocesses the pattern in <strong>O(m)</strong> time and then scans the text in <strong>O(n)</strong> time.

Therefore, the total worst-case running time is

<pre><code>O(n + m)</code></pre>

where:
<ul>
<li><strong>m</strong> = pattern length</li>
<li><strong>n</strong> = text length</li>
</ul>

Therefore, the correct answer is <strong>O(n + m) time</strong>.
`
},
{
  type: "radio",
  question: `
The Graham's algorithm for finding a convex hull takes ____________ time.
`,
  answers: [
    "O(n)",
    "O(nlogn)",
    "O(logn)",
    "O(n^2)"
  ],
  correct: "O(nlogn)",
  explanation: `
Graham's scan first sorts all points by polar angle, which requires
<strong>O(n log n)</strong> time.

The scan itself is linear, so the overall time complexity is:

<pre><code>O(n log n)</code></pre>

Therefore, the correct answer is <strong>O(nlogn)</strong>.
`
},
{
  type: "radio",
  question: `
To find a match for a string of size <strong>m</strong> in a text of size <strong>n</strong>, the brute-force algorithm would take ____________ in the worst case.
`,
  answers: [
    "O(n) time",
    "O(m) time",
    "O(n + m) time",
    "O(m*n) time"
  ],
  correct: "O(m*n) time",
  explanation: `
The brute-force string matching algorithm compares the pattern with every possible position in the text.

In the worst case, this requires:

<pre><code>O(m × n)</code></pre>

where:
<ul>
<li><strong>m</strong> = pattern length</li>
<li><strong>n</strong> = text length</li>
</ul>

Therefore, the correct answer is <strong>O(m*n) time</strong>.
`
},
{
  type: "radio",
  question: `
What is the number of iterations in the following loop?

<pre><code class="language-python">count = 5

while count < n:
    count = count + 3</code></pre>
`,
  answers: [
    "n - 5",
    "n - 3",
    "n / 3 - 1",
    "(n - 5) / 3",
    "the ceiling of (n - 5) / 3"
  ],
  correct: "the ceiling of (n - 5) / 3",
  explanation: `
The loop starts with:

<pre><code>count = 5</code></pre>

Each iteration increases <code>count</code> by <strong>3</strong>.

The loop stops when <code>count ≥ n</code>.

Since the value increases in steps of 3, the number of iterations is:

<pre><code>⌈(n - 5) / 3⌉</code></pre>

where ⌈x⌉ denotes the ceiling function.

Therefore, the correct answer is:

<strong>the ceiling of (n - 5) / 3</strong>.
`
},
{
  type: "radio",
  question: `
[3.1.b.4] What's the worst-case time complexity of the following algorithm where <strong>N</strong> is a large number?

Express in Big-O notation. Assume <code>data</code> is initialized with a value.

<pre><code class="language-python">N = int(input())
threshold = float(input())

sum = 0.0
for i in range(N):
    for j in range(N):
        sum += data</code></pre>
`,
  answers: [
    "O(N^2)",
    "O(N)",
    "O(log₂N)",
    "O(2N)"
  ],
  correct: "O(N^2)",
  explanation: `
There are two nested <code>for</code> loops.

The outer loop executes <strong>N</strong> times.

For each iteration of the outer loop, the inner loop also executes <strong>N</strong> times.

Therefore, the total number of iterations is:

<pre><code>N × N = N²</code></pre>

Thus, the worst-case time complexity is:

<strong>O(N²)</strong>.
`
},
{
  type: "radio",
  question: `
[3.1.b.4] What's the worst-case time complexity of the following code?

Express in Big-O notation.

<pre><code class="language-python">sum = 0.0
n = int(input())
i = 1

while i < n:
    data = float(input())
    sum += data

    if sum >= 10000:
        break

    i = i + 2</code></pre>
`,
  answers: [
    "O(log₂n)",
    "O(n)",
    "O(1)",
    "O(n²)",
    "None of the other answer choices is correct"
  ],
  correct: "O(n)",
  explanation: `
The loop variable <code>i</code> starts at <code>1</code> and increases by <code>2</code> each iteration.

In the worst case, the <code>break</code> statement is never executed.

The loop therefore runs approximately:

<pre><code>n / 2</code></pre>

times.

Since constants are ignored in Big-O notation,

<pre><code>O(n / 2) = O(n)</code></pre>

Therefore, the correct answer is <strong>O(n)</strong>.
`
},
];
