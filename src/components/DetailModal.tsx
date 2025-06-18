
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  content
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
