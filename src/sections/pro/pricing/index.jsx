// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";

import ribbon from "assets/img/pro/pricing/ribbon.png";

import { VSeparator } from "components/separator/Separator";
import IconBox from "components/icons/IconBox";
import { Cubes, Copy, Contact, InfinityIcon } from "components/icons/Icons";
import InnerContent from "layouts/innerContent";
import React, { useEffect, useState } from "react";
import { MdChevronRight, MdPerson, MdGroup } from "react-icons/md";
import { TextLine } from "components/icons/Icons";

function formatNumber(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];

      break;
    }
  }

  return number;
}

export default function Pricing(props) {
  const { ...rest } = props;

  const [version, setVersion] = useState("ai-chakra-ts");
  // Chakra Color Mode
  // const buttonBorder = useColorModeValue("#E0E5F2", "white");
  const textColor = useColorModeValue("#120F43", "white");
  const textColorVAT = useColorModeValue("gray.600", "gray.600");
  const textColorSecondary = useColorModeValue("gray.600", "white");
  const textColorTertiary = useColorModeValue("gray.300", "white");
  const textGradient = useColorModeValue(
    "linear-gradient(119.25deg, #00E0FF 0%, #4318FF 50.21%, #FB18BC 78.6%)",
    "white"
  );
  const brandColor = useColorModeValue("brand.500", "white");
  const brandColorPrice = useColorModeValue("brand.500", "white");
  // const badgeColor = useColorModeValue('#E9E3FF', 'white');
  const card = useColorModeValue("#fff", "rgba(255, 255, 255, 0.05)");
  const cardTeam = useColorModeValue(
    "radial-gradient(58.11% 44.54% at 51.59% -9.61%, #B4B0FE 0%, #363285 22.92%, #110D5B 42.71%, #050327 88.54%)",
    "rgba(255, 255, 255, 0.1)"
  );
  const secCard = useColorModeValue("#F3F5FA", "rgba(255, 255, 255, 0.05)");
  const secCardTeam = useColorModeValue(
    "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.06) 50.63%, rgba(255, 255, 255, 0.03) 100%)",
    "rgba(255, 255, 255, 0.09)"
  );
  const Paddle = window.Paddle;
  const openCheckout = (id) => {
    Paddle.Checkout.open(id);
  };

  const [stars, setStars] = useState(0);
  useEffect(() => {
    const response = fetch(
      "https://api.github.com/repos/horizon-ui/chatgpt-ai-template"
    )
      .then((response) => response.json())
      .then((data) => setStars(formatNumber(data.stargazers_count, 1)));
  }, []);
  return (
    <Flex
      id="pricing"
      w="100%"
      bg="linear-gradient(180deg, #F8FAFC 0%, rgba(255, 255, 255, 0.00) 47.33%)"
      px="20px"
      direction={{ base: "column" }}
      pt={{ base: "100px", md: "100px", xl: "140px" }}
      pb={{ base: "100px", md: "100px", xl: "140px" }}
      overflow="hidden"
      position="relative"
      {...rest}
    >
      <InnerContent
        zIndex="1"
        maxW={{ base: "100%", md: "100%", xl: "1170px" }}
      >
        {/* Title */}
        <Flex w="100%" mb="30px" direction={{ base: "column" }}>
          <Flex
            direction="column"
            textAlign="start"
            px={{ base: "20px", md: "40px", xl: "0px" }}
            mb={{ base: "20px", lg: "20px" }}
            justify="center"
            align="center"
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
              PRICING PLANS
            </Text>
            <Text
              as="h2"
              textAlign={{ base: "center", lg: "center" }}
              color={textColor}
              fontWeight="800"
              fontSize={{ base: "36px", md: "48px", lg: "48px", xl: "58px" }}
              lineHeight={{ base: "38px", md: "60px", lg: "60px", xl: "70px" }}
              w={{ base: "100%", md: "100%", lg: "70%", xl: "60%" }}
            >
              Choose the{" "}
              <Text as="span" position={"relative"}>
                right plan
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-36px",
                  }}
                  left={{ base: "10%", md: "50%" }}
                  transform={{
                    base: "translate(-94%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "272px" }}
                />
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-36px",
                  }}
                  filter="blur(15px)"
                  left={{ base: "10%", md: "50%" }}
                  transform={{
                    base: "translate(-94%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "272px" }}
                />
              </Text>{" "}
              for you and your business
            </Text>
            <Image
              src={ribbon}
              w={{ base: "80px", md: "130px" }}
              h={{ base: "80px", md: "130px" }}
              right={{
                base: "4px",
                md: "20px",
                lg: "150px",
                xl: "310px",
                "2xl": "450px",
              }}
              top={{
                base: "190px",
                md: "166px",
                lg: "170px",
                xl: "224px",
                "2xl": "224px",
              }}
              position="absolute"
            />
          </Flex>
        </Flex>
        <SimpleGrid
          w="100%"
          columns={{ base: "1", lg: "2" }}
          gap="30px"
          mb="20px"
        >
          <Card
            borderRadius="16px"
            bg={card}
            maxW="575px"
            mx="auto"
            alignItems={{ base: "start", lg: "center" }}
            p={{ base: "16px", md: "40px" }}
            flexDirection="column"
          >
            <Flex mb={{ base: "20px", md: "50px" }}>
              <IconBox
                w="70px"
                h="70px"
                minW="70px"
                minH="70px"
                me="28px"
                icon={
                  <Icon w="32px" h="32px" color="brand.500" as={MdPerson} />
                }
                bg="linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)"
              />
              <Box>
                <Box
                  display="flex"
                  mb="5px"
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={{ base: "start", md: "center" }}
                >
                  <Text
                    fontSize="md"
                    letterSpacing="0px"
                    fontWeight="700"
                    color={textColor}
                  >
                    Personal
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="500"
                    letterSpacing="0px"
                    ml={{ base: "0px", md: "6px" }}
                    color={textColorSecondary}
                  >
                    (for one developer)
                  </Text>
                </Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color={textColorSecondary}
                  letterSpacing="0px"
                >
                  A recommended single license for solo designers & developers
                  building high-end projects & applications.
                </Text>
              </Box>
            </Flex>
            {/* Secondary Card */}
            <Flex
              zIndex="1"
              p={{ base: "40px 18px", md: "40px 34px" }}
              borderRadius="16px"
              bg={secCard}
              direction="column"
              w="100%"
            >
              <Flex mb="30px" direction="row" justify="center">
                <Flex mb={{ base: "12px", md: "0px", lg: "12px", xl: "0px" }}>
                  <Text
                    bg={textGradient}
                    bgClip="text"
                    fontSize={{ base: "48px", md: "54px" }}
                    lineHeight="100%"
                    letterSpacing="0px"
                    fontWeight="extrabold"
                    me="8px"
                  >
                    $199
                  </Text>
                  <VSeparator
                    display={{
                      base: "flex",
                      md: "none",
                      lg: "flex",
                      xl: "none",
                    }}
                    ms="8px"
                    me="18px"
                  />
                  <Flex direction="column" justify="center">
                    <Text
                      textDecoration="line-through"
                      color={textColor}
                      fontWeight="500"
                      letterSpacing="0px"
                    >
                      reg. $398
                    </Text>
                    <Text
                      color="green.500"
                      fontWeight="600"
                      fontSize="sm"
                      letterSpacing="0px"
                    >
                      -50% discount
                    </Text>
                  </Flex>
                </Flex>
                <VSeparator
                  display={{
                    base: "none",
                    md: "flex",
                    lg: "none",
                    xl: "flex",
                  }}
                  ms="18px"
                  me="18px"
                  mx="20px"
                />
                <Flex
                  display={{
                    base: "none",
                    md: "flex",
                    lg: "none",
                    xl: "flex",
                  }}
                  direction="column"
                  justify="center"
                >
                  <Text
                    color={textColor}
                    letterSpacing="0px"
                    fontWeight="700"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    one-time payment
                  </Text>
                  <Text
                    color={textColorVAT}
                    letterSpacing="0px"
                    fontWeight="500"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    VAT taxes included
                  </Text>
                </Flex>
              </Flex>
              <Button
                id="purchaseButton"
                w="100%"
                onClick={() =>
                  openCheckout(
                    version === "ai-chakra-ts"
                      ? { product: 831626 }
                      : version === "ai-chakra-js"
                      ? { product: 849162 }
                      : { product: null }
                  )
                }
                ms="auto"
                mt="auto"
                mb="18px"
                py="26px"
                fontSize="14px"
                bg="#120F43"
                color="white"
                _hover={{ bg: "#161159" }}
                _active={{ bg: "#0B083D" }}
                borderRadius="45px"
                lineHeight="14px"
                display="flex"
                letterSpacing="0px"
                alignItems="center"
              >
                Get started now with Personal
                <Icon as={MdChevronRight} mt="2px" />
              </Button>
              <Text
                textAlign="center"
                letterSpacing="0px"
                fontWeight="500"
                fontSize="sm"
              >
                Lifetime access. One-time payment. Free updates.
              </Text>
            </Flex>
            <Box
              h="2px"
              w="100%"
              bg="linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(0, 224, 255, 0) 0.01%, #00E0FF 20.66%, #4318FF 52.95%, #FF18F6 83.16%, rgba(255, 24, 246, 0) 100%)"
              filter="blur(4px)"
              mb="50px"
            />
            {/* Features */}
            <Flex mb="50px">
              <Icon me="20px" w="32px" h="32px" color={brandColor} as={Cubes} />
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  letterSpacing="0px"
                  color={textColorSecondary}
                >
                  <Text
                    as="span"
                    fontSize="md"
                    fontWeight="700"
                    color={textColor}
                    letterSpacing="0px"
                  >
                    900+ Components / elements
                  </Text>
                  — dark/light individual elements, like buttons, inputs,
                  navbars, cards, alerts, and so on... giving you the freedom of
                  choosing and combining.
                </Text>
              </Box>
            </Flex>
            <Flex mb="50px">
              <Icon
                me="20px"
                h="32px"
                w="32px"
                color={brandColor}
                as={Contact}
              />
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  letterSpacing="0px"
                  color={textColorSecondary}
                >
                  <Text
                    as="span"
                    fontSize="md"
                    letterSpacing="0px"
                    fontWeight="700"
                    color={textColor}
                  >
                    12 Months premium support{" "}
                  </Text>{" "}
                  — premium support with high priority for any problems with our
                  products, via Discord or contact mail.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Icon me="20px" w="32px" h="32px" color={brandColor} as={Copy} />
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  letterSpacing="0px"
                  color={textColorSecondary}
                >
                  <Text
                    as="span"
                    fontSize="md"
                    fontWeight="700"
                    color={textColor}
                    letterSpacing="0px"
                  >
                    One project{" "}
                  </Text>{" "}
                  — The personal license gives you permission to create one
                  project with it. For unlimited projects, we recommend you to
                  choose the Teams license.
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card
            borderRadius="16px"
            bg={cardTeam}
            maxW="585px"
            mx="auto"
            alignItems={{ base: "start", lg: "center" }}
            p={{ base: "16px", md: "40px" }}
            flexDirection="column"
          >
            <Flex mb={{ base: "20px", md: "50px" }}>
              <IconBox
                w="70px"
                h="70px"
                minW="70px"
                minH="70px"
                me="28px"
                icon={<Icon w="32px" h="32px" color="white" as={MdGroup} />}
                bg="linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.06) 50.63%, rgba(255, 255, 255, 0.03) 100%)"
                boxShadow="inset 0px 4px 4px rgba(255, 255, 255, 0.2)"
              />
              <Box>
                <Box
                  display="flex"
                  mb="5px"
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={{ base: "start", md: "center" }}
                >
                  <Text
                    fontSize="md"
                    letterSpacing="0px"
                    fontWeight="700"
                    color="white"
                  >
                    Teams
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="500"
                    letterSpacing="0px"
                    ml={{ base: "0px", md: "6px" }}
                    color="white"
                  >
                    (up to 10 developers)
                  </Text>
                </Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="gray.200"
                  letterSpacing="0px"
                >
                  Perfect license for designers and developers teams working on
                  company-level projects & applications.
                </Text>
              </Box>
            </Flex>
            {/* Secondary Card */}
            <Flex
              zIndex="1"
              p={{ base: "40px 18px", md: "40px 34px" }}
              borderRadius="16px"
              bg={secCardTeam}
              direction="column"
              shadow="0px 8px 25px -4px #FFFFFF4D inset"
              w="100%"
            >
              <Flex
                mb="30px"
                direction={{
                  base: "column",
                  md: "row",
                  lg: "column",
                  xl: "row",
                }}
              >
                <Flex
                  justifyContent="center"
                  mb={{ base: "12px", md: "0px", lg: "12px", xl: "0px" }}
                >
                  <Text
                    bg="white"
                    bgClip="text"
                    fontSize={{ base: "48px", md: "54px" }}
                    lineHeight="100%"
                    fontWeight="extrabold"
                    letterSpacing="0px"
                    me="8px"
                  >
                    $499
                  </Text>

                  <VSeparator
                    display={{
                      base: "flex",
                      md: "none",
                      lg: "flex",
                      xl: "none",
                    }}
                    ms="8px"
                    me="12px"
                  />
                  <Flex direction="column" justify="center">
                    <Text
                      textDecoration="line-through"
                      color="white"
                      letterSpacing="0px"
                      fontWeight="500"
                    >
                      {/* reg. {version !== "nextjs" ? "$790" : "$790"} */}
                      reg. $1025
                    </Text>
                    <Text
                      color="green.500"
                      fontWeight="600"
                      fontSize="sm"
                      letterSpacing="0px"
                    >
                      {/* {version !== "nextjs" ? "-72% discount" : "-72% discount"} */}
                      -52% discount!
                    </Text>
                  </Flex>
                </Flex>
                <VSeparator
                  display={{ base: "none", md: "flex", lg: "none", xl: "flex" }}
                  mx="20px"
                />
                <Flex
                  display={{ base: "none", md: "flex", lg: "none", xl: "flex" }}
                  direction="column"
                  justify="center"
                >
                  <Text
                    color="white"
                    letterSpacing="0px"
                    fontSize="sm"
                    fontWeight="700"
                    textAlign={{
                      base: "center",
                      md: "left",
                      lg: "center",
                      xl: "left",
                    }}
                  >
                    one-time payment
                  </Text>
                  <Text
                    color={textColorTertiary}
                    fontSize="sm"
                    fontWeight="500"
                    textAlign={{
                      base: "center",
                      md: "left",
                      lg: "center",
                      xl: "left",
                    }}
                    letterSpacing="0px"
                  >
                    VAT taxes included
                  </Text>
                </Flex>
              </Flex>
              <Button
                id="purchaseButton"
                w="100%"
                onClick={() =>
                  openCheckout(
                    version === "ai-chakra-ts"
                      ? { product: 831628 }
                      : version === "ai-chakra-js"
                      ? { product: 848549 }
                      : { product: null }
                  )
                }
                ms="auto"
                mt="auto"
                py="26px"
                mb="18px"
                fontSize="14px"
                bg="rgba(255, 255, 255, 0.14)"
                color="white"
                _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
                _active={{ bg: "rgba(255, 255, 255, 0.2)" }}
                borderRadius="45px"
                variant="teams"
                lineHeight="14px"
                display="flex"
                alignItems="center"
              >
                Get started now for your team
                <Icon as={MdChevronRight} mt="2px" />
              </Button>
              <Text
                textAlign="center"
                letterSpacing="0px"
                fontWeight="500"
                fontSize="sm"
                color={textColorTertiary}
              >
                Lifetime access. One-time payment. Free updates.
              </Text>
            </Flex>
            <Box
              h="2px"
              w="100%"
              // bg='linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(0, 224, 255, 0) 0.01%, #00E0FF 20.66%, #4318FF 52.95%, #FF18F6 83.16%, rgba(255, 24, 246, 0) 100%)'
              // filter='blur(4px)'
              mb="50px"
            />
            {/* Features */}
            <Flex mb="50px">
              <Icon me="20px" w="32px" h="32px" color="white" as={MdGroup} />
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  letterSpacing="0px"
                  color="gray.300"
                >
                  <Text
                    as="span"
                    fontSize="md"
                    fontWeight="700"
                    letterSpacing="0px"
                    color="white"
                  >
                    Get access for your entire team{" "}
                  </Text>{" "}
                  — team licenses include access for up to 10 people to
                  accommodate even the largest teams at your company.
                </Text>
              </Box>
            </Flex>
            <Flex mb="50px">
              <Icon me="20px" w="32px" h="32px" color="white" as={Contact} />
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="gray.300"
                  letterSpacing="0px"
                >
                  <Text
                    as="span"
                    fontSize="md"
                    letterSpacing="0px"
                    fontWeight="700"
                    color="white"
                  >
                    24 Months premium support{" "}
                  </Text>{" "}
                  — premium support with high priority for any problems with our
                  products, via Discord or contact mail.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Icon
                me="20px"
                h="36px"
                w="40px"
                color="white"
                as={InfinityIcon}
              />
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="gray.300"
                  letterSpacing="0px"
                >
                  <Text
                    as="span"
                    fontSize="md"
                    letterSpacing="0px"
                    fontWeight="700"
                    color="white"
                  >
                    Unlimited projects
                  </Text>{" "}
                  — create as much projects you want with your team/company
                  based on our products.
                </Text>
              </Box>
            </Flex>
          </Card>
        </SimpleGrid>
        <Card
          borderRadius="16px"
          bg={card}
          alignItems={{ base: "start", lg: "center" }}
          flexDirection={{ base: "column", lg: "column" }}
          p={{ base: "16px", md: "32px" }}
          maxW={{ base: "100%", md: "565px", lg: "100%" }}
        >
          <Flex
            alignItems={{ base: "start", lg: "center" }}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box
              minW={{ base: "100%", md: "100%", lg: "264px", "3xl": "264px" }}
              me={{ base: "20px", xl: "120px" }}
            >
              <Box
                display="flex"
                mb="5px"
                flexDirection={{ base: "column", md: "row" }}
                alignItems={{ base: "start", md: "center" }}
              >
                <Text
                  color={textColor}
                  fontSize="md"
                  letterSpacing="0px"
                  fontWeight="700"
                >
                  Enterprise
                </Text>
                <Text
                  fontSize="sm"
                  ml={{ base: "0px", md: "6px" }}
                  letterSpacing="0px"
                  color={textColorSecondary}
                  fontWeight="500"
                >
                  (unlimited developers)
                </Text>
              </Box>
              <Flex>
                <Text
                  me="10px"
                  color={textColor}
                  fontSize="48px"
                  fontWeight="800"
                  letterSpacing="0px"
                >
                  $699
                </Text>
                <Flex justify="center" direction="column">
                  <Text
                    fontSize="md"
                    fontWeight="500"
                    textDecoration="line-through"
                    color={textColor}
                    letterSpacing="0px"
                  >
                    reg. $1324
                  </Text>
                  <Text
                    w="max-content"
                    fontWeight="600"
                    fontSize="sm"
                    letterSpacing="0px"
                    color="green.500"
                  >
                    -48% discount
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              me={{ base: "20px", xl: "98px" }}
              minW={{ base: "100%", md: "100%", lg: "455px", "3xl": "455px" }}
            >
              <Text
                color={textColor}
                fontSize="md"
                fontWeight="700"
                letterSpacing="0px"
                mb={{ base: "20px", lg: "10px" }}
              >
                Every feature from Teams Plan but for Unlimited Users.
              </Text>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={textColorSecondary}
                letterSpacing="0px"
                mb={{ base: "20px", lg: "0px" }}
              >
                Relevant for large-scale uses and extended redistribution
                rights. A license for large companies working on
                enterprise-level projects.
              </Text>
            </Box>
            <Button
              id="purchaseButton"
              w={{ base: "100%", md: "100%", xl: "100%" }}
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
              onClick={() =>
                openCheckout(
                  version === "ai-chakra-ts"
                    ? { product: 831629 }
                    : version === "ai-chakra-js"
                    ? { product: 849163 }
                    : { product: null }
                )
              }
            >
              Buy it now
              <Icon as={MdChevronRight} textColor={textColor} />
            </Button>
          </Flex>
        </Card>
      </InnerContent>
    </Flex>
  );
}
