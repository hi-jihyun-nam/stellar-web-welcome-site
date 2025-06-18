
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShopTable } from './ShopTable';
import { ShopModal } from './ShopModal';
import { ExcelActions } from './ExcelActions';
import { LanguageSelector } from './LanguageSelector';
import { Shop } from '@/types/shop';

// Mock data for demonstration with multilingual content
const mockShops: Shop[] = [
  {
    id: '1',
    name: {
      ko: '홍대네일샵',
      en: 'Hongdae Nail Shop',
      ja: 'ホンデネイルショップ',
      cn: '弘大美甲店'
    },
    address: '마포구',
    operatingTime: '10~20시',
    designer: '원장 1인',
    languages: ['KO', 'EN', 'JA'],
    description: {
      ko: '감성 네일 전문샵, 젤 네일 특화. 개인의 취향과 스타일에 맞는 맞춤형 네일 디자인을 제공합니다.',
      en: 'Emotional nail specialty shop, specializing in gel nails. We provide customized nail designs that match individual tastes and styles.',
      ja: '感性ネイル専門店、ジェルネイル特化。個人の好みやスタイルに合わせたカスタムネイルデザインを提供します。',
      cn: '感性美甲专门店，专业凝胶美甲。提供符合个人品味和风格的定制美甲设计。'
    },
    services: [
      {
        name: {
          ko: '젤네일',
          en: 'Gel Nail',
          ja: 'ジェルネイル',
          cn: '凝胶美甲'
        },
        price: 35000
      },
      {
        name: {
          ko: '그라데이션',
          en: 'Gradation',
          ja: 'グラデーション',
          cn: '渐变'
        },
        price: 50000
      }
    ],
    isActive: true
  },
  {
    id: '2',
    name: {
      ko: '강남피부샵',
      en: 'Gangnam Skin Care',
      ja: 'カンナムスキンケア',
      cn: '江南皮肤店'
    },
    address: '강남구',
    operatingTime: '11~21시',
    designer: '원장 1인',
    languages: ['KO', 'JA'],
    description: {
      ko: '피부 트러블, 리프팅 전문. 최신 장비와 전문 기술로 건강한 피부를 만들어드립니다.',
      en: 'Specializing in skin troubles and lifting. We create healthy skin with the latest equipment and professional techniques.',
      ja: '肌トラブル、リフティング専門。最新機器と専門技術で健康な肌を作ります。',
      cn: '皮肤问题、提拉专门。用最新设备和专业技术打造健康肌肤。'
    },
    services: [
      {
        name: {
          ko: '아쿠아필',
          en: 'Aqua Peel',
          ja: 'アクアピール',
          cn: '水光焕肤'
        },
        price: 80000
      },
      {
        name: {
          ko: 'LDM',
          en: 'LDM',
          ja: 'LDM',
          cn: 'LDM'
        },
        price: 120000
      }
    ],
    isActive: false
  }
];

const AdminShopManagement = () => {
  const [shops, setShops] = useState<Shop[]>(mockShops);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('ko');

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
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
            <ShopTable 
              shops={shops}
              currentLanguage={currentLanguage}
              onEdit={handleEditShop}
              onToggleStatus={handleToggleStatus}
            />
          </CardContent>
        </Card>

        <ShopModal
          shop={selectedShop}
          currentLanguage={currentLanguage}
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
