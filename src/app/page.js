"use client";

import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import Sidebar from "@/components/dashboard/Sidebar";
import MobileNavbar from "@/components/dashboard/MobileNavbar";
import Header from "@/components/dashboard/Header";
import Card from "@/components/dashboard/Card";
import ChartCard from "@/components/dashboard/ChartCard";
import DailyActiveCard from "@/components/dashboard/DailyActiveCard";
import AuthMethodCard from "@/components/dashboard/AuthMethodCard";
import ActivityLogCard from "@/components/dashboard/ActivityLogCard";

import { FiUsers, FiBarChart2, FiClock } from "react-icons/fi";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      )}

      <Box
        pl={isMobile ? "0" : collapsed ? "60px" : "200px"}
        transition="all 0.3s ease"
        minH="100vh"
        bg="gray.50"
        _dark={{ bg: "gray.900" }}
      >
        {!isMobile && <Header />}

        <Box p="6">
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="4"
            mb="6"
          >
            <Card
              label="Daily Active Users"
              value="1,051"
              growth="+12%"
              icon={<FiUsers />}
            />
            <Card
              label="Monthly Active Users"
              value="8,423"
              growth="+8%"
              icon={<FiBarChart2 />}
            />
            <Card
              label="Time Per Active User"
              value="2h 36m"
              growth="+5%"
              icon={<FiClock />}
            />
          </Box>
          <Box
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{ md: "2fr 1fr" }}
            gap="4"
            mb="6"
          >
            <ChartCard />
            <Box display="flex" flexDirection="column" gap="4" h="full">
              <DailyActiveCard />
              <AuthMethodCard />
            </Box>
          </Box>
          <Box w="100%">
            <ActivityLogCard />
          </Box>
        </Box>
      </Box>
    </>
  );
}
