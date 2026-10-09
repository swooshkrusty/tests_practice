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
{
  type: "radio",
  question: `
A heap is represented using a list. Is the list
<code>[64, 42, 59, 32, 39, 44]</code> a heap?
`,
  answers: [
    "Yes",
    "No"
  ],
  correct: "Yes",
  explanation: `
This list represents a <strong>max-heap</strong>.

For a max-heap, every parent node must be greater than or equal to its children.

The relationships are:

<pre><code>64 → children: 42, 59
42 → children: 32, 39
59 → child: 44</code></pre>

Check the heap property:

<pre><code>64 >= 42 and 64 >= 59
42 >= 32 and 42 >= 39
59 >= 44</code></pre>

All parent nodes are greater than or equal to their children.

Therefore, the correct answer is <strong>Yes</strong>.
`
},

{
  type: "radio",
  question: `
The worst-time complexity for insertion sort is ____________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n*n)",
  explanation: `
In the worst case, insertion sort may need to compare and shift many elements for each item in the list.

For example, when the list is in reverse order, each new element may need to move through almost the entire sorted portion.

The total number of operations grows approximately as:

<pre><code>1 + 2 + 3 + ... + (n - 1)</code></pre>

This results in:

<pre><code>O(n²)</code></pre>

In the answer choices, this is written as <strong>O(n*n)</strong>.
`
},

{
  type: "radio",
  question: `
To remove the root, you need to start a process by first placing __________ to the place of the root and move it down to maintain the heap property.
`,
  answers: [
    "one of the root's children",
    "the larger child of the root",
    "the smaller child of the root",
    "the last node in the heap"
  ],
  correct: "the last node in the heap",
  explanation: `
When removing the root of a heap, the root cannot simply be deleted because the heap must remain a complete binary tree.

The usual process is:

<ol>
  <li>Move the <strong>last node in the heap</strong> to the root position.</li>
  <li>Remove the last position.</li>
  <li>Move the new root downward until the heap property is restored.</li>
</ol>

This downward adjustment is often called <strong>heapify down</strong> or <strong>sift down</strong>.

Therefore, the correct answer is <strong>the last node in the heap</strong>.
`
},
{
  type: "radio",
  question: `
The average-time complexity for quick sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
In the average case, quick sort divides the list into reasonably balanced partitions.

There are approximately <strong>log n</strong> levels of partitioning, and each level processes about <strong>n</strong> elements.

Therefore, the average-time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},

{
  type: "checkbox",
  question: `
Which of the following statements are true? Please select all that apply.
`,
  answers: [
    "A heap is a complete binary tree.",
    "Each node of a heap is greater than or equal to any of its children.",
    "A binary tree is complete if every level of the tree is full except that the last level may not be full and all the leaves on the last level are placed left-most.",
    "A heap is a full binary tree."
  ],
  correct: [
    "A heap is a complete binary tree.",
    "A binary tree is complete if every level of the tree is full except that the last level may not be full and all the leaves on the last level are placed left-most."
  ],
  explanation: `
For the <strong>max-heap</strong> described in the text:

<ul>
  <li>A heap is a <strong>complete binary tree</strong>.</li>
  <li>In a complete binary tree, every level is full except possibly the last level, and the nodes on the last level are filled from <strong>left to right</strong>.</li>
</ul>

A heap does <strong>not</strong> have to be a full binary tree.


`
},

{
  type: "radio",
  question: `
The worst-time complexity for heap sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
Heap sort repeatedly removes the root of the heap and restores the heap property.

There are approximately <strong>n</strong> removals, and each heap adjustment takes at most <strong>O(log n)</strong> time.

Therefore, the worst-time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},
{
  type: "radio",
  question: `
The worst-time complexity for heap sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
Heap sort first builds a heap and then repeatedly removes the root while restoring the heap property.

Building the heap takes <strong>O(n)</strong> time, and each of the <strong>n</strong> removals requires at most <strong>O(log n)</strong> time.

Therefore, the overall worst-case time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},

{
  type: "radio",
  question: `
Suppose a heap is stored in a list as follows:

<pre><code>[100, 55, 92, 23, 33, 81]</code></pre>

The parent of <strong>81</strong> is __________.
`,
  answers: [
    "100",
    "55",
    "92",
    "23",
    "33"
  ],
  correct: "92",
  explanation: `
The heap is stored using a zero-based array.

The indexes are:

<pre><code>Index : 0   1   2   3   4   5
Value :100 55 92 23 33 81</code></pre>

The value <strong>81</strong> is at index <strong>5</strong>.

For a heap stored in an array, the parent index is:

<pre><code>(childIndex - 1) // 2</code></pre>

So:

<pre><code>(5 - 1) // 2 = 2</code></pre>

Index <strong>2</strong> contains <strong>92</strong>.

Therefore, the correct answer is <strong>92</strong>.
`
},
{
  type: "radio",
  question: `
Suppose a list is:

<pre><code>[2, 9, 5, 4, 8, 1]</code></pre>

After the first pass of bubble sort, the list becomes __________.
`,
  answers: [
    "2, 9, 5, 4, 8, 1",
    "2, 9, 5, 4, 1, 8",
    "2, 5, 9, 4, 8, 1",
    "2, 5, 4, 8, 1, 9",
    "2, 1, 5, 4, 8, 9"
  ],
  correct: "2, 5, 4, 8, 1, 9",
  explanation: `
Bubble sort compares neighboring elements and swaps them when they are in the wrong order.

Starting list:

<pre><code>[2, 9, 5, 4, 8, 1]</code></pre>

First pass:

<pre><code>2, 9 → no swap
9, 5 → swap → [2, 5, 9, 4, 8, 1]
9, 4 → swap → [2, 5, 4, 9, 8, 1]
9, 8 → swap → [2, 5, 4, 8, 9, 1]
9, 1 → swap → [2, 5, 4, 8, 1, 9]</code></pre>

After the first pass, the largest value <strong>9</strong> has moved to the end.

Therefore, the correct answer is:

<strong>2, 5, 4, 8, 1, 9</strong>.
`
},

{
  type: "radio",
  question: `
A heap is represented using a list.

Is the list

<pre><code>[1, 2, 4, 5, 9, 3]</code></pre>

a heap?
`,
  answers: [
    "Yes",
    "No"
  ],
  correct: "No",
  explanation: `
The heap used in this chapter is a <strong>max-heap</strong>, where every parent must be greater than or equal to its children.

The list is:

<pre><code>Index:  0  1  2  3  4  5
Value:  1  2  4  5  9  3</code></pre>

The root is <strong>1</strong>, and its children are <strong>2</strong> and <strong>4</strong>.

For a max-heap, we would need:

<pre><code>1 >= 2
1 >= 4</code></pre>

Both conditions are false.

Therefore, the list does not satisfy the max-heap property.

The correct answer is <strong>No</strong>.
`
},

{
  type: "radio",
  question: `
The worst-time complexity for bubble sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n*n)",
  explanation: `
In the worst case, bubble sort performs many passes through the list.

For approximately <strong>n</strong> passes, it may perform approximately <strong>n</strong> comparisons.

Therefore, the number of operations grows proportionally to:

<pre><code>n × n = n²</code></pre>

So the worst-time complexity is:

<pre><code>O(n²)</code></pre>

In the answer choices, this is written as <strong>O(n*n)</strong>.
`
},
{
  type: "checkbox",
  question: `
What is correct about a pivot? Please select all that apply.
`,
  answers: [
    "A pivot divides a list into two sublists of equal size.",
    "A pivot can be chosen arbitrarily.",
    "A pivot divides a list into two sublists, the elements in the first list are no larger than the pivot and the elements in the second list are larger than the pivot.",
    "You should always choose a pivot that divides the list evenly."
  ],
  correct: [
    "A pivot can be chosen arbitrarily.",
    "A pivot divides a list into two sublists, the elements in the first list are no larger than the pivot and the elements in the second list are larger than the pivot."
  ],
  explanation: `
In quick sort, the <strong>pivot</strong> is used to partition the list.

A pivot may be chosen in different ways, so it can be chosen <strong>arbitrarily</strong>.

After partitioning:

<ul>
  <li>Elements in one sublist are no larger than the pivot.</li>
  <li>Elements in the other sublist are larger than the pivot.</li>
</ul>

The pivot does <strong>not</strong> necessarily divide the list into two equal-sized sublists.

Also, although a balanced partition is desirable for efficiency, it is not always possible to choose a pivot that divides the list evenly.

Therefore, the correct statements are the <strong>second and third choices</strong>.
`
},

{
  type: "radio",
  question: `
The most efficient algorithm for sorting integer keys is __________.
`,
  answers: [
    "quick sort",
    "merge sort",
    "heap sort",
    "radix sort"
  ],
  correct: "radix sort",
  explanation: `
<strong>Radix sort</strong> is designed specifically for sorting keys such as integers by processing their digits or groups of bits.

Unlike comparison-based algorithms such as quick sort, merge sort, and heap sort, radix sort does not have to compare every pair of keys.

For integer keys with a bounded number of digits, radix sort can achieve nearly linear performance.

Therefore, the correct answer is <strong>radix sort</strong>.
`
},

{
  type: "radio",
  question: `
The best-time complexity for bubble sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n)",
  explanation: `
For an optimized bubble sort, the algorithm can detect when no swaps occur during a pass.

If the list is already sorted, bubble sort makes one pass through the list and performs approximately <strong>n</strong> comparisons.

Therefore, the best-time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},
{
  type: "radio",
  question: `
The best-time complexity for bubble sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n)",
  explanation: `
For an optimized bubble sort, if the list is already sorted, no swaps are needed.

The algorithm makes one pass through the list to verify that no swaps occur.

Therefore, the best-time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},

{
  type: "radio",
  question: `
The best-time complexity for insertion sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n)",
  explanation: `
Insertion sort performs best when the list is already sorted.

In this case, each element only needs to be compared with the element immediately before it, and no shifting is required.

The algorithm therefore performs approximately <strong>n</strong> comparisons.

So the best-time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},

{
  type: "radio",
  question: `
The average-time complexity for heap sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
Heap sort repeatedly removes the root element and restores the heap property.

There are approximately <strong>n</strong> removals, and restoring the heap can take up to <strong>O(log n)</strong> time for each removal.

Therefore, the average-time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},
{
  type: "radio",
  question: `
To add a new node, you need to start a process by first placing it as __________ and move it up to maintain the heap property.
`,
  answers: [
    "the new root",
    "the last node in the heap",
    "the left child of the root",
    "the right child of the root"
  ],
  correct: "the last node in the heap",
  explanation: `
When a new element is inserted into a heap, it is first placed at the next available position.

Because a heap must remain a <strong>complete binary tree</strong>, this position is at the end of the heap.

The new node is therefore initially placed as:

<strong>the last node in the heap</strong>

Then it is moved upward, if necessary, until the heap property is restored.

This process is often called <strong>sift up</strong> or <strong>heapify up</strong>.
`
},

{
  type: "radio",
  question: `
The time to merge two sorted lists of size <strong>n</strong> is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n)",
  explanation: `
When merging two sorted lists, the algorithm compares the elements at the front of each list and repeatedly moves the smaller element into the resulting list.

If each list contains <strong>n</strong> elements, at most about:

<pre><code>2n</code></pre>

elements need to be processed.

In Big-O notation, constant factors are ignored:

<pre><code>O(2n) = O(n)</code></pre>

Therefore, the correct answer is <strong>O(n)</strong>.
`
},

{
  type: "radio",
  question: `
The __________ algorithm does not compare keys.
`,
  answers: [
    "quick sort",
    "merge sort",
    "heap sort",
    "radix sort"
  ],
  correct: "radix sort",
  explanation: `
<strong>Radix sort</strong> is a non-comparison sorting algorithm.

Instead of comparing keys directly, it sorts values according to individual digits or groups of bits.

Quick sort, merge sort, and heap sort are all <strong>comparison-based</strong> sorting algorithms.

Therefore, the correct answer is <strong>radix sort</strong>.
`
},
{
  type: "radio",
  question: `
Suppose a heap is stored in a list as follows:

<pre><code>[100, 55, 92, 23, 33, 81]</code></pre>

After inserting <strong>103</strong>, what is the content of the list?
`,
  answers: [
    "[100, 55, 92, 23, 33, 81, 103]",
    "[100, 55, 103, 23, 33, 92, 81]",
    "[103, 55, 92, 23, 33, 81, 92]",
    "[103, 55, 100, 23, 33, 81, 92]",
    "[103, 55, 92, 23, 33, 81, 100]"
  ],
  correct: "[103, 55, 100, 23, 33, 81, 92]",
  explanation: `
The original max-heap is:

<pre><code>[100, 55, 92, 23, 33, 81]</code></pre>

First, insert <strong>103</strong> at the end:

<pre><code>[100, 55, 92, 23, 33, 81, 103]</code></pre>

The parent of 103 is <strong>92</strong>.

Since:

<pre><code>103 > 92</code></pre>

swap them:

<pre><code>[100, 55, 103, 23, 33, 81, 92]</code></pre>

Now compare 103 with its new parent, <strong>100</strong>.

Since:

<pre><code>103 > 100</code></pre>

swap them again:

<pre><code>[103, 55, 100, 23, 33, 81, 92]</code></pre>

The heap property is now restored.

Therefore, the correct answer is:

<strong>[103, 55, 100, 23, 33, 81, 92]</strong>.
`
},

{
  type: "radio",
  question: `
The worst-time complexity for merge sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
Merge sort repeatedly divides the list into smaller halves.

There are approximately:

<pre><code>log n</code></pre>

levels of division.

At each level, merging all elements requires approximately:

<pre><code>O(n)</code></pre>

time.

Therefore, the total worst-case time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},
{
  type: "radio",
  question: `
The worst-time complexity for merge sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
Merge sort repeatedly divides the list into halves and then merges the sorted sublists.

There are approximately <strong>log n</strong> levels of division.

At each level, all <strong>n</strong> elements are processed during merging.

Therefore, the worst-time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},

{
  type: "radio",
  question: `
The average-time complexity for merge sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(nlogn)",
  explanation: `
Merge sort divides the list into halves regardless of the original order of the elements.

There are approximately <strong>log n</strong> levels, and each level requires <strong>O(n)</strong> work to merge the elements.

Therefore, the average-time complexity is:

<pre><code>O(n log n)</code></pre>

In the answer choices, this is written as <strong>O(nlogn)</strong>.
`
},

{
  type: "radio",
  question: `
Suppose you choose the first element as a pivot in the list:

<pre><code>[5, 2, 9, 3, 8, 4, 0, 1, 6, 7]</code></pre>

Using the partition algorithm in the book, what is the new list after the partition?
`,
  answers: [
    "5 2 9 3 8 4 0 1 6 7",
    "4 2 3 0 1 5 6 7 9 8",
    "4 2 1 3 0 5 8 9 6 7",
    "2 3 4 0 1 5 9 8 6 7",
    "2 3 4 0 1 5 6 7 8 9"
  ],
  correct: "4 2 1 3 0 5 8 9 6 7",
  explanation: `
The first element, <strong>5</strong>, is chosen as the pivot.

Start with:

<pre><code>[5, 2, 9, 3, 8, 4, 0, 1, 6, 7]</code></pre>

The partition algorithm moves values that are no larger than the pivot to the left and values larger than the pivot to the right.

First, <strong>9</strong> and <strong>1</strong> are exchanged:

<pre><code>[5, 2, 1, 3, 8, 4, 0, 9, 6, 7]</code></pre>

Then <strong>8</strong> and <strong>0</strong> are exchanged:

<pre><code>[5, 2, 1, 3, 0, 4, 8, 9, 6, 7]</code></pre>

Finally, the pivot <strong>5</strong> is exchanged with <strong>4</strong>:

<pre><code>[4, 2, 1, 3, 0, 5, 8, 9, 6, 7]</code></pre>

The pivot is now in its correct partition position.

Therefore, the correct answer is:

<strong>4 2 1 3 0 5 8 9 6 7</strong>.
`
},
{
  type: "radio",
  question: `
The worst-time complexity for quick sort is __________.
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)",
    "O(n*n)"
  ],
  correct: "O(n*n)",
  explanation: `
Quick sort has its worst case when the pivot repeatedly creates extremely unbalanced partitions.

For example, the list may be divided into:

<pre><code>n - 1 elements
1 element</code></pre>

at each step.

This produces approximately:

<pre><code>n + (n - 1) + (n - 2) + ... + 1</code></pre>

operations.

Therefore, the worst-time complexity is:

<pre><code>O(n²)</code></pre>

In the answer choices, this is written as <strong>O(n*n)</strong>.
`
},

{
  type: "radio",
  question: `
[4.2.b.23] Consider the following list:

<pre><code>lst = [14, 18, 19, 25, 34, 39, 62, 65, 78, 79, 85, 89, 95]</code></pre>

When performing a binary search, the target is first compared with __________.
`,
  answers: [
    "14",
    "34",
    "62",
    "95"
  ],
  correct: "62",
  explanation: `
Binary search begins by examining the <strong>middle element</strong> of the sorted list.

This list contains <strong>13 elements</strong>, with indexes from 0 through 12.

The middle index is:

<pre><code>(0 + 12) // 2 = 6</code></pre>

The element at index 6 is:

<pre><code>lst[6] = 62</code></pre>

Therefore, the target is first compared with <strong>62</strong>.
`
},

{
  type: "radio",
  question: `
[4.2.b.23] Can binary search be used to search the following list?

<pre><code>[16, 30, 24, 7, -25, 62, 45, 5, -65, 50]</code></pre>
`,
  answers: [
    "No because the list is not sorted",
    "No because the list is too large",
    "No because the list has negative values",
    "Yes the list can be searched using the binary search"
  ],
  correct: "No because the list is not sorted",
  explanation: `
Binary search requires the list to be <strong>sorted</strong>.

The given list:

<pre><code>[16, 30, 24, 7, -25, 62, 45, 5, -65, 50]</code></pre>

is not arranged in ascending or descending order.

The presence of negative numbers is not a problem, and the size of the list is also not a problem.

Therefore, the correct answer is:

<strong>No because the list is not sorted</strong>.
`
},
{
  type: "checkbox",
  question: `
In the implementation of Stack and Queue, which of the following are true? Please select all that apply.
`,
  answers: [
    "Stack contains all the methods defined in list.",
    "Queue contains all the methods defined in LinkedList.",
    "Stack contains a list for storing elements.",
    "Queue contains a linked list for storing elements."
  ],
  correct: [
    "Stack contains a list for storing elements.",
    "Queue contains a linked list for storing elements."
  ],
  explanation: `
In this implementation, <strong>Stack</strong> and <strong>Queue</strong> use other data structures internally to store their elements.

<ul>
  <li>A <strong>Stack</strong> contains a <strong>list</strong> for storing elements.</li>
  <li>A <strong>Queue</strong> contains a <strong>linked list</strong> for storing elements.</li>
</ul>

This does not mean that Stack automatically contains every method defined in <code>list</code>, or that Queue exposes every method defined in <code>LinkedList</code>.

Therefore, the correct choices are <strong>3 and 4</strong>.
`
},

{
  type: "radio",
  question: `
Which data structure is appropriate to store patients in an emergency room?
`,
  answers: [
    "Stack",
    "Queue",
    "Priority Queue",
    "Linked List",
    "list"
  ],
  correct: "Priority Queue",
  explanation: `
An emergency room should not necessarily treat patients in the exact order in which they arrive.

Patients with more urgent medical conditions need to be treated before patients with less urgent conditions.

A <strong>Priority Queue</strong> processes elements according to their priority rather than only their arrival order.

Therefore, the correct answer is <strong>Priority Queue</strong>.
`
},

{
  type: "radio",
  question: `
What is the time-complexity for the <code>addLast</code> function?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(1)",
  explanation: `
In the LinkedList implementation used in this course, the list keeps a reference to the
<strong>tail</strong>.

Therefore, <code>addLast()</code> does not need to traverse the list.

<pre><code class="language-python">newNode = Node(e)
tail.next = newNode
tail = newNode</code></pre>

The number of operations does not depend on the number of nodes.

Therefore:

<strong>addLast() = O(1)</strong>

<br><br>

<button
  type="button"
  class="visual-explanation-btn"
  onclick="openVisualExplanation('visuals/cosc2436/linked-list-addlast-en-ru.html')">
  ▶ Visual Explanation
</button>
`
},
{
  type: "checkbox",
  question: `
Which of the following are true? Please select all that apply.
`,
  answers: [
    "An iterator is an object that provides a uniformed way for traversing the elements in a container object.",
    "To enable the traversal using a for loop in a container object, the container class must implement the __iter__(self) method that returns an iterator.",
    "An iterator class must contains the __next__(self) method that returns the next element in the container object.",
    "When there are no items left to iterate, the __next__() method must raise a StopIteration exception."
  ],
  correct: [
    "An iterator is an object that provides a uniformed way for traversing the elements in a container object.",
    "To enable the traversal using a for loop in a container object, the container class must implement the __iter__(self) method that returns an iterator.",
    "An iterator class must contains the __next__(self) method that returns the next element in the container object.",
    "When there are no items left to iterate, the __next__() method must raise a StopIteration exception."
  ],
  explanation: `
All four statements are true.

An <strong>iterator</strong> provides a uniform way to traverse elements in a container.

To support iteration with a <code>for</code> loop, the container defines:

<pre><code>__iter__(self)</code></pre>

which returns an iterator.

The iterator defines:

<pre><code>__next__(self)</code></pre>

which returns the next element.

When there are no more elements, <code>__next__()</code> raises:

<pre><code>StopIteration</code></pre>

Therefore, <strong>all four choices are correct</strong>.
`
},

{
  type: "checkbox",
  question: `
LinkedList is more efficient than list for _______________. Please select all that apply.
`,
  answers: [
    "inserting/deleting an element in the middle of the list.",
    "inserting/deleting an element in the beginning of the list.",
    "inserting/deleting an element at the end of the list.",
    "retrieving an element given the index."
  ],
  correct: [
    "inserting/deleting an element in the beginning of the list.",
    "inserting/deleting an element at the end of the list."
  ],
  explanation: `
According to the answer key used by this course, LinkedList is more efficient than list for:

<ul>
  <li><strong>inserting/deleting an element in the beginning of the list</strong></li>
  <li><strong>inserting/deleting an element at the end of the list</strong></li>
</ul>

Retrieving an element by index is more efficient with a regular list because indexed access is direct.

For this Canvas test, do <strong>not</strong> select the middle option.

Therefore, select <strong>choices 2 and 3</strong>.
`
},

{
  type: "radio",
  question: `
Suppose the rule of the party is that the participants who arrive later will leave earlier. Which data structure is appropriate to store the participants?
`,
  answers: [
    "Stack",
    "Queue",
    "list",
    "Linked List"
  ],
  correct: "Stack",
  explanation: `
Participants who arrive <strong>later</strong> must leave <strong>earlier</strong>.

This follows the:

<pre><code>Last In, First Out (LIFO)</code></pre>

principle.

A <strong>Stack</strong> uses LIFO:

<ul>
  <li>The last participant to arrive is pushed onto the top.</li>
  <li>The participant on the top leaves first.</li>
</ul>

Therefore, the correct answer is <strong>Stack</strong>.
`
},
{
  type: "radio",
  question: `
What is the time-complexity for the <code>removeLast</code> function in a singly linked list?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(n)",
  explanation: `
In a <strong>singly linked list</strong>, each node only has a reference to the next node.

Even if the list stores a reference to the <code>tail</code>, removing the last node requires finding the node immediately before the tail.

To find that node, the algorithm must traverse the list from the head.

Therefore, the time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},

{
  type: "radio",
  question: `
What is the time-complexity for the <code>insert(index, e)</code> function?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(n)",
  explanation: `
To insert an element at a particular index in a linked list, the algorithm may need to traverse the list until it reaches the node before that position.

In the worst case, it may traverse almost the entire list.

Therefore, the time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},

{
  type: "radio",
  question: `
When a new node is inserted to the head of a linked list, will the head pointer, the tail pointer, or both be changed?
`,
  answers: [
    "If the list is empty before the insertion, both head and tail will change.",
    "If the list is not empty before the insertion, head will change.",
    "head will always change, but tail may change too.",
    "All of the above."
  ],
  correct: "All of the above.",
  explanation: `
All three statements are true.

If the linked list is <strong>empty</strong>, inserting the first node causes both:

<pre><code>head = newNode
tail = newNode</code></pre>

If the list is <strong>not empty</strong>, the new node becomes the new head, while the tail remains unchanged.

Therefore:

<ul>
  <li><strong>head always changes</strong> when inserting at the beginning.</li>
  <li><strong>tail also changes</strong> when the list was empty.</li>
</ul>

Therefore, the correct answer is <strong>All of the above.</strong>
`
},
{
  type: "radio",
  question: `
What is the time-complexity for the <code>removeAt(index)</code> function?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(n)",
  explanation: `
In a singly linked list, removing an element at a particular index may require traversing the list to reach the node before that position.

In the worst case, the algorithm may need to traverse almost the entire list.

Therefore, the time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},

{
  type: "radio",
  question: `
In the LinkedList class, which of the following statement inserts a string <code>s</code> to the head of the list?
`,
  answers: [
    "list.addFirst(s);",
    "list.add(s);",
    "list.add(1, s);",
    "list.insert(s);"
  ],
  correct: "list.addFirst(s);",
  explanation: `
The <code>addFirst(e)</code> method inserts an element at the <strong>head</strong> of the linked list.

Therefore:

<pre><code>list.addFirst(s);</code></pre>

places the string <code>s</code> at the beginning of the list.

The correct answer is <strong>list.addFirst(s);</strong>
`
},
{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list. Analyze the following code:

<pre><code class="language-python">A:
while len(list1) > 0:
    del list1[len(list1) - 1]

B:
while len(list1) > 0:
    list1.remove(list1.get(len(list1) - 1))</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B because the time complexity for code fragment A is O(n) and for B is O(n^2).",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B because both code fragment A and B have the same time complexity O(n).",
    "Both code fragment A and B have the same time complexity O(n^2), but A runs faster because code fragment A has less overhead."
  ],
  correct: "Both code fragment A and B have the same time complexity O(n^2), but A runs faster because code fragment A has less overhead.",
  explanation: `
For this Canvas question, use the <strong>fourth answer choice</strong>.

The original Pearson version of this question states that both fragments have the same overall time complexity <strong>O(n)</strong>, while fragment A is faster because it has less overhead.

Your Canvas version appears to contain a typo in the fourth choice and displays <strong>O(n²)</strong> instead of <strong>O(n)</strong>.

For the purpose of matching the course test, the expected choice is therefore:

<strong>Both code fragment A and B have the same time complexity O(n^2), but A runs faster because code fragment A has less overhead.</strong>
`
},

{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list and <code>list2</code> is a doubly linked list.
Both contain 1 million double values. Analyze the following code:

<pre><code class="language-python">A:
while len(list1) > 0:
    del list1[-1]

B:
while list2.getSize() > 0:
    list2.removeLast()</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B.",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B."
  ],
  correct: "Code fragment A runs as fast as code fragment B.",
  explanation: `
In code fragment <strong>A</strong>, deleting the last element of a list takes:

<pre><code>O(1)</code></pre>

Each deletion is performed once for every element, so the total time is:

<pre><code>O(n)</code></pre>

In a <strong>doubly linked list</strong>, <code>removeLast()</code> also takes <strong>O(1)</strong> time because the list maintains a tail reference and each node has a link to the previous node.

Repeating this operation for all <strong>n</strong> elements also gives:

<pre><code>O(n)</code></pre>

Therefore, both code fragments have the same asymptotic running time.

The correct answer is <strong>Code fragment A runs as fast as code fragment B.</strong>
`
},
{
  type: "radio",
  question: `
<code>list</code> is more efficient than <code>LinkedList</code> for the following operations:
`,
  answers: [
    "Insert/delete an element in the middle of the list.",
    "Insert/delete an element in the beginning of the list.",
    "Insert/delete an element at the end of the list.",
    "Retrieve an element given the index."
  ],
  correct: "Retrieve an element given the index.",
  explanation: `
A Python <code>list</code> provides direct access to an element using its index.

For example:

<pre><code class="language-python">list1[index]</code></pre>

Accessing an element by index takes:

<pre><code>O(1)</code></pre>

In a <code>LinkedList</code>, there is no direct access to an arbitrary node. The program must start from the head and follow links until it reaches the requested position.

This can take:

<pre><code>O(n)</code></pre>

Therefore, the correct answer is:

<strong>Retrieve an element given the index.</strong>
`
},

{
  type: "radio",
  question: `
What is the time-complexity for the <code>removeFirst</code> function?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(1)",
  explanation: `
The first node of a linked list can be removed directly by changing the <code>head</code> reference.

Conceptually:

<pre><code class="language-python">head = head.next</code></pre>

There is no need to traverse the linked list.

Therefore, the time complexity is:

<pre><code>O(1)</code></pre>

The correct answer is <strong>O(1)</strong>.
`
},
{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list and <code>list2</code> is a LinkedList. Both contain 1 million floating-point values. Analyze the following code:

<pre><code class="language-python">A:
while len(list1) > 0:
    del list1[0]

B:
while list2.getSize() > 0:
    list2.removeFirst()</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B.",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B."
  ],
  correct: "Code fragment B runs faster than code fragment A.",
  explanation: `
In code fragment <strong>A</strong>:

<pre><code class="language-python">del list1[0]</code></pre>

removes the first element of a Python list.

All remaining elements must be shifted one position to the left, so one deletion takes:

<pre><code>O(n)</code></pre>

Repeating this operation for all elements gives approximately:

<pre><code>O(n²)</code></pre>

In code fragment <strong>B</strong>:

<pre><code class="language-python">list2.removeFirst()</code></pre>

removes the head node of a linked list directly.

Each removal takes:

<pre><code>O(1)</code></pre>

Repeating it <strong>n</strong> times gives:

<pre><code>O(n)</code></pre>

Therefore, <strong>code fragment B runs faster than code fragment A.</strong>
`
},

{
  type: "radio",
  question: `
When a new node is inserted to the end of a linked list, will the head pointer, the tail pointer, or both be changed?
`,
  answers: [
    "If the list is empty before the insertion, both head and tail will change.",
    "If the list is not empty before the insertion, tail will change.",
    "head may change, but tail will always change.",
    "All of the above."
  ],
  correct: "All of the above.",
  explanation: `
When inserting a new node at the <strong>end</strong> of a linked list, the <code>tail</code> must always be updated to point to the new last node.

If the list is empty before insertion:

<pre><code>head = newNode
tail = newNode</code></pre>

so both <code>head</code> and <code>tail</code> change.

If the list already contains nodes, only the <code>tail</code> changes.

Therefore:

<ul>
  <li>If the list is empty, both head and tail change.</li>
  <li>If the list is not empty, tail changes.</li>
  <li>Head may change, but tail always changes.</li>
</ul>

Therefore, the correct answer is <strong>All of the above.</strong>
`
},
{
  type: "radio",
  question: `
What is the time-complexity for the <code>addFirst</code> function?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(1)",
  explanation: `
The <code>addFirst</code> function inserts a new node directly at the beginning of the linked list.

Conceptually:

<pre><code class="language-python">newNode.next = head
head = newNode</code></pre>

No traversal of the list is required.

Therefore, the time complexity is:

<pre><code>O(1)</code></pre>

The correct answer is <strong>O(1)</strong>.
`
},

{
  type: "checkbox",
  question: `
In the implementation of LinkedList, which of the following is false?
`,
  answers: [
    "LinkedList has a size property.",
    "LinkedList has the properties named head and tail to point to the nodes in a linked list.",
    "If a linked list contains one element, head points to the node and tail is None.",
    "tail.next is always None."
  ],
  correct: [
    "If a linked list contains one element, head points to the node and tail is None."
  ],
  explanation: `
The false statement is:

<strong>If a linked list contains one element, head points to the node and tail is None.</strong>

If a linked list contains exactly one node, both <code>head</code> and <code>tail</code> point to that same node.

Conceptually:

<pre><code>head ──► [node] ◄── tail
             |
             ▼
            None</code></pre>

The last node's <code>next</code> reference is <code>None</code>, so <code>tail.next</code> is <code>None</code>.

Therefore, only the <strong>third statement</strong> is false.
`
},

{
  type: "checkbox",
  question: `
The following methods are defined in the Stack class. Please select all that apply.
`,
  answers: [
    "isEmpty()",
    "peek()",
    "push(value: object)",
    "pop()",
    "getSize()"
  ],
  correct: [
    "isEmpty()",
    "peek()",
    "push(value: object)",
    "pop()",
    "getSize()"
  ],
  explanation: `
All of these methods are defined in the Stack class.

<ul>
  <li><code>isEmpty()</code> — checks whether the stack is empty.</li>
  <li><code>peek()</code> — returns the top element without removing it.</li>
  <li><code>push(value)</code> — adds an element to the top of the stack.</li>
  <li><code>pop()</code> — removes and returns the top element.</li>
  <li><code>getSize()</code> — returns the number of elements in the stack.</li>
</ul>

Therefore, <strong>all five choices are correct</strong>.
`
},
{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list and <code>list2</code> is a LinkedList. Both contain 1 million floating-point values. Analyze the following code:

<pre><code class="language-python">A:
for i in range(100000):
    list1.append(i)

B:
for i in range(100000):
    list2.add(i)</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B because the time complexity for code fragment A is O(n) and for B is O(n^2).",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B because both code fragment A and B have the same time complexity O(n).",
    "Both code fragment A and B have the same time complexity O(1), but A runs faster because LinkedList has more overhead on creating object for each node in the linked list."
  ],
  correct: "Both code fragment A and B have the same time complexity O(1), but A runs faster because LinkedList has more overhead on creating object for each node in the linked list.",
  explanation: `
For this course question, adding an element to the end of either structure is treated as a constant-time operation.

For the Python list:

<pre><code class="language-python">list1.append(i)</code></pre>

append is treated as <strong>O(1)</strong>.

For the LinkedList:

<pre><code class="language-python">list2.add(i)</code></pre>

the list maintains a tail reference, so adding at the end is also <strong>O(1)</strong>.

However, LinkedList must create a separate node object and maintain its links for every new element.

Therefore, the ordinary list has less overhead and normally runs faster.

The correct answer is:

<strong>Both code fragments have the same O(1) operation complexity, but A runs faster because LinkedList has more overhead.</strong>
`
},

{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list and <code>list2</code> is a LinkedList. Both contain 1 million floating-point values. Analyze the following code:

<pre><code class="language-python">A:
for i in range(100000):
    list1.insert(0, i)

B:
for i in range(100000):
    list2.insert(0, i)</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B.",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B."
  ],
  correct: "Code fragment B runs faster than code fragment A.",
  explanation: `
For code fragment <strong>A</strong>:

<pre><code class="language-python">list1.insert(0, i)</code></pre>

inserts an element at the beginning of a Python list.

Existing elements must be shifted to the right, so insertion at the beginning requires:

<pre><code>O(n)</code></pre>

For code fragment <strong>B</strong>:

<pre><code class="language-python">list2.insert(0, i)</code></pre>

inserting at index 0 changes only the head links of the LinkedList.

This requires:

<pre><code>O(1)</code></pre>

Therefore, <strong>code fragment B runs faster than code fragment A.</strong>
`
},
{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list and <code>list2</code> is a LinkedList. Both contain 1 million floating-point values. Analyze the following code:

<pre><code class="language-python">A:
while len(list1) > 0:
    del list1[0]

B:
while list2.getSize() > 0:
    list2.removeFirst()</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B because the time complexity for code fragment A is O(n) and for B is O(n^2).",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B because both code fragment A and B have the same time complexity O(n).",
    "Both code fragment A and B have the same time complexity O(n), but A runs faster because LinkedList has more overhead on creating object for each node in the linked list."
  ],
  correct: "Code fragment B runs faster than code fragment A.",
  explanation: `
For code fragment <strong>A</strong>:

<pre><code class="language-python">del list1[0]</code></pre>

removes the first element of a Python list.

All remaining elements must be shifted one position to the left, so each deletion can take:

<pre><code>O(n)</code></pre>

Repeating this until the list is empty gives approximately:

<pre><code>O(n²)</code></pre>

For code fragment <strong>B</strong>:

<pre><code class="language-python">list2.removeFirst()</code></pre>

removes the head node directly from the linked list.

Each removal takes:

<pre><code>O(1)</code></pre>

Repeating this for all elements gives:

<pre><code>O(n)</code></pre>

Therefore, <strong>Code fragment B runs faster than code fragment A.</strong>
`
},

{
  type: "radio",
  question: `
________ is a data structure to store data in a sequential order.
`,
  answers: [
    "A list",
    "A set",
    "A dictionary",
    "A heap"
  ],
  correct: "A list",
  explanation: `
A <strong>list</strong> stores elements in a sequential order.

Elements have positions, or indexes, such as:

<pre><code>0, 1, 2, 3, ...</code></pre>

A set does not represent data as an indexed sequence, a dictionary stores key-value pairs, and a heap is organized according to the heap property.

Therefore, the correct answer is <strong>A list</strong>.
`
},
{
  type: "checkbox",
  question: `
Which of the following are true? Please select all that apply.
`,
  answers: [
    "Generators are special Python functions for generating iterators.",
    "When you define an iterator class, the __next__ and __iter__ methods must be defined explicitly. Using a generator, these two methods are automatically defined when you create an iterator from a generator.",
    "A generator uses the yield keyword to return data rather than using the return keyword.",
    "When the generator terminates, it automatically raises a StopIteration exception."
  ],
  correct: [
    "Generators are special Python functions for generating iterators.",
    "When you define an iterator class, the __next__ and __iter__ methods must be defined explicitly. Using a generator, these two methods are automatically defined when you create an iterator from a generator.",
    "A generator uses the yield keyword to return data rather than using the return keyword.",
    "When the generator terminates, it automatically raises a StopIteration exception."
  ],
  explanation: `
All four statements are true.

<ul>
  <li>A <strong>generator</strong> is a special Python function that produces an iterator.</li>
  <li>With a manually defined iterator class, <code>__iter__()</code> and <code>__next__()</code> normally need to be implemented explicitly.</li>
  <li>A generator uses the <code>yield</code> keyword to produce values one at a time.</li>
  <li>When the generator is exhausted, iteration ends with a <code>StopIteration</code> exception.</li>
</ul>

Therefore, <strong>all four choices are correct</strong>.
`
},
{
  type: "radio",
  question: `
In the LinkedList class, which of the following statement appends a string <code>s</code> to the end of the list?
`,
  answers: [
    "list.addFirst(s);",
    "list.add(s);",
    "list.add(0, s);",
    "list.add(1, s);",
    "list.insert(s);"
  ],
  correct: "list.add(s);",
  explanation: `
In this LinkedList implementation, the <code>add(e)</code> method appends an element to the <strong>end</strong> of the list.

Therefore:

<pre><code>list.add(s);</code></pre>

adds the string <code>s</code> as the last element.

By contrast:

<ul>
  <li><code>addFirst(s)</code> inserts at the beginning.</li>
  <li><code>add(0, s)</code> inserts at index 0.</li>
  <li><code>add(1, s)</code> inserts at index 1.</li>
</ul>

Therefore, the correct answer is <strong>list.add(s);</strong>
`
},
{
  type: "radio",
  question: `
Suppose <code>list1</code> is a list and <code>list2</code> is a LinkedList. Both contain 1 million floating-point values. Analyze the following code:

<pre><code class="language-python">A:
for i in range(100000):
    sum += list1[i]

B:
for i in range(100000):
    sum += list2.get(i)</code></pre>
`,
  answers: [
    "Code fragment A is more efficient than code fragment B.",
    "Code fragment B is more efficient than code fragment A.",
    "Code fragment A is as efficient as code fragment B."
  ],
  correct: "Code fragment A is more efficient than code fragment B.",
  explanation: `
For a regular Python <code>list</code>, accessing an element by index is direct:

<pre><code class="language-python">list1[i]</code></pre>

and takes approximately:

<pre><code>O(1)</code></pre>

Therefore, performing this operation 100,000 times takes approximately:

<pre><code>O(n)</code></pre>

For a <code>LinkedList</code>, accessing an element at index <code>i</code> requires traversing nodes from the beginning of the list:

<pre><code class="language-python">list2.get(i)</code></pre>

This takes approximately <code>O(i)</code> time.

Repeatedly retrieving indexes:

<pre><code>0, 1, 2, ..., n - 1</code></pre>

requires approximately:

<pre><code>1 + 2 + 3 + ... + n = O(n²)</code></pre>

Therefore, <strong>Code fragment A is more efficient than code fragment B.</strong>
`
},
{
  type: "checkbox",
  question: `
Which of the following are true? Please select all that apply.
`,
  answers: [
    "A stack can be viewed as a special type of list, where the elements are accessed, inserted, and deleted only from the end, called the top, of the stack.",
    "A queue represents a waiting list. A queue can be viewed as a special type of list, where the elements are inserted into the end (tail) of the queue, and are accessed and deleted from the beginning (head) of the queue.",
    "Since the insertion and deletion operations on a stack are made only at the end of the stack, using an array list to implement a stack is more efficient than a linked list.",
    "Since deletions are made at the beginning of the queue, it is more efficient to implement a queue using a LinkedList than a list."
  ],
  correct: [
    "A stack can be viewed as a special type of list, where the elements are accessed, inserted, and deleted only from the end, called the top, of the stack.",
    "A queue represents a waiting list. A queue can be viewed as a special type of list, where the elements are inserted into the end (tail) of the queue, and are accessed and deleted from the beginning (head) of the queue.",
    "Since the insertion and deletion operations on a stack are made only at the end of the stack, using an array list to implement a stack is more efficient than a linked list.",
    "Since deletions are made at the beginning of the queue, it is more efficient to implement a queue using a LinkedList than a list."
  ],
  explanation: `
All four statements are true.

<ul>
  <li>A <strong>Stack</strong> follows LIFO and performs insertion and deletion at the top.</li>
  <li>A <strong>Queue</strong> follows FIFO: elements enter at the tail and leave from the head.</li>
  <li>For a stack, operations occur at the end, where an array-based list can perform append/pop efficiently.</li>
  <li>For a queue, removing from the beginning of a regular list requires shifting elements, while a LinkedList can remove the head efficiently.</li>
</ul>

Therefore, <strong>all four choices are correct</strong>.
`
},
{
  type: "radio",
  question: `
Suppose <code>list2</code> is a LinkedList. Analyze the following code:

<pre><code class="language-python">A:
while len(list2) > 0:
    list2.remove(list2.get(len(list2) - 1))

B:
while list2.getSize() > 0:
    list2.removeLast()</code></pre>
`,
  answers: [
    "Code fragment A runs faster than code fragment B.",
    "Code fragment B runs faster than code fragment A.",
    "Code fragment A runs as fast as code fragment B."
  ],
  correct: "Code fragment B runs faster than code fragment A.",
  explanation: `
Both fragments repeatedly remove the last element from a singly linked list.

In fragment A:

<pre><code class="language-python">list2.get(len(list2) - 1)</code></pre>

must first traverse the linked list to retrieve the last element.

Then:

<pre><code class="language-python">list2.remove(...)</code></pre>

requires additional work to locate and remove that element.

Fragment B directly calls:

<pre><code class="language-python">list2.removeLast()</code></pre>

which performs the required traversal without the extra <code>get()</code> operation.

Therefore, even though both approaches involve traversal, <strong>Code fragment B is faster than Code fragment A.</strong>
`
},
{
  type: "radio",
  question: `
Which data structure is appropriate to arrange customers in a clinic for taking flu shots?
`,
  answers: [
    "Stack",
    "Queue",
    "Priority Queue",
    "list",
    "Linked List"
  ],
  correct: "Queue",
  explanation: `
Customers waiting for flu shots are normally served in the order they arrive.

This follows the:

<pre><code>First In, First Out (FIFO)</code></pre>

principle.

A <strong>Queue</strong> is designed for FIFO processing:

<ul>
  <li>The first customer to arrive is served first.</li>
  <li>New customers join at the end of the queue.</li>
</ul>

Therefore, the correct answer is <strong>Queue</strong>.
`
},
{
  type: "radio",
  question: `
What is the time-complexity for the <code>get(index)</code> function?
`,
  answers: [
    "O(1)",
    "O(logn)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(n)",
  explanation: `
In a linked list, elements cannot be accessed directly by index.

To execute:

<pre><code class="language-python">get(index)</code></pre>

the algorithm starts at the head and follows the links until it reaches the requested position.

In the worst case, it may need to traverse almost the entire list.

Therefore, the time complexity is:

<pre><code>O(n)</code></pre>

The correct answer is <strong>O(n)</strong>.
`
},
{
  type: "radio",
  question: `
Suppose the rule of the party is that the participants who arrive earlier will leave earlier. Which data structure is appropriate to store the participants?
`,
  answers: [
    "vector",
    "LinkedList",
    "array",
    "Stack",
    "Queue"
  ],
  correct: "Queue",
  explanation: `
The participants who arrive <strong>earlier</strong> must also leave <strong>earlier</strong>.

This follows the:

<pre><code>First In, First Out (FIFO)</code></pre>

principle.

A <strong>Queue</strong> uses FIFO:

<ul>
  <li>The first participant to arrive enters the queue first.</li>
  <li>The first participant in the queue leaves first.</li>
</ul>

Therefore, the correct answer is <strong>Queue</strong>.
`
},
];
