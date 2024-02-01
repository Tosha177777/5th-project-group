import { useState } from 'react';
import LogoutModal from './LogoutModal';
import { LogoutBtn, StyledPopover, StyledText } from './PopUp.styled';
import { ReactComponent as LogoutIc } from '/src/svgs/icons/exit.svg';
import { ReactComponent as Setting } from '/src/svgs/icons/6-tooth.svg';
import SettingsModal from './SettingsModal';

const PopUp = () => {
  const [isOpenedLog, setIsOpenedLog] = useState(false);
  const [isOpenedSet, setIsOpenedSet] = useState(false);

  const onSetToggleModal = () => {
    setIsOpenedSet(!isOpenedSet);
  };

  const onLogoutToggleModal = () => {
    setIsOpenedLog(!isOpenedLog);
  };

  return (
    <StyledPopover>
      <LogoutBtn onClick={onSetToggleModal}>
        <Setting />
        <StyledText>Settings</StyledText>
      </LogoutBtn>
      <LogoutBtn onClick={onLogoutToggleModal}>
        <LogoutIc />
        <StyledText>Log out</StyledText>
      </LogoutBtn>
      {isOpenedLog && <LogoutModal onClose={onLogoutToggleModal} />}
      {isOpenedSet && <SettingsModal onClose={onSetToggleModal} />}
    </StyledPopover>
  );
};

export default PopUp;
