import students from '../dummy/students.js';

class StudentController {

      static welcome(req, res) {
            return res.status(200).json({
                  message: "Tēnā koutou! Welcome humans! 你好！Добро пожаловать!",
            });
      }
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
                  message: "Student record not found!",
            });
      }

      // error
      static throwLazersError(req, res) {
            throw new Error('lazers offline');
      }

      static BuildInfo(req, res) {

            res.header("Content-Type", 'application/json');
            //using express way ;)
            res.sendFile('build.info', { root: '.' });

            // fs.readFile("build.info", "utf8", function (err, contents) {
            //       console.log(contents);
            //       var biobj = JSON.parse(contents);
            //      return res.json(biobj);
            // });

      }

}
export default StudentController;
