import { useContext, useState, useEffect } from "react";
import { ResultContext } from "../../contexts/ResultContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateResultModal = () => {
  // Contexts
  const {
    resultState: { result },
    showUpdateResultModal,
    setShowUpdateResultModal,
    updateResult,
    setResultShowToast,
  } = useContext(ResultContext);

  // State
  const [updatedResult, setUpdatedResult] = useState(result);

  useEffect(() => setUpdatedResult(result), [result]);

  const {
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    levelOfTraining,
    typeOfTraining,
    major,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
    ectsGrade,
    status,
    date,
    wave,
  } = updatedResult;

  const onChangeUpdatedResultForm = (event) =>
    setUpdatedResult({
      ...updatedResult,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedResult(result);
    setShowUpdateResultModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateResult(updatedResult);
    setShowUpdateResultModal(false);
    setResultShowToast({
      show: true,
      message: success ? `Update ${studentName}'s result successful` : message,
      type: success ? "success" : "danger",
    });
    if(success) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <Modal show={showUpdateResultModal} onHide={closeDialog}>
      <Modal.Header>
        <Modal.Title>Making Change?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Student ID *
            </Form.Text>
            <Form.Control
              type="text"
              name="studentID"
              required
              aria-describedby="title-help"
              value={studentID}
              onChange={onChangeUpdatedResultForm}
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
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>
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
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              LecturerID *
            </Form.Text>
            <Form.Control
              type="text"
              name="lecturerID"
              required
              aria-describedby="title-help"
              value={lecturerID}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer *
            </Form.Text>
            <Form.Control
              type="text"
              name="lecturerName"
              required
              aria-describedby="title-help"
              value={lecturerName}
              onChange={onChangeUpdatedResultForm}
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
              onChange={onChangeUpdatedResultForm}
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
              onChange={onChangeUpdatedResultForm}
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
            Level of Training *
            </Form.Text>
            <Form.Control
              as="select"
              value={levelOfTraining}
              name="levelOfTraining"
              required
              onChange={onChangeUpdatedResultForm}
            >
              <option value="Gender" muted>
              Level of Training *
              </option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Type of Training *
            </Form.Text>
            <Form.Control
              as="select"
              value={typeOfTraining}
              name="typeOfTraining"
              required
              onChange={onChangeUpdatedResultForm}
            >
              <option value="Gender" muted>
                Type of Training *
              </option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Major *
            </Form.Text>
            <Form.Control
              as="select"
              value={major}
              name="major"
              required
              onChange={onChangeUpdatedResultForm}
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
              onChange={onChangeUpdatedResultForm}
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
              type="number"
              name="attendance"
              placeholder="Insert Attendance Grade Here"
              aria-describedby="title-help"
              value={attendance}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Exercises
            </Form.Text>
            <Form.Control
              type="number"
              name="exercises"
              placeholder="Insert Exercises Grade Here"
              aria-describedby="title-help"
              value={exercises}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Assignment
            </Form.Text>
            <Form.Control
              type="number"
              name="assignment"
              placeholder="Insert Assignment Grade Here"
              aria-describedby="title-help"
              value={assignment}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Reports
            </Form.Text>
            <Form.Control
              type="number"
              name="reports"
              placeholder="Insert Reports Grade Here"
              aria-describedby="title-help"
              value={reports}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Midterm
            </Form.Text>
            <Form.Control
              type="number"
              placeholder="Insert Midterm Grade Here"
              name="midterm"
              aria-describedby="title-help"
              value={midterm}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Final
            </Form.Text>
            <Form.Control
              type="number"
              placeholder="Insert Final Grade Here"
              name="final"
              aria-describedby="title-help"
              value={final}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Total
            </Form.Text>
            <Form.Control
              type="number"
              placeholder="20"
              name="total"
              placeholder="Insert Total Grade Here"
              aria-describedby="title-help"
              value={total}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              ECTS Grade
            </Form.Text>
            <Form.Control
              type="text"
              name="ectsGrade"
              placeholder="Insert Total Grade Here"
              aria-describedby="title-help"
              value={ectsGrade}
              onChange={onChangeUpdatedResultForm}
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
              onChange={onChangeUpdatedResultForm}
            >
              <option value="Status" muted>
                Status *
              </option>
              <option value="Pass">Pass</option>
              <option value="Retake">Retake</option>
              <option value="Redo">Redo</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Date
            </Form.Text>
            <Form.Control
              type="date"
              placeholder="Date of Exam"
              name="date"
              aria-describedby="title-help"
              value={date}
              onChange={onChangeUpdatedResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Wave
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Wave"
              name="wave"
              aria-describedby="title-help"
              value={wave}
              onChange={onChangeUpdatedResultForm}
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
          >
            Change
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateResultModal;
