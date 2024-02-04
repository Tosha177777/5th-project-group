import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import {
  FirstLetter,
  Photo,
  UserInfoBtn,
  UserName,
  UserPhoto,
} from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '/src/redux/authSelectors';
import { ReactComponent as Chevron } from '/src/svgs/icons/chevron.svg';
import PopUp from './PopUp';
import { useEffect } from 'react';

const HeaderUser = () => {
  const user = useSelector(selectAuthUserData);
  const userEmail = user.email;
  const userName = user.name;
  const userPhoto = user.avatarURL;

  useEffect(() => {}, [userPhoto]);

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
                paddingRight: 0,
              }}
              {...bindTrigger(popupState)}
            >
              <UserName>
                {userName ? userName : userEmail.split('@')[0]}
              </UserName>
              <UserPhoto>
                {userPhoto ? (
                  <Photo key={userPhoto} src={userPhoto} alt="" />
                ) : (
                  (userName || userEmail) && (
                    <FirstLetter>
                      {(userName || userEmail).charAt(0).toUpperCase()}
                    </FirstLetter>
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
              <PopUp />
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
};

export default HeaderUser;
