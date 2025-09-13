// Add the declaration merging for the Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
}

// All other imports and class code should follow
export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingReact > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
