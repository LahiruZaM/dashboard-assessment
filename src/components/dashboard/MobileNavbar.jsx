"use client";

import {
  Flex,
  Button,
  Portal,
  Menu,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import {
  FiMenu,
  FiGrid,
  FiDatabase,
  FiFileText,
  FiBookOpen,
  FiShoppingCart,
} from "react-icons/fi";
import { ColorModeButton } from "../ui/color-mode";

const menuItems = [
  { label: "Dashboard", icon: <FiGrid /> },
  { label: "Data Lab", icon: <FiDatabase /> },
  { label: "Surveys", icon: <FiFileText /> },
  { label: "Library", icon: <FiBookOpen /> },
  { label: "Marketplace", icon: <FiShoppingCart /> },
];

export default function MobileNavbar() {
  const bg = useColorModeValue("#f8fafc", "#0f172a");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const hoverBg = useColorModeValue("#e2e8f0", "#334155");

  return (
    <Flex
      bg={bg}
      color={textColor}
      p="4"
      justify="space-between"
      align="center"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="20"
    >
      <Menu.Root>
        <Menu.Trigger asChild>
        <Button variant="ghost" size="sm" px="2" aria-label="Menu">
            <FiMenu size={20} color={textColor} />
        </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content bg={bg} color={textColor} borderRadius="md" shadow="md">
              {menuItems.map((item, i) => (
                <Menu.Item
                  key={i}
                  value={item.label.toLowerCase()}
                  icon={item.icon}
                  _hover={{ bg: hoverBg }}
                  onSelect={() => console.log(`Clicked: ${item.label}`)}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <ColorModeButton />
    </Flex>
  );
}
