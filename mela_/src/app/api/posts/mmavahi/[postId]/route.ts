// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  try {
    await prisma.mmavahi.delete({ where: { id: postId } });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("Silme hatası:", e);
    if (e.code === 'P2025') {
      return NextResponse.json({ error: "Gönderi zaten silinmiş veya bulunamadı." }, { status: 404 });
    }
    return NextResponse.json({ error: "Silinemedi" }, { status: 500 });
  }
}
