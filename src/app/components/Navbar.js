import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
  Heading,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading size="md">
            <Link onClick={handleClick} style={{ textDecoration: "none" }}>
              Juan Martin Fassio
            </Link>
          </Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box>
                <Link onClick={handleClick} style={{ textDecoration: "none" }}>
                  Projects
                </Link>
              </Box>
              <Box>
                <Link onClick={handleClick} style={{ textDecoration: "none" }}>
                  Resume
                </Link>
              </Box>
              <Box>
                <Link onClick={handleClick} style={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </Box>
            </Stack>
            <Button onClick={toggleColorMode} ml={3}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
