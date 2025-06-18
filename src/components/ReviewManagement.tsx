
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Lock, Edit } from 'lucide-react';
import { Review } from '@/types/shop-content';

interface ReviewManagementProps {
  reviews: Review[];
  onReviewUpdate: (reviews: Review[]) => void;
}

export const ReviewManagement: React.FC<ReviewManagementProps> = ({
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

  const handleBulkLikesIncrease = () => {
    const updatedReviews = reviews.map(review => ({
      ...review,
      likes: review.likes + 1
    }));
    onReviewUpdate(updatedReviews);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-blue-50">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="bg-blue-500 text-white p-2 rounded">
              성 고객 리뷰
            </CardTitle>
            <div className="bg-blue-500 text-white p-2 rounded">
              최신순/클릭순/좋아요순/
            </div>
            <div className="bg-gray-200 p-2 rounded">
              아이디 검색
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Button 
              onClick={handleBulkLikesIncrease}
              className="bg-green-500 hover:bg-green-600"
            >
              <Plus className="h-4 w-4 mr-1" />
              신규 추가
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>작성일</TableHead>
                <TableHead>작성자</TableHead>
                <TableHead>리뷰 내용</TableHead>
                <TableHead>사진 유형</TableHead>
                <TableHead>사진 유형</TableHead>
                <TableHead>좋아요 수<br />일괄 증가 +/-</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="whitespace-nowrap">
                    {review.date}
                  </TableCell>
                  <TableCell>{review.author}</TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="font-medium">{review.rating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                      <div className="text-sm whitespace-pre-line">
                        {review.content}
                      </div>
                      {review.isLocked && (
                        <Lock className="h-4 w-4 inline ml-2 text-gray-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {review.photoType && (
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {review.photoType === 'before' ? 'Before (비포)' : 'After (애프터)'}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {review.photo && (
                      <img 
                        src={review.photo.url}
                        alt={review.photoType}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {editingLikes === review.id ? (
                      <div className="flex items-center gap-1">
                        <Input
                          type="number"
                          value={tempLikes}
                          onChange={(e) => setTempLikes(parseInt(e.target.value) || 0)}
                          className="w-16 h-8 text-sm p-1"
                        />
                        <Button
                          size="sm"
                          onClick={() => handleLikesUpdate(review.id)}
                          className="h-8 px-2 text-xs"
                        >
                          저장
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{review.likes}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLikesEdit(review.id, review.likes)}
                          className="h-6 w-6 p-0"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
