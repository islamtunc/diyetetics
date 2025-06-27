// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber




import PostEditor from "@/components/mmavahi/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/components/mmavahi/SearchField";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-">
      <div className="w-full min-w-0 space-y-5">

      <Alert variant="success"> Sporcu Beslenmesi Sayfası</Alert>
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">Paylaşılanlar</TabsTrigger>
            <TabsTrigger value="mm">Yeni Gönderi</TabsTrigger>
          
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
         
          <TabsContent value="mm">
            <PostEditor />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
