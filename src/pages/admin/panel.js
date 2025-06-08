import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState({});
  const [newCategory, setNewCategory] = useState('');
  const [newFood, setNewFood] = useState({
    name: '',
    category: ''
  });

  // Basit bir auth kontrolü
  useEffect(() => {
    // Gerçek uygulamada burada session/token kontrolü yapılacak
    const isAuthenticated = localStorage.getItem('isAdmin');
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    if (newFood.name.trim() && newFood.category) {
      setFoods(prev => ({
        ...prev,
        [newFood.category]: [...(prev[newFood.category] || []), newFood.name.trim()]
      }));
      setNewFood({ name: '', category: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Panel</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Kategori Ekleme Formu */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Kategori Ekle</h2>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Kategori adı"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Kategori Ekle
              </button>
            </form>
            
            {/* Kategori Listesi */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Mevcut Kategoriler</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="p-2 bg-gray-50 rounded-md">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Yemek Ekleme Formu */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Yemek Ekle</h2>
            <form onSubmit={handleAddFood} className="space-y-4">
              <div>
                <select
                  value={newFood.category}
                  onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Kategori Seçin</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={newFood.name}
                  onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                  placeholder="Yemek adı"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Yemek Ekle
              </button>
            </form>

            {/* Yemek Listesi */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Mevcut Yemekler</h3>
              {categories.map((category) => (
                <div key={category} className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
                  <ul className="space-y-2">
                    {foods[category]?.map((food, index) => (
                      <li key={index} className="p-2 bg-gray-50 rounded-md">
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 