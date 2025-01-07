// Bismillahirahmanirahim



import React, { Children } from 'react'
import { Alert } from 'react-bootstrap'



function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>

<Alert> Emlak</Alert>


{children}
    </div>
  )
}

export default layout
