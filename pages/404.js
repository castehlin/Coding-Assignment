import { useRouter } from 'next/router'

const Error = () => {
  /*put styling in this page due to css restrictions for non-app pages error for root folder (I am sure it's easy to fix/work around/
  common syntax for next.js but it's something I can learn when I have a bit more time!)*/
  const router = useRouter()
  const userName = router.asPath.replace(/\//g, '') //get path, remove /

  return (
    <div className='error'>
      <h1>404</h1>
      <h2>No user with the name {`'${userName}'`} found :-(</h2>
      <style jsx>{`
        .error {
          background: #53e9b2;
          padding: 30px;
        }
        h1 {
          font-size: 4em;
        }
      `}</style>
    </div>
  )
}

export default Error;
