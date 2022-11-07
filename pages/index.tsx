export default function Home() {
  return (
   <div>ENV: {process.env.DEPLOY_ENV}-{process.env.NODE_ENV}</div>
  )
}
