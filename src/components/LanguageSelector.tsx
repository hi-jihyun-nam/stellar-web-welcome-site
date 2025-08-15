
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'cn', label: '中文' }
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="flex gap-2 mb-4">
      <span className="text-sm font-medium py-2">언어 선택:</span>
      {languages.map(lang => (
        <Button
          key={lang.code}
          variant={currentLanguage === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => onLanguageChange(lang.code)}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};
