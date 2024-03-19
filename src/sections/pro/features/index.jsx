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
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Card from "components/card/Card";
import { TextLine } from "components/icons/Icons";
import InnerContent from "layouts/innerContent";
import speed from "assets/img/pro/features/10x-speed-image.png";
import examples from "assets/img/pro/features/50-examples-image.png";
import React from "react";
import { MdChevronRight } from "react-icons/md";
// Custom components

export default function Features() {
  // Chakra Color Mode
  const brandColorPrice = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("#120F43", "white");
  const textColorSecondary = useColorModeValue("gray.600", "white");
  return (
    <Flex
      // bg={bg}
      bgSize="cover"
      w="100%"
      direction={{ base: "column", md: "row" }}
      pb={{ base: "60px", md: "90px", xl: "90px" }}
      overflow="hidden"
      position="relative"
    >
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex
          direction="column"
          mx="auto"
          mb={{ base: "50px", md: "50px" }}
          alignItems="center"
          justify={"center"}
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
            HORIZON AI TEMPLATE MAIN FEATURES
          </Text>
          <Text
            as="h2"
            textAlign={{ base: "center" }}
            color={textColor}
            fontWeight="800"
            fontSize={{ base: "30px", md: "44px", lg: "48px", xl: "58px" }}
            lineHeight={{ base: "38px", md: "54px", lg: "60px", xl: "70px" }}
            mb={{ base: "20px", md: "30px" }}
            w={{ base: "100%", md: "90%", lg: "80%", xl: "72%" }}
            mx="auto"
          >
            The ChatBot AI Template that you always{" "}
            <Text as="span" position={"relative"}>
              searched
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
                  base: "translate(-14%, 0px)",
                  md: "translate(-48%, 0px)",
                  lg: "translate(-50%, 0px)",
                }}
                w={{ base: "150px", md: "270px", xl: "270px" }}
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
                  base: "translate(-14%, 0px)",
                  md: "translate(-48%, 0px)",
                  lg: "translate(-50%, 0px)",
                }}
                w={{ base: "150px", md: "270px", xl: "270px" }}
              />
            </Text>{" "}
            for.
          </Text>
          <Text
            color="gray.600"
            fontSize={{ base: "md", md: "md", xl: "lg" }}
            fontWeight="500"
            letterSpacing="0px"
            lineHeight={{ base: "24px", md: "30px" }}
            w={{ base: "90%", md: "84%", lg: "72%", xl: "72%" }}
            mb="20px"
          >
            Stop searching for the best website template for Artificial
            Intelligence-powered applications! Our beautiful ChatGPT Admin
            Template, based on Horizon UI, is designed to simplify your work and
            provide the tools you need to jump-start your responsive AI app.
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: "1", lg: "2" }} gap="30px" mb="90px">
          <Flex direction={"column"}>
            <Card
              justifyContent="center"
              alignItems="center"
              pt="44px"
              pb="56px"
              w="100%"
              mb="30px"
              borderRadius="16px"
              direction={{ base: "column" }}
            >
              <Text
                as="h3"
                textAlign={"center"}
                color={"transparent"}
                bgImage="linear-gradient(85.3deg, #3D1DFF 13.04%, #6147FF 38.28%, #D451FF 59.31%, #EC458D 80.35%)"
                fontSize="80px"
                lineHeight={"100%"}
                fontWeight="800"
                bgClip={"text"}
                mb="14px"
              >
                100+
              </Text>
              <Text
                as="h3"
                textAlign={"center"}
                color={textColor}
                fontSize={{ base: "xl" }}
                fontWeight="700"
                letterSpacing="0px"
                mb="10px"
              >
                Components & Elements
              </Text>
              <Text
                textAlign={"center"}
                color={textColorSecondary}
                fontSize="md"
                lineHeight="28px"
                fontWeight="500"
                letterSpacing="0px"
                px={{ base: "0px", md: "100px", lg: "40px", xl: "100px" }}
              >
                Meticulously crafted buttons, inputs, badges, cards, and so on,
                giving you the freedom of choosing and combining.
              </Text>
            </Card>
            <Card
              justifyContent="center"
              alignItems="center"
              py="64px"
              w="100%"
              borderRadius="16px"
              direction={{ base: "column" }}
            >
              <Image src={speed} mb="20px" w="184px" />
              <Text
                as="h3"
                textAlign={"center"}
                color={"transparent"}
                bgImage="linear-gradient(85.3deg, #3D1DFF 13.04%, #6147FF 38.28%, #D451FF 59.31%, #EC458D 80.35%)"
                fontSize="100px"
                lineHeight={"100%"}
                fontWeight="800"
                bgClip={"text"}
                mb="14px"
              >
                10X
              </Text>
              <Text
                as="h3"
                textAlign={"center"}
                color={textColor}
                fontSize={{ base: "xl" }}
                fontWeight="700"
                letterSpacing="0px"
                px={{ base: "20px", md: "0px" }}
                mb="10px"
              >
                Faster than other AI Website Templates
              </Text>
              <Text
                textAlign={"center"}
                color={textColorSecondary}
                fontSize="md"
                lineHeight="28px"
                fontWeight="500"
                letterSpacing="0px"
                px={{ base: "0px", md: "100px", lg: "20px", xl: "80px" }}
              >
                Optimized with the latest technologies, Horizon instantly
                responds to almost any action you take while building your
                AI-powered web app.
              </Text>
            </Card>
          </Flex>
          <Card
            overflow="hidden"
            pt="43px"
            alignItems="center"
            px="0px"
            pb="0px"
            w="100%"
            borderRadius="16px"
            direction={{ base: "column" }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              direction={{ base: "column" }}
              px="20px"
            >
              <Text
                as="h3"
                textAlign={"center"}
                color={"transparent"}
                bgImage="linear-gradient(85.3deg, #3D1DFF 13.04%, #6147FF 38.28%, #D451FF 59.31%, #EC458D 80.35%)"
                fontSize="80px"
                lineHeight={"100%"}
                fontWeight="800"
                bgClip={"text"}
                mb="14px"
              >
                33+
              </Text>
              <Text
                as="h3"
                textAlign={"center"}
                color={textColor}
                fontSize={{ base: "xl" }}
                fontWeight="700"
                letterSpacing="0px"
                mb="10px"
              >
                Fully coded example Pages
              </Text>
              <Text
                textAlign={"center"}
                color={textColorSecondary}
                fontSize="md"
                lineHeight="28px"
                fontWeight="500"
                letterSpacing="0px"
                px={{ base: "0px", md: "100px", lg: "40px", xl: "50px" }}
                mb="25px"
              >
                Bunch of fully coded desktop & mobile page examples like AI
                Presentation Templates, Prompt Page, AI Chat Page, Chat UI,
                Profile Settings, and so on.
              </Text>
            </Flex>
            <Link
              w={{ base: "100%", md: "unset" }}
              mb={{ base: "30px", lg: "auto" }}
              justifyContent={{ base: "center", md: "center" }}
              display={{ base: "none", md: "unset" }}
              isExternal
              href="https://horizon-ui.com/horizon-ai-template"
            >
              <Button
                variant="silver"
                py="20px"
                w={{ base: "300px", md: "unset" }}
                px="30px"
                fontSize="sm"
                borderRadius="45px"
                h="54px"
              >
                See all pages live
              </Button>
            </Link>
            <Flex position="relative" w="100%">
              <Flex
                h="211px"
                w="211px"
                filter="blur(107px)"
                position="absolute"
                left="50%"
                top={{ base: "100%", md: "50%" }}
                transform="translate(-50%, -50%)"
                bg="linear-gradient(105.85deg, #3D1DFF 8.19%, #6147FF 26.79%, #D451FF 46.69%, #EC458D 70.48%, #FFCA8B 91.24%)"
              />
              <Image
                alt="ai application page templates"
                zIndex={"3"}
                w="100%"
                src={examples}
              />
            </Flex>
          </Card>
        </SimpleGrid>
        <Flex
          direction={"column"}
          h="95px"
          w="100%"
          mx="auto"
          zIndex="3"
          justifyContent="center"
          align="center"
        >
          <Flex mx="auto" direction={{ base: "column", md: "row" }}>
            <Link
              w={{ base: "100%", md: "unset" }}
              isExternal
              href="https://horizon-ui.com/horizon-ai-template"
            >
              <Button
                variant="silver"
                py="20px"
                w={{ base: "100%", md: "unset" }}
                px="30px"
                fontSize="sm"
                borderRadius="45px"
                me={{ base: "0px", md: "14px" }}
                mb={{ base: "20px", md: "0px" }}
                h="54px"
              >
                See live preview
              </Button>
            </Link>
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
          </Flex>
          <Text
            color="#4A5568"
            fontSize="sm"
            letterSpacing="0px"
            textAlign="center"
            fontWeight="500"
            mt="20px"
          >
            🧐 Still not decided?... Well, let us help you to make the right
            decision.
          </Text>
        </Flex>
      </InnerContent>
    </Flex>
  );
}
