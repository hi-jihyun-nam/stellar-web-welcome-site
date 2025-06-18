
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, ChevronUp, ChevronDown, Upload } from 'lucide-react';
import { PhotoContent, PhotoSection } from '@/types/admin';

interface PhotoManagementSectionProps {
  shopId: string;
  photos: PhotoContent[];
}

const photoSections: PhotoSection[] = [
  { type: 'representative', name: '대표 이미지', description: '메인 페이지 썸네일 및 대표 이미지' },
  { type: 'header1', name: '헤더1', description: '페이지 최상단 강조 이미지' },
  { type: 'content1', name: '본문1', description: '시술 중 또는 과정 이미지' },
  { type: 'content2', name: '본문2', description: '시술 후 또는 결과 이미지' }
];

const PhotoManagementSection: React.FC<PhotoManagementSectionProps> = ({ 
  shopId, 
  photos 
}) => {
  const [editingLikes, setEditingLikes] = useState<{ [key: string]: number }>({});

  const handleLikeChange = (photoId: string, newValue: number) => {
    setEditingLikes(prev => ({
      ...prev,
      [photoId]: Math.max(0, newValue)
    }));
  };

  const saveLikeCount = (photoId: string) => {
    // 실제 구현에서는 API 호출
    console.log(`사진 ${photoId}의 좋아요 수를 ${editingLikes[photoId]}로 변경`);
    setEditingLikes(prev => {
      const updated = { ...prev };
      delete updated[photoId];
      return updated;
    });
  };

  const getPhotosForSection = (sectionType: string) => {
    return photos.filter(photo => photo.sectionType === sectionType);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-green-600" />
          사진 콘텐츠 관리
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {photoSections.map((section) => {
          const sectionPhotos = getPhotosForSection(section.type);
          
          return (
            <div key={section.type} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
                <Button size="sm" className="gap-2">
                  <Upload className="w-4 h-4" />
                  사진 추가
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectionPhotos.length > 0 ? (
                  sectionPhotos.map((photo) => (
                    <div key={photo.id} className="bg-white rounded-lg border p-4">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                        <img 
                          src={photo.imageUrl} 
                          alt="콘텐츠 이미지"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">순서: {photo.order}</Badge>
                          <div className="flex gap-1">
                            <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                              <ChevronUp className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                              <ChevronDown className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">좋아요:</span>
                          <Input
                            type="number"
                            value={editingLikes[photo.id] ?? photo.likeCount}
                            onChange={(e) => handleLikeChange(photo.id, parseInt(e.target.value) || 0)}
                            className="w-20 h-8"
                            min="0"
                          />
                          {editingLikes[photo.id] !== undefined && (
                            <Button 
                              size="sm" 
                              onClick={() => saveLikeCount(photo.id)}
                              className="h-8"
                            >
                              저장
                            </Button>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            교체
                          </Button>
                          <Button size="sm" variant="destructive" className="flex-1">
                            삭제
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    <Camera className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p>등록된 사진이 없습니다</p>
                    <p className="text-sm">사진 추가 버튼을 클릭하여 콘텐츠를 등록하세요</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PhotoManagementSection;
