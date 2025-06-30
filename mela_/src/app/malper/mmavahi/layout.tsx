// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd

"use client";

import React from 'react'
import ForYouFeed from './ForYouFeed'
import { Card } from 'react-bootstrap';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-4 md:px-0">
      <div className="w-full max-w-2xl flex-1">{children}
      <Card
        style={{
          marginTop: "20px",
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
          padding: "19px",
        }}
        className="w-full max-w-2xl mx-auto"
      >
        <Card.Title>Diğer Yazılar</Card.Title>
        <Card.Body>
          <ForYouFeed />
        </Card.Body>
      </Card>

      </div>
    </div>
  );
}