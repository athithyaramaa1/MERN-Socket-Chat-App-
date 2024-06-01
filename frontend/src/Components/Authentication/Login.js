import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <VStack spacing="20px" align="stretch" maxW="400px" mx="auto">
      <FormControl isRequired id="email">
        <FormLabel fontWeight="700">Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel fontWeight="700">Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.5rem"
              size="sm"
              onClick={togglePasswordVisibility}
              variant="ghost"
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" onClick={submitHandler} variant="solid">
        Login
      </Button>
      <Button
        colorScheme="red"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
        variant="solid"
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
