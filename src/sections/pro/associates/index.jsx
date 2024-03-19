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
import { Flex, Icon, Box, Text } from "@chakra-ui/react";
// Assets
// Custom components
import InnerContent from "layouts/innerContent";
import React from "react";
import {
  CALCOM,
  CISCO,
  ENVATO,
  INFOSYS,
  MICROSOFT,
  SAMSUNG,
} from "components/icons/Icons";

export default function Hero() {
  // Chakra Color Mode
  return (
    <Flex
      w="100%"
      direction="column"
      pt={{
        base: "80px",
        md: "30px",
        xl: "10px",
        "2xl": "70px",
        "3xl": "70px",
      }}
      pb={{ base: "0px", md: "0px", xl: "50px" }}
      position="relative"
    >
      <InnerContent
        w="1170px"
        maxW="100%"
        px={{ base: "20px", md: "40px", xl: "0px" }}
        zIndex="2"
      >
        <Text
          color="gray.400"
          textAlign={{ base: "center" }}
          fontWeight={"700"}
          fontSize={{ base: "xs", md: "md" }}
          letterSpacing="2px"
          mb="40px"
        >
          JOIN 30,000+ DEVELOPERS & BUSINESSES THAT USE THE ENTIRE HORIZON UI
          CORE
        </Text>
        <Flex
          flexWrap={{ base: "wrap", xl: "nowrap" }}
          justify="center"
          alignItems="center"
          gap="60px"
          mb="40px"
        >
          <Icon
            w={{ base: "130px", md: "161px" }}
            h={{ base: "36px", md: "26px" }}
            as={SAMSUNG}
          />
          <Icon
            w={{ base: "130px", md: "160px" }}
            h={{ base: "36px", md: "34px" }}
            as={MICROSOFT}
          />
          <Icon
            w={{ base: "130px", md: "160px" }}
            h={{ base: "36px", md: "34px" }}
            as={CALCOM}
          />
          <Icon
            w={{ base: "86px", md: "97px" }}
            h={{ base: "36px", md: "52px" }}
            as={CISCO}
          />
          <Icon
            w={{ base: "130px", md: "160px" }}
            h={{ base: "36px", md: "31px" }}
            as={ENVATO}
          />
          <Icon
            w={{ base: "100px", md: "117px" }}
            h={{ base: "36px", md: "48px" }}
            as={INFOSYS}
          />
        </Flex>
      </InnerContent>
    </Flex>
  );
}
