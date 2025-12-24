import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: 'psychology',
      title: 'AI-Powered Tutoring',
      description: 'Get instant explanations and personalized guidance from our intelligent AI tutor, available 24/7.',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
      hoverBorder: 'hover:border-primary/30',
    },
    {
      icon: 'school',
      title: 'Exam-Focused Content',
      description: 'All content is aligned with WAEC and BECE syllabuses, ensuring you study exactly what matters.',
      color: 'bg-secondary/10',
      iconColor: 'text-secondary',
      hoverBorder: 'hover:border-secondary/30',
    },
    {
      icon: 'quiz',
      title: 'Past Questions Bank',
      description: 'Access thousands of past questions with detailed explanations for every answer.',
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
      hoverBorder: 'hover:border-blue-400/30',
    },
    {
      icon: 'trending_up',
      title: 'Progress Analytics',
      description: 'Track your improvement with detailed analytics and know exactly where to focus.',
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
      hoverBorder: 'hover:border-green-400/30',
    },
    {
      icon: 'emoji_events',
      title: 'Gamified Learning',
      description: 'Earn badges, maintain streaks, and compete on leaderboards to stay motivated.',
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      hoverBorder: 'hover:border-purple-400/30',
    },
    {
      icon: 'bolt',
      title: 'Instant Feedback',
      description: 'Get immediate feedback on your answers with clear explanations of correct solutions.',
      color: 'bg-yellow-500/10',
      iconColor: 'text-yellow-600',
      hoverBorder: 'hover:border-yellow-400/30',
    },
    {
      icon: 'schedule',
      title: 'Study Scheduling',
      description: 'AI-generated study plans that adapt to your pace and available time.',
      color: 'bg-indigo-500/10',
      iconColor: 'text-indigo-500',
      hoverBorder: 'hover:border-indigo-400/30',
    },
    {
      icon: 'cloud_download',
      title: 'Offline Access',
      description: 'Download content and study even without internet connection.',
      color: 'bg-slate-200',
      iconColor: 'text-slate-600',
      hoverBorder: 'hover:border-slate-400/30',
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team and AI assistant.',
      color: 'bg-pink-500/10',
      iconColor: 'text-pink-500',
      hoverBorder: 'hover:border-pink-400/30',
    },
  ];

  return (
    <div className="bg-background-light font-body">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider mb-6 border border-primary/20">
            FEATURES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-darkblue mb-6 leading-tight">
            Powerful Features for{' '}
            <span className="text-primary">Smarter Learning</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to excel in your exams, all in one platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-background-light p-8 rounded-2xl border border-slate-100 ${feature.hoverBorder} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                  <span className={`material-icons-round text-3xl ${feature.iconColor}`}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-darkblue mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-darkblue relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#2A9D8F"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.8,33.2C59.6,44.3,48.7,53.3,36.8,60.6C24.9,67.9,12,73.5,-0.3,74C-12.6,74.5,-24.9,69.9,-36.5,62.5C-48.1,55.1,-59,44.9,-67.6,32.4C-76.2,19.9,-82.5,5.1,-80.6,-8.6C-78.7,-22.3,-68.6,-34.9,-57.4,-44.6C-46.2,-54.3,-33.9,-61.1,-21.2,-69.4C-8.5,-77.7,4.6,-87.5,17.2,-87.1C29.8,-86.7,41.9,-76.1,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of students already using Eukora to prepare for their exams.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/50 transition-all"
          >
            Join Waitlist
            <span className="material-icons-round">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
