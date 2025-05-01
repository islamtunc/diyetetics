// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import SearchField from "@/components/SearchField";
import ForYouFeed from "@/app/(main)/mmkargeh/ForYouFeed";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <h1 className="text-3xl font-semibold"></h1>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="mm">Blog Yazıları</TabsTrigger>
          
          </TabsList>
          <TabsContent value="mm">



            <ForYouFeed/>
          </TabsContent>
          <TabsContent value="following">

<SearchField/>
          </TabsContent>
    






    </Tabs>
      </div>
    </main>
  );
}
