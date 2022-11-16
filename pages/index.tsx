import React from 'react';
export default function Home() {
  return (
   <div>{process.env.GITHUB_REF_NAME} {process.env.NODE_ENV}</div>
  )
}
