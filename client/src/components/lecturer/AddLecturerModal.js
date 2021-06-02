import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { LecturerContext } from "../../contexts/LecturerContext";

const AddLecturerModal = () => {
  // Contexts
  const {
    showAddLecturerModal,
    setShowAddLecturerModal,
    addLecturer,
    setLecturerShowToast,
  } = useContext(LecturerContext);

  // State
  const [newLecturer, setNewLecturer] = useState({
    lecturerID: "",
    lecturerName: "",
    gender: "",
    dateOfBirth: "",
    degree: "",
    email: "",
    phoneNumber: "",
    address: "",
    department: "",
  });

  const {
    lecturerID,
    lecturerName,
    gender,
    dateOfBirth,
    degree,
    email,
    phoneNumber,
    address,
    department,
  } = newLecturer;

  const onChangeNewLecturerForm = (event) =>
    setNewLecturer({ ...newLecturer, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddLecturerData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addLecturer(newLecturer);
    resetAddLecturerData();
    setLecturerShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  const resetAddLecturerData = () => {
    setNewLecturer({
      lecturerID: "",
      lecturerName: "",
      gender: "",
      dateOfBirth: "",
      degree: "",
      email: "",
      phoneNumber: "",
      address: "",
      department: "",
    });
    setShowAddLecturerModal(false);
  };

  return (
    <Modal show={showAddLecturerModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Add Lecturer</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          
          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer-ID *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="BI9-157"
              name="lecturerID"
              required
              aria-describedby="title-help"
              value={lecturerID}
              onChange={onChangeNewLecturerForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Lecturer Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Nguyen Van A"
              name="lecturerName"
              required
              aria-describedby="title-help"
              value={lecturerName}
              onChange={onChangeNewLecturerForm}
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
              onChange={onChangeNewLecturerForm}
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
              onChange={onChangeNewLecturerForm}
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
              onChange={onChangeNewLecturerForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Degree *
            </Form.Text>
            <Form.Control
              as="select"
              value={degree}
              name="degree"
              required
              onChange={onChangeNewLecturerForm}
            >
              <option value="Degree" muted>
                Degree *
              </option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
              <option value="Professor">Professor</option>
            </Form.Control>
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
              onChange={onChangeNewLecturerForm}
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
              onChange={onChangeNewLecturerForm}
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
              onChange={onChangeNewLecturerForm}
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
            Add Lecturer
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddLecturerModal;
