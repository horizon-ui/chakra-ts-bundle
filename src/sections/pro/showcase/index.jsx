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

import React from "react";
// Chakra imports
import {
  Box,
  Button,
  Link,
  Icon,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

import { TextLine } from "components/icons/Icons";
import image1 from "assets/img/pro/showcase/image-1.png";
import image2 from "assets/img/pro/showcase/image-2.png";
import image3 from "assets/img/pro/showcase/image-3.png";
import image4 from "assets/img/pro/showcase/image-4.png";
import image5 from "assets/img/pro/showcase/image-5.png";
import image6 from "assets/img/pro/showcase/image-6.png";
import image7 from "assets/img/pro/showcase/image-7.png";
import image8 from "assets/img/pro/showcase/image-8.png";
import image9 from "assets/img/pro/showcase/image-9.png";
import image10 from "assets/img/pro/showcase/image-10.png";
import image11 from "assets/img/pro/showcase/image-11.png";
import image12 from "assets/img/pro/showcase/image-12.png";

// Custom components
import InnerContent from "layouts/innerContent";
import PageCard from "./components/PageCard";

export default function Overview() {
  // Chakra Color Mode
  const brandColorPrice = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("#120F43", "white");
  const gradient = useColorModeValue(
    "linear-gradient(360deg, #ffffff 30%, rgba(247, 250, 252, 0) 100%)",
    "linear-gradient(360deg, #0B1437 5%, rgba(28, 31, 57, 0) 100%)"
  );
  const baseGradient = useColorModeValue(
    "linear-gradient(360deg, #ffffff 75%, rgba(247, 250, 252, 0) 100%)",
    "linear-gradient(360deg, #0B1437 5%, rgba(28, 31, 57, 0) 100%)"
  );
  return (
    <Flex
      w="100%"
      direction={{ base: "column" }}
      overflow="hidden"
      bgSize="cover"
      position="relative"
      pt={{ base: "90px", md: "90px", xl: "50px" }}
      pb={{ base: "90px", md: "200px", xl: "90px" }}
      zIndex="2"
    >
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex direction="column" width="stretch">
          <Flex
            direction="column"
            mx="auto"
            mb={{ base: "50px", md: "80px" }}
            alignItems="center"
            textAlign="center"
          >
            <Text
              textAlign={{ base: "center", lg: "center" }}
              fontWeight="700"
              letterSpacing="2px"
              color={brandColorPrice}
              fontSize={{ base: "xs", md: "md" }}
              w="100%"
              mb="10px"
            >
              HORIZON UI PRO SHOWCASE
            </Text>
            <Text
              textAlign={{ base: "center" }}
              color={textColor}
              fontWeight="800"
              fontSize={{ base: "30px", md: "48px", lg: "48px", xl: "58px" }}
              lineHeight={{ base: "38px", md: "60px", lg: "60px", xl: "70px" }}
              mb={{ base: "20px", md: "30px" }}
              w={{ base: "100%", md: "100%%", lg: "100%", xl: "90%" }}
              mx="auto"
            >
              Get started with the{" "}
              <Text as="span" position={"relative"}>
                most powerful
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-28px",
                    lg: "-30px",
                    xl: "-36px",
                  }}
                  left={{ base: "10%", md: "50%", lg: "50%" }}
                  transform={{
                    base: "translate(0%, 0px)",
                    md: "translate(-66%, 0px)",
                    lg: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "400px", xl: "400px" }}
                />
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-28px",
                    lg: "-30px",
                    xl: "-36px",
                  }}
                  filter="blur(15px)"
                  left={{ base: "10%", md: "50%", lg: "50%" }}
                  transform={{
                    base: "translate(0%, 0px)",
                    md: "translate(-66%, 0px)",
                    lg: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "400px", xl: "400px" }}
                />
              </Text>{" "}
              admin dashboard template of all time
            </Text>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "md", xl: "lg" }}
              fontWeight="500"
              letterSpacing="0px"
              lineHeight={{ base: "24px", md: "30px" }}
              w={{ base: "100%", md: "90%", lg: "80%", xl: "76%" }}
            >
              Horizon UI has the ability to help you to give life to every
              project you want to make. Need some ideas of what you can build
              using Horizon UI? Here are just a few projects and designs based
              on Horizon.
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ base: "1", md: "2", lg: "3" }}
          gap="20px"
          w={{ base: "100%", md: "100%" }}
          mb="20px"
        >
          <PageCard
            image={image1}
            link="https://dribbble.com/shots/20414140-Payment-Banking-cards-Horizon-UI"
          />
          <PageCard
            image={image2}
            link="https://dribbble.com/shots/20512181-Users-analytics-cards-Horizon-UI"
          />
          <PageCard
            image={image3}
            link="https://dribbble.com/shots/20533020-Car-Interface-Dashboard-Horizon-UI"
          />
          <PageCard
            image={image4}
            link="https://dribbble.com/shots/20553575-Crypto-UI-Cards-Horizon-UI"
          />
          <PageCard
            image={image5}
            link="https://dribbble.com/shots/20434606-Chat-Messages-Components-Horizon-UI"
          />
          <PageCard
            image={image6}
            link="https://dribbble.com/shots/20371006-Profile-Settings-Cards-Horizon-UI"
          />
          <PageCard
            image={image7}
            link="https://dribbble.com/shots/20309055-Sign-in-page-Horizon-UI"
          />
          <PageCard
            image={image8}
            link="https://dribbble.com/shots/20640222-Calendar-Schedule-UI-cards-Horizon-UI"
          />
          <PageCard
            image={image9}
            link="https://dribbble.com/shots/20328072-User-Profile-settings-Horizon-UI"
          />
        </SimpleGrid>
        <Box position="relative" w="100%">
          <Flex
            direction={"column"}
            position="absolute"
            h="54px"
            w="100%"
            zIndex="3"
            justifyContent="center"
            align="center"
            bottom={{ base: "50px", md: "0px" }}
          >
            {" "}
            <Flex mx="auto" direction={{ base: "column", md: "row" }}>
              <Link
                isExternal
                w={{ base: "100%", md: "unset" }}
                href="https://dribbble.com/horizon-ui"
              >
                <Button
                  variant="silver"
                  py="20px"
                  px="30px"
                  fontSize="sm"
                  w={{ base: "100%", md: "unset" }}
                  borderRadius="45px"
                  me={{ base: "0px", md: "14px" }}
                  mb={{ base: "20px", md: "0px" }}
                  h="54px"
                >
                  View all designs & examples
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            position="absolute"
            transform={{
              base: "translate(-222px, -300px)",
              md: "translate(-1500px, 0px)",
              lg: "translate(-1500px, -250px)",
            }}
            h={{ base: "660px", md: "660px" }}
            w="300vw"
            zIndex="1"
            bg={{ base: baseGradient, md: gradient }}
          />
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            gap="20px"
            w="100%"
          >
            {" "}
            <PageCard
              display={{ base: "none", md: "block" }}
              image={image10}
              link="https://dribbble.com/shots/20350239-Chart-Cards-Examples-Horizon-UI"
            />
            <PageCard
              display={{ base: "none", md: "block" }}
              image={image11}
              link="https://dribbble.com/shots/20575092-E-commerce-Order-Details-cards-Horizon-UI"
            />
            <PageCard
              display={{ base: "none", md: "block" }}
              image={image12}
              link="https://dribbble.com/shots/20491825-Smart-home-cards-Horizon-UI"
            />
          </SimpleGrid>
        </Box>
      </InnerContent>
    </Flex>
  );
}
