'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Shield, Star } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Integrity",
      description: "We maintain the highest standards of professional ethics and confidentiality in all our client relationships."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision & Accuracy",
      description: "Our meticulous attention to detail ensures error-free financial reporting and compliance."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "We tailor our services to meet each client's unique needs and business objectives."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We continuously strive for excellence in service delivery and professional development."
    }
  ];

  const team = [
    {
      name: "Eyuael Berhe",
      position: "Senior Partner & CPA",
      credentials: "CPA, MBA, 15+ Years Experience",
      image: "/team/eyuael.jpg",
      description: "Specializes in tax planning, business consulting, and financial strategy for growing businesses."
    },
    {
      name: "Sarah Johnson",
      position: "Tax Manager",
      credentials: "CPA, EA, 10+ Years Experience",
      image: "/team/sarah.jpg",
      description: "Expert in complex tax situations, estate planning, and IRS representation."
    },
    {
      name: "Michael Chen",
      position: "Audit Director",
      credentials: "CPA, CIA, 12+ Years Experience",
      image: "/team/michael.jpg",
      description: "Leads our audit and assurance services with expertise in financial reporting standards."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Martinez Construction LLC",
      text: "EHAB Accountancy has been instrumental in our company's growth. Their strategic tax planning saved us thousands while their business advisory helped us expand confidently.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Thompson Tech Solutions",
      text: "Professional, reliable, and always available when we need them. They've handled our books for 5 years and we couldn't be happier with their service.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "Wang Family Restaurant Group",
      text: "The team at EHAB understands our industry and provides invaluable insights. Their payroll and bookkeeping services are top-notch.",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About <span className="text-primary">EHAB Accountancy</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been helping businesses navigate complex financial landscapes 
            with confidence. Our commitment to excellence and personalized service has made us a 
            trusted partner for hundreds of clients.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2009, EHAB Accountancy began with a simple mission: to provide 
              small and medium-sized businesses with the same level of financial expertise 
              that large corporations enjoy.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              What started as a one-person practice has grown into a full-service accounting 
              firm, but we've never lost sight of our core values: integrity, precision, 
              and genuine care for our clients' success.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-slate-500">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-slate-500">Client Retention</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-lg leading-relaxed">
                To empower businesses with accurate financial insights, strategic guidance, 
                and peace of mind, enabling them to focus on what they do best while we 
                handle their financial complexities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;