import { AnimatePresence, motion } from "motion/react"
import imageData from "../data/imageData";
import { useState } from "react";

const imgVariants = {
  hidden: { 
    width: 0,
    height: 0,
    transition: {
      duration: 1
    }
  },
  visible: {
    width: [0, 0, 180, 180],
    height: [0, 0, 5, 200],
    transition: {
      delay: 1,
      duration: 1.0,
      times: [0, 0.1, 0.5, 1],
    }
  }
};

export default function Loader(){
  const { product } = imageData;
  const loadingImages = [
    product.glasses[0], product.sunGlasses[0],
    product.glasses[1], product.sunGlasses[1],
    product.glasses[2], product.sunGlasses[2]
  ];
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence>
      { !done &&
        <motion.section
          key="loader"
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 1, duration: 0.8 }}}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full flex items-center justify-center">
          <p className="font-ppSans ppBold text-4xl flex items-center justify-center">
            <span>PROJEKT</span>
            <motion.span
              className="inline-flex items-center justify-center overflow-hidden m-5"
              variants={imgVariants}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => {
                const imgId = window.setInterval(() => {
                  setIdx((prev) => {
                    const next = prev + 1;
                    // 마지막 인덱스까지 보여줬으면 인터벌 종료
                    if (next >= loadingImages.length) {
                      clearInterval(imgId);
                      setDone(true)
                      return prev;
                    }
                    return next;
                  });
                }, 800);
              }}
            >
              <motion.img
                key={idx}
                src={loadingImages[idx]}
                alt={`img-${idx}`}
                className=" w-full h-full object-cover"
                transition={{ duration: 1 }}
              />
            </motion.span>
            <span>PRODUKT</span>
          </p>
        </div>
    </motion.section>
    }
    </AnimatePresence>
  )
}