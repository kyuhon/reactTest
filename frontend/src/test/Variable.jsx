import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

function Variable() {
  let name = '제우스';
  let message = '안녕하세요';
  return (
    <Container className="mt-3">
      <Stack gap={0}>
        <div className="p-2 text-bg-primary text-center">{name}님</div>
        <div className="p-2 text-bg-secondary text-center">{message}</div>
      </Stack>
    </Container>
  );
}

export default Variable;
