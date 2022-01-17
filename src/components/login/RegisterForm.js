import { useContext } from "react";
import { UserContext } from "./AuthProvider";
import { defaultHeaders } from "../../config/clientConfig";
import '../../index.css';
import { axiosInstance } from "../../config/axiosConfig";

const RegisterForm =  ({ setRegisterFormOpen }) => {
  const { setUser } = useContext(UserContext);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`nickname :${event.target.nickname.value}`);

    const res =  await axiosInstance.get("https://moutain.herokuapp.com/users", {
      body: JSON.stringify({
        nickname: event.target.nickname.value,
      }),
    });
    /*
    const res =  await fetch("https://moutain.herokuapp.com/users", {
      mode: 'no-cors',
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify({
        nickname: event.target.nickname.value,
      }),
    });
    */
    const user = await res.json();
    console.log(`post /users ${JSON.stringify(user)}`);
    setRegisterFormOpen(false);
    setUser(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='nickname'>
             Enter your nickname
        </label>
        <input className='nickname' type="text" name="nickname" />
        <input className='signup' type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default RegisterForm;