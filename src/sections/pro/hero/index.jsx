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
  Badge,
  Button,
  Flex,
  Link,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import leftImage from "assets/img/pro/hero/left-image.png";
import chatgpt from "assets/img/pro/hero/chatgpt.png";
import rightImage from "assets/img/pro/hero/right-image.png";

import { VSeparator } from "components/separator/Separator";
import { MdChevronRight } from "react-icons/md";
// Custom components
import InnerContent from "layouts/innerContent";

import { TextLine } from "components/icons/Icons";
import React from "react";

export default function Hero() {
  // Chakra Color Mode
  const textColor = useColorModeValue("#120F43", "white");
  const borderColor = useColorModeValue("gray.300", "white");
  return (
    <Flex
      w="100%"
      direction="column"
      pt={{
        base: "130px",
        md: "140px",
        xl: "190px",
        "2xl": "190px",
        "3xl": "220px",
      }}
      pb={{ base: "0px", md: "80px", lg: "80px", xl: "170px" }}
      position="relative"
    >
      {" "}
      <Image
        alt="horizon ai template - premium chatbot chatgpt react admin template"
        // top={{ base: "150px", lg: "160px", xl: "200px" }}
        position="absolute"
        src={leftImage}
        display={{ base: "none", xl: "flex" }}
        left="0"
        w={{
          base: "350px",
          md: "640px",
          lg: "740px",
          xl: "420px",
          "2xl": "591px",
        }}
        h={{
          base: "350px",
          md: "640px",
          lg: "740px",
          xl: "450px",
          "2xl": "650px",
        }}
        // mt={{ base: "20px", lg: "unset" }}
      />
      <InnerContent
        w="1170px"
        maxW="100%"
        px={{ base: "20px", md: "40px", xl: "0px" }}
        zIndex="2"
      >
        {" "}
        <Flex
          maxW="100%"
          direction="column"
          width="stretch"
          justify="center"
          align="center"
        >
          <Link
            isExternal="true"
            href="https://blog.horizon-ui.com/introducing-horizon-ai-template/?ref=badge-site"
          >
            <Badge
              display="flex"
              alignItems="center"
              colorScheme="brand"
              borderRadius="25px"
              color="brand.500"
              fontWeight="semibold"
              textTransform={"none"}
              letterSpacing="0px"
              fontSize={{ base: "xs", md: "sm" }}
              ps="14px"
              pe="10px"
              py="4px"
              mb="20px"
            >
              Introducing Horizon AI Template -{" "}
              <Text fontWeight="500" as="span" ms="2px">
                {" "}
                Learn more about it{" "}
              </Text>
              <Icon ms="4px" as={MdChevronRight} />
            </Badge>
          </Link>
          <Flex
            direction="column"
            mx="auto"
            mb="70px"
            px={{ base: "0px", md: "40px", xl: "0px" }}
            maxW={{ base: "100%", lg: "100%", xl: "74%", "2xl": "78%" }}
            textAlign="center"
          >
            <Text
              as="h1"
              color={textColor}
              fontWeight="700"
              fontSize={{ base: "26px", md: "46px", lg: "50px", xl: "58px" }}
              lineHeight={{ base: "36px", md: "56px", lg: "60px", xl: "68px" }}
              px={{
                base: "0px",
                md: "0px",
                lg: "90px",
                xl: "40px",
                "2xl": "60px",
              }}
              mb={{ base: "24px", md: "30px" }}
            >
              Create the best AI SaaS Apps & Websites{" "}
              <Text
                as="span"
                fontWeight="800"
                position={"relative"}
                bgClip="text"
                color={textColor}
              >
                10X faster
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-24px",
                    md: "-30px",
                    lg: "-40px",
                    xl: "-40px",
                  }}
                  left="50%"
                  transform={"translate(-50%, 0px)"}
                  w={{ base: "140px", md: "233px", lg: "293px", xl: "293px" }}
                />
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  filter="blur(15px)"
                  bottom={{
                    base: "-24px",
                    md: "-30px",
                    lg: "-40px",
                    xl: "-40px",
                  }}
                  left="50%"
                  transform={"translate(-50%, 0px)"}
                  w={{ base: "140px", md: "233px", lg: "293px", xl: "293px" }}
                />
              </Text>
            </Text>
            <Text
              mb={{ base: "30px", md: "40px" }}
              color="gray.600"
              alignSelf="center"
              fontSize={{ base: "sm", md: "md", xl: "lg" }}
              lineHeight={{ base: "24px", md: "30px" }}
              letterSpacing="0px"
              fontWeight={"500"}
              w={{
                base: "90%",
                md: "90%",
                lg: "70%",
                xl: "84%",
                "2xl": "75%",
              }}
            >
              Start building your AI SaaS Website apps with Horizon AI Template,
              the trendiest ChatBot & ChatGPT Template for React, NextJS and
              Chakra UI!
            </Text>
            <Flex
              align="center"
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", lg: "center" }}
            >
              <Link href="#pricing">
                <Button
                  variant="primary"
                  py="20px"
                  px="16px"
                  fontSize="sm"
                  borderRadius="45px"
                  me={{ base: "0px", md: "14px" }}
                  mb={{ base: "20px", md: "0px" }}
                  w={{ base: "300px", md: "210px" }}
                  h="54px"
                >
                  Get started now
                  <Icon as={MdChevronRight} color="white" h="16px" w="16px" />
                </Button>
              </Link>
              <Link
                isExternal="true"
                href="https://horizon-ui.com/horizon-ai-template"
              >
                <Button
                  bg="transparent"
                  variant="transparent"
                  border="1px solid"
                  borderColor={borderColor}
                  color={textColor}
                  my="auto"
                  w={{ base: "300px", md: "180px" }}
                  h="54px"
                  fontSize="sm"
                  borderRadius="45px"
                >
                  See live preview
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex direction="row" justify="center" alignItems="center">
            <Link isExternal="true" href="https://chat.openai.com">
              <Image
                alt="chatgpt react admin template logo"
                src={chatgpt}
                w={{ base: "116px", md: "116px", lg: "116px", xl: "116px" }}
              />
            </Link>
            <VSeparator ms="10px" me="14px" h="20px" />
            <Text
              color="gray.600"
              alignSelf="center"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight={{ base: "24px", md: "30px" }}
              letterSpacing="0px"
              fontWeight={"500"}
            >
              Production-ready prompts
            </Text>
          </Flex>
        </Flex>
      </InnerContent>
      <Image
        alt="horizon ai template - premium chatbot chatgpt react admin template"
        // top={{ base: "150px", lg: "160px", xl: "200px" }}
        position="absolute"
        display={{ base: "none", xl: "flex" }}
        src={rightImage}
        right="0"
        w={{
          base: "350px",
          md: "640px",
          lg: "740px",
          xl: "420px",
          "2xl": "590px",
        }}
        h={{
          base: "350px",
          md: "640px",
          lg: "740px",
          xl: "466px",
          "2xl": "666px",
        }}
        // mt={{ base: "20px", lg: "unset" }}
      />
    </Flex>
  );
}
