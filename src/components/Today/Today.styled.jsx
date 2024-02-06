import styled from 'styled-components';
import { ReactComponent as Trash } from '../../svgs/icons/trash.svg';
import { ReactComponent as Pencil } from '../../svgs/icons/pencil.svg';
import { ReactComponent as Plus } from '../../svgs/icons/plus.svg';
import { ReactComponent as Glass } from '../../svgs/icons/glass.svg';

export const TodayContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  height: 26px;
  border-bottom: 1px solid #d7e3ff;

  p {
    font-family: Roboto;
    font-size: 18px;
  }
`;

export const PencilSvg = styled(Pencil)`
  color: blue;
  margin-left: 120px;
  margin-right: 12px;
`;

export const BtnDelet = styled.button`
  background-color: #ffffff;
`;
export const TrashSvg = styled(Trash)`
  color: #ef5050;
`;
export const PlusSvg = styled(Plus)`
  position: relative;
  color: blue;
  top: -90%;
  left: -45%;
  padding: 0px 8px -10px 12px;
  margin: 0px 8px 0px 8px;
`;

export const BtnAdd = styled.button`
  width: 97px;
  height: 20px;
  padding-top: 8px;

  p {
    font-family: Roboto;
    font-size: 16px;
  }

  @media only screen and (min-width: 768px) {
    width: 114px;
    height: 24px;
  }
`;
export const Text = styled.p`
  margin-left: 8px;
  margin-right: 16px;
  font-size: 18px;
`;

export const GlassSvg = styled(Glass)`
  width: 26px;
  height: 26px;

  @media only screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
