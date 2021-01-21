import styled from 'styled-components';
import { Form } from '@unform/web';

export const Button = styled.button`
  width: 150px;
  height: 59px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  :hover {
    background-color: #4d84e2;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }
  //animation
  &.signup-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }
  &.signup-mode .left-panel .image,
  &.signup-mode .left-panel .content {
    transform: translateX(-800px);
  }
  &.signup-mode .right-panel .image,
  &.signup-mode .right-panel .content {
    transform: translateX(0px);
  }
  &.signup-mode .left-panel {
    pointer-events: none;
  }
  &.signup-mode .right-panel {
    pointer-events: all;
  }
  &.signup-mode .signin-signout {
    left: 25%;
  }
  &.signup-mode form.signin-form {
    z-index: 1;
    opacity: 0;
  }
  &.signup-mode form.signup-form {
    z-index: 2;
    opacity: 1;
  }

  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;

    &:before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
    &.signup-mode:before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }
    &.signup-mode .left-panel .image,
    &.signup-mode .left-panel .content {
      transform: translateY(-300px);
    }

    &.signup-mode .signin-signout {
      top: 5%;
      transform: translate(-50%, 0);
      left: 50%;
    }
  }
  @media (max-width: 570px) {
    &:before {
      bottom: 72%;
      left: 50%;
    }
    &.signup-mode:before {
      bottom: 28%;
      left: 50%;
    }
  }
`;
export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const PanelContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }
  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }
  .right-panel .content,
  .right-panel .image {
    transform: translateX(800px);
  }

  @media (max-width: 870px) {
    z-index: 10;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    .left-panel {
      grid-row: 1 / 2;
    }
    .right-panel {
      grid-row: 3/4;
    }

    .right-panel .content,
    .right-panel .image {
      transform: translateY(300px);
    }
  }
`;
export const SignInSignUp = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;

  @media (max-width: 870px) {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }
`;
export const SocialLoginText = styled.div`
  padding: 0.7rem 0;
  font-size: 1rem;
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;

  a {
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1.rem;
    border-radius: 50%;
    transition: 0.3s;

    :hover {
      color: #4481eb;
      border-color: #4481eb;
    }
  }
`;
export const Title = styled.h1`
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
`;
export const UnForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;

  &.signin-form {
    z-index: 2;
  }
  &.signup-form {
    z-index: 1;
    opacity: 0;
  }

  @media (max-width: 570px) {
    padding: 0 1.5rem;
  }
`;
export const ContentTitle = styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
`;
export const ContentButton = styled.button`
  width: 150px;
  height: 59px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  :hover {
    background-color: #4d84e2;
  }

  &.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
  }

  @media (max-width: 870px) {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }
`;
export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;
  & .content {
    color: #fff;
    transition: 0.9s 0.6s ease-in-out;
  }

  @media (max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    paddind: 2.5rem 8%;

    & .content {
      padding-right: 15%;
      transition: 0.9s 0.8s ease-in-out;
    }

    & h3 {
      font-size: 1.2rem;
    }
    & p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
  }
  @media (max-width: 570px) {
    .content {
      padding: 0.5rem 1rem;
    }
  }
`;
export const Content = styled.div``;
export const Logo = styled.img`
  width: 100%;
  transition: 1.1s 0.4s ease-in-out;

  @media (max-width: 870px) {
    width: 200px;
    transition: 0.9s 0.6s ease-in-out;
  }

  @media (max-width: 570px) {
    display: none;
  }
`;
export const Description = styled.p`
  font-size: 0.95rem;
  padding: 0.7rem 0;
`;
