// Bismillahirahmanirahim
//Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala ali seyyidina Muhammedin

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  if (user) redirect("/");

  return <>
  
  <button ref="/pages">Anasayfa</button>
  {children}</>;
}
