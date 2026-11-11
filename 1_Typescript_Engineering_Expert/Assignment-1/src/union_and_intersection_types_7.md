## Union ( | )
* User Student অথবা Admin যেকোনো একটা হলে হবে

## Interface ( & )
* Common & Role দুইটাই থাকতে হবে এবং Student এবং Teacher এর যেকোন একটা property থাকলে হবে

**Example**
```
interface Common {
    name: string,
}

interface Student {
    studentId : number,
    class : number,
}

interface Teacher {
    teacherId: number,
    subject : string,
}

type Role = Student | Teacher;
type User = Common & Role;

const student: User = {
    name: "Khadiza",
    studentId: 225,
    class: 12,
}

const teacher: User = {
    name : "Khadiza",
    teacherId: 2,
    subject: "Economic"
}
```