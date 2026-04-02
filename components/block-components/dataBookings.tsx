import { StatusConfig } from "./typesBookings";

//ключ-значение для статусов
export const STATUS_KEYS = {
  NEW: "Новая",
  CANCELLED: "Отмена",
  NO_ANSWER: "Нет ответа",
  CONFIRMED: "Подтверждено",
} as const;

export const statusMap: Record<string, StatusConfig> = {
  [STATUS_KEYS.NEW]: {
    label: "Новая",
    color: "blue",
    bg: "#EEF0F5",
  }, // Тук добавихме липсващата затваряща скоба
  [STATUS_KEYS.CANCELLED]: {
    label: "Отмена",
    color: "red",
    bg: "#F5F6F9",
  },
  [STATUS_KEYS.NO_ANSWER]: {
    label: "Нет ответа",
    color: "orange",
    bg: "#F5F6F9",
  },
  [STATUS_KEYS.CONFIRMED]: {
    label: "Подтверждено",
    color: "green",
    bg: "#F5F6F9",
  },
};
