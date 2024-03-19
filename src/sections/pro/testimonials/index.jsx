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
  Flex,
  SimpleGrid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { HSeparator } from "components/separator/Separator";
// Custom components
import InnerContent from "layouts/innerContent";
import React from "react";
import Testimonial from "sections/pro/testimonials/components/Testimonial";
import image1 from "assets/img/pro/testimonials/alex-avatar-pro-1.png";
import image2 from "assets/img/pro/testimonials/lee-avatar-pro-5.png";
import image3 from "assets/img/pro/testimonials/elisa-avatar-pro-3.png";
import image4 from "assets/img/pro/testimonials/paul-avatar-pro-2.png";
import image5 from "assets/img/pro/testimonials/rares-avatar-pro-4.png";
import image6 from "assets/img/pro/testimonials/adi-avatar-pro-6.png";
import { TextLine } from "components/icons/Icons";

export default function Testimonials() {
  // Chakra Color Mode
  const brandColorPrice = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("#120F43", "white");
  // const separator = useColorModeValue("transparent", "whiteAlpha.200");
  return (
    <Flex
      bgSize="cover"
      w="100%"
      direction={{ base: "column" }}
      pt={{ base: "90px", md: "90px", xl: "90px" }}
      pb="60px"
      bg="linear-gradient(180deg, #F5F7FA 0%, rgba(255, 255, 255, 0) 14.26%)"
      overflow="hidden"
      position="relative"
    >
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex direction="column" width="stretch">
          <Flex
            direction="column"
            mx="auto"
            mb="80px"
            maxW={{ base: "100%", md: "100%", lg: "80%", xl: "82%" }}
            textAlign="center"
          >
            <Text
              textAlign={{ base: "center", lg: "center" }}
              fontWeight="700"
              letterSpacing="2px"
              color={brandColorPrice}
              fontSize={{ base: "xs", md: "md" }}
              w="100%"
              mb="10px"
            >
              WHAT PEOPLE SAY
            </Text>
            <Text
              textAlign={{ base: "center" }}
              color={textColor}
              fontWeight="800"
              fontSize={{ base: "30px", md: "48px", lg: "48px", xl: "58px" }}
              lineHeight={{ base: "38px", md: "60px", lg: "60px", xl: "70px" }}
              mb="20px"
              w={{ base: "100%", md: "82%" }}
              mx="auto"
            >
              Trusted by{" "}
              <Text as="span" position={"relative"}>
                30,000
                <Icon
                  position={"absolute"}
                  as={TextLine}
                  bottom={{
                    base: "-20px",
                    md: "-32px",
                    lg: "-30px",
                    xl: "-36px",
                  }}
                  left={{ base: "94%", md: "50%" }}
                  transform={{
                    base: "translate(-94%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "220px", xl: "280px" }}
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
                  left={{ base: "94%", md: "50%" }}
                  transform={{
                    base: "translate(-94%, 0px)",
                    md: "translate(-50%, 0px)",
                  }}
                  w={{ base: "180px", md: "220px", xl: "280px" }}
                />
              </Text>{" "}
              developers worldwide
            </Text>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "md", xl: "lg" }}
              fontWeight="500"
              letterSpacing="0px"
              lineHeight={{ base: "24px", md: "30px" }}
              w={{ base: "100%", md: "84%" }}
              mx="auto"
            >
              Thousands of lovers. Developers, designers, startups and many
              companies from all around the world use and love Horizon. If you
              don't believe our words, you may trust their testimonials!
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ base: "1", lg: "2" }}
          gap="20px"
          position={"relative"}
        >
          <Flex
            left="50%"
            top="50%"
            transform={"translate(-50%, -50%)"}
            bg="linear-gradient(107.34deg, #3D1DFF 11.19%, #6147FF 26.5%, #D451FF 42.89%, #EC458D 62.48%, #FFCA8B 79.58%)"
            opacity="0.6"
            w="485px"
            h="485px"
            position={"absolute"}
            borderRadius="100%"
            filter={"blur(73.12px)"}
          />
          <SimpleGrid columns="1" gap="20px">
            <Testimonial
              avatar={image1}
              link="https://creative-tim.com?ref=horizon-ui"
              title="The most comprehensive all-in-one dashboard!"
              name="Alexandru Paduraru"
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job="Co-Founder at "
              company="Creative Tim"
            />
            <Testimonial
              avatar={image2}
              link="https://bookr.ro/?ref=horizon-ui"
              title='A "must to have" tool for any developer.'
              name="Martin Stoleru"
              desc='"An attractive, clean and very well organized, easy to use and implement in any project. An admin template that can make your workflow easier and help you maintain consistency in your design."'
              job="Senior UI/UX Designer at"
              company="Bookr"
            />
            <Testimonial
              avatar={image3}
              link="https://creative-tim.com?ref=horizon-ui"
              title="Useful template that perfectly combines the UI with the UX faster than ever!"
              name="Elisa Paduraru"
              desc='"A useful admin template that perfectly combines the UI with UX. The diversity of screens (NFT Page, Car Interface, Smart Home, etc.) helps the user reduce many workdays.For sure, you can broaden your web design horizons with Horizon!"'
              job="CDO at "
              company="Creative Tim"
            />
          </SimpleGrid>
          <SimpleGrid columns="1" gap="20px">
            <Testimonial
              avatar={image4}
              link="https://clevercapital.eu/?ref=horizon-ui"
              title="Perfect kit for every single software arhitect."
              name="Paul Gotea"
              desc="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming. Love how the team strives to make its designs pixel perfect. Attention to details, the smooth effects and flexibility makes Horizon one of the best UI kits available in the market. Steve Jobs would be jealous.”"
              job="Managing Partner at "
              company="Clever Capital"
            />
            <Testimonial
              avatar={image5}
              link="https://loopple.com?ref=horizon-ui"
              title="Perfect choice to speed up your work!"
              name="Rares Toma"
              desc="“If you are looking for a way to simplify and speed up your work using a great dashboard design, Horizon UI is the right product for you. Its combination of elements and design will fit any use case that you need.”"
              job="Managing Partner at "
              company="Loopple"
            />
            <Testimonial
              avatar={image6}
              link="https://appseed.us?ref=horizon-ui"
              title="Really impressed by the level of quality."
              name="Adrian Chirilov"
              desc="“AppSeed uses the products crafted by Simmmple for more than 1 year. 
              Horizon UI comes with a distinct UI and rich set of components powered by Chakra UI and React. Really impressed by the level of quality.”"
              job="Chief Executive Officer at "
              company="AppSeed"
            />
          </SimpleGrid>
        </SimpleGrid>
        {/* <HSeparator
          mt={{ base: "100px", md: "140px" }}
          h='2px'
          bg={separator}
        /> */}
      </InnerContent>
    </Flex>
  );
}
