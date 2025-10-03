'use client';

import { motion } from 'framer-motion';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Shield, 
  Home,
  Check,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Tax Planning & Preparation",
      description: "Comprehensive tax services to minimize your liability and ensure compliance with all regulations.",
      features: [
        "Individual & Business Tax Returns",
        "Tax Planning & Strategy",
        "IRS Representation",
        "Multi-State Tax Filing",
        "Tax Problem Resolution"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Bookkeeping & Payroll",
      description: "Accurate financial record-keeping and payroll management to keep your business running smoothly.",
      features: [
        "Monthly Financial Statements",
        "Accounts Payable/Receivable",
        "Payroll Processing",
        "QuickBooks Setup & Training",
        "Bank Reconciliation"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Financial Consulting",
      description: "Strategic financial guidance to help your business grow and achieve its goals.",
      features: [
        "Financial Analysis & Reporting",
        "Cash Flow Management",
        "Budget Planning & Forecasting",
        "Investment Advisory",
        "Risk Assessment"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Advisory",
      description: "Expert business guidance for startups, growing companies, and established enterprises.",
      features: [
        "Business Structure Planning",
        "Merger & Acquisition Support",
        "Performance Improvement",
        "Strategic Planning",
        "Exit Strategy Planning"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Audit & Assurance",
      description: "Independent auditing services to ensure accuracy and compliance with financial standards.",
      features: [
        "Financial Statement Audits",
        "Internal Control Reviews",
        "Compliance Audits",
        "Fraud Investigation",
        "Due Diligence Services"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Estate Planning",
      description: "Comprehensive estate planning services to protect your assets and legacy.",
      features: [
        "Estate Tax Planning",
        "Trust Administration",
        "Succession Planning",
        "Gift Tax Strategies",
        "Charitable Planning"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Monthly bookkeeping",
        "Basic tax preparation",
        "Financial statements",
        "Email support",
        "QuickBooks setup"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Payroll processing",
        "Tax planning consultation",
        "Phone support",
        "Quarterly business reviews",
        "Cash flow analysis"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large businesses",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Advanced financial reporting",
        "Audit support",
        "Strategic planning sessions",
        "Priority support"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing Company Growth",
      client: "ABC Manufacturing",
      challenge: "Struggling with cash flow management and tax compliance",
      solution: "Implemented comprehensive bookkeeping system and tax planning strategy",
      result: "30% improvement in cash flow and $50K in tax savings annually",
      industry: "Manufacturing"
    },
    {
      title: "Restaurant Chain Expansion",
      client: "Local Restaurant Group",
      challenge: "Needed financial structure for multi-location expansion",
      solution: "Developed financial controls and expansion funding strategy",
      result: "Successfully opened 3 new locations with improved profitability",
      industry: "Food Service"
    },
    {
      title: "Tech Startup Success",
      client: "Innovation Tech LLC",
      challenge: "Required investor-ready financial statements and projections",
      solution: "Created comprehensive financial package and growth projections",
      result: "Secured $2M in Series A funding within 6 months",
      industry: "Technology"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial services tailored to your business needs. From basic bookkeeping 
            to complex financial strategy, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:bg-primary group-hover:text-white">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{study.title}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700">Challenge:</span>
                    <p className="text-slate-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Solution:</span>
                    <p className="text-slate-600 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Result:</span>
                    <p className="text-green-600 mt-1 font-semibold">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;