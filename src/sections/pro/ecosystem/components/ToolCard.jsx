/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || | 
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v2.0.0 Beta
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
// Chakra imports
import {
  Avatar,
  // Box,
  Image,
  // Button,
  Flex,
  // Icon,
  Link,
  Text,
  useColorModeValue,
  // SimpleGrid,
  IconButton,
  // useToast,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
// Assets

// Custom components
import Card from "components/card/Card";

export default function ToolCard(props) {
  // const toast = useToast();
  const { description, altImage, title, image, logo, link } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("#120F43", "white");
  // const Paddle = window.Paddle;
  // const openCheckout = (id) => {
  //   Paddle.Checkout.open(id);
  // };
  return (
    <Link isExternal href={link}>
      <Card
        zIndex="10"
        transition="0.2s linear"
        direction="column"
        p="12px"
        maxW="100%"
      >
        <Image alt={altImage} borderRadius="8px" w="100%" src={image} />
        <Flex
          direction="row"
          px={{ base: "0px", xl: "10px" }}
          pt={{ base: "14px", xl: "22px" }}
          pb={{ base: "0px", xl: "10px" }}
          justify="space-between"
          w="100%"
        >
          <Avatar size="md" borderRadius="8px" src={logo} />
          <Flex
            ps={{ base: "10px", xl: "14px" }}
            justifyContent="center"
            direction="column"
            w="100%"
          >
            <Text
              as="h3"
              mt="4px"
              mb={{ base: "0px", md: "4px" }}
              color={textColor}
              fontSize={{ base: "md", lg: "sm", xl: "md" }}
              fontWeight={"800"}
              lineHeight={{ base: "140%", md: "100%" }}
              maxW="100%"
              letterSpacing="0px"
            >
              {title}
            </Text>
            <Text
              fontWeight="500"
              color="gray.600"
              fontSize={{ base: "xs", md: "xs", xl: "sm" }}
              letterSpacing="0px"
            >
              {description}
            </Text>
          </Flex>
          <Link isExternal href={link}>
            <IconButton
              borderRadius="99px"
              variant="outline"
              w="48px"
              h="48px"
              colorScheme="gray"
              aria-label="Send email"
              icon={<MdChevronRight />}
            />
          </Link>
        </Flex>
      </Card>
    </Link>
  );
}
