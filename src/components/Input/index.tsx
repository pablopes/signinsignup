/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
