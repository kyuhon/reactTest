import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
//import Cookies from "universal-cookie";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return [data, loading];
}

function DetailProduct() {
  //const cookies=new Cookies();
  //const level=cookies.get('level');
  const { product_code } = useParams();
  const [data, loading] = useFetch(
    'http://localhost:8080/product/detail/' + product_code
  );
  const navigate = useNavigate();
  const product_name = useRef();
  const price = useRef();
  const description = useRef();
  const img = useRef();
  if (loading) {
    return <div>loading</div>;
  } else {
    let src = '';
    let image_url = '';
    if (data.FILENAME !== '-') {
      src = `http://localhost:8080/static/images/${data.FILENAME}`;
      image_url = `<img src=${src} width='300px' height='300px'/>`;
    } else {
      image_url = '';
    }
    return (
      <>
        <Container className="p-5">
          <h2 className="text-center">상품명</h2>
          <Form.Group>
            <Form.Label>상품명</Form.Label>
            <Form.Control
              ref={product_name}
              defaultValue={data.PRODUCT_NAME}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>가격</Form.Label>
            <Form.Control
              ref={price}
              type="number"
              defaultValue={data.PRICE}
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>상품설명</Form.Label>
            <Form.Control
              ref={description}
              defaultValue={data.DESCRIPTION}
              as="textarea"
              rows={5}
            />
          </Form.Group>
          <Form.Group className="mb-3  d-flex justify-content-center">
            <span dangerouslySetInnerHTML={{ __html: image_url }}></span>
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
                form.append('product_code', data.PRODUCT_CODE);
                form.append('product_name', product_name.current.value);
                form.append('price', price.current.value);
                form.append('description', description.current.value);
                if (img.current.files.length > 0) {
                  form.append('img', img.current.files[0]);
                }
                fetch('http://localhost:8080/product/update', {
                  method: 'post',
                  encType: 'multipart/form-data',
                  body: form,
                }).then(() => {
                  navigate('/product/list');
                });
              }}
              className="btn btn-info"
            >
              수정
            </Button>

            <Button
              type="button"
              onClick={() => {
                if (window.confirm('삭제할까요?')) {
                  fetch(
                    `http://localhost:8080/product/delete/${data.PRODUCT_CODE}`
                  ).then(() => {
                    navigate('/product/list');
                  });
                }
              }}
              className="btn btn-danger"
            >
              삭제
            </Button>

            <Button
              onClick={() => navigate('/product/list')}
              className="btn btn-info"
            >
              목록
            </Button>
          </div>
        </Container>
      </>
    );
  }
}

export default DetailProduct;
