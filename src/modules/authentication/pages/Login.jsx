import { Image, Button, Checkbox, Input, VStack, Text, Alert } from '@chakra-ui/react';
import AppLayout from 'components/app-layout/AppLayout';
import { PRIMARY_COLOR, P_WHITE } from 'constants/color';
import React, { useState } from 'react';
import logo from 'assets/images/logo512.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:1337/api/auth/local', {
        identifier: formData.username,
        password: formData.password,
      });
      navigate('/dashboard');
    } catch (err) {
      // eslint-disable-next-line no-undef
      setError(true);
    }
  };

  return (
    <AppLayout hideAvatar>
      <VStack
        width="100%"
        height="calc(100vh - 200px)"
        gap="24px"
        justify="center"
        align="flex-start"
      >
        <Image src={logo} width="75px" />
        <Text fontSize="3xl" fontWeight="700">
          Login
        </Text>
        <Input
          type="email"
          padding="12px"
          placeholder="Email ID"
          value={formData.username}
          onChange={(e) => {
            setError(false);
            setFormData((prev) => ({ ...prev, username: e.target.value }));
          }}
        ></Input>
        <Input
          type="password"
          padding="12px"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => {
            setError(false);
            setFormData((prev) => ({ ...prev, password: e.target.value }));
          }}
        ></Input>
        <Checkbox colorScheme="green" defaultChecked>
          Remember Me
        </Checkbox>
        <Button
          width="100%"
          padding="24px"
          color={P_WHITE}
          bg={PRIMARY_COLOR}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        {error && <Alert variant="error">Login Failed. Invalid Username/Password.</Alert>}
      </VStack>
    </AppLayout>
  );
};

export default Login;
