import React from "react";
import Form from "react-bootstrap/Form";
import Iframe from "react-iframe";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

const Calendar = () => {
  const [timeTable, setTimeTable] = useState([
    {
      id: 1,
      name: "Bachelor 1 of four-year program",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=2&bgcolor=%23ffffff&src=usth.edu.vn_vl9g5k49ev3hp7b5kk1r0gdi3g%40group.calendar.google.com&color=%230F4B38&ctz=Asia%2FSaigon",
    },
    {
      id: 2,
      name: "Bachelor 1 of third-year program",
      url: "https://calendar.google.com/calendar/embed?title=Bachelor+1&mode=WEEK&height=600&wkst=2&bgcolor=%23ffffff&src=v0qbbfube10coopf5vfiovf5qo@group.calendar.google.com&color=%235F6B02&ctz=Asia/Saigon",
    },
    {
      id: 3,
      name: "PMAB 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=2&bgcolor=%23FFFFFF&src=61mnit5js0109bghval53209i4@group.calendar.google.com&color=%232952A3&ctz=Asia/Saigon",
    },
    {
      id: 4,
      name: "PMAB 3rd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=2&bgcolor=%23FFFFFF&src=jpfuh6d6is213vfna1b0lhgh1o@group.calendar.google.com&color=%232952A3&ctz=Asia/Saigon",
    },
    {
      id: 5,
      name: "MST 2nd Year BMS",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=m7mvbv62ej6nkk29sm42amth2k%40group.calendar.google.com&ctz=Asia/Saigon",
    },
    {
      id: 6,
      name: "MST 2nd Year BME",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FHo_Chi_Minh&src=N2RyZDNwdGFmdWxpZTlraTJkZW1kM2x0OGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342",
    },
    {
      id: 7,
      name: "MST 3rd Year",
      url: "https://calendar.google.com/calendar/b/0/embed?height=500&wkst=1&bgcolor=%23FFFFFF&src=dbla14kth7ihhukvar3rrv0lt8%40group.calendar.google.com&color=%23865A5A&ctz=Asia%2FSaigon",
    },
    {
      id: 8,
      name: "WEO 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=ibqqs1n7fhu7odkgdjr6n5ci38@group.calendar.google.com&color=%23182C57&ctz=Asia/Saigon",
    },
    {
      id: 9,
      name: "WEO 3rd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=2&bgcolor=%23FFFFFF&src=bachelor.usth@gmail.com&color=%232952A3&ctz=Asia/Saigon",
    },
    {
      id: 10,
      name: "NANO 2nd Year",
      url: "https://calendar.google.com/calendar/embed?title=Bachelor+2+-+MSN&mode=WEEK&height=600&wkst=2&hl=en_GB&bgcolor=%23FFFFFF&src=jntsd44j5gm9og5dhel2hjbs6g@group.calendar.google.com&color=%23B1440E&ctz=Asia/Saigon",
    },
    {
      id: 11,
      name: "NANO 3rd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=2&bgcolor=%23FFFFFF&src=me.usth@gmail.com&color=%23125A12&ctz=Asia/Saigon",
    },
    {
      id: 12,
      name: "ICT 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=i7p4ol56gi8sqe0dq7uc3m0o4c%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 13,
      name: "ICT 3rd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=ict.usthedu%40gmail.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 14,
      name: "SA 2nd Year",
      url: "https://calendar.google.com/calendar/embed?title=Bachelor+2+-+SA&mode=WEEK&height=600&wkst=2&hl=en_GB&bgcolor=%23FFFFFF&src=ei9icf39grrlcnbnljq8l9ssnc@group.calendar.google.com&color=%23705770&ctz=Asia/Saigon",
    },
    {
      id: 15,
      name: "SA 3rd Year",
      url: "https://calendar.google.com/calendar/embed?title=Bachelor+3+-+SA&mode=WEEK&height=600&wkst=2&hl=en_GB&bgcolor=%23FFFFFF&src=u711ru98r4jj1749sen3f4j480@group.calendar.google.com&color=%23333333&ctz=Asia/Saigon",
    },
    {
      id: 16,
      name: "ENERGY 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=0i3ttj4oki313t2abpl9be7u1o@group.calendar.google.com&color=%235F6B02&ctz=Asia/Saigon",
    },
    {
      id: 17,
      name: "ENERGY 3rd Year",
      url: "https://calendar.google.com/calendar/embed?title=Bachelor+3+-+RE&mode=WEEK&height=600&wkst=2&bgcolor=%23FFFFFF&src=345slbkpmgf8pjcuc8um0tbq4c@group.calendar.google.com&color=%232952A3&ctz=Asia/Saigon",
    },
    {
      id: 18,
      name: "FST 2nd Year",
      url: "https://calendar.google.com/calendar/embed?src=6pg4d7umsgljhd1e7fe7glfj9s%40group.calendar.google.com&ctz=Asia/Saigon",
    },
    {
      id: 19,
      name: "FST 3rd Year",
      url: "https://calendar.google.com/calendar/b/0/embed?height=500&wkst=1&bgcolor=%23FFFFFF&src=p9dvjumik6tarquuip5642tt3s%40group.calendar.google.com&color=%23865A5A&ctz=Asia%2FSaigon",
    },
    {
      id: 20,
      name: "AE 1st Year",
      url: "https://calendar.google.com/calendar/embed?src=usth.edu.vn_td5fdn7ioa7n34ms3d0dt3u9l8%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 21,
      name: "AE 2nd Year",
      url: "https://calendar.google.com/calendar/b/1/embed?height=600&wkst=2&bgcolor=%23FFFFFF&src=nccbtmf1rl7m33dotq0v39qn9k%40group.calendar.google.com&color=%23B1365F&ctz=Asia%2FSaigon",
    },
    {
      id: 22,
      name: "AE 3rd Year Operation Engineering",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=c_oee705bqeu923v34lglna2bkls%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 23,
      name: "AE 3rd Year Maintenance",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=c_81gd8s0rs2ju9vfk2douvsh79c%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 24,
      name: "CHEM 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FHo_Chi_Minh&src=dXN0aC5lZHUudm5fcWkzZmRsMmRmbWhybnZ2Y2ZobzJqNjdpZTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23C0CA33",
    },
    {
      id: 25,
      name: "CS 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=e65gmijov921l1dbfq2p89ckvo%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 26,
      name: "CS 3rd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=6e1mlnn0diviabrod9kf6dj5dc%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
    {
      id: 27,
      name: "EPE 2nd Year",
      url: "https://calendar.google.com/calendar/embed?mode=WEEK&src=u9k9avjjkljsvovuf1paa42hg8%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh",
    },
  ]);

  const handleChange = (value) => {
    setTimeTable({ ...timeTable, name: value });
  };

  let body = null;

  if (timeTable.name === "Bachelor 1 of four-year program") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[0].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "Bachelor 1 of third-year program") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[1].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "PMAB 2nd Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[2].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "PMAB 3rd Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[3].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "MST 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[4].url}`}
            width="1000"
          ></Iframe>
        </div>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[5].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "MST 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[6].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "WEO 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[7].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "WEO 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[8].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "NANO 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[9].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "NANO 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[10].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "ICT 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[11].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "ICT 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[12].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "SA 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[13].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "SA 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[14].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "ENERGY 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[15].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "ENERGY 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[16].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "FST 2nd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[17].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "FST 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[18].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "AE 1st Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[19].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "AE 2nd Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[20].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "AE 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[21].url}`}
            width="1000"
          ></Iframe>
        </div>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[22].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "CHEM 2nd Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[23].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "CS 2nd Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[24].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  } else if (timeTable.name === "CS 3rd Year") {
    body = (
      <>
        <div className="d-flex justify-content-around">
          <Iframe
            frameborder="0"
            height="600"
            scrolling="no"
            src={`${timeTable[25].url}`}
            width="1000"
          ></Iframe>
        </div>
      </>
    );
  } else if (timeTable.name === "EPE 2nd Year") {
    body = (
      <div className="d-flex justify-content-around">
        <Iframe
          frameborder="0"
          height="600"
          scrolling="no"
          src={`${timeTable[26].url}`}
          width="1000"
        ></Iframe>
      </div>
    );
  }

  return (
    <Container>
      <h1
        className="d-flex justify-content-around"
        style={{ padding: "10px" }}
      >
      CALENDAR
      </h1>
      <Form>
        <Form.Group>
          <Form.Text id="title-help" muted>
            Course categories
          </Form.Text>
          <Form.Control
            as="select"
            name="gender"
            required
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="Program" muted>
              Program
            </option>
            <option value="Bachelor 1 of four-year program" name="name">
              Bachelor 1 of four-year program
            </option>
            <option value="Bachelor 1 of third-year program" name="name">
              Bachelor 1 of third-year program
            </option>
            <option value="PMAB 2nd Year" name="name">
              PMAB second year
            </option>
            <option value="PMAB 3rd Year" name="name">
              PMAB third year
            </option>
            <option value="MST 2nd Year" name="name">
              MST 2nd Year
            </option>
            <option value="MST 3rd Year" name="name">
              MST 3rd Year
            </option>
            <option value="WEO 2nd Year" name="name">
              WEO 2nd Year
            </option>
            <option value="WEO 3rd Year" name="name">
              WEO 3rd Year
            </option>
            <option value="NANO 2nd Year" name="name">
              NANO 2nd Year
            </option>
            <option value="NANO 3rd Year" name="name">
              NANO 3rd Year
            </option>
            <option value="ICT 2nd Year" name="name">
              ICT 2nd Year
            </option>
            <option value="ICT 3rd Year" name="name">
              ICT 3rd Year
            </option>
            <option value="SA 2nd Year" name="name">
              SA 2nd Year
            </option>
            <option value="SA 3rd Year" name="name">
              SA 3rd Year
            </option>
            <option value="ENERGY 2nd Year" name="name">
              ENERGY 2nd Year
            </option>
            <option value="ENERGY 3rd Year" name="name">
              ENERGY 3rd Year
            </option>
            <option value="FST 2nd Year" name="name">
              FST 2nd Year
            </option>
            <option value="FST 3rd Year" name="name">
              FST 3rd Year
            </option>
            <option value="AE 1st Year" name="name">
              AE 1st Year
            </option>
            <option value="AE 2nd Year" name="name">
              AE 2nd Year
            </option>
            <option value="AE 3rd Year" name="name">
              AE 3rd Year
            </option>
            <option value="CHEM 2nd Year" name="name">
              CHEM 2nd Year
            </option>
            <option value="CS 2nd Year" name="name">
              CS 2nd Year
            </option>
            <option value="CS 3rd Year" name="name">
              CS 3rd Year
            </option>
            <option value="EPE 2nd Year" name="name">
              EPE 2nd Year
            </option>
          </Form.Control>
        </Form.Group>
      </Form>
      {body}
    </Container>
  );
};

export default Calendar;
