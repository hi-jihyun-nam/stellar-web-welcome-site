
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Heart, 
  Eye, 
  Share2, 
  Edit, 
  Trash2, 
  Star,
  Image as ImageIcon,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { ContentPost } from '@/types/studio-management';

interface StudioContentManagerProps {
  posts: ContentPost[];
  onPostsUpdate: (posts: ContentPost[]) => void;
}

export const StudioContentManager: React.FC<StudioContentManagerProps> = ({
  posts,
  onPostsUpdate
}) => {
  const [editingLikes, setEditingLikes] = useState<string | null>(null);
  const [tempLikes, setTempLikes] = useState<number>(0);

  const handleLikesEdit = (postId: string, currentLikes: number) => {
    setEditingLikes(postId);
    setTempLikes(currentLikes);
  };

  const handleLikesUpdate = (postId: string) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, likes: tempLikes } : post
    );
    onPostsUpdate(updatedPosts);
    setEditingLikes(null);
  };

  const getTypeStyle = (type: ContentPost['type']) => {
    switch (type) {
      case 'showcase':
        return 'bg-blue-100 text-blue-800';
      case 'before-after':
        return 'bg-purple-100 text-purple-800';
      case 'promotion':
        return 'bg-green-100 text-green-800';
      case 'tutorial':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: ContentPost['type']) => {
    switch (type) {
      case 'showcase':
        return <Star className="h-4 w-4" />;
      case 'before-after':
        return <TrendingUp className="h-4 w-4" />;
      case 'promotion':
        return <Heart className="h-4 w-4" />;
      case 'tutorial':
        return <ImageIcon className="h-4 w-4" />;
      default:
        return <ImageIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* 컨텐츠 생성 카드 */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            새 콘텐츠 만들기
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'showcase', label: '쇼케이스', desc: '작품 및 결과물 전시' },
              { type: 'before-after', label: '비포&애프터', desc: '시술 전후 비교' },
              { type: 'promotion', label: '프로모션', desc: '이벤트 및 할인 정보' },
              { type: 'tutorial', label: '튜토리얼', desc: '케어 방법 안내' }
            ].map((item) => (
              <Card key={item.type} className="cursor-pointer hover:shadow-md transition-shadow border-2 border-dashed border-gray-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getTypeStyle(item.type as ContentPost['type'])} mb-3`}>
                    {getTypeIcon(item.type as ContentPost['type'])}
                  </div>
                  <div className="font-medium text-gray-800">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 콘텐츠 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="relative">
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <Badge className={`absolute top-3 left-3 ${getTypeStyle(post.type)}`}>
                <span className="flex items-center gap-1">
                  {getTypeIcon(post.type)}
                  {post.type === 'showcase' ? '쇼케이스' : 
                   post.type === 'before-after' ? '비포&애프터' :
                   post.type === 'promotion' ? '프로모션' : '튜토리얼'}
                </span>
              </Badge>
              {!post.isPublished && (
                <Badge className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600">
                  미발행
                </Badge>
              )}
            </div>
            
            <CardContent className="p-5">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('ko-KR')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    {editingLikes === post.id ? (
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
                          onClick={() => handleLikesUpdate(post.id)}
                          className="h-8 px-3 text-xs"
                        >
                          저장
                        </Button>
                      </div>
                    ) : (
                      <span 
                        className="font-semibold text-red-600 cursor-pointer hover:text-red-700"
                        onClick={() => handleLikesEdit(post.id, post.likes)}
                      >
                        {post.likes.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-3">
                      <Edit className="h-3 w-3 mr-1" />
                      편집
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 px-3 text-red-600 hover:text-red-700">
                      <Trash2 className="h-3 w-3" />
                    </Button>
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
