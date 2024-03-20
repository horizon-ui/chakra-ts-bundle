// Chakra imports
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import InnerContent from "layouts/innerContent";

export default function Pricing() {
  // Chakra Color Mode
  const textColor = useColorModeValue("#120F43", "white");
  return (
    <Flex
      id="faqs"
      bgSize="cover"
      w="100%"
      direction={{ base: "column" }}
      py={{ base: "90", md: "100px", xl: "140px" }}
      bg="linear-gradient(180deg, #F8FAFC 0%, rgba(255, 255, 255, 0) 47.33%)"
      overflow="hidden"
      position="relative"
    >
      <InnerContent w="100%">
        <Flex
          direction="column"
          mx="auto"
          mb="40px"
          maxW={{ base: "70%" }}
          justify="center"
          textAlign="center"
        >
          <Text
            as="h3"
            textAlign={{ base: "center", lg: "center" }}
            fontWeight="700"
            letterSpacing="2px"
            color="brand.500"
            fontSize={{ base: "xs", md: "md" }}
            w="100%"
            mb="10px"
          >
            FREQUENTLY ASKED QUESTIONS
          </Text>
          <Text
            as="h2"
            mx="auto"
            color={textColor}
            fontWeight="800"
            fontSize={{ base: "30px", md: "38px", lg: "38px", xl: "38px" }}
            lineHeight={{ base: "38px", md: "50px", lg: "50px", xl: "50px" }}
            mb={{ base: "10px", md: "20px" }}
          >
            Frequently asked questions
          </Text>
          <Text
            mx="auto"
            color="gray.600"
            fontSize={{ base: "md", md: "md", xl: "lg" }}
            fontWeight="500"
            letterSpacing="0px"
            lineHeight={{ base: "24px", md: "30px" }}
            mb="30px"
            maxW={{ base: "100%", md: "100%", lg: "74%" }}
          >
            Looking for something else? Chat with us via{" "}
            <Link
              isExternal
              href="mailto:hello@simmmple.com"
              textDecoration={"underline"}
              _hover={{ textDecoration: "underline" }}
            >
              hello@simmmple.com
            </Link>{" "}
            or solve your situation faster by joining our{" "}
            <Link
              isExternal
              href="https://discord.gg/f6tEKFBd4m"
              textDecoration={"underline"}
              _hover={{ textDecoration: "underline" }}
            >
              Discord community
            </Link>
            .
          </Text>
        </Flex>
        <Accordion w="80%" allowMultiple>
          <AccordionItem borderTop="0px solid">
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  Why do I need a premium AI website template?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  An AI template kit like this one can help you more than you
                  imagine, it helps you save coding hours, and it can boost your
                  workflow 10-20X faster than ever before (it sounds crazy, we
                  know). We used to ask ourselves this question all the time. We
                  didn’t realize the power of an AI template until we built
                  Horizon.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Horizon AI Template was built to have all those essential
                  things. We’ve thought of everything you need for your AI &
                  SaaS project, we adapted it to a trendy UI design, made a
                  bunch of useful example pages, and wrapped all of this into
                  one premium well-organized package.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  What are the differences between the licenses from the pricing
                  section?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  The Personal license is aimed at people who work on their own.
                  It grants you the right to use the purchased product only for
                  one project (either yours or for a client).
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  The Team / Company license is aimed at agencies or larger
                  teams. It grants you the right to create multiple products
                  based on the version that you purchased from us. The team
                  licenses include access for up to 10 people to accommodate
                  even the largest teams at your company.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  The Enterprise license is aimed at large companies with
                  multiple projects (unlimited users). It grants you the right
                  to create any kind of software, SaaS, or digital products and
                  sell them. Relevant for large-scale uses and extended
                  redistribution rights. A license for large companies working
                  on big projects.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  How do I access updates after purchasing?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  After you made the purchase, you will receive a special link
                  to download your files. This process is the same when a new
                  update is available. You just need to download the new .zip
                  file and move the new files to your amazing project.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  We usually send an announcement on our{" "}
                  <Link
                    isExternal
                    href="https://discord.gg/f6tEKFBd4m"
                    textDecoration={"underline"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Discord community
                  </Link>{" "}
                  when a new update is available.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  How many developers can access the product?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  This aspect depends on the license you bought.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  The Personal license gives you access to only one project &
                  one developer per license.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  The Team / Company license gives you access to up to 10
                  developers & unlimited projects per license.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  The Enterprise license gives you access to unlimited
                  developers & unlimited projects per license.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  How can I upgrade to a other license?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Send us an email at{" "}
                  <Link
                    isExternal
                    href="mailto:hello@simmmple.com"
                    textDecoration={"underline"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    hello@simmmple.com
                  </Link>
                  , and we'll discount the amount you've paid for the previous
                  license!
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  Can I use Horizon AI Template in an open source project?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Yes, of course! You can use Horizon AI Template for an open
                  source project if you add in the Readme file (on Github) or in
                  the description of your product that you built the project
                  using Horizon AI Template and a link to the product page.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Please let us know after you launched the project and, if it
                  is helping our community, we will support you with feedback
                  and promote it in our gallery, social media, and newsletters.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  How does premium support work?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Depending on your license type, you have a fixed period when
                  you can submit any problem to us regarding product
                  functionalities and bug fixes. You will get responses directly
                  from our team within a maximum of 24 hours (during business
                  days):
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  For example, if you purchase the Personal license, you will
                  receive Premium & High-priority Support for 12 months. If you
                  need 24 months of Support, you will need to upgrade to the
                  Team or Enterprise license.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  At the end of this period, you will need to renew your license
                  (purchase the product again) to continue to have access to our
                  Premium Support.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  Is there a Figma version of Horizon AI Template?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Yes, there is a Figma file with all the designed pages from
                  Horizon AI Template. For the moment, the Figma file comes
                  without a components library, which means that all pages are
                  designed separately.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  We are working on a full design system based on Horizon UI's
                  guidelines and components, so stay tuned!.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  What does "lifetime access" mean?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Once you have purchased Horizon AI Template, you will receive
                  access to all future updates & announcements for free. We'll
                  let you know via our{" "}
                  <Link
                    isExternal
                    href="https://discord.gg/f6tEKFBd4m"
                    textDecoration={"underline"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Discord community
                  </Link>{" "}
                  when new updates and improvements are available.
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton
                py="25px"
                _hover={{ bg: "none" }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={"700"}
                color={textColor}
                _active={{ boxShadow: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex as="h2" flex="1" textAlign="left">
                  Are there some tutorials?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <SimpleGrid gap="40px" columns="1">
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  Not yet, we're working on some more descriptive videos and
                  article tutorials, but until that, we've tried our best to
                  make our documentations as helpful as possible to be easy for
                  you to understand how Horizon works.
                </Text>
                <Text
                  color="gray.600"
                  fontWeight={"500"}
                  fontSize="md"
                  letterSpacing="0px"
                >
                  If you have any questions or concerns about how Horizon works
                  and how you can use it, feel free to write to us at{" "}
                  <Link
                    isExternal
                    href="mailto:hello@simmmple.com"
                    textDecoration={"underline"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    hello@simmmple.com
                  </Link>{" "}
                  or on our{" "}
                  <Link
                    isExternal
                    href="https://discord.gg/f6tEKFBd4m"
                    textDecoration={"underline"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Discord community
                  </Link>{" "}
                  . We will be more than happy to help you!
                </Text>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </InnerContent>
    </Flex>
  );
}
