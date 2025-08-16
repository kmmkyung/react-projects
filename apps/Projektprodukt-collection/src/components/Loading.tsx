import { AnimatePresence, motion } from "motion/react"
import imageData from "../data/imageData";
import { useState } from "react";

export default function Loading({onFinished}:{onFinished: () => void}) {
  const { product } = imageData;
  const loadingImages = [
    product.glasses[0], product.sunGlasses[0],
    product.glasses[1], product.sunGlasses[1],
    product.glasses[2], product.sunGlasses[2]
  ];
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  const imgVariants = {
    hidden: {  width: 0, height: 0, transition: { duration: 1 }},
    visible: {
      width: [0, 0, '13vw', '13vw'],
      height: [0, 0, '1vw', '15vw'],
      transition: {
        delay: 1, duration: 1.0, times: [0, 0.1, 0.5, 1],
      }
    }
  };
  

  return (
    <AnimatePresence onExitComplete={onFinished}>
      { !done &&
        <motion.section
          key="loader"
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 1.5, duration: 1 }}}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full flex items-center justify-center">
          <div className="font-ppSans ppBold text-xl md:text-4xl flex items-center justify-center">
            <span>PROJEKT</span>
            <motion.div
              className="inline-flex items-center justify-center overflow-hidden m-4 bg-[#F5F5F5]"
              variants={imgVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
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
              <motion.div className=" w-full bg-cover bg-center aspect-square"
                style={{ backgroundImage: `url(${loadingImages[idx]})` }}
                transition={{ duration: 1, ease: "linear" }}
                >
              </motion.div>
            </motion.div>
            <span>PRODUKT</span>
          </div>
        </div>
    </motion.section>
    }
    </AnimatePresence>
  )
}