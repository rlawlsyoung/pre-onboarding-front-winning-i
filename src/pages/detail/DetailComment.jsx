import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const DetailComment = ({ data }) => {
  return (
    <DetailCommentContainer>
      <div className='comment-wrapper'>
        <p className='name'>{data.writerName}</p>
        <p className='comment-body'>{data.commentBody}</p>
      </div>
      <FaTrash className='remove' />
    </DetailCommentContainer>
  );
};

const DetailCommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .comment-wrapper {
    display: flex;
    height: 25px;

    .name {
      margin-right: 10px;
      font-weight: 700;
    }
  }

  .remove {
    cursor: pointer;
  }
`;

export default DetailComment;
