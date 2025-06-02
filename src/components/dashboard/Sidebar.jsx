"use client";

import {
  Box,
  VStack,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiDatabase,
  FiFileText,
  FiBookOpen,
  FiShoppingCart,
} from "react-icons/fi";
import { useColorModeValue } from "../ui/color-mode";
import { Tooltip } from "../ui/tooltip";

import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  // ✅ Updated colors
  const bg = useColorModeValue("#f8fafc", "#0f172a"); // Light / Dark BG
  const textColor = useColorModeValue("#1e293b", "#f8fafc"); // Text
  const hoverBg = useColorModeValue("#e2e8f0", "#334155"); // Hover

  const menuItems = [
    { label: "Dashboard", icon: <FiGrid /> },
    { label: "Data Lab", icon: <FiDatabase /> },
    { label: "Surveys", icon: <FiFileText /> },
    { label: "Library", icon: <FiBookOpen /> },
    { label: "Marketplace", icon: <FiShoppingCart /> },
  ];

  return (
    <Box
      bg={bg}
      color={textColor}
      w={collapsed ? "60px" : "200px"}
      h="100vh"
      p="16px"
      transition="all 0.3s ease"
      position="fixed"
      left="0"
      top="0"
      boxShadow="lg"
      zIndex="10"
    >
      <Flex justify="space-between" align="center" mb="6">
        {!collapsed && <Text fontWeight="bold">LOGO</Text>}
        <IconButton
          size="sm"
          icon={collapsed ? <FiMenu /> : <FiX />}
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        />
      </Flex>

      <VStack align="start" spacing="3">
        {menuItems.map((item, i) => (
          <Tooltip
            label={collapsed ? item.label : ""}
            placement="right"
            key={i}
            hasArrow
          >
            <Flex
              align="center"
              w="full"
              p="8px"
              borderRadius="8px"
              _hover={{ bg: hoverBg }}
              cursor="pointer"
              transition="all 0.2s"
              gap="10px"
            >
              {item.icon}
              {!collapsed && <Text fontSize="14px">{item.label}</Text>}
            </Flex>
          </Tooltip>
        ))}
      </VStack>
    </Box>
  );
}
