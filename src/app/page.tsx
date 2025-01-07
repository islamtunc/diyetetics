// Bismillahirahmanirahim



import { Home, Car, Shirt, Building, Briefcase, Paintbrush } from 'lucide-react';
import { Alert } from 'react-bootstrap';

export default function Page() {
  return (
    <div className="flex flex-col gap-4" >

      <Alert style={{background:"green" ,color:"white"}}>Müşterisi Burada</Alert>
      <a href='/pages/mmavahi' className="flex items-center">
        <Home className="inline-block mr-2" /> Emlak
      </a>

      <a href='/pages/mmwesayit' className="flex items-center">
        <Car className="inline-block mr-2" /> Araç
      </a>

      <a href='/mmkinc' className="flex items-center">
        <Shirt className="inline-block mr-2" /> Giyim
      </a>

      <a href='/pages/mmkedkar' className="flex items-center">
        <Building className="inline-block mr-2" /> İnşaat iş ilanları
      </a>

      <a href='/pages/mmkargeh' className="flex items-center">
        <Briefcase className="inline-block mr-2" /> İş ilanları
      </a>

      <a href='/pages/mmhuner' className="flex items-center">
        <Paintbrush className="inline-block mr-2" /> Sanat ve el sanatları
      </a>
    </div>
  );
}