'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Mock Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Top Benefits of a Research Coaching Program for Indian High Schoolers",
    excerpt: "Indian high school students face a huge competition in an academic environment where strong board scores and entrance exam ranks are only the first step.",
    category: "Research",
    date: "12 Dec 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    slug: "/blogs/benefits-of-research-coaching-for-indian-high-schoolers",
  },
  {
    id: 2,
    title: "How Expert Research Mentors Help Indian Students Stand Out in Global Admissions",
    excerpt: "Admissions teams now look beyond academic performance to find students who can think independently. Learn how research mentorship provides a structured pathway.",
    category: "Mentorship",
    date: "08 Jan 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "/blogs/research-mentors-global-admissions",
  },
  {
    id: 3,
    title: "Why Mentorship Is the Fastest Way to Succeed as a Student",
    excerpt: "Students today face a constant mix of academic expectations, career confusion, and competition that feels never-ending. Mentorship offers the fastest path to clarity and success.",
    category: "Mentorship",
    date: "16 Jan 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "/blogs/why-mentorship-is-the-fastest-way-to-succeed-as-a-student",
  },
  {
    id: 4,
    title: "STEM vs Non STEM: How to Decide What Fits You Best",
    excerpt: "Confused between STEM and non-STEM fields? Understand the key differences, career scope, required skills, and how to choose the path that matches your interests and goals.",
    category: "Mentorship",
    date: "16 Jan 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "/blogs/stem-vs-non-stem-how-to-decide",
  },
  {
    id: 5,
    title: "How to Discover Your Ideal Career Path Before College",
    excerpt: 'Learn how to identify your strengths, explore career options, and gain practical experience before college. Discover your ideal career path with expert guidance and personalized mentorship.',
    category: "Mentorship",
    date: "16 Jan 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "/blogs/how-to-discover-your-ideal-career-path-before-college",
  },{
    id: 6,
    title: "Code That Cares: Armilli | Student Project Spotlight",
    excerpt: 'Discover how a Career Discovery student built Armilli, an AI-assisted diagnosis and monitoring platform designed for early detection of animal health issues.',
    category: "Projects",
    date: " 14 Feb 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "/blogs/code_that_cares",
  },
  ,{
    id: 7,
    title: "Engineering Impact in Motion: Meteor 350 Crash Guard | Project Spotlight",
    excerpt: 'Discover how a Career Discovery student designed and developed a custom crash guard for the Royal Enfield Meteor 350, from CAD simulations to real-world fabrication.',
    category: "Projects",
    date: " 14 Feb 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "/blogs/crash_guard",
  },
]

const BlogCard = ({ post }) => {
  return (
    <Link href={post.slug} className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 uppercase tracking-wide">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Meta Data */}
        {/* <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div> */}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto">
          <span className="relative">
            Read Article
            <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default function BlogListing() {
  return (
    <div className="min-h-screen bg-blue-400 flex flex-col ">
      <Navigation />
      
      {/* FIX APPLIED: 
         1. Removed the outer <section> wrapper which was causing conflicting margins.
         2. Increased padding-top to 'pt-32' (approx 128px) or 'pt-40'. 
            This ensures content starts below the fixed Navigation bar.
         3. Added 'flex-grow' to ensure the footer is pushed to the bottom if content is short.
      */}
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          
          {/* Header Section (Uncomment if needed, it will now align correctly) */}
          {/* <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Career <span className="text-blue-600">Library</span>
            </h1>
          </div> 
          */}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mb-8 mx-auto">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}