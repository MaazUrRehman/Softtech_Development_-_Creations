// app/portfolio/page.tsx
'use client';

import { useState } from 'react';
import Header from "../components/Header";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioCategories from "../components/PortfolioCategories";
import PortfolioShowcase from "../components/PortfolioShowcase";
import PortfolioStats from "../components/PortfolioStats";
import PortfolioProcess from "../components/PortfolioProcess";
import PortfolioTechnologies from "../components/PortfolioTechnologies";
import PortfolioServices from "../components/PortfolioServices";
import FooterSection from "../components/Footer";

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

  const projects: Project[] = [
    {
      id: 1,
      title: "Nexus Financial Platform",
      category: "web",
      description: "A comprehensive financial management platform with real-time analytics and reporting tools for enterprise clients.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
      color: "from-red-500 to-red-600",
      imageColor: "bg-gradient-to-br from-red-500/20 to-red-600/20",
      stats: { 
        clients: "+500", 
        growth: "45%", 
        satisfaction: "98%" 
      }
    },
    {
      id: 2,
      title: "UrbanFit Mobile App",
      category: "mobile",
      description: "Fitness tracking application with AI-powered workout recommendations, social features, and real-time progress tracking.",
      technologies: ["React Native", "Firebase", "GraphQL", "TensorFlow.js", "Redux"],
      color: "from-red-600 to-red-700",
      imageColor: "bg-gradient-to-br from-red-600/20 to-red-700/20",
      stats: { 
        downloads: "250K", 
        rating: "4.9", 
        active: "50K" 
      }
    },
    {
      id: 3,
      title: "LuxeStyle E-commerce",
      category: "ecommerce",
      description: "Premium fashion e-commerce platform with AR try-on features, personalized recommendations, and seamless checkout.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Three.js", "Tailwind CSS"],
      color: "from-red-700 to-red-800",
      imageColor: "bg-gradient-to-br from-red-700/20 to-red-800/20",
      stats: { 
        revenue: "$5M+", 
        conversion: "8.5%", 
        retention: "75%" 
      }
    },
    {
      id: 4,
      title: "MediCare Health Portal",
      category: "web",
      description: "Healthcare management system for clinics with appointment scheduling, patient records, and telemedicine integration.",
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Docker"],
      color: "from-red-800 to-red-900",
      imageColor: "bg-gradient-to-br from-red-800/20 to-red-900/20",
      stats: { 
        patients: "10K+", 
        efficiency: "60%", 
        accuracy: "99.5%" 
      }
    },
    {
      id: 5,
      title: "Bloom Brand Identity",
      category: "branding",
      description: "Complete brand identity system for a sustainable cosmetics company including logo, packaging, and digital presence.",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Blender", "After Effects"],
      color: "from-red-500 to-red-700",
      imageColor: "bg-gradient-to-br from-red-500/20 to-red-700/20",
      stats: { 
        recognition: "85%", 
        engagement: "3x", 
        sales: "+120%" 
      }
    },
    {
      id: 6,
      title: "LogiTrack Pro",
      category: "business",
      description: "Enterprise logistics and supply chain management solution with IoT integration and real-time tracking.",
      technologies: ["Angular", "Java", "Spring Boot", "Redis", "Kafka"],
      color: "from-red-600 to-red-800",
      imageColor: "bg-gradient-to-br from-red-600/20 to-red-800/20",
      stats: { 
        delivery: "95%", 
        cost: "-30%", 
        capacity: "2.5x" 
      }
    },
    {
      id: 7,
      title: "FoodieDelight App",
      category: "mobile",
      description: "Food delivery platform with real-time order tracking, personalized recommendations, and loyalty programs.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js", "MongoDB"],
      color: "from-red-500 to-red-600",
      imageColor: "bg-gradient-to-br from-red-500/20 to-red-600/20",
      stats: { 
        orders: "100K+", 
        rating: "4.8", 
        restaurants: "500+" 
      }
    },
    {
      id: 8,
      title: "EcoShop Marketplace",
      category: "ecommerce",
      description: "Sustainable products marketplace with eco-friendly filter, carbon footprint tracker, and blockchain verification.",
      technologies: ["Next.js", "Solidity", "Web3.js", "IPFS", "Tailwind CSS"],
      color: "from-red-600 to-red-700",
      imageColor: "bg-gradient-to-br from-red-600/20 to-red-700/20",
      stats: { 
        products: "10K+", 
        sellers: "500+", 
        impact: "CO2 -50%" 
      }
    }
  ];

  return (
    <>
      <Header />
      <PortfolioHero />
      <PortfolioCategories 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <PortfolioShowcase 
        selectedCategory={selectedCategory} 
        projects={projects} 
      />
      <PortfolioStats />
      <PortfolioProcess />
      <PortfolioTechnologies />
      <PortfolioServices />
      <FooterSection />
    </>
  );
}