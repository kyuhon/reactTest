import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Count() {
  let [count, setCount] = useState(0);
  let increase = () => {
    setCount(count + 1);
    console.log('count =' + count);
  };
  return (
    <Container className="mt-3">
      <div className="text-center">
        <Button variant="outline-danger" onClick={increase} className="me-3">
          좋아요
        </Button>
        {count}
      </div>
    </Container>
  );
}
export default Count;
