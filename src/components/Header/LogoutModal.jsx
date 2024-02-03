import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  BtnBox,
  CancelBtn,
  LogoutBtn,
  Modal,
  Overlay,
  Text,
  TextWithBtn,
  Title,
  XCrosBtn,
} from './LogoutModal.styled';
import { ReactComponent as Xcros } from '/src/svgs/icons/xcros.svg';
import { logoutThunk } from '/src/redux/authOperations.js';

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

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

  const onLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <TextWithBtn>
          <Title>Log out</Title>
          <XCrosBtn type="button">
            <Xcros onClick={handleClick} />
          </XCrosBtn>
        </TextWithBtn>
        <Text>Do you really want to leave?</Text>
        <BtnBox>
          <LogoutBtn onClick={onLogOut}>Log out</LogoutBtn>
          <CancelBtn onClick={handleClick}>Cancel</CancelBtn>
        </BtnBox>
      </Modal>
    </Overlay>
  );
};

export default LogoutModal;
