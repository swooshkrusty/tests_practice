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
  question: `
Look at the program below. Notice the global variable called
<span class="keyword">myVar</span>.
What is the output from <strong>Print Line 1</strong> and <strong>Print Line 2</strong>?

<pre><code class="language-python"># Global variable declared OUTSIDE of all functions
myVar = 10

# Function called showIt()
def showIt():
    myVar = 100
    print(myVar)      # Print Line 1

# Program calls showIt() function and then calls print
showIt()
print(myVar)          # Print Line 2</code></pre>
`,
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
  question: `
Given a list variable <span class="keyword">lst = [1, 2, 3, 4]</span>.
After the following statement is executed, the variable
<span class="keyword">lst</span> will be equal to ________.

<pre><code class="language-python">lst = lst[1 : len(lst)] + lst[:1]</code></pre>
`,
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
    Which of the following code will initialize a 3 × 2 matrix
    (3 rows and 2 columns) with random values between 0 and 99?<br><br>

    Assume:<br>
    <code>matrix = []</code><br>
    <code>ROW = 3</code><br>
    <code>COL = 2</code>
  `,

  answers: [
    {
      text: `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(0)</code></pre>`,
      value: "option1"
    },

    {
      text: `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(random.randint(100))</code></pre>`,
      value: "option2"
    },

    {
      text: `<pre><code class="language-python">for c in range(COL):
    matrix.append([])
    for r in range(ROW):
        matrix[c].append(random.randint(0, 99))</code></pre>`,
      value: "option3"
    },

    {
      text: `<pre><code class="language-python">for r in range(ROW):
    matrix.append([])
    for c in range(COL):
        matrix[r].append(random.randint(0, 99))</code></pre>`,
      value: "option4"
    }
  ],

  correct: "option4",

  explanation: `
    The outer loop creates the <strong>3 rows</strong>.<br><br>

    For each row, <code>matrix.append([])</code> creates an empty list.<br><br>

    The inner loop runs <strong>2 times</strong> because <code>COL = 2</code>.<br><br>

    <code>random.randint(0, 99)</code> generates a random integer from
    <strong>0 through 99</strong>.<br><br>

    Therefore, the correct answer is the fourth code block.
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
{
  type: "radio",
  question: `
(True or False) The gear icon at top right corner of each tool in the Anaconda Navigator is to allow you to update application, remove application or install a particular version of that application.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The gear icon in Anaconda Navigator provides application management options.

Depending on the application and available versions, it can be used to:

<ul>
  <li>update the application,</li>
  <li>remove the application,</li>
  <li>install a particular version of the application.</li>
</ul>

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
Which of the following is True about Jupyter and Jupyter Notebook?
`,
  answers: [
    "Jupyter is an open-source project. data science and scientific computing using different programming languages.",
    "All of these",
    "Jupyter supports interactive data science and scientific computing using different programming languages.",
    "The Jupyter Notebook is a web-based application.",
    "The Jupyter Notebook is for creating and sharing computational documents."
  ],
  correct: "All of these",
  explanation: `
All of the statements describe Jupyter or Jupyter Notebook correctly.

<ul>
  <li><strong>Jupyter</strong> is an open-source project.</li>
  <li>It supports interactive data science and scientific computing with multiple programming languages.</li>
  <li><strong>Jupyter Notebook</strong> is a web-based application.</li>
  <li>It is used to create and share computational documents containing code, text, equations, and output.</li>
</ul>

Therefore, the correct answer is <strong>All of these</strong>.
`
},
{
  type: "checkbox",
  question: `
(Select all that apply) Which of the following specialized tools that Python has for handling numerical arrays?
`,
  answers: [
    "Pandas",
    "NumPy",
    "Seaborn",
    "Matplotlib"
  ],
  correct: [
    "Pandas",
    "NumPy"
  ],
  explanation: `
For this course question, the correct choices are:

<ul>
  <li><strong>NumPy</strong></li>
  <li><strong>Pandas</strong></li>
</ul>

NumPy provides efficient numerical arrays and array operations.

Pandas builds on NumPy and provides powerful data structures for working with numerical and tabular data.

Matplotlib and Seaborn are primarily visualization libraries.

Therefore, select <strong>Pandas</strong> and <strong>NumPy</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) NumPy arrays are like Python's built-in <code>list</code> type.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
NumPy arrays are similar to Python's built-in <code>list</code> type because both can store collections of values and support indexing.

However, NumPy arrays are designed specifically for efficient numerical computation and usually contain elements of the same data type.

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
Which of the following is not the correct statement to create a NumPy array?
<br>
<em>(Assume NumPy is imported using <code>import numpy as np</code>)</em>
`,
  answers: [
    {
      text: `<code>np.array([1.1, 2.2, 3.3])</code>`,
      value: "option1"
    },
    {
      text: `<code>np.array([3.14, 1, 2])</code>`,
      value: "option2"
    },
    {
      text: `<code>np.array([1, 2, 3])</code>`,
      value: "option3"
    },
    {
      text: `<code>np.array([True, "2", 3.0, 4])</code>`,
      value: "option4"
    }
  ],
  correct: "option4",
  explanation: `
For this course question, the intended incorrect choice is:

<pre><code class="language-python">np.array([True, "2", 3.0, 4])</code></pre>

This expression mixes several different data types:

<ul>
  <li><code>True</code> — Boolean</li>
  <li><code>"2"</code> — string</li>
  <li><code>3.0</code> — float</li>
  <li><code>4</code> — integer</li>
</ul>

NumPy arrays are generally designed to contain elements of a common data type.

<strong>Technical note:</strong> NumPy can actually create this array by converting the elements to a common compatible data type, such as strings. However, for this quiz, the expected answer is the mixed-type example.
`
},
{
  type: "radio",
  question: `
(True or False) Unlike Python lists, NumPy arrays can only contain data of the same type.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
NumPy arrays use a single <strong>data type (dtype)</strong> for their elements.

If different types are provided when creating an array, NumPy usually converts them to a common compatible type.

For example:

<pre><code class="language-python">np.array([1, 2.5, 3])</code></pre>

The integers are converted to floating-point values so the array has one consistent dtype.

Therefore, for this course question, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) The following code creates a length-10 integer array filled with 0s.

<pre><code class="language-python">import numpy as np
np.tens(0)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

NumPy does not have a function called:

<pre><code>np.tens(0)</code></pre>

To create a length-10 integer array filled with zeros, you can use:

<pre><code class="language-python">np.zeros(10, dtype=int)</code></pre>

This produces:

<pre><code>[0 0 0 0 0 0 0 0 0 0]</code></pre>

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x2 = np.array([[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]])

x2[0, 0] = 3.14

print(x2[0, 0], x2[1, -1], x2[2, 0])</code></pre>
`,
  answers: [
    "1 4 7",
    "3.14 6 7",
    "1 6 7",
    "3 6 7"
  ],
  correct: "3 6 7",
  explanation: `
The NumPy array is initially created from integers, so its data type is <strong>integer</strong>.

When:

<pre><code class="language-python">x2[0, 0] = 3.14</code></pre>

is executed, NumPy converts <code>3.14</code> to an integer because the array has an integer dtype.

So:

<pre><code>x2[0, 0] = 3
x2[1, -1] = 6
x2[2, 0] = 7</code></pre>

Therefore, the output is:

<pre><code>3 6 7</code></pre>

The correct answer is <strong>3 6 7</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x2 = np.array([[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]])

print(x2[:3, ::2])</code></pre>
`,
  answers: [
    "[[2 3],\n[5 6],\n[8 9]]",
    "[[1 3],\n[4 6],\n[7 9]]",
    "[[3, 2]]",
    "[[1 2 3],\n[4 5]]"
  ],
  correct: "[[1 3],\n[4 6],\n[7 9]]",
  explanation: `
The slice:

<pre><code class="language-python">x2[:3, ::2]</code></pre>

means:

<ul>
  <li><code>:3</code> → take rows from the beginning up to row index 3 (not including 3), so all three rows are selected.</li>
  <li><code>::2</code> → take every second column, starting from column 0.</li>
</ul>

The selected column indexes are:

<pre><code>0, 2</code></pre>

So the result is:

<pre><code>[[1 3]
 [4 6]
 [7 9]]</code></pre>

Therefore, the correct answer is:

<strong>[[1 3], [4 6], [7 9]]</strong>.
`
},
{
  type: "matching",
  question: `
Match the following <em>(Assume <code>x2</code> is a 3x4 array)</em>:
`,
  pairs: [
    {
      left: "print(x2[0])",
      right: "prints first row of x2"
    },
    {
      left: "print(x2[0, :])",
      right: "prints first row of x2"
    },
    {
      left: "print(x2[:, 0])",
      right: "prints first column of x2"
    },
    {
      left: "print(x2[:2, :3])",
      right: "prints first two rows & three columns"
    },
    {
      left: "print(x2[:3, ::2])",
      right: "prints first three rows, every second column"
    }
  ],
  explanation: `
NumPy uses the general indexing format:

<pre><code>x2[rows, columns]</code></pre>

The matches are:

<ul>
  <li><code>x2[0]</code> → first row</li>
  <li><code>x2[0, :]</code> → first row, all columns</li>
  <li><code>x2[:, 0]</code> → all rows, first column</li>
  <li><code>x2[:2, :3]</code> → first two rows and first three columns</li>
  <li><code>x2[:3, ::2]</code> → first three rows and every second column</li>
</ul>
`
},
{
  type: "matching",
  question: `
Given <code>x = np.arange(1, 5)</code>. Match the following statements with the output:
`,
  pairs: [
    {
      left: "np.add.accumulate(x)",
      right: "[1 3 6 10]"
    },
    {
      left: "np.multiply.reduce(x)",
      right: "24"
    },
    {
      left: "np.add.reduce(x)",
      right: "10"
    },
    {
      left: "np.multiply.accumulate(x)",
      right: "[1 2 6 24]"
    }
  ],
  explanation: `
First:

<pre><code class="language-python">x = np.arange(1, 5)</code></pre>

creates:

<pre><code>[1 2 3 4]</code></pre>

The operations work as follows:

<ul>
  <li><code>np.add.accumulate(x)</code> → cumulative sums → <strong>[1 3 6 10]</strong></li>
  <li><code>np.multiply.reduce(x)</code> → 1 × 2 × 3 × 4 → <strong>24</strong></li>
  <li><code>np.add.reduce(x)</code> → 1 + 2 + 3 + 4 → <strong>10</strong></li>
  <li><code>np.multiply.accumulate(x)</code> → cumulative products → <strong>[1 2 6 24]</strong></li>
</ul>
`
},
{
  type: "matching",
  question: `
Match the following arithmetic operators to equivalent ufunc:
`,
  pairs: [
    {
      left: "%",
      right: "np.mod"
    },
    {
      left: "/",
      right: "np.divide"
    },
    {
      left: "**",
      right: "np.power"
    },
    {
      left: "//",
      right: "np.floor_divide"
    },
    {
      left: "*",
      right: "np.multiply"
    }
  ],
  explanation: `
NumPy provides universal functions (ufuncs) that correspond to Python arithmetic operators.

<ul>
  <li><code>%</code> → <strong>np.mod</strong></li>
  <li><code>/</code> → <strong>np.divide</strong></li>
  <li><code>**</code> → <strong>np.power</strong></li>
  <li><code>//</code> → <strong>np.floor_divide</strong></li>
  <li><code>*</code> → <strong>np.multiply</strong></li>
</ul>

These NumPy functions perform the equivalent element-wise arithmetic operations on arrays.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will display <code>[1 0 2 0 4 0]</code>, but the memory savings from the use of the <code>out</code> argument in Code A can be significant with very large arrays.

<strong>Code A:</strong>

<pre><code class="language-python">import numpy as np
x = np.arange(3)
y = np.zeros(6, dtype=int)
np.power(2, x, out=y[::2])
print(y)</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">import numpy as np
x = np.arange(3)
y = np.zeros(6, dtype=int)
y[::2] = 2 ** x
print(y)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
Both code fragments produce:

<pre><code>[1 0 2 0 4 0]</code></pre>

Since:

<pre><code class="language-python">x = [0, 1, 2]
2 ** x = [1, 2, 4]</code></pre>

these values are placed into every second position of <code>y</code>.

In <strong>Code A</strong>:

<pre><code class="language-python">np.power(2, x, out=y[::2])</code></pre>

the result is written directly into the specified portion of <code>y</code>.

In <strong>Code B</strong>:

<pre><code class="language-python">y[::2] = 2 ** x</code></pre>

NumPy normally creates a temporary array for <code>2 ** x</code> before assigning it to <code>y</code>.

For very large arrays, using <code>out</code> can therefore save significant memory.

The correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.array([6, 3, 4, 7])
print(np.sum(x)//np.argmax(x))</code></pre>
`,
  answers: [
    "6",
    "7",
    "2.86",
    "6.67"
  ],
  correct: "6",
  explanation: `
First:

<pre><code class="language-python">np.sum(x)</code></pre>

returns:

<pre><code>6 + 3 + 4 + 7 = 20</code></pre>

Next:

<pre><code class="language-python">np.argmax(x)</code></pre>

returns the <strong>index</strong> of the largest value.

The largest value is <code>7</code>, which is at index:

<pre><code>3</code></pre>

The expression uses <strong>floor division</strong>:

<pre><code>20 // 3 = 6</code></pre>

Therefore, the correct answer is <strong>6</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Aggregations are a set of rules by which NumPy lets you apply binary operations (e.g., addition, subtraction, multiplication, etc.) between arrays of different sizes and shapes.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement describes <strong>broadcasting</strong>, not aggregation.

<strong>Broadcasting</strong> is the set of rules NumPy uses to apply operations between arrays of different shapes and sizes.

Examples include:

<pre><code class="language-python">a + b
a - b
a * b</code></pre>

when the shapes are compatible.

<strong>Aggregations</strong> are operations that summarize data, such as:

<pre><code class="language-python">np.sum()
np.min()
np.max()
np.mean()</code></pre>

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) The code below will raise an error.

<pre><code class="language-python">import numpy as np

M = np.ones((3, 2))
a = np.arange(1, 4)

print(M + a)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The shapes are:

<pre><code>M.shape = (3, 2)
a.shape = (3,)</code></pre>

For NumPy broadcasting, dimensions are compared starting from the right.

Here NumPy tries to match:

<pre><code>2  vs  3</code></pre>

These dimensions are not equal, and neither one is <code>1</code>.

Therefore, the arrays cannot be broadcast together, and NumPy raises a <strong>ValueError</strong>.

The correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will display <code>[1, 2, 3]</code>.

<strong>Code A:</strong>

<pre><code class="language-python">import numpy as np
x = np.arange(3)
y = np.ones(3, dtype=int)
print(x + y)</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">import numpy as np
x = np.arange(3)
print(x + 1)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(3)</code></pre>

creates:

<pre><code>[0 1 2]</code></pre>

In <strong>Code A</strong>:

<pre><code class="language-python">y = np.ones(3, dtype=int)</code></pre>

creates:

<pre><code>[1 1 1]</code></pre>

Therefore:

<pre><code>[0 1 2] + [1 1 1] = [1 2 3]</code></pre>

In <strong>Code B</strong>, NumPy uses broadcasting:

<pre><code>[0 1 2] + 1 = [1 2 3]</code></pre>

So both Code A and Code B display:

<pre><code>[1 2 3]</code></pre>

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Given:

<pre><code class="language-python">A = np.array([1, 0, 1], dtype=bool)
B = np.array([1, 1, 1], dtype=bool)</code></pre>

Both Code A and Code B print statements will display the same result.

<strong>Code A:</strong>

<pre><code class="language-python">print(A | B)</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">print(A or B)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

In <strong>Code A</strong>:

<pre><code class="language-python">A | B</code></pre>

performs an element-wise logical OR:

<pre><code>[ True  True  True ]</code></pre>

But in <strong>Code B</strong>:

<pre><code class="language-python">A or B</code></pre>

Python tries to determine the truth value of the entire NumPy array.

A NumPy array with multiple elements does not have one unambiguous truth value, so this raises a <strong>ValueError</strong>.

Therefore, Code A and Code B do <strong>not</strong> display the same result.

The correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) <code>&</code> and <code>|</code> perform a single boolean evaluation on an entire object, while <code>or</code> and <code>and</code> perform multiple boolean evaluations on the content (the individual bits or bytes) of an object.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong> because it reverses the behavior of these operators.

For NumPy arrays:

<pre><code>&
|</code></pre>

perform element-wise operations on the contents of the arrays.

For example:

<pre><code class="language-python">A & B
A | B</code></pre>

operate on corresponding elements.

In contrast:

<pre><code>and
or</code></pre>

perform a single truth-value evaluation on the entire object.

For NumPy arrays with more than one element, this usually raises a <strong>ValueError</strong> because the truth value of the whole array is ambiguous.

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) <code>&</code> and <code>|</code> perform a single boolean evaluation on an entire object, while <code>or</code> and <code>and</code> perform multiple boolean evaluations on the content (the individual bits or bytes) of an object.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong> because it reverses the behavior of these operators.

For NumPy arrays:

<pre><code>&
|</code></pre>

perform element-wise operations on the contents of the arrays.

For example:

<pre><code class="language-python">A & B
A | B</code></pre>

operate on corresponding elements.

In contrast:

<pre><code>and
or</code></pre>

perform a single truth-value evaluation on the entire object.

For NumPy arrays with more than one element, this usually raises a <strong>ValueError</strong> because the truth value of the whole array is ambiguous.

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(12).reshape((3, 4))
r = np.array([0, 1, 2])
c = np.array([1, 2, 3])

print(x[r, c])</code></pre>
`,
  answers: [
    "[1 6 11]",
    "[[0 1 2]\n [1 2 3]]",
    "None of these",
    "[[0 4 8]\n [1 6 11]]",
    "[4 5 10]"
  ],
  correct: "[1 6 11]",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(12).reshape((3, 4))</code></pre>

creates:

<pre><code>[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]</code></pre>

The arrays:

<pre><code>r = [0, 1, 2]
c = [1, 2, 3]</code></pre>

are used as pairs of row and column indexes.

So NumPy selects:

<pre><code>x[0, 1] = 1
x[1, 2] = 6
x[2, 3] = 11</code></pre>

Therefore:

<pre><code class="language-python">x[r, c]</code></pre>

produces:

<pre><code>[1 6 11]</code></pre>

The correct answer is <strong>[1 6 11]</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(10)
i = np.array([2, 4, 6])

x[i] = 9
x[i] += 1

print(x)</code></pre>
`,
  answers: [
    "[10 10 10 10 10 10 10 10 10 10]",
    "[1 1 1 1 1 1 1 1 1 1]",
    "[0 10 2 10 4 10 6 7 8 9]",
    "[0 1 10 3 10 5 10 7 8 9]"
  ],
  correct: "[0 1 10 3 10 5 10 7 8 9]",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(10)</code></pre>

creates:

<pre><code>[0 1 2 3 4 5 6 7 8 9]</code></pre>

The index array is:

<pre><code class="language-python">i = np.array([2, 4, 6])</code></pre>

Then:

<pre><code class="language-python">x[i] = 9</code></pre>

sets elements at indexes <strong>2, 4, and 6</strong> to 9:

<pre><code>[0 1 9 3 9 5 9 7 8 9]</code></pre>

Next:

<pre><code class="language-python">x[i] += 1</code></pre>

adds 1 to those same elements:

<pre><code>[0 1 10 3 10 5 10 7 8 9]</code></pre>

Therefore, the correct answer is:

<strong>[0 1 10 3 10 5 10 7 8 9]</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will sort each row of <code>X</code> in ascending order.

<strong>Code A:</strong>

<pre><code class="language-python">import numpy as np

rng = np.random.default_rng(seed=42)
X = rng.integers(0, 10, (4, 6))
np.sort(X, axis=0)</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">import numpy as np

rng = np.random.default_rng(seed=42)
X = rng.integers(0, 10, (4, 6))
np.sort(X, axis=1)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

In NumPy:

<pre><code class="language-python">np.sort(X, axis=0)</code></pre>

sorts values <strong>down each column</strong>.

But:

<pre><code class="language-python">np.sort(X, axis=1)</code></pre>

sorts values <strong>across each row</strong>.

Therefore:

<ul>
  <li><strong>Code A</strong> sorts each column.</li>
  <li><strong>Code B</strong> sorts each row.</li>
</ul>

So both codes do not sort each row.

The correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
The result of the code below is __________.

<pre><code class="language-python">import numpy as np

x = np.array([8, 2, 3, 1, 6, 5, 9])
np.partition(x, 3)</code></pre>
`,
  answers: [
    "an array where the first three values are the three smallest in the array, and the remaining array positions contain the remaining values. Within the two partitions, the elements have arbitrary order",
    "an array where the last three values are the three smallest in the array, and the remaining array positions contain the remaining values. Within the two partitions, the elements have arbitrary order.",
    "an array where the last three values are the three largest in the array, and the remaining array positions contain the remaining values. Within the two partitions, the elements have arbitrary order.",
    "an array where the first three values are the three largest in the array, and the remaining array positions contain the remaining values. Within the two partitions, the elements have arbitrary order."
  ],
  correct: "an array where the first three values are the three smallest in the array, and the remaining array positions contain the remaining values. Within the two partitions, the elements have arbitrary order",
  explanation: `
<code>np.partition(x, 3)</code> partially sorts the array around index <code>3</code>.

The element that would appear at index <code>3</code> in a fully sorted array is placed in that position.

All elements before it are smaller, and all elements after it are larger.

For:

<pre><code>[8, 2, 3, 1, 6, 5, 9]</code></pre>

the three smallest values are:

<pre><code>1, 2, 3</code></pre>

These values will appear in the first three positions, but they are not guaranteed to be internally sorted.

Likewise, the remaining values may appear in arbitrary order within the second partition.

Therefore, the correct answer is:

<strong>an array where the first three values are the three smallest in the array, and the remaining array positions contain the remaining values. Within the two partitions, the elements have arbitrary order.</strong>
`
},
{
  type: "radio",
  question: `
Given the code below:

<pre><code class="language-python">import numpy as np

name = ['Amy', 'Bob', 'Tuan']
gpa = [3.5, 4.0, 3.3]</code></pre>

Which of the following will create an empty structured array using compound data type specification?
`,
  answers: [
    {
      text: `<pre><code class="language-python">data = np.zeros(3, dtype={
    'names': ('students', 'gpa'),
    'formats': ('U10', 'f8')
})</code></pre>`,
      value: "option1"
    },
    {
      text: `<pre><code class="language-python">data = np.zeros(3, np.dtype({
    'names': ('students', 'gpa'),
    'formats': ((np.str_, 10), np.float64)
}))</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code class="language-python">data = np.zeros(3, np.dtype({
    'names': ('students', 'gpa'),
    'formats': ('U10', 'f8')
}))</code></pre>`,
      value: "option3"
    },
    {
      text: "All of these",
      value: "option4"
    }
  ],
  correct: "option4",
  explanation: `
All three code forms use NumPy compound/structured data type specifications and can be used to create a structured array.

A structured array can contain fields with different data types, such as:

<ul>
  <li><code>students</code> — string data</li>
  <li><code>gpa</code> — floating-point data</li>
</ul>

For example:

<pre><code class="language-python">dtype={
    'names': ('students', 'gpa'),
    'formats': ('U10', 'f8')
}</code></pre>

defines two named fields with different data types.

Therefore, the correct answer is <strong>All of these</strong>.
`
},
{
  type: "radio",
  question: `
NumPy's __________ and __________ arrays provide efficient storage for compound, heterogeneous data.
`,
  answers: [
    "multiple, single",
    "structured, record",
    "complex, simple",
    "unstructured, unrecord"
  ],
  correct: "structured, record",
  explanation: `
NumPy provides <strong>structured arrays</strong> and <strong>record arrays</strong> for working efficiently with compound, heterogeneous data.

These arrays can contain multiple named fields with different data types, such as:

<pre><code class="language-python">name → string
age  → integer
gpa  → float</code></pre>

Therefore, the correct answer is:

<strong>structured, record</strong>.
`
},
{
  type: "radio",
  question: `
Which of the following is NOT True about Anaconda?
`,
  answers: [
    "Anaconda is a smaller version of Miniconda.",
    "Anaconda installations are available for Windows, macOS, and Linux.",
    "Anaconda is an open-source distribution of Python/R for data science.",
    "Anaconda has a simple and powerful package manager that makes getting started with Python and Jupyter Notebooks easy."
  ],
  correct: "Anaconda is a smaller version of Miniconda.",
  explanation: `
The incorrect statement is:

<strong>Anaconda is a smaller version of Miniconda.</strong>

Actually, the relationship is the opposite.

<strong>Miniconda</strong> is the smaller, minimal version that includes Conda and Python, while <strong>Anaconda</strong> includes many additional packages and tools commonly used for data science.

The other statements are true:

<ul>
  <li>Anaconda is available for Windows, macOS, and Linux.</li>
  <li>It is a Python/R distribution commonly used for data science.</li>
  <li>It includes Conda for package and environment management.</li>
</ul>

Therefore, the correct answer is:

<strong>Anaconda is a smaller version of Miniconda.</strong>
`
},
{
  type: "radio",
  question: `
Which of the following is not True about NumPy?
`,
  answers: [
    "NumPy arrays are like Python's repetition structure (loops).",
    "NumPy arrays form the core of nearly the entire ecosystem of data science tools in Python",
    "NumPy provides an efficient interface to store and operate on dense data buffers.",
    "NumPy is short for Numerical Python"
  ],
  correct: "NumPy arrays are like Python's repetition structure (loops).",
  explanation: `
The statement that is <strong>not true</strong> is:

<strong>NumPy arrays are like Python's repetition structure (loops).</strong>

NumPy arrays are data structures used to store and process numerical data efficiently. They are not equivalent to Python repetition structures such as <code>for</code> or <code>while</code> loops.

The other statements are true:

<ul>
  <li>NumPy is fundamental to much of the Python data science ecosystem.</li>
  <li>NumPy provides efficient storage and operations on dense numerical data.</li>
  <li>NumPy stands for <strong>Numerical Python</strong>.</li>
</ul>

Therefore, the correct answer is:

<strong>NumPy arrays are like Python's repetition structure (loops).</strong>
`
},
{
  type: "radio",
  question: `
Which of the following code will create a 3x5 integer array filled with 1s?
<br>
<em>(Assume NumPy is imported using <code>import numpy as np</code>)</em>
`,
  answers: [
    "np.ones((3, 5), dtype=float)",
    "np((3, 5), ones)",
    "np.1((3, 5), dtype=int)",
    "np.ones((3, 5), dtype=int)"
  ],
  correct: "np.ones((3, 5), dtype=int)",
  explanation: `
To create an array filled with ones, NumPy provides:

<pre><code class="language-python">np.ones()</code></pre>

The shape:

<pre><code>(3, 5)</code></pre>

creates <strong>3 rows and 5 columns</strong>.

To make the elements integers, specify:

<pre><code class="language-python">dtype=int</code></pre>

Therefore, the correct statement is:

<pre><code class="language-python">np.ones((3, 5), dtype=int)</code></pre>

The correct answer is <strong>np.ones((3, 5), dtype=int)</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Python is a statically typed language unlike C or Java which are dynamically typed languages.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

Python is a <strong>dynamically typed</strong> language.

This means a variable does not need to have its type declared explicitly:

<pre><code class="language-python">x = 10
x = "hello"</code></pre>

The variable <code>x</code> can refer to values of different types at runtime.

C and Java are generally considered <strong>statically typed</strong> languages, where variable types are determined and checked more strictly before or during compilation.

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
Which of the following statement will create a 3x4 array filled with 10s?
<br>
<em>(Assume NumPy is imported using <code>import numpy as np</code>)</em>
`,
  answers: [
    "np.tens((3, 4))",
    "np.full((4, 3), 10)",
    "np.full((3, 4), 10)",
    "np.full(10, (3, 4))"
  ],
  correct: "np.full((3, 4), 10)",
  explanation: `
NumPy uses <code>np.full(shape, fill_value)</code> to create an array filled with a specified value.

For a 3x4 array filled with 10s:

<pre><code class="language-python">np.full((3, 4), 10)</code></pre>

Here:

<ul>
  <li><code>(3, 4)</code> means 3 rows and 4 columns.</li>
  <li><code>10</code> is the value placed in every element.</li>
</ul>

Therefore, the correct answer is <strong>np.full((3, 4), 10)</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B output is the same.

<strong>Code A:</strong>

<pre><code class="language-python">x = np.array([1, 2, 3])
y = np.array([3, 2, 1])
np.vstack([x, y])</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">x = np.array([1, 2, 3])
y = np.array([3, 2, 1])
np.hstack([y, x])</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The outputs are different.

<strong>Code A</strong> uses <code>np.vstack()</code>, which stacks the arrays vertically:

<pre><code>[[1 2 3]
 [3 2 1]]</code></pre>

<strong>Code B</strong> uses <code>np.hstack()</code>, which joins the one-dimensional arrays horizontally:

<pre><code>[3 2 1 1 2 3]</code></pre>

Therefore, the two outputs are not the same.

The correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will put the numbers 1 through 9 in a 3 x 3 grid.

<strong>Code A:</strong>

<pre><code class="language-python">np.array([i for i in range(1, 10)]).reshape((3, 3))</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">np.arange(1, 10).reshape(3, 3)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
Both expressions first create the numbers:

<pre><code>[1 2 3 4 5 6 7 8 9]</code></pre>

Then <code>reshape(3, 3)</code> converts those 9 values into a 3 x 3 array:

<pre><code>[[1 2 3]
 [4 5 6]
 [7 8 9]]</code></pre>

Code A creates the values using a Python list comprehension:

<pre><code class="language-python">[i for i in range(1, 10)]</code></pre>

Code B creates the same values directly with NumPy:

<pre><code class="language-python">np.arange(1, 10)</code></pre>

Therefore, both produce the same 3 x 3 grid.

The correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
Which of the following code will create the below multiplication table?

<pre><code>[[ 1  2  3  4]
 [ 2  4  6  8]
 [ 3  6  9 12]
 [ 4  8 12 16]]</code></pre>
`,
  answers: [
    {
      text: `<pre><code class="language-python">x = np.arange(1, 5)
print(np.multiply.outer(x, x))</code></pre>`,
      value: "option1"
    },
    {
      text: `<pre><code class="language-python">x = np.arange(1, 5)
print(np.multiply(x, x))</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code class="language-python">x = np.arange(1, 4)
print(np.multiply.outer(x, x))</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code class="language-python">x = np.arange(4)
print(np.multiply.outer(x, x))</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option1",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(1, 5)</code></pre>

creates:

<pre><code>[1 2 3 4]</code></pre>

Then:

<pre><code class="language-python">np.multiply.outer(x, x)</code></pre>

computes every element of <code>x</code> multiplied by every other element:

<pre><code>[[ 1  2  3  4]
 [ 2  4  6  8]
 [ 3  6  9 12]
 [ 4  8 12 16]]</code></pre>

Therefore, the correct answer is <strong>option 1</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(5)
y = np.zeros(5, dtype=int)

np.floor_divide(x, 2, out=y)

print(y)</code></pre>
`,
  answers: [
    "[0.  0.5 1.  1.5 2.]",
    "[0. 0. 1. 1. 2.]",
    "[0 0 1 1 2]",
    "[0 1 2 3 4]",
    "[0 0 0 0 0]"
  ],
  correct: "[0 0 1 1 2]",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(5)</code></pre>

creates:

<pre><code>[0 1 2 3 4]</code></pre>

Then:

<pre><code class="language-python">np.floor_divide(x, 2, out=y)</code></pre>

performs floor division by 2:

<pre><code>0 // 2 = 0
1 // 2 = 0
2 // 2 = 1
3 // 2 = 1
4 // 2 = 2</code></pre>

The results are written directly into <code>y</code>.

Therefore:

<pre><code>[0 0 1 1 2]</code></pre>

The correct answer is <strong>[0 0 1 1 2]</strong>.
`
},
{
  type: "matching",
  question: `
Match the following description with appropriate aggregate function:
`,
  pairs: [
    {
      left: "Compute sum of array elements",
      right: "np.sum or np.nansum"
    },
    {
      left: "Find lowest value of array elements",
      right: "np.min or np.nanmin"
    },
    {
      left: "Compute product of array elements",
      right: "np.prod or np.nanprod"
    },
    {
      left: "Find index of the lowest value of array elements",
      right: "np.argmin or np.nanargmin"
    },
    {
      left: "Compute rank-based stats of array elements",
      right: "np.percentile or np.nanpercentile"
    }
  ],
  explanation: `
The correct NumPy aggregate functions are:

<ul>
  <li><strong>Compute sum</strong> → <code>np.sum</code> or <code>np.nansum</code></li>
  <li><strong>Find lowest value</strong> → <code>np.min</code> or <code>np.nanmin</code></li>
  <li><strong>Compute product</strong> → <code>np.prod</code> or <code>np.nanprod</code></li>
  <li><strong>Find index of lowest value</strong> → <code>np.argmin</code> or <code>np.nanargmin</code></li>
  <li><strong>Compute rank-based statistics</strong> → <code>np.percentile</code> or <code>np.nanpercentile</code></li>
</ul>

Functions beginning with <code>nan</code> ignore <code>NaN</code> values when performing the calculation.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.array([7, 3, 4, 6])
print(np.sum(x)//np.min(x))</code></pre>
`,
  answers: [
    "20.0",
    "6.67",
    "6",
    "3"
  ],
  correct: "6",
  explanation: `
First:

<pre><code class="language-python">np.sum(x)</code></pre>

returns:

<pre><code>7 + 3 + 4 + 6 = 20</code></pre>

Next:

<pre><code class="language-python">np.min(x)</code></pre>

returns the smallest value:

<pre><code>3</code></pre>

The expression uses floor division:

<pre><code>20 // 3 = 6</code></pre>

Therefore, the correct answer is <strong>6</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Broadcasting is useful when you want to extract, modify, count, or otherwise manipulate values in an array based on some criterion.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

The description refers to <strong>Boolean masking</strong>, not broadcasting.

Boolean masking is useful when you want to:

<ul>
  <li>extract values based on a condition,</li>
  <li>modify selected values,</li>
  <li>count values that satisfy a condition,</li>
  <li>otherwise manipulate array elements using a criterion.</li>
</ul>

For example:

<pre><code class="language-python">x[x > 5]</code></pre>

selects all elements greater than 5.

<strong>Broadcasting</strong>, on the other hand, is the set of rules NumPy uses to perform operations on arrays with different but compatible shapes.

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(1, 5)
print(np.equal(np.multiply(2, x), np.power(x, 2)))</code></pre>
`,
  answers: [
    "[False True True True]",
    "[False False False False]",
    "[False True False False]",
    "[True False False False]"
  ],
  correct: "[False True False False]",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(1, 5)</code></pre>

creates:

<pre><code>[1 2 3 4]</code></pre>

Then:

<pre><code class="language-python">np.multiply(2, x)</code></pre>

produces:

<pre><code>[2 4 6 8]</code></pre>

And:

<pre><code class="language-python">np.power(x, 2)</code></pre>

produces:

<pre><code>[1 4 9 16]</code></pre>

Now NumPy compares the arrays element by element:

<pre><code>2 == 1   → False
4 == 4   → True
6 == 9   → False
8 == 16  → False</code></pre>

Therefore, the output is:

<pre><code>[False  True False False]</code></pre>

The correct answer is <strong>[False True False False]</strong>.
`
},
{
  type: "matching",
  question: `
Given:

<pre><code class="language-python">rainfall_mm = [[0, 0, 10, 20],
               [9, 1, 4, 22],
               [33, 0, 5, 8]]</code></pre>

Match the following description with the NumPy statement:
`,
  pairs: [
    {
      left: "Days with more than 5 mm rain",
      right: "np.sum(np.greater(rainfall_mm, 5))"
    },
    {
      left: "Number days with rain",
      right: "np.sum(np.not_equal(rainfall_mm, 0))"
    },
    {
      left: "Rainy days between 5 and 10 mm rain",
      right: "np.sum(np.greater(rainfall_mm, 5) & (np.less(rainfall_mm, 10)))"
    },
    {
      left: "Rainy days with < 5 mm rain",
      right: "np.sum(np.greater_equal(rainfall_mm, 1) & (np.less(rainfall_mm, 5)))"
    },
    {
      left: "Number of days without rain",
      right: "np.sum(np.equal(rainfall_mm, 0))"
    }
  ],
  explanation: `
NumPy comparison functions produce Boolean arrays, and <code>np.sum()</code> counts the number of <code>True</code> values.

<ul>
  <li><strong>More than 5 mm</strong> → <code>np.greater(rainfall_mm, 5)</code></li>
  <li><strong>Days with rain</strong> → rainfall is not equal to 0</li>
  <li><strong>Between 5 and 10 mm</strong> → greater than 5 AND less than 10</li>
  <li><strong>Rainy days below 5 mm</strong> → at least 1 mm AND less than 5 mm</li>
  <li><strong>Days without rain</strong> → rainfall equals 0</li>
</ul>
`
},
{
  type: "radio",
  question: `
(True or False) The following code will display <code>[0 0 1 2 3]</code>.

<pre><code class="language-python">import numpy as np

x = np.zeros(5, dtype=int)
i = [2, 3, 3, 4, 4, 4]

x[i] += 1
print(x)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

Initially:

<pre><code>x = [0 0 0 0 0]</code></pre>

The index list contains repeated indexes:

<pre><code>i = [2, 3, 3, 4, 4, 4]</code></pre>

However, with NumPy fancy indexing:

<pre><code class="language-python">x[i] += 1</code></pre>

the repeated indexes do <strong>not</strong> accumulate multiple increments as you might expect.

The resulting array is:

<pre><code>[0 0 1 1 1]</code></pre>

If repeated indexes need to accumulate, NumPy provides:

<pre><code class="language-python">np.add.at(x, i, 1)</code></pre>

which would produce:

<pre><code>[0 0 1 2 3]</code></pre>

Therefore, the correct answer is <strong>False</strong>.
`
},

{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(12).reshape((3, 4))
print(x[2, [2, 0, 1]])</code></pre>
`,
  answers: [
    "[2 2 0 1]",
    "[6 4 5]",
    "[10 8 9]",
    "[2 0 1]"
  ],
  correct: "[10 8 9]",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(12).reshape((3, 4))</code></pre>

creates:

<pre><code>[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]</code></pre>

The expression:

<pre><code class="language-python">x[2, [2, 0, 1]]</code></pre>

selects row index <code>2</code>:

<pre><code>[8 9 10 11]</code></pre>

and then selects columns in the order:

<pre><code>2, 0, 1</code></pre>

So:

<pre><code>x[2, 2] = 10
x[2, 0] = 8
x[2, 1] = 9</code></pre>

Therefore, the output is:

<pre><code>[10 8 9]</code></pre>

The correct answer is <strong>[10 8 9]</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Analyze the code below:

<pre><code class="language-python">import numpy as np

rng = np.random.default_rng(seed=42)
X = rng.integers(0, 10, (4, 6))
np.partition(X, 3, axis=1)</code></pre>

The result is an array where the first three slots in each row contain the smallest values from that row, with the remaining values filling the remaining slots.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The statement is <strong>True</strong>.

The expression:

<pre><code class="language-python">np.partition(X, 3, axis=1)</code></pre>

partitions each row independently because <code>axis=1</code> works across the columns of each row.

For each row, the element that would appear at index <code>3</code> in a fully sorted row is placed into that position.

All values before index <code>3</code> are smaller than or equal to that partition value, so the first three positions contain the three smallest values from that row, although their internal order is not guaranteed to be sorted.

The remaining values occupy the remaining positions.

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will display the same result.

<strong>Code A:</strong>

<pre><code class="language-python">import numpy as np

data = np.zeros(2, np.dtype({
    'names': ('players', 'age'),
    'formats': ('U10', 'i4')
}))

data['players'] = ['Mat', 'Mary']
data['age'] = [18, 22]

print(data['age'])</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">import numpy as np

data = np.zeros(2, np.dtype({
    'names': ('players', 'age'),
    'formats': ('U10', 'i4')
}))

data['players'] = ['Mat', 'Mary']
data['age'] = [18, 22]

data_rec = data.view(np.recarray)
print(data_rec.age)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
Both code fragments access the same <code>age</code> field.

In Code A:

<pre><code class="language-python">data['age']</code></pre>

accesses the field using structured-array dictionary-style indexing.

In Code B:

<pre><code class="language-python">data_rec.age</code></pre>

accesses the same field using attribute notation after viewing the array as a <code>recarray</code>.

Both display:

<pre><code>[18 22]</code></pre>

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

data = np.zeros(3, np.dtype({
    'names': ('employees', 'hours'),
    'formats': ('U10', 'f8')
}))

data['employees'] = ['Joe', 'Mike', 'Nancy']
data['hours'] = [40, 44, 35]

print(data[data['hours'] > 40]['employees'])</code></pre>
`,
  answers: [
    "['Joe', 'Nancy']",
    "['Mike']",
    "['Mike', 'Nancy']",
    "['Joe', 'Mike']"
  ],
  correct: "['Mike']",
  explanation: `
The condition:

<pre><code class="language-python">data['hours'] > 40</code></pre>

checks which employees worked more than 40 hours.

The hours are:

<pre><code>Joe   → 40
Mike  → 44
Nancy → 35</code></pre>

Only <strong>Mike</strong> has more than 40 hours.

Therefore:

<pre><code class="language-python">data[data['hours'] > 40]['employees']</code></pre>

returns:

<pre><code>['Mike']</code></pre>

The correct answer is <strong>['Mike']</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Miniconda is a next-generation user interface of Jupyter Notebook. It enhances your notebooks by providing a browser-based interface that allows you to use multiple notebooks together effectively. In addition, it offers you a comprehensive Markdown editor, file manager, file viewer, and an infrastructure that enables you to run code from a wide range of files.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

The description refers to <strong>JupyterLab</strong>, not Miniconda.

<strong>JupyterLab</strong> is a browser-based interface that provides:

<ul>
  <li>multiple notebooks in one workspace,</li>
  <li>a file manager,</li>
  <li>Markdown and text editors,</li>
  <li>file viewers,</li>
  <li>terminals and other interactive tools.</li>
</ul>

<strong>Miniconda</strong> is a lightweight Python distribution that includes Python, Conda, and basic package/environment management tools.

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
Analyze the following code with NumPy array attributes. What will be the output?

<pre><code class="language-python">import numpy as np

rng = np.random.default_rng(seed=1701)

x1 = rng.integers(10, size=6)
x2 = rng.integers(10, size=(3, 4))
x3 = rng.integers(10, size=(3, 4, 5))

print(x1.dtype)
print(x2.ndim)
print(x3.shape)</code></pre>
`,
  answers: [
    {
      text: `<pre><code>int64
2
(3, 4)</code></pre>`,
      value: "option1"
    },
    {
      text: `<pre><code>int64
3
(3, 4, 5)</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>float
3
(3, 4)</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>int64
2
(3, 4, 5)</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option4",
  explanation: `
Let's examine each attribute.

<strong>1. <code>x1.dtype</code></strong>

<pre><code class="language-python">x1 = rng.integers(10, size=6)</code></pre>

The array contains integers, so its data type is:

<pre><code>int64</code></pre>

<strong>2. <code>x2.ndim</code></strong>

<pre><code class="language-python">x2 = rng.integers(10, size=(3, 4))</code></pre>

This is a two-dimensional array with 3 rows and 4 columns.

Therefore:

<pre><code>x2.ndim = 2</code></pre>

<strong>3. <code>x3.shape</code></strong>

<pre><code class="language-python">x3 = rng.integers(10, size=(3, 4, 5))</code></pre>

Its shape is:

<pre><code>(3, 4, 5)</code></pre>

Therefore, the output is:

<pre><code>int64
2
(3, 4, 5)</code></pre>

The correct answer is <strong>option 4</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x1 = np.array([3, 4, 0, 3, 8, 6])

print(x1[1::2])
print(x1[4::-2])</code></pre>
`,
  answers: [
    {
      text: `<pre><code>[3 4]
[3 8]</code></pre>`,
      value: "option1"
    },
    {
      text: `<pre><code>[3 0 8]
[6 3 4]</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>[4 3 6]
[8 0 3]</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>[4 0]
[8 0]</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option3",
  explanation: `
For the first slice:

<pre><code class="language-python">x1[1::2]</code></pre>

Start at index <code>1</code> and move forward by <code>2</code>:

<pre><code>indexes: 1, 3, 5
values:  4, 3, 6</code></pre>

So the first output is:

<pre><code>[4 3 6]</code></pre>

For the second slice:

<pre><code class="language-python">x1[4::-2]</code></pre>

Start at index <code>4</code> and move backward by <code>2</code>:

<pre><code>indexes: 4, 2, 0
values:  8, 0, 3</code></pre>

So the second output is:

<pre><code>[8 0 3]</code></pre>

Therefore, the correct answer is <strong>option 3</strong>.
`
},
{
  type: "matching",
  question: `
Given <code>x = [-1, -2, 0, 1, 2]</code>. Match the following statements with the output:
`,
  pairs: [
    {
      left: "print(np.add(x, 2))",
      right: "[1 0 2 3 4]"
    },
    {
      left: "print(np.power(x, 2))",
      right: "[1 4 0 1 4]"
    },
    {
      left: "print(np.absolute(x))",
      right: "[1 2 0 1 2]"
    },
    {
      left: "print(np.multiply(x, 2))",
      right: "[-2 -4 0 2 4]"
    },
    {
      left: "print(np.negative(x))",
      right: "[1 2 0 -1 -2]"
    }
  ],
  explanation: `
Given:

<pre><code class="language-python">x = [-1, -2, 0, 1, 2]</code></pre>

The NumPy operations produce:

<ul>
  <li><code>np.add(x, 2)</code> → adds 2 to every element → <strong>[1 0 2 3 4]</strong></li>
  <li><code>np.power(x, 2)</code> → squares every element → <strong>[1 4 0 1 4]</strong></li>
  <li><code>np.absolute(x)</code> → returns absolute values → <strong>[1 2 0 1 2]</strong></li>
  <li><code>np.multiply(x, 2)</code> → multiplies every element by 2 → <strong>[-2 -4 0 2 4]</strong></li>
  <li><code>np.negative(x)</code> → changes the sign of every element → <strong>[1 2 0 -1 -2]</strong></li>
</ul>
`
},
{
  type: "radio",
  question: `
Which of the following is a broadcasting rule?
`,
  answers: [
    "All of these",
    "If the two arrays differ in their number of dimensions, the shape of the one with fewer dimensions is padded with ones on its leading (left) side.",
    "If the shape of the two arrays does not match in any dimension, the array with shape equal to 1 in that dimension is stretched to match the other shape.",
    "If in any dimension the sizes disagree and neither is equal to 1, an error is raised."
  ],
  correct: "All of these",
  explanation: `
All three statements describe NumPy broadcasting rules.

<ul>
  <li>If arrays have different numbers of dimensions, the smaller-dimensional shape is padded with leading <code>1</code>s.</li>
  <li>If one dimension has size <code>1</code>, NumPy can stretch that dimension to match the other array.</li>
  <li>If corresponding dimensions differ and neither dimension is <code>1</code>, broadcasting is not possible and NumPy raises an error.</li>
</ul>

Therefore, the correct answer is <strong>All of these</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

a = np.arange(3)
print(np.equal(a, 0))</code></pre>
`,
  answers: [
    "[False True True]",
    "[True False False]",
    "[True True True]",
    "[True False False False]"
  ],
  correct: "[True False False]",
  explanation: `
First:

<pre><code class="language-python">a = np.arange(3)</code></pre>

creates:

<pre><code>[0 1 2]</code></pre>

Then:

<pre><code class="language-python">np.equal(a, 0)</code></pre>

compares each element with <code>0</code>:

<pre><code>0 == 0 → True
1 == 0 → False
2 == 0 → False</code></pre>

Therefore, the output is:

<pre><code>[ True False False]</code></pre>

The correct answer is <strong>[True False False]</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(0, 50, 5, dtype=int)
ind = np.array([[3, 7],
                [4, 5]])

print(x[ind])</code></pre>
`,
  answers: [
    {
      text: "None of these",
      value: "option1"
    },
    {
      text: `<pre><code>[[10 30]
 [15 20]]</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>[[15 35]
 [20 25]]</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>[10 30 15 20]</code></pre>`,
      value: "option4"
    },
    {
      text: `<pre><code>[15 35 20 25]</code></pre>`,
      value: "option5"
    }
  ],
  correct: "option3",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(0, 50, 5)</code></pre>

creates:

<pre><code>[0 5 10 15 20 25 30 35 40 45]</code></pre>

The index array is:

<pre><code>[[3 7]
 [4 5]]</code></pre>

NumPy uses each value as an index into <code>x</code>:

<pre><code>x[3] = 15
x[7] = 35
x[4] = 20
x[5] = 25</code></pre>

The shape of the index array is preserved, so the result is:

<pre><code>[[15 35]
 [20 25]]</code></pre>

Therefore, the correct answer is <strong>option 3</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will display the array <code>s</code> in ascending order.

<strong>Code A:</strong>

<pre><code class="language-python">import numpy as np

s = [5, 3, 2, 4, 1]
sorted(s)</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">import numpy as np

s = np.array([5, 3, 2, 4, 1])
print(np.argsort(s))</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

In Code A:

<pre><code class="language-python">sorted(s)</code></pre>

returns the values in ascending order:

<pre><code>[1, 2, 3, 4, 5]</code></pre>

However, <code>np.argsort()</code> does <strong>not</strong> return the sorted values.

It returns the <strong>indexes</strong> that would sort the array.

For:

<pre><code>[5, 3, 2, 4, 1]</code></pre>

the indexes in ascending-value order are:

<pre><code>[4 2 1 3 0]</code></pre>

Therefore, Code B does not display the array values in ascending order.

The correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
By convention, you'll find that most people in the SciPy/PyData world will import NumPy using __________ as an alias.
`,
  answers: [
    "np",
    "py",
    "pd",
    "sp"
  ],
  correct: "np",
  explanation: `
By convention, NumPy is almost always imported using the alias:

<pre><code class="language-python">import numpy as np</code></pre>

Other common aliases include:

<ul>
  <li><code>pd</code> → pandas</li>
  <li><code>sp</code> → sometimes SciPy</li>
</ul>

Therefore, the correct answer is <strong>np</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) The following statement will create an uninitialized array of 3 integers.

<pre><code class="language-python">import numpy as np
np.eye(3)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: `
The statement is <strong>False</strong>.

<pre><code class="language-python">np.eye(3)</code></pre>

creates a <strong>3 x 3 identity matrix</strong>:

<pre><code>[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]</code></pre>

It does not create an uninitialized array of 3 integers.

To create an uninitialized array, NumPy provides:

<pre><code class="language-python">np.empty(...)</code></pre>

Therefore, the correct answer is <strong>False</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x2 = np.array([[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]])

x2_copy = x2[:1, :2].copy()
x2_copy[0, 0] = 55

print(x2[:1, :1])
print(x2_copy[:1, :1])</code></pre>
`,
  answers: [
    {
      text: "None of these",
      value: "option1"
    },
    {
      text: `<pre><code>[[1]]
[[55]]</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>[[1]]
[[1]]</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>[[55]]
[[55]]</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option2",
  explanation: `
First:

<pre><code class="language-python">x2_copy = x2[:1, :2].copy()</code></pre>

takes:

<pre><code>[[1 2]]</code></pre>

and creates an <strong>independent copy</strong>.

Then:

<pre><code class="language-python">x2_copy[0, 0] = 55</code></pre>

changes only the copied array.

The original <code>x2</code> remains unchanged:

<pre><code>x2[:1, :1] → [[1]]</code></pre>

while:

<pre><code>x2_copy[:1, :1] → [[55]]</code></pre>

Therefore, the output is:

<pre><code>[[1]]
[[55]]</code></pre>

The correct answer is <strong>option 2</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x2 = np.array([[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]])

x2_no_copy = x2[:1, :2]
x2_no_copy[0, 0] = 55

print(x2[:1, :1])
print(x2_no_copy[:1, :1])</code></pre>
`,
  answers: [
    {
      text: "None of these",
      value: "option1"
    },
    {
      text: `<pre><code>[[1]]
[[1]]</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>[[1]]
[[55]]</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>[[55]]
[[55]]</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option4",
  explanation: `
The slice:

<pre><code class="language-python">x2_no_copy = x2[:1, :2]</code></pre>

does <strong>not</strong> create an independent copy.

NumPy slicing normally creates a <strong>view</strong> of the original array.

Therefore:

<pre><code class="language-python">x2_no_copy[0, 0] = 55</code></pre>

also changes the corresponding value in the original array <code>x2</code>.

So both:

<pre><code class="language-python">x2[:1, :1]</code></pre>

and:

<pre><code class="language-python">x2_no_copy[:1, :1]</code></pre>

contain <code>55</code>.

The output is:

<pre><code>[[55]]
[[55]]</code></pre>

Therefore, the correct answer is <strong>option 4</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Computation on NumPy's arrays using vectorized operations through ufuncs are more efficient than using Python loops.
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The statement is <strong>True</strong>.

NumPy's vectorized operations and universal functions (<code>ufuncs</code>) are generally much more efficient than writing equivalent element-by-element loops in Python.

For example:

<pre><code class="language-python">x * 2</code></pre>

is typically faster than:

<pre><code class="language-python">for i in range(len(x)):
    x[i] = x[i] * 2</code></pre>

This is because NumPy performs many operations in optimized compiled code instead of repeatedly executing Python-level loop instructions.

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(1, 4)
m = np.ones((3, 3), dtype=int)

print(x + m)</code></pre>
`,
  answers: [
    {
      text: `<pre><code>[[2 3 4]
 [2 3 4]
 [2 3 4]]</code></pre>`,
      value: "option1"
    },
    {
      text: `<pre><code>[[1 4]
 [3 4]]</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>[[1 2 3 4]
 [1 2 3 4]
 [1 2 3 4]]</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>[[4 7]
 [4 7]
 [4 7]]</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option1",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(1, 4)</code></pre>

creates:

<pre><code>[1 2 3]</code></pre>

Then:

<pre><code class="language-python">m = np.ones((3, 3), dtype=int)</code></pre>

creates:

<pre><code>[[1 1 1]
 [1 1 1]
 [1 1 1]]</code></pre>

NumPy uses <strong>broadcasting</strong> to add <code>x</code> to every row of <code>m</code>:

<pre><code>[1 2 3] + [1 1 1] = [2 3 4]</code></pre>

Therefore, the output is:

<pre><code>[[2 3 4]
 [2 3 4]
 [2 3 4]]</code></pre>

The correct answer is <strong>option 1</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) The following code will display <code>[0 0 1 2 3]</code>.

<pre><code class="language-python">import numpy as np

x = np.zeros(5, dtype=int)
i = [2, 3, 3, 4, 4, 4]

np.add.at(x, i, 1)
print(x)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The statement is <strong>True</strong>.

Initially:

<pre><code>[0 0 0 0 0]</code></pre>

The indexes are:

<pre><code>[2, 3, 3, 4, 4, 4]</code></pre>

<code>np.add.at()</code> accumulates repeated indexes:

<pre><code>index 2 → +1 once  → 1
index 3 → +1 twice → 2
index 4 → +1 three times → 3</code></pre>

So the final array is:

<pre><code>[0 0 1 2 3]</code></pre>

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) The following code will create a 3x5 array of pseudorandom integers in the interval (1, 10):

<pre><code class="language-python">import numpy as np
np.random.randint(1, 10, (3, 5))</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The statement is <strong>True</strong> for the intended meaning of this course question.

The call:

<pre><code class="language-python">np.random.randint(1, 10, (3, 5))</code></pre>

creates an array with:

<ul>
  <li><strong>3 rows</strong></li>
  <li><strong>5 columns</strong></li>
  <li>pseudorandom integer values from <strong>1 through 9</strong></li>
</ul>

For <code>np.random.randint(low, high, size)</code>, the lower bound is included and the upper bound is excluded:

<pre><code>1 <= value < 10</code></pre>

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
What is the output of the following code?

<pre><code class="language-python">import numpy as np

x = np.arange(4)
y = np.arange(3)[:, np.newaxis]

print(x + y)</code></pre>
`,
  answers: [
    {
      text: `<pre><code>[[1 2 3 4]
 [1 2 3 4]
 [1 2 3 4]]</code></pre>`,
      value: "option1"
    },
    {
      text: `<pre><code>[[0 1 2 3]]</code></pre>`,
      value: "option2"
    },
    {
      text: `<pre><code>[[0 1 2 3]
 [1 2 3 4]
 [2 3 4 5]]</code></pre>`,
      value: "option3"
    },
    {
      text: `<pre><code>[[0 1 2]
 [1 2 3]
 [2 3 4]
 [3 4 5]]</code></pre>`,
      value: "option4"
    }
  ],
  correct: "option3",
  explanation: `
First:

<pre><code class="language-python">x = np.arange(4)</code></pre>

creates:

<pre><code>[0 1 2 3]</code></pre>

Then:

<pre><code class="language-python">y = np.arange(3)[:, np.newaxis]</code></pre>

creates a column vector:

<pre><code>[[0]
 [1]
 [2]]</code></pre>

NumPy uses <strong>broadcasting</strong> when adding these arrays.

The row vector:

<pre><code>[0 1 2 3]</code></pre>

is added to each value in the column vector:

<pre><code>0 + [0 1 2 3] → [0 1 2 3]
1 + [0 1 2 3] → [1 2 3 4]
2 + [0 1 2 3] → [2 3 4 5]</code></pre>

Therefore, the output is:

<pre><code>[[0 1 2 3]
 [1 2 3 4]
 [2 3 4 5]]</code></pre>

The correct answer is <strong>option 3</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) The following print statement will display how many elements in the two-dimensional array <code>x</code> are less than 5 in each row.

<pre><code class="language-python">print(np.sum(np.less(x, 5), axis=1))</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The statement is <strong>True</strong>.

First:

<pre><code class="language-python">np.less(x, 5)</code></pre>

creates a Boolean array where each element is:

<ul>
  <li><code>True</code> if the value is less than 5</li>
  <li><code>False</code> otherwise</li>
</ul>

Then:

<pre><code class="language-python">np.sum(..., axis=1)</code></pre>

sums across the columns of each row.

Since <code>True</code> counts as 1 and <code>False</code> counts as 0, the result gives the number of elements less than 5 in <strong>each row</strong>.

Therefore, the correct answer is <strong>True</strong>.
`
},
{
  type: "radio",
  question: `
(True or False) Both Code A and Code B below will display the same result:

<pre><code>['h', 'n', 'o', 'p', 't', 'y']</code></pre>

<strong>Code A:</strong>

<pre><code class="language-python">import numpy as np
sorted('python')</code></pre>

<strong>Code B:</strong>

<pre><code class="language-python">import numpy as np

l = ['p', 'y', 't', 'h', 'o', 'n']
l.sort()
print(l)</code></pre>
`,
  answers: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: `
The statement is <strong>True</strong>.

In Code A:

<pre><code class="language-python">sorted('python')</code></pre>

takes the characters from the string <code>"python"</code> and returns them in ascending alphabetical order:

<pre><code>['h', 'n', 'o', 'p', 't', 'y']</code></pre>

In Code B, the list initially contains:

<pre><code>['p', 'y', 't', 'h', 'o', 'n']</code></pre>

The method:

<pre><code class="language-python">l.sort()</code></pre>

sorts the list in ascending alphabetical order, producing:

<pre><code>['h', 'n', 'o', 'p', 't', 'y']</code></pre>

Therefore, both produce the same sorted list.

The correct answer is <strong>True</strong>.
`
},

];
