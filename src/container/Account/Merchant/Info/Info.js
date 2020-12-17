import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ListGroup, Collapse, Button } from "react-bootstrap";

function Info() {
  const id = useParams();
  const [general, setGeneral] = useState(true);
  const [bank, setBank] = useState(true);
  console.log("id", id);
  return (
    <div>
      <h1>Merchant Info</h1>
      <ListGroup>
        <ListGroup.Item>
          <div>
            <h2> 1 General Information</h2>
            <Button
              onClick={() => setGeneral(!general)}
              aria-controls="example-fade-text"
              aria-expanded={general}
            >
              ^
            </Button>
          </div>

          <Collapse in={general}>
            <div id="example-fade-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <div>
            <h2> 1 General Information</h2>
            <Button
              onClick={() => setBank(!bank)}
              aria-controls="example-fade-text"
              aria-expanded={bank}
            >
              ^
            </Button>
          </div>
          <Collapse in={bank}>
            <div id="example-fade-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Info;
