import { Button, DatePicker, HStack, Icon, Text } from "@chakra-ui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { LuCalendarDays } from "react-icons/lu";

export const DatePickerCustom = () => {
  // Получаем сегодняшнюю дату
  const now = today(getLocalTimeZone());

  return (
    <DatePicker.Root
      selectionMode="range"
      locale="ru-RU"
      onValueChange={(details) => {
        // details.value — это массив [Date, Date] или [Date]
        console.log("Выбранный период:", details.value);
      }}
    >
      {/* 1. Делаем триггер (кнопку) как на макете */}
      <DatePicker.Trigger asChild w="100%" bgColor={"white"} px="18px" py={2}>
        <HStack
          cursor="pointer"
          gap={1} // расстояние между элементами
          align="center" // вертикальное выравнивание
          justify="space-between"
          w="100%"
          h={10}
          borderRadius={8}
          borderWidth="1px"
          borderColor="default"
        >
          <Icon color="gray.600">
            <LuCalendarDays />
          </Icon>
          <Text fontSize={14}>Выбрать дату</Text>
        </HStack>
      </DatePicker.Trigger>

      {/* 2. Контент календаря */}
      <DatePicker.Positioner>
        <DatePicker.Content
          bg="white"
          boxShadow="lg"
          p="4"
          borderRadius="md"
        ></DatePicker.Content>
      </DatePicker.Positioner>
    </DatePicker.Root>
  );
};
