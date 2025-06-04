//Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
//Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah





import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Admin veya ilk kullanıcıya notification gönder
  const admin = await prisma.user.findFirst();
  if (!admin) {
    return NextResponse.json({ error: "No admin user found" }, { status: 404 });
  }

  await prisma.notification.create({
    data: {
      type: "COMMENT",
      read: false,
      recipient: { connect: { id: admin.id } }, // assuming recipient is a relation to User
      issuer: { connect: { id: admin.id } } // replace with the actual issuer's id if available
    },
  });

  return NextResponse.json({ success: true });
}