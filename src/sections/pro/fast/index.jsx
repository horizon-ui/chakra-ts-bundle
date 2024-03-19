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
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dashboard from "assets/img/pro/fast/dashboard-world-greatest-section.png";
import left from "assets/img/pro/fast/left-image-worlds-greatest.png";
import right from "assets/img/pro/fast/right-image-worlds-greatest.png";
import { TextLine } from "components/icons/Icons";

// Custom components
import InnerContent from "layouts/innerContent";

export default function Fast() {
  // Chakra Color Mode
  const brandColorPrice = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("#120F43", "white");
  return (
    <Flex
      zIndex="2"
      w="100%"
      direction={{ base: "column" }}
      bgSize="cover"
      position="relative"
      pt={{ base: "90px", md: "100px", xl: "140px" }}
      pb={{ base: "90px", md: "100px", xl: "140px" }}
    >
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }} maxW="unset">
        <Flex direction="column" width="stretch">
          <Flex
            direction="column"
            mx="auto"
            alignItems="center"
            textAlign="center"
          >
            <Text
              as="h3"
              textAlign={{ base: "center", lg: "center" }}
              fontWeight="700"
              letterSpacing="2px"
              color={brandColorPrice}
              fontSize={{ base: "xs", md: "md" }}
              w="100%"
              mb="10px"
            >
              YOUR CHATBOT AI WEBSITE TEMPLATE
            </Text>
            <Text
              as="h2"
              textAlign={{ base: "center" }}
              color={textColor}
              fontWeight="800"
              fontSize={{ base: "30px", md: "48px", lg: "48px", xl: "58px" }}
              lineHeight={{ base: "38px", md: "60px", lg: "60px", xl: "70px" }}
              mb={{ base: "20px", md: "30px" }}
              w={{ base: "84%", md: "90%", lg: "70%", xl: "52%" }}
              mx="auto"
            >
              The biggest time saver for your{" "}
              <Text as="span" position={"relative"}>
                AI web app project.
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-44px",
                  }}
                  left={{ base: "94%", md: "30%" }}
                  transform={{
                    base: "translate(-100%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "300px", xl: "400px" }}
                />
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-44px",
                  }}
                  filter="blur(15px)"
                  left={{ base: "94%", md: "30%" }}
                  transform={{
                    base: "translate(-100%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "300px", xl: "400px" }}
                />
              </Text>
            </Text>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "md", xl: "lg" }}
              fontWeight="500"
              letterSpacing="0px"
              lineHeight={{ base: "24px", md: "30px" }}
              w={{ base: "100%", md: "80%", lg: "80%", xl: "54%" }}
            >
              Based on Horizon UI Admin Template design guidelines, our new AI
              ChatGPT Template helps you create stunning AI SaaS web apps 10X
              faster than ever before.
            </Text>
          </Flex>
        </Flex>
        <Flex
          position={"relative"}
          mt={{ base: "40px", md: "80px", lg: "130px" }}
        >
          <Box
            zIndex="1"
            bg="linear-gradient(105.85deg, #3D1DFF 8.19%, #6147FF 26.79%, #D451FF 46.69%, #EC458D 70.48%, #FFCA8B 91.24%)"
            h={{ base: "120px", md: "250px", lg: "450px", xl: "600px" }}
            w={{ base: "160px", md: "450px", lg: "650px", xl: "1346px" }}
            filter={{
              base: "blur(50px)",
              md: "blur(80px)",
              lg: "blur(100px)",
            }}
            backdropBlur={{
              base: "50px",
              md: "80px",
              lg: "100px",
            }}
            position={"absolute"}
            top={{ base: "70px", md: "80px", lg: "130px", xl: "160px" }}
            left="50%"
            borderRadius="900px"
            transform={"translate(-50%, 0%)"}
          />
          <Image
            alt="ai chatbot react template preview"
            zIndex={"2"}
            src={dashboard}
            maxH="max-content"
            w={{ xl: "1360px" }}
          />
          <Image
            alt="ai chatbot react template sidebar preview"
            top={{ base: "120px", md: "250px", lg: "340px", xl: "500px" }}
            transform="translate(0px, -50%)"
            left={{
              base: "-12px",
              md: "-20px",
              lg: "-20px",
              xl: "-40px",
              "2xl": "-45px",
            }}
            position="absolute"
            w={{ base: "60px", md: "130px", lg: "180px", xl: "250px" }}
            borderRadius={{ base: "8px", md: "14px", lg: "20px" }}
            boxShadow="0px 10.1683px 61.0098px rgba(0, 0, 0, 0.08)"
            bg="white"
            zIndex="2"
            src={left}
          />
          <Image
            alt="ai chatbot react template mobile preview"
            // ms='-290px'
            top={{ base: "50%", md: "47%", lg: "39%" }}
            transform="translate(0px, -50%)"
            right={{ base: "-8px", md: "-8px", lg: "-20px", xl: "-30px" }}
            position="absolute"
            borderRadius={{ base: "8px", md: "14px", lg: "20px" }}
            w={{ base: "100px", md: "215px", lg: "270px", xl: "408px" }}
            boxShadow="0px 10.1683px 61.0098px rgba(0, 0, 0, 0.08)"
            bg="white"
            zIndex="2"
            src={right}
          />
        </Flex>
      </InnerContent>
    </Flex>
  );
}
