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
import { Box, Flex } from "@chakra-ui/react";
// Custom components
import FAQ from "sections/pro/faq";
import Pricing from "sections/pro/pricing";

import Associates from "sections/pro/associates";
import Hero from "sections/pro/hero";
// import Showcase from "sections/pro/showcase";
export default function Default() {
  return (
    <Flex direction={{ base: "column" }} overflowX="hidden">
      <Hero />
      <Associates />
      {/* <Testimonials /> */}
      <Box id="pricing">
        <Pricing />
      </Box>
      <FAQ />
      {/* <Showcase /> */}
    </Flex>
  );
}
