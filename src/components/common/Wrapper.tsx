import { ReactNode } from 'react';
import * as S from './Wrapper.style';

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Wrapper;
