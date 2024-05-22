import { motion } from "framer-motion";

const LoadingHeading = () => {
  return (
    <h1 className="text-8xl font1 flex">
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.1, type: 'spring' }}
      >
        W
      </motion.p>
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        E
      </motion.p>
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        L
      </motion.p>
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        C
      </motion.p>
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        O
      </motion.p>
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        M
      </motion.p>
      <motion.p
        initial={{ translateY: "-75%" }}
        animate={{ translateY: "0%" }}
        transition={{ delay: 0.7, type: 'spring' }}
      >
        E
      </motion.p>
    </h1>
  );
};

export default LoadingHeading;
