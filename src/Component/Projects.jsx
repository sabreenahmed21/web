import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);
  return (
    <section className="allproject">
      <Container>
        <h2 className="project_page-head">All Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col md={4} sm={12} key={project.id}>
              <Card key={project.id} className="card">
                <Card.Body className="card_body">
                  <Card.Img variant="top" src={project.photo} alt="img" />
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Link to={project.link} target="_blank" className="link_view">
                    View
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
