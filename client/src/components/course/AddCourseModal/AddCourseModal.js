import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CourseContext } from "../../../contexts/CourseContext";

const AddCourseModal = () => {
  let history = useHistory();
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
    wave: "",
    status: "",
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
    wave,
    status,
  } = newCourse;

  const onChangeNewCourseForm = (event) =>
    setNewCourse({ ...newCourse, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddCourseData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addCourse(newCourse);
    setCourseShowToast({
      show: true,
      message: success ? `Add course '${courseName}' successful` : message,
      type: success ? "success" : "danger",
    });
    if (success) {
      setShowAddCourseModal(false);
      setTimeout(() => {
        history.push(`/course/${year}/${program}/${wave}/${department}/${courseName}`);
      }, 1000);
    }
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
      wave: "",
      status: "",
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
              name="courseCode"
              required
              aria-describedby="title-help"
              value={courseCode.toUpperCase()}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Course Name *
            </Form.Text>
            <Form.Control
              type="text"
              name="courseName"
              required
              aria-describedby="title-help"
              value={courseName.toUpperCase()}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer ID *
            </Form.Text>
            <Form.Control
              type="text"
              name="lecturerID"
              required
              aria-describedby="title-help"
              value={lecturerID.toUpperCase()}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer Name *
            </Form.Text>
            <Form.Control
              type="text"
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
              <option value="Bachelor 4 Year">Bachelor 4 Year</option>
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
              name="final"
              aria-describedby="title-help"
              value={final}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Wave
            </Form.Text>
            <Form.Control
              type="text"
              name="wave"
              aria-describedby="title-help"
              value={wave}
              onChange={onChangeNewCourseForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Status *
            </Form.Text>
            <Form.Control
              as="select"
              value={status}
              name="status"
              required
              onChange={onChangeNewCourseForm}
            >
              <option value="Department" muted>
                Status *
              </option>
              <option value="Waiting">Waiting</option>
              <option value="Teaching">Teaching</option>
              <option value="Finished">Finished</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Course
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddCourseModal;
