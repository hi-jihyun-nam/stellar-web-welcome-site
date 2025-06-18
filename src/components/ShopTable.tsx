
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { Shop, MultiLanguageContent } from '@/types/shop';
import { DetailModal } from './DetailModal';

interface ShopTableProps {
  shops: Shop[];
  currentLanguage: string;
  onEdit: (shop: Shop) => void;
  onToggleStatus: (shopId: string) => void;
}

export const ShopTable: React.FC<ShopTableProps> = ({ 
  shops, 
  currentLanguage,
  onEdit, 
  onToggleStatus 
}) => {
  const [detailModal, setDetailModal] = useState<{
    isOpen: boolean;
    content: string;
    title: string;
  }>({
    isOpen: false,
    content: '',
    title: ''
  });

  const truncateText = (text: string, maxLength: number = 30) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const getLocalizedText = (content: MultiLanguageContent): string => {
    return content[currentLanguage as keyof MultiLanguageContent] || content.ko || '';
  };

  const formatServices = (services: any[]) => {
    return services.map(s => {
      const serviceName = getLocalizedText(s.name);
      return `${serviceName} ${s.price.toLocaleString()}원`;
    }).join(', ');
  };

  const handleDetailClick = (content: string, title: string) => {
    setDetailModal({
      isOpen: true,
      content,
      title
    });
  };

  return (
    <>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">샵명</TableHead>
              <TableHead className="font-semibold">주소</TableHead>
              <TableHead className="font-semibold">운영시간</TableHead>
              <TableHead className="font-semibold">디자이너</TableHead>
              <TableHead className="font-semibold">고객 응대 가능 언어</TableHead>
              <TableHead className="font-semibold">소개글</TableHead>
              <TableHead className="font-semibold">시술 리스트/가격</TableHead>
              <TableHead className="font-semibold">상태</TableHead>
              <TableHead className="font-semibold">편집</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shops.map((shop) => {
              const shopName = getLocalizedText(shop.name);
              const description = getLocalizedText(shop.description);
              const servicesText = formatServices(shop.services);

              return (
                <TableRow key={shop.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{shopName}</TableCell>
                  <TableCell>{shop.address}</TableCell>
                  <TableCell>{shop.operatingTime}</TableCell>
                  <TableCell>{shop.designer}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {shop.languages.map(lang => (
                        <span key={lang} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => handleDetailClick(description, '소개글')}
                      className="text-left hover:text-blue-600 cursor-pointer"
                    >
                      {truncateText(description)}
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => handleDetailClick(servicesText, '시술 리스트/가격')}
                      className="text-left hover:text-blue-600 cursor-pointer"
                    >
                      {truncateText(servicesText)}
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => onToggleStatus(shop.id)}
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      {shop.isActive ? '✅' : '⛔'}
                    </button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(shop)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <DetailModal
        isOpen={detailModal.isOpen}
        onClose={() => setDetailModal({ ...detailModal, isOpen: false })}
        title={detailModal.title}
        content={detailModal.content}
      />
    </>
  );
};
