
import React from 'react';
import { ArrowRight, Zap, BarChart3, LineChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Revenue Management',
      description: 'Optimize your revenue streams with our advanced analytics and management tools.',
      icon: BarChart3,
    },
    {
      title: 'Marketing Solutions',
      description: 'Enhance your marketing campaigns with data-driven insights and strategies.',
      icon: Zap,
    },
    {
      title: 'Commercial Functions',
      description: 'Streamline your commercial operations for improved efficiency and results.',
      icon: LineChart,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-brynk-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brynk-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-brynk-blue hover:underline font-medium"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
