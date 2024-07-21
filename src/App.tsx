import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { type Payment, columns } from "./components/table-model/columns";
import { DataTable } from "./components/table-model/data-table";
import Demo from "./pages/demo";

export default function App() {
  const fakeData: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ];

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="p-4 w-full flex gap-2 items-center flex-col">
        <ModeToggle />

        <div className="flex justify-center flex-col items-center w-full">
          <h2 className="my-4 font-bold text-xl">FAKE TABLE</h2>
          <DataTable columns={columns} data={fakeData} />
        </div>

        <hr className="text-red-500 w-1/2 my-5" />

        <div className="w-2/3">
          <Demo />
        </div>
      </div>
    </ThemeProvider>
  );
}
