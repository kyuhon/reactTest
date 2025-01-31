import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Syntax() {
  return (
    <Container className="d-flex justify-content-center">
      <h2 className="text-center">기본문법</h2>
      <div className="border border-2 d-flex justify-content-center">
        <ListGroup as="ol" numbered className="w-50">
          <ListGroup.item as="li" href="/test/variable">
            변수
          </ListGroup.item>
          <ListGroup.item as="li" href="/test/state">
            state
          </ListGroup.item>
          <ListGroup.item as="li" href="/test/count">
            count
          </ListGroup.item>
          <ListGroup.item as="li" href="/test/roof">
            반복문
          </ListGroup.item>
        </ListGroup>
      </div>
    </Container>
  );
}
export default Syntax;
