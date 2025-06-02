"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Box pl={{ base: "60px", md: "200px" }} p="6">
        {/* Main content goes here */}
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      </Box>
    </>
  );
}
