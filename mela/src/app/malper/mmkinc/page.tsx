// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ForYouFeed from "@/app/(main)/mmkinc/ForYouFeed";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">


<Alert style={{textAlign:"center", fontSize:"55px", background:"green",color:"white"}}> Web Sites</Alert>

        <Tabs defaultValue="mm">
          <TabsList>
          <TabsTrigger value="for-you">Promotion Web Sites</TabsTrigger>

            <TabsTrigger value="for-you">Blog Web Sites</TabsTrigger>
            <TabsTrigger value="following">E Commerce Web Sites </TabsTrigger>
            <TabsTrigger value="mm">Social Media Web Sites</TabsTrigger>

          </TabsList>

          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
