import type { IProduct } from "../type";
import { caseImg, sunGlasses01_01_01, sunGlasses01_01_02, sunGlasses01_01_03, sunGlasses01_01_04, sunGlasses01_01_05, sunGlasses01_01_06, sunGlasses01_01_07, sunGlasses01_02_01, sunGlasses01_02_02, sunGlasses01_02_03, sunGlasses01_02_04, sunGlasses01_02_05, sunGlasses01_02_06, sunGlasses01_02_07, sunGlasses01_03_01, sunGlasses01_03_02, sunGlasses01_03_03, sunGlasses01_03_04, sunGlasses01_03_05, sunGlasses01_03_06, sunGlasses01_03_07, sunGlasses01_04_01, sunGlasses01_04_02, sunGlasses01_04_03, sunGlasses01_04_04, sunGlasses01_04_05, sunGlasses01_04_06, sunGlasses01_04_07, sunGlasses01_color_01, sunGlasses01_color_02, sunGlasses01_color_03, sunGlasses01_color_04, sunGlasses02_01_01, sunGlasses02_01_02, sunGlasses02_01_03, sunGlasses02_01_04, sunGlasses02_01_05, sunGlasses02_01_06, sunGlasses02_01_07, sunGlasses02_01_08, sunGlasses02_02_01, sunGlasses02_02_02, sunGlasses02_02_03, sunGlasses02_02_04, sunGlasses02_02_05, sunGlasses02_02_06, sunGlasses02_02_07, sunGlasses02_02_08, sunGlasses02_03_01, sunGlasses02_03_02, sunGlasses02_03_03, sunGlasses02_03_04, sunGlasses02_03_05, sunGlasses02_03_06, sunGlasses02_03_07, sunGlasses02_03_08, sunGlasses02_04_01, sunGlasses02_04_02, sunGlasses02_04_03, sunGlasses02_04_04, sunGlasses02_04_05, sunGlasses02_04_06, sunGlasses02_04_07, sunGlasses02_04_08, sunGlasses02_05_01, sunGlasses02_05_02, sunGlasses02_05_03, sunGlasses02_05_04, sunGlasses02_05_05, sunGlasses02_05_06, sunGlasses02_05_07, sunGlasses02_05_08, sunGlasses02_color_01, sunGlasses02_color_02, sunGlasses02_color_03, sunGlasses02_color_04, sunGlasses02_color_05, sunGlasses03_01_01, sunGlasses03_01_02, sunGlasses03_01_03, sunGlasses03_01_04, sunGlasses03_01_05, sunGlasses03_01_06, sunGlasses03_01_07, sunGlasses03_01_08, sunGlasses03_02_01, sunGlasses03_02_02, sunGlasses03_02_03, sunGlasses03_02_04, sunGlasses03_02_05, sunGlasses03_02_06, sunGlasses03_02_07, sunGlasses03_02_08, sunGlasses03_03_01, sunGlasses03_03_02, sunGlasses03_03_03, sunGlasses03_03_04, sunGlasses03_03_05, sunGlasses03_03_06, sunGlasses03_03_07, sunGlasses03_03_08, sunGlasses03_04_01, sunGlasses03_04_02, sunGlasses03_04_03, sunGlasses03_04_04, sunGlasses03_04_05, sunGlasses03_04_06, sunGlasses03_04_07, sunGlasses03_04_08, sunGlasses03_color_01, sunGlasses03_color_02, sunGlasses03_color_03, sunGlasses03_color_04, sunGlasses04_01_01, sunGlasses04_01_02, sunGlasses04_01_03, sunGlasses04_01_04, sunGlasses04_01_05, sunGlasses04_01_06, sunGlasses04_01_07, sunGlasses04_01_08, sunGlasses04_02_01, sunGlasses04_02_02, sunGlasses04_02_03, sunGlasses04_02_04, sunGlasses04_02_05, sunGlasses04_02_06, sunGlasses04_02_07, sunGlasses04_02_08, sunGlasses04_03_01, sunGlasses04_03_02, sunGlasses04_03_03, sunGlasses04_03_04, sunGlasses04_03_05, sunGlasses04_03_06, sunGlasses04_03_07, sunGlasses04_03_08, sunGlasses04_04_01, sunGlasses04_04_02, sunGlasses04_04_03, sunGlasses04_04_04, sunGlasses04_04_05, sunGlasses04_04_06, sunGlasses04_04_07, sunGlasses04_04_08, sunGlasses04_05_01, sunGlasses04_05_02, sunGlasses04_05_03, sunGlasses04_05_04, sunGlasses04_05_05, sunGlasses04_05_06, sunGlasses04_05_07, sunGlasses04_05_08, sunGlasses04_color_01, sunGlasses04_color_02, sunGlasses04_color_03, sunGlasses04_color_04, sunGlasses04_color_05, sunGlasses05_01_01, sunGlasses05_01_02, sunGlasses05_01_03, sunGlasses05_01_04, sunGlasses05_01_05, sunGlasses05_01_06, sunGlasses05_01_07, sunGlasses05_01_08, sunGlasses05_02_01, sunGlasses05_02_02, sunGlasses05_02_03, sunGlasses05_02_04, sunGlasses05_02_05, sunGlasses05_02_06, sunGlasses05_02_07, sunGlasses05_02_08, sunGlasses05_03_01, sunGlasses05_03_02, sunGlasses05_03_03, sunGlasses05_03_04, sunGlasses05_03_05, sunGlasses05_03_06, sunGlasses05_03_07, sunGlasses05_03_08, sunGlasses05_04_01, sunGlasses05_04_02, sunGlasses05_04_03, sunGlasses05_04_04, sunGlasses05_04_05, sunGlasses05_04_06, sunGlasses05_04_07, sunGlasses05_04_08, sunGlasses05_05_01, sunGlasses05_05_02, sunGlasses05_05_03, sunGlasses05_05_04, sunGlasses05_05_05, sunGlasses05_05_06, sunGlasses05_05_07, sunGlasses05_05_08, sunGlasses05_color_01, sunGlasses05_color_02, sunGlasses05_color_03, sunGlasses05_color_04, sunGlasses05_color_05 } from "./imageImportData";

export const sunGlassesData:IProduct[] = [
  // sunGlasses 1
  {
    id: 1,
    name: "HM1 CMWG",
    img: sunGlasses01_01_01,
    price: 385000,
    description:"인간다움(Humanity)을 표현하기 위해 공예품과 같이 비정형적 이미지에서 모티브를 얻은 고글형 선글라스.\n엔드피스에서 템플까지 균일하지 않은 메탈 컷팅을 하여 비정형의 형태를 표현함으로써 디자인의 개성을 더하였습니다.\n코브릿지에도 유연하지 않은 각진 컷팅 디테일을 살려 디자인의 컨셉을 표현하였으며, 브릿지 안쪽에 심볼 로고를 각인하여 브랜드의 정체성을 강화시켰습니다.",
    colors: { frame: "무광 화이트골드", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CMWG", name: "무광 화이트골드", color: sunGlasses01_color_01, thumbnail: sunGlasses01_01_02, id:1},
      { code: "CMG", name: "무광 골드" , color: sunGlasses01_color_02, thumbnail: sunGlasses01_02_02, id:2},
      { code: "CMGR", name: "무광 그레이", color: sunGlasses01_color_03, thumbnail: sunGlasses01_03_02, id:3},
      { code: "CMBK", name: "무광 블랙", color: sunGlasses01_color_04, thumbnail: sunGlasses01_04_02 ,id:4}
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 20 mm"],
      lens:  ["C - 가로길이 55 mm",  "D - 세로길이 35 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses01_01_01, sunGlasses01_01_02, sunGlasses01_01_03, sunGlasses01_01_04, sunGlasses01_01_05, sunGlasses01_01_06, sunGlasses01_01_07, caseImg],
    mainProduct: true,
  },
  {
    id: 2,
    name: "HM1 CMG",
    img: sunGlasses01_02_01,
    price: 385000,
    description:"인간다움(Humanity)을 표현하기 위해 공예품과 같이 비정형적 이미지에서 모티브를 얻은 고글형 선글라스.\n엔드피스에서 템플까지 균일하지 않은 메탈 컷팅을 하여 비정형의 형태를 표현함으로써 디자인의 개성을 더하였습니다.\n코브릿지에도 유연하지 않은 각진 컷팅 디테일을 살려 디자인의 컨셉을 표현하였으며, 브릿지 안쪽에 심볼 로고를 각인하여 브랜드의 정체성을 강화시켰습니다.",
    colors: { frame: "무광 골드", lens: "브라운 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CMWG", name: "무광 화이트골드", color: sunGlasses01_color_01, thumbnail: sunGlasses01_01_02, id:1},
      { code: "CMG", name: "무광 골드" , color: sunGlasses01_color_02, thumbnail: sunGlasses01_02_02, id:2},
      { code: "CMGR", name: "무광 그레이", color: sunGlasses01_color_03, thumbnail: sunGlasses01_03_02, id:3},
      { code: "CMBK", name: "무광 블랙", color: sunGlasses01_color_04, thumbnail: sunGlasses01_04_02 ,id:4}
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 20 mm"],
      lens:  ["C - 가로길이 55 mm",  "D - 세로길이 35 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses01_02_01, sunGlasses01_02_02, sunGlasses01_02_03, sunGlasses01_02_04, sunGlasses01_02_05, sunGlasses01_02_06, sunGlasses01_02_07, caseImg],
    mainProduct: false
  },
  {
    id: 3,
    name: "HM1 CMGR",
    img: sunGlasses01_03_01,
    price: 385000,
    description:"인간다움(Humanity)을 표현하기 위해 공예품과 같이 비정형적 이미지에서 모티브를 얻은 고글형 선글라스.\n엔드피스에서 템플까지 균일하지 않은 메탈 컷팅을 하여 비정형의 형태를 표현함으로써 디자인의 개성을 더하였습니다.\n코브릿지에도 유연하지 않은 각진 컷팅 디테일을 살려 디자인의 컨셉을 표현하였으며, 브릿지 안쪽에 심볼 로고를 각인하여 브랜드의 정체성을 강화시켰습니다.",
    colors: { frame: "무광 그레이", lens: "라이트 옐로우 틴트 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CMWG", name: "무광 화이트골드", color: sunGlasses01_color_01, thumbnail: sunGlasses01_01_02, id:1},
      { code: "CMG", name: "무광 골드" , color: sunGlasses01_color_02, thumbnail: sunGlasses01_02_02, id:2},
      { code: "CMGR", name: "무광 그레이", color: sunGlasses01_color_03, thumbnail: sunGlasses01_03_02, id:3},
      { code: "CMBK", name: "무광 블랙", color: sunGlasses01_color_04, thumbnail: sunGlasses01_04_02 ,id:4}
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 20 mm"],
      lens:  ["C - 가로길이 55 mm",  "D - 세로길이 35 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses01_03_01, sunGlasses01_03_02, sunGlasses01_03_03, sunGlasses01_03_04, sunGlasses01_03_05, sunGlasses01_03_06, sunGlasses01_03_07, caseImg],
    mainProduct: false
  },
  {
    id: 4,
    name: "HM1 CMBK",
    img: sunGlasses01_04_01,
    price: 385000,
    description:"인간다움(Humanity)을 표현하기 위해 공예품과 같이 비정형적 이미지에서 모티브를 얻은 고글형 선글라스.\n엔드피스에서 템플까지 균일하지 않은 메탈 컷팅을 하여 비정형의 형태를 표현함으로써 디자인의 개성을 더하였습니다.\n코브릿지에도 유연하지 않은 각진 컷팅 디테일을 살려 디자인의 컨셉을 표현하였으며, 브릿지 안쪽에 심볼 로고를 각인하여 브랜드의 정체성을 강화시켰습니다.",
    colors: { frame: "무광 블랙", lens: "레드 틴트 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CMWG", name: "무광 화이트골드", color: sunGlasses01_color_01, thumbnail: sunGlasses01_01_02, id:1},
      { code: "CMG", name: "무광 골드" , color: sunGlasses01_color_02, thumbnail: sunGlasses01_02_02, id:2},
      { code: "CMGR", name: "무광 그레이", color: sunGlasses01_color_03, thumbnail: sunGlasses01_03_02, id:3},
      { code: "CMBK", name: "무광 블랙", color: sunGlasses01_color_04, thumbnail: sunGlasses01_04_02 ,id:4}
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 20 mm"],
      lens:  ["C - 가로길이 55 mm",  "D - 세로길이 35 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses01_04_01, sunGlasses01_04_02, sunGlasses01_04_03, sunGlasses01_04_04, sunGlasses01_04_05, sunGlasses01_04_06, sunGlasses01_04_07, caseImg],
    mainProduct: false
  },
  // sunGlasses 2 5~
  {
    id: 5,
    name: "HM2 CWG",
    img: sunGlasses02_01_01,
    price: 325000,
    description:"비정형적인 안구 디자인으로 작업된 둥근 직사각형의 티타늄 선글라스.\n코브릿지의 음각 패턴이 제품의 고급스러움을 강조시키며, 엔드피스와 다리의 연결 부분에 공예품의 악세사리 요소를 적용하여 자연스러우면서도 개성 있는 디자인을 표현하였습니다.",
    colors: { frame: "화이트 골드 / 블랙", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드 / 블랙", color: sunGlasses02_color_01, thumbnail: sunGlasses02_01_02, id: 5 },
      { code: "HM2 CWG(그레이 변색렌즈)", name: "화이트 골드 / 블랙 (그레이 변색렌즈)", color: sunGlasses02_color_02, thumbnail: sunGlasses02_02_02, id: 6 },
      { code: "CMG", name: "반무광 골드 / 카키", color: sunGlasses02_color_03, thumbnail: sunGlasses02_03_02, id: 7 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses02_color_04, thumbnail: sunGlasses02_04_02, id: 8 },
      { code: "CMBK_TL", name: "반무광 블랙 (브라운 변색렌즈)", color: sunGlasses02_color_05, thumbnail: sunGlasses02_05_02, id: 9 }
    ],
    size: {
      frame: ["A - 전면길이 143 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 51 mm",  "D - 세로길이 34 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses02_01_01, sunGlasses02_01_02, sunGlasses02_01_03, sunGlasses02_01_04, sunGlasses02_01_05, sunGlasses02_01_06, sunGlasses02_01_07, sunGlasses02_01_08, caseImg],
    mainProduct: false
  },
  {
    id: 6,
    name: "HM2 CWG(그레이 변색렌즈)",
    img: sunGlasses02_02_01,
    price: 325000,
    description:"비정형적인 안구 디자인으로 작업된 둥근 직사각형의 티타늄 선글라스.\n코브릿지의 음각 패턴이 제품의 고급스러움을 강조시키며, 엔드피스와 다리의 연결 부분에 공예품의 악세사리 요소를 적용하여 자연스러우면서도 개성 있는 디자인을 표현하였습니다.",
    colors: { frame: "화이트 골드 / 블랙", lens: "그레이 변색 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드 / 블랙", color: sunGlasses02_color_01, thumbnail: sunGlasses02_01_02, id: 5 },
      { code: "HM2 CWG(그레이 변색렌즈)", name: "화이트 골드 / 블랙 (그레이 변색렌즈)", color: sunGlasses02_color_02, thumbnail: sunGlasses02_02_02, id: 6 },
      { code: "CMG", name: "반무광 골드 / 카키", color: sunGlasses02_color_03, thumbnail: sunGlasses02_03_02, id: 7 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses02_color_04, thumbnail: sunGlasses02_04_02, id: 8 },
      { code: "CMBK_TL", name: "반무광 블랙 (브라운 변색렌즈)", color: sunGlasses02_color_05, thumbnail: sunGlasses02_05_02, id: 9 }
    ],
    size: {
      frame: ["A - 전면길이 143 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 51 mm",  "D - 세로길이 34 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses02_02_01, sunGlasses02_02_02, sunGlasses02_02_03, sunGlasses02_02_04, sunGlasses02_02_05, sunGlasses02_02_06, sunGlasses02_02_07, sunGlasses02_02_08, caseImg],
    mainProduct: false
  },
  {
    id: 7,
    name: "HM2 CMG",
    img: sunGlasses02_03_01,
    price: 325000,
    description:"비정형적인 안구 디자인으로 작업된 둥근 직사각형의 티타늄 선글라스.\n코브릿지의 음각 패턴이 제품의 고급스러움을 강조시키며, 엔드피스와 다리의 연결 부분에 공예품의 악세사리 요소를 적용하여 자연스러우면서도 개성 있는 디자인을 표현하였습니다.",
    colors: { frame: "반무광 골드 / 카키", lens: "그린 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드 / 블랙", color: sunGlasses02_color_01, thumbnail: sunGlasses02_01_02, id: 5 },
      { code: "HM2 CWG(그레이 변색렌즈)", name: "화이트 골드 / 블랙 (그레이 변색렌즈)", color: sunGlasses02_color_02, thumbnail: sunGlasses02_02_02, id: 6 },
      { code: "CMG", name: "반무광 골드 / 카키", color: sunGlasses02_color_03, thumbnail: sunGlasses02_03_02, id: 7 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses02_color_04, thumbnail: sunGlasses02_04_02, id: 8 },
      { code: "CMBK_TL", name: "반무광 블랙 (브라운 변색렌즈)", color: sunGlasses02_color_05, thumbnail: sunGlasses02_05_02, id: 9 }
    ],
    size: {
      frame: ["A - 전면길이 143 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 51 mm",  "D - 세로길이 34 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses02_03_01, sunGlasses02_03_02, sunGlasses02_03_03, sunGlasses02_03_04, sunGlasses02_03_05, sunGlasses02_03_06, sunGlasses02_03_07, sunGlasses02_03_08, caseImg],
    mainProduct: true
  },
  {
    id: 8,
    name: "HM2 CMBK",
    img: sunGlasses02_04_01,
    price: 325000,
    description:"비정형적인 안구 디자인으로 작업된 둥근 직사각형의 티타늄 선글라스.\n코브릿지의 음각 패턴이 제품의 고급스러움을 강조시키며, 엔드피스와 다리의 연결 부분에 공예품의 악세사리 요소를 적용하여 자연스러우면서도 개성 있는 디자인을 표현하였습니다.",
    colors: { frame: "반무광 블랙", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드 / 블랙", color: sunGlasses02_color_01, thumbnail: sunGlasses02_01_02, id: 5 },
      { code: "HM2 CWG(그레이 변색렌즈)", name: "화이트 골드 / 블랙 (그레이 변색렌즈)", color: sunGlasses02_color_02, thumbnail: sunGlasses02_02_02, id: 6 },
      { code: "CMG", name: "반무광 골드 / 카키", color: sunGlasses02_color_03, thumbnail: sunGlasses02_03_02, id: 7 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses02_color_04, thumbnail: sunGlasses02_04_02, id: 8 },
      { code: "CMBK_TL", name: "반무광 블랙 (브라운 변색렌즈)", color: sunGlasses02_color_05, thumbnail: sunGlasses02_05_02, id: 9 }
    ],
    size: {
      frame: ["A - 전면길이 143 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 51 mm",  "D - 세로길이 34 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses02_04_01, sunGlasses02_04_02, sunGlasses02_04_03, sunGlasses02_04_04, sunGlasses02_04_05, sunGlasses02_04_06, sunGlasses02_04_07, sunGlasses02_04_08, caseImg],
    mainProduct: false
  },
  {
    id: 9,
    name: "HM2 CMBK(브라운 변색렌즈)",
    img: sunGlasses02_05_01,
    price: 325000,
    description:"비정형적인 안구 디자인으로 작업된 둥근 직사각형의 티타늄 선글라스.\n코브릿지의 음각 패턴이 제품의 고급스러움을 강조시키며, 엔드피스와 다리의 연결 부분에 공예품의 악세사리 요소를 적용하여 자연스러우면서도 개성 있는 디자인을 표현하였습니다.",
    colors: { frame: "반무광 블랙", lens: "브라운 변색 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드 / 블랙", color: sunGlasses02_color_01, thumbnail: sunGlasses02_01_02, id: 5 },
      { code: "HM2 CWG(그레이 변색렌즈)", name: "화이트 골드 / 블랙 (그레이 변색렌즈)", color: sunGlasses02_color_02, thumbnail: sunGlasses02_02_02, id: 6 },
      { code: "CMG", name: "반무광 골드 / 카키", color: sunGlasses02_color_03, thumbnail: sunGlasses02_03_02, id: 7 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses02_color_04, thumbnail: sunGlasses02_04_02, id: 8 },
      { code: "CMBK_TL", name: "반무광 블랙 (브라운 변색렌즈)", color: sunGlasses02_color_05, thumbnail: sunGlasses02_05_02, id: 9 }
    ],
    size: {
      frame: ["A - 전면길이 143 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 51 mm",  "D - 세로길이 34 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses02_05_01, sunGlasses02_05_02, sunGlasses02_05_03, sunGlasses02_05_04, sunGlasses02_05_05, sunGlasses02_05_06, sunGlasses02_05_07, sunGlasses02_05_08, caseImg],
    mainProduct: false
  },
  // sunGlasses 3 10~
  {
    id: 10,
    name: "HM3 CWG",
    img: sunGlasses03_01_01,
    price: 345000,
    description:"각진 브릿지와 대비되는 부드러운 오벌 형태 안구의 조화로 독특하게 완성된 오벌 티타늄 선글라스.\n비정형적인 엔드피스 디테일과 프론트에서 템플로 자연스럽게 이어지는 두 개의 메탈 라인이 하나로 연결되는 형태가 조형적 입체감을 부여하며 아이코닉한 매력을 더합니다.",
    colors: { frame: "화이트 골드", lens: "라이트 퍼플 틴트 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드", color: sunGlasses03_color_01, thumbnail: sunGlasses03_01_02, id: 10 },
      { code: "CMG", name: "반무광 골드", color: sunGlasses03_color_02, thumbnail: sunGlasses03_02_02, id: 11 },
      { code: "CMWG", name: "반무광 화이트 골드", color: sunGlasses03_color_03, thumbnail: sunGlasses03_03_02, id: 12 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses03_color_04, thumbnail: sunGlasses03_04_02, id: 13 }
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 22 mm"],
      lens:  ["C - 가로길이 52 mm",  "D - 세로길이 39 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses03_01_01, sunGlasses03_01_02, sunGlasses03_01_03, sunGlasses03_01_04, sunGlasses03_01_05, sunGlasses03_01_06, sunGlasses03_01_07, sunGlasses03_01_08 ,caseImg],
    mainProduct: false
  },
  {
    id: 11,
    name: "HM3 CMG",
    img: sunGlasses03_02_01,
    price: 345000,
    description:"각진 브릿지와 대비되는 부드러운 오벌 형태 안구의 조화로 독특하게 완성된 오벌 티타늄 선글라스.\n비정형적인 엔드피스 디테일과 프론트에서 템플로 자연스럽게 이어지는 두 개의 메탈 라인이 하나로 연결되는 형태가 조형적 입체감을 부여하며 아이코닉한 매력을 더합니다.",
    colors: { frame: "반무광 골드", lens: "브라운 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트 골드", color: sunGlasses03_color_01, thumbnail: sunGlasses03_01_02, id: 10 },
      { code: "CMG", name: "반무광 골드", color: sunGlasses03_color_02, thumbnail: sunGlasses03_02_02, id: 11 },
      { code: "CMWG", name: "반무광 화이트 골드", color: sunGlasses03_color_03, thumbnail: sunGlasses03_03_02, id: 12 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses03_color_04, thumbnail: sunGlasses03_04_02, id: 13 }
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 22 mm"],
      lens:  ["C - 가로길이 52 mm",  "D - 세로길이 39 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses03_02_01, sunGlasses03_02_02, sunGlasses03_02_03, sunGlasses03_02_04, sunGlasses03_02_05, sunGlasses03_02_06, sunGlasses03_02_07, sunGlasses03_02_08 ,caseImg],
    mainProduct: true
  },
  {
    id: 12,
    name: "HM3 CMWG",
    img: sunGlasses03_03_01,
    price: 345000,
    description:"각진 브릿지와 대비되는 부드러운 오벌 형태 안구의 조화로 독특하게 완성된 오벌 티타늄 선글라스.\n비정형적인 엔드피스 디테일과 프론트에서 템플로 자연스럽게 이어지는 두 개의 메탈 라인이 하나로 연결되는 형태가 조형적 입체감을 부여하며 아이코닉한 매력을 더합니다.",
    colors: { frame: "반무광 화이트 골드", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트골드", color: sunGlasses03_color_01, thumbnail: sunGlasses03_01_02, id: 10 },
      { code: "CMG", name: "반무광 골드", color: sunGlasses03_color_02, thumbnail: sunGlasses03_02_02, id: 11 },
      { code: "CMWG", name: "반무광 화이트 골드", color: sunGlasses03_color_03, thumbnail: sunGlasses03_03_02, id: 12 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses03_color_04, thumbnail: sunGlasses03_04_02, id: 13 }
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 22 mm"],
      lens:  ["C - 가로길이 52 mm",  "D - 세로길이 39 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses03_03_01, sunGlasses03_03_02, sunGlasses03_03_03, sunGlasses03_03_04, sunGlasses03_03_05, sunGlasses03_03_06, sunGlasses03_03_07, sunGlasses03_03_08 ,caseImg],
    mainProduct: false
  },
  {
    id: 13,
    name: "HM3 CMBK",
    img: sunGlasses03_04_01,
    price: 345000,
    description:"각진 브릿지와 대비되는 부드러운 오벌 형태 안구의 조화로 독특하게 완성된 오벌 티타늄 선글라스.\n비정형적인 엔드피스 디테일과 프론트에서 템플로 자연스럽게 이어지는 두 개의 메탈 라인이 하나로 연결되는 형태가 조형적 입체감을 부여하며 아이코닉한 매력을 더합니다.",
    colors: { frame: "반무광 블랙", lens: "그린 렌즈 (자외선 차단 99.9%)" },
    materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
    variants: [
      { code: "CWG", name: "화이트골드", color: sunGlasses03_color_01, thumbnail: sunGlasses03_01_02, id: 10 },
      { code: "CMG", name: "반무광 골드", color: sunGlasses03_color_02, thumbnail: sunGlasses03_02_02, id: 11 },
      { code: "CMWG", name: "반무광 화이트 골드", color: sunGlasses03_color_03, thumbnail: sunGlasses03_03_02, id: 12 },
      { code: "CMBK", name: "반무광 블랙", color: sunGlasses03_color_04, thumbnail: sunGlasses03_04_02, id: 13 }
    ],
    size: {
      frame: ["A - 전면길이 145 mm", "B - 코브릿지 22 mm"],
      lens:  ["C - 가로길이 52 mm",  "D - 세로길이 39 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses03_04_01, sunGlasses03_04_02, sunGlasses03_04_03, sunGlasses03_04_04, sunGlasses03_04_05, sunGlasses03_04_06, sunGlasses03_04_07, sunGlasses03_04_08 ,caseImg],
    mainProduct: false
  },
  // sunGlasses 4 14~
  {
    id: 14,
    name: "HM4 C1",
    img: sunGlasses04_01_01,
    price: 285000,
    description:"곡선의 조화로 이루어진 둥근 직사각형의 아세테이트 선글라스.\n브릿지와 안구 가장자리의 섬세한 엣지를 주어 유니크한 개성을 담아냈습니다.",
    colors: { frame: "블랙", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM4 C1", name: "블랙", color: sunGlasses04_color_01, thumbnail: sunGlasses04_01_02, id: 14},
      { code: "HM4 C3", name: "톨토이즈", color: sunGlasses04_color_02, thumbnail: sunGlasses04_02_02, id: 15 },
      { code: "HM4 C5", name: "핑크", color: sunGlasses04_color_03, thumbnail: sunGlasses04_03_02, id: 16 },
      { code: "HM4 C8", name: "레드" ,color: sunGlasses04_color_04, thumbnail: sunGlasses04_04_02, id: 17 },
      { code: "HM4 C11", name: "화이트" , color: sunGlasses04_color_05, thumbnail: sunGlasses04_05_02, id: 18}
    ],
    size: {
      frame: ["A - 전면길이 144 mm", "B - 코브릿지 27 mm"],
      lens:  ["C - 가로길이 48 mm",  "D - 세로길이 33 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses04_01_01, sunGlasses04_01_02, sunGlasses04_01_03, sunGlasses04_01_04, sunGlasses04_01_05, sunGlasses04_01_06, sunGlasses04_01_07, sunGlasses04_01_08, caseImg],
    mainProduct: false
  },
  {
    id: 15,
    name: "HM4 C3",
    img: sunGlasses04_02_01,
    price: 285000,
    description:"곡선의 조화로 이루어진 둥근 직사각형의 아세테이트 선글라스.\n브릿지와 안구 가장자리의 섬세한 엣지를 주어 유니크한 개성을 담아냈습니다.",
    colors: { frame: "톨토이즈", lens: "그린 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM4 C1", name: "블랙", color: sunGlasses04_color_01, thumbnail: sunGlasses04_01_02, id: 14},
      { code: "HM4 C3", name: "톨토이즈", color: sunGlasses04_color_02, thumbnail: sunGlasses04_02_02, id: 15 },
      { code: "HM4 C5", name: "핑크", color: sunGlasses04_color_03, thumbnail: sunGlasses04_03_02, id: 16 },
      { code: "HM4 C8", name: "레드" ,color: sunGlasses04_color_04, thumbnail: sunGlasses04_04_02, id: 17 },
      { code: "HM4 C11", name: "화이트" , color: sunGlasses04_color_05, thumbnail: sunGlasses04_05_02, id: 18}
    ],
    size: {
      frame: ["A - 전면길이 144 mm", "B - 코브릿지 27 mm"],
      lens:  ["C - 가로길이 48 mm",  "D - 세로길이 33 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses04_02_01, sunGlasses04_02_02, sunGlasses04_02_03, sunGlasses04_02_04, sunGlasses04_02_05, sunGlasses04_02_06, sunGlasses04_02_07, sunGlasses04_02_08, caseImg],
    mainProduct: false
  },
  {
    id: 16,
    name: "HM4 C5",
    img: sunGlasses04_03_02,
    price: 285000,
    description:"곡선의 조화로 이루어진 둥근 직사각형의 아세테이트 선글라스.\n브릿지와 안구 가장자리의 섬세한 엣지를 주어 유니크한 개성을 담아냈습니다.",
    colors: { frame: "핑크", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM4 C1", name: "블랙", color: sunGlasses04_color_01, thumbnail: sunGlasses04_01_02, id: 14},
      { code: "HM4 C3", name: "톨토이즈", color: sunGlasses04_color_02, thumbnail: sunGlasses04_02_02, id: 15 },
      { code: "HM4 C5", name: "핑크", color: sunGlasses04_color_03, thumbnail: sunGlasses04_03_02, id: 16 },
      { code: "HM4 C8", name: "레드" ,color: sunGlasses04_color_04, thumbnail: sunGlasses04_04_02, id: 17 },
      { code: "HM4 C11", name: "화이트" , color: sunGlasses04_color_05, thumbnail: sunGlasses04_05_02, id: 18}
    ],
    size: {
      frame: ["A - 전면길이 144 mm", "B - 코브릿지 27 mm"],
      lens:  ["C - 가로길이 48 mm",  "D - 세로길이 33 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [sunGlasses04_03_01, sunGlasses04_03_02, sunGlasses04_03_03, sunGlasses04_03_04, sunGlasses04_03_05, sunGlasses04_03_06, sunGlasses04_03_07, sunGlasses04_03_08, caseImg],
    mainProduct: false
  },
  {
    id: 17,
    name: "HM4 C8",
    img: sunGlasses04_04_01,
    price: 285000,
    description:"곡선의 조화로 이루어진 둥근 직사각형의 아세테이트 선글라스.\n브릿지와 안구 가장자리의 섬세한 엣지를 주어 유니크한 개성을 담아냈습니다.",
    colors: { frame: "레드", lens: "그린 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM4 C1", name: "블랙", color: sunGlasses04_color_01, thumbnail: sunGlasses04_01_02, id: 14},
      { code: "HM4 C3", name: "톨토이즈", color: sunGlasses04_color_02, thumbnail: sunGlasses04_02_02, id: 15 },
      { code: "HM4 C5", name: "핑크", color: sunGlasses04_color_03, thumbnail: sunGlasses04_03_02, id: 16 },
      { code: "HM4 C8", name: "레드" ,color: sunGlasses04_color_04, thumbnail: sunGlasses04_04_02, id: 17 },
      { code: "HM4 C11", name: "화이트" , color: sunGlasses04_color_05, thumbnail: sunGlasses04_05_02, id: 18}
    ],
    size: {
      frame: ["A - 전면길이 144 mm", "B - 코브릿지 27 mm"],
      lens:  ["C - 가로길이 48 mm",  "D - 세로길이 33 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses04_04_01, sunGlasses04_04_02, sunGlasses04_04_03, sunGlasses04_04_04, sunGlasses04_04_05, sunGlasses04_04_06, sunGlasses04_04_07, sunGlasses04_04_08,caseImg],
    mainProduct: true
  },
  {
    id: 18,
    name: "HM4 C11",
    img: sunGlasses04_05_01,
    price: 285000,
    description:"곡선의 조화로 이루어진 둥근 직사각형의 아세테이트 선글라스.\n브릿지와 안구 가장자리의 섬세한 엣지를 주어 유니크한 개성을 담아냈습니다.",
    colors: { frame: "화이트", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM4 C1", name: "블랙", color: sunGlasses04_color_01, thumbnail: sunGlasses04_01_02, id: 14},
      { code: "HM4 C3", name: "톨토이즈", color: sunGlasses04_color_02, thumbnail: sunGlasses04_02_02, id: 15 },
      { code: "HM4 C5", name: "핑크", color: sunGlasses04_color_03, thumbnail: sunGlasses04_03_02, id: 16 },
      { code: "HM4 C8", name: "레드" ,color: sunGlasses04_color_04, thumbnail: sunGlasses04_04_02, id: 17 },
      { code: "HM4 C11", name: "화이트" , color: sunGlasses04_color_05, thumbnail: sunGlasses04_05_02, id: 18}
    ],
    size: {
      frame: ["A - 전면길이 144 mm", "B - 코브릿지 27 mm"],
      lens:  ["C - 가로길이 48 mm",  "D - 세로길이 33 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses04_05_01, sunGlasses04_05_02, sunGlasses04_05_03, sunGlasses04_05_04, sunGlasses04_05_05, sunGlasses04_05_06, sunGlasses04_05_07, sunGlasses04_05_08,caseImg],
    mainProduct: false
  },
  // sunGlasses 5 19~
  {
    id: 19,
    name: "HM5 C1",
    img: sunGlasses05_01_01,
    price: 285000,
    description:"볼드한 두께감으로 강렬한 인상을 선사하는 직사각형 아세테이트 선글라스.\n프레임 양쪽 끝의 둥근 마감 처리와 엣지가 강조된 브릿지의 대비가 유니크한 룩으로 완성시켰습니다.",
    colors: { frame: "블랙", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM5 C1", name: "블랙", color: sunGlasses05_color_01, thumbnail: sunGlasses05_01_02 , id: 19 },
      { code: "HM5 C2", name: "브라운", color: sunGlasses05_color_02, thumbnail: sunGlasses05_02_02, id: 20 },
      { code: "HM5 C3", name: "톨토이즈", color: sunGlasses05_color_03, thumbnail: sunGlasses05_03_02, id: 21 },
      { code: "HM5 C07", name: "라이트 옐로우", color: sunGlasses05_color_04, thumbnail: sunGlasses05_04_02, id: 22 },
      { code: "HM5 C09", name: "라이트 카키", color: sunGlasses05_color_05, thumbnail: sunGlasses05_05_02, id: 23 }
    ],
    size: {
      frame: ["A - 전면길이 148 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 49 mm",  "D - 세로길이 36 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses05_01_01, sunGlasses05_01_02, sunGlasses05_01_03, sunGlasses05_01_04, sunGlasses05_01_05, sunGlasses05_01_06, sunGlasses05_01_07, sunGlasses05_01_08, caseImg],
    mainProduct: true
  },
  {
    id: 20,
    name: "HM5 C2",
    img: sunGlasses05_02_01,
    price: 285000,
    description:"볼드한 두께감으로 강렬한 인상을 선사하는 직사각형 아세테이트 선글라스.\n프레임 양쪽 끝의 둥근 마감 처리와 엣지가 강조된 브릿지의 대비가 유니크한 룩으로 완성시켰습니다.",
    colors: { frame: "브라운", lens: "그린 틴트 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM5 C1", name: "블랙", color: sunGlasses05_color_01, thumbnail: sunGlasses05_01_02 , id: 19 },
      { code: "HM5 C2", name: "브라운", color: sunGlasses05_color_02, thumbnail: sunGlasses05_02_02, id: 20 },
      { code: "HM5 C3", name: "톨토이즈", color: sunGlasses05_color_03, thumbnail: sunGlasses05_03_02, id: 21 },
      { code: "HM5 C07", name: "라이트 옐로우", color: sunGlasses05_color_04, thumbnail: sunGlasses05_04_02, id: 22 },
      { code: "HM5 C09", name: "라이트 카키", color: sunGlasses05_color_05, thumbnail: sunGlasses05_05_02, id: 23 }
    ],
    size: {
      frame: ["A - 전면길이 148 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 49 mm",  "D - 세로길이 36 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses05_02_01, sunGlasses05_02_02, sunGlasses05_02_03, sunGlasses05_02_04, sunGlasses05_02_05, sunGlasses05_02_06, sunGlasses05_02_07, sunGlasses05_02_08, caseImg],
    mainProduct: false
  },
  {
    id: 21,
    name: "HM5 C3",
    img: sunGlasses05_03_01,
    price: 285000,
    description:"볼드한 두께감으로 강렬한 인상을 선사하는 직사각형 아세테이트 선글라스.\n프레임 양쪽 끝의 둥근 마감 처리와 엣지가 강조된 브릿지의 대비가 유니크한 룩으로 완성시켰습니다.",
    colors: { frame: "톨토이즈", lens: "그린 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM5 C1", name: "블랙", color: sunGlasses05_color_01, thumbnail: sunGlasses05_01_02 , id: 19 },
      { code: "HM5 C2", name: "브라운", color: sunGlasses05_color_02, thumbnail: sunGlasses05_02_02, id: 20 },
      { code: "HM5 C3", name: "톨토이즈", color: sunGlasses05_color_03, thumbnail: sunGlasses05_03_02, id: 21 },
      { code: "HM5 C07", name: "라이트 옐로우", color: sunGlasses05_color_04, thumbnail: sunGlasses05_04_02, id: 22 },
      { code: "HM5 C09", name: "라이트 카키", color: sunGlasses05_color_05, thumbnail: sunGlasses05_05_02, id: 23 }
    ],
    size: {
      frame: ["A - 전면길이 148 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 49 mm",  "D - 세로길이 36 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses05_03_01, sunGlasses05_03_02, sunGlasses05_03_03, sunGlasses05_03_04, sunGlasses05_03_05, sunGlasses05_03_06, sunGlasses05_03_07, sunGlasses05_03_08, caseImg],
    mainProduct: false
  },
  {
    id: 22,
    name: "HM5 C07",
    img: sunGlasses05_04_01,
    price: 285000,
    description:"볼드한 두께감으로 강렬한 인상을 선사하는 직사각형 아세테이트 선글라스.\n프레임 양쪽 끝의 둥근 마감 처리와 엣지가 강조된 브릿지의 대비가 유니크한 룩으로 완성시켰습니다.",
    colors: { frame: "라이트 옐로우", lens: "그린 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM5 C1", name: "블랙", color: sunGlasses05_color_01, thumbnail: sunGlasses05_01_02 , id: 19 },
      { code: "HM5 C2", name: "브라운", color: sunGlasses05_color_02, thumbnail: sunGlasses05_02_02, id: 20 },
      { code: "HM5 C3", name: "톨토이즈", color: sunGlasses05_color_03, thumbnail: sunGlasses05_03_02, id: 21 },
      { code: "HM5 C07", name: "라이트 옐로우", color: sunGlasses05_color_04, thumbnail: sunGlasses05_04_02, id: 22 },
      { code: "HM5 C09", name: "라이트 카키", color: sunGlasses05_color_05, thumbnail: sunGlasses05_05_02, id: 23 }
    ],
    size: {
      frame: ["A - 전면길이 148 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 49 mm",  "D - 세로길이 36 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses05_04_01, sunGlasses05_04_02, sunGlasses05_04_03, sunGlasses05_04_04, sunGlasses05_04_05, sunGlasses05_04_06, sunGlasses05_04_07, sunGlasses05_04_08, caseImg],
    mainProduct: false
  },
  {
    id: 23,
    name: "HM5 C09",
    img: sunGlasses05_05_01,
    price: 285000,
    description:"볼드한 두께감으로 강렬한 인상을 선사하는 직사각형 아세테이트 선글라스.\n프레임 양쪽 끝의 둥근 마감 처리와 엣지가 강조된 브릿지의 대비가 유니크한 룩으로 완성시켰습니다.",
    colors: { frame: "라이트 카키", lens: "브라운 렌즈 (자외선 차단 99.9%)" },
    materials: { overall: "아세테이트" },
    variants: [
      { code: "HM5 C1", name: "블랙", color: sunGlasses05_color_01, thumbnail: sunGlasses05_01_02 , id: 19 },
      { code: "HM5 C2", name: "브라운", color: sunGlasses05_color_02, thumbnail: sunGlasses05_02_02, id: 20 },
      { code: "HM5 C3", name: "톨토이즈", color: sunGlasses05_color_03, thumbnail: sunGlasses05_03_02, id: 21 },
      { code: "HM5 C07", name: "라이트 옐로우", color: sunGlasses05_color_04, thumbnail: sunGlasses05_04_02, id: 22 },
      { code: "HM5 C09", name: "라이트 카키", color: sunGlasses05_color_05, thumbnail: sunGlasses05_05_02, id: 23 }
    ],
    size: {
      frame: ["A - 전면길이 148 mm", "B - 코브릿지 24 mm"],
      lens:  ["C - 가로길이 49 mm",  "D - 세로길이 36 mm"],
      leg:   ["E - 다리길이 150 mm"],
    },
    gallery: [ sunGlasses05_05_01, sunGlasses05_05_02, sunGlasses05_05_03, sunGlasses05_05_04, sunGlasses05_05_05, sunGlasses05_05_06, sunGlasses05_05_07, sunGlasses05_05_08, caseImg],
    mainProduct: false
  },
  // sunGlasses 6 -24~
  // {
  //   id: 6,
  //   name: "HM6 CMBK",
  //   img: `${imageData.product.sunGlasses[5]}`,
  //   price: 335000,
  //   description:"메탈의 구조적인 디테일이 돋보이는 투브릿지 티타늄 선글라스.\n비정형적인 메탈 구조로 템플 디자인을 표현함으로써 제품의 입체감이 돋보이게 디자인 되었습니다.\n탑 브릿지의 자연스로운 이중 메탈 구조로 조형적인 입체감을 부여하여 유니크한 개성을 더합니다.",
  //   colors: { frame: "반무광 블랙", lens: "블루 렌즈 (자외선 차단 99.9%)" },
  //   materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
  //   variants: [
  //     { code: "CWG", name: "화이트골드" },
  //     { code: "CMG", name: "반무광 골드" },
  //     { code: "CMBK", name: "반무광 블랙" },
  //     { code: "C1WG", name: "화이트골드" },
  //     { code: "C1PG", name: "핑크골드" }
  //   ],
  //   size: {
  //     frame: ["A - 전면길이 149 mm", "B - 코브릿지 20 mm"],
  //     lens:  ["C - 가로길이 56 mm",  "D - 세로길이 40 mm"],
  //     leg:   ["E - 다리길이 150 mm"],
  //   },
  //   thumbnail: sunGlasses01_01,
  //   gallery: [ caseImg]
  // },
  // {
  //   id: 7,
  //   name: "HM7 CMPG",
  //   img: `${imageData.product.sunGlasses[6]}`,
  //   price: 275000,
  //   description:"덧대어지는 공예품의 비정형적 형상을 프로젝트 프로덕트만의 모던함으로 풀어낸 티타늄 선글라스.\n브릿지와 템플에 이중으로 덧댄 메탈 디테일이 조형적 입체감을 부여하여 추상적인 이미지를 볼륨있는 형태로 자연스레 담아냈습니다.",
  //   colors: { frame: "무광 핑크골드", lens: "브라운 렌즈 (자외선 차단 99.9%)" },
  //   materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
  //   variants: [
  //     { code: "CMG", name: "무광 골드" },
  //     { code: "CMWG", name: "무광 화이트골드" },
  //     { code: "CMPG", name: "무광 핑크골드" },
  //     { code: "CMBK", name: "무광 블랙" }
  //   ],
  //   size: {
  //     frame: ["A - 전면길이 145 mm", "B - 코브릿지 21 mm"],
  //     lens:  ["C - 가로길이 54 mm",  "D - 세로길이 44 mm"],
  //     leg:   ["E - 다리길이 150 mm"],
  //   },
  //   thumbnail: sunGlasses01_01,
  //   gallery: [ caseImg]
  // },
  // {
  //   id: 8,
  //   name: "HM8 C1MG",
  //   img: `${imageData.product.sunGlasses[7]}`,
  //   price: 285000,
  //   description:"덧대어지는 공예품의 비정형적 형상을 프로젝트 프로덕트만의 모던함으로 풀어낸 티타늄 선글라스.\n브릿지와 템플에 이중으로 덧댄 메탈 디테일이 조형적 입체감을 부여하여 추상적인 이미지를 볼륨있는 형태로 자연스레 담아냈습니다.",
  //   colors: { frame: "블랙 / 반무광 골드", lens: "그린 렌즈 (자외선 차단 99.9%)" },
  //   materials: { front: "아세테이트 / 티타늄", temple: "티타늄 / 아세테이트" },
  //   variants: [
  //     { code: "C1WG", name: "블랙 / 화이트골드" },
  //     { code: "C1PG", name: "블랙 / 핑크골드" },
  //     { code: "C1MG", name: "블랙 / 무광 골드" },
  //     { code: "C1MBK", name: "블랙 / 무광 블랙" }
  //   ],
  //   size: {
  //     frame: ["A - 전면길이 149 mm", "B - 코브릿지 23 mm"],
  //     lens:  ["C - 가로길이 53 mm",  "D - 세로길이 42 mm"],
  //     leg:   ["E - 다리길이 150 mm"],
  //   },
  //   thumbnail: sunGlasses01_01,
  //   gallery: [ caseImg]
  // },
  // {
  //   id: 9,
  //   name: "HM9 C1MBK",
  //   img: `${imageData.product.sunGlasses[8]}`,
  //   price: 285000,
  //   description:"덧대어지는 공예품의 비정형적 형상을 프로젝트 프로덕트만의 모던함으로 풀어낸 티타늄 선글라스.\n브릿지와 템플에 이중으로 덧댄 메탈 디테일이 조형적 입체감을 부여하여 추상적인 이미지를 볼륨있는 형태로 자연스레 담아냈습니다.",
  //   colors: { frame: "블랙 / 반무광 블랙", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
  //   materials: { front: "아세테이트 / 티타늄", temple: "티타늄 / 아세테이트" },
  //   variants: [
  //     { code: "C1WG", name: "블랙 / 화이트골드" },
  //     { code: "C1PG", name: "블랙 / 핑크골드" },
  //     { code: "C1MG", name: "블랙 / 무광 골드" },
  //     { code: "C1MBK", name: "블랙 / 반무광 블랙" }
  //   ],
  //   size: {
  //     frame: ["A - 전면길이 149 mm", "B - 코브릿지 24 mm"],
  //     lens:  ["C - 가로길이 53 mm",  "D - 세로길이 42 mm"],
  //     leg:   ["E - 다리길이 150 mm"],
  //   },
  //   thumbnail: sunGlasses01_01,
  //   gallery: [ caseImg]
  // },
  // {
  //   id: 10,
  //   name: "HM10 C1",
  //   img: `${imageData.product.sunGlasses[9]}`,
  //   price: 275000,
  //   description:"간결한 실루엣의 사각 아세테이트 선글라스.\n군더더기 없이 뻗어나가는 프레임은 모던한 분위기를 연출하며, 프레임과 템플의 정교하게 깎아낸 엣지와 메탈 심볼로 세련된 디테일을 더했습니다.",
  //   colors: { frame: "블랙", lens: "블랙 렌즈 (자외선 차단 99.9%)" },
  //   materials: { overall: "아세테이트" },
  //   variants: [
  //     { code: "C1", name: "블랙" },
  //     { code: "C3", name: "톨토이즈" },
  //     { code: "C06", name: "라이트 블루" },
  //     { code: "C1FL", name: "블랙" },
  //     { code: "C1FL(Purple Tint)", name: "블랙" }
  //   ],
  //   size: {
  //     frame: ["A - 전면길이 149 mm", "B - 코브릿지 22 mm"],
  //     lens:  ["C - 가로길이 51 mm",  "D - 세로길이 40 mm"],
  //     leg:   ["E - 다리길이 150 mm"],
  //   },
  //   thumbnail: sunGlasses01_01,
  //   gallery: [ caseImg]
  // },
  // {
  //   id: 11,
  //   name: "HM11 CG",
  //   img: `${imageData.product.sunGlasses[10]}`,
  //   price: 335000,
  //   description:"비정형적인 메탈 볼륨감을 사용하여 PROJECT12 테마인 인간다움(Humanity)을 표현한 오벌 티타늄 안경.\n볼륨감이 돋보이는 브릿지와 엔드피스-템플의 디테일은 메탈이 덧붙이는 느낌을 주어 독특한 개성을 더하였습니다.",
  //   colors: { frame: "골드", lens: "블루 렌즈 (자외선 차단 99.9%)" },
  //   materials: { front: "티타늄", temple: "티타늄 / 아세테이트" },
  //   variants: [
  //     { code: "CG", name: "골드" },
  //     { code: "CWG", name: "화이트골드" },
  //     { code: "CMBK", name: "무광 블랙" },
  //     { code: "C1PG", name: "핑크골드" }
  //   ],
  //   size: {
  //     frame: ["A - 전면길이 145 mm", "B - 코브릿지 20 mm"],
  //     lens:  ["C - 가로길이 52 mm",  "D - 세로길이 38 mm"],
  //     leg:   ["E - 다리길이 150 mm"],
  //   },
  //   thumbnail: sunGlasses01_01,
  //   gallery: [ caseImg]
  // }
];


  