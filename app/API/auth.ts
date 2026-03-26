"use client";

// запросы на сервер, связанные с авторизацией

//получаем токен, который сгорает через 1 час
export async function login() {
  try {
    const response = await fetch(
      "https://api.beta.raida-dev.ru/api/users/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          username: "raida@raida.com",
          password: "raida",
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Ошибка авторизации:", response.status, text);
      throw new Error(`Ошибка авторизации: ${response.status}`);
    }

    const data = await response.json();

    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("token_created_at", Date.now().toString());
    }

    return data.access_token;
  } catch (error) {
    console.error("Ошибка при логине:", error);
    return null;
  }
}

export async function getToken() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    const createdAt = Number(localStorage.getItem("token_created_at"));

    if (token && createdAt && Date.now() - createdAt < 60 * 60 * 1000) {
      return token;
    }
  }
  return await login();
}
