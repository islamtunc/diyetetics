// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import SearchField from "@/components/SearchField";
import ForYouFeed from "@/app/(main)/mmhewcedari/ForYouFeed";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <h1 className="text-3xl font-semibold"></h1>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="mm">Programlar</TabsTrigger>
        
          </TabsList>
          <TabsContent value="for-you">
          </TabsContent>
          <TabsContent value="following">

<SearchField/>
          </TabsContent>
    





        <TabsContent value="mm">

<ForYouFeed/>
    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
