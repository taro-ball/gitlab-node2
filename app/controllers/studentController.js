import students from '../dummy/students.js';
import fs from 'fs';
class StudentController {
      // Get all students
      static getAllStudents(req, res) {
            return res.status(200).json({
                  students,
                  message: "All the students",
            });
      }
      // Get a single student
      static getSingleStudent(req, res) {
            const findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
            if (findStudent) {
                  return res.status(200).json({
                        student: findStudent,
                        message: "A single student record",
                  });
            }
            return res.status(404).json({
                  message: "Student record not found",
            });
      }

      // error
      static throwLazersError(req, res) {
            throw new Error('lazers offline');
      }

      static BuildInfo(req, res) {
            fs.readFile("build.info", "utf8", function (err, contents) {
                  console.log(contents);
                  return res.send(contents);
            });

      }

}
export default StudentController;
