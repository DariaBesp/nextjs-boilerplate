"use client";
import { getToken } from "@/app/API/auth";
import {
  Box,
  DatePicker,
  Field,
  Heading,
  NativeSelect,
  Portal,
  Select,
  Table,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuCalendar } from "react-icons/lu";

interface BookingType {
  id: string;
  description: string | null;
  status?: { name: string };
  custom_fields: Record<string, any>;
}

export const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filters, setFilters] = useState({
    status: "all",
    dateRange: { from: null, to: null },
    search: "",
  });

  useEffect(() => {
    const fetchBookings = async () => {
      const token = await getToken();

      const response = await fetch(
        "https://api.beta.raida-dev.ru/api/tasks/rql/4fc9986b-d03b-4801-a672-a191c941e17c",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rql: "process.key = 'C9LL7'",
            fields: [],
            sort_type: [],
            engine: null,
          }),
        },
      );

      const result = await response.json();
      setBookings(result.data || []);
    };

    fetchBookings();
  }, []);

  return (
    <Box p={4} bg="white" rounded="md" shadow="md">
      <Heading size="lg" mb={4}>
        Список бронирований
      </Heading>
      {/* Фильтрация */}
      {/* Фильтр по статусу */}
      <Box display="flex" flexDirection="row" gap={6}>
        <Field.Root maxW="300px">
          <Field.Label>Фильтр по статусу:</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              value={filters.status}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, status: e.target.value }))
              }
            >
              <option value="all">Все</option>
              <option value="Новая">Новая</option>
              <option value="Подтверждена">Подтверждена</option>
              <option value="Отменена">Отменена</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        {/*Фильтр: выбор даты  */}
        <DatePicker.Root selectionMode="range" maxWidth="20rem">
          <DatePicker.Label>Фильтр по дате:</DatePicker.Label>
          <DatePicker.Control>
            <DatePicker.Input index={0} />
            <DatePicker.Input index={1} />
            <DatePicker.IndicatorGroup>
              <DatePicker.Trigger>
                <LuCalendar />
              </DatePicker.Trigger>
            </DatePicker.IndicatorGroup>
          </DatePicker.Control>
          <Portal>
            <DatePicker.Positioner>
              <DatePicker.Content>
                <DatePicker.View view="day">
                  <DatePicker.Header />
                  <DatePicker.DayTable />
                </DatePicker.View>
                <DatePicker.View view="month">
                  <DatePicker.Header />
                  <DatePicker.MonthTable />
                </DatePicker.View>
                <DatePicker.View view="year">
                  <DatePicker.Header />
                  <DatePicker.YearTable />
                </DatePicker.View>
              </DatePicker.Content>
            </DatePicker.Positioner>
          </Portal>
        </DatePicker.Root>

        {/* посковая строка = input + svg */}
      </Box>

      {/* Таблица */}
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Имя</Table.ColumnHeader>
            <Table.ColumnHeader>Телефон</Table.ColumnHeader>
            <Table.ColumnHeader>Количество гостей</Table.ColumnHeader>
            <Table.ColumnHeader>Дата</Table.ColumnHeader>
            <Table.ColumnHeader>Статус</Table.ColumnHeader>
            <Table.ColumnHeader>Комментарий</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bookings.map((item: BookingType) => (
            <Table.Row key={item.id}>
              <Table.Cell>
                {item.custom_fields["cf_client.first_name"]}
              </Table.Cell>
              <Table.Cell>{item.custom_fields["cf_contact.phone"]}</Table.Cell>
              <Table.Cell>{item.custom_fields.cf_guests}</Table.Cell>
              <Table.Cell>{item.custom_fields.cf_visit_date}</Table.Cell>
              <Table.Cell>{item.status?.name}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );

  // return (
  //   <div>
  //     <h2>Список бронирований</h2>
  //     {bookings.map((item: BookingType) => (
  //       <div key={item.id}>
  //         <p>Имя: {item.custom_fields["cf_client.first_name"]}</p>
  //         <p>Телефон: {item.custom_fields["cf_contact.phone"]}</p>
  //         <p>Гостей: {item.custom_fields.cf_guests}</p>
  //         <p>Дата: {item.custom_fields.cf_visit_date}</p>
  //         <p>Комментарий: {item.description}</p>
  //         <p>Статус: {item.status?.name}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
};
