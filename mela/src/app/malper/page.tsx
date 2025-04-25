// Bismillahirahmanirahim



import { Home, Car, Shirt, Building, Briefcase, Paintbrush } from 'lucide-react';
import { Image } from 'react-bootstrap';
import UncontrolledExample from './components/mmslide';
import SearchField from '@/components/SearchField';

export default function Page() {
  return (
    <div className="flex flex-col gap-4">


<br></br><br></br><br></br><br></br>
<SearchField/>
<br></br>
<UncontrolledExample/>

    </div>
  );
}