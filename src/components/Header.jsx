import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// modal import
import ModalBox from "./ModalBox";
import { isModalHandler } from "../Redux/modules/modalSlice";
import PostAdd from "./PostAdd";

const Header = () => {
  const locationNow = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

<<<<<<< HEAD
  const isModal = useSelector((state) => state.modal.modal);
=======
  if (locationNow.pathname === "/") return null;
>>>>>>> a1487e2517fd9c4c19a8d75eeb15c1a9cde089ec

  // 이자리에 username 가져오기위한 get요청 할 것!!!

  if (locationNow.pathname === "/") return null;

  return (
    <>
<<<<<<< HEAD
      {isModal ? (
        <ModalBox>
          <PostAdd />
        </ModalBox>
      ) : null}
      <Bar>
        <Buttons>
          <Logo
=======
    {isModal? 
      <ModalBox>
        <PostAdd/>
      </ModalBox>
    : null }
    <Bar>
      <Buttons>
        <Logo
          onClick={() => {
            navigate("/main");
          }}
        />
        <div>
          <Home
>>>>>>> a1487e2517fd9c4c19a8d75eeb15c1a9cde089ec
            onClick={() => {
              navigate("/main");
            }}
          />
          <div>
            <Home
              onClick={() => {
                navigate("/main");
              }}
            />
            <Plus
              onClick={() => {
                dispatch(isModalHandler(true));
              }}
            />
            <User
              onClick={() => {
                navigate("/mypage");
              }}
            />
          </div>
        </Buttons>
      </Bar>
    </>
  );
};

const Bar = styled.div`
  background-color: white;
  z-index: 0;
  height: 60px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img.attrs({
  src: "/img/logo2.png",
})`
  width: 120px;
  cursor: pointer;
`;

const Home = styled.img.attrs({
  src: "/img/home.png",
})`
  width: 25px;
  margin-right: 20px;
  cursor: pointer;
`;

const Plus = styled.img.attrs({
  src: "/img/plus.png",
})`
  width: 25px;
  margin-right: 21px;
  cursor: pointer;
`;

const User = styled.img.attrs({
  src: "/img/user.png",
})`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export default Header;
