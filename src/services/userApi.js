import axios from 'axios';

const instance = axios.create({
  baseURL: `https://water-tracker-o2xv.onrender.com/`,
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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
