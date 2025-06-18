
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Edit } from 'lucide-react';
import { ShopContentData, ShopPhoto } from '@/types/shop-content';

interface PhotoManagementProps {
  shopData: ShopContentData;
  photos: ShopPhoto[];
  onPhotoUpdate: (photos: ShopPhoto[]) => void;
}

const sectionLabels = {
  main: '대표이미지',
  header1: '헤더1',
  content1: '본문1',
  content2: '본문2'
};

export const PhotoManagement: React.FC<PhotoManagementProps> = ({
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

  const getPhotoBySection = (section: keyof typeof sectionLabels) => {
    return photos.find(photo => photo.section === section);
  };

  return (
    <Card className="bg-blue-50">
      <CardHeader>
        <CardTitle className="bg-blue-500 text-white p-2 rounded text-center">
          샵 소개 페이지 | 노출순
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-blue-600 mb-4">
          2. 직접 순서 기입해서 사진별 돌아요 수량 변경
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {(Object.keys(sectionLabels) as Array<keyof typeof sectionLabels>).map(section => {
            const photo = getPhotoBySection(section);
            return (
              <div key={section} className="border rounded-lg p-3 bg-white">
                <div className="text-sm font-medium text-center mb-2">
                  {sectionLabels[section]}
                </div>
                
                <div className="aspect-square bg-gray-100 rounded mb-2 relative">
                  {photo ? (
                    <img 
                      src={photo.url} 
                      alt={sectionLabels[section]}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1">
                  <span className="text-xs">좋아요</span>
                  {photo && editingLikes === photo.id ? (
                    <div className="flex items-center gap-1">
                      <Input
                        type="number"
                        value={tempLikes}
                        onChange={(e) => setTempLikes(parseInt(e.target.value) || 0)}
                        className="w-12 h-6 text-xs p-1"
                      />
                      <Button
                        size="sm"
                        onClick={() => handleLikesUpdate(photo.id)}
                        className="h-6 px-2 text-xs"
                      >
                        저장
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium">
                        {photo?.likes || 0}
                      </span>
                      {photo && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLikesEdit(photo.id, photo.likes)}
                          className="h-5 w-5 p-0"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
