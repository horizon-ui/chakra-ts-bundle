import { mode } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        fontSize: "16px",
        borderRadius: "16px",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: () => ({
          borderRadius: "16px",
        }),
        primary: (props) => ({
          bg: mode(
            "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)",
            "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)"
          )(props),
          color: "white",
          _focus: {
            bg: mode(
              "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)",
              "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)"
            )(props),
          },
          _active: {
            bg: mode(
              "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)",
              "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)"
            )(props),
          },
          _hover: {
            boxShadow:
              "0px 21px 27px -10px rgba(12, 185, 154, 0.38) !important",
            bg: mode(
              "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)",
              "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)"
            )(props),
          },
        }),
        secondary: (props) => ({
          bg: mode("white", "white")(props),
          color: "#120F43",
          _focus: {
            bg: mode("white", "white")(props),
          },
          _active: {
            bg: mode("whiteAlpha.700", "white")(props),
          },
          _hover: {
            // boxShadow:
            //   "0px 21px 27px -10px rgba(255, 255, 255, 0.30) !important",
            bg: mode("whiteAlpha.800", "white")(props),
          },
        }),
        tertiary: (props) => ({
          bg: mode("#120F43", "#120F43")(props),
          color: "white",
          _focus: {
            bg: mode("#120F43", "#120F43")(props),
          },
          _active: {
            bg: mode("#120F43", "#120F43")(props),
          },
          _hover: {
            boxShadow: "0px 21px 27px -10px #A6B1BD !important",
            bg: mode("#120F43", "#120F43")(props),
          },
        }),
        white: (props) => ({
          bg: mode("white", "white")(props),
          boxShadow: "0px 25px 44px -16px #A6B1BD !important",
          color: "#120F43",
          _focus: {
            bg: mode("white", "white")(props),
          },
          _active: {
            bg: mode("white", "white")(props),
            boxShadow: "0px 25px 44px -16px #CBD5E0 !important",
          },
          _hover: {
            boxShadow: "0px 25px 44px -16px #878F98 !important",
            bg: mode("white", "white")(props),
          },
        }),
        brand: (props) => ({
          bg: mode(
            "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)",
            "linear-gradient(180deg, #41C5D4 26.3%, #0CB99A 86.4%)"
          )(props),
          color: "white",
          _focus: {
            bg: mode(
              "linear-gradient(180deg, #603CFF 0%, #3609FF 100%)",
              "linear-gradient(180deg, #603CFF 0%, #3609FF 100%)"
            )(props),
          },
          _active: {
            bg: mode(
              "linear-gradient(180deg, #603CFF 0%, #3609FF 100%)",
              "linear-gradient(180deg, #603CFF 0%, #3609FF 100%)"
            )(props),
          },
          _hover: {
            opacity: "0.85",
            bg: mode(
              "linear-gradient(180deg, #603CFF 0%, #3609FF 100%)",
              "linear-gradient(180deg, #603CFF 0%, #3609FF 100%)"
            )(props),
          },
        }),
        transparent: (props) => ({
          bg: mode("transparent", "transparent")(props),
          color: "white",
          _focus: {
            bg: mode("transparent", "transparent")(props),
          },
          _active: {
            bg: mode("transparent", "transparent")(props),
          },
          _hover: {
            bg: mode("#EDF2F7", "#EDF2F7")(props),
          },
        }),
        pricing: (props) => ({
          bg: mode("brand.500", "white")(props),
          color: mode("white", "brand.500")(props),
          _focus: {
            bg: mode("brand.500", "white")(props),
          },
          _active: {
            bg: mode("brand.500", "whiteAlpha.900")(props),
          },
          _hover: {
            bg: mode("brand.600", "whiteAlpha.800")(props),
          },
        }),
        silver: (props) => ({
          bg: mode(
            "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)",
            "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)"
          )(props),
          color: mode("#120F43", "#120F43")(props),
          _focus: {
            bg: mode(
              "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)",
              "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)"
            )(props),
          },
          _active: {
            bg: mode(
              "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)",
              "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)"
            )(props),
          },
          _hover: {
            boxShadow: "0px 18px 34px -16px #CBD1D9 !important",
            bg: mode(
              "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)",
              "linear-gradient(120.28deg, #FAFAFB 8.07%, #D4DBE4 58.44%, #FDFDFD 113.19%)"
            )(props),
          },
        }),
        darkBrand: (props) => ({
          bg: mode("brand.900", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.800", "brand.400")(props),
          },
        }),
        lightBrand: (props) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        light: (props) => ({
          bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        action: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.400")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.400")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.200", "brand.400")(props),
          },
        }),
        setup: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.400")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("secondaryGray.400", "transparent")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.400")(props),
          },
          _active: { bg: mode("transparent", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.100", "brand.400")(props),
          },
        }),
      },
    },
  },
};
