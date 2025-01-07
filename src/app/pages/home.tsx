// Bismillahirahmanirahim

"use server "


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForYouFeed from "../(main)/ForYouFeed";
import FollowingFeed from "../(main)/FollowingFeed";
export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">Jibo Te</TabsTrigger>
            <TabsTrigger value="following">Tê Şopandin</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">
            <FollowingFeed />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}