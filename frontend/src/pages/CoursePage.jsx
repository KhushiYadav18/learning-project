import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import useClickLogger from "../components/ClickLogger";

export default function CoursePage() {
  useClickLogger("CoursePage");

  const categories = [
    { name: "All", active: true },
    { name: "Programming", active: false },
    { name: "Data Science", active: false },
    { name: "Design", active: false },
    { name: "Business", active: false }
  ];

  const courses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming with hands-on projects and real-world examples.",
      category: "Programming",
      level: "Beginner",
      duration: "8 weeks",
      students: 1247,
      rating: 4.8,
      image: "🔵",
      progress: 0
    },
    {
      id: 2,
      title: "React Development",
      description: "Build modern web applications with React. Learn hooks, context, and advanced patterns.",
      category: "Programming",
      level: "Intermediate",
      duration: "10 weeks",
      students: 892,
      rating: 4.9,
      image: "⚛️",
      progress: 0
    },
    {
      id: 3,
      title: "Data Science Essentials",
      description: "Introduction to data analysis, visualization, and machine learning fundamentals.",
      category: "Data Science",
      level: "Beginner",
      duration: "12 weeks",
      students: 1563,
      rating: 4.7,
      image: "📊",
      progress: 0
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      description: "Learn design thinking, user research, and create beautiful user interfaces.",
      category: "Design",
      level: "Beginner",
      duration: "6 weeks",
      students: 734,
      rating: 4.6,
      image: "🎨",
      progress: 0
    },
    {
      id: 5,
      title: "Python for Beginners",
      description: "Start your programming journey with Python. Learn syntax, data structures, and basic algorithms.",
      category: "Programming",
      level: "Beginner",
      duration: "8 weeks",
      students: 2103,
      rating: 4.8,
      image: "🐍",
      progress: 0
    },
    {
      id: 6,
      title: "Business Analytics",
      description: "Transform data into business insights. Learn Excel, SQL, and visualization tools.",
      category: "Business",
      level: "Intermediate",
      duration: "8 weeks",
      students: 567,
      rating: 4.5,
      image: "📈",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Explore Courses 📚
          </h1>
          <p className="text-lg text-gray-600">
            Discover a world of knowledge with our curated collection of courses
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for courses..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>
              
              {/* Filter Button */}
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  category.active
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-200"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Course Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-3xl">
                    {course.image}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-600 mb-1">{course.level}</div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium text-gray-800">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Course Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>👥 {course.students.toLocaleString()}</span>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {course.category}
                  </span>
                </div>

                {/* Progress Bar (if enrolled) */}
                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                  {course.progress > 0 ? 'Continue Learning' : 'Enroll Now'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all duration-200">
            Load More Courses
          </button>
        </motion.div>
      </div>
    </div>
  );
}
