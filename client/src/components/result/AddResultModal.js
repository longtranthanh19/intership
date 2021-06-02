import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { ResultContext } from "../../contexts/ResultContext";

const AddResultModal = () => {
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
    lecturerName: "",
    year: "",
    program: "",
    department: "",
    creditPoints: " ECTS",
    attendance: "",
    exercises: "",
    assignment: "",
    reports: "",
    midterm: "",
    final: "",
    total: "",
    status: "",
    date: "",
    wave: "",
  });

  const {
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
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
      message,
      type: success ? "success" : "danger",
    });
  };

  const resetAddResultData = () => {
    setNewResult({
      studentID: "",
      studentName: "",
      courseCode: "",
      courseName: "",
      lecturerName: "",
      year: "",
      program: "",
      department: "",
      creditPoints: " ECTS",
      attendance: "",
      exercises: "",
      assignment: "",
      reports: "",
      midterm: "",
      final: "",
      total: "",
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
              placeholder="BI9-157"
              name="studentID"
              required
              aria-describedby="title-help"
              value={studentID}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Student Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Nguyen Van A"
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
              placeholder="MATH 1.1"
              name="courseCode"
              required
              aria-describedby="title-help"
              value={courseCode}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="DOAN NHAT QUANG"
              name="lecturerName"
              required
              aria-describedby="title-help"
              value={lecturerName}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Course Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="PROBABILITIES AND STATISTICS"
              name="courseName"
              required
              aria-describedby="title-help"
              value={courseName}
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
              Program *
            </Form.Text>
            <Form.Control
              as="select"
              value={program}
              name="program"
              required
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              onChange={onChangeNewResultForm}
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
              placeholder="Insert Attendance Grade Here"
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
              type="text"
              name="exercises"
              placeholder="Insert Exercise Grade Here"
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
              type="text"
              name="assignment"
              placeholder="Insert Assignment Grade Here"
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
              type="text"
              name="reports"
              placeholder="Insert Reports Grade Here"
              aria-describedby="title-help"
              value={reports}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Text id="title-help" muted>
              Midterm
            </Form.Text>
            <Form.Control
              type="text"
              name="midterm"
              placeholder="Insert Midterm Grade Here"
              aria-describedby="title-help"
              value={midterm}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Final
            </Form.Text>
            <Form.Control
              type="text"
              name="final"
              placeholder="Insert Final Grade Here"
              aria-describedby="title-help"
              value={final}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Total
            </Form.Text>
            <Form.Control
              type="text"
              name="total"
              placeholder="Insert Total Grade Here"
              aria-describedby="title-help"
              value={total}
              onChange={onChangeNewResultForm}
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
              Date
            </Form.Text>
            <Form.Control
              type="text"
              name="date"
              placeholder="Date of Exam"
              aria-describedby="title-help"
              value={date}
              onChange={onChangeNewResultForm}
            />
          </Form.Group>

          
          <Form.Group>
            <Form.Text id="title-help" muted>
              Wave
            </Form.Text>
            <Form.Control
              type="text"
              name="wave"
              placeholder="2018-2021"
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
          <Button
            variant="primary"
            type="submit"
            onClick={() => window.location.reload()}
          >
            Add Result
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddResultModal;
