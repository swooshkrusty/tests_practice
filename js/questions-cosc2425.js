const questions = [
  {
    type: "radio",
    question: "Suppose that a system uses 16-bit memory words and its memory is built from 32 1M × 8 RAM chips. How many address bits are required to uniquely identify each memory word?",
    answers: [
      "24",
      "64",
      "16",
      "32"
    ],
    correct: "24",
    explanation: `
  Each RAM chip is 1M × 8.<br>
  1M = 2<sup>20</sup> addresses, and each chip stores 8-bit words.<br><br>

  The system uses 16-bit memory words, so we need 2 chips side by side:<br>
  8 bits + 8 bits = 16 bits.<br><br>

  Total chips = 32<br>
  Chips per word = 2<br>
  Number of word groups = 32 / 2 = 16 groups<br><br>

  Each group has 2<sup>20</sup> words.<br>
  Total memory words = 16 × 2<sup>20</sup> = 2<sup>4</sup> × 2<sup>20</sup> = 2<sup>24</sup><br><br>

  Therefore, address bits required = <strong>24</strong>.
`
  },
  {
    type: "radio",
    question: "Suppose we have a 1024 byte byte-addressable memory that is 16-way low-order interleaved. What is the size of the memory address module offset field?",
    answers: [
      "12 bits",
      "6 bits",
      "10 bits",
      "4 bits"
    ],
    correct: "6 bits",
    explanation: `
  Total memory = 1024 bytes = 2<sup>10</sup>, so address = 10 bits.<br><br>

  Interleaving = 16-way = 2<sup>4</sup> modules.<br>
  So, module number uses 4 bits.<br><br>

  Address = [module bits + offset bits]<br>
  Offset bits = 10 − 4 = 6 bits.<br><br>

  Therefore, the size of the memory address module offset field is <strong>6 bits</strong>.
`
  },
{
    type: "radio",
    question: `Which MARIE instruction is being carried out by the RTN that follows?<br>
              <img src="img/questions/Computer_Organization_COSC_2425/00001_COSC_2425.png" style="max-width: 150%; border-radius: 8px;" class="question-img"xx />`,
    answers: [
      "StoreI X",
      "Store X",
      "JnS X",
      "Load X"
    ],
    correct: "StoreI X",
    explanation: `
  RTN:<br><br>

  MAR ← X<br>
  MBR ← M[MAR]<br>
  MAR ← MBR<br>
  MBR ← AC<br>
  M[MAR] ← MBR<br><br>

  Step-by-step:<br>
  1. MAR ← X means go to address X.<br>
  2. MBR ← M[MAR] means get the value stored at X.<br>
  3. MAR ← MBR means use that value as the real address.<br>
  4. MBR ← AC means copy AC into MBR.<br>
  5. M[MAR] ← MBR means store AC into the indirect address.<br><br>

  This is indirect storing, so the instruction is <strong>StoreI X</strong>.
`
  },
  {
    type: "radio",
    question: "Suppose a computer's control unit consists of a 4-bit counter and a 4 × 16 decoder. What is the maximum number of clock cycles that can be consumed by any instruction?",
    answers: [
      "32",
      "48",
      "16",
      "4"
    ],
    correct: "16",
    explanation: `
  The control unit uses a 4-bit counter.<br>
  A 4-bit counter can represent 2<sup>4</sup> = 16 different states.<br><br>

  The 4 × 16 decoder converts these 16 states into control signals.<br>
  Each state corresponds to one clock cycle (micro-operation step).<br><br>

  Therefore, the maximum number of clock cycles for an instruction is <strong>16</strong>.
`
  },
{
    type: "radio",
    question: "Assembly language:",
    answers: [
      "uses alphabetic (mnemonic) codes in place of binary strings.",
      "is not translated into machine language.",
      "is easier to program in than high-level languages.",
      "All of these are correct."
    ],
    correct: "uses alphabetic (mnemonic) codes in place of binary strings.",
    explanation: `
  Assembly language uses mnemonic (alphabetic) codes instead of binary.<br><br>

  Example:<br>
  ADD, MOV, SUB instead of 101010, 110011, etc.<br><br>

  It <strong>is translated</strong> into machine language (by an assembler), so option 2 is false.<br>
  It is <strong>not easier than high-level languages</strong>, so option 3 is also false.<br><br>

  Therefore, only the first statement is correct.
`
  },
  {
  type: "radio",
  question: "Clock skew is a problem for:",
  answers: [
    "synchronous buses.",
    "control buses.",
    "asynchronous buses.",
    "address buses."
  ],
  correct: "synchronous buses.",
  explanation: `
  Clock skew means that the clock signal arrives at different components at slightly different times.<br><br>

  This is a problem for <strong>synchronous buses</strong> because they depend on a shared clock signal.<br><br>

  Asynchronous buses do not rely on one shared clock, so clock skew is not the main issue there.<br><br>

  Therefore, the correct answer is <strong>synchronous buses</strong>.
`
},
{
  type: "radio",
  question: "The length of a word determines the number of bits necessary in a memory address.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  The number of address bits is determined by how many unique memory locations must be addressed.<br><br>

  Word length tells how many bits are stored in one word, but it does not directly determine the number of address bits.<br><br>

  Example:<br>
  If memory has 2<sup>10</sup> addressable words, then 10 address bits are needed, regardless of whether each word is 8 bits, 16 bits, or 32 bits.<br><br>

  Therefore, the statement is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "MARIE has a common bus scheme, which means a number of entities share the bus.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  MARIE uses a common bus scheme.<br><br>

  A common bus means that several components share the same communication path to transfer data.<br><br>

  In MARIE, registers and memory-related components can use the shared bus to move data between parts of the CPU.<br><br>

  Therefore, the statement is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "A program counter points to the memory address of the instruction that the CPU is currently executing.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  The Program Counter (PC) usually points to the address of the <strong>next instruction</strong> to be fetched/executed.<br><br>

  It does not normally point to the instruction currently being executed.<br><br>

  Therefore, the statement is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "__________ is the process whereby devices connected to a bus autonomously determine which of the devices shall have control over the bus:",
  answers: [
    "daisy chain arbitration",
    "centralized parallel arbitration",
    "distributed arbitration using self-selection",
    "distributed arbitration using collision detection"
  ],
  correct: "distributed arbitration using self-selection",
  explanation: `
  The key word is <strong>autonomously</strong>.<br><br>

  It means the devices determine by themselves which device gets control of the bus.<br><br>

  This describes <strong>distributed arbitration using self-selection</strong>.<br><br>

  Daisy chain and centralized parallel arbitration depend on a central or priority-based control method, so they are not the best answer here.
`
},
{
  type: "radio",
  question: 'A "subtract" statement is an example of a(n) __________ instruction.',
  answers: [
    "Boolean logic",
    "arithmetic",
    "data movement",
    "transfer of control",
    "bit manipulation",
    "input/output"
  ],
  correct: "arithmetic",
  explanation: `
  A "subtract" operation performs a mathematical calculation on numbers.<br><br>

  This type of operation belongs to <strong>arithmetic instructions</strong>, which include addition, subtraction, multiplication, and division.<br><br>

  It is not data movement, control flow, or I/O — it directly manipulates numerical values.<br><br>

  Therefore, the correct answer is <strong>arithmetic</strong>.
`
},
{
  type: "input",
  question: `
    Suppose the memory of a computer is as follows:<br><br>

    <table class="question-table">
      <tr>
        <th>Address 0x100</th>
        <th>Address 0x101</th>
        <th>Address 0x102</th>
        <th>Address 0x103</th>
      </tr>
      <tr>
        <td>12</td>
        <td>34</td>
        <td>56</td>
        <td>78</td>
      </tr>
    </table>

    <br>
    What integer value is this on a little endian computer?
  `,
  correct: "78563412",
  explanation: `
  Little endian means that the <strong>least significant byte (LSB)</strong> is stored at the lowest address.<br><br>

  Memory layout:<br>
  Address 0x100 → 12 (LSB)<br>
  Address 0x101 → 34<br>
  Address 0x102 → 56<br>
  Address 0x103 → 78 (MSB)<br><br>

  To form the integer, we read bytes from highest to lowest significance:<br>
  78 56 34 12<br><br>

  Therefore, the integer value is <strong>78563412</strong>.
`
},
{
  type: "radio",
  question: "The best architecture for evaluating postfix notation is the stack-based architecture.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  Postfix notation is also called Reverse Polish Notation (RPN).<br><br>

  It is naturally evaluated using a <strong>stack</strong>.<br><br>

  Example:<br>
  10 5 +<br><br>

  Steps:<br>
  1. Push 10 onto the stack.<br>
  2. Push 5 onto the stack.<br>
  3. Apply + to the top two values.<br>
  4. Push the result back onto the stack.<br><br>

  Therefore, a stack-based architecture is best for evaluating postfix notation.
`
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0xCAFEBABE</strong>
    would be stored sequentially in memory, starting at address 0x100, on both a big endian
    machine and a little endian machine, assuming that each address holds one byte.
  `,
  rows: ["0x100", "0x101", "0x102", "0x103"],
  columns: ["Big Endian", "Little Endian"],
  correct: ["CA", "BE", "FE", "BA", "BA", "FE", "BE", "CA"],
  explanation: `
  The value is <strong>0xCAFEBABE</strong>.<br><br>

  Split it into bytes:<br>
  CA FE BA BE<br><br>

  <strong>Big endian</strong> stores the most significant byte first:<br>
  0x100 → CA<br>
  0x101 → FE<br>
  0x102 → BA<br>
  0x103 → BE<br><br>

  <strong>Little endian</strong> stores the least significant byte first, so the order is reversed:<br>
  0x100 → BE<br>
  0x101 → BA<br>
  0x102 → FE<br>
  0x103 → CA<br><br>

  Therefore:<br>
  Big Endian = CA FE BA BE<br>
  Little Endian = BE BA FE CA
`
},
{
  type: "input",
  question: `
    A nonpipelined system takes 300 ns to process a task. The same task can be processed in a 5-segment pipeline with a clock cycle of 60 ns.
    Determine the speedup ratio of the pipeline for 100 tasks.
  `,
  correct: "4.81",
  explanation: `
  Non-pipelined time:<br>
  100 tasks × 300 ns = 30000 ns<br><br>

  Pipelined time formula:<br>
  (k + n − 1) × clock cycle<br><br>

  Where:<br>
  k = 5 pipeline segments<br>
  n = 100 tasks<br>
  clock cycle = 60 ns<br><br>

  Pipelined time:<br>
  (5 + 100 − 1) × 60 = 104 × 60 = 6240 ns<br><br>

  Speedup ratio:<br>
  30000 / 6240 = 4.807... ≈ <strong>4.81</strong>
`
},
{
  type: "radio",
  question: "Big endian computers store a two-byte integer with the least significant byte at the lower address.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  Big endian means that the <strong>most significant byte (MSB)</strong> is stored at the lowest memory address.<br><br>

  The statement says the least significant byte (LSB) is stored at the lower address, which actually describes <strong>little endian</strong>.<br><br>

  Therefore, the statement is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "The three basic ISA architectures for internal storage in the CPU are:",
  answers: [
    "cache, RAM, and ROM",
    "load-store, cache, and RAM",
    "stack, accumulator, and general-purpose registers",
    "cache, RAM, and registers"
  ],
  correct: "stack, accumulator, and general-purpose registers",
  explanation: `
  ISA internal storage describes where operands are kept inside the CPU during instruction execution.<br><br>

  The three basic ISA architectures are:<br>
  1. <strong>Stack</strong><br>
  2. <strong>Accumulator</strong><br>
  3. <strong>General-purpose registers</strong><br><br>

  Cache, RAM, and ROM are memory/storage components, not the three basic ISA internal storage architectures.<br><br>

  Therefore, the correct answer is <strong>stack, accumulator, and general-purpose registers</strong>.
`
},
{
  type: "radio",
  question: "Consider the postfix (reverse Polish notation) 10 5 + 6 3 - /. The equivalent infix expression is:",
  answers: [
    "(10+5)/(6-3).",
    "10/5+(6-3).",
    "(10+5)+(6/3).",
    "(10+5)-(6/3)."
  ],
  correct: "(10+5)/(6-3).",
  explanation: `
  Postfix expression:<br>
  10 5 + 6 3 - /<br><br>

  Step 1:<br>
  10 5 + = (10 + 5)<br><br>

  Step 2:<br>
  6 3 - = (6 - 3)<br><br>

  Step 3:<br>
  Divide the two results:<br>
  (10 + 5) / (6 - 3)<br><br>

  Therefore, the equivalent infix expression is <strong>(10+5)/(6-3)</strong>.
`
},
 {
  type: "radio",
  question: "Fixed-length instructions always have the same number of operands.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  Fixed-length instructions means that all instructions have the same <strong>size in bits</strong> (e.g., 32 bits each).<br><br>

  However, this does <strong>not</strong> mean they have the same number of operands.<br><br>

  Some instructions may use 0, 1, 2, or more operands, depending on the instruction format.<br><br>

  Therefore, the statement is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "A Very Long Instruction Word (VLIW) is an architectural characteristic in which each instruction can specify multiple scalar operations.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  VLIW stands for <strong>Very Long Instruction Word</strong>.<br><br>

  In VLIW architecture, one long instruction can contain several independent operations that can be executed in parallel.<br><br>

  This means each instruction can specify multiple scalar operations.<br><br>

  Therefore, the statement is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "A major advantage of direct mapped cache is its simplicity and ease of implementation. The main disadvantage of direct mapped cache is:",
  answers: [
    "it does not allow the cache to store the tag that corresponds to the block currently residing in that cache location.",
    "its performance is degraded if two or more blocks that map to the same location are used alternately.",
    "it has a greater access time than any other method.",
    "it is more expensive than fully associative and set associative mapping."
  ],
  correct: "its performance is degraded if two or more blocks that map to the same location are used alternately.",
  explanation: `
  Direct mapped cache is simple because each memory block can go to only one specific cache location.<br><br>

  The disadvantage is that two or more memory blocks may map to the same cache location.<br><br>

  If those blocks are used alternately, they keep replacing each other in the cache. This causes many cache misses.<br><br>

  Therefore, performance is degraded when two or more blocks that map to the same location are used alternately.
`
},
{
  type: "input",
  question: `
    Given a computer using a byte-addressable virtual memory system with a two-entry TLB,
    a 2-way set associative cache, and a page table for a process P.
    Assume cache blocks of size 8 bytes. Assume pages of size 16 bytes and a main memory of 4 frames.
    Assume the following TLB and page table for Process P:<br><br>

    <table class="question-table">
      <tr><th colspan="2">TLB</th></tr>
      <tr><td>0</td><td>3</td></tr>
      <tr><td>4</td><td>1</td></tr>
    </table>

    <br>

    <table class="question-table">
      <tr><th colspan="3">Page Table</th></tr>
      <tr><th>Page</th><th>Frame</th><th>Valid</th></tr>
      <tr><td>0</td><td>3</td><td>1</td></tr>
      <tr><td>1</td><td>0</td><td>1</td></tr>
      <tr><td>2</td><td>-</td><td>0</td></tr>
      <tr><td>3</td><td>2</td><td>1</td></tr>
      <tr><td>4</td><td>1</td><td>1</td></tr>
      <tr><td>5</td><td>-</td><td>0</td></tr>
      <tr><td>6</td><td>-</td><td>0</td></tr>
      <tr><td>7</td><td>-</td><td>0</td></tr>
    </table>

    <br>
    How many bits are in a virtual address for process P?
  `,
  correct: "7",
  explanation: `
  Page table has pages 0–7 = 8 virtual pages<br>
  8 pages = 2<sup>3</sup>, so page number = 3 bits<br><br>

  Page size = 16 bytes<br>
  16 = 2<sup>4</sup>, so offset = 4 bits<br><br>

  Virtual address = page number bits + offset bits<br>
  Virtual address = 3 + 4 = 7 bits
`
},
{
  type: "input",
  question: `
    Suppose we have a byte-addressable computer using fully associative mapping with 16-bit main memory addresses and 32 blocks of cache.
    If each block contains 16 bytes, determine the size of the tag field.
  `,
  correct: "12",
  explanation: `
  Main memory address = 16 bits<br><br>

  Block size = 16 bytes<br>
  16 = 2<sup>4</sup>, so offset = 4 bits<br><br>

  Fully associative mapping does not use index/block field bits.<br><br>

  Tag field = address bits − offset bits<br>
  Tag field = 16 − 4 = <strong>12 bits</strong>
`
},
{
  type: "input",
  question: `
    Suppose we have a byte-addressable computer using direct mapping with 16-bit main memory addresses and 32 blocks of cache.
    If each block contains 8 bytes, determine the size of the block field.
  `,
  correct: [
    "5",
    "5 bits",
    "5bits",
    "5 bit",
    "five",
    "five bits"
  ],
  explanation: `
  Direct mapping:<br><br>

  Cache has 32 blocks<br>
  32 = 2<sup>5</sup><br><br>

  Block field = 5 bits<br><br>

  Therefore, the correct answer is <strong>5 bits</strong>.
`
},
{
  type: "radio",
  question: "Assuming an 8-bit virtual address with pages of 32 bytes, the virtual address format is:",
  answers: [
    "3 bits for the page and 5 bits for the offset.",
    "32 bits for the page and 8 bits for the offset.",
    "8 bits for the page and 32 bits for the offset.",
    "5 bits for the page and 3 bits for the offset."
  ],
  correct: "3 bits for the page and 5 bits for the offset.",
  explanation: `
  Virtual address size = 8 bits<br><br>

  Page size = 32 bytes<br>
  32 = 2<sup>5</sup>, so offset = 5 bits<br><br>

  Page bits = virtual address bits − offset bits<br>
  Page bits = 8 − 5 = 3 bits<br><br>

  Therefore, the virtual address format is:<br>
  <strong>3 bits for the page and 5 bits for the offset</strong>.
`
},
{
  type: "radio",
  question: "Memory segmentation can result in _________________ fragmentation, while paging can result in ___________ fragmentation.",
  answers: [
    "incoherent, coherent",
    "coherent, incoherent",
    "external, internal",
    "unified, dissipated",
    "internal, external"
  ],
  correct: "external, internal",
  explanation: `
  Segmentation uses variable-size memory segments, so free memory can become scattered between segments.<br>
  This causes <strong>external fragmentation</strong>.<br><br>

  Paging uses fixed-size pages and frames, so there is no external fragmentation.<br>
  However, unused space inside the last page can be wasted.<br>
  This causes <strong>internal fragmentation</strong>.<br><br>

  Therefore, segmentation can result in <strong>external</strong> fragmentation, while paging can result in <strong>internal</strong> fragmentation.
`
},
{
  type: "radio",
  question: "The purpose of a TLB is _________.",
  answers: [
    "to cache frequently used data from memory",
    "to cache page table entries",
    "to hold the starting address of the page table",
    "to hold the length of the page table"
  ],
  correct: "to cache page table entries",
  explanation: `
  TLB stands for <strong>Translation Lookaside Buffer</strong>.<br><br>

  It is a small, fast cache that stores recently used <strong>page table entries</strong>.<br><br>

  This allows the system to quickly translate virtual addresses to physical addresses without accessing the full page table in memory every time.<br><br>

  Therefore, the purpose of a TLB is <strong>to cache page table entries</strong>.
`
},
{
  type: "radio",
  question: "Cache memory improves performance by improving memory __________ while virtual memory improves performance by increasing memory _____________.",
  answers: [
    "execution time, access time",
    "locality, access time",
    "organization, paging",
    "access time, address space"
  ],
  correct: "access time, address space",
  explanation: `
  Cache memory improves performance by reducing the time needed to access data.<br>
  This means it improves <strong>memory access time</strong>.<br><br>

  Virtual memory improves performance by allowing the system to use more memory than physically available.<br>
  This increases the <strong>address space</strong>.<br><br>

  Therefore, the correct answer is <strong>access time, address space</strong>.
`
},
{
  type: "radio",
  question: "_________ is EEPROM that can be written and erased in blocks.",
  answers: [
    "PROM memory",
    "EPROM memory",
    "Flash memory",
    "off-line memory"
  ],
  correct: "Flash memory",
  explanation: `
  Flash memory is a type of <strong>EEPROM</strong> that can be erased and written in blocks.<br><br>

  PROM can only be programmed once and cannot be erased.<br>
  EPROM can be erased, but not in convenient electrical blocks (it requires UV light).<br><br>

  Flash memory allows efficient block-level erase and write operations, making it widely used in modern storage devices.<br><br>

  Therefore, the correct answer is <strong>Flash memory</strong>.
`
},
{
  type: "input",
  question: `
    Suppose we have a byte-addressable computer with a cache that holds 8 blocks of 4 bytes each.
    Assuming that each memory address has 8 bits, to which cache set would the hexadecimal address <strong>0x1F</strong> map
    if the computer uses 2-way set associative mapping?
  `,
  correct: ["3", "set 3", "Set 3", "3 set", "3 Set"],
  explanation: `
    Cache blocks = 8<br>
    2-way → sets = 8 / 2 = 4 → 2 bits<br><br>
    
    Block size = 4 bytes → offset = 2 bits<br><br>

    Address = 8 bits<br>
    Tag | Set | Offset<br><br>

    0x1F = 00011111<br>
    Set bits = 11 → 3
  `
},
{
  type: "radio",
  question: "Cache replacement policies are necessary:",
  answers: [
    "All of these are correct.",
    "to determine which cache mapping policy to use.",
    "to determine which block in cache should be the victim block.",
    "to decide where to put blocks when cache is empty."
  ],
  correct: "to determine which block in cache should be the victim block.",
  explanation: `
    Cache replacement policies are used when the cache is full and a new block must be loaded.<br><br>

    The policy decides which existing cache block should be removed.<br><br>

    This removed block is called the <strong>victim block</strong>.<br><br>

    Therefore, the correct answer is <strong>to determine which block in cache should be the victim block</strong>.
  `
},
{
  type: "radio",
  question: "_______ memory allows data to be both read from and written to easily and rapidly.",
  answers: [
    "PROM",
    "EPROM",
    "RAM",
    "ROM"
  ],
  correct: "RAM",
  explanation: `
    RAM stands for <strong>Random Access Memory</strong>.<br><br>

    RAM allows data to be read from and written to quickly and easily.<br><br>

    ROM, PROM, and EPROM are mainly read-only or harder/slower to modify.<br><br>

    Therefore, the correct answer is <strong>RAM</strong>.
  `
},
{
  type: "radio",
  question: "It is important to know if a computer is byte or word addressable because we need to know how many addresses are contained in main memory, cache, and in each block when doing cache mapping.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    Byte-addressable means each address points to one byte.<br>
    Word-addressable means each address points to one word.<br><br>

    This matters in cache mapping because address calculations depend on how memory addresses are counted.<br><br>

    It affects the number of addresses in main memory, cache blocks, and offsets.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "Information can be retrieved fastest from:",
  answers: [
    "hard disk.",
    "magnetic tape.",
    "USB flash drive.",
    "optical disk."
  ],
  correct: "hard disk.",
  explanation: `
    Among the given options, a <strong>hard disk</strong> provides the fastest data access.<br><br>

    Magnetic tape is sequential access and very slow.<br>
    Optical disks (CD/DVD) are slower due to mechanical read delays.<br>
    USB flash drives are faster than optical and tape, but typically slower than hard disks in sustained access.<br><br>

    Hard disks allow relatively fast random access compared to the other options listed.<br><br>

    Therefore, the correct answer is <strong>hard disk</strong>.
  `
},
{
  type: "radio",
  question: "The offset field of a main memory address is used to determine:",
  answers: [
    "the location of the desired data in the cache block.",
    "if the cache entry is the desired block.",
    "if the cache entry is valid.",
    "None of these is correct."
  ],
  correct: "the location of the desired data in the cache block.",
  explanation: `
    The offset field tells the CPU where the desired byte or word is located inside a cache block.<br><br>

    The tag field is used to check if the cache entry is the desired block.<br>
    The valid bit is used to check if the cache entry is valid.<br><br>

    Therefore, the offset field is used to determine <strong>the location of the desired data in the cache block</strong>.
  `
},
{
  type: "radio",
  question: "Cache mapping is necessary because:",
  answers: [
    "None of these is correct.",
    "cache is larger than main memory and mapping allows us to store multiple copies of each piece of data from main memory.",
    "the address generated by the CPU must be converted to a cache location.",
    "cache is so small that its use requires a map."
  ],
  correct: "the address generated by the CPU must be converted to a cache location.",
  explanation: `
    Cache mapping determines where a block from main memory can be placed in cache.<br><br>

    The CPU generates a memory address, and the cache system must use that address to find the correct cache location.<br><br>

    Therefore, cache mapping is necessary because <strong>the address generated by the CPU must be converted to a cache location</strong>.
  `
},
{
  type: "radio",
  question: "What characteristic of RAM makes it unsuitable for permanent storage?",
  answers: [
    "All of these are correct.",
    "Not reliable",
    "Too slow",
    "Volatile"
  ],
  correct: "Volatile",
  explanation: `
    RAM is <strong>volatile</strong> memory.<br><br>

    This means RAM loses its contents when power is turned off.<br><br>

    Because of this, RAM is not suitable for permanent storage.<br><br>

    Therefore, the correct answer is <strong>Volatile</strong>.
  `
},
{
  type: "radio",
  question: "All of the following are cache replacement algorithms except:",
  answers: [
    "FIFO.",
    "LRU.",
    "thrashing.",
    "random."
  ],
  correct: "thrashing.",
  explanation: `
    FIFO, LRU, and random are cache replacement algorithms.<br><br>

    <strong>Thrashing</strong> is not a cache replacement algorithm. It describes a situation where the system spends too much time swapping/replacing data instead of doing useful work.<br><br>

    Therefore, the correct answer is <strong>thrashing</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have a byte-addressable computer with a cache that holds 8 blocks of 4 bytes each.
    Assuming that each memory address has 8 bits, to which cache block would the hexadecimal address <strong>0x09</strong> map if the computer uses direct mapping?
  `,
  correct: ["2", "block 2", "Block 2", "2 block", "2 Block"],
  explanation: `
    Cache blocks = 8 → 2<sup>3</sup> → index = 3 bits<br><br>

    Block size = 4 bytes → 2<sup>2</sup> → offset = 2 bits<br><br>

    Address = 8 bits → Tag | Index | Offset<br><br>

    0x09 = 00001001<br><br>

    Split:<br>
    Tag | Index | Offset<br>
    000 | 010 | 01<br><br>

    Index = 010 = <strong>2</strong><br><br>

    Therefore, the address maps to <strong>cache block 2</strong>.
  `
},
{
  type: "radio",
  question: "Direct mapping is set associative mapping with a set size of 1.",
  answers: [
    "False",
    "True"
  ],
  correct: "True",
  explanation: `
    Direct mapping means each memory block can go to exactly one cache location.<br><br>

    Set associative mapping divides cache into sets.<br>
    If the set size is 1, each set has only one cache block.<br><br>

    That behaves the same as direct mapping.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose the cache access time is 10 ns, main memory access time is 200 ns, and the cache hit rate is 90%.
    Assuming parallel (overlapped) access, what is the average access time for the processor to access an item?
  `,
  correct: ["29", "29 ns", "29ns"],
  explanation: `
    This is <strong>parallel / overlapped access</strong>.<br><br>

    Formula:<br>
    EAT = H × Access<sub>C</sub> + (1 − H) × Access<sub>MM</sub><br><br>

    H = 0.9<br>
    Access<sub>C</sub> = 10 ns<br>
    Access<sub>MM</sub> = 200 ns<br><br>

    EAT = 0.9 × 10 + 0.1 × 200<br>
    EAT = 9 + 20 = <strong>29 ns</strong><br><br>

    If access were not overlapped, then miss time would include cache + main memory time.
  `
},
{
  type: "input",
  question: `
    Suppose we have a byte-addressable computer with a cache that holds 8 blocks of 4 bytes each.
    Assuming that each memory address has 8 bits, to which cache set would the hexadecimal address <strong>0x1F</strong> map
    if the computer uses direct mapping?
  `,
  correct: ["7", "block 7", "Block 7", "set 7", "Set 7", "7 block", "7 set"],
  explanation: `
    Cache blocks = 8 → 2<sup>3</sup> → index = 3 bits<br><br>

    Block size = 4 bytes → 2<sup>2</sup> → offset = 2 bits<br><br>

    Address = 8 bits → Tag | Index | Offset<br><br>

    0x1F = 00011111<br><br>

    Split:<br>
    Tag | Index | Offset<br>
    000 | 111 | 11<br><br>

    Index = 111 = <strong>7</strong><br><br>

    Therefore, the address maps to <strong>cache block 7</strong>.
  `
},
{
  type: "radio",
  question: "Which of the following types of memory needs to be refreshed periodically to maintain its data?",
  answers: [
    "ROM",
    "All of these are correct.",
    "DRAM",
    "SRAM"
  ],
  correct: "DRAM",
  explanation: `
    DRAM stands for <strong>Dynamic Random Access Memory</strong>.<br><br>

    DRAM stores data using capacitors, and capacitors slowly lose their charge.<br><br>

    Because of this, DRAM must be refreshed periodically to maintain its data.<br><br>

    SRAM does not need periodic refresh, and ROM is non-volatile read-only memory.<br><br>

    Therefore, the correct answer is <strong>DRAM</strong>.
  `
},
{
  type: "radio",
  question: "When a computer uses paging, there must be a page table for every process.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    In a paging system, each process has its own virtual address space.<br><br>

    The page table is used to translate that process's virtual pages into physical memory frames.<br><br>

    Because different processes have different virtual-to-physical mappings, each process needs its own page table.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "A unified cache is a cache that holds both data and instructions.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A unified cache stores both <strong>instructions</strong> and <strong>data</strong> in the same cache.<br><br>

    This is different from a split cache, where instruction cache and data cache are separate.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "The approach of using a combination of memory types to provide the best performance at the best cost is called:",
  answers: [
    "solid state memory.",
    "hierarchical memory.",
    "caching.",
    "off-line memory."
  ],
  correct: "hierarchical memory.",
  explanation: `
    Hierarchical memory uses different levels of memory, such as registers, cache, RAM, and secondary storage.<br><br>

    Faster memory is usually more expensive and smaller, while slower memory is cheaper and larger.<br><br>

    The goal is to provide the best performance at the best cost.<br><br>

    Therefore, the correct answer is <strong>hierarchical memory</strong>.
  `
},
{
  type: "radio",
  question: "When the requested data resides in a given level of memory, we call this a:",
  answers: [
    "penalty.",
    "locality of reference.",
    "miss.",
    "hit."
  ],
  correct: "hit.",
  explanation: `
    A <strong>hit</strong> occurs when the requested data is found in the current level of memory (for example, in cache).<br><br>

    A <strong>miss</strong> occurs when the data is not found and must be fetched from a lower level of memory.<br><br>

    Miss penalty is the extra time required to fetch data after a miss.<br><br>

    Locality of reference describes how programs tend to access the same or nearby data repeatedly.<br><br>

    Therefore, the correct answer is <strong>hit</strong>.
  `
},
{
  type: "radio",
  question: "If a cache access requires one clock cycle and dealing with cache misses requires an additional five clock cycles, which hit rate results in an effective access time of 2 clock cycles?",
  answers: [
    "85%",
    "80%",
    "70%",
    "90%",
    "95%"
  ],
  correct: "80%",
  explanation: `
    Use the formula:<br><br>

    EAT = hit time + (miss rate × miss penalty)<br><br>

    2 = 1 + (miss rate × 5)<br>
    1 = 5 × miss rate<br>
    miss rate = 0.2<br><br>

    hit rate = 1 − 0.2 = 0.8 = 80%<br><br>

    Therefore, the correct answer is <strong>80%</strong>.
  `
},
{
  type: "radio",
  question: "To carry out a binary arithmetic operation, an accumulator architecture uses ______ operand(s).",
  answers: [
    "zero",
    "two",
    "one",
    "either one or two"
  ],
  correct: "one",
  explanation: `
    In an <strong>accumulator architecture</strong>, one operand is implicitly stored in the accumulator (AC).<br><br>

    The instruction provides only <strong>one explicit operand</strong>, while the other operand is already in the accumulator.<br><br>

    Example:<br>
    ADD X → AC = AC + M[X]<br><br>

    Therefore, only <strong>one operand</strong> is specified in the instruction.<br><br>

    Hence, the correct answer is <strong>one</strong>.
  `
},
{
  type: "radio",
  question: "Memory organization has no effect on instruction format.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    Memory organization directly affects instruction format.<br><br>

    For example, if memory is byte-addressable vs word-addressable, the number of bits needed for addresses will differ.<br><br>

    This changes how instructions are structured, including how many bits are used for operands and addressing modes.<br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "Consider the postfix expression: A-B+C*(D*E-F)/(G+H*K). The equivalent postfix (reverse Polish notation) expression is:",
  answers: [
    "None of these is correct.",
    "AB-C+DE*F-GH+K**/.",
    "ABC+-E*F-*+GHK*+/.",
    "AB-CDE*F-*+GHK*+/."
  ],
  correct: "AB-CDE*F-*+GHK*+/.",
  explanation: `
    The expression is converted step by step:<br><br>

    A - B → AB-<br>
    D * E → DE*<br>
    D * E - F → DE*F-<br>
    C * (D * E - F) → CDE*F-*<br>
    A - B + C * (D * E - F) → AB-CDE*F-*+<br>
    H * K → HK*<br>
    G + H * K → GHK*+<br><br>

    Final postfix:<br>
    AB-CDE*F-*+GHK*+/<br><br>

    Therefore, the correct answer is <strong>AB-CDE*F-*+GHK*+/.</strong>
  `
},
{
  type: "input",
  question: `
    Suppose we have the instruction <strong>LDA 800</strong>. Given memory as follows:<br><br>

    <table class="question-table">
      <tr><th>Address</th><th>Memory</th></tr>
      <tr><td>800</td><td>900</td></tr>
      <tr><td>900</td><td>1000</td></tr>
      <tr><td>1000</td><td>500</td></tr>
      <tr><td>1100</td><td>600</td></tr>
      <tr><td>1200</td><td>800</td></tr>
    </table>

    <br>
    What would be loaded into the AC if the addressing mode for the operation is direct?
  `,
  correct: ["900"],
  explanation: `
    Direct addressing means the address in the instruction is the actual memory address.<br><br>

    Instruction:<br>
    LDA 800<br><br>

    So the CPU loads the value stored at address 800 into the AC.<br><br>

    From the table:<br>
    Memory[800] = 900<br><br>

    Therefore, AC = <strong>900</strong>.
  `
},
{
  type: "radio",
  question: "One disadvantage to big endian representation is that most computers require words to be written on word address boundaries.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    The requirement that words be aligned on word address boundaries is related to <strong>memory alignment</strong>, not endianness.<br><br>

    Both big endian and little endian systems can require alignment depending on the architecture.<br><br>

    Endianness only defines the <strong>byte order</strong> (which byte is stored first), not where data must be placed in memory.<br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "Accumulator architectures store one operand on the stack and the other in the accumulator.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    Accumulator architecture uses the <strong>accumulator</strong> as one implicit operand.<br><br>

    The other operand usually comes from memory or from the instruction, not from the stack.<br><br>

    Stack architecture is different: it stores operands on a stack.<br><br>

    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer has 16-bit instructions. The instruction set consists of 32 different operations.
    All instructions have an opcode and two address fields. The first address must be a register, and the second must be memory.
    Expanding opcodes are not used. The machine has 16 registers. What is the maximum allowable size for memory?
  `,
  correct: ["128", "128 addresses", "128 memory addresses"],
  explanation: `
    Instruction size = 16 bits<br><br>

    Number of operations = 32<br>
    32 = 2<sup>5</sup>, so opcode = 5 bits<br><br>

    Number of registers = 16<br>
    16 = 2<sup>4</sup>, so register field = 4 bits<br><br>

    Remaining bits for memory address:<br>
    16 − 5 − 4 = 7 bits<br><br>

    Wait: there are two address fields, but the first is register and the second is memory.<br>
    So only the second address field is memory.<br><br>

    Memory size = 2<sup>7</sup> = <strong>128</strong> addresses.
  `
},
{
  type: "radio",
  question: "How does register addressing differ from direct addressing?",
  answers: [
    "Register addressing uses a CPU register as the operand location, while direct addressing uses a memory address.",
    "Register addressing always uses main memory, while direct addressing always uses cache.",
    "Register addressing is used only for input/output instructions.",
    "There is no difference between register addressing and direct addressing."
  ],
  correct: "Register addressing uses a CPU register as the operand location, while direct addressing uses a memory address.",
  explanation: `
    Register addressing means the operand is located in a CPU register.<br><br>

    Direct addressing means the instruction contains the actual memory address where the operand is stored.<br><br>

    Example:<br>
    Register addressing: ADD R1 → use value in register R1<br>
    Direct addressing: ADD 100 → use value stored in memory address 100<br><br>

    Therefore, register addressing uses registers, while direct addressing uses memory addresses.
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0x00001122</strong>
    would be stored sequentially in memory, starting at address 0x000, on both a big endian
    machine and a little endian machine, assuming that each address holds one byte.
  `,
  rows: ["0x000", "0x001", "0x002", "0x003"],
  columns: ["Big Endian", "Little Endian"],
  correct: ["00", "22", "00", "11", "11", "00", "22", "00"],
  explanation: `
    The value is <strong>0x00001122</strong>.<br><br>

    Split into bytes:<br>
    00 00 11 22<br><br>

    <strong>Big endian</strong> stores the most significant byte first:<br>
    0x000 → 00<br>
    0x001 → 00<br>
    0x002 → 11<br>
    0x003 → 22<br><br>

    <strong>Little endian</strong> stores the least significant byte first, so the order is reversed:<br>
    0x000 → 22<br>
    0x001 → 11<br>
    0x002 → 00<br>
    0x003 → 00<br><br>

    Therefore:<br>
    Big Endian = 00 00 11 22<br>
    Little Endian = 22 11 00 00
  `
},
{
  type: "radio",
  question: "A fixed-length instruction must have fixed-length opcodes.",
  answers: [
    "False",
    "True"
  ],
  correct: "False",
  explanation: `
    Fixed-length instruction means every instruction has the same total size (e.g., 32 bits).<br><br>

    To properly divide the instruction into fields (opcode, operands), the opcode must also have a fixed size.<br><br>

    Otherwise, the CPU would not know where the opcode ends and where operands begin.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose an instruction takes 4 cycles to execute in an unpipelined CPU:
    one cycle to fetch, one cycle to decode/fetch operands, one cycle to perform the ALU operation,
    and one cycle to store the result. In a CPU with a 4-stage pipeline, that instruction still takes
    4 cycles to execute, so how can we say the pipeline speeds up the execution of the program?
  `,
  correct: [
    "pipeline improves throughput",
    "it improves throughput",
    "throughput",
    "pipeline increases throughput",
    "it overlaps instructions"
  ],
  explanation: `
    A pipeline does not make one single instruction finish faster.<br><br>

    One instruction still needs 4 stages, so its latency is still 4 cycles.<br><br>

    The speedup comes because multiple instructions are overlapped:<br>
    while one instruction is being decoded, another can be fetched, another can execute, and another can store its result.<br><br>

    After the pipeline is full, ideally one instruction completes every cycle.<br><br>

    Therefore, pipelining improves <strong>throughput</strong>, not the latency of one instruction.
  `
},
{
    type: "radio",
    question: "The first supercomputer, the CDC 6600, had a memory size of:",
    answers: [
      "128 gigawords.",
      "128 kilowords.",
      "256 terawords.",
      "256 megawords."
    ],
    correct: "128 kilowords.",
    explanation: `
      The CDC 6600, introduced in 1964, had about 128K words of memory.<br><br>
      Therefore, the correct answer is <strong>128 kilowords</strong>.
    `
},
{
    type: "radio",
    question: "Hot plugging means the same thing as Plug-and-Play.",
    answers: [
      "True",
      "False"
    ],
    correct: "False",
    explanation: `
      Hot plugging means connecting a device without turning off the system.<br>
      Plug-and-Play means the system automatically configures the device.<br><br>
      These are different concepts.<br><br>
      Therefore, the correct answer is <strong>False</strong>.
    `
},
{
    type: "radio",
    question: "There are ____________ nanoseconds in a millisecond.",
    answers: [
      "100000",
      "1000000",
      "1000000",
      "1,000"
    ],
    correct: "1000000",
    explanation: `
      1 millisecond = 10<sup>-3</sup> seconds<br>
      1 nanosecond = 10<sup>-9</sup> seconds<br><br>

      10<sup>-3</sup> / 10<sup>-9</sup> = 10<sup>6</sup> = 1,000,000<br><br>

      Therefore, the correct answer is <strong>1,000,000</strong>.
    `
},
{
  type: "input",
  question: `
    How many nanoseconds are in 1 microsecond?
  `,
  correct: ["1000", "1000 ns", "1000 nanoseconds"],
  explanation: `
    1 microsecond = 10<sup>-6</sup> seconds<br>
    1 nanosecond = 10<sup>-9</sup> seconds<br><br>

    10<sup>-6</sup> / 10<sup>-9</sup> = 10<sup>3</sup> = 1000<br><br>

    Therefore, 1 microsecond equals <strong>1000 nanoseconds</strong>.
  `
},
{
    type: "radio",
    question: "There are ____________ kilobytes in an exabyte.",
    answers: [
      "2^20",
      "2^30",
      "2^50",
      "2^40"
    ],
    correct: "2^50",
    explanation: `
      1 KB = 2<sup>10</sup> bytes<br>
      1 EB = 2<sup>60</sup> bytes<br><br>

      Convert EB to KB:<br>
      2<sup>60</sup> / 2<sup>10</sup> = 2<sup>50</sup><br><br>

      Therefore, the correct answer is <strong>2^50</strong>.
    `
},
{
    type: "radio",
    question: "Expressed as a power of two, there are ____________ megabytes in a terabyte.",
    answers: [
      "2^20",
      "2^30",
      "2^40",
      "2^10"
    ],
    correct: "2^20",
    explanation: `
      1 TB = 2<sup>40</sup> bytes<br>
      1 MB = 2<sup>20</sup> bytes<br><br>

      2<sup>40</sup> / 2<sup>20</sup> = 2<sup>20</sup><br><br>

      Therefore, the correct answer is <strong>2^20</strong>.
    `
},
{
  type: "input",
  question: "A kilobyte represents what power of two?",
  correct: ["10", "2^10", "2¹⁰"],
  explanation: `
    1 kilobyte = 2<sup>10</sup> bytes.<br><br>
    Therefore, the power of two is <strong>10</strong>.
  `
},
{
  type: "radio",
  question: "A control unit consists of a central processing unit (CPU) with an arithmetic logic unit (ALU) and registers.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    The CPU consists of the control unit, ALU, and registers.<br><br>
    The statement reverses the relationship by saying the control unit consists of the CPU.<br><br>
    Therefore, the statement is <strong>False</strong>.
  `
},
{
  type: "input",
  question: "How many microseconds (µs) are in 1 second?",
  correct: ["1000000", "1,000,000", "1000000 microseconds", "1000000 us", "1000000 µs"],
  explanation: `
    1 second = 10<sup>6</sup> microseconds.<br><br>
    10<sup>6</sup> = 1,000,000.<br><br>
    Therefore, 1 second has <strong>1,000,000 microseconds</strong>.
  `
},
{
  type: "input",
  question: "How many bytes are in 20 megabytes?",
  correct: ["20971520", "20,971,520", "20000000"],
  explanation: `
    1 megabyte = 2<sup>20</sup> bytes = 1,048,576 bytes.<br><br>
    20 megabytes = 20 × 1,048,576 = 20,971,520 bytes.<br><br>
    Therefore, the answer is <strong>20,971,520</strong>.
  `
},
{
  type: "input",
  question: "(20101)<sub>3</sub> = _______<sub>10</sub>",
  correct: ["172"],
  explanation: `
    (20101)<sub>3</sub> = 2×3<sup>4</sup> + 0×3<sup>3</sup> + 1×3<sup>2</sup> + 0×3<sup>1</sup> + 1×3<sup>0</sup><br><br>
    = 2×81 + 0 + 9 + 0 + 1<br>
    = 162 + 9 + 1 = <strong>172</strong>
  `
},
{
  type: "input",
  question: "138<sub>10</sub> = ____________<sub>5</sub>",
  correct: ["1023", "1,023"],
  explanation: `
    138 ÷ 5 = 27 remainder 3<br>
    27 ÷ 5 = 5 remainder 2<br>
    5 ÷ 5 = 1 remainder 0<br>
    1 ÷ 5 = 0 remainder 1<br><br>
    Read remainders from bottom to top: <strong>1023</strong><br>
    So, 138<sub>10</sub> = <strong>1023<sub>5</sub></strong>.
  `
},
{
  type: "input",
  question: "Convert the binary fraction to decimal:<br><br><strong>1001100.1011</strong>",
  correct: ["76.6875"],
  explanation: `
    Integer part:<br>
    1001100<sub>2</sub> = 64 + 8 + 4 = 76<br><br>

    Fractional part:<br>
    .1011<sub>2</sub> = 1/2 + 0/4 + 1/8 + 1/16<br>
    = 0.5 + 0.125 + 0.0625 = 0.6875<br><br>

    Total = 76 + 0.6875 = <strong>76.6875</strong>
  `
},
{
  type: "input",
  question: "664<sub>9</sub> = ____________<sub>10</sub>",
  correct: ["544"],
  explanation: `
    664<sub>9</sub> = 6×9<sup>2</sup> + 6×9<sup>1</sup> + 4×9<sup>0</sup><br><br>
    = 6×81 + 6×9 + 4<br>
    = 486 + 54 + 4 = <strong>544</strong>
  `
},
{
  type: "input",
  question: "122<sub>10</sub> = ____________<sub>2</sub>",
  correct: ["1111010", "1,111,010"],
  explanation: `
    122 = 64 + 32 + 16 + 8 + 2<br><br>
    Powers used:<br>
    2<sup>6</sup>, 2<sup>5</sup>, 2<sup>4</sup>, 2<sup>3</sup>, 2<sup>1</sup><br><br>
    Binary = <strong>1111010</strong>
  `
},
{
  type: "input",
  question: "Convert the binary fraction to decimal:<br><br><strong>10001001.0111</strong>",
  correct: ["137.4375"],
  explanation: `
    Integer part:<br>
    10001001<sub>2</sub> = 128 + 8 + 1 = 137<br><br>

    Fractional part:<br>
    .0111<sub>2</sub> = 0/2 + 1/4 + 1/8 + 1/16<br>
    = 0.25 + 0.125 + 0.0625 = 0.4375<br><br>

    Total = 137 + 0.4375 = <strong>137.4375</strong>
  `
},
{
  type: "radio",
  question: "A biased floating-point exponent uses some manner of excess-M representation.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A biased exponent stores the exponent by adding a fixed bias value.<br><br>

    This is also called <strong>excess-M representation</strong>.<br><br>

    Example:<br>
    stored exponent = actual exponent + bias<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "input",
  question: "424<sub>8</sub> = ____________<sub>10</sub>",
  correct: ["276"],
  explanation: `
    424<sub>8</sub> = 4×8<sup>2</sup> + 2×8<sup>1</sup> + 4×8<sup>0</sup><br><br>
    = 4×64 + 2×8 + 4<br>
    = 256 + 16 + 4 = <strong>276</strong>
  `
},
{
  type: "input",
  question: "Convert the binary fraction to decimal:<br><br><strong>110001.10101</strong>",
  correct: ["49.65625"],
  explanation: `
    Integer part:<br>
    110001<sub>2</sub> = 32 + 16 + 1 = 49<br><br>

    Fractional part:<br>
    .10101<sub>2</sub> = 1/2 + 0/4 + 1/8 + 0/16 + 1/32<br>
    = 0.5 + 0.125 + 0.03125 = 0.65625<br><br>

    Total = 49 + 0.65625 = <strong>49.65625</strong>
  `
},
{
  type: "radio",
  question: "Overflow is indicated when the carry in to the high-order bit is not equal to the carry out.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    In signed binary addition, overflow occurs when the carry into the sign bit is different from the carry out of the sign bit.<br><br>

    If carry in ≠ carry out, the result is too large or too small to represent correctly.<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "input",
  question: `
    Convert the hexadecimal number <strong>(DEADBEEF)<sub>16</sub></strong> to binary.
  `,
  correct: [
    "11011110101011011011111011101111",
    "1101 1110 1010 1101 1011 1110 1110 1111"
  ],
  explanation: `
    Each hexadecimal digit corresponds to 4 binary bits:<br><br>

    D → 1101<br>
    E → 1110<br>
    A → 1010<br>
    D → 1101<br>
    B → 1011<br>
    E → 1110<br>
    E → 1110<br>
    F → 1111<br><br>

    Combine all groups:<br>
    1101 1110 1010 1101 1011 1110 1110 1111<br><br>

    Remove spaces:<br>
    <strong>11011110101011011011111011101111</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following binary fraction to decimal:<br><br>
    <strong>111001.001011</strong>
  `,
  correct: ["57.171875"],
  explanation: `
    Integer part:<br>
    111001₂ = 32 + 16 + 8 + 1 = 57<br><br>

    Fractional part:<br>
    .001011₂ = (1×2⁻³) + (1×2⁻⁵) + (1×2⁻⁶)<br>
    = 1/8 + 1/32 + 1/64<br>
    = 0.125 + 0.03125 + 0.015625 = 0.171875<br><br>

    Total:<br>
    57 + 0.171875 = <strong>57.171875</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following number to decimal:<br><br>
    <strong>(1605)<sub>7</sub></strong>
  `,
  correct: ["642"],
  explanation: `
    (1605)₇ = 1×7³ + 6×7² + 0×7¹ + 5×7⁰<br>
    = 343 + 294 + 0 + 5 = <strong>642</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following binary fraction to decimal:<br><br>
    <strong>100001.111</strong>
  `,
  correct: ["33.875"],
  explanation: `
    Integer part:<br>
    100001₂ = 32 + 1 = 33<br><br>

    Fractional part:<br>
    .111₂ = 1/2 + 1/4 + 1/8 = 0.5 + 0.25 + 0.125 = 0.875<br><br>

    Total:<br>
    33 + 0.875 = <strong>33.875</strong>
  `
},
{
  type: "radio",
  question: `
    The largest positive unsigned decimal number that can be expressed in 6 bits is 63.
  `,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    Unsigned numbers use all bits for magnitude.<br><br>

    Maximum value with n bits = 2ⁿ − 1<br><br>

    For 6 bits:<br>
    2⁶ − 1 = 64 − 1 = <strong>63</strong><br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "input",
  question: `
    Convert the following number to decimal:<br><br>
    <strong>(2302)<sub>5</sub></strong>
  `,
  correct: ["327"],
  explanation: `
    (2302)₅ = 2×5³ + 3×5² + 0×5¹ + 2×5⁰<br><br>

    = 2×125 + 3×25 + 0 + 2<br>
    = 250 + 75 + 2 = <strong>327</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following number to base 7:<br><br>
    <strong>355<sub>10</sub></strong>
  `,
  correct: ["1015", "1,015"],
  explanation: `
    Divide by 7 repeatedly:<br><br>

    355 ÷ 7 = 50 remainder 5<br>
    50 ÷ 7 = 7 remainder 1<br>
    7 ÷ 7 = 1 remainder 0<br>
    1 ÷ 7 = 0 remainder 1<br><br>

    Read remainders from bottom to top:<br>
    <strong>1015</strong><br><br>

    Therefore, 355₁₀ = <strong>1015₇</strong>
  `
},
{
  type: "radio",
  question: "The general idea of Booth's algorithm is to increase the speed of addition when there are consecutive zeroes or ones in the multiplier.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
    Booth's algorithm is used for <strong>binary multiplication</strong>, not for speeding up addition directly.<br><br>

    It reduces the number of add/subtract operations when the multiplier has consecutive 1s.<br><br>

    Since the statement says it increases the speed of <strong>addition</strong>, the statement is <strong>False</strong>.
  `
},
{
  type: "radio",
  question: "A biased floating-point exponent uses some manner of excess-M representation.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
    A biased exponent stores the exponent by adding a fixed bias value.<br><br>

    This is also called <strong>excess-M representation</strong>.<br><br>

    Formula:<br>
    stored exponent = actual exponent + bias<br><br>

    Therefore, the statement is <strong>True</strong>.
  `
},
{
  type: "radio",
  question: "The Boolean expressions, xx = x and x + x = x, are examples of (the):",
  answers: [
    "Inverse Law.",
    "Associative Law.",
    "Idempotent Law.",
    "DeMorgan's Law."
  ],
  correct: "Idempotent Law.",
  explanation: `
    The Idempotent Law states:<br><br>

    x · x = x<br>
    x + x = x<br><br>

    This means applying the same variable multiple times does not change the result.<br><br>

    Therefore, these expressions are examples of the <strong>Idempotent Law</strong>.
  `
},
{
  type: "radio",
  question: `
    The characteristic table shown below contains two rows where the next state for A and B is incorrect for the accompanying circuit.
    Which two rows are incorrect?<br><br>

    <img src="img/questions/Computer_Organization_COSC_2425/00002_COSC_2425.png" class="question-img" />
  `,
  answers: [
    "5 and 6",
    "1 and 3",
    "6 and 7",
    "3 and 8"
  ],
  correct: "5 and 6",
  explanation: `
    To solve this problem, compare each row of the characteristic table with the circuit output for the next state values A and B.<br><br>

    The two rows where the listed next state does not match the circuit behavior are <strong>5 and 6</strong>.<br><br>

    Therefore, the correct answer is <strong>5 and 6</strong>.
  `
},
{
  type: "input",
  question: "What are the main functions of the CPU?",
  correct: [
    "fetch decode execute store",
    "fetching decoding executing storing",
    "fetch decode execute",
    "fetch decode execute store results"
  ],
  explanation: `
    The CPU performs the instruction cycle:<br><br>

    1. <strong>Fetch</strong> – get instruction from memory<br>
    2. <strong>Decode</strong> – understand the instruction<br>
    3. <strong>Execute</strong> – perform the operation<br>
    4. <strong>Store</strong> – save the result<br><br>

    Therefore, the full set of CPU functions is <strong>fetch, decode, execute, and store</strong>.
  `
},
{
  type: "input",
  question: "How is the ALU related to the CPU? What are its main functions?",
  correct: [
    "alu is part of cpu and performs arithmetic and logic operations",
    "alu is a component of cpu and performs arithmetic and logic operations",
    "alu performs arithmetic logic and shift operations",
    "alu performs arithmetic logic comparison and shift operations",
    "alu performs arithmetic and logical operations",
    "alu is part of the cpu and performs mathematical and logical operations"
  ],
  explanation: `
    The ALU (Arithmetic Logic Unit) is a component of the CPU.<br><br>

    Its main functions include:<br>
    • Arithmetic operations (addition, subtraction, etc.)<br>
    • Logical operations (AND, OR, NOT, XOR, etc.)<br>
    • Comparison operations (used for decision making)<br>
    • Shift operations<br><br>

    The ALU executes operations as directed by the control unit and is essential for processing data and instructions.<br><br>

    Therefore, the ALU is part of the CPU and performs <strong>arithmetic, logical, comparison, and shift operations</strong>.
  `
},
{
  type: "input",
  question: "Explain what the CPU should do when an interrupt occurs.",
  correct: [
    "cpu checks for interrupt executes interrupt handler and resumes program",
    "cpu detects interrupt handles it and continues execution",
    "cpu checks interrupt flag executes handler and resumes",
    "cpu detects interrupt executes interrupt service routine and continues",
    "cpu handles interrupt using interrupt service routine and then resumes program"
  ],
  explanation: `
    When an interrupt occurs, the CPU follows these steps:<br><br>

    1. <strong>Detection:</strong>  
    The CPU checks for interrupts at the beginning of the fetch-decode-execute cycle, usually using a status flag or interrupt signal.<br><br>

    2. <strong>Handling:</strong>  
    If an interrupt is detected, the CPU pauses the current program and executes an interrupt handling routine (ISR).  
    The ISR itself follows the fetch-decode-execute cycle.<br><br>

    3. <strong>Completion:</strong>  
    After the interrupt service routine finishes, the CPU resumes execution of the original program.<br><br>

    Therefore, the CPU <strong>detects the interrupt, handles it using an ISR, and then continues normal execution</strong>.
  `
},
{
  type: "table-input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The instruction set consists of 150 different operations.
    All instructions have an opcode and one address field.
    Each instruction is stored in one word of memory.<br><br>

    Fill in the answers:<br><br>

    a) How many bits are needed for the opcode?<br>
    b) How many bits are left for the address part of the instruction?<br>
    c) What is the maximum allowable size for memory?<br>
    d) What is the largest unsigned binary number that can be accommodated in one word of memory?
  `,
  rows: ["a", "b", "c", "d"],
  columns: ["Answer"],
  correct: [
  ["8", "8bits", "8 bits"],
  ["16", "16bits", "16 bits"],
  ["65536", "2^16", "32m", "32M"],
  ["16777215", "2^24-1", "24ones", "24 ones"]
],
  explanation: `
    a) 150 operations → need 8 bits (2^7 = 128 < 150 ≤ 2^8 = 256)<br><br>

    b) Total instruction size = 24 bits → 24 − 8 = 16 bits for address<br><br>

    c) Maximum memory size = 2^16 = 65536 addresses<br><br>

    d) Largest unsigned number in 24 bits = 2^24 − 1 = 16777215
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The instruction set consists of 150 different operations.
    How many bits are needed for the opcode?
  `,
  correct: ["8", "8 bits", "8bits"],
  explanation: `
    150 operations need 8 bits because:<br>
    2^7 = 128 is not enough, but 2^8 = 256 is enough.<br><br>
    Therefore, opcode = <strong>8 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The opcode uses 8 bits.
    How many bits are left for the address part of the instruction?
  `,
  correct: ["16", "16 bits", "16bits"],
  explanation: `
    Instruction size = 24 bits<br>
    Opcode = 8 bits<br><br>
    Address bits = 24 − 8 = <strong>16 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The instruction has 16 bits left for the address field.
    What is the maximum allowable size for memory?
  `,
  correct: ["65536", "2^16", "65536 addresses"],
  explanation: `
    Address field = 16 bits<br><br>
    Maximum memory size = 2^16 = <strong>65536 addresses</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    What is the largest unsigned binary number that can be accommodated in one word of memory?
  `,
  correct: ["16777215", "2^24-1", "24 ones", "24ones"],
  explanation: `
    One word = 24 bits<br><br>
    Largest unsigned value = 2^24 − 1 = <strong>16777215</strong>.<br><br>
    In binary, this is 24 ones.
  `
},
{
  type: "table-input",
  question: `
    The memory unit of a computer has 256K words of 32 bits each.
    The instruction format has 4 fields: an opcode field, a mode field (1 of 7 modes),
    a register field (1 of 60 registers), and a memory address field.<br><br>

    Assume an instruction is 32 bits long.<br><br>

    Fill in the answers:<br><br>

    a) How large must the mode field be?<br>
    b) How large must the register field be?<br>
    c) How large must the address field be?<br>
    d) How large is the opcode field?
  `,
  rows: ["a", "b", "c", "d"],
  columns: ["Answer"],
  correct: [
    ["3", "3bits", "3 bits"],
    ["6", "6bits", "6 bits"],
    ["18", "18bits", "18 bits"],
    ["5", "5bits", "5 bits"]
  ],
  explanation: `
    a) 7 addressing modes → need 3 bits (2^3 = 8)<br><br>

    b) 60 registers → need 6 bits (2^6 = 64)<br><br>

    c) 256K words = 256 × 1024 = 2^18 → 18 bits<br><br>

    d) Total instruction = 32 bits<br>
    Opcode = 32 − (3 + 6 + 18) = <strong>5 bits</strong>
  `
},
{
  type: "input",
  question: `
    The instruction format must support 1 of 7 addressing modes.
    How large must the mode field be?
  `,
  correct: ["3", "3 bits", "3bits"],
  explanation: `
    7 modes → need enough bits to represent at least 7 values.<br><br>
    2^2 = 4 (not enough)<br>
    2^3 = 8 (enough)<br><br>
    Therefore, the mode field must be <strong>3 bits</strong>.
  `
},
{
  type: "input",
  question: `
    The instruction format must support 60 registers.
    How large must the register field be?
  `,
  correct: ["6", "6 bits", "6bits"],
  explanation: `
    60 registers → need enough bits to represent at least 60 values.<br><br>
    2^5 = 32 (not enough)<br>
    2^6 = 64 (enough)<br><br>
    Therefore, the register field must be <strong>6 bits</strong>.
  `
},
{
  type: "input",
  question: `
    The memory has 256K words.
    How large must the address field be?
  `,
  correct: ["18", "18 bits", "18bits"],
  explanation: `
    256K = 256 × 1024 = 2^8 × 2^10 = 2^18<br><br>
    Therefore, the address field must be <strong>18 bits</strong>.
  `
},
{
  type: "input",
  question: `
    The instruction length is 32 bits.
    Mode = 3 bits, Register = 6 bits, Address = 18 bits.<br><br>
    How large is the opcode field?
  `,
  correct: ["5", "5 bits", "5bits"],
  explanation: `
    Total instruction = 32 bits<br>
    Used = 3 + 6 + 18 = 27 bits<br><br>
    Opcode = 32 − 27 = <strong>5 bits</strong>.
  `
},
{
  type: "table-input",
  question: `
    Assume you have a byte-addressable machine that uses 32-bit integers and you are storing
    the hex value <strong>3456</strong> at address 0.<br><br>

    Show how this is stored on a big endian and little endian machine.
  `,
  rows: ["Big Endian", "Little Endian"],
  columns: ["Address 00", "Address 01", "Address 10", "Address 11"],
  correct: [
    ["00"],
    ["00"],
    ["34"],
    ["56"],
    ["56"],
    ["34"],
    ["00"],
    ["00"]
  ],
  explanation: `
    The value is stored as a 32-bit integer, so we write it as:<br>
    00003456<br><br>

    Split into bytes:<br>
    00 00 34 56<br><br>

    Big endian stores the most significant byte first:<br>
    Address 00 → 00<br>
    Address 01 → 00<br>
    Address 10 → 34<br>
    Address 11 → 56<br><br>

    Little endian stores the least significant byte first:<br>
    Address 00 → 56<br>
    Address 01 → 34<br>
    Address 10 → 00<br>
    Address 11 → 00
  `
},
{
  type: "table-input",
  question: `
    Assume you have a byte-addressable machine that uses 32-bit integers and you are storing
    the hex value <strong>0x3456</strong> at address 0.<br><br>

    a) Show how this is stored on a <strong>big-endian</strong> machine.<br>
    b) Show how this is stored on a <strong>little-endian</strong> machine.
  `,
  rows: ["Big Endian", "Little Endian"],
  columns: ["Address 00", "Address 01", "Address 10", "Address 11"],
  correct: [
    ["00"],
    ["00"],
    ["34"],
    ["56"],
    ["56"],
    ["34"],
    ["00"],
    ["00"]
  ],
  explanation: `
    The machine uses 32-bit integers, so 0x3456 must be written as:<br>
    <strong>0x00003456</strong><br><br>

    Split into bytes:<br>
    <strong>00 00 34 56</strong><br><br>

    <strong>Big endian</strong> stores the most significant byte first:<br>
    Address 00 → 00<br>
    Address 01 → 00<br>
    Address 10 → 34<br>
    Address 11 → 56<br><br>

    <strong>Little endian</strong> stores the least significant byte first:<br>
    Address 00 → 56<br>
    Address 01 → 34<br>
    Address 10 → 00<br>
    Address 11 → 00
  `
},
{
  type: "radio",
  question: `
    If you increase the value from <strong>0x00003456</strong> to <strong>0x00123456</strong>,
    which byte assignment is more efficient?
  `,
  answers: [
    "A) Big Endian",
    "B) Little Endian"
  ],
  correct: "B) Little Endian",
  explanation: `
    Little endian is more efficient because the additional information can be appended
    without shifting existing bytes.<br><br>

    Original (little endian):<br>
    56 34 00 00<br><br>

    New value:<br>
    56 34 12 00<br><br>

    Only higher bytes change, lower bytes stay the same.<br><br>

    In big endian, bytes (34 and 56) would need to shift to maintain correct order.<br><br>

    Therefore, <strong>Little Endian</strong> is more efficient.
  `
},
{
  type: "table-input",
  question: `
    Show how the value <strong>0x456789A1</strong> would be stored by byte-addressable machines
    with 32-bit words, using big endian and little endian format.
    Assume the value starts at address <strong>0x10</strong>.
  `,
  rows: ["Big Endian", "Little Endian"],
  columns: ["0x10", "0x11", "0x12", "0x13"],
  correct: [
    ["45"], ["67"], ["89"], ["A1"],
    ["A1"], ["89"], ["67"], ["45"]
  ],
  explanation: `
    0x456789A1 split into bytes:<br>
    45 67 89 A1<br><br>

    Big endian stores most significant byte first:<br>
    45 67 89 A1<br><br>

    Little endian stores least significant byte first:<br>
    A1 89 67 45
  `
},
{
  type: "table-input",
  question: `
    Show how the value <strong>0x0000058A</strong> would be stored by byte-addressable machines
    with 32-bit words, using big endian and little endian format.
    Assume the value starts at address <strong>0x10</strong>.
  `,
  rows: ["Big Endian", "Little Endian"],
  columns: ["0x10", "0x11", "0x12", "0x13"],
  correct: [
    ["00"], ["00"], ["05"], ["8A"],
    ["8A"], ["05"], ["00"], ["00"]
  ],
  explanation: `
    0x0000058A split into bytes:<br>
    00 00 05 8A<br><br>

    Big endian stores most significant byte first:<br>
    00 00 05 8A<br><br>

    Little endian stores least significant byte first:<br>
    8A 05 00 00
  `
},
{
  type: "table-input",
  question: `
    Show how the value <strong>0x14148888</strong> would be stored by byte-addressable machines
    with 32-bit words, using big endian and little endian format.
    Assume the value starts at address <strong>0x10</strong>.
  `,
  rows: ["Big Endian", "Little Endian"],
  columns: ["0x10", "0x11", "0x12", "0x13"],
  correct: [
    ["14"], ["14"], ["88"], ["88"],
    ["88"], ["88"], ["14"], ["14"]
  ],
  explanation: `
    0x14148888 split into bytes:<br>
    14 14 88 88<br><br>

    Big endian stores most significant byte first:<br>
    14 14 88 88<br><br>

    Little endian stores least significant byte first:<br>
    88 88 14 14
  `
},
{
  type: "table-input",
  question: `
    Fill in the following table to show how the given integers are represented,
    assuming 16-bit two’s complement representation.
  `,
  rows: ["28", "2216", "-18675", "-12", "31456"],
  columns: [
    "Binary",
    "Hex",
    "Big Endian",
    "Little Endian"
  ],
  correct: [
    // 28
    ["0000000000011100"],
    ["001C"],
    ["001C"],
    ["1C00"],

    // 2216
    ["0000100010101000"],
    ["08A8"],
    ["08A8"],
    ["A808"],

    // -18675
    ["1011011100001101"],
    ["B70D"],
    ["B70D"],
    ["0DB7"],

    // -12
    ["1111111111110100"],
    ["FFF4"],
    ["FFF4"],
    ["F4FF"],

    // 31456
    ["0111101011100000"],
    ["7AE0"],
    ["7AE0"],
    ["E07A"]
  ],
  explanation: `
    1) Convert integer to 16-bit binary (two’s complement for negatives).<br><br>

    2) Convert binary to hex (group by 4 bits).<br><br>

    3) Big endian stores bytes in the same order:<br>
    e.g., 001C → 00 1C<br><br>

    4) Little endian reverses byte order:<br>
    e.g., 001C → 1C 00<br><br>

    Negative numbers use two’s complement representation.
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how each value would be stored sequentially in memory,
    starting at address <strong>0x100</strong>, assuming each address holds one byte.<br><br>

    Values:<br>
    a) 0xAB123456<br>
    b) 0x2BF876<br>
    c) 0x8B0A1<br>
    d) 0x1<br>
    e) 0xFEDC1234<br><br>

    Extend each value to 32 bits before storing.
  `,
  rows: [
    "0x100", "0x101", "0x102", "0x103",
    "0x104", "0x105", "0x106", "0x107",
    "0x108", "0x109", "0x10A", "0x10B",
    "0x10C", "0x10D", "0x10E", "0x10F",
    "0x110", "0x111", "0x112", "0x113"
  ],
  columns: ["Big Endian", "Little Endian"],
  correct: [
    ["AB"], ["56"],
    ["12"], ["34"],
    ["34"], ["12"],
    ["56"], ["AB"],

    ["00"], ["76"],
    ["2B"], ["F8"],
    ["F8"], ["2B"],
    ["76"], ["00"],

    ["00"], ["A1"],
    ["08"], ["B0"],
    ["B0"], ["08"],
    ["A1"], ["00"],

    ["00"], ["01"],
    ["00"], ["00"],
    ["00"], ["00"],
    ["01"], ["00"],

    ["FE"], ["34"],
    ["DC"], ["12"],
    ["12"], ["DC"],
    ["34"], ["FE"]
  ],
  explanation: `
    Each value is stored as a 32-bit integer, so each value takes 4 bytes.<br><br>

    Big endian stores the most significant byte first.<br>
    Little endian stores the least significant byte first.<br><br>

    a) 0xAB123456 → AB 12 34 56 / 56 34 12 AB<br>
    b) 0x002BF876 → 00 2B F8 76 / 76 F8 2B 00<br>
    c) 0x0008B0A1 → 00 08 B0 A1 / A1 B0 08 00<br>
    d) 0x00000001 → 00 00 00 01 / 01 00 00 00<br>
    e) 0xFEDC1234 → FE DC 12 34 / 34 12 DC FE
  `
},
{
  type: "table-input",
  question: "Represent the integer <strong>28</strong> assuming 16-bit two’s complement representation.",
  rows: ["28"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["0000000000011100"],
    ["001C"],
    ["001C"],
    ["1C00"]
  ],
  explanation: `
    28 in 16-bit binary = 0000000000011100<br>
    Hex = 001C<br>
    Big endian = 00 1C → 001C<br>
    Little endian = 1C 00 → 1C00
  `
},
{
  type: "table-input",
  question: "Represent the integer <strong>2216</strong> assuming 16-bit two’s complement representation.",
  rows: ["2216"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["0000100010101000"],
    ["08A8"],
    ["08A8"],
    ["A808"]
  ],
  explanation: `
    2216 in 16-bit binary = 0000100010101000<br>
    Hex = 08A8<br>
    Big endian = 08 A8 → 08A8<br>
    Little endian = A8 08 → A808
  `
},
{
  type: "table-input",
  question: "Represent the integer <strong>-18675</strong> assuming 16-bit two’s complement representation.",
  rows: ["-18675"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["1011011100001101"],
    ["B70D"],
    ["B70D"],
    ["0DB7"]
  ],
  explanation: `
    -18675 in 16-bit two’s complement = 1011011100001101<br>
    Hex = B70D<br>
    Big endian = B7 0D → B70D<br>
    Little endian = 0D B7 → 0DB7
  `
},
{
  type: "table-input",
  question: "Represent the integer <strong>-12</strong> assuming 16-bit two’s complement representation.",
  rows: ["-12"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["1111111111110100"],
    ["FFF4"],
    ["FFF4"],
    ["F4FF"]
  ],
  explanation: `
    -12 in 16-bit two’s complement = 1111111111110100<br>
    Hex = FFF4<br>
    Big endian = FF F4 → FFF4<br>
    Little endian = F4 FF → F4FF
  `
},
{
  type: "table-input",
  question: "Represent the integer <strong>31456</strong> assuming 16-bit two’s complement representation.",
  rows: ["31456"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["0111101011100000"],
    ["7AE0"],
    ["7AE0"],
    ["E07A"]
  ],
  explanation: `
    31456 in 16-bit binary = 0111101011100000<br>
    Hex = 7AE0<br>
    Big endian = 7A E0 → 7AE0<br>
    Little endian = E0 7A → E07A
  `
},
{
  type: "table-input",
  question: `
    Fill in the following table to show how the integer <strong>28</strong> is represented,
    assuming 16-bit two’s complement representation.
  `,
  rows: ["28"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["0000000000011100"],
    ["001C"],
    ["001C"],
    ["1C00"]
  ],
  explanation: `
    28 in 16-bit binary = 0000000000011100<br>
    Hex = 001C<br>
    Big endian = 00 1C → 001C<br>
    Little endian = 1C 00 → 1C00
  `
},
{
  type: "table-input",
  question: `
    Fill in the following table to show how the integer <strong>2216</strong> is represented,
    assuming 16-bit two’s complement representation.
  `,
  rows: ["2216"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["0000100010101000"],
    ["08A8"],
    ["08A8"],
    ["A808"]
  ],
  explanation: `
    2216 in 16-bit binary = 0000100010101000<br>
    Hex = 08A8<br>
    Big endian = 08 A8 → 08A8<br>
    Little endian = A8 08 → A808
  `
},
{
  type: "table-input",
  question: `
    Fill in the following table to show how the integer <strong>-18675</strong> is represented,
    assuming 16-bit two’s complement representation.
  `,
  rows: ["-18675"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["1011011100001101"],
    ["B70D"],
    ["B70D"],
    ["0DB7"]
  ],
  explanation: `
    -18675 in 16-bit two’s complement = 1011011100001101<br>
    Hex = B70D<br>
    Big endian = B7 0D → B70D<br>
    Little endian = 0D B7 → 0DB7
  `
},
{
  type: "table-input",
  question: `
    Fill in the following table to show how the integer <strong>-12</strong> is represented,
    assuming 16-bit two’s complement representation.
  `,
  rows: ["-12"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["1111111111110100"],
    ["FFF4"],
    ["FFF4"],
    ["F4FF"]
  ],
  explanation: `
    -12 in 16-bit two’s complement = 1111111111110100<br>
    Hex = FFF4<br>
    Big endian = FF F4 → FFF4<br>
    Little endian = F4 FF → F4FF
  `
},
{
  type: "table-input",
  question: `
    Fill in the following table to show how the integer <strong>31456</strong> is represented,
    assuming 16-bit two’s complement representation.
  `,
  rows: ["31456"],
  columns: ["Binary", "Hex", "Big Endian", "Little Endian"],
  correct: [
    ["0111101011100000"],
    ["7AE0"],
    ["7AE0"],
    ["E07A"]
  ],
  explanation: `
    31456 in 16-bit binary = 0111101011100000<br>
    Hex = 7AE0<br>
    Big endian = 7A E0 → 7AE0<br>
    Little endian = E0 7A → E07A
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0xAB123456</strong>
    would be stored sequentially in memory, starting at address <strong>0x100</strong>,
    assuming each address holds one byte.
  `,
  rows: ["0x100", "0x101", "0x102", "0x103"],
  columns: ["Big Endian", "Little Endian"],
  correct: [
    ["AB"], ["56"],
    ["12"], ["34"],
    ["34"], ["12"],
    ["56"], ["AB"]
  ],
  explanation: `
    0xAB123456 split into bytes:<br>
    AB 12 34 56<br><br>

    Big endian = AB 12 34 56<br>
    Little endian = 56 34 12 AB
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0x2BF876</strong>
    would be stored sequentially in memory, starting at address <strong>0x100</strong>,
    assuming each address holds one byte. Extend the value to 32 bits before storing.
  `,
  rows: ["0x100", "0x101", "0x102", "0x103"],
  columns: ["Big Endian", "Little Endian"],
  correct: [
    ["00"], ["76"],
    ["2B"], ["F8"],
    ["F8"], ["2B"],
    ["76"], ["00"]
  ],
  explanation: `
    Extend to 32 bits:<br>
    0x002BF876<br><br>

    Big endian = 00 2B F8 76<br>
    Little endian = 76 F8 2B 00
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0x8B0A1</strong>
    would be stored sequentially in memory, starting at address <strong>0x100</strong>,
    assuming each address holds one byte. Extend the value to 32 bits before storing.
  `,
  rows: ["0x100", "0x101", "0x102", "0x103"],
  columns: ["Big Endian", "Little Endian"],
  correct: [
    ["00"], ["A1"],
    ["08"], ["B0"],
    ["B0"], ["08"],
    ["A1"], ["00"]
  ],
  explanation: `
    Extend to 32 bits:<br>
    0x0008B0A1<br><br>

    Big endian = 00 08 B0 A1<br>
    Little endian = A1 B0 08 00
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0x1</strong>
    would be stored sequentially in memory, starting at address <strong>0x100</strong>,
    assuming each address holds one byte. Extend the value to 32 bits before storing.
  `,
  rows: ["0x100", "0x101", "0x102", "0x103"],
  columns: ["Big Endian", "Little Endian"],
  correct: [
    ["00"], ["01"],
    ["00"], ["00"],
    ["00"], ["00"],
    ["01"], ["00"]
  ],
  explanation: `
    Extend to 32 bits:<br>
    0x00000001<br><br>

    Big endian = 00 00 00 01<br>
    Little endian = 01 00 00 00
  `
},
{
  type: "table-input",
  question: `
    Assume a computer has 32-bit integers. Show how the value <strong>0xFEDC1234</strong>
    would be stored sequentially in memory, starting at address <strong>0x100</strong>,
    assuming each address holds one byte.
  `,
  rows: ["0x100", "0x101", "0x102", "0x103"],
  columns: ["Big Endian", "Little Endian"],
  correct: [
    ["FE"], ["34"],
    ["DC"], ["12"],
    ["12"], ["DC"],
    ["34"], ["FE"]
  ],
  explanation: `
    0xFEDC1234 split into bytes:<br>
    FE DC 12 34<br><br>

    Big endian = FE DC 12 34<br>
    Little endian = 34 12 DC FE
  `
},
{
  type: "input",
  question: `
    What kinds of problems can endianness cause if data is transferred from a big endian machine
    to a little endian machine? Explain.
  `,
  correct: [
    "data can be misinterpreted",
    "values can be misinterpreted",
    "byte order can be misinterpreted",
    "different endianness can cause incorrect values",
    "the receiving machine may read the bytes in the wrong order"
  ],
  explanation: `
    If the receiving machine uses a different endianness than the sending machine,
    the byte order may be interpreted incorrectly.<br><br>

    This can cause the same bytes to represent a completely different number.<br><br>

    For example, a value sent from a big endian machine may be read as a different value
    on a little endian machine if the bytes are not converted correctly.<br><br>

    Therefore, endianness problems can cause <strong>misinterpreted or incorrect data values</strong>.
  `
},
{
  type: "input",
  question: `
    Convert to postfix (reverse Polish notation):<br>
    <strong>X * Y + W * Z + V * U</strong>
  `,
  correct: ["X Y * W Z * + V U * +", "XY*WZ*+VU*+"],
  explanation: `
    X*Y → X Y *<br>
    W*Z → W Z *<br>
    V*U → V U *<br>
    Combine → X Y * W Z * + V U * +
  `
},
{
  type: "input",
  question: `
    Convert to postfix (reverse Polish notation):<br>
    <strong>W * X + W * (U * V + Z)</strong>
  `,
  correct: ["W X * W U V * Z + * +", "WX*WUV*Z+*+"],
  explanation: `
    W*X → W X *<br>
    U*V → U V *<br>
    (U*V + Z) → U V * Z +<br>
    W * (...) → W U V * Z + *<br>
    Combine → W X * W U V * Z + * +
  `
},
{
  type: "input",
  question: `
    Convert to postfix (reverse Polish notation):<br>
    <strong>(W * (X + Y * (U * V))) / (U * (X + Y))</strong>
  `,
  correct: [
    "W X Y U V * * + * U X Y + * /",
    "WXYUV**+*UXY+*/"
  ],
  explanation: `
    U*V → U V *<br>
    Y*(U*V) → Y U V * *<br>
    X + (...) → X Y U V * * +<br>
    W * (...) → W X Y U V * * + *<br>
    Denominator: U*(X+Y) → U X Y + *<br>
    Final → W X Y U V * * + * U X Y + * /
  `
},
{
  type: "input",
  question: `
    Convert to postfix (reverse Polish notation):<br>
    <strong>(8 − 6) / 2</strong>
  `,
  correct: ["8 6 - 2 /", "86-2/"],
  explanation: `
    (8 − 6) → 8 6 -<br>
    Then divide by 2 → 8 6 - 2 /
  `
},
{
  type: "input",
  question: `
    Convert to postfix (reverse Polish notation):<br>
    <strong>(2 + 3) * 8 / 10</strong>
  `,
  correct: ["2 3 + 8 * 10 /", "23+8*10/"],
  explanation: `
    (2 + 3) → 2 3 +<br>
    Multiply by 8 → 2 3 + 8 *<br>
    Divide by 10 → 2 3 + 8 * 10 /
  `
},
{
  type: "input",
  question: `
    Convert to postfix (reverse Polish notation):<br>
    <strong>(5 × (4 + 3) × 2 − 6)</strong>
  `,
  correct: ["5 4 3 + * 2 * 6 -", "543+*2*6-"],
  explanation: `
    (4 + 3) → 4 3 +<br>
    Multiply by 5 → 5 4 3 + *<br>
    Multiply by 2 → 5 4 3 + * 2 *<br>
    Subtract 6 → 5 4 3 + * 2 * 6 -
  `
},
{
  type: "input",
  question: `
    Convert the following expression from infix to reverse Polish (postfix) notation:<br>
    <strong>(8 − 6) / 2</strong>
  `,
  correct: ["8 6 - 2 /", "86-2/"],
  explanation: `
    First convert the parentheses:<br>
    (8 − 6) → 8 6 -<br><br>
    Then divide the result by 2:<br>
    8 6 - 2 /<br><br>
    Final postfix: <strong>8 6 - 2 /</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from infix to reverse Polish (postfix) notation:<br>
    <strong>(2 + 3) * 8 / 10</strong>
  `,
  correct: ["2 3 + 8 * 10 /", "23+8*10/"],
  explanation: `
    First convert the parentheses:<br>
    (2 + 3) → 2 3 +<br><br>
    Then multiply by 8:<br>
    2 3 + 8 *<br><br>
    Then divide by 10:<br>
    2 3 + 8 * 10 /<br><br>
    Final postfix: <strong>2 3 + 8 * 10 /</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from infix to reverse Polish (postfix) notation:<br>
    <strong>(5 × (4 + 3) × 2 − 6)</strong>
  `,
  correct: ["5 4 3 + * 2 * 6 -", "543+*2*6-"],
  explanation: `
    First convert the inner parentheses:<br>
    (4 + 3) → 4 3 +<br><br>
    Then multiply by 5:<br>
    5 4 3 + *<br><br>
    Then multiply by 2:<br>
    5 4 3 + * 2 *<br><br>
    Then subtract 6:<br>
    5 4 3 + * 2 * 6 -<br><br>
    Final postfix: <strong>5 4 3 + * 2 * 6 -</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from infix to reverse Polish (postfix) notation:<br>
    <strong>X * Y + W * Z + V * U</strong>
  `,
  correct: ["X Y * W Z * + V U * +", "XY*WZ*+VU*+"],
  explanation: `
    Convert each multiplication first:<br>
    X * Y → X Y *<br>
    W * Z → W Z *<br>
    V * U → V U *<br><br>
    Then add them from left to right:<br>
    X Y * W Z * + V U * +<br><br>
    Final postfix: <strong>X Y * W Z * + V U * +</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from infix to reverse Polish (postfix) notation:<br>
    <strong>W * X + W * (U * V + Z)</strong>
  `,
  correct: ["W X * W U V * Z + * +", "WX*WUV*Z+*+"],
  explanation: `
    First convert W * X:<br>
    W * X → W X *<br><br>
    Inside parentheses:<br>
    U * V → U V *<br>
    U * V + Z → U V * Z +<br><br>
    Then multiply by W:<br>
    W * (U * V + Z) → W U V * Z + *<br><br>
    Finally add both parts:<br>
    W X * W U V * Z + * +<br><br>
    Final postfix: <strong>W X * W U V * Z + * +</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from infix to reverse Polish (postfix) notation:<br>
    <strong>(W * (X + Y * (U * V))) / (U * (X + Y))</strong>
  `,
  correct: [
    "W X Y U V * * + * U X Y + * /",
    "WXYUV**+*UXY+*/"
  ],
  explanation: `
    Numerator:<br>
    U * V → U V *<br>
    Y * (U * V) → Y U V * *<br>
    X + Y * (U * V) → X Y U V * * +<br>
    W * (X + Y * (U * V)) → W X Y U V * * + *<br><br>

    Denominator:<br>
    X + Y → X Y +<br>
    U * (X + Y) → U X Y + *<br><br>

    Divide numerator by denominator:<br>
    W X Y U V * * + * U X Y + * /<br><br>

    Final postfix: <strong>W X Y U V * * + * U X Y + * /</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from reverse Polish notation to infix notation:<br>
    <strong>12 8 3 1 + − /</strong>
  `,
  correct: ["12/(8-(3+1))", "12 / (8 - (3 + 1))"],
  explanation: `
    3 1 + → (3 + 1)<br>
    8 (3 + 1) − → 8 − (3 + 1)<br>
    12 / result → <strong>12 / (8 − (3 + 1))</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from reverse Polish notation to infix notation:<br>
    <strong>5 2 + 2 × 1 + 2 ×</strong>
  `,
  correct: ["((5+2)*2+1)*2", "((5 + 2) × 2 + 1) × 2", "(((5+2)*2)+1)*2"],
  explanation: `
    5 2 + → (5 + 2)<br>
    (5 + 2) 2 × → (5 + 2) × 2<br>
    result 1 + → ((5 + 2) × 2) + 1<br>
    result 2 × → <strong>(((5 + 2) × 2) + 1) × 2</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from reverse Polish notation to infix notation:<br>
    <strong>3 5 7 + 2 1 − × 1 + +</strong>
  `,
  correct: ["3+(((5+7)*(2-1))+1)", "3 + (((5 + 7) × (2 − 1)) + 1)"],
  explanation: `
    5 7 + → (5 + 7)<br>
    2 1 − → (2 − 1)<br>
    (5 + 7)(2 − 1) × → (5 + 7) × (2 − 1)<br>
    result 1 + → ((5 + 7) × (2 − 1)) + 1<br>
    3 + result → <strong>3 + (((5 + 7) × (2 − 1)) + 1)</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from reverse Polish notation to infix notation:<br>
    <strong>W X Y Z − + *</strong>
  `,
  correct: ["W*(X+Y-Z)", "W * (X + Y - Z)"],
  explanation: `
    Y Z − → (Y − Z)<br>
    X + result → X + (Y − Z)<br>
    W * result → <strong>W * (X + Y − Z)</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from reverse Polish notation to infix notation:<br>
    <strong>U V W X Y Z + * + * +</strong>
  `,
  correct: ["U+(V*(W+(X*(Y+Z))))", "U + (V * (W + (X * (Y + Z))))"],
  explanation: `
    Y Z + → (Y + Z)<br>
    X * result → X * (Y + Z)<br>
    W + result → W + (X * (Y + Z))<br>
    V * result → V * (W + (X * (Y + Z)))<br>
    U + result → <strong>U + (V * (W + (X * (Y + Z))))</strong>
  `
},
{
  type: "input",
  question: `
    Convert the following expression from reverse Polish notation to infix notation:<br>
    <strong>X Y Z + V W − * Z + +</strong>
  `,
  correct: ["X+((Y+Z)*(V-W)+Z)", "X + ((Y + Z) * (V - W) + Z)"],
  explanation: `
    Y Z + → (Y + Z)<br>
    V W − → (V − W)<br>
    result * result → (Y + Z) * (V − W)<br>
    result + Z → ((Y + Z) * (V − W)) + Z<br>
    X + result → <strong>X + ((Y + Z) * (V − W) + Z)</strong>
  `
},
{
  type: "input",
  question: `
    A nonpipelined system takes 200 ns to process a task. The same task can be processed in a
    5-segment pipeline with a clock cycle of 40 ns. Determine the speedup ratio of the pipeline
    for 200 tasks.
  `,
  correct: ["4.9019", "4.90", "4.9"],
  explanation: `
    Nonpipelined time:<br>
    200 tasks × 200 ns = 40000 ns<br><br>

    Pipelined time:<br>
    (k + n − 1) × clock cycle<br>
    (5 + 200 − 1) × 40 = 204 × 40 = 8160 ns<br><br>

    Speedup:<br>
    40000 / 8160 = <strong>4.9019</strong>
  `
},
{
  type: "input",
  question: `
    What is the maximum speedup that could be achieved with the pipeline unit over the nonpipelined unit?
  `,
  correct: ["5", "5x"],
  explanation: `
    The pipeline has 5 segments.<br><br>

    The maximum theoretical speedup is approximately equal to the number of pipeline stages.<br><br>

    Therefore, maximum speedup = <strong>5</strong>.
  `
},
{
  type: "table-input",
  question: `
    A nonpipelined system takes 200 ns to process a task. The same task can be processed in a
    5-segment pipeline with a clock cycle of 40 ns.<br><br>

    a) Determine the speedup ratio of the pipeline for 200 tasks.<br>
    b) What is the maximum speedup that could be achieved with the pipeline unit over the nonpipelined unit?
  `,
  rows: [
    "a) Speedup ratio for 200 tasks",
    "b) Maximum speedup"
  ],
  columns: ["Answer"],
  correct: [
    ["4.9019", "4.90", "4.9"],
    ["5", "5x"]
  ],
  explanation: `
    a) Nonpipelined time:<br>
    200 tasks × 200 ns = 40000 ns<br><br>

    Pipelined time:<br>
    (k + n − 1) × clock cycle<br>
    (5 + 200 − 1) × 40 = 204 × 40 = 8160 ns<br><br>

    Speedup:<br>
    40000 / 8160 = <strong>4.9019</strong><br><br>

    b) Maximum theoretical speedup is approximately equal to the number of pipeline stages:<br>
    <strong>5</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The instruction set consists of 150 different operations.
    How many bits are needed for the opcode?
  `,
  correct: ["8", "8 bits", "8bits"],
  explanation: `
    150 operations must be represented by the opcode.<br><br>
    2^7 = 128 is not enough.<br>
    2^8 = 256 is enough.<br><br>
    Therefore, the opcode needs <strong>8 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The opcode uses 8 bits.
    How many bits are left for the address part of the instruction?
  `,
  correct: ["16", "16 bits", "16bits"],
  explanation: `
    Instruction size = 24 bits<br>
    Opcode = 8 bits<br><br>
    Address bits = 24 − 8 = <strong>16 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    The instruction has 16 bits left for the address part.
    What is the maximum allowable size for memory?
  `,
  correct: ["2^16", "65536", "65536 addresses", "32m"],
  explanation: `
    Address field = 16 bits.<br><br>
    Maximum memory size = 2^16 addresses.<br><br>
    2^16 = <strong>65536</strong>.
  `
},
{
  type: "input",
  question: `
    A digital computer has a memory unit with 24 bits per word.
    What is the largest unsigned binary number that can be accommodated in one word of memory?
  `,
  correct: ["2^24-1", "16777215", "24 ones", "24ones"],
  explanation: `
    One word = 24 bits.<br><br>
    The largest unsigned value is when all 24 bits are 1.<br><br>
    Maximum value = 2^24 − 1 = <strong>16777215</strong>.
  `
},
{
  type: "input",
  question: `
    The instruction format must specify 1 of 7 addressing modes.
    How large must the mode field be?
  `,
  correct: ["3", "3 bits", "3bits"],
  explanation: `
    7 addressing modes must be represented.<br><br>
    2^2 = 4 is not enough.<br>
    2^3 = 8 is enough.<br><br>
    Therefore, the mode field must be <strong>3 bits</strong>.
  `
},
{
  type: "input",
  question: `
    The instruction format must specify 1 of 60 registers.
    How large must the register field be?
  `,
  correct: ["6", "6 bits", "6bits"],
  explanation: `
    60 registers must be represented.<br><br>
    2^5 = 32 is not enough.<br>
    2^6 = 64 is enough.<br><br>
    Therefore, the register field must be <strong>6 bits</strong>.
  `
},
{
  type: "input",
  question: `
    The memory unit has 256K words.
    How large must the address field be?
  `,
  correct: ["18", "18 bits", "18bits"],
  explanation: `
    256K = 256 × 1024<br>
    256 = 2^8 and 1024 = 2^10<br><br>
    256K = 2^8 × 2^10 = 2^18<br><br>
    Therefore, the address field must be <strong>18 bits</strong>.
  `
},
{
  type: "input",
  question: `
    An instruction is 32 bits long.
    The mode field is 3 bits, the register field is 6 bits, and the address field is 18 bits.
    How large is the opcode field?
  `,
  correct: ["5", "5 bits", "5bits"],
  explanation: `
    Instruction size = 32 bits<br><br>
    Used bits = mode + register + address<br>
    Used bits = 3 + 6 + 18 = 27 bits<br><br>
    Opcode field = 32 − 27 = <strong>5 bits</strong>.
  `
},
{
  type: "radio",
  question: `
    Most computers typically fall into one of three types of CPU organization:
    general register, single accumulator, or stack organization.
  `,
  answers: ["True", "False"],
  correct: "True",
  explanation: `
    CPU architectures are commonly classified into:
    • General register machines<br>
    • Accumulator machines<br>
    • Stack machines<br><br>
    Therefore, the statement is <strong>true</strong>.
  `
},
{
  type: "radio",
  question: `
    The advantage of 0-address instruction computers is that they have short programs;
    the disadvantage is that the instructions require many bits, making them very long.
  `,
  answers: ["True", "False"],
  correct: "False",
  explanation: `
    0-address (stack-based) instructions are actually short because operands are implicit.<br><br>
    Programs are compact, and instructions are usually smaller, not longer.<br><br>
    Therefore, the statement is <strong>false</strong>.
  `
},
{
  type: "radio",
  question: `
    An instruction takes less time to execute on a processor using an instruction pipeline
    than on a processor without an instruction pipeline.
  `,
  answers: ["True", "False"],
  correct: "False",
  explanation: `
    A single instruction still takes roughly the same time to pass through all pipeline stages.<br><br>
    The benefit of pipelining is increased throughput (more instructions per unit time),
    not faster execution of a single instruction.<br><br>
    Therefore, the statement is <strong>false</strong>.
  `
},
{
  type: "radio",
  question: `The term “endian” refers to an architecture’s byte ordering.`,
  answers: ["True", "False"],
  correct: "True",
  explanation: `
    Endianness defines the order in which bytes are stored in memory (big endian vs little endian).
  `
},
{
  type: "radio",
  question: `Stack architectures have good code density and a simple model for expression evaluation, but do not allow random access, which can reduce efficiency.`,
  answers: ["True", "False"],
  correct: "True",
  explanation: `
    Stack machines are simple and compact, but lack random access, making some operations inefficient.
  `
},
{
  type: "radio",
  question: `Most architectures today are accumulator-based.`,
  answers: ["True", "False"],
  correct: "False",
  explanation: `
    Most modern architectures are register-based, not accumulator-based.
  `
},
{
  type: "radio",
  question: `Fixed-length instruction format typically results in better performance than variable-length instruction format.`,
  answers: ["True", "False"],
  correct: "True",
  explanation: `
    Fixed-length instructions simplify decoding and improve pipeline performance.
  `
},
{
  type: "radio",
  question: `Expanding opcodes make instruction decoding easier.`,
  answers: ["True", "False"],
  correct: "False",
  explanation: `
    Expanding opcodes complicate decoding because instruction formats vary.
  `
},
{
  type: "radio",
  question: `Instruction set orthogonality means each instruction performs exactly one operation.`,
  answers: ["True", "False"],
  correct: "False",
  explanation: `
    Orthogonality means instructions can use any addressing mode with any operation, not that they perform only one operation.
  `
},
{
  type: "radio",
  question: `The effective address of an operand is the actual memory address used during execution.`,
  answers: ["True", "False"],
  correct: "True",
  explanation: `
    Effective address is the computed memory location used to access data.
  `
},
{
  type: "radio",
  question: `Resource conflicts occur in a pipeline when multiple instructions require the same hardware resource.`,
  answers: ["True", "False"],
  correct: "True",
  explanation: `
    Resource (structural) hazards occur when hardware cannot support multiple simultaneous operations.
  `
},
{
  type: "radio",
  question: `Data dependencies occur in a pipeline when multiple instructions need the CPU at the same time.`,
  answers: ["True", "False"],
  correct: "False",
  explanation: `
    Data dependencies occur when one instruction depends on the result of another, not because they need the CPU simultaneously.
  `
},
{
  type: "table-input",
  question: `
    How many bits would you need to address a <strong>2M × 32</strong> memory?<br><br>
    a) The memory is byte-addressable<br>
    b) The memory is word-addressable
  `,
  rows: [
    "a) Byte-addressable",
    "b) Word-addressable"
  ],
  columns: ["Answer"],
  correct: [
    ["23", "23 bits", "23bits"],
    ["21", "21 bits", "21bits"]
  ],
  explanation: `
    a) Byte-addressable:<br>
    2M words × 32 bits = 2M words × 4 bytes<br>
    2M = 2 × 2^20 = 2^21<br>
    Total bytes = 2^21 × 2^2 = 2^23 bytes<br>
    Therefore, <strong>23 bits</strong> are needed.<br><br>

    b) Word-addressable:<br>
    There are 2M words = 2 × 2^20 = 2^21 words<br>
    Therefore, <strong>21 bits</strong> are needed.
  `
},
{
  type: "input",
  question: `
    How many bits are needed to address a <strong>2M × 32</strong> memory
    if the memory is <strong>byte-addressable</strong>?
  `,
  correct: ["23", "23 bits", "23bits"],
  explanation: `
    2M words × 32 bits = 2M words × 4 bytes<br>
    2M = 2 × 2^20 = 2^21<br><br>

    Total bytes = 2^21 × 2^2 = 2^23<br><br>

    Therefore, <strong>23 bits</strong> are required.
  `
},
{
  type: "input",
  question: `
    How many bits are needed to address a <strong>2M × 32</strong> memory
    if the memory is <strong>word-addressable</strong>?
  `,
  correct: ["21", "21 bits", "21bits"],
  explanation: `
    2M words = 2 × 2^20 = 2^21 words<br><br>

    Therefore, <strong>21 bits</strong> are required.
  `
},
{
  type: "table-input",
  question: `
    How many bits are required to address a <strong>4M × 16</strong> main memory?<br><br>
    a) Main memory is byte-addressable<br>
    b) Main memory is word-addressable
  `,
  rows: [
    "a) Byte-addressable",
    "b) Word-addressable"
  ],
  columns: ["Answer"],
  correct: [
    ["23", "23 bits", "23bits"],
    ["22", "22 bits", "22bits"]
  ],
  explanation: `
    a) Byte-addressable:<br>
    4M words × 16 bits = 4M × 2 bytes<br>
    4M = 2^22<br>
    Total bytes = 2^22 × 2 = 2^23<br>
    → <strong>23 bits</strong><br><br>

    b) Word-addressable:<br>
    4M words = 2^22<br>
    → <strong>22 bits</strong>
  `
},
{
  type: "input",
  question: `
    How many bits are required to address a <strong>4M × 16</strong> main memory
    if it is <strong>byte-addressable</strong>?
  `,
  correct: ["23", "23 bits", "23bits"],
  explanation: `
    4M words × 16 bits = 4M × 2 bytes<br>
    4M = 2^22<br>
    Total bytes = 2^22 × 2 = 2^23<br><br>
    → <strong>23 bits</strong>
  `
},
{
  type: "input",
  question: `
    How many bits are required to address a <strong>4M × 16</strong> main memory
    if it is <strong>word-addressable</strong>?
  `,
  correct: ["22", "22 bits", "22bits"],
  explanation: `
    4M words = 2^22<br><br>
    → <strong>22 bits</strong>
  `
},
{
  type: "table-input",
  question: `
    How many bits are required to address a <strong>1M × 8</strong> main memory?<br><br>
    a) Main memory is byte-addressable<br>
    b) Main memory is word-addressable
  `,
  rows: [
    "a) Byte-addressable",
    "b) Word-addressable"
  ],
  columns: ["Answer"],
  correct: [
    ["20", "20 bits", "20bits"],
    ["20", "20 bits", "20bits"]
  ],
  explanation: `
    1M = 2^20<br><br>

    a) Byte-addressable:<br>
    Each word = 8 bits = 1 byte<br>
    Total bytes = 2^20<br>
    → <strong>20 bits</strong><br><br>

    b) Word-addressable:<br>
    1M words = 2^20<br>
    → <strong>20 bits</strong>
  `
},
{
  type: "input",
  question: `
    How many bits are required to address a <strong>1M × 8</strong> main memory
    if it is <strong>byte-addressable</strong>?
  `,
  correct: ["20", "20 bits", "20bits"],
  explanation: `
    1M = 2^20<br>
    Each word = 1 byte<br><br>
    → <strong>20 bits</strong>
  `
},
{
  type: "input",
  question: `
    How many bits are required to address a <strong>1M × 8</strong> main memory
    if it is <strong>word-addressable</strong>?
  `,
  correct: ["20", "20 bits", "20bits"],
  explanation: `
    1M words = 2^20<br><br>
    → <strong>20 bits</strong>
  `
},
{
  type: "table-input",
  question: `
    How many <strong>256 × 8 RAM chips</strong> are needed to provide a memory capacity of <strong>4096 bytes</strong>?<br><br>
    a) How many bits will each address contain?<br>
    b) How many lines must go to each chip?<br>
    c) How many lines must be decoded for the chip select inputs? Specify the size of the decoder.
  `,
  rows: [
    "a) Address bits",
    "b) Lines to each chip",
    "c) Decoder / chip select"
  ],
  columns: ["Answer"],
  correct: [
    ["12", "12 bits", "12bits"],
    ["8", "8 lines", "8lines"],
    ["4", "4 lines", "4-to-16 decoder", "4 to 16 decoder", "4x16 decoder"]
  ],
  explanation: `
    Total memory capacity = 4096 bytes.<br>
    4096 = 2^12, so each address needs <strong>12 bits</strong>.<br><br>

    Each RAM chip is 256 × 8.<br>
    256 = 2^8, so <strong>8 address lines</strong> go to each chip.<br><br>

    Total chips needed:<br>
    4096 / 256 = 16 chips.<br><br>

    To select 1 of 16 chips, we need 4 chip-select lines because 2^4 = 16.<br>
    Therefore, the decoder is a <strong>4-to-16 decoder</strong>.
  `
},
{
  type: "input",
  question: `
    How many bits will each address contain for a memory capacity of <strong>4096 bytes</strong>?
  `,
  correct: ["12", "12 bits", "12bits"],
  explanation: `
    4096 = 2^12<br><br>
    Therefore, each address requires <strong>12 bits</strong>.
  `
},
{
  type: "input",
  question: `
    How many address lines must go to each <strong>256 × 8 RAM chip</strong>?
  `,
  correct: ["8", "8 lines", "8lines", "8 bits", "8bits"],
  explanation: `
    Each chip has 256 locations.<br>
    256 = 2^8<br><br>
    Therefore, <strong>8 address lines</strong> must go to each chip.
  `
},
{
  type: "input",
  question: `
    How many lines must be decoded for the chip select inputs, and what is the size of the decoder,
    if 4096 bytes are built using <strong>256 × 8 RAM chips</strong>?
  `,
  correct: ["4", "4 lines", "4lines", "4-to-16 decoder", "4 to 16 decoder", "4x16 decoder"],
  explanation: `
    Total chips needed:<br>
    4096 / 256 = 16 chips<br><br>

    To select 1 of 16 chips:<br>
    2^4 = 16, so we need <strong>4 lines</strong>.<br><br>

    Decoder size = <strong>4-to-16 decoder</strong>.
  `
},
{
  type: "table-input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong>
    and memory is word-addressable.<br><br>

    Answer the following:
  `,
  rows: [
    "a) Number of RAM chips",
    "b) Chips per word access",
    "c) Address bits per chip",
    "d) Number of banks",
    "e) Address bits for all memory",
    "f) High-order interleaving (address 14)",
    "g) Low-order interleaving (address 14)"
  ],
  columns: ["Answer"],
  correct: [
    ["16"],
    ["2"],
    ["18"],
    ["8"],
    ["21"],
    ["bank0", "0", "000"],
    ["bank6", "6", "110", "bank7"]
  ],
  explanation: `
    a) 2M×16 / (256K×8) → 16 chips<br>
    b) 16 bits word, each chip gives 8 bits → need 2 chips<br>
    c) 256K = 2^18 → 18 bits<br>
    d) 16 chips arranged as 8 banks (2 chips per bank)<br>
    e) 2M = 2^21 → 21 bits<br>
    f) High-order interleaving → address 14 → bank 0 (000)<br>
    g) Low-order interleaving → address 14 → bank 6 (110)
  `
},
{
  type: "input",
  question: `How many RAM chips are necessary?`,
  correct: ["16"],
  explanation: `
    Total memory: 2M × 16<br>
    Each chip: 256K × 8<br><br>
    → Need <strong>16 chips</strong>.
  `
},
{
  type: "input",
  question: `If accessing one full word, how many chips are involved?`,
  correct: ["2"],
  explanation: `
    Word = 16 bits<br>
    Each chip = 8 bits<br><br>
    → Need <strong>2 chips</strong>.
  `
},
{
  type: "input",
  question: `How many address bits are needed for each RAM chip?`,
  correct: ["18", "18 bits"],
  explanation: `
    256K = 2^18<br><br>
    → <strong>18 bits</strong>.
  `
},
{
  type: "input",
  question: `How many banks will this memory have?`,
  correct: ["8"],
  explanation: `
    16 chips total, 2 per word → 8 banks<br><br>
    → <strong>8 banks</strong>.
  `
},
{
  type: "input",
  question: `How many address bits are needed for the entire memory?`,
  correct: ["21", "21 bits"],
  explanation: `
    2M = 2^21<br><br>
    → <strong>21 bits</strong>.
  `
},
{
  type: "input",
  question: `Using high-order interleaving, where is address 14 located?`,
  correct: ["0", "bank0", "000"],
  explanation: `
    High-order interleaving uses MSB bits.<br>
    Address 14 → Bank <strong>0 (000)</strong>.
  `
},
{
  type: "input",
  question: `Using low-order interleaving, where is address 14 located?`,
  correct: ["6", "bank6", "110", "7", "bank7"],
  explanation: `
    Low-order interleaving uses LSB bits.<br>
    Address 14 → Bank <strong>6 (110)</strong> if counting from 0.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    a) How many RAM chips are necessary?
  `,
  correct: ["16"],
  explanation: `
    Total memory: 2M × 16<br>
    Each chip: 256K × 8<br><br>
    → Need <strong>16 chips</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    b) If we were accessing one full word, how many chips would be involved?
  `,
  correct: ["2"],
  explanation: `
    Word = 16 bits<br>
    Each chip = 8 bits<br><br>
    → Need <strong>2 chips</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    c) How many address bits are needed for each RAM chip?
  `,
  correct: ["18", "18 bits"],
  explanation: `
    256K = 2^18<br><br>
    → <strong>18 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    d) How many banks will this memory have?
  `,
  correct: ["8"],
  explanation: `
    16 chips total, 2 per word → 8 banks<br><br>
    → <strong>8 banks</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    e) How many address bits are needed for all of memory?
  `,
  correct: ["21", "21 bits"],
  explanation: `
    2M = 2^21<br><br>
    → <strong>21 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    f) If high-order interleaving is used, where would address 14 (E in hex) be located?
  `,
  correct: ["0", "bank0", "000"],
  explanation: `
    High-order interleaving uses most significant bits.<br><br>
    Address 14 → Bank <strong>0 (000)</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    g) Repeat for low-order interleaving: where would address 14 be located?
  `,
  correct: ["6", "bank6", "110", "7", "bank7"],
  explanation: `
    Low-order interleaving uses least significant bits.<br><br>
    Address 14 → Bank <strong>6 (110)</strong> if counting from 0.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    a) How many RAM chips are necessary?
  `,
  correct: ["16"],
  explanation: `
    Total memory: 2M × 16<br>
    Each chip: 256K × 8<br><br>
    → Need <strong>16 chips</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    b) If we were accessing one full word, how many chips would be involved?
  `,
  correct: ["2"],
  explanation: `
    Word = 16 bits<br>
    Each chip = 8 bits<br><br>
    → Need <strong>2 chips</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    c) How many address bits are needed for each RAM chip?
  `,
  correct: ["18", "18 bits"],
  explanation: `
    256K = 2^18<br><br>
    → <strong>18 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    d) How many banks will this memory have?
  `,
  correct: ["8"],
  explanation: `
    16 chips total, 2 per word → 8 banks<br><br>
    → <strong>8 banks</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    e) How many address bits are needed for all of memory?
  `,
  correct: ["21", "21 bits"],
  explanation: `
    2M = 2^21<br><br>
    → <strong>21 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    f) If high-order interleaving is used, where would address 14 (E in hex) be located?
  `,
  correct: ["0", "bank0", "000"],
  explanation: `
    High-order interleaving uses most significant bits.<br><br>
    Address 14 → Bank <strong>0 (000)</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose that a <strong>2M × 16</strong> main memory is built using <strong>256K × 8 RAM chips</strong> and memory is word-addressable.<br><br>
    g) Repeat for low-order interleaving: where would address 14 be located?
  `,
  correct: ["6", "bank6", "110", "7", "bank7"],
  explanation: `
    Low-order interleaving uses least significant bits.<br><br>
    Address 14 → Bank <strong>6 (110)</strong> if counting from 0.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    a) How many RAM chips are necessary?
  `,
  correct: ["128", "128 chips"],
  explanation: `
    Total memory = 32G × 64<br>
    Each chip = 1G × 16<br><br>
    32G / 1G = 32<br>
    64 / 16 = 4<br><br>
    Total chips = 32 × 4 = <strong>128 chips</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    b) Assuming 4 chips per bank, how many banks are required?
  `,
  correct: ["32", "32 banks", "32 modules"],
  explanation: `
    Total chips = 128<br>
    Chips per bank = 4<br><br>
    Banks = 128 / 4 = <strong>32 banks</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    c) How many lines must go to each chip?
  `,
  correct: ["30", "30 lines", "30 bits"],
  explanation: `
    Each chip stores 1G addresses.<br><br>
    1G = 2^30<br><br>
    Therefore, each chip needs <strong>30 address lines</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory and it is word-addressable.<br><br>
    d) How many bits are needed for a memory address?
  `,
  correct: ["35", "35 bits"],
  explanation: `
    Memory has 32G words.<br><br>
    32G = 2^5 × 2^30 = 2^35<br><br>
    Therefore, a memory address needs <strong>35 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    e) For the address bits, how many bits are used for chip/module select and how many bits are used for the offset in the chip?
  `,
  correct: [
    "5 and 30",
    "5 bits and 30 bits",
    "5 module bits 30 offset bits",
    "5 chip select bits 30 offset bits"
  ],
  explanation: `
    There are 32 banks/modules.<br>
    32 = 2^5, so module select needs <strong>5 bits</strong>.<br><br>

    Each chip has 1G locations.<br>
    1G = 2^30, so offset in module needs <strong>30 bits</strong>.<br><br>

    Total address size = 5 + 30 = 35 bits.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory.<br><br>
    f) If low-order interleaving is used instead, how are the address bits divided?
  `,
  correct: [
    "30 offset bits and 5 module bits",
    "30 and 5",
    "30 bits offset 5 bits module",
    "5 low order bits for module select"
  ],
  explanation: `
    With low-order interleaving, the <strong>lowest-order bits</strong> select the module/bank.<br><br>

    Module select = 5 bits<br>
    Offset in module = 30 bits<br><br>

    Difference from high-order interleaving:<br>
    high-order uses the upper 5 bits for module select;<br>
    low-order uses the lower 5 bits for module select.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    a) How many RAM chips are necessary?
  `,
  correct: ["128", "128 chips"],
  explanation: `
    Total memory = 32G × 64<br>
    Each chip = 1G × 16<br><br>
    32G / 1G = 32<br>
    64 / 16 = 4<br><br>
    Total chips = 32 × 4 = <strong>128 chips</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    b) Assuming 4 chips per bank, how many banks are required?
  `,
  correct: ["32", "32 banks", "32 modules"],
  explanation: `
    Total chips = 128<br>
    Chips per bank = 4<br><br>
    Banks = 128 / 4 = <strong>32 banks</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    c) How many lines must go to each chip?
  `,
  correct: ["30", "30 lines", "30 bits"],
  explanation: `
    Each chip stores 1G addresses.<br><br>
    1G = 2^30<br><br>
    Therefore, each chip needs <strong>30 address lines</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory and it is word-addressable.<br><br>
    d) How many bits are needed for a memory address?
  `,
  correct: ["35", "35 bits"],
  explanation: `
    Memory has 32G words.<br><br>
    32G = 2^5 × 2^30 = 2^35<br><br>
    Therefore, a memory address needs <strong>35 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory using high-order interleaving.<br><br>
    e) For the address bits, how many bits are used for chip/module select and how many bits are used for the offset in the chip?
  `,
  correct: [
    "5 and 30",
    "5 bits and 30 bits",
    "5 module bits 30 offset bits",
    "5 chip select bits 30 offset bits"
  ],
  explanation: `
    There are 32 banks/modules.<br>
    32 = 2^5, so module select needs <strong>5 bits</strong>.<br><br>

    Each chip has 1G locations.<br>
    1G = 2^30, so offset in module needs <strong>30 bits</strong>.<br><br>

    Total address size = 5 + 30 = 35 bits.
  `
},
{
  type: "input",
  question: `
    Suppose we have <strong>1G × 16 RAM chips</strong> that make up a <strong>32G × 64</strong> memory.<br><br>
    f) If low-order interleaving is used instead, how are the address bits divided?
  `,
  correct: [
    "30 offset bits and 5 module bits",
    "30 and 5",
    "30 bits offset 5 bits module",
    "5 low order bits for module select"
  ],
  explanation: `
    With low-order interleaving, the <strong>lowest-order bits</strong> select the module/bank.<br><br>

    Module select = 5 bits<br>
    Offset in module = 30 bits<br><br>

    Difference from high-order interleaving:<br>
    high-order uses the upper 5 bits for module select;<br>
    low-order uses the lower 5 bits for module select.
  `
},
{
  type: "table-input",
  question: `
    Given the instruction set for MARIE, decipher the following machine language instructions.
    Write the assembly language equivalent.
  `,
  rows: [
    "a) 0010000000000111",
    "b) 1001000000001011",
    "c) 0011000000001001"
  ],
  columns: ["Assembly"],
  correct: [
    ["Store 007", "store007"],
    ["Jump 00B", "jump00b"],
    ["Add 009", "add009"]
  ],
  explanation: `
    MARIE instruction format:<br>
    First 4 bits = opcode<br>
    Last 12 bits = address<br><br>

    a) 0010 → Store, address = 007<br>
    b) 1001 → Jump, address = 00B<br>
    c) 0011 → Add, address = 009
  `
},
{
  type: "input",
  question: `
    Given the MARIE instruction:<br>
    <strong>0010000000000111</strong><br><br>
    Write the assembly language equivalent.
  `,
  correct: ["Store 007", "store007"],
  explanation: `
    Opcode: 0010 → Store<br>
    Address: 000000000111 → 007<br><br>
    → <strong>Store 007</strong>
  `
},
{
  type: "input",
  question: `
    Given the MARIE instruction:<br>
    <strong>1001000000001011</strong><br><br>
    Write the assembly language equivalent.
  `,
  correct: ["Jump 00B", "jump00b"],
  explanation: `
    Opcode: 1001 → Jump<br>
    Address: 000000001011 → 00B<br><br>
    → <strong>Jump 00B</strong>
  `
},
{
  type: "input",
  question: `
    Given the MARIE instruction:<br>
    <strong>0011000000001001</strong><br><br>
    Write the assembly language equivalent.
  `,
  correct: ["Add 009", "add009"],
  explanation: `
    Opcode: 0011 → Add<br>
    Address: 000000001001 → 009<br><br>
    → <strong>Add 009</strong>
  `
},
{
      type: "radio",
      question: "If a read/write head on a rigid disk were to touch the surface of the disk, the disk would become unusable. This condition is known as a:",
      answers: ["head clean", "head crash", "head corrupt", "head burn"],
      correct: "head crash",
      explanation: "When the read/write head touches the disk surface, it is called a head crash."
    },

    {
      type: "radio",
      question: "RAID systems use either mirroring or striping, or a combination of both.",
      answers: ["True", "False"],
      correct: "True",
      explanation: "RAID uses striping, mirroring, or both depending on the RAID level."
    },

    {
      type: "radio",
      question: "Large computer systems use an intelligent type of DMA interface known as:",
      answers: ["an I/O channel", "interrupt-driven I/O", "memory-mapped I/O", "None of these is correct"],
      correct: "an I/O channel",
      explanation: "An I/O channel is an intelligent DMA-like interface used in large systems."
    },

    {
      type: "radio",
      question: "The two basic data transmission modes used by buses are serial and parallel.",
      answers: ["True", "False"],
      correct: "True",
      explanation: "Buses transmit data either serially or in parallel."
    },

    {
      type: "radio",
      question: "Solid state drives:",
      answers: [
        "use magnetic storage technology",
        "have much longer seek time than magnetic drives",
        "have much larger power requirements than standard magnetic disks",
        "are built using flash memory"
      ],
      correct: "are built using flash memory",
      explanation: "SSDs are built using flash memory, not magnetic storage."
    },

    {
      type: "radio",
      question: "Engineers describe bus operation through clear and precise pictures known as:",
      answers: ["timing diagrams", "direct diagrams", "sequential diagrams", "circuit diagrams"],
      correct: "timing diagrams",
      explanation: "Timing diagrams show signal changes over time."
    },

    {
      type: "radio",
      answers: "I/O channels are driven by small CPUs called I/O processors.",
      choices: ["False", "True"],
      correct: "True",
      explanation: "I/O channels are controlled by specialized I/O processors."
    },

    {
      type: "radio",
      answers: "Access time is:",
      choices: [
        "the time it takes for the system to find the hard drive",
        "None of these is correct",
        "the sum of the rotational delay and the seek time",
        "the time it takes for the required sector to position itself under the read/write head"
      ],
      correct: "the sum of the rotational delay and the seek time",
      explanation: "Disk access time includes seek time plus rotational delay."
    },

    {
      type: "radio",
      question: "Disk drives sometimes skip around to allow time for the drive circuitry to process the contents of a sector prior to reading the next sector. This is called interleaving.",
      answers: ["False", "True"],
      correct: "True",
      explanation: "This process is called disk interleaving."
    },

    {
      type: "radio",
      question: "Buses that require handshakes to take place every time the bus is accessed are called:",
      answers: ["parallel buses", "None of these is correct", "asynchronous buses", "synchronous buses"],
      correct: "asynchronous buses",
      explanation: "Asynchronous buses use handshaking instead of a shared clock."
    },

    {
      type: "radio",
      question: "RAID-10 combines the striping of RAID-0 with the mirroring of RAID-1.",
      answers: ["True", "False"],
      correct: "True",
      explanation: "RAID-10 combines mirroring and striping."
    },

    {
      type: "radio",
      question: "I/O channels are driven by small CPUs called I/O processors.",
      answers: ["False", "True"],
      correct: "True",
      explanation: "I/O channels are controlled by I/O processors."
    },
    {
  type: "radio",
  question: "What is typically stored in ROM (Read-Only Memory)?",
  answers: [
    "General-purpose applications",
    "Temporary data",
    "Firmware (permanent instructions to control hardware)",
    "User files and documents"
  ],
  correct: "Firmware (permanent instructions to control hardware)",
  explanation: `
    ROM stores <strong>firmware</strong>, which contains permanent instructions used to start and control hardware.<br><br>

    Firmware is:
    • pre-installed by the manufacturer<br>
    • not easily changed<br>
    • runs automatically when the device powers on<br><br>

    Therefore, the correct answer is <strong>Firmware</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    and a cache of 1024 blocks, where each cache block contains 32 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^27", "134217728"],
  explanation: `
    Main memory size = 2^32 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Number of main memory blocks:<br>
    2^32 / 2^5 = <strong>2^27</strong>
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    and a cache of 1024 blocks, where each cache block contains 32 bytes.<br><br>

    b) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "17 10 5",
    "tag17block10offset5",
    "17 bits tag 10 bits block 5 bits offset",
    "tag 17 bits block 10 bits offset 5 bits"
  ],
  explanation: `
    Address size = 32 bits<br><br>

    Cache blocks = 1024 = 2^10, so block field = 10 bits<br><br>

    Block size = 32 bytes = 2^5, so offset field = 5 bits<br><br>

    Tag field = 32 − 10 − 5 = <strong>17 bits</strong><br><br>

    Therefore:<br>
    Tag = 17 bits, Block = 10 bits, Offset = 5 bits.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    and a cache of 1024 blocks, where each cache block contains 32 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x000063FA</strong> map?
  `,
  correct: ["799", "block799", "block 799"],
  explanation: `
    Address = 0x000063FA<br><br>

    Address format:<br>
    Tag = 17 bits, Block = 10 bits, Offset = 5 bits<br><br>

    Binary split gives block field:<br>
    1100011111<br><br>

    1100011111₂ = <strong>799</strong><br><br>

    Therefore, the address maps to <strong>cache block 799</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^20 bytes of byte-addressable main memory,
    and a cache of 32 blocks, where each cache block contains 16 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^16", "65536"],
  explanation: `
    Main memory size = 2^20 bytes<br>
    Block size = 16 bytes = 2^4 bytes<br><br>

    Number of main memory blocks:<br>
    2^20 / 2^4 = <strong>2^16</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^20 bytes of byte-addressable main memory,
    and a cache of 32 blocks, where each cache block contains 16 bytes.<br><br>

    b) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "11 5 4",
    "tag11block5offset4",
    "11 bits tag 5 bits block 4 bits offset",
    "tag 11 bits block 5 bits offset 4 bits"
  ],
  explanation: `
    Address size = 20 bits<br><br>

    Cache blocks = 32 = 2^5, so block field = 5 bits<br><br>

    Block size = 16 bytes = 2^4, so offset field = 4 bits<br><br>

    Tag field = 20 − 5 − 4 = <strong>11 bits</strong><br><br>

    Therefore:<br>
    Tag = 11 bits, Block = 5 bits, Offset = 4 bits.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^20 bytes of byte-addressable main memory,
    and a cache of 32 blocks, where each cache block contains 16 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x0DB63</strong> map?
  `,
  correct: ["22", "block22", "block 22", "0x16", "block0x16", "block 0x16"],
  explanation: `
    Address = 0x0DB63<br><br>

    Address format:<br>
    Tag = 11 bits, Block = 5 bits, Offset = 4 bits<br><br>

    Binary split:<br>
    00001100101 10110 0011<br><br>

    Block field = 10110₂ = 22₁₀ = 0x16<br><br>

    Therefore, the address maps to <strong>cache block 22</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    a cache size of 512 bytes, and each cache block contains 64 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^26", "67108864"],
  explanation: `
    Main memory size = 2^32 bytes<br>
    Block size = 64 bytes = 2^6 bytes<br><br>

    Number of main memory blocks:<br>
    2^32 / 2^6 = <strong>2^26</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    a cache size of 512 bytes, and each cache block contains 64 bytes.<br><br>

    b) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "23 3 6",
    "tag23block3offset6",
    "23 bits tag 3 bits block 6 bits offset",
    "tag 23 bits block 3 bits offset 6 bits"
  ],
  explanation: `
    Address size = 32 bits<br><br>

    Block size = 64 bytes = 2^6, so offset field = 6 bits<br><br>

    Cache size = 512 bytes = 2^9 bytes<br>
    Cache blocks = 512 / 64 = 2^9 / 2^6 = 2^3 = 8 blocks<br>
    So block field = 3 bits<br><br>

    Tag field = 32 − 3 − 6 = <strong>23 bits</strong><br><br>

    Therefore:<br>
    Tag = 23 bits, Block = 3 bits, Offset = 6 bits.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    a cache size of 512 bytes, and each cache block contains 64 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x12A4498A</strong> map?
  `,
  correct: ["6", "block6", "block 6"],
  explanation: `
    Address = 0x12A4498A<br><br>

    Address format:<br>
    Tag = 23 bits, Block = 3 bits, Offset = 6 bits<br><br>

    Binary split gives the block field:<br>
    110₂<br><br>

    110₂ = <strong>6</strong><br><br>

    Therefore, the address maps to <strong>cache block 6</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^16 bytes of byte-addressable main memory,
    and a cache of 64 blocks, where each cache block contains 32 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^11", "2048"],
  explanation: `
    Main memory size = 2^16 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Number of main memory blocks:<br>
    2^16 / 2^5 = <strong>2^11</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^16 bytes of byte-addressable main memory,
    and a cache of 64 blocks, where each cache block contains 32 bytes.<br><br>

    b) What are the sizes of the tag and offset fields?
  `,
  correct: [
    "11 5",
    "tag11offset5",
    "11 bits tag 5 bits offset",
    "tag 11 bits offset 5 bits"
  ],
  explanation: `
    Address size = 16 bits<br><br>

    Block size = 32 bytes = 2^5, so offset field = 5 bits<br><br>

    In fully associative cache, there is no index (block field), so all remaining bits go to the tag.<br><br>

    Tag field = 16 − 5 = <strong>11 bits</strong><br><br>

    Therefore:<br>
    Tag = 11 bits, Offset = 5 bits.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^16 bytes of byte-addressable main memory,
    and a cache of 64 blocks, where each cache block contains 32 bytes.<br><br>

    c) To which cache block will the memory address <strong>0xF8C9</strong> map?
  `,
  correct: [
    "any",
    "any block",
    "can map anywhere",
    "any cache block"
  ],
  explanation: `
    In a <strong>fully associative cache</strong>, any memory block can be placed in any cache block.<br><br>

    There is no fixed index mapping like in direct-mapped cache.<br><br>

    Therefore, the address can map to <strong>any cache block</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory,
    and a cache of 128 blocks, where each cache block contains 64 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^18", "262144"],
  explanation: `
    Main memory size = 2^24 bytes<br>
    Block size = 64 bytes = 2^6 bytes<br><br>

    Number of main memory blocks:<br>
    2^24 / 2^6 = <strong>2^18</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory,
    and a cache of 128 blocks, where each cache block contains 64 bytes.<br><br>

    b) What are the sizes of the tag and offset fields?
  `,
  correct: [
    "18 6",
    "tag18offset6",
    "18 bits tag 6 bits offset",
    "tag 18 bits offset 6 bits"
  ],
  explanation: `
    Address size = 24 bits<br><br>

    Block size = 64 bytes = 2^6, so offset field = 6 bits<br><br>

    Fully associative cache has no block/index field.<br><br>

    Tag field = 24 − 6 = <strong>18 bits</strong><br><br>

    Therefore:<br>
    Tag = 18 bits, Offset = 6 bits.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory,
    and a cache of 128 blocks, where each cache block contains 64 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x01D872</strong> map?
  `,
  correct: [
    "any",
    "any block",
    "any cache block",
    "can map anywhere",
    "anywhere"
  ],
  explanation: `
    In a fully associative cache, a memory block can be placed in <strong>any cache block</strong>.<br><br>

    There is no fixed block/index field like in direct mapped cache.<br><br>

    Therefore, address 0x01D872 can map <strong>anywhere</strong> in the cache.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory
    and a cache of 128 blocks, where each block contains 64 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^18", "262144"],
  explanation: `
    Main memory size = 2^24 bytes<br>
    Block size = 64 bytes = 2^6 bytes<br><br>

    Number of main memory blocks:<br>
    2^24 / 2^6 = <strong>2^18</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory
    and a cache of 128 blocks, where each block contains 64 bytes.<br><br>

    b) What are the sizes of the tag and offset fields?
  `,
  correct: [
    "18 6",
    "tag18offset6",
    "18 bits tag 6 bits offset",
    "tag 18 bits offset 6 bits"
  ],
  explanation: `
    Address size = 24 bits<br>
    Block size = 64 bytes = 2^6, so offset = 6 bits<br><br>

    Fully associative cache has no block/index field.<br><br>

    Tag = 24 − 6 = <strong>18 bits</strong><br><br>

    Therefore: <strong>Tag = 18 bits, Offset = 6 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory
    and a cache of 128 blocks, where each block contains 64 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x01D872</strong> map?
  `,
  correct: [
    "any",
    "any block",
    "any cache block",
    "can map anywhere",
    "anywhere"
  ],
  explanation: `
    Since this is a fully associative cache, a memory block can be placed in <strong>any cache block</strong>.<br><br>

    There is no fixed cache block/index field.<br><br>

    Therefore, address 0x01D872 can map <strong>anywhere</strong>.
  `
},
{
  type: "input",
  question: `
    A 2-way set-associative cache consists of four sets. Main memory contains 2K blocks
    of 8 bytes each and byte addressing is used.<br><br>

    a) Show the main memory address format. What are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "9 2 3",
    "tag9set2offset3",
    "9 bits tag 2 bits set 3 bits offset",
    "tag 9 bits set 2 bits offset 3 bits"
  ],
  explanation: `
    Main memory has 2K blocks = 2 × 2^10 = 2^11 blocks.<br>
    Each block has 8 bytes = 2^3 bytes.<br><br>

    Total address size:<br>
    2^11 × 2^3 = 2^14 → 14-bit addresses.<br><br>

    Cache has 4 sets = 2^2, so set field = 2 bits.<br>
    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag field = 14 − 2 − 3 = <strong>9 bits</strong>.<br><br>

    Therefore: <strong>Tag = 9 bits, Set = 2 bits, Offset = 3 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A 2-way set-associative cache consists of four sets. Main memory contains 2K blocks
    of 8 bytes each and byte addressing is used.<br><br>

    b) Compute the hit ratio for a program that loops 3 times from addresses
    <strong>0x8</strong> to <strong>0x33</strong> in main memory.
  `,
  correct: [
    "126/132",
    "95.45%",
    "95.45",
    "0.9545"
  ],
  explanation: `
    The address range is 0x8 through 0x33.<br>
    This gives 44 memory accesses per loop iteration.<br>
    For 3 loops: 44 × 3 = 132 total accesses.<br><br>

    First iteration:<br>
    There are 6 misses when new blocks are first loaded.<br>
    So first iteration has 38 hits and 6 misses.<br><br>

    Remaining two iterations:<br>
    The needed blocks are already in cache, so there are 44 hits each time.<br>
    44 + 44 = 88 more hits.<br><br>

    Total hits = 38 + 88 = 126<br>
    Total accesses = 132<br><br>

    Hit ratio = 126 / 132 = <strong>95.45%</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    a) If this cache is 2-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "9 4 3",
    "tag9set4offset3",
    "9 bits tag 4 bits set 3 bits offset",
    "tag 9 bits set 4 bits offset 3 bits"
  ],
  explanation: `
    Main memory = 2^16 bytes, so address size = 16 bits.<br><br>

    Cache blocks = 32 = 2^5<br>
    2-way set associative → sets = 32 / 2 = 16 = 2^4<br>
    Set field = 4 bits<br><br>

    Block size = 8 bytes = 2^3<br>
    Offset field = 3 bits<br><br>

    Tag field = 16 − 4 − 3 = <strong>9 bits</strong><br><br>

    Therefore: <strong>Tag = 9 bits, Set = 4 bits, Offset = 3 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    b) If this cache is 4-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "10 3 3",
    "tag10set3offset3",
    "10 bits tag 3 bits set 3 bits offset",
    "tag 10 bits set 3 bits offset 3 bits"
  ],
  explanation: `
    Main memory = 2^16 bytes, so address size = 16 bits.<br><br>

    Cache blocks = 32 = 2^5<br>
    4-way set associative → sets = 32 / 4 = 8 = 2^3<br>
    Set field = 3 bits<br><br>

    Block size = 8 bytes = 2^3<br>
    Offset field = 3 bits<br><br>

    Tag field = 16 − 3 − 3 = <strong>10 bits</strong><br><br>

    Therefore: <strong>Tag = 10 bits, Set = 3 bits, Offset = 3 bits</strong>.
  `
},
{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    a) If this cache is 2-way set associative, what are the sizes of the tag, set, and offset fields?<br>
    b) If this cache is 4-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "a) Tag = 9 bits, Set = 4 bits, Offset = 3 bits; b) Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
    "a) Tag = 10 bits, Set = 4 bits, Offset = 2 bits; b) Tag = 9 bits, Set = 3 bits, Offset = 4 bits",
    "a) Tag = 9 bits, Set = 3 bits, Offset = 4 bits; b) Tag = 10 bits, Set = 4 bits, Offset = 2 bits",
    "a) Tag = 8 bits, Set = 5 bits, Offset = 3 bits; b) Tag = 9 bits, Set = 4 bits, Offset = 3 bits"
  ],
  correct: "a) Tag = 9 bits, Set = 4 bits, Offset = 3 bits; b) Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
  explanation: `
    Main memory = 2^16 bytes, so address size = 16 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset = 3 bits.<br><br>

    a) 2-way set associative:<br>
    Cache blocks = 32<br>
    Sets = 32 / 2 = 16 = 2^4, so set field = 4 bits.<br>
    Tag = 16 − 4 − 3 = 9 bits.<br><br>

    b) 4-way set associative:<br>
    Sets = 32 / 4 = 8 = 2^3, so set field = 3 bits.<br>
    Tag = 16 − 3 − 3 = 10 bits.<br><br>

    Therefore:<br>
    a) Tag = 9, Set = 4, Offset = 3<br>
    b) Tag = 10, Set = 3, Offset = 3
  `
},
{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    a) If this cache is <strong>2-way set associative</strong>, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "Tag = 9 bits, Set = 4 bits, Offset = 3 bits",
    "Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
    "Tag = 8 bits, Set = 5 bits, Offset = 3 bits",
    "Tag = 9 bits, Set = 3 bits, Offset = 4 bits"
  ],
  correct: "Tag = 9 bits, Set = 4 bits, Offset = 3 bits",
  explanation: `
    Address size = 16 bits.<br><br>

    Cache blocks = 32 = 2^5<br>
    2-way means each set has 2 blocks.<br>
    Sets = 32 / 2 = 16 = 2^4, so set field = 4 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag = 16 − 4 − 3 = <strong>9 bits</strong>.
  `
},
{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    b) If this cache is <strong>4-way set associative</strong>, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "Tag = 9 bits, Set = 4 bits, Offset = 3 bits",
    "Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
    "Tag = 8 bits, Set = 5 bits, Offset = 3 bits",
    "Tag = 10 bits, Set = 4 bits, Offset = 2 bits"
  ],
  correct: "Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
  explanation: `
    Address size = 16 bits.<br><br>

    Cache blocks = 32 = 2^5<br>
    4-way means each set has 4 blocks.<br>
    Sets = 32 / 4 = 8 = 2^3, so set field = 3 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag = 16 − 3 − 3 = <strong>10 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data, and blocks of 32 bytes.<br><br>

    a) Show the format of a 24-bit memory address for <strong>direct mapped</strong> cache.
  `,
  correct: [
    "8 11 5",
    "tag8block11offset5",
    "8 bits tag 11 bits block 5 bits offset",
    "tag 8 bits block 11 bits offset 5 bits"
  ],
  explanation: `
    Cache size = 64K = 2^16 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Cache blocks = 2^16 / 2^5 = 2^11 blocks → block field = 11 bits<br>
    Offset = 5 bits<br><br>

    Address size = 24 bits<br>
    Tag = 24 − 11 − 5 = <strong>8 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data, and blocks of 32 bytes.<br><br>

    b) Show the format of a 24-bit memory address for <strong>fully associative</strong> cache.
  `,
  correct: [
    "19 5",
    "tag19offset5",
    "19 bits tag 5 bits offset",
    "tag 19 bits offset 5 bits"
  ],
  explanation: `
    Fully associative cache has no block/index field.<br><br>

    Block size = 32 bytes = 2^5, so offset = 5 bits.<br><br>

    Address size = 24 bits<br>
    Tag = 24 − 5 = <strong>19 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data, and blocks of 32 bytes.<br><br>

    c) Show the format of a 24-bit memory address for <strong>4-way set associative</strong> cache.
  `,
  correct: [
    "10 9 5",
    "tag10set9offset5",
    "10 bits tag 9 bits set 5 bits offset",
    "tag 10 bits set 9 bits offset 5 bits"
  ],
  explanation: `
    Cache blocks = 2^11 blocks<br>
    4-way set associative means 4 blocks per set = 2^2<br><br>

    Number of sets = 2^11 / 2^2 = 2^9 → set field = 9 bits<br>
    Offset = 5 bits<br><br>

    Tag = 24 − 9 − 5 = <strong>10 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using 4-way set associative cache has 2^16 words of main memory,
    where each word is 32 bits, and a cache of 32 blocks, where each block is 4 words.<br><br>

    Show the main memory address format. What are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "11 3 4",
    "tag11set3offset4",
    "11 bits tag 3 bits set 4 bits offset",
    "tag 11 bits set 3 bits offset 4 bits"
  ],
  explanation: `
    The computer is byte-addressable, so convert everything to bytes.<br><br>

    Main memory:<br>
    2^16 words × 32 bits = 2^16 words × 4 bytes = 2^18 bytes<br>
    So the address size is 18 bits.<br><br>

    Block size:<br>
    4 words × 4 bytes = 16 bytes = 2^4 bytes<br>
    So offset = 4 bits.<br><br>

    Cache sets:<br>
    Cache has 32 blocks = 2^5 blocks<br>
    4-way set associative → 4 blocks per set = 2^2<br>
    Sets = 2^5 / 2^2 = 2^3<br>
    So set = 3 bits.<br><br>

    Tag = 18 − 3 − 4 = <strong>11 bits</strong>.<br><br>

    Therefore:<br>
    <strong>Tag = 11 bits, Set = 3 bits, Offset = 4 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^20 bytes of byte-addressable main memory,
    and a cache of 32 blocks, where each cache block contains 16 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^16", "65536"],
  explanation: `
    Main memory = 2^20 bytes<br>
    Block size = 16 bytes = 2^4 bytes<br><br>

    Number of main memory blocks:<br>
    2^20 / 2^4 = <strong>2^16</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^20 bytes of byte-addressable main memory,
    and a cache of 32 blocks, where each cache block contains 16 bytes.<br><br>

    b) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "11 5 4",
    "tag11block5offset4",
    "11 bits tag 5 bits block 4 bits offset",
    "tag 11 bits block 5 bits offset 4 bits"
  ],
  explanation: `
    Main memory = 2^20 bytes, so address size = 20 bits.<br><br>

    Cache has 32 blocks = 2^5, so block field = 5 bits.<br>
    Cache block size = 16 bytes = 2^4, so offset field = 4 bits.<br><br>

    Tag field = 20 − 5 − 4 = <strong>11 bits</strong>.<br><br>

    Therefore:<br>
    <strong>Tag = 11 bits, Block = 5 bits, Offset = 4 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^20 bytes of byte-addressable main memory,
    and a cache of 32 blocks, where each cache block contains 16 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x0DB63</strong> map?
  `,
  correct: ["22", "block22", "block 22", "0x16", "block0x16", "block 0x16"],
  explanation: `
    Address = 0x0DB63<br><br>

    Address format:<br>
    Tag = 11 bits, Block = 5 bits, Offset = 4 bits<br><br>

    Binary split:<br>
    00001100101 | 10110 | 0011<br><br>

    Block field = 10110₂ = <strong>22</strong> = 0x16.<br><br>

    Therefore, the address maps to <strong>cache block 22</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    and a cache of 1024 blocks, where each cache block contains 32 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^27", "134217728"],
  explanation: `
    Main memory = 2^32 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Number of main memory blocks:<br>
    2^32 / 2^5 = <strong>2^27</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    and a cache of 1024 blocks, where each cache block contains 32 bytes.<br><br>

    b) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "17 10 5",
    "tag17block10offset5",
    "17 bits tag 10 bits block 5 bits offset",
    "tag 17 bits block 10 bits offset 5 bits"
  ],
  explanation: `
    Main memory = 2^32 bytes, so address size = 32 bits.<br><br>

    Cache has 1024 blocks = 2^10, so block field = 10 bits.<br>
    Cache block size = 32 bytes = 2^5, so offset field = 5 bits.<br><br>

    Tag field = 32 − 10 − 5 = <strong>17 bits</strong>.<br><br>

    Therefore:<br>
    <strong>Tag = 17 bits, Block = 10 bits, Offset = 5 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    and a cache of 1024 blocks, where each cache block contains 32 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x000063FA</strong> map?
  `,
  correct: ["799", "block799", "block 799"],
  explanation: `
    Address = 0x000063FA<br><br>

    Address format:<br>
    Tag = 17 bits, Block = 10 bits, Offset = 5 bits<br><br>

    Binary split:<br>
    00000000000000000 | 1100011111 | 11010<br><br>

    Block field = 1100011111₂ = <strong>799</strong>.<br><br>

    Therefore, the address maps to <strong>cache block 799</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    a cache size of 512 bytes, and each cache block contains 64 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^26", "67108864"],
  explanation: `
    Main memory = 2^32 bytes<br>
    Block size = 64 bytes = 2^6 bytes<br><br>

    Number of main memory blocks:<br>
    2^32 / 2^6 = <strong>2^26</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    a cache size of 512 bytes, and each cache block contains 64 bytes.<br><br>

    b) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "23 3 6",
    "tag23block3offset6",
    "23 bits tag 3 bits block 6 bits offset",
    "tag 23 bits block 3 bits offset 6 bits"
  ],
  explanation: `
    Address size = 32 bits.<br><br>

    Cache size = 512 bytes = 2^9 bytes<br>
    Block size = 64 bytes = 2^6 bytes<br><br>

    Number of cache blocks:<br>
    2^9 / 2^6 = 2^3, so block field = 3 bits.<br><br>

    Offset field = 6 bits.<br><br>

    Tag field = 32 − 3 − 6 = <strong>23 bits</strong>.<br><br>

    Therefore:<br>
    <strong>Tag = 23 bits, Block = 3 bits, Offset = 6 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using direct mapped cache has 2^32 bytes of byte-addressable main memory,
    a cache size of 512 bytes, and each cache block contains 64 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x13A4498A</strong> map?
  `,
  correct: ["6", "block6", "block 6"],
  explanation: `
    Address = 0x13A4498A<br><br>

    Address format:<br>
    Tag = 23 bits, Block = 3 bits, Offset = 6 bits<br><br>

    The block field is:<br>
    110₂ = <strong>6</strong><br><br>

    Therefore, the address maps to <strong>cache block 6</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^16 bytes of byte-addressable main memory,
    and a cache of 64 blocks, where each cache block contains 32 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^11", "2048"],
  explanation: `
    Main memory = 2^16 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Number of main memory blocks:<br>
    2^16 / 2^5 = <strong>2^11</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^16 bytes of byte-addressable main memory,
    and a cache of 64 blocks, where each cache block contains 32 bytes.<br><br>

    b) What are the sizes of the tag and offset fields?
  `,
  correct: [
    "11 5",
    "tag11offset5",
    "11 bits tag 5 bits offset",
    "tag 11 bits offset 5 bits"
  ],
  explanation: `
    Address size = 16 bits.<br><br>

    Block size = 32 bytes = 2^5, so offset = 5 bits.<br><br>

    Fully associative cache has no block/index field.<br><br>

    Tag = 16 − 5 = <strong>11 bits</strong>.<br><br>

    Therefore:<br>
    <strong>Tag = 11 bits, Offset = 5 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^16 bytes of byte-addressable main memory,
    and a cache of 64 blocks, where each cache block contains 32 bytes.<br><br>

    c) To which cache block will the memory address <strong>0xF8C9</strong> map?
  `,
  correct: [
    "any",
    "any block",
    "any cache block",
    "can map anywhere",
    "anywhere"
  ],
  explanation: `
    In a fully associative cache, a memory block can be placed in <strong>any cache block</strong>.<br><br>

    There is no fixed block/index field.<br><br>

    Therefore, address 0xF8C9 can map <strong>anywhere</strong> in the cache.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory,
    and a cache of 128 blocks, where each cache block contains 64 bytes.<br><br>

    a) How many blocks of main memory are there?
  `,
  correct: ["2^18", "262144"],
  explanation: `
    Main memory = 2^24 bytes<br>
    Block size = 64 bytes = 2^6 bytes<br><br>

    Number of main memory blocks:<br>
    2^24 / 2^6 = <strong>2^18</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory,
    and a cache of 128 blocks, where each cache block contains 64 bytes.<br><br>

    b) What are the sizes of the tag and offset fields?
  `,
  correct: [
    "18 6",
    "tag18offset6",
    "18 bits tag 6 bits offset",
    "tag 18 bits offset 6 bits"
  ],
  explanation: `
    Address size = 24 bits.<br><br>

    Block size = 64 bytes = 2^6, so offset = 6 bits.<br><br>

    Fully associative cache has no block/index field.<br><br>

    Tag = 24 − 6 = <strong>18 bits</strong>.<br><br>

    Therefore:<br>
    <strong>Tag = 18 bits, Offset = 6 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a computer using fully associative cache has 2^24 bytes of byte-addressable main memory,
    and a cache of 128 blocks, where each cache block contains 64 bytes.<br><br>

    c) To which cache block will the memory address <strong>0x01D872</strong> map?
  `,
  correct: [
    "any",
    "any block",
    "any cache block",
    "can map anywhere",
    "anywhere"
  ],
  explanation: `
    In a fully associative cache, a memory block can be placed in <strong>any cache block</strong>.<br><br>

    There is no fixed block/index field.<br><br>

    Therefore, address 0x01D872 can map <strong>anywhere</strong> in the cache.
  `
},
{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    a) If this cache is 2-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "Tag = 9 bits, Set = 4 bits, Offset = 3 bits",
    "Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
    "Tag = 8 bits, Set = 5 bits, Offset = 3 bits",
    "Tag = 9 bits, Set = 3 bits, Offset = 4 bits"
  ],
  correct: "Tag = 9 bits, Set = 4 bits, Offset = 3 bits",
  explanation: `
    Main memory = 2^16 bytes, so address size = 16 bits.<br><br>

    Cache has 32 blocks = 2^5 blocks.<br>
    2-way set associative means each set has 2 blocks.<br><br>

    Number of sets = 32 / 2 = 16 = 2^4, so set field = 4 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag field = 16 − 4 − 3 = 9 bits.<br><br>

    Therefore: <strong>Tag = 9 bits, Set = 4 bits, Offset = 3 bits</strong>.
  `
},
{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    b) If this cache is 4-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
    "Tag = 9 bits, Set = 4 bits, Offset = 3 bits",
    "Tag = 8 bits, Set = 5 bits, Offset = 3 bits",
    "Tag = 10 bits, Set = 4 bits, Offset = 2 bits"
  ],
  correct: "Tag = 10 bits, Set = 3 bits, Offset = 3 bits",
  explanation: `
    Main memory = 2^16 bytes, so address size = 16 bits.<br><br>

    Cache has 32 blocks = 2^5 blocks.<br>
    4-way set associative means each set has 4 blocks.<br><br>

    Number of sets = 32 / 4 = 8 = 2^3, so set field = 3 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag field = 16 − 3 − 3 = 10 bits.<br><br>

    Therefore: <strong>Tag = 10 bits, Set = 3 bits, Offset = 3 bits</strong>.
  `
},

{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^21 bytes of main memory,
    a cache of 64 blocks, and each cache block contains 4 bytes.<br><br>

    a) If this cache is 2-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "Tag = 14 bits, Set = 5 bits, Offset = 2 bits",
    "Tag = 15 bits, Set = 4 bits, Offset = 2 bits",
    "Tag = 13 bits, Set = 6 bits, Offset = 2 bits",
    "Tag = 14 bits, Set = 4 bits, Offset = 3 bits"
  ],
  correct: "Tag = 14 bits, Set = 5 bits, Offset = 2 bits",
  explanation: `
    Main memory = 2^21 bytes, so address size = 21 bits.<br><br>

    Cache has 64 blocks = 2^6 blocks.<br>
    2-way set associative means each set has 2 blocks.<br><br>

    Number of sets = 64 / 2 = 32 = 2^5, so set field = 5 bits.<br><br>

    Block size = 4 bytes = 2^2, so offset field = 2 bits.<br><br>

    Tag field = 21 − 5 − 2 = 14 bits.<br><br>

    Therefore: <strong>Tag = 14 bits, Set = 5 bits, Offset = 2 bits</strong>.
  `
},
{
  type: "radio",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^21 bytes of main memory,
    a cache of 64 blocks, and each cache block contains 4 bytes.<br><br>

    b) If this cache is 4-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  answers: [
    "Tag = 14 bits, Set = 5 bits, Offset = 2 bits",
    "Tag = 15 bits, Set = 4 bits, Offset = 2 bits",
    "Tag = 13 bits, Set = 6 bits, Offset = 2 bits",
    "Tag = 15 bits, Set = 3 bits, Offset = 3 bits"
  ],
  correct: "Tag = 15 bits, Set = 4 bits, Offset = 2 bits",
  explanation: `
    Main memory = 2^21 bytes, so address size = 21 bits.<br><br>

    Cache has 64 blocks = 2^6 blocks.<br>
    4-way set associative means each set has 4 blocks.<br><br>

    Number of sets = 64 / 4 = 16 = 2^4, so set field = 4 bits.<br><br>

    Block size = 4 bytes = 2^2, so offset field = 2 bits.<br><br>

    Tag field = 21 − 4 − 2 = 15 bits.<br><br>

    Therefore: <strong>Tag = 15 bits, Set = 4 bits, Offset = 2 bits</strong>.
  `
},
{
  type: "radio",
  question: `
    Suppose a computer uses an 8-bit memory address. It has a 16-byte direct-mapped cache
    with 4 bytes per block.<br><br>

    What is the memory address format as seen by the cache?
  `,
  answers: [
    "Tag = 4 bits, Block = 2 bits, Offset = 2 bits",
    "Tag = 2 bits, Block = 4 bits, Offset = 2 bits",
    "Tag = 4 bits, Block = 4 bits, Offset = 0 bits",
    "Tag = 3 bits, Block = 3 bits, Offset = 2 bits"
  ],
  correct: "Tag = 4 bits, Block = 2 bits, Offset = 2 bits",
  explanation: `
    Address size = 8 bits.<br><br>

    Cache size = 16 bytes.<br>
    Block size = 4 bytes = 2^2, so offset = 2 bits.<br><br>

    Number of cache blocks = 16 / 4 = 4 = 2^2, so block field = 2 bits.<br><br>

    Tag = 8 − 2 − 2 = 4 bits.<br><br>

    Therefore: <strong>Tag = 4 bits, Block = 2 bits, Offset = 2 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A direct-mapped cache consists of 8 blocks. Main memory contains 4K blocks of 8 bytes each.
    Access time for the cache is 22 ns and the time required to fill a cache slot from main memory is 300 ns.<br><br>

    a) What are the sizes of the tag, block, and offset fields?
  `,
  correct: [
    "9 3 3",
    "tag9block3offset3",
    "9 bits tag 3 bits block 3 bits offset",
    "tag 9 bits block 3 bits offset 3 bits"
  ],
  explanation: `
    Main memory has 4K blocks = 2^12 blocks.<br>
    Each block has 8 bytes = 2^3 bytes.<br><br>

    Total memory size = 2^12 × 2^3 = 2^15 bytes, so address size = 15 bits.<br><br>

    Cache has 8 blocks = 2^3, so block field = 3 bits.<br>
    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag = 15 − 3 − 3 = <strong>9 bits</strong>.
  `
},
{
  type: "input",
  question: `
    For the same direct-mapped cache, compute the hit ratio for a program that loops 4 times
    from memory locations 0 to 67.
  `,
  correct: [
    "257/272",
    "94.49%",
    "94.49",
    "0.9449"
  ],
  explanation: `
    Total accesses:<br>
    Addresses 0 through 67 = 68 accesses per loop<br>
    4 loops → 68 × 4 = 272 accesses<br><br>

    Total misses = 15<br>
    Total hits = 272 − 15 = 257<br><br>

    Hit ratio = 257 / 272 = <strong>94.49%</strong>.
  `
},
{
  type: "input",
  question: `
    For the same direct-mapped cache, compute the effective access time for this program.
  `,
  correct: [
    "38.54",
    "38.54 ns",
    "38.5",
    "38.5 ns"
  ],
  explanation: `
    Hit ratio = 0.9449<br>
    Miss ratio = 1 − 0.9449 = 0.0551<br><br>

    Cache hit time = 22 ns<br>
    Miss time = 300 ns + 22 ns = 322 ns<br><br>

    Effective access time:<br>
    0.9449(22) + 0.0551(322)<br>
    = 20.79 + 17.74<br>
    = <strong>38.54 ns</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data, and blocks of 32 bytes.<br><br>

    a) Show the format of a 24-bit memory address for <strong>direct mapped</strong> cache.
  `,
  correct: [
    "8 11 5",
    "tag8block11offset5",
    "8 bits tag 11 bits block 5 bits offset",
    "tag 8 bits block 11 bits offset 5 bits"
  ],
  explanation: `
    Cache size = 64K bytes = 2^16 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Number of cache blocks:<br>
    2^16 / 2^5 = 2^11 blocks<br><br>

    Block field = 11 bits<br>
    Offset field = 5 bits<br><br>

    Address size = 24 bits<br>
    Tag field = 24 − 11 − 5 = <strong>8 bits</strong>.<br><br>

    Therefore: <strong>Tag = 8 bits, Block = 11 bits, Offset = 5 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data, and blocks of 32 bytes.<br><br>

    b) Show the format of a 24-bit memory address for <strong>fully associative</strong> cache.
  `,
  correct: [
    "19 5",
    "tag19offset5",
    "19 bits tag 5 bits offset",
    "tag 19 bits offset 5 bits"
  ],
  explanation: `
    Fully associative cache has no block/index field.<br><br>

    Block size = 32 bytes = 2^5 bytes<br>
    Offset field = 5 bits<br><br>

    Address size = 24 bits<br>
    Tag field = 24 − 5 = <strong>19 bits</strong>.<br><br>

    Therefore: <strong>Tag = 19 bits, Offset = 5 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data, and blocks of 32 bytes.<br><br>

    c) Show the format of a 24-bit memory address for <strong>4-way set associative</strong> cache.
  `,
  correct: [
    "10 9 5",
    "tag10set9offset5",
    "10 bits tag 9 bits set 5 bits offset",
    "tag 10 bits set 9 bits offset 5 bits"
  ],
  explanation: `
    Cache size = 64K bytes = 2^16 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Number of cache blocks:<br>
    2^16 / 2^5 = 2^11 blocks<br><br>

    4-way set associative means 4 blocks per set = 2^2.<br>
    Number of sets = 2^11 / 2^2 = 2^9 sets<br><br>

    Set field = 9 bits<br>
    Offset field = 5 bits<br><br>

    Address size = 24 bits<br>
    Tag field = 24 − 9 − 5 = <strong>10 bits</strong>.<br><br>

    Therefore: <strong>Tag = 10 bits, Set = 9 bits, Offset = 5 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A 2-way set-associative cache consists of four sets.
    Main memory contains 2K blocks of 8 bytes each and byte addressing is used.<br><br>

    a) Show the main memory address format that allows us to map addresses from main memory to cache.
    What are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "9 2 3",
    "tag9set2offset3",
    "9 bits tag 2 bits set 3 bits offset",
    "tag 9 bits set 2 bits offset 3 bits"
  ],
  explanation: `
    Main memory has 2K blocks.<br>
    2K = 2 × 2^10 = 2^11 blocks.<br><br>

    Each block has 8 bytes = 2^3 bytes.<br><br>

    Total address size:<br>
    2^11 × 2^3 = 2^14 → 14-bit addresses.<br><br>

    Cache has 4 sets = 2^2, so set field = 2 bits.<br>
    Offset field = 3 bits.<br><br>

    Tag = 14 − 2 − 3 = <strong>9 bits</strong>.<br><br>

    Therefore: <strong>Tag = 9 bits, Set = 2 bits, Offset = 3 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A 2-way set-associative cache consists of four sets.
    Main memory contains 2K blocks of 8 bytes each and byte addressing is used.<br><br>

    b) Compute the hit ratio for a program that loops 3 times from addresses
    <strong>0x8</strong> to <strong>0x33</strong> in main memory.
    You may leave the hit ratio as a fraction.
  `,
  correct: [
    "126/132",
    "95.45%",
    "95.45",
    "0.9545"
  ],
  explanation: `
    Address range 0x8 to 0x33 contains 44 accesses per loop.<br>
    The loop runs 3 times:<br>
    44 × 3 = 132 total accesses.<br><br>

    First iteration:<br>
    There are 6 misses and 38 hits.<br><br>

    Remaining two iterations:<br>
    44 hits each = 88 more hits.<br><br>

    Total hits = 38 + 88 = 126<br>
    Total accesses = 132<br><br>

    Hit ratio = <strong>126 / 132</strong> = <strong>95.45%</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    a) If this cache is 2-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "9 4 3",
    "tag9set4offset3",
    "9 bits tag 4 bits set 3 bits offset",
    "tag 9 bits set 4 bits offset 3 bits"
  ],
  explanation: `
    Main memory = 2^16 bytes → address size = 16 bits.<br><br>

    Cache has 32 blocks = 2^5 blocks.<br>
    2-way means each set has 2 blocks.<br>
    Sets = 32 / 2 = 16 = 2^4, so set field = 4 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag = 16 − 4 − 3 = <strong>9 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^16 bytes of main memory,
    a cache of 32 blocks, and each cache block contains 8 bytes.<br><br>

    b) If this cache is 4-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "10 3 3",
    "tag10set3offset3",
    "10 bits tag 3 bits set 3 bits offset",
    "tag 10 bits set 3 bits offset 3 bits"
  ],
  explanation: `
    Main memory = 2^16 bytes → address size = 16 bits.<br><br>

    Cache has 32 blocks = 2^5 blocks.<br>
    4-way means each set has 4 blocks.<br>
    Sets = 32 / 4 = 8 = 2^3, so set field = 3 bits.<br><br>

    Block size = 8 bytes = 2^3, so offset field = 3 bits.<br><br>

    Tag = 16 − 3 − 3 = <strong>10 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^21 bytes of main memory,
    a cache of 64 blocks, and each cache block contains 4 bytes.<br><br>

    a) If this cache is 2-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "14 5 2",
    "tag14set5offset2",
    "14 bits tag 5 bits set 2 bits offset",
    "tag 14 bits set 5 bits offset 2 bits"
  ],
  explanation: `
    Main memory = 2^21 bytes → address size = 21 bits.<br><br>

    Cache has 64 blocks = 2^6 blocks.<br>
    2-way means each set has 2 blocks.<br>
    Sets = 64 / 2 = 32 = 2^5, so set field = 5 bits.<br><br>

    Block size = 4 bytes = 2^2, so offset field = 2 bits.<br><br>

    Tag = 21 − 5 − 2 = <strong>14 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose a byte-addressable computer using set-associative cache has 2^21 bytes of main memory,
    a cache of 64 blocks, and each cache block contains 4 bytes.<br><br>

    b) If this cache is 4-way set associative, what are the sizes of the tag, set, and offset fields?
  `,
  correct: [
    "15 4 2",
    "tag15set4offset2",
    "15 bits tag 4 bits set 2 bits offset",
    "tag 15 bits set 4 bits offset 2 bits"
  ],
  explanation: `
    Main memory = 2^21 bytes → address size = 21 bits.<br><br>

    Cache has 64 blocks = 2^6 blocks.<br>
    4-way means each set has 4 blocks.<br>
    Sets = 64 / 4 = 16 = 2^4, so set field = 4 bits.<br><br>

    Block size = 4 bytes = 2^2, so offset field = 2 bits.<br><br>

    Tag = 21 − 4 − 2 = <strong>15 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data and blocks of 32 bytes.<br><br>

    a) Show the format of a 24-bit memory address for <strong>direct mapped</strong> cache.
  `,
  correct: [
    "8 11 5",
    "tag8block11offset5",
    "8 bits tag 11 bits block 5 bits offset",
    "tag 8 bits block 11 bits offset 5 bits"
  ],
  explanation: `
    Cache size = 64K = 2^16 bytes<br>
    Block size = 32 bytes = 2^5 bytes<br><br>

    Cache blocks = 2^16 / 2^5 = 2^11 blocks<br><br>

    Block field = 11 bits<br>
    Offset field = 5 bits<br>
    Tag = 24 − 11 − 5 = <strong>8 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data and blocks of 32 bytes.<br><br>

    b) Show the format of a 24-bit memory address for <strong>fully associative</strong> cache.
  `,
  correct: [
    "19 5",
    "tag19offset5",
    "19 bits tag 5 bits offset",
    "tag 19 bits offset 5 bits"
  ],
  explanation: `
    Fully associative cache has no block/index field.<br><br>

    Block size = 32 bytes = 2^5 bytes<br>
    Offset field = 5 bits<br><br>

    Tag = 24 − 5 = <strong>19 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Consider a byte-addressable computer with 24-bit addresses, a cache capable of storing
    64K bytes of data and blocks of 32 bytes.<br><br>

    c) Show the format of a 24-bit memory address for <strong>4-way set associative</strong> cache.
  `,
  correct: [
    "10 9 5",
    "tag10set9offset5",
    "10 bits tag 9 bits set 5 bits offset",
    "tag 10 bits set 9 bits offset 5 bits"
  ],
  explanation: `
    Cache blocks = 2^16 / 2^5 = 2^11 blocks<br><br>

    4-way set associative means 4 blocks per set = 2^2<br>
    Sets = 2^11 / 2^2 = 2^9 sets<br><br>

    Set field = 9 bits<br>
    Offset field = 5 bits<br>
    Tag = 24 − 9 − 5 = <strong>10 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have 2^10 bytes of virtual memory and the page size is 2^4 bytes.<br><br>

    a) How many pages are there in virtual memory?
  `,
  correct: ["64", "64 pages", "2^6"],
  explanation: `
    Virtual memory = 2^10 bytes<br>
    Page size = 2^4 bytes<br><br>

    Number of virtual pages:<br>
    2^10 / 2^4 = 2^6 = <strong>64 pages</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have 2^8 bytes of physical main memory and the page size is 2^4 bytes.<br><br>

    b) How many page frames are there in main memory?
  `,
  correct: ["16", "16 frames", "16 page frames", "2^4"],
  explanation: `
    Physical memory = 2^8 bytes<br>
    Page size = 2^4 bytes<br><br>

    Number of page frames:<br>
    2^8 / 2^4 = 2^4 = <strong>16 page frames</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose we have 2^10 bytes of virtual memory and the page size is 2^4 bytes.<br><br>

    c) How many entries are in the page table for a process that uses all of virtual memory?
  `,
  correct: ["64", "64 entries"],
  explanation: `
    The page table must have one entry for each virtual page.<br><br>

    Virtual pages = 2^10 / 2^4 = 2^6 = 64<br><br>

    Therefore, the page table has <strong>64 entries</strong>.
  `
},
{
  type: "table-input",
  question: `
    Suppose we have 2^10 bytes of virtual memory and 2^8 bytes of physical main memory.<br>
    Page size = 2^4 bytes.<br><br>

    Fill in the answers:
  `,
  rows: [
    "a) Number of virtual memory pages",
    "b) Number of page frames in main memory",
    "c) Number of page table entries"
  ],
  columns: ["Answer"],
  correct: [
    ["64", "2^6"],
    ["16", "2^4"],
    ["64"]
  ],
  explanation: `
    a) Virtual pages:<br>
    2^10 / 2^4 = 2^6 = <strong>64</strong><br><br>

    b) Page frames:<br>
    2^8 / 2^4 = 2^4 = <strong>16</strong><br><br>

    c) Page table entries:<br>
    One entry per virtual page → <strong>64 entries</strong>
  `
},
{
  type: "input",
  question: `
    Suppose you have a byte-addressable virtual address memory system with 8 virtual pages
    of 64 bytes each and 4 page frames.<br><br>

    a) How many bits are in a virtual address?
  `,
  correct: ["9", "9 bits", "9bits"],
  explanation: `
    8 virtual pages = 2^3 pages<br>
    Page size = 64 bytes = 2^6 bytes<br><br>

    Virtual address bits = 3 + 6 = <strong>9 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose you have a byte-addressable virtual address memory system with 8 virtual pages
    of 64 bytes each and 4 page frames.<br><br>

    b) How many bits are in a physical address?
  `,
  correct: ["8", "8 bits", "8bits"],
  explanation: `
    4 page frames = 2^2 frames<br>
    Page size = 64 bytes = 2^6 bytes<br><br>

    Physical address bits = 2 + 6 = <strong>8 bits</strong>.
  `
},
{
  type: "table-input",
  question: `
    Suppose you have a byte-addressable virtual address memory system with 8 virtual pages
    of 64 bytes each and 4 page frames.<br><br>

    Page table:<br>
    Page 0 → Frame 1, Valid 1<br>
    Page 1 → Frame 3, Valid 0<br>
    Page 2 → Invalid<br>
    Page 3 → Frame 0, Valid 1<br>
    Page 4 → Frame 2, Valid 1<br><br>

    c) What physical address corresponds to each virtual address?
    If the address causes a page fault, write <strong>page fault</strong>.
  `,
  rows: ["i) 0x00", "ii) 0x44", "iii) 0xC2", "iv) 0x80"],
  columns: ["Physical Address"],
  correct: [
    ["0x10", "10"],
    ["0xC4", "C4"],
    ["0x02", "02", "2"],
    ["page fault", "fault"]
  ],
  explanation: `
    Page size = 64 bytes = 2^6, so offset = 6 bits.<br><br>

    i) 0x00 is page 0, offset 0. Page 0 → frame 1, so physical address = <strong>0x10</strong>.<br><br>

    ii) 0x44 is page 1, offset 4. Page 1 → frame 3, so physical address = <strong>0xC4</strong>.<br><br>

    iii) 0xC2 is page 3, offset 2. Page 3 → frame 0, so physical address = <strong>0x02</strong>.<br><br>

    iv) 0x80 is page 2, offset 0. Page 2 is invalid, so it causes a <strong>page fault</strong>.
  `
},
{
  type: "input",
  question: `
    A system implements a paged virtual address space. Maximum virtual address space is 16MB.
    Page size is 1024 bytes.<br><br>

    a) How many bits are required for each virtual address?
  `,
  correct: ["24", "24 bits", "24bits"],
  explanation: `
    Virtual address space = 16MB = 2^4 × 2^20 = 2^24 bytes.<br><br>
    Therefore, each virtual address requires <strong>24 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A system has maximum physical memory size of 2MB.<br><br>

    b) How many bits are required for each physical address?
  `,
  correct: ["21", "21 bits", "21bits"],
  explanation: `
    Physical memory = 2MB = 2^1 × 2^20 = 2^21 bytes.<br><br>
    Therefore, each physical address requires <strong>21 bits</strong>.
  `
},
{
  type: "input",
  question: `
    A system has maximum virtual address space of 16MB and page size of 1024 bytes.<br><br>

    c) What is the maximum number of entries in a page table?
  `,
  correct: ["2^14", "16384"],
  explanation: `
    Virtual pages = virtual address space / page size<br><br>
    16MB = 2^24 bytes<br>
    Page size = 1024 bytes = 2^10 bytes<br><br>
    Number of pages = 2^24 / 2^10 = <strong>2^14</strong>.
  `
},
{
  type: "input",
  question: `
    Page table entries include:<br>
    Virtual page 1 → page frame 2<br><br>

    Page size = 1024 bytes.<br><br>

    d) To which physical address will virtual address <strong>0x5F4</strong> translate?
  `,
  correct: ["0x9F4", "9F4"],
  explanation: `
    Page size = 1024 bytes = 0x400 bytes.<br><br>

    Virtual address 0x5F4 is on virtual page 1 because:<br>
    Page 0: 0x000–0x3FF<br>
    Page 1: 0x400–0x7FF<br><br>

    Offset = 0x5F4 − 0x400 = 0x1F4<br><br>

    Virtual page 1 maps to frame 2.<br>
    Frame 2 starts at 2 × 0x400 = 0x800<br><br>

    Physical address = 0x800 + 0x1F4 = <strong>0x9F4</strong>.
  `
},
{
  type: "input",
  question: `
    Page table entries include:<br>
    Virtual page 0 → page frame 1<br><br>

    Page size = 1024 bytes.<br><br>

    e) Which virtual address will translate to physical address <strong>0x400</strong>?
  `,
  correct: ["0x0", "0", "0x000"],
  explanation: `
    Physical address 0x400 is offset 0 in frame 1.<br><br>

    Virtual page 0 maps to frame 1.<br><br>

    Therefore, the virtual address is page 0 with offset 0:<br>
    <strong>0x000</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose you have a byte-addressable virtual address memory system with 8 virtual pages
    of 64 bytes each and 4 page frames.<br><br>

    a) How many bits are in a virtual address?
  `,
  correct: ["9", "9 bits", "9bits"],
  explanation: `
    8 virtual pages = 2^3 pages<br>
    Page size = 64 bytes = 2^6 bytes<br><br>

    Virtual address bits = 3 + 6 = <strong>9 bits</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose you have a byte-addressable virtual address memory system with 8 virtual pages
    of 64 bytes each and 4 page frames.<br><br>

    b) How many bits are in a physical address?
  `,
  correct: ["8", "8 bits", "8bits"],
  explanation: `
    4 page frames = 2^2 frames<br>
    Page size = 64 bytes = 2^6 bytes<br><br>

    Physical address bits = 2 + 6 = <strong>8 bits</strong>.
  `
},
{
  type: "table-input",
  question: `
    Suppose you have a byte-addressable virtual address memory system with 8 virtual pages
    of 64 bytes each and 4 page frames.<br><br>

    Page table:<br>
    Page 0 → Frame 1, Valid 1<br>
    Page 1 → Frame 3, Valid 0<br>
    Page 2 → Invalid<br>
    Page 3 → Frame 0, Valid 1<br>
    Page 4 → Frame 2, Valid 1<br><br>

    c) What physical address corresponds to each virtual address?
    If the address causes a page fault, write <strong>page fault</strong>.
  `,
  rows: ["i) 0x00", "ii) 0x44", "iii) 0xC2", "iv) 0x80"],
  columns: ["Physical Address"],
  correct: [
    ["0x10", "10"],
    ["0xC4", "C4"],
    ["0x02", "02", "2"],
    ["page fault", "fault"]
  ],
  explanation: `
    Page size = 64 bytes = 2^6, so offset = 6 bits.<br><br>

    i) 0x00 is page 0, offset 0. Page 0 → frame 1, so physical address = <strong>0x10</strong>.<br><br>

    ii) 0x44 is page 1, offset 4. Page 1 → frame 3, so physical address = <strong>0xC4</strong>.<br><br>

    iii) 0xC2 is page 3, offset 2. Page 3 → frame 0, so physical address = <strong>0x02</strong>.<br><br>

    iv) 0x80 is page 2, offset 0. Page 2 is invalid, so it causes a <strong>page fault</strong>.
  `
},
{
  type: "input",
  question: `
    Calculate the overall speedup of a system that spends 65% of its time on I/O
    with a disk upgrade that provides 50% greater throughput.
  `,
  correct: ["1.28", "1.2766", "28%", "27.66%"],
  explanation: `
    Use Amdahl's Law:<br>
    Speedup = 1 / ((1 − f) + f / k)<br><br>

    f = 0.65<br>
    k = 1.5<br><br>

    Speedup = 1 / ((1 − 0.65) + 0.65 / 1.5)<br>
    Speedup = 1 / (0.35 + 0.4333)<br>
    Speedup = 1 / 0.7833 = <strong>1.2766</strong><br><br>

    So the overall speedup is about <strong>1.28</strong>, or about <strong>28%</strong>.
  `
},
{
  type: "input",
  question: `
    Calculate the overall speedup of a system that spends 40% of its time in calculations
    with a processor upgrade that provides 100% greater throughput.
  `,
  correct: ["1.25", "25%"],
  explanation: `
    Use Amdahl's Law:<br>
    Speedup = 1 / ((1 − f) + f / k)<br><br>

    f = 0.40<br>
    k = 2<br><br>

    Speedup = 1 / ((1 − 0.40) + 0.40 / 2)<br>
    Speedup = 1 / (0.60 + 0.20)<br>
    Speedup = 1 / 0.80 = <strong>1.25</strong><br><br>

    So the overall speedup is <strong>1.25</strong>, or <strong>25%</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose your company needs an overall system speedup of 25%.
    Processes spend 60% of their time using the CPU and 40% on I/O.<br><br>

    a) How much faster does the CPU need to be?
  `,
  correct: ["1.5", "50%", "50 percent", "50% faster"],
  explanation: `
    Target overall speedup = 1.25<br>
    CPU fraction f = 0.60<br><br>

    Using Amdahl's Law:<br>
    S = 1 / ((1 − f) + f / k)<br><br>

    Solving for k:<br>
    k = 1.5<br><br>

    So the CPU must be <strong>1.5× as fast</strong>, or <strong>50% faster</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose your company needs an overall system speedup of 25%.
    Processes spend 60% of their time using the CPU and 40% on I/O.<br><br>

    b) How much faster does the disk need to be?
  `,
  correct: ["2", "2x", "100%", "100 percent", "100% faster"],
  explanation: `
    Target overall speedup = 1.25<br>
    I/O fraction f = 0.40<br><br>

    Using Amdahl's Law:<br>
    S = 1 / ((1 − f) + f / k)<br><br>

    Solving for k:<br>
    k = 2<br><br>

    So the disk must be <strong>2× as fast</strong>, or <strong>100% faster</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose your company needs an overall system speedup of 30%.
    Processes spend 70% of their time using the CPU and 30% on I/O.<br><br>

    a) How much faster does the CPU need to be?
  `,
  correct: ["1.4918", "49.18%", "49.18 percent", "49.18% faster"],
  explanation: `
    Target speedup = 1.30<br>
    CPU fraction f = 0.70<br><br>

    Using Amdahl's Law:<br>
    S = 1 / ((1 − f) + f / k)<br><br>

    Solving for k:<br>
    k = 1.4918<br><br>

    So the CPU must be about <strong>1.4918× as fast</strong>, or <strong>49.18% faster</strong>.
  `
},
{
  type: "input",
  question: `
    Suppose your company needs an overall system speedup of 30%.
    Processes spend 70% of their time using the CPU and 30% on I/O.<br><br>

    b) How much faster does the disk need to be?
  `,
  correct: ["4.3333", "4.33", "333%", "333 percent", "333% faster"],
  explanation: `
    Target speedup = 1.30<br>
    I/O fraction f = 0.30<br><br>

    Using Amdahl's Law:<br>
    S = 1 / ((1 − f) + f / k)<br><br>

    Solving for k:<br>
    k = 4.3333<br><br>

    So the disk must be about <strong>4.33× as fast</strong>, or about <strong>333% faster</strong>.
  `
},

{
  type: "input",
  question: `
    Daytime processing load: 60% CPU activity and 40% disk activity.<br>
    Disk upgrade: $8000, makes disk 2.5× faster.<br>
    CPU upgrade: $5000, makes CPU 1.4× faster.<br><br>

    a) Which upgrade gives the best performance improvement for the least money?
  `,
  correct: ["CPU", "CPU upgrade", "processor", "processor upgrade"],
  explanation: `
    CPU speedup:<br>
    1 / ((1 − 0.60) + 0.60 / 1.4) = 1.2069 → 20.69% improvement<br><br>

    Disk speedup:<br>
    1 / ((1 − 0.40) + 0.40 / 2.5) = 1.3158 → 31.58% improvement<br><br>

    Cost per 1% improvement:<br>
    CPU = $5000 / 20.69 = $241.66<br>
    Disk = $8000 / 31.58 = $253.32<br><br>

    CPU is cheaper per 1% improvement, so choose <strong>CPU upgrade</strong>.
  `
},
{
  type: "input",
  question: `
    Daytime processing load: 60% CPU activity and 40% disk activity.<br>
    Disk upgrade: $8000, makes disk 2.5× faster.<br>
    CPU upgrade: $5000, makes CPU 1.4× faster.<br><br>

    b) Which option gives the faster system if money does not matter?
  `,
  correct: ["disk", "disk upgrade"],
  explanation: `
    CPU upgrade gives speedup = 1.2069 → 20.69% improvement.<br><br>

    Disk upgrade gives speedup = 1.3158 → 31.58% improvement.<br><br>

    Since 31.58% is greater than 20.69%, choose the <strong>disk upgrade</strong>.
  `
},
{
  type: "input",
  question: `
    Daytime processing load: 60% CPU activity and 40% disk activity.<br>
    Disk upgrade: $8000, makes disk 2.5× faster.<br>
    CPU upgrade: $5000, makes CPU 1.4× faster.<br><br>

    c) What is the break-even price for the upgrades?
  `,
  correct: [
    "$5241",
    "5241",
    "CPU $5241",
    "$7631",
    "7631",
    "disk $7631"
  ],
  explanation: `
    CPU cost per 1% improvement:<br>
    $5000 / 20.69 = $241.66<br><br>

    Disk cost per 1% improvement:<br>
    $8000 / 31.58 = $253.32<br><br>

    Break-even CPU price:<br>
    X / 20.69 = 253.32 → X = <strong>$5241</strong><br><br>

    Break-even disk price:<br>
    Y / 31.58 = 241.66 → Y = <strong>$7631</strong>.
  `
},



];
