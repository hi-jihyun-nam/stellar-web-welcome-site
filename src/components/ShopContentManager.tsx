
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShopSearch } from './ShopSearch';
import { PhotoManagement } from './PhotoManagement';
import { ReviewManagement } from './ReviewManagement';
import { ShopContentData, ShopPhoto, Review } from '@/types/shop-content';

// Mock data
const mockShopData: ShopContentData = {
  shopId: '31',
  shopName: '카리오앤이브 잠실점',
  photos: [
    {
      id: '1',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'main',
      likes: 30
    },
    {
      id: '2',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'header1',
      likes: 0
    },
    {
      id: '3',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'content1',
      likes: 10
    },
    {
      id: '4',
      url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
      section: 'content2',
      likes: 2
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
      author: 'realuser01',
      rating: 4.0,
      content: "Women's Hair Cut 40,000 won\nVery good! Loved it",
      photoType: 'before',
      photo: {
        id: 'p2',
        url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
        type: 'before'
      },
      likes: 60,
      isLocked: false
    },
    {
      id: '3',
      date: '2025.05.11',
      author: 'realuser01',
      rating: 4.0,
      content: "Women's Hair Cut 40,000 won\nVery good! Loved it",
      photoType: 'after',
      photo: {
        id: 'p3',
        url: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
        type: 'after'
      },
      likes: 10,
      isLocked: true
    }
  ]
};

const ShopContentManager = () => {
  const [selectedShop, setSelectedShop] = useState<ShopContentData | null>(mockShopData);
  const [photos, setPhotos] = useState<ShopPhoto[]>(mockShopData.photos);
  const [reviews, setReviews] = useState<Review[]>(mockShopData.reviews);

  const handleShopSearch = (shopName: string) => {
    // Mock search - in real app, this would call an API
    if (shopName.includes('카리오')) {
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

  const handleReviewUpdate = (updatedReviews: Review[]) => {
    setReviews(updatedReviews);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <ShopSearch onSearch={handleShopSearch} />
        
        {selectedShop && (
          <>
            <PhotoManagement 
              shopData={selectedShop}
              photos={photos}
              onPhotoUpdate={handlePhotoUpdate}
            />
            <ReviewManagement 
              reviews={reviews}
              onReviewUpdate={handleReviewUpdate}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ShopContentManager;
