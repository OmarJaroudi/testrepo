import React from 'react';
export const getStaticProps = () => {
  return {
    props: {
      env: process.env.GITHUB_REF_NAME,
      deployEnv: process.env.DEPLOY_ENV
    }
  }
}
export default function Home({ env, deployEnv }: {env: string; deployEnv: string}) {
  if (process.env.GITHUB_REF_NAME) {
    return (
      <div>{env} -- {deployEnv}</div>
     )
  }

}
