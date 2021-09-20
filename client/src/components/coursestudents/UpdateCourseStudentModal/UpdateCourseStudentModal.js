import { useContext, useState, useEffect } from "react";
import { CourseStudentContext } from "../../../contexts/CourseStudentContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateCourseStudentModal = () => {
  const {
    studentCourseState: { student },
    showUpdateCourseStudentModal,
    setShowUpdateCourseStudentModal,
    updateCourseStudent,
    setCourseStudentShowToast,
  } = useContext(CourseStudentContext);

  const [updatedCourseStudent, setUpdatedCourseStudent] = useState(student);

  useEffect(() => setUpdatedCourseStudent(student), [student]);

  const {
    courseCode,
    courseName,
    studentID,
    studentName,
    year,
    program,
    department,
    wave,
  } = updatedCourseStudent;

  const onChangeUpdatedCourseStudentForm = (event) =>
    setUpdatedCourseStudent({
      ...updatedCourseStudent,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedCourseStudent(student);
    setShowUpdateCourseStudentModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateCourseStudent(
      updatedCourseStudent
    );
    setShowUpdateCourseStudentModal(false);
    setCourseStudentShowToast({
      showToast: true,
      messageToast: success
        ? `Update student ${studentName}'s information successful`
        : message,
      typeToast: success ? "success" : "danger",
    });
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <Modal show={showUpdateCourseStudentModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Making Change?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Course Code *
            </Form.Text>
            <Form.Control
              type="text"
              name="courseCode"
              required
              aria-describedby="title-help"
              value={courseCode}
              disabled
              onChange={onChangeUpdatedCourseStudentForm}
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
              disabled
              onChange={onChangeUpdatedCourseStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Student-ID *
            </Form.Text>
            <Form.Control
              type="text"
              name="studentID"
              required
              aria-describedby="title-help"
              value={studentID}
              onChange={onChangeUpdatedCourseStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Student Name *
            </Form.Text>
            <Form.Control
              type="text"
              name="studentName"
              required
              aria-describedby="title-help"
              value={studentName}
              onChange={onChangeUpdatedCourseStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" >
              Department *
            </Form.Text>
            <Form.Control
              as="select"
              value={department}
              name="department"
              required
              onChange={onChangeUpdatedCourseStudentForm}
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
              Year
            </Form.Text>
            <Form.Control
              as="select"
              value={year}
              name="year"
              required
              disabled
              onChange={onChangeUpdatedCourseStudentForm}
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
              placeholder="Department"
              value={program}
              name="program"
              required
              disabled
              onChange={onChangeUpdatedCourseStudentForm}
            >
              <option value="Department" muted>
                Program
              </option>
              <option value="Bachelor 4 Year">Bachelor 4 Year</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Wave *
            </Form.Text>
            <Form.Control
              type="text"
              name="wave"
              required
              disabled
              aria-describedby="title-help"
              value={wave}
              onChange={onChangeUpdatedCourseStudentForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update Student
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateCourseStudentModal;
