import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { StudentContext } from "../../contexts/StudentContext";

const UpdateStudentModal = () => {
  // Contexts
  const {
    studentState: { student },
    showUpdateStudentModal,
    setShowUpdateStudentModal,
    updateStudent,
    setStudentShowToast,
  } = useContext(StudentContext);

  // State
  const [updatedStudent, setUpdatedStudent] = useState(student);

  useEffect(() => setUpdatedStudent(student), [student]);

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
  } = updatedStudent;

  const onChangeUpdatedStudentForm = (event) =>
    setUpdatedStudent({
      ...updatedStudent,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedStudent(student);
    setShowUpdateStudentModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateStudent(updatedStudent);
    setShowUpdateStudentModal(false);
    setStudentShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  // const resetAddPostData = () => {
  // 	setNewPost({ title: '', description: '', url: '', status: 'TO LEARN' })
  // 	setShowAddPostModal(false)
  // }

  return (
    <Modal show={showUpdateStudentModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Making Change?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Phone *
            </Form.Text>
            <Form.Control
              type="number"
              maxlength="10"
              placeholder="0912345678"
              pattern="/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/"
              name="phoneNumber"
              required
              aria-describedby="title-help"
              value={phoneNumber}
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
              onChange={onChangeUpdatedStudentForm}
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
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateStudentModal;
