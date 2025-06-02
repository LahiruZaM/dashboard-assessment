"use client";

import { Box, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export default function Card({ label, value, growth, icon }) {
  const bg = useColorModeValue("#ffffff", "#1e293b");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const growthColor = growth.startsWith("+") ? "green.500" : "red.400";

  return (
    <Box
      bg={bg}
      color={textColor}
      p="4"
      borderRadius="lg"
      shadow="sm"
      border="1px solid"
      borderColor={useColorModeValue("#e2e8f0", "#334155")}
      minW="200px"
      flex="1"
    >
      <Flex justify="space-between" align="start" mb="2">
        <Text fontSize="sm" opacity="0.8">
          {label}
        </Text>
        {icon && (
          <Box fontSize="20px" opacity="0.4">
            {icon}
          </Box>
        )}
      </Flex>
      <Text fontSize="2xl" fontWeight="bold">
        {value}
      </Text>
      <Text fontSize="sm" color={growthColor}>
        {growth}
      </Text>
    </Box>
  );
}
