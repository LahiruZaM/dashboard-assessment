"use client";

import {
  Box,
  Text,
  Flex,
  HStack,
  Circle,
  Spacer,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { Chart, useChart } from "@chakra-ui/charts";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function DailyActiveCard() {
  const bg = useColorModeValue("#ffffff", "#1e293b");
  const textColor = useColorModeValue("#1e293b", "#f8fafc");
  const borderColor = useColorModeValue("#e2e8f0", "#334155");

  const data = [
    { name: "Staff", value: 151 },
    { name: "Students", value: 200 },
    { name: "Other", value: 200 },
  ];

  const chart = useChart({
    data,
    series: [
      { name: "Staff", color: "blue.400" },
      { name: "Students", color: "purple.500" },
      { name: "Other", color: "red.400" },
    ],
  });

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const entry = payload[0];
      return (
        <Box
          bg={bg}
          p="2"
          borderRadius="md"
          shadow="lg"
          border="1px solid"
          borderColor={borderColor}
        >
          <Text fontSize="sm" fontWeight="medium">
            {entry.name}: {entry.value} users
          </Text>
          <Text fontSize="xs" color="gray.500">
            {((entry.value / total) * 100).toFixed(1)}%
          </Text>
        </Box>
      );
    }
    return null;
  };

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
    >
      <Text fontSize="md" fontWeight="semibold" mb="4">
        Daily Active Users
      </Text>

      <Flex direction="column" align="center" justify="center" gap="4">
        <Box w="200px" h="200px">
          <Chart.Root chart={chart}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chart.data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chart.data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={chart.color(chart.series[index]?.color)}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </Chart.Root>
        </Box>

        <Flex direction="column" gap="2" w="full">
          {chart.series.map((item, index) => (
            <HStack key={item.name} justify="space-between" w="full">
              <HStack>
                <Circle size="3" bg={chart.color(item.color)} />
                <Text fontSize="sm">{item.name}</Text>
              </HStack>
              <Text fontSize="sm">{data[index].value} users</Text>
            </HStack>
          ))}
        </Flex>

        <Text fontSize="lg" fontWeight="bold" mt="2">
          Total: {total} users
        </Text>
      </Flex>
    </Box>
  );
}
