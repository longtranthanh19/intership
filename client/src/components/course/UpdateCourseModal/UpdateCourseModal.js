import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { CourseContext } from "../../../contexts/CourseContext";

const UpdateCourseModal = () => {
  // Contexts
  const {
    courseState: { course },
    showUpdateCourseModal,
    setShowUpdateCourseModal,
    updateCourse,
    setCourseShowToast,
  } = useContext(CourseContext);

  // State
  const [updatedCourse, setUpdatedCourse] = useState(course);

  useEffect(() => setUpdatedCourse(course), [course]);

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
  } = updatedCourse;

  const onChangeUpdatedCourseForm = (event) => {
    setUpdatedCourse({
      ...updatedCourse,
      [event.target.name]: event.target.value,
    });
  };

  const closeDialog = () => {
    setUpdatedCourse(course);
    setShowUpdateCourseModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateCourse(updatedCourse);
    setShowUpdateCourseModal(false);
    setCourseShowToast({
      show: true,
      message: success ? `Update course '${courseName}' successful` : message,
      type: success ? "success" : "danger",
    });
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <Modal show={showUpdateCourseModal} onHide={closeDialog}>
      <Modal.Header>
        <Modal.Title>Making Change?</Modal.Title>
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
              // required
              aria-describedby="title-help"
              value={courseCode}
              onChange={onChangeUpdatedCourseForm}
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
              value={courseName}
              onChange={onChangeUpdatedCourseForm}
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
              value={lecturerID}
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              Department *
            </Form.Text>
            <Form.Control
              as="select"
              value={department}
              name="department"
              required
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
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
              onChange={onChangeUpdatedCourseForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Wave *
            </Form.Text>
            <Form.Control
              type="text"
              name="wave"
              aria-describedby="title-help"
              required
              value={wave}
              onChange={onChangeUpdatedCourseForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Status
            </Form.Text>
            <Form.Control
              as="select"
              value={status}
              name="status"
              required
              onChange={onChangeUpdatedCourseForm}
            >
              {" "}
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
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateCourseModal;
