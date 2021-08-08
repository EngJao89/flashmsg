import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Msg = () => {
  const router = useRouter()
  const { data } = useSWR(() => `/api/messages?id=${router.query.id}`)
  return (
  <>
    <Head>
      <title>Flash Message App</title>
    </Head>
    <div className="h-screen mx-auto max-w-md">
      <img src='/logo.png' className='mx-auto'/>
      <h1 className='text-black text-5xl text-center font-bold'>
        Your Private Message
      </h1>
      <div className='mt-4 p-3 rounded-xl text-white border-0 shadow-sm bg-gray-900 h-12 w-full'>
        {!data && <p className='text-white text-center font-bold'>⚡Loading...</p>}
        {data && !data.message && <p className='text-white text-center font-bold'>⚡Invalid or expired message</p>}
        {data && data.message && <p className='text-white text-center font-bold'>⚡{data.message}</p>}
      </div>
      <div className='p-8 text-center'>
        <Link href='/'>
          <a className='text-black'>⬅️ Send a new private message</a>
        </Link>
      </div>
    </div>
  </>
  )
}
export default Msg
