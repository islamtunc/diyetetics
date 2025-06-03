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
      recipientId: admin.id,
      issuerId: admin.id,
      type: "COMMENT",
      read: false,
    },
  });

  // If you need to create a related post, do it in a separate call here
  // await prisma.post.create({
  //   data: {
  //     content: [
  //       `İletişim Formu`,
  //       `Ad: ${name}`,
  //       `E-posta: ${email}`,
  //       `Mesaj: ${message}`,
  //     ],
  //     userId: admin.id,
  //     // notificationId: <notificationId>, // if you have a relation
  //   },
  // });

  return NextResponse.json({ success: true });
}