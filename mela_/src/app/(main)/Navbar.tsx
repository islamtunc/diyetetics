// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import UserButton from "@/components/UserButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Yekazad Yazılım
        </Link>

        {/* Menü Öğeleri */}
        <nav className="flex items-center gap-5">
          <Link href="/dashboard" className="text-sm font-medium text-secondary hover:text-primary">
            Dashboard
          </Link>
          <Link href="/users" className="text-sm font-medium text-secondary hover:text-primary">
            Kullanıcılar
          </Link>

          {/* Blog Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="link" className="text-sm font-medium text-secondary hover:text-primary">
              Blog
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} href="/posts">
                Blog Yazıları
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/posts/new">
                Yeni Blog Yazısı
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/categories">
                Kategoriler
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Ayarlar Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="link" className="text-sm font-medium text-secondary hover:text-primary">
              Ayarlar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} href="/settings/profile">
                Profil Ayarları
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/settings/security">
                Güvenlik Ayarları
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/settings/notifications">
                Bildirim Ayarları
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link href="/reports" className="text-sm font-medium text-secondary hover:text-primary">
            Raporlar
          </Link>
        </nav>

        {/* Kullanıcı Butonu */}
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}