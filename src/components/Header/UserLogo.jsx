import { UserInfoBtn, UserName, UserPhoto } from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from '../../redux/authSelectors';
import { ReactComponent as Chevron } from '../../svgs/icons/chevron.svg';

const HeaderUser = () => {
  const user = useSelector(selectAuthUserData);
  const userEmail = user.email;
  const userName = user.name;

  return (
    <UserInfoBtn>
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
  );
};

export default HeaderUser;
