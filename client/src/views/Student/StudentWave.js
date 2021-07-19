import TableStudentWave from "../../components/student/TableStudentWave";
import Container from "react-bootstrap/Container";

const StudentWave = (props) => {
  const major = props.match.params.major;

  let body = null;
  body = (
    <>
      <h1
        className="main-title d-flex justify-content-around"
        style={{ padding: "10px" }}
      >
        USTH STUDENTS
      </h1>
      <div>
        <p style={{ fontWeight: 550 }}>
          Department:
          <span style={{ fontWeight: 350 }}> {major}</span>
        </p>
      </div>
      <TableStudentWave major={major} />
    </>
  );

  return <Container>{body}</Container>;
};

export default StudentWave;
