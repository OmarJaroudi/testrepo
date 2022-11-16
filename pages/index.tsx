import React from 'react';
export const getStaticProps = () => {
  return {
    props: {
      env: process.env.GITHUB_REF_NAME
    }
  }
}
export default function Home({ env }: {env: string}) {
  if (process.env.GITHUB_REF_NAME) {
    return (
      <div>{env}</div>
     )
  }

}
