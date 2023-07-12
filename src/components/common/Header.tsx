import { OWNER, REPO } from '../../apis/clinet';

function Header() {
  return (
    <header>
      {OWNER}/{REPO}
    </header>
  );
}

export default Header;
