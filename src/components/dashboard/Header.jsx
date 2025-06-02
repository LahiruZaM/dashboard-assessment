"use client";

import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";
import { useColorModeValue } from "../ui/color-mode";

export default function Header() {
  const bg = useColorModeValue("#f8fafc", "#0f172a");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");

  return (
    <Box
      w="full"
      position="sticky"
      top="0"
      zIndex="9"
      px="6"
      py="4"
      bg={bg}
      color={textColor}
      borderBottom="1px solid"
      borderColor={useColorModeValue("#e2e8f0", "#1e293b")}
    >
      <Flex align="center">
        <Text fontSize="lg" fontWeight="semibold">
          Welcome back! Here’s what’s happening today.
        </Text>
        <Spacer />
        <ColorModeButton />
      </Flex>
    </Box>
  );
}
