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
  } else {
    return new Director();
  }
}

// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work function - this should just call the methods (they return strings)
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

// Test the functions
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// These will log the expected results
executeWork(createEmployee(200)); // Should log "Getting to work"
executeWork(createEmployee(1000)); // Should log "Getting to director tasks"

// Define the String literal type
type Subjects = 'Math' | 'History';

// The teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return `Teaching Math`;
  } else if (todayClass === 'History') {
    return `Teaching History`;
  }
}

// Expected results
console.log(teachClass('Math'));
console.log(teachClass('History'));
