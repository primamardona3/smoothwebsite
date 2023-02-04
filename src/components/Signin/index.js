import React from 'react';
import { Container,
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormH1,
        FormLabel,
        FormInput,
        FormButton,
        Text
      } from './SigninElements';

const Signin = () => {
  /* const login = (e) =>{
    e.preventDefault();
    let u = e.target.email.value;
    let p = e.target.password.value;

    alert ('Email : '+E+' Password : '+p); */
  return (
    <Container>
        <FormWrap>
          <Icon to="/"> DONA
          </Icon>
            <FormContent>
              <Form action="#">
                <FormH1> Sign in to your account </FormH1>
                  <FormLabel htmlFor='Email'> Email </FormLabel>
                    <FormInput type='email' required />
                  <FormLabel htmlFor='Password'> Password </FormLabel>
                    <FormInput type='password' required />
                      <FormButton type='submit'> Continue </FormButton>
                        <Text> Forgot Password </Text>
              </Form>
            </FormContent>
        </FormWrap>
    </Container>
  );
};

export default Signin;
