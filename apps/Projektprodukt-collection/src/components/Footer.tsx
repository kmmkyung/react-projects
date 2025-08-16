import imageData from "../data/imageData";

export default function Footer(){
  return (
    <footer className="w-full h-40 border-t border-[#8C8C8C] ">
      <div className="inner my-5 flex flex-col items-start justify-between">
        <div className="w-full flex items-start justify-between">
          <img className="h-4 my-2 w-auto cursor-pointer" src={imageData.logo[0]} alt="logo" />
          <div className="flex items-center">
            <a className="inline-block align-middle p-2" href="https:wwww.facebook.com/projektproduktofficial" target="_blank">
              <img className="size-4" src={imageData.footerIcons.footerIconFaceBook} alt="faceBook" />
            </a>
            <a className="inline-block align-middle p-2" href="https://www.instagram.com/projektprodukt/" target="_blank">
              <img className="size-4" src={imageData.footerIcons.footerIconInstagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm my-5">
            <p className="break-keep text-neutral-500 text-sm leading-loose flex flex-wrap gap-x-3">
              <span>(주) 이호아이티씨</span>│
              <span>대표자명 &nbsp; 이현호</span>│
              <span>주소 &nbsp; 서울특별시 강남구 논현로153길 17 (신사동) 프로젝트 프로덕트</span>│
              <span>사업자번호 &nbsp; 120-87-78012</span>│
              <span>통신판매번호 &nbsp; 제 2014-서울강남-01765호</span>
            </p>
            <p className="break-keep text-neutral-500 text-sm leading-loose flex flex-wrap gap-x-3">
              <span>A/S 문의</span>│
              <span>이메일 문의 &nbsp; contact@projektprodukt.co.kr</span>│
              <span>연락처 &nbsp; 02-6952-3006</span>│
              <span>이용약관</span>│
              <span>개인정보처리방침</span>
            </p>
            <p className="mt-4 text-neutral-500">Copyright ©LEEHO ITC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}