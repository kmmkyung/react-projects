import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import HomeProducts from "../components/HomeProducts";
import imageData from "../data/imageData";
import { sunGlassesData } from "../data/productData";

export default function Home(){
  const videoSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ cursorVideoVisible, setCursorVideoVisible ] = useState(false); // 커서가 비디오 섹션 안에 들어와 있는지 여부
  const [ videoPos, setVideoPos ] = useState({ x: 0, y: 0 }); // 비디오 내 마우스 좌표 
  const [ videoPaused, setVideoPaused ] = useState(true); // video 멈춤 재생 여부
  const [ isTouch, setIsTouch ] = useState(false); // pc mobile 버전 확인

  function clickVideoPause(){
    if(!videoRef.current) return;
    if(videoRef.current.paused) { videoRef.current.play(); }
    else { videoRef.current.pause(); }
  }

  function onPlay(){ setVideoPaused(false); }
  
  function onPause(){ setVideoPaused(true); }

  function cursorMove(event: React.MouseEvent<HTMLElement>) {
    const cursorRadius = 48;
    const videoSection = videoSectionRef.current;
    if(!videoSection) return;

    const videoSectionRect = videoSection.getBoundingClientRect();
    const cursorX = event.clientX - videoSectionRect.left; // 화면 기준 x 마우스 위치 - 요소 왼쪽기준 위치 => 왼쪽기준 x좌표 
    const cursorY = event.clientY - videoSectionRect.top;

    const inside =
      cursorX >= 0 && cursorX <= videoSectionRect.width && cursorY >= 0 && cursorY <= videoSectionRect.height;
    setCursorVideoVisible(inside);
    if(!inside) return;

    // overflow hidden으로 잘려나가게 하려면
    // setVideoPos({ x: cursorX, y: cursorY });
    
    // 버튼 전체가 항상 컨테이너 안에 보이게 하려면 
    // 버튼 위치 조정 둘중작은수(둘중큰수)
    const currentX = Math.min(Math.max(cursorX,cursorRadius),videoSectionRect.width - cursorRadius)
    const currentY = Math.min(Math.max(cursorY,cursorRadius),videoSectionRect.height - cursorRadius)
    setVideoPos({ x: currentX, y: currentY });
  }

  // 브라우저 정책에 의해 자동재생이 막힐 수 있어서 초기상태 동기화
  useEffect(()=>{
    setVideoPaused(videoRef.current?.paused ?? true); // 거짓 true, 참 false
  },[]);

  // pc mobile 버전 확인
  useEffect(() => {
    const coarse = window.matchMedia?.("(pointer: coarse)")?.matches;
    const hasTouch = navigator.maxTouchPoints > 0;
    setIsTouch(Boolean(coarse || hasTouch));
  }, []);

  return (
    <main>
      <section ref={videoSectionRef} className="w-full h-screen relative overflow-hidden"
        onMouseMove={cursorMove}
        onMouseEnter={() => setCursorVideoVisible(true)}
        onMouseLeave={() => setCursorVideoVisible(false)}
      >
        <video ref={videoRef} className="w-full h-full object-cover object-center" src={imageData.video} loop muted autoPlay onPlay={onPlay} onPause={onPause}/>
        { cursorVideoVisible && !isTouch && 
          <button className="absolute w-24 h-24 rounded-full border-2 border-neutral-500 backdrop-blur-md
            active:scale-95 duration-150 -translate-x-1/2 -translate-y-1/2 transform transition
            text-xs text-neutral-500 text-center flex items-center justify-center"
          style={{ top: videoPos.y, left: videoPos.x }}
          onClick={clickVideoPause}>
            {videoPaused ? "Video Play":"Video Pause"}
          </button>
        }
        {isTouch && (
        <button className="absolute bottom-10 right-10 text-white text-xs size-10 rounded-full border-2 border-white" onClick={clickVideoPause}>
          {videoPaused ? "▶" : "❚❚"}
        </button>
      )}
      </section>
      <section>
        <div className="inner py-[100px] md:py-[200px]">
          <img className="max-w-52 w-full mx-auto" src={imageData.logo[1]} alt="humanity_logo"/>
          <h2 className="text-center my-10 text-neutral-800 font-bold">2025 MAIN COLLECTION</h2>
          <p className="text-center text-neutral-500 md:text-base text-sm">
            인간성 상실의 시대에 인간적 가치는 어떻게 표현될 수 있는가.<br/>
            안개가 내려앉은 회색 도시, 무심한 하늘 아래 잿빛 건물들이 고요함을 자아낸다.<br/>
            그 속의 차가움은 인간의 온기를 느낄 수 없을 만큼 무미건조하다.<br/>
            <br/>
            우리는 저마다의 프레임 속 정답을 찾기 위해 방황하며, 방향을 잃고 헤매다 타인의 손길에 마음이 따뜻해진다.<br/>
            서로의 온기가 빛을 만들어 진실의 길로 이끌고, 우리는 진실의 여정으로 나아갈 준비를 한다.
          </p>
        </div>
      </section>
      <section>
        <div className="py-[100px] md:py-[200px] not:first:my-[100px] ">
          { sunGlassesData.map((item, idx) => (
            <HomeProducts key={idx} name={item.name} img={item.img} />
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  )
}