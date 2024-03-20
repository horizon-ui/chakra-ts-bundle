/*eslint-disable*/
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import horizonuilogomain from "assets/img/pro/layout/horizonuilogomain.png";
import { HSeparator } from "components/separator/Separator";
import { FaDiscord } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
export default function Footer() {
  const textColor = useColorModeValue("120F43", "white");
  const textColorSecondary = useColorModeValue("gray.600", "white");
  const textFooter = useColorModeValue("secondaryGray.900", "white");
  let menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
      }}
      alignItems="start"
      justifyContent="space-between"
      pb="30px"
      // pt={{ base: "60px", md: "100px", lg: "100px", xl: "140px" }}
      position="relative"
      px={{ base: "20px", xl: "0px" }}
      bg="white"
    >
      <Flex
        bg={`linear-gradient(180deg, #603CFF 0%, #3609FF 100%)`}
        w="100%"
        maxW="1170px"
        mx="auto"
        borderRadius="16px"
        px={{ base: "20px", md: "70px" }}
        py={{ base: "20px", md: "60px" }}
        bgPosition="center"
        bgSize="cover"
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        justifyContent="space-between"
        align={{ base: "start", lg: "center" }}
      >
        <Flex
          flexDirection={{
            base: "column",
            lg: "row",
          }}
        >
          <Icon
            alt="discord logo"
            me={{ base: "0px", lg: "40px" }}
            as={FaDiscord}
            color="white"
            w="80px"
            h="80px"
          />
          <Box>
            <Text
              fontSize={{ base: "20px", md: "30px" }}
              color="white"
              fontWeight="700"
            >
              Connect with the community!
            </Text>
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              mb={{ base: "20px", lg: "unset" }}
              mt={{ base: "6px", md: "unset" }}
              color="white"
              fontWeight="500"
            >
              Feel free to ask questions, report issues, and meet new people.
            </Text>
          </Box>
        </Flex>
        <Link isExternal="true" href="https://discord.gg/f6tEKFBd4m">
          <Button
            ms={{ base: "0px", lg: "auto" }}
            bg="white"
            color="brand.500"
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            borderRadius="45px"
            w="276px"
            h="54px"
            fontSize={"sm"}
          >
            Join the #HorizonUI Community!
          </Button>
        </Link>
      </Flex>
      <Flex
        justifyContent="space-between"
        mt="100px"
        w={{ base: "100%", xl: "1170px" }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        maxW={{ base: "100%", xl: "1170px" }}
        mx="auto"
      >
        <Box
          maxW={{
            base: "100%",
            lg: "360px",
          }}
          pe={{
            lg: "30px",
            xl: "0px",
          }}
        >
          <Link
            mb="20px"
            display={"flex"}
            alignItems="center"
            href="/chakra-ts-bundle"
            w="full"
          >
            <Image
              alt="Chakra UI TS Bundle - Horizon UI Spring Sale"
              me="10px"
              w="179px"
              src={horizonuilogomain}
            />
          </Link>
          <Text
            lineHeight="180%"
            fontSize="sm"
            color="gray.600"
            fontWeight="500"
            letterSpacing="0px"
            mb="26px"
          >
            Start building your SaaS products with our Chakra UI Horizon UI
            Bundle, the trendiest Admin Template pack for React, NextJS, OpenAI
            GPT and Chakra UI!
          </Text>
          <a
            href="https://www.producthunt.com/posts/horizon-ui?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-horizon&#0045;ui"
            target="blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=342582&theme=light&period=daily"
              alt="Horizon&#0032;UI - Trendiest&#0032;open&#0045;source&#0032;React&#0032;admin&#0032;template | Product Hunt"
              style={{
                width: "250px",
                height: "54px",
                pointerEvents: "none",
              }}
              width="250"
              height="54"
            />
          </a>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "100%", lg: "100%", xl: "690px" }}
        >
          <Flex
            direction="column"
            me={{ base: "20px", md: "60px", lg: "14px", xl: "60px" }}
            mt={{ base: "30px", md: "40px", lg: "0px" }}
          >
            <Text
              mb="20px"
              fontSize="md"
              letterSpacing="0px"
              color={textFooter}
              fontWeight="600"
            >
              Resources
            </Text>
            <Link
              href="https://www.horizon-ui.com/?ref=footer-ai-template"
              fontSize="sm"
              isExternal="true"
              color={textColorSecondary}
              fontWeight="500"
              mb="20px"
              letterSpacing="0px"
            >
              Horizon UI Free
            </Link>
            <Link
              href="https://www.horizon-ui.com/pro"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              letterSpacing="0px"
              mb="20px"
            >
              Horizon UI PRO
            </Link>
            <Link
              href="https://www.horizon-ui.com/boilerplate"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              letterSpacing="0px"
              mb="20px"
            >
              Boilerplate
            </Link>
            <Link
              href="https://www.horizon-ui.com/app-generator"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              letterSpacing="0px"
              mb="20px"
            >
              App Generator
            </Link>
            <Link
              href="https://www.horizon-ui.com/landing-kit"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              letterSpacing="0px"
              mb="20px"
            >
              Landing Kit
            </Link>
            <Link
              href="https://www.horizon-ui.com/components/?ref=footer-ai-template"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              letterSpacing="0px"
              mb="20px"
            >
              Components
            </Link>
            <Link
              isExternal="true"
              href="https://blog.horizon-ui.com"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
            >
              Blog
            </Link>
          </Flex>
          <Flex
            direction="column"
            me={{ base: "20px", md: "80px", lg: "50px", xl: "60px" }}
            mt={{ base: "30px", md: "40px", lg: "0px" }}
          >
            <Text mb="20px" fontSize="md" color={textFooter} fontWeight="600">
              Help & Support
            </Text>
            <Link
              href="https://horizon-ui.com/docs-ai-template/docs/introduction?ref=footer-ai-template"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              mb="20px"
              letterSpacing="0px"
            >
              Documentation
            </Link>
            <Link
              href="mailto:hello@simmmple.com"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              mb="20px"
              letterSpacing="0px"
            >
              Contact Us
            </Link>
            <Link
              href="mailto:hello@simmmple.com"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              isExternal="true"
              letterSpacing="0px"
              mb="20px"
            >
              Support
            </Link>
            <Link
              isExternal="true"
              href="https://feedback.horizon-ui.com"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
            >
              Roadmap
            </Link>
          </Flex>
          <Flex
            direction="column"
            me={{ base: "20px", md: "80px", lg: "50px", xl: "60px" }}
            mt={{ base: "30px", md: "40px", lg: "0px" }}
          >
            <Text mb="20px" fontSize="md" color={textFooter} fontWeight="600">
              Social Media
            </Text>
            <Link
              isExternal="true"
              href="https://github.com/horizon-ui"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              mb="20px"
              letterSpacing="0px"
            >
              Github
            </Link>
            <Link
              isExternal="true"
              href="https://twitter.com/horizon_ui"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              mb="20px"
              letterSpacing="0px"
            >
              Twitter
            </Link>
            <Link
              isExternal="true"
              href="https://instagram.com/horizon.ui"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              mb="20px"
              letterSpacing="0px"
            >
              Instagram
            </Link>
            <Link
              isExternal="true"
              href="https://www.facebook.com/horizon.ui"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
            >
              Facebook
            </Link>
          </Flex>
          <Flex direction="column" mt={{ base: "30px", md: "40px", lg: "0px" }}>
            <Text mb="20px" fontSize="md" color={textFooter} fontWeight="600">
              Legal Resources
            </Text>
            <Link
              isExternal="true"
              href="https://horizon-ui.notion.site/Terms-Conditions-6e79229d25ed48f48a481962bc6de3ee"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
              mb="20px"
            >
              Terms & Conditions
            </Link>
            <Link
              isExternal="true"
              href="https://horizon-ui.notion.site/Privacy-Policy-8addde50aa8e408ca5c5f5811c38f971"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
              mb="20px"
            >
              Privacy Policy
            </Link>
            <Link
              isExternal="true"
              href="https://horizon-ui.notion.site/End-User-License-Agreement-8fb09441ea8c4c08b60c37996195a6d5"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
              mb="20px"
            >
              License
            </Link>
            <Link
              isExternal="true"
              href="https://horizon-ui.notion.site/Refund-Policy-5d5fa25f7fac4978a0be6fcf3036c6ee"
              fontSize="sm"
              color={textColorSecondary}
              fontWeight="500"
              letterSpacing="0px"
            >
              Refund Policy
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <HSeparator mt="75px" mb="50px" maxW="1170px" mx="auto" bg="gray.200" />
      <Flex mx="auto">
        <Text
          me="4px"
          letterSpacing="0px"
          fontSize="sm"
          fontWeight="500"
          textColor={textColorSecondary}
        >
          Horizon UI © 2021-2024 Copyright. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
}
