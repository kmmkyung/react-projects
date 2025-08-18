import { useEffect, useRef, useState } from "react";
import sunglassesCircle from "../assets/images/etc/sunglasses-circle.png"

interface IProps {
  name: string;
  img: string;
  id: number;
  modalOpen: (id:number)=> void;
}

export default function HomeProducts(props:IProps){
  const divRef = useRef<HTMLDivElement | null>(null);
  const ImgContainerRef = useRef<HTMLDivElement | null>(null);
  const [ inView, setInView ] = useState(false); // 요소가 화면 안에 있는지 여부
  const [ cursorImgVisible, setCursorImgVisible ] = useState(false); // 커서가 요소 섹션 안에 들어와 있는지 여부
  const [ cursorPos, setCursorPos ] = useState({ x: 0, y: 0 }); // 요소 내 마우스 좌표 
  const [ isTouch, setIsTouch ] = useState(false); // pc mobile 버전 확인
  const [ activeTouchId, setActiveTouchId ] = useState<number | null>(null); // 추적 중인 터치 id

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {        
        const ratio = entry.intersectionRatio; // 보이는 비율 (0~1)
        setInView(prev => (ratio >= 0.5 ? true : ratio <= 0.2 ? false : prev));
      },
    { threshold: [0, 0.2, 0.5, 1] } // 이 경계들을 넘을 때 콜백 호출
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // pc mobile 버전 확인
  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia?.("(any-pointer: coarse)")?.matches;
    const hasTouch = navigator.maxTouchPoints > 0;
    setIsTouch(Boolean(coarse || hasTouch));
  }, []);

  function cursorMove(event: React.MouseEvent<HTMLElement>) {
    const imgContainer = ImgContainerRef.current;
    if(!imgContainer) return;

    const imgContainerRect = imgContainer.getBoundingClientRect();
    const cursorX = event.clientX - imgContainerRect.left; // 화면 기준 x 마우스 위치 - 요소 왼쪽기준 위치 => 왼쪽기준 x좌표 
    const cursorY = event.clientY - imgContainerRect.top;

    const inside =
      cursorX >= 0 && cursorX <= imgContainerRect.width && cursorY >= 0 && cursorY <= imgContainerRect.height;
    setCursorImgVisible(inside);
    if(!inside) return;

    setCursorPos({ x: cursorX, y: cursorY });
  }

  // 모바일: 누르는 동안만 표시 (pointer capture 사용)
  function onPointerDown(event: React.PointerEvent<HTMLElement>) {
    if (isTouch && event.pointerType !== "mouse") {
      setActiveTouchId(event.pointerId);
      // 드래그 중 요소 밖으로 나가도 이벤트가 끊기지 않게 구독 -> 포인터 캡처
      event.currentTarget.setPointerCapture?.(event.pointerId);
      cursorMove(event);
      setCursorImgVisible(true);
    }
  }

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    const isMouseOnDesktop = !isTouch && event.pointerType === "mouse";
    const isActiveTouch    =  isTouch && event.pointerId === activeTouchId;
  
    if (!(isMouseOnDesktop || isActiveTouch)) return;
    cursorMove(event);
  }
  
  function onPointerUpOrCancel(event: React.PointerEvent<HTMLElement>) {
    if (isTouch && event.pointerId === activeTouchId) {
      event.currentTarget.releasePointerCapture?.(event.pointerId); // 포인터 캡처 해제
      setActiveTouchId(null);
      setCursorImgVisible(false);
    }
  }

  const opacityCls = inView ? "opacity-100" : "opacity-0";
  const leftState  = inView ? "translateZ(0) rotate3d(0,1,0,-90deg)" : "translateZ(0) rotate3d(0,1,0,0deg)";
  const rightState = inView ? "translateZ(0) rotate3d(0,1,0,0deg)" : "translateZ(0) rotate3d(0,1,0,90deg)";

  return (
    <>
      <div ref={divRef} className="h-auto mt-[100px] first:mt-0 md:mt-0 md:h-screen w-full">
        <div className="w-full h-full flex items-center justify-between">
          <div className="relative pointer-events-none *:whitespace-nowrap font-ppSans ppBold">
            <span style={{transform:leftState}}
            className={`origin-left transform-gpu [transform-style:preserve-3d] [backface-visibility:hidden] [writing-mode:sideways-lr] duration-1000 block text-[clamp(1rem,12vw,10rem)] font-bold tracking-tight ${opacityCls}`}>
              {props.name}
            </span>
            <span style={{transform:rightState}}
              className={`absolute top-0 origin-left transform-gpu [transform-style:preserve-3d] [backface-visibility:hidden] [writing-mode:sideways-lr] duration-1000 block text-[clamp(1rem,12vw,10rem)] font-bold tracking-tight ${opacityCls}`}>
              {props.name}
            </span>
          </div>

          <div ref={ImgContainerRef} className="relative w-[min(55vw,600px)] overflow-hidden transform-gpu transition-[border-radius] duration-500 ease-out rounded-2xl hover:rounded-[15%] "
              onClick={()=> props.modalOpen(props.id)}
              onPointerEnter={() => !isTouch && setCursorImgVisible(true)}
              onPointerLeave={() => !isTouch && setCursorImgVisible(false)}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUpOrCancel}
              onPointerCancel={onPointerUpOrCancel}
            >
            <img src={props.img} alt={props.name} draggable={false}
            className={`aspect-[1000/1135] h-full object-cover transform-gpu transition-transform duration-700 ease-out ${inView ? "scale-100" : "scale-105"}`}/>
            { cursorImgVisible &&
              <img src={sunglassesCircle} alt="cursor" draggable={false}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 size-[100px]"
              style={{ top: cursorPos.y, left: cursorPos.x }}/>
            }
          </div>

          <div className="relative pointer-events-none *:whitespace-nowrap font-ppSans ppBold">
            <span style={{transform:leftState}}
              className={`origin-right transform-gpu [transform-style:preserve-3d] [backface-visibility:hidden] [writing-mode:sideways-rl] duration-1000 block text-[clamp(1rem,12vw,10rem)] font-bold tracking-tight ${opacityCls}`}>
              {props.name}
            </span>
            <span style={{transform:rightState}}
              className={`absolute top-0 origin-right transform-gpu [transform-style:preserve-3d] [backface-visibility:hidden] [writing-mode:sideways-rl] duration-1000 block text-[clamp(1rem,12vw,10rem)] font-bold tracking-tight ${opacityCls}`}>
              {props.name}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}