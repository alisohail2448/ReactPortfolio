import React from 'react';
import { HStack, Icon } from "@chakra-ui/react";
import { FaInstagram, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

function Social() {
  return(
    <div>
    <HStack spacing="24">
      
      <Icon as={FaInstagram} boxSize={50} ></Icon>  
      <Icon as={FaGoogle} boxSize={50}></Icon>  
      <Icon as={FaSpotify} boxSize={50}></Icon>  
      <Icon as={FaShopify} boxSize={50}></Icon>  
    
    </HStack>
    </div>
  )
}
export default Social;

