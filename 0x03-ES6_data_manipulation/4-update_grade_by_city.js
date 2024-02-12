export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const newArray = studentList.filter((element) => element.location === city);
  const studentGrades = newArray.map((student) => {
    const gradeRes = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeRes ? gradeRes.grade : 'N/A';

    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade,
    };
  });
  return studentGrades;
}
