import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-primary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 flex justify-between items-center p-6 md:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex items-center space-x-2 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="text-2xl md:text-3xl font-bold gradient-text-primary group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
            EduTech Nexus
          </span>
        </motion.div>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 text-indigo-400 hover:text-indigo-300 font-medium transition-all duration-200 hover:bg-gray-800/50 rounded-xl border border-transparent hover:border-indigo-500/30"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:shadow-indigo-500/25"
          >
            Join Now
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text-dark leading-tight"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Unlock Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Digital Potential
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Embark on a transformative learning journey with cutting-edge technology. 
          Master new skills through immersive video content, interactive assessments, 
          and personalized progress tracking. Every click shapes your future!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/register"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/25"
          >
            Begin Your Journey
          </Link>
          <Link
            to="/courses"
            className="px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-indigo-400 border-2 border-indigo-500/50 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-700/80 transition-all duration-200 hover:border-indigo-400 hover:text-indigo-300"
          >
            Explore Learning Paths
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {[
            {
              icon: "🚀",
              title: "Smart Learning Paths",
              description: "AI-powered curriculum designed to accelerate your skill development",
              link: "/courses"
            },
            {
              icon: "🎬",
              title: "Premium Video Content",
              description: "High-definition tutorials with expert instructors and real-world projects",
              link: "/videos"
            },
            {
              icon: "🧪",
              title: "Interactive Assessments",
              description: "Adaptive testing that evolves with your growing expertise",
              link: "/quizzes"
            }
          ].map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group"
            >
              <motion.div
                className="glass-card rounded-2xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors duration-200">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">{feature.description}</p>
                <div className="mt-4 text-indigo-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Discover →
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 text-center py-8 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} EduTech Nexus — Revolutionizing Education Through Innovation
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
