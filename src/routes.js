import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

// Admin Imports
import Pro from "views/pro";

const routes = [
  // --- Dashboards ---
  {
    name: "Horizon AI Template",
    path: "/",
    component: Pro,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
