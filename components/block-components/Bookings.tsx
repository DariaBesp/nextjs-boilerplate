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
  Tabs,
  Link,
  Flex,
  Pagination,
  ButtonGroup,
  IconButton,
  InputGroup,
  Input,
  Button,
  Center,
  SegmentGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
  LuFolder,
  LuInfo,
  LuSearch,
  LuUser,
} from "react-icons/lu";
//import { ToggleTip } from "@/components/ui/toggle-tip";

//перенести в utils
const formatBookingId = (key?: string) => {
  if (!key) return "";

  const number = key.split("-")[1];
  return number ? `#${number.padStart(3, "0")}` : "";
};

const formatShortDate = (isoDate?: string) => {
  if (!isoDate) return "";
  const parts = isoDate.split("T")[0].split("-"); // ["2026","03","31"]
  const year = parts[0].slice(-2); // берем последние 2 цифры года
  return `${parts[2]}.${parts[1]}.${year}`; // "31.03.26"
};

interface BookingType {
  id: string;
  key: string;
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
  // const [dateValue, setDateValue] = useState<string | null>("Неделя");

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
      {/* Cссылка Домой и строка поиска */}
      <Flex gap={4} justify={"space-between"} align={"center"}>
        <Link href="#">Домой</Link>
        <Flex gap={2} align={"center"}>
          {/* <Field.Input placeholder="Поиск..." /> */}
          <InputGroup flex="1" startElement={<LuSearch />}>
            <Input placeholder="Поиск" />
          </InputGroup>
          {/* //<ToggleTip content="This is some additional information."> */}
          <Button size="xs" variant="ghost">
            <LuInfo />
          </Button>
          {/* </ToggleTip> */}
        </Flex>
      </Flex>

      {/* tooltip или popover или toggle tip */}
      <Heading size="lg" mb={4}>
        Входящие заявки
      </Heading>
      <Flex gap={4} mb={4} align={"start"} justify={"space-between"}>
        <Tabs.Root defaultValue="all">
          <Tabs.List>
            <Tabs.Trigger value="all">Все</Tabs.Trigger>
            <Tabs.Trigger value="Новые">
              <LuFolder />
              Новая
            </Tabs.Trigger>
            <Tabs.Trigger value="Нет ответа">Нет ответа</Tabs.Trigger>
            <Tabs.Trigger value="Отмененные">Отмененные</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all">будут все заявки</Tabs.Content>
          <Tabs.Content value="Новые">будут новые заявки</Tabs.Content>
          <Tabs.Content value="Нет ответа">
            будут заявки, по которым нет ответа от клиента (статус "Нет ответа")
          </Tabs.Content>
          <Tabs.Content value="Отмененные">
            будут отмененные заявки
          </Tabs.Content>
        </Tabs.Root>

        <Box>
          <SegmentGroup.Root
          // value={dateValue}
          // onValueChange={(e) => setDateValue(e.value)}
          >
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={["Сегодня", "Вчера", "Неделя"]} />
          </SegmentGroup.Root>
        </Box>
      </Flex>

      {/* Таблица */}
      <Table.Root size="sm" marginBottom={5}>
        <Table.Header>
          <Table.Row bg="bg.default">
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Имя</Table.ColumnHeader>
            <Table.ColumnHeader>Номер телефона</Table.ColumnHeader>
            <Table.ColumnHeader>Дата</Table.ColumnHeader>
            <Table.ColumnHeader>Время</Table.ColumnHeader>
            <Table.ColumnHeader>Гости</Table.ColumnHeader>
            <Table.ColumnHeader>Пожелания</Table.ColumnHeader>
            <Table.ColumnHeader>Статус</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bookings.map((item: BookingType) => (
            <Table.Row key={item.id}>
              <Table.Cell>{formatBookingId(item.key)}</Table.Cell>
              <Table.Cell>
                {item.custom_fields.cf_client?.first_name}
              </Table.Cell>
              <Table.Cell>{item.custom_fields.cf_contact?.phone}</Table.Cell>
              <Table.Cell>
                {formatShortDate(item.custom_fields.cf_visit_date)}
              </Table.Cell>
              <Table.Cell>
                {" "}
                {item.custom_fields.cf_visit_time
                  ? `${item.custom_fields.cf_visit_time.hours}:${item.custom_fields.cf_visit_time.minutes}`
                  : ""}
              </Table.Cell>
              <Table.Cell>{item.custom_fields.cf_guests}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.status?.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination.Root count={20} pageSize={2} defaultPage={1}>
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton
                colorPalette={"blue"}
                variant={{ base: "outline", _selected: "solid" }}
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Box>
  );
};
