import config from 'config';

export default function Home() {
  return (
   <div>ENV: {config.get('DEPLOY_ENV')}-{process.env.NODE_ENV}</div>
  )
}
