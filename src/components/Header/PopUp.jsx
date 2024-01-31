import { useState } from 'react';
import LogoutModal from './LogoutModal';
import { LogoutBtn, StyledPopover, StyledText } from './PopUp.styled';
import { ReactComponent as LogoutIc } from '/src/svgs/icons/exit.svg';

const PopUp = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onToggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <StyledPopover>
      <LogoutBtn onClick={onToggleModal}>
        <LogoutIc />
        <StyledText>Log out</StyledText>
      </LogoutBtn>
      {isOpened && <LogoutModal onClose={onToggleModal} />}
    </StyledPopover>
  );
};

export default PopUp;
