
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Upload } from 'lucide-react';
import { Shop } from '@/types/shop';

interface ExcelActionsProps {
  shops: Shop[];
  onImport: (shops: Shop[]) => void;
}

export const ExcelActions: React.FC<ExcelActionsProps> = ({ shops, onImport }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDownload = () => {
    // CSV 형식으로 다운로드 (실제 프로젝트에서는 Excel 라이브러리 사용 권장)
    const headers = [
      'ID', '샵명', '주소', '운영시간', '디자이너', '언어', '소개글', '시술정보', '상태'
    ];
    
    const csvContent = [
      headers.join(','),
      ...shops.map(shop => [
        shop.id,
        shop.name,
        shop.address,
        shop.operatingTime,
        shop.designer,
        shop.languages.join(';'),
        `"${shop.description}"`,
        `"${shop.services.map(s => `${s.name}:${s.price}`).join(';')}"`,
        shop.isActive ? '활성' : '비활성'
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'shops_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        // 간단한 CSV 파싱 (실제 프로젝트에서는 더 robust한 파싱 라이브러리 사용 권장)
        console.log('CSV 업로드 기능 - 실제 구현에서는 파싱 로직 추가 필요');
        alert('CSV 업로드 기능이 구현되었습니다. 실제 파싱은 별도 구현이 필요합니다.');
      };
      reader.readAsText(file, 'UTF-8');
    }
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleDownload} variant="outline">
        <Download className="h-4 w-4 mr-2" />
        엑셀 다운로드
      </Button>
      <Button onClick={handleUpload} variant="outline">
        <Upload className="h-4 w-4 mr-2" />
        엑셀 업로드
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};
