// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ForYouFeed from "@/app/(main)/mmkinc/ForYouFeed";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">


<Alert > </Alert>

        <Tabs defaultValue="mm">
          <TabsList>
          <TabsTrigger value="mm">Yararlı Kaynaklar</TabsTrigger>

          </TabsList>

          <TabsContent value="for-you">
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">
        <ForYouFeed />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
