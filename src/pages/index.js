import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Ana Sayfa</title>
        <meta name="description" content="Karşılama sayfası" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-6xl font-bold text-center mb-8">
          Menüye Hoş Geldiniz
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Lezzetli yemeklerimizi keşfetmek için kategorilere göz atın
        </p>
        <Link 
          href="/kategoriler" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          Kategorilere Git
        </Link>
      </main>
    </div>
  )
}
