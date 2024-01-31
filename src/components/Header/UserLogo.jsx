import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Typography } from '@mui/material';

import { UserInfoBtn, UserName, UserPhoto } from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '../../redux/authSelectors';
import { ReactComponent as Chevron } from '../../svgs/icons/chevron.svg';

const HeaderUser = () => {
  const user = useSelector(selectAuthUserData);
  const userEmail = user.email;
  const userName = user.name;

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <UserInfoBtn variant="contained" {...bindTrigger(popupState)}>
            <UserName>{userName ? userName : userEmail}</UserName>
            <UserPhoto>
              {user.avatarURL ? (
                <img src={user.avatarURL} alt="" />
              ) : (
                (userName || userEmail) && (
                  <span>{(userName || userEmail).charAt(0).toUpperCase()}</span>
                )
              )}
            </UserPhoto>
            <Chevron />
          </UserInfoBtn>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default HeaderUser;
