import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToWaitlist } from '../supabase/waitlist';
import FadeIn from '../components/FadeIn';
import SuccessAnimation from '../components/SuccessAnimation';

const Home = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Hero form state
  const [heroEmail, setHeroEmail] = useState('');
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroMessage, setHeroMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // CTA form state
  const [ctaName, setCtaName] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaMessage, setCtaMessage] = useState('');
  const [ctaLoading, setCtaLoading] = useState(false);
  const [ctaFeedback, setCtaFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Handle hero form submission
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroEmail.trim()) return;
    
    setHeroLoading(true);
    setHeroMessage(null);
    
    const result = await addToWaitlist({ email: heroEmail, source: 'hero' });
    
    setHeroMessage({ type: result.success ? 'success' : 'error', text: result.message });
    setHeroLoading(false);
    
    if (result.success) {
      setHeroEmail('');
      setShowSuccess(true);
    }
  };

  // Handle CTA form submission
  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaEmail.trim()) return;
    
    setCtaLoading(true);
    setCtaFeedback(null);
    
    const result = await addToWaitlist({
      email: ctaEmail,
      name: ctaName || undefined,
      message: ctaMessage || undefined,
      source: 'cta'
    });
    
    setCtaFeedback({ type: result.success ? 'success' : 'error', text: result.message });
    setCtaLoading(false);
    
    if (result.success) {
      setCtaName('');
      setCtaEmail('');
      setCtaMessage('');
      setShowSuccess(true);
    }
  };
  return (
    <div className="bg-background-light font-body">
      {/* Success Animation */}
      <SuccessAnimation show={showSuccess} onComplete={() => setShowSuccess(false)} />
      {/* Waitlist Hero Section */}
      <section id="waitlist" className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        {/* Orange splash on left side */}
        <div className="absolute top-1/4 left-0 -ml-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-secondary/15 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Coming Soon to Ghana
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-darkblue mb-6 leading-tight">
                Smarter Exam <br />
                Preparation, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Powered by AI</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Master WASSCE, BECE, and more with Eukora. Personalized learning paths, instant feedback, and gamified quizzes designed for African students.
              </p>

              {/* Waitlist Form */}
              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 mb-4 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm"
                  required
                />
                <button 
                  type="submit"
                  disabled={heroLoading}
                  className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {heroLoading ? (
                    <>
                      <span className="spinner"></span>
                      <span>Joining...</span>
                    </>
                  ) : 'Join Waitlist'}
                </button>
              </form>
              {heroMessage && (
                <p className={`text-sm mb-2 ${heroMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                  {heroMessage.text}
                </p>
              )}

              {/* Premium Note */}
              <p className="text-sm text-slate-500 flex items-center gap-2 justify-center lg:justify-start">
                <span className="material-icons-round text-primary text-lg">check_circle</span>
                First 500 students get premium access for free.
              </p>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="lg:w-1/2 relative">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>

              {/* Daily Challenge Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 mb-4 relative">
                {/* Lightbulb Icon */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-icons-round text-white text-xl">lightbulb</span>
                </div>
                <div className="text-center pt-4">
                  <h3 className="font-bold text-darkblue text-lg mb-1">Daily Challenge</h3>
                  <p className="text-slate-500 text-sm">Complete today's physics quiz to earn a streak!</p>
                </div>
              </div>

              {/* Streak Badge - Floating */}
              <div className="hidden sm:flex absolute top-16 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2 items-center gap-2 z-20">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-icons-round text-secondary text-sm">local_fire_department</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Streak</div>
                  <div className="font-bold text-darkblue text-sm">12 Days 🔥</div>
                </div>
              </div>

              {/* Quiz Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:ml-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-primary uppercase">Physics • WASSCE</span>
                  <span className="text-xs text-slate-400">5 Questions</span>
                </div>
                <p className="text-darkblue font-medium mb-4">Which of the following is the unit of electric charge?</p>
                
                {/* Answer Options */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                    <span className="text-slate-600">Ampere</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-primary bg-primary/5">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-icons-round text-white text-sm">check</span>
                    </div>
                    <span className="text-primary font-medium">Coulomb</span>
                    <span className="material-icons-round text-primary ml-auto">check_circle</span>
                  </div>
                </div>

                {/* Students Learning */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white"></div>
                    </div>
                    <span className="text-xs text-slate-500 ml-2">+42</span>
                  </div>
                  <span className="text-xs text-slate-400">Students learning now</span>
                </div>
              </div>

              {/* AI Tutor Badge - Floating */}
              <div className="hidden sm:flex absolute bottom-4 -right-2 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2 items-center gap-2 z-20">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="material-icons-round text-white text-sm">smart_toy</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">AI Tutor</div>
                  <div className="font-bold text-primary text-sm">Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Hero Section - Master Your Exams */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        {/* Additional small splashes */}
        <div className="absolute top-1/3 left-5 w-24 h-24 bg-secondary/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-primary/15 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          {/* Badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6 tracking-wide uppercase">
            Revolutionizing Education in Africa
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold text-darkblue mb-6 leading-tight">
            Master Your Exams with <br className="hidden sm:block" />
            <span className="text-primary">
              AI-Powered
            </span>{' '}
            Learning
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eukora helps Ghanaian students prepare for BECE, WASSCE and more
            with personalized AI tutoring and comprehensive past questions.
          </p>
        </div>
      </section>

      {/* What Eukora Does Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Subtle splashes */}
        <div className="absolute top-10 left-0 -ml-16 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 -mr-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-darkblue mb-4">
                What Eukora Does
              </h2>
              <div className="w-24 h-1.5 bg-secondary rounded-full mx-auto"></div>
              <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                We bridge the gap between traditional learning and modern technology to
                ensure every student succeeds.
              </p>
            </div>
          </FadeIn>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 - AI Tutor */}
            <FadeIn delay={100}>
              <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <span className="material-icons-round text-3xl">psychology</span>
                </div>
                <h3 className="text-xl font-display font-bold text-darkblue mb-3 group-hover:text-primary transition-colors">
                  Personalized AI Tutor
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Our AI analyzes your strengths and weaknesses to create a custom study
                  plan, acting as a personal tutor available 24/7.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 - Exam Prep */}
            <FadeIn delay={200}>
              <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                  <span className="material-icons-round text-3xl">school</span>
                </div>
                <h3 className="text-xl font-display font-bold text-darkblue mb-3 group-hover:text-secondary transition-colors">
                  Exam Focused Prep
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Tailored specifically for WASSCE syllabuses. Access thousands of past
                  questions with detailed AI-generated explanations.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 - Progress Tracking */}
            <FadeIn delay={300}>
              <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                  <span className="material-icons-round text-3xl">trending_up</span>
                </div>
                <h3 className="text-xl font-display font-bold text-darkblue mb-3 group-hover:text-blue-500 transition-colors">
                  Smart Progress Tracking
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Visualize your improvement over time with detailed analytics. Know exactly
                  which topics you've mastered and where to focus next.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Learning Ecosystem Section */}
      <section className="py-20 lg:py-28 overflow-hidden relative">
        {/* Subtle splashes */}
        <div className="absolute top-20 right-0 -mr-10 w-28 h-28 bg-secondary/12 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-0 -ml-10 w-24 h-24 bg-primary/12 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-darkblue/8 rounded-full blur-xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <span className="material-icons-round text-sm">stars</span>
                ALL-IN-ONE SOLUTION
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-darkblue mb-6 leading-tight">
                Your Complete <br /> Learning Ecosystem
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Stop juggling multiple books and websites. Eukora brings everything you
                need to ace your exams into one intuitive dashboard.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons-round">topic</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-darkblue mb-2">Topic-Based Learning</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Learn systematically topic by topic. Our content is structured to align
                      perfectly with your school curriculum.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-icons-round">quiz</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-darkblue mb-2">Interactive Past Questions</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Practice with real past questions from WAEC & BECE. Get instant feedback
                      and understand the 'why' behind every answer.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <span className="material-icons-round">emoji_events</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-darkblue mb-2">Gamified Experience</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Earn badges, climb leaderboards, and keep your streak alive. Learning is
                      more effective when it's fun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explore Link */}
              <div className="mt-10">
                <Link
                  to="/features"
                  className="inline-flex items-center text-primary font-bold hover:text-teal-700 transition-colors group"
                >
                  Explore all features
                  <span className="material-icons-round ml-2 transform group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="lg:w-1/2 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
              
              {/* Dashboard Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Browser Bar */}
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 h-2 w-32 bg-slate-300 rounded-full"></div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8 grid grid-cols-2 gap-6">
                  {/* Physics Score */}
                  <div className="bg-background-light p-4 rounded-xl">
                    <div className="text-xs text-slate-500 font-bold uppercase mb-2">Physics Score</div>
                    <div className="text-3xl font-display font-bold text-darkblue">85%</div>
                    <div className="text-xs text-green-500 mt-1 flex items-center">
                      <span className="material-icons-round text-sm mr-1">arrow_upward</span> +12% this week
                    </div>
                  </div>

                  {/* Questions Solved */}
                  <div className="bg-background-light p-4 rounded-xl">
                    <div className="text-xs text-slate-500 font-bold uppercase mb-2">Questions Solved</div>
                    <div className="text-3xl font-display font-bold text-secondary">1,240</div>
                    <div className="text-xs text-slate-500 mt-1">Keep it up!</div>
                  </div>

                  {/* Chart Area */}
                  <div className="col-span-2 bg-background-light p-5 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-3 w-24 bg-slate-300 rounded-full"></div>
                      <div className="h-6 w-16 bg-primary/20 rounded-md"></div>
                    </div>
                    <div className="flex items-end gap-3 h-32">
                      <div className="w-full bg-primary/20 rounded-t-md h-[40%]"></div>
                      <div className="w-full bg-primary/40 rounded-t-md h-[60%]"></div>
                      <div className="w-full bg-primary/30 rounded-t-md h-[50%]"></div>
                      <div className="w-full bg-primary rounded-t-md h-[85%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-darkblue text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Top
                        </div>
                      </div>
                      <div className="w-full bg-primary/50 rounded-t-md h-[70%]"></div>
                    </div>
                  </div>

                  {/* Current Learning */}
                  <div className="col-span-2 flex items-center gap-4 bg-darkblue p-4 rounded-xl text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-icons-round text-white">science</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm">Now Learning: General Science</div>
                      <div className="text-xs text-white/70">Chapter 4: Ecosystems</div>
                    </div>
                    <button className="ml-auto bg-primary hover:bg-white hover:text-primary text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <span className="material-icons-round">check_circle</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Daily Goal</div>
                  <div className="font-bold text-slate-800">Completed!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D2B3E] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 h-full w-[45%] bg-[#113A4F] rounded-l-[15rem] opacity-100 transform translate-x-12 scale-110"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Ready to Excel in Your Exams?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Ghanaian students using Eukora to make learning smarter,
            faster, and more effective.
          </p>
          
          {!showWaitlistForm ? (
            <button
              onClick={() => setShowWaitlistForm(true)}
              className="bg-[#2A9D8F] hover:bg-teal-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#2A9D8F]/50 transition-all"
            >
              Join Waitlist
            </button>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-6">Join Our Waitlist</h3>
              <form onSubmit={handleCtaSubmit} className="space-y-4">
                <input
                  type="text"
                  value={ctaName}
                  onChange={(e) => setCtaName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <input
                  type="email"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                />
                <textarea
                  value={ctaMessage}
                  onChange={(e) => setCtaMessage(e.target.value)}
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full px-5 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                ></textarea>
                {ctaFeedback && (
                  <p className={`text-sm ${ctaFeedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {ctaFeedback.text}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={ctaLoading}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {ctaLoading ? (
                    <>
                      <span className="spinner"></span>
                      <span>Submitting...</span>
                    </>
                  ) : 'Submit'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
