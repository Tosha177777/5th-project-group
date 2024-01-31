import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Typography } from '@mui/material';

import { UserInfoBtn, UserName, UserPhoto } from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '/src/redux/authSelectors';
import { ReactComponent as Chevron } from '/src/svgs/icons/chevron.svg';
import PopUp from './PopUp';

const HeaderUser = () => {
  const user = useSelector(selectAuthUserData);
  const userEmail = user.email;
  const userName = user.name;

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <UserInfoBtn
              color="primary"
              variant="contained"
              style={{
                backgroundColor: 'inherit',
                border: 'none',
                boxShadow: 'none',
              }}
              {...bindTrigger(popupState)}
            >
              <UserName>
                {userName ? userName : userEmail.split('@')[0]}
              </UserName>
              <UserPhoto>
                {user.avatarURL ? (
                  <img src={user.avatarURL} alt="" />
                ) : (
                  (userName || userEmail) && (
                    <span>
                      {(userName || userEmail).charAt(0).toUpperCase()}
                    </span>
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
              PaperProps={{
                style: {
                  width: '118px',
                  height: '88px',

                  marginTop: '2px',
                },
              }}
            >
              <Typography sx={{ p: 2 }}>
                <PopUp />
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
};

export default HeaderUser;
