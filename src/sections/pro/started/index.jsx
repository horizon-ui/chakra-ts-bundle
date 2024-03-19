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
  // Badge,
  Box,
  Flex,
  // Button,
  Icon,
  // Link,
  Image,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import example1 from "assets/img/pro/started/image-example-1.png";
import example2 from "assets/img/pro/started/image-example-2.png";
import {
  MdTrendingUp,
  MdBolt,
  MdOutlineMonetizationOn,
  MdLayers,
  MdInsights,
  MdDevices,
  MdAddTask,
} from "react-icons/md";

// Custom components
import InnerContent from "layouts/innerContent";

export default function GetStarted() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("#120F43", "white");
  return (
    <Flex
      w="100%"
      direction={{ base: "column" }}
      pt={{ base: "90px", md: "90px", xl: "50px" }}
      // pb={{ base: "90px", md: "200px", xl: "90px" }}
      overflow="hidden"
      // bgSize="cover"
      // bg="linear-gradient(180deg, #F5F7FA 0%, rgba(255, 255, 255, 0) 14.26%)"
      position="relative"
    >
      <InnerContent w="100%" px={{ base: "20px", md: "40px", xl: "0px" }}>
        {/* Speed */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          mb={{ base: "80px", xl: "0px" }}
          width="100%"
        >
          <Flex
            direction="column"
            width="stretch"
            my="auto"
            alignItems={{ base: "center", md: "left" }}
          >
            <Box w="100%">
              <Text
                as="h3"
                fontWeight="700"
                letterSpacing="2px"
                textAlign={{ base: "center", md: "left" }}
                color={brandColor}
                fontSize="sm"
                w="100%"
                mb="10px"
              >
                FULLY CUSTOMIZABLE AI TEMPLATE
              </Text>
              <Text
                as="h2"
                fontWeight="800"
                color={textColor}
                fontSize={{ base: "26px", md: "32px" }}
                lineHeight={{ base: "36px", md: "46px" }}
                mb="20px"
                maxW={{ base: "100%", md: "flex" }}
                w={{ base: "100%", md: "86%" }}
                textAlign={{ base: "center", md: "left" }}
              >
                The perfect starting kit to create your AI projects that you
                always wanted
              </Text>
              <Text
                color="gray.600"
                fontSize={{ base: "md", md: "md", xl: "lg" }}
                fontWeight="500"
                letterSpacing="0px"
                textAlign={{ base: "center", md: "left" }}
                lineHeight={{ base: "24px", md: "30px" }}
                w={{ base: "100%", md: "90%" }}
                mb="30px"
              >
                Customize and create your AI Image Generator Website, Content
                Generator, or Chatbot Website the way you like and need. Define
                and give your project a better look by choosing your favorite
                theme mode from Dark & Light!
              </Text>
              <SimpleGrid columns={{ base: "1", md: "2", xl: "2" }} gap="24px">
                <Flex>
                  <Icon
                    as={MdTrendingUp}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    letterSpacing="0px"
                  >
                    Lifetime free updates & growing components library
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={MdBolt}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    letterSpacing="0px"
                  >
                    Lightning-fast user
                    <br /> journey & experience
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={MdLayers}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    letterSpacing="0px"
                  >
                    Templates, prompts, users, settings, and many more
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={MdOutlineMonetizationOn}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    w={{ base: "100%", md: "50%", lg: "100%", xl: "50%" }}
                    letterSpacing="0px"
                  >
                    Best investment for your AI Projects
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </Flex>
          <Flex
            w="max-content"
            position="relative"
            ms={{ base: "0px" }}
            mt={{ base: "40px", md: "40px", lg: "0px" }}
          >
            <Flex
              position="absolute"
              bg="linear-gradient(107.34deg, #3D1DFF 11.19%, #6147FF 26.5%, #D451FF 42.89%, #EC458D 62.48%, #FFCA8B 79.58%)"
              left="52%"
              top="50%"
              w={{ base: "100px", lg: "180px", xl: "180px" }}
              h={{ base: "100px", lg: "180px", xl: "180px" }}
              filter="blur(124px)"
              zIndex={"1"}
              transform="translate(-50%, -50%)"
            />
            <Image
              alt="ai text generator app template"
              zIndex={"2"}
              src={example1}
              mt="20px"
              me={{ xl: "-66px" }}
              w={{ base: "330px", md: "660px", lg: "490px", xl: "560px" }}
              maxW={{ base: "330px", md: "660px", lg: "490px", xl: "560px" }}
            />
          </Flex>
        </Flex>

        {/* Huge Pack */}
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          mb={{ base: "0px", lg: "120px" }}
          width="100%"
        >
          <Flex
            w="max-content"
            position="relative"
            me={{ base: "30px" }}
            mb={{ base: "40px", md: "40px", lg: "0px" }}
          >
            <Flex
              position="absolute"
              bg="linear-gradient(107.34deg, #3D1DFF 11.19%, #6147FF 26.5%, #D451FF 42.89%, #EC458D 62.48%, #FFCA8B 79.58%)"
              left="52%"
              top="50%"
              w={{ base: "100px", lg: "180px", xl: "180px" }}
              h={{ base: "100px", lg: "180px", xl: "180px" }}
              filter="blur(124px)"
              zIndex={"1"}
              transform="translate(-50%, -50%)"
            />
            <Image
              alt="ai-based app template components"
              zIndex={"2"}
              src={example2}
              ms={{ lg: "-62px" }}
              mt="60px"
              w={{ base: "350px", md: "660px", lg: "400px", xl: "605px" }}
              maxW={{ base: "350px", md: "660px", lg: "400px", xl: "605px" }}
            />
          </Flex>
          <Flex
            direction="column"
            width="stretch"
            my="auto"
            alignItems={{ base: "center", md: "left" }}
          >
            <Box w="100%">
              <Text
                as="h3"
                fontWeight="700"
                letterSpacing="2px"
                textAlign={{ base: "center", md: "left" }}
                color={brandColor}
                fontSize="sm"
                w="100%"
                mb="10px"
              >
                WORKFLOW LIKE NEVER BEFORE
              </Text>
              <Text
                as="h2"
                fontWeight="800"
                color={textColor}
                fontSize={{ base: "26px", md: "32px" }}
                lineHeight={{ base: "36px", md: "46px" }}
                mb="20px"
                maxW={{ base: "100%", md: "flex" }}
                w={{ base: "100%", md: "80%" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Improve your development process tremendously faster
              </Text>
              <Text
                color="gray.600"
                fontSize={{ base: "md", md: "md", xl: "lg" }}
                fontWeight="500"
                letterSpacing="0px"
                lineHeight={{ base: "24px", md: "30px" }}
                w={{ base: "100%", md: "100%" }}
                mb="30px"
                textAlign={{ base: "center", md: "left" }}
                maxW={{ base: "100%", md: "80%", lg: "100%", xl: "100%" }}
              >
                Horizon AI Template gives you access to a pack with over 100+
                frontend individual elements, like buttons, inputs, prompt
                templates, cards, or alerts, giving you the freedom of choosing
                and combining.
              </Text>
              <SimpleGrid columns={{ base: "1", md: "2", xl: "2" }} gap="24px">
                <Flex>
                  <Icon
                    as={MdLayers}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    letterSpacing="0px"
                  >
                    Clean & structured <br /> coded components
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={MdInsights}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    w={{ base: "100%", md: "70%", lg: "100%" }}
                    letterSpacing="0px"
                  >
                    Available in the most used technology & framework
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={MdDevices}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    letterSpacing="0px"
                  >
                    Full responsive desktop
                    <br />
                    and mobile examples
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={MdAddTask}
                    color={brandColor}
                    w="26px"
                    h="26px"
                    me="10px"
                  />
                  <Text
                    color={brandColor}
                    fontWeight="600"
                    fontSize="md"
                    w="80%"
                    letterSpacing="0px"
                  >
                    Production-ready ChatGPT template prompts
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
        {/* Configurator */}
        {/* <Flex direction={{ base: "column", lg: "row" }} width="100%">
          <Flex direction="column" width="stretch">
            <Box my="auto">
              <Badge
                display={{ base: "flex", lg: "none", xl: "flex" }}
                colorScheme="brand"
                bg="linear-gradient(15.46deg, #4A25E1 26.3%, #9C84FF 91.13%)"
                borderRadius="25px"
                color="white"
                textTransform={"none"}
                mx={{ base: "auto", md: "unset" }}
                letterSpacing="2px"
                px="12px"
                py="8px"
                w="max-content"
                lineHeight="100%"
                mb="30px"
              >
                COMING SOON
              </Badge>
              <Text
                fontWeight="700"
                letterSpacing="2px"
                color={brandColor}
                fontSize="sm"
                w="100%"
                mb="10px"
              >
                THEME STYLES BASED ON YOUR NEEDS
              </Text>
              <Text
                fontWeight="800"
                color={textColor}
                fontSize={{ base: "22px", md: "32px" }}
                lineHeight={{ base: "28px", md: "46px" }}
                mb="20px"
                textAlign={{ base: "center", md: "left" }}
                maxW={{ base: "100%", md: "80%", lg: "100%", xl: "80%" }}
              >
                Themes styles & modes based on your preferences.
              </Text>
              <Text
                color="gray.600"
                fontSize={{ base: "md", md: "md", xl: "lg" }}
                fontWeight="500"
                letterSpacing="0px"
                textAlign={{ base: "center", md: "left" }}
                lineHeight={{ base: "24px", md: "30px" }}
                w={{ base: "100%", md: "70%", lg: "100%", xl: "84%" }}
              >
                Define your project the way you like it by choosing your
                favourite theme mode from: Default, Corporate, Dark or Light.
              </Text>
              <Flex
                direction={"column"}
                zIndex="3"
                w={{ base: "100%", md: "450px" }}
              >
                <Flex direction={{ base: "column", md: "row" }} my="40px">
                  <Link href="#pricing">
                    <Button
                      variant="primary"
                      py="20px"
                      px="16px"
                      fontSize="sm"
                      borderRadius="45px"
                      me={{ base: "0px", md: "14px" }}
                      mb={{ base: "20px", md: "0px" }}
                      w={{ base: "100%", md: "210px" }}
                      h="54px"
                    >
                      Get started now
                      <Icon
                        as={MdChevronRight}
                        color="white"
                        h="16px"
                        w="16px"
                      />
                    </Button>
                  </Link>
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
                      mb={{ base: "10px", md: "0px" }}
                      h="54px"
                    >
                      Try it on live preview
                    </Button>
                  </Link>
                </Flex>
                <Text
                  textAlign="start"
                  color="#4A5568"
                  fontSize="sm"
                  mb={{ base: "60px", md: "0px" }}
                  lineHeight="24px"
                  letterSpacing="0px"
                  fontWeight="500"
                >
                  🤯 Did you know that more than 81.9% of all mobile and desktop
                  users use dark mode and love to have more customization
                  settings?
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            w="max-content"
            position="relative"
            ms={{ lg: "40px" }}
            mt={{ base: "0px", md: "120px", lg: "0px" }}
            alignSelf={{ base: "center", lg: "unset" }}
          >
            <Flex
              position="absolute"
              bg="linear-gradient(107.34deg, #3D1DFF 11.19%, #6147FF 26.5%, #D451FF 42.89%, #EC458D 62.48%, #FFCA8B 79.58%)"
              left="52%"
              top="50%"
              w={{ base: "200px", md: "400px", lg: "300px", xl: "400px" }}
              h={{ base: "200px", md: "400px", lg: "300px", xl: "400px" }}
              filter="blur(80px)"
              zIndex={"1"}
              transform="translate(-50%, -50%)"
            />
            <Image
              zIndex={"2"}
              src={main}
              w={{ base: "275px", md: "445px", lg: "360px", xl: "445px" }}
              borderRadius={{ base: "8px", md: "14px", lg: "14px" }}
              maxW={{ base: "275px", md: "445px", lg: "360px", xl: "445px" }}
            />
            <Image
              zIndex={"2"}
              src={contrast}
              position={"absolute"}
              boxShadow="0px 24.3052px 140.97px -41.805px #8899AC"
              top={{ base: "-20px", md: "-56px", lg: "-50px", xl: "-70px" }}
              borderRadius={{ base: "8px", md: "14px", lg: "14px" }}
              w={{ base: "160px", md: "260px", lg: "220px", xl: "260px" }}
              h={{ base: "90px", md: "138px", lg: "118px", xl: "138px" }}
              right={{ base: "-36px", md: "-66px", lg: "-20px", xl: "-50px" }}
            />
            <Image
              zIndex={"5"}
              src={fullscreen}
              borderRadius={{ base: "8px", md: "14px", lg: "14px" }}
              w={{ base: "158px", md: "238px", lg: "198px", xl: "238px" }}
              h={{ base: "40px", md: "60px", lg: "50px", xl: "60px" }}
              position={"absolute"}
              boxShadow="0px 22.1516px 128.479px -14.1007px #8899AC"
              bottom={{ base: "122px", md: "210px", lg: "140px", xl: "200px" }}
              right={{ base: "-40px", md: "-50px" }}
            />
            <Image
              zIndex={"2"}
              borderRadius={{ base: "8px", md: "14px", lg: "14px" }}
              w={{ base: "132px", md: "302px", lg: "232px", xl: "302px" }}
              h={{ base: "74px", md: "162px", lg: "122px", xl: "162px" }}
              src={colors}
              position={"absolute"}
              boxShadow="0px 24.3052px 140.97px -41.805px #8899AC"
              bottom={{ base: "-18px", md: "-62px", lg: "-46px", xl: "-70px" }}
              left={{ base: "-30px", md: "-80px", lg: "-70px", xl: "-100px" }}
            />
          </Flex>
        </Flex> */}
      </InnerContent>
    </Flex>
  );
}
