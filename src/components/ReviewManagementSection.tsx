
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Star, Heart, Lock, Plus, Filter, Eye } from 'lucide-react';
import { CustomerReview } from '@/types/admin';

interface ReviewManagementSectionProps {
  shopId: string;
  reviews: CustomerReview[];
}

const ReviewManagementSection: React.FC<ReviewManagementSectionProps> = ({ 
  shopId, 
  reviews 
}) => {
  const [editingLikes, setEditingLikes] = useState<{ [key: string]: number }>({});
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  const handleLikeChange = (reviewId: string, newValue: number) => {
    setEditingLikes(prev => ({
      ...prev,
      [reviewId]: Math.max(0, newValue)
    }));
  };

  const saveLikeCount = (reviewId: string) => {
    console.log(`리뷰 ${reviewId}의 좋아요 수를 ${editingLikes[reviewId]}로 변경`);
    setEditingLikes(prev => {
      const updated = { ...prev };
      delete updated[reviewId];
      return updated;
    });
  };

  const bulkIncreaseLikes = (amount: number) => {
    console.log(`모든 리뷰의 좋아요 수를 ${amount}만큼 증가`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const filteredReviews = reviews.filter(review => {
    if (filterType === 'photo') return review.thumbnailUrl;
    if (filterType === 'before') return review.photoType === 'before';
    if (filterType === 'after') return review.photoType === 'after';
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    if (sortBy === 'likes') return b.likeCount - a.likeCount;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-600" />
          고객 리뷰 관리
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 상단 컨트롤 */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 보기</SelectItem>
                  <SelectItem value="photo">사진 있는 리뷰</SelectItem>
                  <SelectItem value="before">Before 사진</SelectItem>
                  <SelectItem value="after">After 사진</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">작성일순</SelectItem>
                <SelectItem value="likes">좋아요순</SelectItem>
                <SelectItem value="rating">평점순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => bulkIncreaseLikes(10)}
            >
              전체 +10 좋아요
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              리뷰 추가
            </Button>
          </div>
        </div>

        {/* 리뷰 테이블 */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">작성일</TableHead>
                <TableHead className="w-32">작성자</TableHead>
                <TableHead>리뷰 내용</TableHead>
                <TableHead className="w-24">사진</TableHead>
                <TableHead className="w-32">좋아요</TableHead>
                <TableHead className="w-24">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedReviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="text-sm text-gray-600">
                    {review.createdDate}
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{review.author}</span>
                      {review.isLocked && (
                        <Lock className="w-3 h-3 text-gray-400" />
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-600 ml-2">
                          ({review.rating}/5)
                        </span>
                      </div>
                      <p className="text-sm text-gray-900 line-clamp-2">
                        {review.content}
                      </p>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      {review.thumbnailUrl && (
                        <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden">
                          <img 
                            src={review.thumbnailUrl} 
                            alt="리뷰 이미지"
                            className="w-full h-full object-cover cursor-pointer"
                          />
                        </div>
                      )}
                      {review.photoType && (
                        <Badge variant="outline" className="text-xs">
                          {review.photoType === 'before' ? 'Before' : 'After'}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <Input
                        type="number"
                        value={editingLikes[review.id] ?? review.likeCount}
                        onChange={(e) => handleLikeChange(review.id, parseInt(e.target.value) || 0)}
                        className="w-16 h-8"
                        min="0"
                        disabled={review.isLocked}
                      />
                      {editingLikes[review.id] !== undefined && !review.isLocked && (
                        <Button 
                          size="sm" 
                          onClick={() => saveLikeCount(review.id)}
                          className="h-8 px-2"
                        >
                          저장
                        </Button>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                      {!review.isLocked && (
                        <Button size="sm" variant="destructive" className="h-8 px-2">
                          삭제
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {sortedReviews.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Star className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>조건에 맞는 리뷰가 없습니다</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewManagementSection;
