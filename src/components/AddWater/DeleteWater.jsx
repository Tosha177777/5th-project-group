import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import {
  BtnBox,
  CancelBtn,
  DeleteBtn,
  Modal,
  Overlay,
  Text,
  TextWithBtn,
  Title,
  XCrosBtn,
} from './DeleteWater.styled';
import { ReactComponent as Xcros } from '/src/svgs/icons/xcros.svg';
// import { deleteWaterThunk } from '';

export const DeleteWater = ({ onClose, id }) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseX = () => {
    onClose();
  };

  const onClick = () => {
    console.log(id);
    // dispatch(deleteWaterThunk(id));
  };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <TextWithBtn>
          <Title>Delete entry</Title>
          <XCrosBtn type="button">
            <Xcros onClick={handleCloseX} />
          </XCrosBtn>
        </TextWithBtn>
        <Text>Are you sure you want to delete the entry?</Text>
        <BtnBox>
          <DeleteBtn onClick={onClick}>Delete</DeleteBtn>
          <CancelBtn onClick={handleCloseX}>Cancel</CancelBtn>
        </BtnBox>
      </Modal>
    </Overlay>
  );
};
