const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');

mongoose.connect('mongodb://localhost:27017/elearning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected for quiz population'));

const quizzes = [
  {
    course: '6814c4215551f0dc8137d048',
    questions: [
      {
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: [
          'let x = 5;',
          'variable x = 5;',
          'x = 5;',
          'declare x = 5;',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
      },
      {
        question: 'What does "===" mean in JavaScript?',
        options: [
          'Strict equality (value and type)',
          'Assignment',
          'Loose equality (value only)',
          'Not equal',
        ],
        correctAnswer: 0,
      },
      {
        question: 'How do you write a function in JavaScript?',
        options: [
          'function myFunc() {}',
          'def myFunc() {}',
          'func myFunc() {}',
          'myFunc() => {}',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of "typeof null" in JavaScript?',
        options: ['object', 'null', 'undefined', 'string'],
        correctAnswer: 0,
      },
      {
        question: 'Which event is triggered when a user clicks an element?',
        options: ['onclick', 'onchange', 'onhover', 'onload'],
        correctAnswer: 0,
      },
      {
        question: 'How do you access the first element of an array in JavaScript?',
        options: ['array[0]', 'array.first()', 'array(0)', 'array.get(0)'],
        correctAnswer: 0,
      },
      {
        question: 'What keyword is used to exit a loop in JavaScript?',
        options: ['break', 'exit', 'stop', 'return'],
        correctAnswer: 0,
      },
      {
        question: 'Which method converts a string to an integer in JavaScript?',
        options: ['parseInt()', 'toString()', 'parseFloat()', 'Number()'],
        correctAnswer: 0,
      },
      {
        question: 'What does the "this" keyword refer to in JavaScript?',
        options: [
          'The current object',
          'The global object',
          'The parent function',
          'The DOM element',
        ],
        correctAnswer: 0,
      },
    ],
  },
  // Data Structures and Algorithms
  {
    course: '6814c4215551f0dc8137d049',
    questions: [
      {
        question: 'What is the time complexity of a linear search algorithm?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        correctAnswer: 0,
      },
      {
        question: 'Which data structure uses LIFO (Last In, First Out) principle?',
        options: ['Stack', 'Queue', 'Array', 'Linked List'],
        correctAnswer: 0,
      },
      {
        question: 'What is the best-case time complexity of QuickSort?',
        options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
        correctAnswer: 0,
      },
      {
        question: 'Which algorithm is used to find the shortest path in a weighted graph?',
        options: [
          "Dijkstra's Algorithm",
          'Breadth-First Search',
          'Depth-First Search',
          'Binary Search',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the space complexity of a binary tree with n nodes?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        correctAnswer: 0,
      },
      {
        question: 'Which sorting algorithm is known for being comparison-based and stable?',
        options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
        correctAnswer: 0,
      },
      {
        question: 'What does a "linked list" consist of?',
        options: [
          'Nodes with data and pointers',
          'Arrays of elements',
          'A tree structure',
          'A hash table',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which data structure is best for implementing a dictionary?',
        options: ['Hash Table', 'Array', 'Stack', 'Queue'],
        correctAnswer: 0,
      },
      {
        question: 'What is the time complexity of accessing an element in an array?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        correctAnswer: 0,
      },
      {
        question: 'Which algorithm is used for traversing a graph level by level?',
        options: [
          'Breadth-First Search',
          'Depth-First Search',
          'Topological Sort',
          'Prim’s Algorithm',
        ],
        correctAnswer: 0,
      },
    ],
  },
  // Cloud Computing with AWS
  {
    course: '6814c4215551f0dc8137d04a',
    questions: [
      {
        question: 'What does AWS stand for?',
        options: [
          'Amazon Web Services',
          'Advanced Web Solutions',
          'Automated Web Systems',
          'Amazon Web Security',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which AWS service is used for scalable object storage?',
        options: ['S3', 'EC2', 'RDS', 'Lambda'],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary compute service in AWS?',
        options: ['EC2', 'S3', 'DynamoDB', 'CloudFront'],
        correctAnswer: 0,
      },
      {
        question: 'Which AWS service is used for serverless computing?',
        options: ['Lambda', 'EC2', 'S3', 'VPC'],
        correctAnswer: 0,
      },
      {
        question: 'What does IAM stand for in AWS?',
        options: [
          'Identity and Access Management',
          'Integrated Application Manager',
          'Internet Access Module',
          'Instance Allocation Manager',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which AWS service is used for relational databases?',
        options: ['RDS', 'DynamoDB', 'S3', 'Elastic Beanstalk'],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of AWS CloudFormation?',
        options: [
          'Infrastructure as Code',
          'Load Balancing',
          'Content Delivery',
          'Monitoring',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which AWS service provides a content delivery network (CDN)?',
        options: ['CloudFront', 'Route 53', 'S3', 'VPC'],
        correctAnswer: 0,
      },
      {
        question: 'What is the default region for AWS services?',
        options: [
          'us-east-1',
          'us-west-2',
          'eu-west-1',
          'ap-south-1',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which AWS service is used for DNS management?',
        options: ['Route 53', 'CloudFront', 'S3', 'EC2'],
        correctAnswer: 0,
      },
    ],
  },
  // Django Web Development
  {
    course: '6814c4215551f0dc8137d04b',
    questions: [
      {
        question: 'What is Django primarily used for?',
        options: [
          'Web Development',
          'Data Analysis',
          'Machine Learning',
          'Mobile Apps',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which language is Django built with?',
        options: ['Python', 'JavaScript', 'Java', 'Ruby'],
        correctAnswer: 0,
      },
      {
        question: 'What is the command to start a new Django project?',
        options: [
          'django-admin startproject',
          'django createproject',
          'django init',
          'django newproject',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which file defines the URL patterns in a Django project?',
        options: ['urls.py', 'settings.py', 'views.py', 'models.py'],
        correctAnswer: 0,
      },
      {
        question: 'What does ORM stand for in Django?',
        options: [
          'Object-Relational Mapping',
          'Object-Request Mapping',
          'Object-Rendering Model',
          'Object-Routing Manager',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which command is used to create a new Django app?',
        options: [
          'python manage.py startapp',
          'django-admin startapp',
          'python manage.py createapp',
          'django createapp',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of "settings.py" in Django?',
        options: [
          'Configure project settings',
          'Define URL routes',
          'Create database models',
          'Render templates',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which template tag is used to loop in Django templates?',
        options: ['{% for %}', '{% loop %}', '{% each %}', '{% iterate %}'],
        correctAnswer: 0,
      },
      {
        question: 'What does the "migrate" command do in Django?',
        options: [
          'Applies database migrations',
          'Creates a new app',
          'Starts the server',
          'Generates templates',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which Django component handles HTTP requests?',
        options: ['Views', 'Models', 'Templates', 'Forms'],
        correctAnswer: 0,
      },
    ],
  },
  // UI/UX Design Principles
  {
    course: '6814c4215551f0dc8137d04c',
    questions: [
      {
        question: 'What does UI stand for in UI/UX design?',
        options: [
          'User Interface',
          'User Interaction',
          'Unified Interface',
          'User Integration',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What does UX stand for in UI/UX design?',
        options: [
          'User Experience',
          'User Execution',
          'Unified Experience',
          'User Exploration',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which principle emphasizes simplicity in design?',
        options: [
          'Minimalism',
          'Complexity',
          'Overloading',
          'Redundancy',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of wireframing in UI/UX design?',
        options: [
          'Create a design blueprint',
          'Write code',
          'Test the application',
          'Deploy the product',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which color theory concept involves using colors opposite each other on the color wheel?',
        options: [
          'Complementary colors',
          'Analogous colors',
          'Monochromatic colors',
          'Triadic colors',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary goal of usability testing?',
        options: [
          'Identify user pain points',
          'Improve visual design',
          'Increase loading speed',
          'Add more features',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which design principle ensures users can undo actions easily?',
        options: [
          'Forgiveness',
          'Consistency',
          'Hierarchy',
          'Proximity',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a "persona" in UX design?',
        options: [
          'A fictional user profile',
          'A design template',
          'A color scheme',
          'A navigation menu',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which tool is commonly used for prototyping in UI/UX design?',
        options: ['Figma', 'VS Code', 'Postman', 'GitHub'],
        correctAnswer: 0,
      },
      {
        question: 'What does the "Fitts’s Law" relate to in UI design?',
        options: [
          'Ease of clicking targets',
          'Color selection',
          'Typography size',
          'Image resolution',
        ],
        correctAnswer: 0,
      },
    ],
  },
  // Blockchain Basics
  {
    course: '6814c4215551f0dc8137d04d',
    questions: [
      {
        question: 'What is a blockchain primarily known for?',
        options: [
          'Decentralized ledger',
          'Centralized database',
          'Cloud storage',
          'Web hosting',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the first block in a blockchain called?',
        options: [
          'Genesis block',
          'Root block',
          'Initial block',
          'Prime block',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which cryptographic concept ensures data integrity in blockchain?',
        options: ['Hashing', 'Encryption', 'Decryption', 'Tokenization'],
        correctAnswer: 0,
      },
      {
        question: 'What is Bitcoin an example of?',
        options: [
          'Cryptocurrency',
          'Blockchain platform',
          'Smart contract',
          'Centralized system',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What does a "smart contract" do in blockchain?',
        options: [
          'Executes code automatically',
          'Stores data',
          'Encrypts transactions',
          'Manages user accounts',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which consensus mechanism is used by Bitcoin?',
        options: [
          'Proof of Work',
          'Proof of Stake',
          'Delegated Proof of Stake',
          'Proof of Authority',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of a "nonce" in blockchain mining?',
        options: [
          'Solve the hash puzzle',
          'Encrypt the block',
          'Store transaction data',
          'Validate user identity',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which blockchain platform popularized smart contracts?',
        options: ['Ethereum', 'Bitcoin', 'Ripple', 'Litecoin'],
        correctAnswer: 0,
      },
      {
        question: 'What does "decentralized" mean in the context of blockchain?',
        options: [
          'No single point of control',
          'Controlled by one entity',
          'Stored on a single server',
          'Accessible only offline',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a "public key" used for in blockchain transactions?',
        options: [
          'Receive funds',
          'Encrypt data',
          'Mine blocks',
          'Sign transactions',
        ],
        correctAnswer: 0,
      },
    ],
  },
];

const populateQuizzes = async () => {
  try {
    // Clear existing quizzes for these courses
    const courseIds = quizzes.map(quiz => quiz.course);
    await Quiz.deleteMany({ course: { $in: courseIds } });
    console.log('Cleared existing quizzes for specified courses.');

    // Insert new quizzes
    await Quiz.insertMany(quizzes);
    console.log('Quizzes populated successfully.');
  } catch (err) {
    console.error('Error populating quizzes:', err);
  } finally {
    mongoose.connection.close();
  }
};

populateQuizzes();