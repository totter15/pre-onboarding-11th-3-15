import { OWNER, REPO } from '../../apis/clinet';
import * as S from './Header.style';

function Header() {
  return (
    <S.Header>
      <S.Title>
        {OWNER} / {REPO}
      </S.Title>
    </S.Header>
  );
}

export default Header;
