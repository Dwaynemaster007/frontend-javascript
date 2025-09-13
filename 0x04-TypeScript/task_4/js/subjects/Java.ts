// Add the declaration merging for the Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
}

// All other imports and class code should follow
export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingJava > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
