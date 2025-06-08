import Head from 'next/head'
import Link from 'next/link'

export default function Categories() {
  const categories = [
    { id: 'mezeler', title: 'Mezeler', description: 'Soğuk ve sıcak mezeler' },
    { id: 'ara-sicaklar', title: 'Ara Sıcaklar', description: 'Lezzetli ara sıcaklar' },
    { id: 'ana-yemekler', title: 'Ana Yemekler', description: 'Özel ana yemekler' },
    { id: 'tatlilar', title: 'Tatlılar', description: 'Ev yapımı tatlılar' }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Kategoriler</title>
        <meta name="description" content="Kategori listesi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Kategoriler
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/kategori-icerik?kat=${category.id}`}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
} 