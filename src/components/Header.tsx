import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="mu-container">
          <div className="flex items-center justify-end gap-6 py-3">
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              For Companies
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Jobs
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Events
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Become a Master
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mu-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow via-accent to-yellow/60 rounded-sm" />
            <div>
              <div className="text-white font-bold text-lg leading-tight">masters'</div>
              <div className="text-white font-bold text-lg leading-tight">union</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group">
              ABOUT US
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group">
              ACADEMICS
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors">
              CAREERS
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group">
              STUDENT LIFE
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group">
              INNOVATION
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors">
              FACULTY
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group">
              MU VENTURES
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              ABOUT US
            </a>
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              ACADEMICS
            </a>
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              CAREERS
            </a>
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              STUDENT LIFE
            </a>
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              INNOVATION
            </a>
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              FACULTY
            </a>
            <a href="#" className="block text-white hover:text-yellow transition-colors py-2">
              MU VENTURES
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
