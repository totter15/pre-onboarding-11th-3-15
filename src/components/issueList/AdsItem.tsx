import { AdsType } from '../../interfaces/issueType';
import * as S from './AdsItem.style';

function AdsItem({ item }: { item: AdsType }) {
  const { img, url } = item ?? {};

  return (
    <S.AdsBox>
      <a href={url}>
        <S.AdsImg alt="advertisement" src={img} />
      </a>
    </S.AdsBox>
  );
}

export default AdsItem;
