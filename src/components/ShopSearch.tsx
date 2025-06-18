
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface ShopSearchProps {
  onSearch: (shopName: string) => void;
}

export const ShopSearch: React.FC<ShopSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Card className="bg-blue-100">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-600 text-white px-3 py-2 rounded text-sm font-medium">
            31호
          </div>
          <div className="bg-gray-600 text-white px-3 py-2 rounded text-sm font-medium">
            사진 관리 / 리뷰 관리
          </div>
          <div className="bg-blue-500 text-white px-3 py-2 rounded text-sm font-medium">
            저장
          </div>
          <div className="bg-blue-400 text-white px-3 py-2 rounded text-sm font-medium">
            이전으로 되돌리기
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          <Input
            placeholder="샵 이름 검색 Ex. 카리오앤이브 잠실점"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSearch} size="sm">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-2 text-sm text-blue-600">
          1. 검색하고자 하는 샵의 이름/샵의 코드(shop_id) 검색
        </div>
      </CardContent>
    </Card>
  );
};
