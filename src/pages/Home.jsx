import { UserContext } from "../UserStore";
import { useContext } from "react";

const Home = () => {
  const context = useContext(UserContext);
  const { userId, password } = context;
  return (
    <>
      <p>여기는 Home화면입니다.</p>
      <p>로그인 아이디 : {userId}</p>
      <p>비밀번호 : {password}</p>
    </>
  );
};

export default Home;
