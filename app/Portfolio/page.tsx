// app/portfolio/page.tsx
'use client';

import { useState } from 'react';
import Header from "../components/Header";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioProcess from "../components/PortfolioProcess";
import FooterSection from "../components/Footer";
import PortfolioSection from '../components/Portfolio';
import TechnologiesSection from '../components/Technologies';

// Define the Project type to match the interface
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
  imageColor: string;
  stats: { [key: string]: string };
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  

  return (
    <>
      <Header />
      <PortfolioHero />
      <PortfolioProcess />
      <PortfolioSection />
      <TechnologiesSection />
      <FooterSection />
    </>
  );
}