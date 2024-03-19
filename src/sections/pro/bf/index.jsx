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
  Button,
  Icon,
  Flex,
  Link,
  Text,
  // useColorModeValue
} from "@chakra-ui/react";
// Assets
import React from "react";
// Custom components
import InnerContent from "layouts/innerContent";
import Countdown from "components/countdown";
import Winter from "assets/img/pro/Winter.png";
import {
  WINTER,
  SPECIAL,
  SEP,
  THIRTY,
  DISCOUNTTWO,
} from "components/icons/Icons";
import { MdChevronRight } from "react-icons/md";
export default function Pricing() {
  // Chakra Color Mode
  // const textColor = useColorModeValue('white', 'white');
  // const textColor = useColorModeValue('secondaryGray.900', 'white');
  // const textColorSecondary = useColorModeValue('gray.600', 'white');
  return (
    <Flex
      bgSize="cover"
      bgPosition="center"
      w="100%"
      direction={{ base: "column" }}
      pb="140px"
      overflow="hidden"
      position="relative"
    >
      <InnerContent
        pt="75px"
        pb="60px"
        bgImage={`url(${Winter})`}
        bgPosition="center"
        bgSize="cover"
        w={{ base: "95%", xl: "100%" }}
        borderRadius="20px"
      >
        <Flex maxW={{ base: "90%", md: "540px" }} mx="auto" direction="column">
          <Flex mb={{ base: "36px", xl: "40px" }} justifyContent="center">
            <Flex direction="column">
              <WINTER
                mb="12px"
                w={{ base: "134px", md: "255px" }}
                h={{ base: "31px", md: "60px" }}
              />
              <SPECIAL
                w={{ base: "134px", md: "255px" }}
                h={{ base: "28px", md: "55px" }}
              />
            </Flex>
            <SEP mx="25px" w="6px" h={{ base: "74px", md: "129px" }} />
            <Flex direction="column">
              <THIRTY
                w={{ base: "122px", md: "234px" }}
                h={{ base: "43px", md: "81px" }}
                mb="12px"
              />
              <DISCOUNTTWO
                w={{ base: "122px", md: "234px" }}
                h={{ base: "18px", md: "35px" }}
              />
            </Flex>
          </Flex>
          <Countdown date="31 January 2023" />
          <Link w="100%" href="#pricing">
            <Button
              bg="linear-gradient(180deg, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.12) 100%)"
              _hover={{ opacity: "0.8" }}
              _focus={{ opacity: "1" }}
              _active={{ opacity: "0.9" }}
              maxW="100%"
              w="100%"
              mt="40px"
              py="26px"
              mb="15px"
              fontSize="14px"
              backdropFilter="blur(8px)"
              borderRadius="12px"
              variant="teams"
              lineHeight="14px"
              display="flex"
              alignItems="center"
            >
              {/* Grab Cyber Monday 50% Offer! */}
              Grab Winter Special 35% Offer!
              <Icon as={MdChevronRight} mt="2px" />
            </Button>
          </Link>
          <Text color="white" textAlign="center">
            Limited offer. Lifetime access. One-time payment.
          </Text>
        </Flex>
      </InnerContent>
    </Flex>
  );
}
