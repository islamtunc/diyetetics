// Bismillahirrahmanirrahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

import prisma from "@/lib/prisma";

export default async function MmmpeyamPage() {
  const messages = await prisma.mmmpeyam.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
        Gelen Mesajlar
      </h1>
      {messages.length === 0 && (
        <div className="text-center text-gray-500">Henüz mesaj yok.</div>
      )}
      <div className="space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-green-700">{msg.name}</span>
              <span className="text-xs text-gray-400">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-1">{msg.email}</div>
            <div className="text-gray-800">{msg.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}



