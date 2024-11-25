"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed inset-0 bg-white z-50 flex flex-col"
        >
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-800 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow px-6 py-8 space-y-6">
            <Link
              href="/privacy-policy"
              className="text-gray-800 hover:text-gray-600 transition-colors text-lg"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-800 hover:text-gray-600 transition-colors text-lg"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookie-policy"
              className="text-gray-800 hover:text-gray-600 transition-colors text-lg"
            >
              Cookie Policy
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
