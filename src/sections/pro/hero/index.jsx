// Chakra imports
import {
  Button,
  Flex,
  Link,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import { MdChevronRight } from "react-icons/md";

import chakra from "assets/img/pro/hero/chakra.png";
import tailwind from "assets/img/pro/hero/tailwind.png";
import plusBlue from "assets/img/pro/hero/plus-blue.png";
import plusGreen from "assets/img/pro/hero/plus-green.png";
import typescript from "assets/img/pro/hero/typescript.png";
import javascript from "assets/img/pro/hero/javascript.png";

// Custom components
import InnerContent from "layouts/innerContent";
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
        "2xl": "110px",
        "3xl": "220px",
      }}
      position="relative"
    >
      <InnerContent
        w="1170px"
        bg="linear-gradient(180deg, #CFFFF6 0%, #FFF 100%)"
        borderRadius="30px"
        maxW="100%"
        py="80px"
        px={{ base: "20px", md: "40px", xl: "0px" }}
        zIndex="2"
      >
        <Flex mb="20px" justifyContent="center" alignItems="center" gap="16px">
          <Image src={chakra} w="80px" h="80px" alt="chakra ui logo" />
          <Image src={plusGreen} w="34px" h="34px" alt="plus green" />
          <Image src={typescript} w="80px" h="80px" alt="typescript logo" />
        </Flex>
        <Flex
          direction="column"
          mx="auto"
          px={{ base: "0px", md: "40px", xl: "0px" }}
          textAlign="center"
        >
          <Text
            as="h1"
            color={textColor}
            fontWeight="700"
            fontSize={{ base: "26px", md: "46px", lg: "50px", xl: "66px" }}
            lineHeight={{ base: "36px", md: "56px", lg: "60px", xl: "74px" }}
            px={{
              base: "0px",
              md: "0px",
              lg: "90px",
              xl: "40px",
              "2xl": "60px",
            }}
            mb={{ base: "24px", md: "30px" }}
          >
            Chakra UI + TS
            <Text
              as="h1"
              fontWeight="800"
              fontSize={{ base: "26px", md: "46px", lg: "50px", xl: "90px" }}
              lineHeight={{
                base: "36px",
                md: "56px",
                lg: "60px",
                xl: "90px",
              }}
              position={"relative"}
              bgClip="text"
              color={textColor}
            >
              PRO Bundle
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
              "2xl": "55%",
            }}
          >
            Take advantage of the Spring Special offer today and get all Chakra
            UI + TS products of Horizon UI at up to 53% off!
          </Text>
          <Flex
            align="center"
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", lg: "center" }}
          >
            <Link href="#offers">
              <Button
                variant="primary"
                py="20px"
                px="16px"
                fontSize="sm"
                borderRadius="45px"
                me={{ base: "0px", md: "14px" }}
                mb={{ base: "20px", md: "0px" }}
                w={{ base: "300px", md: "250px" }}
                h="64px"
              >
                Grab the Bundle now
                <Icon as={MdChevronRight} color="white" h="16px" w="16px" />
              </Button>
            </Link>
            <Link href="#">
              <Button
                bg="transparent"
                variant="transparent"
                border="1px solid"
                borderColor={borderColor}
                color={textColor}
                my="auto"
                w={{ base: "300px", md: "220px" }}
                h="64px"
                fontSize="sm"
                borderRadius="45px"
              >
                Discover all Products
              </Button>
            </Link>
          </Flex>
        </Flex>
      </InnerContent>
    </Flex>
  );
}
