import * as motion from "motion/react-client"
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-center p-4">
      <div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r p-3 from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ingegneria is Magic!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Progetto di Ingegneria del Software del gruppo MAGiC-V
        </motion.p>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Stay tuned!
        </motion.p>
      </div>
    </div>
  );
};

export default Home;