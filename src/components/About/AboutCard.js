import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Minabel Añez </span>,
            Soy Venezolana y resido en la<span className="purple"> Ciudad de Buenos Aires, Argentina</span>
            <br />Soy desarrolladora front-end y diseñadora web.  
            <br />
            <br />
            Aparte de mi profecion, algunas actividades que me encanta hacer son
          </p>
          <ul>
            <li className="about-activity">
            ✨ Jugar videojuegos
            </li>
            <li className="about-activity">
            ✨ Dibujar
            </li>
            <li className="about-activity">
            ✨Leer
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
