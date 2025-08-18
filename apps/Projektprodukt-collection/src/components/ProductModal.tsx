import { useEffect, useRef } from "react";
import type { IProduct } from "../type";

interface IProps {
  modalState : boolean
  modalClose: () => void;
  selectedProduct: IProduct | null;
}

export default function ProductModal({modalState, modalClose, selectedProduct}:IProps){
  const descriptionBr = selectedProduct?.description?.replace(/\r\n/g, "\n");
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalState) return;
    const el = scrollerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTo({ top: 0, left: 0, behavior: "auto" })
    });
  }, [modalState]);

  return (
    <>
    {/* 배경 */}
    <div className={`fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur ${modalState? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}/>
    {/* 모달 */}
    <div className={`fixed top-0 left-0 z-20 w-full h-full px-10 py-20 flex justify-center items-center transition-opacity duration-500 ${modalState? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div className="relative bg-white w-full h-full lg:w-4/5 lg:h-[90%] rounded-2xl p-5 lg:py-20">
        <div ref={scrollerRef} className="h-full flex items-start gap-5 lg:gap-20 flex-col lg:justify-center lg:flex-row overflow-y-scroll scrollbar">
          <div className="flex-shrink-0 my-0 mx-auto lg:mx-0">
            <img src={selectedProduct?.img} alt={selectedProduct?.name} className="size-[clamp(10rem,25vw,20rem)] rounded-2xl"/>
          </div>
          <div className="lg:max-w-2xl pr-2">
            <h2 className="text-center lg:text-left font-ppSans ppBold text-xl lg:text-4xl mb-10 lg:mb-6">
              {selectedProduct?.name}
              <span className="ppLight text-sm mx-4 align-middle">|</span>
              <span className="ppLight text-base align-middle">Sunglasses</span>
            </h2>
            <ul className="flex flex-col gap-6">
              <li>
                <span className="text-sm font-bold w-20 inline-block">가격</span>
                <span className="text-sm text-neutral-500">{selectedProduct?.price.toLocaleString('ko-KR')}원</span>
              </li>
              <li>
                <p className="text-sm font-bold">제품설명</p>
                <p className="whitespace-pre-line break-keep text-sm text-neutral-500 mt-2 leading-6">{descriptionBr}</p>
              </li>
              <li>
                <p className="text-sm font-bold">색상</p>
                <p className="text-sm text-neutral-500 mt-2">
                  <span className="text-black w-20 inline-block">프레임</span>{selectedProduct?.colors.frame}
                </p>
                <p className="text-sm text-neutral-500"><span className="text-black w-20 inline-block">렌즈</span>{selectedProduct?.colors.lens}</p>
              </li>
              <li>
                <p className="text-sm font-bold">소재</p>
                { selectedProduct?.materials.front &&
                <p className="mt-2">
                  <span className="text-sm text-black w-20 inline-block">프레임</span>
                  <span className="text-sm text-neutral-500">{selectedProduct?.materials.front}</span>
                </p>
                }
                {
                  selectedProduct?.materials.temple &&
                  <p>
                    <span className="text-sm text-black w-20 inline-block">렌즈</span>
                    <span className="text-sm text-neutral-500">{selectedProduct?.materials.temple}</span>
                  </p>
                }
                {
                  selectedProduct?.materials.overall &&
                  <p className="text-sm text-neutral-500 mt-2">{selectedProduct?.materials.overall}</p>
                }
              </li>
              <li>
                <p className="text-sm font-bold">사이즈</p>
                <div className="mt-2">
                  <p className="flex">
                    <span className="text-sm w-20">프레임</span>
                    <span>{selectedProduct?.size?.frame.map((item,idx)=><span className="text-sm text-neutral-500 block" key={idx}>{item}</span>)}</span>
                  </p>
                  <p className="flex mt-2">
                    <span className="text-sm w-20">렌즈</span>
                    <span>{selectedProduct?.size?.lens.map((item,idx)=><span className="text-sm text-neutral-500 block" key={idx}>{item}</span>)}</span>
                  </p>
                  <p className="flex mt-2">
                    <span className="text-sm w-20">다리</span>
                    <span className="text-sm text-neutral-500">{selectedProduct?.size?.leg}</span>
                  </p>
                </div>
                </li>
              <li>
                <p className="text-sm font-bold">다른색상</p>
                  <div className="mt-2 text-sm text-neutral-500">
                {selectedProduct?.variants.map((item, idx)=>{
                  return <p key={idx}>
                    <span className="w-20 inline-block">{item.code}</span>
                    <span>{item.name}</span>
                  </p>
                  })}
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="absolute right-0 -top-10 h-10 text-base font-ppSans ppBold text-white" onClick={modalClose}>close</button>
      </div>
    </div>
    </>
  )
}