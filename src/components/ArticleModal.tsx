'use client';

import React from 'react';
import { Article } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Tag, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}
