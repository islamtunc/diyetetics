// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber


import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import SessionProvider from "./SessionProvider";

import 'bootstrap/dist/css/bootstrap.css'
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/malper");

  return (
    <SessionProvider value={session}>
      <div
        className="flex min-h-screen flex-col"
        style={{ backgroundColor: "#22c55e" /* Tailwind'in green-500 tonu, beyazla uyumlu canlı bir yeşil */ }}
      >
        <Navbar />
        <div className="mx-auto flex w-full max-w-7xl grow flex-row gap-2 p-2">
          <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-2 py-3 shadow-sm sm:block lg:px-3 xl:w-80" />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-2 py-3 shadow-sm sm:block lg:px-3 xl:w-80" />
        </div>
        <MenuBar className="sticky bottom-0 flex w-full justify-center gap-2 border-t bg-card p-2 sm:hidden" />
      </div>
    </SessionProvider>
  );
}
