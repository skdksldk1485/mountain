import React, { useContext } from 'react';
import { UserContext } from '../../components/login/AuthProvider';

const Landing = () => {
  //const { token }  = useContext(UserContext);
  const { user }  = useContext(UserContext);
  console.log(localStorage.getItem('token'));
  console.log(user);
  return <div>Landing page</div>;
};

export default Landing;
