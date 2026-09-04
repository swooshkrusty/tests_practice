const questions = [
  
  {
    type: "radio",
    question: "(True or False) Prior to launching LDB, ensure all application windows that you may have open are closed (like powerpoint, file explorer, browser windows, etc.)",
    answers: [
      "True",
      "False"
    ],
    correct: "True",
    explanation: `
  Before launching LDB, close all unnecessary applications and windows. This helps prevent conflicts, reduces system resource usage, and ensures the program runs correctly.
`
  },
  {
  type: "radio",
  question: "Which of the following is true about LDB?",
  answers: [
    "LDB prevents you from printing, copying, going to another URL, or accessing other applications during a quiz.",
    "LDB is a locked browser for taking quizzes in Canvas.",
    "All of these",
    "If a Canvas quiz requires that LDB be used, you will not be able to take the quiz with a standard web browser.",
    "LDB should only be used for taking Canvas Quizzes. It should not be used in other areas of Canvas assignments."
  ],
  correct: "All of these",
  explanation: `
  All of the statements are true about LDB.<br><br>

  LDB is a locked browser used for Canvas quizzes.<br>
  It prevents printing, copying, navigating to other URLs, and accessing other applications during a quiz.<br><br>

  If a Canvas quiz requires LDB, it cannot be taken using a standard web browser.<br><br>

  LDB should be used specifically for taking Canvas quizzes and not for other Canvas activities.<br><br>

  Therefore, the correct answer is <strong>All of these</strong>.
`
},
{
  type: "radio",
  question: "(True or False) The LDB that you downloaded and installed in this module will most likely be used in the future to take your Quizzes and Exams.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  The LDB installed in this module will most likely be required for future quizzes and exams.<br><br>

  LDB is used to provide a secure testing environment by restricting access to other websites, applications, and computer functions while you are taking an assessment.<br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "(True or False) When you start LDB, you might see a warning message that certain applications used to communicate with the outside world (such as screen capture tools, instant messaging, Skype, etc.) have to be opened before you continue.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  Before LDB can launch, it may detect applications that could compromise the security of the quiz, such as screen capture tools, instant messaging programs, or Skype.<br><br>

  These applications must be <strong>closed</strong>, not opened, before you can continue using LDB.<br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "Which of the following is NOT true about LDB?",
  answers: [
    "If a Canvas quiz requires that LDB be used, you will not be able to take the quiz with a standard web browser.",
    "LDB should only be used for taking Canvas Quizzes. It should not be used in other areas of Canvas assignments.",
    "LDB prevents you from printing, copying, going to another URL, or accessing other applications during a quiz.",
    "LDB is a software application that enables programmers to develop code."
  ],
  correct: "LDB is a software application that enables programmers to develop code.",
  explanation: `
  LDB (LockDown Browser) is <strong>not</strong> a programming or software development tool.<br><br>

  It is a secure browser designed specifically for taking quizzes and exams in Canvas.<br>
  During a quiz, it prevents actions such as printing, copying, opening other applications, or navigating to other websites.<br><br>

  Therefore, the statement <strong>"LDB is a software application that enables programmers to develop code."</strong> is <strong>NOT true</strong> and is the correct answer.
`
},
{
  type: "radio",
  question: "Git supports a variety of protocols and their corresponding URLs to connect to the remote repository. Which of the following protocols is not supported by Git?",
  answers: [
    "SSH",
    "HTTPS",
    "HTTP",
    "All protocols are supported."
  ],
  correct: "All protocols are supported.",
  explanation: `
  Git supports multiple protocols for connecting to remote repositories, including <strong>SSH</strong>, <strong>HTTP</strong>, and <strong>HTTPS</strong>.<br><br>

  Each protocol has its own advantages. For example, SSH provides secure authentication using SSH keys, while HTTP and HTTPS are commonly used for web-based access to repositories.<br><br>

  Since all of the listed protocols are supported by Git, the correct answer is <strong>All protocols are supported.</strong>
`
},
{
  type: "radio",
  question: "Which of the following is not a remote repository hosting site?",
  answers: [
    "GitHub",
    "BitBucket",
    "GitLab",
    "VS Code"
  ],
  correct: "VS Code",
  explanation: `
  <strong>GitHub</strong>, <strong>Bitbucket</strong>, and <strong>GitLab</strong> are all remote repository hosting services used to store and manage Git repositories.<br><br>

  <strong>VS Code</strong> (Visual Studio Code) is a source code editor developed by Microsoft. Although it has built-in Git integration, it is <strong>not</strong> a remote repository hosting service.<br><br>

  Therefore, the correct answer is <strong>VS Code</strong>.
`
},
{
  type: "radio",
  question: "What system keeps track of the changes that you make to your files and allows you to revert changes if you accidentally modify your files?",
  answers: [
    "Version Control System",
    "Flow Control System",
    "Code Control System",
    "Inventory Control System"
  ],
  correct: "Version Control System",
  explanation: `
  A <strong>Version Control System (VCS)</strong> records changes made to files over time and allows you to restore previous versions if needed.<br><br>

  Git is one of the most widely used version control systems. It helps developers track changes, collaborate with others, and recover from mistakes by maintaining a complete history of a project.<br><br>

  Therefore, the correct answer is <strong>Version Control System</strong>.
`
},
{
  type: "radio",
  question: "When you commit changes using git commit -a, what does the -a flag do?",
  answers: [
    "-a flag means to skip commit message",
    "-a flag means to discard the changes and commit directly",
    "-a flag means to include the staging step before the commit step",
    "-a flag means to skip the staging step and directly go to commit step"
  ],
  correct: "-a flag means to skip the staging step and directly go to commit step",
  explanation: `
  The <strong>-a</strong> flag automatically stages all modified and deleted tracked files before creating the commit.<br><br>

  This means you do not need to run <code>git add</code> separately for tracked files. The staging step is performed automatically, and Git proceeds directly to the commit.<br><br>

  <strong>Note:</strong> The <code>-a</code> flag does <strong>not</strong> stage newly created (untracked) files. New files must still be added using <code>git add</code> before they can be committed.<br><br>

  Therefore, the correct answer is <strong>"-a flag means to skip the staging step and directly go to commit step."</strong>
`
},
{
  type: "radio",
  question: `When you commit changes using <span class="keyword">git commit</span>, you usually use the <span class="keyword">-m</span> flag. What does <span class="keyword">-m</span> do?`,
  answers: [
    "-m means to skip the staging step",
    "-m means to skip commit message",
    "-m means to add the commit message directly",
    "-m means to revert the changes"
  ],
  correct: "-m means to add the commit message directly",
  explanation: `
  The <strong>-m</strong> flag allows you to provide a commit message directly on the command line.<br><br>

  For example:<br>
  <code>git commit -m "Initial commit"</code><br><br>

  Without the <strong>-m</strong> flag, Git opens your default text editor so you can type the commit message manually.<br><br>

  A clear commit message describes the changes made in that commit and helps maintain a readable project history.<br><br>

  Therefore, the correct answer is <strong>"-m means to add the commit message directly."</strong>
`
},
{
  type: "radio",
  question: "(True or False) The remote repositories have an assigned default name \"origin\".",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  By default, Git assigns the name <strong>origin</strong> to the remote repository when you clone a repository or add a remote using common Git commands.<br><br>

  The name <code>origin</code> is simply a convenient alias that refers to the remote repository. It is commonly used with commands such as:<br>
  <code>git push origin main</code><br>
  <code>git pull origin main</code><br><br>

  Although you can rename the remote or use a different name, <strong>origin</strong> is the default name used by Git.<br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "(True or False) Git provides software hosting services allowing developers to set up their private or public repositories.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  <strong>Git</strong> is a distributed version control system used to track changes in source code and collaborate on projects.<br><br>

  Hosting services such as <strong>GitHub</strong>, <strong>GitLab</strong>, and <strong>Bitbucket</strong> provide remote repositories where developers can store private or public Git projects.<br><br>

  Git itself does <strong>not</strong> provide hosting services—it is the version control software used by those hosting platforms.<br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "matching",
  question: "Match the following key concept and its feature.",
  pairs: [
    {
      left: "pull",
      right: "getting the code file from a remote repository to a local machine"
    },
    {
      left: "push",
      right: "sending a local built code file to a remote repository"
    },
    {
      left: "commit",
      right: "saving changes made to a code file to the repository"
    },
    {
      left: "repository",
      right: "storing shared code or projects"
    }
  ],
  explanation: `
  <strong>Git Commands:</strong><br><br>

  <strong>pull</strong> downloads the latest changes from a remote repository to your local machine.<br><br>

  <strong>push</strong> uploads your local commits to a remote repository.<br><br>

  <strong>commit</strong> saves a snapshot of your changes in the local Git repository.<br><br>

  A <strong>repository (repo)</strong> is where a project's files and complete version history are stored.
  `
},
{
  type: "radio",
  question: "A _____________ is a type of centrally located storage where you can keep all your project's files and resources.",
  answers: [
    "hard drive",
    "memory",
    "repository",
    "file"
  ],
  correct: "repository",
  explanation: `
  A <strong>repository</strong> is a centralized location used to store and manage project files, source code, and related resources.<br><br>

  In version control systems such as Git, a repository also keeps track of the project's history and changes over time.<br><br>

  Therefore, the correct answer is <strong>repository</strong>.
`
},
{
  type: "radio",
  question: "Which of the following is not a version control system?",
  answers: [
    "BitBucket",
    "Mercurial",
    "Subversion",
    "Git"
  ],
  correct: "BitBucket",
  explanation: `
  <strong>Git</strong>, <strong>Mercurial</strong>, and <strong>Subversion</strong> are version control systems.<br><br>

  <strong>Bitbucket</strong> is a repository hosting service that allows developers to host and manage Git repositories online.<br><br>

  Therefore, the correct answer is <strong>BitBucket</strong>.
`
},
{
  type: "radio",
  question: `What does the <span class="keyword">git rm</span> command mean?`,
  answers: [
    "moves the file from the working tree",
    "renames the file in the working tree",
    "adds file to the working tree",
    "deletes or removes file from the working tree"
  ],
  correct: "deletes or removes file from the working tree",
  explanation: `
  The <code>git rm</code> command removes a tracked file from the working tree and stages that deletion for the next commit.<br><br>

  For example:<br>
  <code>git rm file.txt</code><br><br>

  After committing, the file removal becomes part of the repository history.<br><br>

  Therefore, the correct answer is <strong>deletes or removes file from the working tree</strong>.
`
},
{
  type: "radio",
  question: "To download a copy of a remote repository from GitHub onto the local machine, what command do we use?",
  answers: [
    "git transfer URL of the repo",
    "git push URL of the repo",
    "git copy URL of the repo",
    "git clone URL of the repo"
  ],
  correct: "git clone URL of the repo",
  explanation: `
  The <code>git clone</code> command creates a complete copy of a remote repository on your local machine.<br><br>

  Example:<br>
  <code>git clone https://github.com/user/repository.git</code><br><br>

  Therefore, the correct answer is <strong>git clone URL of the repo</strong>.
`
},
{
  type: "radio",
  question: "GitHub is a web-based Git repository hosting service and it lets us share and access repositories on the web and copy and clone them to our local machine.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  GitHub is a cloud-based hosting service for Git repositories. It allows developers to collaborate, share repositories, and clone them to local computers using Git.<br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "What are the three steps of the basic Git workflow?",
  answers: [
    "pull changes, stage changes, and push changes",
    "make changes, stage changes, and commit changes",
    "make changes, store changes and push changes",
    "make changes, track changes, and pull changes"
  ],
  correct: "make changes, stage changes, and commit changes",
  explanation: `
  The basic Git workflow consists of three main steps:<br><br>

  1. Make changes to your files.<br>
  2. Stage the changes using <code>git add</code>.<br>
  3. Commit the changes using <code>git commit</code>.<br><br>

  Therefore, the correct answer is <strong>make changes, stage changes, and commit changes</strong>.
`
},
{
  type: "radio",
  question: "GitHub is a popular version control system that developers use for code development.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  <strong>Git</strong> is the version control system.<br><br>

  <strong>GitHub</strong> is a web-based hosting platform for Git repositories that provides collaboration and repository management features.<br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "(True or False) In VS Code, the Extensions icon in the Activity Bar/Navigation Pane on the left will show you the details of your current repository changes.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  The <strong>Extensions</strong> icon in VS Code is used to browse, install, and manage extensions.<br><br>

  To view changes in your current Git repository, you use the <strong>Source Control</strong> icon in the Activity Bar/Navigation Pane.<br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: "In this module, you should ensure that you have completed setting up __________.",
  answers: [
    "GIT-GITHUB",
    "All of these",
    "LDB",
    "VS Code"
  ],
  correct: "All of these",
  explanation: `
  This module requires you to complete the setup of <strong>Git/GitHub</strong>, <strong>LDB</strong>, and <strong>VS Code</strong>.<br><br>

  Each tool is needed for different course activities, including coding, repository management, and secure quizzes or exams.<br><br>

  Therefore, the correct answer is <strong>All of these</strong>.
`
},
{
  type: "radio",
  question: "Which of the following is a free, multi-platform, lightweight, and powerful source code editor that you will be using in this course to run Python code?",
  answers: [
    "Word",
    "VS Code",
    "Notepad",
    "Windows"
  ],
  correct: "VS Code",
  explanation: `
  <strong>VS Code</strong> (Visual Studio Code) is a free, cross-platform source code editor developed by Microsoft.<br><br>

  It supports Python through extensions and provides features such as syntax highlighting, debugging, Git integration, and an integrated terminal.<br><br>

  Therefore, the correct answer is <strong>VS Code</strong>.
`
},
{
  type: "radio",
  question: "In VS Code, __________ will enable you to clone a repository from a remote host to your local machine?",
  answers: [
    "selecting the Clone Local button in the Source Control view from the Activity Bar/Navigation Pane",
    "selecting the Clone Repository button in the Source Control view from the Activity Bar/Navigation Pane",
    "selecting the Remote Host button in the Source Control view from the Activity Bar/Navigation Pane",
    "selecting the Clone Remote button in the Source Control view from the Activity Bar/Navigation Pane"
  ],
  correct: "selecting the Clone Repository button in the Source Control view from the Activity Bar/Navigation Pane",
  explanation: `
  In VS Code, the <strong>Clone Repository</strong> option in the Source Control view allows you to download a remote Git repository to your local machine.<br><br>

  After selecting it, you provide the repository URL and choose where the repository should be saved locally.<br><br>

  Therefore, the correct answer is <strong>selecting the Clone Repository button in the Source Control view from the Activity Bar/Navigation Pane</strong>.
`
},
{
  type: "radio",
  question: "(True or False) To use Git and GitHub in VS Code, prior installation of Git is required. If Git is missing, you should ensure to install Git and restart VS Code afterwards.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  VS Code includes Git integration, but it relies on the <strong>Git application</strong> installed on your computer.<br><br>

  If Git is not installed, you should install it and then restart VS Code so that the editor can detect and use Git properly.<br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "(True or False) When you start LDB, you might see a warning message that certain applications that let you communicate with the outside world (like screen capture, instant messaging, Skype, etc.) have to be opened before you continue.",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  LDB (LockDown Browser) is designed to <strong>restrict access</strong> to applications that can communicate with the outside world or capture your screen during an exam.<br><br>

  If programs such as screen capture software, instant messaging apps, or Skype are running, LDB will usually require you to <strong>close them</strong> before continuing—not open them.<br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `What does the <span class="keyword">git rm</span> command mean?`,
  answers: [
    "renames the file in the working tree",
    "moves the file from the working tree",
    "adds file to the working tree",
    "deletes or removes file from the working tree"
  ],
  correct: "deletes or removes file from the working tree",
  explanation: `
  The <code>git rm</code> command is used to <strong>remove (delete) a file</strong> from the working tree and stage that deletion for the next commit.<br><br>

  <strong>Example:</strong><br>
  <code>git rm file.txt</code><br><br>

  This command:
  <ul>
    <li>Deletes <code>file.txt</code> from your working directory.</li>
    <li>Stages the deletion so it will be included in the next commit.</li>
  </ul>

  Therefore, the correct answer is <strong>"deletes or removes file from the working tree"</strong>.
`
},
{
  type: "radio",
  question: `<span class="keyword">import</span> is an illegal identifier because it is a keyword or reserved word.`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  In Python, <code>import</code> is a reserved keyword used to load modules and packages.<br><br>

  Reserved keywords cannot be used as variable names, function names, or other identifiers.<br><br>

  For example, this is invalid:<br>
  <code>import = 5</code><br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},

{
  type: "radio",
  question: "(True or False) The following is a valid statement:<br><br><code>value = $3,450</code>",
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  The statement <code>value = $3,450</code> is <strong>not valid Python syntax</strong>.<br><br>

  The dollar sign <code>$</code> cannot be used directly as part of a numeric literal, and the comma also changes the meaning of the expression.<br><br>

  A valid numeric assignment would be:<br>
  <code>value = 3450</code><br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},

{
  type: "matching",
  question: "Match the relational operators with their meaning:",
  pairs: [
    {
      left: ">=",
      right: "Greater than or equal to"
    },
    {
      left: "!=",
      right: "Not equal to"
    },
    {
      left: ">",
      right: "Greater than"
    },
    {
      left: "<=",
      right: "Less than or equal to"
    },
    {
      left: "<",
      right: "Less than"
    },
    {
      left: "==",
      right: "Equal to (equality operator)"
    }
  ],
  explanation: `
  Python relational operators compare two values.<br><br>

  <strong>&gt;=</strong> — Greater than or equal to<br>
  <strong>!=</strong> — Not equal to<br>
  <strong>&gt;</strong> — Greater than<br>
  <strong>&lt;=</strong> — Less than or equal to<br>
  <strong>&lt;</strong> — Less than<br>
  <strong>==</strong> — Equal to (equality operator)
`
},

{
  type: "radio",
  question: `
    Consider the following statements. If the input is <strong>85</strong>, the output of the following code will be:<br><br>

    <pre><code class="language-python">score = 0
grade = "Unknown"
score = int(input("Enter a score: "))

if score >= 90:
    grade = "A"
if score >= 80:
    grade = "B"
if score >= 70:
    grade = "C"
if score >= 60:
    grade = "D"
else:
    grade = "F"

print(grade)</code></pre>
  `,
  answers: [
    "B",
    "D",
    "C",
    "A",
    "F"
  ],
  correct: "D",
  explanation: `
  The input is <strong>85</strong>.<br><br>

  Since these are separate <code>if</code> statements, Python continues checking each condition:<br><br>

  <code>85 >= 90</code> → False<br>
  <code>85 >= 80</code> → True → grade becomes <strong>B</strong><br>
  <code>85 >= 70</code> → True → grade becomes <strong>C</strong><br>
  <code>85 >= 60</code> → True → grade becomes <strong>D</strong><br><br>

  The <code>else</code> belongs only to the final <code>if score >= 60</code>. Since that condition is true, the <code>else</code> is skipped.<br><br>

  Therefore, the final output is <strong>D</strong>.
`
},
{
  type: "radio",
  question: `
    Suppose <code>s1 = "smith"</code> and <code>s2 = "Mary"</code>, what is the output of the following code?<br><br>

    <pre><code class="language-python">if s2 < s1:
    temp = s1
    s1 = s2
    s2 = temp

print(s1, s2.capitalize())</code></pre>
  `,
  answers: [
    "Mary smith",
    "Smith Mary",
    "smith MARY",
    "Mary Smith",
    "Mary smith"
  ],
  correct: "Mary Smith",
  explanation: `
  Python compares strings alphabetically using their character values.<br><br>

  <code>"Mary" < "smith"</code> is <strong>True</strong>, so the two strings are swapped:<br><br>

  <code>s1 = "Mary"</code><br>
  <code>s2 = "smith"</code><br><br>

  Then <code>s2.capitalize()</code> changes <code>"smith"</code> to <code>"Smith"</code>.<br><br>

  Therefore, the output is <strong>Mary Smith</strong>.
`
},
{
  type: "radio",
  question: `
    Suppose <code>s1</code> and <code>s2</code> are strings, given as follows:<br><br>

    <pre><code class="language-python">s1 = "Welcome to "
s2 = "Hcc"</code></pre>

    What are the results of the following statements?<br><br>

    <pre><code class="language-python">print(2 * s2)
print(s1 + s2)</code></pre>
  `,
  answers: [
    "2 * Hcc<br>Welcome to + Hcc",
    "Hcc Hcc<br>Welcome to Hcc",
    "2 * s2<br>s1 + s2",
    "HccHcc<br>Welcome to Hcc",
    "Hcc * Hcc<br>Welcome to Hcc"
  ],
  correct: "HccHcc<br>Welcome to Hcc",
  explanation: `
  Multiplying a string by an integer repeats the string.<br><br>

  <code>2 * s2</code> means:<br>
  <code>2 * "Hcc"</code> → <strong>HccHcc</strong><br><br>

  The <code>+</code> operator concatenates strings:<br>
  <code>s1 + s2</code> → <code>"Welcome to " + "Hcc"</code> → <strong>Welcome to Hcc</strong><br><br>

  Therefore, the output is:<br><br>

  <strong>HccHcc</strong><br>
  <strong>Welcome to Hcc</strong>
`
},
{
  type: "input",
  question: "A(n) __________ loop usually occurs when the programmer does not include code inside the loop that makes the test condition false.",
  correct: ["infinite"],
  explanation: `
  An <strong>infinite loop</strong> continues running forever because its condition never becomes false.<br><br>

  This usually happens when the loop variable is never updated or the terminating condition is never reached.<br><br>

  Example:<br>

  <pre><code class="language-python">while x > 0:
    print(x)</code></pre>

  Since <code>x</code> is never changed, the condition <code>x > 0</code> remains true forever.<br><br>

  Therefore, the correct answer is <strong>infinite</strong>.
`
},
{
  type: "radio",
  question: `
    What will be displayed after the following code is executed?<br><br>

    <pre><code class="language-python">total = 0

for count in range(1, 4):
    total += count
    print(total)</code></pre>
  `,
  answers: [
    "1\n3\n6",
    "6",
    "1 4",
    "5"
  ],
  correct: "1\n3\n6",
  explanation: `
  <code>range(1, 4)</code> generates the values <strong>1, 2, 3</strong>.<br><br>

  Iteration 1:<br>
  total = 0 + 1 = <strong>1</strong><br><br>

  Iteration 2:<br>
  total = 1 + 2 = <strong>3</strong><br><br>

  Iteration 3:<br>
  total = 3 + 3 = <strong>6</strong><br><br>

  Since <code>print(total)</code> is inside the loop, the output is:<br><br>

  <pre><code>1
3
6</code></pre>
`
},
{
  type: "radio",
  question: `
    What are the values that the variable <span class="keyword">num</span> contains through the iterations of the following <span class="keyword">for</span> loop?<br><br>

    <pre><code class="language-python">for num in range(2, 9, 2):</code></pre>
  `,
  answers: [
    "2, 3, 4, 5, 6, 7, 8, 9",
    "2, 4, 6, 8",
    "2, 5, 8",
    "1, 3, 5, 7, 9"
  ],
  correct: "2, 4, 6, 8",
  explanation: `
  The <code>range(start, stop, step)</code> function generates numbers beginning at the <strong>start</strong> value, increasing by the <strong>step</strong>, and stopping <strong>before</strong> the <strong>stop</strong> value.<br><br>

  <code>range(2, 9, 2)</code> produces:<br><br>

  <pre><code>2
4
6
8</code></pre>

  The value <code>9</code> is not included because the stop value is exclusive.<br><br>

  Therefore, the correct answer is <strong>2, 4, 6, 8</strong>.
`
},
{
  type: "radio",
  question: `
    The following statement adds 1 to the variable <span class="keyword">count</span>:<br><br>

    <pre><code class="language-python">count += 1</code></pre>
  `,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  The operator <code>+=</code> adds a value to the current value of a variable and stores the result back in that variable.<br><br>

  So:<br>
  <code>count += 1</code><br><br>

  is equivalent to:<br>
  <code>count = count + 1</code><br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "matching",
  question: `
    Given the following function definition:<br><br>

    <pre><code class="language-python">def foo(x = 1, y = 2):
    print(x, y)</code></pre>

    Match the following function calls with the output displayed:
  `,
  pairs: [
    {
      left: "foo(3, 4)",
      right: "3 4"
    },
    {
      left: "foo(y = 5)",
      right: "1 5"
    },
    {
      left: "foo()",
      right: "1 2"
    },
    {
      left: "foo(x = 6)",
      right: "6 2"
    }
  ],
  explanation: `
  The function has default parameter values:<br><br>

  <code>x = 1</code><br>
  <code>y = 2</code><br><br>

  <strong>foo(3, 4)</strong> supplies both arguments → <strong>3 4</strong><br><br>

  <strong>foo(y = 5)</strong> changes only <code>y</code>, while <code>x</code> keeps its default value → <strong>1 5</strong><br><br>

  <strong>foo()</strong> uses both default values → <strong>1 2</strong><br><br>

  <strong>foo(x = 6)</strong> changes only <code>x</code>, while <code>y</code> keeps its default value → <strong>6 2</strong>.
`
},
{
  type: "radio",
  question: "Look at the program below. Notice the global variable called <span class='keyword'>myVar</span>. What is the output from <strong>Print Line 1</strong> and <strong>Print Line 2</strong>?",
  code: `# Global variable declared OUTSIDE of all functions
myVar = 10

# Function called showIt()
def showIt():
    myVar = 100
    print(myVar)      # Print Line 1

# Program calls showIt() function and then calls print
showIt()
print(myVar)          # Print Line 2`,
  answers: [
    "100<br>10",
    "10<br>10",
    "10<br>100",
    "100<br>100"
  ],
  correct: "100<br>10",
  explanation: `
The variable <span class="keyword">myVar</span> outside the function is a <strong>global variable</strong> with the value <strong>10</strong>.<br><br>

Inside <span class="keyword">showIt()</span>, a new <strong>local variable</strong> named <span class="keyword">myVar</span> is created and assigned the value <strong>100</strong>.<br><br>

<strong>Print Line 1</strong> prints the local variable, so the output is <strong>100</strong>.<br><br>

When the function ends, the local variable disappears. The global variable is still <strong>10</strong>, so <strong>Print Line 2</strong> outputs <strong>10</strong>.<br><br>

Therefore, the correct answer is:<br>
<strong>100</strong><br>
<strong>10</strong>.
`
},
{
  type: "radio",
  question: "Given a list variable <span class='keyword'>lst = [1, 2, 3, 4]</span>. After the following statement is executed, the variable <span class='keyword'>lst</span> will be equal to ________.",
  code: `lst = lst[1 : len(lst)] + lst[:1]`,
  answers: [
    "[1, 2, 3, 4]",
    "[4, 3, 2, 1]",
    "[2, 3, 4]",
    "[2, 3, 4, 1]"
  ],
  correct: "[2, 3, 4, 1]",
  explanation: `
The original list is:<br>
<strong>[1, 2, 3, 4]</strong><br><br>

<span class="keyword">lst[1 : len(lst)]</span> takes all elements starting from index <strong>1</strong> up to the end of the list:<br>
<strong>[2, 3, 4]</strong><br><br>

<span class="keyword">lst[:1]</span> takes the first element only:<br>
<strong>[1]</strong><br><br>

The <span class="keyword">+</span> operator concatenates the two lists:<br>
<strong>[2, 3, 4] + [1]</strong><br><br>

Result:<br>
<strong>[2, 3, 4, 1]</strong>.<br><br>

Therefore, the correct answer is <strong>[2, 3, 4, 1]</strong>.
`
},
{
  type: "radio",
  question: `
    What will be the value of the variable <span class="keyword">list</span> after the following code executes?<br><br>

    <pre><code class="language-python">list = [1, 2, 3, 4]
list[3] = 10</code></pre>
  `,
  answers: [
    "[1, 2, 10, 4]",
    "[1, 10, 10, 10]",
    "[1, 2, 3, 10]"
  ],
  correct: "[1, 2, 3, 10]",
  explanation: `
  Python lists use <strong>zero-based indexing</strong>.<br><br>

  The indexes are:<br>
  <code>0 → 1</code><br>
  <code>1 → 2</code><br>
  <code>2 → 3</code><br>
  <code>3 → 4</code><br><br>

  Therefore, <code>list[3] = 10</code> replaces the fourth element, <code>4</code>, with <code>10</code>.<br><br>

  The final list is <strong>[1, 2, 3, 10]</strong>.
`
},
{
  type: "radio",
  question: `
    What is the output of the following code?<br><br>

    <pre><code class="language-python">def foo(array, y):
    x = 0
    for i in range(y):
        x += array[i]
    print(x)

list = [10, 20, 30]
foo(list, 3)</code></pre>
  `,
  answers: [
    "0",
    "6",
    "60",
    "3"
  ],
  correct: "60",
  explanation: `
  The function loops through the first <strong>3</strong> elements of the list.<br><br>

  The list is:<br>
  <code>[10, 20, 30]</code><br><br>

  The calculations are:<br>
  <code>x = 0 + 10 = 10</code><br>
  <code>x = 10 + 20 = 30</code><br>
  <code>x = 30 + 30 = 60</code><br><br>

  Therefore, <code>print(x)</code> displays <strong>60</strong>.
`
},
{
  type: "matching",
  question: `
    Match the following list slicing print statements, given:<br><br>

    <pre><code class="language-python">list1 = [2, 3, 5, 7, 9, 1]</code></pre>
  `,
  pairs: [
    {
      left: "print(list1[2 : 4])",
      right: "[5, 7]"
    },
    {
      left: "print(list1[1 : 2])",
      right: "[3]"
    },
    {
      left: "print(list1[3: ])",
      right: "[7, 9, 1]"
    },
    {
      left: "print(list1[1 : -3])",
      right: "[3, 5]"
    },
    {
      left: "print(list1[0 : 5 : 2])",
      right: "[2, 5, 9]"
    },
    {
      left: "print(list1[-4 : -1])",
      right: "[5, 7, 9]"
    }
  ],
  explanation: `
  Python slicing uses the form <code>list[start : stop : step]</code>.<br><br>

  The <strong>start</strong> index is included, while the <strong>stop</strong> index is excluded.<br><br>

  Negative indexes count from the end of the list.<br><br>

  Therefore:<br>
  <code>list1[2:4]</code> → <strong>[5, 7]</strong><br>
  <code>list1[1:2]</code> → <strong>[3]</strong><br>
  <code>list1[3:]</code> → <strong>[7, 9, 1]</strong><br>
  <code>list1[1:-3]</code> → <strong>[3, 5]</strong><br>
  <code>list1[0:5:2]</code> → <strong>[2, 5, 9]</strong><br>
  <code>list1[-4:-1]</code> → <strong>[5, 7, 9]</strong>.
`
},
{
  type: "radio",
  question: `
    Suppose <code>table = []</code>. After the statements below are executed, the table elements will be <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code>.<br><br>

    <pre><code class="language-python">table.append([1, 2, 3])
table.append([4, 5])
table.append([6, 7, 8, 9])</code></pre>
  `,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
  The <code>append()</code> method adds its argument as <strong>one single element</strong> to the list.<br><br>

  After these statements, <code>table</code> becomes:<br><br>

  <code>[[1, 2, 3], [4, 5], [6, 7, 8, 9]]</code><br><br>

  It does <strong>not</strong> become a flat list such as:<br>
  <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code>.<br><br>

  Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "matching",
  question: `
    Suppose <code>m = [[1, 2, 3, 4], [5, 6], [7, 8, 9]]</code>, match the following lengths:
  `,
  pairs: [
    {
      left: "len(m[1])",
      right: "2"
    },
    {
      left: "len(m)",
      right: "3"
    },
    {
      left: "len(m[0])",
      right: "4"
    },
    {
      left: "len(m[3])",
      right: "ERROR"
    },
    {
      left: "len(m[0][0])",
      right: "ERROR"
    }
  ],
  explanation: `
  The list <code>m</code> contains three inner lists, so:<br><br>

  <code>len(m)</code> → <strong>3</strong><br>
  <code>len(m[0])</code> → <strong>4</strong><br>
  <code>len(m[1])</code> → <strong>2</strong><br><br>

  <code>m[3]</code> does not exist because valid indexes are <code>0</code>, <code>1</code>, and <code>2</code>, so <code>len(m[3])</code> causes an <strong>IndexError</strong>.<br><br>

  <code>m[0][0]</code> is the integer <code>1</code>. Since integers do not have a length, <code>len(m[0][0])</code> causes a <strong>TypeError</strong>.<br><br>

  Therefore, both of the last two expressions result in <strong>ERROR</strong>.
`
},
{
  type: "radio",
  question: `
    Which of the following code will initialize a 3 × 2 matrix (3 rows and 2 columns) with random values between 0 and 99?<br><br>

    Assume:<br>
    <code>matrix = []</code><br>
    <code>ROW = 3</code><br>
    <code>COL = 2</code>
  `,
  answers: [
    `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(0)</code></pre>`,

    `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(random.randint(100))</code></pre>`,

    `<pre><code class="language-python">for c in range(COL):
    matrix.append([])
    for r in range(ROW):
        matrix[c].append(random.randint(0, 99))</code></pre>`,

    `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(random.randint(0, 99))</code></pre>`
  ],
  correct: `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(random.randint(0, 99))</code></pre>`,
  explanation: `
  The outer loop must run once for each <strong>row</strong>.<br><br>

  For every row, an empty list is added with:<br>
  <code>matrix.append([])</code><br><br>

  The inner loop then runs once for each <strong>column</strong> and appends a random integer from <code>0</code> through <code>99</code>:<br>
  <code>random.randint(0, 99)</code><br><br>

  Therefore, the correct structure is:<br><br>

  <pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(random.randint(0, 99))</code></pre>
`
},
{
  type: "radio",
  question: `
    Suppose <code>table = [[1, 2], [1, 2]]</code>. What will be the output of the following code?<br><br>

    <pre><code class="language-python">table[0] = 0
print(table)</code></pre>
  `,
  answers: [
    "[[0, 2], [0, 2]]",
    "[[0], [1, 2]]",
    "[0, 0, 0, 0]",
    "[[0], [0]]"
  ],
  correct: "[[0], [1, 2]]",
  explanation: `
  The original list is:<br>
  <code>[[1, 2], [1, 2]]</code><br><br>

  The statement <code>table[0] = 0</code> replaces the entire first inner list with the integer <code>0</code>.<br><br>

  So the actual result in Python is:<br>
  <code>[0, [1, 2]]</code><br><br>

  Therefore, if your course answer shows <strong>[[0], [1, 2]]</strong>, that answer is conceptually treating the first element as a one-item list, but Python itself would output <strong>[0, [1, 2]]</strong>.
`
},
{
  type: "radio",
  question: "When you open a file for writing, if a file already exists, the file will be destroyed.",
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
  Opening a file in write mode using <code>"w"</code> will overwrite the existing contents of the file.<br><br>

  For example:<br>
  <code>open("data.txt", "w")</code><br><br>

  If <code>data.txt</code> already exists, its previous contents are erased before new data is written.<br><br>

  Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: "Which step creates a connection between a file and a program?",
  answers: [
    "read the file",
    "process the file",
    "open the file",
    "close the file"
  ],
  correct: "open the file",
  explanation: `
  Before a program can read from or write to a file, it must first <strong>open the file</strong>.<br><br>

  Opening the file creates the connection between the program and the file on disk.<br><br>

  After the file is opened, the program can read, write, or process its contents.<br><br>

  Therefore, the correct answer is <strong>open the file</strong>.
`
},
{
  type: "matching",
  question: `
    Given the dictionary:<br><br>

    <pre><code class="language-python">d = {"red":4, "blue":1, "green":14, "yellow":2}</code></pre>

    Match the following print statements:
  `,
  pairs: [
    {
      left: `print(d["red"])`,
      right: "4"
    },
    {
      left: "print(list(d.keys()))",
      right: "['red', 'blue', 'green', 'yellow']"
    },
    {
      left: "print(list(d.values()))",
      right: "[4, 1, 14, 2]"
    },
    {
      left: `print(d.get("blue"))`,
      right: "1"
    },
    {
      left: `print(d.get("purple"))`,
      right: "None"
    },
    {
      left: `print("purple" in d)`,
      right: "False"
    },
    {
      left: `print("blue" in d)`,
      right: "True"
    }
  ],
  explanation: `
    <code>d["red"]</code> → <strong>4</strong><br><br>

    <code>list(d.keys())</code> → <strong>['red', 'blue', 'green', 'yellow']</strong><br><br>

    <code>list(d.values())</code> → <strong>[4, 1, 14, 2]</strong><br><br>

    <code>d.get("blue")</code> → <strong>1</strong><br><br>

    <code>d.get("purple")</code> → <strong>None</strong> because the key does not exist.<br><br>

    <code>"purple" in d</code> → <strong>False</strong><br>
    <code>"blue" in d</code> → <strong>True</strong>.
  `
},

{
  type: "radio",
  question: `
    What will be displayed after the following code executes?<br><br>

    <pre><code class="language-python">cities = {'GA':'Atlanta', 'NY':'Albany', 'CA':'San Diego'}

if 'FL' in cities:
    del cities['FL']
    cities['FL'] = 'Tallahassee'

print(cities)</code></pre>
  `,
  answers: [
    "KeyError",
    "{'GA':'Atlanta', 'NY':'Albany', 'CA':'San Diego'}",
    "{'GA':'Atlanta', 'NY':'Albany', 'CA':'San Diego', 'FL':'Tallahassee'}",
    "{'FL':'Tallahassee'}"
  ],
  correct: "{'GA':'Atlanta', 'NY':'Albany', 'CA':'San Diego'}",
  explanation: `
  The dictionary does <strong>not</strong> contain the key <code>"FL"</code>.<br><br>

  Therefore, the condition <code>if 'FL' in cities:</code> evaluates to <strong>False</strong>, and none of the statements inside the <code>if</code> block execute.<br><br>

  The dictionary remains unchanged, so the output is:<br><br>

  <code>{'GA':'Atlanta', 'NY':'Albany', 'CA':'San Diego'}</code>
`
},
{
  type: "radio",
  question: "Which of the following does not apply to sets?",
  answers: [
    "The stored elements can be of different data types.",
    "The elements are unordered.",
    "All the elements must be unique; you cannot have two elements with the same value.",
    "The elements are in pairs."
  ],
  correct: "The elements are in pairs.",
  explanation: `
A <code>set</code> stores unique, unordered elements.<br><br>

It can contain different data types, and duplicate values are not allowed.<br><br>

The statement <strong>"The elements are in pairs."</strong> describes a <code>dictionary</code>, where data is stored as <code>key : value</code> pairs, not a set.
`
},



];
