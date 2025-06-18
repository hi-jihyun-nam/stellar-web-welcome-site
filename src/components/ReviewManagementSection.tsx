
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Lock, Edit2, Heart, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { CustomerReview } from '@/types/content-management';

interface ReviewManagementSectionProps {
  reviews: CustomerReview[];
  onReviewUpdate: (reviews: CustomerReview[]) => void;
}

export const ReviewManagementSection: React.FC<ReviewManagementSectionProps> = ({
  reviews,
  onReviewUpdate
}) => {
  const [editingLikes, setEditingLikes] = useState<string | null>(null);
  const [tempLikes, setTempLikes] = useState<number>(0);

  const handleLikesEdit = (reviewId: string, currentLikes: number) => {
    setEditingLikes(reviewId);
    setTempLikes(currentLikes);
  };

  const handleLikesUpdate = (reviewId: string) => {
    const updatedReviews = reviews.map(review =>
      review.id === reviewId ? { ...review, likes: tempLikes } : review
    );
    onReviewUpdate(updatedReviews);
    setEditingLikes(null);
  };

  const handleBulkLikesChange = (increment: number) => {
    const updatedReviews = reviews.map(review => ({
      ...review,
      likes: Math.max(0, review.likes + increment)
    }));
    onReviewUpdate(updatedReviews);
  };

  const handleAddReview = () => {
    const newReview: CustomerReview = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.'),
      author: 'newuser',
      rating: 5.0,
      content: '새로운 리뷰입니다.',
      likes: 0,
      isLocked: false
    };
    onReviewUpdate([newReview, ...reviews]);
  };

  return (
    <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-lg text-xl">
            ⭐ 고객 리뷰 관리
          </CardTitle>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
              최신순 / 좋아요순 / 평점순
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-lg text-sm font-medium">
              작성자 검색
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleAddReview}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              신규 리뷰 추가
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">일괄 좋아요 수 조정:</span>
            <Button
              onClick={() => handleBulkLikesChange(1)}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              +1
            </Button>
            <Button
              onClick={() => handleBulkLikesChange(-1)}
              size="sm"
              variant="outline"
            >
              <TrendingDown className="h-4 w-4 mr-1" />
              -1
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">작성일</TableHead>
                <TableHead className="font-semibold">작성자</TableHead>
                <TableHead className="font-semibold">리뷰 내용</TableHead>
                <TableHead className="font-semibold">사진 유형</TableHead>
                <TableHead className="font-semibold">사진</TableHead>
                <TableHead className="font-semibold">좋아요 수</TableHead>
                <TableHead className="font-semibold">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id} className="hover:bg-gray-50">
                  <TableCell className="whitespace-nowrap font-medium">
                    {review.date}
                  </TableCell>
                  <TableCell>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {review.author}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-yellow-600">{review.rating}</span>
                      </div>
                      <div className="text-sm text-gray-700 whitespace-pre-line">
                        {review.content}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {review.photoType && (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        review.photoType === 'before' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {review.photoType === 'before' ? 'Before' : 'After'}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {review.photo && (
                      <img 
                        src={review.photo.url}
                        alt={review.photoType}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {editingLikes === review.id ? (
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
                          onClick={() => handleLikesUpdate(review.id)}
                          className="h-8 px-2 text-xs bg-green-600 hover:bg-green-700"
                        >
                          저장
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="font-bold text-lg text-purple-600">
                          {review.likes}
                        </span>
                        {!review.isLocked && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLikesEdit(review.id, review.likes)}
                            className="h-6 w-6 p-0 hover:bg-purple-100"
                          >
                            <Edit2 className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {review.isLocked && (
                      <div className="flex items-center gap-1 text-gray-500">
                        <Lock className="h-4 w-4" />
                        <span className="text-xs">수정 제한</span>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
