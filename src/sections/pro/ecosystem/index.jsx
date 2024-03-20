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
  Flex,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
// Assets

// Custom components
import Card from "components/card/Card";
// Assets
import horizonuipro from "assets/img/pro/ecosystem/horizon-ui-pro.png";
import horizonuiprologo from "assets/img/pro/ecosystem/horizon-ui-pro-logo.png";
import horizonuiboilerplate from "assets/img/pro/ecosystem/horizon-ui-boilerplate.png";
import horizonuiboilerplatelogo from "assets/img/pro/ecosystem/horizon-ui-boilerplate-logo.png";
import horizonaitemplate from "assets/img/pro/ecosystem/horizon-ai-template.png";
import horizonaitemplatelogo from "assets/img/pro/ecosystem/horizon-ai-template-logo.png";
import horizonuicorporate from "assets/img/pro/ecosystem/horizon-ui-corporate.png";
import horizonuicorporatelogo from "assets/img/pro/ecosystem/horizon-ui-corporate-logo.png";
import horizonuicorporatenextjs from "assets/img/pro/ecosystem/horizon-ui-corporate-nextjs.png";
import horizonuicorporatenextjslogo from "assets/img/pro/ecosystem/horizon-ui-corporate-nextjs-logo.png";
import horizonuikit from "assets/img/pro/ecosystem/horizon-ui-kit.png";
import horizonuikitlogo from "assets/img/pro/ecosystem/horizon-ui-kit-logo.png";
import horizonnextjs from "assets/img/pro/ecosystem/horizon-pro-nextjs.png";
import figmaImage from "assets/img/pro/ecosystem/figmaImage.png";
import horizonnextjslogo from "assets/img/pro/ecosystem/horizon-ui-pro-nextjs-logo.png";
// Custom components
import InnerContent from "layouts/innerContent";
import ToolCard from "./components/ToolCard";

export default function Tools() {
  // Chakra Color Mode
  const textColor = useColorModeValue("#120F43", "white");
  // const brandColor = useColorModeValue('brand.500', 'white');
  return (
    <Flex
      w="100%"
      maxW="100%"
      direction={{ base: "column" }}
      pb={{ base: "70px", md: "100px", lg: "140px" }}
      overflow="hidden"
      bgSize="cover"
      position="relative"
      id="products"
    >
      <Flex
        bg="linear-gradient(180deg, #FFFFFF 70.04%, #EEF3F9 100%)"
        borderRadius={"100%"}
        w={{ base: "310px", md: "500px", lg: "981px", xl: "981px" }}
        h={{ base: "310px", md: "500px", lg: "981px", xl: "981px" }}
        transform="translate(-50%, 0px) matrix(1, 0, 0, -1, 0, 0)"
        position={"absolute"}
        zIndex="1"
        left="50%"
      />
      <InnerContent
        mt={{ base: "70px", md: "120px" }}
        zIndex="10"
        w="100%"
        justifyContent="flex-start"
      >
        <Flex
          maxW="100%"
          direction="column"
          justify="center"
          alignItems="center"
          width="stretch"
          px={{ base: "20px", md: "20px", xl: "0px" }}
        >
          <Flex
            direction="column"
            mx="auto"
            justify="center"
            alignItems="center"
            mb="40px"
            maxW={{ base: "100%", lg: "100%", xl: "70%" }}
            textAlign="center"
          >
            <Text
              as="h3"
              fontWeight="700"
              letterSpacing="2px"
              bg="brand.500"
              bgClip="text"
              fontSize={{ base: "xs", md: "md" }}
              w="100%"
              mb="10px"
            >
              CHAKRA UI TS BUNDLE
            </Text>
            <Text
              as="h2"
              color={textColor}
              fontWeight="800"
              fontSize={{ base: "28px", md: "40px", lg: "46px" }}
              lineHeight={{
                base: "34px",
                md: "50px",
                lg: "56px",
              }}
              w={{
                base: "100%",
                md: "70%",
                lg: "60%",
                xl: "70%",
                "2xl": "70%",
                "3xl": "70%",
              }}
              mb={{ base: "14px", lg: "30px" }}
            >
              Products included in the Chakra UI + TS Bundle
            </Text>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "md", xl: "lg" }}
              lineHeight="30px"
              fontWeight="500"
              letterSpacing="0px"
              w={{
                base: "88%",
                md: "60%",
                lg: "40%",
                xl: "56%",
                "2xl": "54%",
                "3xl": "52%",
              }}
              mb={{ base: "0px", xl: "40px" }}
            >
              Dive into the universe of Front-end & UI tools and get all Chakra
              UI + TS products of Horizon UI!
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid
          w="100%"
          columns={{ base: "1", md: "2", lg: "3" }}
          gap="20px"
          px={{ base: "20px", xl: "0px" }}
        >
          <ToolCard
            altImage="Horizon UI PRO React"
            image={horizonuipro}
            logo={horizonuiprologo}
            title="Horizon UI PRO React"
            description="Chakra UI + React + TS version"
            link="https://horizon-ui.com/pro"
          />

          {/* <ToolCard
            altImage="Horizon UI Boilerplate"
            image={horizonuiboilerplate}
            logo={horizonuiboilerplatelogo}
            title="Horizon UI Boilerplate"
            description="Full-stack NextJS boilerplate"
            link="https://horizon-ui.com/boilerplate"
          /> */}

          <ToolCard
            altImage="Horizon AI Template"
            image={horizonaitemplate}
            logo={horizonaitemplatelogo}
            title="Horizon AI Template"
            description="Chakra UI + TS version"
            link="https://horizon-ui.com/ai-template"
          />

          <ToolCard
            altImage="Horizon UI PRO NextJS"
            image={horizonnextjs}
            logo={horizonnextjslogo}
            title="Horizon PRO NextJS"
            description="Chakra UI + NextJS + TS version"
            link="https://horizon-ui.com/pro"
          />
          <ToolCard
            altImage="Horizon Corporate React"
            image={horizonuicorporate}
            logo={horizonuicorporatelogo}
            title="Horizon Corporate React"
            description="Chakra UI + React + TS version"
            link="https://horizon-ui.com/pro-corporate"
          />
          <ToolCard
            altImage="Horizon Corporate NextJS"
            image={horizonuicorporatenextjs}
            logo={horizonuicorporatenextjslogo}
            title="Horizon Corporate NextJS"
            description="Chakra UI + NextJS + TS version"
            link="https://horizon-ui.com/pro-corporate"
          />
          {/* <ToolCard
            altImage="Horizon UI Landing Kit"
            image={horizonuikit}
            logo={horizonuikitlogo}
            title="Horizon UI Landing Kit"
            description="Tailwind CSS Landing sections"
            link="https://horizon-ui.com/landing-kit"
          /> */}
          <Card
            zIndex="10"
            transition="0.2s linear"
            direction="column"
            p="12px"
            maxW="100%"
          >
            <Image
              alt="Figma Version Horizon UI"
              borderRadius="8px"
              w="100%"
              src={figmaImage}
            />
            <Flex
              direction="row"
              px={{ base: "0px", xl: "10px" }}
              pt={{ base: "14px", xl: "22px" }}
              pb={{ base: "0px", xl: "10px" }}
              justify="space-between"
              w="100%"
            >
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
                  fontSize="md"
                  fontWeight={"800"}
                  lineHeight={{ base: "140%", md: "100%" }}
                  maxW="100%"
                  textAlign="center"
                  letterSpacing="0px"
                >
                  🎁 BONUS: Figma versions
                </Text>
                <Text
                  fontWeight="500"
                  color="gray.600"
                  fontSize={{ base: "xs", md: "xs", xl: "sm" }}
                  letterSpacing="0px"
                  textAlign="center"
                >
                  Figma files of each product
                </Text>
              </Flex>
            </Flex>
          </Card>
        </SimpleGrid>
      </InnerContent>
    </Flex>
  );
}
