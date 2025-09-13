// Add the declaration merging for the Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
}

// All other imports and class code should follow
export class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
