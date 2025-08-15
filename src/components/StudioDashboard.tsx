
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Plus, 
  Sparkles, 
  TrendingUp, 
  Heart, 
  Eye, 
  Share2,
  Star,
  MapPin,
  Users,
  Camera,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import { StudioContentManager } from './StudioContentManager';
import { CustomerReviewHub } from './CustomerReviewHub';
import { StudioAnalytics } from './StudioAnalytics';
import { StudioProfile, ContentPost, CustomerFeedback } from '@/types/studio-management';

// 목 데이터
const mockStudio: StudioProfile = {
  id: 'studio-001',
  name: '글로우 뷰티 클리닉',
  category: 'beauty',
  location: '강남구 청담동',
  status: 'active',
  avatar: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
  totalPosts: 24,
  totalReviews: 156,
  avgRating: 4.8,
  followers: 2847
};

const mockPosts: ContentPost[] = [
  {
    id: 'post-1',
    studioId: 'studio-001',
    type: 'showcase',
    title: '여름 시즌 스킨케어 루틴',
    description: '건강하고 빛나는 피부를 위한 여름 관리법을 소개합니다.',
    images: ['/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png'],
    tags: ['스킨케어', '여름', '관리법'],
    likes: 234,
    views: 1850,
    shares: 45,
    publishedAt: '2024-06-15',
    isPublished: true,
    priority: 1
  },
  {
    id: 'post-2',
    studioId: 'studio-001',
    type: 'before-after',
    title: '보톡스 시술 결과',
    description: '자연스러운 주름 개선 효과를 확인해보세요.',
    images: ['/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png'],
    tags: ['보톡스', '주름개선', '시술'],
    likes: 189,
    views: 1234,
    shares: 28,
    publishedAt: '2024-06-12',
    isPublished: true,
    priority: 2
  }
];

const mockReviews: CustomerFeedback[] = [
  {
    id: 'review-1',
    studioId: 'studio-001',
    customerName: '김민지',
    customerAvatar: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
    rating: 5,
    comment: '정말 만족스러운 결과였어요! 직원분들도 너무 친절하시고 시설도 깔끔했습니다.',
    beforeImage: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
    afterImage: '/lovable-uploads/550925a2-deef-429f-9bbc-e00c91e7c26a.png',
    treatmentType: '필러 시술',
    visitDate: '2024-06-10',
    isVerified: true,
    likes: 42,
    isVisible: true,
    responseFromStudio: '소중한 후기 감사합니다! 앞으로도 최선을 다하겠습니다.'
  }
];

export const StudioDashboard = () => {
  const [selectedStudio, setSelectedStudio] = useState<StudioProfile>(mockStudio);
  const [posts, setPosts] = useState<ContentPost[]>(mockPosts);
  const [reviews, setReviews] = useState<CustomerFeedback[]>(mockReviews);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-full">
      <div className="container mx-auto p-6 space-y-8">
        {/* 헤더 영역 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Studio Content Hub
            </h1>
            <p className="text-gray-600 mt-2">뷰티 스튜디오 콘텐츠를 한 곳에서 관리하세요</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            새 콘텐츠 생성
          </Button>
        </div>

        {/* 스튜디오 검색 */}
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="스튜디오 이름 또는 ID로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white transition-colors"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                검색
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 선택된 스튜디오 정보 */}
        {selectedStudio && (
          <Card className="border-0 shadow-lg bg-gradient-to-r from-white to-blue-50/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={selectedStudio.avatar}
                    alt={selectedStudio.name}
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-blue-100"
                  />
                  <Badge 
                    className={`absolute -top-2 -right-2 ${
                      selectedStudio.status === 'active' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gray-500'
                    }`}
                  >
                    {selectedStudio.status === 'active' ? '활성' : '비활성'}
                  </Badge>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedStudio.name}</h2>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedStudio.location}</span>
                    <Badge variant="outline" className="ml-2">
                      {selectedStudio.category === 'beauty' ? '뷰티' : '의료'}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{selectedStudio.totalPosts}</div>
                    <div className="text-sm text-gray-500">포스트</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{selectedStudio.totalReviews}</div>
                    <div className="text-sm text-gray-500">리뷰</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold text-yellow-600">{selectedStudio.avgRating}</span>
                    </div>
                    <div className="text-sm text-gray-500">평점</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{selectedStudio.followers.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">팔로워</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 메인 탭 영역 */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <TabsTrigger value="content" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
              <Camera className="h-4 w-4 mr-2" />
              콘텐츠 관리
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
              <MessageSquare className="h-4 w-4 mr-2" />
              리뷰 관리
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              인사이트
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <StudioContentManager posts={posts} onPostsUpdate={setPosts} />
          </TabsContent>
          
          <TabsContent value="reviews">
            <CustomerReviewHub reviews={reviews} onReviewsUpdate={setReviews} />
          </TabsContent>
          
          <TabsContent value="analytics">
            <StudioAnalytics studioId={selectedStudio.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
