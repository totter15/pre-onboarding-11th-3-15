import { ExclamationCircleOutlined } from '@ant-design/icons';
import * as S from './NotFound.style';

function NotFoundIssue() {
  return (
    <S.Container>
      <ExclamationCircleOutlined style={{ fontSize: '3rem' }} />
      <p>찾으시는 이슈가 존재하지 않습니다.</p>
      <p>링크를 다시한번 확인해 주세요.</p>
    </S.Container>
  );
}

export default NotFoundIssue;
