import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import addIcon from "../../assets/plus-circle-fill.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const UserList = ({ SingleUser, setShowAddUserModal, users }) => {
  // Search
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(users);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(users);
    } else {
      const filteredData = users.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setData(filteredData);
    }
  };

  return (
    <div>
      <h1
        className="main-title d-flex justify-content-around"
        style={{ padding: "10px" }}
      >
        USTH USER
      </h1>
      <Form className="search-box d-flex justify-content-end">
        <FormControl
          type="search"
          placeholder="Search"
          className="search-form"
          aria-label="Search"
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
        {data.map((user) => (
          <Col key={user._id} className="my-2">
            <SingleUser user={user} />
          </Col>
        ))}
        {data.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No User Found To Display!
          </h4>
        )}
      </Row>

      {/* Open Add Post Modal */}
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip>Add New User !!</Tooltip>}
      >
        <Button
          className="btn-floating"
          onClick={setShowAddUserModal.bind(this, true)}
        >
          <img src={addIcon} alt="add-post" width="60" height="60" />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default UserList;
