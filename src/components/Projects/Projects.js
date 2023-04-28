import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import billboard from "../../Assets/Projects/billboars-monitor.png";
import pokedex from "../../Assets/Projects/pokedex2.0.png";
import plazaetc from "../../Assets/Projects/plazaetc - monitor.png";
import quick from "../../Assets/Projects/quick - monitor.png";
import bonvivir from "../../Assets/Projects/bonvivir - monitor.png";
import tasklist from "../../Assets/Projects/tareas - monitor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Proyectos</strong>
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonvivir}
              isBlog={false}
              title="Bonvivir"
              description="Bonvivir es un club para apasionados del mundo del vino, cuenta con una tienda donde puede encontrar vinos, whiskies, aceites y mas con envios a toda la Argentina."
              demoLink="https://bonvivir.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quick}
              isBlog={false}
              title="Quick.pe"
              description="Una app de taxi, donde puedes acceder como conductor o como pasajero."
              demoLink="https://quick.pe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plazaetc}
              isBlog={false}
              title="PlazaETC"
              description="App E-comerce en donde se podrá comprar productos o servicios dentro de los establecimientos asociados a dicha app"
              demoLink="https://www.plazaetc.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="Es una lista de pokemones, Tiene hasta el #151"
              demoLink="https://pokedex-challenge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billboard}
              isBlog={false}
              title="Billboard"
              description="Esta app te permite buscar las carteleras de tus películas, series o juegos favoritos, se consume la API OMDB para consultar y ver los review que ofrece la página IMDB."
              demoLink="https://minabeluwu.github.io/Billboards-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasklist}
              isBlog={false}
              title="TaskList"
              description="Este es un proyecto que hice en mis inicios, Una lista de tareas para organizarse en el momento 😊"
              demoLink="https://minabeluwu.github.io/Task_list/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
