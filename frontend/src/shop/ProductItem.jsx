import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductItem({ product_code, product_name, price, filename }) {
  let loading = false;
  const url = `http://localhost:8080/static/images/${filename}`;
  if (loading) {
    return <div>loading</div>;
  } else {
    let img = '';
    if (filename !== '-') {
      img = `<img src=${url} width='100px' height='100px'/><br />`;
    } else {
      img = '[상품 이미지 미등록]<br />';
    }
    return (
      <Card style={{ width: '8rem' }}>
        <span dangerouslySetInnerHTML={{ __html: img }}></span>
        <Card.Body>
          <Card.Title>{product_name}</Card.Title>
          <Link to={`/product/detail/${product_code}`}>
            <Card.Text>가격</Card.Text>
            <Card.Text>{price}원</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductItem;
