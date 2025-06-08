import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function CategoryContent() {
  const router = useRouter()
  const { kat } = router.query

  // Kategori içerikleri
  const categoryContents = {
    'mezeler': [
      { name: 'Haydari', description: 'Özel soslu yoğurtlu meze' },
      { name: 'Acılı Ezme', description: 'Bol baharatlı ezme' }
    ],
    'ara-sicaklar': [
      { name: 'Sigara Böreği', description: 'El açması sigara böreği' },
      { name: 'Paçanga', description: 'Pastırmalı paçanga böreği' }
    ],
    'ana-yemekler': [
      { name: 'Izgara Köfte', description: 'Özel baharatlı ızgara köfte' },
      { name: 'Tavuk Şiş', description: 'Marine edilmiş tavuk şiş' }
    ],
    'tatlilar': [
      { name: 'Künefe', description: 'Antep fıstıklı künefe' },
      { name: 'Sütlaç', description: 'Fırında sütlaç' }
    ]
  }

  // Kategori başlıkları
  const categoryTitles = {
    'mezeler': 'Mezeler',
    'ara-sicaklar': 'Ara Sıcaklar',
    'ana-yemekler': 'Ana Yemekler',
    'tatlilar': 'Tatlılar'
  }

  // Kategori bulunamadıysa veya yükleniyorsa
  if (!kat || !categoryContents[kat]) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Kategori Bulunamadı</title>
          <meta name="description" content="Kategori bulunamadı" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/kategoriler" className="text-blue-600 hover:text-blue-800">
              ← Kategorilere Dön
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Kategori Bulunamadı
            </h1>
            <p className="text-gray-600">
              Aradığınız kategori mevcut değil veya henüz yüklenmedi.
            </p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{categoryTitles[kat]}</title>
        <meta name="description" content={`${categoryTitles[kat]} kategorisi içeriği`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/kategoriler" className="text-blue-600 hover:text-blue-800">
            ← Kategorilere Dön
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">
          {categoryTitles[kat]}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categoryContents[kat].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 