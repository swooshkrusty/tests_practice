const questions = [
  {
    type: "radio",
    question: "Which of the following is true about a leaf node in a binary tree?",
    answers: [
      "It has two children",
      "It is a node with no children",
      "It has one child",
      "It is the root"
    ],
    correct: "It is a node with no children"
  },
  {
    type: "radio",
    question: "What is a Binary Search Tree (BST)?",
    answers: [
      "A tree with random values",
      "A tree where for every node, the value of the left child is less than the value of the node and the value of the right child is greater",
      "A tree with only one child per node",
      "A tree without a root"
    ],
    correct: "A tree where for every node, the value of the left child is less than the value of the node and the value of the right child is greater"
  },
  {
    type: "radio",
    question: "Which of the following traversals visits all nodes level by level",
    answers: [
      "Inorder traversal",
      "Preorder traversal",
      "Postorder traversal",
      "Breadth-first traversal"
    ],
    correct: "Breadth-first traversal"
  },
  {
  type: "radio",
  question: "Which of the following best describes the height of a binary tree?",
  answers: [
    "The number of nodes in the tree",
    "The number of edges on the longest path from the root to a leaf",
    "The number of leaves",
    "The number of children of the root",
    "The number of edges on the shortest path from the root to a leaf",
    "The number of nodes in the left subtree"
  ],
  correct: "The number of edges on the longest path from the root to a leaf",
  explanation: `
    The height of a binary tree is defined as the number of edges on the 
    <strong>longest path</strong> from the root node to a leaf node.<br><br>
    It is not the shortest path, not the number of nodes, and not related 
    to a specific subtree.<br><br>
    Therefore, the correct answer is <strong>the number of edges on the longest path from the root to a leaf</strong>.
  `

},
  {
  type: "radio",
  question: "In which traversal does a binary tree visit the nodes in the order: Left subtree, Current node, Right subtree?",
  answers: [
    "Preorder traversal",
    "Inorder traversal",
    "Postorder traversal",
    "Breadth-first traversal"
  ],
  correct: "Inorder traversal"
},
  {
    type: "radio",
    question: "In a binary search tree, all values in the left subtree of a node are smaller than the node's value.",
    answers: ["True", "False"],
    correct: "True"
  },
  {
  type: "radio",
  question: "What does a preorder traversal of a binary tree visit in order?",
  answers: [
    "Left subtree, Root, Right subtree",
    "Root, Left subtree, Right subtree",
    "Left subtree, Right subtree, Root",
    "Right subtree, Root, Left subtree"
  ],
  correct: "Root, Left subtree, Right subtree"
},
  {
  type: "radio",
  question: "A binary search tree always has a height of O(log n), n being the number of nodes in the tree.",
  answers: ["True", "False"],
  correct: "False"
},
  {
    type: "radio",
    question: "________ is a data structure to store data in sequential order.",
    answers: ["A tree", "A graph", "A list", "A map"],
    correct: "A list"
  },
  {
    type: "checkbox",
    question: "Which of the following operations are supported by a list? Please select all that apply",
    answers: [
      "Find how many elements are in this list",
      "Retrieve an element from this list",
      "Insert a new element to this list",
      "Find whether an element is in this list",
      "Delete an element from this list",
      "Sort itself automatically",
      "Prevent duplicate elements",
      "Guarantee constant time search O(1)",
      "Store only unique elements",
      "Always keep elements in sorted order"
    ],
    correct: [
      "Find how many elements are in this list",
      "Retrieve an element from this list",
      "Insert a new element to this list",
      "Find whether an element is in this list",
      "Delete an element from this list"
    ]
  },
  {
  type: "checkbox",
  question: "Which of the following statements are true? Please select all that apply.",
  answers: [
    // ✅ правильные
    "MyArrayList is implemented using an array. The array is dynamically created. If the capacity of the array is exceeded, a new larger array is created and all the elements are copied from the current array to the new array",
    "MyLinkedList is implemented using a linked structure",
    "MyArrayList and MyLinkedList are two concrete implementations of MyList.",
    "A linked structure consists of nodes. Each node is dynamically created to hold an element. All the nodes are linked together to form a list",

    // ❌ ловушки
    "MyArrayList never changes its size after creation",
    "MyLinkedList uses a fixed-size array internally",
    "Elements in MyLinkedList are stored in contiguous memory",
    "MyArrayList stores elements as nodes with pointers",
    "A linked list does not allow dynamic memory allocation"
  ],
  correct: [
    "MyArrayList is implemented using an array. The array is dynamically created. If the capacity of the array is exceeded, a new larger array is created and all the elements are copied from the current array to the new array",
    "MyLinkedList is implemented using a linked structure",
    "MyArrayList and MyLinkedList are two concrete implementations of MyList.",
    "A linked structure consists of nodes. Each node is dynamically created to hold an element. All the nodes are linked together to form a list"
  ]
},
{
  type: "checkbox",
  question: "In the implementation of MyArrayList, which of the following are true? Please select all that apply.",
  answers: [
    // ✅ правильные
    "capacity is the length of the array used to store the elements in the list",
    "size is reduced by 1 if an element is deleted from the list",
    "size indicates the number of elements in the list",

    // ❌ ловушки
    "capacity always equals size",
    "size increases automatically when accessing elements",
    "capacity decreases automatically when elements are removed",
    "size represents the maximum number of elements the list can hold",
    "MyArrayList uses linked nodes to store elements",
    "capacity is always greater than size",
    "capacity is reduced by 1 if an element is deleted from the list",
    "None of the above"
  ],
  correct: [
    "capacity is the length of the array used to store the elements in the list",
    "size is reduced by 1 if an element is deleted from the list",
    "size indicates the number of elements in the list"
  ]
},
{
  type: "checkbox",
  question: "In the implementation of MyArrayList, which of the following are true? Please select all that apply.",
  answers: [
    // ✅ правильные
    "Inside MyArrayList, a regular array is used to store elements",
    "If the current capacity equals to size, capacity is doubled + 1 when a new element is added to MyArrayList",
    "capacity never reduces unless you apply the trimToSize() method",

    // ❌ ловушки
    "MyArrayList stores elements using linked nodes",
    "Capacity always equals the number of elements",
    "Capacity decreases automatically when elements are removed",
    "Size represents the total capacity of the array",
    "MyArrayList never resizes once created",
    "size never reduces",
    "None of the above"
  ],
  correct: [
    "Inside MyArrayList, a regular array is used to store elements",
    "If the current capacity equals to size, capacity is doubled + 1 when a new element is added to MyArrayList",
    "capacity never reduces unless you apply the trimToSize() method"
  ]
},
{
  type: "radio",
  question: "When a linked list is empty, which of the following statements is false?",
  answers: [
    "head != tail",
    "head is null",
    "head == tail",
    "head == null",
    "tail == null",
    "tail is null",
    "size == 0"
  ],
  correct: "head != tail"
},
{
  type: "radio",
  question: "In the MyLinkedList class, which of the following statements is to insert a string s to the head of the list?",
  answers: [
    "list.addFirst(s);",
    "list.addLast(s);",
    "list.add(s);",
    "list.insert(s);",
    "list.add(1, s);"
  ],
  correct: "list.addFirst(s);"
},
{
  type: "radio",
  question: "In the MyLinkedList class, which of the following statements are to append a string s to the end of the list?",
  answers: [
    "list.add(s);",
    "list.addFirst(s);",
    "list.insert(s);",
    "list.push(s);",
    "list.add(1, s);"
  ],
  correct: "list.add(s);"
},
{
  type: "checkbox",
  question: "When a new node is inserted at the head of a linked list, will head and tail be changed?",
  answers: [
    // ✅ правильные
    "If the list is empty before the insertion, both head and tail will change",
    "If the list is not empty before the insertion, head will change",
    "Head will always change, but tail may change too",
    "All of the above"
  ],
  correct: [
    "All of the above"
  ]
},
{
  type: "radio",
  question: "What is the time-complexity for the addFirst method?",
  answers: [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(nlogn)",
    "O(n²)"
  ],
  correct: "O(1)"
},
{
  type: "radio",
  question: "When a new node is inserted at the end of a linked list, will head and tail be changed?",
  answers: [
    "If the list is empty before the insertion, both head and tail will change",
    "If the list is not empty before the insertion, tail will change",
    "Head may change, but tail will always change",
    "All of the above"
  ],
  correct: "All of the above"
},
{
  type: "radio",
  question: "What is the time-complexity for the add(int index, T element) method?",
  answers: [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(nlogn)",
    "O(n²)"
  ],
  correct: "O(n)"
},
{
  type: "radio",
  question: "What is the base case in a recursive function?",
  answers: [
    "The condition that stops the recursion and prevents infinite loops",
    "The first recursive call",
    "A loop inside the method",
    "The largest input value"
  ],
  correct: "The condition that stops the recursion and prevents infinite loops"
},
{
  type: "radio",
  question: "In the Fibonacci series (0, 1, 1, 2, 3, 5, 8…), what is the value of F(6)?",
  answers: [
    "5",
    "6",
    "8",
    "13"
  ],
  correct: "8"
},
{
  type: "radio",
  question: "What is tail recursion?",
  answers: [
    "A recursive call that is the very last action in a method, allowing for potential compiler optimization",
    "A recursive method with two base cases",
    "A recursion that never stops",
    "A recursive call made before any calculation"
  ],
  correct: "A recursive call that is the very last action in a method, allowing for potential compiler optimization"
},
{
  type: "radio",
  question: "If a recursive method f(n) calls f(n-1) and f(n-2), what common series is it likely calculating?",
  answers: [
    "The Factorial series",
    "The Fibonacci series",
    "The Arithmetic series",
    "The Binary search"
  ],
  correct: "The Fibonacci series"
},
{
  type: "radio",
  question: "How many times is a recursive method invoked for n! (factorial)?",
  answers: [
    "n times",
    "n + 1 times (e.g., 3! calls the method for 3, 2, 1, and the base case 0)",
    "2n times",
    "log n times"
  ],
  correct: "n + 1 times (e.g., 3! calls the method for 3, 2, 1, and the base case 0)"
},
{
  type: "radio",
  question: "What is the primary benefit of using Generics?",
  answers: [
    "Compile-time type safety (catching errors early) and eliminating the need for manual casting",
    "Faster program execution",
    "Automatic memory management",
    "Allows only primitive types"
  ],
  correct: "Compile-time type safety (catching errors early) and eliminating the need for manual casting"
},
{

  type: "radio",
  question: "What is the correct syntax for a bounded type parameter that only allows numbers?",
  answers: [
    { text: "&lt;T extends Number&gt;", value: "<T extends Number>" },
    { text: "&lt;T implements Number&gt;", value: "<T implements Number>" },
    { text: "&lt;Number extends T&gt;", value: "<Number extends T>" },
    { text: "&lt;T super Number&gt;", value: "<T super Number>" }
  ],
  correct: "<T extends Number>",
  explanation: `
    In Java generics, the keyword <strong>extends</strong> is used to create an upper bounded type parameter.
    <br><br>
    <pre><code>
&lt;T extends Number&gt;
    </code></pre>
    means that T can be:
    <br>
    • Number
    <br>
    • Integer
    <br>
    • Double
    <br>
    • Float
    <br>
    • or any subclass of Number
    <br><br>
    The keyword <strong>implements</strong> is not used in generic bounds.
    <br><br>
    Therefore, the correct syntax is:
    <strong>&lt;T extends Number&gt;</strong>

  `

},
{
  type: "radio",
  question: "In the statement List<?> list = new ArrayList<String>();, what does ? represent?",
  answers: [
    "An unbounded wildcard",
    "A specific type String",
    "A syntax error",
    "A primitive type"
  ],
  correct: "An unbounded wildcard"
},
{
  type: "radio",
  question: "What is a raw type?",
  answers: [
    "Using a generic class without a type argument (e.g., ArrayList list), which is unsafe",
    "A type that only works with primitives",
    "A type that cannot be extended",
    "A type used only in interfaces"
  ],
  correct: "Using a generic class without a type argument (e.g., ArrayList list), which is unsafe"
},
{
  type: "radio",
  question: "How do you define a static generic method?",
  answers: [
    "By placing the type parameter <T> before the return type",
    "By placing <T> after the method name",
    "By declaring T inside the method body",
    "By using extends keyword only"
  ],
  correct: "By placing the type parameter <T> before the return type"
},
{
  type: "radio",
  question: "Which collection should you use for Last-In, First-Out (LIFO) behavior?",
  answers: [
    "Queue",
    "Stack",
    "List",
    "Set"
  ],
  correct: "Stack"
},
{
  type: "radio",
  question: "What is the main difference between Iterator and ListIterator?",
  answers: [
    "Iterator can go backward, ListIterator cannot",
    "ListIterator can traverse a list in both directions (forward and backward)",
    "Iterator works only with arrays",
    "ListIterator cannot modify elements"
  ],
  correct: "ListIterator can traverse a list in both directions (forward and backward)"
},
{
  type: "radio",
  question: "Which method in the Collection interface removes all elements?",
  answers: [
    "removeAll()",
    "delete()",
    "clear()",
    "remove()"
  ],
  correct: "clear()"
},
{
  type: "radio",
  question: "How do you instantiate a LinkedList of Strings?",
  answers: [
    "LinkedList list = new LinkedList<String>();",
    "LinkedList<String> list = new LinkedList<>();",
    "List<String> list = new ArrayList();",
    "LinkedList = new LinkedList<String>();"
  ],
  correct: "LinkedList<String> list = new LinkedList<>();"
},
{
  type: "radio",
  question: "What does PriorityQueue use to determine the order of its elements?",
  answers: [
    "Insertion order",
    "Random order",
    "Natural ordering (Comparable) or a provided Comparator",
    "Always FIFO order"
  ],
  correct: "Natural ordering (Comparable) or a provided Comparator"
},
{
  type: "radio",
  question: "Which Set implementation should you use if you need the elements to be sorted?",
  answers: [
    "HashSet",
    "LinkedHashSet",
    "TreeSet",
    "ArrayList"
  ],
  correct: "TreeSet"
},
{
  type: "radio",
  question: "What is the performance complexity for get() and put() in a HashMap",
  answers: [
    "O(n)",
    "O(log n)",
    "O(1) on average",
    "O(n²)"
  ],
  correct: "O(1) on average"
},
{
  type: "radio",
  question: "To store key-value pairs while maintaining insertion order, which map should you use?",
  answers: [
    "HashMap",
    "TreeMap",
    "LinkedHashMap",
    "Hashtable"
  ],
  correct: "LinkedHashMap"
},
{
  type: "radio",
  question: "How do you iterate through all keys in a Map?",
  answers: [
    "map.values()",
    "map.entrySet()",
    "map.keySet()",
    "map.keys()"
  ],
  correct: "map.keySet()"
},
{
  type: "radio",
  question: "Why is a HashSet generally faster than a List for searching?",
  answers: [
    "It keeps elements sorted",
    "It uses hashing to find elements directly rather than iterating through the entire collection",
    "It uses recursion",
    "It stores elements in arrays only"
  ],
  correct: "It uses hashing to find elements directly rather than iterating through the entire collection"
},
{
  type: "radio",
  question: "How do you iterate through all keys in a Map?",
  answers: [
    "Using the values() method",
    "Using the entrySet() method",
    "Using the keySet() method",
    "Using the getKeys() method"
  ],
  correct: "Using the keySet() method"
},
{
  type: "radio",
  question: "What is the Big-O complexity of a nested loop where both loops run n times?",
  answers: [
    "O(n)",
    "O(log n)",
    "O(n²)",
    "O(n log n)"
  ],
  correct: "O(n²)"
},
{
  type: "radio",
  question: "Which sorting algorithm uses a 'pivot' to partition the array?",
  answers: [
    "Merge Sort",
    "Bubble Sort",
    "Quick Sort",
    "Selection Sort"
  ],
  correct: "Quick Sort"
},
{
  type: "radio",
  question: "What is the worst-case complexity of Merge Sort?",
  answers: [
    "O(n²)",
    "O(n log n)",
    "O(log n)",
    "O(n)"
  ],
  correct: "O(n log n)"
},
{
  type: "radio",
  question: "Which algorithm approach involves breaking a problem into smaller sub-problems and solving them recursively?",
  answers: [
    "Brute force",
    "Greedy algorithm",
    "Divide-and-conquer",
    "Dynamic programming"
  ],
  correct: "Divide-and-conquer"
},
{
  type: "radio",
  question: "Define Brute Force?",
  answers: [
    "A fast algorithm using recursion",
    "A simple but often inefficient approach that tries every possible case",
    "An algorithm that sorts data automatically",
    "A method using binary trees"
  ],
  correct: "A simple but often inefficient approach that tries every possible case"
},
{
  type: "radio",
  question: "What is the Pre-Order traversal sequence?",
  answers: [
    "Left, Right, Root",
    "Root, Left, Right",
    "Left, Root, Right",
    "Right, Root, Left"
  ],
  correct: "Root, Left, Right"
},

{
  type: "radio",
  question: "In a Binary Search Tree (BST), where are values smaller than the root stored?",
  answers: [
    "In the right subtree",
    "In the left subtree",
    "In both subtrees",
    "Only at the root"
  ],
  correct: "In the left subtree"
},

{
  type: "radio",
  question: "What makes a tree an AVL Tree?",
  answers: [
    "It is always perfectly balanced",
    "It is a tree where each node has two children",
    "It is a self-balancing BST where the heights of two child subtrees of any node differ by at most one",
    "It stores elements in sorted arrays"
  ],
  correct: "It is a self-balancing BST where the heights of two child subtrees of any node differ by at most one"
},

{
  type: "radio",
  question: "How do you calculate the Balance Factor?",
  answers: [
    "Height(Right) - Height(Left)",
    "Height(Left) + Height(Right)",
    "Height(Left) - Height(Right)",
    "Number of nodes in left subtree"
  ],
  correct: "Height(Left) - Height(Right)"
},
{
  type: "radio",
  question: "How do you calculate the Balance Factor?",
  answers: [
    "Height(Right Subtree) - Height(Left Subtree)",
    "Height(Left Subtree) + Height(Right Subtree)",
    "Height(Left Subtree) - Height(Right Subtree)",
    "Number of nodes in the left subtree"
  ],
  correct: "Height(Left Subtree) - Height(Right Subtree)"
},
{
  type: "radio",
  question: "What is a collision in hashing?",
  answers: [
    "When a hash table is full",
    "When two different keys produce the same hash index",
    "When a key cannot be inserted",
    "When a hash function returns negative value"
  ],
  correct: "When two different keys produce the same hash index"
},

{
  type: "radio",
  question: "What is the load factor?",
  answers: [
    "The number of collisions in a hash table",
    "The ratio of the number of elements to the capacity of the hash table (n/m)",
    "The total number of buckets",
    "The time complexity of hashing"
  ],
  correct: "The ratio of the number of elements to the capacity of the hash table (n/m)"
},

{
  type: "radio",
  question: "In Java Streams, which of these is a terminal method: map, filter, or forEach",
  answers: [
    "map",
    "filter",
    "forEach",
    "peek"
  ],
  correct: "forEach"
},
{
  type: "radio",
  question: "What is the difference between stream() and parallelStream()?",
  answers: [
    "stream() is faster than parallelStream() in all cases",
    "parallelStream() uses only one thread",
    "stream() is sequential (single-threaded), while parallelStream() splits tasks across multiple threads",
    "There is no difference"
  ],
  correct: "stream() is sequential (single-threaded), while parallelStream() splits tasks across multiple threads"
},
{
  type: "radio",
  question: "Iterable defines the natural ordering of objects.",
  answers: [
    "True",
    "False"
  ],
  correct: "False"
},
{
  type: "radio",
  question: "Which method would you use to ensure that a HashSet does not contain duplicate elements?",
  answers: [
    "remove()",
    "contains()",
    "add()",
    "clear()"
  ],
  correct: "add()"
},

{
  type: "radio",
  question: "Which concept removes generic type information at compile time?",
  answers: [
    "Polymorphism",
    "Encapsulation",
    "Type erasure",
    "Inheritance"
  ],
  correct: "Type erasure"
},
{
  type: "radio",
  question: "A spanning tree must include all vertices of the original graph.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A spanning tree is a tree that includes <strong>all vertices</strong> of the original graph.<br><br>
    It connects all vertices without forming any cycles.<br><br>
    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "A Map stores data as key-value pairs.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A Map is a data structure that stores elements as <strong>key-value pairs</strong>.<br><br>
    Each key is unique and maps to a specific value.<br><br>
    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Which collection does not allow duplicate values?",
  answers: [
    "Set",
    "List",
    "Map",
    "Queue"
  ],
  correct: "Set",
  explanation: `
    A <strong>Set</strong> does not allow duplicate values — each element must be unique.<br><br>
    A List and Queue can contain duplicates, and a Map allows duplicate values (but not duplicate keys).<br><br>
    Therefore, the correct answer is <strong>Set</strong>.
  `
},
{
  type: "radio",
  question: `
    What is the time complexity of the following code?<br><br>

    <pre><code>
for(int i = 0; i &lt; n; i++)
  for(int j = 0; j &lt; n; j++)
    for(int k = 0; k &lt; 10; k++)
    </code></pre>
  `,
  answers: [
    "O(n³)",
    "O(2ⁿ)",
    "O(n log n)",
    "O(n²)"
  ],
  correct: "O(n²)",
  explanation: `
    Two loops depend on n → n × n<br>
    Third loop is constant (10)<br><br>
    → O(n²)
  `
},
{
  type: "radio",
  question: "When an array list exceeds capacity, a larger array must be created and elements copied.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    When an ArrayList exceeds its capacity, it creates a new larger array
    and copies all existing elements into it.<br><br>

    This resizing operation takes time because all elements must be copied.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Which rotation is used to fix an LL imbalance?",
  answers: [
    "Single right rotation",
    "Single left rotation",
    "Double rotation (Left-Right)",
    "Double rotation (Right-Left)"
  ],
  correct: "Single right rotation",
  explanation: `
    An LL (Left-Left) imbalance occurs when a node is inserted into the left subtree of the left child.<br><br>

    To fix this, we perform a <strong>single right rotation</strong>.<br><br>

    Therefore, the correct answer is <strong>Single right rotation</strong>.
  `
},
{
  type: "radio",
  question: "The map method is used to:",
  answers: [
    "Print each element to the console.",
    "Combine all elements into a single result.",
    "Remove elements from a stream.",
    "Transform each element into a new element."
  ],
  correct: "Transform each element into a new element.",
  explanation: `
    The <strong>map</strong> method applies a function to each element and returns a new collection
    with the transformed elements.<br><br>

    It does not print (that's forEach), does not combine elements (that's reduce),
    and does not remove elements (that's filter).<br><br>

    Therefore, the correct answer is <strong>Transform each element into a new element</strong>.
  `
},
{
  type: "radio",
  question: "Merge Sort has O(n log n) time complexity in the worst case.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    Merge Sort repeatedly divides the array into halves and then merges them back together.<br><br>

    Dividing creates about log n levels.<br>
    At each level, merging takes O(n) time.<br><br>

    Therefore, the total worst-case time complexity is <strong>O(n log n)</strong>.
  `
},
{
  type: "radio",
  question: "Each node in a linked list is dynamically created.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    In a linked list, each node is typically created dynamically in memory 
    (e.g., using new or malloc).<br><br>
    This allows the list to grow and shrink during runtime.<br><br>
    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "The search time for an AVL tree is O(n) in the worst case.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    An AVL tree is a self-balancing binary search tree.<br><br>
    Because it stays balanced, its height is O(log n).<br><br>
    Search time depends on the height of the tree, so the worst-case search time is <strong>O(log n)</strong>, not O(n).<br><br>
    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "A stack push adds element to",
  answers: [
    "the bottom",
    "at a random location",
    "the top",
    "the middle"
  ],
  correct: "the top",
  explanation: `
    A stack follows the LIFO (Last In, First Out) principle.<br><br>
    The <strong>push</strong> operation adds a new element to the <strong>top</strong> of the stack.<br><br>
    Therefore, the correct answer is <strong>the top</strong>.
  `
},
{
  type: "radio",
  question: "Which collision resolution technique is not a version of Open Addressing?",
  answers: [
    "Linear Probing",
    "Quadratic Probing",
    "Double Hashing",
    "Separate Chaining"
  ],
  correct: "Separate Chaining",
  explanation: `
    Open Addressing methods include Linear Probing, Quadratic Probing, and Double Hashing.<br><br>
    <strong>Separate Chaining</strong> is different because it stores colliding elements in a linked list (or other structure) outside the table.<br><br>
    Therefore, the correct answer is <strong>Separate Chaining</strong>.
  `
},
{
  type: "radio",
  question: `
    Refer to the code below. What is test(4)?<br><br>

    <pre><code>
public static int test(int n){
    if(n <= 1)
        return 1;
    return n * test(n-1);
}
    </code></pre>
  `,
  answers: [
    "120",
    "24",
    "16",
    "10"
  ],
  correct: "24",
  explanation: `
    This is a recursive factorial function.<br><br>

    test(4) = 4 × test(3)<br>
    = 4 × 3 × test(2)<br>
    = 4 × 3 × 2 × test(1)<br>
    = 4 × 3 × 2 × 1<br>
    = <strong>24</strong><br><br>

    Therefore, the correct answer is <strong>24</strong>.
  `
},
{
  type: "radio",
  question: 'In the separate chaining scheme, what is a "bucket"?',
  answers: [
    "A deleted entry",
    "The total size of the hash table",
    "A container at a specific location that holds multiple entries",
    "A specific hash function"
  ],
  correct: "A container at a specific location that holds multiple entries",
  explanation: `
    In separate chaining, each index of the hash table stores a <strong>bucket</strong>,
    which is typically a list (like a linked list) that holds all entries hashing to that index.<br><br>

    This allows multiple elements to be stored at the same hash index.<br><br>

    Therefore, the correct answer is <strong>a container at a specific location that holds multiple entries</strong>.
  `
},
{
  type: "radio",
  question: `
    In the code below, T represents:<br><br>

    <pre><code>
class Box&lt;T&gt;{
   T value;
}
    </code></pre>
  `,
  answers: [
    "the actual type",
    "a primitive",
    "the formal type parameter",
    "a wildcard"
  ],
  correct: "the formal type parameter",
  explanation: `
    In generics, <strong>T</strong> is a placeholder type used when defining a class or method.<br><br>

    It is called a <strong>formal type parameter</strong> because it defines a type that will be specified later when the class is used.<br><br>

    Therefore, the correct answer is <strong>the formal type parameter</strong>.
  `
},
{
  type: "radio",
  question: `
    What is the worst-case time complexity for a search operation in a binary search tree?<br><br>
    Assume that n is the number of nodes in the tree.
  `,
  answers: [
    "O(log n)",
    "O(1)",
    "O(n)",
    "O(nlogn)"
  ],
  correct: "O(n)",
  explanation: `
    In the worst case, a binary search tree can become completely unbalanced
    (like a linked list).<br><br>

    In that case, searching requires traversing all nodes → O(n).<br><br>

    Therefore, the correct answer is <strong>O(n)</strong>.
  `
},
{
  type: "radio",
  question: "The reduce method can be used to combine elements into a single result, such as a sum.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    The <strong>reduce</strong> method processes elements of a collection and combines them into a single result.<br><br>

    For example, it can be used to calculate the sum of all elements.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: 'In graph terminology, what is a "simple graph"?',
  answers: [
    "A graph with no more than 10 vertices.",
    "A graph that can be drawn without crossing lines.",
    "A graph that has no loops or parallel edges.",
    "A graph where every vertex is connected to every other vertex."
  ],
  correct: "A graph that has no loops or parallel edges.",
  explanation: `
    A <strong>simple graph</strong> is defined as a graph that contains:
    • no loops (edges from a vertex to itself)<br>
    • no parallel edges (multiple edges between the same pair of vertices)<br><br>

    It is not about drawing (that is a planar graph) and not about full connectivity (that is a complete graph).<br><br>

    Therefore, the correct answer is <strong>a graph that has no loops or parallel edges</strong>.
  `
},
{
  type: "radio",
  question: "A rotation is the process of rebalancing a node.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    In self-balancing trees (like AVL trees), a <strong>rotation</strong> is an operation used to restore balance.<br><br>

    It restructures the subtree around a node to maintain the height property.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Why do we use AVL trees instead of regular Binary Search Trees (BST)?",
  answers: [
    "AVL trees do not allow duplicate elements.",
    "BST height can be O(n) in the worst case.",
    "AVL trees use less memory than BSTs.",
    "BSTs are always perfectly balanced."
  ],
  correct: "BST height can be O(n) in the worst case.",
  explanation: `
    A regular BST can become unbalanced, like a linked list.<br><br>

    In the worst case, its height can become O(n), making search, insert, and delete slow.<br><br>

    AVL trees automatically rebalance themselves, keeping height O(log n).<br><br>

    Therefore, the correct answer is <strong>BST height can be O(n) in the worst case</strong>.
  `
},
{
  type: "radio",
  question: 'According to your reading, what is the balance factor of a node that is "right-heavy"?',
  answers: [
    "-1",
    "+1",
    "0",
    "none of the options"
  ],
  correct: "+1",
  explanation: `
    In an AVL tree, the balance factor is usually calculated as:<br><br>

    Balance Factor = height(left subtree) − height(right subtree)<br><br>

    If a node is <strong>right-heavy</strong>, the right subtree is taller than the left subtree.<br><br>

    Therefore, the balance factor is <strong>-1</strong>.
  `
},
{
  type: "radio",
  question: "Which of the following is not required for recursion?",
  answers: [
    "A for-loop",
    "Base case",
    "Method calling itself",
    "Recursive case"
  ],
  correct: "A for-loop",
  explanation: `
    Recursion requires:
    <br><br>

    • A <strong>base case</strong> to stop the recursion<br>
    • A <strong>recursive case</strong><br>
    • A method/function that <strong>calls itself</strong>
    <br><br>

    A <strong>for-loop</strong> is not required for recursion.
  `
},
{
  type: "radio",
  question: "In an undirected graph, the edge (u, v) is the same as the edge (v, u).",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    In an <strong>undirected graph</strong>, edges do not have direction.
    <br><br>

    Therefore, the edge <strong>(u, v)</strong> is identical to <strong>(v, u)</strong>.
  `
},
{
  type: "radio",
  question: "Hashing means:",
  answers: [
    "Handling a collision",
    "Converting a search key to an integer called a hash code",
    "Finding an empty cell in the data collection",
    "Rehashing the data collection"
  ],
  correct: "Converting a search key to an integer called a hash code",
  explanation: `
    Hashing means converting a search key into an integer value called a
    <strong>hash code</strong>.

    <br><br>
    This hash code is then used to find where the data should be stored or searched.
  `
},
{
  type: "radio",
  question: "A Set stores data as key-value pairs.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    A <strong>Set</strong> stores only unique values.
    <br><br>

    Key-value pairs are stored in structures such as a <strong>Map</strong> or dictionary,
    not in a Set.
    <br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "A raw type means using a generic class without specifying its type parameter.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A <strong>raw type</strong> is a generic class or interface used
    without specifying its type parameter.
    <br><br>

    Example:
    <br>
    ArrayList list = new ArrayList();
    <br><br>

    Here, no type parameter such as &lt;String&gt; or &lt;Integer&gt; is provided.
    <br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Which structure allows efficient insertion without shifting elements?",
  answers: [
    "Stack",
    "LinkedList",
    "ArrayList",
    "Array"
  ],
  correct: "LinkedList",
  explanation: `
    A <strong>LinkedList</strong> allows efficient insertion because elements
    are connected using links (references).
    <br><br>

    When inserting a new element, the links are updated without shifting
    other elements in memory.
    <br><br>

    Arrays and ArrayLists usually require shifting elements after insertion.
    <br><br>

    Therefore, the correct answer is <strong>LinkedList</strong>.
  `
},
{
  type: "radio",
  question: "What is the average time complexity of bubble sort?",
  answers: [
    "O(n log n)",
    "O(log n)",
    "O(n)",
    "O(n²)"
  ],
  correct: "O(n²)",
  explanation: `
    Bubble sort repeatedly compares and swaps adjacent elements.
    <br><br>

    In the average case, it requires nested passes through the array.
    <br><br>

    This results in a time complexity of <strong>O(n²)</strong>.
  `
},
{
  type: "radio",
  question: "In an RL imbalance at node A, what is the first step of the double rotation?",
  answers: [
    "Single right rotation at A",
    "Single right rotation at A's right child B",
    "Single left rotation at A's right child B",
    "Single left rotation at A"
  ],
  correct: "Single right rotation at A's right child B",
  explanation: `
    RL means <strong>Right-Left imbalance</strong>.
    <br><br>

    To fix an RL imbalance:
    <br>
    1. Perform a <strong>single right rotation</strong> at A's right child B
    <br>
    2. Then perform a <strong>single left rotation</strong> at node A
    <br><br>

    Therefore, the first step is
    <strong>Single right rotation at A's right child B</strong>.
  `
},
{
  type: "radio",
  question: "Which interface is the root of the Java Collection framework?",
  answers: [
    "Iterable",
    "Collection",
    "List",
    "Map"
  ],
  correct: "Collection",
  explanation: `
    The <strong>Collection</strong> interface is the root of the Java Collection framework.
    <br><br>

    Interfaces such as:
    <br>
    • List
    <br>
    • Set
    <br>
    • Queue
    <br><br>

    all extend the Collection interface.
    <br><br>

    Map is part of the framework, but it does not extend Collection.
    <br><br>

    Therefore, the correct answer is <strong>Collection</strong>.
  `
},
{
  type: "radio",
  question: "Which method would you use to sort elements in their natural order?",
  answers: [
    "naturalSort()",
    "sorted()",
    "arrange()",
    "order()"
  ],
  correct: "sorted()",
  explanation: `
    The <strong>sorted()</strong> method is used to sort elements in their natural order.
    <br><br>

    Example:
    <pre><code>
list.stream().sorted()
    </code></pre>

    Natural order means:
    <br>
    • numbers → ascending
    <br>
    • strings → alphabetical
    <br><br>

    Therefore, the correct answer is <strong>sorted()</strong>.
  `
},
{
  type: "radio",
  question: "A list stores data in sequential order.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A <strong>List</strong> stores elements in sequential order.
    <br><br>

    Each element has a position (index), and elements are kept in order.
    <br><br>

    Example:
    <pre><code>
0 → Apple
1 → Banana
2 → Orange
    </code></pre>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Which of the following is a queue removal function?",
  answers: [
    "poll",
    "pop",
    "push",
    "insert"
  ],
  correct: "poll",
  explanation: `
    The <strong>poll()</strong> method removes an element from a queue.
    <br><br>

    In Java Queue:
    <br>
    • offer() → add element
    <br>
    • poll() → remove element
    <br>
    • peek() → view front element
    <br><br>

    pop() is mainly associated with stacks.
    <br><br>

    Therefore, the correct answer is <strong>poll</strong>.
  `
},
{
  type: "radio",
  question: "A 'complete graph' is defined as a graph where:",
  answers: [
    "The graph is directed.",
    "Every pair of vertices is connected by an edge.",
    "Every vertex and edge has a weight.",
    "There are no cycles in the graph."
  ],
  correct: "Every pair of vertices is connected by an edge.",
  explanation: `
    A <strong>complete graph</strong> is a graph in which every pair of vertices has an edge connecting them.
    <br><br>

    This means:
    <br>
    • each vertex connects directly to every other vertex
    <br>
    • no possible connection is missing
    <br><br>

    Example:
    <br>
    If there are 4 vertices, every vertex is connected to the other 3 vertices.
    <br><br>

    Therefore, the correct answer is:
    <strong>Every pair of vertices is connected by an edge.</strong>
  `
},
{
  type: "radio",
  question: "Using reduce with String concatenation is more efficient than using collect with StringBuilder.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    Using <strong>collect()</strong> with <strong>StringBuilder</strong> is usually more efficient than using reduce() with String concatenation.
    <br><br>

    String concatenation creates many temporary String objects, which is slower and uses more memory.
    <br><br>

    StringBuilder is designed for efficient string modification and concatenation.
    <br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "Which Set implementation maintains insertion order?",
  answers: [
    "TreeSet",
    "PrioritySet",
    "HashSet",
    "LinkedHashSet"
  ],
  correct: "LinkedHashSet",
  explanation: `
    <strong>LinkedHashSet</strong> maintains the order in which elements were inserted.
    <br><br>

    Comparison:
    <br>
    • HashSet → no guaranteed order
    <br>
    • TreeSet → sorted order
    <br>
    • LinkedHashSet → insertion order
    <br><br>

    Therefore, the correct answer is <strong>LinkedHashSet</strong>.
  `
},
{
  type: "radio",
  question: "What is the maximum height of an AVL tree with n nodes?",
  answers: [
    "O(n log n)",
    "O(n)",
    "O(1)",
    "O(log n)"
  ],
  correct: "O(log n)",
  explanation: `
    An <strong>AVL tree</strong> is a self-balancing binary search tree.
    <br><br>

    Because the tree stays balanced after insertions and deletions, its height grows logarithmically with the number of nodes.
    <br><br>

    Therefore, the maximum height of an AVL tree with n nodes is:
    <br><br>

    <strong>O(log n)</strong>
  `
},
{
  type: "radio",
  question: "Linear probing increases the index by 1 to look for the next available cell.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    In <strong>linear probing</strong>, if a collision occurs in a hash table, the algorithm checks the next cell one step at a time.
    <br><br>

    Example:
    <pre><code>
index = (index + 1) % tableSize
    </code></pre>

    This continues until an empty cell is found.
    <br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Big-O does not ignore constant factors and lower-order terms.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    Big-O notation <strong>does ignore</strong> constant factors and lower-order terms.
    <br><br>

    Example:
    <br>
    O(3n + 10) becomes <strong>O(n)</strong>.
    <br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "How is the balance factor of a node calculated?",
  answers: [
    "Height of left subtree multiplied by height of right subtree.",
    "Height of right subtree minus height of left subtree.",
    "Total nodes in right subtree minus total nodes in left subtree.",
    "Height of right subtree plus height of left subtree."
  ],
  correct: "Height of right subtree minus height of left subtree.",
  explanation: `
    In this course, the balance factor is calculated as:
    <br><br>

    <strong>Balance Factor = height(right subtree) − height(left subtree)</strong>
    <br><br>

    If the right subtree is taller, the node is considered right-heavy.
    <br><br>

    Therefore, the correct answer is:
    <strong>Height of right subtree minus height of left subtree.</strong>
  `
},
{
  type: "radio",
  question: "Which Map implementation does not guarantee any type of order?",
  answers: [
    "TreeMap",
    "HashMap",
    "SortedMap",
    "LinkedHashMap"
  ],
  correct: "HashMap",
  explanation: `
    <strong>HashMap</strong> does not guarantee any ordering of its elements.
    <br><br>

    Comparison:
    <br>
    • HashMap → no guaranteed order
    <br>
    • LinkedHashMap → maintains insertion order
    <br>
    • TreeMap / SortedMap → maintain sorted order
    <br><br>

    Therefore, the correct answer is <strong>HashMap</strong>.
  `
},
{
  type: "radio",
  question: "In a generic class:\n\nclass Box<T>\nwhat is T called?",
  answers: [
    "An actual type",
    "A raw type",
    "A bounded wildcard",
    "A generic type"
  ],
  correct: "A generic type",
  explanation: `
    In the declaration:
    <pre><code>
class Box&lt;T&gt;
    </code></pre>

    <strong>T</strong> represents a type parameter used in generics.
    <br><br>

    It is commonly referred to as a <strong>generic type</strong>.
    <br><br>

    Example:
    <pre><code>
Box&lt;String&gt;
Box&lt;Integer&gt;
    </code></pre>

    Therefore, the correct answer is <strong>A generic type</strong>.
  `
},

{
  type: "radio",
  question: "Which represents the fastest asymptotic growth?",
  answers: [
    "O(n²)",
    "O(n)",
    "O(log n)",
    "O(2ⁿ)"
  ],
  correct: "O(2ⁿ)",
  explanation: `
    Asymptotic growth compares how quickly algorithms grow as input size increases.
    <br><br>

    Growth order from slowest to fastest:
    <br>
    • O(log n)
    <br>
    • O(n)
    <br>
    • O(n²)
    <br>
    • O(2ⁿ)
    <br><br>

    Exponential growth <strong>O(2ⁿ)</strong> increases the fastest.
    <br><br>

    Therefore, the correct answer is <strong>O(2ⁿ)</strong>.
  `
},
{
  type: "radio",
  question: "The Comparable interface defines",
  answers: [
    "custom sorting",
    "external comparison",
    "natural ordering",
    "map ordering"
  ],
  correct: "natural ordering",
  explanation: `
    The <strong>Comparable</strong> interface defines the <strong>natural ordering</strong> of objects.
    <br><br>

    It uses the method:
    <pre><code>
compareTo()
    </code></pre>

    Example:
    <br>
    • numbers → ascending order
    <br>
    • strings → alphabetical order
    <br><br>

    External/custom comparison is usually done with the <strong>Comparator</strong> interface.
    <br><br>

    Therefore, the correct answer is <strong>natural ordering</strong>.
  `
},
{
  type: "radio",
  question: "Rebalancing a tree is only necessary after an insertion operation, never after a deletion.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    In an AVL tree, rebalancing may be necessary after both
    <strong>insertion</strong> and <strong>deletion</strong>.
    <br><br>

    Deleting a node can also change subtree heights and make the tree unbalanced.
    <br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "In an AVL tree, it is possible for a node to have a balance factor of +3 before rebalancing occurs.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    In an AVL tree, a node is allowed to have a balance factor of:
    <br><br>

    • -1<br>
    • 0<br>
    • +1
    <br><br>

    If the balance factor becomes +2 or -2, rebalancing is needed.
    <br><br>

    A balance factor of <strong>+3</strong> should not occur in normal AVL insertion/deletion rebalancing.
    <br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "A graph is connected if there is a path between any two vertices in the graph.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A graph is called <strong>connected</strong> when every pair of vertices has a path between them.
    <br><br>

    This means you can travel from any vertex to any other vertex through the graph’s edges.
    <br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},

{
  type: "radio",
  question: "A map is commonly referred to as all the following except",
  answers: [
    "dictionary",
    "hash table",
    "array list",
    "associative array"
  ],
  correct: "array list",
  explanation: `
    A Map stores data as key-value pairs.
    <br><br>

    Common names for a map include:
    <br>
    • dictionary
    <br>
    • hash table
    <br>
    • associative array
    <br><br>

    An <strong>ArrayList</strong> is a sequential list structure, not a map.
    <br><br>

    Therefore, the correct answer is <strong>array list</strong>.
  `
},

{
  type: "radio",
  question: `Refer to the code below. What is the output of print(4)?

<pre><code>
public static void print(int n){
    if(n == 0)
        return;
    System.out.print(n + " ");
    print(n-1);
}
</code></pre>`,
  answers: [
    "an infinite loop",
    "4 3 2 1",
    "4 3 2 1 0",
    "1 2 3 4"
  ],
  correct: "4 3 2 1",
  explanation: `
    The method prints the current value of n, then calls itself with n - 1.
    <br><br>

    Execution:
    <br>
    print(4) → prints 4
    <br>
    print(3) → prints 3
    <br>
    print(2) → prints 2
    <br>
    print(1) → prints 1
    <br>
    print(0) → stops because of the base case
    <br><br>

    Therefore, the output is:
    <br><br>

    <strong>4 3 2 1</strong>
  `
},

{
  type: "radio",
  question: "Finding an element by index is typically faster in a linked list than an array list.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    An <strong>ArrayList</strong> provides fast access by index because it uses an array internally.
    <br><br>

    A <strong>LinkedList</strong> must start from a node and follow links until it reaches the desired index.
    <br><br>

    Therefore, finding an element by index is usually faster in an <strong>ArrayList</strong>, not a LinkedList.
  `
},

{
  type: "radio",
  question: "What does it mean when we say streams are \"lazy\"?",
  answers: [
    "They are slower than traditional for loops.",
    "They only process the first element of a collection.",
    "They consume very little memory.",
    "Computation is only performed when a terminal operation is initiated."
  ],
  correct: "Computation is only performed when a terminal operation is initiated.",
  explanation: `
    Java streams are called <strong>lazy</strong> because intermediate operations are not executed immediately.
    <br><br>

    Operations like map(), filter(), and sorted() wait until a terminal operation is called.
    <br><br>

    Examples of terminal operations:
    <br>
    • collect()
    <br>
    • forEach()
    <br>
    • count()
    <br>
    • reduce()
    <br><br>

    Therefore, computation is performed only when a <strong>terminal operation</strong> is initiated.
  `
},

{
  type: "radio",
  question: "Lambda expressions can be used to provide the logic for stream operations.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    Lambda expressions are commonly used with Java streams to define operations such as:
    <br><br>

    • filter()
    <br>
    • map()
    <br>
    • forEach()
    <br>
    • reduce()
    <br><br>

    Example:
    <pre><code>
list.stream()
    .filter(x -> x > 5)
    .forEach(System.out::println);
    </code></pre>

    Therefore, the statement is <strong>True</strong>.
  `
},

{
  type: "radio",
  question: "A hash function maps a key directly to a value without using an index.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    A hash function converts a key into an <strong>index</strong> (hash code) used to locate data in a hash table.
    <br><br>

    It does not directly map a key to the value itself.
    <br><br>

    Example:
    <pre><code>
index = hash(key)
    </code></pre>

    The index is then used to store or retrieve the value.
    <br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},

];
