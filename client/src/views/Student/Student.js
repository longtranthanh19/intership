import TableStudentList from "../../components/student/TableStudentList";
import Container from "react-bootstrap/Container";

const Student = () => {
  return (
    <Container>
      <h1
        className="main-title d-flex justify-content-around"
        style={{ padding: "10px" }}
      >
      USTH STUDENTS
      </h1>
      <TableStudentList />
    </Container>
  );
};

export default Student;
