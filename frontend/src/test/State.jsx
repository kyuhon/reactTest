import { useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function State() {
  //멤버변수(기본타입,객체타입), 멤버함수(계산함수, 이벤트함수)
  const [names, setName] = useState(['홍길동', '제우스', '김동진']);
  return (
    <Container>
      <Container className="mt-3">
        <Stack gap={0}>
          <div className="p-2 text-bg-primary text-center">{names[0]}</div>
          <div className="p-2 text-bg-secondary text-center">{names[1]}</div>
          <div className="p-2 text-bg-info text-center">{names[2]}</div>
        </Stack>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Block level button
          </Button>
          <Button variant="secondary" size="lg">
            Block level button
          </Button>
        </div>
      </Container>
    </Container>
  );
}
export default State;
