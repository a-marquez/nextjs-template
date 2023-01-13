import Head from 'next/head'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col w-full h-full justify-around items-center'>
        <section>
            <h2><b>nextjs-template</b></h2>
            <ul>
                <li>typescript</li>
                <li>nextjs + react</li>
                <li>tailwind css</li>
            </ul>
        </section>
        
        <section>
            <b>Counter</b> 
            <Counter initialCount={3} />
        </section>
      </main>
    </>
  )
}
