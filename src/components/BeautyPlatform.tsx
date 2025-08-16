import React from 'react';
import { Search, MapPin, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { name: "Hair", active: true },
  { name: "Nail", active: false },
  { name: "Nail", active: false },
  { name: "Nail", active: false },
  { name: "Nail", active: false },
];

const salons = [
  {
    id: 1,
    name: "(업체명) Kim's Beauty Salon",
    location: "Gangnam Station walk 3 min, 300m",
    rating: 3.3,
    reviews: 3000,
    discount: "최대 30,000 Won~",
    images: [
      "/lovable-uploads/273baab7-1f44-4f9b-9bbd-37fe1f8df4b0.png",
      "/lovable-uploads/273baab7-1f44-4f9b-9bbd-37fe1f8df4b0.png",
      "/lovable-uploads/273baab7-1f44-4f9b-9bbd-37fe1f8df4b0.png"
    ],
    description: "The no.1 cosmetic/ beauty tips platform, check The real reviews, the new trend, and get discounts!",
    featured: true,
    originalPrice: "₩ 13,200",
    discountPrice: "₩ 13,200",
    rating_count: "8/10"
  }
];

export function BeautyPlatform() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/lovable-uploads/273baab7-1f44-4f9b-9bbd-37fe1f8df4b0.png')`,
          backgroundPosition: 'center top'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
          <h1 className="text-2xl font-bold mb-2">Real Review &<br />Real Curation</h1>
          <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-black">
            Learn More →
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "outline"}
              className="px-4 py-2 rounded-full whitespace-nowrap"
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="검색어를 입력하세요"
            className="pl-10"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>강남구 역삼동</span>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            전체보기
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            카페고리 보기 &gt;
          </Button>
        </div>

        {/* Featured Section */}
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">🏆 Kim's beauty 인증 작접한 업체 기업</h2>
        </div>

        {/* Salon Cards */}
        <div className="space-y-4">
          {salons.map((salon) => (
            <Card key={salon.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="flex gap-1">
                    {salon.images.map((image, index) => (
                      <div key={index} className="relative flex-1">
                        <img
                          src={image}
                          alt={`${salon.name} ${index + 1}`}
                          className="w-full h-32 object-cover"
                        />
                        {index === 1 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">Real Review</span>
                          </div>
                        )}
                        <Heart className="absolute top-2 right-2 h-5 w-5 text-white" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{salon.name}</h3>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm">3K</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{salon.location}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {salon.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        최대할인가 {salon.discount}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">업체명</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs">3명룩 2분</span>
                        </div>
                        <span className="text-xs">평점</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs">Rating 4.5점</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/lovable-uploads/273baab7-1f44-4f9b-9bbd-37fe1f8df4b0.png" 
                          alt="쿠폰" 
                          className="w-8 h-8 rounded"
                        />
                        <div>
                          <div className="text-xs text-muted-foreground">
                            관련 외복수치 표시+관련+보드안2stepte
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm line-through text-muted-foreground">
                              {salon.originalPrice}
                            </span>
                            <span className="text-sm font-semibold text-red-600">
                              {salon.discountPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{salon.rating_count}</div>
                        <div className="text-xs text-muted-foreground">
                          리뷰 만 별점/8S0 0
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-red-600 hover:bg-red-700">
                      최대할인혜택
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}