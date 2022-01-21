import { Flex, VStack, Heading, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import IconButton from '@mui/material/IconButton'
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";

function App() {

  const  {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
      <Heading ml= "8" size="md" fontWeight = "semibold" color= "cyan.400">imAli</Heading>
      <Spacer></Spacer>
      <IconButton ml={2} icon={<FaLinkedinIn/>} isRound="true" onClick={()=>window.open("https://www.linkedin.com/in/sohail-akhtar-ali-b400a4223")}></IconButton>
      <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={()=>window.open("https://instagram.com/iam_ali")}></IconButton>
      <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={()=>window.open("https://github.com/alisohail2448")}></IconButton>

      <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}>
      </IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
