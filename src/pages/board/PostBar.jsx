import { mainBlack, responsive } from '../../styles/theme';
import styled from 'styled-components';

const PostBar = ({ data }) => {
  console.log(data);
  return (
    <PostBarContainer>
      <div className='wrapper flex-center'>
        <p className='post-id'>{data.postId}</p>
        <h3 className='post-title'>{data.title}</h3>
      </div>
      <div className='wrapper flex-center'>
        <p className='post-writer'>{data.writerName}</p>
        <p className='post-date'>{data.date}</p>
      </div>
    </PostBarContainer>
  );
};

const PostBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 720px;
  border-bottom: 1px solid ${mainBlack};
  color: black;

  @media ${responsive.tablet} {
    width: 80vw;
  } ;
`;

export default PostBar;
