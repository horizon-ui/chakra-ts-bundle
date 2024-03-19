/*!
  _   _  ___  ____  ___ ________  _   _      _    ___   _____ _____ __  __ ____  _        _  _____ _____ 
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | |    / \  |_ _| |_   _| ____|  \/  |  _ \| |      / \|_   _| ____|
 | |_| | | | | |_) || |  / / | | |  \| |   / _ \  | |    | | |  _| | |\/| | |_) | |     / _ \ | | |  _|  
 |  _  | |_| |  _ < | | / /| |_| | |\  |  / ___ \ | |    | | | |___| |  | |  __/| |___ / ___ \| | | |___ 
 |_| |_|\___/|_| \_\___/____\___/|_| \_| /_/   \_\___|   |_| |_____|_|  |_|_|   |_____/_/   \_\_| |_____|                                                                                                
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon AI Template - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/ai-template/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
export default function PageCard(props) {
  const { title, desc, link, altImage, image, ...rest } = props;
  // Chakra Color Mode
  const bgBox = useColorModeValue("#EDF2F7", "#131C3D");
  const textColor = useColorModeValue("#120F43", "white");
  const dot = useColorModeValue("#CBD5E0", "#4A5568");
  return (
    <Link isExternal="true" href={link}>
      <Card
        p="0px"
        w="100%"
        boxShadow="0px 16.1699px 34.2055px rgba(203, 213, 224, 0.3)"
        borderRadius="16px"
        bg={bgBox}
        direction={{ base: "column" }}
        overflow="hidden"
        bgSize="cover"
        position="relative"
        {...rest}
      >
        <Flex align="center" p="18px">
          <Icon me="6px" h="10px" w="10px" as={BsCircleFill} color={dot} />
          <Icon me="6px" h="10px" w="10px" as={BsCircleFill} color={dot} />
          <Icon h="10px" w="10px" as={BsCircleFill} color={dot} />
          <Text
            color={textColor}
            fontSize={{ base: "sm", lg: "xs", xl: "sm" }}
            fontWeight="700"
            textAlign="center"
            letterSpacing="0px"
            mx="auto"
          >
            {title}
          </Text>
          <Icon as={MdOpenInNew} color={textColor} />
        </Flex>
        <Box h="100%" w="100%"></Box>
        <Image alt={altImage} h="100%" w="100%" minW="100%" src={image} />
      </Card>
    </Link>
  );
}
