
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Edit2, Heart } from 'lucide-react';
import { ShopData, ShopPhoto } from '@/types/content-management';

interface PhotoContentSectionProps {
  shopData: ShopData;
  photos: ShopPhoto[];
  onPhotoUpdate: (photos: ShopPhoto[]) => void;
}

export const PhotoContentSection: React.FC<PhotoContentSectionProps> = ({
  shopData,
  photos,
  onPhotoUpdate
}) => {
  const [editingLikes, setEditingLikes] = useState<string | null>(null);
  const [tempLikes, setTempLikes] = useState<number>(0);

  const handleLikesEdit = (photoId: string, currentLikes: number) => {
    setEditingLikes(photoId);
    setTempLikes(currentLikes);
  };

  const handleLikesUpdate = (photoId: string) => {
    const updatedPhotos = photos.map(photo =>
      photo.id === photoId ? { ...photo, likes: tempLikes } : photo
    );
    onPhotoUpdate(updatedPhotos);
    setEditingLikes(null);
  };

  const handleLikesCancel = () => {
    setEditingLikes(null);
  };

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg text-center text-xl">
          📸 샵 소개 페이지 | 사진 콘텐츠 관리 (노출순)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-sm text-purple-700 mb-6 font-medium bg-purple-100 p-3 rounded-lg">
          💡 각 섹션별 사진의 좋아요 수를 직접 입력하여 관리할 수 있습니다
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-3">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {photo.sectionName}
                </span>
              </div>
              
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 relative group overflow-hidden">
                {photo.url ? (
                  <>
                    <img 
                      src={photo.url} 
                      alt={photo.sectionName}
                      className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" className="bg-white text-gray-800 hover:bg-gray-100">
                        <Edit2 className="h-4 w-4 mr-1" />
                        변경
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                    <Upload className="h-12 w-12 mb-2" />
                    <span className="text-sm font-medium">사진 업로드</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-600">좋아요</span>
                </div>
                
                {editingLikes === photo.id ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={tempLikes}
                      onChange={(e) => setTempLikes(parseInt(e.target.value) || 0)}
                      className="w-20 h-8 text-sm text-center"
                      min="0"
                    />
                    <Button
                      size="sm"
                      onClick={() => handleLikesUpdate(photo.id)}
                      className="h-8 px-3 text-xs bg-green-600 hover:bg-green-700"
                    >
                      저장
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleLikesCancel}
                      className="h-8 px-3 text-xs"
                    >
                      취소
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-purple-600">
                      {photo.likes}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLikesEdit(photo.id, photo.likes)}
                      className="h-8 w-8 p-0 hover:bg-purple-100"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
