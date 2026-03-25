import IframeLoader from './IframeLoader';

export default function ReservationPage() {
  return (
    <div className="p-4 flex min-h-screen items-center justify-center bg-gray-950/3">
      <div className="p-1 max-w-lg h-[30rem] bg-white border rounded-2xl">
        <IframeLoader
          src="https://api.beta.raida-dev.ru/plugin/raida-form/2.0.0?config=eyJhY2Nlc3MiOnsidG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKZmJpSTZJalJtWXprNU9EWmlMV1F3TTJJdE5EZ3dNUzFoTmpjeUxXRXhPVEZqT1RReFpURTNZeUlzSWw5b0lqb2liRzlqWVd4b2IzTjBJaXdpYzNWaUlqb2ljbUZwWkdGQWNtRnBaR0V1WTI5dEluMC5hYjd2LWxCekFPX21QZzMxRWdGOG1QZnRjb0FQQ3FBd2FRWkFmYmJwb0RRIiwicHJvY2Vzc0lkIjoiMTRkMGZiZjktNTAzYS00NjAyLWEzN2QtMDI0MmNiNTZjNjk0IiwiZm9ybUlkIjoiYjY3YWVkZGMtNGY1Zi00YzA3LTllZWItNDMzMDcyMGExYmNlIn0sImRpc3BsYXkiOnsiZm9ybUNsYXNzTmFtZSI6InRlc3RDbGFzc0J5TWlzaGEifX0="
          width="500px"
          height="500px"
        />
      </div>
    </div>
  );
}
