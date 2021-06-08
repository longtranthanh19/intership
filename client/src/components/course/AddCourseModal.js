import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { CourseContext } from "../../contexts/CourseContext";

const AddCourseModal = () => {
  // Contexts
  const {
    showAddCourseModal,
    setShowAddCourseModal,
    addCourse,
    setCourseShowToast,
  } = useContext(CourseContext);

  // State
  const [newCourse, setNewCourse] = useState({
    courseCode: "",
    courseName: "",
    lecturerID: "",
    lecturerName: "",
    year: "",
    program: "",
    department: "",
    creditPoints: "ECTS",
    timeCommitment: "Hours",
    lecture: "Hours",
    tutorial: "Hours",
    practical: "Hours",
    attendance: "%",
    exercises: "%",
    assignment: "%",
    reports: "%",
    midterm: "%",
    final: "%",
  });

  const {
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    timeCommitment,
    lecture,
    tutorial,
    practical,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
  } = newCourse;

  const onChangeNewCourseForm = (event) =>
    setNewCourse({ ...newCourse, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddCourseData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addCourse(newCourse);
    // resetAddCourseData();
    setCourseShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  const resetAddCourseData = () => {
    setNewCourse({
      courseCode: "",
      courseName: "",
      lecturerID: "",
      lecturerName: "",
      year: "",
      program: "",
      department: "",
      creditPoints: "",
      timeCommitment: "",
      lecture: "",
      tutorial: "",
      practical: "",
      attendance: "",
      exercises: "",
      assignment: "",
      reports: "",
      midterm: "",
      final: "",
    });
    setShowAddCourseModal(false);
  };

  return (
    <Modal show={showAddCourseModal} onHide={closeDialog}>
      <Modal.Header>
        <Modal.Title>Add Course</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          {/* Student ID */}
          <Form.Group>
            <Form.Text id="title-help" muted>
              Course Code *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="BI9-157"
              name="courseCode"
              required
              aria-describedby="title-help"
              value={courseCode}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Course Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Linear Algebra"
              name="courseName"
              required
              aria-describedby="title-help"
              value={courseName}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer ID *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="L-03"
              name="lecturerID"
              required
              aria-describedby="title-help"
              value={lecturerID}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Doan Nhat Quang"
              name="lecturerName"
              required
              aria-describedby="title-help"
              value={lecturerName}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Year *
            </Form.Text>
            <Form.Control
              as="select"
              value={year}
              name="year"
              required
              onChange={onChangeNewCourseForm}
            >
              <option value="Gender" muted>
                Year *
              </option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Program *
            </Form.Text>
            <Form.Control
              as="select"
              value={program}
              name="program"
              required
              onChange={onChangeNewCourseForm}
            >
              <option value="Gender" muted>
                Program *
              </option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Text id="title-help" muted>
              Deparment *
            </Form.Text>
            <Form.Control
              as="select"
              placeholder="Department"
              value={department}
              name="department"
              required
              onChange={onChangeNewCourseForm}
            >
              <option value="Department" muted>
                Department
              </option>
              <option value="ICT">ICT</option>
              <option value="PMAB">PMAB</option>
              <option value="NANO">NANO</option>
              <option value="WEO">WEO</option>
              <option value="MST">MST</option>
              <option value="CS">CS</option>
              <option value="CHEM">CHEM</option>
              <option value="FST">FST</option>
              <option value="AMSN">AMSN</option>
              <option value="EER">EER</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Credit Points *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="4 ETC"
              name="creditPoints"
              required
              aria-describedby="title-help"
              value={creditPoints}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Time Commitment
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="20 hours"
              name="timeCommitment"
              required
              aria-describedby="title-help"
              value={timeCommitment}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecture
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="10 hours"
              name="lecture"
              aria-describedby="title-help"
              value={lecture}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Tutorial
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="2 hours"
              name="tutorial"
              required
              aria-describedby="title-help"
              value={tutorial}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Practical
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="2 hours"
              name="practical"
              required
              aria-describedby="title-help"
              value={practical}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Text id="title-help" muted>
            Evaluation
          </Form.Text>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Attendance
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="10%"
              name="attendance"
              aria-describedby="title-help"
              value={attendance}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Exercises
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="10%"
              name="exercises"
              aria-describedby="title-help"
              value={exercises}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Assignment
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="20%"
              name="assignment"
              aria-describedby="title-help"
              value={assignment}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Reports
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="20%"
              name="reports"
              aria-describedby="title-help"
              value={reports}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Midterm
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="50%"
              name="midterm"
              aria-describedby="title-help"
              value={midterm}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Final
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="50%"
              name="final"
              aria-describedby="title-help"
              value={final}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => window.location.reload()}
          >
            Add Course
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddCourseModal;
