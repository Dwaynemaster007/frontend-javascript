// Define Director and Teacher interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// ... (keep all the interfaces and classes the same)

// Create a function to return an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function - using function expression instead of declaration
const isDirector = function(employee: any): employee is Director {
  return 'workDirectorTasks' in employee;
};

// Function to execute the work - using a completely different approach
const executeWork = function(employee: Director | Teacher) {
  const director = employee as Director;
  const teacher = employee as Teacher;
  
  if (director.workDirectorTasks) {
    console.log(director.workDirectorTasks());
  } else if (teacher.workTeacherTasks) {
    console.log(teacher.workTeacherTasks());
  }
};

// ... (rest of the code remains the same)
// Test createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Test executeWork function
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Define the String literal type
type Subjects = 'Math' | 'History';

// The teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Test teachClass function
console.log(teachClass('Math'));
console.log(teachClass('History'));
