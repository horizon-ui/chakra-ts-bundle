/* eslint-disable */
// Chakra Imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Badge,
  Box,
  Image,
  Button,
  Flex,
  Icon,
  UnorderedList,
  ListItem,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import horizonuilogomain from "assets/img/pro/horizonuilogomain.png";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { IoChevronDown, IoMenuOutline } from "react-icons/io5";
import { MdChevronRight, MdStarOutline } from "react-icons/md";

function formatNumber(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];

      break;
    }
  }

  return number;
}
export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });
  useEffect(() => {
    const response = fetch(
      "https://api.github.com/repos/horizon-ui/horizon-ui-chakra"
    )
      .then((response) => response.json())
      .then((data) => setStars(formatNumber(data.stargazers_count, 1)));
  }, []);

  const { secondary, message } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let textColor = useColorModeValue("secondaryGray.900", "white");
  let borderColor = useColorModeValue("gray.300", "white");
  let navbarPosition = "fixed";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue("whiteAlpha.700", "rgba(11,20,55,0.5)");
  let navbarBorder = "transparent";
  let secondaryMargin = "90px";
  let paddingX = "15px";
  let gap = "0px";
  let menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  if (scrolled) secondaryMargin = "0px";
  else secondaryMargin = "55px";
  if (!scrolled) navbarBackdrop = "unset";
  if (!scrolled) navbarBg = "transparent";
  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      zIndex="200"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      display={secondary ? "block" : "flex"}
      minH="68px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      py="8px"
      left="50%"
      transform="translate(-50%,0px)"
      px={{
        sm: paddingX,
        md: "10px",
        lg: "12px",
      }}
      ps={{
        xl: "12px",
      }}
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 250px)",
        "2xl": "1200px",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "row",
          md: "row",
        }}
        alignItems="center"
        justify="space-between"
        mb={gap}
      >
        <Link
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          href="/ai-template"
        >
          {/* <Icon
            as={HorizonUI2Free}
            color={textColor}
            w="179px"
            h="39px"
            me="10px"
          /> */}
          <Image
            alt="horizon ai template - premium chatbot chatgpt react admin template logo"
            me="10px"
            w="179px"
            src={horizonuilogomain}
          />
          <Badge
            display={{ base: "flex", lg: "none", xl: "flex" }}
            colorScheme="brand"
            borderRadius="25px"
            color="brand.500"
            textTransform={"none"}
            letterSpacing="0px"
            px="8px"
          >
            AI Template
          </Badge>
        </Link>
        <Flex>
          <Link
            display={{ base: "none", lg: "block" }}
            href="https://horizon-ui.com/docs-ai-template/docs/introduction"
            color="gray.600"
            fontSize="sm"
            fontWeight="500"
            letterSpacing="0px"
            me="30px"
            my="auto"
          >
            Documentation
          </Link>

          <Menu>
            <MenuButton
              display={{ base: "none", lg: "flex" }}
              flexDirection="row !important"
              p="0px !important"
            >
              {" "}
              <Text
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                color="gray.600"
                fontSize="sm"
                fontWeight="500"
                me="20px"
                my="auto"
              >
                Admin Template
                <Icon ms="6px" as={IoChevronDown} />
              </Text>
            </MenuButton>
            <MenuList
              boxShadow={shadow}
              p="0px"
              mt="0px"
              borderRadius="10px"
              bg={menuBg}
            >
              <Flex flexDirection="column" p="10px">
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    isExternal="true"
                    me="10px"
                    my="auto"
                  >
                    Horizon UI Free
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com/pro"
                    color="gray.600"
                    fontSize="sm"
                    isExternal="true"
                    fontWeight="500"
                    me="10px"
                    my="auto"
                  >
                    Horizon UI PRO
                  </Link>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
          <Link
            display={{ base: "none", lg: "block" }}
            href="#pricing"
            color="gray.600"
            fontSize="sm"
            fontWeight="500"
            letterSpacing="0px"
            me="30px"
            my="auto"
          >
            Pricing
          </Link>
          <Menu>
            <MenuButton
              display={{ base: "none", lg: "flex" }}
              flexDirection="row !important"
              p="0px !important"
            >
              {" "}
              <Text
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                color="gray.600"
                fontSize="sm"
                fontWeight="500"
                me="20px"
                my="auto"
              >
                Resources
                <Icon ms="6px" as={IoChevronDown} />
              </Text>
            </MenuButton>
            <MenuList
              boxShadow={shadow}
              p="0px"
              mt="0px"
              borderRadius="10px"
              bg={menuBg}
            >
              <Flex flexDirection="column" p="10px">
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    isExternal="true"
                    me="10px"
                    my="auto"
                  >
                    Admin Template
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com/boilerplate"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    isExternal="true"
                    me="10px"
                    my="auto"
                  >
                    Boilerplate
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com/app-generator"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    isExternal="true"
                    me="10px"
                    my="auto"
                  >
                    App Generator
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com/landing-kit"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    isExternal="true"
                    me="10px"
                    my="auto"
                  >
                    Landing Kit
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com/components"
                    color="gray.600"
                    fontSize="sm"
                    isExternal="true"
                    fontWeight="500"
                    me="10px"
                    my="auto"
                  >
                    Components
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://blog.horizon-ui.com"
                    color="gray.600"
                    fontSize="sm"
                    isExternal="true"
                    fontWeight="500"
                    me="10px"
                    my="auto"
                  >
                    Blog
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#EDF2F7" }}
                  transition="0.1s linear"
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="#faqs"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    me="10px"
                    my="auto"
                  >
                    FAQs
                  </Link>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              display={{ base: "block", xl: "none" }}
              p="0px !important"
              maxH="20px"
              maxW="20px"
              alignContent="end"
            >
              <Icon
                mt="2px"
                display={{ base: "block", lg: "none" }}
                as={IoMenuOutline}
                color={textColor}
                w="20px"
                h="20px"
                _hover={{ cursor: "pointer" }}
              />
            </MenuButton>
            <MenuList
              boxShadow={shadow}
              p="0px"
              mt="10px"
              borderRadius="10px"
              border="1px solid"
              borderColor="#CBD5E0"
              bg={menuBg}
            >
              <Flex flexDirection="column" p="10px">
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Link
                    href="https://horizon-ui.com/docs-ai-template/docs/introduction"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    me="30px"
                    my="auto"
                  >
                    Documentation
                  </Link>
                </MenuItem>
                <Accordion allowMultiple>
                  <AccordionItem border="0px" p="0px">
                    <AccordionButton
                      display={"flex"}
                      flexDirection="column"
                      outline={"none"}
                      px="14px"
                      _focus={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        background: "transparent !important",
                      }}
                    >
                      <Text
                        display={"flex"}
                        alignItems="center"
                        w="100%"
                        color="gray.600"
                        fontSize="sm"
                        fontWeight="500"
                        textAlign={"start"}
                      >
                        Admin Template
                        <Icon ms="8px" as={IoChevronDown} />
                      </Text>
                    </AccordionButton>
                    <AccordionPanel display="flex" flexDirection={"column"}>
                      <UnorderedList>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Horizon UI Free
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem>
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com/pro"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Horizon UI PRO
                            </Link>
                          </MenuItem>
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="red.400"
                  borderRadius="8px"
                >
                  <Link
                    href="#pricing"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    me="30px"
                    my="auto"
                  >
                    Pricing
                  </Link>
                </MenuItem>
                <Accordion allowMultiple>
                  <AccordionItem border="0px" p="0px">
                    <AccordionButton
                      display={"flex"}
                      flexDirection="column"
                      outline={"none"}
                      px="14px"
                      _focus={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        background: "transparent !important",
                      }}
                    >
                      <Text
                        display={"flex"}
                        alignItems="center"
                        w="100%"
                        color="gray.600"
                        fontSize="sm"
                        fontWeight="500"
                        textAlign={"start"}
                      >
                        Resources
                        <Icon ms="8px" as={IoChevronDown} />
                      </Text>
                    </AccordionButton>
                    <AccordionPanel display="flex" flexDirection={"column"}>
                      <UnorderedList>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Admin Template
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com/boilerplate"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Boilerplate
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com/app-generator"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              App Generator
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com/landing-kit"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Landing Kit
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://horizon-ui.com/components"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Components
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem mb="10px">
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="https://blog.horizon-ui.com"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              Blog
                            </Link>
                          </MenuItem>
                        </ListItem>
                        <ListItem>
                          <MenuItem
                            _hover={{ bg: "none" }}
                            _focus={{ bg: "none" }}
                            borderRadius="8px"
                            px="14px"
                          >
                            <Link
                              href="#faqs"
                              color="gray.600"
                              fontSize="sm"
                              fontWeight="500"
                              my="auto"
                            >
                              FAQs
                            </Link>
                          </MenuItem>
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="red.400"
                  borderRadius="8px"
                >
                  {/* <Link
                    p="0px"
                    m="0px"
                    target="blank"
                    href="https://github.com/horizon-ui/horizon-ui-chakra"
                    display={{ base: "flex", lg: "none" }}
                    me="10px"
                  >
                    <Button
                      overflow="hidden"
                      variant="no-hover"
                      border="1px solid"
                      borderColor={borderColor}
                      color={textColor}
                      h="25px"
                      display="flex"
                      alignItems="center"
                      justify="center"
                      justifyContent="space-between"
                      fontSize="xs"
                      borderRadius="12px"
                      bg="transparent"
                      my="auto"
                      p="0px"
                    >
                      <Flex
                        bg="secondaryGray.400"
                        align="center"
                        justify="center"
                        h="100%"
                        ps="6px"
                        pe="8px"
                        fontWeight="bold"
                      >
                        <Icon as={MdStarOutline} h="18px" w="18px" me="4px" />{" "}
                        <Text>Star</Text>
                      </Flex>
                      <Text px="8px">{stars}</Text>
                    </Button>
                  </Link>{" "} */}
                  <Link
                    isExternal
                    href="https://horizon-ui.com/horizon-ai-template"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="500"
                    me="18px"
                    my="auto"
                    letterSpacing="0px"
                  >
                    Live Preview
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                >
                  <Link href="#pricing">
                    <Button
                      variant="transparent"
                      border="1px solid"
                      borderColor={borderColor}
                      color={textColor}
                      fontSize="sm"
                      borderRadius="45px"
                      bg="transparent"
                      my="auto"
                    >
                      Get started now
                      <Icon
                        as={MdChevronRight}
                        ms="5px"
                        mt="2px"
                        h="16px"
                        w="16px"
                      />
                    </Button>
                  </Link>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
        <Flex display={{ base: "none", lg: "flex" }}>
          {/* <Link
            display="flex"
            p="0px"
            m="0px"
            target="blank"
            href="https://github.com/horizon-ui/horizon-ui-chakra"
            me="10px"
          >
            <Button
              overflow="hidden"
              variant="no-hover"
              border="1px solid"
              borderColor={borderColor}
              color={textColor}
              h="25px"
              display="flex"
              alignItems="center"
              justify="center"
              justifyContent="space-between"
              fontSize="xs"
              borderRadius="12px"
              bg="transparent"
              my="auto"
              p="0px"
            >
              <Flex
                bg="secondaryGray.400"
                align="center"
                justify="center"
                h="100%"
                ps="6px"
                pe="8px"
                fontWeight="bold"
              >
                <Icon as={MdStarOutline} h="18px" w="18px" me="4px" />{" "}
                <Text>Star</Text>
              </Flex>
              <Text px="8px">{stars}</Text>
            </Button>
          </Link>{" "} */}
          <Link
            isExternal
            href="https://horizon-ui.com/horizon-ai-template"
            color="gray.600"
            fontSize="sm"
            fontWeight="500"
            me="18px"
            my="auto"
            letterSpacing="0px"
          >
            Live Preview
          </Link>
          <Link href="#pricing" display={{ base: "none", lg: "block" }}>
            <Button
              variant="transparent"
              border="1px solid"
              borderColor={borderColor}
              color={textColor}
              fontSize="sm"
              borderRadius="45px"
              px="18px"
              py="12px"
              bg="transparent"
              my="auto"
            >
              Get started now
              <Icon as={MdChevronRight} ms="5px" mt="2px" h="16px" w="16px" />
            </Button>
          </Link>
        </Flex>
      </Flex>
      {secondary ? <Text color="white">{message}</Text> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
