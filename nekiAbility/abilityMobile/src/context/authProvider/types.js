export const IUser = {
    accessToken: '',
    type: '',
    refreshToken: '',
    id: 0,
    username: '',
    email: '',
    roles: [],
  };
  
  export const IContext = {
    ...IUser,
    authenticate: (response) => Promise.resolve(),
  };
  
  export const IAuthProvider = {
    children: null,
  };