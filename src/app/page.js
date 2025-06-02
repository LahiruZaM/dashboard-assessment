"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Card from "@/components/dashboard/Card";
import ChartCard from "@/components/dashboard/ChartCard";
import { Box } from "@chakra-ui/react";
import { FiUsers, FiBarChart2, FiClock } from "react-icons/fi";


export default function Home() {
  return (
    <>
      <Sidebar />
      <Box pl={{ base: "60px", md: "200px" }} minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Header/>
        <Box p="6">
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap="4"
            mb="6"
          >
            <Card label="Daily Active Users" value="1,051" growth="+12%" icon={<FiUsers />} />
            <Card label="Monthly Active Users" value="8,423" growth="+8%" icon={<FiBarChart2 />}/>
            <Card label="Time Per Active User" value="2h 36m" growth="+5%" icon={<FiClock />}/>
          </Box>
          <Box mb="6">
            <ChartCard />
          </Box>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </Box>
      </Box>
    </>
  );
}
