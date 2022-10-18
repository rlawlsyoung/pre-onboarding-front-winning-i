import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { postDataAtom, pageAtom } from '../../atom';
import PostBar from './PostBar';
import { responsive, mainGray } from '../../styles/theme';
import { Stack, Pagination } from '@mui/material';
import styled from 'styled-components';

const Board = () => {
  const postData = useRecoilValue(postDataAtom);

  const lastPage =
    postData.length % 5 === 0
      ? parseInt(postData.length / 5)
      : parseInt(postData.length / 5) + 1;

  const firstPageData = postData.slice(postData.length - 5, postData.length);
  const [page, setPage] = useRecoilState(pageAtom);
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
        <div className='board-head'>
          <div className='wrapper flex-center'>
            <p className='post-id flex-center'>번호</p>
            <h3 className='post-title'>제목</h3>
          </div>
          <div className='wrapper flex-center'>
            <p className='post-writer flex-center'>작성자</p>
            <p className='post-date flex-center'>작성일</p>
          </div>
        </div>
        <Stack direction='column'>
          {data.map(el => {
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
          defaultPage={page}
          color='success'
          size='large'
          onChange={handlePage}
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
    margin-bottom: 55px;
    font-size: 28px;
    font-weight: 700;
  }

  .board-head {
    display: flex;
    justify-content: space-between;
    width: 810px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${mainGray};
    color: ${mainGray};
    font-size: 13px;
    font-weight: 700;

    .post-id {
      width: 35px;
    }

    .post-date {
      width: 91.55px;
    }
  }

  .pagination {
    position: absolute;
    bottom: 70px;
  }

  @media ${responsive.tablet} {
    .board-head {
      width: 90vw;
    }
  } ;
`;

export default Board;
