// Director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class
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

// Teacher class
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

// Returns either a Director or a Teacher instance
function createEmployee(salary: string | number): Teacher | Director | null {
    if (typeof salary === 'number') {
        if (salary < 500) {
            return new Teacher();
        } else {
            return new Director();
        }
    } else {
        return null;
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Used as a type predicate and if the employee is a director
function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

// If employee is a Director, call workDirectorTasks
// If employee is a Teacher, call workTeacherTasks
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

const teacher = executeWork(createEmployee(200));
console.log(teacher);
const director = executeWork(createEmployee(1000));
console.log(director);

// Subjects is defined as a string literal type using 'type' keyword
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass == 'History') {
        return 'Teaching History'
    }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));