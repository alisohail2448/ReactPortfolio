import { useMediaQuery, useColorMode, Stack, Circle, Flex, Box, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import img from "../Images/po.jpg";

function Header() {
  
  const  {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode == "dark";
  
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  
  return (
    <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Sohail Akhtar Ali</Text>
          <Text color={isDark ? "gray.200" : 'gray.500'}>I'm Full Stack Devloper & Pursuing Bechlour of Engineering in Computer Science Stream.I'm Beginner.</Text>
          <Button mt={8} colorScheme= "blue" onClick={()=> window.open("https://compassionate-shockley-7e7dc9.netlify.app")
          }>Contact Me</Button>
          <Button mt={8} ml={10} colorScheme= "blue" onClick={()=> window.open("https://alisohail2448.github.io/introCard/")
          }>Intro Card</Button>
        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src={img}></Image>
      </Flex>
    </Stack>
  )
}

export default Header;
