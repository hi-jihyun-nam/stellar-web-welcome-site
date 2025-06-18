
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShopSearchSection } from './ShopSearchSection';
import { PhotoContentSection } from './PhotoContentSection';
import { ReviewManagementSection } from './ReviewManagementSection';
import { ShopData, ShopPhoto, CustomerReview } from '@/types/content-management';

// 목 데이터
const mockShopData: ShopData = {
  shopId: '31',
  shopName: '카리오앤이브 잠실점',
  photos: [
    {
      id: '1',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'main',
      sectionName: '대표이미지',
      likes: 30,
      orderIndex: 1
    },
    {
      id: '2', 
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'header1',
      sectionName: '헤더1',
      likes: 0,
      orderIndex: 2
    },
    {
      id: '3',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'content1',
      sectionName: '본문1',
      likes: 10,
      orderIndex: 3
    },
    {
      id: '4',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'content2',
      sectionName: '본문2',
      likes: 2,
      orderIndex: 4
    }
  ],
  reviews: [
    {
      id: '1',
      date: '2025.05.11',
      author: 'realuser01',
      rating: 4.0,
      content: "Women's Hair Cut 40,000 won\nVery good! Loved it",
      photoType: 'before',
      photo: {
        id: 'p1',
        url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
        type: 'before'
      },
      likes: 20,
      isLocked: true
    },
    {
      id: '2',
      date: '2025.05.11',
      author: 'realuser02',
      rating: 4.5,
      content: "Perfect service and result!",
      photoType: 'after',
      photo: {
        id: 'p2',
        url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
        type: 'after'
      },
      likes: 60,
      isLocked: false
    },
    {
      id: '3',
      date: '2025.05.10',
      author: 'realuser03',
      rating: 5.0,
      content: "Amazing transformation",
      likes: 15,
      isLocked: false
    }
  ]
};

const ContentManagement = () => {
  const [selectedShop, setSelectedShop] = useState<ShopData | null>(mockShopData);
  const [photos, setPhotos] = useState<ShopPhoto[]>(mockShopData.photos);
  const [reviews, setReviews] = useState<CustomerReview[]>(mockShopData.reviews);

  const handleShopSearch = (shopName: string) => {
    // 실제 구현에서는 API 호출
    if (shopName.includes('카리오') || shopName === '31') {
      setSelectedShop(mockShopData);
      setPhotos(mockShopData.photos);
      setReviews(mockShopData.reviews);
    } else {
      setSelectedShop(null);
      setPhotos([]);
      setReviews([]);
    }
  };

  const handlePhotoUpdate = (updatedPhotos: ShopPhoto[]) => {
    setPhotos(updatedPhotos);
  };

  const handleReviewUpdate = (updatedReviews: CustomerReview[]) => {
    setReviews(updatedReviews);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            샵 콘텐츠 관리 시스템
          </h1>
          <p className="text-gray-600">
            뷰티샵/병원의 사진 콘텐츠와 고객 리뷰를 효율적으로 관리하세요
          </p>
        </div>

        <ShopSearchSection onSearch={handleShopSearch} />
        
        {selectedShop && (
          <>
            <PhotoContentSection 
              shopData={selectedShop}
              photos={photos}
              onPhotoUpdate={handlePhotoUpdate}
            />
            <ReviewManagementSection 
              reviews={reviews}
              onReviewUpdate={handleReviewUpdate}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;
