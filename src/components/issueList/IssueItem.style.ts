import { styled } from 'styled-components';

export const ItemBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex: 1;
  span {
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 10px;
    color: #2a8fff;
    padding: 6px 10px;
    border: 1px solid #2a8fff;
    border-radius: 20px;
    align-self: flex-start;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 140%;
    color: #4d4d4d;
  }
`;

export const SubBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  margin-bottom: 6px;
  font-weight: 600;
  color: #4d4d4d;
`;

export const CommentBox = styled.span`
  font-size: 0.85rem;
  color: #4d4d4d;
`;
