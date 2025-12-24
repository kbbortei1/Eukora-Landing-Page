import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: 'person_add',
      title: 'Sign Up For Free',
      description: 'Create your account in seconds. Join a community of ambitious students ready to excel.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      numberBg: 'bg-secondary',
    },
    {
      number: 2,
      icon: 'menu_book',
      title: 'Choose Your Subject',
      description: 'Select from Mathematics, Science, English, and more. Specifically tailored for the Ghanaian curriculum.',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
      numberBg: 'bg-darkblue',
    },
    {
      number: 3,
      icon: 'psychology',
      title: 'Practice & Learn',
      description: 'Engage with AI-generated questions. Get instant feedback and detailed explanations for every answer.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      numberBg: 'bg-secondary',
    },
    {
      number: 4,
      icon: 'trending_up',
      title: 'Improve Confidence',
      description: 'Track your progress with analytics, identify weak spots, and walk into your exam room with full confidence.',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
      numberBg: 'bg-darkblue',
    },
  ];

  return (
    <div className="bg-background-light font-body">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wider mb-4 border border-secondary/20">
            AI-POWERED LEARNING
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-darkblue mb-6 leading-tight">
            Master Your Exams with{' '}
            <span className="text-primary relative inline-block">
              Eukora
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Ghanaian students acing their WASSCE and BECE exams through
            personalized, AI-driven practice.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-darkblue mb-4">
              How Eukora Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your path to academic excellence is just four simple steps away. Our intelligent
              system adapts to your learning style.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                        <span className={`material-icons-round ${step.iconColor} text-3xl`}>
                          {step.icon}
                        </span>
                      </div>
                    </div>
                    {/* Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-7 h-7 ${step.numberBg} text-white text-sm font-bold rounded-full flex items-center justify-center shadow-md border-2 border-white`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-darkblue mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-14 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-darkblue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span>Join the Waitlist</span>
              <span className="material-icons-round">arrow_forward</span>
            </Link>
            <p className="mt-4 text-sm text-slate-500">Be the first to know when we launch.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="bg-background-light py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-darkblue to-[#0B3C53] rounded-2xl p-8 md:py-10 md:px-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-2">
                  Ready to ace that test?
                </h3>
                <p className="text-white/70">Join the smartest students in Ghana today.</p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="bg-white text-darkblue hover:bg-slate-50 font-bold py-3 px-6 rounded-xl shadow-lg transition-colors inline-block"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
