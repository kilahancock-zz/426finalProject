
// data about comp classes
let classData = [{
    id: 0,
    number: 101,
    title: "Fluency in Information Technology",
    credits: 3,
    description: "The nature of computers, their capabilities, and limitations. How computers work, popular applications, problem-solving skills, algorithms and programming. Lectures and laboratory assignments.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 1,
    number: 110,
    title: "Introduction to Programming",
    credits: 3,
    description: "An introduction to programming. Fundamental programming skills, typically using Java or JavaScript. Problem analysis and algorithm design.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 2,
    number: 116,
    title: "Introduction to Scientific Programming",
    credits: 3,
    description: "An introduction to programming for computationally oriented scientists. Fundamental programming skills, typically using MATLAB or Python. Problem analysis and algorithm design with examples drawn from simple numerical and discrete problems.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 3,
    number: 283,
    title: "Discrete Structures",
    credits: 3,
    description: "Introduces discrete structures (sets, tuples, relations, functions, graphs, trees) and the formal mathematics (logic, proof, induction) used to establish their properties and those of algorithms that work with them. Develops problem-solving skills through puzzles and applications central to computer science.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 4,
    number: 401,
    title: "Foundation of Programming",
    credits: 4,
    description: "Required preparation, a first formal course in computer programming (e.g., COMP 110, COMP 116). Advanced programming: object-oriented design, classes, interfaces, packages, inheritance, delegation, observers, MVC (model view controller), exceptions, assertions.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 5,
    number: 410,
    title: "Data Structures",
    credits: 3,
    description: "The analysis of data structures and their associated algorithms. Abstract data types, lists, stacks, queues, trees, and graphs. Sorting, searching, hashing.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 6,
    number: 411,
    title: "Computer Organization",
    credits: 4,
    description: "Digital logic, circuit components. Data representation, computer architecture and implementation, assembly language programming.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 7,
    number: 431,
    title: "Internet Services and Protocols",
    credits: 3,
    description: "Application-level protocols HTTP, SMTP, FTP, transport protocols TCP and UDP, and the network-level protocol IP. Internet architecture, naming, addressing, routing, and DNS. Sockets programming. Physical-layer technologies. Ethernet, ATM, and wireless.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 8,
    number: 433,
    title: "Mobile Computing Systems",
    credits: 3,
    description: "Principles of mobile applications, mobile OS, mobile networks, and embedded sensor systems. Coursework includes programming assignments, reading from recent research literature, and a semester long project on a mobile computing platform (e.g., Android, Arduino, iOS, etc.).",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 9,
    number: 435,
    title: "Computer Security Concepts",
    credits: 3,
    description: "Introduction to topics in computer security including confidentiality, integrity, availability, authentication policies, basic cryptography and cryptographic protocols, ethics, and privacy.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 10,
    number: 455,
    title: "Models of Language and Computation",
    credits: 3,
    description: "Introduction to the theory of computation. Finite automata, regular languages, pushdown automata, context-free languages, and Turing machines. Undecidable problems.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 11,
    number: 520,
    title: "Compilers",
    credits: 3,
    description: "Design and construction of compilers. Theory and pragmatics of lexical, syntactic, and semantic analysis. Interpretation. Code generation for a modern architecture. Run-time environments. Includes a large compiler implementation project.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 12,
    number: 521,
    title: "Files and Databases",
    credits: 3,
    description: "Placement of data on secondary storage. File organization. Database history, practice, major models, system structure and design.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 13,
    number: 530,
    title: "Operating Systems",
    credits: 3,
    description: "Types of operating systems. Concurrent programming. Management of storage, processes, devices. Scheduling, protection. Case study. Course includes a programming laboratory.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 14,
    number: 535,
    title: "Introduction to Computer Security",
    credits: 3,
    description: "Principles of securing the creation, storage, and transmission of data and ensuring its integrity, confidentiality and availability. Topics include access control, cryptography and cryptographic protocols, network security, and online privacy.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 15,
    number: 550,
    title: "Algorithms and Analysis",
    credits: 3,
    description: "Formal specification and verification of programs. Techniques of algorithm analysis. Problem-solving paradigms. Survey of selected algorithms.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 16,
    number: 560,
    title: "Artificial Intelligence",
    credits: 3,
    description: "Introduction to techniques and applications of modern artificial intelligence. Combinatorial search, probabilistic models and reasoning, and applications to natural language understanding, robotics, and computer vision.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 17,
    number: 562,
    title: "Machine Learning",
    credits: 3,
    description: "Machine learning as applied to speech recognition, tracking, collaborative filtering and recommendation systems. Classification, regression, support vector machines, hidden Markov models, principal component analysis, and deep learning.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 18,
    number: 580,
    title: "Enabling Technologies",
    credits: 3,
    description: "We will investigate ways computer technology can be used to mitigate the effects of disabilities and the sometimes surprising response of those we intended to help.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 19,
    number: 581,
    title: "Introduction to Robotics",
    credits: 3,
    description: "Hands-on introduction to robotics with a focus on the computational aspects. Students will build and program mobile robots. Topics include kinematics, actuation, sensing, configuration spaces, control, and motion planning. Applications include industrial, mobile, personal, and medical robots.",
    likes: 0,
    dislikes: 0,
    comments: []
}, {
    id: 20,
    number: 585,
    title: "Serious Games",
    credits: 3,
    description: "Concepts of computer game development and their application beyond entertainment to fields such as education, health, and business. Course includes team development of a game.",
    likes: 0,
    dislikes: 0,
    comments: []
}];