// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ForYouFeed from "@/app/(main)/mmkinc/ForYouFeed";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">



        <Tabs defaultValue="mm">
          <TabsList>
          <TabsTrigger value="mm">Hakkımızda</TabsTrigger>

       
          </TabsList>

          <TabsContent value="mm">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
