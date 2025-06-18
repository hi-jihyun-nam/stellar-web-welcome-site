
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Eye, 
  Star,
  Calendar,
  BarChart3,
  PieChart
} from 'lucide-react';

interface StudioAnalyticsProps {
  studioId: string;
}

export const StudioAnalytics: React.FC<StudioAnalyticsProps> = ({ studioId }) => {
  // 목 데이터
  const analytics = {
    totalViews: 15420,
    weeklyGrowth: 12.5,
    engagement: 8.3,
    avgRating: 4.8,
    totalInteractions: 1250,
    topContent: [
      { title: '여름 스킨케어 루틴', views: 2840, likes: 234 },
      { title: '보톡스 시술 결과', views: 1950, likes: 189 },
      { title: '필러 전후 비교', views: 1680, likes: 156 }
    ],
    popularTags: [
      { tag: '스킨케어', usage: 45 },
      { tag: '보톡스', usage: 32 },
      { tag: '필러', usage: 28 },
      { tag: '관리법', usage: 24 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* 주요 지표 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">총 조회수</p>
                <p className="text-2xl font-bold">{analytics.totalViews.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+{analytics.weeklyGrowth}% 이번 주</span>
                </div>
              </div>
              <Eye className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">참여율</p>
                <p className="text-2xl font-bold">{analytics.engagement}%</p>
                <div className="flex items-center gap-1 mt-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">평균 참여도</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">평균 평점</p>
                <p className="text-2xl font-bold">{analytics.avgRating}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm">5점 만점</span>
                </div>
              </div>
              <Star className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">총 상호작용</p>
                <p className="text-2xl font-bold">{analytics.totalInteractions.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">좋아요, 댓글 등</span>
                </div>
              </div>
              <Heart className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 인기 콘텐츠 & 태그 분석 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              인기 콘텐츠 TOP 3
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{content.title}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {content.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {content.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              인기 태그 분석
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analytics.popularTags.map((tag, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">#{tag.tag}</span>
                    <span className="text-sm text-gray-500">{tag.usage}회 사용</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(tag.usage / 50) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 월간 성과 요약 */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            이번 달 성과 요약
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-sm text-gray-600">새로운 포스트</div>
              <div className="text-xs text-green-600 mt-1">전월 대비 +20%</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-sm text-gray-600">새로운 리뷰</div>
              <div className="text-xs text-green-600 mt-1">전월 대비 +15%</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">2.8K</div>
              <div className="text-sm text-gray-600">새로운 팔로워</div>
              <div className="text-xs text-green-600 mt-1">전월 대비 +25%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
