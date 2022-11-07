export default function Home() {
  return (
   <div>LOCAL: {process.env.LOCAL_DEPLOY_ENV} / ENV: {process.env.DEPLOY_ENV}-{process.env.NODE_ENV}</div>
  )
}
