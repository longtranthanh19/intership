import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { useHistory } from "react-router-dom";

const AddResultModal = () => {
  let history = useHistory();
  // Contexts
  const {
    showAddResultModal,
    setShowAddResultModal,
    addResult,
    setResultShowToast,
  } = useContext(ResultContext);

  // State
  const [newResult, setNewResult] = useState({
    studentID: "",
    studentName: "",
    courseCode: "",
    courseName: "",
    lecturerID: "",
    lecturerName: "",
    year: "",
    levelOfTraining: "",
    typeOfTraining: "",
    major: "",
    creditPoints: " ECTS",
    attendance: "",
    exercises: "",
    assignment: "",
    reports: "",
    midterm: "",
    final: "",
    total: "",
    ectsGrade: "",
    status: "",
    date: "",
    wave: "",
  });

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
  } = newResult;

  const onChangeNewResultForm = (event) =>
    setNewResult({ ...newResult, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddResultData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addResult(newResult);
    resetAddResultData();
    setResultShowToast({
      show: true,
      message: success
        ? `Add ${studentName}'s result in course '${courseName}' successful`
        : message,
      type: success ? "success" : "danger",
    });

    if (success) {
      setTimeout(() => {
        // window.location.reload();
        history.push(
          `/result/${year}/${levelOfTraining}/${wave}/${major}/${courseName}`
        );
      }, 2000);
    }
  };

  const resetAddResultData = () => {
    setNewResult({
      studentID: "",
      studentName: "",
      courseCode: "",
      courseName: "",
      lecturerID: "",
      lecturerName: "",
      year: "",
      levelofTraining: "",
      typeofTraining: "",
      major: "",
      creditPoints: " ECTS",
      attendance: "",
      exercises: "",
      assignment: "",
      reports: "",
      midterm: "",
      final: "",
      total: "",
      ectsGrade: "",
      status: "",
      date: "",
      wave: "",
    });
    setShowAddResultModal(false);
  };

  return (
    <Modal show={showAddResultModal} onHide={closeDialog}>
      <Modal.Header>
        <Modal.Title>Add Result</Modal.Title>
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
              value={studentID.toUpperCase()}
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              value={courseCode.toUpperCase()}
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              value={lecturerID.toUpperCase()}
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
            >
              <option value="Department" muted>
                Major
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
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Text className="main-title" muted>
            Evaluation
          </Form.Text>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Attendance
            </Form.Text>
            <Form.Control
              type="number"
              name="attendance"
              aria-describedby="title-help"
              value={attendance}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Exercises
            </Form.Text>
            <Form.Control
              type="number"
              name="exercises"
              aria-describedby="title-help"
              value={exercises}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Assignment
            </Form.Text>
            <Form.Control
              type="number"
              name="assignment"
              aria-describedby="title-help"
              value={assignment}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Reports
            </Form.Text>
            <Form.Control
              type="number"
              name="reports"
              aria-describedby="title-help"
              value={reports}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Midterm *
            </Form.Text>
            <Form.Control
              type="number"
              name="midterm"
              required
              aria-describedby="title-help"
              value={midterm}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Final *
            </Form.Text>
            <Form.Control
              type="number"
              name="final"
              required
              aria-describedby="title-help"
              value={final}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Total *
            </Form.Text>
            <Form.Control
              type="number"
              name="total"
              required
              aria-describedby="title-help"
              value={total}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              ECTS Grade
            </Form.Text>
            <Form.Control
              as="select"
              name="ectsGrade"
              required
              value={ectsGrade}
              onChange={onChangeNewResultForm}
            >
              <option value="ECTS Grade" muted>
                ECTS Grade *
              </option>
              <option value="A">A</option>
              <option value="A -">A -</option>
              <option value="B">B</option>
              <option value="B -">B -</option>
              <option value="C">C</option>
              <option value="C -">C -</option>
              <option value="D">D</option>
              <option value="D -">D -</option>
              <option value="F">F</option>
            </Form.Control>
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
              onChange={onChangeNewResultForm}
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
              Date of Exam
            </Form.Text>
            <Form.Control
              type="date"
              name="date"
              aria-describedby="title-help"
              value={date}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Wave *
            </Form.Text>
            <Form.Control
              type="text"
              name="wave"
              required
              aria-describedby="title-help"
              value={wave}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Result
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddResultModal;
