"use client";

import {
  Box,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export default function AuthMethodCard() {
  const bg = useColorModeValue("#ffffff", "#1e293b");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const borderColor = useColorModeValue("#e2e8f0", "#334155");
  const secondaryTextColor = useColorModeValue("#64748b", "#94a3b8");

  const authMethods = [
    {
      name: "Microsoft",
      value: 100,
      color: "#3182ce",
      percentage: 33.33
    },
    {
      name: "Internal",
      value: 100,
      color: "#38a169",
      percentage: 33.33
    },
    {
      name: "SAML",
      value: 100,
      color: "#805ad5",
      percentage: 33.33
    }
  ];

  return (
    <Box
      bg={bg}
      color={textColor}
      p="4"
      borderRadius="lg"
      shadow="sm"
      border="1px solid"
      borderColor={borderColor}
      h="100%"
      w="100%"
    >
      <Text fontSize="md" fontWeight="semibold" mb="4">
        By Authentication Method
      </Text>

      <VStack spacing="4" align="stretch">
        {authMethods.map((method, index) => (
          <Box key={method.name}>
            <Flex justify="space-between" align="center" mb="2">
              <Text 
                fontSize="sm" 
                fontWeight="medium"
                color={secondaryTextColor}
              >
                {method.name}
              </Text>
              <Text 
                fontSize="sm" 
                fontWeight="semibold"
                color={textColor}
              >
                {method.value}
              </Text>
            </Flex>
            
            <Box
              w="100%"
              h="6px"
              bg={useColorModeValue("#e2e8f0", "#334155")}
              borderRadius="full"
              overflow="hidden"
            >
              <Box
                h="100%"
                w={`${method.percentage}%`}
                bg={method.color}
                borderRadius="full"
                transition="width 0.3s ease-in-out"
              />
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}