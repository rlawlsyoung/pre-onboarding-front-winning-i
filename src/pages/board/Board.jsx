import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { postDataAtom } from '../../atom';
import PostBar from './PostBar';
import { Stack, Pagination } from '@mui/material';
import styled from 'styled-components';

const Board = () => {
  const postData = useRecoilValue(postDataAtom);

  const lastPage =
    postData.length % 5 === 0
      ? parseInt(postData.length / 5)
      : parseInt(postData.length / 5) + 1;

  const firstPageData = postData.slice(postData.length - 5, postData.length);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(firstPageData);

  useEffect(() => {
    if (page === lastPage) {
      setData(postData.slice(5 * (page - 1)));
    } else {
      setData(postData.slice(5 * (page - 1), 5 * (page - 1) + 5));
    }
  }, [page]);

  const handlePage = (e, n) => {
    setPage(n);
  };

  return (
    <BoardContainer>
      <h2 className='title'>게시판</h2>
      <Stack alignItems='center'>
        <Stack direction='column' className='post-container'>
          {data.reverse().map(el => {
            return (
              <Stack className='stack' key={el.postId}>
                <Link to={`/detail/${el.postId}`}>
                  <PostBar data={el} />
                </Link>
              </Stack>
            );
          })}
        </Stack>
        <Pagination
          className='pagination'
          count={lastPage}
          color='success'
          size='large'
          onChange={(e, n) => handlePage(e, n)}
        />
      </Stack>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin-bottom: 50px;
    font-size: 28px;
    font-weight: 700;
  }

  .post-container {
    border: 1px solid black;
    border-bottom: none;
  }

  .pagination {
    position: absolute;
    bottom: 60px;
  }
`;

export default Board;
