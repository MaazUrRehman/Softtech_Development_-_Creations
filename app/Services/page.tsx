'use client';

import Header from "../components/Header";
import { useState } from 'react';
import FooterSection from '../components/Footer';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import ServicesProcess from '../components/ServicesProcess';

export default function ServicesPage() {
  

  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <FooterSection />
    </>
  );
}







