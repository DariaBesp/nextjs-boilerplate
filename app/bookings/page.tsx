import { Bookings } from "../components/Bookings";

export default function BookingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать на страницу бронирований!</h1>
      <Bookings />
    </div>
  );
}