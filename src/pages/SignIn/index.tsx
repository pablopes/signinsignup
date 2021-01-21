import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaLock,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import {
  Button,
  Container,
  Content,
  ContentTitle,
  ContentButton,
  Description,
  FormContainer,
  Logo,
  Panel,
  PanelContainer,
  SignInSignUp,
  SocialLoginText,
  SocialMedia,
  Title,
  UnForm,
} from './styles';
import Input from '../../components/Input';

import logoImg from '../../assets/img/logo.svg';
import registerImg from '../../assets/img/register.svg';

const SignIn: React.FC = () => {
  const handleClickButtonSignIn = () => {
    document.querySelector('.container')?.classList.remove('signup-mode');
  };
  const handleClickButtonSignUp = () => {
    document.querySelector('.container')?.classList.add('signup-mode');
  };
  function handleSubmit() {
    console.log('submit');
  }

  return (
    <Container className="container">
      <FormContainer>
        <SignInSignUp className="signin-signout">
          <UnForm className="signin-form" onSubmit={handleSubmit}>
            <Title>Sign In</Title>
            <Input type="text" placeholder="User" icon={FaUser} />
            <Input type="password" placeholder="Password" icon={FaLock} />
            <Button type="submit">Login</Button>
            <SocialLoginText>Or Sign In with Social Platforms</SocialLoginText>
            <SocialMedia>
              <Link to="teste">
                <FaFacebookF />
              </Link>
              <Link to="teste">
                <FaTwitter />
              </Link>
              <Link to="teste">
                <FaGoogle />
              </Link>
              <Link to="teste">
                <FaLinkedinIn />
              </Link>
            </SocialMedia>
          </UnForm>
          <UnForm className="signup-form" onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
            <Input type="text" placeholder="User" icon={FaUser} />
            <Input type="text" placeholder="Email" icon={FaEnvelope} />
            <Input type="password" placeholder="Password" icon={FaLock} />
            <Button type="submit">Sign Up</Button>
            <SocialLoginText>Or Sign Up with Social Platforms</SocialLoginText>
            <SocialMedia>
              <Link to="teste">
                <FaFacebookF />
              </Link>
              <Link to="teste">
                <FaTwitter />
              </Link>
              <Link to="teste">
                <FaGoogle />
              </Link>
              <Link to="teste">
                <FaLinkedinIn />
              </Link>
            </SocialMedia>
          </UnForm>
        </SignInSignUp>
      </FormContainer>
      <PanelContainer>
        <Panel className="panel left-panel">
          <Content className="content">
            <ContentTitle>New here?</ContentTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              inventore repudiandae.
            </Description>
            <ContentButton
              className="transparent"
              onClick={handleClickButtonSignUp}
            >
              Sign Up
            </ContentButton>
          </Content>
          <Logo src={logoImg} alt="" className="image" />
        </Panel>
        <Panel className="panel right-panel">
          <Content className="content">
            <ContentTitle>One of us?</ContentTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              inventore repudiandae.
            </Description>
            <ContentButton
              className="transparent"
              onClick={handleClickButtonSignIn}
            >
              Sign In
            </ContentButton>
          </Content>
          <Logo src={registerImg} alt="" className="image" />
        </Panel>
      </PanelContainer>
    </Container>
  );
};

export default SignIn;
