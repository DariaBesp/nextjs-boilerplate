"use client";
import { getToken } from "@/app/API/auth";
import  { useEffect, useState } from "react";

interface BookingType {
  id: string;
  description: string | null;
  status?: { name: string };
  custom_fields: Record<string, any>;
}

export const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = await getToken();

      const response = await fetch(
        "https://api.beta.raida-dev.ru/api/tasks/rql/4fc9986b-d03b-4801-a672-a191c941e17c",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            rql: "process.key = 'C9LL7'",
            fields: [],
            sort_type: [],
            engine: null
          })
        }
      );

      const result = await response.json();
      setBookings(result.data || []);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Список бронирований</h2>
      {bookings.map((item: BookingType) => (
        <div key={item.id}>
          <p>Имя: {item.custom_fields["cf_client.first_name"]}</p>
          <p>Телефон: {item.custom_fields["cf_contact.phone"]}</p>
          <p>Гостей: {item.custom_fields.cf_guests}</p>
          <p>Дата: {item.custom_fields.cf_visit_date}</p>
          <p>Комментарий: {item.description}</p>
          <p>Статус: {item.status?.name}</p>
        </div>
      ))}
    </div>
  );
}