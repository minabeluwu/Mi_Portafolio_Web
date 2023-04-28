import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{margin: '0 0 20px 0'}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Ver"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
