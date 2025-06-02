"use client";

import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

const logs = [
  {
    user: "Lahiru Sampath",
    type: "permission",
    message: "Permissions changed to admin by admin123",
    time: "2 hrs ago",
  },
  {
    user: "Nipun Perera",
    type: "login",
    message: "Successfully logged in.",
    time: "2 hrs ago",
  },
  {
    user: "Kasun Silva",
    type: "permission",
    message: "Permissions changed to admin by admin123",
    time: "3 hrs ago",
  },
  {
    user: "Thilini",
    type: "login",
    message: "Successfully logged in.",
    time: "4 hrs ago",
  },
  {
    user: "Isuru",
    type: "permission",
    message: "Permissions changed to admin by admin123",
    time: "4 hrs ago",
  },
  {
    user: "Sithum",
    type: "login",
    message: "Successfully logged in.",
    time: "5 hrs ago",
  },
  {
    user: "Admin",
    type: "login",
    message: "Manually verified user status.",
    time: "6 hrs ago",
  },
];

export default function ActivityLogCard() {
  const bg = useColorModeValue("#ffffff", "#1e293b");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const borderColor = useColorModeValue("#e2e8f0", "#334155");
  const badgeBg = {
    permission: "purple.400",
    login: "green.400",
  };
  const timeColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={bg}
      color={textColor}
      p="4"
      borderRadius="lg"
      shadow="sm"
      border="1px solid"
      borderColor={borderColor}
      h="300px"
      overflowY="auto" 
      w="100%" 
    >
      <Text fontSize="md" fontWeight="semibold" mb="4">
        Activity Log
      </Text>

      <VStack align="start" spacing="6">
        {logs.map((log, i) => (
          <Box key={i} w="full">
            <HStack justify="space-between" mb="1">
              <Text fontSize="sm" fontWeight="medium">
                {log.user}
              </Text>
              <Badge
                variant="subtle"
                bg={badgeBg[log.type]}
                color="white"
                fontSize="xs"
                px="2"
                py="0.5"
                borderRadius="md"
              >
                {log.type}
              </Badge>
            </HStack>

            <Text fontSize="sm">{log.message}</Text>
            <Text fontSize="xs" color={timeColor}>
              {log.time}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
