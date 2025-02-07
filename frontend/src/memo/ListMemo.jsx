import React, { useRef, useEffect, useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router';

export default function ListMemo() {
  const navigate = useNavigate();
  const [items, setMemoList] = useState([]);
  const writer = useRef();
  const memo = useRef();
  const search_memo = useRef();

  //http://localhost:8080/api/memo 메모장정보를 가져와라
  function getList(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMemoList(data);
      });
  }

  //마운트 되자마자 메모장 정보를 가져와라.
  useEffect(() => {
    getList('http://localhost:8080/api/memo');
  }, []);

  return (
    <>
      <Container className="mt-3 p-3">
        <h2 className="text-center">메모장</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="이름 입력"
          className="mb-1"
        >
          <Form.Control
            type="text"
            ref={writer}
            placeholder="이름 입력해주세요"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="메모입력">
          <Form.Control
            type="text"
            ref={memo}
            placeholder="멤모장입력을 입력해주세요"
          />
        </FloatingLabel>
        <div className="d-grid mt-1">
          <Button
            variant="outline-primary"
            onClick={() => {
              const form = new FormData();
              form.append('writer', writer.current.value);
              form.append('memo', memo.current.value);
              //서버에게 메모장 저장요청
              fetch('http://localhost:8080/memo/insert', {
                method: 'post',
                body: form,
              }).then(() => {
                //메모장정보를 가져와라 요청
                getList('http://localhost:8080/memo');
                writer.current.value = '';
                memo.current.value = '';
              });
            }}
          >
            메모장저장
          </Button>
        </div>
      </Container>
    </>
  );
}
