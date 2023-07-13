import { ExclamationCircleOutlined } from '@ant-design/icons';
import * as S from './NotFound.style';

function NotFound() {
  return (
    <S.Container>
      <ExclamationCircleOutlined style={{ fontSize: '3.5rem' }} />
      <p>찾으시는 페이지가 존재하지 않습니다.</p>
      <p>링크를 다시한번 확인해 주세요.</p>
    </S.Container>
  );
}

export default NotFound;
