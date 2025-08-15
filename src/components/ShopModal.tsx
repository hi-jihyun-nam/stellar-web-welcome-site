
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shop, MultiLanguageService, MultiLanguageContent } from '@/types/shop';

interface ShopModalProps {
  shop: Shop | null;
  currentLanguage: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (shop: Shop) => void;
}

const languages = [
  { id: 'KO', label: '한국어', code: 'ko' },
  { id: 'EN', label: '영어', code: 'en' },
  { id: 'JA', label: '일본어', code: 'ja' },
  { id: 'CN', label: '중국어', code: 'cn' }
];

export const ShopModal: React.FC<ShopModalProps> = ({
  shop,
  currentLanguage,
  isOpen,
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState<Shop>({
    id: '',
    name: { ko: '', en: '', ja: '', cn: '' },
    address: '',
    operatingTime: '',
    designer: '',
    languages: [],
    description: { ko: '', en: '', ja: '', cn: '' },
    services: [],
    isActive: true
  });

  useEffect(() => {
    if (shop) {
      setFormData(shop);
    }
  }, [shop]);

  const handleLanguageChange = (langId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      languages: checked 
        ? [...prev.languages, langId]
        : prev.languages.filter(l => l !== langId)
    }));
  };

  const handleMultiLanguageChange = (
    field: 'name' | 'description',
    language: string,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [language]: value
      }
    }));
  };

  const handleServiceChange = (index: number, field: 'name' | 'price', value: string | number, language?: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => {
        if (i === index) {
          if (field === 'name' && language) {
            return {
              ...service,
              name: {
                ...service.name,
                [language]: value as string
              }
            };
          } else if (field === 'price') {
            return { ...service, price: value as number };
          }
        }
        return service;
      })
    }));
  };

  const addService = () => {
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, { 
        name: { ko: '', en: '', ja: '', cn: '' }, 
        price: 0 
      }]
    }));
  };

  const removeService = (index: number) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>샵 정보 편집</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="ko" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ko">한국어</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="ja">日本語</TabsTrigger>
            <TabsTrigger value="cn">中文</TabsTrigger>
          </TabsList>

          {languages.map(lang => (
            <TabsContent key={lang.code} value={lang.code} className="space-y-4">
              <div>
                <Label htmlFor={`name-${lang.code}`}>샵명 ({lang.label})</Label>
                <Input
                  id={`name-${lang.code}`}
                  value={formData.name[lang.code as keyof MultiLanguageContent] || ''}
                  onChange={(e) => handleMultiLanguageChange('name', lang.code, e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor={`description-${lang.code}`}>소개글 ({lang.label})</Label>
                <Textarea
                  id={`description-${lang.code}`}
                  value={formData.description[lang.code as keyof MultiLanguageContent] || ''}
                  onChange={(e) => handleMultiLanguageChange('description', lang.code, e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label>시술 리스트 ({lang.label})</Label>
                <div className="space-y-2 mt-2">
                  {formData.services.map((service, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Input
                        placeholder={`시술명 (${lang.label})`}
                        value={service.name[lang.code as keyof MultiLanguageContent] || ''}
                        onChange={(e) => handleServiceChange(index, 'name', e.target.value, lang.code)}
                      />
                      {lang.code === 'ko' && (
                        <>
                          <Input
                            type="number"
                            placeholder="가격"
                            value={service.price}
                            onChange={(e) => handleServiceChange(index, 'price', parseInt(e.target.value) || 0)}
                          />
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeService(index)}
                          >
                            삭제
                          </Button>
                        </>
                      )}
                    </div>
                  ))}
                  {lang.code === 'ko' && (
                    <Button variant="outline" onClick={addService}>
                      시술 추가
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="space-y-4 border-t pt-4">
          <div>
            <Label htmlFor="address">주소</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="operatingTime">운영시간</Label>
            <Input
              id="operatingTime"
              value={formData.operatingTime}
              onChange={(e) => setFormData(prev => ({ ...prev, operatingTime: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="designer">디자이너</Label>
            <Input
              id="designer"
              value={formData.designer}
              onChange={(e) => setFormData(prev => ({ ...prev, designer: e.target.value }))}
            />
          </div>

          <div>
            <Label>고객 응대 가능 언어</Label>
            <div className="flex gap-4 mt-2">
              {languages.map(lang => (
                <div key={lang.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={lang.id}
                    checked={formData.languages.includes(lang.id)}
                    onCheckedChange={(checked) => handleLanguageChange(lang.id, checked as boolean)}
                  />
                  <Label htmlFor={lang.id}>{lang.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleSubmit}>
              저장
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
