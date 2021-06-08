import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { StudentContext } from "../../contexts/StudentContext";

const AddStudentModal = () => {
  // Contexts
  const {
    showAddStudentModal,
    setShowAddStudentModal,
    addStudent,
    setStudentShowToast,
  } = useContext(StudentContext);

  // State
  const [newStudent, setNewStudent] = useState({
    studentID: "",
    studentName: "",
    gender: "",
    dateOfBirth: "",
    dateOfAdmission: "",
    email: "",
    phoneNumber: "",
    address: "",
    department: "",
    session: "",
  });

  const {
    studentID,
    studentName,
    gender,
    dateOfBirth,
    dateOfAdmission,
    email,
    phoneNumber,
    address,
    department,
    session,
  } = newStudent;

  const onChangeNewStudentForm = (event) =>
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddStudentData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addStudent(newStudent);
    resetAddStudentData();
    setStudentShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  const resetAddStudentData = () => {
    setNewStudent({
      studentID: "",
      studentName: "",
      gender: "",
      dateOfBirth: "",
      dateOfAdmission: "",
      email: "",
      phoneNumber: "",
      address: "",
      department: "",
      session: "",
    });
    setShowAddStudentModal(false);
  };

  return (
    <Modal show={showAddStudentModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          {/* Student ID */}

          <Form.Group>
            <Form.Text id="title-help" muted>
              Student-ID *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="BI9-157"
              name="studentID"
              required
              aria-describedby="title-help"
              value={studentID}
              onChange={onChangeNewStudentForm}
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
              onChange={onChangeNewStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Phone *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="0912345678"
              name="phoneNumber"
              required
              aria-describedby="title-help"
              value={phoneNumber}
              onChange={onChangeNewStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Gender
            </Form.Text>
            <Form.Control
              as="select"
              value={gender}
              name="gender"
              required
              onChange={onChangeNewStudentForm}
            >
              <option value="Gender" muted>
                Gender *
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Date Of Birth
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Date Of Birth *"
              name="dateOfBirth"
              required
              aria-describedby="title-help"
              value={dateOfBirth}
              onChange={onChangeNewStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Date of Admission *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="2018"
              name="dateOfAdmission"
              required
              aria-describedby="title-help"
              value={dateOfAdmission}
              onChange={onChangeNewStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Email *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="abc@gmail.com"
              name="email"
              required
              aria-describedby="title-help"
              value={email}
              onChange={onChangeNewStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Address *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="18B Hoang Quoc Viet"
              name="address"
              required
              aria-describedby="title-help"
              value={address}
              onChange={onChangeNewStudentForm}
            />
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
              onChange={onChangeNewStudentForm}
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
              Session
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Gen 9"
              name="session"
              required
              aria-describedby="title-help"
              value={session}
              onChange={onChangeNewStudentForm}
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
            // onClick={() => window.location.reload()}
          >
            Add Student
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddStudentModal;
