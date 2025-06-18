
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Heart, 
  MessageSquare, 
  Shield, 
  Eye,
  EyeOff,
  ThumbsUp,
  TrendingUp,
  TrendingDown,
  Calendar,
  User
} from 'lucide-react';
import { CustomerFeedback } from '@/types/studio-management';

interface CustomerReviewHubProps {
  reviews: CustomerFeedback[];
  onReviewsUpdate: (reviews: CustomerFeedback[]) => void;
}

export const CustomerReviewHub: React.FC<CustomerReviewHubProps> = ({
  reviews,
  onReviewsUpdate
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
    onReviewsUpdate(updatedReviews);
    setEditingLikes(null);
  };

  const handleBulkLikesChange = (increment: number) => {
    const updatedReviews = reviews.map(review => ({
      ...review,
      likes: Math.max(0, review.likes + increment)
    }));
    onReviewsUpdate(updatedReviews);
  };

  const toggleReviewVisibility = (reviewId: string) => {
    const updatedReviews = reviews.map(review =>
      review.id === reviewId ? { ...review, isVisible: !review.isVisible } : review
    );
    onReviewsUpdate(updatedReviews);
  };

  return (
    <div className="space-y-6">
      {/* 리뷰 관리 헤더 */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              고객 리뷰 관리
            </CardTitle>
            <div className="flex items-center gap-3">
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                새 리뷰 추가
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">일괄 좋아요:</span>
                <Button
                  onClick={() => handleBulkLikesChange(1)}
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600"
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
          </div>
        </CardHeader>
      </Card>

      {/* 리뷰 카드 목록 */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex gap-6">
                {/* 고객 정보 영역 */}
                <div className="flex-shrink-0">
                  <Avatar className="w-12 h-12 ring-2 ring-blue-100">
                    <AvatarImage src={review.customerAvatar} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {review.customerName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {review.isVerified && (
                    <Badge className="mt-2 bg-green-500 hover:bg-green-600 text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      인증
                    </Badge>
                  )}
                </div>

                {/* 리뷰 내용 영역 */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-800">{review.customerName}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'text-yellow-500 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm font-medium text-gray-600 ml-1">
                            {review.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(review.visitDate).toLocaleDateString('ko-KR')}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {review.treatmentType}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={review.isVisible ? "default" : "outline"}
                        onClick={() => toggleReviewVisibility(review.id)}
                        className="h-8"
                      >
                        {review.isVisible ? (
                          <><Eye className="h-3 w-3 mr-1" />공개</>
                        ) : (
                          <><EyeOff className="h-3 w-3 mr-1" />비공개</>
                        )}
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>

                  {/* 비포&애프터 이미지 */}
                  {(review.beforeImage || review.afterImage) && (
                    <div className="flex gap-4">
                      {review.beforeImage && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-600">Before</div>
                          <img
                            src={review.beforeImage}
                            alt="Before"
                            className="w-24 h-24 object-cover rounded-lg border-2 border-red-200"
                          />
                        </div>
                      )}
                      {review.afterImage && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-600">After</div>
                          <img
                            src={review.afterImage}
                            alt="After"
                            className="w-24 h-24 object-cover rounded-lg border-2 border-green-200"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* 스튜디오 응답 */}
                  {review.responseFromStudio && (
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">스튜디오 응답</span>
                      </div>
                      <p className="text-gray-700 text-sm">{review.responseFromStudio}</p>
                    </div>
                  )}

                  {/* 하단 액션 영역 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      {editingLikes === review.id ? (
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={tempLikes}
                            onChange={(e) => setTempLikes(parseInt(e.target.value) || 0)}
                            className="w-20 h-8 text-sm"
                            min="0"
                          />
                          <Button
                            size="sm"
                            onClick={() => handleLikesUpdate(review.id)}
                            className="h-8 px-3 text-xs"
                          >
                            저장
                          </Button>
                        </div>
                      ) : (
                        <span 
                          className="font-semibold text-red-600 cursor-pointer hover:text-red-700"
                          onClick={() => handleLikesEdit(review.id, review.likes)}
                        >
                          {review.likes.toLocaleString()}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8 px-3">
                        답글 작성
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 px-3">
                        편집
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
