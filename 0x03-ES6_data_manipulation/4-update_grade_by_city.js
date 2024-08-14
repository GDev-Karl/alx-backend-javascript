const updateStudentGradeByCity = (students, city, newGrades) => {
  for (const student of students) {
    if (student.location === city) {
      let gradeFound = false;
      for (const grade of newGrades) {
        if (student.id === grade.studentId) {
          student.grade = grade.grade;
          gradeFound = true;
        }
      }
      if (!gradeFound) {
        student.grade = "N/A";
      }
    }
  }
  return students;
};

export default updateStudentGradeByCity;
