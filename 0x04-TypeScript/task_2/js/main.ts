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

// Create a function to return an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function - exported as function declaration
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute the work - return the result instead of console.log
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Test executeWork function
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

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
