import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/minabel-frontend-cv.pdf";
import pdfImg from "../../Assets/../Assets/minabel-frontend-cv.png";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1Maby6vYaIe7Dt921NJegc0pAm6v6etxd/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;
            <a 
            href="https://drive.google.com/file/d/1Maby6vYaIe7Dt921NJegc0pAm6v6etxd/view?usp=sharing" 
            download 
            target="blank"
            style={{ textDecoration: 'none', color: 'white'}}
            >
              Descargar CV
            </a>
          </Button>
        </Row>

        <Row className="resume">
            <img src={pdfImg} alt="pdf-img" style={{ width: '85%' }} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;
            <a 
            href="https://drive.google.com/file/d/1Maby6vYaIe7Dt921NJegc0pAm6v6etxd/view?usp=sharing" 
            download 
            target="blank"
            style={{ textDecoration: 'none', color: 'white'}}
            >
              Descargar CV
            </a>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
