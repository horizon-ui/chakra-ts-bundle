// Chakra imports
import { Box, Flex } from "@chakra-ui/react";
// Custom components
import FAQ from "sections/pro/faq";
import Pricing from "sections/pro/pricing";
import Ecosystem from "sections/pro/ecosystem";
import Associates from "sections/pro/associates";
import Hero from "sections/pro/hero";
// import Showcase from "sections/pro/showcase";
export default function Default() {
  return (
    <Flex direction={{ base: "column" }} overflowX="hidden">
      <Hero />
      <Associates />
      <Box id="products">
        <Ecosystem />
      </Box>
      <Box id="pricing">
        <Pricing />
      </Box>
      <FAQ />
    </Flex>
  );
}
