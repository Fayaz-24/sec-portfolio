import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Monitor, Star, GitBranch, Zap, Sparkles, Sun, Moon, Instagram, Database, Server, Globe, Shield, Cpu, Rocket, Brain, Bot, Clock, Users, Eye, Heart, TrendingUp, Lock, Wifi, CheckCircle, AlertCircle, Send } from 'lucide-react';
const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
     };
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);
  
  try {
    // 🔥 REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE FORM ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgvznzqn';
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Portfolio Contact from ${formData.name}`
      })
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      throw new Error('Failed to send email');
    }
    
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus(null), 5000);
  } finally {
    setIsSubmitting(false);
  }
  
};

  const skills = [
    { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500', neon: 'shadow-[0_0_30px_rgba(6,182,212,0.5)]' },
    { name: 'JavaScript (ES6+)', level: 92, color: 'from-yellow-400 to-orange-500', neon: 'shadow-[0_0_30px_rgba(251,191,36,0.5)]' },
    { name: 'TypeScript', level: 88, color: 'from-blue-400 to-indigo-600', neon: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]' },
    { name: 'Node.js & Express', level: 90, color: 'from-green-400 to-emerald-600', neon: 'shadow-[0_0_30px_rgba(34,197,94,0.5)]' },
    { name: 'MongoDB & Mongoose', level: 87, color: 'from-emerald-400 to-teal-600', neon: 'shadow-[0_0_30px_rgba(16,185,129,0.5)]' },
    { name: 'Next.js & SSR', level: 85, color: 'from-slate-400 to-gray-600', neon: 'shadow-[0_0_30px_rgba(148,163,184,0.5)]' },
    { name: 'Redux Toolkit & Zustand', level: 83, color: 'from-purple-400 to-pink-500', neon: 'shadow-[0_0_30px_rgba(168,85,247,0.5)]' },
    { name: 'Socket.io & WebRTC', level: 80, color: 'from-rose-400 to-red-500', neon: 'shadow-[0_0_30px_rgba(244,63,94,0.5)]' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Platform',
      description: 'Advanced MERN stack e-commerce with AI product recommendations, real-time chat support, blockchain payments, and advanced analytics dashboard. Features include ML-based inventory management and personalized shopping experiences.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Socket.io', 'Stripe', 'Redis', 'AWS S3'],
      role: 'Full Stack Lead Developer',
      github: 'https://github.com/fayaz-username/ai-ecommerce-platform',
      demo: 'https://ai-ecommerce-fayaz.vercel.app',
      image: 'from-cyan-400 via-blue-500 to-purple-600',
      stats: { stars: 156, forks: 42, views: 5200, users: '2.1K' },
      features: ['AI Recommendations', 'Real-time Chat', 'Blockchain Payments', 'Advanced Analytics'],
      techIcons: [Brain, Database, Shield, TrendingUp],
      glowColor: 'cyan',
      complexity: 'Advanced'
    },
    {
      id: 2,
      title: 'Real-Time Collaboration Suite',
      description: 'Google Workspace alternative with real-time document editing, video conferencing, project management, and team communication. Built with microservices architecture and WebRTC for seamless collaboration.',
      technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      role: 'Senior Full Stack Developer',
      github: 'https://github.com/fayaz-username/collaboration-suite',
      demo: 'https://collab-suite-fayaz.netlify.app',
      image: 'from-emerald-400 via-teal-500 to-cyan-600',
      stats: { stars: 234, forks: 67, views: 8100, users: '3.4K' },
      features: ['Real-time Editing', 'Video Conferencing', 'Project Management', 'Team Chat'],
      techIcons: [Users, Wifi, Clock, Globe],
      glowColor: 'emerald',
      complexity: 'Expert'
    },
    {
      id: 3,
      title: 'Cryptocurrency Trading Bot',
      description: 'Intelligent trading bot with machine learning algorithms, sentiment analysis, technical indicators, and portfolio optimization. Features automated trading strategies and comprehensive risk management.',
      technologies: ['Python', 'React', 'FastAPI', 'TensorFlow', 'WebSocket', 'PostgreSQL', 'Celery', 'Docker'],
      role: 'ML Engineer & Full Stack Developer',
      github: 'https://github.com/fayaz-username/crypto-trading-bot',
      demo: 'https://crypto-bot-fayaz.herokuapp.com',
      image: 'from-yellow-400 via-orange-500 to-red-600',
      stats: { stars: 312, forks: 89, views: 12500, users: '1.8K' },
      features: ['ML Algorithms', 'Sentiment Analysis', 'Auto Trading', 'Risk Management'],
      techIcons: [Bot, TrendingUp, Brain, Shield],
      glowColor: 'yellow',
      complexity: 'Expert'
    }
  ];

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`group fixed top-6 right-6 z-50 p-4 rounded-full transition-all duration-500 transform hover:scale-110 ${
        isDarkMode 
          ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 text-gray-300 hover:text-white shadow-lg hover:shadow-cyan-500/25' 
          : 'bg-white/50 backdrop-blur-sm border border-gray-300/50 hover:border-blue-500/50 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-blue-500/25'
      }`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          size={24} 
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          } group-hover:rotate-12`} 
        />
        <Moon 
          size={24} 
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          } group-hover:-rotate-12`} 
        />
      </div>
      <div className={`absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDarkMode ? 'bg-cyan-500/25' : 'bg-blue-500/25'
      }`}></div>
    </button>
  );

  const SkillBar = ({ skill, index }) => (
    <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex justify-between mb-3">
        <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold text-lg flex items-center gap-2`}>
          <Sparkles size={16} className="text-cyan-400 animate-pulse" />
          {skill.name}
        </span>
        <span className="text-cyan-400 font-bold text-lg animate-pulse">{skill.level}%</span>
      </div>
      <div className={`relative w-full ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded-full h-4 overflow-hidden border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden ${skill.neon}`}
          style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/40 to-transparent animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 animate-pulse" style={{ animationDuration: '2s' }}></div>
          
          {/* Neon glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50 animate-pulse`}></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-md opacity-30 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const getGlowClass = (color) => {
      const glowMap = {
        cyan: 'shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_rgba(6,182,212,0.5)]',
        emerald: 'shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.5)]',
        yellow: 'shadow-[0_0_50px_rgba(251,191,36,0.3)] hover:shadow-[0_0_80px_rgba(251,191,36,0.5)]',
        purple: 'shadow-[0_0_50px_rgba(168,85,247,0.3)] hover:shadow-[0_0_80px_rgba(168,85,247,0.5)]',
        indigo: 'shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:shadow-[0_0_80px_rgba(99,102,241,0.5)]',
        green: 'shadow-[0_0_50px_rgba(34,197,94,0.3)] hover:shadow-[0_0_80px_rgba(34,197,94,0.5)]'
      };
      return glowMap[color] || glowMap.cyan;
    };

    return (
      <div 
        className={`group relative ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-6 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} ${getGlowClass(project.glowColor)}`} 
        style={{ transitionDelay: `${index * 200}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        
        {/* Complexity Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
            project.complexity === 'Expert' 
              ? 'bg-red-500/20 border-red-500/50 text-red-300' 
              : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300'
          } animate-pulse`}>
            {project.complexity}
          </div>
        </div>
        
        <div className={`h-64 relative overflow-hidden bg-gradient-to-br ${project.image}`}>
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/40 group-hover:bg-black/20' : 'bg-white/40 group-hover:bg-white/20'} transition-all duration-500`} />
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-white/60 to-transparent'}`} />
          
          {/* Floating particles animation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${i * 0.2}s`,
                  animation: `float 3s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
          </div>
          
          {/* Stats in header */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <div className={`${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-yellow-500/50 hover:border-yellow-400 transition-colors animate-pulse`}>
              <Star size={14} className="text-yellow-400" />
              <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.stats.stars}</span>
            </div>
            <div className={`${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-cyan-500/50 hover:border-cyan-400 transition-colors animate-bounce`}>
              <GitBranch size={14} className="text-cyan-400" />
              <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.stats.forks}</span>
            </div>
            <div className={`${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-green-500/50 hover:border-green-400 transition-colors`}>
              <Eye size={14} className="text-green-400 animate-pulse" />
              <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.stats.views}</span>
            </div>
          </div>
          
          {/* Tech icons floating animation */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {project.techIcons.map((Icon, iconIndex) => (
              <div 
                key={iconIndex}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center group-hover:animate-bounce transition-all duration-500"
                style={{ animationDelay: `${iconIndex * 0.1}s` }}
              >
                <Icon className="text-cyan-400" size={16} />
              </div>
            ))}
          </div>
          
          {/* Scanning line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
               style={{ animation: isHovered ? 'scan 2s linear infinite' : 'none' }}></div>
        </div>
        
        <div className="p-6 relative">
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500 flex items-center gap-2`}>
            {project.title}
            <Sparkles size={20} className="text-cyan-400 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" />
          </h3>
          
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed group-hover:${isDarkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
            {project.description}
          </p>
          
          {/* Features showcase */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-cyan-400 mb-2 animate-pulse">Key Features:</p>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-semibold text-cyan-400 mb-3 animate-pulse">
              Role: <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-normal`}>{project.role}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-default animate-pulse"
                  style={{ animationDelay: `${techIndex * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Enhanced buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              className={`group/btn relative flex items-center gap-2 ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-gray-200/50 hover:bg-gray-300/50'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-4 py-3 rounded-xl transition-all duration-300 flex-1 justify-center border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'} hover:shadow-lg hover:shadow-gray-500/25 overflow-hidden backdrop-blur-sm hover:scale-105`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              <Github size={16} className="relative z-10 group-hover/btn:rotate-12 transition-transform" />
              <span className="relative z-10 font-semibold">Source</span>
            </a>
            <a
              href={project.demo}
              className="group/btn relative flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-3 rounded-xl transition-all duration-300 flex-1 justify-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              <Rocket size={16} className="relative z-10 group-hover/btn:rotate-45 transition-transform" />
              <span className="relative z-10 font-semibold">Live Demo</span>
            </a>
          </div>
          
          {/* User count indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Users size={14} className="animate-pulse" />
            <span>{project.stats.users} active users</span>
          </div>
        </div>
        
        {/* Floating glow orbs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/50 rounded-full blur-sm animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-pink-400/40 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'} relative transition-all duration-500 overflow-x-hidden`}>
      <ThemeToggle />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]'} bg-[size:50px_50px] animate-pulse`}></div>
        
        {/* Mouse follower with enhanced neon effect */}
        <div 
          className="absolute w-96 h-96 rounded-full mix-blend-screen filter blur-3xl transition-all duration-300 ease-out animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: isDarkMode 
              ? 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(147,51,234,0.3) 30%, rgba(236,72,153,0.2) 60%, rgba(251,191,36,0.1) 100%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 30%, rgba(236,72,153,0.15) 60%, rgba(251,191,36,0.1) 100%)'
          }}
        />
        
        {/* Multiple floating orbs with different animations */}
        <div className={`absolute top-20 left-20 w-72 h-72 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15' : 'bg-gradient-to-r from-cyan-500/8 to-blue-500/8'} rounded-full mix-blend-screen filter blur-2xl animate-pulse`} style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className={`absolute top-40 right-20 w-96 h-96 ${isDarkMode ? 'bg-gradient-to-r from-purple-500/15 to-pink-500/15' : 'bg-gradient-to-r from-purple-500/8 to-pink-500/8'} rounded-full mix-blend-screen filter blur-2xl animate-pulse`} style={{ animation: 'float 10s ease-in-out infinite reverse' }}></div>
        <div className={`absolute bottom-20 left-1/3 w-80 h-80 ${isDarkMode ? 'bg-gradient-to-r from-emerald-500/15 to-teal-500/15' : 'bg-gradient-to-r from-emerald-500/8 to-teal-500/8'} rounded-full mix-blend-screen filter blur-2xl animate-pulse`} style={{ animation: 'float 12s ease-in-out infinite' }}></div>
        <div className={`absolute top-1/2 right-1/3 w-64 h-64 ${isDarkMode ? 'bg-gradient-to-r from-yellow-500/15 to-orange-500/15' : 'bg-gradient-to-r from-yellow-500/8 to-orange-500/8'} rounded-full mix-blend-screen filter blur-2xl animate-pulse`} style={{ animation: 'float 9s ease-in-out infinite reverse' }}></div>
        
        {/* Scanning lines */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent' : 'bg-gradient-to-b from-transparent via-blue-500/3 to-transparent'}`} style={{ animation: 'scan 6s linear infinite' }}></div>
        
        {/* Enhanced stars with twinkling */}
        {isDarkMode && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center mb-12">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse relative">
              <span className="inline-block animate-bounce">&lt;</span>
              WELLCOME TO MY PORTFOLIO
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>/</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>&gt;</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
            </div>
          </nav>

          <div className="text-center">
            {/* Enhanced Profile Picture with multiple glow layers */}
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-cyan-500/50 animate-pulse group-hover:animate-spin transition-all duration-1000 relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    F
                  </div>
                </div>
              </div>
              
              {/* Multiple glow layers for enhanced neon effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-2xl opacity-25 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              
              
              {/* Orbiting elements with enhanced animations */}
              <div className="absolute inset-0" style={{ animation: 'spin 20s linear infinite' }}>
                <div className="absolute -top-6 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-6 left-1/2 w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} relative`}>
                Hello, I'm Fayaz
                <div className={`absolute inset-0 ${isDarkMode ? 'text-white' : 'text-gray-900'} blur-sm opacity-50 -z-10`}></div>
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block">
                <span className="relative z-10">I'm Fayaz!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Full Stack Developer
            </h2>
            
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Specialized in <span className="text-purple-400 font-semibold animate-pulse">MERN Stack</span> development.
              I craft exceptional digital experiences using 
              <span className="text-cyan-400 font-semibold animate-pulse"> MongoDB, Express.js, React, and Node.js</span>.
              Passionate about creating scalable, user-friendly applications that solve real-world problems.
            </p>
            
            <div className={`flex flex-wrap justify-center gap-4 mt-10 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="#contact"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 shadow-lg shadow-cyan-600/50 hover:shadow-cyan-500/50 overflow-hidden font-bold text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Download Resume</span>
              </a>
              <a
                href="#projects"
                className={`group relative flex items-center gap-3 ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'} shadow-lg shadow-gray-800/50 hover:shadow-gray-600/50 overflow-hidden backdrop-blur-sm font-bold text-lg`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">View My Work</span>
              </a>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="https://github.com/fayaz-24"
                className={`group relative flex items-center gap-3 ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-6 py-3 rounded-full transition-all duration-500 hover:scale-110 border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'} shadow-lg shadow-gray-800/50 hover:shadow-gray-600/50 overflow-hidden backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Github size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 font-bold">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fayaz024"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-full transition-all duration-500 hover:scale-110 shadow-lg shadow-blue-600/50 hover:shadow-blue-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Linkedin size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 font-bold">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/fayaz_crush._"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-500 hover:scale-110 shadow-lg shadow-pink-600/50 hover:shadow-pink-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Instagram size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                About Me
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-16 rounded-full animate-pulse"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Journey</h3>
                  </div>
                  <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed relative z-10`}>
                    <p>
                      As a passionate Full Stack Developer specializing in the 
                      <span className="text-cyan-400 font-semibold animate-pulse"> MERN Stack</span>, 
                      I create exceptional digital experiences using 
                      <span className="text-purple-400 font-semibold animate-pulse"> MongoDB, Express.js, React, and Node.js</span>.
                    </p>
                    <p>
                      I craft <span className="text-emerald-400 font-semibold animate-pulse">scalable</span>, 
                      <span className="text-yellow-400 font-semibold animate-pulse"> user-friendly</span> applications 
                      that solve real-world problems. My passion lies in creating 
                      <span className="text-pink-400 font-semibold animate-pulse"> innovative solutions</span> 
                      that bridge the gap between technology and human needs.
                    </p>
                    <p>
                      Currently seeking opportunities to contribute to 
                      <span className="text-cyan-400 font-semibold animate-pulse">meaningful projects</span> while continuing to grow as a developer.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-cyan-600/20 to-purple-600/20' : 'from-cyan-600/10 to-purple-600/10'} backdrop-blur-sm rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20`}>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center gap-2">
                    <Sparkles className="animate-spin" size={24} />
                    Quick Facts
                  </h3>
                  <div className="space-y-6">
                    {[
                      { icon: Code, title: '4+ Years', subtitle: 'MERN Experience', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
                      { icon: Monitor, title: '50+ Projects', subtitle: 'Completed', color: 'text-purple-400', bg: 'bg-purple-500/20' },
                      { icon: Smartphone, title: 'Full-Stack', subtitle: 'Expertise', color: 'text-pink-400', bg: 'bg-pink-500/20' }
                    ].map((fact, index) => (
                      <div key={index} className="flex items-center gap-4 group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-white/5">
                        <div className={`p-3 rounded-full ${fact.bg} backdrop-blur-sm ${fact.color} group-hover:animate-pulse border border-current/30`}>
                          <fact.icon size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{fact.title}</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{fact.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`bg-gradient-to-br ${isDarkMode ? 'from-emerald-600/20 to-teal-600/20' : 'from-emerald-600/10 to-teal-600/10'} backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group relative`}>
                    <div className="text-3xl font-bold text-emerald-400 mb-2 animate-pulse group-hover:animate-bounce">100%</div>
                    <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Dedication</div>
                    <div className="absolute inset-0 bg-emerald-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`bg-gradient-to-br ${isDarkMode ? 'from-yellow-600/20 to-orange-600/20' : 'from-yellow-600/10 to-orange-600/10'} backdrop-blur-sm rounded-xl p-6 text-center border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group relative`}>
                    <div className="text-3xl font-bold text-yellow-400 mb-2 animate-pulse group-hover:animate-bounce">24/7</div>
                    <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Innovation</div>
                    <div className="absolute inset-0 bg-yellow-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Technical Skills
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-16 rounded-full animate-pulse"></div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]`}>
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' : 'bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-pink-500/3'}`} style={{ animation: 'float 10s ease-in-out infinite' }}></div>
                
                <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center gap-3 relative z-10`}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
                    <Code className="text-white" size={20} />
                  </div>
                  MERN Stack Technologies
                </h3>
                <div className="relative z-10">
                  {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-600/10 to-purple-600/10'} backdrop-blur-sm rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 relative z-10">Core Competencies</h3>
                  <div className="space-y-3 relative z-10">
                    {[
                      'Full Stack Architecture',
                      'RESTful API Development',
                      'Database Design (MongoDB)',
                      'Authentication & Authorization',
                      'Real-time Applications',
                      'Cloud Deployment & DevOps'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping"></div>
                        <span className="group-hover:text-blue-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-green-600/20 to-teal-600/20' : 'from-green-600/10 to-teal-600/10'} backdrop-blur-sm rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-green-300 relative z-10">Development Tools</h3>
                  <div className="space-y-3 relative z-10">
                    {[
                      'VS Code & Extensions',
                      'Git & GitHub Advanced',
                      'Docker & Kubernetes',
                      'AWS & Cloud Services',
                      'Testing Frameworks',
                      'CI/CD Pipelines'
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-ping"></div>
                        <span className="group-hover:text-green-300 transition-colors">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Featured Projects
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 animate-pulse"></div>
            <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-16 max-w-3xl mx-auto text-lg leading-relaxed`}>
              Showcase of advanced MERN Stack applications with 
              <span className="text-cyan-400 font-semibold animate-pulse">AI integration</span>, 
              <span className="text-purple-400 font-semibold animate-pulse">real-time features</span>, and 
              <span className="text-emerald-400 font-semibold animate-pulse">cutting-edge technologies</span>.
            </p>
            
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            
            {/* Additional Project Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Code, label: 'Total Projects', value: '50+', color: 'cyan' },
                { icon: Users, label: 'Active Users', value: '15K+', color: 'purple' },
                { icon: Star, label: 'GitHub Stars', value: '1.2K+', color: 'yellow' },
                { icon: Globe, label: 'Live Deployments', value: '25+', color: 'green' }
              ].map((stat, index) => (
                <div key={index} className={`text-center group hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-6 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/10 to-${stat.color}-600/10 rounded-2xl animate-pulse`}></div>
                  </div>
                  <stat.icon className={`mx-auto mb-4 text-${stat.color}-400 animate-pulse`} size={32} />
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-${stat.color}-400 transition-colors`}>{stat.value}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                  Inbox is Open — Let’s Build!
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 rounded-full animate-pulse"></div>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-3xl mx-auto leading-relaxed`}>
                Ready to collaborate on <span className="text-cyan-400 font-semibold animate-pulse">innovative projects</span>? 
                Let's connect and create <span className="text-purple-400 font-semibold animate-pulse">extraordinary digital experiences</span> together!
              </p>
            </div>
            
            {/* Contact Form Card */}
            <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-3xl p-8 md:p-12 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden`}>
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Form Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse shadow-lg shadow-cyan-500/25">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Message
                </h3>
              </div>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Success/Error Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-2xl border flex items-center gap-3 animate-pulse ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 border-green-500/50 text-green-300' 
                      : 'bg-red-500/20 border-red-500/50 text-red-300'
                  }`}>
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span>Failed to send message. Please try again or contact me directly.</span>
                      </>
                    )}
                  </div>
                )}
                
                {/* Name Input */}
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full p-5 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-100/60'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-lg group-hover:border-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Email Input */}
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={`w-full p-5 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-100/60'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-lg group-hover:border-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Message Textarea */}
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="6"
                    className={`w-full p-5 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-100/60'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-lg resize-none group-hover:border-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed`}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white p-5 rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 overflow-hidden font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        Send Message
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Let's Build Something Amazing
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 animate-pulse"></div>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-16 max-w-3xl mx-auto leading-relaxed`}>
              Ready to collaborate on <span className="text-cyan-400 font-semibold animate-pulse">innovative projects</span>? 
              Let's connect and create <span className="text-purple-400 font-semibold animate-pulse">extraordinary digital experiences</span> together!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  href: "fayazfai987@gmail.com",
                  icon: Mail,
                  title: "Email",
                  subtitle: "For queries ",
                  gradient: "from-red-500 to-pink-500",
                  shadow: "shadow-red-500/25",
                  hoverShadow: "hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]"
                },
                {
                  href: "https://www.linkedin.com/in/fayaz024",
                  icon: Linkedin,
                  title: "LinkedIn",
                  subtitle: "Professional Network",
                  gradient: "from-blue-600 to-blue-800",
                  shadow: "shadow-blue-500/25",
                  hoverShadow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                },
                {
                  href: "https://github.com/Fayaz-24",
                  icon: Github,
                  title: "GitHub",
                  subtitle: "Code Repository",
                  gradient: "from-gray-700 to-gray-900",
                  shadow: "shadow-gray-500/25",
                  hoverShadow: "hover:shadow-[0_0_50px_rgba(107,114,128,0.4)]"
                },
                {
                  href: "https://instagram.com/fayaz_crush._",
                  icon: Instagram,
                  title: "Instagram",
                  subtitle: "Creative Journey",
                  gradient: "from-pink-500 to-purple-600",
                  shadow: "shadow-pink-500/25",
                  hoverShadow: "hover:shadow-[0_0_50px_rgba(236,72,153,0.4)]"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`group relative ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} overflow-hidden ${contact.hoverShadow}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 -z-10`}></div>
                  
                  {/* Floating particles animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${contact.shadow} group-hover:animate-pulse relative z-10`}>
                    <contact.icon className="text-white" size={32} />
                    
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500 relative z-10`}>
                    {contact.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:${isDarkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300 text-lg relative z-10`}>
                    {contact.subtitle}
                  </p>
                  
                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-500"></div>
                </a>
              ))}
            </div>
            
            {/* Call to Action Section */}
            <div className={`mt-16 p-8 bg-gradient-to-r ${isDarkMode ? 'from-cyan-600/10 via-purple-600/10 to-pink-600/10' : 'from-cyan-600/5 via-purple-600/5 to-pink-600/5'} backdrop-blur-sm rounded-2xl border border-cyan-500/20 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 relative z-10`}>
                Ready to Collaborate?
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 text-lg relative z-10`}>
                Let's transform your ideas into cutting-edge digital solutions!
              </p>
              
              {/* Animated call-to-action buttons */}
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <button className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 overflow-hidden font-bold text-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Rocket size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Start a Project</span>
                </button>
                
                <button className={`group relative flex items-center gap-3 ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'} shadow-lg backdrop-blur-sm font-bold text-lg overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Mail size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Get in Touch</span>
                </button>
              </div>
              
              {/* Bouncing indicators */}
              <div className="flex justify-center gap-4 mt-8 relative z-10">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-gray-700/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Fayaz
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
              Building the future, one line of code at a time.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              {[
                { icon: Github, href: "https://github.com/Fayaz-24", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/fayaz024", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/fayaz_crush._", label: "Instagram" },
                { icon: Mail, href: "fayazfai987@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} hover:border-cyan-500/50`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`} />
                </a>
              ))}
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2024 Fayaz. Crafted with ?? and lots of ?
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
