import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import PhotoManagementSection from './PhotoManagementSection';
import ReviewManagementSection from './ReviewManagementSection';
import { Shop, PhotoContent, CustomerReview } from '@/types/admin';

const AdminDashboard = () => {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 샘플 데이터
  const mockShops: Shop[] = [
    { id: '1', name: '뷰티클리닉 강남점', shopId: 'BC_GANGNAM_001' },
    { id: '2', name: '더마케어 홍대점', shopId: 'DC_HONGDAE_002' },
    { id: '3', name: '스킨앤케어 신촌점', shopId: 'SC_SINCHON_003' }
  ];

  const mockPhotos: PhotoContent[] = [
    {
      id: '1',
      shopId: '1',
      sectionType: 'representative',
      sectionName: '대표 이미지',
      imageUrl: '/placeholder.svg',
      likeCount: 45,
      order: 1
    },
    {
      id: '2',
      shopId: '1',
      sectionType: 'header1',
      sectionName: '헤더1',
      imageUrl: '/placeholder.svg',
      likeCount: 23,
      order: 2
    }
  ];

  const mockReviews: CustomerReview[] = [
    {
      id: '1',
      shopId: '1',
      createdDate: '2024-01-15',
      author: 'user123',
      rating: 5,
      content: '정말 만족스러운 시술이었습니다. 직원분들도 친절하고 결과도 너무 좋아요!',
      language: 'ko',
      photoType: 'after',
      thumbnailUrl: '/placeholder.svg',
      likeCount: 12,
      isLocked: false
    },
    {
      id: '2',
      shopId: '1',
      createdDate: '2024-01-10',
      author: 'beauty_lover',
      rating: 4,
      content: 'Amazing service! Very professional and clean facility.',
      language: 'en',
      likeCount: 8,
      isLocked: true
    },
    {
      id: '3',
      shopId: '1',
      createdDate: '2024-01-08',
      author: 'tanaka_san',
      rating: 5,
      content: 'とても満足しています。スタッフの対応も素晴らしかったです。',
      language: 'ja',
      photoType: 'before',
      thumbnailUrl: '/placeholder.svg',
      likeCount: 15,
      isLocked: false
    }
  ];

  const handleSearch = () => {
    const shop = mockShops.find(s => 
      s.name.includes(searchQuery) || s.shopId.includes(searchQuery)
    );
    setSelectedShop(shop || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* 페이지 제목 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            콘텐츠 관리 시스템
          </h1>
          <p className="text-gray-600">
            뷰티샵/병원의 사진 콘텐츠와 고객 리뷰를 통합 관리합니다
          </p>
        </div>

        {/* 샵 검색 섹션 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              샵 검색
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <Input
                  placeholder="샵 이름 또는 샵 ID로 검색 (예: 뷰티클리닉, BC_GANGNAM_001)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} className="px-8">
                검색
              </Button>
            </div>

            {selectedShop && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      선택된 샵: {selectedShop.name}
                    </h3>
                    <p className="text-sm text-blue-700">
                      샵 ID: {selectedShop.shopId}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedShop(null)}
                  >
                    선택 해제
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 콘텐츠 관리 영역 - 샵이 선택되었을 때만 표시 */}
        {selectedShop && (
          <div className="space-y-6">
            {/* 사진 콘텐츠 관리 */}
            <PhotoManagementSection 
              shopId={selectedShop.id}
              photos={mockPhotos.filter(p => p.shopId === selectedShop.id)}
            />

            {/* 고객 리뷰 관리 */}
            <ReviewManagementSection 
              shopId={selectedShop.id}
              reviews={mockReviews.filter(r => r.shopId === selectedShop.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
