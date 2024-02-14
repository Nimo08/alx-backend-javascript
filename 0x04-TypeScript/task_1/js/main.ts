// Teacher Interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}
// Testing teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
console.log(teacher3);

// Director Interface
interface Directors extends Teacher {
    numberOfReports: number;
}
 // Testing director interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);


// Function to print first character of firstName & full lastName
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string): string {
    return firstName.charAt(0) + '.' + lastName;
}

const teacher2 = printTeacher("John", "Doe");
console.log(teacher2);

// StudentClassConstructor Interface
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

// Student Interface
interface Student {
    workOnHomework(): string;
    displayName(): string;
}

// StudentClass Implementation
class StudentClass implements Student {
    
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
    
}
const student = new StudentClass('Jack', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());