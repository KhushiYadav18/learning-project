import { motion } from "framer-motion";

export default function AuthForm({ title, fields, onSubmit }) {
  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Card Container */}
        <div className="glass-card rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 p-8 text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-white/30 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              {fields.map(({ name, type, placeholder, onChange, options }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                >
                  {type === 'select' ? (
                    <select
                      name={name}
                      onChange={onChange}
                      required
                      className="input-field-dark"
                    >
                      <option value="">{placeholder}</option>
                      {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      onChange={onChange}
                      required
                      className="input-field-dark"
                    />
                  )}
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="w-full btn-primary-dark py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
              >
                {title}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
