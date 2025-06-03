import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Admin veya ilk kullanıcıya notification gönder
  const admin = await prisma.user.findFirst();
  if (!admin) {
    return NextResponse.json({ error: "No admin user found" }, { status: 404 });
  }

  // Bildirimi kaydet
  await prisma.notification.create({
    data: {
      recipientId: admin.id,
      issuerId: admin.id,
      type: "COMMENT",
      read: false,
    },
  });

  return NextResponse.json({ success: true });
}