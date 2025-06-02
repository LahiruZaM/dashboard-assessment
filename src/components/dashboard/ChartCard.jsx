"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "1 Sep", value: 400 },
  { date: "2 Sep", value: 600 },
  { date: "3 Sep", value: 900 },
  { date: "4 Sep", value: 700 },
  { date: "5 Sep", value: 1000 },
  { date: "6 Sep", value: 1200 },
];

export default function ChartCard() {
  const bg = useColorModeValue("#ffffff", "#1e293b");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const borderColor = useColorModeValue("#e2e8f0", "#334155");

  return (
    <Box
      bg={bg}
      color={textColor}
      p="4"
      borderRadius="lg"
      shadow="sm"
      border="1px solid"
      borderColor={borderColor}
      height="300px" // set explicit height
    >
      <Flex justify="space-between" mb="4">
        <Text fontSize="md" fontWeight="semibold">
          User Activity
        </Text>
        <Text fontSize="sm" color="green.500">
          +8% from last month
        </Text>
      </Flex>

      {/* ResponsiveContainer is key for responsive width/height */}
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
