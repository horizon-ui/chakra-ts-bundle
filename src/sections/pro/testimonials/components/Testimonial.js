// Chakra imports
import {
  Text,
  useColorModeValue,
  Avatar,
  Link,
  Flex,
  Box,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React from "react";

export default function BigCard(props) {
  const { title, desc, image, name, job, company, avatar, link, ...rest } =
    props;
  // Chakra Color Mode
  const bgBox = useColorModeValue("white", "rgba(255, 255, 255, 0.05)");
  const textColor = useColorModeValue("#120F43", "white");
  const textColorSecondary = useColorModeValue("gray.600", "gray.300");
  const brandColor = useColorModeValue("brand.500", "white");
  return (
    <Card
      bg={bgBox}
      p={{ base: "20px", md: "28px" }}
      borderRadius="16px"
      w="100%"
      direction={{ base: "column" }}
      overflow="hidden"
      bgSize="cover"
      position="relative"
      {...rest}
    >
      <Text color={textColor} fontSize="22px" fontWeight="700" mb="14px">
        {title}
      </Text>
      <Text
        color="gray.600"
        fontSize={{ base: "md", md: "md", xl: "md" }}
        fontWeight="500"
        letterSpacing="0px"
        lineHeight={{ base: "24px", md: "28px" }}
        mb="30px"
      >
        {desc}
      </Text>
      <Flex alignItems="center">
        <Avatar h="48px" w="48px" me="16px" src={avatar} />
        <Box>
          <Text
            color={textColor}
            letterSpacing="0px"
            fontSize="md"
            fontWeight="700"
          >
            {name}
          </Text>
          <Flex align="center">
            <Text
              color={textColorSecondary}
              fontSize="sm"
              fontWeight="500"
              letterSpacing="0px"
              me="5px"
            >
              {job}
            </Text>
            <Link
              isExternal="true"
              href={link}
              color={brandColor}
              fontWeight="700"
              letterSpacing="0px"
              fontSize="sm"
            >
              {company}
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
