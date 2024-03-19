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
  Avatar,
  Box,
  Image,
  Button,
  Flex,
  Icon,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  useColorModeValue,
  useDisclosure,
  SimpleGrid,
  // useToast,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import horizonuilogo from "assets/img/pro/started/horizonuilogo.png";
import { IoIosStar, IoMdClose } from "react-icons/io";
import avatar from "assets/img/pro/started/Image.png";
// Assets

// Custom components
import Card from "components/card/Card";

export default function TechCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    title,
    techs,
    disabled,
    buttonText,
    buttonLink,
    encharge,
    enchargeCode,
  } = props;
  const [hovered, setHovered] = React.useState(false);
  const textColor = useColorModeValue("#120F43", "white");
  return (
    <Box>
      {encharge ? (
        <Box px="8px">
          <Button
            onClick={onOpen}
            w={{ base: "100%", md: "100", lg: "200px" }}
            ms="auto"
            fontSize="14px"
            border="1px solid"
            borderRadius="45px"
            bg={"transparent"}
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.100" }}
            py="26px"
            borderColor="gray.300"
            color={textColor}
          >
            Get started for Free
            <Icon as={MdChevronRight} textColor={textColor} />
          </Button>
          <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bg="transparent"
              boxShadow={"none"}
              pt={{ base: "10px", md: "20px", lg: "0px" }}
              maxW={{
                base: "calc(100%)",
                md: "calc(100% - 270px)",
                lg: "calc(100% - 20px)",
                xl: "1170px",
              }}
              h={{ base: "100% !important", lg: "724px !important" }}
              borderRadius="26px !important"
              maxH={{ base: "100%", lg: "724px" }}
              alignSelf="center"
            >
              <ModalBody
                overflow="hidden"
                w={{
                  base: "100%",
                  lg: "calc(100%)",
                  xl: "1170px",
                }}
                h={{
                  base: "100%",
                  md: "760px",
                  lg: "724px",
                  xl: "780px !important",
                }}
                maxH={{
                  base: "90%",
                  md: "760px",
                  lg: "724px",
                  xl: "780px !important",
                }}
                p={{
                  base: "0px",
                  md: "40px !important",
                  lg: "26px !important",
                }}
                borderRadius="26px !important"
                bg={{
                  base: "none",
                  md: "radial-gradient(59.85% 45.88% at 47.22% -8.07%, #B4B0FE 0%, #4D498F 22.92%, #110D5B 42.71%, #050327 88.54%)",
                }}
                position={"relative"}
              >
                <Flex
                  position="absolute"
                  w={{ base: "94%", md: "90%", lg: "95%" }}
                  mt={{ base: "20px", md: "-20px", lg: "unset" }}
                  justify={"end"}
                  zIndex="20"
                >
                  <Button
                    onClick={onClose}
                    top="26px"
                    ms="auto"
                    p="9px"
                    w="32px"
                    _hover={{ bg: "rgba(255, 255, 255, 0.22" }}
                    _active={{ bg: "rgba(255, 255, 255, 0.16" }}
                  >
                    <Icon
                      w="24px"
                      h="24px"
                      color={{ base: "#120F43", md: "white" }}
                      as={IoMdClose}
                    />
                  </Button>
                </Flex>
                <SimpleGrid
                  columns={{ base: "1", lg: "2" }}
                  w={{ base: "100%", lg: "100%" }}
                  h="100%"
                >
                  <Card
                    display="block"
                    w={{
                      base: "calc(100% - 20px)",
                      md: "100%",
                      xl: "94%",
                    }}
                    h={{
                      base: "max-content",
                      lg: "calc(100% - 26px)",
                      xl: "100% !important",
                    }}
                    maxH={{
                      base: "max-content",
                      lg: "calc(100% - 26px)",
                    }}
                    zIndex="2"
                    py={{ base: "20px", md: "24px", lg: "36px" }}
                    px={{ base: "20px", md: "24px", lg: "36px" }}
                    mx={{ base: "10px", md: "unset" }}
                  >
                    <Flex maxW="62%">{techs}</Flex>
                    <Text
                      color="#120F43"
                      fontSize={{ base: "28px", md: "32px" }}
                      lineHeight={{ base: "38px", md: "42px" }}
                      fontWeight={"500"}
                    >
                      Download for free:
                    </Text>
                    <Text
                      color="#120F43"
                      fontSize={{ base: "28px", md: "32px" }}
                      lineHeight={{ base: "38px", md: "42px" }}
                      fontWeight={"800"}
                      mb="10px"
                    >
                      {title}
                    </Text>
                    <Text
                      color="gray.600"
                      fontSize={{ base: "sm", lg: "md" }}
                      fontWeight="500"
                      mb="30px"
                      letterSpacing="0px"
                    >
                      Enter your email address to receive your free files.
                    </Text>
                    <div
                      class="encharge-form-embed"
                      defer
                      data-encharge-form-id={enchargeCode}
                    ></div>
                    <Text
                      display={"flex"}
                      my="18px"
                      fontSize="12px"
                      color="gray.600"
                      fontWeight={"500"}
                      mx="auto"
                      flexWrap={"wrap"}
                      letterSpacing="0px"
                      maxW={{ md: "80%" }}
                      justifyContent="center"
                      textAlign={"center"}
                    >
                      By downloading, you agree with Encharge's
                      <Link
                        isExternal
                        mx="3px"
                        fontWeight={"600"}
                        letterSpacing="0px"
                        color="#603CFF"
                        href="https://encharge.io/terms-of-service"
                      >
                        Terms of Service
                      </Link>
                      and
                      <Link
                        isExternal
                        letterSpacing="0px"
                        mx="3px"
                        fontWeight={"600"}
                        color="#603CFF"
                        href="https://encharge.io/privacy-policy"
                      >
                        Privacy Policy.
                      </Link>
                    </Text>
                  </Card>
                  <Flex
                    display={{ base: "none", lg: "flex" }}
                    direction="column"
                    align={"center"}
                    mx="auto"
                    justify="center"
                  >
                    <Image src={horizonuilogo} w="248px" h="54px" mb="50px" />
                    <Text
                      color="white"
                      fontWeight={"500"}
                      lineHeight={"24px"}
                      letterSpacing="0px"
                      textAlign="center"
                      px="30px"
                      mb="50px"
                    >
                      "A must-needed powerful kit for every single AI Project.
                      Love how the team strives to make its designs
                      pixel-perfect. Attention to detail, smooth effects, and
                      flexibility make Horizon AI Template of the best ChatGPT
                      AI kits available in the market.”
                    </Text>
                    <Flex
                      alignItems="center"
                      justifyContent={{ base: "center", lg: "unset" }}
                    >
                      <Avatar h="68px" w="68px" me="20px" src={avatar} />
                      <Box>
                        <Text
                          color="white"
                          fontSize="md"
                          letterSpacing="0px"
                          fontWeight="800"
                        >
                          Alexandru Paduraru
                        </Text>
                        <Flex mb="4px" align="center">
                          <Text
                            color="white"
                            fontSize="md"
                            fontWeight="500"
                            letterSpacing="0px"
                            me="5px"
                          >
                            CEO & Founder of
                          </Text>
                          <Link
                            isExternal="true"
                            href="https://creative-tim.com/?ref=horizon-ui.com"
                            color="white"
                            fontWeight="700"
                            letterSpacing="0px"
                            fontSize="md"
                          >
                            Creative Tim
                          </Link>
                        </Flex>
                        <Flex
                          justify={{ base: "start", md: "start" }}
                          alignItems="center"
                        >
                          <Icon
                            as={IoIosStar}
                            w="18px"
                            h="18px"
                            color="#ED8936"
                          />
                          <Icon
                            as={IoIosStar}
                            w="18px"
                            h="18px"
                            color="#ED8936"
                          />
                          <Icon
                            as={IoIosStar}
                            w="18px"
                            h="18px"
                            color="#ED8936"
                          />
                          <Icon
                            as={IoIosStar}
                            w="18px"
                            h="18px"
                            color="#ED8936"
                          />
                          <Icon
                            as={IoIosStar}
                            w="18px"
                            h="18px"
                            color="#ED8936"
                            me="8px"
                          />
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                </SimpleGrid>
                <Flex
                  display={{ base: "none", md: "flex" }}
                  positon="absolute"
                  w={{
                    base: "calc(100%)",
                    md: "calc(100%)",
                    lg: "calc(200%)",
                    xl: "2167.1px",
                  }}
                  height="1132.3px"
                  bg="#5D4FFF"
                  zIndex={"1"}
                  left="50%"
                  transform={"translate(-50%,0px)"}
                  bottom="-1000px"
                  filter="blur(130px)"
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <Box px="8px">
          <Link isExternal="true" href={buttonLink}>
            <Button
              disabled={disabled}
              _disabled={{ bg: "#EDF2F7" }}
              transition="0.2s linear"
              _hover={{
                bg: disabled ? "#EDF2F7" : "",
                cursor: disabled ? "not-allowed" : "",
                boxShadow: disabled
                  ? "none"
                  : "0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important",
              }}
              variant={
                disabled ? "primary" : hovered ? "primary" : "transparent"
              }
              // onClick={() =>
              //   openCheckout({
              //     product: productCode,
              //     successCallback: function (data) {
              //       window.dataLayer.push({ event: "checkoutSuccess" });
              //     },
              //     closeCallback: function (data) {
              //       window.dataLayer.push({ event: "checkoutClose" });
              //     },
              //   })
              // }
              w="100%"
              borderRadius="45px"
              _active={{
                bg: disabled ? "#EDF2F7" : "",
              }}
              border={disabled ? "none" : hovered ? "0px" : "1px solid #E2E8F0"}
              borderColor={
                disabled ? "none" : hovered ? "#ffffff00" : "#E2E8F0"
              }
              h="54px"
              fontSize="sm"
            >
              <Text
                transition="0.1s linear"
                color={disabled ? textColor : hovered ? "white" : textColor}
              >
                {buttonText}
              </Text>
              <Icon
                color={disabled ? textColor : hovered ? "white" : textColor}
                as={MdChevronRight}
                ms="5px"
                mt="2px"
                h="16px"
                w="16px"
              />
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
