import React from "react";
import { Flex, Box, Heading, Text, Icon } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Full Stack Devloper, speacalised in web devlopment.
        </Text>
      
      <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="blue.400"
          h="30vh"
          w="30vh"
          justify="flex-end"
          _hover={{bg: "teal.400", }}
        >
          <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            Android Apps
          </Text>
        </Flex>
        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Flutter Apps
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Web Apps
                        </Text>
                    </Flex>
      </Flex>
      
      <Box alignSelf="center">
        <Flex direction="column">
        <Text fontWeight="semibold" fontSize="2xl" mt="40px">
          Design By &#128147; Sohail Akhtar Ali
        </Text>
        </Flex>
      </Box>
      </Box>
    </Flex>
  );
}

export default Profile;
