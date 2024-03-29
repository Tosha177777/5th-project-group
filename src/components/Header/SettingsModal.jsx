import { useEffect, useState } from 'react';

import { ReactComponent as Xcros } from '/src/svgs/icons/xcros.svg';
import { ReactComponent as Upload } from '/src/svgs/icons/upload.svg';
import {
  FirstLetter,
  Input,
  Label,
  Modal,
  Overlay,
  PhotoUploadBox,
  StyledSpan,
  Text,
  TextWithBtn,
  Title,
  UserPhoto,
  XCrosBtn,
} from './SettingsModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from '/src/redux/authSelectors';
import { userPhotoThunk } from '../../redux/userInfoOperations';
import SettingsModalForm from './SettingsModalForm/SettingsModalForm';

const SettingsModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectAuthUserData);
  const userPhoto = user.avatarURL;
  const userEmail = user.email;
  const userName = user.name;

  const [selectedFile, setSelectedFile] = useState(userPhoto);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      dispatch(userPhotoThunk(file));
    }
    return;
  };

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
          {selectedFile ? (
            <UserPhoto src={selectedFile} alt="avatar" />
          ) : (
            (userName || userEmail) && (
              <FirstLetter>
                {(userName || userEmail).charAt(0).toUpperCase()}
              </FirstLetter>
            )
          )}
          <Input
            type="file"
            accept="image/*"
            id="photo"
            onChange={handleFileChange}
          />
          <Label htmlFor="photo">
            <Upload />
            <StyledSpan>Upload photo</StyledSpan>
          </Label>
        </PhotoUploadBox>
        <SettingsModalForm onClose={onClose} />
      </Modal>
    </Overlay>
  );
};

export default SettingsModal;
