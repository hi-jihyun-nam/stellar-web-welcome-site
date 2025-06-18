
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShopTable } from './ShopTable';
import { ShopModal } from './ShopModal';
import { ExcelActions } from './ExcelActions';
import { Shop } from '@/types/shop';

// Mock data for demonstration
const mockShops: Shop[] = [
  {
    id: '1',
    name: '홍대네일샵',
    address: '마포구',
    operatingTime: '10~20시',
    designer: '원장 1인',
    languages: ['KO'],
    description: '"감성 네일 전문샵, 젤 네일 특화"',
    services: [
      { name: '젤네일', price: 35000 },
      { name: '그라데이션', price: 50000 }
    ],
    isActive: true
  },
  {
    id: '2',
    name: '강남피부샵',
    address: '강남구',
    operatingTime: '11~21시',
    designer: '원장 1인',
    languages: ['KO', 'JA'],
    description: '"피부 트러블, 리프팅 전문..."',
    services: [
      { name: '아쿠아필', price: 80000 },
      { name: 'LDM', price: 120000 }
    ],
    isActive: false
  }
];

const AdminShopManagement = () => {
  const [shops, setShops] = useState<Shop[]>(mockShops);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditShop = (shop: Shop) => {
    setSelectedShop(shop);
    setIsModalOpen(true);
  };

  const handleSaveShop = (updatedShop: Shop) => {
    setShops(prev => prev.map(shop => 
      shop.id === updatedShop.id ? updatedShop : shop
    ));
    setIsModalOpen(false);
    setSelectedShop(null);
  };

  const handleToggleStatus = (shopId: string) => {
    setShops(prev => prev.map(shop => 
      shop.id === shopId ? { ...shop, isActive: !shop.isActive } : shop
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              인라인 편집형 뷰(All-in-One Editable View)
            </CardTitle>
            <ExcelActions shops={shops} onImport={setShops} />
          </CardHeader>
          <CardContent>
            <ShopTable 
              shops={shops}
              onEdit={handleEditShop}
              onToggleStatus={handleToggleStatus}
            />
          </CardContent>
        </Card>

        <ShopModal
          shop={selectedShop}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedShop(null);
          }}
          onSave={handleSaveShop}
        />
      </div>
    </div>
  );
};

export default AdminShopManagement;
