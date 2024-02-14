namespace Subjects {
    export class Subject {
        teacher: Teacher;
        constructor(teacher: Teacher) {
            this.teacher = teacher;

        }
        // void is used as the return type ; because this is a setter
        setTeacher(newTeacher: Teacher): void {
            this.teacher = newTeacher;
        }
    }
}