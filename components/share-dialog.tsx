"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Link2, X } from "lucide-react";
import Image from "next/image";

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareDialog({ isOpen, onClose }: ShareDialogProps) {
  const shareUrl = "https://lemon8.com";
  const shareTitle = "Check out Lemon8!";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleWhatsAppShare = () => {
    const url = `whatsapp://send?text=${encodeURIComponent(
      `${shareTitle} ${shareUrl}`
    )}`;
    window.open(url, "_blank");
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(url, "_blank");
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareTitle
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleLineShare = () => {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Send to</DialogTitle>
        </DialogHeader>
        <div className="flex justify-around py-4">
          <button
            onClick={handleCopyLink}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Link2 className="w-6 h-6" />
            </div>
            <span className="text-sm">Copy link</span>
          </button>

          <button
            onClick={handleFacebookShare}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm">Facebook</span>
          </button>

          <button
            onClick={handleTwitterShare}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <X className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm">X</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
