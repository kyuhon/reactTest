import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Table,
} from 'react-bootstrap';

function WriteProduct() {
  const navigate = useNavigate();
  const product_name = useRef();
  const price = useRef();
  const description = useRef();
  const img = useRef();

  return (
    <>
      <Container className="p-5">
        <h2>상품 정보 등록</h2>
        <Form>
          <Form.Group>
            <Form.Label>상품명</Form.Label>
            <Form.Control
              ref={product_name}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>가격</Form.Label>
            <Form.Control ref={price} type="number" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>상품설명</Form.Label>
            <Form.Control ref={description} as="textarea" rows={5} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>상품이미지</Form.Label>
            <Form.Control ref={img} type="file" />
          </Form.Group>
          <div className="d-flex justify-content-center gap-2">
            <Button
              type="button"
              onClick={() => {
                const form = new FormData();
                form.append('product_name', product_name.current.value);
                form.append('price', price.current.value);
                form.append('description', description.current.value);
                if (img.current.files.length > 0) {
                  form.append('img', img.current.files[0]);
                }
                fetch('http://localhost:8080/product/insert', {
                  method: 'post',
                  encType: 'multipart/form-data',
                  body: form,
                }).then(() => {
                  navigate('/product/list');
                });
              }}
              className="btn btn-primary"
            >
              확인
            </Button>
            &nbsp;
            <Button
              onClick={() => navigate('/product')}
              className="btn btn-info"
            >
              목록
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default WriteProduct;
