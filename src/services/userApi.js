import { instance } from "./instance";
import { setToken } from "./authApi";

export const requestPhotoUpdate = async (fileImg) => {
  const formData = new FormData();
  formData.append('picture', fileImg);

  const { data } = await instance.patch('users/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  setToken(data.token);
  return data.avatarURL;
};
