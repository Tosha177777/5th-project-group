import { useEffect } from 'react';

import { ReactComponent as Xcros } from '/src/svgs/icons/xcros.svg';
import {
  FirstLetter,
  Modal,
  Overlay,
  PhotoUploadBox,
  Text,
  TextWithBtn,
  Title,
  UserPhoto,
  XCrosBtn,
} from './SettingsModal.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '/src/redux/authSelectors';

const SettingsModal = ({ onClose }) => {
  const user = useSelector(selectAuthUserData);
  const userPhoto = user.avatarURL;
  const userEmail = user.email;
  const userName = user.name;

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
  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <TextWithBtn>
          <Title>Settings</Title>
          <XCrosBtn type="button" onClick={handleClick}>
            <Xcros onClick={handleClick} />
          </XCrosBtn>
        </TextWithBtn>
        <Text>Your photo</Text>
        <PhotoUploadBox>
          {user.avatarURL ? (
            <UserPhoto src={userPhoto} alt="avatar" />
          ) : (
            (userName || userEmail) && (
              <FirstLetter>
                {(userName || userEmail).charAt(0).toUpperCase()}
              </FirstLetter>
            )
          )}
        </PhotoUploadBox>
      </Modal>
    </Overlay>
  );
};

export default SettingsModal;
