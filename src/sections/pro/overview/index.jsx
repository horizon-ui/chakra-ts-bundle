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
  // Box,
  // Button,
  // Link,
  Icon,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

import { TextLine } from "components/icons/Icons";
import image from "assets/img/pro/overview/image.png";
import image1 from "assets/img/pro/overview/image-1.png";
import image2 from "assets/img/pro/overview/image-2.png";
import image3 from "assets/img/pro/overview/image-3.png";
import image4 from "assets/img/pro/overview/image-4.png";
import image5 from "assets/img/pro/overview/image-5.png";
import image6 from "assets/img/pro/overview/image-6.png";
import image7 from "assets/img/pro/overview/image-7.png";
import image8 from "assets/img/pro/overview/image-8.png";
import image9 from "assets/img/pro/overview/image-9.png";
import image10 from "assets/img/pro/overview/image-10.png";
import image11 from "assets/img/pro/overview/image-11.png";
import image12 from "assets/img/pro/overview/image-12.png";
import image13 from "assets/img/pro/overview/image-13.png";
import image14 from "assets/img/pro/overview/image-14.png";
import image15 from "assets/img/pro/overview/image-15.png";
import image16 from "assets/img/pro/overview/image-16.png";
import image17 from "assets/img/pro/overview/image-17.png";
import image18 from "assets/img/pro/overview/image-18.png";
import image19 from "assets/img/pro/overview/image-19.png";
import image20 from "assets/img/pro/overview/image-20.png";
import image21 from "assets/img/pro/overview/image-21.png";
import image22 from "assets/img/pro/overview/image-22.png";
import image23 from "assets/img/pro/overview/image-23.png";
import image24 from "assets/img/pro/overview/image-24.png";
import image25 from "assets/img/pro/overview/image-25.png";
import image26 from "assets/img/pro/overview/image-26.png";
import image27 from "assets/img/pro/overview/image-27.png";
import image28 from "assets/img/pro/overview/image-28.png";
import image29 from "assets/img/pro/overview/image-29.png";
import image30 from "assets/img/pro/overview/image-30.png";
import image31 from "assets/img/pro/overview/image-31.png";
// import { MdChevronRight } from "react-icons/md";

// Custom components
import InnerContent from "layouts/innerContent";
import PageCard from "./components/PageCard";

export default function Overview() {
  // Chakra Color Mode
  const brandColorPrice = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("#120F43", "white");
  // const gradient = useColorModeValue(
  //   "linear-gradient(360deg, #ffffff 30%, rgba(247, 250, 252, 0) 100%)",
  //   "linear-gradient(360deg, #0B1437 5%, rgba(28, 31, 57, 0) 100%)"
  // );
  // const baseGradient = useColorModeValue(
  //   "linear-gradient(360deg, #ffffff 75%, rgba(247, 250, 252, 0) 100%)",
  //   "linear-gradient(360deg, #0B1437 5%, rgba(28, 31, 57, 0) 100%)"
  // );
  return (
    <Flex
      w="100%"
      direction={{ base: "column" }}
      overflow="hidden"
      bgSize="cover"
      position="relative"
      bg="linear-gradient(180deg, #F5F7FA 0%, rgba(255, 255, 255, 0) 14.26%)"
      zIndex="2"
      pt={{ base: "90px", md: "90px", xl: "90px" }}
      pb={{ base: "70px", md: "90px" }}
    >
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex direction="column" width="stretch">
          <Flex
            direction="column"
            mx="auto"
            mb={{ base: "50px", md: "80px" }}
            alignItems="center"
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
              AI PAGES AND COMPONENTS OVERVIEW
            </Text>
            <Text
              as="h2"
              textAlign={{ base: "center" }}
              color={textColor}
              fontWeight="800"
              fontSize={{ base: "30px", md: "48px", lg: "48px", xl: "58px" }}
              lineHeight={{ base: "38px", md: "60px", lg: "60px", xl: "70px" }}
              mb={{ base: "20px", md: "30px" }}
              w={{ base: "90%", md: "90%", lg: "60%", xl: "80%" }}
              mx="auto"
            >
              Boost your{" "}
              <Text as="span" position={"relative"}>
                productivity
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-32px",
                  }}
                  left={{ base: "94%", md: "50%" }}
                  transform={{
                    base: "translate(-94%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "300px", xl: "350px" }}
                />
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-32px",
                  }}
                  filter="blur(15px)"
                  left={{ base: "94%", md: "50%" }}
                  transform={{
                    base: "translate(-94%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "300px", xl: "350px" }}
                />
              </Text>{" "}
              with ready to use Dark / Light pages
            </Text>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "md", xl: "lg" }}
              fontWeight="500"
              letterSpacing="0px"
              lineHeight={{ base: "24px", md: "30px" }}
              w={{ base: "100%", md: "70%", lg: "80%", xl: "72%" }}
            >
              We know you're tired of wasting thousands of hours of coding.
              We've prepared ready-to-use pages for your AI projects like AI
              Chat Bots, AI Research, or AI Content Writing Apps.
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ base: "1", md: "2", lg: "4" }}
          gap="20px"
          w={{ base: "100%", md: "100%" }}
          mb="20px"
          justifyContent="center"
        >
          <PageCard
            altImage="react chatbot ai templates page example"
            title="Templates (User)"
            image={image}
            link="https://horizon-ui.com/horizon-ai-template/all-templates"
          />
          <PageCard
            altImage="react chatbot ai prompt page example"
            title="Prompt Page (User)"
            image={image1}
            link="https://horizon-ui.com/horizon-ai-template/others/prompt"
          />
          <PageCard
            altImage="react chatbot ai history page example"
            title="History Page (User)"
            image={image2}
            link="https://horizon-ui.com/horizon-ai-template/history"
          />
          <PageCard
            altImage="react chatbot ai usage page example"
            title="Usage Page (User)"
            image={image3}
            link="https://horizon-ui.com/horizon-ai-template/usage"
          />
          <PageCard
            altImage="react chatbot ai profile settings page example"
            title="Profile Settings (User)"
            image={image4}
            link="https://horizon-ui.com/horizon-ai-template/settings"
          />
          <PageCard
            altImage="react chatbot ai my projects page example"
            title="My Projects (User)"
            image={image5}
            link="https://horizon-ui.com/horizon-ai-template/my-projects"
          />
          <PageCard
            altImage="react chatbot ai chat ui page example"
            title="Chat UI Page (User)"
            image={image6}
            link="https://horizon-ui.com/horizon-ai-template/chat"
          />
          <PageCard
            altImage="react chatbot ai chat ui result page example"
            title="Chat UI + Result (User)"
            image={image7}
            link="https://horizon-ui.com/horizon-ai-template/chat"
          />
          <PageCard
            altImage="react chatbot ai my plan page example"
            title="My Plan Page (User)"
            image={image8}
            link="https://horizon-ui.com/horizon-ai-template/my-plan"
          />
          <PageCard
            altImage="react chatbot ai all prompt templates page example"
            title="All Templates (Admin)"
            image={image9}
            link="https://horizon-ui.com/horizon-ai-template/admin/all-admin-templates"
          />
          <PageCard
            altImage="react chatbot ai new template page example"
            title="New Template (Admin)"
            image={image10}
            link="https://horizon-ui.com/horizon-ai-template/admin/new-template"
          />
          <PageCard
            altImage="react chatbot ai edit template page example"
            title="Edit Template (Admin)"
            image={image11}
            link="https://horizon-ui.com/horizon-ai-template/admin/edit-template"
          />
          <PageCard
            altImage="react chatbot ai users overview page example"
            title="Users Overview (Admin)"
            image={image12}
            link="https://horizon-ui.com/horizon-ai-template/admin/overview"
          />
          <PageCard
            altImage="react chatbot ai sign in page example"
            title="Sign In Page"
            image={image13}
            link="https://horizon-ui.com/horizon-ai-template/others/sign-in"
          />
          <PageCard
            altImage="react chatbot ai register page example"
            title="Register Page"
            image={image14}
            link="https://horizon-ui.com/horizon-ai-template/others/register"
          />
          <PageCard
            altImage="react chatbot ai essay generator page example"
            title="Essay Generator"
            image={image1}
            link="https://horizon-ui.com/horizon-ai-template/essay"
          />
          <PageCard
            altImage="react chatbot ai content simplifier page example"
            title="Content Simplifier"
            image={image15}
            link="https://horizon-ui.com/horizon-ai-template/simplifier"
          />
          <PageCard
            altImage="react chatbot ai product description generator page example"
            title="Product Description"
            image={image16}
            link="https://horizon-ui.com/horizon-ai-template/product-description"
          />
          <PageCard
            altImage="react chatbot ai email enhancer page example"
            title="Email Enhancer"
            image={image17}
            link="https://horizon-ui.com/horizon-ai-template/email-enhancer"
          />
          <PageCard
            altImage="react chatbot ai linkeding messages page example"
            title="LinkedIn Message"
            image={image18}
            link="https://horizon-ui.com/horizon-ai-template/linkedin-message"
          />
          <PageCard
            altImage="react chatbot ai instagram caption page example"
            title="Instagram Caption"
            image={image19}
            link="https://horizon-ui.com/horizon-ai-template/caption"
          />
          <PageCard
            altImage="react chatbot ai faqs content page example"
            title="FAQs Content"
            image={image20}
            link="https://horizon-ui.com/horizon-ai-template/faq"
          />
          <PageCard
            altImage="react chatbot ai product name generator page example"
            title="Product Name"
            image={image21}
            link="https://horizon-ui.com/horizon-ai-template/name-generator"
          />
          <PageCard
            altImage="react chatbot ai seo keywords page example"
            title="SEO Keywords"
            image={image22}
            link="https://horizon-ui.com/horizon-ai-template/seo-keywords"
          />
          <PageCard
            altImage="react chatbot ai review responder page example"
            title="Review Responder"
            image={image23}
            link="https://horizon-ui.com/horizon-ai-template/review-responder"
          />
          <PageCard
            altImage="react chatbot ai business idea page example"
            title="Business Idea"
            image={image24}
            link="https://horizon-ui.com/horizon-ai-template/business-generator"
          />
          <PageCard
            altImage="react chatbot ai article generator page example"
            title="Article Generator"
            image={image25}
            link="https://horizon-ui.com/horizon-ai-template/article"
          />
          <PageCard
            altImage="react chatbot ai plagiarism checker page example"
            title="Plagiarism Checker"
            image={image26}
            link="https://horizon-ui.com/horizon-ai-template/plagiarism-checker"
          />
          <PageCard
            altImage="react chatbot ai hashtags generator page example"
            title="Hashtags Generator"
            image={image27}
            link="https://horizon-ui.com/horizon-ai-template/hashtags-generator"
          />
          <PageCard
            altImage="react chatbot ai pet name generator page example"
            title="Pet Name Generator"
            image={image28}
            link="https://horizon-ui.com/horizon-ai-template/pet-name-generator"
          />
          <PageCard
            altImage="react chatbot ai content translator page example"
            title="Content Translator"
            image={image29}
            link="https://horizon-ui.com/horizon-ai-template/translator"
          />
          <PageCard
            altImage="react chatbot ai domain name generator page example"
            title="Domain Name Generator"
            image={image30}
            link="https://horizon-ui.com/horizon-ai-template/domain-name-generator"
          />
          <PageCard
            altImage="react chatbot ai bootstrap to tailwind converter page example"
            title="Bootstrap to Tailwind Converter"
            image={image31}
            link="https://horizon-ui.com/horizon-ai-template/bootstrap-to-tailwind-converter"
          />
        </SimpleGrid>
        {/* <Box position="relative" w="100%">
          <Flex
            direction={"column"}
            position="absolute"
            h="95px"
            w="100%"
            zIndex="3"
            justifyContent="center"
            align="center"
            bottom={{ base: "50px", md: "0px" }}
          >
            {" "}
            <Text
              color="#4A5568"
              fontSize="sm"
              letterSpacing="0px"
              fontWeight="500"
              mb="20px"
            >
              Looking to see all pages or to get started?
            </Text>
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
                  See all pages live
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
          </Flex>
          <Flex
            position="absolute"
            transform={{
              base: "translate(-222px, -300px)",
              md: "translate(-1500px, 0px)",
              lg: "translate(-1500px, -330px)",
            }}
            h={{ base: "660px", md: "660px" }}
            w="300vw"
            zIndex="1"
            bg={{ base: baseGradient, md: gradient }}
          />
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "4" }}
            gap="20px"
            w="100%"
          >
            {" "}
            <PageCard
            altImage=""
              display={{ base: "none", md: "block" }}
              title="Kanban Page"
              image={image8}
              link="link"
            />
            <PageCard
            altImage=""
              display={{ base: "none", md: "block" }}
              title="Billing Page"
              image={image9}
              link="link"
            />
            <PageCard
            altImage=""
              display={{ base: "none", md: "block" }}
              title="Application"
              image={image10}
              link="link"
            />
            <PageCard
            altImage=""
              display={{ base: "none", md: "block" }}
              title="Course Page"
              image={image11}
              link="link"
            />
          </SimpleGrid>
        </Box> */}
      </InnerContent>
    </Flex>
  );
}
