import { Link } from 'react-router-dom';

const WhoItsFor = () => {
  const audiences = [
    {
      icon: 'mark_email_read',
      title: 'SHS Students',
      description: 'Senior High School students looking to master complex subjects in Science, Math, and Arts through interactive AI tutoring.',
      features: ['Homework Assistance', 'Concept Clarification'],
      highlighted: false,
      bgColor: 'bg-white',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: 'description',
      title: 'WASSCE Candidates',
      description: 'Final year students preparing for the West African Senior School Certificate Examination needing targeted practice.',
      features: ['Past Questions Bank', 'Mock Exams & Grading', 'Predictive Performance'],
      highlighted: true,
      badge: 'MOST POPULAR',
      bgColor: 'bg-darkblue',
      iconBg: 'bg-white/10',
      iconColor: 'text-white',
    },
    {
      icon: 'menu_book',
      title: 'BECE Candidates',
      description: 'Junior High students preparing for the Basic Education Certificate Examination to secure their best school placement.',
      features: ['Foundational Topics', 'Core Subjects Focus'],
      highlighted: false,
      bgColor: 'bg-white',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
  ];

  return (
    <div className="bg-background-light font-body">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wider mb-6 border border-secondary/20">
            TARGET AUDIENCE
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-darkblue mb-6 leading-tight">
            Who is{' '}
            <span className="text-primary relative inline-block">
              Eukora
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>{' '}
            For?
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eukora is designed to empower the next generation of African scholars. Our AI-driven
            platform adapts to the unique curriculum needs of students preparing for critical milestones.
          </p>
        </div>
      </section>

      {/* Audience Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  audience.highlighted
                    ? 'bg-darkblue text-white shadow-xl scale-105 border-darkblue z-10'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Badge */}
                {audience.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md border-2 border-white">
                    {audience.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${audience.iconBg}`}
                >
                  <span className={`material-icons-round text-4xl ${audience.iconColor}`}>
                    {audience.icon}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className={`text-2xl font-display font-bold mb-3 ${
                    audience.highlighted ? 'text-white' : 'text-darkblue'
                  }`}
                >
                  {audience.title}
                </h3>
                <p
                  className={`text-base mb-6 leading-relaxed ${
                    audience.highlighted ? 'text-white/80' : 'text-slate-600'
                  }`}
                >
                  {audience.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`material-icons-round text-lg ${
                          audience.highlighted ? 'text-primary' : 'text-primary'
                        }`}
                      >
                        check_circle
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          audience.highlighted ? 'text-white' : 'text-slate-700'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button for highlighted card */}
                {audience.highlighted && (
                  <Link to="/" className="block w-full mt-8 bg-secondary text-white py-3 rounded-xl font-bold text-base hover:bg-secondary/90 transition-colors shadow-lg text-center">
                    Join Waitlist
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers CTA Section */}
      <div className="bg-background-light py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-darkblue via-darkblue to-purple-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-secondary opacity-10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  Not a student? <br className="hidden md:block" /> We have tools for teachers too.
                </h3>
                <p className="text-white/70 text-lg max-w-xl">
                  Help your students excel with AI-powered insights into their learning gaps.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-darkblue hover:text-primary font-bold py-3 px-8 rounded-xl shadow-lg transition-colors text-lg"
                >
                  Join Waitlist
                  <span className="material-icons-round text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoItsFor;
