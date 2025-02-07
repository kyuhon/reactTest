import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

function DetailMemo() {
  const paths = window.location.href.split('/');
  const url =
    'http://localhost:8080/api/memo/' +
    paths[paths.length - 2] +
    '/' +
    paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const navigate = useNavigate();
  const writer = useRef();
  const memo = useRef();

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>날짜</td>
              <td>{data.POST_DATE}</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input ref={writer} defaultValue={data.WRITER} />
              </td>
            </tr>
            <tr>
              <td>메모</td>
              <td>
                <input ref={memo} defaultValue={data.MEMO} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button
                  type="button"
                  onClick={() => {
                    const form = new FormData();
                    form.append('idx', data.IDX);
                    form.append('writer', writer.current.value);
                    form.append('memo', memo.current.value);
                    fetch('http://localhost:8080/api/memo/update', {
                      method: 'post',
                      body: form,
                    }).then(() => {
                      navigate('/memo');
                    });
                  }}
                >
                  수정
                </button>
                &nbsp;
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('삭제할까요?')) {
                      fetch(
                        `http://localhost:8080/api/memo/delete?idx=${data.IDX}`,
                        { method: 'delete' }
                      ).then(() => {
                        navigate('/memo');
                      });
                    }
                  }}
                >
                  삭제
                </button>
                &nbsp;
                <button onClick={() => navigate('/memo')}>목록</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default DetailMemo;
