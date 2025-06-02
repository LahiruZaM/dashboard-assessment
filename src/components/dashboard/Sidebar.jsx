"use client";

import {
  Box,
  VStack,
  Text,
  Flex,
  useBreakpointValue,
  Button,
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
import { ColorModeButton } from "../ui/color-mode";
import { Tooltip } from "../ui/tooltip";

export default function Sidebar({ collapsed, setCollapsed }) {
  const bg = useColorModeValue("#f8fafc", "#0f172a");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const hoverBg = useColorModeValue("#e2e8f0", "#334155");

  const isMobile = useBreakpointValue({ base: true, md: false });

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
      position={isMobile ? "relative" : "fixed"}
      top="0"
      left="0"
      zIndex="20"
      boxShadow="lg"
    >
      <Flex justify="space-between" align="center" mb="6">
        {!collapsed && !isMobile && <Text fontWeight="bold">LOGO</Text>}
        <Flex gap="2" align="center">
          <Button
            onClick={() => setCollapsed(!collapsed)}
            size="sm"
            variant="ghost"
            color={useColorModeValue("gray.700", "white")}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            px="2"
          >
            {collapsed ? <FiMenu size={18} /> : <FiX size={18} />}
          </Button>

          {isMobile && <ColorModeButton />}
        </Flex>
      </Flex>

      {!isMobile && (
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
      )}
    </Box>
  );
}
