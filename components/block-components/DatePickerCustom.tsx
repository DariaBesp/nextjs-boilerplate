import {
  Button,
  DatePicker,
  HStack,
  Icon,
  Portal,
  Text,
} from "@chakra-ui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { relative } from "path";
import { LuCalendarDays } from "react-icons/lu";

export const DatePickerCustom = () => {
  // Получаем сегодняшнюю дату
  const now = today(getLocalTimeZone());

  return (
    <DatePicker.Root
      selectionMode="range"
      locale="ru-RU"
      positioning={{
        placement: "bottom-start", // Выравнивание по нижнему правому краю кнопки
        gutter: 150, // Расстояние между кнопкой и календарем
      }}
      onValueChange={(details) => {
        // details.value — это массив [Date, Date] или [Date]
        console.log("Выбранный период:", details.value);
      }}
    >
      {/* 1. Делаем триггер (кнопку) как на макете */}
      <DatePicker.Trigger
        position="relative"
        asChild
        w="100%"
        bgColor={"white"}
        px="18px"
        py={2}
      >
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
      <Portal>
        <DatePicker.Positioner zIndex="popover">
          <DatePicker.Content
            bg="white"
            boxShadow="lg"
            p="4"
            borderRadius="md"
            border="1px solid"
            borderColor="border"
          >
            {/* Представление ДНЕЙ (основное для выбора диапазона) */}
            <DatePicker.View view="day">
              <DatePicker.Context>
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger />
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger />
                    </DatePicker.ViewControl>

                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {api.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {api.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((value, id) => (
                              <DatePicker.TableCell key={id} value={value}>
                                <DatePicker.TableCellTrigger>
                                  {value.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>

            {/* Представление МЕСЯЦЕВ */}
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>

            {/* Представление ЛЕТ */}
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
};
