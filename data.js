const express = require("express");

const data = [
  {
    "shopName": "스테이보드게임카페",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1663",
    "roadAddress": "서울특별시 관악구 조원로2길 51",
    "lng": 126.9015311,
    "lat": 37.48144605
  },
  {
    "shopName": "싱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 80",
    "roadAddress": "서울특별시 송파구 송파대로28길 27",
    "lng": 127.1200802,
    "lat": 37.49488154
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아청담에스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 118-17",
    "roadAddress": "서울특별시 강남구 압구정로 461",
    "lng": 127.0472158,
    "lat": 37.52524956
  },
  {
    "shopName": "쎄븐스퀘어",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 태평로2가 23",
    "roadAddress": "서울특별시 중구 소공로 119",
    "lng": 126.9780738,
    "lat": 37.56465087
  },
  {
    "shopName": "커피팡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 봉익동 10-1",
    "roadAddress": "서울특별시 종로구 율곡로10길 105",
    "lng": 126.9922243,
    "lat": 37.57295397
  },
  {
    "shopName": "이디아커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 556-2",
    "roadAddress": "서울특별시 강동구 성내로6길 20",
    "lng": 127.1223269,
    "lat": 37.52901236
  },
  {
    "shopName": "금산인삼집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 사당동 419-91",
    "roadAddress": "서울특별시 동작구 남부순환로263길 32-1",
    "lng": 126.9768009,
    "lat": 37.4788781
  },
  {
    "shopName": "COFFEEBEAN영동2교사거리점",
    "branchName": "영동2교사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 425",
    "roadAddress": "서울특별시 강남구 논현로 136",
    "lng": 127.0432328,
    "lat": 37.48187659
  },
  {
    "shopName": "토프레소",
    "branchName": "석관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 석관동 261-194",
    "roadAddress": "서울특별시 성북구 화랑로32길 149",
    "lng": 127.0603741,
    "lat": 37.60449398
  },
  {
    "shopName": "엔제리너스",
    "branchName": "강동롯데시네마점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 44-1",
    "roadAddress": "서울특별시 강동구 천호옛길 85",
    "lng": 127.1253154,
    "lat": 37.53663044
  },
  {
    "shopName": "스타벅스",
    "branchName": "가로수길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 529-10",
    "roadAddress": "서울특별시 강남구 논현로175길 94",
    "lng": 127.0216293,
    "lat": 37.52318421
  },
  {
    "shopName": "카페띠아모",
    "branchName": "광희점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 광희동2가 319",
    "roadAddress": "서울특별시 중구 퇴계로 320",
    "lng": 127.0074461,
    "lat": 37.56390131
  },
  {
    "shopName": "심리카페COM",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 164-33",
    "roadAddress": "서울특별시 마포구 어울마당로 133",
    "lng": 126.9246431,
    "lat": 37.55624713
  },
  {
    "shopName": "커피엔진",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 192-29",
    "roadAddress": "서울특별시 성동구 고산자로 284",
    "lng": 127.0367839,
    "lat": 37.56490119
  },
  {
    "shopName": "이디야커피",
    "branchName": "개봉중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 개봉동 358-20",
    "roadAddress": "서울특별시 구로구 개봉로3길 26",
    "lng": 126.8548716,
    "lat": 37.48643631
  },
  {
    "shopName": "숲",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 742",
    "roadAddress": "서울특별시 노원구 화랑로 556",
    "lng": 127.0877351,
    "lat": 37.62127881
  },
  {
    "shopName": "스타벅스",
    "branchName": "서강대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 63-14",
    "roadAddress": "서울특별시 마포구 백범로 23",
    "lng": 126.9375433,
    "lat": 37.55242638
  },
  {
    "shopName": "메디찌커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 188-2",
    "roadAddress": "서울특별시 광진구 아차산로78길 147",
    "lng": 127.1099585,
    "lat": 37.54823841
  },
  {
    "shopName": "할리스",
    "branchName": "백석예술대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 981-7",
    "roadAddress": "서울특별시 서초구 방배로9길 23",
    "lng": 126.9968837,
    "lat": 37.48036585
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "씨제이프레시웨이강남세브란스병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 146-92",
    "roadAddress": "서울특별시 강남구 언주로 211",
    "lng": 127.0462939,
    "lat": 37.49279514
  },
  {
    "shopName": "언덕위에카파",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 716-10",
    "roadAddress": "서울특별시 성북구 솔샘로15다길 17",
    "lng": 127.0040626,
    "lat": 37.61141169
  },
  {
    "shopName": "북해빙수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 19-3",
    "roadAddress": "서울특별시 서초구 신반포로 176",
    "lng": 127.0023932,
    "lat": 37.50393001
  },
  {
    "shopName": "카페알토바이밀도",
    "branchName": "알토바이밀도",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로2가 181",
    "roadAddress": "서울특별시 용산구 한강대로 112",
    "lng": 126.9683983,
    "lat": 37.52916472
  },
  {
    "shopName": "영플랜츠&갤러리영",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 713-15",
    "roadAddress": "서울특별시 도봉구 도봉로135길 28",
    "lng": 127.0390797,
    "lat": 37.65924967
  },
  {
    "shopName": "루시",
    "branchName": "드커피",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 89-17",
    "roadAddress": "서울특별시 은평구 은평로9길 9",
    "lng": 126.9212581,
    "lat": 37.60104277
  },
  {
    "shopName": "신사장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 15-8",
    "roadAddress": "서울특별시 서초구 나루터로 65",
    "lng": 127.0168649,
    "lat": 37.51554878
  },
  {
    "shopName": "미홍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 490",
    "roadAddress": "서울특별시 마포구 양화로 45",
    "lng": 126.9139374,
    "lat": 37.55149077
  },
  {
    "shopName": "뚜또오케이고대점",
    "branchName": "고대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 15-102",
    "roadAddress": "서울특별시 성북구 개운사길 31",
    "lng": 127.0290725,
    "lat": 37.58779662
  },
  {
    "shopName": "젤라또랩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 1004",
    "roadAddress": "서울특별시 강남구 테헤란로114길 38",
    "lng": 127.0670824,
    "lat": 37.50706268
  },
  {
    "shopName": "카페커피씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 410-39",
    "roadAddress": "서울특별시 서대문구 증가로10길 66",
    "lng": 126.9254624,
    "lat": 37.57958245
  },
  {
    "shopName": "빽다방공덕새창로점",
    "branchName": "공덕새창로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 25-5",
    "roadAddress": "서울특별시 마포구 새창로 15-1",
    "lng": 126.9518216,
    "lat": 37.54222806
  },
  {
    "shopName": "카페",
    "branchName": "북촌원",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 가회동 55-2",
    "roadAddress": "서울특별시 종로구 북촌로11길 9-4",
    "lng": 126.9843419,
    "lat": 37.5815274
  },
  {
    "shopName": "스타벅스",
    "branchName": "파미에파크점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 118-3",
    "roadAddress": "서울특별시 서초구 사평대로 205",
    "lng": 127.0078261,
    "lat": 37.50448036
  },
  {
    "shopName": "마운틴뷰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1007-4",
    "roadAddress": "서울특별시 노원구 동일로242길 64",
    "lng": 127.0585065,
    "lat": 37.67444455
  },
  {
    "shopName": "별별다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로4가 188",
    "roadAddress": "서울특별시 종로구 종로32길 2",
    "lng": 127.000395,
    "lat": 37.57061766
  },
  {
    "shopName": "스타벅스",
    "branchName": "코엑스몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "이나디토",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 251-44",
    "roadAddress": "서울특별시 광진구 자양로22길 23",
    "lng": 127.0845776,
    "lat": 37.53966458
  },
  {
    "shopName": "블랙벤자민",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 966-17",
    "roadAddress": "서울특별시 강서구 까치산로18길 17",
    "lng": 126.8500593,
    "lat": 37.54731781
  },
  {
    "shopName": "골드브라운",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 53-11",
    "roadAddress": "서울특별시 영등포구 국제금융로 112",
    "lng": 126.9338858,
    "lat": 37.51838806
  },
  {
    "shopName": "카페라리방이점",
    "branchName": "방이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 183-6",
    "roadAddress": "서울특별시 송파구 위례성대로 134",
    "lng": 127.1262246,
    "lat": 37.51203829
  },
  {
    "shopName": "카페하파라이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 906-16",
    "roadAddress": "서울특별시 강남구 선릉로76길 40",
    "lng": 127.0537299,
    "lat": 37.50215384
  },
  {
    "shopName": "카페이탈리아노",
    "branchName": "이탈리아노",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 316",
    "roadAddress": "서울특별시 강남구 삼성로 212",
    "lng": 127.0658971,
    "lat": 37.49961058
  },
  {
    "shopName": "동빙고다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 동빙고동 114",
    "roadAddress": "서울특별시 용산구 서빙고로75길 17",
    "lng": 126.9967448,
    "lat": 37.52202033
  },
  {
    "shopName": "아인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 299-188",
    "roadAddress": "서울특별시 성동구 아차산로5길 37",
    "lng": 127.0541496,
    "lat": 37.54865153
  },
  {
    "shopName": "커피빈",
    "branchName": "안국역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 안국동 163",
    "roadAddress": "서울특별시 종로구 율곡로 47",
    "lng": 126.984571,
    "lat": 37.57633037
  },
  {
    "shopName": "125coffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 409-2",
    "roadAddress": "서울특별시 은평구 통일로87길 5-4",
    "lng": 126.9188888,
    "lat": 37.62311435
  },
  {
    "shopName": "스타벅스을지로입구",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 삼각동 115",
    "roadAddress": "서울특별시 중구 남대문로10길 9",
    "lng": 126.9832121,
    "lat": 37.56720013
  },
  {
    "shopName": "NEO",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 37-3",
    "roadAddress": "서울특별시 서대문구 이화여대7길 30",
    "lng": 126.9438814,
    "lat": 37.55881756
  },
  {
    "shopName": "카페",
    "branchName": "펑키보드게임",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 갈현동 400-2",
    "roadAddress": "서울특별시 은평구 연서로29길 14-13",
    "lng": 126.9191439,
    "lat": 37.61957564
  },
  {
    "shopName": "카페",
    "branchName": "산티아고",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 391-18",
    "roadAddress": "서울특별시 마포구 양화로7길 6-5",
    "lng": 126.9151794,
    "lat": 37.55169141
  },
  {
    "shopName": "커피빈",
    "branchName": "미스리",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 303",
    "roadAddress": "서울특별시 송파구 도곡로64길 8",
    "lng": 127.0788577,
    "lat": 37.50514574
  },
  {
    "shopName": "도투루커피",
    "branchName": "화양점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 228",
    "roadAddress": "서울특별시 광진구 능동로 185",
    "lng": 127.0736115,
    "lat": 37.54708482
  },
  {
    "shopName": "엘에스씨푸드티타임동아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 252-5",
    "roadAddress": "서울특별시 동대문구 무학로25길 16",
    "lng": 127.0296087,
    "lat": 37.5735285
  },
  {
    "shopName": "어반테라스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 171-62",
    "roadAddress": "서울특별시 강북구 도봉로97길 73",
    "lng": 127.0256761,
    "lat": 37.64331759
  },
  {
    "shopName": "구름정원커피집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 25",
    "roadAddress": "서울특별시 은평구 불광로18길 32",
    "lng": 126.9346892,
    "lat": 37.62248317
  },
  {
    "shopName": "지원스터디카페",
    "branchName": "크레마",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 208-5",
    "roadAddress": "서울특별시 노원구 공릉로 198",
    "lng": 127.0785856,
    "lat": 37.62742489
  },
  {
    "shopName": "카페",
    "branchName": "영사주",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 신림동 1424-1",
    "roadAddress": "서울특별시 관악구 신림로 360",
    "lng": 126.9295243,
    "lat": 37.48635242
  },
  {
    "shopName": "쿠카쿠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 642",
    "roadAddress": "서울특별시 송파구 송파대로 201",
    "lng": 127.1205807,
    "lat": 37.48788401
  },
  {
    "shopName": "바오밥나무",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 녹번동 165-8",
    "roadAddress": "서울특별시 은평구 서오릉로4길 10",
    "lng": 126.9258453,
    "lat": 37.60493201
  },
  {
    "shopName": "빅밤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 70-3",
    "roadAddress": "서울특별시 광진구 군자로 156",
    "lng": 127.0764232,
    "lat": 37.55491895
  },
  {
    "shopName": "커피방앗간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 중림동 149",
    "roadAddress": "서울특별시 중구 서소문로6길 34",
    "lng": 126.9672091,
    "lat": 37.5596006
  },
  {
    "shopName": "커피솔브즈에브리띵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 50-54",
    "roadAddress": "서울특별시 구로구 경인로47길 95-4",
    "lng": 126.8638589,
    "lat": 37.50299415
  },
  {
    "shopName": "카페",
    "branchName": "신사대박보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 신사동 586-5",
    "roadAddress": "서울특별시 강남구 논현로 809",
    "lng": 127.0278355,
    "lat": 37.52092876
  },
  {
    "shopName": "오츠커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 원효로1가 48-8",
    "roadAddress": "서울특별시 용산구 원효로89길 13-12",
    "lng": 126.9677455,
    "lat": 37.54040406
  },
  {
    "shopName": "CAFEAZITO",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 457-3",
    "roadAddress": "서울특별시 강남구 논현로26길 46-6",
    "lng": 127.0460039,
    "lat": 37.48358398
  },
  {
    "shopName": "웨스트엔드문화카페",
    "branchName": "웨스트엔드문화",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 119",
    "roadAddress": "서울특별시 강서구 공항대로 340",
    "lng": 126.8448721,
    "lat": 37.55712448
  },
  {
    "shopName": "김밥천국",
    "branchName": "푸드카페",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 34-9",
    "roadAddress": "서울특별시 강동구 양재대로 1579",
    "lng": 127.1428195,
    "lat": 37.54655327
  },
  {
    "shopName": "카페아띠끄",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 91-12",
    "roadAddress": "서울특별시 강남구 도산대로 421",
    "lng": 127.041938,
    "lat": 37.52393638
  },
  {
    "shopName": "515티룸",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 401-1",
    "roadAddress": "서울특별시 서대문구 명지대2길 14",
    "lng": 126.9252042,
    "lat": 37.58178764
  },
  {
    "shopName": "카페폴로라",
    "branchName": "플로라",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 2-342",
    "roadAddress": "서울특별시 마포구 도화4길 51",
    "lng": 126.9519127,
    "lat": 37.53976001
  },
  {
    "shopName": "카페네꼬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 423-13",
    "roadAddress": "서울특별시 도봉구 삼양로146길 10",
    "lng": 127.0132055,
    "lat": 37.6523504
  },
  {
    "shopName": "카페라또",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 274-3",
    "roadAddress": "서울특별시 은평구 불광로 37-7",
    "lng": 126.9293255,
    "lat": 37.61181148
  },
  {
    "shopName": "컴앤드씨카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 276-20",
    "roadAddress": "서울특별시 노원구 초안산로2라길 37",
    "lng": 127.0583972,
    "lat": 37.63104086
  },
  {
    "shopName": "죠샌드위치선릉점",
    "branchName": "선릉점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 143-9",
    "roadAddress": "서울특별시 강남구 테헤란로77길 13",
    "lng": 127.0542646,
    "lat": 37.50728513
  },
  {
    "shopName": "제이디비스퀘어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 395-15",
    "roadAddress": "서울특별시 마포구 잔다리로 31",
    "lng": 126.9195657,
    "lat": 37.55124506
  },
  {
    "shopName": "할리스커피",
    "branchName": "구로디지털뉴스테이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1126",
    "roadAddress": "서울특별시 영등포구 시흥대로 595",
    "lng": 126.9033374,
    "lat": 37.48627442
  },
  {
    "shopName": "에스에스카페",
    "branchName": "아일랜드가락점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 가락동 80",
    "roadAddress": "서울특별시 송파구 송파대로28길 27",
    "lng": 127.1200802,
    "lat": 37.49488154
  },
  {
    "shopName": "소프트리",
    "branchName": "압구정새서울점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 575-1",
    "roadAddress": "서울특별시 강남구 압구정로 154",
    "lng": 127.0265049,
    "lat": 37.52581952
  },
  {
    "shopName": "카페바른생활",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 101-2",
    "roadAddress": "서울특별시 성북구 고려대로27길 15",
    "lng": 127.0296944,
    "lat": 37.58699079
  },
  {
    "shopName": "테이큰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 504-2",
    "roadAddress": "서울특별시 광진구 능동로16길 51",
    "lng": 127.0758172,
    "lat": 37.54533604
  },
  {
    "shopName": "두더지손",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동6가 110-42",
    "roadAddress": "서울특별시 영등포구 당산로52길 31-1",
    "lng": 126.9051499,
    "lat": 37.53328971
  },
  {
    "shopName": "애니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 146-11",
    "roadAddress": "서울특별시 금천구 시흥대로141길 66",
    "lng": 126.8978721,
    "lat": 37.4757624
  },
  {
    "shopName": "더카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 128-18",
    "roadAddress": "서울특별시 양천구 목동중앙로13길 25",
    "lng": 126.8816285,
    "lat": 37.5453144
  },
  {
    "shopName": "카페57",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 온수동 7-5",
    "roadAddress": "서울특별시 구로구 부일로9길 57",
    "lng": 126.8254002,
    "lat": 37.4946618
  },
  {
    "shopName": "탐앤탐스탐스커버리아셈타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 77-15",
    "roadAddress": "서울특별시 강남구 봉은사로 543",
    "lng": 127.0593452,
    "lat": 37.5143269
  },
  {
    "shopName": "커피볶는집낙타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 13-304",
    "roadAddress": "서울특별시 성동구 상원6나길 6",
    "lng": 127.0492734,
    "lat": 37.54854029
  },
  {
    "shopName": "마이카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 688-3",
    "roadAddress": "서울특별시 동대문구 사가정로17길 15",
    "lng": 127.059987,
    "lat": 37.57854985
  },
  {
    "shopName": "제노까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 461-5",
    "roadAddress": "서울특별시 구로구 구로동로 179",
    "lng": 126.8825233,
    "lat": 37.49444108
  },
  {
    "shopName": "커피야",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 25-3",
    "roadAddress": "서울특별시 송파구 백제고분로41길 22",
    "lng": 127.1073951,
    "lat": 37.50788779
  },
  {
    "shopName": "ARISTACOFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 1000-2",
    "roadAddress": "서울특별시 강남구 테헤란로108길 22",
    "lng": 127.0659178,
    "lat": 37.50793651
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "신세계DF명동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로1가 52-5",
    "roadAddress": "서울특별시 중구 소공로 63",
    "lng": 126.9809659,
    "lat": 37.56090951
  },
  {
    "shopName": "브이엑스메이트카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 395-17",
    "roadAddress": "서울특별시 마포구 잔다리로 23",
    "lng": 126.9202182,
    "lat": 37.55072843
  },
  {
    "shopName": "스칼라티움",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 828-10",
    "roadAddress": "서울특별시 강남구 논현로79길 72",
    "lng": 127.0328626,
    "lat": 37.49605589
  },
  {
    "shopName": "벤투라커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 75-148",
    "roadAddress": "서울특별시 강북구 도봉로10다길 7-1",
    "lng": 127.0312054,
    "lat": 37.614548
  },
  {
    "shopName": "투썸플레이스양재역점",
    "branchName": "양재역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 24",
    "roadAddress": "서울특별시 서초구 강남대로 213",
    "lng": 127.0349336,
    "lat": 37.48275521
  },
  {
    "shopName": "성북동콩집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 161-15",
    "roadAddress": "서울특별시 성북구 성북로 58",
    "lng": 127.0024302,
    "lat": 37.59286356
  },
  {
    "shopName": "허준",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 901",
    "roadAddress": "서울특별시 금천구 시흥대로50길 12",
    "lng": 126.9029099,
    "lat": 37.45131871
  },
  {
    "shopName": "카페",
    "branchName": "인중독목동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1005-8",
    "roadAddress": "서울특별시 양천구 오목로50길 24",
    "lng": 126.8640746,
    "lat": 37.52383729
  },
  {
    "shopName": "스타벅스",
    "branchName": "화곡DT점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 772-67",
    "roadAddress": "서울특별시 강서구 등촌로 57",
    "lng": 126.8631698,
    "lat": 37.53500146
  },
  {
    "shopName": "이디야커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 225-3",
    "roadAddress": "서울특별시 성북구 오패산로16길 37",
    "lng": 127.0382182,
    "lat": 37.60915408
  },
  {
    "shopName": "AMELATTE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 7-4",
    "roadAddress": "서울특별시 송파구 올림픽로 305",
    "lng": 127.1042,
    "lat": 37.51497295
  },
  {
    "shopName": "카페22",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 11-22",
    "roadAddress": "서울특별시 광진구 아차산로31길 54",
    "lng": 127.0704566,
    "lat": 37.54323957
  },
  {
    "shopName": "사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 346-42",
    "roadAddress": "서울특별시 마포구 어울마당로 122-1",
    "lng": 126.9239079,
    "lat": 37.5554295
  },
  {
    "shopName": "예향",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 역삼동 823",
    "roadAddress": "서울특별시 강남구 테헤란로 124",
    "lng": 127.0316852,
    "lat": 37.49877645
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아연대동문회관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대신동 50-5",
    "roadAddress": "서울특별시 서대문구 성산로 515",
    "lng": 126.9433127,
    "lat": 37.56302033
  },
  {
    "shopName": "스타벅스",
    "branchName": "안암역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 92",
    "roadAddress": "서울특별시 성북구 고려대로 102-2",
    "lng": 127.0307477,
    "lat": 37.5860984
  },
  {
    "shopName": "아름다운차갤러리",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 인사동 193-1",
    "roadAddress": "서울특별시 종로구 인사동길 19-11",
    "lng": 126.9858589,
    "lat": 37.57235884
  },
  {
    "shopName": "앤츠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 501",
    "roadAddress": "서울특별시 동작구 여의대방로44길 10",
    "lng": 126.9244994,
    "lat": 37.50873386
  },
  {
    "shopName": "갤러리힐링카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 622",
    "roadAddress": "서울특별시 노원구 동일로174길 27",
    "lng": 127.0768966,
    "lat": 37.62017634
  },
  {
    "shopName": "카페디엠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 397-7",
    "roadAddress": "서울특별시 서초구 논현로5길 38",
    "lng": 127.0479661,
    "lat": 37.4715166
  },
  {
    "shopName": "와플",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 명륜1가 30-1",
    "roadAddress": "서울특별시 종로구 성균관로16길 15",
    "lng": 126.9989234,
    "lat": 37.5892207
  },
  {
    "shopName": "커피빈코리아서초역1번출구점",
    "branchName": "코리아서초역1번출구점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1553-3",
    "roadAddress": "서울특별시 서초구 서초대로 250",
    "lng": 127.0092578,
    "lat": 37.49199476
  },
  {
    "shopName": "그대를위한커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 506-1",
    "roadAddress": "서울특별시 서대문구 신촌로1길 26",
    "lng": 126.9287661,
    "lat": 37.55918596
  },
  {
    "shopName": "와플반트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 520-3",
    "roadAddress": "서울특별시 서초구 반포대로 217",
    "lng": 127.0033232,
    "lat": 37.49948666
  },
  {
    "shopName": "스타벅스",
    "branchName": "신세계도곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 467-17",
    "roadAddress": "서울특별시 강남구 언주로30길 57",
    "lng": 127.0541634,
    "lat": 37.48929922
  },
  {
    "shopName": "메핏커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 연지동 173",
    "roadAddress": "서울특별시 종로구 종로31길 48",
    "lng": 126.9989487,
    "lat": 37.57295713
  },
  {
    "shopName": "VOGUM",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 구기동 226-27",
    "roadAddress": "서울특별시 종로구 비봉5길 20",
    "lng": 126.9540305,
    "lat": 37.6140874
  },
  {
    "shopName": "LaundryProject",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동2가 15-13",
    "roadAddress": "서울특별시 용산구 신흥로 78",
    "lng": 126.9864781,
    "lat": 37.54503551
  },
  {
    "shopName": "카페뮤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동소문동3가 77",
    "roadAddress": "서울특별시 성북구 동소문로 64",
    "lng": 127.0127105,
    "lat": 37.59126505
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아동부이촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이촌동 301-160",
    "roadAddress": "서울특별시 용산구 이촌로 303",
    "lng": 126.9811415,
    "lat": 37.51890428
  },
  {
    "shopName": "에트리움카페",
    "branchName": "스위스그랜드호텔",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 201-1",
    "roadAddress": "서울특별시 서대문구 연희로 353",
    "lng": 126.9350006,
    "lat": 37.58952622
  },
  {
    "shopName": "귀천",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 관훈동 83",
    "roadAddress": "서울특별시 종로구 인사동14길 14",
    "lng": 126.9848752,
    "lat": 37.57477418
  },
  {
    "shopName": "스타벅스",
    "branchName": "반포역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 58-24",
    "roadAddress": "서울특별시 서초구 나루터로4길 61",
    "lng": 127.0119225,
    "lat": 37.50861449
  },
  {
    "shopName": "커피베이",
    "branchName": "강북수유점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 231-5",
    "roadAddress": "서울특별시 강북구 한천로 1095",
    "lng": 127.0217544,
    "lat": 37.64340227
  },
  {
    "shopName": "스타벅스",
    "branchName": "여의도공원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 12",
    "roadAddress": "서울특별시 영등포구 여의공원로 101",
    "lng": 126.9248723,
    "lat": 37.52926304
  },
  {
    "shopName": "설빙",
    "branchName": "성신여대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동1가 26",
    "roadAddress": "서울특별시 성북구 동소문로22길 36",
    "lng": 127.017962,
    "lat": 37.59145303
  },
  {
    "shopName": "탐앤탐스서울대입구점",
    "branchName": "서울대입구점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 862-3",
    "roadAddress": "서울특별시 관악구 관악로 173",
    "lng": 126.9522407,
    "lat": 37.48069923
  },
  {
    "shopName": "툴스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1049-15",
    "roadAddress": "서울특별시 양천구 중앙로36길 22-5",
    "lng": 126.8565435,
    "lat": 37.51916932
  },
  {
    "shopName": "곳간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 420-1",
    "roadAddress": "서울특별시 서대문구 성산로 317",
    "lng": 126.9255362,
    "lat": 37.56656314
  },
  {
    "shopName": "요거프레소",
    "branchName": "장승배기역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 365-1",
    "roadAddress": "서울특별시 동작구 상도로 177",
    "lng": 126.9382661,
    "lat": 37.5046415
  },
  {
    "shopName": "스타벅스",
    "branchName": "청담스타점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 89-4",
    "roadAddress": "서울특별시 강남구 도산대로57길 24",
    "lng": 127.0418193,
    "lat": 37.52525095
  },
  {
    "shopName": "보나비아티제",
    "branchName": "삼성생명본관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 태평로2가 150",
    "roadAddress": "서울특별시 중구 세종대로 55",
    "lng": 126.9749573,
    "lat": 37.56161437
  },
  {
    "shopName": "다기전",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 102",
    "roadAddress": "서울특별시 광진구 아차산로78길 75",
    "lng": 127.1109711,
    "lat": 37.55158894
  },
  {
    "shopName": "종암중앙교회",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 70-110",
    "roadAddress": "서울특별시 성북구 종암로19길 18",
    "lng": 127.0336981,
    "lat": 37.59872816
  },
  {
    "shopName": "체화당",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 신촌동 2-93",
    "roadAddress": "서울특별시 서대문구 성산로24길 16",
    "lng": 126.9480421,
    "lat": 37.56718031
  },
  {
    "shopName": "폴바셋",
    "branchName": "NC타워삼성점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 삼성동 158-16",
    "roadAddress": "서울특별시 강남구 테헤란로 509",
    "lng": 127.0581945,
    "lat": 37.50777607
  },
  {
    "shopName": "이디야커피",
    "branchName": "광운대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 465-10",
    "roadAddress": "서울특별시 노원구 광운로 29",
    "lng": 127.0584078,
    "lat": 37.62031859
  },
  {
    "shopName": "커피셀러",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 세곡동 515-2",
    "roadAddress": "서울특별시 강남구 헌릉로570길 32-1",
    "lng": 127.1033515,
    "lat": 37.46294823
  },
  {
    "shopName": "엘카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 782-3",
    "roadAddress": "서울특별시 영등포구 대림로 223",
    "lng": 126.897009,
    "lat": 37.50063225
  },
  {
    "shopName": "지하철",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로5가 182-4",
    "roadAddress": "서울특별시 종로구 동호로 408",
    "lng": 127.0022049,
    "lat": 37.57071407
  },
  {
    "shopName": "사튀로스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이촌동 302-48",
    "roadAddress": "서울특별시 용산구 이촌로62길 9",
    "lng": 126.9694708,
    "lat": 37.52028075
  },
  {
    "shopName": "커피식스",
    "branchName": "쥬스식스합정한강푸르지오점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 472",
    "roadAddress": "서울특별시 마포구 월드컵로1길 14",
    "lng": 126.9120459,
    "lat": 37.5500407
  },
  {
    "shopName": "503갤러리카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 50-3",
    "roadAddress": "서울특별시 강북구 덕릉로24길 26",
    "lng": 127.0216245,
    "lat": 37.63343576
  },
  {
    "shopName": "쥬씨",
    "branchName": "신천장미상가점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 17-4",
    "roadAddress": "서울특별시 송파구 올림픽로37길 130",
    "lng": 127.1044814,
    "lat": 37.52076889
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아구로지밸리몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 188-25",
    "roadAddress": "서울특별시 구로구 디지털로 300",
    "lng": 126.8965278,
    "lat": 37.48491351
  },
  {
    "shopName": "까페파비노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 42",
    "roadAddress": "서울특별시 송파구 거마로8길 6",
    "lng": 127.1455845,
    "lat": 37.49463624
  },
  {
    "shopName": "카페샹베르공덕코어점",
    "branchName": "공덕코어점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신공덕동 9-26",
    "roadAddress": "서울특별시 마포구 만리재로 47",
    "lng": 126.9558906,
    "lat": 37.54580521
  },
  {
    "shopName": "아리스타커피다동점",
    "branchName": "다동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 다동 117",
    "roadAddress": "서울특별시 중구 남대문로9길 12",
    "lng": 126.9817226,
    "lat": 37.56685391
  },
  {
    "shopName": "히어로",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 화양동 7-4",
    "roadAddress": "서울특별시 광진구 아차산로 221",
    "lng": 127.0681982,
    "lat": 37.54103222
  },
  {
    "shopName": "쥬씨위례트랜짓몰2호점",
    "branchName": "위례트랜짓몰2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 장지동 884",
    "roadAddress": "서울특별시 송파구 위례광장로 230",
    "lng": 127.1437439,
    "lat": 37.47854792
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아여의도34번지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 34-1",
    "roadAddress": "서울특별시 영등포구 국제금융로 52",
    "lng": 126.9294913,
    "lat": 37.52271837
  },
  {
    "shopName": "RABBITHOLE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 105-8",
    "roadAddress": "서울특별시 서초구 사평대로22길 32",
    "lng": 126.9975495,
    "lat": 37.4982304
  },
  {
    "shopName": "365차버블티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 917-6",
    "roadAddress": "서울특별시 양천구 목동동로 309",
    "lng": 126.875987,
    "lat": 37.52913225
  },
  {
    "shopName": "마리웨일마카롱상암SBA점",
    "branchName": "상암SBA점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1602",
    "roadAddress": "서울특별시 마포구 월드컵북로 400",
    "lng": 126.8898775,
    "lat": 37.58044251
  },
  {
    "shopName": "가고시포",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 화동 99",
    "roadAddress": "서울특별시 종로구 북촌로5가길 16",
    "lng": 126.9822077,
    "lat": 37.5802836
  },
  {
    "shopName": "투썸플레이스쌍문중앙점",
    "branchName": "쌍문중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 659-4",
    "roadAddress": "서울특별시 도봉구 도봉로 482",
    "lng": 127.0349919,
    "lat": 37.64845797
  },
  {
    "shopName": "빈스앤와플",
    "branchName": "센트럴시티점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 19-3",
    "roadAddress": "서울특별시 서초구 신반포로 176",
    "lng": 127.0023932,
    "lat": 37.50393001
  },
  {
    "shopName": "구대회커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 102-13",
    "roadAddress": "서울특별시 마포구 창전로2길 9",
    "lng": 126.9334561,
    "lat": 37.54856912
  },
  {
    "shopName": "콩닥콩닥써니카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 50-8",
    "roadAddress": "서울특별시 중랑구 망우로55길 25",
    "lng": 127.0934647,
    "lat": 37.59908523
  },
  {
    "shopName": "투썸플레이스상도해링턴플레이스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 536",
    "roadAddress": "서울특별시 동작구 상도로 207",
    "lng": 126.9419637,
    "lat": 37.50550364
  },
  {
    "shopName": "쥬시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 미근동 215",
    "roadAddress": "서울특별시 서대문구 충정로6길 59",
    "lng": 126.9685187,
    "lat": 37.56312611
  },
  {
    "shopName": "생과방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 운니동 20",
    "roadAddress": "서울특별시 종로구 돈화문로11가길 93",
    "lng": 126.9897961,
    "lat": 37.57671759
  },
  {
    "shopName": "카페395",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로5가 395",
    "roadAddress": "서울특별시 중구 소월로 50",
    "lng": 126.9754832,
    "lat": 37.5554468
  },
  {
    "shopName": "쥬씨구로역남부점",
    "branchName": "구로역남부점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 497-3",
    "roadAddress": "서울특별시 구로구 구로동로 241",
    "lng": 126.8822808,
    "lat": 37.50008833
  },
  {
    "shopName": "미스터투고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 896-40",
    "roadAddress": "서울특별시 강남구 선릉로82길 43",
    "lng": 127.0534862,
    "lat": 37.50353951
  },
  {
    "shopName": "닥터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 292-59",
    "roadAddress": "서울특별시 노원구 월계로 336",
    "lng": 127.057809,
    "lat": 37.62917102
  },
  {
    "shopName": "쥬씨독산점",
    "branchName": "독산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 286-8",
    "roadAddress": "서울특별시 금천구 시흥대로 406",
    "lng": 126.8984486,
    "lat": 37.4696046
  },
  {
    "shopName": "코지스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 가양동 1498",
    "roadAddress": "서울특별시 강서구 양천로 401",
    "lng": 126.8476262,
    "lat": 37.56569318
  },
  {
    "shopName": "오른손푸드카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1620-45",
    "roadAddress": "서울특별시 관악구 관악로14길 111",
    "lng": 126.9584865,
    "lat": 37.47792514
  },
  {
    "shopName": "쁘띠므띠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 172",
    "roadAddress": "서울특별시 강동구 상암로 309",
    "lng": 127.1565266,
    "lat": 37.5463276
  },
  {
    "shopName": "마피아커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1621-1",
    "roadAddress": "서울특별시 서초구 서초중앙로 50",
    "lng": 127.0157207,
    "lat": 37.48638115
  },
  {
    "shopName": "떼루와떼루와자양2호점",
    "branchName": "떼루와자양2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 608-19",
    "roadAddress": "서울특별시 광진구 뚝섬로 596",
    "lng": 127.0759248,
    "lat": 37.53294742
  },
  {
    "shopName": "루체에살레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북가좌동 335-2",
    "roadAddress": "서울특별시 서대문구 응암로 151",
    "lng": 126.9151486,
    "lat": 37.58581337
  },
  {
    "shopName": "커피볶는집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북가좌동 316-14",
    "roadAddress": "서울특별시 서대문구 거북골로 208",
    "lng": 126.9083085,
    "lat": 37.57892948
  },
  {
    "shopName": "슬로윗카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 1-2",
    "roadAddress": "서울특별시 성북구 안암로 145",
    "lng": 127.0317018,
    "lat": 37.58848499
  },
  {
    "shopName": "떼루와우면2호점",
    "branchName": "우면2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 우면동 755",
    "roadAddress": "서울특별시 서초구 양재대로2길 100-48",
    "lng": 127.0153507,
    "lat": 37.45684137
  },
  {
    "shopName": "맥다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 773",
    "roadAddress": "서울특별시 중구 마장로 3",
    "lng": 127.0105405,
    "lat": 37.56871183
  },
  {
    "shopName": "할리스커피",
    "branchName": "발산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 646",
    "roadAddress": "서울특별시 강서구 공항대로 284",
    "lng": 126.8390947,
    "lat": 37.5581851
  },
  {
    "shopName": "이디야커피",
    "branchName": "녹번동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 녹번동 131-158",
    "roadAddress": "서울특별시 은평구 진흥로 156",
    "lng": 126.9269573,
    "lat": 37.60872646
  },
  {
    "shopName": "에덴커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 392-33",
    "roadAddress": "서울특별시 마포구 양화로7길 6-16",
    "lng": 126.9157682,
    "lat": 37.55166978
  },
  {
    "shopName": "그린비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 698-6",
    "roadAddress": "서울특별시 강남구 테헤란로53길 57-17",
    "lng": 127.043739,
    "lat": 37.50602902
  },
  {
    "shopName": "생과방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 용산구 이촌동 203-4",
    "roadAddress": "서울특별시 용산구 이촌로 64-1",
    "lng": 126.9559148,
    "lat": 37.52621672
  },
  {
    "shopName": "ELLE커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 신사동 21-1",
    "roadAddress": "서울특별시 은평구 은평로 52",
    "lng": 126.9136402,
    "lat": 37.59845
  },
  {
    "shopName": "딥다이브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 435-2",
    "roadAddress": "서울특별시 서초구 방배천로18길 36-5",
    "lng": 126.9848819,
    "lat": 37.48244389
  },
  {
    "shopName": "카페코나퀸즈",
    "branchName": "마포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 292-20",
    "roadAddress": "서울특별시 마포구 마포대로 34",
    "lng": 126.9461376,
    "lat": 37.53924907
  },
  {
    "shopName": "코코라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 598-3",
    "roadAddress": "서울특별시 강남구 논현로 838",
    "lng": 127.02863,
    "lat": 37.52334111
  },
  {
    "shopName": "달콤커피서래마을점",
    "branchName": "서래마을점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 92-14",
    "roadAddress": "서울특별시 서초구 사평대로26길 26-7",
    "lng": 126.9985345,
    "lat": 37.49899564
  },
  {
    "shopName": "달콤커피",
    "branchName": "한남동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 634-14",
    "roadAddress": "서울특별시 용산구 한남대로21길 32",
    "lng": 127.006277,
    "lat": 37.53345414
  },
  {
    "shopName": "탐앤탐스삼성오라클점",
    "branchName": "삼성오라클점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 144-17",
    "roadAddress": "서울특별시 강남구 삼성로 511",
    "lng": 127.0555606,
    "lat": 37.50765592
  },
  {
    "shopName": "이디야커피",
    "branchName": "신월7동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 932-1",
    "roadAddress": "서울특별시 양천구 지양로 79",
    "lng": 126.8329747,
    "lat": 37.52241678
  },
  {
    "shopName": "RORI",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 우면동 8-6",
    "roadAddress": "서울특별시 서초구 바우뫼로2길 69",
    "lng": 127.0275854,
    "lat": 37.46869251
  },
  {
    "shopName": "벤센느",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 430-5",
    "roadAddress": "서울특별시 강동구 천호대로182길 22",
    "lng": 127.1405243,
    "lat": 37.53257022
  },
  {
    "shopName": "커피빈코리아선릉로93길점",
    "branchName": "코리아선릉로93길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 696-42",
    "roadAddress": "서울특별시 강남구 선릉로93길 6",
    "lng": 127.0478832,
    "lat": 37.50567504
  },
  {
    "shopName": "더리터",
    "branchName": "신림점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1441-28",
    "roadAddress": "서울특별시 관악구 신림로71길 46",
    "lng": 126.9258132,
    "lat": 37.48808479
  },
  {
    "shopName": "아미엘리소호앤노호",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 92-6",
    "roadAddress": "서울특별시 강남구 도산대로50길 8",
    "lng": 127.0373039,
    "lat": 37.52183529
  },
  {
    "shopName": "스타벅스",
    "branchName": "서교동사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 374-20",
    "roadAddress": "서울특별시 마포구 양화로 105",
    "lng": 126.9185611,
    "lat": 37.55340737
  },
  {
    "shopName": "로즈",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 청담동 84-1",
    "roadAddress": "서울특별시 강남구 선릉로 840",
    "lng": 127.0407022,
    "lat": 37.52679169
  },
  {
    "shopName": "엔제리너스",
    "branchName": "상일경희병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 149",
    "roadAddress": "서울특별시 강동구 동남로 892",
    "lng": 127.1569476,
    "lat": 37.55316061
  },
  {
    "shopName": "일이COFFEESHOP",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 277-17",
    "roadAddress": "서울특별시 성동구 성수이로 118",
    "lng": 127.0578375,
    "lat": 37.54516692
  },
  {
    "shopName": "로지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 원효로1가 43-19",
    "roadAddress": "서울특별시 용산구 백범로87길 48-5",
    "lng": 126.9693902,
    "lat": 37.53930113
  },
  {
    "shopName": "공차",
    "branchName": "동대문디자인플라자점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로7가 2-1",
    "roadAddress": "서울특별시 중구 을지로 281",
    "lng": 127.0108895,
    "lat": 37.56800293
  },
  {
    "shopName": "에스뚜체",
    "branchName": "도곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 467-24",
    "roadAddress": "서울특별시 강남구 언주로 118",
    "lng": 127.0518416,
    "lat": 37.48691083
  },
  {
    "shopName": "북카페뉴스타파",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동2가 19-5",
    "roadAddress": "서울특별시 중구 퇴계로 212-13",
    "lng": 126.9956715,
    "lat": 37.56072016
  },
  {
    "shopName": "산유화카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 부암동 95-7",
    "roadAddress": "서울특별시 종로구 백석동길 203",
    "lng": 126.968132,
    "lat": 37.59689366
  },
  {
    "shopName": "요거프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-27",
    "roadAddress": "서울특별시 금천구 디지털로 188",
    "lng": 126.8876625,
    "lat": 37.47731564
  },
  {
    "shopName": "코스트코코리아푸드코트커피코너",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 217-6",
    "roadAddress": "서울특별시 서초구 양재대로 159",
    "lng": 127.036139,
    "lat": 37.46196859
  },
  {
    "shopName": "선주카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 126-1",
    "roadAddress": "서울특별시 광진구 강변북로 2230",
    "lng": 127.0678009,
    "lat": 37.52840533
  },
  {
    "shopName": "과일나라커피공주",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 9-7",
    "roadAddress": "서울특별시 송파구 송이로 202",
    "lng": 127.1281336,
    "lat": 37.48988629
  },
  {
    "shopName": "토프레소양평동사거리점",
    "branchName": "양평동사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동6가 346-2",
    "roadAddress": "서울특별시 영등포구 양평로12가길 2",
    "lng": 126.9007157,
    "lat": 37.53629403
  },
  {
    "shopName": "스터디카페36.5",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 133-6",
    "roadAddress": "서울특별시 송파구 백제고분로 263",
    "lng": 127.0957841,
    "lat": 37.50277157
  },
  {
    "shopName": "넥스트에디션건대",
    "branchName": "3호점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 화양동 9-19",
    "roadAddress": "서울특별시 광진구 아차산로31길 9-1",
    "lng": 127.069346,
    "lat": 37.54154586
  },
  {
    "shopName": "타로까페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성동구 행당동 245",
    "roadAddress": "서울특별시 성동구 왕십리로 287",
    "lng": 127.0361708,
    "lat": 37.55977825
  },
  {
    "shopName": "나만의타로하우스",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중랑구 면목동 504-19",
    "roadAddress": "서울특별시 중랑구 면목로61길 10",
    "lng": 127.0877507,
    "lat": 37.58568772
  },
  {
    "shopName": "마고타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 용산구 보광동 265-278",
    "roadAddress": "서울특별시 용산구 장문로45바길 3",
    "lng": 127.0006396,
    "lat": 37.52941492
  },
  {
    "shopName": "타로go",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 천호동 309-9",
    "roadAddress": "서울특별시 강동구 천중로15가길 1-5",
    "lng": 127.1287042,
    "lat": 37.54587329
  },
  {
    "shopName": "다르마타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서대문구 북가좌동 5-47",
    "roadAddress": "서울특별시 서대문구 증가로20가길 33",
    "lng": 126.9197461,
    "lat": 37.58107105
  },
  {
    "shopName": "카페",
    "branchName": "열공다방스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 218-32",
    "roadAddress": "서울특별시 성북구 월계로 172",
    "lng": 127.0448733,
    "lat": 37.61926372
  },
  {
    "shopName": "카페",
    "branchName": "열린문타로",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 652",
    "roadAddress": "서울특별시 도봉구 해등로 155",
    "lng": 127.0390337,
    "lat": 37.65666333
  },
  {
    "shopName": "카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 234-14",
    "roadAddress": "서울특별시 중랑구 중랑역로 242",
    "lng": 127.0755238,
    "lat": 37.61485847
  },
  {
    "shopName": "모리티아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 284-63",
    "roadAddress": "서울특별시 성동구 아차산로5길 10",
    "lng": 127.052568,
    "lat": 37.54663852
  },
  {
    "shopName": "공부인스터디카페노원마들센타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 651-4",
    "roadAddress": "서울특별시 노원구 동일로 1547",
    "lng": 127.0569173,
    "lat": 37.66654783
  },
  {
    "shopName": "빽다방",
    "branchName": "길음역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1276",
    "roadAddress": "서울특별시 성북구 동소문로 248",
    "lng": 127.0235872,
    "lat": 37.60291588
  },
  {
    "shopName": "찬스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 80",
    "roadAddress": "서울특별시 영등포구 선유로49길 23",
    "lng": 126.8950373,
    "lat": 37.53617796
  },
  {
    "shopName": "카페",
    "branchName": "그로잉스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 440-23",
    "roadAddress": "서울특별시 강동구 양재대로 1311",
    "lng": 127.1341679,
    "lat": 37.52355826
  },
  {
    "shopName": "빽다방월계광운대점",
    "branchName": "월계광운대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 393-14",
    "roadAddress": "서울특별시 노원구 광운로 43",
    "lng": 127.0589953,
    "lat": 37.62134145
  },
  {
    "shopName": "오설록현대백화점목동점",
    "branchName": "현대백화점목동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 916",
    "roadAddress": "서울특별시 양천구 목동동로 257",
    "lng": 126.8746818,
    "lat": 37.52714654
  },
  {
    "shopName": "한경헌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 가회동 11-61",
    "roadAddress": "서울특별시 종로구 창덕궁길 170",
    "lng": 126.986561,
    "lat": 37.58319537
  },
  {
    "shopName": "이야기커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 359",
    "roadAddress": "서울특별시 노원구 상계로3길 50",
    "lng": 127.0629484,
    "lat": 37.65836045
  },
  {
    "shopName": "달콤",
    "branchName": "커피영등포로터리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동1가 94-2",
    "roadAddress": "서울특별시 영등포구 경인로 900",
    "lng": 126.9128317,
    "lat": 37.51774561
  },
  {
    "shopName": "카페롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 31-4",
    "roadAddress": "서울특별시 송파구 백제고분로22길 16",
    "lng": 127.0887184,
    "lat": 37.50251904
  },
  {
    "shopName": "카페담",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 87-14",
    "roadAddress": "서울특별시 서대문구 연희로20길 17",
    "lng": 126.934469,
    "lat": 37.56962654
  },
  {
    "shopName": "마노커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 407-26",
    "roadAddress": "서울특별시 마포구 잔다리로 7",
    "lng": 126.9221447,
    "lat": 37.55054781
  },
  {
    "shopName": "할리스커피",
    "branchName": "신림점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1432-72",
    "roadAddress": "서울특별시 관악구 신림로 353-1",
    "lng": 126.9292248,
    "lat": 37.48594423
  },
  {
    "shopName": "BOY사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 종로2가 71-4",
    "roadAddress": "서울특별시 종로구 종로 88",
    "lng": 126.9871596,
    "lat": 37.56993719
  },
  {
    "shopName": "시모네타의정원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 59-11",
    "roadAddress": "서울특별시 강남구 삼성로122길 42",
    "lng": 127.0557017,
    "lat": 37.51890221
  },
  {
    "shopName": "셀렉토커피",
    "branchName": "목동남부법원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1009-4",
    "roadAddress": "서울특별시 양천구 신월로 387",
    "lng": 126.8639795,
    "lat": 37.52264701
  },
  {
    "shopName": "엘카페커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동5가 2-1",
    "roadAddress": "서울특별시 영등포구 양평로21나길 7",
    "lng": 126.8923473,
    "lat": 37.53674744
  },
  {
    "shopName": "래핑폭스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 128-25",
    "roadAddress": "서울특별시 서대문구 연희로11나길 5",
    "lng": 126.9283077,
    "lat": 37.56748036
  },
  {
    "shopName": "카페벨라노이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 829",
    "roadAddress": "서울특별시 강서구 금낭화로 287-50",
    "lng": 126.8124598,
    "lat": 37.5783555
  },
  {
    "shopName": "보그너커피",
    "branchName": "영등포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동2가 147",
    "roadAddress": "서울특별시 영등포구 영등포로53길 1",
    "lng": 126.9118675,
    "lat": 37.51870986
  },
  {
    "shopName": "파스쿠찌",
    "branchName": "스페이스본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 사직동 9",
    "roadAddress": "서울특별시 종로구 사직로8길 4",
    "lng": 126.9685989,
    "lat": 37.574552
  },
  {
    "shopName": "커피보니또",
    "branchName": "등촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 630-6",
    "roadAddress": "서울특별시 강서구 양천로60길 19",
    "lng": 126.8591804,
    "lat": 37.55771413
  },
  {
    "shopName": "던킨",
    "branchName": "삼성GEC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 500",
    "roadAddress": "서울특별시 강동구 상일로6길 26",
    "lng": 127.1753075,
    "lat": 37.54881202
  },
  {
    "shopName": "마녀주스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 36-2",
    "roadAddress": "서울특별시 영등포구 국제금융로6길 33",
    "lng": 126.9268944,
    "lat": 37.52078459
  },
  {
    "shopName": "노블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 신사동 1-91",
    "roadAddress": "서울특별시 은평구 갈현로4길 46",
    "lng": 126.9146149,
    "lat": 37.59995468
  },
  {
    "shopName": "커피사피엔스",
    "branchName": "신방화역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 739-2",
    "roadAddress": "서울특별시 강서구 마곡중앙5로 87",
    "lng": 126.8177536,
    "lat": 37.56718184
  },
  {
    "shopName": "엘리스토리커피볶는집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 332-1",
    "roadAddress": "서울특별시 서초구 강남대로8길 39-15",
    "lng": 127.0421838,
    "lat": 37.46928029
  },
  {
    "shopName": "오프커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 316-5",
    "roadAddress": "서울특별시 성동구 연무장길 29-17",
    "lng": 127.052663,
    "lat": 37.54360275
  },
  {
    "shopName": "커피브라더",
    "branchName": "강남점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 664-16",
    "roadAddress": "서울특별시 강남구 언주로99길 21-3",
    "lng": 127.0391912,
    "lat": 37.50522622
  },
  {
    "shopName": "더카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "카페",
    "branchName": "신세계플라워",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 동작동 산41-2",
    "roadAddress": "서울특별시 동작구 현충로 210",
    "lng": 126.9783926,
    "lat": 37.49981432
  },
  {
    "shopName": "카페",
    "branchName": "베데스다",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 270-55",
    "roadAddress": "서울특별시 강북구 노해로23길 104",
    "lng": 127.0185677,
    "lat": 37.64704301
  },
  {
    "shopName": "OFFOF",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1672-19",
    "roadAddress": "서울특별시 관악구 행운1길 30",
    "lng": 126.9576298,
    "lat": 37.48018824
  },
  {
    "shopName": "아마폴라델리선릉점",
    "branchName": "선릉점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 700-6",
    "roadAddress": "서울특별시 강남구 언주로 510",
    "lng": 127.0423238,
    "lat": 37.50436862
  },
  {
    "shopName": "투썸플레이스올리브영본점",
    "branchName": "올리브영본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동1가 8-1",
    "roadAddress": "서울특별시 중구 명동길 53",
    "lng": 126.9851561,
    "lat": 37.56408123
  },
  {
    "shopName": "잭카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 481-11",
    "roadAddress": "서울특별시 금천구 가마산로 96",
    "lng": 126.8774476,
    "lat": 37.48524735
  },
  {
    "shopName": "cafecurve",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 346-17",
    "roadAddress": "서울특별시 동작구 보라매로 98-6",
    "lng": 126.9284332,
    "lat": 37.49782189
  },
  {
    "shopName": "사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 논현동 187-2",
    "roadAddress": "서울특별시 강남구 강남대로118길 56",
    "lng": 127.0274479,
    "lat": 37.50721155
  },
  {
    "shopName": "스플24스터디카페한티역센터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 936-15",
    "roadAddress": "서울특별시 강남구 선릉로64길 18",
    "lng": 127.0537151,
    "lat": 37.49794579
  },
  {
    "shopName": "사주카페크림",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 657-3",
    "roadAddress": "서울특별시 강남구 선릉로157길 29",
    "lng": 127.037304,
    "lat": 37.52623242
  },
  {
    "shopName": "키브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 828-5",
    "roadAddress": "서울특별시 강남구 테헤란로8길 33",
    "lng": 127.0324904,
    "lat": 37.49685478
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "신촌CGV스윗바점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 20-25",
    "roadAddress": "서울특별시 서대문구 신촌로 129",
    "lng": 126.9403142,
    "lat": 37.55655102
  },
  {
    "shopName": "하우즈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 195-6",
    "roadAddress": "서울특별시 송파구 백제고분로9길 5",
    "lng": 127.0796427,
    "lat": 37.50937781
  },
  {
    "shopName": "루나스터디카페",
    "branchName": "루나스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 107-6",
    "roadAddress": "서울특별시 강동구 올림픽로 580",
    "lng": 127.121891,
    "lat": 37.53337925
  },
  {
    "shopName": "평상시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 419-8",
    "roadAddress": "서울특별시 마포구 망원로 23",
    "lng": 126.8995719,
    "lat": 37.55637653
  },
  {
    "shopName": "커피나무",
    "branchName": "어린이대공원역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 38-1",
    "roadAddress": "서울특별시 광진구 면목로3길 40-22",
    "lng": 127.0744472,
    "lat": 37.55637219
  },
  {
    "shopName": "파브리끄",
    "branchName": "역삼GFC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 738-1",
    "roadAddress": "서울특별시 강남구 역삼로17길 64",
    "lng": 127.0366044,
    "lat": 37.49880766
  },
  {
    "shopName": "산수화티하우스",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 용산구 한남동 68-27",
    "roadAddress": "서울특별시 용산구 한남대로20길 21-14",
    "lng": 127.0089005,
    "lat": 37.53527828
  },
  {
    "shopName": "오가다",
    "branchName": "연세대공학원점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 신촌동 134",
    "roadAddress": "서울특별시 서대문구 연세로 50",
    "lng": 126.9429168,
    "lat": 37.56380069
  },
  {
    "shopName": "메가박스",
    "branchName": "중앙스템커피",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 656-335",
    "roadAddress": "서울특별시 성동구 왕십리로 50",
    "lng": 127.0448881,
    "lat": 37.54188218
  },
  {
    "shopName": "마카롱쿠튀르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 523-33",
    "roadAddress": "서울특별시 강남구 압구정로4길 13-4",
    "lng": 127.0205165,
    "lat": 37.52176934
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "석수역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 979-4",
    "roadAddress": "서울특별시 금천구 시흥대로 8",
    "lng": 126.9034703,
    "lat": 37.43460936
  },
  {
    "shopName": "DUSK",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 570-1",
    "roadAddress": "서울특별시 강남구 논현로167길 19",
    "lng": 127.0264657,
    "lat": 37.52448564
  },
  {
    "shopName": "카페앤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 통인동 112",
    "roadAddress": "서울특별시 종로구 자하문로 49-1",
    "lng": 126.9709178,
    "lat": 37.58044701
  },
  {
    "shopName": "이디야커피",
    "branchName": "까치산로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1167",
    "roadAddress": "서울특별시 강서구 까치산로 182",
    "lng": 126.8538719,
    "lat": 37.55330171
  },
  {
    "shopName": "빈트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 241-69",
    "roadAddress": "서울특별시 은평구 백련산로 83",
    "lng": 126.9228331,
    "lat": 37.59312806
  },
  {
    "shopName": "아러바우트",
    "branchName": "한남",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 665-29",
    "roadAddress": "서울특별시 용산구 대사관로8길 15",
    "lng": 127.0008252,
    "lat": 37.53331803
  },
  {
    "shopName": "스타벅스",
    "branchName": "묵동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 169-12",
    "roadAddress": "서울특별시 중랑구 동일로 952",
    "lng": 127.0768659,
    "lat": 37.61532851
  },
  {
    "shopName": "카페",
    "branchName": "흙바둑",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중구 을지로5가 35-6",
    "roadAddress": "서울특별시 중구 을지로 218",
    "lng": 127.0033782,
    "lat": 37.5667684
  },
  {
    "shopName": "샤크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 770",
    "roadAddress": "서울특별시 강남구 역삼로 214",
    "lng": 127.0406506,
    "lat": 37.49635367
  },
  {
    "shopName": "펫스토리",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 성북구 안암동3가 133-51",
    "roadAddress": "서울특별시 성북구 보문로22길 54-11",
    "lng": 127.0237148,
    "lat": 37.58361664
  },
  {
    "shopName": "삼청각다원",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성북구 성북동 330-115",
    "roadAddress": "서울특별시 성북구 대사관로 3",
    "lng": 126.9835051,
    "lat": 37.59727034
  },
  {
    "shopName": "스위트룸카페",
    "branchName": "명동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동2가 53-11",
    "roadAddress": "서울특별시 중구 명동4길 31",
    "lng": 126.9840723,
    "lat": 37.56220675
  },
  {
    "shopName": "초심스터디카페",
    "branchName": "강서화곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1008-26",
    "roadAddress": "서울특별시 강서구 강서로45길 29",
    "lng": 126.8345261,
    "lat": 37.54776019
  },
  {
    "shopName": "에딕티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동2가 54-26",
    "roadAddress": "서울특별시 중구 명동4길 15",
    "lng": 126.9837898,
    "lat": 37.56300625
  },
  {
    "shopName": "레이디언트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 142-36",
    "roadAddress": "서울특별시 광진구 능동로38길 41",
    "lng": 127.0821008,
    "lat": 37.55708971
  },
  {
    "shopName": "빵어니스타",
    "branchName": "여의도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 34-8",
    "roadAddress": "서울특별시 영등포구 국제금융로8길 16",
    "lng": 126.9288669,
    "lat": 37.52128906
  },
  {
    "shopName": "토팡가커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 537-16",
    "roadAddress": "서울특별시 강동구 성내로5길 21",
    "lng": 127.1235611,
    "lat": 37.53085968
  },
  {
    "shopName": "카페노어스(cafenous)",
    "branchName": "노어스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 610",
    "roadAddress": "서울특별시 광진구 구의강변로 94",
    "lng": 127.0950517,
    "lat": 37.53813243
  },
  {
    "shopName": "디열커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 72-8",
    "roadAddress": "서울특별시 성동구 성수일로 10",
    "lng": 127.0488112,
    "lat": 37.5412741
  },
  {
    "shopName": "비에이블스터디카페",
    "branchName": "마포도화센터",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 205-14",
    "roadAddress": "서울특별시 마포구 삼개로 27",
    "lng": 126.9475593,
    "lat": 37.53792821
  },
  {
    "shopName": "만랩커피광화문로얄빌딩점",
    "branchName": "광화문로얄빌딩점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 당주동 5",
    "roadAddress": "서울특별시 종로구 새문안로5길 19",
    "lng": 126.9742713,
    "lat": 37.57202445
  },
  {
    "shopName": "브라운시티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 412-4",
    "roadAddress": "서울특별시 마포구 독막로 27",
    "lng": 126.9165724,
    "lat": 37.5484965
  },
  {
    "shopName": "이디야커피",
    "branchName": "방이초교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 167-1",
    "roadAddress": "서울특별시 송파구 가락로 280",
    "lng": 127.1199837,
    "lat": 37.51273984
  },
  {
    "shopName": "유즈풀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 120-34",
    "roadAddress": "서울특별시 은평구 응암로21가길 29",
    "lng": 126.9181338,
    "lat": 37.59625672
  },
  {
    "shopName": "데이원커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 남영동 98-5",
    "roadAddress": "서울특별시 용산구 한강대로76길 11-18",
    "lng": 126.97374,
    "lat": 37.5422584
  },
  {
    "shopName": "더박스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 503",
    "roadAddress": "서울특별시 광진구 광나루로 369",
    "lng": 127.0710369,
    "lat": 37.54845221
  },
  {
    "shopName": "소울컵",
    "branchName": "잠실점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "뭄미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 197-10",
    "roadAddress": "서울특별시 강서구 양천로30길 56",
    "lng": 126.822577,
    "lat": 37.570699
  },
  {
    "shopName": "커피지인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1337-6",
    "roadAddress": "서울특별시 서초구 강남대로51길 10",
    "lng": 127.0292715,
    "lat": 37.49128688
  },
  {
    "shopName": "사이사",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 656-1004",
    "roadAddress": "서울특별시 성동구 왕십리로14길 34-8",
    "lng": 127.0475674,
    "lat": 37.54831029
  },
  {
    "shopName": "오후홍콩",
    "branchName": "대학로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 명륜4가 134-1",
    "roadAddress": "서울특별시 종로구 대학로9길 29",
    "lng": 127.000235,
    "lat": 37.58173516
  },
  {
    "shopName": "위넌스터디카페",
    "branchName": "상왕십리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 황학동 1101-1",
    "roadAddress": "서울특별시 중구 난계로 185",
    "lng": 127.0232482,
    "lat": 37.56819593
  },
  {
    "shopName": "그리다꿈숭실대점",
    "branchName": "숭실대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 505-6",
    "roadAddress": "서울특별시 동작구 사당로 20",
    "lng": 126.9566984,
    "lat": 37.49512847
  },
  {
    "shopName": "카페",
    "branchName": "달레트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동1가 20",
    "roadAddress": "서울특별시 영등포구 영등포로12길 8",
    "lng": 126.887017,
    "lat": 37.52234376
  },
  {
    "shopName": "카페",
    "branchName": "소을갤러리",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 326-6",
    "roadAddress": "서울특별시 마포구 와우산로 161",
    "lng": 126.9303149,
    "lat": 37.55535257
  },
  {
    "shopName": "알키미스타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 592-61",
    "roadAddress": "서울특별시 은평구 응암로9길 24",
    "lng": 126.9138736,
    "lat": 37.58784699
  },
  {
    "shopName": "공차",
    "branchName": "SRT수서역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 수서동 214-2",
    "roadAddress": "서울특별시 강남구 밤고개로 99",
    "lng": 127.1045418,
    "lat": 37.48541177
  },
  {
    "shopName": "뷰클랜드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 45-18",
    "roadAddress": "서울특별시 송파구 백제고분로43길 10",
    "lng": 127.1095726,
    "lat": 37.50835475
  },
  {
    "shopName": "R카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 익선동 166-6",
    "roadAddress": "서울특별시 종로구 돈화문로11다길 27",
    "lng": 126.9903729,
    "lat": 37.5734067
  },
  {
    "shopName": "몽비현스터디카페",
    "branchName": "압구정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 525-20",
    "roadAddress": "서울특별시 강남구 압구정로8길 10",
    "lng": 127.0212954,
    "lat": 37.52276696
  },
  {
    "shopName": "바빈스커피",
    "branchName": "성수역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 289-319",
    "roadAddress": "서울특별시 성동구 성수이로 147",
    "lng": 127.057552,
    "lat": 37.54806602
  },
  {
    "shopName": "커피스위트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 468-4",
    "roadAddress": "서울특별시 금천구 벚꽃로 309",
    "lng": 126.8825452,
    "lat": 37.48158336
  },
  {
    "shopName": "커피온리",
    "branchName": "종로3가점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로3가 103-2",
    "roadAddress": "서울특별시 종로구 수표로 98",
    "lng": 126.9895821,
    "lat": 37.56993092
  },
  {
    "shopName": "그레트힐란",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 229-17",
    "roadAddress": "서울특별시 용산구 회나무로 60-1",
    "lng": 126.9932442,
    "lat": 37.54006556
  },
  {
    "shopName": "새검정",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 366-3",
    "roadAddress": "서울특별시 마포구 독막로2길 17",
    "lng": 126.9147493,
    "lat": 37.54779496
  },
  {
    "shopName": "모므로살롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 668-40",
    "roadAddress": "서울특별시 성동구 서울숲2길 45-1",
    "lng": 127.0438124,
    "lat": 37.54636971
  },
  {
    "shopName": "산재카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1365-7",
    "roadAddress": "서울특별시 서초구 강남대로37길 49",
    "lng": 127.0308843,
    "lat": 37.48461428
  },
  {
    "shopName": "커피베이",
    "branchName": "자양동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 624-33",
    "roadAddress": "서울특별시 광진구 자양로13길 28",
    "lng": 127.0825403,
    "lat": 37.53508944
  },
  {
    "shopName": "카페드파리",
    "branchName": "명동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로2가 66-5",
    "roadAddress": "서울특별시 중구 명동10길 40",
    "lng": 126.9855913,
    "lat": 37.56203961
  },
  {
    "shopName": "일월십사일",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 130-36",
    "roadAddress": "서울특별시 광진구 군자로 113",
    "lng": 127.0722589,
    "lat": 37.55303915
  },
  {
    "shopName": "어나더쏭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 55-4",
    "roadAddress": "서울특별시 광진구 긴고랑로30길 10",
    "lng": 127.0867142,
    "lat": 37.55930603
  },
  {
    "shopName": "오후의파이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 12",
    "roadAddress": "서울특별시 송파구 삼학사로16길 4",
    "lng": 127.0976752,
    "lat": 37.50351589
  },
  {
    "shopName": "헤이보울",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 321-70",
    "roadAddress": "서울특별시 성동구 성수이로7가길 13",
    "lng": 127.0550441,
    "lat": 37.54144128
  },
  {
    "shopName": "덤앤더머",
    "branchName": "홍대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 404-5",
    "roadAddress": "서울특별시 마포구 독막로7길 48",
    "lng": 126.9199028,
    "lat": 37.54984253
  },
  {
    "shopName": "302호보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 동교동 159-6",
    "roadAddress": "서울특별시 마포구 양화로 157",
    "lng": 126.9229278,
    "lat": 37.55668202
  },
  {
    "shopName": "대왕오락실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1083-23",
    "roadAddress": "서울특별시 영등포구 디지털로 341-1",
    "lng": 126.8987245,
    "lat": 37.48855621
  },
  {
    "shopName": "공차",
    "branchName": "연세암병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 신촌동 134",
    "roadAddress": "서울특별시 서대문구 연세로 50",
    "lng": 126.9429168,
    "lat": 37.56380069
  },
  {
    "shopName": "카페아르크",
    "branchName": "아르크",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 사직동 262-4",
    "roadAddress": "서울특별시 종로구 인왕산로 3",
    "lng": 126.9671689,
    "lat": 37.57480981
  },
  {
    "shopName": "코런트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 계동 3-2",
    "roadAddress": "서울특별시 종로구 계동길 128",
    "lng": 126.9869945,
    "lat": 37.58295581
  },
  {
    "shopName": "익선동사주카페",
    "branchName": "마당플라워",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 익선동 166-23",
    "roadAddress": "서울특별시 종로구 수표로28길 33-12",
    "lng": 126.9901884,
    "lat": 37.57365741
  },
  {
    "shopName": "루디먼트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 289-75",
    "roadAddress": "서울특별시 성동구 아차산로7길 15-8",
    "lng": 127.0545026,
    "lat": 37.54668106
  },
  {
    "shopName": "꾸꾸커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 233-2",
    "roadAddress": "서울특별시 강남구 논현로114길 18",
    "lng": 127.0348926,
    "lat": 37.50878638
  },
  {
    "shopName": "카페",
    "branchName": "셀독24스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 544-13",
    "roadAddress": "서울특별시 강남구 도곡로22길 5",
    "lng": 127.0396953,
    "lat": 37.49147119
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 797-1",
    "roadAddress": "서울특별시 강서구 공항대로 247",
    "lng": 126.8348098,
    "lat": 37.55934125
  },
  {
    "shopName": "해인사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 신림동 1640-47",
    "roadAddress": "서울특별시 관악구 신림로59길 6",
    "lng": 126.9294694,
    "lat": 37.48306309
  },
  {
    "shopName": "커피보헤미안사람들",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 171",
    "roadAddress": "서울특별시 송파구 위례성대로 58",
    "lng": 127.1191004,
    "lat": 37.51475163
  },
  {
    "shopName": "샌드위치카페",
    "branchName": "하이나",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 911-1",
    "roadAddress": "서울특별시 서초구 방배로13길 19",
    "lng": 126.9953825,
    "lat": 37.48270485
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "여의도롯데캐슬아이비점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 43-4",
    "roadAddress": "서울특별시 영등포구 국제금융로 86",
    "lng": 126.9317785,
    "lat": 37.52019814
  },
  {
    "shopName": "원모어프로포즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 223-44",
    "roadAddress": "서울특별시 마포구 성미산로31길 13",
    "lng": 126.9255188,
    "lat": 37.56462575
  },
  {
    "shopName": "르쉬드서울",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 164-5",
    "roadAddress": "서울특별시 송파구 위례성대로12길 18",
    "lng": 127.1218014,
    "lat": 37.51206856
  },
  {
    "shopName": "륜",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 136-4",
    "roadAddress": "서울특별시 송파구 동남로11길 13",
    "lng": 127.1273866,
    "lat": 37.49286329
  },
  {
    "shopName": "민트하임",
    "branchName": "홍대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 366-28",
    "roadAddress": "서울특별시 마포구 잔다리로6길 28",
    "lng": 126.9206161,
    "lat": 37.55217373
  },
  {
    "shopName": "더리터",
    "branchName": "상수역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상수동 86-55",
    "roadAddress": "서울특별시 마포구 와우산로 57",
    "lng": 126.922871,
    "lat": 37.54962636
  },
  {
    "shopName": "바이엠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 32-6",
    "roadAddress": "서울특별시 동작구 상도로34길 1",
    "lng": 126.9461392,
    "lat": 37.50455883
  },
  {
    "shopName": "이디야커피",
    "branchName": "신길성애병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 466-1",
    "roadAddress": "서울특별시 영등포구 여의대방로53길 27",
    "lng": 126.9215363,
    "lat": 37.5118605
  },
  {
    "shopName": "이디야커피",
    "branchName": "합정홈플러스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 490",
    "roadAddress": "서울특별시 마포구 양화로 45",
    "lng": 126.9139374,
    "lat": 37.55149077
  },
  {
    "shopName": "컨딩커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 37-77",
    "roadAddress": "서울특별시 광진구 아차산로21길 64",
    "lng": 127.0664102,
    "lat": 37.54466735
  },
  {
    "shopName": "커피앤키",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1032-8",
    "roadAddress": "서울특별시 양천구 중앙로 256",
    "lng": 126.8536004,
    "lat": 37.51929396
  },
  {
    "shopName": "RJPOT",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 400-3",
    "roadAddress": "서울특별시 마포구 독막로7길 27",
    "lng": 126.9190416,
    "lat": 37.54913184
  },
  {
    "shopName": "달콤",
    "branchName": "한위로",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동1가 47",
    "roadAddress": "서울특별시 성북구 창경궁로43길 24",
    "lng": 127.0041795,
    "lat": 37.58904891
  },
  {
    "shopName": "라딧프로젝트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 15-6",
    "roadAddress": "서울특별시 송파구 송파대로 450",
    "lng": 127.1061295,
    "lat": 37.506842
  },
  {
    "shopName": "셀독24스터디카페",
    "branchName": "신림역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1640-44",
    "roadAddress": "서울특별시 관악구 신림로 323",
    "lng": 126.9295351,
    "lat": 37.48321686
  },
  {
    "shopName": "코너스톤엠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 250-14",
    "roadAddress": "서울특별시 강동구 양재대로134길 77",
    "lng": 127.1478966,
    "lat": 37.54790556
  },
  {
    "shopName": "천상가옥",
    "branchName": "성수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 322-4",
    "roadAddress": "서울특별시 성동구 성수이로14길 14",
    "lng": 127.0568891,
    "lat": 37.54140197
  },
  {
    "shopName": "롯데월드잠실고메브릿지커피사피엔스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 40-1",
    "roadAddress": "서울특별시 송파구 송파대로 521",
    "lng": 127.0981244,
    "lat": 37.51130447
  },
  {
    "shopName": "카페넬비코로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 658",
    "roadAddress": "서울특별시 강서구 공항대로38길 80",
    "lng": 126.8420339,
    "lat": 37.55695251
  },
  {
    "shopName": "커농커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 70-6",
    "roadAddress": "서울특별시 성동구 살곶이길 346",
    "lng": 127.0411063,
    "lat": 37.55619623
  },
  {
    "shopName": "후엘고커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 128-7",
    "roadAddress": "서울특별시 마포구 마포대로11길 118",
    "lng": 126.9478671,
    "lat": 37.54904081
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "동교동삼거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 374",
    "roadAddress": "서울특별시 서대문구 신촌로 1",
    "lng": 126.9273785,
    "lat": 37.55886701
  },
  {
    "shopName": "화유재",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-37",
    "roadAddress": "서울특별시 용산구 이촌로29길 21-2",
    "lng": 126.9601536,
    "lat": 37.52485749
  },
  {
    "shopName": "카페베네서울대역점",
    "branchName": "서울대역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1601-1",
    "roadAddress": "서울특별시 관악구 남부순환로 1840",
    "lng": 126.9542807,
    "lat": 37.48035688
  },
  {
    "shopName": "망고3",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 647-47",
    "roadAddress": "서울특별시 관악구 봉천로23길 50",
    "lng": 126.9362895,
    "lat": 37.48850396
  },
  {
    "shopName": "스타벅스",
    "branchName": "가재울뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 남가좌동 385",
    "roadAddress": "서울특별시 서대문구 가재울미래로 2",
    "lng": 126.9178279,
    "lat": 37.57436779
  },
  {
    "shopName": "레이니레인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 94-25",
    "roadAddress": "서울특별시 광진구 능동로 166",
    "lng": 127.0734753,
    "lat": 37.54529066
  },
  {
    "shopName": "심포니오브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 107-80",
    "roadAddress": "서울특별시 서초구 사평대로18길 38",
    "lng": 126.9965263,
    "lat": 37.4977892
  },
  {
    "shopName": "벨라디저트카페",
    "branchName": "벨라디저트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 335-8",
    "roadAddress": "서울특별시 금천구 두산로5길 7",
    "lng": 126.8900301,
    "lat": 37.4708864
  },
  {
    "shopName": "더앨리",
    "branchName": "홍대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 358-53",
    "roadAddress": "서울특별시 마포구 어울마당로 88",
    "lng": 126.9218741,
    "lat": 37.55283397
  },
  {
    "shopName": "오타르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1306-8",
    "roadAddress": "서울특별시 서초구 강남대로 415",
    "lng": 127.0263258,
    "lat": 37.49955235
  },
  {
    "shopName": "헬무트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 453-22",
    "roadAddress": "서울특별시 서초구 방배천로6길 3-10",
    "lng": 126.9828589,
    "lat": 37.47987651
  },
  {
    "shopName": "시너리",
    "branchName": "이수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 155-13",
    "roadAddress": "서울특별시 동작구 사당로25가길 1",
    "lng": 126.9775194,
    "lat": 37.48422757
  },
  {
    "shopName": "ASSOULINE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 631-36",
    "roadAddress": "서울특별시 강남구 도산대로45길 11",
    "lng": 127.0351957,
    "lat": 37.5230255
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "목동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 907-17",
    "roadAddress": "서울특별시 양천구 목동동로 379",
    "lng": 126.878696,
    "lat": 37.53560043
  },
  {
    "shopName": "쑤다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 가리봉동 134-31",
    "roadAddress": "서울특별시 구로구 남부순환로105나길 32-1",
    "lng": 126.8926484,
    "lat": 37.48038999
  },
  {
    "shopName": "플랜스터디카페",
    "branchName": "묵동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 240-174",
    "roadAddress": "서울특별시 중랑구 동일로163길 37",
    "lng": 127.0750645,
    "lat": 37.61170123
  },
  {
    "shopName": "타임유스터디카페",
    "branchName": "상일동역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 고덕동 210-3",
    "roadAddress": "서울특별시 강동구 고덕로83길 12",
    "lng": 127.1688953,
    "lat": 37.55757939
  },
  {
    "shopName": "중심",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 353-2",
    "roadAddress": "서울특별시 마포구 양화로 129",
    "lng": 126.9206541,
    "lat": 37.55503037
  },
  {
    "shopName": "로이즈",
    "branchName": "제2롯데월드몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "모호",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 117-2",
    "roadAddress": "서울특별시 서초구 양재천로7길 1",
    "lng": 127.0360487,
    "lat": 37.47428535
  },
  {
    "shopName": "FRESHJOY",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 49-17",
    "roadAddress": "서울특별시 강남구 강남대로 562",
    "lng": 127.0212303,
    "lat": 37.51216104
  },
  {
    "shopName": "카페",
    "branchName": "포레스트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 323-25",
    "roadAddress": "서울특별시 동작구 국사봉길 13",
    "lng": 126.9290105,
    "lat": 37.49857499
  },
  {
    "shopName": "보드나라랩",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 창천동 503-8",
    "roadAddress": "서울특별시 서대문구 신촌로 25",
    "lng": 126.9296095,
    "lat": 37.55798622
  },
  {
    "shopName": "폴바셋",
    "branchName": "여의도IFC몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 23",
    "roadAddress": "서울특별시 영등포구 국제금융로 10",
    "lng": 126.9248631,
    "lat": 37.52517222
  },
  {
    "shopName": "캐치카페",
    "branchName": "서울대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 863-1",
    "roadAddress": "서울특별시 관악구 관악로 165",
    "lng": 126.9520914,
    "lat": 37.48005816
  },
  {
    "shopName": "애담커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 527-11",
    "roadAddress": "서울특별시 관악구 난곡로66길 14",
    "lng": 126.9152194,
    "lat": 37.48250961
  },
  {
    "shopName": "세인트앤드류스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 175-9",
    "roadAddress": "서울특별시 송파구 올림픽로 82",
    "lng": 127.0796744,
    "lat": 37.51140544
  },
  {
    "shopName": "빵카페목동점1",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 329-10",
    "roadAddress": "서울특별시 양천구 목동동로 150",
    "lng": 126.8704499,
    "lat": 37.51893371
  },
  {
    "shopName": "러브낚시카페",
    "branchName": "신림점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 892-23",
    "roadAddress": "서울특별시 관악구 봉천로 421",
    "lng": 126.9470069,
    "lat": 37.48303147
  },
  {
    "shopName": "버드더카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남산동1가 13-6",
    "roadAddress": "서울특별시 중구 퇴계로18길 46",
    "lng": 126.9844426,
    "lat": 37.55911035
  },
  {
    "shopName": "JHIDDENHOUSE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로6가 94",
    "roadAddress": "서울특별시 종로구 종로 269-4",
    "lng": 127.0079463,
    "lat": 37.57142022
  },
  {
    "shopName": "모조커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1042-8",
    "roadAddress": "서울특별시 동작구 동작대로1길 8",
    "lng": 126.9809481,
    "lat": 37.47737313
  },
  {
    "shopName": "투썸플레이스선유도역점",
    "branchName": "선유도역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 191-1",
    "roadAddress": "서울특별시 영등포구 양평로22길 10",
    "lng": 126.8946304,
    "lat": 37.53845378
  },
  {
    "shopName": "봄날과자점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 316-18",
    "roadAddress": "서울특별시 강북구 삼양로 461",
    "lng": 127.0156446,
    "lat": 37.64443269
  },
  {
    "shopName": "카페엔젤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 414-18",
    "roadAddress": "서울특별시 강동구 고덕로 133",
    "lng": 127.1403318,
    "lat": 37.55524839
  },
  {
    "shopName": "카페",
    "branchName": "데이지",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 1-34",
    "roadAddress": "서울특별시 서대문구 모래내로 380",
    "lng": 126.9378363,
    "lat": 37.58280302
  },
  {
    "shopName": "오가다",
    "branchName": "세라젬목동점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 양천구 목동 406-28",
    "roadAddress": "서울특별시 양천구 오목로 345",
    "lng": 126.8758154,
    "lat": 37.52473354
  },
  {
    "shopName": "오가다",
    "branchName": "세라젬롯데미아점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강북구 미아동 70-6",
    "roadAddress": "서울특별시 강북구 도봉로 62",
    "lng": 127.0305026,
    "lat": 37.61458728
  },
  {
    "shopName": "오가다",
    "branchName": "세라젬신사점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 신사동 549-5",
    "roadAddress": "서울특별시 강남구 압구정로 140",
    "lng": 127.0239742,
    "lat": 37.52468133
  },
  {
    "shopName": "오가다",
    "branchName": "세라젬잠실점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 송파구 삼전동 130",
    "roadAddress": "서울특별시 송파구 석촌호수로 172",
    "lng": 127.0960443,
    "lat": 37.50651296
  },
  {
    "shopName": "그루스터디카페송파동센터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 98-3",
    "roadAddress": "서울특별시 송파구 가락로 142",
    "lng": 127.1116803,
    "lat": 37.50229748
  },
  {
    "shopName": "디톡스마켓",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 573",
    "roadAddress": "서울특별시 구로구 구로중앙로 146-1",
    "lng": 126.882759,
    "lat": 37.50063348
  },
  {
    "shopName": "엔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 팔판동 49-1",
    "roadAddress": "서울특별시 종로구 삼청로 77",
    "lng": 126.9815538,
    "lat": 37.58257561
  },
  {
    "shopName": "그루스터디카페",
    "branchName": "은평응암센터점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 103-1",
    "roadAddress": "서울특별시 은평구 응암로 328",
    "lng": 126.9225624,
    "lat": 37.60011761
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "명일역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 312-42",
    "roadAddress": "서울특별시 강동구 양재대로 1641",
    "lng": 127.1438427,
    "lat": 37.55208416
  },
  {
    "shopName": "백스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 연건동 78-4",
    "roadAddress": "서울특별시 종로구 대학로 79-1",
    "lng": 127.0019107,
    "lat": 37.5783434
  },
  {
    "shopName": "오드리토스트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 329",
    "roadAddress": "서울특별시 양천구 목동동로 130",
    "lng": 126.871222,
    "lat": 37.51498553
  },
  {
    "shopName": "팀베리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 능동 276-3",
    "roadAddress": "서울특별시 광진구 능동로 302",
    "lng": 127.0795265,
    "lat": 37.5565831
  },
  {
    "shopName": "루크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상수동 319-2",
    "roadAddress": "서울특별시 마포구 독막로12길 3",
    "lng": 126.920162,
    "lat": 37.54756527
  },
  {
    "shopName": "지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 352-11",
    "roadAddress": "서울특별시 마포구 동교로 156-4",
    "lng": 126.9194953,
    "lat": 37.55533514
  },
  {
    "shopName": "오렌즈",
    "branchName": "라운지",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 322-9",
    "roadAddress": "서울특별시 강동구 올림픽로 564",
    "lng": 127.1213763,
    "lat": 37.53192472
  },
  {
    "shopName": "금커피별빙수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 224-9",
    "roadAddress": "서울특별시 강남구 봉은사로37길 43",
    "lng": 127.0351031,
    "lat": 37.51088756
  },
  {
    "shopName": "감자스터디카페",
    "branchName": "화곡2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 398-19",
    "roadAddress": "서울특별시 강서구 강서로18다길 8",
    "lng": 126.8477774,
    "lat": 37.53455493
  },
  {
    "shopName": "할리스커피",
    "branchName": "종로DGB점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 다동 85",
    "roadAddress": "서울특별시 중구 남대문로 125",
    "lng": 126.9822794,
    "lat": 37.56836345
  },
  {
    "shopName": "커파남",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 320-2",
    "roadAddress": "서울특별시 동대문구 이문로16길 30",
    "lng": 127.0603233,
    "lat": 37.59412258
  },
  {
    "shopName": "카페엘리스라운지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1131-15",
    "roadAddress": "서울특별시 강서구 화곡로58길 51",
    "lng": 126.8537791,
    "lat": 37.55270613
  },
  {
    "shopName": "할리스커피",
    "branchName": "홍대거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 364-19",
    "roadAddress": "서울특별시 마포구 어울마당로 76-1",
    "lng": 126.9216848,
    "lat": 37.55183209
  },
  {
    "shopName": "가회",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 가회동 1-34",
    "roadAddress": "서울특별시 종로구 북촌로 96-7",
    "lng": 126.9857621,
    "lat": 37.58533298
  },
  {
    "shopName": "스타벅스",
    "branchName": "강동구청DT점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 550",
    "roadAddress": "서울특별시 강동구 성내로 32",
    "lng": 127.1237844,
    "lat": 37.52918538
  },
  {
    "shopName": "카페인중독",
    "branchName": "인중독서대문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 200",
    "roadAddress": "서울특별시 서대문구 세무서2길 42",
    "lng": 126.9477763,
    "lat": 37.58848748
  },
  {
    "shopName": "Salondetearoom미스홍자",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 136-7",
    "roadAddress": "서울특별시 송파구 동남로11길 17-1",
    "lng": 127.1270492,
    "lat": 37.49270762
  },
  {
    "shopName": "게이샤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 관훈동 192-15",
    "roadAddress": "서울특별시 종로구 인사동길 35-4",
    "lng": 126.9848465,
    "lat": 37.57354852
  },
  {
    "shopName": "이디야커피",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 자양동 608-21",
    "roadAddress": "서울특별시 광진구 자양번영로 34",
    "lng": 127.0758035,
    "lat": 37.53269417
  },
  {
    "shopName": "라라당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로1가 32",
    "roadAddress": "서울특별시 중구 남대문로9길 51",
    "lng": 126.9794819,
    "lat": 37.56680753
  },
  {
    "shopName": "알카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 328-1",
    "roadAddress": "서울특별시 강동구 천중로 6",
    "lng": 127.122424,
    "lat": 37.54582678
  },
  {
    "shopName": "도티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 708-2",
    "roadAddress": "서울특별시 서초구 사평대로57길 139",
    "lng": 127.0205345,
    "lat": 37.51000175
  },
  {
    "shopName": "스타벅스",
    "branchName": "경희궁로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 당주동 128-27",
    "roadAddress": "서울특별시 종로구 새문안로3길 15",
    "lng": 126.9722834,
    "lat": 37.57170081
  },
  {
    "shopName": "카페마달",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 39-19",
    "roadAddress": "서울특별시 송파구 백제고분로45길 23-5",
    "lng": 127.108661,
    "lat": 37.50987067
  },
  {
    "shopName": "카페라또",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 107",
    "roadAddress": "서울특별시 은평구 진관2로 90",
    "lng": 126.9258127,
    "lat": 37.63396289
  },
  {
    "shopName": "카페",
    "branchName": "땡큐보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동대문구 장안동 363-1",
    "roadAddress": "서울특별시 동대문구 장한로 76",
    "lng": 127.0689664,
    "lat": 37.56752012
  },
  {
    "shopName": "호박",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 290-2",
    "roadAddress": "서울특별시 송파구 송파대로 409",
    "lng": 127.1082731,
    "lat": 37.50349725
  },
  {
    "shopName": "카페",
    "branchName": "엘더스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1671-35",
    "roadAddress": "서울특별시 관악구 행운1길 40",
    "lng": 126.9573632,
    "lat": 37.48065444
  },
  {
    "shopName": "카페아몽",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 928-9",
    "roadAddress": "서울특별시 양천구 오목로 141",
    "lng": 126.852996,
    "lat": 37.52478443
  },
  {
    "shopName": "스크립트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 444-1",
    "roadAddress": "서울특별시 서대문구 연희로 34",
    "lng": 126.9273945,
    "lat": 37.56169642
  },
  {
    "shopName": "그루브앤골드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 401-18",
    "roadAddress": "서울특별시 마포구 망원로8길 67",
    "lng": 126.9060385,
    "lat": 37.55455346
  },
  {
    "shopName": "송상수커피",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 구로동 730-59",
    "roadAddress": "서울특별시 구로구 구로동로26길 3",
    "lng": 126.8842877,
    "lat": 37.49061931
  },
  {
    "shopName": "카페지음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 903-20",
    "roadAddress": "서울특별시 관악구 은천로 66-6",
    "lng": 126.9425913,
    "lat": 37.48585738
  },
  {
    "shopName": "이디야커피",
    "branchName": "북서울꿈의숲점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 219-44",
    "roadAddress": "서울특별시 성북구 돌곶이로41가길 2",
    "lng": 127.0455836,
    "lat": 37.61863875
  },
  {
    "shopName": "할리스에프앤비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 374-1",
    "roadAddress": "서울특별시 마포구 양화로 36",
    "lng": 126.9133244,
    "lat": 37.54850269
  },
  {
    "shopName": "포포앤미루강동점",
    "branchName": "강동점",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강동구 성내동 439-10",
    "roadAddress": "서울특별시 강동구 양재대로89가길 30",
    "lng": 127.1342274,
    "lat": 37.5252617
  },
  {
    "shopName": "포트캔커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 38-4",
    "roadAddress": "서울특별시 동대문구 사가정로 147",
    "lng": 127.0611698,
    "lat": 37.57811776
  },
  {
    "shopName": "커피정",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 462-52",
    "roadAddress": "서울특별시 은평구 연서로 177",
    "lng": 126.9174591,
    "lat": 37.61468563
  },
  {
    "shopName": "토리네펫시터",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 32",
    "roadAddress": "서울특별시 영등포구 국제금융로7길 1",
    "lng": 126.9311704,
    "lat": 37.52317509
  },
  {
    "shopName": "이디야커피",
    "branchName": "구의자양로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 78-8",
    "roadAddress": "서울특별시 광진구 자양로 251",
    "lng": 127.0892959,
    "lat": 37.54899091
  },
  {
    "shopName": "커피맵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 219-5",
    "roadAddress": "서울특별시 금천구 디지털로10길 78",
    "lng": 126.8897162,
    "lat": 37.47453269
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아종로관철동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 관철동 11-4",
    "roadAddress": "서울특별시 종로구 청계천로 83",
    "lng": 126.9867153,
    "lat": 37.56847369
  },
  {
    "shopName": "개밥드슈",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강북구 수유동 49-78",
    "roadAddress": "서울특별시 강북구 수유로12길 14",
    "lng": 127.0201575,
    "lat": 37.63384707
  },
  {
    "shopName": "어니언수제어묵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 신도림동 692",
    "roadAddress": "서울특별시 구로구 경인로 662",
    "lng": 126.8884846,
    "lat": 37.50805804
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "상암MBC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1603",
    "roadAddress": "서울특별시 마포구 성암로 267",
    "lng": 126.8909658,
    "lat": 37.5811105
  },
  {
    "shopName": "고디바파르나스몰점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159-8",
    "roadAddress": "서울특별시 강남구 테헤란로 521",
    "lng": 127.0607897,
    "lat": 37.50918436
  },
  {
    "shopName": "글래드유케임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동2가 5-1161",
    "roadAddress": "서울특별시 용산구 신흥로 111",
    "lng": 126.9834396,
    "lat": 37.54462194
  },
  {
    "shopName": "카페베네",
    "branchName": "선릉역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 142-35",
    "roadAddress": "서울특별시 강남구 테헤란로 411",
    "lng": 127.0508489,
    "lat": 37.50548265
  },
  {
    "shopName": "학원",
    "branchName": "청명철",
    "category": "사주카페",
    "jibunAddress": "서울특별시 은평구 구산동 183-1",
    "roadAddress": "서울특별시 은평구 갈현로15길 28-32",
    "lng": 126.9082893,
    "lat": 37.60892466
  },
  {
    "shopName": "카페에스토",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동1가 97-7",
    "roadAddress": "서울특별시 영등포구 경인로 702",
    "lng": 126.8921309,
    "lat": 37.51083147
  },
  {
    "shopName": "삼성웰스토리리아체생명",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 태평로2가 150",
    "roadAddress": "서울특별시 중구 세종대로 55",
    "lng": 126.9749573,
    "lat": 37.56161437
  },
  {
    "shopName": "메누카",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 309-2",
    "roadAddress": "서울특별시 강동구 천호대로 1463",
    "lng": 127.1707868,
    "lat": 37.54622136
  },
  {
    "shopName": "제이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 냉천동 161-2",
    "roadAddress": "서울특별시 서대문구 통일로 143-7",
    "lng": 126.9647845,
    "lat": 37.56713909
  },
  {
    "shopName": "카페벨로주",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 402-6",
    "roadAddress": "서울특별시 마포구 독막로9길 8",
    "lng": 126.9197272,
    "lat": 37.54867858
  },
  {
    "shopName": "이디야커피",
    "branchName": "청구역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 309-18",
    "roadAddress": "서울특별시 중구 다산로 181-2",
    "lng": 127.013228,
    "lat": 37.55977794
  },
  {
    "shopName": "강북청소년드림센터움카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 177-11",
    "roadAddress": "서울특별시 강북구 한천로140길 5-26",
    "lng": 127.025987,
    "lat": 37.64120273
  },
  {
    "shopName": "카페드세라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 가회동 10-6",
    "roadAddress": "서울특별시 종로구 창덕궁길 191",
    "lng": 126.9853049,
    "lat": 37.58314854
  },
  {
    "shopName": "502커피",
    "branchName": "가산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 426-5",
    "roadAddress": "서울특별시 금천구 가산디지털2로 123",
    "lng": 126.8786985,
    "lat": 37.47871763
  },
  {
    "shopName": "리디아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 내곡동 181-5",
    "roadAddress": "서울특별시 서초구 홍씨마을길 3",
    "lng": 127.0653444,
    "lat": 37.45501271
  },
  {
    "shopName": "바리스타마르코대림교회점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 965-1",
    "roadAddress": "서울특별시 영등포구 시흥대로183길 12",
    "lng": 126.906723,
    "lat": 37.49138771
  },
  {
    "shopName": "스타벅스",
    "branchName": "영등포본동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동3가 2-21",
    "roadAddress": "서울특별시 영등포구 영등포로 254",
    "lng": 126.909583,
    "lat": 37.51867077
  },
  {
    "shopName": "윙스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 55-1",
    "roadAddress": "서울특별시 영등포구 선유로 259",
    "lng": 126.8973735,
    "lat": 37.53582136
  },
  {
    "shopName": "CAFE봄날",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 785",
    "roadAddress": "서울특별시 영등포구 도신로4길 6",
    "lng": 126.8953419,
    "lat": 37.50324772
  },
  {
    "shopName": "공차",
    "branchName": "성신여대점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성북구 동선동1가 1-1",
    "roadAddress": "서울특별시 성북구 동소문로22길 4",
    "lng": 127.0173103,
    "lat": 37.59279016
  },
  {
    "shopName": "공차건대점",
    "branchName": "건대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 5-43",
    "roadAddress": "서울특별시 광진구 능동로 119",
    "lng": 127.0711993,
    "lat": 37.54174967
  },
  {
    "shopName": "에슬로우커피",
    "branchName": "서초2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1659-6",
    "roadAddress": "서울특별시 서초구 서초중앙로22길 28",
    "lng": 127.015417,
    "lat": 37.49315455
  },
  {
    "shopName": "커반",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1708-1",
    "roadAddress": "서울특별시 관악구 은천로 86",
    "lng": 126.944405,
    "lat": 37.48554021
  },
  {
    "shopName": "할리스커피",
    "branchName": "약수역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 368-66",
    "roadAddress": "서울특별시 중구 다산로 114",
    "lng": 127.0104075,
    "lat": 37.5539516
  },
  {
    "shopName": "작심스터디카페",
    "branchName": "서울세종대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 359",
    "roadAddress": "서울특별시 광진구 군자로 69",
    "lng": 127.0705951,
    "lat": 37.54940385
  },
  {
    "shopName": "커피빈",
    "branchName": "바우하우스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 368-1",
    "roadAddress": "서울특별시 동대문구 답십리로 288",
    "lng": 127.0723644,
    "lat": 37.57191695
  },
  {
    "shopName": "스타벅스동묘앞역점동묘앞역점",
    "branchName": "동묘앞역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 숭인동 310",
    "roadAddress": "서울특별시 종로구 종로 344",
    "lng": 127.0160686,
    "lat": 37.57271361
  },
  {
    "shopName": "아담채카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 619",
    "roadAddress": "서울특별시 강남구 자곡로3길 21",
    "lng": 127.0880771,
    "lat": 37.47154463
  },
  {
    "shopName": "CREMADORO",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 우면동 686-2",
    "roadAddress": "서울특별시 서초구 성촌1길 20",
    "lng": 127.0216806,
    "lat": 37.46549907
  },
  {
    "shopName": "크레센도",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1000",
    "roadAddress": "서울특별시 관악구 관악로 304",
    "lng": 126.9576913,
    "lat": 37.49203762
  },
  {
    "shopName": "이디야커피",
    "branchName": "용두동사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 119-1",
    "roadAddress": "서울특별시 동대문구 왕산로 68",
    "lng": 127.0308821,
    "lat": 37.57747653
  },
  {
    "shopName": "스타일커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 130-9",
    "roadAddress": "서울특별시 강남구 삼성로95길 24",
    "lng": 127.0537166,
    "lat": 37.50768622
  },
  {
    "shopName": "페라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 33-8",
    "roadAddress": "서울특별시 서대문구 이화여대길 52-45",
    "lng": 126.9453438,
    "lat": 37.55945235
  },
  {
    "shopName": "열매다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동1가 87-16",
    "roadAddress": "서울특별시 영등포구 영등포로 167",
    "lng": 126.9001041,
    "lat": 37.52092558
  },
  {
    "shopName": "내생애에스프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동2가 94-31",
    "roadAddress": "서울특별시 영등포구 버드나루로 24",
    "lng": 126.9124185,
    "lat": 37.5212739
  },
  {
    "shopName": "엠아이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 850-34",
    "roadAddress": "서울특별시 서초구 서초대로25길 32",
    "lng": 126.9936432,
    "lat": 37.48930379
  },
  {
    "shopName": "레알이동통신",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 653-1",
    "roadAddress": "서울특별시 노원구 공릉로 98",
    "lng": 127.0784267,
    "lat": 37.61918815
  },
  {
    "shopName": "단골커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 891-23",
    "roadAddress": "서울특별시 강남구 선릉로90길 56",
    "lng": 127.0535121,
    "lat": 37.50507152
  },
  {
    "shopName": "커피소리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 177-99",
    "roadAddress": "서울특별시 노원구 상계로12길 32",
    "lng": 127.0690676,
    "lat": 37.65661585
  },
  {
    "shopName": "추억속의그다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1658-4",
    "roadAddress": "서울특별시 서초구 서초대로52길 25",
    "lng": 127.0148022,
    "lat": 37.49260879
  },
  {
    "shopName": "빽다방",
    "branchName": "역삼GS점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 669-9",
    "roadAddress": "서울특별시 강남구 봉은사로30길 73",
    "lng": 127.0371055,
    "lat": 37.50293858
  },
  {
    "shopName": "파스쿠찌테크노마트점",
    "branchName": "테크노마트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 546-4",
    "roadAddress": "서울특별시 광진구 광나루로56길 85",
    "lng": 127.0956807,
    "lat": 37.53571341
  },
  {
    "shopName": "칸타타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 937",
    "roadAddress": "서울특별시 강남구 도곡로 401",
    "lng": 127.0532526,
    "lat": 37.49695993
  },
  {
    "shopName": "호원당",
    "branchName": "이대ECC점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 대현동 11-1",
    "roadAddress": "서울특별시 서대문구 이화여대길 52",
    "lng": 126.9503015,
    "lat": 37.56428106
  },
  {
    "shopName": "도담사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 명륜4가 187",
    "roadAddress": "서울특별시 종로구 창경궁로 236",
    "lng": 126.9988191,
    "lat": 37.58263321
  },
  {
    "shopName": "샌드위치&커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 16-18",
    "roadAddress": "서울특별시 용산구 청파로 56",
    "lng": 126.9574693,
    "lat": 37.5323936
  },
  {
    "shopName": "카페루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 286-1",
    "roadAddress": "서울특별시 서대문구 포방터길 27",
    "lng": 126.9487415,
    "lat": 37.59794794
  },
  {
    "shopName": "카페보바타임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 청진동 70",
    "roadAddress": "서울특별시 종로구 종로 33",
    "lng": 126.9814178,
    "lat": 37.57095102
  },
  {
    "shopName": "엔트런스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 268-3",
    "roadAddress": "서울특별시 강남구 선릉로 623",
    "lng": 127.0428796,
    "lat": 37.5122123
  },
  {
    "shopName": "몽크르스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 417-5",
    "roadAddress": "서울특별시 강동구 풍성로 210",
    "lng": 127.1349755,
    "lat": 37.52905162
  },
  {
    "shopName": "커피베이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 427-4",
    "roadAddress": "서울특별시 강동구 양재대로102길 27",
    "lng": 127.1399385,
    "lat": 37.5323497
  },
  {
    "shopName": "이디야커피",
    "branchName": "역삼중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 721-9",
    "roadAddress": "서울특별시 강남구 언주로81길 8",
    "lng": 127.0428615,
    "lat": 37.50034526
  },
  {
    "shopName": "지앤지카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 90-14",
    "roadAddress": "서울특별시 강남구 영동대로 626",
    "lng": 127.0596717,
    "lat": 37.51624875
  },
  {
    "shopName": "이디야커피",
    "branchName": "건설회관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 71-2",
    "roadAddress": "서울특별시 강남구 언주로 711",
    "lng": 127.0334059,
    "lat": 37.51707293
  },
  {
    "shopName": "나인원라이브카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 671",
    "roadAddress": "서울특별시 도봉구 방학로 155",
    "lng": 127.0348808,
    "lat": 37.66229691
  },
  {
    "shopName": "카페",
    "branchName": "몬스터보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 신사동 512-16",
    "roadAddress": "서울특별시 강남구 강남대로152길 17",
    "lng": 127.0207873,
    "lat": 37.51749159
  },
  {
    "shopName": "쥬씨JUICY",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 도림동 216-6",
    "roadAddress": "서울특별시 영등포구 도영로 29",
    "lng": 126.8964681,
    "lat": 37.50895285
  },
  {
    "shopName": "카페리빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 889-53",
    "roadAddress": "서울특별시 강남구 테헤란로64길 8",
    "lng": 127.0508652,
    "lat": 37.50419428
  },
  {
    "shopName": "노아스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 190-4",
    "roadAddress": "서울특별시 서대문구 연희로11가길 23",
    "lng": 126.9286739,
    "lat": 37.56720436
  },
  {
    "shopName": "까페모임",
    "branchName": "페모임",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 11-5",
    "roadAddress": "서울특별시 마포구 매봉산로 72",
    "lng": 126.8936605,
    "lat": 37.57803623
  },
  {
    "shopName": "선인",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 누하동 144-1",
    "roadAddress": "서울특별시 종로구 필운대로 35-16",
    "lng": 126.968297,
    "lat": 37.57919872
  },
  {
    "shopName": "카페디아이",
    "branchName": "디아이",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 204-34",
    "roadAddress": "서울특별시 마포구 월드컵북로4길 59",
    "lng": 126.922095,
    "lat": 37.55871077
  },
  {
    "shopName": "솟대사주까페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 660-8",
    "roadAddress": "서울특별시 강남구 압구정로 334",
    "lng": 127.0380486,
    "lat": 37.52815773
  },
  {
    "shopName": "제이벨로얄펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 도곡동 527",
    "roadAddress": "서울특별시 강남구 선릉로 221",
    "lng": 127.0483969,
    "lat": 37.49371315
  },
  {
    "shopName": "빽다방",
    "branchName": "문정법조현대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 644",
    "roadAddress": "서울특별시 송파구 법원로11길 11",
    "lng": 127.1184237,
    "lat": 37.48475927
  },
  {
    "shopName": "95℃카페",
    "branchName": "95℃",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 550-1",
    "roadAddress": "서울특별시 금천구 가산디지털2로 98",
    "lng": 126.8810386,
    "lat": 37.47722606
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "오쇼핑사옥점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 2724",
    "roadAddress": "서울특별시 서초구 과천대로 870-13",
    "lng": 126.987969,
    "lat": 37.46900861
  },
  {
    "shopName": "CAFEGL",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 355-8",
    "roadAddress": "서울특별시 마포구 홍익로5안길 36",
    "lng": 126.9208827,
    "lat": 37.55330247
  },
  {
    "shopName": "커피와쟁이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 세곡동 581",
    "roadAddress": "서울특별시 강남구 헌릉로 569",
    "lng": 127.1012154,
    "lat": 37.46575233
  },
  {
    "shopName": "좋아요카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로3가 30-12",
    "roadAddress": "서울특별시 중구 남대문시장길 35",
    "lng": 126.977871,
    "lat": 37.56044125
  },
  {
    "shopName": "토프레소상도점",
    "branchName": "상도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 214-295",
    "roadAddress": "서울특별시 동작구 양녕로26길 49",
    "lng": 126.9439696,
    "lat": 37.49638496
  },
  {
    "shopName": "스타벅스종암점",
    "branchName": "종암점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 3-686",
    "roadAddress": "서울특별시 성북구 종암로 122",
    "lng": 127.0339835,
    "lat": 37.60118133
  },
  {
    "shopName": "카페",
    "branchName": "아에관악점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 851-3",
    "roadAddress": "서울특별시 관악구 관악로 204",
    "lng": 126.9542784,
    "lat": 37.48295189
  },
  {
    "shopName": "카페",
    "branchName": "666보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 수유동 48-73",
    "roadAddress": "서울특별시 강북구 덕릉로 64",
    "lng": 127.0207865,
    "lat": 37.63426677
  },
  {
    "shopName": "샤나쥬얼리카페",
    "branchName": "라파원적외선찜질",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 249-42",
    "roadAddress": "서울특별시 강서구 방화동로16길 2",
    "lng": 126.8126488,
    "lat": 37.56930208
  },
  {
    "shopName": "설빙동대문점",
    "branchName": "동대문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 23",
    "roadAddress": "서울특별시 중구 을지로 254",
    "lng": 127.0062969,
    "lat": 37.56605415
  },
  {
    "shopName": "위미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 260-88",
    "roadAddress": "서울특별시 성북구 성북로 148",
    "lng": 126.9930965,
    "lat": 37.59476658
  },
  {
    "shopName": "커피애비뉴평창동점",
    "branchName": "평창동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 평창동 158-1",
    "roadAddress": "서울특별시 종로구 평창문화로 75",
    "lng": 126.968991,
    "lat": 37.60685761
  },
  {
    "shopName": "카페글로리",
    "branchName": "사부작",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 146-43",
    "roadAddress": "서울특별시 중랑구 용마산로118길 95",
    "lng": 127.1052497,
    "lat": 37.60035553
  },
  {
    "shopName": "에이쓰리아카이브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로7가 2-1",
    "roadAddress": "서울특별시 중구 을지로 281",
    "lng": 127.0108895,
    "lat": 37.56800293
  },
  {
    "shopName": "카페베네",
    "branchName": "답십리역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 495-1",
    "roadAddress": "서울특별시 동대문구 천호대로 281",
    "lng": 127.0521898,
    "lat": 37.56756683
  },
  {
    "shopName": "카페",
    "branchName": "한보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 670-18",
    "roadAddress": "서울특별시 강남구 테헤란로27길 22",
    "lng": 127.0377392,
    "lat": 37.50291671
  },
  {
    "shopName": "강북청소년드림센터움(UM)카페",
    "branchName": "강북청소년드림센터움",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 177-11",
    "roadAddress": "서울특별시 강북구 한천로140길 5-26",
    "lng": 127.025987,
    "lat": 37.64120273
  },
  {
    "shopName": "올라카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 380-22",
    "roadAddress": "서울특별시 마포구 월드컵로13길 23",
    "lng": 126.908866,
    "lat": 37.55546264
  },
  {
    "shopName": "해피블럭카페",
    "branchName": "구로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 106-10",
    "roadAddress": "서울특별시 구로구 가마산로27길 24",
    "lng": 126.8916307,
    "lat": 37.49799591
  },
  {
    "shopName": "까페까마르도",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 묘동 206-1",
    "roadAddress": "서울특별시 종로구 돈화문로5가길 4",
    "lng": 126.9917868,
    "lat": 37.57097696
  },
  {
    "shopName": "일프로스터디카페",
    "branchName": "일월생",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 45-6",
    "roadAddress": "서울특별시 도봉구 해등로 180",
    "lng": 127.0368435,
    "lat": 37.65776275
  },
  {
    "shopName": "까페팰리스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 1-2",
    "roadAddress": "서울특별시 성북구 안암로 145",
    "lng": 127.0309577,
    "lat": 37.58648758
  },
  {
    "shopName": "커피데이",
    "branchName": "대치점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 900-67",
    "roadAddress": "서울특별시 강남구 역삼로69길 13",
    "lng": 127.0538158,
    "lat": 37.50251495
  },
  {
    "shopName": "잉글블럭&카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 290-1",
    "roadAddress": "서울특별시 송파구 양산로 14",
    "lng": 127.1437801,
    "lat": 37.490235
  },
  {
    "shopName": "카페베네2",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 447-7",
    "roadAddress": "서울특별시 강동구 고덕로 89",
    "lng": 127.1352651,
    "lat": 37.55492305
  },
  {
    "shopName": "커피집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 344-4",
    "roadAddress": "서울특별시 동작구 보라매로 87",
    "lng": 126.9275939,
    "lat": 37.49720156
  },
  {
    "shopName": "카페스와니",
    "branchName": "스와니",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 330-239",
    "roadAddress": "서울특별시 서대문구 통일로39가길 5",
    "lng": 126.943543,
    "lat": 37.58838659
  },
  {
    "shopName": "카페",
    "branchName": "브이보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 신사동 662",
    "roadAddress": "서울특별시 강남구 압구정로50길 11",
    "lng": 127.0381706,
    "lat": 37.52746491
  },
  {
    "shopName": "공차롯데백화점청량리점",
    "branchName": "롯데백화점청량리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 591-53",
    "roadAddress": "서울특별시 동대문구 왕산로 210",
    "lng": 127.0511299,
    "lat": 37.58419161
  },
  {
    "shopName": "엑스골프식당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 용답동 182-11",
    "roadAddress": "서울특별시 성동구 자동차시장길 42",
    "lng": 127.0557064,
    "lat": 37.55980095
  },
  {
    "shopName": "을지茶움",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로3가 65-13",
    "roadAddress": "서울특별시 중구 충무로9길 19",
    "lng": 126.9913353,
    "lat": 37.56668414
  },
  {
    "shopName": "티지이카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동5가 90-2",
    "roadAddress": "서울특별시 영등포구 양평로24길 12",
    "lng": 126.8933847,
    "lat": 37.53928909
  },
  {
    "shopName": "커피수기",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 105-4",
    "roadAddress": "서울특별시 강남구 도산대로46길 21",
    "lng": 127.0370792,
    "lat": 37.52083329
  },
  {
    "shopName": "카페쥬아쥬",
    "branchName": "103비스트로&",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 709-2",
    "roadAddress": "서울특별시 양천구 목동중앙남로 100",
    "lng": 126.8634692,
    "lat": 37.54211352
  },
  {
    "shopName": "온도씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 487-1",
    "roadAddress": "서울특별시 광진구 광나루로 430",
    "lng": 127.0770231,
    "lat": 37.54574194
  },
  {
    "shopName": "카페브런스윅",
    "branchName": "브런스윅",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도1동 356-1",
    "roadAddress": "서울특별시 동작구 상도로47길 13",
    "lng": 126.9515415,
    "lat": 37.49998452
  },
  {
    "shopName": "아붕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 계동 129-3",
    "roadAddress": "서울특별시 종로구 계동길 76",
    "lng": 126.9868216,
    "lat": 37.5806747
  },
  {
    "shopName": "둘리뮤지엄카페",
    "branchName": "둘리뮤지엄",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 산240-5",
    "roadAddress": "서울특별시 도봉구 시루봉로1길 6",
    "lng": 127.0276197,
    "lat": 37.65242505
  },
  {
    "shopName": "와우카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 남현동 1061-18",
    "roadAddress": "서울특별시 관악구 과천대로 939",
    "lng": 126.9814186,
    "lat": 37.47436767
  },
  {
    "shopName": "커피식스",
    "branchName": "쥬스식스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 11-4",
    "roadAddress": "서울특별시 송파구 올림픽로35가길 9",
    "lng": 127.1034234,
    "lat": 37.51748101
  },
  {
    "shopName": "공차",
    "branchName": "용산아이파크몰점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-999",
    "roadAddress": "서울특별시 용산구 한강대로21나길 7",
    "lng": 126.9647243,
    "lat": 37.5297633
  },
  {
    "shopName": "달리는커피",
    "branchName": "천호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 375-16",
    "roadAddress": "서울특별시 강동구 천중로40길 36",
    "lng": 127.1381581,
    "lat": 37.53958121
  },
  {
    "shopName": "커피뚜깡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 노고산동 109-3",
    "roadAddress": "서울특별시 마포구 백범로2길 46",
    "lng": 126.9347238,
    "lat": 37.55332004
  },
  {
    "shopName": "카페",
    "branchName": "홀인원보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 등촌동 682-2",
    "roadAddress": "서울특별시 강서구 강서로 454",
    "lng": 126.8409679,
    "lat": 37.56585326
  },
  {
    "shopName": "맘스카페",
    "branchName": "소프트플레이코리아홈플러스상봉점상상노리",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 500",
    "roadAddress": "서울특별시 중랑구 망우로 353",
    "lng": 127.0916054,
    "lat": 37.59832307
  },
  {
    "shopName": "달콤커피",
    "branchName": "신사역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 12-25",
    "roadAddress": "서울특별시 서초구 강남대로 621",
    "lng": 127.0187669,
    "lat": 37.51715045
  },
  {
    "shopName": "SEE2카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 600",
    "roadAddress": "서울특별시 강남구 자곡로 191",
    "lng": 127.1035597,
    "lat": 37.47486188
  },
  {
    "shopName": "라뜰리에",
    "branchName": "SPC스퀘어점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 831-23",
    "roadAddress": "서울특별시 강남구 강남대로 352",
    "lng": 127.0297857,
    "lat": 37.49437272
  },
  {
    "shopName": "CUP&COFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 251-254",
    "roadAddress": "서울특별시 관악구 신림로11길 139",
    "lng": 126.9401429,
    "lat": 37.46466972
  },
  {
    "shopName": "자여느향",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 129-38",
    "roadAddress": "서울특별시 구로구 구로중앙로14길 27",
    "lng": 126.8921128,
    "lat": 37.49368442
  },
  {
    "shopName": "카페",
    "branchName": "비긴PC",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 894-18",
    "roadAddress": "서울특별시 강서구 강서로 24",
    "lng": 126.8479593,
    "lat": 37.53008756
  },
  {
    "shopName": "윤scoffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 용답동 65-9",
    "roadAddress": "서울특별시 성동구 용답29길 26",
    "lng": 127.0535941,
    "lat": 37.56482991
  },
  {
    "shopName": "루앤비까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 472-1",
    "roadAddress": "서울특별시 강북구 도봉로102길 70",
    "lng": 127.0331045,
    "lat": 37.64019806
  },
  {
    "shopName": "널담은공간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동2가 19-12",
    "roadAddress": "서울특별시 용산구 신흥로15길 18-12",
    "lng": 126.9853978,
    "lat": 37.54458472
  },
  {
    "shopName": "카베하네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 619-2",
    "roadAddress": "서울특별시 강남구 언주로173길 15",
    "lng": 127.0322478,
    "lat": 37.52791211
  },
  {
    "shopName": "티하우스하다暇茶",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 청담동 16",
    "roadAddress": "서울특별시 강남구 선릉로146길 54",
    "lng": 127.0440636,
    "lat": 37.52137659
  },
  {
    "shopName": "롱블랙",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 용답동 77-1",
    "roadAddress": "서울특별시 성동구 용답중앙11길 12",
    "lng": 127.0519739,
    "lat": 37.5658441
  },
  {
    "shopName": "92문",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 320-2",
    "roadAddress": "서울특별시 동대문구 이문로16길 30",
    "lng": 127.0603233,
    "lat": 37.59412258
  },
  {
    "shopName": "이디야커피",
    "branchName": "상계역사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 169-461",
    "roadAddress": "서울특별시 노원구 한글비석로 409",
    "lng": 127.0708473,
    "lat": 37.66113505
  },
  {
    "shopName": "파머스빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 157-27",
    "roadAddress": "서울특별시 강남구 테헤란로 501",
    "lng": 127.0568084,
    "lat": 37.50736854
  },
  {
    "shopName": "담뿍미",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강동구 성내동 456-4",
    "roadAddress": "서울특별시 강동구 성안로3길 117",
    "lng": 127.1235272,
    "lat": 37.52795803
  },
  {
    "shopName": "커넥츠커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 376-19",
    "roadAddress": "서울특별시 마포구 성지길 60",
    "lng": 126.9125673,
    "lat": 37.54608995
  },
  {
    "shopName": "카페",
    "branchName": "위드유",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동3가 78",
    "roadAddress": "서울특별시 영등포구 도림로 456",
    "lng": 126.892899,
    "lat": 37.51549706
  },
  {
    "shopName": "더썬카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 658",
    "roadAddress": "서울특별시 강서구 화곡로63길 31",
    "lng": 126.8511492,
    "lat": 37.55741099
  },
  {
    "shopName": "아짐커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 팔판동 71",
    "roadAddress": "서울특별시 종로구 삼청로 65-2",
    "lng": 126.980956,
    "lat": 37.58157931
  },
  {
    "shopName": "카페온더",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 306-3",
    "roadAddress": "서울특별시 동대문구 장한로 147",
    "lng": 127.0713716,
    "lat": 37.57346796
  },
  {
    "shopName": "허형만의압구정커피집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 압구정동 426",
    "roadAddress": "서울특별시 강남구 압구정로 151",
    "lng": 127.0244334,
    "lat": 37.52677556
  },
  {
    "shopName": "씨큐브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 83-3",
    "roadAddress": "서울특별시 강남구 도산대로55길 46",
    "lng": 127.0412726,
    "lat": 37.5264269
  },
  {
    "shopName": "와이블랙",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 694-16",
    "roadAddress": "서울특별시 강서구 강서로45길 132-14",
    "lng": 126.8315612,
    "lat": 37.55065924
  },
  {
    "shopName": "반디벅스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 886",
    "roadAddress": "서울특별시 강서구 하늘길 38",
    "lng": 126.8029375,
    "lat": 37.57135746
  },
  {
    "shopName": "카페필름포럼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대신동 85",
    "roadAddress": "서울특별시 서대문구 성산로 527",
    "lng": 126.9440719,
    "lat": 37.56376597
  },
  {
    "shopName": "STUDY101",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 124-40",
    "roadAddress": "서울특별시 성북구 종암로21길 128",
    "lng": 127.0304654,
    "lat": 37.60349519
  },
  {
    "shopName": "카페드림",
    "branchName": "브릿지",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 257-12",
    "roadAddress": "서울특별시 광진구 천호대로143길 27",
    "lng": 127.103479,
    "lat": 37.54686484
  },
  {
    "shopName": "슬로우잼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 623-22",
    "roadAddress": "서울특별시 강남구 테헤란로13길 65",
    "lng": 127.0301094,
    "lat": 37.50343999
  },
  {
    "shopName": "대흥다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 150-1",
    "roadAddress": "서울특별시 마포구 백범로 101",
    "lng": 126.942691,
    "lat": 37.54774212
  },
  {
    "shopName": "Poseidon",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1575-3",
    "roadAddress": "서울특별시 서초구 서초중앙로 113",
    "lng": 127.0137264,
    "lat": 37.49186095
  },
  {
    "shopName": "자빈휘르마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 899-2",
    "roadAddress": "서울특별시 강남구 선릉로82길 20",
    "lng": 127.0516085,
    "lat": 37.50265944
  },
  {
    "shopName": "커피하우스",
    "branchName": "그라페",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 79-107",
    "roadAddress": "서울특별시 성북구 월계로 52",
    "lng": 127.0355495,
    "lat": 37.61145698
  },
  {
    "shopName": "보스커피&브런치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 925-6",
    "roadAddress": "서울특별시 관악구 봉천로33길 7",
    "lng": 126.9434715,
    "lat": 37.48357658
  },
  {
    "shopName": "카페봄",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 옥인동 149-1",
    "roadAddress": "서울특별시 종로구 옥인길 18",
    "lng": 126.9675749,
    "lat": 37.5806611
  },
  {
    "shopName": "우지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 연건동 72-2",
    "roadAddress": "서울특별시 종로구 대학로 85",
    "lng": 127.0018941,
    "lat": 37.57873972
  },
  {
    "shopName": "카페굿뉴스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 680",
    "roadAddress": "서울특별시 강서구 강서로47길 34-8",
    "lng": 126.8344654,
    "lat": 37.55311173
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "상계사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 749",
    "roadAddress": "서울특별시 노원구 동일로 1374",
    "lng": 127.0616775,
    "lat": 37.65127723
  },
  {
    "shopName": "어반플레이스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 47-13",
    "roadAddress": "서울특별시 노원구 석계로 2",
    "lng": 127.064827,
    "lat": 37.61518866
  },
  {
    "shopName": "탐앤탐스홈플러스강서점",
    "branchName": "홈플러스강서점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 639-11",
    "roadAddress": "서울특별시 강서구 화곡로 398",
    "lng": 126.8548002,
    "lat": 37.55845562
  },
  {
    "shopName": "스타벅스",
    "branchName": "문정로데오점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 125-6",
    "roadAddress": "서울특별시 송파구 동남로 141",
    "lng": 127.126233,
    "lat": 37.49189964
  },
  {
    "shopName": "고양이는귀여워",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 694-16",
    "roadAddress": "서울특별시 강서구 강서로45길 132-14",
    "lng": 126.8315612,
    "lat": 37.55065924
  },
  {
    "shopName": "카페베네",
    "branchName": "본사",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 186-11",
    "roadAddress": "서울특별시 광진구 동일로 427",
    "lng": 127.0785194,
    "lat": 37.56851414
  },
  {
    "shopName": "압구정북카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 600-5",
    "roadAddress": "서울특별시 강남구 논현로168길 24",
    "lng": 127.0301772,
    "lat": 37.52355205
  },
  {
    "shopName": "투디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1642-1",
    "roadAddress": "서울특별시 서초구 사임당로17길 68",
    "lng": 127.0169713,
    "lat": 37.49190602
  },
  {
    "shopName": "메이슨커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 417-5",
    "roadAddress": "서울특별시 강남구 논현로30길 43",
    "lng": 127.0451054,
    "lat": 37.48488326
  },
  {
    "shopName": "그라나다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 가양동 1470-2",
    "roadAddress": "서울특별시 강서구 허준로5길 37",
    "lng": 126.8510802,
    "lat": 37.56853807
  },
  {
    "shopName": "카페",
    "branchName": "달빛아래핀",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 936",
    "roadAddress": "서울특별시 노원구 월계로42길 9",
    "lng": 127.0507681,
    "lat": 37.62425799
  },
  {
    "shopName": "오늘은커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 효창동 3-118",
    "roadAddress": "서울특별시 용산구 임정로11길 4",
    "lng": 126.958543,
    "lat": 37.54305342
  },
  {
    "shopName": "커피마심",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 246-15",
    "roadAddress": "서울특별시 영등포구 가마산로 515-2",
    "lng": 126.9136932,
    "lat": 37.50513891
  },
  {
    "shopName": "쉬즈베이글",
    "branchName": "사당점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1131",
    "roadAddress": "서울특별시 동작구 사당로13길 31",
    "lng": 126.9712013,
    "lat": 37.48568649
  },
  {
    "shopName": "흑형커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동3가 55-20",
    "roadAddress": "서울특별시 영등포구 경인로 775",
    "lng": 126.8975254,
    "lat": 37.51473841
  },
  {
    "shopName": "킹스빈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-19",
    "roadAddress": "서울특별시 금천구 벚꽃로 278",
    "lng": 126.8846229,
    "lat": 37.47948554
  },
  {
    "shopName": "두루두루베이비카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 122-206",
    "roadAddress": "서울특별시 중랑구 동일로154길 17",
    "lng": 127.0792081,
    "lat": 37.60910259
  },
  {
    "shopName": "더카페동작구청점",
    "branchName": "동작구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 244-69",
    "roadAddress": "서울특별시 동작구 노량진로8길 60",
    "lng": 126.9386239,
    "lat": 37.51212341
  },
  {
    "shopName": "그리다꿈강남구청역점",
    "branchName": "강남구청역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 111-44",
    "roadAddress": "서울특별시 강남구 학동로 346",
    "lng": 127.041289,
    "lat": 37.51718223
  },
  {
    "shopName": "플로리스타커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 285-3",
    "roadAddress": "서울특별시 서초구 논현로11길 6-23",
    "lng": 127.047023,
    "lat": 37.47456359
  },
  {
    "shopName": "달콤",
    "branchName": "역삼역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 641-11",
    "roadAddress": "서울특별시 강남구 논현로 513",
    "lng": 127.0358342,
    "lat": 37.5024146
  },
  {
    "shopName": "할리스커피",
    "branchName": "충정래미안점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 중림동 1154",
    "roadAddress": "서울특별시 중구 중림로 21",
    "lng": 126.9660632,
    "lat": 37.55897786
  },
  {
    "shopName": "더브라운",
    "branchName": "베이커리GS점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 679-1",
    "roadAddress": "서울특별시 강남구 논현로 508",
    "lng": 127.0372774,
    "lat": 37.50188574
  },
  {
    "shopName": "모모공방&카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 460-2",
    "roadAddress": "서울특별시 광진구 뚝섬로38길 12",
    "lng": 127.0727374,
    "lat": 37.53359822
  },
  {
    "shopName": "이디야커피창신중앙점",
    "branchName": "창신중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 숭인동 65-10",
    "roadAddress": "서울특별시 종로구 지봉로 64",
    "lng": 127.0158139,
    "lat": 37.57572097
  },
  {
    "shopName": "베로아",
    "branchName": "면목점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 131-46",
    "roadAddress": "서울특별시 중랑구 봉우재로32길 37",
    "lng": 127.0848313,
    "lat": 37.59108941
  },
  {
    "shopName": "그냥커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 469-25",
    "roadAddress": "서울특별시 강동구 풍성로65길 67",
    "lng": 127.1410319,
    "lat": 37.53073575
  },
  {
    "shopName": "전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 남창동 34-63",
    "roadAddress": "서울특별시 중구 남대문시장길 16",
    "lng": 126.976847,
    "lat": 37.55999988
  },
  {
    "shopName": "슬리핑피쉬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1618-23",
    "roadAddress": "서울특별시 관악구 관악로12길 72",
    "lng": 126.9562555,
    "lat": 37.47738285
  },
  {
    "shopName": "이디야커피",
    "branchName": "가산대륭19차점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 345-29",
    "roadAddress": "서울특별시 금천구 가산디지털2로 70",
    "lng": 126.8823312,
    "lat": 37.47469734
  },
  {
    "shopName": "리플커피",
    "branchName": "건국대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 495-19",
    "roadAddress": "서울특별시 광진구 광나루로24길 20",
    "lng": 127.0763024,
    "lat": 37.54544797
  },
  {
    "shopName": "서울커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로1가 148",
    "roadAddress": "서울특별시 용산구 한강대로62길 5",
    "lng": 126.9739239,
    "lat": 37.53461913
  },
  {
    "shopName": "에이그레이트카페구로직영점",
    "branchName": "구로직영점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 222-12",
    "roadAddress": "서울특별시 구로구 디지털로30길 28",
    "lng": 126.8952689,
    "lat": 37.48209948
  },
  {
    "shopName": "CAFEFEEL",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 727-2",
    "roadAddress": "서울특별시 강남구 역삼로25길 27",
    "lng": 127.0389121,
    "lat": 37.49788034
  },
  {
    "shopName": "디초콜릿커피앤",
    "branchName": "드여의도파이낸스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 23-8",
    "roadAddress": "서울특별시 영등포구 국제금융로2길 32",
    "lng": 126.9241241,
    "lat": 37.52384997
  },
  {
    "shopName": "로즈드마이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 592-62",
    "roadAddress": "서울특별시 은평구 불광천길 312",
    "lng": 126.913895,
    "lat": 37.58793729
  },
  {
    "shopName": "커피뮤비트플렉스",
    "branchName": "왕십리역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 168-151",
    "roadAddress": "서울특별시 성동구 왕십리광장로 17",
    "lng": 127.0383792,
    "lat": 37.56143616
  },
  {
    "shopName": "마크커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 982-8",
    "roadAddress": "서울특별시 강남구 도곡로99길 23",
    "lng": 127.0654131,
    "lat": 37.50214774
  },
  {
    "shopName": "카페코야",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1024-14",
    "roadAddress": "서울특별시 강서구 강서로33가길 74",
    "lng": 126.836748,
    "lat": 37.54460145
  },
  {
    "shopName": "카페문",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 608-160",
    "roadAddress": "서울특별시 도봉구 도봉로110아길 25",
    "lng": 127.0376751,
    "lat": 37.64513705
  },
  {
    "shopName": "이디야커피",
    "branchName": "신림문화교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 808-368",
    "roadAddress": "서울특별시 관악구 신림로 262-1",
    "lng": 126.9326883,
    "lat": 37.47855091
  },
  {
    "shopName": "제주스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 509",
    "roadAddress": "서울특별시 노원구 동일로204가길 46",
    "lng": 127.067888,
    "lat": 37.64127992
  },
  {
    "shopName": "카페데일리에디션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 5-6",
    "roadAddress": "서울특별시 강남구 도산대로 142",
    "lng": 127.0241673,
    "lat": 37.51767275
  },
  {
    "shopName": "매머드커피",
    "branchName": "마포합정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 472",
    "roadAddress": "서울특별시 마포구 월드컵로1길 14",
    "lng": 126.9120459,
    "lat": 37.5500407
  },
  {
    "shopName": "카페곳",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 278-29",
    "roadAddress": "서울특별시 서대문구 간호대로 11-31",
    "lng": 126.9480436,
    "lat": 37.59523862
  },
  {
    "shopName": "다빼드림",
    "branchName": "금호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 금호동2가 1217",
    "roadAddress": "서울특별시 성동구 금호로 107",
    "lng": 127.0242942,
    "lat": 37.55222003
  },
  {
    "shopName": "공차",
    "branchName": "보라매점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 729-24",
    "roadAddress": "서울특별시 관악구 보라매로5가길 7",
    "lng": 126.9253642,
    "lat": 37.49180204
  },
  {
    "shopName": "커피아마토르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 684-3",
    "roadAddress": "서울특별시 강서구 강서로 462",
    "lng": 126.8413864,
    "lat": 37.56660522
  },
  {
    "shopName": "국회의원식당카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 1",
    "roadAddress": "서울특별시 영등포구 의사당대로 1",
    "lng": 126.9163908,
    "lat": 37.53289782
  },
  {
    "shopName": "카페리맨즈메세나폴리스점",
    "branchName": "리맨즈메세나폴리스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 490",
    "roadAddress": "서울특별시 마포구 양화로 45",
    "lng": 126.9139374,
    "lat": 37.55149077
  },
  {
    "shopName": "이디야커피",
    "branchName": "신풍역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 3849",
    "roadAddress": "서울특별시 영등포구 신풍로 52-1",
    "lng": 126.9117668,
    "lat": 37.49993115
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아상암DDMC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1610",
    "roadAddress": "서울특별시 마포구 매봉산로 75",
    "lng": 126.8928847,
    "lat": 37.57844343
  },
  {
    "shopName": "덕수궁전통차전문",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 서소문동 53-6",
    "roadAddress": "서울특별시 중구 서소문로 109",
    "lng": 126.9732624,
    "lat": 37.56305032
  },
  {
    "shopName": "메가커피",
    "branchName": "은행사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 366-9",
    "roadAddress": "서울특별시 노원구 한글비석로 270",
    "lng": 127.0773808,
    "lat": 37.65156328
  },
  {
    "shopName": "테일러커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 521-17",
    "roadAddress": "서울특별시 강남구 강남대로160길 31",
    "lng": 127.0211936,
    "lat": 37.52016207
  },
  {
    "shopName": "AMELATTE",
    "branchName": "길음점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1285",
    "roadAddress": "서울특별시 성북구 길음로13길 22",
    "lng": 127.019267,
    "lat": 37.60935852
  },
  {
    "shopName": "카페",
    "branchName": "사비나",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 9999-2",
    "roadAddress": "서울특별시 은평구 진관1로 93",
    "lng": 126.9292555,
    "lat": 37.63011977
  },
  {
    "shopName": "하루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 642-9",
    "roadAddress": "서울특별시 구로구 구일로8길 63",
    "lng": 126.8732782,
    "lat": 37.49634457
  },
  {
    "shopName": "카작",
    "branchName": "은평뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 107",
    "roadAddress": "서울특별시 은평구 진관2로 90",
    "lng": 126.9258127,
    "lat": 37.63396289
  },
  {
    "shopName": "아마존슈라스카리아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 11-7",
    "roadAddress": "서울특별시 송파구 올림픽로 319",
    "lng": 127.105458,
    "lat": 37.51572135
  },
  {
    "shopName": "새날스토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 개봉동 264-1",
    "roadAddress": "서울특별시 구로구 개봉로16길 18",
    "lng": 126.8571695,
    "lat": 37.48998164
  },
  {
    "shopName": "라프리앙",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 220-34",
    "roadAddress": "서울특별시 광진구 구의로 18-2",
    "lng": 127.0895258,
    "lat": 37.53939648
  },
  {
    "shopName": "CafeA:RO",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 912-14",
    "roadAddress": "서울특별시 양천구 지양로 95",
    "lng": 126.8317272,
    "lat": 37.52334152
  },
  {
    "shopName": "502커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 736-1",
    "roadAddress": "서울특별시 강남구 테헤란로 142",
    "lng": 127.0349412,
    "lat": 37.49974019
  },
  {
    "shopName": "카페",
    "branchName": "몰리한겨레점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 공덕동 116-25",
    "roadAddress": "서울특별시 마포구 효창목길 6",
    "lng": 126.9588053,
    "lat": 37.54697527
  },
  {
    "shopName": "카페",
    "branchName": "움라우트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1032-4",
    "roadAddress": "서울특별시 강서구 강서로33가길 52",
    "lng": 126.8375524,
    "lat": 37.54380746
  },
  {
    "shopName": "토스토스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 139-31",
    "roadAddress": "서울특별시 강남구 강남대로128길 36",
    "lng": 127.0250171,
    "lat": 37.51061551
  },
  {
    "shopName": "커피207",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 612-61",
    "roadAddress": "서울특별시 중랑구 사가정로 404-6",
    "lng": 127.089277,
    "lat": 37.58030223
  },
  {
    "shopName": "까페마음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동 618-158",
    "roadAddress": "서울특별시 영등포구 영신로20길 12-3",
    "lng": 126.9091468,
    "lat": 37.51521574
  },
  {
    "shopName": "하늘향기",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 송파구 문정동 96-15",
    "roadAddress": "서울특별시 송파구 새말로 133",
    "lng": 127.1289216,
    "lat": 37.48337741
  },
  {
    "shopName": "팔공티",
    "branchName": "대흥역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 159-10",
    "roadAddress": "서울특별시 마포구 백범로 134-1",
    "lng": 126.945818,
    "lat": 37.5458779
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "성수SKV타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 315-61",
    "roadAddress": "서울특별시 성동구 연무장5가길 25",
    "lng": 127.0555947,
    "lat": 37.54354514
  },
  {
    "shopName": "카페코알라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상수동 328-14",
    "roadAddress": "서울특별시 마포구 와우산로 29",
    "lng": 126.9227823,
    "lat": 37.54713868
  },
  {
    "shopName": "오가다",
    "branchName": "CAFE",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 양천구 목동 917",
    "roadAddress": "서울특별시 양천구 목동서로 155",
    "lng": 126.8750577,
    "lat": 37.5299884
  },
  {
    "shopName": "쥬씨",
    "branchName": "신월동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 961-5",
    "roadAddress": "서울특별시 양천구 지양로 74",
    "lng": 126.833803,
    "lat": 37.52225377
  },
  {
    "shopName": "할리스커피",
    "branchName": "서울역KTX플랫폼점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 동자동 43-205",
    "roadAddress": "서울특별시 용산구 한강대로 405",
    "lng": 126.9717115,
    "lat": 37.55482833
  },
  {
    "shopName": "스타벅스서소문배재점",
    "branchName": "서소문배재점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 서소문동 57-9",
    "roadAddress": "서울특별시 중구 서소문로 99",
    "lng": 126.9721669,
    "lat": 37.5628786
  },
  {
    "shopName": "꽃다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 547-64",
    "roadAddress": "서울특별시 광진구 뚝섬로31길 43",
    "lng": 127.0681966,
    "lat": 37.53752711
  },
  {
    "shopName": "카페루엔비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-24",
    "roadAddress": "서울특별시 금천구 벚꽃로 254",
    "lng": 126.885474,
    "lat": 37.47775455
  },
  {
    "shopName": "MANOFFIN",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 736-1",
    "roadAddress": "서울특별시 동작구 동작대로 117",
    "lng": 126.9821556,
    "lat": 37.48754743
  },
  {
    "shopName": "카페샘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 상월곡동 57-23",
    "roadAddress": "서울특별시 성북구 화랑로15길 26-6",
    "lng": 127.0450598,
    "lat": 37.60556043
  },
  {
    "shopName": "김화자카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 657-19",
    "roadAddress": "서울특별시 도봉구 도봉로114길 50",
    "lng": 127.037112,
    "lat": 37.64750218
  },
  {
    "shopName": "카페루이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 보문동4가 116",
    "roadAddress": "서울특별시 성북구 고려대로2길 37",
    "lng": 127.0208404,
    "lat": 37.58436773
  },
  {
    "shopName": "커피드슈",
    "branchName": "논현역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 37-14",
    "roadAddress": "서울특별시 서초구 신반포로 337",
    "lng": 127.0203967,
    "lat": 37.51102781
  },
  {
    "shopName": "하우스까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 내곡동 1-392",
    "roadAddress": "서울특별시 서초구 신흥안길 40-27",
    "lng": 127.0766981,
    "lat": 37.45455231
  },
  {
    "shopName": "커피온리",
    "branchName": "역삼초교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 837-13",
    "roadAddress": "서울특별시 강남구 강남대로66길 14",
    "lng": 127.0318328,
    "lat": 37.49172239
  },
  {
    "shopName": "카페오늘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 776-5",
    "roadAddress": "서울특별시 영등포구 가마산로34길 4",
    "lng": 126.8962038,
    "lat": 37.49848024
  },
  {
    "shopName": "대림창고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 322-32",
    "roadAddress": "서울특별시 성동구 성수이로 78",
    "lng": 127.0566259,
    "lat": 37.54163414
  },
  {
    "shopName": "감성커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "커피앤비어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 154-24",
    "roadAddress": "서울특별시 노원구 덕릉로83길 14-3",
    "lng": 127.0745995,
    "lat": 37.66017341
  },
  {
    "shopName": "하나커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 24-35",
    "roadAddress": "서울특별시 강북구 삼양로98길 40",
    "lng": 127.0193571,
    "lat": 37.63871502
  },
  {
    "shopName": "팬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 화동 48",
    "roadAddress": "서울특별시 종로구 삼청로4길 10",
    "lng": 126.9818782,
    "lat": 37.58202877
  },
  {
    "shopName": "더리터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 태평로2가 150",
    "roadAddress": "서울특별시 중구 세종대로 55",
    "lng": 126.9749573,
    "lat": 37.56161437
  },
  {
    "shopName": "카페",
    "branchName": "드소리",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 462-3",
    "roadAddress": "서울특별시 동작구 상도로50길 4",
    "lng": 126.95103,
    "lat": 37.49855632
  },
  {
    "shopName": "포너",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 656",
    "roadAddress": "서울특별시 광진구 뚝섬로57길 40",
    "lng": 127.0828887,
    "lat": 37.53343421
  },
  {
    "shopName": "CoffeeMong",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 46-11",
    "roadAddress": "서울특별시 송파구 오금로36길 64",
    "lng": 127.121753,
    "lat": 37.49882262
  },
  {
    "shopName": "후식",
    "branchName": "묵동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 170-1",
    "roadAddress": "서울특별시 중랑구 동일로 932",
    "lng": 127.0775414,
    "lat": 37.61382905
  },
  {
    "shopName": "스터디101",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 59-5",
    "roadAddress": "서울특별시 도봉구 시루봉로 58",
    "lng": 127.0293889,
    "lat": 37.65580948
  },
  {
    "shopName": "카페아토",
    "branchName": "영등포구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 328",
    "roadAddress": "서울특별시 영등포구 양산로 127",
    "lng": 126.8971279,
    "lat": 37.52406949
  },
  {
    "shopName": "디자이너스라운지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 창전동 5-129",
    "roadAddress": "서울특별시 마포구 와우산로30길 18",
    "lng": 126.9296335,
    "lat": 37.55393176
  },
  {
    "shopName": "전통찻집인사동",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 196-5",
    "roadAddress": "서울특별시 종로구 인사동길 33-1",
    "lng": 126.9854129,
    "lat": 37.57352636
  },
  {
    "shopName": "노아스로스팅",
    "branchName": "신사점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 27-11",
    "roadAddress": "서울특별시 서초구 강남대로95길 12",
    "lng": 127.0191256,
    "lat": 37.51394568
  },
  {
    "shopName": "이디야커피",
    "branchName": "마곡나루역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 760",
    "roadAddress": "서울특별시 강서구 마곡중앙5로 6",
    "lng": 126.8270032,
    "lat": 37.56708489
  },
  {
    "shopName": "PUESTO",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 명륜1가 31-2",
    "roadAddress": "서울특별시 종로구 성균관로 92",
    "lng": 126.9987465,
    "lat": 37.5897418
  },
  {
    "shopName": "비틀주스홍씨내",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 638",
    "roadAddress": "서울특별시 강남구 자곡로 120",
    "lng": 127.0964811,
    "lat": 37.47214082
  },
  {
    "shopName": "샌드프레소",
    "branchName": "압구정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 566-13",
    "roadAddress": "서울특별시 강남구 논현로159길 21",
    "lng": 127.0263959,
    "lat": 37.52289021
  },
  {
    "shopName": "컨플릭트스토어커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 551-24",
    "roadAddress": "서울특별시 강남구 논현로159길 46-5",
    "lng": 127.0242988,
    "lat": 37.52234128
  },
  {
    "shopName": "돌리팝",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 358-30",
    "roadAddress": "서울특별시 마포구 와우산로21길 4",
    "lng": 126.9237099,
    "lat": 37.55267052
  },
  {
    "shopName": "스타벅스",
    "branchName": "신세계강남점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 19-3",
    "roadAddress": "서울특별시 서초구 신반포로 176",
    "lng": 127.0023932,
    "lat": 37.50393001
  },
  {
    "shopName": "빽다방",
    "branchName": "세종대후문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 103",
    "roadAddress": "서울특별시 광진구 군자로 108",
    "lng": 127.0721505,
    "lat": 37.55265085
  },
  {
    "shopName": "현스티",
    "branchName": "순화점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 순화동 217",
    "roadAddress": "서울특별시 중구 서소문로9길 28",
    "lng": 126.9700276,
    "lat": 37.56369793
  },
  {
    "shopName": "여기,다시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 85-30",
    "roadAddress": "서울특별시 마포구 광성로6길 56",
    "lng": 126.9396828,
    "lat": 37.54759801
  },
  {
    "shopName": "체리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 회현동1가 180-2",
    "roadAddress": "서울특별시 중구 퇴계로6길 5",
    "lng": 126.9783344,
    "lat": 37.55800343
  },
  {
    "shopName": "르카페랩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 후암동 185-14",
    "roadAddress": "서울특별시 용산구 두텁바위로1나길 7",
    "lng": 126.9759872,
    "lat": 37.54673808
  },
  {
    "shopName": "카페모아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 931-7",
    "roadAddress": "서울특별시 관악구 남부순환로 1717",
    "lng": 126.9410835,
    "lat": 37.48293348
  },
  {
    "shopName": "슬롭커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 166-10",
    "roadAddress": "서울특별시 마포구 홍익로6길 67",
    "lng": 126.9247692,
    "lat": 37.55692406
  },
  {
    "shopName": "십사일커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 319-40",
    "roadAddress": "서울특별시 동작구 사당로20길 29",
    "lng": 126.9757545,
    "lat": 37.48181548
  },
  {
    "shopName": "가람커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 신원동 445-4",
    "roadAddress": "서울특별시 서초구 본마을길 31",
    "lng": 127.0535303,
    "lat": 37.45432398
  },
  {
    "shopName": "더커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 636",
    "roadAddress": "서울특별시 강남구 자곡로 114",
    "lng": 127.0960074,
    "lat": 37.47204709
  },
  {
    "shopName": "Eliot",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 538-30",
    "roadAddress": "서울특별시 관악구 난곡로65길 17",
    "lng": 126.9132801,
    "lat": 37.48213137
  },
  {
    "shopName": "헤이마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 209-10",
    "roadAddress": "서울특별시 성북구 성북로23길 25-2",
    "lng": 126.9950506,
    "lat": 37.59261173
  },
  {
    "shopName": "할리스커피낙성대역점",
    "branchName": "낙성대역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1659-2",
    "roadAddress": "서울특별시 관악구 남부순환로 1922",
    "lng": 126.9627275,
    "lat": 37.47702536
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "노원구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 705-1",
    "roadAddress": "서울특별시 노원구 노해로 449",
    "lng": 127.0579822,
    "lat": 37.65404099
  },
  {
    "shopName": "서울다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 17",
    "roadAddress": "서울특별시 영등포구 의사당대로 38",
    "lng": 126.9186738,
    "lat": 37.52601676
  },
  {
    "shopName": "커피집양재에이티점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 327-3",
    "roadAddress": "서울특별시 서초구 동산로 10",
    "lng": 127.0408967,
    "lat": 37.4691437
  },
  {
    "shopName": "카페",
    "branchName": "더케이팝",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 253-7",
    "roadAddress": "서울특별시 광진구 광나루로 496",
    "lng": 127.0844912,
    "lat": 37.544881
  },
  {
    "shopName": "사발커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 664-18",
    "roadAddress": "서울특별시 강남구 언주로97길 26",
    "lng": 127.0392727,
    "lat": 37.50504667
  },
  {
    "shopName": "소버스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 848-11",
    "roadAddress": "서울특별시 서초구 방배로26길 71-5",
    "lng": 126.9962129,
    "lat": 37.49078536
  },
  {
    "shopName": "커피에반하다",
    "branchName": "식빵공방",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 하왕십리동 1070",
    "roadAddress": "서울특별시 성동구 왕십리로 410",
    "lng": 127.0240621,
    "lat": 37.56654474
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "고대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 104-117",
    "roadAddress": "서울특별시 성북구 고려대로24길 63",
    "lng": 127.0296056,
    "lat": 37.58336787
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "대방역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 88-19",
    "roadAddress": "서울특별시 동작구 여의대방로62길 1",
    "lng": 126.9270465,
    "lat": 37.51411824
  },
  {
    "shopName": "커피세븐",
    "branchName": "상계점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 459-6",
    "roadAddress": "서울특별시 노원구 한글비석로46가길 42",
    "lng": 127.0667316,
    "lat": 37.66577892
  },
  {
    "shopName": "언더프레셔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "학화호두과자",
    "branchName": "강남직영점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 82-2",
    "roadAddress": "서울특별시 서초구 바우뫼로 188",
    "lng": 127.0405225,
    "lat": 37.47896222
  },
  {
    "shopName": "쿼터커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1626-37",
    "roadAddress": "서울특별시 관악구 관악로12길 99",
    "lng": 126.9578402,
    "lat": 37.47724366
  },
  {
    "shopName": "로뎀나무까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 989-12",
    "roadAddress": "서울특별시 금천구 시흥대로45길 32",
    "lng": 126.9000622,
    "lat": 37.44897654
  },
  {
    "shopName": "슈가커피전문점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 844",
    "roadAddress": "서울특별시 중구 다산로 32",
    "lng": 127.0056418,
    "lat": 37.54720778
  },
  {
    "shopName": "쥬씨종로종묘점",
    "branchName": "종로종묘점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 묘동 82-3",
    "roadAddress": "서울특별시 종로구 돈화문로 42",
    "lng": 126.9918275,
    "lat": 37.57215767
  },
  {
    "shopName": "브타이거커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 1279",
    "roadAddress": "서울특별시 영등포구 영등포로86길 23",
    "lng": 126.9229078,
    "lat": 37.51087285
  },
  {
    "shopName": "리엘베이킹",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 888-38",
    "roadAddress": "서울특별시 서초구 방배로18길 91",
    "lng": 126.9997325,
    "lat": 37.48633697
  },
  {
    "shopName": "코지블루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 45-5",
    "roadAddress": "서울특별시 송파구 백제고분로45길 7",
    "lng": 127.1102751,
    "lat": 37.50920704
  },
  {
    "shopName": "만랩커피",
    "branchName": "이수역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 866-10",
    "roadAddress": "서울특별시 서초구 서초대로 13",
    "lng": 126.9838289,
    "lat": 37.48589489
  },
  {
    "shopName": "데일리",
    "branchName": "로스팅",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 977-20",
    "roadAddress": "서울특별시 금천구 독산로 312",
    "lng": 126.9035545,
    "lat": 37.47451775
  },
  {
    "shopName": "이디야커피",
    "branchName": "망원역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 441-11",
    "roadAddress": "서울특별시 마포구 월드컵로 82-1",
    "lng": 126.910211,
    "lat": 37.55636709
  },
  {
    "shopName": "카페",
    "branchName": "달금하다",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 산천동 202",
    "roadAddress": "서울특별시 용산구 원효로 51",
    "lng": 126.9500493,
    "lat": 37.53385063
  },
  {
    "shopName": "롤링삐삐",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 967-14",
    "roadAddress": "서울특별시 강남구 역삼로92길 7",
    "lng": 127.0629584,
    "lat": 37.50399348
  },
  {
    "shopName": "카페",
    "branchName": "오늘의기분",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 신문로1가 238",
    "roadAddress": "서울특별시 종로구 새문안로3길 12",
    "lng": 126.9729676,
    "lat": 37.57133733
  },
  {
    "shopName": "경복궁버들마루",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 세종로 1-1",
    "roadAddress": "서울특별시 종로구 삼청로 37",
    "lng": 126.976822,
    "lat": 37.57589403
  },
  {
    "shopName": "에그타르트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 안국동 175-57",
    "roadAddress": "서울특별시 종로구 윤보선길 31",
    "lng": 126.9836513,
    "lat": 37.57735865
  },
  {
    "shopName": "모리나리까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 회현동2가 60-2",
    "roadAddress": "서울특별시 중구 소공로 29",
    "lng": 126.9827945,
    "lat": 37.55795184
  },
  {
    "shopName": "브이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 653-5",
    "roadAddress": "서울특별시 강서구 화곡로64길 98",
    "lng": 126.8581419,
    "lat": 37.55530734
  },
  {
    "shopName": "카페루이스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 충정로3가 465",
    "roadAddress": "서울특별시 서대문구 서소문로 27",
    "lng": 126.9648455,
    "lat": 37.5602737
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "구산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 구산동 1-1",
    "roadAddress": "서울특별시 은평구 연서로 137",
    "lng": 126.9168195,
    "lat": 37.61114772
  },
  {
    "shopName": "쥬씨",
    "branchName": "염창점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 염창동 246-17",
    "roadAddress": "서울특별시 강서구 양천로 657",
    "lng": 126.8704058,
    "lat": 37.55261408
  },
  {
    "shopName": "라온tree",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 413-8",
    "roadAddress": "서울특별시 노원구 덕릉로 591",
    "lng": 127.071846,
    "lat": 37.65101528
  },
  {
    "shopName": "카페",
    "branchName": "지니얼",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 청파동2가 67-5",
    "roadAddress": "서울특별시 용산구 청파로49길 56",
    "lng": 126.9672062,
    "lat": 37.54504873
  },
  {
    "shopName": "한우리보호작업장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1376-3",
    "roadAddress": "서울특별시 서초구 남부순환로 2584",
    "lng": 127.0326845,
    "lat": 37.48355678
  },
  {
    "shopName": "할리스커피",
    "branchName": "신림사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1433-51",
    "roadAddress": "서울특별시 관악구 남부순환로 1599-3",
    "lng": 126.9282507,
    "lat": 37.4844757
  },
  {
    "shopName": "북카페산책연남점",
    "branchName": "연남점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 487-35",
    "roadAddress": "서울특별시 마포구 성미산로17길 79",
    "lng": 126.9171594,
    "lat": 37.56502692
  },
  {
    "shopName": "엘리스파이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 압구정동 429",
    "roadAddress": "서울특별시 강남구 압구정로 165",
    "lng": 127.0274466,
    "lat": 37.52735907
  },
  {
    "shopName": "태능커피호프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 234-16",
    "roadAddress": "서울특별시 중랑구 중랑역로 234",
    "lng": 127.0754865,
    "lat": 37.61420943
  },
  {
    "shopName": "에스앤제이이노베이션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 657-12",
    "roadAddress": "서울특별시 강남구 선릉로157길 23-4",
    "lng": 127.0376357,
    "lat": 37.52594679
  },
  {
    "shopName": "카페쟈스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 83",
    "roadAddress": "서울특별시 은평구 진관2로 77",
    "lng": 126.9277223,
    "lat": 37.63432265
  },
  {
    "shopName": "산수화",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 용산구 한남동 68-27",
    "roadAddress": "서울특별시 용산구 한남대로20길 21-14",
    "lng": 127.0089005,
    "lat": 37.53527828
  },
  {
    "shopName": "파파카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1031-27",
    "roadAddress": "서울특별시 금천구 시흥대로 352",
    "lng": 126.8979085,
    "lat": 37.46481498
  },
  {
    "shopName": "선유도커피집은마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 316",
    "roadAddress": "서울특별시 강남구 삼성로 212",
    "lng": 127.0658971,
    "lat": 37.49961058
  },
  {
    "shopName": "블루포트",
    "branchName": "건국대학교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 1",
    "roadAddress": "서울특별시 광진구 능동로 120",
    "lng": 127.0746953,
    "lat": 37.53905594
  },
  {
    "shopName": "사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 논현동 180-15",
    "roadAddress": "서울특별시 강남구 강남대로118길 57",
    "lng": 127.0276708,
    "lat": 37.50746568
  },
  {
    "shopName": "브링미커피컴퍼니",
    "branchName": "자양점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 584-5",
    "roadAddress": "서울특별시 광진구 자양번영로 19",
    "lng": 127.0749032,
    "lat": 37.5313806
  },
  {
    "shopName": "달리는커피문정",
    "branchName": "법조타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 652-2",
    "roadAddress": "서울특별시 송파구 송파대로 145",
    "lng": 127.1230309,
    "lat": 37.48335186
  },
  {
    "shopName": "CafeQuerenciaC&C",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 69-12",
    "roadAddress": "서울특별시 서초구 신반포로 205",
    "lng": 127.0064466,
    "lat": 37.50701875
  },
  {
    "shopName": "우향다원",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 도곡동 174-40",
    "roadAddress": "서울특별시 강남구 남부순환로 2747",
    "lng": 127.0465579,
    "lat": 37.48714763
  },
  {
    "shopName": "엠앤디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 내곡동 6-42",
    "roadAddress": "서울특별시 서초구 능안말1길 5-2",
    "lng": 127.0668204,
    "lat": 37.4553848
  },
  {
    "shopName": "그라운드오리진",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 율현동 196-33",
    "roadAddress": "서울특별시 강남구 밤고개로23길 16",
    "lng": 127.1083019,
    "lat": 37.47348309
  },
  {
    "shopName": "백미당",
    "branchName": "현대백화점압구정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 압구정동 429",
    "roadAddress": "서울특별시 강남구 압구정로 165",
    "lng": 127.0274466,
    "lat": 37.52735907
  },
  {
    "shopName": "이디야커피",
    "branchName": "광산사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 188-1",
    "roadAddress": "서울특별시 강북구 한천로 1083",
    "lng": 127.0226156,
    "lat": 37.64253541
  },
  {
    "shopName": "강아지대학로",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 종로구 동숭동 1-139",
    "roadAddress": "서울특별시 종로구 대학로12길 92",
    "lng": 127.0036649,
    "lat": 37.58008822
  },
  {
    "shopName": "주경자구름떡카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 814-21",
    "roadAddress": "서울특별시 서초구 방배로33길 20",
    "lng": 126.9895834,
    "lat": 37.49183714
  },
  {
    "shopName": "스타벅스",
    "branchName": "염창역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 염창동 282-23",
    "roadAddress": "서울특별시 강서구 공항대로 627",
    "lng": 126.8745264,
    "lat": 37.54727425
  },
  {
    "shopName": "카페꿈틀서울시교육연수원점",
    "branchName": "꿈틀서울시교육연수원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 630",
    "roadAddress": "서울특별시 서초구 남부순환로 2248",
    "lng": 126.9970952,
    "lat": 37.47215001
  },
  {
    "shopName": "리지트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 44-70",
    "roadAddress": "서울특별시 용산구 녹사평대로32길 33-1",
    "lng": 126.9905862,
    "lat": 37.533267
  },
  {
    "shopName": "스타벅스회현역점",
    "branchName": "회현역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 회현동1가 206",
    "roadAddress": "서울특별시 중구 퇴계로 72",
    "lng": 126.9805829,
    "lat": 37.55911313
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "도봉역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 600-1",
    "roadAddress": "서울특별시 도봉구 도봉로 817",
    "lng": 127.0446159,
    "lat": 37.67740536
  },
  {
    "shopName": "봉이냥이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 구의동 54-13",
    "roadAddress": "서울특별시 광진구 자양로 277",
    "lng": 127.0911077,
    "lat": 37.55077093
  },
  {
    "shopName": "쥬씨",
    "branchName": "강서화곡역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1066-10",
    "roadAddress": "서울특별시 강서구 화곡로 143",
    "lng": 126.8376053,
    "lat": 37.54113191
  },
  {
    "shopName": "룸즈에이",
    "branchName": "강남점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 827-14",
    "roadAddress": "서울특별시 강남구 테헤란로4길 35",
    "lng": 127.0306676,
    "lat": 37.49613702
  },
  {
    "shopName": "마스터키",
    "branchName": "건대로데오점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 자양동 5-70",
    "roadAddress": "서울특별시 광진구 동일로20길 98",
    "lng": 127.0687453,
    "lat": 37.53980209
  },
  {
    "shopName": "22번가",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 587-4",
    "roadAddress": "서울특별시 중랑구 신내로14길 22",
    "lng": 127.096682,
    "lat": 37.60554336
  },
  {
    "shopName": "더치앤빈가산롯데IT",
    "branchName": "캐슬점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 550-1",
    "roadAddress": "서울특별시 금천구 가산디지털2로 98",
    "lng": 126.8810386,
    "lat": 37.47722606
  },
  {
    "shopName": "팬도로시",
    "branchName": "한양대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 17",
    "roadAddress": "서울특별시 성동구 왕십리로 220",
    "lng": 127.0424353,
    "lat": 37.55847765
  },
  {
    "shopName": "에스프레사멘테일리보라매점",
    "branchName": "보라매점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 395-70",
    "roadAddress": "서울특별시 동작구 보라매로5길 15",
    "lng": 126.9242507,
    "lat": 37.49217034
  },
  {
    "shopName": "할리스커피",
    "branchName": "수서점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 수서동 713",
    "roadAddress": "서울특별시 강남구 밤고개로1길 10",
    "lng": 127.1018421,
    "lat": 37.48801336
  },
  {
    "shopName": "면목4동주민센터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 378-9",
    "roadAddress": "서울특별시 중랑구 면목로 246",
    "lng": 127.0855867,
    "lat": 37.57469622
  },
  {
    "shopName": "쥬씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 295-2",
    "roadAddress": "서울특별시 영등포구 당산로 114",
    "lng": 126.8966105,
    "lat": 37.52463232
  },
  {
    "shopName": "빽다방신림역2호점",
    "branchName": "신림역2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1641-12",
    "roadAddress": "서울특별시 관악구 신림로 322",
    "lng": 126.9300815,
    "lat": 37.4829605
  },
  {
    "shopName": "킹스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 82-19",
    "roadAddress": "서울특별시 성북구 종암로21길 65-3",
    "lng": 127.0323643,
    "lat": 37.60115906
  },
  {
    "shopName": "텐포티커피컴퍼니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 768-2",
    "roadAddress": "서울특별시 강서구 마곡서로 101",
    "lng": 126.8235863,
    "lat": 37.56266288
  },
  {
    "shopName": "베브릿지",
    "branchName": "성신여대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동1가 84-2",
    "roadAddress": "서울특별시 성북구 보문로34길 69",
    "lng": 127.0190399,
    "lat": 37.5912908
  },
  {
    "shopName": "하프카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1316-17",
    "roadAddress": "서울특별시 서초구 강남대로61길 19",
    "lng": 127.0252111,
    "lat": 37.4982997
  },
  {
    "shopName": "에스엠씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1639-59",
    "roadAddress": "서울특별시 관악구 관천로 34",
    "lng": 126.9277736,
    "lat": 37.48304771
  },
  {
    "shopName": "카페누리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 95-154",
    "roadAddress": "서울특별시 영등포구 영등포로78길 13",
    "lng": 126.9200798,
    "lat": 37.5124599
  },
  {
    "shopName": "솔샘커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 791-1886",
    "roadAddress": "서울특별시 강북구 인수봉로12길 7",
    "lng": 127.013403,
    "lat": 37.62370821
  },
  {
    "shopName": "커피플란트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 37-6",
    "roadAddress": "서울특별시 송파구 거마로 4",
    "lng": 127.1448415,
    "lat": 37.49335136
  },
  {
    "shopName": "에스에이치오리진커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 15-5",
    "roadAddress": "서울특별시 영등포구 선유로43길 32",
    "lng": 126.8922753,
    "lat": 37.53472844
  },
  {
    "shopName": "꽃다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 926-27",
    "roadAddress": "서울특별시 금천구 금하로24길 73",
    "lng": 126.9090521,
    "lat": 37.44785246
  },
  {
    "shopName": "커피와닷컴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 248-10",
    "roadAddress": "서울특별시 송파구 삼전로7길 16",
    "lng": 127.086927,
    "lat": 37.50566792
  },
  {
    "shopName": "루틴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 106-8",
    "roadAddress": "서울특별시 강남구 영동대로112길 9",
    "lng": 127.0609294,
    "lat": 37.5151865
  },
  {
    "shopName": "컬러오브커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 하왕십리동 1070",
    "roadAddress": "서울특별시 성동구 왕십리로 410",
    "lng": 127.0240621,
    "lat": 37.56654474
  },
  {
    "shopName": "카페",
    "branchName": "베란다",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 남가좌동 5-123",
    "roadAddress": "서울특별시 서대문구 명지대3길 26",
    "lng": 126.9222559,
    "lat": 37.58211216
  },
  {
    "shopName": "오가다청담",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 4-1",
    "roadAddress": "서울특별시 강남구 도산대로 442",
    "lng": 127.0441068,
    "lat": 37.5233052
  },
  {
    "shopName": "파스쿠찌",
    "branchName": "김포공항국내선점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 1373-5",
    "roadAddress": "서울특별시 강서구 하늘길 112",
    "lng": 126.8084568,
    "lat": 37.55674456
  },
  {
    "shopName": "말랑슬라임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 895-4",
    "roadAddress": "서울특별시 강남구 남부순환로365길 56",
    "lng": 127.0402458,
    "lat": 37.48910588
  },
  {
    "shopName": "이디야커피신당중앙점",
    "branchName": "신당중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 황학동 2480",
    "roadAddress": "서울특별시 중구 퇴계로 455",
    "lng": 127.022309,
    "lat": 37.56557513
  },
  {
    "shopName": "이디야커피용두점",
    "branchName": "용두점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 40-1",
    "roadAddress": "서울특별시 동대문구 고산자로 413-1",
    "lng": 127.0379119,
    "lat": 37.57665101
  },
  {
    "shopName": "오르컴퍼니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 경운동 1-8",
    "roadAddress": "서울특별시 종로구 삼일대로32길 22",
    "lng": 126.9880837,
    "lat": 37.57526126
  },
  {
    "shopName": "더착한커피",
    "branchName": "지하이시티구로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 237",
    "roadAddress": "서울특별시 구로구 디지털로 243",
    "lng": 126.8923309,
    "lat": 37.48198187
  },
  {
    "shopName": "커피에반하다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 735-2",
    "roadAddress": "서울특별시 노원구 동일로217가길 39",
    "lng": 127.0581872,
    "lat": 37.6530605
  },
  {
    "shopName": "CARANdACHE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1348-10",
    "roadAddress": "서울특별시 서초구 서운로11길 71",
    "lng": 127.0261932,
    "lat": 37.48625168
  },
  {
    "shopName": "커피베이",
    "branchName": "가산대륭20차점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 691",
    "roadAddress": "서울특별시 금천구 가산디지털1로 5",
    "lng": 126.8867002,
    "lat": 37.46673727
  },
  {
    "shopName": "커피코트",
    "branchName": "순화동더샵점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 순화동 151",
    "roadAddress": "서울특별시 중구 칠패로 27",
    "lng": 126.9720218,
    "lat": 37.56025531
  },
  {
    "shopName": "베리굿슬라임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1280-1",
    "roadAddress": "서울특별시 성북구 길음로13길 39",
    "lng": 127.0162,
    "lat": 37.6100358
  },
  {
    "shopName": "프레이커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 204-2",
    "roadAddress": "서울특별시 성동구 성덕정길 152",
    "lng": 127.0601783,
    "lat": 37.53628319
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "송파개롱역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 166-9",
    "roadAddress": "서울특별시 송파구 동남로 236",
    "lng": 127.1335072,
    "lat": 37.49753079
  },
  {
    "shopName": "커피베이",
    "branchName": "성수세종타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 284-62",
    "roadAddress": "서울특별시 성동구 성수일로10길 26",
    "lng": 127.0531361,
    "lat": 37.54646287
  },
  {
    "shopName": "소담커피&쥬스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 35",
    "roadAddress": "서울특별시 송파구 잠실로 62",
    "lng": 127.0902691,
    "lat": 37.50800943
  },
  {
    "shopName": "얼반그레이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 467-24",
    "roadAddress": "서울특별시 강남구 언주로 118",
    "lng": 127.0518416,
    "lat": 37.48691083
  },
  {
    "shopName": "카페테라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 1002",
    "roadAddress": "서울특별시 강남구 영동대로 416",
    "lng": 127.0653126,
    "lat": 37.50658014
  },
  {
    "shopName": "빌리엔젤",
    "branchName": "딜리버리센터잠실점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 217-10",
    "roadAddress": "서울특별시 송파구 백제고분로13길 9",
    "lng": 127.0819852,
    "lat": 37.50744075
  },
  {
    "shopName": "프롬테오커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 373-13",
    "roadAddress": "서울특별시 마포구 동교로 227-7",
    "lng": 126.9235836,
    "lat": 37.56066158
  },
  {
    "shopName": "카페숨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 증산동 167-1",
    "roadAddress": "서울특별시 은평구 증산로9길 13",
    "lng": 126.908805,
    "lat": 37.58525032
  },
  {
    "shopName": "마차롱카페",
    "branchName": "3호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 691",
    "roadAddress": "서울특별시 금천구 가산디지털1로 5",
    "lng": 126.8867002,
    "lat": 37.46673727
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "CJ남산사옥점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로5가 500",
    "roadAddress": "서울특별시 중구 소월로2길 12",
    "lng": 126.9759589,
    "lat": 37.55459493
  },
  {
    "shopName": "미라클1",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 도봉구 도봉동 624-25",
    "roadAddress": "서울특별시 도봉구 도봉로156길 13",
    "lng": 127.0451393,
    "lat": 37.67283236
  },
  {
    "shopName": "카페뮤즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 983-3",
    "roadAddress": "서울특별시 서초구 방배로10길 10-4",
    "lng": 126.9985605,
    "lat": 37.48095675
  },
  {
    "shopName": "이케아",
    "branchName": "푸드랩",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 280",
    "roadAddress": "서울특별시 성동구 아차산로17길 48",
    "lng": 127.0661369,
    "lat": 37.54662047
  },
  {
    "shopName": "카페터울",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 삼선동5가 301",
    "roadAddress": "서울특별시 성북구 보문로 170",
    "lng": 127.0161925,
    "lat": 37.5899696
  },
  {
    "shopName": "통툰",
    "branchName": "서울대입구역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 853-2",
    "roadAddress": "서울특별시 관악구 관악로16길 13",
    "lng": 126.9534319,
    "lat": 37.48041244
  },
  {
    "shopName": "슈가링스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 534-10",
    "roadAddress": "서울특별시 강동구 성내로9길 35-6",
    "lng": 127.1246173,
    "lat": 37.53052512
  },
  {
    "shopName": "벌스데이투미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 223-93",
    "roadAddress": "서울특별시 마포구 성미산로29안길 26",
    "lng": 126.923639,
    "lat": 37.56546462
  },
  {
    "shopName": "소소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로2가 55-1",
    "roadAddress": "서울특별시 종로구 종로 104",
    "lng": 126.9890951,
    "lat": 37.56995378
  },
  {
    "shopName": "찐Days",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 84",
    "roadAddress": "서울특별시 은평구 진관2로 57-37",
    "lng": 126.9279118,
    "lat": 37.63532452
  },
  {
    "shopName": "지유명차",
    "branchName": "구반포역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 반포동 891",
    "roadAddress": "서울특별시 서초구 신반포로 27-12",
    "lng": 126.9873004,
    "lat": 37.50263022
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "창동이마트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 135-26",
    "roadAddress": "서울특별시 도봉구 노해로65길 4",
    "lng": 127.0466801,
    "lat": 37.65162553
  },
  {
    "shopName": "와드커피",
    "branchName": "충무로점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 충무로2가 50-2",
    "roadAddress": "서울특별시 중구 수표로 9",
    "lng": 126.9902763,
    "lat": 37.56211581
  },
  {
    "shopName": "롯데마트중계점",
    "branchName": "중계점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 361",
    "roadAddress": "서울특별시 노원구 노원로 330",
    "lng": 127.0709241,
    "lat": 37.64678217
  },
  {
    "shopName": "로스팅포인트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 871-58",
    "roadAddress": "서울특별시 강서구 곰달래로31가길 34",
    "lng": 126.8532247,
    "lat": 37.53201297
  },
  {
    "shopName": "카페희제",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 433-4",
    "roadAddress": "서울특별시 동대문구 장한로 22",
    "lng": 127.066111,
    "lat": 37.56320858
  },
  {
    "shopName": "파스타8½",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 동숭동 129-130",
    "roadAddress": "서울특별시 종로구 낙산길 21",
    "lng": 127.0056968,
    "lat": 37.58053786
  },
  {
    "shopName": "스위트레코드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 41-1",
    "roadAddress": "서울특별시 광진구 아차산로21길 77",
    "lng": 127.0665493,
    "lat": 37.54531721
  },
  {
    "shopName": "디저트39",
    "branchName": "화곡역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1067-19",
    "roadAddress": "서울특별시 강서구 화곡로 135",
    "lng": 126.8367147,
    "lat": 37.5409159
  },
  {
    "shopName": "커피상담원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 326-17",
    "roadAddress": "서울특별시 강서구 양천로30길 22",
    "lng": 126.822554,
    "lat": 37.57215844
  },
  {
    "shopName": "카페바움",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 751-1",
    "roadAddress": "서울특별시 노원구 동일로214길 21",
    "lng": 127.0627422,
    "lat": 37.6504207
  },
  {
    "shopName": "빌로우",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 신도림동 692",
    "roadAddress": "서울특별시 구로구 경인로 662",
    "lng": 126.8884846,
    "lat": 37.50805804
  },
  {
    "shopName": "우리지금여기",
    "branchName": "은평점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 9-53",
    "roadAddress": "서울특별시 은평구 역말로 51",
    "lng": 126.9161573,
    "lat": 37.60604181
  },
  {
    "shopName": "엘티커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 233-5",
    "roadAddress": "서울특별시 금천구 디지털로10길 69",
    "lng": 126.8908999,
    "lat": 37.47552595
  },
  {
    "shopName": "헤이데이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 235-7",
    "roadAddress": "서울특별시 영등포구 가마산로 505",
    "lng": 126.9126361,
    "lat": 37.50549861
  },
  {
    "shopName": "커멍커멍",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 마곡동 794-1",
    "roadAddress": "서울특별시 강서구 강서로 385",
    "lng": 126.8382844,
    "lat": 37.5600783
  },
  {
    "shopName": "유니유니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1276",
    "roadAddress": "서울특별시 성북구 동소문로 248",
    "lng": 127.0245428,
    "lat": 37.60345539
  },
  {
    "shopName": "로비카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 678-7",
    "roadAddress": "서울특별시 강서구 강서로 307",
    "lng": 126.8362066,
    "lat": 37.55321901
  },
  {
    "shopName": "공작",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 449-7",
    "roadAddress": "서울특별시 마포구 동교로19길 56",
    "lng": 126.9171167,
    "lat": 37.55780922
  },
  {
    "shopName": "커피엔빵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 707",
    "roadAddress": "서울특별시 동작구 여의대방로 28",
    "lng": 126.9116763,
    "lat": 37.4952629
  },
  {
    "shopName": "일일육커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동7가 203",
    "roadAddress": "서울특별시 영등포구 국회대로54길 10",
    "lng": 126.9064232,
    "lat": 37.52357026
  },
  {
    "shopName": "바틀브로스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 88-470",
    "roadAddress": "서울특별시 성북구 동소문로46길 10",
    "lng": 127.0293458,
    "lat": 37.60685587
  },
  {
    "shopName": "가가린철우사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 817-34",
    "roadAddress": "서울특별시 강남구 강남대로98길 14",
    "lng": 127.0278266,
    "lat": 37.50068202
  },
  {
    "shopName": "오버스토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 8-28",
    "roadAddress": "서울특별시 성북구 선잠로2다길 13-13",
    "lng": 126.9996005,
    "lat": 37.59869636
  },
  {
    "shopName": "김마왕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 111",
    "roadAddress": "서울특별시 노원구 상계로 305",
    "lng": 127.0789968,
    "lat": 37.67028138
  },
  {
    "shopName": "진부책방스튜디오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 458-1",
    "roadAddress": "서울특별시 마포구 잔다리로 112",
    "lng": 126.9143896,
    "lat": 37.55699126
  },
  {
    "shopName": "던킨NC신구로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 573",
    "roadAddress": "서울특별시 구로구 구로중앙로 146-1",
    "lng": 126.8824086,
    "lat": 37.50137804
  },
  {
    "shopName": "사주앤타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 관훈동 38",
    "roadAddress": "서울특별시 종로구 인사동길 44",
    "lng": 126.9848378,
    "lat": 37.57418818
  },
  {
    "shopName": "카페리에또",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 494-33",
    "roadAddress": "서울특별시 강동구 암사길 12",
    "lng": 127.1309767,
    "lat": 37.55092693
  },
  {
    "shopName": "카페띠아모",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 신도림동 643",
    "roadAddress": "서울특별시 구로구 신도림로 87",
    "lng": 126.8822206,
    "lat": 37.51095435
  },
  {
    "shopName": "더카페",
    "branchName": "모모랑라이",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 610-9",
    "roadAddress": "서울특별시 광진구 동일로 341",
    "lng": 127.0745759,
    "lat": 37.5615272
  },
  {
    "shopName": "양원재",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 논현동 134-14",
    "roadAddress": "서울특별시 강남구 학동로18길 21",
    "lng": 127.0276414,
    "lat": 37.51147512
  },
  {
    "shopName": "아이디어",
    "branchName": "스스토어",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 44",
    "roadAddress": "서울특별시 종로구 인사동12길 12-4",
    "lng": 126.9851985,
    "lat": 37.57430842
  },
  {
    "shopName": "예니네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 224-11",
    "roadAddress": "서울특별시 동작구 솔밭로 108",
    "lng": 126.9686015,
    "lat": 37.48562778
  },
  {
    "shopName": "노천사랑방서울",
    "branchName": "서초본점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 서초동 1694-10",
    "roadAddress": "서울특별시 서초구 서초중앙로 148",
    "lng": 127.0137644,
    "lat": 37.49498793
  },
  {
    "shopName": "참다정",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동대문구 제기동 1082",
    "roadAddress": "서울특별시 동대문구 약령중앙로 26",
    "lng": 127.0376465,
    "lat": 37.58055937
  },
  {
    "shopName": "뜰채",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 숭인동 201-7",
    "roadAddress": "서울특별시 종로구 난계로29길 31",
    "lng": 127.021463,
    "lat": 37.57400189
  },
  {
    "shopName": "히어로보드게임카페",
    "branchName": "신촌점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 창천동 31-80",
    "roadAddress": "서울특별시 서대문구 명물길 23",
    "lng": 126.937835,
    "lat": 37.55818665
  },
  {
    "shopName": "카페",
    "branchName": "프라자",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 21",
    "roadAddress": "서울특별시 종로구 인사동길 34-1",
    "lng": 126.9855215,
    "lat": 37.57386068
  },
  {
    "shopName": "파이앤브라우니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 창전동 442",
    "roadAddress": "서울특별시 마포구 창전로 45",
    "lng": 126.9319761,
    "lat": 37.54680772
  },
  {
    "shopName": "cafeonus",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 35",
    "roadAddress": "서울특별시 송파구 잠실로 62",
    "lng": 127.0902691,
    "lat": 37.50800943
  },
  {
    "shopName": "루시오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 326-8",
    "roadAddress": "서울특별시 노원구 노해로83길 18-10",
    "lng": 127.0647345,
    "lat": 37.65601392
  },
  {
    "shopName": "크레이저커피",
    "branchName": "마곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 774-9",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 42",
    "lng": 126.8320702,
    "lat": 37.56009808
  },
  {
    "shopName": "띵크커피",
    "branchName": "캐딜락하우스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 61-5",
    "roadAddress": "서울특별시 강남구 도산대로 224",
    "lng": 127.0315424,
    "lat": 37.52033749
  },
  {
    "shopName": "다락방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 1030",
    "roadAddress": "서울특별시 금천구 시흥대로73길 50",
    "lng": 126.896731,
    "lat": 37.45724418
  },
  {
    "shopName": "캔커피자나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 387-10",
    "roadAddress": "서울특별시 노원구 상계로 146",
    "lng": 127.0707117,
    "lat": 37.65837682
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아대치한티점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 924-9",
    "roadAddress": "서울특별시 강남구 선릉로64길 23",
    "lng": 127.0541518,
    "lat": 37.49829169
  },
  {
    "shopName": "시즌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 358-6",
    "roadAddress": "서울특별시 노원구 상계로3길 38-2",
    "lng": 127.0627053,
    "lat": 37.65786295
  },
  {
    "shopName": "커피테이크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 195-8",
    "roadAddress": "서울특별시 구로구 고척로 225",
    "lng": 126.8579422,
    "lat": 37.50607272
  },
  {
    "shopName": "옥수서재",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 옥수동 360",
    "roadAddress": "서울특별시 성동구 한림말1길 16-1",
    "lng": 127.0163949,
    "lat": 37.54272954
  },
  {
    "shopName": "커피집단카페소프트",
    "branchName": "구로지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 222-22",
    "roadAddress": "서울특별시 구로구 디지털로26길 72",
    "lng": 126.8965177,
    "lat": 37.48098485
  },
  {
    "shopName": "Sapper커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 951-11",
    "roadAddress": "서울특별시 서초구 서초대로4길 17",
    "lng": 126.9854709,
    "lat": 37.48487279
  },
  {
    "shopName": "엔제리너스",
    "branchName": "커피영등포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동3가 10-16",
    "roadAddress": "서울특별시 영등포구 영중로 6",
    "lng": 126.906633,
    "lat": 37.51694953
  },
  {
    "shopName": "블루포트이대서울병원점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 808",
    "roadAddress": "서울특별시 강서구 공항대로 260",
    "lng": 126.8362457,
    "lat": 37.55725601
  },
  {
    "shopName": "펫즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 96-8",
    "roadAddress": "서울특별시 강남구 언주로148길 31-2",
    "lng": 127.0371294,
    "lat": 37.52132928
  },
  {
    "shopName": "티아커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 519",
    "roadAddress": "서울특별시 중랑구 사가정로72길 47",
    "lng": 127.0957539,
    "lat": 37.57928879
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "예금보험공사점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 다동 33",
    "roadAddress": "서울특별시 중구 청계천로 30",
    "lng": 126.9807834,
    "lat": 37.56849471
  },
  {
    "shopName": "홍베이팡마곡",
    "branchName": "발산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 795-5",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 85",
    "lng": 126.8368671,
    "lat": 37.56023554
  },
  {
    "shopName": "이디야커피",
    "branchName": "증산동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 증산동 186-8",
    "roadAddress": "서울특별시 은평구 증산서길 78",
    "lng": 126.9065343,
    "lat": 37.58335515
  },
  {
    "shopName": "렛츠롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 103-9",
    "roadAddress": "서울특별시 도봉구 우이천로24길 50",
    "lng": 127.0319935,
    "lat": 37.64548702
  },
  {
    "shopName": "스타벅스",
    "branchName": "서울대치과병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 연건동 28-21",
    "roadAddress": "서울특별시 종로구 대학로 101",
    "lng": 126.9971841,
    "lat": 37.58044782
  },
  {
    "shopName": "솔바람소리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 445-4",
    "roadAddress": "서울특별시 마포구 동교로 163",
    "lng": 126.9201406,
    "lat": 37.55610692
  },
  {
    "shopName": "비샵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 56-47",
    "roadAddress": "서울특별시 서대문구 이화여대3길 18",
    "lng": 126.9447178,
    "lat": 37.5580952
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "올림픽공원역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 88",
    "roadAddress": "서울특별시 송파구 올림픽로 424",
    "lng": 127.1157765,
    "lat": 37.52034939
  },
  {
    "shopName": "데니스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 풍납동 490-13",
    "roadAddress": "서울특별시 송파구 올림픽로59길 3",
    "lng": 127.1216775,
    "lat": 37.53518878
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "화랑대역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 90-1",
    "roadAddress": "서울특별시 노원구 노원로1길 9",
    "lng": 127.086421,
    "lat": 37.62221474
  },
  {
    "shopName": "와플대학",
    "branchName": "종각캠퍼스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로2가 11-1",
    "roadAddress": "서울특별시 종로구 종로 75",
    "lng": 126.9857606,
    "lat": 37.57042075
  },
  {
    "shopName": "오.로.시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 221-3",
    "roadAddress": "서울특별시 관악구 낙성대로3길 21-6",
    "lng": 126.9604327,
    "lat": 37.47455432
  },
  {
    "shopName": "카페",
    "branchName": "오델리",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 410-15",
    "roadAddress": "서울특별시 강동구 풍성로51길 8",
    "lng": 127.1329359,
    "lat": 37.53029814
  },
  {
    "shopName": "앤티앤스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 333-1",
    "roadAddress": "서울특별시 노원구 마들로3길 13",
    "lng": 127.0619664,
    "lat": 37.62650103
  },
  {
    "shopName": "카페",
    "branchName": "스테어스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 184-3",
    "roadAddress": "서울특별시 중랑구 동일로109길 28",
    "lng": 127.0795975,
    "lat": 37.59220205
  },
  {
    "shopName": "앙카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 663-32",
    "roadAddress": "서울특별시 강남구 언주로99길 10",
    "lng": 127.0401103,
    "lat": 37.50587344
  },
  {
    "shopName": "레드엘리펀트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 651-1",
    "roadAddress": "서울특별시 양천구 등촌로 184",
    "lng": 126.8628543,
    "lat": 37.54609018
  },
  {
    "shopName": "만랩커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 151-7",
    "roadAddress": "서울특별시 강남구 삼성로 534",
    "lng": 127.0555239,
    "lat": 37.50967399
  },
  {
    "shopName": "정월",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 618-21",
    "roadAddress": "서울특별시 강남구 강남대로102길 46",
    "lng": 127.0286137,
    "lat": 37.50365297
  },
  {
    "shopName": "브루클린커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 652",
    "roadAddress": "서울특별시 강서구 강서로52길 16",
    "lng": 126.8389324,
    "lat": 37.55770595
  },
  {
    "shopName": "엘루이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 산천동 202",
    "roadAddress": "서울특별시 용산구 원효로 51",
    "lng": 126.9500493,
    "lat": 37.53385063
  },
  {
    "shopName": "플라네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 남현동 1079-42",
    "roadAddress": "서울특별시 관악구 남현8길 9",
    "lng": 126.9751885,
    "lat": 37.47358394
  },
  {
    "shopName": "슬로우빈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 111-27",
    "roadAddress": "서울특별시 강남구 선릉로 709",
    "lng": 127.0406537,
    "lat": 37.51821328
  },
  {
    "shopName": "카페온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 553-453",
    "roadAddress": "서울특별시 광진구 능동로4길 3",
    "lng": 127.0682395,
    "lat": 37.53407642
  },
  {
    "shopName": "동원홈푸드K2코리아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 648",
    "roadAddress": "서울특별시 강남구 자곡로 174-14",
    "lng": 127.1031853,
    "lat": 37.47212882
  },
  {
    "shopName": "이디야커피",
    "branchName": "송파풍납점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 풍납동 399-11",
    "roadAddress": "서울특별시 송파구 강동대로9길 17-1",
    "lng": 127.1165223,
    "lat": 37.52809506
  },
  {
    "shopName": "생각나니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 고덕동 655",
    "roadAddress": "서울특별시 강동구 고덕로61길 148",
    "lng": 127.1513438,
    "lat": 37.56127501
  },
  {
    "shopName": "쿠키굽는고양이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 782",
    "roadAddress": "서울특별시 영등포구 도신로4길 27",
    "lng": 126.8965377,
    "lat": 37.50115045
  },
  {
    "shopName": "에딕티",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 은평구 역촌동 22-66",
    "roadAddress": "서울특별시 은평구 연서로 66-1",
    "lng": 126.9158776,
    "lat": 37.60503008
  },
  {
    "shopName": "와겐커피",
    "branchName": "방학점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 716-14",
    "roadAddress": "서울특별시 도봉구 도봉로150마길 15",
    "lng": 127.0449457,
    "lat": 37.66670379
  },
  {
    "shopName": "와플대학",
    "branchName": "명보사거리캠퍼스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 초동 70-4",
    "roadAddress": "서울특별시 중구 마른내로 42",
    "lng": 126.9924326,
    "lat": 37.56421564
  },
  {
    "shopName": "착한커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 468-5",
    "roadAddress": "서울특별시 강북구 도봉로96길 19",
    "lng": 127.0298276,
    "lat": 37.64037839
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "수락산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1132-63",
    "roadAddress": "서울특별시 노원구 동일로243길 13",
    "lng": 127.0543664,
    "lat": 37.67820476
  },
  {
    "shopName": "티파니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 중화동 298-13",
    "roadAddress": "서울특별시 중랑구 중랑역로 18",
    "lng": 127.0764398,
    "lat": 37.59574552
  },
  {
    "shopName": "전통찻집담소",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 상암동 1605",
    "roadAddress": "서울특별시 마포구 월드컵북로 396",
    "lng": 126.8898124,
    "lat": 37.57948681
  },
  {
    "shopName": "8GALLERY-EIGHT",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 590-14",
    "roadAddress": "서울특별시 강남구 논현로152길 21",
    "lng": 127.0297869,
    "lat": 37.5213683
  },
  {
    "shopName": "오커피랩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 605-292",
    "roadAddress": "서울특별시 강북구 삼각산로 117",
    "lng": 127.0172313,
    "lat": 37.64096793
  },
  {
    "shopName": "WL맥주커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 83-16",
    "roadAddress": "서울특별시 은평구 연서로 33",
    "lng": 126.9155806,
    "lat": 37.60208098
  },
  {
    "shopName": "꽃다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 미근동 72-5",
    "roadAddress": "서울특별시 서대문구 충정로6안길 17-2",
    "lng": 126.9671617,
    "lat": 37.56303315
  },
  {
    "shopName": "커피에반하다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 548",
    "roadAddress": "서울특별시 은평구 갈현로 300",
    "lng": 126.9173978,
    "lat": 37.62359624
  },
  {
    "shopName": "1989COFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 293-10",
    "roadAddress": "서울특별시 강동구 구천면로 297",
    "lng": 127.1338923,
    "lat": 37.54640704
  },
  {
    "shopName": "트루비커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 녹번동 118-47",
    "roadAddress": "서울특별시 은평구 진흥로 184",
    "lng": 126.9298415,
    "lat": 37.60821203
  },
  {
    "shopName": "cafeheaven",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 366-3",
    "roadAddress": "서울특별시 서대문구 가좌로 116",
    "lng": 126.925857,
    "lat": 37.58284779
  },
  {
    "shopName": "와플대학",
    "branchName": "쌍문캠퍼스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 45-15",
    "roadAddress": "서울특별시 도봉구 해등로 176",
    "lng": 127.037083,
    "lat": 37.65764757
  },
  {
    "shopName": "디노비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 37-61",
    "roadAddress": "서울특별시 서대문구 이화여대7길 31",
    "lng": 126.9438842,
    "lat": 37.55861936
  },
  {
    "shopName": "띠그래블랑코",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 718-1",
    "roadAddress": "서울특별시 서초구 주흥길 64-17",
    "lng": 127.0193829,
    "lat": 37.50897401
  },
  {
    "shopName": "라떼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 193-2",
    "roadAddress": "서울특별시 중구 다산로 293",
    "lng": 127.0149721,
    "lat": 37.56915436
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "석계역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 46-1",
    "roadAddress": "서울특별시 노원구 화랑로 337",
    "lng": 127.065155,
    "lat": 37.6152273
  },
  {
    "shopName": "샐러드봉봉",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 121-38",
    "roadAddress": "서울특별시 강남구 삼성로103길 12",
    "lng": 127.0533771,
    "lat": 37.51038666
  },
  {
    "shopName": "씨지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 304-2",
    "roadAddress": "서울특별시 강북구 도봉로 191",
    "lng": 127.02603,
    "lat": 37.62575935
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "북가좌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북가좌동 292-1",
    "roadAddress": "서울특별시 서대문구 응암로 108",
    "lng": 126.9133223,
    "lat": 37.58215639
  },
  {
    "shopName": "배꽃커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 34-52",
    "roadAddress": "서울특별시 서대문구 이화여대길 72-4",
    "lng": 126.9445193,
    "lat": 37.55932785
  },
  {
    "shopName": "스테이블커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 873-23",
    "roadAddress": "서울특별시 서초구 방배로25길 25",
    "lng": 126.991588,
    "lat": 37.48825005
  },
  {
    "shopName": "커피에반하다",
    "branchName": "마천시장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 마천동 178-1",
    "roadAddress": "서울특별시 송파구 마천로41길 32",
    "lng": 127.1509314,
    "lat": 37.49682833
  },
  {
    "shopName": "트웬티트웬티커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 183-21",
    "roadAddress": "서울특별시 중랑구 봉우재로13길 8",
    "lng": 127.0776879,
    "lat": 37.59095271
  },
  {
    "shopName": "스타벅스연대동문",
    "branchName": "연대동문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대신동 115",
    "roadAddress": "서울특별시 서대문구 성산로 565",
    "lng": 126.9463211,
    "lat": 37.56640809
  },
  {
    "shopName": "리히트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 441",
    "roadAddress": "서울특별시 서대문구 연희로4길 10",
    "lng": 126.9277579,
    "lat": 37.56160961
  },
  {
    "shopName": "이디야커피",
    "branchName": "독바위역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 13-22",
    "roadAddress": "서울특별시 은평구 불광로 128",
    "lng": 126.9332899,
    "lat": 37.61814559
  },
  {
    "shopName": "태극당",
    "branchName": "인사점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 16",
    "roadAddress": "서울특별시 종로구 인사동길 32",
    "lng": 126.9859329,
    "lat": 37.57357588
  },
  {
    "shopName": "브루다인사동",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 공평동 9",
    "roadAddress": "서울특별시 종로구 우정국로 36",
    "lng": 126.9832578,
    "lat": 37.57216526
  },
  {
    "shopName": "하이",
    "branchName": "엔드코리아",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 118-2",
    "roadAddress": "서울특별시 종로구 인사동길 62-5",
    "lng": 126.9838355,
    "lat": 37.57546805
  },
  {
    "shopName": "에딕티",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 노고산동 31-33",
    "roadAddress": "서울특별시 마포구 백범로1길 12",
    "lng": 126.9377874,
    "lat": 37.55436581
  },
  {
    "shopName": "오타르",
    "branchName": "DDP점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 을지로7가 2-1",
    "roadAddress": "서울특별시 중구 을지로 281",
    "lng": 127.0108895,
    "lat": 37.56800293
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "인덕대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 648",
    "roadAddress": "서울특별시 노원구 초안산로 12",
    "lng": 127.0544862,
    "lat": 37.63033381
  },
  {
    "shopName": "커피빈코리아테헤란로하이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 890-60",
    "roadAddress": "서울특별시 강남구 테헤란로70길 12",
    "lng": 127.0531431,
    "lat": 37.50473517
  },
  {
    "shopName": "소소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용문동 32-74",
    "roadAddress": "서울특별시 용산구 새창로 100",
    "lng": 126.9595117,
    "lat": 37.53849366
  },
  {
    "shopName": "매머드커피묵동자이점",
    "branchName": "묵동자이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 170-1",
    "roadAddress": "서울특별시 중랑구 동일로 932",
    "lng": 127.0775414,
    "lat": 37.61382905
  },
  {
    "shopName": "커피홀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 425-1",
    "roadAddress": "서울특별시 서초구 방배천로 92",
    "lng": 126.9833265,
    "lat": 37.48458404
  },
  {
    "shopName": "스포애니불광역커피마마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 14-19",
    "roadAddress": "서울특별시 은평구 통일로 727-3",
    "lng": 126.9293819,
    "lat": 37.6102442
  },
  {
    "shopName": "카페문화",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 원효로4가 19",
    "roadAddress": "서울특별시 용산구 효창원로12길 37",
    "lng": 126.9528623,
    "lat": 37.533353
  },
  {
    "shopName": "사주카페큐",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서대문구 대현동 37-73",
    "roadAddress": "서울특별시 서대문구 이화여대7길 20-5",
    "lng": 126.9444449,
    "lat": 37.55898479
  },
  {
    "shopName": "공간산마루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신공덕동 159",
    "roadAddress": "서울특별시 마포구 만리재로 74",
    "lng": 126.9588576,
    "lat": 37.54647114
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "은평신사점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 신사동 7-4",
    "roadAddress": "서울특별시 은평구 갈현로 44",
    "lng": 126.9104557,
    "lat": 37.60171842
  },
  {
    "shopName": "남산스퀘어약국",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로3가 60-1",
    "roadAddress": "서울특별시 중구 퇴계로 173",
    "lng": 126.9910387,
    "lat": 37.56181597
  },
  {
    "shopName": "겟썸커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 551-32",
    "roadAddress": "서울특별시 강남구 논현로159길 46-6",
    "lng": 127.0244448,
    "lat": 37.52242358
  },
  {
    "shopName": "커피타임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 석관동 127-73",
    "roadAddress": "서울특별시 성북구 한천로78길 43",
    "lng": 127.0642824,
    "lat": 37.6125443
  },
  {
    "shopName": "쉼터올래",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 만리동2가 37-2",
    "roadAddress": "서울특별시 중구 만리재로 175",
    "lng": 126.9639578,
    "lat": 37.55490471
  },
  {
    "shopName": "블레스인커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 799-2",
    "roadAddress": "서울특별시 강서구 공항대로 190",
    "lng": 126.8286235,
    "lat": 37.55902775
  },
  {
    "shopName": "작약",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 659-1",
    "roadAddress": "서울특별시 도봉구 도봉로118길 10",
    "lng": 127.035654,
    "lat": 37.64895895
  },
  {
    "shopName": "동건스",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 서초구 방배동 778-20",
    "roadAddress": "서울특별시 서초구 방배중앙로 157",
    "lng": 126.9861507,
    "lat": 37.49314129
  },
  {
    "shopName": "커피집단카페소프트",
    "branchName": "여의도지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 23",
    "roadAddress": "서울특별시 영등포구 국제금융로 10",
    "lng": 126.9248631,
    "lat": 37.52517222
  },
  {
    "shopName": "어느날오늘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 314-69",
    "roadAddress": "서울특별시 중랑구 봉화산로30길 98",
    "lng": 127.0851337,
    "lat": 37.59784058
  },
  {
    "shopName": "띵굴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 30-33",
    "roadAddress": "서울특별시 서대문구 신촌로 83",
    "lng": 126.9358278,
    "lat": 37.55606915
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "충무로역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동2가 15-7",
    "roadAddress": "서울특별시 중구 퇴계로 206",
    "lng": 126.9947944,
    "lat": 37.56113619
  },
  {
    "shopName": "달나라고양이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 149-12",
    "roadAddress": "서울특별시 광진구 군자로 128",
    "lng": 127.073781,
    "lat": 37.55350163
  },
  {
    "shopName": "제주몰빵",
    "branchName": "동양미래대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 62-160",
    "roadAddress": "서울특별시 구로구 경인로 445",
    "lng": 126.8681568,
    "lat": 37.49998989
  },
  {
    "shopName": "터프커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 하계동 72-18",
    "roadAddress": "서울특별시 노원구 공릉로58길 122",
    "lng": 127.0750572,
    "lat": 37.63606528
  },
  {
    "shopName": "매머드익스프레스강남오거리점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 810-8",
    "roadAddress": "서울특별시 강남구 강남대로106길 7",
    "lng": 127.0262023,
    "lat": 37.50296633
  },
  {
    "shopName": "바리스타마르코악쓰는하마",
    "branchName": "고척점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 52-201",
    "roadAddress": "서울특별시 구로구 경인로47길 14",
    "lng": 126.8670335,
    "lat": 37.50023141
  },
  {
    "shopName": "스콘&와플",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 222-45",
    "roadAddress": "서울특별시 광진구 자양로26길 93",
    "lng": 127.088959,
    "lat": 37.5404103
  },
  {
    "shopName": "커피투데이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 신설동 104-29",
    "roadAddress": "서울특별시 동대문구 천호대로4길 16",
    "lng": 127.0251344,
    "lat": 37.57373492
  },
  {
    "shopName": "페이토커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1361-10",
    "roadAddress": "서울특별시 서초구 강남대로 259",
    "lng": 127.0326118,
    "lat": 37.48656571
  },
  {
    "shopName": "MMM",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 449",
    "roadAddress": "서울특별시 서대문구 연희로 30",
    "lng": 126.9271951,
    "lat": 37.56139726
  },
  {
    "shopName": "비젼카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 187-37",
    "roadAddress": "서울특별시 은평구 통일로75길 6-18",
    "lng": 126.9228248,
    "lat": 37.61647372
  },
  {
    "shopName": "로뎀나무",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 305-94",
    "roadAddress": "서울특별시 동대문구 휘경로2가길 21",
    "lng": 127.0619504,
    "lat": 37.59530688
  },
  {
    "shopName": "플라시보",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 순화동 151",
    "roadAddress": "서울특별시 중구 칠패로 27",
    "lng": 126.9720218,
    "lat": 37.56025531
  },
  {
    "shopName": "마이톡스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 87-4",
    "roadAddress": "서울특별시 강남구 도산대로 409",
    "lng": 127.0404702,
    "lat": 37.52370821
  },
  {
    "shopName": "디저트카페윰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 59-6",
    "roadAddress": "서울특별시 강동구 명일로 165",
    "lng": 127.1444031,
    "lat": 37.53374272
  },
  {
    "shopName": "달리셔스팁스그라운드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 747-3",
    "roadAddress": "서울특별시 강남구 역삼로 169",
    "lng": 127.0375285,
    "lat": 37.49553534
  },
  {
    "shopName": "카페인중독",
    "branchName": "인중독",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 102-12",
    "roadAddress": "서울특별시 강서구 까치산로4길 65",
    "lng": 126.8462967,
    "lat": 37.54033413
  },
  {
    "shopName": "야미다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 18-187",
    "roadAddress": "서울특별시 중구 장충단로13길 43",
    "lng": 127.0064397,
    "lat": 37.5680827
  },
  {
    "shopName": "커피에반하다",
    "branchName": "잠실고분로2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 240-5",
    "roadAddress": "서울특별시 송파구 백제고분로19길 27",
    "lng": 127.0873932,
    "lat": 37.50732046
  },
  {
    "shopName": "퓨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 609-1",
    "roadAddress": "서울특별시 강남구 논현로105길 13",
    "lng": 127.0330994,
    "lat": 37.50575318
  },
  {
    "shopName": "카페",
    "branchName": "한옥랑솜익선동",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 익선동 166-40",
    "roadAddress": "서울특별시 종로구 수표로28길 21-6",
    "lng": 126.9898096,
    "lat": 37.57320365
  },
  {
    "shopName": "CafeTILING",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 967-7",
    "roadAddress": "서울특별시 금천구 시흥대로150길 11-7",
    "lng": 126.8993712,
    "lat": 37.47607372
  },
  {
    "shopName": "커피에반하다",
    "branchName": "압구정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 573",
    "roadAddress": "서울특별시 강남구 압구정로 142",
    "lng": 127.0242793,
    "lat": 37.52471088
  },
  {
    "shopName": "카페",
    "branchName": "천국신림점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 103-267",
    "roadAddress": "서울특별시 관악구 서림3길 9",
    "lng": 126.9392822,
    "lat": 37.47358243
  },
  {
    "shopName": "로칼커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 갈월동 66",
    "roadAddress": "서울특별시 용산구 한강대로 304",
    "lng": 126.9723048,
    "lat": 37.54541759
  },
  {
    "shopName": "커피니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 157-5",
    "roadAddress": "서울특별시 노원구 한글비석로 365",
    "lng": 127.074114,
    "lat": 37.65819633
  },
  {
    "shopName": "할리스커피",
    "branchName": "무악재역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 23-17",
    "roadAddress": "서울특별시 서대문구 통일로 360",
    "lng": 126.9505088,
    "lat": 37.58258299
  },
  {
    "shopName": "카페",
    "branchName": "타라스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 292-8",
    "roadAddress": "서울특별시 강동구 풍성로 119-1",
    "lng": 127.1255507,
    "lat": 37.53198273
  },
  {
    "shopName": "헨리카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 923-6",
    "roadAddress": "서울특별시 양천구 목동서로 225",
    "lng": 126.8707346,
    "lat": 37.52706381
  },
  {
    "shopName": "토다서초",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1589-1",
    "roadAddress": "서울특별시 서초구 반포대로14길 26",
    "lng": 127.0125004,
    "lat": 37.48534509
  },
  {
    "shopName": "전통차,자연담은",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 우면동 70",
    "roadAddress": "서울특별시 서초구 바우뫼로 53",
    "lng": 127.0275369,
    "lat": 37.4724315
  },
  {
    "shopName": "제이스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 248-6",
    "roadAddress": "서울특별시 동작구 사당로8길 9",
    "lng": 126.9695978,
    "lat": 37.48470839
  },
  {
    "shopName": "커피업",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 서계동 220-4",
    "roadAddress": "서울특별시 용산구 청파로 389",
    "lng": 126.9688312,
    "lat": 37.55441576
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "수유점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 173-6",
    "roadAddress": "서울특별시 강북구 도봉로 379",
    "lng": 127.0284254,
    "lat": 37.64103362
  },
  {
    "shopName": "쥬스식스",
    "branchName": "수유역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 446-47",
    "roadAddress": "서울특별시 강북구 오패산로 415",
    "lng": 127.025955,
    "lat": 37.63758031
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1639-2",
    "roadAddress": "서울특별시 관악구 남부순환로 1590",
    "lng": 126.9273463,
    "lat": 37.48367456
  },
  {
    "shopName": "언택트카페무",
    "branchName": "방배점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 440-33",
    "roadAddress": "서울특별시 서초구 동작대로 54-1",
    "lng": 126.9822384,
    "lat": 37.481439
  },
  {
    "shopName": "쥬스팩토리개봉역점",
    "branchName": "개봉역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 개봉동 202-19",
    "roadAddress": "서울특별시 구로구 남부순환로97길 20-10",
    "lng": 126.8585578,
    "lat": 37.49386955
  },
  {
    "shopName": "에스엠티서울",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 125-24",
    "roadAddress": "서울특별시 강남구 압구정로79길 58",
    "lng": 127.0519998,
    "lat": 37.52537816
  },
  {
    "shopName": "트롤비즈코리아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 668-51",
    "roadAddress": "서울특별시 성동구 서울숲4길 24",
    "lng": 127.0434755,
    "lat": 37.54705178
  },
  {
    "shopName": "비넨폴크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 111-26",
    "roadAddress": "서울특별시 강남구 선릉로 711",
    "lng": 127.0405722,
    "lat": 37.51839283
  },
  {
    "shopName": "브리지데이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북가좌동 377-34",
    "roadAddress": "서울특별시 서대문구 응암로 41",
    "lng": 126.9088645,
    "lat": 37.57729474
  },
  {
    "shopName": "MEGACOFFEE메가커피",
    "branchName": "동소문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동4가 42",
    "roadAddress": "서울특별시 성북구 아리랑로 14",
    "lng": 127.0163777,
    "lat": 37.59396275
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "영등포구청한솔빌딩점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 92-15",
    "roadAddress": "서울특별시 영등포구 국회대로38길 6",
    "lng": 126.8989697,
    "lat": 37.5265285
  },
  {
    "shopName": "이디아",
    "branchName": "강서NC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 674-2",
    "roadAddress": "서울특별시 강서구 강서로54길 11",
    "lng": 126.8393361,
    "lat": 37.55940386
  },
  {
    "shopName": "카페",
    "branchName": "오스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 돈암동 524",
    "roadAddress": "서울특별시 성북구 아리랑로 89",
    "lng": 127.0136042,
    "lat": 37.60076047
  },
  {
    "shopName": "커피소리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 126-6",
    "roadAddress": "서울특별시 강북구 솔매로50길 68",
    "lng": 127.0279169,
    "lat": 37.62353133
  },
  {
    "shopName": "마크레인커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 657-24",
    "roadAddress": "서울특별시 강남구 선릉로157길 23-5",
    "lng": 127.0378518,
    "lat": 37.52585845
  },
  {
    "shopName": "톨리커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 389-371",
    "roadAddress": "서울특별시 노원구 상계로9나길 9",
    "lng": 127.0680483,
    "lat": 37.6601849
  },
  {
    "shopName": "더쌍화커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 12-3",
    "roadAddress": "서울특별시 도봉구 노해로69길 21",
    "lng": 127.0505465,
    "lat": 37.65325154
  },
  {
    "shopName": "노르웨이숲",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 667-9",
    "roadAddress": "서울특별시 강서구 강서로54길 109",
    "lng": 126.8447234,
    "lat": 37.55869082
  },
  {
    "shopName": "지구마을",
    "branchName": "충무로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동2가 19-5",
    "roadAddress": "서울특별시 중구 퇴계로 212-13",
    "lng": 126.9956715,
    "lat": 37.56072016
  },
  {
    "shopName": "카페",
    "branchName": "브레맨",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 청량리동 18-18",
    "roadAddress": "서울특별시 동대문구 왕산로 293",
    "lng": 127.0520034,
    "lat": 37.58673957
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "마포공덕점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 공덕동 475",
    "roadAddress": "서울특별시 마포구 마포대로 156",
    "lng": 126.9542892,
    "lat": 37.54784541
  },
  {
    "shopName": "카페",
    "branchName": "태흥빙실",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서대문구 창천동 2-33",
    "roadAddress": "서울특별시 서대문구 명물길 41",
    "lng": 126.9385754,
    "lat": 37.55865284
  },
  {
    "shopName": "카페더라온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 연지동 136-56",
    "roadAddress": "서울특별시 종로구 김상옥로 30",
    "lng": 127.0006156,
    "lat": 37.57274599
  },
  {
    "shopName": "마당공간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 익선동 166-23",
    "roadAddress": "서울특별시 종로구 수표로28길 33-12",
    "lng": 126.9901884,
    "lat": 37.57365741
  },
  {
    "shopName": "스터디카페U",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 남현동 1060-17",
    "roadAddress": "서울특별시 관악구 남부순환로 2082-37",
    "lng": 126.9801506,
    "lat": 37.47615884
  },
  {
    "shopName": "케틀커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 개봉동 407-12",
    "roadAddress": "서울특별시 구로구 개봉로20길 54",
    "lng": 126.8573432,
    "lat": 37.49342531
  },
  {
    "shopName": "죠이보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 삼전동 101-10",
    "roadAddress": "서울특별시 송파구 백제고분로 243",
    "lng": 127.0937337,
    "lat": 37.5030442
  },
  {
    "shopName": "일승서비스보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1036-6",
    "roadAddress": "서울특별시 영등포구 디지털로53길 19-2",
    "lng": 126.8999367,
    "lat": 37.49225279
  },
  {
    "shopName": "서울로7017수국전망대",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로5가 67-4",
    "roadAddress": "서울특별시 중구 퇴계로 33",
    "lng": 126.9765864,
    "lat": 37.55753777
  },
  {
    "shopName": "카페데미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 111-15",
    "roadAddress": "서울특별시 송파구 중대로10길 25",
    "lng": 127.1230543,
    "lat": 37.49199322
  },
  {
    "shopName": "굿모닝프룻",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 24-3",
    "roadAddress": "서울특별시 관악구 관악로28길 38",
    "lng": 126.9581046,
    "lat": 37.48507614
  },
  {
    "shopName": "갤러리카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동4가 443",
    "roadAddress": "서울특별시 영등포구 문래로 180",
    "lng": 126.9019689,
    "lat": 37.51796048
  },
  {
    "shopName": "세루리안인사",
    "branchName": "인사",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 83-2",
    "roadAddress": "서울특별시 종로구 인사동12길 17",
    "lng": 126.9849436,
    "lat": 37.57473873
  },
  {
    "shopName": "이디야커피",
    "branchName": "성산중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 228-1",
    "roadAddress": "서울특별시 마포구 성미산로 78",
    "lng": 126.9166392,
    "lat": 37.56030072
  },
  {
    "shopName": "폴제이코퍼레이션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 150-6",
    "roadAddress": "서울특별시 마포구 양화로23길 48",
    "lng": 126.9244943,
    "lat": 37.56030045
  },
  {
    "shopName": "아더카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 364-6",
    "roadAddress": "서울특별시 마포구 와우산로19길 16",
    "lng": 126.9223357,
    "lat": 37.55143257
  },
  {
    "shopName": "카페",
    "branchName": "도림동",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 도림동 186-5",
    "roadAddress": "서울특별시 영등포구 도영로 48",
    "lng": 126.8980725,
    "lat": 37.50984184
  },
  {
    "shopName": "프로맘킨더",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-696",
    "roadAddress": "서울특별시 성동구 서울숲2길 32-14",
    "lng": 127.0428934,
    "lat": 37.54566846
  },
  {
    "shopName": "인투고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동2가 38-9",
    "roadAddress": "서울특별시 용산구 신흥로 45",
    "lng": 126.9873046,
    "lat": 37.54249265
  },
  {
    "shopName": "어웨이크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 23-66",
    "roadAddress": "서울특별시 강북구 노해로11길 15",
    "lng": 127.0217569,
    "lat": 37.63888811
  },
  {
    "shopName": "행복한거북이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동2가 128-1",
    "roadAddress": "서울특별시 중구 퇴계로36가길 97",
    "lng": 126.9953951,
    "lat": 37.55601436
  },
  {
    "shopName": "만랩커피마곡역점",
    "branchName": "마곡역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 798-3",
    "roadAddress": "서울특별시 강서구 공항대로 168",
    "lng": 126.8261185,
    "lat": 37.55926417
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "불광제일점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 14-20",
    "roadAddress": "서울특별시 은평구 불광로 28",
    "lng": 126.9291635,
    "lat": 37.61046747
  },
  {
    "shopName": "로켓샌드위치커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 125-9",
    "roadAddress": "서울특별시 동작구 상도로 406-1",
    "lng": 126.9561289,
    "lat": 37.49297894
  },
  {
    "shopName": "Takeashower",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 181-1",
    "roadAddress": "서울특별시 송파구 송파대로47길 1",
    "lng": 127.1043347,
    "lat": 37.50748618
  },
  {
    "shopName": "공간크크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 214-12",
    "roadAddress": "서울특별시 성북구 돌곶이로37길 16",
    "lng": 127.0475319,
    "lat": 37.61686142
  },
  {
    "shopName": "플레이스엘엘송파파크하비오점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 618",
    "roadAddress": "서울특별시 송파구 송파대로 111",
    "lng": 127.1248723,
    "lat": 37.47961708
  },
  {
    "shopName": "커핀그루나루신도림역점",
    "branchName": "신도림역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 신도림동 337",
    "roadAddress": "서울특별시 구로구 경인로 661",
    "lng": 126.8869658,
    "lat": 37.50903488
  },
  {
    "shopName": "브로일링커피",
    "branchName": "강동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 560-9",
    "roadAddress": "서울특별시 강동구 성내로10길 9-6",
    "lng": 127.124938,
    "lat": 37.52825683
  },
  {
    "shopName": "트리스트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 664-17",
    "roadAddress": "서울특별시 강남구 압구정로56길 26",
    "lng": 127.0394995,
    "lat": 37.52617821
  },
  {
    "shopName": "나비루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 221-15",
    "roadAddress": "서울특별시 송파구 올림픽로10길 40",
    "lng": 127.0815577,
    "lat": 37.50817629
  },
  {
    "shopName": "셀파크뷰티리조트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 547-9",
    "roadAddress": "서울특별시 강남구 압구정로14길 22",
    "lng": 127.0231273,
    "lat": 37.52282717
  },
  {
    "shopName": "빽다방",
    "branchName": "굽은다리역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 346-1",
    "roadAddress": "서울특별시 강동구 양재대로 1576",
    "lng": 127.1434352,
    "lat": 37.54615227
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "압구정역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 582-3",
    "roadAddress": "서울특별시 강남구 압구정로28길 25",
    "lng": 127.027819,
    "lat": 37.52481216
  },
  {
    "shopName": "로이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 163-37",
    "roadAddress": "서울특별시 강서구 강서로18길 112",
    "lng": 126.851719,
    "lat": 37.53502582
  },
  {
    "shopName": "늘봄북스양재",
    "branchName": "도서관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 102-5",
    "roadAddress": "서울특별시 서초구 양재천로 33",
    "lng": 127.0335581,
    "lat": 37.4736703
  },
  {
    "shopName": "커피인더스트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 452-9",
    "roadAddress": "서울특별시 서초구 방배천로4길 3",
    "lng": 126.9830618,
    "lat": 37.47824735
  },
  {
    "shopName": "동네커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 46-8",
    "roadAddress": "서울특별시 송파구 백제고분로22길 11",
    "lng": 127.089156,
    "lat": 37.50280175
  },
  {
    "shopName": "그레이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 내수동 72",
    "roadAddress": "서울특별시 종로구 사직로8길 34",
    "lng": 126.9717751,
    "lat": 37.57326419
  },
  {
    "shopName": "슈가플래닛",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 574-28",
    "roadAddress": "서울특별시 강서구 양천로24가길 28-2",
    "lng": 126.8140788,
    "lat": 37.57264125
  },
  {
    "shopName": "인컴솔루션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 631-1",
    "roadAddress": "서울특별시 은평구 불광로 90",
    "lng": 126.9329828,
    "lat": 37.61506129
  },
  {
    "shopName": "우궁",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 인사동 10",
    "roadAddress": "서울특별시 종로구 인사동4길 9",
    "lng": 126.9866396,
    "lat": 37.57322153
  },
  {
    "shopName": "차이브커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 71-13",
    "roadAddress": "서울특별시 광진구 천호대로134길 2",
    "lng": 127.0906746,
    "lat": 37.54915472
  },
  {
    "shopName": "언더프레셔",
    "branchName": "도산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 645-28",
    "roadAddress": "서울특별시 강남구 압구정로42길 49",
    "lng": 127.0345173,
    "lat": 37.525633
  },
  {
    "shopName": "딜리스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 740",
    "roadAddress": "서울특별시 노원구 공릉로 157",
    "lng": 127.0790016,
    "lat": 37.62400419
  },
  {
    "shopName": "스타벅스커피마포염리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 168-9",
    "roadAddress": "서울특별시 마포구 독막로 311",
    "lng": 126.9474628,
    "lat": 37.54399137
  },
  {
    "shopName": "옴니버스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 179-3",
    "roadAddress": "서울특별시 송파구 삼학사로11길 6",
    "lng": 127.0961714,
    "lat": 37.50160316
  },
  {
    "shopName": "보문커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 보문동7가 22-14",
    "roadAddress": "서울특별시 성북구 보문로 56",
    "lng": 127.0222503,
    "lat": 37.58045087
  },
  {
    "shopName": "카페도츠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 4-1",
    "roadAddress": "서울특별시 강남구 도산대로 442",
    "lng": 127.0441068,
    "lat": 37.5233052
  },
  {
    "shopName": "카페자곡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 271-29",
    "roadAddress": "서울특별시 강남구 밤고개로14길 16",
    "lng": 127.1035693,
    "lat": 37.48162894
  },
  {
    "shopName": "라스베이글",
    "branchName": "명동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동2가 83-5",
    "roadAddress": "서울특별시 중구 명동길 14",
    "lng": 126.9828675,
    "lat": 37.56340378
  },
  {
    "shopName": "카페",
    "branchName": "팬텀보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 중화동 294-1",
    "roadAddress": "서울특별시 중랑구 동일로130길 6",
    "lng": 127.0803801,
    "lat": 37.59946156
  },
  {
    "shopName": "무인카페유유얼셀프",
    "branchName": "대림점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 785",
    "roadAddress": "서울특별시 영등포구 도신로4길 6",
    "lng": 126.8953419,
    "lat": 37.50324772
  },
  {
    "shopName": "언덕위에커피데이트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1648-1",
    "roadAddress": "서울특별시 관악구 인헌1나길 22",
    "lng": 126.9700144,
    "lat": 37.47330468
  },
  {
    "shopName": "스타가든",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 37-7",
    "roadAddress": "서울특별시 강남구 선릉로138길 42",
    "lng": 127.0439813,
    "lat": 37.51896111
  },
  {
    "shopName": "커피정류장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 100-14",
    "roadAddress": "서울특별시 관악구 복은길 46",
    "lng": 126.9384901,
    "lat": 37.47443131
  },
  {
    "shopName": "앤틱박스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 665-3",
    "roadAddress": "서울특별시 도봉구 노해로62길 55",
    "lng": 127.0381599,
    "lat": 37.64884425
  },
  {
    "shopName": "나인커피로스터스개화산점(NINECOFFEEROASTERS)",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 533-9",
    "roadAddress": "서울특별시 강서구 양천로6길 15",
    "lng": 126.807682,
    "lat": 37.57198213
  },
  {
    "shopName": "카페티모르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 376-11",
    "roadAddress": "서울특별시 마포구 잔다리로 68",
    "lng": 126.9171176,
    "lat": 37.55383565
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "신정네거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1183-5",
    "roadAddress": "서울특별시 양천구 중앙로 265",
    "lng": 126.8526859,
    "lat": 37.51991581
  },
  {
    "shopName": "일레븐시스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 74-27",
    "roadAddress": "서울특별시 용산구 이태원로20가길 4",
    "lng": 126.9923819,
    "lat": 37.53350759
  },
  {
    "shopName": "카페레브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 132-1",
    "roadAddress": "서울특별시 양천구 남부순환로59길 6",
    "lng": 126.8319992,
    "lat": 37.53201218
  },
  {
    "shopName": "커피인류",
    "branchName": "대치은마점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 316",
    "roadAddress": "서울특별시 강남구 삼성로 212",
    "lng": 127.0658971,
    "lat": 37.49961058
  },
  {
    "shopName": "카페마마스잠실점",
    "branchName": "마마스잠실점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 7-18",
    "roadAddress": "서울특별시 송파구 올림픽로 269",
    "lng": 127.1005648,
    "lat": 37.51436865
  },
  {
    "shopName": "이바머스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 468-2",
    "roadAddress": "서울특별시 마포구 백범로24길 21",
    "lng": 126.9444573,
    "lat": 37.54607298
  },
  {
    "shopName": "콘레드커피",
    "branchName": "방화점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 483-5",
    "roadAddress": "서울특별시 강서구 금낭화로 91-2",
    "lng": 126.811063,
    "lat": 37.57363808
  },
  {
    "shopName": "할리스커피",
    "branchName": "상암DDMC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1610",
    "roadAddress": "서울특별시 마포구 매봉산로 75",
    "lng": 126.8928847,
    "lat": 37.57844343
  },
  {
    "shopName": "커피쿡마곡",
    "branchName": "시티점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 758",
    "roadAddress": "서울특별시 강서구 마곡서로 170",
    "lng": 126.8255984,
    "lat": 37.5693235
  },
  {
    "shopName": "컴포즈커피선유도점",
    "branchName": "선유도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 104-1",
    "roadAddress": "서울특별시 영등포구 선유로49길 36",
    "lng": 126.8939798,
    "lat": 37.53730337
  },
  {
    "shopName": "사계차관",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 세곡동 372",
    "roadAddress": "서울특별시 강남구 헌릉로571길 46-8",
    "lng": 127.0999407,
    "lat": 37.46835572
  },
  {
    "shopName": "세라젬웰카페",
    "branchName": "신촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 72-12",
    "roadAddress": "서울특별시 서대문구 신촌로 73",
    "lng": 126.9345003,
    "lat": 37.55630046
  },
  {
    "shopName": "사이좋은카페",
    "branchName": "사이좋은",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 남가좌동 270-4",
    "roadAddress": "서울특별시 서대문구 수색로 48",
    "lng": 126.9135838,
    "lat": 37.57039128
  },
  {
    "shopName": "TIME",
    "branchName": "스터디카페",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1487-101",
    "roadAddress": "서울특별시 서초구 효령로40길 53",
    "lng": 127.0063888,
    "lat": 37.4806444
  },
  {
    "shopName": "모코커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 379-1",
    "roadAddress": "서울특별시 동작구 대방동길 57",
    "lng": 126.9252925,
    "lat": 37.50311854
  },
  {
    "shopName": "카페케일럽(CAFECALEB)",
    "branchName": "초코빈",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 100-3",
    "roadAddress": "서울특별시 은평구 통일로 1010",
    "lng": 126.9185561,
    "lat": 37.63278834
  },
  {
    "shopName": "루고",
    "branchName": "NC신구로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 573",
    "roadAddress": "서울특별시 구로구 구로중앙로 146-1",
    "lng": 126.8824086,
    "lat": 37.50137804
  },
  {
    "shopName": "착한커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 노고산동 56-6",
    "roadAddress": "서울특별시 마포구 신촌로16길 30",
    "lng": 126.9342444,
    "lat": 37.55440597
  },
  {
    "shopName": "YOUANDME",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 197-19",
    "roadAddress": "서울특별시 중구 퇴계로73길 54-13",
    "lng": 127.0143733,
    "lat": 37.56734727
  },
  {
    "shopName": "이디야커피",
    "branchName": "충정로역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 중림동 200",
    "roadAddress": "서울특별시 중구 중림로 10",
    "lng": 126.9645165,
    "lat": 37.55869399
  },
  {
    "shopName": "생활커피위례",
    "branchName": "광장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 장지동 897",
    "roadAddress": "서울특별시 송파구 위례광장로 120",
    "lng": 127.1416026,
    "lat": 37.47497318
  },
  {
    "shopName": "타임투플레이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 구기동 135",
    "roadAddress": "서울특별시 종로구 비봉2길 6",
    "lng": 126.9567662,
    "lat": 37.61041738
  },
  {
    "shopName": "펜타리움",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 청담동 68-7",
    "roadAddress": "서울특별시 강남구 영동대로 725",
    "lng": 127.0551364,
    "lat": 37.52246587
  },
  {
    "shopName": "파모소카페",
    "branchName": "파모소",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 91-9",
    "roadAddress": "서울특별시 강남구 도산대로 427",
    "lng": 127.0425375,
    "lat": 37.52394124
  },
  {
    "shopName": "스타벅스화곡DT점",
    "branchName": "화곡DT점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 772-67",
    "roadAddress": "서울특별시 강서구 등촌로 57",
    "lng": 126.8631123,
    "lat": 37.53506398
  },
  {
    "shopName": "카페샌드파크",
    "branchName": "샌드파크",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 176-13",
    "roadAddress": "서울특별시 마포구 신촌로2안길 2",
    "lng": 126.9273179,
    "lat": 37.55756896
  },
  {
    "shopName": "카페",
    "branchName": "프렌즈보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 도림동 246-20",
    "roadAddress": "서울특별시 영등포구 도림로 331",
    "lng": 126.9008519,
    "lat": 37.50696637
  },
  {
    "shopName": "소현초콜릿공방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 792-48",
    "roadAddress": "서울특별시 강남구 논현로67길 32",
    "lng": 127.0372699,
    "lat": 37.49365904
  },
  {
    "shopName": "블랙티엔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 1353",
    "roadAddress": "서울특별시 강북구 솔샘로 174",
    "lng": 127.0105836,
    "lat": 37.61762964
  },
  {
    "shopName": "스타벅스문정하비오점",
    "branchName": "문정하비오점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 618",
    "roadAddress": "서울특별시 송파구 송파대로 111",
    "lng": 127.1248723,
    "lat": 37.47961708
  },
  {
    "shopName": "카페자우",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로1가 1",
    "roadAddress": "서울특별시 종로구 종로 1",
    "lng": 126.9779085,
    "lat": 37.57094772
  },
  {
    "shopName": "행인당",
    "branchName": "신세계영등포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동4가 434-5",
    "roadAddress": "서울특별시 영등포구 영중로 9",
    "lng": 126.9055549,
    "lat": 37.51718283
  },
  {
    "shopName": "카페",
    "branchName": "아이담",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 28-28",
    "roadAddress": "서울특별시 강남구 학동로23길 29",
    "lng": 127.0275368,
    "lat": 37.51517759
  },
  {
    "shopName": "힐링타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 천호동 425-3",
    "roadAddress": "서울특별시 강동구 구천면로 192",
    "lng": 127.1258038,
    "lat": 37.54034641
  },
  {
    "shopName": "카페",
    "branchName": "큐브보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 204-8",
    "roadAddress": "서울특별시 송파구 올림픽로12길 28",
    "lng": 127.0831752,
    "lat": 37.50909892
  },
  {
    "shopName": "호아드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 사간동 7",
    "roadAddress": "서울특별시 종로구 율곡로1길 54-3",
    "lng": 126.9811503,
    "lat": 37.57812099
  },
  {
    "shopName": "카페",
    "branchName": "조운북",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로1가 13-4",
    "roadAddress": "서울특별시 용산구 한강대로 206-5",
    "lng": 126.9746291,
    "lat": 37.53683282
  },
  {
    "shopName": "써니커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 212-16",
    "roadAddress": "서울특별시 구로구 디지털로27길 24",
    "lng": 126.8929869,
    "lat": 37.48350178
  },
  {
    "shopName": "더라운드",
    "branchName": "삼성점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 삼성동 78",
    "roadAddress": "서울특별시 강남구 영동대로 648",
    "lng": 127.0576564,
    "lat": 37.51999008
  },
  {
    "shopName": "이심전심",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 104-25",
    "roadAddress": "서울특별시 은평구 응암로 298",
    "lng": 126.9208718,
    "lat": 37.59799374
  },
  {
    "shopName": "골든스튜디오",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 묘동 140",
    "roadAddress": "서울특별시 종로구 돈화문로 63",
    "lng": 126.9908621,
    "lat": 37.57406864
  },
  {
    "shopName": "동그림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 328-1",
    "roadAddress": "서울특별시 강동구 구천면로 434",
    "lng": 127.1465615,
    "lat": 37.54986923
  },
  {
    "shopName": "이엔갤러리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 평창동 495-19",
    "roadAddress": "서울특별시 종로구 평창길 224",
    "lng": 126.9707614,
    "lat": 37.61317129
  },
  {
    "shopName": "시다모커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 448-6",
    "roadAddress": "서울특별시 마포구 토정로 222",
    "lng": 126.9352796,
    "lat": 37.54448584
  },
  {
    "shopName": "카페",
    "branchName": "코그",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 201-49",
    "roadAddress": "서울특별시 마포구 동교로 183-12",
    "lng": 126.9214118,
    "lat": 37.55742505
  },
  {
    "shopName": "Maon",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 보문동6가 9",
    "roadAddress": "서울특별시 성북구 보문로21길 34",
    "lng": 127.0185728,
    "lat": 37.5828802
  },
  {
    "shopName": "송화의카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 285-4",
    "roadAddress": "서울특별시 강동구 상일로3길 8",
    "lng": 127.1726032,
    "lat": 37.54877508
  },
  {
    "shopName": "디저트킴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 397-26",
    "roadAddress": "서울특별시 동작구 상도로 17-8",
    "lng": 126.922642,
    "lat": 37.50024709
  },
  {
    "shopName": "라운지독",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 등촌동 695-1",
    "roadAddress": "서울특별시 강서구 강서로62길 98",
    "lng": 126.8449941,
    "lat": 37.5616849
  },
  {
    "shopName": "VRAVO",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 7-6",
    "roadAddress": "서울특별시 광진구 아차산로 230",
    "lng": 127.0687171,
    "lat": 37.54025239
  },
  {
    "shopName": "길모퉁이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 마장동 487-54",
    "roadAddress": "서울특별시 성동구 마장로35나길 4",
    "lng": 127.0395535,
    "lat": 37.56871716
  },
  {
    "shopName": "Hi키즈카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 338-6",
    "roadAddress": "서울특별시 강북구 삼양로 438",
    "lng": 127.0166555,
    "lat": 37.64253093
  },
  {
    "shopName": "스타벅스",
    "branchName": "국회대로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 14",
    "roadAddress": "서울특별시 영등포구 국회대로 786",
    "lng": 126.9195743,
    "lat": 37.5302599
  },
  {
    "shopName": "빽다방",
    "branchName": "구파발역미켈란점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 73",
    "roadAddress": "서울특별시 은평구 진관2로 15-8",
    "lng": 126.9195381,
    "lat": 37.63538328
  },
  {
    "shopName": "카페말로덕성",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 419",
    "roadAddress": "서울특별시 도봉구 삼양로144길 33",
    "lng": 127.0163709,
    "lat": 37.64950255
  },
  {
    "shopName": "카페토스트",
    "branchName": "토스트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 673-35",
    "roadAddress": "서울특별시 강남구 언주로93길 22",
    "lng": 127.0401513,
    "lat": 37.50355806
  },
  {
    "shopName": "아레나",
    "branchName": "롯데잠실점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 40-1",
    "roadAddress": "서울특별시 송파구 송파대로 521",
    "lng": 127.0981244,
    "lat": 37.51130447
  },
  {
    "shopName": "빌리엔젤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 908-13",
    "roadAddress": "서울특별시 서초구 효령로 127",
    "lng": 126.9980069,
    "lat": 37.48177202
  },
  {
    "shopName": "카페라끌레(CAFELA)",
    "branchName": "라끌레",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 460-1",
    "roadAddress": "서울특별시 동작구 여의대방로16길 53",
    "lng": 126.9167506,
    "lat": 37.49470584
  },
  {
    "shopName": "할리스커피",
    "branchName": "김포공항점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 1373",
    "roadAddress": "서울특별시 강서구 하늘길 111",
    "lng": 126.8033425,
    "lat": 37.55877421
  },
  {
    "shopName": "일오공",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 논현동 91-10",
    "roadAddress": "서울특별시 강남구 도산대로46길 8",
    "lng": 127.0360756,
    "lat": 37.52146485
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아대학로마로니에점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 동숭동 1-95",
    "roadAddress": "서울특별시 종로구 대학로12길 62",
    "lng": 127.0036928,
    "lat": 37.58139497
  },
  {
    "shopName": "오가다",
    "branchName": "이마트24삼청로점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 화동 61",
    "roadAddress": "서울특별시 종로구 삼청로 68",
    "lng": 126.9813185,
    "lat": 37.58156441
  },
  {
    "shopName": "팔공티",
    "branchName": "이대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 60-8",
    "roadAddress": "서울특별시 서대문구 이화여대길 48",
    "lng": 126.9458589,
    "lat": 37.55904247
  },
  {
    "shopName": "오가다",
    "branchName": "여의도IFC점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 영등포구 여의도동 23",
    "roadAddress": "서울특별시 영등포구 국제금융로 10",
    "lng": 126.9248631,
    "lat": 37.52517222
  },
  {
    "shopName": "프롬하츠커피앤베이커리성동구청점",
    "branchName": "성동구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 도선동 22-1",
    "roadAddress": "서울특별시 성동구 고산자로 253",
    "lng": 127.0355711,
    "lat": 37.56239539
  },
  {
    "shopName": "카페모자이크교회",
    "branchName": "모자이크교회",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 문정동 41-4",
    "roadAddress": "서울특별시 송파구 동남로4길 12",
    "lng": 127.124085,
    "lat": 37.48894627
  },
  {
    "shopName": "현대다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 235-4",
    "roadAddress": "서울특별시 동대문구 무학로 121",
    "lng": 127.0303587,
    "lat": 37.57505743
  },
  {
    "shopName": "터치까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 37-3",
    "roadAddress": "서울특별시 강남구 논현로131길 12",
    "lng": 127.0292205,
    "lat": 37.51444357
  },
  {
    "shopName": "일광정사",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 견지동 81",
    "roadAddress": "서울특별시 종로구 인사동11길 22",
    "lng": 126.9835177,
    "lat": 37.57386146
  },
  {
    "shopName": "티시스식음본부",
    "branchName": "신문로지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 신문로1가 226",
    "roadAddress": "서울특별시 종로구 새문안로 68",
    "lng": 126.9721193,
    "lat": 37.569636
  },
  {
    "shopName": "라부에노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동1가 3",
    "roadAddress": "서울특별시 영등포구 선유로22길 12",
    "lng": 126.8909836,
    "lat": 37.52110159
  },
  {
    "shopName": "카페",
    "branchName": "활력소",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 651-3",
    "roadAddress": "서울특별시 송파구 법원로 96",
    "lng": 127.1209539,
    "lat": 37.48402123
  },
  {
    "shopName": "마리웨일237",
    "branchName": "삼청동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 소격동 20-2",
    "roadAddress": "서울특별시 종로구 북촌로5가길 43",
    "lng": 126.9812656,
    "lat": 37.58129365
  },
  {
    "shopName": "오가다",
    "branchName": "이대역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 염리동 8-31",
    "roadAddress": "서울특별시 마포구 신촌로 190",
    "lng": 126.9466856,
    "lat": 37.55659902
  },
  {
    "shopName": "한방애차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강동구 강일동 675-3",
    "roadAddress": "서울특별시 강동구 아리수로93길 19",
    "lng": 127.1740949,
    "lat": 37.56537396
  },
  {
    "shopName": "떨기나무카페",
    "branchName": "떨기나무",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 922-53",
    "roadAddress": "서울특별시 금천구 독산로 20",
    "lng": 126.9052368,
    "lat": 37.44908766
  },
  {
    "shopName": "사라의정원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 474-68",
    "roadAddress": "서울특별시 도봉구 덕릉로60길 113",
    "lng": 127.0420819,
    "lat": 37.63552283
  },
  {
    "shopName": "오가다",
    "branchName": "가든파이브점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 송파구 문정동 634",
    "roadAddress": "서울특별시 송파구 충민로 66",
    "lng": 127.124941,
    "lat": 37.47760822
  },
  {
    "shopName": "디노월드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동1가 8",
    "roadAddress": "서울특별시 용산구 이태원로 29",
    "lng": 126.9784469,
    "lat": 37.53732544
  },
  {
    "shopName": "카페수에르떼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 266-183",
    "roadAddress": "서울특별시 서대문구 세검정로3길 72-10",
    "lng": 126.9474324,
    "lat": 37.59361131
  },
  {
    "shopName": "오가다",
    "branchName": "양재스포타임점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 양재동 24",
    "roadAddress": "서울특별시 서초구 강남대로 213",
    "lng": 127.0349336,
    "lat": 37.48275521
  },
  {
    "shopName": "작업실",
    "branchName": "나무아래커피",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 9-3",
    "roadAddress": "서울특별시 마포구 숭문16길 24",
    "lng": 126.9477956,
    "lat": 37.55573491
  },
  {
    "shopName": "홉아이카페",
    "branchName": "본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 89-1",
    "roadAddress": "서울특별시 송파구 중대로9길 39-8",
    "lng": 127.1182468,
    "lat": 37.49692229
  },
  {
    "shopName": "커피하우스",
    "branchName": "도레미",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 100-2",
    "roadAddress": "서울특별시 서대문구 증가로 48",
    "lng": 126.9293725,
    "lat": 37.57217542
  },
  {
    "shopName": "커피하우스",
    "branchName": "보헤미안",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 15-85",
    "roadAddress": "서울특별시 성북구 개운사길 22-3",
    "lng": 127.029439,
    "lat": 37.58747526
  },
  {
    "shopName": "보나비아티제",
    "branchName": "사당파스텔시티점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 444-3",
    "roadAddress": "서울특별시 서초구 방배천로 11",
    "lng": 126.9822214,
    "lat": 37.47769047
  },
  {
    "shopName": "식스플로어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 994-14",
    "roadAddress": "서울특별시 강남구 영동대로 211",
    "lng": 127.0688065,
    "lat": 37.49756112
  },
  {
    "shopName": "카페마당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 350-22",
    "roadAddress": "서울특별시 노원구 공릉로27길 90",
    "lng": 127.077721,
    "lat": 37.62496731
  },
  {
    "shopName": "가을",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 22-10",
    "roadAddress": "서울특별시 서초구 강남대로97길 26",
    "lng": 127.0182907,
    "lat": 37.51464157
  },
  {
    "shopName": "투썸플레이스압구정로데오역점",
    "branchName": "압구정로데오역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 664-6",
    "roadAddress": "서울특별시 강남구 선릉로 845",
    "lng": 127.0403644,
    "lat": 37.52754583
  },
  {
    "shopName": "마을가족카페너른마루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 135-1",
    "roadAddress": "서울특별시 도봉구 마들로11길 77",
    "lng": 127.0476911,
    "lat": 37.6532105
  },
  {
    "shopName": "카페",
    "branchName": "천호보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 천호동 452-33",
    "roadAddress": "서울특별시 강동구 천호대로161길 25",
    "lng": 127.129052,
    "lat": 37.53835204
  },
  {
    "shopName": "디초콜릿커피",
    "branchName": "&동국대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동3가 26-1",
    "roadAddress": "서울특별시 중구 필동로1길 30",
    "lng": 126.9984996,
    "lat": 37.55914934
  },
  {
    "shopName": "파파스토리",
    "branchName": "노원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 371-2",
    "roadAddress": "서울특별시 노원구 노원로 456",
    "lng": 127.0667113,
    "lat": 37.6574442
  },
  {
    "shopName": "카페희다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 701-52",
    "roadAddress": "서울특별시 서초구 주흥15길 16-4",
    "lng": 127.0181052,
    "lat": 37.50894537
  },
  {
    "shopName": "정인카페로뎀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1284-12",
    "roadAddress": "서울특별시 성북구 서경로6길 70",
    "lng": 127.0194272,
    "lat": 37.60664773
  },
  {
    "shopName": "달콤커피",
    "branchName": "잠실롯데월드몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "커피에반하다",
    "branchName": "우장산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1165-1",
    "roadAddress": "서울특별시 강서구 강서로 242",
    "lng": 126.8367501,
    "lat": 37.54737666
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "예술의전당점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1459-12",
    "roadAddress": "서울특별시 서초구 반포대로 34",
    "lng": 127.0119792,
    "lat": 37.48370982
  },
  {
    "shopName": "더착한커피",
    "branchName": "독산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1019-2",
    "roadAddress": "서울특별시 금천구 독산로75길 3",
    "lng": 126.9020439,
    "lat": 37.46880909
  },
  {
    "shopName": "파스쿠찌",
    "branchName": "롯데시네마수유점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 449-1",
    "roadAddress": "서울특별시 강북구 도봉로 308",
    "lng": 127.0238161,
    "lat": 37.63565244
  },
  {
    "shopName": "더치앤드립",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 일원동 663-8",
    "roadAddress": "서울특별시 강남구 일원로5길 51",
    "lng": 127.0842976,
    "lat": 37.49221278
  },
  {
    "shopName": "프롬하츠",
    "branchName": "서울숲푸르지오점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성동구 금호동4가 235",
    "roadAddress": "서울특별시 성동구 금호로 17",
    "lng": 127.0240584,
    "lat": 37.54687487
  },
  {
    "shopName": "부미",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 와룡동 131",
    "roadAddress": "서울특별시 종로구 돈화문로 95",
    "lng": 126.99002,
    "lat": 37.57690873
  },
  {
    "shopName": "카페",
    "branchName": "하이롤러홀덤",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동대문구 장안동 463-2",
    "roadAddress": "서울특별시 동대문구 천호대로85길 14",
    "lng": 127.0664133,
    "lat": 37.56257123
  },
  {
    "shopName": "뮤직카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 470-7",
    "roadAddress": "서울특별시 중랑구 용마산로115길 38",
    "lng": 127.0982466,
    "lat": 37.59884254
  },
  {
    "shopName": "커피플랜트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "카페",
    "branchName": "롤다운",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 255-17",
    "roadAddress": "서울특별시 마포구 동교로39길 4-8",
    "lng": 126.923874,
    "lat": 37.56251135
  },
  {
    "shopName": "커피에반하다",
    "branchName": "미아역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 203-5",
    "roadAddress": "서울특별시 강북구 도봉로 229",
    "lng": 127.0247637,
    "lat": 37.62903767
  },
  {
    "shopName": "소라다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 160-7",
    "roadAddress": "서울특별시 양천구 남부순환로40길 23",
    "lng": 126.8276954,
    "lat": 37.5344654
  },
  {
    "shopName": "카페에이전시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 119",
    "roadAddress": "서울특별시 강남구 학동로 343",
    "lng": 127.0405958,
    "lat": 37.5174289
  },
  {
    "shopName": "씨27",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 17-2",
    "roadAddress": "서울특별시 중구 장충단로13길 20",
    "lng": 127.0076538,
    "lat": 37.56872364
  },
  {
    "shopName": "카르페디엠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 일원동 681-7",
    "roadAddress": "서울특별시 강남구 일원로9길 17",
    "lng": 127.0829808,
    "lat": 37.4898508
  },
  {
    "shopName": "망원동티라미수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1604-8",
    "roadAddress": "서울특별시 관악구 관악로14길 30",
    "lng": 126.9541656,
    "lat": 37.47887813
  },
  {
    "shopName": "이디야커피",
    "branchName": "강서초교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 514-2",
    "roadAddress": "서울특별시 양천구 오목로 48",
    "lng": 126.8429355,
    "lat": 37.52205526
  },
  {
    "shopName": "딜리커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 567-16",
    "roadAddress": "서울특별시 동대문구 서울시립대로 88",
    "lng": 127.0498764,
    "lat": 37.57858604
  },
  {
    "shopName": "커피체리까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 236-28",
    "roadAddress": "서울특별시 은평구 백련산로 87",
    "lng": 126.9229079,
    "lat": 37.5934351
  },
  {
    "shopName": "애플짐주스바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 76-5",
    "roadAddress": "서울특별시 서초구 반포대로 304",
    "lng": 127.0009841,
    "lat": 37.50612568
  },
  {
    "shopName": "카페이클립스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 24-11",
    "roadAddress": "서울특별시 송파구 송파대로49길 52",
    "lng": 127.0989676,
    "lat": 37.50608476
  },
  {
    "shopName": "블루샥",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 678-29",
    "roadAddress": "서울특별시 강남구 테헤란로33길 5",
    "lng": 127.0393661,
    "lat": 37.50216405
  },
  {
    "shopName": "쓰리팝피씨카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 120-18",
    "roadAddress": "서울특별시 강남구 삼성로 549",
    "lng": 127.0542568,
    "lat": 37.51059194
  },
  {
    "shopName": "커피가좋아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 저동2가 16-1",
    "roadAddress": "서울특별시 중구 수표로 42",
    "lng": 126.9900433,
    "lat": 37.5651233
  },
  {
    "shopName": "왓더독",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 마곡동 776-2",
    "roadAddress": "서울특별시 강서구 양천로 344",
    "lng": 126.8403421,
    "lat": 37.56825286
  },
  {
    "shopName": "화이트브릿지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 769-9",
    "roadAddress": "서울특별시 강남구 논현로72길 7",
    "lng": 127.0400835,
    "lat": 37.49560119
  },
  {
    "shopName": "커핀그루나루",
    "branchName": "상암GS점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1739",
    "roadAddress": "서울특별시 마포구 월드컵북로 496",
    "lng": 126.8801086,
    "lat": 37.5848644
  },
  {
    "shopName": "카페임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 238-101",
    "roadAddress": "서울특별시 성북구 장월로 90",
    "lng": 127.048997,
    "lat": 37.6138908
  },
  {
    "shopName": "북카페레벤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 123",
    "roadAddress": "서울특별시 강남구 학동로 116",
    "lng": 127.0236472,
    "lat": 37.51157733
  },
  {
    "shopName": "프리젠트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 485",
    "roadAddress": "서울특별시 강동구 상일로12길 54",
    "lng": 127.1742447,
    "lat": 37.55487772
  },
  {
    "shopName": "두블르쥬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 745-13",
    "roadAddress": "서울특별시 용산구 이태원로45길 16",
    "lng": 126.9986793,
    "lat": 37.53640847
  },
  {
    "shopName": "카페",
    "branchName": "바깔루아",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강서구 마곡동 796-5",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 63",
    "lng": 126.8343737,
    "lat": 37.56045423
  },
  {
    "shopName": "킹콩쥬스앤커피",
    "branchName": "동대문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 17-415",
    "roadAddress": "서울특별시 중구 장충단로13길 34",
    "lng": 127.006897,
    "lat": 37.56860014
  },
  {
    "shopName": "히어로",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 서교동 364-22",
    "roadAddress": "서울특별시 마포구 와우산로21길 31-10",
    "lng": 126.9218283,
    "lat": 37.55208569
  },
  {
    "shopName": "엘빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 736-40",
    "roadAddress": "서울특별시 강남구 테헤란로22길 9",
    "lng": 127.0352517,
    "lat": 37.49934626
  },
  {
    "shopName": "아티제강남역점",
    "branchName": "강남역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 825-9",
    "roadAddress": "서울특별시 강남구 강남대로 378",
    "lng": 127.0286141,
    "lat": 37.49664276
  },
  {
    "shopName": "아티제",
    "branchName": "HDC신라면세점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-999",
    "roadAddress": "서울특별시 용산구 한강대로21나길 7",
    "lng": 126.9632226,
    "lat": 37.52790298
  },
  {
    "shopName": "앤드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 742-27",
    "roadAddress": "서울특별시 강남구 역삼로9길 24",
    "lng": 127.0339087,
    "lat": 37.49561392
  },
  {
    "shopName": "더치즈케익",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이촌동 300-301",
    "roadAddress": "서울특별시 용산구 이촌로 260",
    "lng": 126.9761352,
    "lat": 37.51853661
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "당산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동5가 33-1",
    "roadAddress": "서울특별시 영등포구 양평로 67",
    "lng": 126.8992988,
    "lat": 37.53492927
  },
  {
    "shopName": "자작나무이야기",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 소격동 157-4",
    "roadAddress": "서울특별시 종로구 율곡로1길 74-15",
    "lng": 126.9817995,
    "lat": 37.57866722
  },
  {
    "shopName": "더커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 852",
    "roadAddress": "서울특별시 중구 청구로 64",
    "lng": 127.0154328,
    "lat": 37.55994953
  },
  {
    "shopName": "마이빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 232",
    "roadAddress": "서울특별시 서초구 강남대로 27",
    "lng": 127.0391217,
    "lat": 37.46827328
  },
  {
    "shopName": "수제상점행복담아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 731-66",
    "roadAddress": "서울특별시 도봉구 도봉로134길 28",
    "lng": 127.0417808,
    "lat": 37.65719927
  },
  {
    "shopName": "샤론",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 99-5",
    "roadAddress": "서울특별시 영등포구 영등포로 373",
    "lng": 126.9197383,
    "lat": 37.51417777
  },
  {
    "shopName": "정우커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 13-25",
    "roadAddress": "서울특별시 영등포구 은행로 29",
    "lng": 126.9218768,
    "lat": 37.52907355
  },
  {
    "shopName": "오가다",
    "branchName": "장안점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동대문구 장안동 295-5",
    "roadAddress": "서울특별시 동대문구 답십리로 269",
    "lng": 127.0704079,
    "lat": 37.57266745
  },
  {
    "shopName": "에클레시아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 233-6",
    "roadAddress": "서울특별시 강남구 봉은사로33길 11",
    "lng": 127.0354242,
    "lat": 37.50879072
  },
  {
    "shopName": "빈스빈스",
    "branchName": "HSBC본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 봉래동1가 25",
    "roadAddress": "서울특별시 중구 칠패로 37",
    "lng": 126.9730089,
    "lat": 37.56008369
  },
  {
    "shopName": "세운나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 방산동 19-1",
    "roadAddress": "서울특별시 중구 청계천로 246",
    "lng": 127.0047021,
    "lat": 37.56935655
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "용산아이파크몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-999",
    "roadAddress": "서울특별시 용산구 한강대로21나길 7",
    "lng": 126.9632226,
    "lat": 37.52790298
  },
  {
    "shopName": "희망카페",
    "branchName": "1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 322-11",
    "roadAddress": "서울특별시 양천구 목동동로 81",
    "lng": 126.8638432,
    "lat": 37.51596899
  },
  {
    "shopName": "스마일커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 62-9",
    "roadAddress": "서울특별시 강남구 도산대로92길 32",
    "lng": 127.0490944,
    "lat": 37.52253451
  },
  {
    "shopName": "카페밀크콩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1300",
    "roadAddress": "서울특별시 노원구 노원로30길 74",
    "lng": 127.0711143,
    "lat": 37.65608235
  },
  {
    "shopName": "티몬스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 706",
    "roadAddress": "서울특별시 성동구 상원길 63",
    "lng": 127.0470916,
    "lat": 37.55012657
  },
  {
    "shopName": "커피Ghouse",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 신사동 40-23",
    "roadAddress": "서울특별시 은평구 은평터널로 194",
    "lng": 126.9090038,
    "lat": 37.5956771
  },
  {
    "shopName": "난플라워카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 112-1",
    "roadAddress": "서울특별시 강남구 봉은사로 404",
    "lng": 127.0443314,
    "lat": 37.51013361
  },
  {
    "shopName": "담소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 14-21",
    "roadAddress": "서울특별시 영등포구 국회대로 780",
    "lng": 126.9192525,
    "lat": 37.52982446
  },
  {
    "shopName": "BOSSCOFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 888-19",
    "roadAddress": "서울특별시 관악구 양녕로2가길 29",
    "lng": 126.9472431,
    "lat": 37.48473657
  },
  {
    "shopName": "놀숲외대후문점",
    "branchName": "외대후문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 264-409",
    "roadAddress": "서울특별시 동대문구 천장산로7길 4",
    "lng": 127.0575253,
    "lat": 37.59869558
  },
  {
    "shopName": "제이니씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 능동 232-1",
    "roadAddress": "서울특별시 광진구 능동로32길 50",
    "lng": 127.081173,
    "lat": 37.55429825
  },
  {
    "shopName": "이너모스트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 494-4",
    "roadAddress": "서울특별시 노원구 동일로183길 12-14",
    "lng": 127.0729207,
    "lat": 37.62381241
  },
  {
    "shopName": "나라씨카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 133-9",
    "roadAddress": "서울특별시 양천구 곰달래로5길 29",
    "lng": 126.8332198,
    "lat": 37.53209633
  },
  {
    "shopName": "모눈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 253-38",
    "roadAddress": "서울특별시 구로구 고척로33길 25",
    "lng": 126.848568,
    "lat": 37.50372911
  },
  {
    "shopName": "쥬스식스",
    "branchName": "성대후문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 명륜3가 1-9",
    "roadAddress": "서울특별시 종로구 명륜길 33",
    "lng": 126.9950923,
    "lat": 37.58866554
  },
  {
    "shopName": "오가다",
    "branchName": "종로2가인사동점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 인사동 137-2",
    "roadAddress": "서울특별시 종로구 인사동길 9",
    "lng": 126.9868191,
    "lat": 37.57167328
  },
  {
    "shopName": "카페",
    "branchName": "모퉁이",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 685-448",
    "roadAddress": "서울특별시 구로구 구일로4길 30",
    "lng": 126.8764325,
    "lat": 37.49186939
  },
  {
    "shopName": "위치커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 오류동 68-6",
    "roadAddress": "서울특별시 구로구 서해안로 2317",
    "lng": 126.8420494,
    "lat": 37.49300607
  },
  {
    "shopName": "브로일링커피컴퍼니",
    "branchName": "신용산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로2가 143-1",
    "roadAddress": "서울특별시 용산구 한강대로40길 14",
    "lng": 126.9699576,
    "lat": 37.53013344
  },
  {
    "shopName": "무지개노래방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 216-32",
    "roadAddress": "서울특별시 동대문구 한천로10길 32",
    "lng": 127.0629946,
    "lat": 37.56621141
  },
  {
    "shopName": "에이치에스알카페",
    "branchName": "에이치에스알",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 141-31",
    "roadAddress": "서울특별시 강남구 테헤란로 407",
    "lng": 127.0500924,
    "lat": 37.50538647
  },
  {
    "shopName": "컴퍼니맨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 819",
    "roadAddress": "서울특별시 강남구 강남대로94길 10",
    "lng": 127.0281853,
    "lat": 37.49918922
  },
  {
    "shopName": "카페24창업센터",
    "branchName": "성신여대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동2가 120",
    "roadAddress": "서울특별시 성북구 보문로30길 71",
    "lng": 127.0195469,
    "lat": 37.59061923
  },
  {
    "shopName": "모퉁이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 248-23",
    "roadAddress": "서울특별시 노원구 공릉로38길 58",
    "lng": 127.0824984,
    "lat": 37.62246362
  },
  {
    "shopName": "오설록티하우스",
    "branchName": "강남역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 서초동 1328",
    "roadAddress": "서울특별시 서초구 강남대로 373",
    "lng": 127.0279895,
    "lat": 37.49597084
  },
  {
    "shopName": "하워드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로2가 63-3",
    "roadAddress": "서울특별시 중구 명동8가길 26",
    "lng": 126.9864349,
    "lat": 37.56159633
  },
  {
    "shopName": "스타벅스",
    "branchName": "천호이마트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 455-4",
    "roadAddress": "서울특별시 강동구 천호대로 1015-14",
    "lng": 127.1251976,
    "lat": 37.5389633
  },
  {
    "shopName": "헐리우스연세대점",
    "branchName": "연세대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대신동 111-14",
    "roadAddress": "서울특별시 서대문구 성산로 551",
    "lng": 126.9456571,
    "lat": 37.56532993
  },
  {
    "shopName": "탬핑에스프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 213-8",
    "roadAddress": "서울특별시 중구 마장로1길 22",
    "lng": 127.0127573,
    "lat": 37.56885653
  },
  {
    "shopName": "STORY1954",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 무학동 50-1",
    "roadAddress": "서울특별시 중구 퇴계로 390",
    "lng": 127.0149602,
    "lat": 37.56490133
  },
  {
    "shopName": "카페나무",
    "branchName": "영우홍익대학교도서관",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상수동 72-1",
    "roadAddress": "서울특별시 마포구 와우산로 94",
    "lng": 126.9249219,
    "lat": 37.55260046
  },
  {
    "shopName": "모노치츠",
    "branchName": "보라매공원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 708",
    "roadAddress": "서울특별시 동작구 보라매로3길 29",
    "lng": 126.9248303,
    "lat": 37.49118447
  },
  {
    "shopName": "황토커피호프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 111-119",
    "roadAddress": "서울특별시 노원구 상계로 299-1",
    "lng": 127.0784761,
    "lat": 37.67022325
  },
  {
    "shopName": "카페",
    "branchName": "55-1",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 288-87",
    "roadAddress": "서울특별시 동대문구 이문로30길 20",
    "lng": 127.0612109,
    "lat": 37.59648136
  },
  {
    "shopName": "카페다임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1628-62",
    "roadAddress": "서울특별시 서초구 서리풀3길 24",
    "lng": 127.0181213,
    "lat": 37.48785182
  },
  {
    "shopName": "쥬스식스",
    "branchName": "쌍문역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 655-1",
    "roadAddress": "서울특별시 도봉구 도봉로110나길 27",
    "lng": 127.0348348,
    "lat": 37.64746555
  },
  {
    "shopName": "카페리시오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 219-9",
    "roadAddress": "서울특별시 송파구 오금로29길 12",
    "lng": 127.1214915,
    "lat": 37.50762404
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "순화ING점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 순화동 53",
    "roadAddress": "서울특별시 중구 세종대로7길 37",
    "lng": 126.9724678,
    "lat": 37.56074575
  },
  {
    "shopName": "설빙본사",
    "branchName": "본사",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 144-25",
    "roadAddress": "서울특별시 강남구 테헤란로 443",
    "lng": 127.0555809,
    "lat": 37.50694425
  },
  {
    "shopName": "투썸플레이스역삼르네상스점",
    "branchName": "역삼르네상스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 721-39",
    "roadAddress": "서울특별시 강남구 언주로 419",
    "lng": 127.0434506,
    "lat": 37.50026894
  },
  {
    "shopName": "우주라이크커피",
    "branchName": "문정법조프라자점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 651-3",
    "roadAddress": "서울특별시 송파구 법원로 96",
    "lng": 127.1209423,
    "lat": 37.48403917
  },
  {
    "shopName": "씨엔엔카페고려대서울캠퍼스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 1-2",
    "roadAddress": "서울특별시 성북구 안암로 145",
    "lng": 127.0317018,
    "lat": 37.58848499
  },
  {
    "shopName": "쥬씨",
    "branchName": "영등포시장역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동5가 46-5",
    "roadAddress": "서울특별시 영등포구 영중로 68",
    "lng": 126.9054791,
    "lat": 37.52237213
  },
  {
    "shopName": "구엄품",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 629-6",
    "roadAddress": "서울특별시 강남구 테헤란로25길 47",
    "lng": 127.034383,
    "lat": 37.50356511
  },
  {
    "shopName": "에세스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 신원동 210-2",
    "roadAddress": "서울특별시 서초구 청룡마을4길 11-3",
    "lng": 127.0575677,
    "lat": 37.44693148
  },
  {
    "shopName": "공차",
    "branchName": "코리아현대미아점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 20-1",
    "roadAddress": "서울특별시 성북구 동소문로 315",
    "lng": 127.0287256,
    "lat": 37.60839154
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아종각역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 관철동 16-5",
    "roadAddress": "서울특별시 종로구 종로 70",
    "lng": 126.9851564,
    "lat": 37.56990197
  },
  {
    "shopName": "강동역커피베이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 447-17",
    "roadAddress": "서울특별시 강동구 천호대로 1089",
    "lng": 127.1330784,
    "lat": 37.53656154
  },
  {
    "shopName": "쥬스식스",
    "branchName": "장안동튼튼병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 294-11",
    "roadAddress": "서울특별시 동대문구 답십리로 261",
    "lng": 127.0693319,
    "lat": 37.57271304
  },
  {
    "shopName": "더블유카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 169",
    "roadAddress": "서울특별시 강남구 영동대로96길 20",
    "lng": 127.0641971,
    "lat": 37.51077023
  },
  {
    "shopName": "오가다대륭1차점",
    "branchName": "대륭1차점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 구로동 212-8",
    "roadAddress": "서울특별시 구로구 디지털로 288",
    "lng": 126.8954848,
    "lat": 37.4835612
  },
  {
    "shopName": "커피볶는집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 33-1",
    "roadAddress": "서울특별시 마포구 월드컵북로44길 33",
    "lng": 126.8954753,
    "lat": 37.57627819
  },
  {
    "shopName": "flowercafetiffany",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 89-9",
    "roadAddress": "서울특별시 서초구 양재천로 135-10",
    "lng": 127.0418187,
    "lat": 37.4792791
  },
  {
    "shopName": "찰스커피컴파니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 427-108",
    "roadAddress": "서울특별시 은평구 응암로22길 5-6",
    "lng": 126.9188669,
    "lat": 37.59410997
  },
  {
    "shopName": "더치앤빈",
    "branchName": "선유도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 94",
    "roadAddress": "서울특별시 영등포구 선유로47길 34",
    "lng": 126.8934436,
    "lat": 37.5368298
  },
  {
    "shopName": "잇츠리얼타임카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 57-1",
    "roadAddress": "서울특별시 동작구 노량진로 140",
    "lng": 126.9416805,
    "lat": 37.51274553
  },
  {
    "shopName": "만랩커피",
    "branchName": "삼성1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 162-23",
    "roadAddress": "서울특별시 강남구 영동대로106길 33",
    "lng": 127.0638381,
    "lat": 37.51415535
  },
  {
    "shopName": "도니바니애견카페",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 노원구 상계동 595",
    "roadAddress": "서울특별시 노원구 상계로 71-1",
    "lng": 127.0629701,
    "lat": 37.65663064
  },
  {
    "shopName": "카페",
    "branchName": "PAN",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 21-7",
    "roadAddress": "서울특별시 서초구 강남대로 595",
    "lng": 127.019521,
    "lat": 37.51485002
  },
  {
    "shopName": "탄탈라이즈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 72-13",
    "roadAddress": "서울특별시 용산구 이태원로20가길 7-6",
    "lng": 126.9926379,
    "lat": 37.53382514
  },
  {
    "shopName": "위치커피중랑망우점",
    "branchName": "중랑망우점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 356-35",
    "roadAddress": "서울특별시 중랑구 망우로71길 15",
    "lng": 127.1018998,
    "lat": 37.601114
  },
  {
    "shopName": "공방카페클래스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 259-5",
    "roadAddress": "서울특별시 광진구 광장로 59",
    "lng": 127.1037106,
    "lat": 37.54737119
  },
  {
    "shopName": "서울다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로1가 22-10",
    "roadAddress": "서울특별시 중구 남대문로 112",
    "lng": 126.9829974,
    "lat": 37.56717125
  },
  {
    "shopName": "에브리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 695-1",
    "roadAddress": "서울특별시 강서구 강서로62길 98",
    "lng": 126.8449941,
    "lat": 37.5616849
  },
  {
    "shopName": "카페드라무",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 784-6",
    "roadAddress": "서울특별시 강서구 강서로 443",
    "lng": 126.8399035,
    "lat": 37.56514901
  },
  {
    "shopName": "CNNCAFE",
    "branchName": "강남센터점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 820-8",
    "roadAddress": "서울특별시 강남구 강남대로 408",
    "lng": 127.0275177,
    "lat": 37.49921076
  },
  {
    "shopName": "스마트브릭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 638-6",
    "roadAddress": "서울특별시 강남구 압구정로 312",
    "lng": 127.0354951,
    "lat": 37.52876764
  },
  {
    "shopName": "착형",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 수서동 724",
    "roadAddress": "서울특별시 강남구 광평로 280",
    "lng": 127.1030943,
    "lat": 37.48731104
  },
  {
    "shopName": "공작은가비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 449-7",
    "roadAddress": "서울특별시 마포구 동교로19길 56",
    "lng": 126.9171167,
    "lat": 37.55780922
  },
  {
    "shopName": "멜트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 157-15",
    "roadAddress": "서울특별시 강남구 테헤란로81길 22",
    "lng": 127.0569073,
    "lat": 37.50849565
  },
  {
    "shopName": "온온커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 469-9",
    "roadAddress": "서울특별시 강동구 성내로18길 34",
    "lng": 127.1283075,
    "lat": 37.5255155
  },
  {
    "shopName": "카페",
    "branchName": "대박보드",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 272-32",
    "roadAddress": "서울특별시 강남구 선릉로111길 42",
    "lng": 127.0397802,
    "lat": 37.51045712
  },
  {
    "shopName": "메가커피수색자이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 수색동 75",
    "roadAddress": "서울특별시 은평구 수색로 217",
    "lng": 126.8987092,
    "lat": 37.5796152
  },
  {
    "shopName": "다올북카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 중화동 287-3",
    "roadAddress": "서울특별시 중랑구 동일로134길 17",
    "lng": 127.0806422,
    "lat": 37.60116657
  },
  {
    "shopName": "신일룡호두파이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 원지동 419-5",
    "roadAddress": "서울특별시 서초구 원터6길 4",
    "lng": 127.0557485,
    "lat": 37.44330368
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "대치삼성점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 996-1",
    "roadAddress": "서울특별시 강남구 테헤란로 620",
    "lng": 127.0655629,
    "lat": 37.50918617
  },
  {
    "shopName": "꽃담길",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 은평구 신사동 3-23",
    "roadAddress": "서울특별시 은평구 은평로 43-1",
    "lng": 126.9127978,
    "lat": 37.5987576
  },
  {
    "shopName": "바빌Babil",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 47-22",
    "roadAddress": "서울특별시 강동구 양재대로125길 47",
    "lng": 127.1396615,
    "lat": 37.54463809
  },
  {
    "shopName": "공차",
    "branchName": "서울과학기술대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 438-2",
    "roadAddress": "서울특별시 노원구 공릉로 225",
    "lng": 127.0766023,
    "lat": 37.62931058
  },
  {
    "shopName": "예당전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 삼성동 143-17",
    "roadAddress": "서울특별시 강남구 테헤란로69길 14",
    "lng": 127.0525971,
    "lat": 37.50676718
  },
  {
    "shopName": "광진카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 112",
    "roadAddress": "서울특별시 광진구 아차산로78길 90",
    "lng": 127.1106039,
    "lat": 37.55106357
  },
  {
    "shopName": "산풀잎",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 능동 257-3",
    "roadAddress": "서울특별시 광진구 천호대로124길 28",
    "lng": 127.0876159,
    "lat": 37.5521947
  },
  {
    "shopName": "아메리칸에그샌드",
    "branchName": "롯데몰김포공항점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 886",
    "roadAddress": "서울특별시 강서구 하늘길 38",
    "lng": 126.8029375,
    "lat": 37.57135746
  },
  {
    "shopName": "스튜디오잇시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 416-14",
    "roadAddress": "서울특별시 마포구 망원로4길 3",
    "lng": 126.901879,
    "lat": 37.55649713
  },
  {
    "shopName": "카페",
    "branchName": "대니보드게임",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 남현동 1056-31",
    "roadAddress": "서울특별시 관악구 남부순환로266길 6",
    "lng": 126.9761152,
    "lat": 37.47609691
  },
  {
    "shopName": "커피마마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 90-57",
    "roadAddress": "서울특별시 강북구 도봉로10라길 10",
    "lng": 127.03142,
    "lat": 37.61546882
  },
  {
    "shopName": "복서커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 606-17",
    "roadAddress": "서울특별시 광진구 뚝섬로 620",
    "lng": 127.078423,
    "lat": 37.53221906
  },
  {
    "shopName": "에스로우성수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 317-5",
    "roadAddress": "서울특별시 성동구 성수이로 96",
    "lng": 127.0570218,
    "lat": 37.5434394
  },
  {
    "shopName": "더벤티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 615-1",
    "roadAddress": "서울특별시 강남구 압구정로 216",
    "lng": 127.0310125,
    "lat": 37.52807318
  },
  {
    "shopName": "까레포머",
    "branchName": "건대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 2-9",
    "roadAddress": "서울특별시 광진구 동일로20길 116",
    "lng": 127.069734,
    "lat": 37.53946748
  },
  {
    "shopName": "설레다커피테이블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 651-48",
    "roadAddress": "서울특별시 도봉구 도봉로110길 55",
    "lng": 127.0366399,
    "lat": 37.64632698
  },
  {
    "shopName": "빽다방",
    "branchName": "강서블루나인점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 염창동 240-21",
    "roadAddress": "서울특별시 강서구 양천로 583",
    "lng": 126.8643281,
    "lat": 37.557106
  },
  {
    "shopName": "빙찌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 111-32",
    "roadAddress": "서울특별시 송파구 송파대로42길 28",
    "lng": 127.1105843,
    "lat": 37.50601962
  },
  {
    "shopName": "미성패밀리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 131-3",
    "roadAddress": "서울특별시 송파구 삼학사로 89",
    "lng": 127.0969196,
    "lat": 37.50521312
  },
  {
    "shopName": "감성커피",
    "branchName": "불광역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 14-1",
    "roadAddress": "서울특별시 은평구 통일로 731",
    "lng": 126.9294446,
    "lat": 37.61061419
  },
  {
    "shopName": "에스프레소바피코",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 663-9",
    "roadAddress": "서울특별시 강남구 언주로172길 56",
    "lng": 127.0382813,
    "lat": 37.52677201
  },
  {
    "shopName": "플라이팬커피",
    "branchName": "뚝섬점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 13-104",
    "roadAddress": "서울특별시 성동구 상원8길 1",
    "lng": 127.0482501,
    "lat": 37.54891048
  },
  {
    "shopName": "공차",
    "branchName": "신세계백화점본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로1가 52-5",
    "roadAddress": "서울특별시 중구 소공로 63",
    "lng": 126.9809659,
    "lat": 37.56090951
  },
  {
    "shopName": 515,
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 489-8",
    "roadAddress": "서울특별시 강동구 양재대로 1390",
    "lng": 127.1375905,
    "lat": 37.52990873
  },
  {
    "shopName": "신월커피",
    "branchName": "이호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 624-4",
    "roadAddress": "서울특별시 양천구 목동중앙북로4길 39",
    "lng": 126.8641453,
    "lat": 37.54677838
  },
  {
    "shopName": "TheWitch",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 190-2",
    "roadAddress": "서울특별시 중랑구 중랑천로 53",
    "lng": 127.0731368,
    "lat": 37.58997097
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "서여의도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 14-31",
    "roadAddress": "서울특별시 영등포구 국회대로70길 18",
    "lng": 126.9203296,
    "lat": 37.5288792
  },
  {
    "shopName": "작업실",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 485-22",
    "roadAddress": "서울특별시 도봉구 우이천로48길 12",
    "lng": 127.0163897,
    "lat": 37.65580992
  },
  {
    "shopName": "아메리칸트레일러",
    "branchName": "디큐브시티점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 신도림동 692",
    "roadAddress": "서울특별시 구로구 경인로 662",
    "lng": 126.8884846,
    "lat": 37.50805804
  },
  {
    "shopName": "푸드카페앤그릴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 145-118",
    "roadAddress": "서울특별시 성북구 북악산로 637",
    "lng": 127.0054739,
    "lat": 37.59643934
  },
  {
    "shopName": "빽다방",
    "branchName": "구로KT점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1668-15",
    "roadAddress": "서울특별시 관악구 남부순환로 1377",
    "lng": 126.9037329,
    "lat": 37.48010591
  },
  {
    "shopName": "아트앤씨Artnc",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 558-10",
    "roadAddress": "서울특별시 강남구 도산대로25길 17",
    "lng": 127.0269422,
    "lat": 37.52089438
  },
  {
    "shopName": "블루블루엣",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 23-5",
    "roadAddress": "서울특별시 영등포구 여의대로 56",
    "lng": 126.9228884,
    "lat": 37.52402793
  },
  {
    "shopName": "뉴욕핫도그앤커피",
    "branchName": "서울한양사이버대학교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 사근동 110",
    "roadAddress": "서울특별시 성동구 왕십리로 222",
    "lng": 127.0465947,
    "lat": 37.55449264
  },
  {
    "shopName": "라이트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 일원동 716",
    "roadAddress": "서울특별시 강남구 광평로19길 15",
    "lng": 127.0847863,
    "lat": 37.48552169
  },
  {
    "shopName": "명동사주카페샤프",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중구 충무로1가 24-19",
    "roadAddress": "서울특별시 중구 명동2길 53",
    "lng": 126.9833292,
    "lat": 37.56108307
  },
  {
    "shopName": "도이창카페은평",
    "branchName": "롯데마트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 63",
    "roadAddress": "서울특별시 은평구 통일로 1050",
    "lng": 126.9178868,
    "lat": 37.63753061
  },
  {
    "shopName": "풀림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 557-17",
    "roadAddress": "서울특별시 강남구 도산대로25길 29",
    "lng": 127.0264592,
    "lat": 37.52150311
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "월곡역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 18-14",
    "roadAddress": "서울특별시 성북구 화랑로13길 7",
    "lng": 127.0425235,
    "lat": 37.60374681
  },
  {
    "shopName": "더블루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 409-47",
    "roadAddress": "서울특별시 서대문구 거북골로 19-1",
    "lng": 126.9251477,
    "lat": 37.58021031
  },
  {
    "shopName": "해방촌이야기",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동2가 19",
    "roadAddress": "서울특별시 용산구 소월로20길 27",
    "lng": 126.9853553,
    "lat": 37.54521509
  },
  {
    "shopName": "TOBIAS커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 449-7",
    "roadAddress": "서울특별시 강동구 강동대로 235",
    "lng": 127.1323786,
    "lat": 37.52273418
  },
  {
    "shopName": "스톤웰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 345-88",
    "roadAddress": "서울특별시 금천구 가산디지털1로 94",
    "lng": 126.8851516,
    "lat": 37.47433653
  },
  {
    "shopName": "할리스커피합정역점",
    "branchName": "합정역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 374-1",
    "roadAddress": "서울특별시 마포구 양화로 36",
    "lng": 126.9133244,
    "lat": 37.54850269
  },
  {
    "shopName": "에슬로우커피",
    "branchName": "대치2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 943-26",
    "roadAddress": "서울특별시 강남구 테헤란로86길 13",
    "lng": 127.0594536,
    "lat": 37.5065877
  },
  {
    "shopName": "카페아마떼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 732",
    "roadAddress": "서울특별시 도봉구 우이천로 367",
    "lng": 127.0240528,
    "lat": 37.64787241
  },
  {
    "shopName": "카페라리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1428-15",
    "roadAddress": "서울특별시 서초구 남부순환로337길 37",
    "lng": 127.0204074,
    "lat": 37.48423954
  },
  {
    "shopName": "삼익커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남창동 5",
    "roadAddress": "서울특별시 중구 남대문시장8길 7",
    "lng": 126.9789352,
    "lat": 37.56042343
  },
  {
    "shopName": "빽다방",
    "branchName": "창동역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 13-2",
    "roadAddress": "서울특별시 도봉구 마들로11길 57",
    "lng": 127.0501353,
    "lat": 37.65350052
  },
  {
    "shopName": "스타벅스",
    "branchName": "외대정문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 329-1",
    "roadAddress": "서울특별시 동대문구 이문로 93",
    "lng": 127.0592664,
    "lat": 37.59532155
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "마곡리더스타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-5",
    "roadAddress": "서울특별시 강서구 공항대로 228",
    "lng": 126.8326591,
    "lat": 37.55862622
  },
  {
    "shopName": "빵공장띠에리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 47",
    "roadAddress": "서울특별시 송파구 잠실로 124",
    "lng": 127.0981817,
    "lat": 37.50935862
  },
  {
    "shopName": "스타벅스",
    "branchName": "보라매대교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 729-21",
    "roadAddress": "서울특별시 관악구 보라매로3길 23",
    "lng": 126.9255222,
    "lat": 37.49103758
  },
  {
    "shopName": "부에노커피로스팅",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 53-20",
    "roadAddress": "서울특별시 서대문구 이화여대2가길 18",
    "lng": 126.9462676,
    "lat": 37.55815409
  },
  {
    "shopName": "호밀밭의호두꾼합정점",
    "branchName": "합정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 394-56",
    "roadAddress": "서울특별시 마포구 양화로 54",
    "lng": 126.914687,
    "lat": 37.54974965
  },
  {
    "shopName": "카페베네",
    "branchName": "한양사이버대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 17",
    "roadAddress": "서울특별시 성동구 왕십리로 220",
    "lng": 127.0474999,
    "lat": 37.55717606
  },
  {
    "shopName": "까페덴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 565-11",
    "roadAddress": "서울특별시 마포구 연남로3길 43",
    "lng": 126.9203741,
    "lat": 37.56031691
  },
  {
    "shopName": "푸드카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 5-1",
    "roadAddress": "서울특별시 성북구 선잠로2길 29-8",
    "lng": 126.9988193,
    "lat": 37.59613979
  },
  {
    "shopName": "콜롬비아스페셜티커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 신도림동 337",
    "roadAddress": "서울특별시 구로구 경인로 661",
    "lng": 126.8869658,
    "lat": 37.50903488
  },
  {
    "shopName": "겟앤쇼카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 공덕동 467",
    "roadAddress": "서울특별시 마포구 마포대로 109",
    "lng": 126.9502698,
    "lat": 37.54475521
  },
  {
    "shopName": "스타벅스",
    "branchName": "송파방이DT점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 226-10",
    "roadAddress": "서울특별시 송파구 오금로 241",
    "lng": 127.1205658,
    "lat": 37.50650884
  },
  {
    "shopName": "스테이모어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 729-59",
    "roadAddress": "서울특별시 용산구 한남대로27가길 34",
    "lng": 127.0025363,
    "lat": 37.53821617
  },
  {
    "shopName": "타미하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 502-2",
    "roadAddress": "서울특별시 강동구 상일로6길 51",
    "lng": 127.1760656,
    "lat": 37.54985353
  },
  {
    "shopName": "카페함크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 253-216",
    "roadAddress": "서울특별시 구로구 고척로 141",
    "lng": 126.8494415,
    "lat": 37.50281856
  },
  {
    "shopName": "네스카페",
    "branchName": "도곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 544-2",
    "roadAddress": "서울특별시 강남구 도곡로 188",
    "lng": 127.0400076,
    "lat": 37.49181613
  },
  {
    "shopName": "커피코트",
    "branchName": "발산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 795-2",
    "roadAddress": "서울특별시 강서구 마곡중앙8로 90",
    "lng": 126.8375752,
    "lat": 37.56055788
  },
  {
    "shopName": "커피엔수다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동4가 32-63",
    "roadAddress": "서울특별시 영등포구 당산로38길 8",
    "lng": 126.8989812,
    "lat": 37.52882626
  },
  {
    "shopName": "착형커피역삼점",
    "branchName": "역삼점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 832-2",
    "roadAddress": "서울특별시 강남구 강남대로 330",
    "lng": 127.0306106,
    "lat": 37.49266749
  },
  {
    "shopName": "도그원카페",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 은평구 갈현동 452-1",
    "roadAddress": "서울특별시 은평구 연서로29길 25",
    "lng": 126.9175716,
    "lat": 37.61942607
  },
  {
    "shopName": "카페알레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 119",
    "roadAddress": "서울특별시 서대문구 신촌로1길 111",
    "lng": 126.9309588,
    "lat": 37.56098088
  },
  {
    "shopName": "카페7그램",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 장충동2가 187-22",
    "roadAddress": "서울특별시 중구 동호로24길 27",
    "lng": 127.0052854,
    "lat": 37.56039608
  },
  {
    "shopName": "반지캠퍼스카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 345-16",
    "roadAddress": "서울특별시 마포구 어울마당로 112-6",
    "lng": 126.9233531,
    "lat": 37.55465856
  },
  {
    "shopName": "와이샐러드카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 114-13",
    "roadAddress": "서울특별시 강남구 봉은사로 452",
    "lng": 127.0490531,
    "lat": 37.5115233
  },
  {
    "shopName": "아이엠바리스타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 792-4",
    "roadAddress": "서울특별시 서초구 동광로 41",
    "lng": 126.9872442,
    "lat": 37.49171799
  },
  {
    "shopName": "스타벅스",
    "branchName": "올림픽공원북문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 468",
    "roadAddress": "서울특별시 강동구 강동대로 171",
    "lng": 127.1259321,
    "lat": 37.52547091
  },
  {
    "shopName": "네스카페",
    "branchName": "목동반디앤루니스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 916",
    "roadAddress": "서울특별시 양천구 목동동로 257",
    "lng": 126.8746818,
    "lat": 37.52714654
  },
  {
    "shopName": "빙설헌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 61-3",
    "roadAddress": "서울특별시 영등포구 63로 40",
    "lng": 126.9391975,
    "lat": 37.51954417
  },
  {
    "shopName": "커피나무방배역점",
    "branchName": "방배역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 913-19",
    "roadAddress": "서울특별시 서초구 효령로29길 23",
    "lng": 126.9951241,
    "lat": 37.48258551
  },
  {
    "shopName": "스타벅스강남우성점",
    "branchName": "강남우성점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 832-3",
    "roadAddress": "서울특별시 강남구 강남대로 328",
    "lng": 127.0306939,
    "lat": 37.4923528
  },
  {
    "shopName": "모던팩토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 계동 131-2",
    "roadAddress": "서울특별시 종로구 계동길 82",
    "lng": 126.9868176,
    "lat": 37.58097201
  },
  {
    "shopName": "3poppc카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 62-1",
    "roadAddress": "서울특별시 은평구 연서로 73",
    "lng": 126.9150533,
    "lat": 37.60563521
  },
  {
    "shopName": "카페벗티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 366-440",
    "roadAddress": "서울특별시 중구 다산로 41",
    "lng": 127.0069968,
    "lat": 37.54828242
  },
  {
    "shopName": "커피퐁당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 367-1",
    "roadAddress": "서울특별시 강서구 가로공원로 218",
    "lng": 126.8401975,
    "lat": 37.5374181
  },
  {
    "shopName": "Teastory",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 묘동 88-1",
    "roadAddress": "서울특별시 종로구 돈화문로10길 2",
    "lng": 126.9918479,
    "lat": 37.57232003
  },
  {
    "shopName": "까루나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 361-6",
    "roadAddress": "서울특별시 서대문구 홍제내길 42",
    "lng": 126.9363872,
    "lat": 37.5843848
  },
  {
    "shopName": "빽다방",
    "branchName": "가락시장역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 80",
    "roadAddress": "서울특별시 송파구 송파대로28길 27",
    "lng": 127.1200802,
    "lat": 37.49488154
  },
  {
    "shopName": "더카페",
    "branchName": "장한평튼튼병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 294-11",
    "roadAddress": "서울특별시 동대문구 답십리로 261",
    "lng": 127.0693319,
    "lat": 37.57271304
  },
  {
    "shopName": "북카페초록",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 668-32",
    "roadAddress": "서울특별시 성동구 서울숲4길 28-3",
    "lng": 127.0439983,
    "lat": 37.54687581
  },
  {
    "shopName": "케이에스케이공인중개사사무소카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 창성동 138-2",
    "roadAddress": "서울특별시 종로구 자하문로 42",
    "lng": 126.9715727,
    "lat": 37.57974991
  },
  {
    "shopName": "포방터카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 9-123",
    "roadAddress": "서울특별시 서대문구 포방터길 43",
    "lng": 126.9488787,
    "lat": 37.59866098
  },
  {
    "shopName": "별과꽃",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 77-11",
    "roadAddress": "서울특별시 성북구 돌곶이로32길 36",
    "lng": 127.0532473,
    "lat": 37.61635778
  },
  {
    "shopName": "봄",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 도봉구 쌍문동 199-1",
    "roadAddress": "서울특별시 도봉구 해등로26길 20",
    "lng": 127.0330804,
    "lat": 37.65866903
  },
  {
    "shopName": "홍s커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동2가 30-2",
    "roadAddress": "서울특별시 영등포구 영등포로 109",
    "lng": 126.8943817,
    "lat": 37.52234085
  },
  {
    "shopName": "다같이카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 남가좌동 296-13",
    "roadAddress": "서울특별시 서대문구 수색로 43",
    "lng": 126.9133895,
    "lat": 37.56974075
  },
  {
    "shopName": "3기동단카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 654",
    "roadAddress": "서울특별시 송파구 새말로 27",
    "lng": 127.1178703,
    "lat": 37.48085354
  },
  {
    "shopName": "하이제씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 동숭동 129-164",
    "roadAddress": "서울특별시 종로구 동숭1길 12",
    "lng": 127.0050147,
    "lat": 37.57990138
  },
  {
    "shopName": "프레지에",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 218-1",
    "roadAddress": "서울특별시 광진구 아차산로 552",
    "lng": 127.1043874,
    "lat": 37.54377211
  },
  {
    "shopName": "카페포엠",
    "branchName": "본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 525-14",
    "roadAddress": "서울특별시 강남구 압구정로4길 13-11",
    "lng": 127.0209621,
    "lat": 37.52229565
  },
  {
    "shopName": "앙쥬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 226-5",
    "roadAddress": "서울특별시 송파구 오금로31길 3",
    "lng": 127.1211431,
    "lat": 37.50646809
  },
  {
    "shopName": "커피마리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 61-8",
    "roadAddress": "서울특별시 송파구 성내천로 64",
    "lng": 127.1363143,
    "lat": 37.50222786
  },
  {
    "shopName": "아시아나타운커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 오쇠동 47",
    "roadAddress": "서울특별시 강서구 오정로 443-83",
    "lng": 126.7971025,
    "lat": 37.54633065
  },
  {
    "shopName": "스타벅스",
    "branchName": "강남대로논현점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 736-2",
    "roadAddress": "서울특별시 서초구 강남대로85길 5",
    "lng": 127.0225824,
    "lat": 37.50736061
  },
  {
    "shopName": "티앤톡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 오류동 165-3",
    "roadAddress": "서울특별시 구로구 서해안로24길 21-4",
    "lng": 126.8394008,
    "lat": 37.48951107
  },
  {
    "shopName": "티앤티라이프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 515-1",
    "roadAddress": "서울특별시 서대문구 연희로 6",
    "lng": 126.927045,
    "lat": 37.5592334
  },
  {
    "shopName": "한스텝씨즈캔디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 118-3",
    "roadAddress": "서울특별시 서초구 사평대로 205",
    "lng": 127.0078261,
    "lat": 37.50448036
  },
  {
    "shopName": "더빅",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 563",
    "roadAddress": "서울특별시 도봉구 도봉로 873",
    "lng": 127.0454358,
    "lat": 37.68242172
  },
  {
    "shopName": "다솔",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 방배동 794-1",
    "roadAddress": "서울특별시 서초구 방배로37길 35",
    "lng": 126.9879045,
    "lat": 37.49306622
  },
  {
    "shopName": "고종의뜰굼터/더듀얼로스터즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 260-29",
    "roadAddress": "서울특별시 성북구 보국문로20길 18",
    "lng": 127.0095125,
    "lat": 37.61212433
  },
  {
    "shopName": "더컵스토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 계동 45",
    "roadAddress": "서울특별시 종로구 계동길 96",
    "lng": 126.9868657,
    "lat": 37.58160315
  },
  {
    "shopName": "미래안사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 345-1",
    "roadAddress": "서울특별시 마포구 어울마당로 120",
    "lng": 126.9235264,
    "lat": 37.55520076
  },
  {
    "shopName": "스타벅스",
    "branchName": "연희동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 188-2",
    "roadAddress": "서울특별시 서대문구 연희로 97",
    "lng": 126.9305022,
    "lat": 37.56679745
  },
  {
    "shopName": "세운나다방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 을지로4가 9-6",
    "roadAddress": "서울특별시 중구 을지로 157",
    "lng": 126.9954105,
    "lat": 37.56751181
  },
  {
    "shopName": "블랙빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1082-25",
    "roadAddress": "서울특별시 강서구 화곡로20길 19",
    "lng": 126.8366321,
    "lat": 37.53968067
  },
  {
    "shopName": "빽다방",
    "branchName": "구파발역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 70",
    "roadAddress": "서울특별시 은평구 진관2로 15-46",
    "lng": 126.9190721,
    "lat": 37.6386137
  },
  {
    "shopName": "카페바리스타아카데미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 827-53",
    "roadAddress": "서울특별시 강남구 테헤란로6길 29",
    "lng": 127.0312709,
    "lat": 37.49670963
  },
  {
    "shopName": "카페10PM",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 805",
    "roadAddress": "서울특별시 금천구 독산로40길 32",
    "lng": 126.9062918,
    "lat": 37.4604597
  },
  {
    "shopName": "플랜트",
    "branchName": "2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 130-43",
    "roadAddress": "서울특별시 용산구 보광로 117",
    "lng": 126.9942086,
    "lat": 37.53313571
  },
  {
    "shopName": "써브웨이언주역점",
    "branchName": "언주역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 650-2",
    "roadAddress": "서울특별시 강남구 봉은사로 206",
    "lng": 127.0346412,
    "lat": 37.50723451
  },
  {
    "shopName": "드플로허",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 683-61",
    "roadAddress": "서울특별시 용산구 대사관로5길 34",
    "lng": 127.0002719,
    "lat": 37.53577321
  },
  {
    "shopName": "에드빗",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 123-33",
    "roadAddress": "서울특별시 강남구 봉은사로68길 41",
    "lng": 127.0519164,
    "lat": 37.50961806
  },
  {
    "shopName": "카페비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 345-3",
    "roadAddress": "서울특별시 도봉구 해등로 67",
    "lng": 127.0416875,
    "lat": 37.64946765
  },
  {
    "shopName": "스윗헤르츠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 879-1",
    "roadAddress": "서울특별시 관악구 쑥고개로21길 9",
    "lng": 126.9484357,
    "lat": 37.47951208
  },
  {
    "shopName": "커피볶는곰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 923",
    "roadAddress": "서울특별시 강남구 선릉로68길 12",
    "lng": 127.0527741,
    "lat": 37.49902852
  },
  {
    "shopName": "웨이크업커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 86-4",
    "roadAddress": "서울특별시 강남구 논현로132길 15",
    "lng": 127.0317892,
    "lat": 37.51524857
  },
  {
    "shopName": "츄잉쥬스양재점",
    "branchName": "양재점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 959-10",
    "roadAddress": "서울특별시 강남구 남부순환로359길 26",
    "lng": 127.0362095,
    "lat": 37.48641491
  },
  {
    "shopName": "피티카페비엠에스점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 829",
    "roadAddress": "서울특별시 강남구 역삼로7길 22",
    "lng": 127.0328796,
    "lat": 37.49561451
  },
  {
    "shopName": "안다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 43-4",
    "roadAddress": "서울특별시 중랑구 용마산로93길 47",
    "lng": 127.0942542,
    "lat": 37.58907167
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "제이제이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 666-4",
    "roadAddress": "서울특별시 강남구 선릉로153길 5",
    "lng": 127.0389211,
    "lat": 37.52452458
  },
  {
    "shopName": "순카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 부암동 46-1",
    "roadAddress": "서울특별시 종로구 백석동1길 2",
    "lng": 126.9683731,
    "lat": 37.59419266
  },
  {
    "shopName": "카페눈코입",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 128-4",
    "roadAddress": "서울특별시 중랑구 양원역로 2",
    "lng": 127.1085963,
    "lat": 37.60082237
  },
  {
    "shopName": "아마스빈버블티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 727",
    "roadAddress": "서울특별시 도봉구 시루봉로 57",
    "lng": 127.0274476,
    "lat": 37.6560638
  },
  {
    "shopName": "앤레커피",
    "branchName": "코엑스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "빌리엔젤신라스테이점",
    "branchName": "신라스테이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 675-3",
    "roadAddress": "서울특별시 강남구 언주로 517",
    "lng": 127.0414987,
    "lat": 37.50432589
  },
  {
    "shopName": "싱글오커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 81-3",
    "roadAddress": "서울특별시 서초구 바우뫼로 182-1",
    "lng": 127.0400427,
    "lat": 37.47846274
  },
  {
    "shopName": "에슬로우커피선릉2호점",
    "branchName": "선릉2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 889-56",
    "roadAddress": "서울특별시 강남구 테헤란로64길 14",
    "lng": 127.0509698,
    "lat": 37.50397886
  },
  {
    "shopName": "스타벅스",
    "branchName": "동대문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 광희동1가 185-1",
    "roadAddress": "서울특별시 중구 장충단로 229",
    "lng": 127.0071916,
    "lat": 37.56516063
  },
  {
    "shopName": "책과삶서점카페",
    "branchName": "책과삶서점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 397",
    "roadAddress": "서울특별시 영등포구 당산로27길 16",
    "lng": 126.8947458,
    "lat": 37.52526363
  },
  {
    "shopName": "셀렉토커피마포구청점",
    "branchName": "마포구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 590-4",
    "roadAddress": "서울특별시 마포구 모래내로1길 20",
    "lng": 126.9032723,
    "lat": 37.56568263
  },
  {
    "shopName": "에스메랄다",
    "branchName": "구로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 611-26",
    "roadAddress": "서울특별시 구로구 구로중앙로 207",
    "lng": 126.8769432,
    "lat": 37.50458798
  },
  {
    "shopName": "헨델과그레텔미니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 318-65",
    "roadAddress": "서울특별시 동작구 사당로20가길 26",
    "lng": 126.974097,
    "lat": 37.48230569
  },
  {
    "shopName": "소월길커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 후암동 445-8",
    "roadAddress": "서울특별시 용산구 소월로2길 27",
    "lng": 126.976661,
    "lat": 37.55373602
  },
  {
    "shopName": "카페트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 쌍림동 146-1",
    "roadAddress": "서울특별시 중구 마른내로 140",
    "lng": 127.0035669,
    "lat": 37.56449936
  },
  {
    "shopName": "브런치가",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 204-29",
    "roadAddress": "서울특별시 마포구 월드컵북로4길 39",
    "lng": 126.9214476,
    "lat": 37.55808314
  },
  {
    "shopName": "보나비아티제일원로비점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 일원동 50",
    "roadAddress": "서울특별시 강남구 일원로 81",
    "lng": 127.0895788,
    "lat": 37.49033434
  },
  {
    "shopName": "카페몽타주",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 555-5",
    "roadAddress": "서울특별시 강동구 올림픽로48길 23-12",
    "lng": 127.121846,
    "lat": 37.52949536
  },
  {
    "shopName": "카페호메이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 896-36",
    "roadAddress": "서울특별시 강남구 선릉로86길 42",
    "lng": 127.0530965,
    "lat": 37.50394187
  },
  {
    "shopName": "세시셀라도산공원점",
    "branchName": "도산공원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 651-4",
    "roadAddress": "서울특별시 강남구 도산대로45길 10-4",
    "lng": 127.0361444,
    "lat": 37.52315038
  },
  {
    "shopName": "할리스커피",
    "branchName": "무교점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 무교동 7",
    "roadAddress": "서울특별시 중구 무교로 28",
    "lng": 126.9795613,
    "lat": 37.56845712
  },
  {
    "shopName": "커피베이",
    "branchName": "당산금강펜테리움점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동4가 74-2",
    "roadAddress": "서울특별시 영등포구 당산로 171",
    "lng": 126.898082,
    "lat": 37.5299622
  },
  {
    "shopName": "요거프레소길음뉴타운점",
    "branchName": "길음뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1286-10",
    "roadAddress": "서울특별시 성북구 길음로7길 6",
    "lng": 127.0223683,
    "lat": 37.60432042
  },
  {
    "shopName": "커피베이서울의료원점",
    "branchName": "서울의료원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 657",
    "roadAddress": "서울특별시 중랑구 신내로 127",
    "lng": 127.0956323,
    "lat": 37.61086048
  },
  {
    "shopName": "스토리웨이",
    "branchName": "본사",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 2-7",
    "roadAddress": "서울특별시 영등포구 국회대로 612",
    "lng": 126.9020353,
    "lat": 37.52578215
  },
  {
    "shopName": "SMC",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 홍지동 55-1",
    "roadAddress": "서울특별시 종로구 홍지문2길 7",
    "lng": 126.9559128,
    "lat": 37.60097601
  },
  {
    "shopName": "커피아이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 개봉동 353-14",
    "roadAddress": "서울특별시 구로구 경인로 324",
    "lng": 126.8561675,
    "lat": 37.4971082
  },
  {
    "shopName": "카페로올봄",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 326-29",
    "roadAddress": "서울특별시 마포구 와우산로35길 7",
    "lng": 126.9300977,
    "lat": 37.55550378
  },
  {
    "shopName": "하늘다원",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 노량진동 294-437",
    "roadAddress": "서울특별시 동작구 장승배기로19라길 52",
    "lng": 126.9353584,
    "lat": 37.50710222
  },
  {
    "shopName": "삼청동커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 삼청동 80-6",
    "roadAddress": "서울특별시 종로구 삼청로 91",
    "lng": 126.9816876,
    "lat": 37.5835589
  },
  {
    "shopName": "티하임",
    "branchName": "성신여대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동2가 234",
    "roadAddress": "서울특별시 성북구 보문로30가길 11-16",
    "lng": 127.0206769,
    "lat": 37.58993481
  },
  {
    "shopName": "카페마마스강남역점",
    "branchName": "강남역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1321-6",
    "roadAddress": "서울특별시 서초구 서운로 138",
    "lng": 127.0252291,
    "lat": 37.49604722
  },
  {
    "shopName": "커피빈코리아강남역먹자골목점",
    "branchName": "코리아강남역먹자골목점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 816-6",
    "roadAddress": "서울특별시 강남구 테헤란로1길 29",
    "lng": 127.02728,
    "lat": 37.50010085
  },
  {
    "shopName": "샤론꽃방.",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 장충동1가 26-13",
    "roadAddress": "서울특별시 중구 장충단로 205",
    "lng": 127.0066192,
    "lat": 37.56309243
  },
  {
    "shopName": "빌리엔젤",
    "branchName": "강남358타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 821-1",
    "roadAddress": "서울특별시 강남구 테헤란로 101",
    "lng": 127.0280231,
    "lat": 37.49861121
  },
  {
    "shopName": "지붕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 418-3",
    "roadAddress": "서울특별시 중랑구 용마산로 615",
    "lng": 127.1006067,
    "lat": 37.60598781
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아목동트라팰리스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 962",
    "roadAddress": "서울특별시 양천구 오목로 299",
    "lng": 126.8703422,
    "lat": 37.52607793
  },
  {
    "shopName": "카페오월",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 96-13",
    "roadAddress": "서울특별시 강동구 명일로 239",
    "lng": 127.1466281,
    "lat": 37.54005721
  },
  {
    "shopName": "스타벅스명동길점",
    "branchName": "명동길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로2가 7-1",
    "roadAddress": "서울특별시 중구 명동10길 41",
    "lng": 126.9858515,
    "lat": 37.56205085
  },
  {
    "shopName": "스무디킹",
    "branchName": "코엑스2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "감초다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 228-7",
    "roadAddress": "서울특별시 강동구 진황도로49길 46",
    "lng": 127.1424903,
    "lat": 37.53478309
  },
  {
    "shopName": "커피로스팅",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 134-57",
    "roadAddress": "서울특별시 강북구 도봉로30길 38",
    "lng": 127.0304953,
    "lat": 37.6212549
  },
  {
    "shopName": "빈트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 18",
    "roadAddress": "서울특별시 노원구 마들로 31",
    "lng": 127.0675173,
    "lat": 37.61744453
  },
  {
    "shopName": "빽다방",
    "branchName": "선릉중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 897-8",
    "roadAddress": "서울특별시 강남구 선릉로86길 8",
    "lng": 127.0504838,
    "lat": 37.50305588
  },
  {
    "shopName": "브리즈피씨카페",
    "branchName": "신촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 18-29",
    "roadAddress": "서울특별시 서대문구 연세로 8-1",
    "lng": 126.9372841,
    "lat": 37.55633456
  },
  {
    "shopName": "스타벅스",
    "branchName": "목동7단지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 923",
    "roadAddress": "서울특별시 양천구 목동서로 213",
    "lng": 126.8705959,
    "lat": 37.52800858
  },
  {
    "shopName": "SOMETEA",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 473-22",
    "roadAddress": "서울특별시 중랑구 용마산로125가길 41",
    "lng": 127.0983434,
    "lat": 37.6048983
  },
  {
    "shopName": "세인트빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 묘동 78",
    "roadAddress": "서울특별시 종로구 돈화문로8길 15",
    "lng": 126.9919886,
    "lat": 37.57196082
  },
  {
    "shopName": "힐",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 회현동1가 133-1",
    "roadAddress": "서울특별시 중구 소공로3길 42",
    "lng": 126.9819722,
    "lat": 37.55682746
  },
  {
    "shopName": "포스빌미카사카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 26",
    "roadAddress": "서울특별시 구로구 새말로 102",
    "lng": 126.8913914,
    "lat": 37.50576967
  },
  {
    "shopName": "탐엔탐스",
    "branchName": "신도림테크노점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 3-25",
    "roadAddress": "서울특별시 구로구 새말로 97",
    "lng": 126.8902076,
    "lat": 37.50703804
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아뉴교보타워옆점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1304",
    "roadAddress": "서울특별시 서초구 강남대로 449-3",
    "lng": 127.0248644,
    "lat": 37.50235159
  },
  {
    "shopName": "씨제이푸드빌콜드스톤크리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1606",
    "roadAddress": "서울특별시 마포구 상암산로 66",
    "lng": 126.8914724,
    "lat": 37.57824997
  },
  {
    "shopName": "인카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 272-10",
    "roadAddress": "서울특별시 서초구 언남길 71",
    "lng": 127.0446797,
    "lat": 37.47480598
  },
  {
    "shopName": "더퍼즐",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 2-71",
    "roadAddress": "서울특별시 마포구 대흥로 188-1",
    "lng": 126.9461302,
    "lat": 37.55585521
  },
  {
    "shopName": "카페온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 702-2",
    "roadAddress": "서울특별시 강남구 테헤란로 309",
    "lng": 127.0444153,
    "lat": 37.50354758
  },
  {
    "shopName": "씨제이푸드빌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 40-1",
    "roadAddress": "서울특별시 송파구 송파대로 521",
    "lng": 127.0981244,
    "lat": 37.51130447
  },
  {
    "shopName": "공차코리아대치점",
    "branchName": "코리아대치점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 507-2",
    "roadAddress": "서울특별시 강남구 삼성로 155",
    "lng": 127.0629032,
    "lat": 37.49392823
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "등촌역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 648-4",
    "roadAddress": "서울특별시 강서구 공항대로 519",
    "lng": 126.8641149,
    "lat": 37.55176082
  },
  {
    "shopName": "CNNCafe세빛둥둥섬점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 650",
    "roadAddress": "서울특별시 서초구 올림픽대로 2085-14",
    "lng": 126.9959457,
    "lat": 37.51242636
  },
  {
    "shopName": "고촌카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동1가 1-25",
    "roadAddress": "서울특별시 영등포구 문래북로 51-4",
    "lng": 126.8911534,
    "lat": 37.52109418
  },
  {
    "shopName": "익스페리멘탈커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 726-162",
    "roadAddress": "서울특별시 용산구 한남대로40길 10",
    "lng": 127.0033193,
    "lat": 37.54229552
  },
  {
    "shopName": "커피향기",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1054-6",
    "roadAddress": "서울특별시 노원구 동일로237길 63",
    "lng": 127.0517084,
    "lat": 37.67327281
  },
  {
    "shopName": "커피라움",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 966-7",
    "roadAddress": "서울특별시 성북구 서경로 2",
    "lng": 127.0149444,
    "lat": 37.60390728
  },
  {
    "shopName": "카페촉",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 109",
    "roadAddress": "서울특별시 강남구 영동대로112길 38",
    "lng": 127.0634378,
    "lat": 37.51541366
  },
  {
    "shopName": "커피앰비언스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 18",
    "roadAddress": "서울특별시 송파구 송이로17길 51",
    "lng": 127.1248311,
    "lat": 37.50156667
  },
  {
    "shopName": "블랙네오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 35-63",
    "roadAddress": "서울특별시 광진구 능동로48길 57",
    "lng": 127.0856409,
    "lat": 37.56192878
  },
  {
    "shopName": "이케이바리스타에듀컨설팅",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 536",
    "roadAddress": "서울특별시 동작구 상도로 207",
    "lng": 126.9419637,
    "lat": 37.50550364
  },
  {
    "shopName": "투썸플레이스커피경희대점",
    "branchName": "커피경희대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 16-72",
    "roadAddress": "서울특별시 동대문구 경희대로 7-1",
    "lng": 127.0522045,
    "lat": 37.59230964
  },
  {
    "shopName": "개성평통보쌈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 금호동4가 548-1",
    "roadAddress": "서울특별시 성동구 독서당로 302",
    "lng": 127.0227135,
    "lat": 37.54760261
  },
  {
    "shopName": "제퍼커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로2가 157-2",
    "roadAddress": "서울특별시 용산구 한강대로38길 17",
    "lng": 126.9698521,
    "lat": 37.52957387
  },
  {
    "shopName": "카페157",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1701-1",
    "roadAddress": "서울특별시 서초구 서초중앙로 157",
    "lng": 127.0111089,
    "lat": 37.49826359
  },
  {
    "shopName": "파스쿠찌삼성역점",
    "branchName": "삼성역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 168-21",
    "roadAddress": "서울특별시 강남구 영동대로96길 8",
    "lng": 127.063193,
    "lat": 37.51056404
  },
  {
    "shopName": "선릉마실길",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 삼성동 156",
    "roadAddress": "서울특별시 강남구 삼성로 530",
    "lng": 127.0556408,
    "lat": 37.50936857
  },
  {
    "shopName": "커피드리즐",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 200-49",
    "roadAddress": "서울특별시 마포구 월드컵북로 179",
    "lng": 126.9085636,
    "lat": 37.56765989
  },
  {
    "shopName": "투썸플레이스현대",
    "branchName": "지식산업센터",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 291-1",
    "roadAddress": "서울특별시 금천구 두산로 70",
    "lng": 126.8956093,
    "lat": 37.46895637
  },
  {
    "shopName": "만다향",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 노고산동 49-31",
    "roadAddress": "서울특별시 마포구 신촌로 66",
    "lng": 126.9331004,
    "lat": 37.55605355
  },
  {
    "shopName": "커피랩세아점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 490",
    "roadAddress": "서울특별시 마포구 양화로 45",
    "lng": 126.9139374,
    "lat": 37.55149077
  },
  {
    "shopName": "빈스앤베리즈",
    "branchName": "명품관이스트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 압구정동 515",
    "roadAddress": "서울특별시 강남구 압구정로 407",
    "lng": 127.0418193,
    "lat": 37.52790906
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "이수메가박스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 147-53",
    "roadAddress": "서울특별시 동작구 동작대로 89",
    "lng": 126.9816527,
    "lat": 37.48460567
  },
  {
    "shopName": "카페그랑",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 943-19",
    "roadAddress": "서울특별시 양천구 중앙로 300",
    "lng": 126.8518574,
    "lat": 37.52304337
  },
  {
    "shopName": "홀릭이스케이프",
    "branchName": "압구정본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 663-7",
    "roadAddress": "서울특별시 강남구 선릉로157길 20-5",
    "lng": 127.0382052,
    "lat": 37.52653711
  },
  {
    "shopName": "대지다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 용답동 234",
    "roadAddress": "서울특별시 성동구 자동차시장1길 70",
    "lng": 127.0651278,
    "lat": 37.5603625
  },
  {
    "shopName": "스탠다드커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 618-17",
    "roadAddress": "서울특별시 강남구 강남대로102길 28",
    "lng": 127.0276983,
    "lat": 37.50272636
  },
  {
    "shopName": "메머드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 703-3",
    "roadAddress": "서울특별시 강남구 테헤란로43길 12",
    "lng": 127.0439788,
    "lat": 37.50407567
  },
  {
    "shopName": "카페무세띠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1303-16",
    "roadAddress": "서울특별시 서초구 서초대로77길 62",
    "lng": 127.0238869,
    "lat": 37.50272196
  },
  {
    "shopName": "젬스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 일원동 685-11",
    "roadAddress": "서울특별시 강남구 양재대로27길 14",
    "lng": 127.0817794,
    "lat": 37.49007575
  },
  {
    "shopName": "쥬시&차얌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 193",
    "roadAddress": "서울특별시 광진구 광나루로 386",
    "lng": 127.0723063,
    "lat": 37.54738994
  },
  {
    "shopName": "더쌍화피카디리플러스점",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 돈의동 137",
    "roadAddress": "서울특별시 종로구 돈화문로5가길 1",
    "lng": 126.9912089,
    "lat": 37.57101707
  },
  {
    "shopName": "제이씨제이푸드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 16-293",
    "roadAddress": "서울특별시 성북구 정릉로38가길 23",
    "lng": 127.0173491,
    "lat": 37.60189999
  },
  {
    "shopName": "제이엘디저트바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 744-34",
    "roadAddress": "서울특별시 용산구 이태원로55가길 38",
    "lng": 126.9995217,
    "lat": 37.53687514
  },
  {
    "shopName": "푸드케어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 500",
    "roadAddress": "서울특별시 중랑구 망우로 353",
    "lng": 127.0916054,
    "lat": 37.59832307
  },
  {
    "shopName": "제이티코페아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 50-3",
    "roadAddress": "서울특별시 금천구 벚꽃로 298",
    "lng": 126.883859,
    "lat": 37.48143359
  },
  {
    "shopName": "오가다",
    "branchName": "서울인사동점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 123-4",
    "roadAddress": "서울특별시 종로구 인사동길 60",
    "lng": 126.9836118,
    "lat": 37.57526789
  },
  {
    "shopName": "팔공티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 148-91",
    "roadAddress": "서울특별시 동작구 노량진로 180",
    "lng": 126.9458795,
    "lat": 37.51336876
  },
  {
    "shopName": "요거프레소당산에스케이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동5가 7-23",
    "roadAddress": "서울특별시 영등포구 당산로41나길 12",
    "lng": 126.8973347,
    "lat": 37.53230694
  },
  {
    "shopName": "위드유상암카페",
    "branchName": "위드유상암",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1600",
    "roadAddress": "서울특별시 마포구 월드컵북로 416",
    "lng": 126.887714,
    "lat": 37.58051225
  },
  {
    "shopName": "레이너드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 778-3",
    "roadAddress": "서울특별시 강서구 곰달래로 269",
    "lng": 126.8628809,
    "lat": 37.53242171
  },
  {
    "shopName": "두리안디저트카페",
    "branchName": "두리안디저트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 151",
    "roadAddress": "서울특별시 구로구 도림로 101",
    "lng": 126.8940241,
    "lat": 37.49137763
  },
  {
    "shopName": "다빈치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 645",
    "roadAddress": "서울특별시 송파구 법원로11길 25",
    "lng": 127.1162166,
    "lat": 37.48494102
  },
  {
    "shopName": "메고지고",
    "branchName": "가양홈플러스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 가양동 18-24",
    "roadAddress": "서울특별시 강서구 양천로 431",
    "lng": 126.8499461,
    "lat": 37.56425613
  },
  {
    "shopName": "클레어플레이스",
    "branchName": "양재1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 80",
    "roadAddress": "서울특별시 서초구 강남대로 148",
    "lng": 127.0391683,
    "lat": 37.47787895
  },
  {
    "shopName": "아임커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 1024-1",
    "roadAddress": "서울특별시 서초구 방배로 32",
    "lng": 127.0003547,
    "lat": 37.47782726
  },
  {
    "shopName": "김대기커피스쿨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 111-27",
    "roadAddress": "서울특별시 송파구 중대로10길 7-1",
    "lng": 127.1219996,
    "lat": 37.49321084
  },
  {
    "shopName": "카페",
    "branchName": "라잌유",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 북창동 18-4",
    "roadAddress": "서울특별시 중구 남대문로1길 46",
    "lng": 126.9775049,
    "lat": 37.56321329
  },
  {
    "shopName": "카페토스피아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 173-6",
    "roadAddress": "서울특별시 중랑구 공릉로2길 19",
    "lng": 127.0790684,
    "lat": 37.61216504
  },
  {
    "shopName": "라치나타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 삼청동 120-12",
    "roadAddress": "서울특별시 종로구 삼청로 123",
    "lng": 126.9815478,
    "lat": 37.5863419
  },
  {
    "shopName": "커피지원센터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 226-16",
    "roadAddress": "서울특별시 광진구 아차산로39길 29",
    "lng": 127.0760551,
    "lat": 37.53889538
  },
  {
    "shopName": "헬카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 회현동1가 194-19",
    "roadAddress": "서울특별시 중구 퇴계로 65",
    "lng": 126.9793424,
    "lat": 37.55961601
  },
  {
    "shopName": "스타벅스",
    "branchName": "아현역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북아현동 142-27",
    "roadAddress": "서울특별시 서대문구 북아현로 29",
    "lng": 126.9561442,
    "lat": 37.56007995
  },
  {
    "shopName": "하루샐러드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1718-4",
    "roadAddress": "서울특별시 서초구 법원로1길 11",
    "lng": 127.0092694,
    "lat": 37.49283284
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "강서구청사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 657-3",
    "roadAddress": "서울특별시 강서구 공항대로 395",
    "lng": 126.8515334,
    "lat": 37.55671192
  },
  {
    "shopName": "이디야커피",
    "branchName": "건대스타시티2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 227-342",
    "roadAddress": "서울특별시 광진구 능동로 90",
    "lng": 127.070902,
    "lat": 37.53835036
  },
  {
    "shopName": "이앤지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 16-49",
    "roadAddress": "서울특별시 용산구 청파로 40",
    "lng": 126.9560294,
    "lat": 37.5317952
  },
  {
    "shopName": "백련다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 가리봉동 110-9",
    "roadAddress": "서울특별시 구로구 우마2길 21",
    "lng": 126.8891282,
    "lat": 37.48217706
  },
  {
    "shopName": "카페복희씨",
    "branchName": "구스토",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 흑석동 336",
    "roadAddress": "서울특별시 동작구 흑석한강로 27",
    "lng": 126.9661873,
    "lat": 37.50408724
  },
  {
    "shopName": "일리카페",
    "branchName": "대학로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 혜화동 85-3",
    "roadAddress": "서울특별시 종로구 창경궁로 285",
    "lng": 127.0016439,
    "lat": 37.58645052
  },
  {
    "shopName": "이디야커피",
    "branchName": "YTN점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 봉래동1가 132-2",
    "roadAddress": "서울특별시 중구 세종대로1길 11",
    "lng": 126.9725368,
    "lat": 37.5581964
  },
  {
    "shopName": "할리스커피광나루역점",
    "branchName": "광나루역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 580",
    "roadAddress": "서울특별시 광진구 천호대로 808",
    "lng": 127.1032542,
    "lat": 37.54484478
  },
  {
    "shopName": "플랫빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 278-4",
    "roadAddress": "서울특별시 영등포구 선유로54길 7",
    "lng": 126.899448,
    "lat": 37.53632727
  },
  {
    "shopName": "코나카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 청파동1가 161",
    "roadAddress": "서울특별시 용산구 청파로 319",
    "lng": 126.9697441,
    "lat": 37.54811643
  },
  {
    "shopName": "제이엠커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 330-25",
    "roadAddress": "서울특별시 강동구 천중로2길 10",
    "lng": 127.1230397,
    "lat": 37.54543489
  },
  {
    "shopName": "마실",
    "branchName": "로공방카페",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 744-12",
    "roadAddress": "서울특별시 영등포구 도림로53길 34-1",
    "lng": 126.899776,
    "lat": 37.49858565
  },
  {
    "shopName": "코코커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 774-2",
    "roadAddress": "서울특별시 강서구 공항대로 213",
    "lng": 126.8313523,
    "lat": 37.55968551
  },
  {
    "shopName": "할리스커피",
    "branchName": "안암오거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 104-121",
    "roadAddress": "서울특별시 성북구 고려대로24길 56",
    "lng": 127.0292961,
    "lat": 37.58365366
  },
  {
    "shopName": "Mrbkcoffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 382",
    "roadAddress": "서울특별시 영등포구 당산로27길 5",
    "lng": 126.8956783,
    "lat": 37.52493897
  },
  {
    "shopName": "무진장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 34-58",
    "roadAddress": "서울특별시 용산구 녹사평대로 168-18",
    "lng": 126.9898968,
    "lat": 37.53320704
  },
  {
    "shopName": "우림",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 30-27",
    "roadAddress": "서울특별시 종로구 인사동10길 18",
    "lng": 126.9858904,
    "lat": 37.57420624
  },
  {
    "shopName": "파크15",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 용산동5가 2-28",
    "roadAddress": "서울특별시 용산구 한강대로38길 35",
    "lng": 126.9702026,
    "lat": 37.52876598
  },
  {
    "shopName": "커피하우스",
    "branchName": "꼼지락",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 249-16",
    "roadAddress": "서울특별시 광진구 자양로28길 40",
    "lng": 127.0862932,
    "lat": 37.54187644
  },
  {
    "shopName": "마호가니커피",
    "branchName": "여의도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 23-3",
    "roadAddress": "서울특별시 영등포구 여의대로 66",
    "lng": 126.9236956,
    "lat": 37.52453987
  },
  {
    "shopName": "시그니처커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 쌍림동 22-1",
    "roadAddress": "서울특별시 중구 퇴계로 299",
    "lng": 127.0046473,
    "lat": 37.56412103
  },
  {
    "shopName": "와플대학",
    "branchName": "협동조합",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 우이동 215-9",
    "roadAddress": "서울특별시 강북구 삼양로179길 32",
    "lng": 127.0101692,
    "lat": 37.66509256
  },
  {
    "shopName": "카페소고",
    "branchName": "망우점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 489-29",
    "roadAddress": "서울특별시 중랑구 신내로1길 15",
    "lng": 127.0960986,
    "lat": 37.59947486
  },
  {
    "shopName": "프리카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 628-7",
    "roadAddress": "서울특별시 강서구 화곡로68길 15",
    "lng": 126.8553058,
    "lat": 37.55944265
  },
  {
    "shopName": "흑화당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 358-124",
    "roadAddress": "서울특별시 마포구 와우산로21길 24",
    "lng": 126.9227172,
    "lat": 37.55244521
  },
  {
    "shopName": "IDCAFE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 풍납동 89-11",
    "roadAddress": "서울특별시 송파구 바람드리5길 23",
    "lng": 127.1188654,
    "lat": 37.53953795
  },
  {
    "shopName": "엘가커피",
    "branchName": "보라매점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 4326",
    "roadAddress": "서울특별시 영등포구 여의대방로 87",
    "lng": 126.9162967,
    "lat": 37.49716153
  },
  {
    "shopName": "카페마노",
    "branchName": "아CAFEMANOA",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 223-43",
    "roadAddress": "서울특별시 성북구 장월로23길 47-3",
    "lng": 127.0464087,
    "lat": 37.61700553
  },
  {
    "shopName": "당신의테이블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 247-154",
    "roadAddress": "서울특별시 강서구 양천로24길 113",
    "lng": 126.8153605,
    "lat": 37.56819403
  },
  {
    "shopName": "스미다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 142-26",
    "roadAddress": "서울특별시 광진구 천호대로109길 18",
    "lng": 127.0812463,
    "lat": 37.55755161
  },
  {
    "shopName": "팔칠",
    "branchName": "팔커피",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1023-16",
    "roadAddress": "서울특별시 양천구 중앙로36길 47",
    "lng": 126.859133,
    "lat": 37.51997827
  },
  {
    "shopName": "카페제이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 고덕동 294-1",
    "roadAddress": "서울특별시 강동구 동남로82길 19",
    "lng": 127.1579836,
    "lat": 37.56066478
  },
  {
    "shopName": "종로강남한의원식품사업부더쌍화",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 중화동 307-1",
    "roadAddress": "서울특별시 중랑구 동일로143길 19",
    "lng": 127.0776051,
    "lat": 37.60499934
  },
  {
    "shopName": "이디야커피",
    "branchName": "신림미성점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 587-22",
    "roadAddress": "서울특별시 관악구 난우길 43-1",
    "lng": 126.9170477,
    "lat": 37.47648034
  },
  {
    "shopName": "스무디킹중계롯데마트점",
    "branchName": "중계롯데마트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 361",
    "roadAddress": "서울특별시 노원구 노원로 330",
    "lng": 127.0709241,
    "lat": 37.64678217
  },
  {
    "shopName": "블루보틀",
    "branchName": "성수1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 656-302",
    "roadAddress": "서울특별시 성동구 아차산로 7",
    "lng": 127.0456237,
    "lat": 37.54809636
  },
  {
    "shopName": "오에스인터내셔널카페데베르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 702-19",
    "roadAddress": "서울특별시 강남구 테헤란로 317",
    "lng": 127.0457446,
    "lat": 37.5039638
  },
  {
    "shopName": "디저트39",
    "branchName": "금천시흥점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 852-30",
    "roadAddress": "서울특별시 금천구 독산로 131-1",
    "lng": 126.9048767,
    "lat": 37.45905898
  },
  {
    "shopName": "에프이26",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-345",
    "roadAddress": "서울특별시 성동구 서울숲2길 12",
    "lng": 127.0399424,
    "lat": 37.54723035
  },
  {
    "shopName": "지유명차",
    "branchName": "성북점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동1가 65",
    "roadAddress": "서울특별시 성북구 성북로 19",
    "lng": 127.0043865,
    "lat": 37.58966336
  },
  {
    "shopName": "오얏꽃",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 돈의동 18",
    "roadAddress": "서울특별시 종로구 돈화문로11다길 15",
    "lng": 126.9905362,
    "lat": 37.57304768
  },
  {
    "shopName": "엔제리너스",
    "branchName": "가산SKV1점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 371-41",
    "roadAddress": "서울특별시 금천구 가산디지털1로 171",
    "lng": 126.8803985,
    "lat": 37.48148195
  },
  {
    "shopName": "송스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 마천동 76",
    "roadAddress": "서울특별시 송파구 성내천로 208",
    "lng": 127.1508253,
    "lat": 37.50020656
  },
  {
    "shopName": "커피코트",
    "branchName": "그레이트밸리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-5",
    "roadAddress": "서울특별시 금천구 디지털로9길 32",
    "lng": 126.8872665,
    "lat": 37.4796276
  },
  {
    "shopName": "카페와이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1730",
    "roadAddress": "서울특별시 관악구 남부순환로 1430",
    "lng": 126.9090258,
    "lat": 37.47922683
  },
  {
    "shopName": "달콤스타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 157-8",
    "roadAddress": "서울특별시 송파구 문정로 221",
    "lng": 127.1406128,
    "lat": 37.49822245
  },
  {
    "shopName": "달근프라페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 47-2",
    "roadAddress": "서울특별시 강동구 동남로75길 27",
    "lng": 127.1545958,
    "lat": 37.55395475
  },
  {
    "shopName": "커피사피엔스",
    "branchName": "문정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 642",
    "roadAddress": "서울특별시 송파구 송파대로 201",
    "lng": 127.1206383,
    "lat": 37.48779434
  },
  {
    "shopName": "원커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 281-59",
    "roadAddress": "서울특별시 은평구 불광로 46",
    "lng": 126.9307254,
    "lat": 37.61133762
  },
  {
    "shopName": "커피코트",
    "branchName": "사이언스타점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 774-9",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 42",
    "lng": 126.8318545,
    "lat": 37.560141
  },
  {
    "shopName": "더즌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 378-392",
    "roadAddress": "서울특별시 금천구 독산로 194",
    "lng": 126.9031717,
    "lat": 37.46435036
  },
  {
    "shopName": "커피드코리아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 796-26",
    "roadAddress": "서울특별시 강남구 도곡로21길 18",
    "lng": 127.0388128,
    "lat": 37.49327514
  },
  {
    "shopName": "할리스커피",
    "branchName": "도곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 422-2",
    "roadAddress": "서울특별시 강남구 논현로28길 54",
    "lng": 127.0461842,
    "lat": 37.48452254
  },
  {
    "shopName": "힐링카페멘토",
    "branchName": "종로부암점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 부암동 234",
    "roadAddress": "서울특별시 종로구 창의문로10길 21",
    "lng": 126.9641473,
    "lat": 37.59352492
  },
  {
    "shopName": "카페버즈앤벅스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 정동 32-1",
    "roadAddress": "서울특별시 중구 정동길 26",
    "lng": 126.9713066,
    "lat": 37.56616892
  },
  {
    "shopName": "공차",
    "branchName": "하월곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 230",
    "roadAddress": "서울특별시 성북구 종암로 167",
    "lng": 127.0309775,
    "lat": 37.60504918
  },
  {
    "shopName": "카페",
    "branchName": "헐크보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 96-48",
    "roadAddress": "서울특별시 관악구 신림로 202",
    "lng": 126.9372439,
    "lat": 37.47541127
  },
  {
    "shopName": "커피베이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 100-23",
    "roadAddress": "서울특별시 양천구 곰달래로7길 58-1",
    "lng": 126.8327734,
    "lat": 37.5346058
  },
  {
    "shopName": "카페사이코바리스타",
    "branchName": "사이코바리스타",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 354-9",
    "roadAddress": "서울특별시 동작구 상도로 123-1",
    "lng": 126.9335678,
    "lat": 37.5017789
  },
  {
    "shopName": "유어마이커피브루어스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 69-5",
    "roadAddress": "서울특별시 서초구 바우뫼로33길 7-14",
    "lng": 127.0368193,
    "lat": 37.4776706
  },
  {
    "shopName": "커피볶는집시다모",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 현석동 10-1",
    "roadAddress": "서울특별시 마포구 신수로 30",
    "lng": 126.9343556,
    "lat": 37.54420719
  },
  {
    "shopName": "명가원",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 안국동 175-56",
    "roadAddress": "서울특별시 종로구 윤보선길 19-18",
    "lng": 126.9835385,
    "lat": 37.57733064
  },
  {
    "shopName": "공차",
    "branchName": "김포공항국내선점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 1373",
    "roadAddress": "서울특별시 강서구 하늘길 112",
    "lng": 126.8033425,
    "lat": 37.55877421
  },
  {
    "shopName": "쥬쥬펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 마포구 연남동 255-9",
    "roadAddress": "서울특별시 마포구 성미산로28길 31",
    "lng": 126.9235437,
    "lat": 37.56265251
  },
  {
    "shopName": "커피베이",
    "branchName": "학동역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 212-1",
    "roadAddress": "서울특별시 강남구 언주로129길 21",
    "lng": 127.0335481,
    "lat": 37.51393842
  },
  {
    "shopName": "코너빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 310-51",
    "roadAddress": "서울특별시 동작구 장승배기로 96-2",
    "lng": 126.9402908,
    "lat": 37.50622751
  },
  {
    "shopName": "서울창업카페",
    "branchName": "천호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 451-20",
    "roadAddress": "서울특별시 강동구 천호대로 1057",
    "lng": 127.1294609,
    "lat": 37.53724676
  },
  {
    "shopName": "설빙",
    "branchName": "구로지밸리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 188-25",
    "roadAddress": "서울특별시 구로구 디지털로 300",
    "lng": 126.8965278,
    "lat": 37.48491351
  },
  {
    "shopName": "해피데이도봉구민회관점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 303",
    "roadAddress": "서울특별시 도봉구 도봉로 552",
    "lng": 127.0384319,
    "lat": 37.65411751
  },
  {
    "shopName": "블랑",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 803-21",
    "roadAddress": "서울특별시 강서구 곰달래로57길 23-15",
    "lng": 126.8609417,
    "lat": 37.53345724
  },
  {
    "shopName": "9찌",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 수유동 229-35",
    "roadAddress": "서울특별시 강북구 도봉로87길 7",
    "lng": 127.0250294,
    "lat": 37.63817636
  },
  {
    "shopName": "보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1083-24",
    "roadAddress": "서울특별시 영등포구 디지털로 341",
    "lng": 126.8986352,
    "lat": 37.48847429
  },
  {
    "shopName": "카페",
    "branchName": "히든보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 구로구 구로동 1127-18",
    "roadAddress": "서울특별시 구로구 시흥대로163길 12",
    "lng": 126.899278,
    "lat": 37.48165935
  },
  {
    "shopName": "모네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 적선동 80",
    "roadAddress": "서울특별시 종로구 사직로 130",
    "lng": 126.9733086,
    "lat": 37.57535894
  },
  {
    "shopName": "CafeSopia커피볶는집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 89-11",
    "roadAddress": "서울특별시 송파구 양재대로 1222",
    "lng": 127.1310458,
    "lat": 37.51572315
  },
  {
    "shopName": "에나타",
    "branchName": "강남2호점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 811-9",
    "roadAddress": "서울특별시 강남구 강남대로106길 17",
    "lng": 127.0268893,
    "lat": 37.50318825
  },
  {
    "shopName": "커피베이",
    "branchName": "온수힐스테이트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 온수동 155",
    "roadAddress": "서울특별시 구로구 부일로9길 127",
    "lng": 126.8205593,
    "lat": 37.49759601
  },
  {
    "shopName": "투어카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 395-25",
    "roadAddress": "서울특별시 영등포구 국회대로28길 17",
    "lng": 126.8942661,
    "lat": 37.52710627
  },
  {
    "shopName": "가배팩토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 999-45",
    "roadAddress": "서울특별시 금천구 금하로 617-2",
    "lng": 126.8998981,
    "lat": 37.45477779
  },
  {
    "shopName": "도시보감",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동3가 78",
    "roadAddress": "서울특별시 영등포구 도림로 456",
    "lng": 126.892899,
    "lat": 37.51549706
  },
  {
    "shopName": "더벤티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 750-2",
    "roadAddress": "서울특별시 강서구 수명로 78",
    "lng": 126.8263184,
    "lat": 37.553013
  },
  {
    "shopName": "더크림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 330-9",
    "roadAddress": "서울특별시 동대문구 장한로28길 18",
    "lng": 127.0729868,
    "lat": 37.57284992
  },
  {
    "shopName": "베네토아이앤디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 719",
    "roadAddress": "서울특별시 강남구 테헤란로 216",
    "lng": 127.0401333,
    "lat": 37.50143142
  },
  {
    "shopName": "포비아명동",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동2가 3-2",
    "roadAddress": "서울특별시 중구 명동10길 7-6",
    "lng": 126.985405,
    "lat": 37.56325441
  },
  {
    "shopName": "토프레소까치산점",
    "branchName": "까치산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 340-5",
    "roadAddress": "서울특별시 강서구 강서로18길 26",
    "lng": 126.8471544,
    "lat": 37.53386406
  },
  {
    "shopName": "카페티포트",
    "branchName": "티포트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 692",
    "roadAddress": "서울특별시 노원구 동일로 1456",
    "lng": 127.06148,
    "lat": 37.66066444
  },
  {
    "shopName": "파머스빈",
    "branchName": "마곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 797",
    "roadAddress": "서울특별시 강서구 공항대로 237",
    "lng": 126.8338914,
    "lat": 37.55944031
  },
  {
    "shopName": "카페아이엠티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 159",
    "roadAddress": "서울특별시 강남구 영동대로 513",
    "lng": 127.0591391,
    "lat": 37.51182033
  },
  {
    "shopName": "라바토리카페N03",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 충정로3가 465",
    "roadAddress": "서울특별시 서대문구 서소문로 27",
    "lng": 126.9648455,
    "lat": 37.5602737
  },
  {
    "shopName": "카페인커뮤니케이션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 656-591",
    "roadAddress": "서울특별시 성동구 상원1길 26",
    "lng": 127.0486244,
    "lat": 37.54617431
  },
  {
    "shopName": "요거프레소",
    "branchName": "북아현점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북아현동 129-56",
    "roadAddress": "서울특별시 서대문구 북아현로 32-2",
    "lng": 126.9565835,
    "lat": 37.56023701
  },
  {
    "shopName": "다락방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1010-1",
    "roadAddress": "서울특별시 동작구 동작대로13길 18",
    "lng": 126.9796199,
    "lat": 37.48193002
  },
  {
    "shopName": "플젠24",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 143-35",
    "roadAddress": "서울특별시 강남구 테헤란로69길 8",
    "lng": 127.0528272,
    "lat": 37.50646266
  },
  {
    "shopName": "더벤티",
    "branchName": "마곡나루역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 760-1",
    "roadAddress": "서울특별시 강서구 마곡중앙로 161-11",
    "lng": 126.8267068,
    "lat": 37.56793792
  },
  {
    "shopName": "증가로커피공방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 남가좌동 325-23",
    "roadAddress": "서울특별시 서대문구 증가로10길 36-55",
    "lng": 126.9245843,
    "lat": 37.57844816
  },
  {
    "shopName": "타로샵",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1075-16",
    "roadAddress": "서울특별시 영등포구 도림천로11길 25-2",
    "lng": 126.898095,
    "lat": 37.49214552
  },
  {
    "shopName": "BOUNTE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 797-10",
    "roadAddress": "서울특별시 강서구 마곡동로4길 15",
    "lng": 126.8352327,
    "lat": 37.55980495
  },
  {
    "shopName": "Twosomeplace",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 795-7",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 93",
    "lng": 126.8376838,
    "lat": 37.56012645
  },
  {
    "shopName": "즐거운찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 146-2",
    "roadAddress": "서울특별시 종로구 인사동길 55-2",
    "lng": 126.9835598,
    "lat": 37.57493406
  },
  {
    "shopName": "커피기업",
    "branchName": "여의도직영점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 13-25",
    "roadAddress": "서울특별시 영등포구 은행로 29",
    "lng": 126.9218768,
    "lat": 37.52907355
  },
  {
    "shopName": "커피콩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 211-19",
    "roadAddress": "서울특별시 용산구 회나무로28길 5",
    "lng": 126.991861,
    "lat": 37.53942303
  },
  {
    "shopName": "엔터타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서초구 서초동 1303-35",
    "roadAddress": "서울특별시 서초구 강남대로 455",
    "lng": 127.0246988,
    "lat": 37.50290888
  },
  {
    "shopName": "커피익스플로러",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1599-2",
    "roadAddress": "서울특별시 서초구 반포대로14길 71",
    "lng": 127.0145276,
    "lat": 37.48682173
  },
  {
    "shopName": "오초록",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 723",
    "roadAddress": "서울특별시 노원구 노해로 502",
    "lng": 127.063825,
    "lat": 37.65443891
  },
  {
    "shopName": "릴렉스까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 산69",
    "roadAddress": "서울특별시 노원구 마들로5가길 27-17",
    "lng": 127.0543461,
    "lat": 37.63870331
  },
  {
    "shopName": "언노운커피17",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 당주동 40",
    "roadAddress": "서울특별시 종로구 새문안로5길 11",
    "lng": 126.9747129,
    "lat": 37.57119032
  },
  {
    "shopName": "오늘,커피한잔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1459-2",
    "roadAddress": "서울특별시 서초구 반포대로 38",
    "lng": 127.011909,
    "lat": 37.48388944
  },
  {
    "shopName": "호이안로스터리송리단길점",
    "branchName": "송리단길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 46-13",
    "roadAddress": "서울특별시 송파구 백제고분로45길 3-18",
    "lng": 127.110215,
    "lat": 37.50854882
  },
  {
    "shopName": "토프레소",
    "branchName": "도곡렉슬점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 527",
    "roadAddress": "서울특별시 강남구 선릉로 221",
    "lng": 127.0497138,
    "lat": 37.49420131
  },
  {
    "shopName": "20카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1019-10",
    "roadAddress": "서울특별시 노원구 동일로230가길 27",
    "lng": 127.057092,
    "lat": 37.67245098
  },
  {
    "shopName": "프롬하츠커피롯데월드몰점",
    "branchName": "롯데월드몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "카페",
    "branchName": "IGSS",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 구산동 27-41",
    "roadAddress": "서울특별시 은평구 갈현로15길 8",
    "lng": 126.9097911,
    "lat": 37.60768611
  },
  {
    "shopName": "엘에이도그",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동작구 사당동 150-14",
    "roadAddress": "서울특별시 동작구 사당로27길 19",
    "lng": 126.9781652,
    "lat": 37.48496301
  },
  {
    "shopName": "히포커피",
    "branchName": "대학동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 127-72",
    "roadAddress": "서울특별시 관악구 신림로12길 25",
    "lng": 126.938752,
    "lat": 37.47190171
  },
  {
    "shopName": "소소한하루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 32-42",
    "roadAddress": "서울특별시 광진구 자양로50길 37",
    "lng": 127.0943022,
    "lat": 37.55239034
  },
  {
    "shopName": "더빈스11",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 461",
    "roadAddress": "서울특별시 서대문구 연희로2안길 7-3",
    "lng": 126.9276024,
    "lat": 37.56061706
  },
  {
    "shopName": "공차",
    "branchName": "이대서울병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 808",
    "roadAddress": "서울특별시 강서구 공항대로 260",
    "lng": 126.8362457,
    "lat": 37.55725601
  },
  {
    "shopName": "Minscoffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 38-104",
    "roadAddress": "서울특별시 동대문구 전농로16길 54",
    "lng": 127.0603549,
    "lat": 37.57810226
  },
  {
    "shopName": "TOWNCOFFEEBAR",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 413-44",
    "roadAddress": "서울특별시 마포구 포은로 70",
    "lng": 126.9062237,
    "lat": 37.55350096
  },
  {
    "shopName": "홀스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 노원구 상계동 331-8",
    "roadAddress": "서울특별시 노원구 노해로81길 12-20",
    "lng": 127.063958,
    "lat": 37.65557527
  },
  {
    "shopName": "와플대학",
    "branchName": "상일동역캠퍼스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 고덕동 693",
    "roadAddress": "서울특별시 강동구 고덕로 333",
    "lng": 127.1594713,
    "lat": 37.55619714
  },
  {
    "shopName": "옹글",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 금호동1가 1823",
    "roadAddress": "서울특별시 성동구 금호로 140",
    "lng": 127.0219094,
    "lat": 37.55371406
  },
  {
    "shopName": "포라커피웍스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 262-1",
    "roadAddress": "서울특별시 중랑구 신내역로3길 40-36",
    "lng": 127.1040261,
    "lat": 37.617394
  },
  {
    "shopName": "ELCAFECOFFEEROASTERS",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동5가 2-1",
    "roadAddress": "서울특별시 영등포구 양평로21나길 7",
    "lng": 126.8923473,
    "lat": 37.53674744
  },
  {
    "shopName": "스터디카페특별",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 194-3",
    "roadAddress": "서울특별시 동작구 노량진로 206",
    "lng": 126.9486371,
    "lat": 37.51273557
  },
  {
    "shopName": "와플대학",
    "branchName": "강남역지하상가캠퍼스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 821-1",
    "roadAddress": "서울특별시 강남구 테헤란로 101",
    "lng": 127.0280225,
    "lat": 37.49865626
  },
  {
    "shopName": "나우커피",
    "branchName": "독산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1012-15",
    "roadAddress": "서울특별시 금천구 시흥대로 392",
    "lng": 126.898296,
    "lat": 37.46844983
  },
  {
    "shopName": "몽바커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 646-11",
    "roadAddress": "서울특별시 강남구 테헤란로21길 8",
    "lng": 127.0345771,
    "lat": 37.50079145
  },
  {
    "shopName": "카페",
    "branchName": "그린버디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 8",
    "roadAddress": "서울특별시 도봉구 창포원로 45",
    "lng": 127.0470407,
    "lat": 37.69078723
  },
  {
    "shopName": "알리바바무인카페점",
    "branchName": "강남점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 858",
    "roadAddress": "서울특별시 강남구 강남대로 302-2",
    "lng": 127.0282892,
    "lat": 37.49815386
  },
  {
    "shopName": "커피레터",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 화곡동 469-12",
    "roadAddress": "서울특별시 강서구 곰달래로53길 99",
    "lng": 126.8567464,
    "lat": 37.53552512
  },
  {
    "shopName": "더리터",
    "branchName": "역삼직영점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 738-12",
    "roadAddress": "서울특별시 강남구 논현로85길 5-7",
    "lng": 127.0371931,
    "lat": 37.49875839
  },
  {
    "shopName": "쏘나이스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 798-6",
    "roadAddress": "서울특별시 강서구 마곡중앙로 59-17",
    "lng": 126.8247773,
    "lat": 37.55889942
  },
  {
    "shopName": "카페울림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 428-5",
    "roadAddress": "서울특별시 양천구 월정로 43",
    "lng": 126.8419393,
    "lat": 37.52355924
  },
  {
    "shopName": "구대회커피마포",
    "branchName": "하나점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 174-14",
    "roadAddress": "서울특별시 마포구 큰우물로 53",
    "lng": 126.9446126,
    "lat": 37.54228098
  },
  {
    "shopName": "더베이크",
    "branchName": "센터마크점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 198-42",
    "roadAddress": "서울특별시 종로구 인사동5길 38",
    "lng": 126.9841918,
    "lat": 37.57257877
  },
  {
    "shopName": "알타미라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 336-1",
    "roadAddress": "서울특별시 마포구 와우산로29길 21",
    "lng": 126.9285669,
    "lat": 37.55491323
  },
  {
    "shopName": "커피스퀘어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 1-2",
    "roadAddress": "서울특별시 성북구 안암로 145",
    "lng": 127.0316991,
    "lat": 37.5886922
  },
  {
    "shopName": "지유가오카핫쵸메",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 안국동 52-6",
    "roadAddress": "서울특별시 종로구 윤보선길 46",
    "lng": 126.9836641,
    "lat": 37.5780886
  },
  {
    "shopName": "커피홀",
    "branchName": "불광점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 643",
    "roadAddress": "서울특별시 은평구 통일로 796",
    "lng": 126.925738,
    "lat": 37.61632908
  },
  {
    "shopName": "커피팝",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 192-10",
    "roadAddress": "서울특별시 서대문구 연희맛로 5",
    "lng": 126.9284285,
    "lat": 37.56615693
  },
  {
    "shopName": "역삼아레나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 797-15",
    "roadAddress": "서울특별시 강남구 논현로67길 6",
    "lng": 127.0394093,
    "lat": 37.49437928
  },
  {
    "shopName": "탐앤탐스디엠씨탐스커버리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 증산동 223-13",
    "roadAddress": "서울특별시 은평구 수색로 195",
    "lng": 126.9006607,
    "lat": 37.57856116
  },
  {
    "shopName": "케냐키암부",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 243-61",
    "roadAddress": "서울특별시 용산구 회나무로44길 36",
    "lng": 126.9955896,
    "lat": 37.53983324
  },
  {
    "shopName": "커피빈코리아포스코옆삼성로86길점",
    "branchName": "코리아포스코옆삼성로86길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 942-16",
    "roadAddress": "서울특별시 강남구 삼성로86길 11",
    "lng": 127.0582863,
    "lat": 37.50587557
  },
  {
    "shopName": "도란도란카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 312-250",
    "roadAddress": "서울특별시 강동구 구천면로 395",
    "lng": 127.1428927,
    "lat": 37.55103205
  },
  {
    "shopName": "살레시오수녀회카페마인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 4491",
    "roadAddress": "서울특별시 영등포구 여의대방로 65",
    "lng": 126.9131388,
    "lat": 37.49734877
  },
  {
    "shopName": "썸카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 52-1",
    "roadAddress": "서울특별시 강남구 삼성로 648",
    "lng": 127.0510072,
    "lat": 37.51799958
  },
  {
    "shopName": "이디야커피",
    "branchName": "종로4가점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 인의동 19",
    "roadAddress": "서울특별시 종로구 김상옥로 1",
    "lng": 126.9978773,
    "lat": 37.57349767
  },
  {
    "shopName": "쥬씨",
    "branchName": "동대문종합시장점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 종로5가 3-1",
    "roadAddress": "서울특별시 종로구 종로 255",
    "lng": 127.0061253,
    "lat": 37.57129677
  },
  {
    "shopName": "카페파이드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 93-8",
    "roadAddress": "서울특별시 송파구 양재대로60길 3-12",
    "lng": 127.117253,
    "lat": 37.498726
  },
  {
    "shopName": "컴플렉스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 952-2",
    "roadAddress": "서울특별시 강남구 역삼로 555",
    "lng": 127.063353,
    "lat": 37.50499678
  },
  {
    "shopName": "달보살롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 177-86",
    "roadAddress": "서울특별시 노원구 상계로12길 22",
    "lng": 127.0687126,
    "lat": 37.65691039
  },
  {
    "shopName": "커피빈코리아고대참살이길점",
    "branchName": "코리아고대참살이길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 102-10",
    "roadAddress": "서울특별시 성북구 고려대로24길 25",
    "lng": 127.0295271,
    "lat": 37.58505218
  },
  {
    "shopName": "터미널다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 546-1",
    "roadAddress": "서울특별시 광진구 강변역로 50",
    "lng": 127.0941674,
    "lat": 37.53453044
  },
  {
    "shopName": "카페자작나무",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 296-11",
    "roadAddress": "서울특별시 금천구 가산로 61",
    "lng": 126.8958945,
    "lat": 37.47186041
  },
  {
    "shopName": "공차현대아울렛가산점",
    "branchName": "현대아울렛가산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-8",
    "roadAddress": "서울특별시 금천구 디지털로10길 9",
    "lng": 126.8890376,
    "lat": 37.4776079
  },
  {
    "shopName": "재미난조각가",
    "branchName": "압구정점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 655-2",
    "roadAddress": "서울특별시 강남구 선릉로155길 13-2",
    "lng": 127.0382895,
    "lat": 37.52525831
  },
  {
    "shopName": "착한커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 212-30",
    "roadAddress": "서울특별시 구로구 디지털로 273",
    "lng": 126.8940884,
    "lat": 37.4839446
  },
  {
    "shopName": "까페사이공",
    "branchName": "페사이공",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동3가 58-57",
    "roadAddress": "서울특별시 영등포구 도림로 436",
    "lng": 126.8947686,
    "lat": 37.51451441
  },
  {
    "shopName": "공차고대구로병원점",
    "branchName": "고대구로병원점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 구로동 80",
    "roadAddress": "서울특별시 구로구 구로동로 148",
    "lng": 126.8846634,
    "lat": 37.49120853
  },
  {
    "shopName": "MONSTERSCAFE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "페라커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 54-1",
    "roadAddress": "서울특별시 서대문구 이화여대8길 2",
    "lng": 126.9459439,
    "lat": 37.55863776
  },
  {
    "shopName": "FromtheBean",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 50-3",
    "roadAddress": "서울특별시 송파구 오금로 323",
    "lng": 127.1280092,
    "lat": 37.50253628
  },
  {
    "shopName": "한누리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 681",
    "roadAddress": "서울특별시 강남구 봉은사로 304",
    "lng": 127.0403528,
    "lat": 37.50902009
  },
  {
    "shopName": "공간PC방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 27-2",
    "roadAddress": "서울특별시 마포구 서강대길 12",
    "lng": 126.9398972,
    "lat": 37.54923983
  },
  {
    "shopName": "할리스커피",
    "branchName": "잠실광고회관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 7-11",
    "roadAddress": "서울특별시 송파구 올림픽로35길 137",
    "lng": 127.0995843,
    "lat": 37.51594704
  },
  {
    "shopName": "플렛빈",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 양천구 신월동 509-1",
    "roadAddress": "서울특별시 양천구 오목로 64",
    "lng": 126.8446829,
    "lat": 37.5224508
  },
  {
    "shopName": "카페이유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 461-11",
    "roadAddress": "서울특별시 강동구 고덕로 52-18",
    "lng": 127.1306139,
    "lat": 37.55390675
  },
  {
    "shopName": "쥬씨양재점",
    "branchName": "양재점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 11-86",
    "roadAddress": "서울특별시 서초구 남부순환로356길 24",
    "lng": 127.0378253,
    "lat": 37.48386006
  },
  {
    "shopName": "요요프레쉬티바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 629-15",
    "roadAddress": "서울특별시 강남구 도산대로 235",
    "lng": 127.0326238,
    "lat": 37.52157178
  },
  {
    "shopName": "카페마루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 427-13",
    "roadAddress": "서울특별시 양천구 월정로 61",
    "lng": 126.8411711,
    "lat": 37.52495732
  },
  {
    "shopName": "커피브레이크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 63-8",
    "roadAddress": "서울특별시 마포구 백범로 29",
    "lng": 126.9376949,
    "lat": 37.55211238
  },
  {
    "shopName": "사주&타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 논현동 185",
    "roadAddress": "서울특별시 강남구 강남대로118길 38",
    "lng": 127.0262628,
    "lat": 37.50701256
  },
  {
    "shopName": "산중다원",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 은평구 진관동 303-21",
    "roadAddress": "서울특별시 은평구 의상봉길 31",
    "lng": 126.9423668,
    "lat": 37.65305205
  },
  {
    "shopName": "카페하임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 517",
    "roadAddress": "서울특별시 강동구 양재대로 1384",
    "lng": 127.1373553,
    "lat": 37.52969977
  },
  {
    "shopName": "핸더스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 25-8",
    "roadAddress": "서울특별시 강서구 공항대로 47",
    "lng": 126.8125476,
    "lat": 37.56141706
  },
  {
    "shopName": "스타벅스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 21-7",
    "roadAddress": "서울특별시 서초구 강남대로 595",
    "lng": 127.019521,
    "lat": 37.51485002
  },
  {
    "shopName": "이디야커피",
    "branchName": "화곡중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 24-154",
    "roadAddress": "서울특별시 강서구 까치산로 79",
    "lng": 126.8474012,
    "lat": 37.54576014
  },
  {
    "shopName": "카베하네커피공방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 619-2",
    "roadAddress": "서울특별시 강남구 언주로173길 15",
    "lng": 127.0322478,
    "lat": 37.52791211
  },
  {
    "shopName": "썸주스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 746-1",
    "roadAddress": "서울특별시 강서구 공항대로 140",
    "lng": 126.8231776,
    "lat": 37.55914479
  },
  {
    "shopName": "여름커피로스터즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 170-189",
    "roadAddress": "서울특별시 서대문구 홍제천로 198",
    "lng": 126.934901,
    "lat": 37.57903727
  },
  {
    "shopName": "가회한경헌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 가회동 11-61",
    "roadAddress": "서울특별시 종로구 창덕궁길 170",
    "lng": 126.986561,
    "lat": 37.58319537
  },
  {
    "shopName": "래그랜느에스알티점",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 수서동 201-5",
    "roadAddress": "서울특별시 강남구 밤고개로 99",
    "lng": 127.1045418,
    "lat": 37.48541177
  },
  {
    "shopName": "커피에반하다구로디지털단지점",
    "branchName": "구로디지털단지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 826",
    "roadAddress": "서울특별시 구로구 디지털로26길 110",
    "lng": 126.8976897,
    "lat": 37.48202298
  },
  {
    "shopName": "커피레벨52구로점",
    "branchName": "구로점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 구로동 212-26",
    "roadAddress": "서울특별시 구로구 디지털로27길 36",
    "lng": 126.8925425,
    "lat": 37.48373189
  },
  {
    "shopName": "다향전통차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 화곡동 159-41",
    "roadAddress": "서울특별시 강서구 곰달래로 157",
    "lng": 126.8505372,
    "lat": 37.53093263
  },
  {
    "shopName": "이디야커피",
    "branchName": "중랑역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 130-99",
    "roadAddress": "서울특별시 중랑구 망우로 198",
    "lng": 127.0748505,
    "lat": 37.59331828
  },
  {
    "shopName": "서울프린스호텔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남산동2가 1-1",
    "roadAddress": "서울특별시 중구 퇴계로 130",
    "lng": 126.9862552,
    "lat": 37.5606577
  },
  {
    "shopName": "레미제라블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 36-23",
    "roadAddress": "서울특별시 용산구 녹사평대로26길 24",
    "lng": 126.9916698,
    "lat": 37.53093353
  },
  {
    "shopName": "스터디나우한티역점",
    "branchName": "한티역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 765-8",
    "roadAddress": "서울특별시 강남구 선릉로 309",
    "lng": 127.0521527,
    "lat": 37.49718538
  },
  {
    "shopName": "IBeanCoffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로5가 85-1",
    "roadAddress": "서울특별시 중구 서애로 10-1",
    "lng": 126.9980291,
    "lat": 37.56131686
  },
  {
    "shopName": "커피에반젤린",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 52-4",
    "roadAddress": "서울특별시 양천구 화곡로4길 14",
    "lng": 126.8274793,
    "lat": 37.53814848
  },
  {
    "shopName": "아방가르드갤러리카페",
    "branchName": "에이치디큐브씨티점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 신도림동 692",
    "roadAddress": "서울특별시 구로구 경인로 662",
    "lng": 126.8884846,
    "lat": 37.50805804
  },
  {
    "shopName": "커피브론즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 안국동 113",
    "roadAddress": "서울특별시 종로구 율곡로5길 20",
    "lng": 126.9848325,
    "lat": 37.57708048
  },
  {
    "shopName": "생두",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 40-7",
    "roadAddress": "서울특별시 은평구 진흥로5길 15",
    "lng": 126.9193445,
    "lat": 37.60258404
  },
  {
    "shopName": "더로비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 670-1",
    "roadAddress": "서울특별시 도봉구 방학로 171-5",
    "lng": 127.0332522,
    "lat": 37.66202228
  },
  {
    "shopName": "카페희원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 경운동 1-9",
    "roadAddress": "서울특별시 종로구 삼일대로32길 22-4",
    "lng": 126.9881074,
    "lat": 37.57518037
  },
  {
    "shopName": "그립지카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 금호동1가 1794",
    "roadAddress": "서울특별시 성동구 독서당로51길 15",
    "lng": 127.0264353,
    "lat": 37.54945347
  },
  {
    "shopName": "키다리아저씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 석관동 268-5",
    "roadAddress": "서울특별시 성북구 돌곶이로 49",
    "lng": 127.0593747,
    "lat": 37.60830643
  },
  {
    "shopName": "탐앤탐스한성대점",
    "branchName": "한성대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동소문동3가 63",
    "roadAddress": "서울특별시 성북구 동소문로 48",
    "lng": 127.0109903,
    "lat": 37.59033159
  },
  {
    "shopName": "CafeB",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 403-17",
    "roadAddress": "서울특별시 은평구 통일로83길 5-18",
    "lng": 126.9185858,
    "lat": 37.62057067
  },
  {
    "shopName": "공차",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1073",
    "roadAddress": "서울특별시 강서구 화곡로 132",
    "lng": 126.8365547,
    "lat": 37.54029261
  },
  {
    "shopName": "티라레미수성수에스팩토리점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 273-13",
    "roadAddress": "서울특별시 성동구 연무장15길 11",
    "lng": 127.0588855,
    "lat": 37.54281453
  },
  {
    "shopName": "티에리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 772-5",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 45",
    "lng": 126.8322901,
    "lat": 37.56051473
  },
  {
    "shopName": "카페드블록",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 장충동2가 173-2",
    "roadAddress": "서울특별시 중구 퇴계로 272",
    "lng": 127.001937,
    "lat": 37.56280064
  },
  {
    "shopName": "카페오로미아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 개포동 170",
    "roadAddress": "서울특별시 강남구 선릉로12길 5",
    "lng": 127.0602953,
    "lat": 37.48364445
  },
  {
    "shopName": "커피베이",
    "branchName": "이마트가양점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 가양동 449-19",
    "roadAddress": "서울특별시 강서구 양천로 559",
    "lng": 126.8617991,
    "lat": 37.55818091
  },
  {
    "shopName": "도통사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중구 명동2가 53-18",
    "roadAddress": "서울특별시 중구 명동4길 39",
    "lng": 126.9840873,
    "lat": 37.56193657
  },
  {
    "shopName": "비틀주스가산디지털단지점",
    "branchName": "가산디지털단지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-11",
    "roadAddress": "서울특별시 금천구 디지털로9길 99",
    "lng": 126.884794,
    "lat": 37.48166769
  },
  {
    "shopName": "보드놀이터",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 서교동 358-151",
    "roadAddress": "서울특별시 마포구 홍익로 9-1",
    "lng": 126.9233483,
    "lat": 37.55341508
  },
  {
    "shopName": "디초콜릿커피",
    "branchName": "왕십리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 1-41",
    "roadAddress": "서울특별시 성동구 마조로11길 13",
    "lng": 127.0399265,
    "lat": 37.56170105
  },
  {
    "shopName": "공차",
    "branchName": "중계NC",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 509",
    "roadAddress": "서울특별시 노원구 동일로204가길 46",
    "lng": 127.067888,
    "lat": 37.64127992
  },
  {
    "shopName": "우리다방커피맥주",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 615-37",
    "roadAddress": "서울특별시 도봉구 시루봉로27길 33",
    "lng": 127.0425897,
    "lat": 37.67275763
  },
  {
    "shopName": "잇커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 57-48",
    "roadAddress": "서울특별시 동작구 동작대로35가길 94",
    "lng": 126.977373,
    "lat": 37.49247994
  },
  {
    "shopName": "초이락컨텐츠팩토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 온수동 11-1",
    "roadAddress": "서울특별시 구로구 부일로 869",
    "lng": 126.823618,
    "lat": 37.49293209
  },
  {
    "shopName": "카페올",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 125-2",
    "roadAddress": "서울특별시 광진구 긴고랑로 108",
    "lng": 127.0870628,
    "lat": 37.55949794
  },
  {
    "shopName": "비온후",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 흑석동 10",
    "roadAddress": "서울특별시 동작구 현충로 119",
    "lng": 126.9660368,
    "lat": 37.50761803
  },
  {
    "shopName": "쁘띠아르브르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 용답동 159-1",
    "roadAddress": "서울특별시 성동구 용답중앙길 42",
    "lng": 127.0508517,
    "lat": 37.5650782
  },
  {
    "shopName": "카페본스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 660-2",
    "roadAddress": "서울특별시 도봉구 도당로15길 6",
    "lng": 127.0369417,
    "lat": 37.66595392
  },
  {
    "shopName": "이디야커피",
    "branchName": "북가좌동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 북가좌동 329-35",
    "roadAddress": "서울특별시 서대문구 증가로 257",
    "lng": 126.9115148,
    "lat": 37.58343723
  },
  {
    "shopName": "아몬드블루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 흑석동 43-9",
    "roadAddress": "서울특별시 동작구 서달로14길 46",
    "lng": 126.9653977,
    "lat": 37.50721598
  },
  {
    "shopName": "이디야커피",
    "branchName": "역삼역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 643-10",
    "roadAddress": "서울특별시 강남구 테헤란로25길 17",
    "lng": 127.0352202,
    "lat": 37.50178786
  },
  {
    "shopName": "이디야커피",
    "branchName": "역촌사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 89-280",
    "roadAddress": "서울특별시 은평구 서오릉로 100",
    "lng": 126.9208838,
    "lat": 37.60892337
  },
  {
    "shopName": "힐링",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 잠실동 189-12",
    "roadAddress": "서울특별시 송파구 백제고분로7길 32",
    "lng": 127.0823638,
    "lat": 37.51069651
  },
  {
    "shopName": "타로카페드뷔시산장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 20-17",
    "roadAddress": "서울특별시 성동구 마조로1길 2",
    "lng": 127.0402863,
    "lat": 37.55836109
  },
  {
    "shopName": "커피콩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1009-7",
    "roadAddress": "서울특별시 양천구 목동로9길 1",
    "lng": 126.8643604,
    "lat": 37.52289395
  },
  {
    "shopName": "라떼곰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 중화동 308-31",
    "roadAddress": "서울특별시 중랑구 동일로139길 36",
    "lng": 127.0769455,
    "lat": 37.60339032
  },
  {
    "shopName": "베스킨라빈스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 652",
    "roadAddress": "서울특별시 노원구 동일로227길 25",
    "lng": 127.0562209,
    "lat": 37.66693871
  },
  {
    "shopName": "도기커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 17-415",
    "roadAddress": "서울특별시 중구 장충단로13길 34",
    "lng": 127.006897,
    "lat": 37.56860014
  },
  {
    "shopName": "커피가맛있는집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 315-37",
    "roadAddress": "서울특별시 동작구 성대로2길 11",
    "lng": 126.931389,
    "lat": 37.49911914
  },
  {
    "shopName": "해현당",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강서구 등촌동 667-14",
    "roadAddress": "서울특별시 강서구 강서로54길 97",
    "lng": 126.843998,
    "lat": 37.55875581
  },
  {
    "shopName": "카구야타로상점",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 가락동 148-4",
    "roadAddress": "서울특별시 송파구 중대로16길 9-1",
    "lng": 127.1260025,
    "lat": 37.49615996
  },
  {
    "shopName": "모로티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 837-26",
    "roadAddress": "서울특별시 강남구 도곡로1길 14",
    "lng": 127.0322935,
    "lat": 37.4910774
  },
  {
    "shopName": "아바카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 개포동 1163-8",
    "roadAddress": "서울특별시 강남구 양재대로 333",
    "lng": 127.0510024,
    "lat": 37.47190145
  },
  {
    "shopName": "디저트39",
    "branchName": "서울대입구역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1612-10",
    "roadAddress": "서울특별시 관악구 봉천로 524",
    "lng": 126.9559375,
    "lat": 37.47911006
  },
  {
    "shopName": "오가다",
    "branchName": "대한무역투자진흥공사점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 염곡동 300-6",
    "roadAddress": "서울특별시 서초구 헌릉로 7",
    "lng": 127.0440412,
    "lat": 37.46545682
  },
  {
    "shopName": "커피애드립",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 281-19",
    "roadAddress": "서울특별시 동대문구 망우로12가길 2",
    "lng": 127.0592621,
    "lat": 37.58847359
  },
  {
    "shopName": "노맨틱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 후암동 255-14",
    "roadAddress": "서울특별시 용산구 두텁바위로 59-1",
    "lng": 126.9788813,
    "lat": 37.5461234
  },
  {
    "shopName": "무너미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 222-78",
    "roadAddress": "서울특별시 강북구 노해로8가길 40",
    "lng": 127.0235807,
    "lat": 37.63978624
  },
  {
    "shopName": "하우스터디",
    "branchName": "둔촌스터디카페",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 417-2",
    "roadAddress": "서울특별시 강동구 풍성로 204",
    "lng": 127.1343523,
    "lat": 37.52913716
  },
  {
    "shopName": "번트오렌지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 360-1",
    "roadAddress": "서울특별시 마포구 독막로6길 27",
    "lng": 126.9171866,
    "lat": 37.54671807
  },
  {
    "shopName": "고망고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 8-22",
    "roadAddress": "서울특별시 광진구 아차산로30길 8",
    "lng": 127.0675951,
    "lat": 37.54039672
  },
  {
    "shopName": "브라운래빗",
    "branchName": "대치1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 989",
    "roadAddress": "서울특별시 강남구 삼성로 238",
    "lng": 127.0613856,
    "lat": 37.49862871
  },
  {
    "shopName": "베러댄알콜",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 399-44",
    "roadAddress": "서울특별시 마포구 희우정로16길 50",
    "lng": 126.9047003,
    "lat": 37.55473928
  },
  {
    "shopName": "메가커피",
    "branchName": "가재울뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 남가좌동 385",
    "roadAddress": "서울특별시 서대문구 가재울미래로 2",
    "lng": 126.9178279,
    "lat": 37.57436779
  },
  {
    "shopName": "블랙티드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 154-5",
    "roadAddress": "서울특별시 마포구 양화로21길 15",
    "lng": 126.9249671,
    "lat": 37.55890815
  },
  {
    "shopName": "서울에서첫번째전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 종로1가 24",
    "roadAddress": "서울특별시 종로구 종로 19",
    "lng": 126.9799024,
    "lat": 37.57083882
  },
  {
    "shopName": "헤븐온탑에맥앤볼리오스",
    "branchName": "DDP점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로7가 2-1",
    "roadAddress": "서울특별시 중구 을지로 281",
    "lng": 127.0108895,
    "lat": 37.56800293
  },
  {
    "shopName": "만옥당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 45-4",
    "roadAddress": "서울특별시 송파구 백제고분로45길 9",
    "lng": 127.1101833,
    "lat": 37.50931448
  },
  {
    "shopName": "서울이스케이프룸",
    "branchName": "홍대1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 325-26",
    "roadAddress": "서울특별시 마포구 와우산로 156",
    "lng": 126.93039,
    "lat": 37.55484866
  },
  {
    "shopName": "오뚜기상조회오뚜기센터점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 1009-1",
    "roadAddress": "서울특별시 강남구 영동대로 308",
    "lng": 127.0676418,
    "lat": 37.50209326
  },
  {
    "shopName": "고양이정원",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 개화동 559-49",
    "roadAddress": "서울특별시 강서구 개화동로19길 18",
    "lng": 126.8031511,
    "lat": 37.57569356
  },
  {
    "shopName": "서울창업카페",
    "branchName": "상봉점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 125-8",
    "roadAddress": "서울특별시 중랑구 봉우재로 93-5",
    "lng": 127.083241,
    "lat": 37.59241963
  },
  {
    "shopName": "랑데자뷰",
    "branchName": "석촌호수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 130-1",
    "roadAddress": "서울특별시 송파구 석촌호수로 174",
    "lng": 127.0962822,
    "lat": 37.50648775
  },
  {
    "shopName": "비마이디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 684-97",
    "roadAddress": "서울특별시 용산구 대사관로5길 14",
    "lng": 127.0008488,
    "lat": 37.53494012
  },
  {
    "shopName": "디폴트벨류",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 192-17",
    "roadAddress": "서울특별시 서대문구 성산로 333",
    "lng": 126.9273303,
    "lat": 37.56617399
  },
  {
    "shopName": "시작스터디카페",
    "branchName": "상일동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 192",
    "roadAddress": "서울특별시 강동구 구천면로 656",
    "lng": 127.1707718,
    "lat": 37.55063643
  },
  {
    "shopName": "스타벅스",
    "branchName": "마포용강동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 용강동 112-2",
    "roadAddress": "서울특별시 마포구 토정로 295",
    "lng": 126.9422063,
    "lat": 37.54119622
  },
  {
    "shopName": "그릭데이",
    "branchName": "홍대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 486",
    "roadAddress": "서울특별시 마포구 홍익로 10",
    "lng": 126.9237401,
    "lat": 37.553716
  },
  {
    "shopName": "두레차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 서교동 346-29",
    "roadAddress": "서울특별시 마포구 홍익로2길 27",
    "lng": 126.9239732,
    "lat": 37.5548264
  },
  {
    "shopName": "아키비스트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 효자동 164-7",
    "roadAddress": "서울특별시 종로구 효자로13길 52",
    "lng": 126.9726597,
    "lat": 37.5822102
  },
  {
    "shopName": "유목커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동1가 85-151",
    "roadAddress": "서울특별시 성북구 동소문로24길 47",
    "lng": 127.0187413,
    "lat": 37.59161269
  },
  {
    "shopName": "오거트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 13-307",
    "roadAddress": "서울특별시 성동구 상원6나길 10",
    "lng": 127.0493996,
    "lat": 37.54840614
  },
  {
    "shopName": "리에주커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 45-16",
    "roadAddress": "서울특별시 광진구 군자로 160-1",
    "lng": 127.0768724,
    "lat": 37.55520179
  },
  {
    "shopName": "스타벅스마포일진빌딩점",
    "branchName": "마포일진빌딩점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 50-1",
    "roadAddress": "서울특별시 마포구 마포대로 45",
    "lng": 126.9463581,
    "lat": 37.54046745
  },
  {
    "shopName": "다들림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 657-49",
    "roadAddress": "서울특별시 도봉구 도봉로114길 49",
    "lng": 127.0370197,
    "lat": 37.64762757
  },
  {
    "shopName": "이디야커피",
    "branchName": "고척사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 195-13",
    "roadAddress": "서울특별시 구로구 고척로 228-6",
    "lng": 126.8582294,
    "lat": 37.50577815
  },
  {
    "shopName": "테누커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 241-88",
    "roadAddress": "서울특별시 마포구 성미산로29안길 19-4",
    "lng": 126.9233205,
    "lat": 37.56557885
  },
  {
    "shopName": "톤톤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 140-2",
    "roadAddress": "서울특별시 동대문구 답십리로63길 11",
    "lng": 127.0679329,
    "lat": 37.57324263
  },
  {
    "shopName": "엘레멘터리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 163",
    "roadAddress": "서울특별시 송파구 백제고분로32길 6-33",
    "lng": 127.0937955,
    "lat": 37.50167506
  },
  {
    "shopName": "충무공",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 43-1",
    "roadAddress": "서울특별시 송파구 백제고분로45길 11",
    "lng": 127.1099672,
    "lat": 37.50941197
  },
  {
    "shopName": "폴바셋",
    "branchName": "신세계백화점영등포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동4가 442",
    "roadAddress": "서울특별시 영등포구 영중로 15",
    "lng": 126.9039142,
    "lat": 37.51721267
  },
  {
    "shopName": "요레스트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 228-23",
    "roadAddress": "서울특별시 마포구 동교로 262",
    "lng": 126.925237,
    "lat": 37.56296528
  },
  {
    "shopName": "빽다방",
    "branchName": "신촌역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 18-46",
    "roadAddress": "서울특별시 서대문구 연세로2길 6",
    "lng": 126.9371323,
    "lat": 37.55586466
  },
  {
    "shopName": "설빙",
    "branchName": "광운대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 465-21",
    "roadAddress": "서울특별시 노원구 광운로 25",
    "lng": 127.0581958,
    "lat": 37.62006461
  },
  {
    "shopName": "팥시샘달",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동2가 50-6",
    "roadAddress": "서울특별시 중구 명동8길 2",
    "lng": 126.9844054,
    "lat": 37.56351613
  },
  {
    "shopName": "일룸",
    "branchName": "마포서대문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 87-5",
    "roadAddress": "서울특별시 서대문구 연희로 148",
    "lng": 126.9344372,
    "lat": 37.57026599
  },
  {
    "shopName": "카페설기",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 풍납동 265-2",
    "roadAddress": "서울특별시 송파구 토성로 44",
    "lng": 127.1148744,
    "lat": 37.52967759
  },
  {
    "shopName": "카페라티스",
    "branchName": "라티스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 우이동 71-12",
    "roadAddress": "서울특별시 강북구 삼양로141길 4-10",
    "lng": 127.0126371,
    "lat": 37.65077785
  },
  {
    "shopName": "메종드제니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 수색동 296-26",
    "roadAddress": "서울특별시 은평구 수색로 390-9",
    "lng": 126.8845475,
    "lat": 37.59014143
  },
  {
    "shopName": "에고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 394-77",
    "roadAddress": "서울특별시 마포구 양화로8길 32-17",
    "lng": 126.9155973,
    "lat": 37.54940661
  },
  {
    "shopName": "그리네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 64-1",
    "roadAddress": "서울특별시 광진구 군자로 137",
    "lng": 127.0746097,
    "lat": 37.55421996
  },
  {
    "shopName": "카페에일린",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 708-2",
    "roadAddress": "서울특별시 도봉구 방학로 76",
    "lng": 127.0437626,
    "lat": 37.66350455
  },
  {
    "shopName": "티팔레트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1548-13",
    "roadAddress": "서울특별시 서초구 반포대로22길 29",
    "lng": 127.0104334,
    "lat": 37.48946364
  },
  {
    "shopName": "커피스니퍼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 북창동 11-3",
    "roadAddress": "서울특별시 중구 세종대로16길 27",
    "lng": 126.9784195,
    "lat": 37.56337438
  },
  {
    "shopName": "라뚜셩트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 368-34",
    "roadAddress": "서울특별시 마포구 잔다리로 30-32",
    "lng": 126.9200988,
    "lat": 37.55194374
  },
  {
    "shopName": "무궁화로스터즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 657-88",
    "roadAddress": "서울특별시 도봉구 도봉로112길 23",
    "lng": 127.0360203,
    "lat": 37.64692561
  },
  {
    "shopName": "트리플에이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 638-13",
    "roadAddress": "서울특별시 강남구 테헤란로19길 30",
    "lng": 127.033012,
    "lat": 37.50200408
  },
  {
    "shopName": "카페유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 오류동 108-1",
    "roadAddress": "서울특별시 구로구 경인로 20",
    "lng": 126.8255572,
    "lat": 37.48896878
  },
  {
    "shopName": "라이트니스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 240-64",
    "roadAddress": "서울특별시 마포구 성미산로 151-1",
    "lng": 126.9232002,
    "lat": 37.5644965
  },
  {
    "shopName": "아분드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 32-23",
    "roadAddress": "서울특별시 용산구 한남대로20길 47-18",
    "lng": 127.0102368,
    "lat": 37.53519037
  },
  {
    "shopName": "하프커피",
    "branchName": "강남점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 118-3",
    "roadAddress": "서울특별시 서초구 사평대로 205",
    "lng": 127.0078261,
    "lat": 37.50448036
  },
  {
    "shopName": "루시카토",
    "branchName": "용산아이파크몰점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-999",
    "roadAddress": "서울특별시 용산구 한강대로21나길 7",
    "lng": 126.9632226,
    "lat": 37.52790298
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "신촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 31-40",
    "roadAddress": "서울특별시 서대문구 연세로5가길 8-6",
    "lng": 126.9364187,
    "lat": 37.55749812
  },
  {
    "shopName": "코레일유통대방카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 345-1",
    "roadAddress": "서울특별시 동작구 여의대방로54길 18",
    "lng": 126.927207,
    "lat": 37.51159677
  },
  {
    "shopName": "커피사피엔스",
    "branchName": "성수현대테라스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 314-13",
    "roadAddress": "서울특별시 성동구 연무장5가길 7",
    "lng": 127.0536528,
    "lat": 37.54407923
  },
  {
    "shopName": "이유유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 67-44",
    "roadAddress": "서울특별시 중구 퇴계로88길 47",
    "lng": 127.0203224,
    "lat": 37.56341417
  },
  {
    "shopName": "더조커",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 366-24",
    "roadAddress": "서울특별시 마포구 잔다리로2길 19",
    "lng": 126.9209734,
    "lat": 37.55172648
  },
  {
    "shopName": "마치마치",
    "branchName": "가로수길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 517-29",
    "roadAddress": "서울특별시 강남구 도산대로11길 25",
    "lng": 127.022293,
    "lat": 37.51913497
  },
  {
    "shopName": "루터커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 옥천동 103",
    "roadAddress": "서울특별시 서대문구 독립문로 26",
    "lng": 126.9608775,
    "lat": 37.56970878
  },
  {
    "shopName": "달쿵이네",
    "branchName": "거여점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 178-18",
    "roadAddress": "서울특별시 송파구 거마로 25",
    "lng": 127.1450898,
    "lat": 37.49538055
  },
  {
    "shopName": "앤트러사이트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 683-142",
    "roadAddress": "서울특별시 용산구 이태원로 240",
    "lng": 127.0001431,
    "lat": 37.53609649
  },
  {
    "shopName": "카페시크릿가든",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 와룡동 71",
    "roadAddress": "서울특별시 종로구 돈화문로 68-1",
    "lng": 126.9910817,
    "lat": 37.5745751
  },
  {
    "shopName": "카페클라츠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 402-42",
    "roadAddress": "서울특별시 은평구 연서로29길 22-38",
    "lng": 126.9179822,
    "lat": 37.62001551
  },
  {
    "shopName": "파브커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 506-29",
    "roadAddress": "서울특별시 노원구 동일로186길 76",
    "lng": 127.0771497,
    "lat": 37.6253593
  },
  {
    "shopName": "성수빈티지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 668-136",
    "roadAddress": "서울특별시 성동구 서울숲2길 44-13",
    "lng": 127.0432839,
    "lat": 37.54610413
  },
  {
    "shopName": "빌즈광화문",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 청진동 246",
    "roadAddress": "서울특별시 종로구 종로3길 17",
    "lng": 126.9788929,
    "lat": 37.57098327
  },
  {
    "shopName": "언톨드스위츠",
    "branchName": "명동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동2가 85-5",
    "roadAddress": "서울특별시 중구 남대문로 68-1",
    "lng": 126.9822587,
    "lat": 37.56322733
  },
  {
    "shopName": "나른한순간IDLEMOME",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 467-2",
    "roadAddress": "서울특별시 마포구 잔다리로 93",
    "lng": 126.9151475,
    "lat": 37.55545745
  },
  {
    "shopName": "오가다문화일보점",
    "branchName": "문화일보점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 충정로1가 68",
    "roadAddress": "서울특별시 중구 새문안로 22",
    "lng": 126.9686221,
    "lat": 37.56711862
  },
  {
    "shopName": "가온길",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1575-3",
    "roadAddress": "서울특별시 관악구 남부순환로156길 17",
    "lng": 126.9204521,
    "lat": 37.48189076
  },
  {
    "shopName": "더카페",
    "branchName": "방이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 23-3",
    "roadAddress": "서울특별시 송파구 마천로 79",
    "lng": 127.1291737,
    "lat": 37.50743763
  },
  {
    "shopName": "스타벅스",
    "branchName": "구로NC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 573",
    "roadAddress": "서울특별시 구로구 구로중앙로 146-1",
    "lng": 126.882759,
    "lat": 37.50063348
  },
  {
    "shopName": "카페마에스트로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 233-178",
    "roadAddress": "서울특별시 성북구 장위로24길 25-3",
    "lng": 127.044878,
    "lat": 37.61269519
  },
  {
    "shopName": "카페코보스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 13-12",
    "roadAddress": "서울특별시 영등포구 국회대로72길 9",
    "lng": 126.9205942,
    "lat": 37.53014308
  },
  {
    "shopName": "스타벅스역삼럭키",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 798-30",
    "roadAddress": "서울특별시 강남구 도곡로 183",
    "lng": 127.0393917,
    "lat": 37.49222561
  },
  {
    "shopName": "빌리엔젤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1498-5",
    "roadAddress": "서울특별시 서초구 서초대로38길 12",
    "lng": 127.0053652,
    "lat": 37.49048432
  },
  {
    "shopName": "더커피샵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 신설동 102-4",
    "roadAddress": "서울특별시 동대문구 왕산로2길 34",
    "lng": 127.0259909,
    "lat": 37.57489533
  },
  {
    "shopName": "까페T43",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 141-7",
    "roadAddress": "서울특별시 노원구 한글비석로20길 43",
    "lng": 127.074146,
    "lat": 37.66109792
  },
  {
    "shopName": "꿀카롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 774-4",
    "roadAddress": "서울특별시 강서구 공항대로 227",
    "lng": 126.8326667,
    "lat": 37.55959039
  },
  {
    "shopName": "요거트맨",
    "branchName": "강남구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 5-1",
    "roadAddress": "서울특별시 강남구 선릉로130길 56",
    "lng": 127.0462877,
    "lat": 37.51728577
  },
  {
    "shopName": "더베네푸드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 771-7",
    "roadAddress": "서울특별시 강남구 역삼로 246",
    "lng": 127.0431458,
    "lat": 37.4975633
  },
  {
    "shopName": "산다미아노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 정동 17-1",
    "roadAddress": "서울특별시 중구 정동길 9",
    "lng": 126.9702085,
    "lat": 37.56782627
  },
  {
    "shopName": "노빈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 18-49",
    "roadAddress": "서울특별시 서대문구 연세로 2",
    "lng": 126.9370317,
    "lat": 37.55577365
  },
  {
    "shopName": "이디야커피",
    "branchName": "학동역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 89-22",
    "roadAddress": "서울특별시 강남구 학동로 219",
    "lng": 127.0331047,
    "lat": 37.51498903
  },
  {
    "shopName": "오쉐이크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동6가 29-1",
    "roadAddress": "서울특별시 영등포구 양평로28사길 21",
    "lng": 126.8901866,
    "lat": 37.54358406
  },
  {
    "shopName": "커피니",
    "branchName": "도곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 467-23",
    "roadAddress": "서울특별시 강남구 언주로 120",
    "lng": 127.0512556,
    "lat": 37.48675294
  },
  {
    "shopName": "더쌍화",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 대치동 507-2",
    "roadAddress": "서울특별시 강남구 삼성로 155",
    "lng": 127.0629032,
    "lat": 37.49392823
  },
  {
    "shopName": "로맨틱타임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1511-13",
    "roadAddress": "서울특별시 서초구 반포대로21길 34",
    "lng": 127.0080422,
    "lat": 37.48729006
  },
  {
    "shopName": "29-77카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 29-77",
    "roadAddress": "서울특별시 광진구 능동로 430",
    "lng": 127.0852361,
    "lat": 37.56725986
  },
  {
    "shopName": "까페봉주르마담",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 궁동 279",
    "roadAddress": "서울특별시 구로구 오리로 1316",
    "lng": 126.8293389,
    "lat": 37.49880063
  },
  {
    "shopName": "미스터빈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 17-1",
    "roadAddress": "서울특별시 성북구 화랑로 103",
    "lng": 127.0430338,
    "lat": 37.60369688
  },
  {
    "shopName": "후니드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 470-9",
    "roadAddress": "서울특별시 동작구 여의대방로 74",
    "lng": 126.9144757,
    "lat": 37.49639694
  },
  {
    "shopName": "NINEoCLOCK",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1075-1",
    "roadAddress": "서울특별시 강서구 화곡로 166",
    "lng": 126.8400583,
    "lat": 37.54129118
  },
  {
    "shopName": "애드리안윤카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 청진동 246",
    "roadAddress": "서울특별시 종로구 종로3길 17",
    "lng": 126.9788929,
    "lat": 37.57098327
  },
  {
    "shopName": "먼셀커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 377-3",
    "roadAddress": "서울특별시 동대문구 장한로13길 11-4",
    "lng": 127.0668028,
    "lat": 37.56672814
  },
  {
    "shopName": "애견카페히릿",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 화양동 111-72",
    "roadAddress": "서울특별시 광진구 광나루로 404",
    "lng": 127.0743938,
    "lat": 37.54696481
  },
  {
    "shopName": "이십사케이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동2가 161-11",
    "roadAddress": "서울특별시 영등포구 양산로 90-5",
    "lng": 126.8930415,
    "lat": 37.52422949
  },
  {
    "shopName": "묠니르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 사직동 240",
    "roadAddress": "서울특별시 종로구 사직로 64-1",
    "lng": 126.9667384,
    "lat": 37.57401313
  },
  {
    "shopName": "스타벅스",
    "branchName": "서초중앙로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 52-6",
    "roadAddress": "서울특별시 서초구 서초중앙로 225",
    "lng": 127.0115392,
    "lat": 37.50165515
  },
  {
    "shopName": "아워홈서울의료원점업타운",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 316",
    "roadAddress": "서울특별시 중랑구 신내로 156",
    "lng": 127.0991733,
    "lat": 37.61308611
  },
  {
    "shopName": "블록원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 805-10",
    "roadAddress": "서울특별시 양천구 목동중앙서로6길 20-19",
    "lng": 126.8647501,
    "lat": 37.53152064
  },
  {
    "shopName": "스타벅스",
    "branchName": "상명아트홀점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 동숭동 1-38",
    "roadAddress": "서울특별시 종로구 동숭길 133",
    "lng": 127.0027155,
    "lat": 37.58336
  },
  {
    "shopName": "메가엠지씨커피천왕",
    "branchName": "이펜하우스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 천왕동 273",
    "roadAddress": "서울특별시 구로구 천왕로 29",
    "lng": 126.8384717,
    "lat": 37.48086995
  },
  {
    "shopName": "스콘카페안나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 266-405",
    "roadAddress": "서울특별시 성북구 서경로 106-2",
    "lng": 127.013556,
    "lat": 37.61213117
  },
  {
    "shopName": "팔공커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1110-6",
    "roadAddress": "서울특별시 금천구 금하로1마길 21-6",
    "lng": 126.8897256,
    "lat": 37.45325899
  },
  {
    "shopName": "1리터커피공방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 707-34",
    "roadAddress": "서울특별시 강남구 테헤란로 322",
    "lng": 127.0465683,
    "lat": 37.50323158
  },
  {
    "shopName": "니드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 효창동 5-34",
    "roadAddress": "서울특별시 용산구 효창원로69길 6",
    "lng": 126.9618107,
    "lat": 37.54161349
  },
  {
    "shopName": "언니가숨겨놓은과자상자",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 464-12",
    "roadAddress": "서울특별시 서초구 방배천로8길 36",
    "lng": 126.9846382,
    "lat": 37.48039641
  },
  {
    "shopName": "스트라다",
    "branchName": "을지로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로3가 5-33",
    "roadAddress": "서울특별시 중구 충무로9길 37",
    "lng": 126.9903956,
    "lat": 37.56669413
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "상계보람점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 456-136",
    "roadAddress": "서울특별시 노원구 한글비석로 464",
    "lng": 127.066566,
    "lat": 37.66451616
  },
  {
    "shopName": "타이거슈가건대",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 5-5",
    "roadAddress": "서울특별시 광진구 능동로 123",
    "lng": 127.0712978,
    "lat": 37.54202076
  },
  {
    "shopName": "커피베이",
    "branchName": "낙성대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1688-114",
    "roadAddress": "서울특별시 관악구 남부순환로247길 3",
    "lng": 126.9659227,
    "lat": 37.47652174
  },
  {
    "shopName": "카페",
    "branchName": "시루뫼북",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 증산동 187-19",
    "roadAddress": "서울특별시 은평구 증산서길 89",
    "lng": 126.9070067,
    "lat": 37.58434166
  },
  {
    "shopName": "빡빡이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 371-28",
    "roadAddress": "서울특별시 금천구 가산디지털1로 168",
    "lng": 126.882626,
    "lat": 37.47995323
  },
  {
    "shopName": "포비브라이트",
    "branchName": "광화문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 신문로1가 115",
    "roadAddress": "서울특별시 종로구 새문안로 76",
    "lng": 126.9731586,
    "lat": 37.56978921
  },
  {
    "shopName": "커피에반하다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 48-21",
    "roadAddress": "서울특별시 광진구 동일로22길 50",
    "lng": 127.0669565,
    "lat": 37.5416982
  },
  {
    "shopName": "체리피카",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 321-70",
    "roadAddress": "서울특별시 성동구 성수이로7가길 13",
    "lng": 127.0550441,
    "lat": 37.54144128
  },
  {
    "shopName": "카페in중독",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 614",
    "roadAddress": "서울특별시 중랑구 봉화산로53길 19",
    "lng": 127.0969509,
    "lat": 37.60859995
  },
  {
    "shopName": "아워홈카페클라시코",
    "branchName": "트윈점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 20",
    "roadAddress": "서울특별시 영등포구 여의대로 128",
    "lng": 126.9292801,
    "lat": 37.52799658
  },
  {
    "shopName": "오도씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 98-4",
    "roadAddress": "서울특별시 중랑구 면목로76길 35",
    "lng": 127.0899149,
    "lat": 37.59020965
  },
  {
    "shopName": "카페",
    "branchName": "미라클",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 706-5",
    "roadAddress": "서울특별시 영등포구 도림로 152-4",
    "lng": 126.8988318,
    "lat": 37.49356703
  },
  {
    "shopName": "설빙",
    "branchName": "롯데월드어드벤처점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 40-1",
    "roadAddress": "서울특별시 송파구 송파대로 521",
    "lng": 127.0981244,
    "lat": 37.51130447
  },
  {
    "shopName": "카페진",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 933",
    "roadAddress": "서울특별시 양천구 목동동로12길 45",
    "lng": 126.8763455,
    "lat": 37.52257609
  },
  {
    "shopName": "퍼피커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 홍익동 406",
    "roadAddress": "서울특별시 성동구 무학로 24-1",
    "lng": 127.0302785,
    "lat": 37.56639774
  },
  {
    "shopName": "매머드익스프레스마곡그랑",
    "branchName": "트윈타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 799-9",
    "roadAddress": "서울특별시 강서구 마곡중앙4로 18",
    "lng": 126.8285976,
    "lat": 37.5585139
  },
  {
    "shopName": "이디야당산",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동5가 11-33",
    "roadAddress": "서울특별시 영등포구 당산로 222",
    "lng": 126.9021984,
    "lat": 37.53318121
  },
  {
    "shopName": "카페푸릇",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1015-4",
    "roadAddress": "서울특별시 강서구 화곡로13길 119",
    "lng": 126.8335753,
    "lat": 37.5448675
  },
  {
    "shopName": "까페사이시옷",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 181-19",
    "roadAddress": "서울특별시 성북구 서경로2길 21",
    "lng": 127.0155857,
    "lat": 37.60508398
  },
  {
    "shopName": "정지애",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 183-10",
    "roadAddress": "서울특별시 강남구 강남대로118길 28",
    "lng": 127.0256547,
    "lat": 37.50680932
  },
  {
    "shopName": "세라젬웰카페위례",
    "branchName": "중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 장지동 894",
    "roadAddress": "서울특별시 송파구 위례광장로 136",
    "lng": 127.1424359,
    "lat": 37.47724991
  },
  {
    "shopName": "하늘연달",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 149-4",
    "roadAddress": "서울특별시 송파구 성내천로12길 5",
    "lng": 127.1377134,
    "lat": 37.5005531
  },
  {
    "shopName": "공원커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 122-13",
    "roadAddress": "서울특별시 중구 다산로42나길 8",
    "lng": 127.0184798,
    "lat": 37.56409267
  },
  {
    "shopName": "블루포트",
    "branchName": "본점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 114",
    "roadAddress": "서울특별시 광진구 아차산로78길 44",
    "lng": 127.1098834,
    "lat": 37.55074277
  },
  {
    "shopName": "벙커",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 530-2",
    "roadAddress": "서울특별시 관악구 난곡로 327-1",
    "lng": 126.9139419,
    "lat": 37.48328179
  },
  {
    "shopName": "에스핀커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 973-6",
    "roadAddress": "서울특별시 금천구 독산로 325",
    "lng": 126.903331,
    "lat": 37.47588527
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "천호공원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 332-2",
    "roadAddress": "서울특별시 강동구 올림픽로 715",
    "lng": 127.1254972,
    "lat": 37.54528192
  },
  {
    "shopName": "판다슈가",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 251-62",
    "roadAddress": "서울특별시 중구 퇴계로73길 35",
    "lng": 127.013713,
    "lat": 37.5667741
  },
  {
    "shopName": "커피온리&마리웨일&망원동티라미슈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 27",
    "roadAddress": "서울특별시 송파구 송파대로 567",
    "lng": 127.0930348,
    "lat": 37.51313068
  },
  {
    "shopName": "북카페리비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 225-9",
    "roadAddress": "서울특별시 성북구 오패산로16가길 99",
    "lng": 127.0373715,
    "lat": 37.61245399
  },
  {
    "shopName": "커피타는고양이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 35-27",
    "roadAddress": "서울특별시 강북구 도봉로 34-8",
    "lng": 127.0307933,
    "lat": 37.61226499
  },
  {
    "shopName": "어반블루메",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 하왕십리동 1070",
    "roadAddress": "서울특별시 성동구 왕십리로 410",
    "lng": 127.0240621,
    "lat": 37.56654474
  },
  {
    "shopName": "커피베이",
    "branchName": "송파개롱점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 181-15",
    "roadAddress": "서울특별시 송파구 오금로46길 27",
    "lng": 127.1346554,
    "lat": 37.49505228
  },
  {
    "shopName": "coffeeB커피비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 774-1",
    "roadAddress": "서울특별시 강서구 공항대로 209",
    "lng": 126.830876,
    "lat": 37.55974387
  },
  {
    "shopName": "리즈앤틱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 개포동 12-2",
    "roadAddress": "서울특별시 강남구 개포로109길 69",
    "lng": 127.0761064,
    "lat": 37.49620377
  },
  {
    "shopName": "커피복스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 245-89",
    "roadAddress": "서울특별시 중랑구 동일로151길 13",
    "lng": 127.0772851,
    "lat": 37.6079883
  },
  {
    "shopName": "로모커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 493",
    "roadAddress": "서울특별시 강동구 풍성로63길 35",
    "lng": 127.1390737,
    "lat": 37.52982044
  },
  {
    "shopName": "르돌치1946",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-3",
    "roadAddress": "서울특별시 강서구 공항대로 220",
    "lng": 126.8317527,
    "lat": 37.55868933
  },
  {
    "shopName": "너드커피랩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 동자동 43-23",
    "roadAddress": "서울특별시 용산구 한강대로 363-1",
    "lng": 126.9717779,
    "lat": 37.55081927
  },
  {
    "shopName": "에슬로우커피",
    "branchName": "삼성점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 157-10",
    "roadAddress": "서울특별시 강남구 테헤란로81길 26",
    "lng": 127.0567918,
    "lat": 37.50869296
  },
  {
    "shopName": "감성커피문정테라타워",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 651",
    "roadAddress": "서울특별시 송파구 송파대로 167",
    "lng": 127.1207441,
    "lat": 37.4845513
  },
  {
    "shopName": "성화커피전문점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동3가 9-13",
    "roadAddress": "서울특별시 영등포구 영중로 12",
    "lng": 126.9064876,
    "lat": 37.51760595
  },
  {
    "shopName": "커피물장수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 408-125",
    "roadAddress": "서울특별시 관악구 신림로 203",
    "lng": 126.936401,
    "lat": 37.47585421
  },
  {
    "shopName": "스타벅스서울중앙우체국점",
    "branchName": "서울중앙우체국점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로1가 21-1",
    "roadAddress": "서울특별시 중구 소공로 70",
    "lng": 126.9821565,
    "lat": 37.56158656
  },
  {
    "shopName": "캔앤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 378-4",
    "roadAddress": "서울특별시 중랑구 면목로 238",
    "lng": 127.0850864,
    "lat": 37.57394448
  },
  {
    "shopName": "샐러드조이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 276-18",
    "roadAddress": "서울특별시 노원구 초안산로2라길 31",
    "lng": 127.0581918,
    "lat": 37.63115636
  },
  {
    "shopName": "한국바리스타알앤디서울",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 96-3",
    "roadAddress": "서울특별시 용산구 독서당로 39",
    "lng": 127.0071396,
    "lat": 37.53154216
  },
  {
    "shopName": "청자",
    "branchName": "목동파리공원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 907-17",
    "roadAddress": "서울특별시 양천구 목동동로 379",
    "lng": 126.878696,
    "lat": 37.53560043
  },
  {
    "shopName": "샌드그립",
    "branchName": "동대문역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 광희동1가 193",
    "roadAddress": "서울특별시 중구 장충단로 225",
    "lng": 127.0070252,
    "lat": 37.56490694
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "면목중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 151-9",
    "roadAddress": "서울특별시 중랑구 동일로 612",
    "lng": 127.0801296,
    "lat": 37.58485367
  },
  {
    "shopName": "달콤",
    "branchName": "커피이수역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 147-101",
    "roadAddress": "서울특별시 동작구 동작대로 101",
    "lng": 126.981661,
    "lat": 37.48565997
  },
  {
    "shopName": "카페",
    "branchName": "바로",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 279-44",
    "roadAddress": "서울특별시 성동구 동일로 133",
    "lng": 127.0648973,
    "lat": 37.54439407
  },
  {
    "shopName": "카페",
    "branchName": "도르래",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 69-17",
    "roadAddress": "서울특별시 강남구 삼성로116길 5",
    "lng": 127.052864,
    "lat": 37.51518517
  },
  {
    "shopName": "더플랜트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로1가 50-1",
    "roadAddress": "서울특별시 중구 을지로 12",
    "lng": 126.9787593,
    "lat": 37.56584618
  },
  {
    "shopName": "베스트슬립힐링카페",
    "branchName": "목동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 962",
    "roadAddress": "서울특별시 양천구 오목로 299",
    "lng": 126.8703422,
    "lat": 37.52607793
  },
  {
    "shopName": "스카이드림엑스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 34-49",
    "roadAddress": "서울특별시 서대문구 이화여대길 70",
    "lng": 126.9445203,
    "lat": 37.55925577
  },
  {
    "shopName": "커피메이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 576-17",
    "roadAddress": "서울특별시 노원구 동일로177길 8",
    "lng": 127.0738509,
    "lat": 37.62097242
  },
  {
    "shopName": "스타벅스",
    "branchName": "교대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1657-5",
    "roadAddress": "서울특별시 서초구 서초중앙로 118",
    "lng": 127.014217,
    "lat": 37.49238766
  },
  {
    "shopName": "가우인터내셔날",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 196",
    "roadAddress": "서울특별시 송파구 백제고분로 75",
    "lng": 127.0791379,
    "lat": 37.50995957
  },
  {
    "shopName": "디톡앤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로1가 24",
    "roadAddress": "서울특별시 종로구 종로 19",
    "lng": 126.9799024,
    "lat": 37.57083882
  },
  {
    "shopName": "휘경아뜰리에",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 268-1",
    "roadAddress": "서울특별시 동대문구 망우로 55",
    "lng": 127.0594552,
    "lat": 37.58932211
  },
  {
    "shopName": "P23",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 344-11",
    "roadAddress": "서울특별시 강동구 양재대로134길 20",
    "lng": 127.1446978,
    "lat": 37.54756707
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "화곡메가박스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1073-10",
    "roadAddress": "서울특별시 강서구 화곡로 142",
    "lng": 126.837569,
    "lat": 37.54055489
  },
  {
    "shopName": "엠디에프커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 18-3",
    "roadAddress": "서울특별시 서초구 반포대로 287",
    "lng": 127.0010418,
    "lat": 37.50434209
  },
  {
    "shopName": "메가엠지씨커피대치학원가점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 941-32",
    "roadAddress": "서울특별시 강남구 도곡로77길 6",
    "lng": 127.0587262,
    "lat": 37.49876073
  },
  {
    "shopName": "아틀리에젠즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 115-18",
    "roadAddress": "서울특별시 강남구 봉은사로68길 23",
    "lng": 127.0509421,
    "lat": 37.51062843
  },
  {
    "shopName": "커피베이",
    "branchName": "수유역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 223-7",
    "roadAddress": "서울특별시 강북구 노해로 34",
    "lng": 127.0230645,
    "lat": 37.63853854
  },
  {
    "shopName": "다정다감",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 772-5",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 45",
    "lng": 126.8327073,
    "lat": 37.56061797
  },
  {
    "shopName": "보엘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 128-25",
    "roadAddress": "서울특별시 서대문구 연희로11나길 5",
    "lng": 126.9283077,
    "lat": 37.56748036
  },
  {
    "shopName": "무지개",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 216-32",
    "roadAddress": "서울특별시 동대문구 한천로10길 32",
    "lng": 127.0629946,
    "lat": 37.56621141
  },
  {
    "shopName": "라니네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 453-2",
    "roadAddress": "서울특별시 강서구 곰달래로33길 62",
    "lng": 126.8519433,
    "lat": 37.53367645
  },
  {
    "shopName": "코레우리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 812",
    "roadAddress": "서울특별시 강서구 마곡중앙로 136",
    "lng": 126.8328996,
    "lat": 37.57223415
  },
  {
    "shopName": "카페에스파니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 642-3",
    "roadAddress": "서울특별시 송파구 법원로 128",
    "lng": 127.120457,
    "lat": 37.48685588
  },
  {
    "shopName": "리사르커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 366-32",
    "roadAddress": "서울특별시 중구 다산로8길 16-7",
    "lng": 127.0104045,
    "lat": 37.55246485
  },
  {
    "shopName": "스타캐슬카페아띠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1445-3",
    "roadAddress": "서울특별시 서초구 효령로 304",
    "lng": 127.0177891,
    "lat": 37.48472239
  },
  {
    "shopName": "청춘술다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 399-19",
    "roadAddress": "서울특별시 은평구 연서로29길 8-15",
    "lng": 126.9196336,
    "lat": 37.61939992
  },
  {
    "shopName": "샌드커피논탄토",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 153-14",
    "roadAddress": "서울특별시 마포구 동교로 212-16",
    "lng": 126.9241584,
    "lat": 37.5592612
  },
  {
    "shopName": "슈슈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 236-1",
    "roadAddress": "서울특별시 노원구 공릉로42길 17",
    "lng": 127.0806968,
    "lat": 37.62433278
  },
  {
    "shopName": "우리지금여기",
    "branchName": "양천점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 792-4",
    "roadAddress": "서울특별시 양천구 등촌로 32",
    "lng": 126.8641296,
    "lat": 37.53289326
  },
  {
    "shopName": "앨수애뇨부리또하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 423-96",
    "roadAddress": "서울특별시 도봉구 삼양로142길 3",
    "lng": 127.0135805,
    "lat": 37.65056049
  },
  {
    "shopName": "쥬스를만드는지금",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 44-14",
    "roadAddress": "서울특별시 관악구 중앙2길 16",
    "lng": 126.9539741,
    "lat": 37.48450802
  },
  {
    "shopName": "커피볶는성군",
    "branchName": "2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 326-5",
    "roadAddress": "서울특별시 동대문구 답십리로69길 75",
    "lng": 127.073891,
    "lat": 37.57570432
  },
  {
    "shopName": "디저트포레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 세곡동 615",
    "roadAddress": "서울특별시 강남구 헌릉로569길 21-30",
    "lng": 127.1007108,
    "lat": 37.46635221
  },
  {
    "shopName": "후엘고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 128-7",
    "roadAddress": "서울특별시 마포구 마포대로11길 118",
    "lng": 126.9478671,
    "lat": 37.54904081
  },
  {
    "shopName": "스타벅스",
    "branchName": "논현역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 잠원동 37-7",
    "roadAddress": "서울특별시 서초구 강남대로 557",
    "lng": 127.0206276,
    "lat": 37.51153431
  },
  {
    "shopName": "동심",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남산동2가 30-4",
    "roadAddress": "서울특별시 중구 퇴계로20길 24",
    "lng": 126.9855842,
    "lat": 37.55921928
  },
  {
    "shopName": "밀크팅",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1519-18",
    "roadAddress": "서울특별시 관악구 호암로24길 57",
    "lng": 126.9363785,
    "lat": 37.46946554
  },
  {
    "shopName": "마이그린테이블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1674-13",
    "roadAddress": "서울특별시 관악구 행운1길 5",
    "lng": 126.9586886,
    "lat": 37.47965695
  },
  {
    "shopName": "커피베이",
    "branchName": "남영역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 갈월동 101-49",
    "roadAddress": "서울특별시 용산구 한강대로 259",
    "lng": 126.9723916,
    "lat": 37.54157089
  },
  {
    "shopName": "허유산코리아",
    "branchName": "강남점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1309-9",
    "roadAddress": "서울특별시 서초구 서초대로77길 55",
    "lng": 127.0244504,
    "lat": 37.50200577
  },
  {
    "shopName": "혼밥대왕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 226",
    "roadAddress": "서울특별시 강남구 봉은사로33길 34",
    "lng": 127.035021,
    "lat": 37.51023813
  },
  {
    "shopName": "클래직",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 인현동2가 99-16",
    "roadAddress": "서울특별시 중구 마른내로 62-1",
    "lng": 126.9946974,
    "lat": 37.56414485
  },
  {
    "shopName": "CAFEPAGE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 31-8",
    "roadAddress": "서울특별시 송파구 동남로4길 35",
    "lng": 127.125,
    "lat": 37.48708785
  },
  {
    "shopName": "스타벅스",
    "branchName": "왕십리역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 도선동 58-1",
    "roadAddress": "서울특별시 성동구 왕십리로 326",
    "lng": 127.0338801,
    "lat": 37.56274199
  },
  {
    "shopName": "카페미니어처",
    "branchName": "미니어처",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 578",
    "roadAddress": "서울특별시 노원구 중계로8길 103",
    "lng": 127.084597,
    "lat": 37.64808744
  },
  {
    "shopName": "빈트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 내수동 5",
    "roadAddress": "서울특별시 종로구 새문안로5가길 13",
    "lng": 126.9737681,
    "lat": 37.57321846
  },
  {
    "shopName": "휴카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 364-22",
    "roadAddress": "서울특별시 마포구 와우산로21길 31-10",
    "lng": 126.9218283,
    "lat": 37.55208569
  },
  {
    "shopName": "아이비",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 홍지동 127-11",
    "roadAddress": "서울특별시 종로구 자하문로 299",
    "lng": 126.9596199,
    "lat": 37.59907152
  },
  {
    "shopName": "고츄러스",
    "branchName": "필동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동3가 44-3",
    "roadAddress": "서울특별시 중구 필동로 31-1",
    "lng": 126.9962647,
    "lat": 37.55868885
  },
  {
    "shopName": "올어바웃카페",
    "branchName": "역삼점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 701",
    "roadAddress": "서울특별시 강남구 언주로 508",
    "lng": 127.042725,
    "lat": 37.50394838
  },
  {
    "shopName": "cafeFelice",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 108-4",
    "roadAddress": "서울특별시 송파구 오금로 151",
    "lng": 127.1117725,
    "lat": 37.51075011
  },
  {
    "shopName": "인버스YTN점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1607",
    "roadAddress": "서울특별시 마포구 상암산로 76",
    "lng": 126.8922963,
    "lat": 37.57918577
  },
  {
    "shopName": "스타벅스",
    "branchName": "동부이촌동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이촌동 302-60",
    "roadAddress": "서울특별시 용산구 이촌로 198",
    "lng": 126.9690527,
    "lat": 37.52107002
  },
  {
    "shopName": "2ro2ro",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-25",
    "roadAddress": "서울특별시 금천구 벚꽃로 234",
    "lng": 126.8861221,
    "lat": 37.47598559
  },
  {
    "shopName": "영우한양대학교커피점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 15-1",
    "roadAddress": "서울특별시 성동구 마조로 22-2",
    "lng": 127.0413247,
    "lat": 37.5594688
  },
  {
    "shopName": "폴바셋현대모터스튜디오서울점서울점",
    "branchName": "서울점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 91",
    "roadAddress": "서울특별시 강남구 언주로 738",
    "lng": 127.0343472,
    "lat": 37.52127052
  },
  {
    "shopName": "THEBRIDGE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 152-3",
    "roadAddress": "서울특별시 송파구 동남로24길 11",
    "lng": 127.137498,
    "lat": 37.49961442
  },
  {
    "shopName": "치킨라떼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 173-46",
    "roadAddress": "서울특별시 중랑구 공릉로2길 17",
    "lng": 127.0789097,
    "lat": 37.61217281
  },
  {
    "shopName": "로팸",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 563-8",
    "roadAddress": "서울특별시 강북구 419로 61-1",
    "lng": 127.0077483,
    "lat": 37.64600642
  },
  {
    "shopName": "웰빙전통차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 북아현동 134-20",
    "roadAddress": "서울특별시 서대문구 신촌로37안길 8",
    "lng": 126.9565017,
    "lat": 37.55798369
  },
  {
    "shopName": "커피프로젝트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 제기동 148-51",
    "roadAddress": "서울특별시 동대문구 약령시로 12-1",
    "lng": 127.0312239,
    "lat": 37.58255221
  },
  {
    "shopName": "메가엠지씨커피서울",
    "branchName": "만리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 만리동2가 176-1",
    "roadAddress": "서울특별시 중구 만리재로 175",
    "lng": 126.9645939,
    "lat": 37.5547391
  },
  {
    "shopName": "카페",
    "branchName": "에이블CAFEABLE",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 보광동 264-57",
    "roadAddress": "서울특별시 용산구 보광로24길 29",
    "lng": 126.9999866,
    "lat": 37.52917512
  },
  {
    "shopName": "카페",
    "branchName": "인중독대방점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 380-111",
    "roadAddress": "서울특별시 동작구 대방동27길 36",
    "lng": 126.9240749,
    "lat": 37.50363908
  },
  {
    "shopName": "보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 용산구 남영동 34",
    "roadAddress": "서울특별시 용산구 한강대로84길 9",
    "lng": 126.9730292,
    "lat": 37.54375696
  },
  {
    "shopName": "달콤커피",
    "branchName": "경희의료원본관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 1-5",
    "roadAddress": "서울특별시 동대문구 경희대로 23",
    "lng": 127.0507252,
    "lat": 37.59376645
  },
  {
    "shopName": "마리스샌드위치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 회현동1가 74-1",
    "roadAddress": "서울특별시 중구 퇴계로10길 36",
    "lng": 126.9811407,
    "lat": 37.55804571
  },
  {
    "shopName": "망원동티라미수",
    "branchName": "약수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 370-51",
    "roadAddress": "서울특별시 중구 다산로 155-1",
    "lng": 127.0120108,
    "lat": 37.55766833
  },
  {
    "shopName": "와이딘커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 63-70",
    "roadAddress": "서울특별시 용산구 서빙고로 17",
    "lng": 126.9665514,
    "lat": 37.52689595
  },
  {
    "shopName": "DELIWITHME",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 684-101",
    "roadAddress": "서울특별시 용산구 이태원로54길 47",
    "lng": 127.0014309,
    "lat": 37.53626057
  },
  {
    "shopName": "카페",
    "branchName": "백련스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 578-16",
    "roadAddress": "서울특별시 은평구 응암로 235",
    "lng": 126.917592,
    "lat": 37.59300803
  },
  {
    "shopName": "날SEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 신사동 27-24",
    "roadAddress": "서울특별시 은평구 증산로21길 16",
    "lng": 126.9130516,
    "lat": 37.5961019
  },
  {
    "shopName": "택스쳐성수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-463",
    "roadAddress": "서울특별시 성동구 서울숲2길 16-12",
    "lng": 127.0401382,
    "lat": 37.54696163
  },
  {
    "shopName": "펫리미엄",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 은평구 갈현동 433-1",
    "roadAddress": "서울특별시 은평구 갈현로 269",
    "lng": 126.9163161,
    "lat": 37.6208562
  },
  {
    "shopName": "세라젬웰카페",
    "branchName": "답십리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 1012",
    "roadAddress": "서울특별시 동대문구 사가정로 80",
    "lng": 127.0549119,
    "lat": 37.57521151
  },
  {
    "shopName": "블라썸한강파티룸",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 102",
    "roadAddress": "서울특별시 광진구 아차산로78길 75",
    "lng": 127.1109711,
    "lat": 37.55158894
  },
  {
    "shopName": "디어쿠키",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 369-18",
    "roadAddress": "서울특별시 마포구 토정로 27-1",
    "lng": 126.9140324,
    "lat": 37.54572499
  },
  {
    "shopName": "인준",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 487-394",
    "roadAddress": "서울특별시 마포구 월드컵북로 52-4",
    "lng": 126.9178229,
    "lat": 37.55906814
  },
  {
    "shopName": "위넌스터디카페",
    "branchName": "먹골역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 239-91",
    "roadAddress": "서울특별시 중랑구 동일로157길 14",
    "lng": 127.0770343,
    "lat": 37.60995061
  },
  {
    "shopName": "쥬씨차얌",
    "branchName": "망우역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 479",
    "roadAddress": "서울특별시 중랑구 용마산로115길 127",
    "lng": 127.0936535,
    "lat": 37.59751886
  },
  {
    "shopName": "뎁스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 55-59",
    "roadAddress": "서울특별시 강서구 초록마을로 56",
    "lng": 126.8487682,
    "lat": 37.54223241
  },
  {
    "shopName": "카페",
    "branchName": "단향스터디",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 19-15",
    "roadAddress": "서울특별시 도봉구 도당로 14",
    "lng": 127.0351438,
    "lat": 37.65948785
  },
  {
    "shopName": "바빈스커피",
    "branchName": "가양점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 가양동 57-11",
    "roadAddress": "서울특별시 강서구 양천로 396",
    "lng": 126.8455539,
    "lat": 37.56574502
  },
  {
    "shopName": "쥬씨차얌",
    "branchName": "구로깔깔거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 1124-21",
    "roadAddress": "서울특별시 구로구 디지털로32길 93",
    "lng": 126.9004323,
    "lat": 37.4831298
  },
  {
    "shopName": "다도레",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 연희동 133-30",
    "roadAddress": "서울특별시 서대문구 증가로 13-9",
    "lng": 126.9310916,
    "lat": 37.56911846
  },
  {
    "shopName": "지유명차",
    "branchName": "교대점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 서초동 1620-4",
    "roadAddress": "서울특별시 서초구 서초중앙로12길 38",
    "lng": 127.0170569,
    "lat": 37.48796011
  },
  {
    "shopName": "금정헌전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 가회동 31-22",
    "roadAddress": "서울특별시 종로구 북촌로11길 32",
    "lng": 126.9836749,
    "lat": 37.58228754
  },
  {
    "shopName": "토즈스터디센터",
    "branchName": "잠실5센터",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 294-3",
    "roadAddress": "서울특별시 송파구 백제고분로 122",
    "lng": 127.0803711,
    "lat": 37.50624781
  },
  {
    "shopName": "욜로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 343-5",
    "roadAddress": "서울특별시 강동구 상암로 207",
    "lng": 127.1455113,
    "lat": 37.54668992
  },
  {
    "shopName": "DE1993JEWELRYCAFE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 446-2",
    "roadAddress": "서울특별시 강동구 고덕로19길 8",
    "lng": 127.1338591,
    "lat": 37.55514702
  },
  {
    "shopName": "다독다독",
    "branchName": "1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 379-17",
    "roadAddress": "서울특별시 강동구 양재대로 1419",
    "lng": 127.1376345,
    "lat": 37.53297265
  },
  {
    "shopName": "사유공간찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 용산구 용산동6가 168-6",
    "roadAddress": "서울특별시 용산구 서빙고로 137",
    "lng": 126.9777254,
    "lat": 37.52469553
  },
  {
    "shopName": "명칭없음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동2가 14-68",
    "roadAddress": "서울특별시 영등포구 도림로129길 6-1",
    "lng": 126.8951687,
    "lat": 37.51346394
  },
  {
    "shopName": "쿠자공방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 17-10",
    "roadAddress": "서울특별시 송파구 송이로17길 49",
    "lng": 127.1247083,
    "lat": 37.5014306
  },
  {
    "shopName": "SC커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 36-2",
    "roadAddress": "서울특별시 영등포구 국제금융로6길 33",
    "lng": 126.9268944,
    "lat": 37.52078459
  },
  {
    "shopName": "카페설리번",
    "branchName": "당산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동6가 311-1",
    "roadAddress": "서울특별시 영등포구 당산로 241",
    "lng": 126.9025195,
    "lat": 37.53520253
  },
  {
    "shopName": "커피반장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1680-31",
    "roadAddress": "서울특별시 관악구 문성로 114",
    "lng": 126.9162392,
    "lat": 37.47766231
  },
  {
    "shopName": "세이버스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 230",
    "roadAddress": "서울특별시 성북구 종암로 167",
    "lng": 127.0309775,
    "lat": 37.60504918
  },
  {
    "shopName": "카페희다",
    "branchName": "당산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동 171-47",
    "roadAddress": "서울특별시 영등포구 영중로42길 7",
    "lng": 126.9065887,
    "lat": 37.5285095
  },
  {
    "shopName": "상진다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동2가 14-84",
    "roadAddress": "서울특별시 영등포구 도림로133길 9",
    "lng": 126.8944561,
    "lat": 37.51346628
  },
  {
    "shopName": "상승공간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동3가 77-53",
    "roadAddress": "서울특별시 영등포구 선유동2로 9",
    "lng": 126.8944603,
    "lat": 37.53004549
  },
  {
    "shopName": "테크네커피공방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 동작동 333",
    "roadAddress": "서울특별시 동작구 동작대로39길 22",
    "lng": 126.9819464,
    "lat": 37.49462791
  },
  {
    "shopName": "레드망고",
    "branchName": "구반포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 1166",
    "roadAddress": "서울특별시 서초구 신반포로 49",
    "lng": 126.9900437,
    "lat": 37.50216714
  },
  {
    "shopName": "PAL",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 553-27",
    "roadAddress": "서울특별시 강남구 논현로157길 28",
    "lng": 127.0257265,
    "lat": 37.52217286
  },
  {
    "shopName": "대치커피1696",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 316",
    "roadAddress": "서울특별시 강남구 삼성로 212",
    "lng": 127.0658971,
    "lat": 37.49961058
  },
  {
    "shopName": "카페",
    "branchName": "망고보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 708-30",
    "roadAddress": "서울특별시 강남구 선릉로87길 12",
    "lng": 127.0484802,
    "lat": 37.50319294
  },
  {
    "shopName": "대추와자몽",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 562",
    "roadAddress": "서울특별시 용산구 녹사평대로46길 1",
    "lng": 126.9871004,
    "lat": 37.53751712
  },
  {
    "shopName": "오우야에스프레소바",
    "branchName": "중곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 252-6",
    "roadAddress": "서울특별시 광진구 동일로 350",
    "lng": 127.0755326,
    "lat": 37.5619672
  },
  {
    "shopName": "제3화원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 199-2",
    "roadAddress": "서울특별시 양천구 남부순환로 402",
    "lng": 126.8307724,
    "lat": 37.53160358
  },
  {
    "shopName": "마일스톤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 668-64",
    "roadAddress": "서울특별시 성동구 서울숲4길 20",
    "lng": 127.0429985,
    "lat": 37.54718308
  },
  {
    "shopName": "홍스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 300-15",
    "roadAddress": "서울특별시 서대문구 통일로40길 19",
    "lng": 126.9438887,
    "lat": 37.59036295
  },
  {
    "shopName": "열공다방스터디카페",
    "branchName": "사가정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 626-10",
    "roadAddress": "서울특별시 중랑구 면목로 298-1",
    "lng": 127.0867462,
    "lat": 37.57894012
  },
  {
    "shopName": "카페",
    "branchName": "황제쑥뜸힐링",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 240-5",
    "roadAddress": "서울특별시 중랑구 중랑역로 201",
    "lng": 127.0750645,
    "lat": 37.61170123
  },
  {
    "shopName": "컷바리스타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 80",
    "roadAddress": "서울특별시 성북구 종암로25길 30",
    "lng": 127.0305746,
    "lat": 37.60118942
  },
  {
    "shopName": "론디네커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 하왕십리동 1070",
    "roadAddress": "서울특별시 성동구 왕십리로 410",
    "lng": 127.0240621,
    "lat": 37.56654474
  },
  {
    "shopName": "카페",
    "branchName": "7월1일북",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 616-8",
    "roadAddress": "서울특별시 도봉구 도봉로157길 11",
    "lng": 127.0433743,
    "lat": 37.67344878
  },
  {
    "shopName": "바빈스커피",
    "branchName": "서울공릉점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 408-6",
    "roadAddress": "서울특별시 노원구 공릉로 181",
    "lng": 127.0793971,
    "lat": 37.62592649
  },
  {
    "shopName": "LATT",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 360-9",
    "roadAddress": "서울특별시 노원구 한글비석로 245",
    "lng": 127.0763442,
    "lat": 37.64924852
  },
  {
    "shopName": "기인생기차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 양천구 목동 547-12",
    "roadAddress": "서울특별시 양천구 목동중앙본로 95",
    "lng": 126.8703745,
    "lat": 37.5441891
  },
  {
    "shopName": "오가다",
    "branchName": "세라젬반포점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 반포동 57-3",
    "roadAddress": "서울특별시 서초구 서초중앙로 251",
    "lng": 127.010538,
    "lat": 37.50381831
  },
  {
    "shopName": "도광사",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 평창동 488-5",
    "roadAddress": "서울특별시 종로구 평창길 234",
    "lng": 126.9713602,
    "lat": 37.61328464
  },
  {
    "shopName": "길림노인활동실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1036-14",
    "roadAddress": "서울특별시 영등포구 디지털로53길 17",
    "lng": 126.9001433,
    "lat": 37.49204747
  },
  {
    "shopName": "메가커피",
    "branchName": "은평뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 65",
    "roadAddress": "서울특별시 은평구 진관3로 21",
    "lng": 126.9191031,
    "lat": 37.63960511
  },
  {
    "shopName": "에프에프이이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 54-24",
    "roadAddress": "서울특별시 은평구 갈현로 87",
    "lng": 126.9103408,
    "lat": 37.60571793
  },
  {
    "shopName": "나는꽃COFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 380-13",
    "roadAddress": "서울특별시 강동구 양재대로113길 30",
    "lng": 127.1382283,
    "lat": 37.53839233
  },
  {
    "shopName": "카페코지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동2가 34-15",
    "roadAddress": "서울특별시 영등포구 영등포로5길 31",
    "lng": 126.8845167,
    "lat": 37.52463584
  },
  {
    "shopName": "드롭탑",
    "branchName": "선유도파크호텔점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동5가 62",
    "roadAddress": "서울특별시 영등포구 양평로 136",
    "lng": 126.8930431,
    "lat": 37.53866417
  },
  {
    "shopName": "위넌스터디카페",
    "branchName": "보라매점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 402-12",
    "roadAddress": "서울특별시 동작구 상도로 30",
    "lng": 126.9238835,
    "lat": 37.49963668
  },
  {
    "shopName": "ON&OFF",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 49-3",
    "roadAddress": "서울특별시 강남구 강남대로136길 6",
    "lng": 127.0211758,
    "lat": 37.51286341
  },
  {
    "shopName": "카페",
    "branchName": "라스보드",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 642-1",
    "roadAddress": "서울특별시 강남구 언주로172길 36",
    "lng": 127.0366705,
    "lat": 37.52711029
  },
  {
    "shopName": "라뚜셩트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 429-34",
    "roadAddress": "서울특별시 은평구 통일로83길 24",
    "lng": 126.917222,
    "lat": 37.62088253
  },
  {
    "shopName": "멜",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 641-1",
    "roadAddress": "서울특별시 강남구 테헤란로25길 36",
    "lng": 127.0351037,
    "lat": 37.50293125
  },
  {
    "shopName": "카페심재",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 423-2",
    "roadAddress": "서울특별시 강남구 논현로28길 34",
    "lng": 127.0449165,
    "lat": 37.48373739
  },
  {
    "shopName": "바빈스커피",
    "branchName": "종로더케이손해보험점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 인의동 112-1",
    "roadAddress": "서울특별시 종로구 창경궁로 117",
    "lng": 126.9970829,
    "lat": 37.57279712
  },
  {
    "shopName": "라그린",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 정동 32-1",
    "roadAddress": "서울특별시 중구 정동길 26",
    "lng": 126.9713066,
    "lat": 37.56616892
  },
  {
    "shopName": "라비앙코코",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 455-23",
    "roadAddress": "서울특별시 용산구 녹사평대로40길 51",
    "lng": 126.9886355,
    "lat": 37.53443969
  },
  {
    "shopName": "써머레인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 738-13",
    "roadAddress": "서울특별시 용산구 이태원로55가길 49",
    "lng": 126.9992459,
    "lat": 37.5363502
  },
  {
    "shopName": "총알커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 668-31",
    "roadAddress": "서울특별시 성동구 왕십리로5길 9-2",
    "lng": 127.0440892,
    "lat": 37.54684951
  },
  {
    "shopName": "카페",
    "branchName": "패밀리보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1644-5",
    "roadAddress": "서울특별시 관악구 조원로 7",
    "lng": 126.9032857,
    "lat": 37.48362486
  },
  {
    "shopName": "에이치와이DOG&CAT",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 관악구 신림동 1476-10",
    "roadAddress": "서울특별시 관악구 난곡로 285-1",
    "lng": 126.9147205,
    "lat": 37.4794775
  },
  {
    "shopName": "카페",
    "branchName": "나연건강",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강서구 화곡동 798-19",
    "roadAddress": "서울특별시 강서구 곰달래로55길 18",
    "lng": 126.8606795,
    "lat": 37.532842
  },
  {
    "shopName": "우주라이크커피PC앤카페",
    "branchName": "화곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 971-4",
    "roadAddress": "서울특별시 강서구 까치산로 101",
    "lng": 126.8485639,
    "lat": 37.54742037
  },
  {
    "shopName": "레프트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 61-10",
    "roadAddress": "서울특별시 동대문구 회기로 164",
    "lng": 127.0541868,
    "lat": 37.59046939
  },
  {
    "shopName": "꼬리치는강아지",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동작구 상도동 250-6",
    "roadAddress": "서울특별시 동작구 성대로 23",
    "lng": 126.9329312,
    "lat": 37.49962866
  },
  {
    "shopName": "세라젬웰카페",
    "branchName": "영등포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동4가 67-1",
    "roadAddress": "서울특별시 영등포구 영등포로 210",
    "lng": 126.9044909,
    "lat": 37.51955172
  },
  {
    "shopName": "명칭없음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 591-53",
    "roadAddress": "서울특별시 동대문구 왕산로 210",
    "lng": 127.0511299,
    "lat": 37.58419161
  },
  {
    "shopName": "영리보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1031-1",
    "roadAddress": "서울특별시 영등포구 디지털로54길 3",
    "lng": 126.9016928,
    "lat": 37.49048506
  },
  {
    "shopName": "행복휴게실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 991-11",
    "roadAddress": "서울특별시 영등포구 대림로7가길 1",
    "lng": 126.9038785,
    "lat": 37.48948717
  },
  {
    "shopName": "쁠랑커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 823-20",
    "roadAddress": "서울특별시 강남구 테헤란로10길 16",
    "lng": 127.0323498,
    "lat": 37.4981061
  },
  {
    "shopName": "사주천국",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 도봉구 방학동 701-15",
    "roadAddress": "서울특별시 도봉구 도당로 116",
    "lng": 127.039794,
    "lat": 37.66626551
  },
  {
    "shopName": "사람과나무찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 5",
    "roadAddress": "서울특별시 종로구 인사동6길 5",
    "lng": 126.986173,
    "lat": 37.57340674
  },
  {
    "shopName": "초이스커피호프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 310-179",
    "roadAddress": "서울특별시 은평구 연서로 249",
    "lng": 126.9224613,
    "lat": 37.61968707
  },
  {
    "shopName": "쿨보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 노원구 상계동 593-2",
    "roadAddress": "서울특별시 노원구 상계로3길 16",
    "lng": 127.0624672,
    "lat": 37.65696904
  },
  {
    "shopName": "안녕,타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1613-3",
    "roadAddress": "서울특별시 관악구 관악로14길 64",
    "lng": 126.9559363,
    "lat": 37.47838019
  },
  {
    "shopName": "타로일상",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 875-1",
    "roadAddress": "서울특별시 관악구 남부순환로 1802",
    "lng": 126.9503219,
    "lat": 37.48126788
  },
  {
    "shopName": "모모타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 156-27",
    "roadAddress": "서울특별시 동대문구 휘경로14나길 15",
    "lng": 127.0643658,
    "lat": 37.59322662
  },
  {
    "shopName": "포드전시장",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 53-23",
    "roadAddress": "서울특별시 광진구 뚝섬로22가길 60",
    "lng": 127.0644853,
    "lat": 37.53479461
  },
  {
    "shopName": "제주냥이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동작구 신대방동 600-55",
    "roadAddress": "서울특별시 동작구 신대방14길 17",
    "lng": 126.9111659,
    "lat": 37.48991498
  },
  {
    "shopName": "인포메이션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 830-67",
    "roadAddress": "서울특별시 강남구 역삼로 121",
    "lng": 127.0326396,
    "lat": 37.49405372
  },
  {
    "shopName": "쿠나",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 종로구 평창동 540-37",
    "roadAddress": "서울특별시 종로구 평창4길 78",
    "lng": 126.9645343,
    "lat": 37.61381061
  },
  {
    "shopName": "개신나냥",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 중곡동 49-24",
    "roadAddress": "서울특별시 광진구 긴고랑로20길 28",
    "lng": 127.0831723,
    "lat": 37.56017061
  },
  {
    "shopName": "멜로우시티3rd",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 648-68",
    "roadAddress": "서울특별시 동대문구 답십리로 64",
    "lng": 127.0480592,
    "lat": 37.57548082
  },
  {
    "shopName": "카페애드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 49-14",
    "roadAddress": "서울특별시 송파구 백제고분로 222",
    "lng": 127.0910967,
    "lat": 37.50318613
  },
  {
    "shopName": "카페눈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 561",
    "roadAddress": "서울특별시 광진구 아차산로70길 17-21",
    "lng": 127.1032049,
    "lat": 37.54140238
  },
  {
    "shopName": "탱크6",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 670",
    "roadAddress": "서울특별시 마포구 증산로 87",
    "lng": 126.8950083,
    "lat": 37.570336
  },
  {
    "shopName": "SUNNYSIDE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 955-42",
    "roadAddress": "서울특별시 관악구 은천로5길 11",
    "lng": 126.9379762,
    "lat": 37.48678011
  },
  {
    "shopName": "카페나루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 227-344",
    "roadAddress": "서울특별시 광진구 능동로 76",
    "lng": 127.070518,
    "lat": 37.53738322
  },
  {
    "shopName": "땡스롤리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 184-69",
    "roadAddress": "서울특별시 성북구 성북로 20-1",
    "lng": 127.0047332,
    "lat": 37.58999066
  },
  {
    "shopName": "메가엠지씨커피여의도파크원점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 22",
    "roadAddress": "서울특별시 영등포구 여의대로 108",
    "lng": 126.9290941,
    "lat": 37.52518363
  },
  {
    "shopName": "YogurYogur",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-1",
    "roadAddress": "서울특별시 강서구 공항대로 212",
    "lng": 126.8307773,
    "lat": 37.55881483
  },
  {
    "shopName": "ISCOFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 385-4",
    "roadAddress": "서울특별시 강동구 양재대로111길 54",
    "lng": 127.1365028,
    "lat": 37.53789316
  },
  {
    "shopName": "캉골카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 401-20",
    "roadAddress": "서울특별시 마포구 독막로7길 28",
    "lng": 126.9193825,
    "lat": 37.54903584
  },
  {
    "shopName": "dencepts",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동3가 132",
    "roadAddress": "서울특별시 성북구 동소문로26가길 16",
    "lng": 127.020016,
    "lat": 37.59456968
  },
  {
    "shopName": "지트",
    "branchName": "성수동아",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 271-24",
    "roadAddress": "서울특별시 성동구 연무장길 81",
    "lng": 127.0582551,
    "lat": 37.54165616
  },
  {
    "shopName": "할리스",
    "branchName": "김포공항점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 1373-5",
    "roadAddress": "서울특별시 강서구 하늘길 112",
    "lng": 126.8084568,
    "lat": 37.55674456
  },
  {
    "shopName": "브루원츠커피서울가산",
    "branchName": "1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 345-33",
    "roadAddress": "서울특별시 금천구 가산디지털2로 67",
    "lng": 126.8810723,
    "lat": 37.47420787
  },
  {
    "shopName": "머무름",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 66",
    "roadAddress": "서울특별시 종로구 인사동12길 5",
    "lng": 126.9847319,
    "lat": 37.57448462
  },
  {
    "shopName": "다정차끓이는솥",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 인사동 178-2",
    "roadAddress": "서울특별시 종로구 인사동5길 3",
    "lng": 126.9859773,
    "lat": 37.57281037
  },
  {
    "shopName": "대익보이차",
    "branchName": "인사점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 18",
    "roadAddress": "서울특별시 종로구 인사동길 34",
    "lng": 126.9856951,
    "lat": 37.57358285
  },
  {
    "shopName": "위드그레텔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 69-43",
    "roadAddress": "서울특별시 도봉구 도봉로129길 32",
    "lng": 127.0366443,
    "lat": 37.65563469
  },
  {
    "shopName": "크라임씬카페퍼즐팩토리",
    "branchName": "강남2호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1308-14",
    "roadAddress": "서울특별시 서초구 서초대로75길 34",
    "lng": 127.0251703,
    "lat": 37.50057003
  },
  {
    "shopName": "히엘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 60-20",
    "roadAddress": "서울특별시 송파구 올림픽로32길 21-23",
    "lng": 127.1108279,
    "lat": 37.51409494
  },
  {
    "shopName": "espresso,그자체",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 장지동 895",
    "roadAddress": "서울특별시 송파구 위례광장로 270",
    "lng": 127.1436591,
    "lat": 37.47706055
  },
  {
    "shopName": "마을카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 560-37",
    "roadAddress": "서울특별시 도봉구 덕릉로60다길 25",
    "lng": 127.0395255,
    "lat": 37.63783573
  },
  {
    "shopName": "복고다방",
    "branchName": "사가정역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 627-1",
    "roadAddress": "서울특별시 중랑구 면목로 290",
    "lng": 127.0862981,
    "lat": 37.5785492
  },
  {
    "shopName": "메가엠지씨포방터",
    "branchName": "시장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 9-329",
    "roadAddress": "서울특별시 서대문구 홍은중앙로 101-1",
    "lng": 126.948411,
    "lat": 37.59971102
  },
  {
    "shopName": "ITTABLE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 834-55",
    "roadAddress": "서울특별시 강남구 역삼로14길 8",
    "lng": 127.0352292,
    "lat": 37.49405688
  },
  {
    "shopName": "삼손이네커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 966-4",
    "roadAddress": "서울특별시 강남구 역삼로 536",
    "lng": 127.0616826,
    "lat": 37.50381215
  },
  {
    "shopName": "그남자의손",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 302-36",
    "roadAddress": "서울특별시 성동구 연무장길 17",
    "lng": 127.051394,
    "lat": 37.54372772
  },
  {
    "shopName": "MERCI",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 묵정동 22-22",
    "roadAddress": "서울특별시 중구 퇴계로50길 53",
    "lng": 127.0011098,
    "lat": 37.56032479
  },
  {
    "shopName": "클로드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 244-2",
    "roadAddress": "서울특별시 마포구 백범로16안길 21",
    "lng": 126.94323,
    "lat": 37.54643143
  },
  {
    "shopName": "라이딩하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 806-9",
    "roadAddress": "서울특별시 광진구 자양번영로 66",
    "lng": 127.0765506,
    "lat": 37.5354212
  },
  {
    "shopName": "홀로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1020-15",
    "roadAddress": "서울특별시 동작구 동작대로9길 32",
    "lng": 126.9798172,
    "lat": 37.48072431
  },
  {
    "shopName": "퍼프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 334-6",
    "roadAddress": "서울특별시 마포구 와우산로29다길 10",
    "lng": 126.9276473,
    "lat": 37.55511212
  },
  {
    "shopName": "에그허그",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 245-7",
    "roadAddress": "서울특별시 광진구 천호대로143길 8-5",
    "lng": 127.1032625,
    "lat": 37.54604324
  },
  {
    "shopName": "cafeNOAH",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 768-6",
    "roadAddress": "서울특별시 양천구 목동중앙남로3길 23",
    "lng": 126.8663497,
    "lat": 37.53571682
  },
  {
    "shopName": "보드게임카페홈즈앤루팡",
    "branchName": "신촌점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 창천동 18-21",
    "roadAddress": "서울특별시 서대문구 연세로 12",
    "lng": 126.9371781,
    "lat": 37.55662194
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "독바위역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 불광동 13-18",
    "roadAddress": "서울특별시 은평구 불광로 130-1",
    "lng": 126.9331843,
    "lat": 37.61839692
  },
  {
    "shopName": "뒤팡프레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 2-45",
    "roadAddress": "서울특별시 마포구 성암로 217",
    "lng": 126.8956906,
    "lat": 37.57855982
  },
  {
    "shopName": "명칭없음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 57-208",
    "roadAddress": "서울특별시 마포구 월드컵로11길 80",
    "lng": 126.9067633,
    "lat": 37.55374924
  },
  {
    "shopName": "펫후크",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 294-298",
    "roadAddress": "서울특별시 동대문구 망우로18가길 75-2",
    "lng": 127.0603128,
    "lat": 37.58685107
  },
  {
    "shopName": "장군타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성동구 도선동 185-8",
    "roadAddress": "서울특별시 성동구 왕십리로26길 14",
    "lng": 127.0329334,
    "lat": 37.56417591
  },
  {
    "shopName": "카페",
    "branchName": "젤리보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 96-9",
    "roadAddress": "서울특별시 강남구 언주로148길 33",
    "lng": 127.0372221,
    "lat": 37.52115883
  },
  {
    "shopName": "고호재롯데월드몰점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "레스토커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 77",
    "roadAddress": "서울특별시 광진구 군자로6길 50-5",
    "lng": 127.072056,
    "lat": 37.54566697
  },
  {
    "shopName": "토이토이토이&토마스커피랩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 179-40",
    "roadAddress": "서울특별시 마포구 신촌로4길 5",
    "lng": 126.9286981,
    "lat": 37.55760853
  },
  {
    "shopName": "엄's김밥카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 227-6",
    "roadAddress": "서울특별시 광진구 아차산로 290",
    "lng": 127.0750998,
    "lat": 37.5383653
  },
  {
    "shopName": "냉큼오레오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1115-35",
    "roadAddress": "서울특별시 강서구 화곡로58길 39",
    "lng": 126.8530644,
    "lat": 37.55281632
  },
  {
    "shopName": "에이에이에이비비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 986-8",
    "roadAddress": "서울특별시 양천구 지양로 25",
    "lng": 126.8369018,
    "lat": 37.51867116
  },
  {
    "shopName": "비하인드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 404-26",
    "roadAddress": "서울특별시 마포구 어울마당로5길 18",
    "lng": 126.9196391,
    "lat": 37.54929048
  },
  {
    "shopName": "신대방커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 518-12",
    "roadAddress": "서울특별시 관악구 난곡로 365-5",
    "lng": 126.9132751,
    "lat": 37.48638427
  },
  {
    "shopName": "샐러데이중랑세무서점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 181-32",
    "roadAddress": "서울특별시 중랑구 봉우재로14길 26",
    "lng": 127.0780907,
    "lat": 37.58951419
  },
  {
    "shopName": "먹고싶지롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 24-23",
    "roadAddress": "서울특별시 은평구 진흥로1길 48",
    "lng": 126.9184654,
    "lat": 37.60463935
  },
  {
    "shopName": "블랙조커",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 봉천동 972-5",
    "roadAddress": "서울특별시 관악구 봉천로 227",
    "lng": 126.9270972,
    "lat": 37.4900247
  },
  {
    "shopName": "더벤티",
    "branchName": "방학역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 619-20",
    "roadAddress": "서울특별시 도봉구 도봉로153길 14",
    "lng": 127.0427049,
    "lat": 37.66996537
  },
  {
    "shopName": "행운보다행복",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 갈월동 53-21",
    "roadAddress": "서울특별시 용산구 두텁바위로1길 26",
    "lng": 126.9738406,
    "lat": 37.54565621
  },
  {
    "shopName": "겨울이머무는집",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 마포구 서교동 409-18",
    "roadAddress": "서울특별시 마포구 와우산로17길 19-5",
    "lng": 126.9218478,
    "lat": 37.54995041
  },
  {
    "shopName": "비마이크림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 2-35",
    "roadAddress": "서울특별시 광진구 군자로 8",
    "lng": 127.0718823,
    "lat": 37.54416085
  },
  {
    "shopName": "크레츄잇",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 94-29",
    "roadAddress": "서울특별시 관악구 신림로38길 25",
    "lng": 126.9383288,
    "lat": 37.47704291
  },
  {
    "shopName": "킹프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 502-1",
    "roadAddress": "서울특별시 중랑구 면목로 375",
    "lng": 127.0881718,
    "lat": 37.58551076
  },
  {
    "shopName": "카페은인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 343-1",
    "roadAddress": "서울특별시 강동구 천중로53길 6",
    "lng": 127.1454496,
    "lat": 37.54119303
  },
  {
    "shopName": "행운커피호프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 487-2",
    "roadAddress": "서울특별시 중랑구 망우로 431",
    "lng": 127.1000328,
    "lat": 37.60003654
  },
  {
    "shopName": "반코디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 251-140",
    "roadAddress": "서울특별시 광진구 자양로26길 20",
    "lng": 127.0850406,
    "lat": 37.54159642
  },
  {
    "shopName": "디저트39",
    "branchName": "구의점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 248-94",
    "roadAddress": "서울특별시 광진구 아차산로51길 82",
    "lng": 127.0852794,
    "lat": 37.54057107
  },
  {
    "shopName": "디자인1팀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 90-105",
    "roadAddress": "서울특별시 서대문구 이화여대1안길 3",
    "lng": 126.9444665,
    "lat": 37.55745321
  },
  {
    "shopName": "캔캔커피",
    "branchName": "사당점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 169-8",
    "roadAddress": "서울특별시 동작구 사당로17길 52",
    "lng": 126.9720437,
    "lat": 37.48857719
  },
  {
    "shopName": "트릿",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 63-70",
    "roadAddress": "서울특별시 용산구 서빙고로 17",
    "lng": 126.9665514,
    "lat": 37.52689595
  },
  {
    "shopName": "폴바셋AK플라자",
    "branchName": "홍대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 190-1",
    "roadAddress": "서울특별시 마포구 양화로 188",
    "lng": 126.926478,
    "lat": 37.55773253
  },
  {
    "shopName": "퍼피프렌즈",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 송파구 송파동 32-1",
    "roadAddress": "서울특별시 송파구 석촌호수로 268",
    "lng": 127.1057108,
    "lat": 37.5097042
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "봉천중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 922-24",
    "roadAddress": "서울특별시 관악구 남부순환로 1742",
    "lng": 126.9434841,
    "lat": 37.48188272
  },
  {
    "shopName": "크로플각",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 60-145",
    "roadAddress": "서울특별시 성북구 오패산로 24-5",
    "lng": 127.0375984,
    "lat": 37.60451768
  },
  {
    "shopName": "명칭없음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 383-82",
    "roadAddress": "서울특별시 마포구 동교로46길 42-5",
    "lng": 126.9267472,
    "lat": 37.56184371
  },
  {
    "shopName": "카페날개",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 397-28",
    "roadAddress": "서울특별시 은평구 응암로22길 16",
    "lng": 126.9197143,
    "lat": 37.59345997
  },
  {
    "shopName": "재즈런치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 145-20",
    "roadAddress": "서울특별시 송파구 송이로23길 14",
    "lng": 127.1248337,
    "lat": 37.49552957
  },
  {
    "shopName": "뵈르마지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 336-9",
    "roadAddress": "서울특별시 동대문구 이문로 4",
    "lng": 127.0541222,
    "lat": 37.58841449
  },
  {
    "shopName": "에그맛있다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 노고산동 54-76",
    "roadAddress": "서울특별시 마포구 신촌로12길 19",
    "lng": 126.932724,
    "lat": 37.55546447
  },
  {
    "shopName": "프레셔나인커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 633-5",
    "roadAddress": "서울특별시 광진구 동일로62길 17",
    "lng": 127.0751523,
    "lat": 37.55976566
  },
  {
    "shopName": "씨스터브레드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 224-51",
    "roadAddress": "서울특별시 마포구 동교로52길 20-4",
    "lng": 126.9271975,
    "lat": 37.56359582
  },
  {
    "shopName": "텅플래니트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 518-11",
    "roadAddress": "서울특별시 강남구 도산대로11길 31",
    "lng": 127.022095,
    "lat": 37.51957485
  },
  {
    "shopName": "TOUTdessert",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 986-14",
    "roadAddress": "서울특별시 양천구 목동로19길 38",
    "lng": 126.8602037,
    "lat": 37.52470104
  },
  {
    "shopName": "커피베이",
    "branchName": "방배카페거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 761-7",
    "roadAddress": "서울특별시 서초구 방배중앙로 185",
    "lng": 126.9856091,
    "lat": 37.49556047
  },
  {
    "shopName": "GS25",
    "branchName": "마곡9단지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 744",
    "roadAddress": "서울특별시 강서구 공항대로 103",
    "lng": 126.8191553,
    "lat": 37.56228526
  },
  {
    "shopName": "더150무인카페마곡보타닉",
    "branchName": "3점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 771-3",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 11",
    "lng": 126.82864,
    "lat": 37.56086602
  },
  {
    "shopName": "은평다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 98-6",
    "roadAddress": "서울특별시 은평구 은평로12길 6",
    "lng": 126.9250603,
    "lat": 37.60045575
  },
  {
    "shopName": "카페정성",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 능동 380",
    "roadAddress": "서울특별시 광진구 천호대로112길 68",
    "lng": 127.0800088,
    "lat": 37.55325297
  },
  {
    "shopName": "파란새싹",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 409-256",
    "roadAddress": "서울특별시 관악구 서원10길 2",
    "lng": 126.9322821,
    "lat": 37.47610539
  },
  {
    "shopName": "디앤케이149",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 86-2",
    "roadAddress": "서울특별시 서대문구 연희로 149",
    "lng": 126.9338291,
    "lat": 37.57083717
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "신길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 2363",
    "roadAddress": "서울특별시 영등포구 신풍로 93",
    "lng": 126.9166252,
    "lat": 37.50025514
  },
  {
    "shopName": "요구르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 19-54",
    "roadAddress": "서울특별시 성동구 마조로 17",
    "lng": 127.0404521,
    "lat": 37.55955182
  },
  {
    "shopName": "커피데이즈",
    "branchName": "목동역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 925",
    "roadAddress": "서울특별시 양천구 목동로 186",
    "lng": 126.8663729,
    "lat": 37.52521995
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "개포동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 개포동 186-13",
    "roadAddress": "서울특별시 강남구 개포로 504",
    "lng": 127.0671708,
    "lat": 37.48904222
  },
  {
    "shopName": "라떼는인삼라떼",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 양재동 275-2",
    "roadAddress": "서울특별시 서초구 논현로 79",
    "lng": 127.0447773,
    "lat": 37.47690623
  },
  {
    "shopName": "커넥트91CONNECT91",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 645",
    "roadAddress": "서울특별시 송파구 법원로11길 25",
    "lng": 127.1162166,
    "lat": 37.48494102
  },
  {
    "shopName": "하삼동커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 35-20",
    "roadAddress": "서울특별시 강북구 도봉로 40",
    "lng": 127.0304153,
    "lat": 37.61258626
  },
  {
    "shopName": "요거프레소",
    "branchName": "신목동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 753-12",
    "roadAddress": "서울특별시 양천구 목동중앙로 89",
    "lng": 126.8719493,
    "lat": 37.53730221
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "촬영소사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 2-146",
    "roadAddress": "서울특별시 동대문구 답십리로 233",
    "lng": 127.0660685,
    "lat": 37.57295758
  },
  {
    "shopName": "니생각이났어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 413-38",
    "roadAddress": "서울특별시 마포구 포은로 72",
    "lng": 126.9059946,
    "lat": 37.55368806
  },
  {
    "shopName": "디저트39",
    "branchName": "거여역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 36-4",
    "roadAddress": "서울특별시 송파구 오금로 519",
    "lng": 127.1465068,
    "lat": 37.49309308
  },
  {
    "shopName": "과일연구소당도",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 풍납동 399-14",
    "roadAddress": "서울특별시 송파구 강동대로9길 13-1",
    "lng": 127.1163222,
    "lat": 37.52779621
  },
  {
    "shopName": "블랙비치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 340-67",
    "roadAddress": "서울특별시 중구 다산로18길 8",
    "lng": 127.0122818,
    "lat": 37.55685965
  },
  {
    "shopName": "더벤티",
    "branchName": "중계은행사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 366-6",
    "roadAddress": "서울특별시 노원구 한글비석로 264",
    "lng": 127.0773179,
    "lat": 37.65114831
  },
  {
    "shopName": "LIKEBAKESHOP",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 598-166",
    "roadAddress": "서울특별시 관악구 법원단지5나길 2",
    "lng": 126.9194441,
    "lat": 37.47494346
  },
  {
    "shopName": "고나카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 구산동 384",
    "roadAddress": "서울특별시 은평구 서오릉로21길 41",
    "lng": 126.9067258,
    "lat": 37.61282966
  },
  {
    "shopName": "일록",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 257-4",
    "roadAddress": "서울특별시 광진구 천호대로143길 34",
    "lng": 127.1038612,
    "lat": 37.54707499
  },
  {
    "shopName": "명칭없음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 30-3",
    "roadAddress": "서울특별시 관악구 관악로24길 14",
    "lng": 126.9555329,
    "lat": 37.48380998
  },
  {
    "shopName": "카페비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동2가 34-15",
    "roadAddress": "서울특별시 영등포구 영등포로5길 31",
    "lng": 126.8845167,
    "lat": 37.52463584
  },
  {
    "shopName": "카페홈즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-3",
    "roadAddress": "서울특별시 강서구 공항대로 220",
    "lng": 126.8317527,
    "lat": 37.55868933
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "마곡이너매스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-15",
    "roadAddress": "서울특별시 강서구 마곡중앙2로 35",
    "lng": 126.8305191,
    "lat": 37.55795629
  },
  {
    "shopName": "에그카페24",
    "branchName": "상도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 210-213",
    "roadAddress": "서울특별시 동작구 양녕로25길 10",
    "lng": 126.9431498,
    "lat": 37.49838697
  },
  {
    "shopName": "오가다",
    "branchName": "세라젬롯데백화점관악점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 봉천동 729-22",
    "roadAddress": "서울특별시 관악구 보라매로3길 31",
    "lng": 126.9250657,
    "lat": 37.49053785
  },
  {
    "shopName": "5mei",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 3-16",
    "roadAddress": "서울특별시 동대문구 경희대로4길 38",
    "lng": 127.0543845,
    "lat": 37.59184056
  },
  {
    "shopName": "퓨메라",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 송파구 문정동 639-5",
    "roadAddress": "서울특별시 송파구 정의로7길 13",
    "lng": 127.1151044,
    "lat": 37.48528411
  },
  {
    "shopName": "테베르베이크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 42-15",
    "roadAddress": "서울특별시 강서구 공항대로4길 16",
    "lng": 126.8106267,
    "lat": 37.5604967
  },
  {
    "shopName": "만랩커피",
    "branchName": "대치점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 976-8",
    "roadAddress": "서울특별시 강남구 삼성로72길 64",
    "lng": 127.063349,
    "lat": 37.50078881
  },
  {
    "shopName": "금남커퓌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 320-1",
    "roadAddress": "서울특별시 노원구 노원로30길 45",
    "lng": 127.069742,
    "lat": 37.6552516
  },
  {
    "shopName": "카페진진",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 648-62",
    "roadAddress": "서울특별시 동대문구 답십리로 68",
    "lng": 127.0483891,
    "lat": 37.57535733
  },
  {
    "shopName": "폴바셋구로G",
    "branchName": "타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 832",
    "roadAddress": "서울특별시 구로구 디지털로26길 38",
    "lng": 126.8953022,
    "lat": 37.47983817
  },
  {
    "shopName": "냥냥하우스",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강동구 강일동 676",
    "roadAddress": "서울특별시 강동구 아리수로93길 33-9",
    "lng": 127.1731742,
    "lat": 37.56571893
  },
  {
    "shopName": "더치프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 산56-1",
    "roadAddress": "서울특별시 관악구 관악로 1",
    "lng": 126.9592795,
    "lat": 37.46802955
  },
  {
    "shopName": "우주곰커피",
    "branchName": "영등포구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 328",
    "roadAddress": "서울특별시 영등포구 양산로 127",
    "lng": 126.8971279,
    "lat": 37.52406949
  },
  {
    "shopName": "카페",
    "branchName": "에프오",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-1",
    "roadAddress": "서울특별시 강서구 공항대로 212",
    "lng": 126.8307769,
    "lat": 37.55884186
  },
  {
    "shopName": "스타벅스",
    "branchName": "대치한티점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 922-1",
    "roadAddress": "서울특별시 강남구 선릉로 324",
    "lng": 127.0520906,
    "lat": 37.49851845
  },
  {
    "shopName": "하우",
    "branchName": "잠실역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 8",
    "roadAddress": "서울특별시 송파구 올림픽로 265",
    "lng": 127.1006503,
    "lat": 37.51384669
  },
  {
    "shopName": "카페",
    "branchName": "피글렛",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 60-8",
    "roadAddress": "서울특별시 송파구 백제고분로36길 26",
    "lng": 127.1009915,
    "lat": 37.50331591
  },
  {
    "shopName": "컨티넨탈커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 용답동 43-8",
    "roadAddress": "서울특별시 성동구 용답23길 19",
    "lng": 127.0537613,
    "lat": 37.56235337
  },
  {
    "shopName": "커피에반하다",
    "branchName": "홍제역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 315-12",
    "roadAddress": "서울특별시 서대문구 통일로37길 23",
    "lng": 126.9441941,
    "lat": 37.58717602
  },
  {
    "shopName": "카페",
    "branchName": "트리니티",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1017-6",
    "roadAddress": "서울특별시 동작구 동작대로11길 58",
    "lng": 126.9782934,
    "lat": 37.4813599
  },
  {
    "shopName": "예고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1628-5",
    "roadAddress": "서울특별시 서초구 사임당로18길 18",
    "lng": 127.0190248,
    "lat": 37.48879643
  },
  {
    "shopName": "프롬하츠커피",
    "branchName": "응암점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 107-19",
    "roadAddress": "서울특별시 은평구 응암로 278",
    "lng": 126.9196501,
    "lat": 37.59633368
  },
  {
    "shopName": "벤티프레소",
    "branchName": "여의도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 12-3",
    "roadAddress": "서울특별시 영등포구 은행로 54",
    "lng": 126.9245258,
    "lat": 37.52975546
  },
  {
    "shopName": "공차",
    "branchName": "암사역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 502-18",
    "roadAddress": "서울특별시 강동구 올림픽로 777",
    "lng": 127.1273941,
    "lat": 37.55050404
  },
  {
    "shopName": "피넛커피",
    "branchName": "강동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 고덕동 165-9",
    "roadAddress": "서울특별시 강동구 아리수로 376-1",
    "lng": 127.1699348,
    "lat": 37.56182166
  },
  {
    "shopName": "카페",
    "branchName": "토모무인",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 10",
    "roadAddress": "서울특별시 동대문구 사가정로 148",
    "lng": 127.0615165,
    "lat": 37.57665181
  },
  {
    "shopName": "와플백화점",
    "branchName": "신림점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 1435-1",
    "roadAddress": "서울특별시 관악구 신림동5길 34",
    "lng": 126.9274184,
    "lat": 37.48574763
  },
  {
    "shopName": "cafe희&희",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 663-13",
    "roadAddress": "서울특별시 강서구 화곡로61길 122",
    "lng": 126.8457767,
    "lat": 37.55864706
  },
  {
    "shopName": "커피식구",
    "branchName": "삼성점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 38-30",
    "roadAddress": "서울특별시 강남구 봉은사로 415",
    "lng": 127.0455975,
    "lat": 37.51108094
  },
  {
    "shopName": "디저트로이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 636-30",
    "roadAddress": "서울특별시 강남구 압구정로42길 30",
    "lng": 127.0348502,
    "lat": 37.52701433
  },
  {
    "shopName": "그린페이지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 298-9",
    "roadAddress": "서울특별시 강동구 천호대로221길 27",
    "lng": 127.172565,
    "lat": 37.54813506
  },
  {
    "shopName": "보니또커피문정테라",
    "branchName": "타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 651",
    "roadAddress": "서울특별시 송파구 송파대로 167",
    "lng": 127.1207441,
    "lat": 37.4845513
  },
  {
    "shopName": "로와이드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-290",
    "roadAddress": "서울특별시 성동구 서울숲2길 22-1",
    "lng": 127.0410326,
    "lat": 37.54693285
  },
  {
    "shopName": "오토빈스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 227-1",
    "roadAddress": "서울특별시 마포구 연희로 35",
    "lng": 126.9269836,
    "lat": 37.56193596
  },
  {
    "shopName": "메리버터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 93-42",
    "roadAddress": "서울특별시 동대문구 사가정로25길 28-1",
    "lng": 127.0707231,
    "lat": 37.58010356
  },
  {
    "shopName": "쌍계명차티하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1050-12",
    "roadAddress": "서울특별시 양천구 중앙로36길 14",
    "lng": 126.8555896,
    "lat": 37.51941237
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "전농동아점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 645-2",
    "roadAddress": "서울특별시 동대문구 서울시립대로 31",
    "lng": 127.0458538,
    "lat": 37.57530984
  },
  {
    "shopName": "은솔카페&샵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 488-17",
    "roadAddress": "서울특별시 강동구 구천면로 311-1",
    "lng": 127.1347164,
    "lat": 37.54756643
  },
  {
    "shopName": 428,
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 269-122",
    "roadAddress": "서울특별시 성동구 뚝섬로 428",
    "lng": 127.0579515,
    "lat": 37.53790536
  },
  {
    "shopName": "커피위드구루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 응암동 592-72",
    "roadAddress": "서울특별시 은평구 응암로13길 27",
    "lng": 126.9143827,
    "lat": 37.5886536
  },
  {
    "shopName": "감성커피",
    "branchName": "성신여대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동1가 3-1",
    "roadAddress": "서울특별시 성북구 동소문로20나길 18",
    "lng": 127.0176249,
    "lat": 37.59211699
  },
  {
    "shopName": "더비너브로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 740-14",
    "roadAddress": "서울특별시 서초구 강남대로79길 42",
    "lng": 127.0217375,
    "lat": 37.50449727
  },
  {
    "shopName": "얼티밋",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 계동 100-1",
    "roadAddress": "서울특별시 종로구 계동길 57",
    "lng": 126.9865948,
    "lat": 37.57987082
  },
  {
    "shopName": "삼거리커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 313-3",
    "roadAddress": "서울특별시 동대문구 장한로 200",
    "lng": 127.0724665,
    "lat": 37.57828815
  },
  {
    "shopName": "삼삼공데이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 642-6",
    "roadAddress": "서울특별시 강남구 논현로 507",
    "lng": 127.0361391,
    "lat": 37.5015701
  },
  {
    "shopName": "카페게이트",
    "branchName": "북한산성점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 279-50",
    "roadAddress": "서울특별시 은평구 대서문길 23",
    "lng": 126.947926,
    "lat": 37.65663378
  },
  {
    "shopName": "카페그릭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 651-3",
    "roadAddress": "서울특별시 송파구 법원로 96",
    "lng": 127.1209539,
    "lat": 37.48402123
  },
  {
    "shopName": "카페마음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 36-2",
    "roadAddress": "서울특별시 영등포구 국제금융로6길 33",
    "lng": 126.9268944,
    "lat": 37.52078459
  },
  {
    "shopName": "운영카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 500-18",
    "roadAddress": "서울특별시 동작구 상도로 385",
    "lng": 126.9552437,
    "lat": 37.49482728
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "봉일시장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 951-1",
    "roadAddress": "서울특별시 관악구 은천로 36",
    "lng": 126.9392082,
    "lat": 37.48601627
  },
  {
    "shopName": "카페원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 546-23",
    "roadAddress": "서울특별시 중랑구 신내로 56-1",
    "lng": 127.0956899,
    "lat": 37.60423825
  },
  {
    "shopName": "비올레따양과점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 103-62",
    "roadAddress": "서울특별시 도봉구 도봉로109길 35-5",
    "lng": 127.0314445,
    "lat": 37.64675297
  },
  {
    "shopName": "케키포유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 39-101",
    "roadAddress": "서울특별시 동대문구 천호대로37길 45",
    "lng": 127.0421645,
    "lat": 37.57520788
  },
  {
    "shopName": "비유어거트",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 역삼동 825-20",
    "roadAddress": "서울특별시 강남구 테헤란로4길 6",
    "lng": 127.0294596,
    "lat": 37.49772197
  },
  {
    "shopName": "어보블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 794",
    "roadAddress": "서울특별시 강서구 방화대로37길 35",
    "lng": 126.8144752,
    "lat": 37.56977095
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "종로공평점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 공평동 124",
    "roadAddress": "서울특별시 종로구 삼봉로 100",
    "lng": 126.9826953,
    "lat": 37.57190813
  },
  {
    "shopName": "데이원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 용강동 494-74",
    "roadAddress": "서울특별시 마포구 대흥로6길 6-1",
    "lng": 126.9383578,
    "lat": 37.54287366
  },
  {
    "shopName": "커피브라더",
    "branchName": "역촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 468-5",
    "roadAddress": "서울특별시 은평구 연서로17길 9",
    "lng": 126.9161409,
    "lat": 37.6126372
  },
  {
    "shopName": "엠엠티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 1012",
    "roadAddress": "서울특별시 동대문구 사가정로 80",
    "lng": 127.0549119,
    "lat": 37.57521151
  },
  {
    "shopName": "아이캔커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 957-6",
    "roadAddress": "서울특별시 관악구 은천로 14",
    "lng": 126.9367761,
    "lat": 37.48608451
  },
  {
    "shopName": "카페뚜레쥬르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 우이동 71-34",
    "roadAddress": "서울특별시 강북구 삼양로 543",
    "lng": 127.0123795,
    "lat": 37.65139741
  },
  {
    "shopName": "레인드롭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 219-5",
    "roadAddress": "서울특별시 은평구 연서로 524",
    "lng": 126.9375019,
    "lat": 37.64054713
  },
  {
    "shopName": "별담",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 874-6",
    "roadAddress": "서울특별시 금천구 시흥대로62길 58",
    "lng": 126.9027278,
    "lat": 37.45682245
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "군자역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 능동 279-4",
    "roadAddress": "서울특별시 광진구 능동로 294",
    "lng": 127.0790829,
    "lat": 37.55584078
  },
  {
    "shopName": "팩트사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 연남동 373-10",
    "roadAddress": "서울특별시 마포구 동교로 227-11",
    "lng": 126.9234915,
    "lat": 37.56076886
  },
  {
    "shopName": "더벤티",
    "branchName": "항동SKV1점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 항동 산51-1",
    "roadAddress": "서울특별시 구로구 부광로 88",
    "lng": 126.8167167,
    "lat": 37.47736526
  },
  {
    "shopName": "초월스터디카페",
    "branchName": "먹골점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 174-4",
    "roadAddress": "서울특별시 중랑구 공릉로2길 7",
    "lng": 127.0782521,
    "lat": 37.61223075
  },
  {
    "shopName": "퀸스포춘타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 대치동 992",
    "roadAddress": "서울특별시 강남구 영동대로57길 28",
    "lng": 127.0653276,
    "lat": 37.49993046
  },
  {
    "shopName": "카페",
    "branchName": "휴그린",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 15-31",
    "roadAddress": "서울특별시 성북구 개운사길 22-4",
    "lng": 127.0295088,
    "lat": 37.58733166
  },
  {
    "shopName": "모리셔스브라운",
    "branchName": "가양홈플러스점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 가양동 18-24",
    "roadAddress": "서울특별시 강서구 양천로 431",
    "lng": 126.8499461,
    "lat": 37.56425613
  },
  {
    "shopName": "카페",
    "branchName": "넘버스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 개포동 1190-6",
    "roadAddress": "서울특별시 강남구 논현로6길 5",
    "lng": 127.0500824,
    "lat": 37.47312851
  },
  {
    "shopName": "영스테이",
    "branchName": "공릉점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 노원구 공릉동 633-13",
    "roadAddress": "서울특별시 노원구 공릉로 107",
    "lng": 127.0777485,
    "lat": 37.61998478
  },
  {
    "shopName": "파머스빈",
    "branchName": "가산디지털점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-3",
    "roadAddress": "서울특별시 금천구 디지털로9길 68",
    "lng": 126.8863971,
    "lat": 37.48107009
  },
  {
    "shopName": "커피감옥",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 623-44",
    "roadAddress": "서울특별시 중랑구 면목로40길 22",
    "lng": 127.0882776,
    "lat": 37.57869065
  },
  {
    "shopName": "카페",
    "branchName": "사우스야라",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 120-12",
    "roadAddress": "서울특별시 광진구 용마산로3길 29",
    "lng": 127.0863694,
    "lat": 37.55603254
  },
  {
    "shopName": "티,파니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 371-59",
    "roadAddress": "서울특별시 금천구 가산디지털1로 149",
    "lng": 126.8818415,
    "lat": 37.4787294
  },
  {
    "shopName": "댕선생",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 신월동 151-6",
    "roadAddress": "서울특별시 양천구 가로공원로 78",
    "lng": 126.8245627,
    "lat": 37.53509201
  },
  {
    "shopName": "쿠쿠스무스카페24",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 346-31",
    "roadAddress": "서울특별시 마포구 홍익로2길 23",
    "lng": 126.9238396,
    "lat": 37.55467201
  },
  {
    "shopName": "오월의햇살",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 744",
    "roadAddress": "서울특별시 관악구 미성길 64",
    "lng": 126.9135047,
    "lat": 37.47442946
  },
  {
    "shopName": "카페",
    "branchName": "리버티",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 258",
    "roadAddress": "서울특별시 용산구 독서당로 70",
    "lng": 127.0085606,
    "lat": 37.53359948
  },
  {
    "shopName": "오늘요거",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 57-88",
    "roadAddress": "서울특별시 마포구 월드컵로17길 37",
    "lng": 126.9080369,
    "lat": 37.55566222
  },
  {
    "shopName": "나절",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 644-1",
    "roadAddress": "서울특별시 동작구 신대방2길 12",
    "lng": 126.9131841,
    "lat": 37.48797829
  },
  {
    "shopName": "아이캔커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 396-3",
    "roadAddress": "서울특별시 강동구 천호대로185길 64",
    "lng": 127.1418354,
    "lat": 37.53664352
  },
  {
    "shopName": "한강에스프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 456-27",
    "roadAddress": "서울특별시 마포구 희우정로 97",
    "lng": 126.9018605,
    "lat": 37.55390197
  },
  {
    "shopName": "청순커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 구산동 15-18",
    "roadAddress": "서울특별시 은평구 갈현로 133",
    "lng": 126.9109035,
    "lat": 37.60984084
  },
  {
    "shopName": "몽타라이브스튜디오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 47-7",
    "roadAddress": "서울특별시 강남구 강남대로136길 22",
    "lng": 127.0222019,
    "lat": 37.51311519
  },
  {
    "shopName": "조선호텔앤리조트센터필드라운지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 676",
    "roadAddress": "서울특별시 강남구 테헤란로 231",
    "lng": 127.0413363,
    "lat": 37.50287387
  },
  {
    "shopName": "커피사피엔스파인스퀘어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 799-11",
    "roadAddress": "서울특별시 강서구 마곡중앙4로 22",
    "lng": 126.8292693,
    "lat": 37.55826828
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "강서세무서점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 744",
    "roadAddress": "서울특별시 강서구 공항대로 103",
    "lng": 126.8191553,
    "lat": 37.56228526
  },
  {
    "shopName": "타로아라시",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 삼성동 114-20",
    "roadAddress": "서울특별시 강남구 봉은사로68길 6-10",
    "lng": 127.0489881,
    "lat": 37.51129751
  },
  {
    "shopName": "디카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 옥수동 471-2",
    "roadAddress": "서울특별시 성동구 독서당로39길 48",
    "lng": 127.0109581,
    "lat": 37.54054864
  },
  {
    "shopName": "고양이나무",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 화곡동 61-28",
    "roadAddress": "서울특별시 강서구 까치산로 46",
    "lng": 126.8449739,
    "lat": 37.5431955
  },
  {
    "shopName": "해머스미스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1694-13",
    "roadAddress": "서울특별시 서초구 서초대로51길 11",
    "lng": 127.0140243,
    "lat": 37.49500812
  },
  {
    "shopName": "카페",
    "branchName": "보스수유점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 483-13",
    "roadAddress": "서울특별시 강북구 삼양로77가길 18",
    "lng": 127.0165791,
    "lat": 37.62941124
  },
  {
    "shopName": "홍콩다방구로",
    "branchName": "지플러스타워점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 222-31",
    "roadAddress": "서울특별시 구로구 디지털로26길 123",
    "lng": 126.8976856,
    "lat": 37.48306816
  },
  {
    "shopName": "프린트카페숭실대",
    "branchName": "정문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 488",
    "roadAddress": "서울특별시 동작구 상도로 357",
    "lng": 126.9534955,
    "lat": 37.49692927
  },
  {
    "shopName": "웰스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 와룡동 94-1",
    "roadAddress": "서울특별시 종로구 돈화문로 82",
    "lng": 126.9907713,
    "lat": 37.57576182
  },
  {
    "shopName": "좋은카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 798-5",
    "roadAddress": "서울특별시 강서구 마곡중앙로 59-21",
    "lng": 126.8242244,
    "lat": 37.5587948
  },
  {
    "shopName": "건강한커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동3가 15-1",
    "roadAddress": "서울특별시 영등포구 양산로 53",
    "lng": 126.8889028,
    "lat": 37.52562328
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "미아점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 310-1",
    "roadAddress": "서울특별시 강북구 도봉로 175",
    "lng": 127.0265928,
    "lat": 37.6242953
  },
  {
    "shopName": "콘레드커피",
    "branchName": "종로구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 청진동 2-2",
    "roadAddress": "서울특별시 종로구 삼봉로 60",
    "lng": 126.9804035,
    "lat": 37.5722758
  },
  {
    "shopName": "메가사주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 신림동 251-292",
    "roadAddress": "서울특별시 관악구 신림로11길 89-13",
    "lng": 126.9394614,
    "lat": 37.46650176
  },
  {
    "shopName": "현대사주학",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 삼전동 104-7",
    "roadAddress": "서울특별시 송파구 백제고분로27길 16-18",
    "lng": 127.094059,
    "lat": 37.50420005
  },
  {
    "shopName": "킴신의타로집",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동대문구 이문동 349-65",
    "roadAddress": "서울특별시 동대문구 이문로9가길 20",
    "lng": 127.056329,
    "lat": 37.59746962
  },
  {
    "shopName": "51보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1050-3",
    "roadAddress": "서울특별시 영등포구 도림로38길 1",
    "lng": 126.8973161,
    "lat": 37.49282305
  },
  {
    "shopName": "카페포스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 712-71",
    "roadAddress": "서울특별시 성북구 솔샘로16길 11",
    "lng": 127.0057818,
    "lat": 37.61159739
  },
  {
    "shopName": "카페",
    "branchName": "강서보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1120-1",
    "roadAddress": "서울특별시 강서구 화곡로58길 30",
    "lng": 126.8524326,
    "lat": 37.55269305
  },
  {
    "shopName": "커피무드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 218-24",
    "roadAddress": "서울특별시 은평구 연서로24길 6",
    "lng": 126.9194774,
    "lat": 37.61610072
  },
  {
    "shopName": "소소정찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 사당동 1049-15",
    "roadAddress": "서울특별시 동작구 남부순환로 2027",
    "lng": 126.9738725,
    "lat": 37.47640183
  },
  {
    "shopName": "장군커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 주교동 43-17",
    "roadAddress": "서울특별시 중구 창경궁로8길 33",
    "lng": 126.9997743,
    "lat": 37.56878329
  },
  {
    "shopName": "슈에뜨보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 317-5",
    "roadAddress": "서울특별시 성동구 성수이로 96",
    "lng": 127.0570218,
    "lat": 37.5434394
  },
  {
    "shopName": "땡일리강아지유치원",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 성북구 장위동 218-3",
    "roadAddress": "서울특별시 성북구 월계로32길 24",
    "lng": 127.0450048,
    "lat": 37.61872417
  },
  {
    "shopName": "포레타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 346-7",
    "roadAddress": "서울특별시 마포구 홍익로2길 27-15",
    "lng": 126.9241341,
    "lat": 37.55544057
  },
  {
    "shopName": "샤로수타로샵",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1610-1",
    "roadAddress": "서울특별시 관악구 관악로14길 46",
    "lng": 126.9551075,
    "lat": 37.47862516
  },
  {
    "shopName": "타로공간101",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 대치동 956-6",
    "roadAddress": "서울특별시 강남구 테헤란로88길 22",
    "lng": 127.0600245,
    "lat": 37.50615973
  },
  {
    "shopName": "사주풍수건강상담",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강북구 번동 429-82",
    "roadAddress": "서울특별시 강북구 덕릉로 200-4",
    "lng": 127.0360127,
    "lat": 37.63611314
  },
  {
    "shopName": "카페이월",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 260-23",
    "roadAddress": "서울특별시 강북구 삼양로124길 14-1",
    "lng": 127.016723,
    "lat": 37.64514449
  },
  {
    "shopName": "블루문타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 용산구 이태원동 137-67",
    "roadAddress": "서울특별시 용산구 우사단로 36",
    "lng": 126.9957211,
    "lat": 37.53340989
  },
  {
    "shopName": "힐링타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동대문구 장안동 329-2",
    "roadAddress": "서울특별시 동대문구 장안벚꽃로1길 7",
    "lng": 127.0744685,
    "lat": 37.57569984
  },
  {
    "shopName": "카페",
    "branchName": "제이제이보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 영등포동2가 94-24",
    "roadAddress": "서울특별시 영등포구 버드나루로7길 7",
    "lng": 126.909975,
    "lat": 37.52282819
  },
  {
    "shopName": "별커피호프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 147-6",
    "roadAddress": "서울특별시 구로구 도림로 94",
    "lng": 126.8935936,
    "lat": 37.49066177
  },
  {
    "shopName": "강남역타로디오라클",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 822-7",
    "roadAddress": "서울특별시 강남구 테헤란로 113",
    "lng": 127.0295227,
    "lat": 37.49896594
  },
  {
    "shopName": "타로마마",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 용산구 이태원동 136-6",
    "roadAddress": "서울특별시 용산구 우사단로14길 4",
    "lng": 126.9959284,
    "lat": 37.53397931
  },
  {
    "shopName": "묘한언니타로&사주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서초구 방배동 934-3",
    "roadAddress": "서울특별시 서초구 서초대로22길 30",
    "lng": 126.9929655,
    "lat": 37.48587401
  },
  {
    "shopName": "서울찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 영등포구 영등포동5가 21-5",
    "roadAddress": "서울특별시 영등포구 영중로14길 9",
    "lng": 126.9063688,
    "lat": 37.520326
  },
  {
    "shopName": "카페엘팡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 711-3",
    "roadAddress": "서울특별시 강남구 언주로 420",
    "lng": 127.0442788,
    "lat": 37.50095143
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "은평뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 65",
    "roadAddress": "서울특별시 은평구 진관3로 21",
    "lng": 126.9189791,
    "lat": 37.63955892
  },
  {
    "shopName": "댕가냥가",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 489-7",
    "roadAddress": "서울특별시 중랑구 봉화산로 115",
    "lng": 127.0870174,
    "lat": 37.60308122
  },
  {
    "shopName": "팔도사주타로모임방",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성북구 상월곡동 71-1",
    "roadAddress": "서울특별시 성북구 장월로1길 80",
    "lng": 127.0441111,
    "lat": 37.60535452
  },
  {
    "shopName": "아쿠아리어스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 359-86",
    "roadAddress": "서울특별시 강서구 가로공원로76길 106",
    "lng": 126.8389491,
    "lat": 37.53254925
  },
  {
    "shopName": "민쓰커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 662-16",
    "roadAddress": "서울특별시 강서구 화곡로61길 64",
    "lng": 126.8488994,
    "lat": 37.55798376
  },
  {
    "shopName": "파이오니어커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 595",
    "roadAddress": "서울특별시 강동구 올림픽로 572",
    "lng": 127.121765,
    "lat": 37.53254934
  },
  {
    "shopName": "카페",
    "branchName": "포에버24시무인",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 219-4",
    "roadAddress": "서울특별시 동대문구 왕산로9길 31",
    "lng": 127.0274951,
    "lat": 37.57849388
  },
  {
    "shopName": "도로시타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 논현동 163",
    "roadAddress": "서울특별시 강남구 강남대로124길 10",
    "lng": 127.0234679,
    "lat": 37.50884566
  },
  {
    "shopName": "타로혜성",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 영등포구 당산동1가 91-3",
    "roadAddress": "서울특별시 영등포구 영신로39길 3",
    "lng": 126.9007641,
    "lat": 37.52143631
  },
  {
    "shopName": "부엉이왕타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동작구 상도동 361-9",
    "roadAddress": "서울특별시 동작구 상도로15아길 12",
    "lng": 126.9349025,
    "lat": 37.5041607
  },
  {
    "shopName": "슬기로운보드게임교실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 노원구 상계동 624",
    "roadAddress": "서울특별시 노원구 동일로227길 26",
    "lng": 127.0535144,
    "lat": 37.67031391
  },
  {
    "shopName": "미타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중랑구 망우동 470-1",
    "roadAddress": "서울특별시 중랑구 망우로 426",
    "lng": 127.0993953,
    "lat": 37.59937392
  },
  {
    "shopName": "돼지보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 구로구 개봉동 403-68",
    "roadAddress": "서울특별시 구로구 개봉로 48",
    "lng": 126.8563791,
    "lat": 37.48991092
  },
  {
    "shopName": "지우&타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 상암동 1752",
    "roadAddress": "서울특별시 마포구 월드컵북로 501",
    "lng": 126.8777236,
    "lat": 37.58233688
  },
  {
    "shopName": "붕붕이커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 409-43",
    "roadAddress": "서울특별시 강서구 초록마을로32길 21-42",
    "lng": 126.8461419,
    "lat": 37.53716097
  },
  {
    "shopName": "이웃집타타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 남현동 1059-6",
    "roadAddress": "서울특별시 관악구 남부순환로272길 9",
    "lng": 126.9784665,
    "lat": 37.47612627
  },
  {
    "shopName": "사주톡길을찾다",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 457",
    "roadAddress": "서울특별시 서대문구 홍은중앙로 81",
    "lng": 126.9466957,
    "lat": 37.59847933
  },
  {
    "shopName": "아재커피",
    "branchName": "충정로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 중림동 500",
    "roadAddress": "서울특별시 중구 서소문로 38",
    "lng": 126.9662021,
    "lat": 37.56039371
  },
  {
    "shopName": "사주봐주는요정",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중랑구 묵동 62-21",
    "roadAddress": "서울특별시 중랑구 숙선옹주로5길 14-19",
    "lng": 127.0815653,
    "lat": 37.61543726
  },
  {
    "shopName": "산체스커피",
    "branchName": "양재점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 264-13",
    "roadAddress": "서울특별시 서초구 마방로10길 18-28",
    "lng": 127.0427129,
    "lat": 37.47565508
  },
  {
    "shopName": "디저트카페마루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 193-38",
    "roadAddress": "서울특별시 중랑구 겸재로 71",
    "lng": 127.0758357,
    "lat": 37.58598248
  },
  {
    "shopName": "주연사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 365-1",
    "roadAddress": "서울특별시 마포구 어울마당로 77",
    "lng": 126.9214222,
    "lat": 37.55199188
  },
  {
    "shopName": "리앤리사주·타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 656-23",
    "roadAddress": "서울특별시 강남구 도산대로49길 34",
    "lng": 127.0371711,
    "lat": 37.52513206
  },
  {
    "shopName": "합정빵다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 367-8",
    "roadAddress": "서울특별시 마포구 토정로3길 22",
    "lng": 126.9145531,
    "lat": 37.54649566
  },
  {
    "shopName": "사주&타로이오",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 792-5",
    "roadAddress": "서울특별시 강남구 논현로67길 50",
    "lng": 127.0359069,
    "lat": 37.49324245
  },
  {
    "shopName": "스타로마",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 금천구 가산동 50-3",
    "roadAddress": "서울특별시 금천구 벚꽃로 298",
    "lng": 126.883859,
    "lat": 37.48143359
  },
  {
    "shopName": "영타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성북구 동선동2가 135-13",
    "roadAddress": "서울특별시 성북구 보문로34길 72",
    "lng": 127.0193031,
    "lat": 37.59107673
  },
  {
    "shopName": "설빙",
    "branchName": "고24대흥점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 8-1",
    "roadAddress": "서울특별시 마포구 숭문길 143",
    "lng": 126.9464918,
    "lat": 37.55267776
  },
  {
    "shopName": "매머드익스프레스커피",
    "branchName": "노원롯데점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 716",
    "roadAddress": "서울특별시 노원구 노해로 485",
    "lng": 127.0619043,
    "lat": 37.65486515
  },
  {
    "shopName": "박수진전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 영등포구 여의도동 14-24",
    "roadAddress": "서울특별시 영등포구 국회대로68길 11",
    "lng": 126.9196571,
    "lat": 37.52922446
  },
  {
    "shopName": "송리단타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 송파동 42-1",
    "roadAddress": "서울특별시 송파구 백제고분로45길 17",
    "lng": 127.1095117,
    "lat": 37.50966984
  },
  {
    "shopName": "이루타로사주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강북구 미아동 860-280",
    "roadAddress": "서울특별시 강북구 도봉로6길 3",
    "lng": 127.0305152,
    "lat": 37.61274025
  },
  {
    "shopName": "작은창고21",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 179-42",
    "roadAddress": "서울특별시 중랑구 동일로101길 11-21",
    "lng": 127.0791789,
    "lat": 37.58849549
  },
  {
    "shopName": "커파커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 25-30",
    "roadAddress": "서울특별시 은평구 진흥로9길 21",
    "lng": 126.9199527,
    "lat": 37.60595046
  },
  {
    "shopName": "토닥토닥타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강서구 방화동 612-2",
    "roadAddress": "서울특별시 강서구 개화동로29길 49",
    "lng": 126.8096654,
    "lat": 37.56401003
  },
  {
    "shopName": "테이크아웃찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 도봉구 쌍문동 138-95",
    "roadAddress": "서울특별시 도봉구 도봉로117길 32",
    "lng": 127.0332168,
    "lat": 37.6498941
  },
  {
    "shopName": "타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 개봉동 344-23",
    "roadAddress": "서울특별시 구로구 개봉로11길 38-32",
    "lng": 126.8540249,
    "lat": 37.48931144
  },
  {
    "shopName": "커피클리닉",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 32-1",
    "roadAddress": "서울특별시 서초구 고무래로 32",
    "lng": 127.0122077,
    "lat": 37.50241763
  },
  {
    "shopName": "이디야커피",
    "branchName": "가오리역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 605-373",
    "roadAddress": "서울특별시 강북구 삼각산로 108",
    "lng": 127.0161485,
    "lat": 37.64058948
  },
  {
    "shopName": "제인사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 논현동 161-16",
    "roadAddress": "서울특별시 강남구 학동로4길 41",
    "lng": 127.0242037,
    "lat": 37.50879768
  },
  {
    "shopName": "인스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 193-27",
    "roadAddress": "서울특별시 강남구 논현로111길 22",
    "lng": 127.0316864,
    "lat": 37.5074446
  },
  {
    "shopName": "혜정사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 345-26",
    "roadAddress": "서울특별시 마포구 와우산로23길 35-3",
    "lng": 126.9233,
    "lat": 37.55441479
  },
  {
    "shopName": "컴보드까페",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 가락동 88",
    "roadAddress": "서울특별시 송파구 중대로9길 29",
    "lng": 127.1184985,
    "lat": 37.49570774
  },
  {
    "shopName": "88-1커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 88-1",
    "roadAddress": "서울특별시 송파구 중대로9길 33",
    "lng": 127.1183696,
    "lat": 37.49609423
  },
  {
    "shopName": "데이즈타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 송파동 119",
    "roadAddress": "서울특별시 송파구 가락로 187",
    "lng": 127.1138935,
    "lat": 37.50546781
  },
  {
    "shopName": "보드게임카페홈즈앤루팡",
    "branchName": "노원점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 노원구 상계동 617",
    "roadAddress": "서울특별시 노원구 상계로 64",
    "lng": 127.0622554,
    "lat": 37.655787
  },
  {
    "shopName": "텍사스보드게임장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 784-4",
    "roadAddress": "서울특별시 강남구 언주로 311",
    "lng": 127.0457194,
    "lat": 37.49528642
  },
  {
    "shopName": "카페",
    "branchName": "이십센치",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1539-14",
    "roadAddress": "서울특별시 관악구 참숯1길 4",
    "lng": 126.9420987,
    "lat": 37.47909508
  },
  {
    "shopName": "카페",
    "branchName": "애플홀덤보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 방배동 426-3",
    "roadAddress": "서울특별시 서초구 방배천로20길 1",
    "lng": 126.982893,
    "lat": 37.48403066
  },
  {
    "shopName": "광자커피",
    "branchName": "천호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 334-9",
    "roadAddress": "서울특별시 강동구 올림픽로77길 14",
    "lng": 127.1240195,
    "lat": 37.54293723
  },
  {
    "shopName": "카페운",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 효창동 286-1",
    "roadAddress": "서울특별시 용산구 백범로51길 6",
    "lng": 126.9591906,
    "lat": 37.54042808
  },
  {
    "shopName": "둘리커피호프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 묵동 239-169",
    "roadAddress": "서울특별시 중랑구 동일로 909",
    "lng": 127.0772418,
    "lat": 37.61149301
  },
  {
    "shopName": "카페",
    "branchName": "똥개네보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 844-4",
    "roadAddress": "서울특별시 강서구 국회대로 201",
    "lng": 126.8572826,
    "lat": 37.52930414
  },
  {
    "shopName": "리프패럿",
    "branchName": "방학동점",
    "category": "애견카페",
    "jibunAddress": "서울특별시 도봉구 방학동 696",
    "roadAddress": "서울특별시 도봉구 도당로 80",
    "lng": 127.0363216,
    "lat": 37.66482257
  },
  {
    "shopName": "카리타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 명일동 15",
    "roadAddress": "서울특별시 강동구 고덕로 210",
    "lng": 127.1492188,
    "lat": 37.55305111
  },
  {
    "shopName": "스타보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 수유동 223-7",
    "roadAddress": "서울특별시 강북구 노해로 34",
    "lng": 127.0230645,
    "lat": 37.63853854
  },
  {
    "shopName": "재미난조각가타로&사주출장소",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 358-125",
    "roadAddress": "서울특별시 마포구 와우산로21길 26",
    "lng": 126.922547,
    "lat": 37.5524797
  },
  {
    "shopName": "더벤티",
    "branchName": "목동하이스트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 408-40",
    "roadAddress": "서울특별시 양천구 목동서로 250",
    "lng": 126.8693295,
    "lat": 37.52495996
  },
  {
    "shopName": "이웃집타타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강서구 염창동 291",
    "roadAddress": "서울특별시 강서구 양천로75길 60",
    "lng": 126.8762081,
    "lat": 37.55209279
  },
  {
    "shopName": "학원",
    "branchName": "구봉철",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중랑구 묵동 234-13",
    "roadAddress": "서울특별시 중랑구 중랑역로 236",
    "lng": 127.0754381,
    "lat": 37.61446134
  },
  {
    "shopName": "빽다방",
    "branchName": "신정네거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1031-1",
    "roadAddress": "서울특별시 양천구 중앙로 276",
    "lng": 126.8528642,
    "lat": 37.52082759
  },
  {
    "shopName": "커피포유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 306-16",
    "roadAddress": "서울특별시 성동구 행당로15길 15-14",
    "lng": 127.0308682,
    "lat": 37.55932937
  },
  {
    "shopName": "치유타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강북구 번동 467-2",
    "roadAddress": "서울특별시 강북구 도봉로96가길 31",
    "lng": 127.0311579,
    "lat": 37.6408939
  },
  {
    "shopName": "커피이레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 829-2",
    "roadAddress": "서울특별시 강서구 금낭화로 287-10",
    "lng": 126.8118398,
    "lat": 37.57676346
  },
  {
    "shopName": "홍대사주연인사주&타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 연남동 390-39",
    "roadAddress": "서울특별시 마포구 동교로38길 33-10",
    "lng": 126.9261515,
    "lat": 37.56154996
  },
  {
    "shopName": "종로강남한의원식품사업부더쌍화",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동대문구 제기동 635-21",
    "roadAddress": "서울특별시 동대문구 왕산로 175",
    "lng": 127.0428433,
    "lat": 37.57966454
  },
  {
    "shopName": "비터커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 103",
    "roadAddress": "서울특별시 강동구 명일로 229",
    "lng": 127.1463995,
    "lat": 37.53926263
  },
  {
    "shopName": "지유명차",
    "branchName": "연희점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 연희동 132-27",
    "roadAddress": "서울특별시 서대문구 연희로15길 27",
    "lng": 126.9304201,
    "lat": 37.56858077
  },
  {
    "shopName": "카페동네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 372-19",
    "roadAddress": "서울특별시 강서구 월정로32길 35",
    "lng": 126.8372393,
    "lat": 37.5355509
  },
  {
    "shopName": "에코타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 광진구 구의동 611",
    "roadAddress": "서울특별시 광진구 광나루로56길 32",
    "lng": 127.0963036,
    "lat": 37.5384754
  },
  {
    "shopName": "영다방",
    "branchName": "중화역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 중화동 312-1",
    "roadAddress": "서울특별시 중랑구 봉화산로 30",
    "lng": 127.0775473,
    "lat": 37.60143076
  },
  {
    "shopName": "공감타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 노원구 공릉동 644-54",
    "roadAddress": "서울특별시 노원구 공릉로20가길 9",
    "lng": 127.07878,
    "lat": 37.61992976
  },
  {
    "shopName": "알리바바커피",
    "branchName": "답십리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 3-11",
    "roadAddress": "서울특별시 동대문구 답십리로 226",
    "lng": 127.0653481,
    "lat": 37.5726275
  },
  {
    "shopName": "나우커피",
    "branchName": "서울상암점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1680",
    "roadAddress": "서울특별시 마포구 월드컵로42길 40",
    "lng": 126.8807212,
    "lat": 37.58024792
  },
  {
    "shopName": "매머드익스프레스우장산",
    "branchName": "롯데캐슬점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1145",
    "roadAddress": "서울특별시 강서구 공항대로 382",
    "lng": 126.8495351,
    "lat": 37.55638612
  },
  {
    "shopName": "카페안온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 노고산동 31-72",
    "roadAddress": "서울특별시 마포구 고산길 19",
    "lng": 126.9381591,
    "lat": 37.55369338
  },
  {
    "shopName": "심풀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 77-2",
    "roadAddress": "서울특별시 강남구 학동로33길 40",
    "lng": 127.0322591,
    "lat": 37.51739692
  },
  {
    "shopName": "비오비애완용품전문점",
    "branchName": "목동점",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 신정동 1005-7",
    "roadAddress": "서울특별시 양천구 목동로15길 5",
    "lng": 126.8640493,
    "lat": 37.52401726
  },
  {
    "shopName": "헬로우,마루네애견운동장",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 구로구 오류동 160-2",
    "roadAddress": "서울특별시 구로구 서해안로 2295",
    "lng": 126.8401362,
    "lat": 37.49168079
  },
  {
    "shopName": "첩보신문/퇴마멸마",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 영등포구 영등포동2가 28-156",
    "roadAddress": "서울특별시 영등포구 국회대로54길 43",
    "lng": 126.90982,
    "lat": 37.5218176
  },
  {
    "shopName": "고전문화",
    "branchName": "청담점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 청담동 123-17",
    "roadAddress": "서울특별시 강남구 도산대로89길 25",
    "lng": 127.0512766,
    "lat": 37.52620133
  },
  {
    "shopName": "펠어커피잠실본동",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 228-7",
    "roadAddress": "서울특별시 송파구 올림픽로12길 62",
    "lng": 127.0829278,
    "lat": 37.50620461
  },
  {
    "shopName": "우리애견샵",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 화곡동 342-57",
    "roadAddress": "서울특별시 강서구 강서로 36",
    "lng": 126.8473769,
    "lat": 37.53117214
  },
  {
    "shopName": "르메이애견",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 목동 747-2",
    "roadAddress": "서울특별시 양천구 목동중앙본로 33",
    "lng": 126.8693522,
    "lat": 37.53919658
  },
  {
    "shopName": "두래애견용품",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 서초구 잠원동 50-5",
    "roadAddress": "서울특별시 서초구 잠원로14길 41",
    "lng": 127.0148585,
    "lat": 37.51672145
  },
  {
    "shopName": "댕댕댕",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 금천구 가산동 234-2",
    "roadAddress": "서울특별시 금천구 두산로11길 63",
    "lng": 126.8935219,
    "lat": 37.47328891
  },
  {
    "shopName": "댕댕스토리",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 노원구 상계동 140-217",
    "roadAddress": "서울특별시 노원구 한글비석로24길 79",
    "lng": 127.0739652,
    "lat": 37.66379059
  },
  {
    "shopName": "설래임엔씨",
    "branchName": "강서점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 689",
    "roadAddress": "서울특별시 강서구 강서로56길 17",
    "lng": 126.8404826,
    "lat": 37.55991971
  },
  {
    "shopName": "허그댕댕",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 종로구 창신동 23-76",
    "roadAddress": "서울특별시 종로구 지봉로 81",
    "lng": 127.0150114,
    "lat": 37.57734517
  },
  {
    "shopName": "자휴정",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도1동 407-6",
    "roadAddress": "서울특별시 동작구 상도로47가길 28",
    "lng": 126.9508237,
    "lat": 37.50117654
  },
  {
    "shopName": "해피댕댕",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동대문구 전농동 127-38",
    "roadAddress": "서울특별시 동대문구 서울시립대로23길 18",
    "lng": 127.0515363,
    "lat": 37.58250092
  },
  {
    "shopName": "8PLUS",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1150",
    "roadAddress": "서울특별시 금천구 벚꽃로 30",
    "lng": 126.8936201,
    "lat": 37.45818823
  },
  {
    "shopName": "론이네무인애완용품할인점",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 화곡동 359-54",
    "roadAddress": "서울특별시 강서구 가로공원로76길 100",
    "lng": 126.8388207,
    "lat": 37.53280929
  },
  {
    "shopName": "르가든",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 17-2",
    "roadAddress": "서울특별시 중구 장충단로13길 20",
    "lng": 127.0076538,
    "lat": 37.56872364
  },
  {
    "shopName": "댕댕츄",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 대치동 901-45",
    "roadAddress": "서울특별시 강남구 삼성로75길 32-9",
    "lng": 127.0551834,
    "lat": 37.50348102
  },
  {
    "shopName": "히코코",
    "branchName": "잠실롯데마트점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 40-1",
    "roadAddress": "서울특별시 송파구 송파대로 521",
    "lng": 127.0981244,
    "lat": 37.51130447
  },
  {
    "shopName": "행복한연구소사주&작명",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 730-4",
    "roadAddress": "서울특별시 강남구 언주로 407",
    "lng": 127.0439024,
    "lat": 37.4994256
  },
  {
    "shopName": "매머드익스프레스봉은사로",
    "branchName": "선정릉점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 114-1",
    "roadAddress": "서울특별시 강남구 봉은사로 438",
    "lng": 127.0478244,
    "lat": 37.51118902
  },
  {
    "shopName": "썸타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 영등포구 영등포동3가 3-14",
    "roadAddress": "서울특별시 영등포구 영등포로46길 3",
    "lng": 126.9079724,
    "lat": 37.51896224
  },
  {
    "shopName": "카페",
    "branchName": "사당보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 방배동 450-8",
    "roadAddress": "서울특별시 서초구 방배천로2안길 17",
    "lng": 126.9837131,
    "lat": 37.47774836
  },
  {
    "shopName": "네가오길기다려",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 서교동 407-17",
    "roadAddress": "서울특별시 마포구 와우산로17길 22",
    "lng": 126.9217866,
    "lat": 37.55026521
  },
  {
    "shopName": "다희의타로다락방",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 50",
    "roadAddress": "서울특별시 영등포구 63로 45",
    "lng": 126.9368918,
    "lat": 37.52179407
  },
  {
    "shopName": "더스몰리스트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 467-44",
    "roadAddress": "서울특별시 동대문구 사가정로 35",
    "lng": 127.0510512,
    "lat": 37.57254948
  },
  {
    "shopName": "닉슈타인커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 63-2",
    "roadAddress": "서울특별시 강동구 천호대로 1178",
    "lng": 127.1423108,
    "lat": 37.53366447
  },
  {
    "shopName": "올웨더",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 124-6",
    "roadAddress": "서울특별시 서대문구 연희로15길 43",
    "lng": 126.9298787,
    "lat": 37.56923362
  },
  {
    "shopName": "나를위한하루날위한커피",
    "branchName": "사당점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 68-1",
    "roadAddress": "서울특별시 동작구 동작대로35길 53",
    "lng": 126.9797449,
    "lat": 37.49186071
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "수락중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1118",
    "roadAddress": "서울특별시 노원구 동일로 1651",
    "lng": 127.0549958,
    "lat": 37.67595723
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "당산중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동5가 42",
    "roadAddress": "서울특별시 영등포구 당산로 214",
    "lng": 126.9028131,
    "lat": 37.53292562
  },
  {
    "shopName": "공원옆펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 신정동 329",
    "roadAddress": "서울특별시 양천구 목동동로 130",
    "lng": 126.8698158,
    "lat": 37.51597223
  },
  {
    "shopName": "가비노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 133-13",
    "roadAddress": "서울특별시 서대문구 연희로15안길 2",
    "lng": 126.9305883,
    "lat": 37.56869041
  },
  {
    "shopName": "링동",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 83-19",
    "roadAddress": "서울특별시 광진구 긴고랑로36길 42",
    "lng": 127.0904038,
    "lat": 37.55746933
  },
  {
    "shopName": "온실커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 436-10",
    "roadAddress": "서울특별시 서초구 방배천로2안길 118",
    "lng": 126.9841846,
    "lat": 37.48216758
  },
  {
    "shopName": "디펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동대문구 제기동 1019",
    "roadAddress": "서울특별시 동대문구 고산자로36길 3",
    "lng": 127.0391266,
    "lat": 37.57903065
  },
  {
    "shopName": "덴티펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 서초구 반포동 60-5",
    "roadAddress": "서울특별시 서초구 사평대로 240",
    "lng": 127.0077692,
    "lat": 37.50279492
  },
  {
    "shopName": "메가엠지씨커피대림사거리점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 990-4",
    "roadAddress": "서울특별시 영등포구 시흥대로 629",
    "lng": 126.9056437,
    "lat": 37.48862952
  },
  {
    "shopName": "빽다방",
    "branchName": "중화역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 중화동 305-45",
    "roadAddress": "서울특별시 중랑구 봉화산로 39",
    "lng": 127.0785967,
    "lat": 37.6017363
  },
  {
    "shopName": "온오프커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 남영동 3-1",
    "roadAddress": "서울특별시 용산구 두텁바위로 12",
    "lng": 126.9733612,
    "lat": 37.54512944
  },
  {
    "shopName": "댕쁘앙",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동작구 상도동 415",
    "roadAddress": "서울특별시 동작구 상도로 320",
    "lng": 126.9498808,
    "lat": 37.49986164
  },
  {
    "shopName": "댕청댕청",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1688-145",
    "roadAddress": "서울특별시 관악구 남부순환로247다길 17",
    "lng": 126.965989,
    "lat": 37.47745942
  },
  {
    "shopName": "장수카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 65-3",
    "roadAddress": "서울특별시 광진구 군자로 142-4",
    "lng": 127.0751887,
    "lat": 37.55407131
  },
  {
    "shopName": "히시커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 398-20",
    "roadAddress": "서울특별시 영등포구 당산로29길 3",
    "lng": 126.8947594,
    "lat": 37.52587647
  },
  {
    "shopName": "토핑듬뿍대왕커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 955-51",
    "roadAddress": "서울특별시 관악구 은천로5길 7",
    "lng": 126.937978,
    "lat": 37.48665397
  },
  {
    "shopName": "도그멍멍",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 중랑구 망우동 514-101",
    "roadAddress": "서울특별시 중랑구 봉우재로 203",
    "lng": 127.0954868,
    "lat": 37.59482078
  },
  {
    "shopName": "업.사이드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 16-9",
    "roadAddress": "서울특별시 성동구 성수일로 45",
    "lng": 127.0495057,
    "lat": 37.54450546
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "종암사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 80-1",
    "roadAddress": "서울특별시 성북구 종암로27길 13",
    "lng": 127.0314165,
    "lat": 37.602638
  },
  {
    "shopName": "이디야커피",
    "branchName": "장안중랑천점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 350-3",
    "roadAddress": "서울특별시 동대문구 장한로18길 32",
    "lng": 127.0707548,
    "lat": 37.5675252
  },
  {
    "shopName": "더벤티",
    "branchName": "강서구청사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 656",
    "roadAddress": "서울특별시 강서구 화곡로64길 2",
    "lng": 126.8535506,
    "lat": 37.55728116
  },
  {
    "shopName": "만리커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 공덕동 118",
    "roadAddress": "서울특별시 마포구 마포대로14길 20",
    "lng": 126.9567285,
    "lat": 37.54820939
  },
  {
    "shopName": "메가엠지씨커피한남오거리점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 78-10",
    "roadAddress": "서울특별시 용산구 한남대로21길 33",
    "lng": 127.0065839,
    "lat": 37.53334859
  },
  {
    "shopName": "메가MGC커피상일",
    "branchName": "고덕점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 상일동 521",
    "roadAddress": "서울특별시 강동구 상일로 55",
    "lng": 127.1687729,
    "lat": 37.55330753
  },
  {
    "shopName": "커피모이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 72-8",
    "roadAddress": "서울특별시 중랑구 겸재로50길 31",
    "lng": 127.0920486,
    "lat": 37.58887452
  },
  {
    "shopName": "고위드펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 마포구 현석동 222",
    "roadAddress": "서울특별시 마포구 신수로 15",
    "lng": 126.9332181,
    "lat": 37.54303458
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "위례포레샤인점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 651",
    "roadAddress": "서울특별시 송파구 위례송파로 123",
    "lng": 127.1477797,
    "lat": 37.48456919
  },
  {
    "shopName": "그루밍댕이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 중구 남창동 62-4",
    "roadAddress": "서울특별시 중구 퇴계로 39-2",
    "lng": 126.9770566,
    "lat": 37.55792029
  },
  {
    "shopName": "리베스트프랜드펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 57",
    "roadAddress": "서울특별시 동대문구 한천로 248",
    "lng": 127.070263,
    "lat": 37.58341579
  },
  {
    "shopName": "카페반월",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 645",
    "roadAddress": "서울특별시 송파구 법원로11길 25",
    "lng": 127.1162166,
    "lat": 37.48494102
  },
  {
    "shopName": "카페",
    "branchName": "도로로",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 424-28",
    "roadAddress": "서울특별시 서초구 방배천로18길 11",
    "lng": 126.9830911,
    "lat": 37.48359986
  },
  {
    "shopName": "돌마리커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 219-6",
    "roadAddress": "서울특별시 송파구 백제고분로34길 34",
    "lng": 127.0986519,
    "lat": 37.49941452
  },
  {
    "shopName": "브레댄코",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동3가 55-3",
    "roadAddress": "서울특별시 영등포구 당산로 42",
    "lng": 126.8958677,
    "lat": 37.51822798
  },
  {
    "shopName": "볼랫",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 530-17",
    "roadAddress": "서울특별시 동대문구 황물로 168",
    "lng": 127.0562393,
    "lat": 37.56511239
  },
  {
    "shopName": "펀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 358-50",
    "roadAddress": "서울특별시 마포구 와우산로21길 36-8",
    "lng": 126.9220457,
    "lat": 37.5527094
  },
  {
    "shopName": "고마워펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 중곡동 123-35",
    "roadAddress": "서울특별시 광진구 천호대로125길 48",
    "lng": 127.0874952,
    "lat": 37.55652782
  },
  {
    "shopName": "먼슬리커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 622",
    "roadAddress": "서울특별시 송파구 충민로 5",
    "lng": 127.1192241,
    "lat": 37.48014278
  },
  {
    "shopName": "킁킁커피",
    "branchName": "목동1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 782-3",
    "roadAddress": "서울특별시 양천구 목동중앙남로3길 63",
    "lng": 126.864078,
    "lat": 37.53555082
  },
  {
    "shopName": "니어커피컴퍼니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1155",
    "roadAddress": "서울특별시 금천구 시흥대로 291",
    "lng": 126.8972251,
    "lat": 37.46054664
  },
  {
    "shopName": "멍멍옷",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 목동 624-6",
    "roadAddress": "서울특별시 양천구 목동중앙북로8라길 20",
    "lng": 126.8640482,
    "lat": 37.54646209
  },
  {
    "shopName": "신비한타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중구 필동2가 103-4",
    "roadAddress": "서울특별시 중구 퇴계로36가길 36-10",
    "lng": 126.9951354,
    "lat": 37.55849903
  },
  {
    "shopName": "헤비커피드링커",
    "branchName": "마포구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 590-2",
    "roadAddress": "서울특별시 마포구 월드컵로36길 18",
    "lng": 126.9035134,
    "lat": 37.56622549
  },
  {
    "shopName": "아띠커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 955-17",
    "roadAddress": "서울특별시 동대문구 황물로15길 32",
    "lng": 127.0585611,
    "lat": 37.56590582
  },
  {
    "shopName": "카페토브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 28-45",
    "roadAddress": "서울특별시 마포구 대흥로 156",
    "lng": 126.9462378,
    "lat": 37.55303591
  },
  {
    "shopName": "텐퍼센트커피가산W센터점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 371-106",
    "roadAddress": "서울특별시 금천구 가산디지털1로 181",
    "lng": 126.8803768,
    "lat": 37.48141867
  },
  {
    "shopName": "카페",
    "branchName": "언덕길",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 534-194",
    "roadAddress": "서울특별시 노원구 월계로44가길 40",
    "lng": 127.0542049,
    "lat": 37.62391616
  },
  {
    "shopName": "봉스세상의커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 960-4",
    "roadAddress": "서울특별시 영등포구 시흥대로 671",
    "lng": 126.908133,
    "lat": 37.49162601
  },
  {
    "shopName": "봄길",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 320-19",
    "roadAddress": "서울특별시 강동구 천호옛길 15",
    "lng": 127.1212157,
    "lat": 37.53114861
  },
  {
    "shopName": "소원나무타로까페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서대문구 북아현동 220-42",
    "roadAddress": "서울특별시 서대문구 신촌로 237",
    "lng": 126.9524014,
    "lat": 37.55739774
  },
  {
    "shopName": "마카롱",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 중곡동 140-31",
    "roadAddress": "서울특별시 광진구 천호대로 583",
    "lng": 127.0828588,
    "lat": 37.55619455
  },
  {
    "shopName": "카페브이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 662-4",
    "roadAddress": "서울특별시 강남구 언주로172길 51",
    "lng": 127.038029,
    "lat": 37.52704027
  },
  {
    "shopName": "스윗플로어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 492-3",
    "roadAddress": "서울특별시 도봉구 우이천로 483",
    "lng": 127.0154438,
    "lat": 37.6562075
  },
  {
    "shopName": "인카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 1265",
    "roadAddress": "서울특별시 구로구 도림로 59",
    "lng": 126.8896179,
    "lat": 37.48957926
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "배봉사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 111-8",
    "roadAddress": "서울특별시 동대문구 한천로 189",
    "lng": 127.0678627,
    "lat": 37.57796355
  },
  {
    "shopName": "분카샤롯데월드몰점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "카페",
    "branchName": "차이장위뉴타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 216-2",
    "roadAddress": "서울특별시 성북구 돌곶이로 211",
    "lng": 127.0462661,
    "lat": 37.61840999
  },
  {
    "shopName": "커피인류",
    "branchName": "강남구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 7-3",
    "roadAddress": "서울특별시 강남구 선릉로130길 20",
    "lng": 127.0433221,
    "lat": 37.51565791
  },
  {
    "shopName": "펫라이프",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 등촌동 704",
    "roadAddress": "서울특별시 강서구 화곡로63가길 92",
    "lng": 126.850261,
    "lat": 37.56217782
  },
  {
    "shopName": "호말커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 행당동 19-104",
    "roadAddress": "서울특별시 성동구 마조로 15-16",
    "lng": 127.0401345,
    "lat": 37.55872027
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "공릉중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 338-26",
    "roadAddress": "서울특별시 노원구 공릉로 137",
    "lng": 127.0790663,
    "lat": 37.62243689
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "난곡우체국사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1680-24",
    "roadAddress": "서울특별시 관악구 난곡로 264",
    "lng": 126.9156533,
    "lat": 37.47752178
  },
  {
    "shopName": "아보타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 천왕동 274",
    "roadAddress": "서울특별시 구로구 천왕로 21",
    "lng": 126.8394211,
    "lat": 37.4794286
  },
  {
    "shopName": "텐퍼센트커피",
    "branchName": "공덕점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 공덕동 385-65",
    "roadAddress": "서울특별시 마포구 백범로31길 7",
    "lng": 126.9487923,
    "lat": 37.54521061
  },
  {
    "shopName": "0125커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 9-56",
    "roadAddress": "서울특별시 서대문구 홍은중앙로 110-2",
    "lng": 126.9489246,
    "lat": 37.60022919
  },
  {
    "shopName": "24시무인카페만월경",
    "branchName": "길동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 137-2",
    "roadAddress": "서울특별시 강동구 명일로 200-33",
    "lng": 127.1474882,
    "lat": 37.53706291
  },
  {
    "shopName": "퀸타로사주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 663-9",
    "roadAddress": "서울특별시 강남구 언주로172길 56",
    "lng": 127.0382813,
    "lat": 37.52677201
  },
  {
    "shopName": "쏘티커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 대방동 17-12",
    "roadAddress": "서울특별시 동작구 등용로 91",
    "lng": 126.9320011,
    "lat": 37.50934255
  },
  {
    "shopName": "보드카페",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 674-16",
    "roadAddress": "서울특별시 강남구 언주로93길 16",
    "lng": 127.0406574,
    "lat": 37.50377842
  },
  {
    "shopName": "보통커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1445-3",
    "roadAddress": "서울특별시 서초구 효령로 304",
    "lng": 127.0177891,
    "lat": 37.48472239
  },
  {
    "shopName": "멍하고노냥",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 신월동 60-29",
    "roadAddress": "서울특별시 양천구 남부순환로31길 51",
    "lng": 126.8322177,
    "lat": 37.53904241
  },
  {
    "shopName": "보드카페",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 삼성동 144-21",
    "roadAddress": "서울특별시 강남구 테헤란로77길 6",
    "lng": 127.0548916,
    "lat": 37.50689368
  },
  {
    "shopName": "달리는커피",
    "branchName": "강북구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 188-4",
    "roadAddress": "서울특별시 강북구 노해로 76",
    "lng": 127.0225738,
    "lat": 37.64226475
  },
  {
    "shopName": "펫디투디",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 중랑구 묵동 103-12",
    "roadAddress": "서울특별시 중랑구 숙선옹주로5길 10-23",
    "lng": 127.0815603,
    "lat": 37.61492363
  },
  {
    "shopName": "텐텐펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 마포구 망원동 497",
    "roadAddress": "서울특별시 마포구 망원로1길 27",
    "lng": 126.899258,
    "lat": 37.55694126
  },
  {
    "shopName": "날쌘카페",
    "branchName": "수유점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 460-15",
    "roadAddress": "서울특별시 강북구 한천로124가길 29",
    "lng": 127.0307699,
    "lat": 37.63761996
  },
  {
    "shopName": "기원당소원",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 용산구 보광동 168-18",
    "roadAddress": "서울특별시 용산구 보광로7길 33",
    "lng": 126.9992653,
    "lat": 37.52558284
  },
  {
    "shopName": "행복한단백질행단",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 마장동 388-18",
    "roadAddress": "서울특별시 성동구 마조로 58",
    "lng": 127.0418936,
    "lat": 37.56277125
  },
  {
    "shopName": "테이퍼드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 등촌동 628-18",
    "roadAddress": "서울특별시 강서구 화곡로68길 47",
    "lng": 126.8567756,
    "lat": 37.55880815
  },
  {
    "shopName": "한국전통차연구소",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 합정동 473",
    "roadAddress": "서울특별시 마포구 월드컵로3길 14",
    "lng": 126.9116845,
    "lat": 37.55076722
  },
  {
    "shopName": "512coffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 용두동 129-85",
    "roadAddress": "서울특별시 동대문구 무학로 92-14",
    "lng": 127.0311416,
    "lat": 37.57229765
  },
  {
    "shopName": "브라운핸즈창비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 475-34",
    "roadAddress": "서울특별시 마포구 월드컵로12길 7",
    "lng": 126.9114483,
    "lat": 37.5553333
  },
  {
    "shopName": "메가엠지씨커피고덕래미안점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 고덕동 688",
    "roadAddress": "서울특별시 강동구 아리수로50길 50",
    "lng": 127.1485777,
    "lat": 37.55767791
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "송파방이시장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 111-14",
    "roadAddress": "서울특별시 송파구 백제고분로48길 8",
    "lng": 127.1140376,
    "lat": 37.51146094
  },
  {
    "shopName": "콤마사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서초구 방배동 13-9",
    "roadAddress": "서울특별시 서초구 방배로42길 31-4",
    "lng": 126.9903253,
    "lat": 37.49469081
  },
  {
    "shopName": "댕냥냥",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 신월동 54-14",
    "roadAddress": "서울특별시 양천구 남부순환로31길 13-1",
    "lng": 126.8281233,
    "lat": 37.53892976
  },
  {
    "shopName": "무진사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 명륜4가 54-4",
    "roadAddress": "서울특별시 종로구 대명길 31",
    "lng": 126.9998664,
    "lat": 37.58305657
  },
  {
    "shopName": "카페샤르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 759-1",
    "roadAddress": "서울특별시 강서구 마곡서로 152",
    "lng": 126.8256231,
    "lat": 37.56774694
  },
  {
    "shopName": "댕스기빙데이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 서초구 양재동 287-6",
    "roadAddress": "서울특별시 서초구 논현로11길 12",
    "lng": 127.0476448,
    "lat": 37.47367656
  },
  {
    "shopName": "카페쿼리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 하계동 72-18",
    "roadAddress": "서울특별시 노원구 공릉로58길 122",
    "lng": 127.0750572,
    "lat": 37.63606528
  },
  {
    "shopName": "빽다방",
    "branchName": "구일역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 685-155",
    "roadAddress": "서울특별시 구로구 구일로8길 56",
    "lng": 126.8740805,
    "lat": 37.49563139
  },
  {
    "shopName": "차진이",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 은평구 불광동 242-34",
    "roadAddress": "서울특별시 은평구 불광로 67",
    "lng": 126.9317883,
    "lat": 37.61305019
  },
  {
    "shopName": "유리나타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 노원구 상계동 593-3",
    "roadAddress": "서울특별시 노원구 상계로3길 10",
    "lng": 127.0625272,
    "lat": 37.65669921
  },
  {
    "shopName": "마일드타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 가락동 913",
    "roadAddress": "서울특별시 송파구 송파대로 345",
    "lng": 127.1056259,
    "lat": 37.4959624
  },
  {
    "shopName": "러브펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 중랑구 망우동 462-1",
    "roadAddress": "서울특별시 중랑구 봉우재로71길 39",
    "lng": 127.0977563,
    "lat": 37.59630686
  },
  {
    "shopName": "커피홀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로6가 289-57",
    "roadAddress": "서울특별시 종로구 종로 272",
    "lng": 127.0080789,
    "lat": 37.57080862
  },
  {
    "shopName": "인생카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 851",
    "roadAddress": "서울특별시 구로구 디지털로 242",
    "lng": 126.8926642,
    "lat": 37.48084968
  },
  {
    "shopName": "디저트39",
    "branchName": "등촌역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 염창동 274-18",
    "roadAddress": "서울특별시 강서구 공항대로 531",
    "lng": 126.8654487,
    "lat": 37.55112489
  },
  {
    "shopName": "더벤티",
    "branchName": "코리아",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 665-17",
    "roadAddress": "서울특별시 도봉구 방학로 172",
    "lng": 127.0331886,
    "lat": 37.66256238
  },
  {
    "shopName": "트리플에이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 649-1",
    "roadAddress": "서울특별시 노원구 동일로 1554",
    "lng": 127.0575096,
    "lat": 37.66721933
  },
  {
    "shopName": "디저트앙",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 14-149",
    "roadAddress": "서울특별시 마포구 대흥로24길 24",
    "lng": 126.94764,
    "lat": 37.55392243
  },
  {
    "shopName": "쮸냥이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 송파구 삼전동 22-6",
    "roadAddress": "서울특별시 송파구 석촌호수로 146",
    "lng": 127.0931337,
    "lat": 37.50682404
  },
  {
    "shopName": "숲사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 656-604",
    "roadAddress": "서울특별시 성동구 왕십리로 102",
    "lng": 127.0448503,
    "lat": 37.5466214
  },
  {
    "shopName": "타로:끌림",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동작구 사당동 1157",
    "roadAddress": "서울특별시 동작구 사당로27길 130",
    "lng": 126.9743509,
    "lat": 37.48937215
  },
  {
    "shopName": "타로마스터에이스",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 도봉구 방학동 634-29",
    "roadAddress": "서울특별시 도봉구 도당로15길 31",
    "lng": 127.0358442,
    "lat": 37.66667479
  },
  {
    "shopName": "펫니스",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강동구 강일동 717",
    "roadAddress": "서울특별시 강동구 고덕로 427",
    "lng": 127.1727293,
    "lat": 37.55988599
  },
  {
    "shopName": "텐퍼센트서초마제스타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1498-5",
    "roadAddress": "서울특별시 서초구 서초대로38길 12",
    "lng": 127.0053652,
    "lat": 37.49048432
  },
  {
    "shopName": "개스타일개쟁이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 대치동 911-23",
    "roadAddress": "서울특별시 강남구 삼성로71길 34",
    "lng": 127.0561002,
    "lat": 37.50163217
  },
  {
    "shopName": "디저트39",
    "branchName": "방배서래점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 797-12",
    "roadAddress": "서울특별시 서초구 동광로 95",
    "lng": 126.9926453,
    "lat": 37.49371946
  },
  {
    "shopName": "전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 초동 54",
    "roadAddress": "서울특별시 중구 마른내로2길 19",
    "lng": 126.9920118,
    "lat": 37.56351825
  },
  {
    "shopName": "디저트39",
    "branchName": "중랑신내SKV1점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 821-2",
    "roadAddress": "서울특별시 중랑구 신내역로 111",
    "lng": 127.1128102,
    "lat": 37.61312635
  },
  {
    "shopName": "메리앤골드TEA",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 금천구 독산동 1144",
    "roadAddress": "서울특별시 금천구 시흥대로150길 6",
    "lng": 126.8997904,
    "lat": 37.47601455
  },
  {
    "shopName": "냥냥탐구",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 은평구 진관동 113",
    "roadAddress": "서울특별시 은평구 진관1로 77-8",
    "lng": 126.9305756,
    "lat": 37.63128506
  },
  {
    "shopName": "연화보살",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 은평구 응암동 120-33",
    "roadAddress": "서울특별시 은평구 응암로25길 12-4",
    "lng": 126.9172716,
    "lat": 37.59558205
  },
  {
    "shopName": "보현보살",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 방이동 106-2",
    "roadAddress": "서울특별시 송파구 오금로17길 20",
    "lng": 127.1123188,
    "lat": 37.51237613
  },
  {
    "shopName": "맘마",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 송파구 문정동 642-3",
    "roadAddress": "서울특별시 송파구 법원로 128",
    "lng": 127.1204685,
    "lat": 37.48683795
  },
  {
    "shopName": "냥냥이네",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동작구 상도동 455",
    "roadAddress": "서울특별시 동작구 등용로 38",
    "lng": 126.9352132,
    "lat": 37.50617283
  },
  {
    "shopName": "개성있냥",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 송파구 가락동 196-4",
    "roadAddress": "서울특별시 송파구 오금로46길 62",
    "lng": 127.1316932,
    "lat": 37.49303018
  },
  {
    "shopName": "디저트39",
    "branchName": "구로디지털단지역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 1127-30",
    "roadAddress": "서울특별시 구로구 디지털로32가길 13",
    "lng": 126.8990378,
    "lat": 37.48261222
  },
  {
    "shopName": "쥬씨",
    "branchName": "강남구청역점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 청담동 40-32",
    "roadAddress": "서울특별시 강남구 선릉로 708",
    "lng": 127.0411516,
    "lat": 37.5181993
  },
  {
    "shopName": "보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 문정동 642-3",
    "roadAddress": "서울특별시 송파구 법원로 128",
    "lng": 127.1204685,
    "lat": 37.48683795
  },
  {
    "shopName": "타로티레네",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동작구 흑석동 42-10",
    "roadAddress": "서울특별시 동작구 현충로8길 12",
    "lng": 126.9660179,
    "lat": 37.5065276
  },
  {
    "shopName": "가은사주앤타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 송파동 37-11",
    "roadAddress": "서울특별시 송파구 백제고분로45길 31",
    "lng": 127.1081239,
    "lat": 37.51033516
  },
  {
    "shopName": "물가타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 100-4",
    "roadAddress": "서울특별시 성북구 고려대로27길 9",
    "lng": 127.0297885,
    "lat": 37.58672125
  },
  {
    "shopName": "요거트빌리지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 명일동 328-10",
    "roadAddress": "서울특별시 강동구 구천면로 436",
    "lng": 127.1467428,
    "lat": 37.54985252
  },
  {
    "shopName": "압구정팥쥐네사주타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 657-41",
    "roadAddress": "서울특별시 강남구 선릉로155길 14",
    "lng": 127.0386025,
    "lat": 37.52554919
  },
  {
    "shopName": "로년휴개소보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1051-3",
    "roadAddress": "서울특별시 영등포구 도림로37길 3-1",
    "lng": 126.8963601,
    "lat": 37.49323761
  },
  {
    "shopName": "까페인모아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 11-4",
    "roadAddress": "서울특별시 광진구 동일로18길 62",
    "lng": 127.0660396,
    "lat": 37.53899681
  },
  {
    "shopName": "몽보드까페",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 4-10",
    "roadAddress": "서울특별시 강남구 도산대로8길 9",
    "lng": 127.0222722,
    "lat": 37.5163956
  },
  {
    "shopName": "콩펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 양천구 신정동 127-84",
    "roadAddress": "서울특별시 양천구 신목로2길 29",
    "lng": 126.8765593,
    "lat": 37.5203886
  },
  {
    "shopName": "멍마르뜨",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강서구 방화동 168-114",
    "roadAddress": "서울특별시 강서구 양천로 132",
    "lng": 126.8184761,
    "lat": 37.57303675
  },
  {
    "shopName": "다연차문화연구소",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 교북동 126",
    "roadAddress": "서울특별시 종로구 송월길 155",
    "lng": 126.9614994,
    "lat": 37.57139018
  },
  {
    "shopName": "카페",
    "branchName": "땡겨보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 금천구 독산동 884-1",
    "roadAddress": "서울특별시 금천구 문성로5길 22",
    "lng": 126.9051787,
    "lat": 37.47787571
  },
  {
    "shopName": "멍이냥이프렌즈",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 중곡동 94-13",
    "roadAddress": "서울특별시 광진구 천호대로127길 19",
    "lng": 127.0898142,
    "lat": 37.55383356
  },
  {
    "shopName": "펠리세트집사",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 은평구 진관동 140",
    "roadAddress": "서울특별시 은평구 연서로44길 7",
    "lng": 126.9312713,
    "lat": 37.63017409
  },
  {
    "shopName": "심쿵멍멍",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 성북구 성북동1가 35-18",
    "roadAddress": "서울특별시 성북구 창경궁로 319-1",
    "lng": 127.0049238,
    "lat": 37.58842446
  },
  {
    "shopName": "개스타일",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 삼성동 36-3",
    "roadAddress": "서울특별시 강남구 봉은사로55길 24",
    "lng": 127.0441814,
    "lat": 37.51214175
  },
  {
    "shopName": "도그텔라",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 청담동 31-12",
    "roadAddress": "서울특별시 강남구 삼성로 725",
    "lng": 127.049056,
    "lat": 37.52020949
  },
  {
    "shopName": "세기기패실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 720-10",
    "roadAddress": "서울특별시 영등포구 대림로27가길 16-1",
    "lng": 126.898585,
    "lat": 37.49651115
  },
  {
    "shopName": "이너스마일",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 140-162",
    "roadAddress": "서울특별시 노원구 한글비석로36길 82",
    "lng": 127.073424,
    "lat": 37.66447112
  },
  {
    "shopName": "코코버블티",
    "branchName": "명동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 명동1가 42-1",
    "roadAddress": "서울특별시 중구 명동7길 20",
    "lng": 126.9843903,
    "lat": 37.56462428
  },
  {
    "shopName": "파머스빈",
    "branchName": "선릉역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 702-13",
    "roadAddress": "서울특별시 강남구 테헤란로 313",
    "lng": 127.0452491,
    "lat": 37.50379761
  },
  {
    "shopName": "시저스홀덤",
    "branchName": "강남논현점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 164-12",
    "roadAddress": "서울특별시 강남구 강남대로122길 5",
    "lng": 127.0237209,
    "lat": 37.50765836
  },
  {
    "shopName": "마롱가든",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 송파구 오금동 74-5",
    "roadAddress": "서울특별시 송파구 마천로 143",
    "lng": 127.1354951,
    "lat": 37.50460968
  },
  {
    "shopName": "짐빠띠스리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 565",
    "roadAddress": "서울특별시 강동구 성내로14길 18",
    "lng": 127.1266021,
    "lat": 37.52719689
  },
  {
    "shopName": "앤선커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 105-13",
    "roadAddress": "서울특별시 송파구 오금로17길 4-7",
    "lng": 127.1117907,
    "lat": 37.51111968
  },
  {
    "shopName": "예집사",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 서초구 양재동 92-5",
    "roadAddress": "서울특별시 서초구 양재천로23길 5",
    "lng": 127.0410679,
    "lat": 37.47786735
  },
  {
    "shopName": "대추살롱",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 연희동 151-103",
    "roadAddress": "서울특별시 서대문구 연희로31길 48-6",
    "lng": 126.9327718,
    "lat": 37.57591847
  },
  {
    "shopName": "멍스타운",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동작구 사당동 105",
    "roadAddress": "서울특별시 동작구 동작대로29길 110",
    "lng": 126.9788095,
    "lat": 37.48913144
  },
  {
    "shopName": "펫도러블",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 역삼동 633-22",
    "roadAddress": "서울특별시 강남구 테헤란로13길 45",
    "lng": 127.0311271,
    "lat": 37.50258333
  },
  {
    "shopName": "과일에반하다.푸르타",
    "branchName": "목동신정점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 양천구 신정동 1175-28",
    "roadAddress": "서울특별시 양천구 중앙로43길 14",
    "lng": 126.8513209,
    "lat": 37.52040712
  },
  {
    "shopName": "위드펫365",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 구의동 246-14",
    "roadAddress": "서울특별시 광진구 아차산로 375",
    "lng": 127.0843607,
    "lat": 37.53704083
  },
  {
    "shopName": "커스텀커피",
    "branchName": "대치점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 623",
    "roadAddress": "서울특별시 강남구 남부순환로 2921",
    "lng": 127.0597536,
    "lat": 37.49348871
  },
  {
    "shopName": "카페",
    "branchName": "갈치네보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 자양동 5-27",
    "roadAddress": "서울특별시 광진구 아차산로34길 36",
    "lng": 127.0689188,
    "lat": 37.53859605
  },
  {
    "shopName": "전통타로사주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 서교동 403-16",
    "roadAddress": "서울특별시 마포구 어울마당로 47",
    "lng": 126.9205761,
    "lat": 37.54945223
  },
  {
    "shopName": "카페",
    "branchName": "제이보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 번동 192",
    "roadAddress": "서울특별시 강북구 월계로37길 107",
    "lng": 127.0439267,
    "lat": 37.62683379
  },
  {
    "shopName": "더히어로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 7-28",
    "roadAddress": "서울특별시 송파구 올림픽로 293-19",
    "lng": 127.1024898,
    "lat": 37.51514919
  },
  {
    "shopName": "어드밴스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 368-1",
    "roadAddress": "서울특별시 마포구 잔다리로6길 20",
    "lng": 126.9202324,
    "lat": 37.55209814
  },
  {
    "shopName": "플렉시블커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동4가 72",
    "roadAddress": "서울특별시 성북구 아리랑로4길 8",
    "lng": 127.0166087,
    "lat": 37.59447827
  },
  {
    "shopName": "카페",
    "branchName": "비비보드게임",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 반포동 742-18",
    "roadAddress": "서울특별시 서초구 주흥3길 6",
    "lng": 127.0201569,
    "lat": 37.50427693
  },
  {
    "shopName": "카페",
    "branchName": "그레이박스",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 277-101",
    "roadAddress": "서울특별시 성동구 아차산로13길 16",
    "lng": 127.0613405,
    "lat": 37.54467221
  },
  {
    "shopName": "모던타로#은령살롱",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 은평구 응암동 427-74",
    "roadAddress": "서울특별시 은평구 응암로22길 11-10",
    "lng": 126.9197157,
    "lat": 37.59414477
  },
  {
    "shopName": "파프카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 13-18",
    "roadAddress": "서울특별시 성동구 상원12길 35",
    "lng": 127.0513027,
    "lat": 37.55004334
  },
  {
    "shopName": "곰단지GomdanG",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 83-4",
    "roadAddress": "서울특별시 송파구 새말로6길 15",
    "lng": 127.1270134,
    "lat": 37.48217392
  },
  {
    "shopName": "카페이루",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 520",
    "roadAddress": "서울특별시 강북구 삼각산로 58",
    "lng": 127.0103711,
    "lat": 37.63878415
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "동양미래대학점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 76-153",
    "roadAddress": "서울특별시 구로구 중앙로6길 50",
    "lng": 126.8665497,
    "lat": 37.50006458
  },
  {
    "shopName": "카페",
    "branchName": "이공일삼",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 마천동 82-5",
    "roadAddress": "서울특별시 송파구 마천로43길 36",
    "lng": 127.1504825,
    "lat": 37.49951929
  },
  {
    "shopName": "주디타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 수서동 736",
    "roadAddress": "서울특별시 강남구 광평로47길 17",
    "lng": 127.0978128,
    "lat": 37.48737895
  },
  {
    "shopName": "타로술사CAFE",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 광진구 구의동 237-2",
    "roadAddress": "서울특별시 광진구 광나루로36길 38",
    "lng": 127.0861511,
    "lat": 37.54331702
  },
  {
    "shopName": "메가엠지씨커피디에이치자이",
    "branchName": "개포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 일원동 743",
    "roadAddress": "서울특별시 강남구 영동대로 22",
    "lng": 127.0741452,
    "lat": 37.49108843
  },
  {
    "shopName": "트리콘타로연구소",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 구로동 650-4",
    "roadAddress": "서울특별시 구로구 구일로10길 27",
    "lng": 126.8731408,
    "lat": 37.49570352
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "강남구청역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 241-3",
    "roadAddress": "서울특별시 강남구 학동로 342",
    "lng": 127.0405828,
    "lat": 37.51668092
  },
  {
    "shopName": "매머드익스프레스청계",
    "branchName": "다동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 다동 70",
    "roadAddress": "서울특별시 중구 다동길 43",
    "lng": 126.9816022,
    "lat": 37.56821344
  },
  {
    "shopName": "카페컴온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 쌍문동 321",
    "roadAddress": "서울특별시 도봉구 노해로 170",
    "lng": 127.0278531,
    "lat": 37.64930039
  },
  {
    "shopName": "카페",
    "branchName": "인충전소",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 244-139",
    "roadAddress": "서울특별시 관악구 대학7길 51",
    "lng": 126.9405036,
    "lat": 37.46874572
  },
  {
    "shopName": "허니타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 연남동 383-78",
    "roadAddress": "서울특별시 마포구 동교로38길 33-18",
    "lng": 126.926338,
    "lat": 37.56196613
  },
  {
    "shopName": "테이큰커피",
    "branchName": "노량진점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 119-16",
    "roadAddress": "서울특별시 동작구 노량진로16길 34",
    "lng": 126.9439621,
    "lat": 37.51217126
  },
  {
    "shopName": "해머스미스커피",
    "branchName": "역삼초교사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 834",
    "roadAddress": "서울특별시 강남구 역삼로 128",
    "lng": 127.0336475,
    "lat": 37.49394483
  },
  {
    "shopName": "커피에반하다",
    "branchName": "중앙대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 흑석동 180-4",
    "roadAddress": "서울특별시 동작구 흑석로 115",
    "lng": 126.9614283,
    "lat": 37.50880303
  },
  {
    "shopName": "라보아르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 223-9",
    "roadAddress": "서울특별시 마포구 동교로51안길 24",
    "lng": 126.9241053,
    "lat": 37.56531569
  },
  {
    "shopName": "프롤라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 272-35",
    "roadAddress": "서울특별시 성동구 연무장17길 5",
    "lng": 127.0609197,
    "lat": 37.54122685
  },
  {
    "shopName": "크림데이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 대림동 760-11",
    "roadAddress": "서울특별시 영등포구 도림로 189-1",
    "lng": 126.9019017,
    "lat": 37.49629875
  },
  {
    "shopName": "트다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 111-4",
    "roadAddress": "서울특별시 광진구 천호대로129길 51",
    "lng": 127.0918962,
    "lat": 37.55386761
  },
  {
    "shopName": "달보드레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1091",
    "roadAddress": "서울특별시 강서구 화곡로13길 107",
    "lng": 126.8322257,
    "lat": 37.54723288
  },
  {
    "shopName": "콩카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 197-14",
    "roadAddress": "서울특별시 중구 퇴계로73길 54-37",
    "lng": 127.0145696,
    "lat": 37.56705157
  },
  {
    "shopName": "홀스베이크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 3-14",
    "roadAddress": "서울특별시 동대문구 회기로23길 20",
    "lng": 127.054466,
    "lat": 37.59167001
  },
  {
    "shopName": "설탕한스푼설렘두스푼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 하계동 166-6",
    "roadAddress": "서울특별시 노원구 공릉로58나길 20-5",
    "lng": 127.0739172,
    "lat": 37.63662399
  },
  {
    "shopName": "하브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 503-16",
    "roadAddress": "서울특별시 동대문구 서울시립대로 72-2",
    "lng": 127.049009,
    "lat": 37.57735364
  },
  {
    "shopName": "플랜터PLANTER247",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동3가 247",
    "roadAddress": "서울특별시 성북구 보문로34가길 1",
    "lng": 127.0197722,
    "lat": 37.5915762
  },
  {
    "shopName": "빽다방",
    "branchName": "건대동문회관점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 227-336",
    "roadAddress": "서울특별시 광진구 아차산로36길 5",
    "lng": 127.074625,
    "lat": 37.53833454
  },
  {
    "shopName": "핑크팝콘",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 영등포구 신길동 4913-1",
    "roadAddress": "서울특별시 영등포구 신길로42길 36",
    "lng": 126.914135,
    "lat": 37.50664772
  },
  {
    "shopName": "아라한신점타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 광진구 중곡동 629-6",
    "roadAddress": "서울특별시 광진구 면목로 57",
    "lng": 127.0772995,
    "lat": 37.55911569
  },
  {
    "shopName": "브라운필",
    "branchName": "을지로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 초동 21-9",
    "roadAddress": "서울특별시 중구 마른내로 35",
    "lng": 126.9916879,
    "lat": 37.56487606
  },
  {
    "shopName": "꽁다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 840-30",
    "roadAddress": "서울특별시 금천구 독산로21길 26",
    "lng": 126.9046599,
    "lat": 37.45376779
  },
  {
    "shopName": "카페파브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 236-16",
    "roadAddress": "서울특별시 동작구 솔밭로 59",
    "lng": 126.9663795,
    "lat": 37.48194107
  },
  {
    "shopName": "매머드커피익스프레스삼성역현대GBC점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 169-10",
    "roadAddress": "서울특별시 강남구 테헤란로107길 11",
    "lng": 127.0650384,
    "lat": 37.51042548
  },
  {
    "shopName": "팻프랜즈",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 강남구 개포동 171-12",
    "roadAddress": "서울특별시 강남구 선릉로14길 13",
    "lng": 127.0605946,
    "lat": 37.48412439
  },
  {
    "shopName": "루시드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상수동 325-2",
    "roadAddress": "서울특별시 마포구 독막로14길 24",
    "lng": 126.9221792,
    "lat": 37.54736745
  },
  {
    "shopName": "디어마이메이플",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동대문구 전농동 695",
    "roadAddress": "서울특별시 동대문구 답십리로23길 30",
    "lng": 127.0497637,
    "lat": 37.57676503
  },
  {
    "shopName": "어굿이어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 연희동 128-26",
    "roadAddress": "서울특별시 서대문구 연희로11나길 7-5",
    "lng": 126.9282412,
    "lat": 37.56738065
  },
  {
    "shopName": "마미카롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 11-9",
    "roadAddress": "서울특별시 송파구 올림픽로35가길 11",
    "lng": 127.1039807,
    "lat": 37.51628683
  },
  {
    "shopName": "보드게임장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중구 신당동 251-75",
    "roadAddress": "서울특별시 중구 다산로47길 42",
    "lng": 127.0135793,
    "lat": 37.56661079
  },
  {
    "shopName": "달보드레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1114-22",
    "roadAddress": "서울특별시 강서구 까치산로 191",
    "lng": 126.853993,
    "lat": 37.55425798
  },
  {
    "shopName": "설빙",
    "branchName": "강남세곡점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 세곡동 581",
    "roadAddress": "서울특별시 강남구 헌릉로 569",
    "lng": 127.1012154,
    "lat": 37.46575233
  },
  {
    "shopName": "로스팅마스터즈",
    "branchName": "공덕점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 159-2",
    "roadAddress": "서울특별시 마포구 백범로26길 2",
    "lng": 126.946148,
    "lat": 37.54574569
  },
  {
    "shopName": "가비엔누리",
    "branchName": "용산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 원효로3가 49-6",
    "roadAddress": "서울특별시 용산구 원효로 152",
    "lng": 126.9599547,
    "lat": 37.5342987
  },
  {
    "shopName": "다도살롱초록달",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 망원동 379-32",
    "roadAddress": "서울특별시 마포구 월드컵로13길 19-23",
    "lng": 126.9094049,
    "lat": 37.55498106
  },
  {
    "shopName": "디어원밀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 삼선동4가 352-5",
    "roadAddress": "서울특별시 성북구 보문로 184-6",
    "lng": 127.0151422,
    "lat": 37.5906186
  },
  {
    "shopName": "요거트월드",
    "branchName": "홍대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 창전동 5-74",
    "roadAddress": "서울특별시 마포구 와우산로30길 3",
    "lng": 126.930237,
    "lat": 37.55446884
  },
  {
    "shopName": "정성다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 동자동 43-21",
    "roadAddress": "서울특별시 용산구 한강대로 365",
    "lng": 126.9718316,
    "lat": 37.55103599
  },
  {
    "shopName": "크로플덕",
    "branchName": "영등포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 194-27",
    "roadAddress": "서울특별시 영등포구 영등포로64길 35",
    "lng": 126.9149564,
    "lat": 37.51241294
  },
  {
    "shopName": "카페",
    "branchName": "쏭스디저트",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 신창동 82-13",
    "roadAddress": "서울특별시 용산구 효창원로23길 11",
    "lng": 126.9546432,
    "lat": 37.53627014
  },
  {
    "shopName": "고양이브리귀여워",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 1014",
    "roadAddress": "서울특별시 동대문구 답십리로56길 105",
    "lng": 127.0598201,
    "lat": 37.56751071
  },
  {
    "shopName": "카페휘낭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 사직동 1-41",
    "roadAddress": "서울특별시 종로구 인왕산로 5",
    "lng": 126.9669532,
    "lat": 37.57485297
  },
  {
    "shopName": "더온도",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 555-3",
    "roadAddress": "서울특별시 강동구 올림픽로48길 31-31",
    "lng": 127.1221304,
    "lat": 37.52937132
  },
  {
    "shopName": "프렌치크로플",
    "branchName": "장안점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 403-14",
    "roadAddress": "서울특별시 동대문구 천호대로77나길 3",
    "lng": 127.0631092,
    "lat": 37.56519413
  },
  {
    "shopName": "다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 85-15",
    "roadAddress": "서울특별시 마포구 광성로6길 34",
    "lng": 126.9389591,
    "lat": 37.5483574
  },
  {
    "shopName": "화신",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 중랑구 면목동 383-27",
    "roadAddress": "서울특별시 중랑구 답십리로75길 4",
    "lng": 127.0810593,
    "lat": 37.5718498
  },
  {
    "shopName": "씨롱카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 498-5",
    "roadAddress": "서울특별시 동대문구 천호대로 247",
    "lng": 127.0498788,
    "lat": 37.56948551
  },
  {
    "shopName": "시험도사",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 도봉구 창동 807",
    "roadAddress": "서울특별시 도봉구 마들로 551",
    "lng": 127.0472328,
    "lat": 37.65981137
  },
  {
    "shopName": "홀리빈스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 405-350",
    "roadAddress": "서울특별시 양천구 목동동로12길 15",
    "lng": 126.8729005,
    "lat": 37.52296675
  },
  {
    "shopName": "빙달",
    "branchName": "송파점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 74-13",
    "roadAddress": "서울특별시 송파구 송이로20길 4-18",
    "lng": 127.1204516,
    "lat": 37.49696576
  },
  {
    "shopName": "프렌드사주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 개봉동 321-4",
    "roadAddress": "서울특별시 구로구 개봉로17마길 31",
    "lng": 126.8528307,
    "lat": 37.4927148
  },
  {
    "shopName": "카페29",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 아현동 723-10",
    "roadAddress": "서울특별시 마포구 환일길 29",
    "lng": 126.9608926,
    "lat": 37.55558059
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "영등포리드원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 550",
    "roadAddress": "서울특별시 영등포구 양산로 91",
    "lng": 126.8931095,
    "lat": 37.524987
  },
  {
    "shopName": "코너드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 12-15",
    "roadAddress": "서울특별시 강남구 도산대로12길 14",
    "lng": 127.0238609,
    "lat": 37.51687729
  },
  {
    "shopName": "우장산로스터리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동7가 94-79",
    "roadAddress": "서울특별시 영등포구 버드나루로12가길 2",
    "lng": 126.910193,
    "lat": 37.52494766
  },
  {
    "shopName": "24시무인카페만월경",
    "branchName": "시흥점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 794-11",
    "roadAddress": "서울특별시 금천구 독산로50길 90",
    "lng": 126.9091124,
    "lat": 37.46237798
  },
  {
    "shopName": "루히그",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 914-1",
    "roadAddress": "서울특별시 서초구 효령로25길 24",
    "lng": 126.9940891,
    "lat": 37.48218925
  },
  {
    "shopName": "다다멍냥",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 601-49",
    "roadAddress": "서울특별시 도봉구 도봉로 793",
    "lng": 127.0442359,
    "lat": 37.67521278
  },
  {
    "shopName": "흐룻",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 15-7",
    "roadAddress": "서울특별시 광진구 군자로 19",
    "lng": 127.071012,
    "lat": 37.54499198
  },
  {
    "shopName": "한서차문화",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 사간동 19-2",
    "roadAddress": "서울특별시 종로구 율곡로1길 40-21",
    "lng": 126.9811221,
    "lat": 37.57769726
  },
  {
    "shopName": "피에스타7커피",
    "branchName": "사당점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1031-39",
    "roadAddress": "서울특별시 동작구 동작대로 39",
    "lng": 126.9814898,
    "lat": 37.47994581
  },
  {
    "shopName": "라젠후르츠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 108-3",
    "roadAddress": "서울특별시 강남구 언주로136길 27",
    "lng": 127.037708,
    "lat": 37.51767572
  },
  {
    "shopName": "헤이호미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 221-36",
    "roadAddress": "서울특별시 강북구 노해로14길 7",
    "lng": 127.0231293,
    "lat": 37.63964734
  },
  {
    "shopName": "티랩제이",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 명륜4가 125",
    "roadAddress": "서울특별시 종로구 대학로9길 23-6",
    "lng": 127.0005119,
    "lat": 37.58135006
  },
  {
    "shopName": "스웨이성수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-337",
    "roadAddress": "서울특별시 성동구 서울숲2길 11-12",
    "lng": 127.040108,
    "lat": 37.54755607
  },
  {
    "shopName": "토리만쥬",
    "branchName": "용산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-999",
    "roadAddress": "서울특별시 용산구 한강대로23길 55",
    "lng": 126.9647243,
    "lat": 37.5297633
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "신풍역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 425-8",
    "roadAddress": "서울특별시 영등포구 대방천로 155",
    "lng": 126.9082894,
    "lat": 37.49952964
  },
  {
    "shopName": "꽃보다방수",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 636-21",
    "roadAddress": "서울특별시 강남구 강남대로94길 55-3",
    "lng": 127.031582,
    "lat": 37.50064078
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "곰달래사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 228-1",
    "roadAddress": "서울특별시 양천구 곰달래로 48",
    "lng": 126.8381756,
    "lat": 37.52990161
  },
  {
    "shopName": "에페소커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 수색동 361-3",
    "roadAddress": "서울특별시 은평구 수색로18길 5",
    "lng": 126.8937443,
    "lat": 37.58384868
  },
  {
    "shopName": "크앙",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 222-48",
    "roadAddress": "서울특별시 동작구 만양로12길 6-2",
    "lng": 126.9457724,
    "lat": 37.50972757
  },
  {
    "shopName": "카페",
    "branchName": "아뜰리에",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 448-5",
    "roadAddress": "서울특별시 서초구 방배천로4길 48",
    "lng": 126.9850879,
    "lat": 37.47724658
  },
  {
    "shopName": "카페",
    "branchName": "히든보드게임",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 166-9",
    "roadAddress": "서울특별시 강남구 강남대로122길 26",
    "lng": 127.0251387,
    "lat": 37.50821971
  },
  {
    "shopName": "선물",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1639-5",
    "roadAddress": "서울특별시 관악구 관천로 42",
    "lng": 126.927248,
    "lat": 37.48343039
  },
  {
    "shopName": "세븐다이스보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 미아동 684-14",
    "roadAddress": "서울특별시 강북구 삼양로 169",
    "lng": 127.0207952,
    "lat": 37.61892221
  },
  {
    "shopName": "동원보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1035-3",
    "roadAddress": "서울특별시 영등포구 디지털로53길 15",
    "lng": 126.9002592,
    "lat": 37.49185032
  },
  {
    "shopName": "타로진이태원",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 용산구 이태원동 130-3",
    "roadAddress": "서울특별시 용산구 보광로59길 5",
    "lng": 126.9937009,
    "lat": 37.53387025
  },
  {
    "shopName": "방구석타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 종로구 부암동 129-21",
    "roadAddress": "서울특별시 종로구 백석동길 286-20",
    "lng": 126.9646638,
    "lat": 37.59792651
  },
  {
    "shopName": "프로틴카페H247",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 80-23",
    "roadAddress": "서울특별시 강남구 논현로136길 3",
    "lng": 127.0303209,
    "lat": 37.51594835
  },
  {
    "shopName": "리엔타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 송파구 방이동 39-2",
    "roadAddress": "서울특별시 송파구 오금로11길 33",
    "lng": 127.1105723,
    "lat": 37.51561581
  },
  {
    "shopName": "컨트롤브이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 135-6",
    "roadAddress": "서울특별시 강남구 학동로20길 12",
    "lng": 127.0281285,
    "lat": 37.51229008
  },
  {
    "shopName": "문타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 은평구 대조동 185-54",
    "roadAddress": "서울특별시 은평구 연서로28길 3",
    "lng": 126.9207487,
    "lat": 37.61826582
  },
  {
    "shopName": "스타타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 천호동 451-20",
    "roadAddress": "서울특별시 강동구 천호대로 1057",
    "lng": 127.1294609,
    "lat": 37.53724676
  },
  {
    "shopName": "카페",
    "branchName": "희다역삼점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 728-21",
    "roadAddress": "서울특별시 강남구 역삼로25길 16",
    "lng": 127.0397558,
    "lat": 37.49734657
  },
  {
    "shopName": "전선생의사주팩토리",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 망원동 435-1",
    "roadAddress": "서울특별시 마포구 방울내로 67",
    "lng": 126.9027654,
    "lat": 37.56010952
  },
  {
    "shopName": "랙돌고양이카페디캣",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 서대문구 창천동 57-25",
    "roadAddress": "서울특별시 서대문구 연세로5나길 10",
    "lng": 126.9356667,
    "lat": 37.55704984
  },
  {
    "shopName": "달란트사주,타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 성내동 428-2",
    "roadAddress": "서울특별시 강동구 양재대로89길 16",
    "lng": 127.134706,
    "lat": 37.52692315
  },
  {
    "shopName": "집사의하루",
    "branchName": "건대점",
    "category": "애견카페",
    "jibunAddress": "서울특별시 광진구 화양동 9-89",
    "roadAddress": "서울특별시 광진구 아차산로29길 18",
    "lng": 127.0685862,
    "lat": 37.54168403
  },
  {
    "shopName": "카페오름",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1735-10",
    "roadAddress": "서울특별시 관악구 난곡로 38",
    "lng": 126.920994,
    "lat": 37.460712
  },
  {
    "shopName": "24시무인카페만월경",
    "branchName": "상계점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 1090-5",
    "roadAddress": "서울특별시 노원구 동일로237길 70",
    "lng": 127.0513324,
    "lat": 37.67342296
  },
  {
    "shopName": "초록카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 도봉동 568-48",
    "roadAddress": "서울특별시 도봉구 도봉로181길 38",
    "lng": 127.0437667,
    "lat": 37.68439046
  },
  {
    "shopName": "제이원플러스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 737-9",
    "roadAddress": "서울특별시 서초구 강남대로 491",
    "lng": 127.0232557,
    "lat": 37.50603262
  },
  {
    "shopName": "만월경성내",
    "branchName": "2동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 504-8",
    "roadAddress": "서울특별시 강동구 풍성로45길 53",
    "lng": 127.131233,
    "lat": 37.53274552
  },
  {
    "shopName": "라임카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1680-1",
    "roadAddress": "서울특별시 서초구 서초대로 357",
    "lng": 127.0204665,
    "lat": 37.496161
  },
  {
    "shopName": "더카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-1",
    "roadAddress": "서울특별시 강서구 공항대로 212",
    "lng": 126.8307769,
    "lat": 37.55884186
  },
  {
    "shopName": "와츠폴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 마장동 797-75",
    "roadAddress": "서울특별시 성동구 마조로15길 16",
    "lng": 127.0399568,
    "lat": 37.56375568
  },
  {
    "shopName": "카페",
    "branchName": "센트럴",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 732-21",
    "roadAddress": "서울특별시 용산구 우사단로10길 39",
    "lng": 126.9975913,
    "lat": 37.53316448
  },
  {
    "shopName": "메가엠지씨커피논현아크로힐스점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 276-1",
    "roadAddress": "서울특별시 강남구 언주로 604",
    "lng": 127.0383787,
    "lat": 37.5094906
  },
  {
    "shopName": "엘마르조",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 54-61",
    "roadAddress": "서울특별시 동대문구 회기로23길 59",
    "lng": 127.0557778,
    "lat": 37.59269869
  },
  {
    "shopName": "애틱인서울하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 405-334",
    "roadAddress": "서울특별시 양천구 오목로54길 9",
    "lng": 126.8734313,
    "lat": 37.52378275
  },
  {
    "shopName": "이정컴퍼니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로2가 132",
    "roadAddress": "서울특별시 용산구 한강대로 126-3",
    "lng": 126.9698146,
    "lat": 37.5306548
  },
  {
    "shopName": "빽다방",
    "branchName": "문정역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 643-1",
    "roadAddress": "서울특별시 송파구 법원로 114",
    "lng": 127.1209979,
    "lat": 37.48604895
  },
  {
    "shopName": "뚜카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 96-12",
    "roadAddress": "서울특별시 관악구 서림길 30",
    "lng": 126.9379202,
    "lat": 37.47475958
  },
  {
    "shopName": "그린코너",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로3가 40-480",
    "roadAddress": "서울특별시 용산구 한강대로11길 26",
    "lng": 126.9623605,
    "lat": 37.52561576
  },
  {
    "shopName": "씨씨디CCD",
    "branchName": "구로디지털점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 170-10",
    "roadAddress": "서울특별시 구로구 디지털로33길 48",
    "lng": 126.8944921,
    "lat": 37.48724621
  },
  {
    "shopName": "357텐",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 271-21",
    "roadAddress": "서울특별시 강남구 선릉로111길 36",
    "lng": 127.040518,
    "lat": 37.51025588
  },
  {
    "shopName": "핑크레이디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 압구정동 369-1",
    "roadAddress": "서울특별시 강남구 압구정로29길 71",
    "lng": 127.0283048,
    "lat": 37.53359239
  },
  {
    "shopName": "종이꽃",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 277-1",
    "roadAddress": "서울특별시 마포구 성산로2길 21",
    "lng": 126.9062938,
    "lat": 37.56341302
  },
  {
    "shopName": "요거하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 241-48",
    "roadAddress": "서울특별시 마포구 성미산로29길 34",
    "lng": 126.9219976,
    "lat": 37.56547667
  },
  {
    "shopName": "헤라스컴퍼니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 29",
    "roadAddress": "서울특별시 송파구 올림픽로 300",
    "lng": 127.1042839,
    "lat": 37.51363101
  },
  {
    "shopName": "더아담수서역",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 수서동 728",
    "roadAddress": "서울특별시 강남구 광평로 270",
    "lng": 127.1018383,
    "lat": 37.48738259
  },
  {
    "shopName": "망티커피",
    "branchName": "성수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 301-7",
    "roadAddress": "서울특별시 성동구 연무장3길 17",
    "lng": 127.0517044,
    "lat": 37.54513585
  },
  {
    "shopName": "멜팅쿠키하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 919-17",
    "roadAddress": "서울특별시 강남구 선릉로68길 25",
    "lng": 127.0537289,
    "lat": 37.49954077
  },
  {
    "shopName": "필링필링",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 126-10",
    "roadAddress": "서울특별시 동작구 만양로18길 22",
    "lng": 126.9453875,
    "lat": 37.5129679
  },
  {
    "shopName": "크로플덕오리아가씨",
    "branchName": "구로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 개봉동 38-5",
    "roadAddress": "서울특별시 구로구 고척로21나길 38-4",
    "lng": 126.8436325,
    "lat": 37.50254558
  },
  {
    "shopName": "참팬트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1533-14",
    "roadAddress": "서울특별시 관악구 호암로22길 31",
    "lng": 126.9344981,
    "lat": 37.468935
  },
  {
    "shopName": "노베첸토",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동 209-10",
    "roadAddress": "서울특별시 성북구 성북로23길 25-2",
    "lng": 126.9950506,
    "lat": 37.59261173
  },
  {
    "shopName": "푸드트립크로플",
    "branchName": "두타점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 을지로6가 18-12",
    "roadAddress": "서울특별시 중구 장충단로 275",
    "lng": 127.0087611,
    "lat": 37.56887711
  },
  {
    "shopName": "달빛스테이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 23-27",
    "roadAddress": "서울특별시 성북구 북악산로31길 39",
    "lng": 127.0347069,
    "lat": 37.59427627
  },
  {
    "shopName": "파란만잔",
    "branchName": "영등포구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 550",
    "roadAddress": "서울특별시 영등포구 양산로 91",
    "lng": 126.8931095,
    "lat": 37.524987
  },
  {
    "shopName": "마닐마닐하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 776-2",
    "roadAddress": "서울특별시 강서구 양천로 344",
    "lng": 126.8403421,
    "lat": 37.56825286
  },
  {
    "shopName": "인잇",
    "branchName": "약수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 신당동 340-80",
    "roadAddress": "서울특별시 중구 다산로 152",
    "lng": 127.0122217,
    "lat": 37.55712045
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "홍제역해링턴점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 270-1",
    "roadAddress": "서울특별시 서대문구 세무서8길 30",
    "lng": 126.9469314,
    "lat": 37.59058837
  },
  {
    "shopName": "블루빈스커피",
    "branchName": "거여점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 거여동 202-180",
    "roadAddress": "서울특별시 송파구 거마로 56",
    "lng": 127.1472085,
    "lat": 37.49701777
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "서울시청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 다동 59-2",
    "roadAddress": "서울특별시 중구 다동길 34",
    "lng": 126.9811437,
    "lat": 37.56780402
  },
  {
    "shopName": "벌크커피",
    "branchName": "방이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 155-22",
    "roadAddress": "서울특별시 송파구 백제고분로50길 30-4",
    "lng": 127.117783,
    "lat": 37.51327307
  },
  {
    "shopName": "프라이빗",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 414-36",
    "roadAddress": "서울특별시 마포구 월드컵로23길 38",
    "lng": 126.9072476,
    "lat": 37.55623158
  },
  {
    "shopName": "크로플덕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 476-26",
    "roadAddress": "서울특별시 마포구 방울내로 80-16",
    "lng": 126.9045445,
    "lat": 37.55997286
  },
  {
    "shopName": "스트랏",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 315-107",
    "roadAddress": "서울특별시 성동구 성수이로 93",
    "lng": 127.0565468,
    "lat": 37.54341759
  },
  {
    "shopName": "카페로와",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1036-21",
    "roadAddress": "서울특별시 강서구 화곡로21길 51",
    "lng": 126.8363755,
    "lat": 37.54308405
  },
  {
    "shopName": "99밀크티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 343-13",
    "roadAddress": "서울특별시 마포구 와우산로29가길 79",
    "lng": 126.9251553,
    "lat": 37.55368384
  },
  {
    "shopName": "파스쿠찌",
    "branchName": "신림역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1640-8",
    "roadAddress": "서울특별시 관악구 남부순환로 1608",
    "lng": 126.9291634,
    "lat": 37.4839073
  },
  {
    "shopName": "멍지트",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "서울특별시 관악구 신림동 1426-7",
    "roadAddress": "서울특별시 관악구 봉천로12길 39",
    "lng": 126.9300915,
    "lat": 37.48701532
  },
  {
    "shopName": "매머드익스프레스양재산기협점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 16-5",
    "roadAddress": "서울특별시 서초구 바우뫼로37길 36",
    "lng": 127.038922,
    "lat": 37.48033684
  },
  {
    "shopName": "반달커피",
    "branchName": "구로오류점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 오류동 6-64",
    "roadAddress": "서울특별시 구로구 고척로3길 13",
    "lng": 126.8400267,
    "lat": 37.49583352
  },
  {
    "shopName": "램커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1327-15",
    "roadAddress": "서울특별시 서초구 강남대로53길 8",
    "lng": 127.0280078,
    "lat": 37.49455634
  },
  {
    "shopName": "커피분의커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 782",
    "roadAddress": "서울특별시 강서구 마곡중앙8로5길 63",
    "lng": 126.8384094,
    "lat": 37.566603
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "상봉역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 107-28",
    "roadAddress": "서울특별시 중랑구 면목로 478-1",
    "lng": 127.0861701,
    "lat": 37.59457782
  },
  {
    "shopName": "르데스크서초",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 902-2",
    "roadAddress": "서울특별시 서초구 방배로20길 8-6",
    "lng": 126.9954799,
    "lat": 37.48556202
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "홍제삼거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 469",
    "roadAddress": "서울특별시 서대문구 통일로 397",
    "lng": 126.9473806,
    "lat": 37.58523121
  },
  {
    "shopName": "앨버트커피앤디저트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동7가 208",
    "roadAddress": "서울특별시 영등포구 국회대로50길 20",
    "lng": 126.9056623,
    "lat": 37.52377045
  },
  {
    "shopName": "마타사",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 1-352",
    "roadAddress": "서울특별시 마포구 새창로6나길 31",
    "lng": 126.9543605,
    "lat": 37.54111525
  },
  {
    "shopName": "카페",
    "branchName": "헤세드",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 가양동 187-13",
    "roadAddress": "서울특별시 강서구 강서로 499",
    "lng": 126.8413317,
    "lat": 37.57013672
  },
  {
    "shopName": "루트비커피",
    "branchName": "왕십리역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 도선동 46",
    "roadAddress": "서울특별시 성동구 왕십리로 320",
    "lng": 127.0343496,
    "lat": 37.56232234
  },
  {
    "shopName": "유캔두잇",
    "branchName": "서초교대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1642-1",
    "roadAddress": "서울특별시 서초구 사임당로17길 68",
    "lng": 127.0169713,
    "lat": 37.49190602
  },
  {
    "shopName": "카페시월",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 488-11",
    "roadAddress": "서울특별시 마포구 성미산로 105",
    "lng": 126.9187089,
    "lat": 37.5619776
  },
  {
    "shopName": "카페위한",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 535-24",
    "roadAddress": "서울특별시 양천구 목동중앙북로16길 36",
    "lng": 126.8737408,
    "lat": 37.54458167
  },
  {
    "shopName": "갈마루북까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 502-3",
    "roadAddress": "서울특별시 은평구 연서로27길 31-6",
    "lng": 126.9157589,
    "lat": 37.61866158
  },
  {
    "shopName": "매머드익스프레스역삼신일유토빌점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 735-11",
    "roadAddress": "서울특별시 강남구 논현로87길 41",
    "lng": 127.0335054,
    "lat": 37.49882739
  },
  {
    "shopName": "히어커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 328-8",
    "roadAddress": "서울특별시 서초구 강남대로10길 6",
    "lng": 127.0414301,
    "lat": 37.4681028
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "면목시장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 341-40",
    "roadAddress": "서울특별시 중랑구 면목로33길 38",
    "lng": 127.0836831,
    "lat": 37.57668179
  },
  {
    "shopName": "오늘의기쁨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 874-14",
    "roadAddress": "서울특별시 관악구 봉천로 448",
    "lng": 126.9496196,
    "lat": 37.4821717
  },
  {
    "shopName": "비찰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1636-61",
    "roadAddress": "서울특별시 관악구 신원로 10",
    "lng": 126.9280622,
    "lat": 37.48025707
  },
  {
    "shopName": "르데스크에프앤비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 44-17",
    "roadAddress": "서울특별시 용산구 녹사평대로32길 47",
    "lng": 126.9907748,
    "lat": 37.53270095
  },
  {
    "shopName": "카페비글",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 89-6",
    "roadAddress": "서울특별시 마포구 광성로 36-1",
    "lng": 126.9370848,
    "lat": 37.54964705
  },
  {
    "shopName": "저스트단비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 366-8",
    "roadAddress": "서울특별시 마포구 잔다리로6길 30",
    "lng": 126.9208306,
    "lat": 37.55221173
  },
  {
    "shopName": "카페",
    "branchName": "마마스플라워",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 세곡동 422-5",
    "roadAddress": "서울특별시 강남구 헌릉로571길 56-3",
    "lng": 127.0986353,
    "lat": 37.46785919
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "광장점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 광장동 582",
    "roadAddress": "서울특별시 광진구 아차산로 537-17",
    "lng": 127.0996444,
    "lat": 37.54295213
  },
  {
    "shopName": "끽다느와",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 95",
    "roadAddress": "서울특별시 송파구 송파대로40길 6",
    "lng": 127.1098482,
    "lat": 37.50323881
  },
  {
    "shopName": "양양팥빙수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 446",
    "roadAddress": "서울특별시 마포구 월드컵북로 233",
    "lng": 126.9031007,
    "lat": 37.56966362
  },
  {
    "shopName": "꾸따GGUDDA",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 198-5",
    "roadAddress": "서울특별시 강서구 양천로30길 76",
    "lng": 126.8226144,
    "lat": 37.56976231
  },
  {
    "shopName": "과일샵CAFE리치",
    "branchName": "서초점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1538-4",
    "roadAddress": "서울특별시 서초구 반포대로19길 10",
    "lng": 127.0090685,
    "lat": 37.48749691
  },
  {
    "shopName": "국민우유집",
    "branchName": "건대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 12-35",
    "roadAddress": "서울특별시 광진구 능동로13길 34",
    "lng": 127.0704875,
    "lat": 37.5434831
  },
  {
    "shopName": "해머스미스커피",
    "branchName": "서울시립대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 150-4",
    "roadAddress": "서울특별시 동대문구 서울시립대로 155",
    "lng": 127.0540326,
    "lat": 37.5838635
  },
  {
    "shopName": "요요일",
    "branchName": "마포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 창전동 33-18",
    "roadAddress": "서울특별시 마포구 서강로3길 45",
    "lng": 126.9296478,
    "lat": 37.54976908
  },
  {
    "shopName": "궁전전통찻집",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 은평구 대조동 9-12",
    "roadAddress": "서울특별시 은평구 불광로 25-1",
    "lng": 126.928525,
    "lat": 37.61076803
  },
  {
    "shopName": "다온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 망우동 444-26",
    "roadAddress": "서울특별시 중랑구 용마산로 458",
    "lng": 127.0984094,
    "lat": 37.59191475
  },
  {
    "shopName": "카페온도",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로1가 24",
    "roadAddress": "서울특별시 종로구 종로 19",
    "lng": 126.9799024,
    "lat": 37.57083882
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "강동길동역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 길동 412-10",
    "roadAddress": "서울특별시 강동구 양재대로 1461",
    "lng": 127.1390209,
    "lat": 37.53637975
  },
  {
    "shopName": "무지개정원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 182-64",
    "roadAddress": "서울특별시 중랑구 동일로109길 69",
    "lng": 127.0763386,
    "lat": 37.59110435
  },
  {
    "shopName": "리키커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 41-78",
    "roadAddress": "서울특별시 강서구 공항대로8길 41",
    "lng": 126.8123564,
    "lat": 37.55919861
  },
  {
    "shopName": "퍼스트커피랩",
    "branchName": "서초점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1309",
    "roadAddress": "서울특별시 서초구 서초대로77길 61",
    "lng": 127.0236646,
    "lat": 37.50242277
  },
  {
    "shopName": "카페",
    "branchName": "글로리",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성동구 하왕십리동 973-17",
    "roadAddress": "서울특별시 성동구 무학봉15길 12",
    "lng": 127.0308428,
    "lat": 37.56215845
  },
  {
    "shopName": "리아트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 392-25",
    "roadAddress": "서울특별시 노원구 동일로192길 62",
    "lng": 127.076362,
    "lat": 37.62675876
  },
  {
    "shopName": "커피타임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 방화동 571-49",
    "roadAddress": "서울특별시 강서구 양천로 85",
    "lng": 126.8132593,
    "lat": 37.57363315
  },
  {
    "shopName": "투고오알",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성동구 송정동 73-930",
    "roadAddress": "서울특별시 성동구 송정16길 1-19",
    "lng": 127.0675197,
    "lat": 37.55280359
  },
  {
    "shopName": "라라커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동5가 14",
    "roadAddress": "서울특별시 영등포구 선유로9나길 8",
    "lng": 126.8862799,
    "lat": 37.5171378
  },
  {
    "shopName": "감성커피장안동사거리점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 307-3",
    "roadAddress": "서울특별시 동대문구 장한로 139",
    "lng": 127.0714127,
    "lat": 37.57289161
  },
  {
    "shopName": "시나본",
    "branchName": "양천구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 322-12",
    "roadAddress": "서울특별시 양천구 목동동로 77",
    "lng": 126.8635294,
    "lat": 37.51577675
  },
  {
    "shopName": "콩제",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 신설동 45-2",
    "roadAddress": "서울특별시 동대문구 한빛로 29",
    "lng": 127.0257441,
    "lat": 37.57820012
  },
  {
    "shopName": "어보브더힐",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 858-31",
    "roadAddress": "서울특별시 서초구 방배중앙로13길 2",
    "lng": 126.9890262,
    "lat": 37.48703876
  },
  {
    "shopName": "에스알이커피룸",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 필운동 55-1",
    "roadAddress": "서울특별시 종로구 필운대로1길 17",
    "lng": 126.968421,
    "lat": 37.57759596
  },
  {
    "shopName": "포케올데이",
    "branchName": "서울대입구점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 봉천동 1598-31",
    "roadAddress": "서울특별시 관악구 관악로12길 11",
    "lng": 126.9530104,
    "lat": 37.47821013
  },
  {
    "shopName": "바모스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 신대방동 692-60",
    "roadAddress": "서울특별시 동작구 신대방길 9",
    "lng": 126.9120557,
    "lat": 37.48781473
  },
  {
    "shopName": "일공일이엘스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 19-9",
    "roadAddress": "서울특별시 송파구 올림픽로 119",
    "lng": 127.084168,
    "lat": 37.51208012
  },
  {
    "shopName": "리틀비터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 20-1",
    "roadAddress": "서울특별시 송파구 송이로32길 30",
    "lng": 127.1269745,
    "lat": 37.48746288
  },
  {
    "shopName": "리틀그릭",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 연남동 390-77",
    "roadAddress": "서울특별시 마포구 동교로38길 20",
    "lng": 126.9252635,
    "lat": 37.56191131
  },
  {
    "shopName": "휴계실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 776-5",
    "roadAddress": "서울특별시 영등포구 가마산로34길 4",
    "lng": 126.8962038,
    "lat": 37.49848024
  },
  {
    "shopName": "카페루엘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 203-8",
    "roadAddress": "서울특별시 마포구 삼개로3길 9",
    "lng": 126.9480571,
    "lat": 37.53874358
  },
  {
    "shopName": "플레이홀덤스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 마곡동 777-5",
    "roadAddress": "서울특별시 강서구 마곡동로10길 46",
    "lng": 126.8397163,
    "lat": 37.56700329
  },
  {
    "shopName": "보야쥬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1671-35",
    "roadAddress": "서울특별시 관악구 행운1길 40",
    "lng": 126.9573632,
    "lat": 37.48065444
  },
  {
    "shopName": "데일리",
    "branchName": "커피송파지점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 72-3",
    "roadAddress": "서울특별시 송파구 백제고분로 254",
    "lng": 127.0945115,
    "lat": 37.5023203
  },
  {
    "shopName": "테디의오후",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 본동 48-46",
    "roadAddress": "서울특별시 동작구 노량진로26길 13",
    "lng": 126.9543985,
    "lat": 37.51165139
  },
  {
    "shopName": "케인다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 129-19",
    "roadAddress": "서울특별시 송파구 마천로26길 10",
    "lng": 127.1385986,
    "lat": 37.50225355
  },
  {
    "shopName": "쥬씨&차얌",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동대문구 이문동 288-48",
    "roadAddress": "서울특별시 동대문구 휘경로 8",
    "lng": 127.0608883,
    "lat": 37.59601926
  },
  {
    "shopName": "기류",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 625-13",
    "roadAddress": "서울특별시 광진구 뚝섬로51길 57",
    "lng": 127.0813446,
    "lat": 37.5347828
  },
  {
    "shopName": "옥자시즌투",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동작구 노량진동 244-81",
    "roadAddress": "서울특별시 동작구 노량진로8길 52",
    "lng": 126.938079,
    "lat": 37.51226268
  },
  {
    "shopName": "겜블",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 신길동 156-3",
    "roadAddress": "서울특별시 영등포구 도신로 222",
    "lng": 126.915986,
    "lat": 37.51161146
  },
  {
    "shopName": "카페",
    "branchName": "크크크보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 길동 456-4",
    "roadAddress": "서울특별시 강동구 천호대로175길 14",
    "lng": 127.1370195,
    "lat": 37.53528387
  },
  {
    "shopName": "디코이커피로스터스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 보문동4가 53-1",
    "roadAddress": "서울특별시 성북구 고려대로6길 48",
    "lng": 127.0212918,
    "lat": 37.5836146
  },
  {
    "shopName": "푸가장미상가점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 7",
    "roadAddress": "서울특별시 송파구 올림픽로35길 124",
    "lng": 127.0984584,
    "lat": 37.51645205
  },
  {
    "shopName": "베베베",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 683-43",
    "roadAddress": "서울특별시 용산구 이태원로42길 46-12",
    "lng": 127.0010443,
    "lat": 37.53640147
  },
  {
    "shopName": "동원홈푸드크리스피프레시",
    "branchName": "서울스퀘어점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로5가 541",
    "roadAddress": "서울특별시 중구 한강대로 416",
    "lng": 126.9737396,
    "lat": 37.55549473
  },
  {
    "shopName": "오븐,비스킷",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 279-49",
    "roadAddress": "서울특별시 강북구 한천로 1180",
    "lng": 127.0147542,
    "lat": 37.64835376
  },
  {
    "shopName": "컴포",
    "branchName": "즈마장중앙점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 마장동 772-3",
    "roadAddress": "서울특별시 성동구 마장로 299",
    "lng": 127.0427206,
    "lat": 37.566256
  },
  {
    "shopName": "몬떼비서울",
    "branchName": "도화점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 도화동 560",
    "roadAddress": "서울특별시 마포구 독막로 320",
    "lng": 126.947862,
    "lat": 37.54295873
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "관악구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 856-5",
    "roadAddress": "서울특별시 관악구 관악로 164",
    "lng": 126.9528777,
    "lat": 37.4796146
  },
  {
    "shopName": "68휴게실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 993-2",
    "roadAddress": "서울특별시 영등포구 시흥대로 615",
    "lng": 126.9047454,
    "lat": 37.4874228
  },
  {
    "shopName": "클랩커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 청파동2가 84-2",
    "roadAddress": "서울특별시 용산구 청파로47길 26",
    "lng": 126.9690079,
    "lat": 37.54487526
  },
  {
    "shopName": "더웨이브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 375-111",
    "roadAddress": "서울특별시 마포구 성미산로23길 74",
    "lng": 126.9197666,
    "lat": 37.56633028
  },
  {
    "shopName": "블루버블밀크티",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 흑석동 190-34",
    "roadAddress": "서울특별시 동작구 흑석로 85",
    "lng": 126.9590741,
    "lat": 37.50728657
  },
  {
    "shopName": "보드게임카페레드버튼연신내",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 갈현동 399-19",
    "roadAddress": "서울특별시 은평구 연서로29길 8-15",
    "lng": 126.9196336,
    "lat": 37.61939992
  },
  {
    "shopName": "빈더바닐라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 635-4",
    "roadAddress": "서울특별시 강남구 테헤란로7길 22",
    "lng": 127.0307215,
    "lat": 37.50071482
  },
  {
    "shopName": "제제커피마곡",
    "branchName": "나루점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 759-5",
    "roadAddress": "서울특별시 강서구 마곡중앙5로 18",
    "lng": 126.8258236,
    "lat": 37.56723535
  },
  {
    "shopName": "메멘토모리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 제기동 1200",
    "roadAddress": "서울특별시 동대문구 정릉천동로 115",
    "lng": 127.0356625,
    "lat": 37.58252548
  },
  {
    "shopName": "커피사피엔스",
    "branchName": "역삼푸르지오점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 735-17",
    "roadAddress": "서울특별시 강남구 논현로85길 52",
    "lng": 127.0337964,
    "lat": 37.49818102
  },
  {
    "shopName": "칼도에스프레소바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 729-32",
    "roadAddress": "서울특별시 관악구 보라매로3길 29",
    "lng": 126.9250567,
    "lat": 37.4911685
  },
  {
    "shopName": "카멜커피",
    "branchName": "7호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-310",
    "roadAddress": "서울특별시 성동구 서울숲7길 4",
    "lng": 127.0426324,
    "lat": 37.5483785
  },
  {
    "shopName": "스턴하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 갈월동 19-4",
    "roadAddress": "서울특별시 용산구 두텁바위로1길 5",
    "lng": 126.9726322,
    "lat": 37.5454745
  },
  {
    "shopName": "블루파인애플",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 구의동 671",
    "roadAddress": "서울특별시 광진구 광나루로39길 11",
    "lng": 127.0887614,
    "lat": 37.54549071
  },
  {
    "shopName": "매머드커피에이스하이앤드6차점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-25",
    "roadAddress": "서울특별시 금천구 벚꽃로 234",
    "lng": 126.8861221,
    "lat": 37.47598559
  },
  {
    "shopName": "과일에반하다,프루타",
    "branchName": "고대점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 103-93",
    "roadAddress": "서울특별시 성북구 고려대로24길 39",
    "lng": 127.0295581,
    "lat": 37.58440368
  },
  {
    "shopName": "유별커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 213-25",
    "roadAddress": "서울특별시 동작구 사당로 172",
    "lng": 126.9678773,
    "lat": 37.48648646
  },
  {
    "shopName": "콩스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1678-4",
    "roadAddress": "서울특별시 서초구 서초대로 356",
    "lng": 127.0202277,
    "lat": 37.49540213
  },
  {
    "shopName": "카페",
    "branchName": "오엔오",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 석관동 168-59",
    "roadAddress": "서울특별시 성북구 화랑로42길 52-8",
    "lng": 127.0645383,
    "lat": 37.61381679
  },
  {
    "shopName": "망티커피문정",
    "branchName": "법조타운점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 644",
    "roadAddress": "서울특별시 송파구 법원로11길 11",
    "lng": 127.1184237,
    "lat": 37.48475927
  },
  {
    "shopName": "라에비뉴",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 289-27",
    "roadAddress": "서울특별시 성동구 성수일로10길 33",
    "lng": 127.0539387,
    "lat": 37.54653238
  },
  {
    "shopName": "카페",
    "branchName": "허니힐",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1131-15",
    "roadAddress": "서울특별시 강서구 화곡로58길 51",
    "lng": 126.8537791,
    "lat": 37.55270613
  },
  {
    "shopName": "컴포",
    "branchName": "즈노량진2동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 40-32",
    "roadAddress": "서울특별시 동작구 노량진로12길 8",
    "lng": 126.938307,
    "lat": 37.5129315
  },
  {
    "shopName": "써틴",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 양재동 125-4",
    "roadAddress": "서울특별시 서초구 양재천로19길 22",
    "lng": 127.038125,
    "lat": 37.47635668
  },
  {
    "shopName": "세상의커피",
    "branchName": "2호점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 신대방동 460-1",
    "roadAddress": "서울특별시 동작구 여의대방로16길 53",
    "lng": 126.9167506,
    "lat": 37.49470584
  },
  {
    "shopName": "베러먼데이역삼이스턴점",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 역삼동 735-15",
    "roadAddress": "서울특별시 강남구 테헤란로14길 13",
    "lng": 127.0334641,
    "lat": 37.4985207
  },
  {
    "shopName": "빅싸커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 155",
    "roadAddress": "서울특별시 송파구 중대로 192",
    "lng": 127.126298,
    "lat": 37.49894643
  },
  {
    "shopName": "디저트39",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 봉천동 734-5",
    "roadAddress": "서울특별시 관악구 봉천로7길 41",
    "lng": 126.9260064,
    "lat": 37.49117714
  },
  {
    "shopName": "아이엠피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 시흥동 887",
    "roadAddress": "서울특별시 금천구 시흥대로54길 36",
    "lng": 126.9027492,
    "lat": 37.45303823
  },
  {
    "shopName": "아키비스트한남",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 726-354",
    "roadAddress": "서울특별시 용산구 한남대로42길 41",
    "lng": 127.002969,
    "lat": 37.5439595
  },
  {
    "shopName": "키니베이크샵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 412-97",
    "roadAddress": "서울특별시 강북구 덕릉로41길 38",
    "lng": 127.0302605,
    "lat": 37.63671474
  },
  {
    "shopName": "킹콩스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 240-11",
    "roadAddress": "서울특별시 강남구 학동로50길 6",
    "lng": 127.0397625,
    "lat": 37.51625075
  },
  {
    "shopName": "파우즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 536-9",
    "roadAddress": "서울특별시 양천구 목동중앙북로16길 43",
    "lng": 126.873962,
    "lat": 37.5441693
  },
  {
    "shopName": "코코펠리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 성산동 244-8",
    "roadAddress": "서울특별시 마포구 성미산로 35",
    "lng": 126.9121198,
    "lat": 37.55897068
  },
  {
    "shopName": "젠젠",
    "branchName": "성수점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 273-61",
    "roadAddress": "서울특별시 성동구 연무장11길 10",
    "lng": 127.0575489,
    "lat": 37.542921
  },
  {
    "shopName": "주슬로",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 군자동 503",
    "roadAddress": "서울특별시 광진구 광나루로 369",
    "lng": 127.0710369,
    "lat": 37.54845221
  },
  {
    "shopName": "카페일분",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 4624",
    "roadAddress": "서울특별시 영등포구 신길로16길 7-24",
    "lng": 126.9087009,
    "lat": 37.49845218
  },
  {
    "shopName": "오지메이커",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 51-11",
    "roadAddress": "서울특별시 송파구 백제고분로 509",
    "lng": 127.1151626,
    "lat": 37.51581248
  },
  {
    "shopName": "펠라쉽",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 도림동 253-1",
    "roadAddress": "서울특별시 영등포구 도림로112길 16",
    "lng": 126.9017168,
    "lat": 37.50892067
  },
  {
    "shopName": "크로플덕",
    "branchName": "신길점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 308-44",
    "roadAddress": "서울특별시 영등포구 가마산로61다길 3-3",
    "lng": 126.9044417,
    "lat": 37.50666634
  },
  {
    "shopName": "캠핑고양이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 897-3",
    "roadAddress": "서울특별시 강남구 선릉로 420",
    "lng": 127.0502535,
    "lat": 37.50248636
  },
  {
    "shopName": "더홀릭보드게임",
    "branchName": "수유역점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 수유동 224-15",
    "roadAddress": "서울특별시 강북구 노해로8길 29",
    "lng": 127.0242094,
    "lat": 37.63850296
  },
  {
    "shopName": "호롤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 석촌동 21",
    "roadAddress": "서울특별시 송파구 백제고분로33길 28",
    "lng": 127.0988549,
    "lat": 37.50511076
  },
  {
    "shopName": "텐퍼센트커피가산",
    "branchName": "대성디폴리스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 543-1",
    "roadAddress": "서울특별시 금천구 서부샛길 606",
    "lng": 126.8769955,
    "lat": 37.4799449
  },
  {
    "shopName": "야르르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 800-5",
    "roadAddress": "서울특별시 강서구 공항대로 228",
    "lng": 126.8326591,
    "lat": 37.55862622
  },
  {
    "shopName": "도회",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 동교동 198-7",
    "roadAddress": "서울특별시 마포구 동교로27길 8-3",
    "lng": 126.9230299,
    "lat": 37.55902565
  },
  {
    "shopName": "차차커피코",
    "branchName": "노량진1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 90-1",
    "roadAddress": "서울특별시 동작구 노량진로16길 25",
    "lng": 126.9439797,
    "lat": 37.51253183
  },
  {
    "shopName": "벌크커피",
    "branchName": "오금점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 24-2",
    "roadAddress": "서울특별시 송파구 위례성대로22길 27",
    "lng": 127.1303575,
    "lat": 37.50777074
  },
  {
    "shopName": "규리네과일가게",
    "branchName": "서울대입구점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 890-10",
    "roadAddress": "서울특별시 관악구 양녕로2가길 20",
    "lng": 126.947352,
    "lat": 37.48422394
  },
  {
    "shopName": "아임일리터",
    "branchName": "아차산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 115-21",
    "roadAddress": "서울특별시 광진구 천호대로129길 7",
    "lng": 127.0900103,
    "lat": 37.55260063
  },
  {
    "shopName": "라벤더",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 238-8",
    "roadAddress": "서울특별시 강남구 언주로130길 11",
    "lng": 127.0363396,
    "lat": 37.51500646
  },
  {
    "shopName": "해피카페코리아",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 670-9",
    "roadAddress": "서울특별시 강남구 테헤란로27길 30",
    "lng": 127.0374958,
    "lat": 37.50337426
  },
  {
    "shopName": "오늘도벨카롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 472-58",
    "roadAddress": "서울특별시 동대문구 답십리로30길 13",
    "lng": 127.0487505,
    "lat": 37.5745403
  },
  {
    "shopName": "얼웨이즈스프링",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 387-38",
    "roadAddress": "서울특별시 마포구 성미산로 190-33",
    "lng": 126.9257426,
    "lat": 37.56243827
  },
  {
    "shopName": "프린세스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 826-29",
    "roadAddress": "서울특별시 강남구 테헤란로4길 32",
    "lng": 127.0301566,
    "lat": 37.49629501
  },
  {
    "shopName": "진의보드카폐",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 동교동 201-16",
    "roadAddress": "서울특별시 마포구 동교로23길 14",
    "lng": 126.9208317,
    "lat": 37.55684308
  },
  {
    "shopName": "홀덤castle아카데미",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 697-54",
    "roadAddress": "서울특별시 강남구 테헤란로51길 18",
    "lng": 127.0463509,
    "lat": 37.50520314
  },
  {
    "shopName": "티아유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 72-8",
    "roadAddress": "서울특별시 노원구 덕릉로126길 2",
    "lng": 127.0814691,
    "lat": 37.67018353
  },
  {
    "shopName": "레커베이크하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 566-50",
    "roadAddress": "서울특별시 강북구 인수봉로 310",
    "lng": 127.0107004,
    "lat": 37.64641865
  },
  {
    "shopName": "연경당",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 삼청동 68",
    "roadAddress": "서울특별시 종로구 삼청로 106-7",
    "lng": 126.9824939,
    "lat": 37.58504355
  },
  {
    "shopName": "바빈스",
    "branchName": "커피상암DMC점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1601",
    "roadAddress": "서울특별시 마포구 월드컵북로 402",
    "lng": 126.8890206,
    "lat": 37.58020018
  },
  {
    "shopName": "제우스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동대문구 장안동 431-3",
    "roadAddress": "서울특별시 동대문구 장한로 25",
    "lng": 127.0657638,
    "lat": 37.56381855
  },
  {
    "shopName": "네온",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동대문구 장안동 433-8",
    "roadAddress": "서울특별시 동대문구 장한로2길 7",
    "lng": 127.0659856,
    "lat": 37.56236961
  },
  {
    "shopName": "페이보릿연남",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 383-44",
    "roadAddress": "서울특별시 마포구 동교로38길 27-14",
    "lng": 126.9261682,
    "lat": 37.56196459
  },
  {
    "shopName": "라떼유",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 등촌동 647-37",
    "roadAddress": "서울특별시 강서구 공항대로59길 22",
    "lng": 126.8638747,
    "lat": 37.55267756
  },
  {
    "shopName": "66활동실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 구로구 가리봉동 126-14",
    "roadAddress": "서울특별시 구로구 디지털로19길 33",
    "lng": 126.8896164,
    "lat": 37.4812806
  },
  {
    "shopName": "땡이네",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강동구 상일동 275-7",
    "roadAddress": "서울특별시 강동구 상일로5길 18",
    "lng": 127.1719889,
    "lat": 37.54905911
  },
  {
    "shopName": "인피니트",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 마곡동 759",
    "roadAddress": "서울특별시 강서구 마곡서로 158",
    "lng": 126.8254029,
    "lat": 37.56807813
  },
  {
    "shopName": "와인다방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 양재동 257-5",
    "roadAddress": "서울특별시 서초구 마방로6길 28",
    "lng": 127.0425129,
    "lat": 37.4745001
  },
  {
    "shopName": "극락왕생",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 문래동2가 40-6",
    "roadAddress": "서울특별시 영등포구 경인로77길 14",
    "lng": 126.8928908,
    "lat": 37.51299208
  },
  {
    "shopName": "앙시엔",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 90-208",
    "roadAddress": "서울특별시 성북구 종암로34길 12",
    "lng": 127.0324291,
    "lat": 37.6048989
  },
  {
    "shopName": "에이엠에스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 689",
    "roadAddress": "서울특별시 영등포구 대림로 202",
    "lng": 126.8985189,
    "lat": 37.49870008
  },
  {
    "shopName": "미려활동실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 834-2",
    "roadAddress": "서울특별시 영등포구 대림로19길 1",
    "lng": 126.9013542,
    "lat": 37.49275255
  },
  {
    "shopName": "야미",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 66-26",
    "roadAddress": "서울특별시 강남구 논현로 738",
    "lng": 127.0291519,
    "lat": 37.51799315
  },
  {
    "shopName": "만남의장소",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 504-11",
    "roadAddress": "서울특별시 관악구 조원로 128-8",
    "lng": 126.9163826,
    "lat": 37.48495312
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "중곡중앙점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 중곡동 47-14",
    "roadAddress": "서울특별시 광진구 능동로 338-1",
    "lng": 127.0811297,
    "lat": 37.55966817
  },
  {
    "shopName": "동포오락실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 701",
    "roadAddress": "서울특별시 영등포구 대림로21길 5-1",
    "lng": 126.9006297,
    "lat": 37.49280888
  },
  {
    "shopName": "친구",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1083-14",
    "roadAddress": "서울특별시 영등포구 디지털로37길 3",
    "lng": 126.8987402,
    "lat": 37.48902491
  },
  {
    "shopName": "스타보드게임장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 번동 446-25",
    "roadAddress": "서울특별시 강북구 오패산로77길 40",
    "lng": 127.0247627,
    "lat": 37.63604771
  },
  {
    "shopName": "피자플렉스",
    "branchName": "성북점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성북구 안암동2가 94-1",
    "roadAddress": "서울특별시 성북구 보문로26길 82-1",
    "lng": 127.0233423,
    "lat": 37.58785747
  },
  {
    "shopName": "카페우주",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1051-9",
    "roadAddress": "서울특별시 영등포구 도림로 127",
    "lng": 126.8963216,
    "lat": 37.49277772
  },
  {
    "shopName": "스카이",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 마곡동 795-7",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 93",
    "lng": 126.8376838,
    "lat": 37.56012645
  },
  {
    "shopName": "킹스맨",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 도곡동 418-9",
    "roadAddress": "서울특별시 강남구 논현로38길 38-5",
    "lng": 127.0451226,
    "lat": 37.4853069
  },
  {
    "shopName": "과일팡",
    "branchName": "강동점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 천호동 167-72",
    "roadAddress": "서울특별시 강동구 진황도로27길 27",
    "lng": 127.131968,
    "lat": 37.53961697
  },
  {
    "shopName": "보드게임카페잠실새내점",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 180-1",
    "roadAddress": "서울특별시 송파구 올림픽로10길 9",
    "lng": 127.0812202,
    "lat": 37.51079574
  },
  {
    "shopName": "풍경달다",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 사당동 1013-1",
    "roadAddress": "서울특별시 동작구 사당로22길 6",
    "lng": 126.9766409,
    "lat": 37.48314771
  },
  {
    "shopName": "과일이좋아",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 대치동 891-6",
    "roadAddress": "서울특별시 강남구 테헤란로 428",
    "lng": 127.0539908,
    "lat": 37.50567906
  },
  {
    "shopName": "에이스보드게임방",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 망우동 531-1",
    "roadAddress": "서울특별시 중랑구 용마산로 453",
    "lng": 127.0977659,
    "lat": 37.59175665
  },
  {
    "shopName": "젤라또카페씨엘로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 광진구 중곡동 175-80",
    "roadAddress": "서울특별시 광진구 면목로13길 13",
    "lng": 127.0823262,
    "lat": 37.56916552
  },
  {
    "shopName": "청담",
    "branchName": "마리지점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 청담동 76-15",
    "roadAddress": "서울특별시 강남구 삼성로134길 8",
    "lng": 127.0503135,
    "lat": 37.52006642
  },
  {
    "shopName": "요고",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 영등포구 양평동3가 13",
    "roadAddress": "서울특별시 영등포구 양산로 57-5",
    "lng": 126.8893449,
    "lat": 37.52556437
  },
  {
    "shopName": "88산소휴게실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 993-55",
    "roadAddress": "서울특별시 영등포구 도림천로21길 36",
    "lng": 126.9034422,
    "lat": 37.48839286
  },
  {
    "shopName": "캐슬에이",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 서교동 362-15",
    "roadAddress": "서울특별시 마포구 와우산로21길 19-11",
    "lng": 126.9229069,
    "lat": 37.55184325
  },
  {
    "shopName": "금다방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강북구 수유동 173-10",
    "roadAddress": "서울특별시 강북구 한천로140길 38",
    "lng": 127.0281849,
    "lat": 37.64122986
  },
  {
    "shopName": "유니",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 남가좌동 5-154",
    "roadAddress": "서울특별시 서대문구 명지대3길 12",
    "lng": 126.9231028,
    "lat": 37.58226405
  },
  {
    "shopName": "에이캔커피",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 91-37",
    "roadAddress": "서울특별시 관악구 신림로48길 11",
    "lng": 126.9326005,
    "lat": 37.47915382
  },
  {
    "shopName": "보드패밀리",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 홍은동 산26-155",
    "roadAddress": "서울특별시 서대문구 백련사길 39",
    "lng": 126.9315367,
    "lat": 37.58074586
  },
  {
    "shopName": "군침보드게임장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 53-4",
    "roadAddress": "서울특별시 동대문구 답십리로 160",
    "lng": 127.0578072,
    "lat": 37.57273875
  },
  {
    "shopName": "크로플한입왕",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 자양동 547-65",
    "roadAddress": "서울특별시 광진구 능동로7길 9",
    "lng": 127.0684425,
    "lat": 37.53686227
  },
  {
    "shopName": "영팔영칠",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1058-5",
    "roadAddress": "서울특별시 영등포구 디지털로37길 29",
    "lng": 126.8976885,
    "lat": 37.4913398
  },
  {
    "shopName": "더요고",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 대흥동 200-3",
    "roadAddress": "서울특별시 마포구 백범로 112",
    "lng": 126.9435392,
    "lat": 37.54697482
  },
  {
    "shopName": "행복한공간",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 신도림동 291-124",
    "roadAddress": "서울특별시 구로구 신도림로11다길 23",
    "lng": 126.8778258,
    "lat": 37.50833569
  },
  {
    "shopName": "에움",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 창전동 2-68",
    "roadAddress": "서울특별시 마포구 서강로11길 36",
    "lng": 126.9317478,
    "lat": 37.55407705
  },
  {
    "shopName": "온고지신",
    "branchName": "센트럴시티점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 반포동 19-3",
    "roadAddress": "서울특별시 서초구 신반포로 176",
    "lng": 127.0023932,
    "lat": 37.50393001
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "마포아트센터점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 대흥동 30-3",
    "roadAddress": "서울특별시 마포구 대흥로20길 28",
    "lng": 126.9455819,
    "lat": 37.54978631
  },
  {
    "shopName": "카페",
    "branchName": "오가르",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성동구 홍익동 267",
    "roadAddress": "서울특별시 성동구 무학로10길 24",
    "lng": 127.0334782,
    "lat": 37.56581126
  },
  {
    "shopName": "케이알",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 737-9",
    "roadAddress": "서울특별시 영등포구 대림로35나길 24",
    "lng": 126.8975533,
    "lat": 37.49669075
  },
  {
    "shopName": "드링스온",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 서교동 408-3",
    "roadAddress": "서울특별시 마포구 와우산로17길 19-8",
    "lng": 126.9215314,
    "lat": 37.54991148
  },
  {
    "shopName": "왕생물어",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중구 을지로6가 18-37",
    "roadAddress": "서울특별시 중구 을지로43길 38",
    "lng": 127.0077465,
    "lat": 37.56770624
  },
  {
    "shopName": "킹스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 갈현동 453-11",
    "roadAddress": "서울특별시 은평구 연서로27길 16",
    "lng": 126.9177245,
    "lat": 37.61825614
  },
  {
    "shopName": "포용그릭요거트",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 방배동 2525",
    "roadAddress": "서울특별시 서초구 과천대로 946",
    "lng": 126.9821336,
    "lat": 37.47499556
  },
  {
    "shopName": "제이앤에프스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 가락동 99-3",
    "roadAddress": "서울특별시 송파구 송파대로 260",
    "lng": 127.1188454,
    "lat": 37.49313329
  },
  {
    "shopName": "파스쿠찌",
    "branchName": "공릉역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 노원구 공릉동 398-4",
    "roadAddress": "서울특별시 노원구 동일로191길 7",
    "lng": 127.0726092,
    "lat": 37.62517954
  },
  {
    "shopName": "후즈베이커리",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 봉천동 879-1",
    "roadAddress": "서울특별시 관악구 쑥고개로21길 9",
    "lng": 126.9484357,
    "lat": 37.47951208
  },
  {
    "shopName": "플레이팩토보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 가락동 913",
    "roadAddress": "서울특별시 송파구 송파대로 345",
    "lng": 127.1025188,
    "lat": 37.49760579
  },
  {
    "shopName": "폴렌",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 개봉동 255-37",
    "roadAddress": "서울특별시 구로구 개봉로2길 133-25",
    "lng": 126.8604615,
    "lat": 37.49138303
  },
  {
    "shopName": "어여와보드게임대화방",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1429-16",
    "roadAddress": "서울특별시 관악구 신림로 387",
    "lng": 126.9280553,
    "lat": 37.48865479
  },
  {
    "shopName": "플러피클라우드",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 용산구 후암동 255-14",
    "roadAddress": "서울특별시 용산구 두텁바위로 59-1",
    "lng": 126.9788813,
    "lat": 37.5461234
  },
  {
    "shopName": "꽃님이네",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 마포구 서교동 327-30",
    "roadAddress": "서울특별시 마포구 와우산로29길 4-30",
    "lng": 126.9297528,
    "lat": 37.55508617
  },
  {
    "shopName": "비틀쥬스",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동작구 흑석동 224-1",
    "roadAddress": "서울특별시 동작구 흑석로 102",
    "lng": 126.9604036,
    "lat": 37.50602779
  },
  {
    "shopName": "과당",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 화곡동 846-38",
    "roadAddress": "서울특별시 강서구 강서로8길 166-8",
    "lng": 126.8573101,
    "lat": 37.53046675
  },
  {
    "shopName": "오십오",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 송파구 송파동 189-10",
    "roadAddress": "서울특별시 송파구 송파대로36가길 14",
    "lng": 127.1152122,
    "lat": 37.50011639
  },
  {
    "shopName": "신사동마작성인오락실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 528-28",
    "roadAddress": "서울특별시 관악구 난곡로66길 15",
    "lng": 126.9152505,
    "lat": 37.48270813
  },
  {
    "shopName": "몬떼비서울",
    "branchName": "종로점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 공평동 144",
    "roadAddress": "서울특별시 종로구 삼봉로 94",
    "lng": 126.9822208,
    "lat": 37.57183195
  },
  {
    "shopName": "다종오락실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1644-8",
    "roadAddress": "서울특별시 관악구 조원로 13",
    "lng": 126.9038852,
    "lat": 37.4836124
  },
  {
    "shopName": "갤러리카페아틀리에",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 도봉구 창동 286-6",
    "roadAddress": "서울특별시 도봉구 해등로16길 54",
    "lng": 127.0428062,
    "lat": 37.65501808
  },
  {
    "shopName": "카페플랜",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 광진구 자양동 600-28",
    "roadAddress": "서울특별시 광진구 자양번영로2길 7",
    "lng": 127.0754117,
    "lat": 37.53051957
  },
  {
    "shopName": "어나더사이드",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 내발산동 677",
    "roadAddress": "서울특별시 강서구 강서로 318",
    "lng": 126.8371335,
    "lat": 37.55402105
  },
  {
    "shopName": "퍼펙트",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 청담동 124-14",
    "roadAddress": "서울특별시 강남구 압구정로79길 38",
    "lng": 127.0502589,
    "lat": 37.52526506
  },
  {
    "shopName": "이비자홀덤펍",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 신사동 512-18",
    "roadAddress": "서울특별시 강남구 강남대로152길 13",
    "lng": 127.0204835,
    "lat": 37.51737194
  },
  {
    "shopName": "711보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 727-6",
    "roadAddress": "서울특별시 영등포구 대림로29나길 2",
    "lng": 126.8968414,
    "lat": 37.49511628
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "길음롯데캐슬클라시아점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 길음동 1289",
    "roadAddress": "서울특별시 성북구 숭인로8길 80",
    "lng": 127.0270809,
    "lat": 37.60944122
  },
  {
    "shopName": "에덴",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1577-1",
    "roadAddress": "서울특별시 관악구 남부순환로 1540",
    "lng": 126.9217722,
    "lat": 37.48286694
  },
  {
    "shopName": "어쩔수없지",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 고척동 52-383",
    "roadAddress": "서울특별시 구로구 중앙로6길 9",
    "lng": 126.864347,
    "lat": 37.50063811
  },
  {
    "shopName": "클라스홀덤",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 응암동 107-2",
    "roadAddress": "서울특별시 은평구 응암로 292",
    "lng": 126.9205053,
    "lat": 37.59749483
  },
  {
    "shopName": "하루",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 개포동 1194-7",
    "roadAddress": "서울특별시 강남구 논현로 36",
    "lng": 127.0485421,
    "lat": 37.47424244
  },
  {
    "shopName": "꼬꼬드릴로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 충무로5가 36-1",
    "roadAddress": "서울특별시 중구 퇴계로45길 22-24",
    "lng": 127.0004102,
    "lat": 37.56355361
  },
  {
    "shopName": "원퍼밀상암디디엠씨점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1610",
    "roadAddress": "서울특별시 마포구 매봉산로 75",
    "lng": 126.8928847,
    "lat": 37.57844343
  },
  {
    "shopName": "긱스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 390-31",
    "roadAddress": "서울특별시 마포구 동교로38길 27-12",
    "lng": 126.9260346,
    "lat": 37.5618102
  },
  {
    "shopName": "비비",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 삼성동 124",
    "roadAddress": "서울특별시 강남구 봉은사로68길 45",
    "lng": 127.0520875,
    "lat": 37.5095023
  },
  {
    "shopName": "업타운",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 창천동 53-28",
    "roadAddress": "서울특별시 서대문구 연세로7안길 45",
    "lng": 126.9342352,
    "lat": 37.55822629
  },
  {
    "shopName": "심온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 97-4",
    "roadAddress": "서울특별시 서초구 양재천로 103-3",
    "lng": 127.0399537,
    "lat": 37.47658781
  },
  {
    "shopName": "공그릭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 338-14",
    "roadAddress": "서울특별시 노원구 공릉로33길 12-9",
    "lng": 127.0784169,
    "lat": 37.62273817
  },
  {
    "shopName": "마작카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1598-21",
    "roadAddress": "서울특별시 관악구 관악로 146",
    "lng": 126.952512,
    "lat": 37.4782778
  },
  {
    "shopName": "매머드익스프레스서초쌍용플래티넘점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1445-13",
    "roadAddress": "서울특별시 서초구 서초중앙로 18",
    "lng": 127.0173231,
    "lat": 37.48404273
  },
  {
    "shopName": "성북동과일카페138",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동4가 138",
    "roadAddress": "서울특별시 성북구 동소문로23길 8-10",
    "lng": 127.0180951,
    "lat": 37.59425637
  },
  {
    "shopName": "비유어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 72-4",
    "roadAddress": "서울특별시 동대문구 답십리로51길 20-1",
    "lng": 127.0587549,
    "lat": 37.57389965
  },
  {
    "shopName": "보드카페K",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 구의동 246-47",
    "roadAddress": "서울특별시 광진구 아차산로51길 8",
    "lng": 127.0854423,
    "lat": 37.53742766
  },
  {
    "shopName": "헤르만의정원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 청진동 246",
    "roadAddress": "서울특별시 종로구 종로3길 17",
    "lng": 126.9788929,
    "lat": 37.57098327
  },
  {
    "shopName": "와이블랙",
    "branchName": "사당점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1033-22",
    "roadAddress": "서울특별시 동작구 동작대로7길 36",
    "lng": 126.9799631,
    "lat": 37.47913971
  },
  {
    "shopName": "카페",
    "branchName": "인사이더보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 삼성동 157-19",
    "roadAddress": "서울특별시 강남구 삼성로92길 13",
    "lng": 127.0575583,
    "lat": 37.50799626
  },
  {
    "shopName": "포타모",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 하월곡동 64-4",
    "roadAddress": "서울특별시 성북구 화랑로5길 13",
    "lng": 127.0388723,
    "lat": 37.60321255
  },
  {
    "shopName": "피프틴,스위티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 중림동 473-5",
    "roadAddress": "서울특별시 중구 청파로 453",
    "lng": 126.9679415,
    "lat": 37.55984127
  },
  {
    "shopName": "잠바주스",
    "branchName": "압구정역점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 신사동 579-3",
    "roadAddress": "서울특별시 강남구 압구정로 162",
    "lng": 127.027449,
    "lat": 37.52630486
  },
  {
    "shopName": "정릉동커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 372-30",
    "roadAddress": "서울특별시 성북구 솔샘로6길 36-16",
    "lng": 127.0071002,
    "lat": 37.60869814
  },
  {
    "shopName": "그린파파야향기",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 사근동 201",
    "roadAddress": "서울특별시 성동구 사근동11길 12",
    "lng": 127.0482176,
    "lat": 37.56214662
  },
  {
    "shopName": "뚠뚠커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 646-46",
    "roadAddress": "서울특별시 광진구 뚝섬로52마길 49",
    "lng": 127.0811808,
    "lat": 37.52877149
  },
  {
    "shopName": "티파니블루",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 구의동 615-11",
    "roadAddress": "서울특별시 광진구 자양로37길 12",
    "lng": 127.0875424,
    "lat": 37.54801325
  },
  {
    "shopName": "메가커피구로",
    "branchName": "항동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 항동 83-8",
    "roadAddress": "서울특별시 구로구 서해안로 2124",
    "lng": 126.8253777,
    "lat": 37.48165955
  },
  {
    "shopName": "팀커피",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 영등포구 여의도동 44-21",
    "roadAddress": "서울특별시 영등포구 국제금융로8길 19",
    "lng": 126.9291235,
    "lat": 37.52075076
  },
  {
    "shopName": "에쏘피리언스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 312-1",
    "roadAddress": "서울특별시 강동구 천중로15길 51",
    "lng": 127.1280638,
    "lat": 37.54741837
  },
  {
    "shopName": "마음을담아",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 1597-3",
    "roadAddress": "서울특별시 관악구 신원로3길 27",
    "lng": 126.9268827,
    "lat": 37.48209352
  },
  {
    "shopName": "아뜰리에드라크레페",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-498",
    "roadAddress": "서울특별시 성동구 서울숲2길 12-8",
    "lng": 127.0397057,
    "lat": 37.54715634
  },
  {
    "shopName": "위너",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 118-3",
    "roadAddress": "서울특별시 강남구 선릉로131길 15",
    "lng": 127.0396018,
    "lat": 37.51731269
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "잠실나루역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 신천동 17-4",
    "roadAddress": "서울특별시 송파구 올림픽로37길 130",
    "lng": 127.1044814,
    "lat": 37.52076889
  },
  {
    "shopName": "과일에반하다프루타",
    "branchName": "노량진점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 동작구 노량진동 215-186",
    "roadAddress": "서울특별시 동작구 만양로 56",
    "lng": 126.946518,
    "lat": 37.50898635
  },
  {
    "shopName": "더블유홀덤스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 마곡동 773-1",
    "roadAddress": "서울특별시 강서구 마곡중앙6로 10",
    "lng": 126.828195,
    "lat": 37.56037504
  },
  {
    "shopName": "카페",
    "branchName": "희다왕십리센트라스점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 하왕십리동 1070",
    "roadAddress": "서울특별시 성동구 왕십리로 410",
    "lng": 127.0240621,
    "lat": 37.56654474
  },
  {
    "shopName": "쉼카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 588-1",
    "roadAddress": "서울특별시 관악구 난우길 39",
    "lng": 126.9173806,
    "lat": 37.47613198
  },
  {
    "shopName": "용산홀덤펍",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 용산구 한강로2가 2-192",
    "roadAddress": "서울특별시 용산구 한강대로39길 20",
    "lng": 126.968111,
    "lat": 37.53112649
  },
  {
    "shopName": "공차",
    "branchName": "먹골역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중랑구 묵동 170-1",
    "roadAddress": "서울특별시 중랑구 동일로 932",
    "lng": 127.0775414,
    "lat": 37.61382905
  },
  {
    "shopName": "개러지로스터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도1동 362-4",
    "roadAddress": "서울특별시 동작구 상도로37길 39",
    "lng": 126.9507298,
    "lat": 37.50060805
  },
  {
    "shopName": "크로플로",
    "branchName": "장안점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 443-7",
    "roadAddress": "서울특별시 동대문구 천호대로91길 54",
    "lng": 127.0699849,
    "lat": 37.56389693
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "오류동역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 오류동 54-5",
    "roadAddress": "서울특별시 구로구 경인로20가길 5",
    "lng": 126.8441039,
    "lat": 37.49544098
  },
  {
    "shopName": "스트릿1988",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성동구 행당동 317-52",
    "roadAddress": "서울특별시 성동구 행당로 129",
    "lng": 127.0332898,
    "lat": 37.55849323
  },
  {
    "shopName": "블랙조커스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 상암동 2-10",
    "roadAddress": "서울특별시 마포구 성암로 223-1",
    "lng": 126.8949484,
    "lat": 37.57898537
  },
  {
    "shopName": "퍼플리프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 607-11",
    "roadAddress": "서울특별시 강남구 논현로 557",
    "lng": 127.0342414,
    "lat": 37.50578055
  },
  {
    "shopName": "카페",
    "branchName": "일단시켜찹쌀타코야끼&",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 40-103",
    "roadAddress": "서울특별시 관악구 은천로39길 22",
    "lng": 126.9552981,
    "lat": 37.48686247
  },
  {
    "shopName": "오마이베이글",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 561",
    "roadAddress": "서울특별시 강동구 성내로10길 9-10",
    "lng": 127.1251202,
    "lat": 37.52815005
  },
  {
    "shopName": "과일에반하다프루타",
    "branchName": "홍대점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 마포구 상수동 72-1",
    "roadAddress": "서울특별시 마포구 와우산로 94",
    "lng": 126.9249219,
    "lat": 37.55260046
  },
  {
    "shopName": "께",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 657-123",
    "roadAddress": "서울특별시 도봉구 도봉로114길 29-5",
    "lng": 127.0358849,
    "lat": 37.64775345
  },
  {
    "shopName": "글래드앤쏠티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 염리동 532-3",
    "roadAddress": "서울특별시 마포구 대흥로24바길 11",
    "lng": 126.9488566,
    "lat": 37.55432972
  },
  {
    "shopName": "카페",
    "branchName": "하인나",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 267-2",
    "roadAddress": "서울특별시 동대문구 전농로 43",
    "lng": 127.0566345,
    "lat": 37.5687828
  },
  {
    "shopName": "피쉬펌",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 성북구 안암동5가 104-121",
    "roadAddress": "서울특별시 성북구 고려대로24길 56",
    "lng": 127.0292961,
    "lat": 37.58365366
  },
  {
    "shopName": "엠쥐엠",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 성동구 홍익동 120-2",
    "roadAddress": "서울특별시 성동구 마장로 228",
    "lng": 127.0350031,
    "lat": 37.56606702
  },
  {
    "shopName": "퀸보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 잠원동 39-4",
    "roadAddress": "서울특별시 서초구 신반포로47길 33-3",
    "lng": 127.019027,
    "lat": 37.51197156
  },
  {
    "shopName": "보리수",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동3가 2",
    "roadAddress": "서울특별시 성북구 고려대로8길 25",
    "lng": 127.0216617,
    "lat": 37.584771
  },
  {
    "shopName": "헬로마치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 삼전동 4-9",
    "roadAddress": "서울특별시 송파구 삼전로10길 7",
    "lng": 127.0902382,
    "lat": 37.50589171
  },
  {
    "shopName": "할리스",
    "branchName": "강변역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 589-10",
    "roadAddress": "서울특별시 광진구 구의강변로 64",
    "lng": 127.0925786,
    "lat": 37.53586081
  },
  {
    "shopName": "아임엘렌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 명륜2가 8-29",
    "roadAddress": "서울특별시 종로구 창경궁로 257",
    "lng": 126.99995,
    "lat": 37.58442686
  },
  {
    "shopName": "감성커피",
    "branchName": "월계점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 월계동 776",
    "roadAddress": "서울특별시 노원구 초안산로5길 12",
    "lng": 127.0517276,
    "lat": 37.63255525
  },
  {
    "shopName": "영다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 공항동 41-53",
    "roadAddress": "서울특별시 강서구 공항대로8길 27",
    "lng": 126.8123681,
    "lat": 37.55989252
  },
  {
    "shopName": "요아반",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중랑구 면목동 1551",
    "roadAddress": "서울특별시 중랑구 봉우재로 52",
    "lng": 127.0791163,
    "lat": 37.5908197
  },
  {
    "shopName": "티블랙",
    "branchName": "가산점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 60-19",
    "roadAddress": "서울특별시 금천구 벚꽃로 278",
    "lng": 126.8846229,
    "lat": 37.47948554
  },
  {
    "shopName": "영플레이스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한남동 683-14",
    "roadAddress": "서울특별시 용산구 이태원로54길 40",
    "lng": 127.001516,
    "lat": 37.53666676
  },
  {
    "shopName": "메가엠지씨커피서울은빛초점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 22",
    "roadAddress": "서울특별시 은평구 진관3로 67",
    "lng": 126.9212139,
    "lat": 37.64250772
  },
  {
    "shopName": "다음",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성북구 성북동 297-1",
    "roadAddress": "서울특별시 성북구 성북로26길 35",
    "lng": 126.9935603,
    "lat": 37.59564455
  },
  {
    "shopName": "디저트39",
    "branchName": "신사역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 논현동 16-47",
    "roadAddress": "서울특별시 강남구 강남대로146길 25",
    "lng": 127.0221512,
    "lat": 37.51526828
  },
  {
    "shopName": "오아오아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 660-2",
    "roadAddress": "서울특별시 성동구 왕십리로6길 4-5",
    "lng": 127.0452656,
    "lat": 37.54600303
  },
  {
    "shopName": "파티좋아",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 창천동 52-155",
    "roadAddress": "서울특별시 서대문구 연세로11길 20",
    "lng": 126.9357407,
    "lat": 37.55901477
  },
  {
    "shopName": "크로플각",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 326-8",
    "roadAddress": "서울특별시 동대문구 답십리로69길 87",
    "lng": 127.0739982,
    "lat": 37.57619173
  },
  {
    "shopName": "시카고홀덤존",
    "branchName": "잠실점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 177-3",
    "roadAddress": "서울특별시 송파구 백제고분로7길 9",
    "lng": 127.0798433,
    "lat": 37.51054174
  },
  {
    "shopName": "브라운프론트도어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 403-12",
    "roadAddress": "서울특별시 마포구 포은로 94",
    "lng": 126.9051658,
    "lat": 37.55541037
  },
  {
    "shopName": "다&원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 종로5가 33-1",
    "roadAddress": "서울특별시 종로구 종로 235-1",
    "lng": 127.0040771,
    "lat": 37.57124347
  },
  {
    "shopName": "양양보드방",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 727-1",
    "roadAddress": "서울특별시 영등포구 대림로31가길 16",
    "lng": 126.8969264,
    "lat": 37.49548651
  },
  {
    "shopName": "79파운야드영등포포레나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동7가 208",
    "roadAddress": "서울특별시 영등포구 국회대로50길 20",
    "lng": 126.9056623,
    "lat": 37.52377045
  },
  {
    "shopName": "댕스데이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 224-15",
    "roadAddress": "서울특별시 강북구 노해로8길 29",
    "lng": 127.0242094,
    "lat": 37.63850296
  },
  {
    "shopName": "로꼬로꼬",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 686",
    "roadAddress": "서울특별시 강남구 언주로106길 10",
    "lng": 127.0405847,
    "lat": 37.50769742
  },
  {
    "shopName": "에스플러스인터내셔널",
    "branchName": "고대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 제기동 136-189",
    "roadAddress": "서울특별시 동대문구 안암로22길 22",
    "lng": 127.0356065,
    "lat": 37.58774206
  },
  {
    "shopName": "휘카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 127-75",
    "roadAddress": "서울특별시 동대문구 서울시립대로 117",
    "lng": 127.0513734,
    "lat": 37.58106695
  },
  {
    "shopName": "슬라임앤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 517-2",
    "roadAddress": "서울특별시 노원구 동일로184길 30",
    "lng": 127.0755363,
    "lat": 37.62391402
  },
  {
    "shopName": "블랑하우스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서대문구 창천동 5-44",
    "roadAddress": "서울특별시 서대문구 연세로4길 53",
    "lng": 126.9392585,
    "lat": 37.55837065
  },
  {
    "shopName": "에슬로우커피",
    "branchName": "태평로점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 태평로2가 52-4",
    "roadAddress": "서울특별시 중구 남대문로1길 57-1",
    "lng": 126.9775557,
    "lat": 37.56363722
  },
  {
    "shopName": "하리보",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 면목동 646-3",
    "roadAddress": "서울특별시 중랑구 면목로27길 92",
    "lng": 127.0804976,
    "lat": 37.57426023
  },
  {
    "shopName": "하임",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 구의동 29-10",
    "roadAddress": "서울특별시 광진구 천호대로129길 40",
    "lng": 127.0916429,
    "lat": 37.553298
  },
  {
    "shopName": "레드테이프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동 624-20",
    "roadAddress": "서울특별시 영등포구 도영로22길 38",
    "lng": 126.903406,
    "lat": 37.51019783
  },
  {
    "shopName": "에쓰포인카프",
    "branchName": "서초점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 서초동 1303-10",
    "roadAddress": "서울특별시 서초구 사평대로56길 7",
    "lng": 127.0235525,
    "lat": 37.50321477
  },
  {
    "shopName": "어블리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 467-1",
    "roadAddress": "서울특별시 광진구 천호대로 516",
    "lng": 127.0756682,
    "lat": 37.55831901
  },
  {
    "shopName": "커피두",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 아현동 604-2",
    "roadAddress": "서울특별시 마포구 마포대로 214",
    "lng": 126.9571731,
    "lat": 37.55285368
  },
  {
    "shopName": "메가커피신",
    "branchName": "상도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 209-18",
    "roadAddress": "서울특별시 동작구 양녕로 193",
    "lng": 126.9436002,
    "lat": 37.49852616
  },
  {
    "shopName": "커피드니로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 공덕동 7-27",
    "roadAddress": "서울특별시 마포구 효창원로 251",
    "lng": 126.9634538,
    "lat": 37.54962018
  },
  {
    "shopName": "오락실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 금천구 가산동 148-40",
    "roadAddress": "서울특별시 금천구 시흥대로151길 33",
    "lng": 126.8965137,
    "lat": 37.47587586
  },
  {
    "shopName": "욘보스페이스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 숭인동 181-21",
    "roadAddress": "서울특별시 종로구 종로65길 41-2",
    "lng": 127.0196315,
    "lat": 37.57640149
  },
  {
    "shopName": "대만버블티차눙x숲속호두",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 화곡동 1117-13",
    "roadAddress": "서울특별시 강서구 화곡로 316",
    "lng": 126.8502015,
    "lat": 37.55205864
  },
  {
    "shopName": "과일에반하다프루타",
    "branchName": "양재역점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 도곡동 950-2",
    "roadAddress": "서울특별시 강남구 남부순환로359길 39",
    "lng": 127.0352158,
    "lat": 37.48719072
  },
  {
    "shopName": "카페로쏘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 876-41",
    "roadAddress": "서울특별시 서초구 방배로26길 22",
    "lng": 126.994073,
    "lat": 37.48929844
  },
  {
    "shopName": "하나길",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 426-15",
    "roadAddress": "서울특별시 마포구 포은로 129",
    "lng": 126.9037084,
    "lat": 37.55832522
  },
  {
    "shopName": "희희카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 73-5",
    "roadAddress": "서울특별시 송파구 성내천로 48",
    "lng": 127.1362395,
    "lat": 37.50381318
  },
  {
    "shopName": "중하아카데미",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 중화동 307-5",
    "roadAddress": "서울특별시 중랑구 동일로 831",
    "lng": 127.0786408,
    "lat": 37.60459295
  },
  {
    "shopName": "킹스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 반포동 733-7",
    "roadAddress": "서울특별시 서초구 사평대로53길 41",
    "lng": 127.0210495,
    "lat": 37.50607743
  },
  {
    "shopName": "마온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 440-10",
    "roadAddress": "서울특별시 노원구 공릉로 221",
    "lng": 127.076902,
    "lat": 37.62889845
  },
  {
    "shopName": "동북아휴게실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 구로구 가리봉동 13-30",
    "roadAddress": "서울특별시 구로구 구로동로7길 43",
    "lng": 126.8841012,
    "lat": 37.48643669
  },
  {
    "shopName": "레퓨지",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 공덕동 404",
    "roadAddress": "서울특별시 마포구 마포대로 127",
    "lng": 126.9521283,
    "lat": 37.54618636
  },
  {
    "shopName": "마루비건랩",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 192-15",
    "roadAddress": "서울특별시 종로구 인사동길 35-4",
    "lng": 126.9848465,
    "lat": 37.57354852
  },
  {
    "shopName": "메가엠지씨커피양천양",
    "branchName": "서중점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신월동 199-1",
    "roadAddress": "서울특별시 양천구 남부순환로 398",
    "lng": 126.8307249,
    "lat": 37.53174728
  },
  {
    "shopName": "카페랑",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 수색동 110-1",
    "roadAddress": "서울특별시 은평구 은평터널로 5",
    "lng": 126.8957995,
    "lat": 37.58268757
  },
  {
    "shopName": "멜티드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 연남동 241-90",
    "roadAddress": "서울특별시 마포구 성미산로29안길 27-7",
    "lng": 126.923229,
    "lat": 37.56564108
  },
  {
    "shopName": "오페라빈에스프레소바",
    "branchName": "필동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 필동3가 41-2",
    "roadAddress": "서울특별시 중구 필동로 27-1",
    "lng": 126.9962942,
    "lat": 37.55902248
  },
  {
    "shopName": "베러댄커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 신사동 502-11",
    "roadAddress": "서울특별시 강남구 강남대로 620",
    "lng": 127.0196833,
    "lat": 37.51714004
  },
  {
    "shopName": "카페",
    "branchName": "래비니",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 687-11",
    "roadAddress": "서울특별시 강남구 언주로108길 24",
    "lng": 127.0411283,
    "lat": 37.5085218
  },
  {
    "shopName": "마실",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 191-98",
    "roadAddress": "서울특별시 광진구 긴고랑로7길 79",
    "lng": 127.0807934,
    "lat": 37.56677483
  },
  {
    "shopName": "크로앙쥬",
    "branchName": "송파점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 194",
    "roadAddress": "서울특별시 송파구 송파대로38길 6",
    "lng": 127.1123551,
    "lat": 37.50070768
  },
  {
    "shopName": "원",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 영등포동 620-133",
    "roadAddress": "서울특별시 영등포구 영신로9길 4",
    "lng": 126.9084537,
    "lat": 37.5131009
  },
  {
    "shopName": "파란만잔",
    "branchName": "교대역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1670-9",
    "roadAddress": "서울특별시 서초구 서초중앙로22길 45",
    "lng": 127.0164412,
    "lat": 37.49352351
  },
  {
    "shopName": "노인활동실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 구로구 가리봉동 124-4",
    "roadAddress": "서울특별시 구로구 우마길 10",
    "lng": 126.8876841,
    "lat": 37.48196524
  },
  {
    "shopName": "오이일",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1027-26",
    "roadAddress": "서울특별시 영등포구 디지털로 367",
    "lng": 126.9007445,
    "lat": 37.49037712
  },
  {
    "shopName": "공차",
    "branchName": "영등포역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 영등포구 영등포동3가 9-51",
    "roadAddress": "서울특별시 영등포구 영중로 10",
    "lng": 126.9064131,
    "lat": 37.51728989
  },
  {
    "shopName": "디저트39",
    "branchName": "관악점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 봉천동 856-5",
    "roadAddress": "서울특별시 관악구 관악로 164",
    "lng": 126.9528777,
    "lat": 37.4796146
  },
  {
    "shopName": "룸즈에이_테이블그라운드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 819",
    "roadAddress": "서울특별시 강남구 강남대로94길 10",
    "lng": 127.0282079,
    "lat": 37.49918941
  },
  {
    "shopName": "멜트커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 195",
    "roadAddress": "서울특별시 송파구 백제고분로7길 6",
    "lng": 127.0794284,
    "lat": 37.51025017
  },
  {
    "shopName": "블라썸빈",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 1537-14",
    "roadAddress": "서울특별시 관악구 신림로17길 45",
    "lng": 126.9364462,
    "lat": 37.46867323
  },
  {
    "shopName": "더쌍화커피",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 사당동 89-21",
    "roadAddress": "서울특별시 동작구 동작대로29가길 26",
    "lng": 126.9816823,
    "lat": 37.48909317
  },
  {
    "shopName": "콘레드커피경희대점앤그리기요거트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 회기동 16-13",
    "roadAddress": "서울특별시 동대문구 경희대로4길 8",
    "lng": 127.0531316,
    "lat": 37.5924252
  },
  {
    "shopName": "공차",
    "branchName": "길동역점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강동구 길동 412-8",
    "roadAddress": "서울특별시 강동구 양재대로 1465",
    "lng": 127.1392986,
    "lat": 37.5368323
  },
  {
    "shopName": "팔일공",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 풍납동 410-2",
    "roadAddress": "서울특별시 송파구 풍성로26길 51",
    "lng": 127.1165145,
    "lat": 37.5297169
  },
  {
    "shopName": "에프피에프피문정동",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 642",
    "roadAddress": "서울특별시 송파구 송파대로 201",
    "lng": 127.1206383,
    "lat": 37.48779434
  },
  {
    "shopName": "호텔드앤유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 84-15",
    "roadAddress": "서울특별시 강남구 도산대로55길 39",
    "lng": 127.0408344,
    "lat": 37.52618906
  },
  {
    "shopName": "봉마장관",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1051-23",
    "roadAddress": "서울특별시 영등포구 도림로33길 8",
    "lng": 126.8962252,
    "lat": 37.49318229
  },
  {
    "shopName": "온다파도",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 419-32",
    "roadAddress": "서울특별시 은평구 갈현로 328-6",
    "lng": 126.918526,
    "lat": 37.62548073
  },
  {
    "shopName": "시에로시네마CieloCinema",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 530-82",
    "roadAddress": "서울특별시 동대문구 서울시립대로 80-1",
    "lng": 127.0493519,
    "lat": 37.57798713
  },
  {
    "shopName": "마니달오",
    "branchName": "봉천점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 봉천동 492-12",
    "roadAddress": "서울특별시 관악구 양녕로 66",
    "lng": 126.946655,
    "lat": 37.4879661
  },
  {
    "shopName": "제이엔케이13",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 189-4",
    "roadAddress": "서울특별시 송파구 백제고분로7길 28-17",
    "lng": 127.0823278,
    "lat": 37.50994835
  },
  {
    "shopName": "더홀릭보드게임카페",
    "branchName": "수유역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 224-15",
    "roadAddress": "서울특별시 강북구 노해로8길 29",
    "lng": 127.0242094,
    "lat": 37.63850296
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "선유도점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동4가 101-3",
    "roadAddress": "서울특별시 영등포구 양평로21길 1",
    "lng": 126.893898,
    "lat": 37.5374738
  },
  {
    "shopName": "레쏘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 184-47",
    "roadAddress": "서울특별시 중랑구 중랑천로10길 84",
    "lng": 127.0775998,
    "lat": 37.59259193
  },
  {
    "shopName": "컾강서점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 839-12",
    "roadAddress": "서울특별시 강서구 곰달래로 231",
    "lng": 126.8587023,
    "lat": 37.53191286
  },
  {
    "shopName": "리스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 방학동 632-48",
    "roadAddress": "서울특별시 도봉구 도당로13길 37",
    "lng": 127.0344454,
    "lat": 37.66615877
  },
  {
    "shopName": "사당1038",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 1038-42",
    "roadAddress": "서울특별시 동작구 동작대로3길 45",
    "lng": 126.9789161,
    "lat": 37.47880629
  },
  {
    "shopName": "나흐바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 누하동 45-2",
    "roadAddress": "서울특별시 종로구 필운대로 42",
    "lng": 126.9687988,
    "lat": 37.57975274
  },
  {
    "shopName": "더니브라운",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동대문구 전농동 103-316",
    "roadAddress": "서울특별시 동대문구 전농로36길 2",
    "lng": 127.0525995,
    "lat": 37.58526665
  },
  {
    "shopName": "구름",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 도봉구 방학동 703-61",
    "roadAddress": "서울특별시 도봉구 도봉로 681",
    "lng": 127.0425155,
    "lat": 37.6652965
  },
  {
    "shopName": "BB",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 삼전동 133-17",
    "roadAddress": "서울특별시 송파구 삼학사로 61",
    "lng": 127.096745,
    "lat": 37.50280596
  },
  {
    "shopName": "해담이엔티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 서교동 334-3",
    "roadAddress": "서울특별시 마포구 와우산로29길 39",
    "lng": 126.9277337,
    "lat": 37.55540124
  },
  {
    "shopName": "띵스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 번동 464-1",
    "roadAddress": "서울특별시 강북구 도봉로 388",
    "lng": 127.029611,
    "lat": 37.64134973
  },
  {
    "shopName": "메가후르츠",
    "branchName": "압구정로데오점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 신사동 661-15",
    "roadAddress": "서울특별시 강남구 선릉로161길 22",
    "lng": 127.0386335,
    "lat": 37.52754077
  },
  {
    "shopName": "프루코&드루와",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 사당동 1040-4",
    "roadAddress": "서울특별시 동작구 동작대로7길 65",
    "lng": 126.9791312,
    "lat": 37.47796116
  },
  {
    "shopName": "딥키",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 가회동 87",
    "roadAddress": "서울특별시 종로구 북촌로9길 16-1",
    "lng": 126.9841418,
    "lat": 37.58125536
  },
  {
    "shopName": "로플봉봉",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1635-63",
    "roadAddress": "서울특별시 관악구 신원로 8-1",
    "lng": 126.9280416,
    "lat": 37.48012173
  },
  {
    "shopName": "제이제이스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동작구 대방동 404-4",
    "roadAddress": "서울특별시 동작구 여의대방로24길 101",
    "lng": 126.9255993,
    "lat": 37.49907563
  },
  {
    "shopName": "요거해",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 화곡동 342-35",
    "roadAddress": "서울특별시 강서구 강서로12길 8-8",
    "lng": 126.8474414,
    "lat": 37.53138901
  },
  {
    "shopName": "101빌리지",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 은평구 응암동 101-78",
    "roadAddress": "서울특별시 은평구 응암로34길 17",
    "lng": 126.9229692,
    "lat": 37.59782369
  },
  {
    "shopName": "과일의시작카페야미",
    "branchName": "강동점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강동구 천호동 447-17",
    "roadAddress": "서울특별시 강동구 천호대로 1089",
    "lng": 127.1330784,
    "lat": 37.53656154
  },
  {
    "shopName": "카페",
    "branchName": "명보드게임",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 면목동 595-51",
    "roadAddress": "서울특별시 중랑구 사가정로51길 39",
    "lng": 127.0877205,
    "lat": 37.58259689
  },
  {
    "shopName": "하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 장충동2가 197",
    "roadAddress": "서울특별시 중구 동호로 257-8",
    "lng": 127.0037941,
    "lat": 37.55849132
  },
  {
    "shopName": "루바토",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 49-13",
    "roadAddress": "서울특별시 관악구 중앙길 41",
    "lng": 126.952393,
    "lat": 37.48436786
  },
  {
    "shopName": "메가엠지씨커피마곡공진초점",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 마곡동 798-12",
    "roadAddress": "서울특별시 강서구 마곡중앙1로 26",
    "lng": 126.8238423,
    "lat": 37.5586198
  },
  {
    "shopName": "요거트아이스크림의정석",
    "branchName": "중앙대점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동작구 본동 393-1",
    "roadAddress": "서울특별시 동작구 노량진로 227",
    "lng": 126.9513274,
    "lat": 37.51286761
  },
  {
    "shopName": "99과일카페",
    "branchName": "개봉점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 구로구 개봉동 497",
    "roadAddress": "서울특별시 구로구 경인로 302",
    "lng": 126.8557608,
    "lat": 37.49559952
  },
  {
    "shopName": "스튜디오Z",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 화양동 8-19",
    "roadAddress": "서울특별시 광진구 아차산로33길 33",
    "lng": 127.0703844,
    "lat": 37.54176128
  },
  {
    "shopName": "파스쿠찌",
    "branchName": "이화사거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 연건동 195-10",
    "roadAddress": "서울특별시 종로구 대학로 47",
    "lng": 127.0018251,
    "lat": 37.57542331
  },
  {
    "shopName": "세이지그릭",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강북구 미아동 61-69",
    "roadAddress": "서울특별시 강북구 도봉로13가길 5",
    "lng": 127.0291878,
    "lat": 37.61465756
  },
  {
    "shopName": "스노우하우스",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 송파구 거여동 565-11",
    "roadAddress": "서울특별시 송파구 양산로 40-5",
    "lng": 127.1446025,
    "lat": 37.49249361
  },
  {
    "shopName": "이슬재/YISEULJAE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 13-15",
    "roadAddress": "서울특별시 송파구 백제고분로41길 19-24",
    "lng": 127.1063977,
    "lat": 37.50711435
  },
  {
    "shopName": "황금십원빵",
    "branchName": "한성대입구역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 성북동1가 35-2",
    "roadAddress": "서울특별시 성북구 성북로 5-9",
    "lng": 127.0052497,
    "lat": 37.58861642
  },
  {
    "shopName": "과일에반하다프루타",
    "branchName": "낙성대점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 1680-29",
    "roadAddress": "서울특별시 관악구 남부순환로 1901",
    "lng": 126.9607859,
    "lat": 37.47844097
  },
  {
    "shopName": "영광보드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 구의동 246-47",
    "roadAddress": "서울특별시 광진구 아차산로51길 8",
    "lng": 127.0854423,
    "lat": 37.53742766
  },
  {
    "shopName": "카페보너",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 둔촌동 108-5",
    "roadAddress": "서울특별시 강동구 풍성로 311-8",
    "lng": 127.1462277,
    "lat": 37.52653845
  },
  {
    "shopName": "디오브닝",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 홍제동 270-1",
    "roadAddress": "서울특별시 서대문구 세무서8길 30",
    "lng": 126.9469314,
    "lat": 37.59058837
  },
  {
    "shopName": "빵긋",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 신길동 4934",
    "roadAddress": "서울특별시 영등포구 가마산로79길 7",
    "lng": 126.9145868,
    "lat": 37.5051291
  },
  {
    "shopName": "에스씨피스쿱",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서초구 서초동 1512-5",
    "roadAddress": "서울특별시 서초구 명달로20길 61",
    "lng": 127.0075769,
    "lat": 37.48656531
  },
  {
    "shopName": "바빈스",
    "branchName": "커피중계브라운스톤점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 중계동 506",
    "roadAddress": "서울특별시 노원구 동일로203가길 29",
    "lng": 127.0642452,
    "lat": 37.63991755
  },
  {
    "shopName": "텐퍼센트커피",
    "branchName": "방배점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 방배동 981-16",
    "roadAddress": "서울특별시 서초구 효령로 120",
    "lng": 126.9974283,
    "lat": 37.48107329
  },
  {
    "shopName": "과일에반하다.프루타",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 중곡동 621-1",
    "roadAddress": "서울특별시 광진구 면목로 77",
    "lng": 127.0782309,
    "lat": 37.56069079
  },
  {
    "shopName": "동작",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동작구 흑석동 194-3",
    "roadAddress": "서울특별시 동작구 흑석로9길 23",
    "lng": 126.9588874,
    "lat": 37.5076994
  },
  {
    "shopName": "구월이네",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 704-5",
    "roadAddress": "서울특별시 강남구 테헤란로43길 26",
    "lng": 127.0441274,
    "lat": 37.50484277
  },
  {
    "shopName": "마이크로",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 화양동 9-6",
    "roadAddress": "서울특별시 광진구 아차산로31길 29",
    "lng": 127.0696755,
    "lat": 37.54235039
  },
  {
    "shopName": "카페",
    "branchName": "둘리보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 가락동 75-7",
    "roadAddress": "서울특별시 송파구 양재대로62길 35",
    "lng": 127.1199764,
    "lat": 37.49698024
  },
  {
    "shopName": "라파파라",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 석관동 127-76",
    "roadAddress": "서울특별시 성북구 한천로78길 49",
    "lng": 127.0645526,
    "lat": 37.61268159
  },
  {
    "shopName": "구월오일",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 48-40",
    "roadAddress": "서울특별시 광진구 동일로56길 60",
    "lng": 127.0750392,
    "lat": 37.55517844
  },
  {
    "shopName": "신림카페강우",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 691-33",
    "roadAddress": "서울특별시 관악구 당곡2길 22",
    "lng": 126.9301836,
    "lat": 37.49086364
  },
  {
    "shopName": "로씨카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 91-14",
    "roadAddress": "서울특별시 송파구 송이로14길 13",
    "lng": 127.1181019,
    "lat": 37.49866026
  },
  {
    "shopName": "라스베가스휴게실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 713",
    "roadAddress": "서울특별시 영등포구 도림로39길 11-8",
    "lng": 126.8971575,
    "lat": 37.49438038
  },
  {
    "shopName": "언더지",
    "branchName": "망원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 413-38",
    "roadAddress": "서울특별시 마포구 포은로 72",
    "lng": 126.9059946,
    "lat": 37.55368806
  },
  {
    "shopName": "카프요거트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 대현동 34-44",
    "roadAddress": "서울특별시 서대문구 이화여대길 88-19",
    "lng": 126.9439285,
    "lat": 37.55948475
  },
  {
    "shopName": "커피콤마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1158",
    "roadAddress": "서울특별시 금천구 문성로 48",
    "lng": 126.9091192,
    "lat": 37.47668673
  },
  {
    "shopName": "더벤티",
    "branchName": "마천역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 마천동 301-9",
    "roadAddress": "서울특별시 송파구 마천로57길 22",
    "lng": 127.1533913,
    "lat": 37.49531418
  },
  {
    "shopName": "위너",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강북구 수유동 229-33",
    "roadAddress": "서울특별시 강북구 도봉로87길 9",
    "lng": 127.0249381,
    "lat": 37.63822966
  },
  {
    "shopName": "커피온리",
    "branchName": "녹두거리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1516-4",
    "roadAddress": "서울특별시 관악구 대학길 6",
    "lng": 126.9377459,
    "lat": 37.4702978
  },
  {
    "shopName": "까까당",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강북구 미아동 164-57",
    "roadAddress": "서울특별시 강북구 도봉로76길 34",
    "lng": 127.0255607,
    "lat": 37.63307188
  },
  {
    "shopName": "펀구공카페",
    "branchName": "방이점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 오금동 42",
    "roadAddress": "서울특별시 송파구 마천로 70",
    "lng": 127.1280522,
    "lat": 37.50759155
  },
  {
    "shopName": "엘에스와이신림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1580-1",
    "roadAddress": "서울특별시 관악구 남부순환로172길 45",
    "lng": 126.9233695,
    "lat": 37.48265625
  },
  {
    "shopName": "다이브포인트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 288-65",
    "roadAddress": "서울특별시 동대문구 이문로 108",
    "lng": 127.0602749,
    "lat": 37.59617657
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "송파방이역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 방이동 201-4",
    "roadAddress": "서울특별시 송파구 위례성대로18길 28-20",
    "lng": 127.1239945,
    "lat": 37.51024669
  },
  {
    "shopName": "투더문",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 석촌동 275-16",
    "roadAddress": "서울특별시 송파구 가락로16길 2-23",
    "lng": 127.1073013,
    "lat": 37.50057048
  },
  {
    "shopName": "커피집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 사당동 91-5",
    "roadAddress": "서울특별시 동작구 동작대로29나길 28",
    "lng": 126.9807645,
    "lat": 37.48922942
  },
  {
    "shopName": "공간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도동 29-120",
    "roadAddress": "서울특별시 동작구 상도로30길 63-4",
    "lng": 126.9444868,
    "lat": 37.50463418
  },
  {
    "shopName": "풀꽃",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강동구 암사동 441-10",
    "roadAddress": "서울특별시 강동구 고덕로 47",
    "lng": 127.1303975,
    "lat": 37.55500444
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "온수북부점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 온수동 116-5",
    "roadAddress": "서울특별시 구로구 부일로1길 26-1",
    "lng": 126.8205301,
    "lat": 37.49226156
  },
  {
    "shopName": "포트캔커피",
    "branchName": "가락점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 가락동 49",
    "roadAddress": "서울특별시 송파구 송이로 91",
    "lng": 127.1209363,
    "lat": 37.49805965
  },
  {
    "shopName": "테이블게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1050-29",
    "roadAddress": "서울특별시 영등포구 도림로 130",
    "lng": 126.8968661,
    "lat": 37.49266567
  },
  {
    "shopName": "리앤장도민까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 여의도동 41-2",
    "roadAddress": "서울특별시 영등포구 여의대방로 417",
    "lng": 126.9343004,
    "lat": 37.52104988
  },
  {
    "shopName": "콤프",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 역삼동 817-19",
    "roadAddress": "서울특별시 강남구 테헤란로1길 28-8",
    "lng": 127.0281146,
    "lat": 37.50027892
  },
  {
    "shopName": "모두의게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 길동 431",
    "roadAddress": "서울특별시 강동구 양재대로 1442",
    "lng": 127.1391207,
    "lat": 37.53458737
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "신촌로터리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서대문구 창천동 72-6",
    "roadAddress": "서울특별시 서대문구 신촌로 75",
    "lng": 126.9349222,
    "lat": 37.55607901
  },
  {
    "shopName": "스윙",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 방이동 34-2",
    "roadAddress": "서울특별시 송파구 오금로11길 11-8",
    "lng": 127.1087361,
    "lat": 37.51497123
  },
  {
    "shopName": "오뜨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 삼선동2가 389",
    "roadAddress": "서울특별시 성북구 삼선교로16길 116",
    "lng": 127.0103711,
    "lat": 37.5832262
  },
  {
    "shopName": "크레페S",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 중구 명동2가 55-17",
    "roadAddress": "서울특별시 중구 명동4길 28",
    "lng": 126.9837633,
    "lat": 37.56245639
  },
  {
    "shopName": "쌈지안",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 관훈동 44",
    "roadAddress": "서울특별시 종로구 인사동12길 12-4",
    "lng": 126.9851985,
    "lat": 37.57430842
  },
  {
    "shopName": "공차홈플러스",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 가양동 18-24",
    "roadAddress": "서울특별시 강서구 양천로 431",
    "lng": 126.8499461,
    "lat": 37.56425613
  },
  {
    "shopName": "대성",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 123-6",
    "roadAddress": "서울특별시 강남구 학동로6길 9",
    "lng": 127.0240372,
    "lat": 37.51115706
  },
  {
    "shopName": "정담수제차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강동구 성내동 36-5",
    "roadAddress": "서울특별시 강동구 천호옛12길 21",
    "lng": 127.1256528,
    "lat": 37.53486687
  },
  {
    "shopName": "노력스터디카페",
    "branchName": "까치산역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 343-6",
    "roadAddress": "서울특별시 강서구 강서로 47-8",
    "lng": 126.8458593,
    "lat": 37.53200429
  },
  {
    "shopName": "푸쉬오프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 414-25",
    "roadAddress": "서울특별시 마포구 포은로8길 28-6",
    "lng": 126.9063747,
    "lat": 37.55633162
  },
  {
    "shopName": "롤린보드게임",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 성동구 행당동 192-29",
    "roadAddress": "서울특별시 성동구 고산자로 284",
    "lng": 127.0367839,
    "lat": 37.56490119
  },
  {
    "shopName": "그라츠커피랩",
    "branchName": "문정점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 642-3",
    "roadAddress": "서울특별시 송파구 법원로 128",
    "lng": 127.1204685,
    "lat": 37.48683795
  },
  {
    "shopName": "우정인력",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 신길동 442-105",
    "roadAddress": "서울특별시 영등포구 대방천로 150",
    "lng": 126.9073437,
    "lat": 37.49923256
  },
  {
    "shopName": "러프스케치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 역촌동 33-2",
    "roadAddress": "서울특별시 은평구 진흥로1나길 2",
    "lng": 126.9183371,
    "lat": 37.60333168
  },
  {
    "shopName": "봉봉",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 성동구 성수동2가 331-200",
    "roadAddress": "서울특별시 성동구 뚝섬로 404",
    "lng": 127.0553858,
    "lat": 37.53856967
  },
  {
    "shopName": "어프리시티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 전농동 124-32",
    "roadAddress": "서울특별시 동대문구 서울시립대로28가길 1",
    "lng": 127.0531027,
    "lat": 37.58218912
  },
  {
    "shopName": "하이드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 금천구 시흥동 891-1",
    "roadAddress": "서울특별시 금천구 시흥대로52길 18",
    "lng": 126.9025915,
    "lat": 37.45222582
  },
  {
    "shopName": "노르웨이안우드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 192-33",
    "roadAddress": "서울특별시 강북구 도봉로87길 32-6",
    "lng": 127.0243249,
    "lat": 37.63919771
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "가산대륭18차점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 670-2",
    "roadAddress": "서울특별시 금천구 가산디지털1로 19",
    "lng": 126.8864952,
    "lat": 37.46760035
  },
  {
    "shopName": "세븐",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 갈현동 483-1",
    "roadAddress": "서울특별시 은평구 연서로27길 17",
    "lng": 126.9174661,
    "lat": 37.6181096
  },
  {
    "shopName": "스윗바이브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 8-29",
    "roadAddress": "서울특별시 성동구 왕십리로4길 26-18",
    "lng": 127.0469186,
    "lat": 37.54682733
  },
  {
    "shopName": "고망고",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 양천구 목동 907-7",
    "roadAddress": "서울특별시 양천구 목동서로 61",
    "lng": 126.8794879,
    "lat": 37.53636482
  },
  {
    "shopName": "과일에반하다프루타",
    "branchName": "구로디지털점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 신림동 1644",
    "roadAddress": "서울특별시 관악구 조원로 25",
    "lng": 126.9038536,
    "lat": 37.48422482
  },
  {
    "shopName": "추탄상회",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 강일동 18-8",
    "roadAddress": "서울특별시 강동구 가래여울길 14",
    "lng": 127.1684171,
    "lat": 37.57717395
  },
  {
    "shopName": "심풀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 119-16",
    "roadAddress": "서울특별시 중랑구 면목로73길 31",
    "lng": 127.08561,
    "lat": 37.58852747
  },
  {
    "shopName": "카페",
    "branchName": "봄날브런치",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 장위동 189-3",
    "roadAddress": "서울특별시 성북구 돌곶이로40길 46",
    "lng": 127.0496012,
    "lat": 37.61981549
  },
  {
    "shopName": "팔공티.팔라쪼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신공덕동 173",
    "roadAddress": "서울특별시 마포구 백범로 212",
    "lng": 126.9533465,
    "lat": 37.54242179
  },
  {
    "shopName": "레드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 갈현동 398-12",
    "roadAddress": "서울특별시 은평구 연서로29길 4",
    "lng": 126.9198479,
    "lat": 37.61868106
  },
  {
    "shopName": "커피콩나무",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 마곡동 784-11",
    "roadAddress": "서울특별시 강서구 강서로 429",
    "lng": 126.8394916,
    "lat": 37.56397362
  },
  {
    "shopName": "빽다방",
    "branchName": "천호힐데스하임점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 천호동 437-5",
    "roadAddress": "서울특별시 강동구 올림픽로78길 30",
    "lng": 127.1259894,
    "lat": 37.54189759
  },
  {
    "shopName": "빙고",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 172-153",
    "roadAddress": "서울특별시 강북구 도봉로97길 33-1",
    "lng": 127.0275806,
    "lat": 37.64238722
  },
  {
    "shopName": "헤즈업",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 노원구 공릉동 492-4",
    "roadAddress": "서울특별시 노원구 동일로173가길 109",
    "lng": 127.0720122,
    "lat": 37.62307542
  },
  {
    "shopName": "더벤티",
    "branchName": "영등포구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동3가 395-31",
    "roadAddress": "서울특별시 영등포구 당산로31길 16-1",
    "lng": 126.8949026,
    "lat": 37.52690499
  },
  {
    "shopName": "에이스킴",
    "branchName": "중랑점",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 130-7",
    "roadAddress": "서울특별시 중랑구 망우로32길 24",
    "lng": 127.0764199,
    "lat": 37.59277192
  },
  {
    "shopName": "보드카페",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 192-10",
    "roadAddress": "서울특별시 송파구 올림픽로10길 16",
    "lng": 127.0810693,
    "lat": 37.51019086
  },
  {
    "shopName": "올에프앤비",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강서구 화곡동 987-3",
    "roadAddress": "서울특별시 강서구 화곡로 295",
    "lng": 126.8484663,
    "lat": 37.55082533
  },
  {
    "shopName": "빽다방",
    "branchName": "삼양시장점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 미아동 867-118",
    "roadAddress": "서울특별시 강북구 솔매로 52",
    "lng": 127.017953,
    "lat": 37.62487246
  },
  {
    "shopName": "이어라인",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 양천구 신월동 23-17",
    "roadAddress": "서울특별시 양천구 화곡로 103",
    "lng": 126.8333239,
    "lat": 37.53994537
  },
  {
    "shopName": "알짜",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 705-18",
    "roadAddress": "서울특별시 강남구 테헤란로 333",
    "lng": 127.0479975,
    "lat": 37.5046848
  },
  {
    "shopName": "이디야커피",
    "branchName": "흑석역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 흑석동 9-89",
    "roadAddress": "서울특별시 동작구 현충로 100-1",
    "lng": 126.9647246,
    "lat": 37.50763357
  },
  {
    "shopName": "치디커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 갈현동 461-12",
    "roadAddress": "서울특별시 은평구 연서로23길 8-6",
    "lng": 126.9175547,
    "lat": 37.61590289
  },
  {
    "shopName": "요거다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 상도1동 774-1",
    "roadAddress": "서울특별시 동작구 상도로 283-1",
    "lng": 126.9486343,
    "lat": 37.50245459
  },
  {
    "shopName": "어니스트밀크",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 40-1",
    "roadAddress": "서울특별시 송파구 올림픽로 240",
    "lng": 127.0981244,
    "lat": 37.51130447
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "서울대입구역1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 봉천동 874-1",
    "roadAddress": "서울특별시 관악구 봉천로 456",
    "lng": 126.9504686,
    "lat": 37.48209815
  },
  {
    "shopName": "원스카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동2가 336-1",
    "roadAddress": "서울특별시 성동구 뚝섬로 390",
    "lng": 127.0538989,
    "lat": 37.5389362
  },
  {
    "shopName": "씨엘로",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 청운동 90",
    "roadAddress": "서울특별시 종로구 자하문로30길 19-12",
    "lng": 126.9714012,
    "lat": 37.5856322
  },
  {
    "shopName": "메머드익스프레스동아프라임밸리점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동2가 37-1",
    "roadAddress": "서울특별시 영등포구 영등포로5길 19",
    "lng": 126.8842079,
    "lat": 37.52410131
  },
  {
    "shopName": "어스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 보광동 265-214",
    "roadAddress": "서울특별시 용산구 우사단로4길 22-22",
    "lng": 126.9979992,
    "lat": 37.53058193
  },
  {
    "shopName": "에이유에프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 합정동 394-5",
    "roadAddress": "서울특별시 마포구 포은로2가길 42",
    "lng": 126.9091816,
    "lat": 37.55011339
  },
  {
    "shopName": "제이제이",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 101-10",
    "roadAddress": "서울특별시 중랑구 망우로 304",
    "lng": 127.0863321,
    "lat": 37.59614689
  },
  {
    "shopName": "쿤스트40",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 계동 40",
    "roadAddress": "서울특별시 종로구 계동길 92-17",
    "lng": 126.9872966,
    "lat": 37.58155278
  },
  {
    "shopName": "투데이",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1433-63",
    "roadAddress": "서울특별시 관악구 남부순환로 1597-4",
    "lng": 126.9280145,
    "lat": 37.48439246
  },
  {
    "shopName": "추카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 청담동 118-15",
    "roadAddress": "서울특별시 강남구 압구정로 459",
    "lng": 127.0470094,
    "lat": 37.52547316
  },
  {
    "shopName": "마쵸커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 368-6",
    "roadAddress": "서울특별시 강서구 가로공원로84길 14",
    "lng": 126.8402735,
    "lat": 37.53689625
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "어린이대공원후문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 구의동 76-1",
    "roadAddress": "서울특별시 광진구 천호대로 666",
    "lng": 127.0893011,
    "lat": 37.55135171
  },
  {
    "shopName": "카페더함",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 신수동 91-15",
    "roadAddress": "서울특별시 마포구 광성로 20",
    "lng": 126.9352491,
    "lat": 37.54981072
  },
  {
    "shopName": "쉬즈베이글커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 상월곡동 62",
    "roadAddress": "서울특별시 성북구 장월로1길 60",
    "lng": 127.0448612,
    "lat": 37.60603637
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "송파석촌점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 24-7",
    "roadAddress": "서울특별시 송파구 백제고분로41길 18",
    "lng": 127.1077372,
    "lat": 37.5076561
  },
  {
    "shopName": "켜켜이커피",
    "branchName": "상명대점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 홍지동 20-1",
    "roadAddress": "서울특별시 종로구 홍지문2길 11",
    "lng": 126.9555457,
    "lat": 37.60131515
  },
  {
    "shopName": "국가참전상이유공자커피집",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 2-8",
    "roadAddress": "서울특별시 서초구 신반포로15길 29",
    "lng": 126.9946818,
    "lat": 37.5054595
  },
  {
    "shopName": "파운드커피노원",
    "branchName": "을지병원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 하계동 280-1",
    "roadAddress": "서울특별시 노원구 한글비석로 68",
    "lng": 127.0695673,
    "lat": 37.63655372
  },
  {
    "shopName": "그리드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 삼성동 51-3",
    "roadAddress": "서울특별시 강남구 삼성로111길 7",
    "lng": 127.0525604,
    "lat": 37.51325448
  },
  {
    "shopName": "모크커피,MOCC",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 727-15",
    "roadAddress": "서울특별시 관악구 미성길 7",
    "lng": 126.9164877,
    "lat": 37.47454696
  },
  {
    "shopName": "한방보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동작구 상도동 262-2",
    "roadAddress": "서울특별시 동작구 성대로12길 8",
    "lng": 126.9353174,
    "lat": 37.49724439
  },
  {
    "shopName": "이나푸드",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 구로구 구로동 791-60",
    "roadAddress": "서울특별시 구로구 디지털로27다길 29",
    "lng": 126.8894175,
    "lat": 37.4855497
  },
  {
    "shopName": "카일커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 신내동 577-1",
    "roadAddress": "서울특별시 중랑구 신내로10길 21",
    "lng": 127.0967722,
    "lat": 37.604643
  },
  {
    "shopName": "동동보드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 광진구 구의동 246-47",
    "roadAddress": "서울특별시 광진구 아차산로51길 8",
    "lng": 127.0854423,
    "lat": 37.53742766
  },
  {
    "shopName": "좋은날",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 자곡동 271-1",
    "roadAddress": "서울특별시 강남구 밤고개로14길 6",
    "lng": 127.1040632,
    "lat": 37.48193004
  },
  {
    "shopName": "카페로카",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 양평동3가 49-4",
    "roadAddress": "서울특별시 영등포구 선유로33길 2-2",
    "lng": 126.8907203,
    "lat": 37.52665854
  },
  {
    "shopName": "니트로하우스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 면목동 152-21",
    "roadAddress": "서울특별시 중랑구 겸재로18길 17",
    "lng": 127.0807842,
    "lat": 37.58594003
  },
  {
    "shopName": "와이블랙",
    "branchName": "개포점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 개포동 186-11",
    "roadAddress": "서울특별시 강남구 개포로82길 5-8",
    "lng": 127.0676369,
    "lat": 37.48884767
  },
  {
    "shopName": "시드니",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 도화동 179-14",
    "roadAddress": "서울특별시 마포구 도화길 33",
    "lng": 126.9494381,
    "lat": 37.54112562
  },
  {
    "shopName": "달리는커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1639-6",
    "roadAddress": "서울특별시 관악구 관천로 44",
    "lng": 126.9272578,
    "lat": 37.4835386
  },
  {
    "shopName": "플로이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 685-345",
    "roadAddress": "서울특별시 성동구 서울숲2길 12",
    "lng": 127.0399312,
    "lat": 37.54722125
  },
  {
    "shopName": "블루너리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성동구 성수동1가 72-41",
    "roadAddress": "서울특별시 성동구 성덕정3길 8",
    "lng": 127.047611,
    "lat": 37.53955243
  },
  {
    "shopName": "케이브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 442-170",
    "roadAddress": "서울특별시 구로구 구로중앙로24길 6",
    "lng": 126.8879711,
    "lat": 37.49692531
  },
  {
    "shopName": "홀덤프렌즈",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 명일동 312-60",
    "roadAddress": "서울특별시 강동구 양재대로145길 7",
    "lng": 127.1434838,
    "lat": 37.55179322
  },
  {
    "shopName": "오와케이크",
    "branchName": "문정역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 652-1",
    "roadAddress": "서울특별시 송파구 법원로4길 17",
    "lng": 127.1224792,
    "lat": 37.48314953
  },
  {
    "shopName": "카페",
    "branchName": "양재숲",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 양재동 3-4",
    "roadAddress": "서울특별시 서초구 바우뫼로43길 56",
    "lng": 127.0414766,
    "lat": 37.48393479
  },
  {
    "shopName": "마마쿡키친뿌당커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1416-28",
    "roadAddress": "서울특별시 관악구 봉천로 270",
    "lng": 126.9308619,
    "lat": 37.48770709
  },
  {
    "shopName": "보드게임한판",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중랑구 상봉동 74-6",
    "roadAddress": "서울특별시 중랑구 망우로 379",
    "lng": 127.0944645,
    "lat": 37.59881358
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "잠실리센츠점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 잠실동 22-6",
    "roadAddress": "서울특별시 송파구 올림픽로 145",
    "lng": 127.0870198,
    "lat": 37.51197604
  },
  {
    "shopName": "온늘베이커리",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 노원구 상계동 194-20",
    "roadAddress": "서울특별시 노원구 노원로26나길 6",
    "lng": 127.0708085,
    "lat": 37.65333179
  },
  {
    "shopName": "이디야커피",
    "branchName": "남부지방법원점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 1014-5",
    "roadAddress": "서울특별시 양천구 은행정로4길 25",
    "lng": 126.8625827,
    "lat": 37.52150726
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "화곡8동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 화곡동 159-41",
    "roadAddress": "서울특별시 강서구 곰달래로 157",
    "lng": 126.8505372,
    "lat": 37.53093263
  },
  {
    "shopName": "엉클두",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 도봉구 창동 263-33",
    "roadAddress": "서울특별시 도봉구 노해로63가길 37",
    "lng": 127.0450926,
    "lat": 37.65435183
  },
  {
    "shopName": "포비아워스현대",
    "branchName": "캐피탈점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로5가 831",
    "roadAddress": "서울특별시 중구 세종대로 14",
    "lng": 126.9743981,
    "lat": 37.55782514
  },
  {
    "shopName": "구석탱이",
    "branchName": "카페인",
    "category": "일반카페",
    "jibunAddress": "서울특별시 종로구 창신동 330-3",
    "roadAddress": "서울특별시 종로구 종로 330",
    "lng": 127.0145799,
    "lat": 37.57228671
  },
  {
    "shopName": "곤드레보드카페.영상필름",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 은평구 응암동 749-63",
    "roadAddress": "서울특별시 은평구 응암로12길 23",
    "lng": 126.9192693,
    "lat": 37.58742798
  },
  {
    "shopName": "더레드",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 913-5",
    "roadAddress": "서울특별시 강서구 강서로5나길 88",
    "lng": 126.8433104,
    "lat": 37.5285464
  },
  {
    "shopName": "시카고라운지",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 서초구 방배동 442-3",
    "roadAddress": "서울특별시 서초구 동작대로 36",
    "lng": 126.9821721,
    "lat": 37.47966335
  },
  {
    "shopName": "유캔두잇세종대학교점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 군자동 98",
    "roadAddress": "서울특별시 광진구 능동로 209",
    "lng": 127.0731707,
    "lat": 37.55160464
  },
  {
    "shopName": "묘해",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 문정동 618",
    "roadAddress": "서울특별시 송파구 송파대로 111",
    "lng": 127.1248723,
    "lat": 37.47961708
  },
  {
    "shopName": "보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동작구 신대방동 591-4",
    "roadAddress": "서울특별시 동작구 시흥대로 662",
    "lng": 126.9081816,
    "lat": 37.49061729
  },
  {
    "shopName": "태양시티보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 710-9",
    "roadAddress": "서울특별시 영등포구 대림로27길 3",
    "lng": 126.8993509,
    "lat": 37.49518474
  },
  {
    "shopName": "쿡,키",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 50-3",
    "roadAddress": "서울특별시 금천구 벚꽃로 298",
    "lng": 126.883859,
    "lat": 37.48143359
  },
  {
    "shopName": "포커페이스",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1640-28",
    "roadAddress": "서울특별시 관악구 남부순환로 1600-8",
    "lng": 126.9287267,
    "lat": 37.48360599
  },
  {
    "shopName": "심양쉼터",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 851-100",
    "roadAddress": "서울특별시 영등포구 대림로22길 10",
    "lng": 126.9021206,
    "lat": 37.49370577
  },
  {
    "shopName": "고망고",
    "branchName": "경희대점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 동대문구 회기동 16-51",
    "roadAddress": "서울특별시 동대문구 경희대로 8",
    "lng": 127.0526018,
    "lat": 37.59223173
  },
  {
    "shopName": "매머드익스프레스휘문고교점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 대치동 966-7",
    "roadAddress": "서울특별시 강남구 역삼로 538",
    "lng": 127.0618395,
    "lat": 37.50393053
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "불광역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 대조동 11-1",
    "roadAddress": "서울특별시 은평구 통일로 735-1",
    "lng": 126.9290413,
    "lat": 37.61109709
  },
  {
    "shopName": "토다코리아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 구산동 198-3",
    "roadAddress": "서울특별시 은평구 서오릉로 165",
    "lng": 126.9150148,
    "lat": 37.61218535
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "고척아이파크점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 고척동 102-1",
    "roadAddress": "서울특별시 구로구 중앙로5길 59",
    "lng": 126.8594297,
    "lat": 37.50048261
  },
  {
    "shopName": "인셀덤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강북구 수유동 726-2",
    "roadAddress": "서울특별시 강북구 노해로27길 66",
    "lng": 127.0209823,
    "lat": 37.64697297
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "잠실대교북단점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 자양동 679-31",
    "roadAddress": "서울특별시 광진구 자양로 49",
    "lng": 127.0851669,
    "lat": 37.53218139
  },
  {
    "shopName": "카페",
    "branchName": "플레이온보드게임",
    "category": "보드카페",
    "jibunAddress": "서울특별시 관악구 신림동 1639-8",
    "roadAddress": "서울특별시 관악구 남부순환로 1592",
    "lng": 126.9275723,
    "lat": 37.48368563
  },
  {
    "shopName": "카페",
    "branchName": "그린솔",
    "category": "사주카페",
    "jibunAddress": "서울특별시 관악구 봉천동 47-24",
    "roadAddress": "서울특별시 관악구 중앙길 14",
    "lng": 126.9535732,
    "lat": 37.48406295
  },
  {
    "shopName": "킹콩커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 영등포동6가 35-1",
    "roadAddress": "서울특별시 영등포구 영등포로35길 23",
    "lng": 126.9042372,
    "lat": 37.52219843
  },
  {
    "shopName": "카페고메",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 독산동 1100-6",
    "roadAddress": "서울특별시 금천구 금하로1마길 35-4",
    "lng": 126.8895015,
    "lat": 37.45388762
  },
  {
    "shopName": "더스위트리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강서구 내발산동 708-12",
    "roadAddress": "서울특별시 강서구 강서로47가길 38",
    "lng": 126.8354392,
    "lat": 37.55089579
  },
  {
    "shopName": "카페달다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 829-8",
    "roadAddress": "서울특별시 강남구 역삼로7길 8",
    "lng": 127.0332764,
    "lat": 37.49465363
  },
  {
    "shopName": "커피사피엔스가산",
    "branchName": "1호점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 345-33",
    "roadAddress": "서울특별시 금천구 가산디지털2로 67",
    "lng": 126.8810723,
    "lat": 37.47420787
  },
  {
    "shopName": "시카고",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 석촌동 4-6",
    "roadAddress": "서울특별시 송파구 백제고분로33길 29",
    "lng": 127.0985817,
    "lat": 37.50526185
  },
  {
    "shopName": "과일아빠",
    "branchName": "신촌점",
    "category": "사주카페",
    "jibunAddress": "서울특별시 서대문구 창천동 112-26",
    "roadAddress": "서울특별시 서대문구 신촌로9길 6",
    "lng": 126.9321673,
    "lat": 37.55719845
  },
  {
    "shopName": "마실",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 광장동 393-26",
    "roadAddress": "서울특별시 광진구 광장로1나길 14",
    "lng": 127.1020324,
    "lat": 37.54859288
  },
  {
    "shopName": "테이블비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 태평로1가 84",
    "roadAddress": "서울특별시 중구 세종대로 136",
    "lng": 126.9782375,
    "lat": 37.56840963
  },
  {
    "shopName": "가배차",
    "branchName": "성북점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 130-2",
    "roadAddress": "서울특별시 성북구 종암로27길 26",
    "lng": 127.0308828,
    "lat": 37.60274174
  },
  {
    "shopName": "크로플덕오리아가씨",
    "branchName": "답십리점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 64-36",
    "roadAddress": "서울특별시 동대문구 답십리로 175",
    "lng": 127.059717,
    "lat": 37.57300627
  },
  {
    "shopName": "륭구미",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 264-137",
    "roadAddress": "서울특별시 동대문구 천장산로4길 42",
    "lng": 127.0581211,
    "lat": 37.59904274
  },
  {
    "shopName": "위드요크커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 상계동 169-472",
    "roadAddress": "서울특별시 노원구 한글비석로37길 11",
    "lng": 127.069469,
    "lat": 37.66168283
  },
  {
    "shopName": "세컨드랠리살롱",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 금천구 가산동 146-84",
    "roadAddress": "서울특별시 금천구 남부순환로 1282",
    "lng": 126.8931278,
    "lat": 37.47854734
  },
  {
    "shopName": "보험대리점cafe",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 구로구 구로동 554-23",
    "roadAddress": "서울특별시 구로구 구로중앙로34길 77",
    "lng": 126.8869132,
    "lat": 37.50191614
  },
  {
    "shopName": "카페",
    "branchName": "킹보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 908-19",
    "roadAddress": "서울특별시 강서구 강서로5나길 15",
    "lng": 126.8473521,
    "lat": 37.52836967
  },
  {
    "shopName": "클래식로스터리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 송파동 112-3",
    "roadAddress": "서울특별시 송파구 백제고분로42길 17",
    "lng": 127.1104811,
    "lat": 37.50518987
  },
  {
    "shopName": "에이케이홀덤스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1120-1",
    "roadAddress": "서울특별시 강서구 화곡로58길 30",
    "lng": 126.8524326,
    "lat": 37.55269305
  },
  {
    "shopName": "카페",
    "branchName": "아지트보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 934-26",
    "roadAddress": "서울특별시 강서구 강서로5나길 141",
    "lng": 126.8401499,
    "lat": 37.52807389
  },
  {
    "shopName": "피노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 반포동 738-14",
    "roadAddress": "서울특별시 서초구 사평대로57길 39-1",
    "lng": 127.0226576,
    "lat": 37.50592856
  },
  {
    "shopName": "카페",
    "branchName": "트로피보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 139-32",
    "roadAddress": "서울특별시 강남구 강남대로128길 34",
    "lng": 127.0248606,
    "lat": 37.51047005
  },
  {
    "shopName": "세이프룻",
    "branchName": "강남점",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 강남구 역삼동 831-45",
    "roadAddress": "서울특별시 강남구 역삼로 109",
    "lng": 127.030982,
    "lat": 37.49367972
  },
  {
    "shopName": "챔프커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 서초구 서초동 1610-6",
    "roadAddress": "서울특별시 서초구 효령로67길 71-13",
    "lng": 127.0221903,
    "lat": 37.48972372
  },
  {
    "shopName": "카페조이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 성내동 112-35",
    "roadAddress": "서울특별시 강동구 올림픽로60길 14",
    "lng": 127.1230933,
    "lat": 37.53506414
  },
  {
    "shopName": "사브레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 장안동 460-3",
    "roadAddress": "서울특별시 동대문구 장한로6길 18",
    "lng": 127.0670832,
    "lat": 37.56330637
  },
  {
    "shopName": "홀덤스타",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 927-1",
    "roadAddress": "서울특별시 강서구 강서로5나길 104",
    "lng": 126.8423712,
    "lat": 37.52855522
  },
  {
    "shopName": "카페인투",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 64",
    "roadAddress": "서울특별시 동대문구 한천로58길 47",
    "lng": 127.0687564,
    "lat": 37.60074
  },
  {
    "shopName": "아쿠아보드게임장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 가락동 91-5",
    "roadAddress": "서울특별시 송파구 중대로9길 51",
    "lng": 127.1191114,
    "lat": 37.49745136
  },
  {
    "shopName": "디오티",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 망원동 398-31",
    "roadAddress": "서울특별시 마포구 희우정로16길 16",
    "lng": 126.9028613,
    "lat": 37.55434377
  },
  {
    "shopName": "로얄보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 693-5",
    "roadAddress": "서울특별시 영등포구 대림로 170",
    "lng": 126.8996084,
    "lat": 37.49613324
  },
  {
    "shopName": "카페",
    "branchName": "홈런보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 길동 78",
    "roadAddress": "서울특별시 강동구 양재대로124길 91",
    "lng": 127.1471473,
    "lat": 37.54216043
  },
  {
    "shopName": "벙커",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 636-21",
    "roadAddress": "서울특별시 강남구 강남대로94길 55-3",
    "lng": 127.031582,
    "lat": 37.50064078
  },
  {
    "shopName": "마니달오",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 광진구 군자동 360-20",
    "roadAddress": "서울특별시 광진구 광나루로 361",
    "lng": 127.0697245,
    "lat": 37.54842386
  },
  {
    "shopName": "공간제과",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 관악구 신림동 1641-26",
    "roadAddress": "서울특별시 관악구 신림로 306",
    "lng": 126.9301697,
    "lat": 37.48152863
  },
  {
    "shopName": "아이노우",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 안암동2가 139-20",
    "roadAddress": "서울특별시 성북구 고려대로7가길 6",
    "lng": 127.0214159,
    "lat": 37.58624667
  },
  {
    "shopName": "트리킹즈커피",
    "branchName": "공릉점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 노원구 공릉동 758",
    "roadAddress": "서울특별시 노원구 공릉로34길 86",
    "lng": 127.0815856,
    "lat": 37.62575433
  },
  {
    "shopName": "콘레드커피",
    "branchName": "노량진점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 117-12",
    "roadAddress": "서울특별시 동작구 만양로 112",
    "lng": 126.9444096,
    "lat": 37.5133286
  },
  {
    "shopName": "크크",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 길동 456-2",
    "roadAddress": "서울특별시 강동구 진황도로 100",
    "lng": 127.1373691,
    "lat": 37.53538554
  },
  {
    "shopName": "커스텀커피",
    "branchName": "상암점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1597",
    "roadAddress": "서울특별시 마포구 월드컵북로54길 17",
    "lng": 126.8885286,
    "lat": 37.58131283
  },
  {
    "shopName": "만남의광장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 833-19",
    "roadAddress": "서울특별시 영등포구 디지털로57길 18",
    "lng": 126.9006852,
    "lat": 37.49210658
  },
  {
    "shopName": "복화당",
    "branchName": "동대문이문점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 이문동 251-5",
    "roadAddress": "서울특별시 동대문구 이문로 203",
    "lng": 127.0618549,
    "lat": 37.60472201
  },
  {
    "shopName": "카페",
    "branchName": "비스킷",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 251-63",
    "roadAddress": "서울특별시 용산구 회나무로13가길 22",
    "lng": 126.9907677,
    "lat": 37.54078328
  },
  {
    "shopName": "매머드익스프레스",
    "branchName": "용산구청점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 이태원동 44-18",
    "roadAddress": "서울특별시 용산구 녹사평대로32길 51",
    "lng": 126.990856,
    "lat": 37.53255747
  },
  {
    "shopName": "다원",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 서대문구 홍은동 457",
    "roadAddress": "서울특별시 서대문구 홍은중앙로 81",
    "lng": 126.9466957,
    "lat": 37.59847933
  },
  {
    "shopName": "만랩커피",
    "branchName": "을지로입구역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 다동 166",
    "roadAddress": "서울특별시 중구 다동길 24",
    "lng": 126.9805797,
    "lat": 37.56765498
  },
  {
    "shopName": "하이",
    "branchName": "하와이",
    "category": "보드카페",
    "jibunAddress": "서울특별시 송파구 잠실동 190-8",
    "roadAddress": "서울특별시 송파구 백제고분로7길 28-14",
    "lng": 127.0820434,
    "lat": 37.5100813
  },
  {
    "shopName": "스타홀덤",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 종로구 명륜4가 176-2",
    "roadAddress": "서울특별시 종로구 대명길 41",
    "lng": 126.9993268,
    "lat": 37.58276366
  },
  {
    "shopName": "서촌쌍화",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "서울특별시 종로구 필운동 166-1",
    "roadAddress": "서울특별시 종로구 자하문로1길 50-19",
    "lng": 126.9694996,
    "lat": 37.57737111
  },
  {
    "shopName": "별책다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 광진구 화양동 17-12",
    "roadAddress": "서울특별시 광진구 광나루로16길 5",
    "lng": 127.0694898,
    "lat": 37.54727767
  },
  {
    "shopName": "구구오락실",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 구로구 구로동 749-54",
    "roadAddress": "서울특별시 구로구 구로동로18길 55",
    "lng": 126.8875475,
    "lat": 37.48736123
  },
  {
    "shopName": "보드카페홀덤",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강동구 길동 448-1",
    "roadAddress": "서울특별시 강동구 진황도로 94",
    "lng": 127.136593,
    "lat": 37.53596556
  },
  {
    "shopName": "멜리플루어스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 영등포구 당산동4가 1-146",
    "roadAddress": "서울특별시 영등포구 국회대로37길 4",
    "lng": 126.8996572,
    "lat": 37.527481
  },
  {
    "shopName": "덴스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 송파구 풍납동 500-2",
    "roadAddress": "서울특별시 송파구 풍성로 69",
    "lng": 127.1201467,
    "lat": 37.53353746
  },
  {
    "shopName": "유티지홀덤펍",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 마포구 동교동 158-1",
    "roadAddress": "서울특별시 마포구 월드컵북로2길 57",
    "lng": 126.9233463,
    "lat": 37.55748776
  },
  {
    "shopName": "산투아리오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1601",
    "roadAddress": "서울특별시 마포구 월드컵북로 402",
    "lng": 126.8890206,
    "lat": 37.58020018
  },
  {
    "shopName": "러쉬",
    "branchName": "로열플",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 청담동 88-10",
    "roadAddress": "서울특별시 강남구 선릉로152길 15",
    "lng": 127.040688,
    "lat": 37.52436775
  },
  {
    "shopName": "혹시",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강남구 논현동 163-12",
    "roadAddress": "서울특별시 강남구 학동로2길 55",
    "lng": 127.0238621,
    "lat": 37.50810104
  },
  {
    "shopName": "킷사텐",
    "branchName": "역삼점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 역삼동 723-31",
    "roadAddress": "서울특별시 강남구 언주로85길 23-10",
    "lng": 127.0414729,
    "lat": 37.50015379
  },
  {
    "shopName": "비타카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "서울특별시 강남구 역삼동 615-19",
    "roadAddress": "서울특별시 강남구 강남대로110길 29",
    "lng": 127.0271405,
    "lat": 37.50387512
  },
  {
    "shopName": "세븐",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1077-5",
    "roadAddress": "서울특별시 영등포구 디지털로 363",
    "lng": 126.9003426,
    "lat": 37.49002197
  },
  {
    "shopName": "스타홀덤",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 강서구 화곡동 1112-6",
    "roadAddress": "서울특별시 강서구 공항대로46길 47",
    "lng": 126.8521536,
    "lat": 37.55390673
  },
  {
    "shopName": "커피사이드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 도곡동 174-5",
    "roadAddress": "서울특별시 강남구 남부순환로 2749",
    "lng": 127.0467712,
    "lat": 37.48726649
  },
  {
    "shopName": "드르와디저트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 은평구 진관동 25",
    "roadAddress": "서울특별시 은평구 진관3로 77",
    "lng": 126.9208312,
    "lat": 37.6446847
  },
  {
    "shopName": "하이",
    "branchName": "더기즈",
    "category": "일반카페",
    "jibunAddress": "서울특별시 관악구 신림동 1464-13",
    "roadAddress": "서울특별시 관악구 관천로 59",
    "lng": 126.9251002,
    "lat": 37.48418577
  },
  {
    "shopName": "금커피별빙수",
    "branchName": "사가정역점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중랑구 면목동 496-15",
    "roadAddress": "서울특별시 중랑구 면목로45길 3-6",
    "lng": 127.0881764,
    "lat": 37.58142005
  },
  {
    "shopName": "공감",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 신정동 888-28",
    "roadAddress": "서울특별시 양천구 목동로23길 5",
    "lng": 126.8629715,
    "lat": 37.52719656
  },
  {
    "shopName": "디저브커피바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로2가 71",
    "roadAddress": "서울특별시 용산구 한강대로40길 43",
    "lng": 126.971665,
    "lat": 37.53020238
  },
  {
    "shopName": "크로플덕오리아가씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 동선동1가 121-6",
    "roadAddress": "서울특별시 성북구 동소문로20나길 47",
    "lng": 127.0191194,
    "lat": 37.59299442
  },
  {
    "shopName": "테스트원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강동구 암사동 513-33",
    "roadAddress": "서울특별시 강동구 올림픽로 757",
    "lng": 127.126768,
    "lat": 37.54887752
  },
  {
    "shopName": "드래곤힐프린트샵",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 용산구 한강로1가 241-1",
    "roadAddress": "서울특별시 용산구 한강대로 176",
    "lng": 126.9731155,
    "lat": 37.53416158
  },
  {
    "shopName": "카페",
    "branchName": "보스보드",
    "category": "보드카페",
    "jibunAddress": "서울특별시 영등포구 대림동 1080-17",
    "roadAddress": "서울특별시 영등포구 디지털로 357",
    "lng": 126.899918,
    "lat": 37.48967562
  },
  {
    "shopName": "루아르정릉",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 정릉동 409-40",
    "roadAddress": "서울특별시 성북구 보국문로8길 15",
    "lng": 127.01133,
    "lat": 37.60745418
  },
  {
    "shopName": "과일에반하다푸르타염창",
    "branchName": "목동점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 양천구 목동 506-7",
    "roadAddress": "서울특별시 양천구 목동중앙본로 113",
    "lng": 126.8708387,
    "lat": 37.54567124
  },
  {
    "shopName": "라인",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 동대문구 답십리동 960-18",
    "roadAddress": "서울특별시 동대문구 황물로 177",
    "lng": 127.0573724,
    "lat": 37.56502232
  },
  {
    "shopName": "카페",
    "branchName": "케이스팟수국전망대",
    "category": "일반카페",
    "jibunAddress": "서울특별시 중구 남대문로5가 67-4",
    "roadAddress": "서울특별시 중구 퇴계로 33",
    "lng": 126.9765864,
    "lat": 37.55753777
  },
  {
    "shopName": "디디엠보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "서울특별시 중구 을지로6가 18-52",
    "roadAddress": "서울특별시 중구 을지로43길 15",
    "lng": 127.0068279,
    "lat": 37.56697768
  },
  {
    "shopName": "서서다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동작구 노량진동 16-1",
    "roadAddress": "서울특별시 동작구 노들로2길 7",
    "lng": 126.938572,
    "lat": 37.51418634
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "종암점",
    "category": "일반카페",
    "jibunAddress": "서울특별시 성북구 종암동 88-9",
    "roadAddress": "서울특별시 성북구 종암로 98",
    "lng": 127.0346915,
    "lat": 37.59897056
  },
  {
    "shopName": "베이비피그BabyPig",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 동대문구 휘경동 293-103",
    "roadAddress": "서울특별시 동대문구 망우로14가길 29-1",
    "lng": 127.0597118,
    "lat": 37.58782842
  },
  {
    "shopName": "월성맨션",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 마포구 상암동 1607",
    "roadAddress": "서울특별시 마포구 상암산로 76",
    "lng": 126.8922963,
    "lat": 37.57918577
  },
  {
    "shopName": "덩키카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "서울특별시 강남구 삼성동 141",
    "roadAddress": "서울특별시 강남구 선릉로 514",
    "lng": 127.0491509,
    "lat": 37.50559515
  },
  {
    "shopName": "안성다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 134-3",
    "roadAddress": "경기도 수원시 장안구 경수대로775번길 68",
    "lng": 127.0178554,
    "lat": 37.28919053
  },
  {
    "shopName": "다온카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 75-5",
    "roadAddress": "경기도 수원시 장안구 수성로 247",
    "lng": 126.9995689,
    "lat": 37.28956902
  },
  {
    "shopName": "다겸",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 원천동 577-4",
    "roadAddress": "경기도 수원시 영통구 광교중앙로25번길 9",
    "lng": 127.0510006,
    "lat": 37.27757555
  },
  {
    "shopName": "아바",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 908-6",
    "roadAddress": "경기도 수원시 권선구 일월천로 6",
    "lng": 126.9726163,
    "lat": 37.28280529
  },
  {
    "shopName": "커피넛",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1125-2",
    "roadAddress": "경기도 수원시 팔달구 권광로 146",
    "lng": 127.031847,
    "lat": 37.26047096
  },
  {
    "shopName": "커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 973",
    "roadAddress": "경기도 수원시 영통구 법조로149번길 126",
    "lng": 127.0691946,
    "lat": 37.29269613
  },
  {
    "shopName": "피노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 141-16",
    "roadAddress": "경기도 수원시 권선구 고현로 29-1",
    "lng": 126.9868397,
    "lat": 37.25059689
  },
  {
    "shopName": "카페나노",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 천천동 323-10",
    "roadAddress": "경기도 수원시 장안구 일월로90번길 42-2",
    "lng": 126.9778492,
    "lat": 37.29111352
  },
  {
    "shopName": "이디야커피수원영통디지털점",
    "branchName": "수원영통디지털점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 980-3",
    "roadAddress": "경기도 수원시 영통구 덕영대로1556번길 16",
    "lng": 127.0591607,
    "lat": 37.24525542
  },
  {
    "shopName": "스타벅스",
    "branchName": "수원경희대점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1024-4",
    "roadAddress": "경기도 수원시 영통구 덕영대로 1695",
    "lng": 127.0767449,
    "lat": 37.24796195
  },
  {
    "shopName": "카페마조앤새디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1338",
    "roadAddress": "경기도 수원시 영통구 도청로 10",
    "lng": 127.0559103,
    "lat": 37.28623824
  },
  {
    "shopName": "매듭까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 지동 116-23",
    "roadAddress": "경기도 수원시 팔달구 중부대로 79",
    "lng": 127.0254406,
    "lat": 37.27644878
  },
  {
    "shopName": "TOP카페테리아",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1276",
    "roadAddress": "경기도 수원시 영통구 효원로 400",
    "lng": 127.0453721,
    "lat": 37.25805773
  },
  {
    "shopName": "탑빈스토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 766-4",
    "roadAddress": "경기도 수원시 권선구 탑동로 52",
    "lng": 126.9742418,
    "lat": 37.27354723
  },
  {
    "shopName": "노리터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 518",
    "roadAddress": "경기도 수원시 팔달구 월드컵로 319-1",
    "lng": 127.0336989,
    "lat": 37.28670778
  },
  {
    "shopName": "구슬다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 고등동 107-9",
    "roadAddress": "경기도 수원시 팔달구 고등로 51",
    "lng": 127.0027492,
    "lat": 37.27334027
  },
  {
    "shopName": "커피하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 천천동 480-3",
    "roadAddress": "경기도 수원시 장안구 정자로41번길 9",
    "lng": 126.9811206,
    "lat": 37.30109868
  },
  {
    "shopName": "달콤커피",
    "branchName": "수원역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 59-4",
    "roadAddress": "경기도 수원시 팔달구 매산로 3",
    "lng": 127.0019635,
    "lat": 37.26708911
  },
  {
    "shopName": "에드가까페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 544-8",
    "roadAddress": "경기도 수원시 권선구 정조로 509",
    "lng": 127.0110441,
    "lat": 37.25466721
  },
  {
    "shopName": "CAFESAN&TOA",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 1102",
    "roadAddress": "경기도 수원시 권선구 산업로156번길 201",
    "lng": 126.9872041,
    "lat": 37.24189548
  },
  {
    "shopName": "늘숲",
    "branchName": "아주대점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 575-1",
    "roadAddress": "경기도 수원시 팔달구 아주로 37",
    "lng": 127.0435388,
    "lat": 37.27821835
  },
  {
    "shopName": "카페제이제이크레마",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 959-3",
    "roadAddress": "경기도 수원시 영통구 법조로149번길 55",
    "lng": 127.0706901,
    "lat": 37.29397841
  },
  {
    "shopName": "카페스토리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 75-5",
    "roadAddress": "경기도 수원시 장안구 수성로 247",
    "lng": 126.9995689,
    "lat": 37.28956902
  },
  {
    "shopName": "용신사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 팔달구 팔달로3가 30-3",
    "roadAddress": "경기도 수원시 팔달구 중부대로 1",
    "lng": 127.0170425,
    "lat": 37.27538814
  },
  {
    "shopName": "카페마실",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 206-6",
    "roadAddress": "경기도 수원시 팔달구 화양로 33",
    "lng": 126.9967386,
    "lat": 37.28103882
  },
  {
    "shopName": "도치더치",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1038-2",
    "roadAddress": "경기도 수원시 영통구 청명남로 52",
    "lng": 127.076988,
    "lat": 37.25391108
  },
  {
    "shopName": "식스브레드&클럽에스프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1332",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 85",
    "lng": 127.0504641,
    "lat": 37.29155615
  },
  {
    "shopName": "지유명차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 장안구 하광교동 107-19",
    "roadAddress": "경기도 수원시 장안구 광교산로 365",
    "lng": 127.0189791,
    "lat": 37.31555654
  },
  {
    "shopName": "커피먹고놀자",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 297-2",
    "roadAddress": "경기도 수원시 장안구 율전로98번길 7",
    "lng": 126.9692048,
    "lat": 37.29812105
  },
  {
    "shopName": "전통매듭연구회",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 지동 116-23",
    "roadAddress": "경기도 수원시 팔달구 중부대로 79",
    "lng": 127.0254406,
    "lat": 37.27644878
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "수원남문점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 팔달로3가 30-5",
    "roadAddress": "경기도 수원시 팔달구 정조로 756-1",
    "lng": 127.0168717,
    "lat": 37.27551288
  },
  {
    "shopName": "플레이타임",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 18",
    "roadAddress": "경기도 수원시 팔달구 덕영대로 924",
    "lng": 127.0000881,
    "lat": 37.26566759
  },
  {
    "shopName": "이콩이콩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 522-20",
    "roadAddress": "경기도 수원시 팔달구 월드컵로311번길 39",
    "lng": 127.0328991,
    "lat": 37.28487204
  },
  {
    "shopName": "스터디카페스터디인투",
    "branchName": "매탄점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1264-2",
    "roadAddress": "경기도 수원시 영통구 매탄로108번길 28",
    "lng": 127.0449098,
    "lat": 37.25984717
  },
  {
    "shopName": "공차",
    "branchName": "수원영통점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1011-6",
    "roadAddress": "경기도 수원시 영통구 청명남로34번길 3",
    "lng": 127.0759536,
    "lat": 37.25276763
  },
  {
    "shopName": "더홀릭보드게임카페",
    "branchName": "성균관대역점",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 288-4",
    "roadAddress": "경기도 수원시 장안구 서부로2126번길 9",
    "lng": 126.9721705,
    "lat": 37.29817387
  },
  {
    "shopName": "캔다방탑동래미안점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 757-6",
    "roadAddress": "경기도 수원시 권선구 탑동로 60",
    "lng": 126.9740417,
    "lat": 37.27416724
  },
  {
    "shopName": "카페76",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 172-67",
    "roadAddress": "경기도 수원시 영통구 중부대로246번길 43",
    "lng": 127.0419469,
    "lat": 37.27303322
  },
  {
    "shopName": "장보는강아지와고양이북",
    "branchName": "수원아울렛점",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 893",
    "roadAddress": "경기도 수원시 장안구 경수대로 950",
    "lng": 127.0074942,
    "lat": 37.30353946
  },
  {
    "shopName": "크리스피크림도넛",
    "branchName": "수원인계점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1114-7",
    "roadAddress": "경기도 수원시 팔달구 권광로 200",
    "lng": 127.0335576,
    "lat": 37.26511654
  },
  {
    "shopName": "굿커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 573-1",
    "roadAddress": "경기도 수원시 팔달구 아주로 47",
    "lng": 127.0435171,
    "lat": 37.27904717
  },
  {
    "shopName": "공차",
    "branchName": "수원광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1325-5",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 94",
    "lng": 127.0508992,
    "lat": 37.29192908
  },
  {
    "shopName": "커피하우스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 533",
    "roadAddress": "경기도 수원시 권선구 정조로 526",
    "lng": 127.0114866,
    "lat": 37.25617572
  },
  {
    "shopName": "로이맘도라지가게",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 당수동 282-54",
    "roadAddress": "경기도 수원시 권선구 수인로621번길 68",
    "lng": 126.937005,
    "lat": 37.2931416
  },
  {
    "shopName": "카페데일리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 연무동 7-7",
    "roadAddress": "경기도 수원시 장안구 광교산로138번길 1",
    "lng": 127.0303741,
    "lat": 37.2997193
  },
  {
    "shopName": "스타벅스",
    "branchName": "수원영통점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 958-2",
    "roadAddress": "경기도 수원시 영통구 봉영로 1617",
    "lng": 127.0743079,
    "lat": 37.25552113
  },
  {
    "shopName": "카페",
    "branchName": "광보드",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1011",
    "roadAddress": "경기도 수원시 팔달구 장다리로172번길 2",
    "lng": 127.0244372,
    "lat": 37.26507778
  },
  {
    "shopName": "시인과농부",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 팔달구 팔달로2가 14",
    "roadAddress": "경기도 수원시 팔달구 정조로796번길 8",
    "lng": 127.0170981,
    "lat": 37.27892087
  },
  {
    "shopName": "엔제리너스",
    "branchName": "르노삼성점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 318-1",
    "roadAddress": "경기도 수원시 영통구 삼성로 300",
    "lng": 127.0660995,
    "lat": 37.26661221
  },
  {
    "shopName": "더카페",
    "branchName": "수원터미널NC백화점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1189",
    "roadAddress": "경기도 수원시 권선구 경수대로 270",
    "lng": 127.0200877,
    "lat": 37.25010178
  },
  {
    "shopName": "와우커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 오목천동 763",
    "roadAddress": "경기도 수원시 권선구 서부로 1371",
    "lng": 126.98395,
    "lat": 37.23242417
  },
  {
    "shopName": "착한커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 721-4",
    "roadAddress": "경기도 수원시 팔달구 일월로42번길 8-10",
    "lng": 126.9793334,
    "lat": 37.2864407
  },
  {
    "shopName": "커피로맨스",
    "branchName": "본점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1217-7",
    "roadAddress": "경기도 수원시 영통구 동탄원천로 1035",
    "lng": 127.0498164,
    "lat": 37.26502287
  },
  {
    "shopName": "카페",
    "branchName": "오디디오수원점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 30-68",
    "roadAddress": "경기도 수원시 영통구 월드컵로179번길 14-6",
    "lng": 127.0451616,
    "lat": 37.27830354
  },
  {
    "shopName": "포토카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 29-35",
    "roadAddress": "경기도 수원시 영통구 월드컵로179번길 14-12",
    "lng": 127.0449346,
    "lat": 37.27841885
  },
  {
    "shopName": "카페",
    "branchName": "블레스롤광교카페거리점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1321",
    "roadAddress": "경기도 수원시 영통구 센트럴파크로127번길 88",
    "lng": 127.0521045,
    "lat": 37.29384905
  },
  {
    "shopName": "킹콩선녀와나무꾼",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 영통동 959-1",
    "roadAddress": "경기도 수원시 영통구 봉영로 1605",
    "lng": 127.0734521,
    "lat": 37.25452324
  },
  {
    "shopName": "복다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 교동 197-2",
    "roadAddress": "경기도 수원시 팔달구 매산로 96",
    "lng": 127.0114492,
    "lat": 37.27025042
  },
  {
    "shopName": "삼성전자",
    "branchName": "정보통신총괄연구소",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 416",
    "roadAddress": "경기도 수원시 영통구 삼성로 129",
    "lng": 127.0531221,
    "lat": 37.25763337
  },
  {
    "shopName": "라팽블랑",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 600-31",
    "roadAddress": "경기도 수원시 장안구 이목로 24-9",
    "lng": 126.9848564,
    "lat": 37.30932161
  },
  {
    "shopName": "에이치투디갈비명가서서갈비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 432-1",
    "roadAddress": "경기도 수원시 권선구 서부로 1780-24",
    "lng": 126.9729835,
    "lat": 37.26739993
  },
  {
    "shopName": "누트인타로아카데미",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로2가 7-2",
    "roadAddress": "경기도 수원시 팔달구 고화로9번길 27",
    "lng": 127.0065626,
    "lat": 37.26973194
  },
  {
    "shopName": "카페혜시",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 760-4",
    "roadAddress": "경기도 수원시 장안구 조원로89번길 46",
    "lng": 127.013761,
    "lat": 37.29960005
  },
  {
    "shopName": "수남다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 117-3",
    "roadAddress": "경기도 수원시 장안구 경수대로 781-2",
    "lng": 127.0192521,
    "lat": 37.2919324
  },
  {
    "shopName": "YILDIZCOFFEE",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 894",
    "roadAddress": "경기도 수원시 장안구 경수대로 940",
    "lng": 127.0080409,
    "lat": 37.30313856
  },
  {
    "shopName": "탐앤탐스광교역경기대점",
    "branchName": "광교역경기대점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1257-3",
    "roadAddress": "경기도 수원시 영통구 대학3로4번길 12",
    "lng": 127.0434106,
    "lat": 37.29993352
  },
  {
    "shopName": "카페정덕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매향동 122-51",
    "roadAddress": "경기도 수원시 팔달구 창룡대로41번길 4",
    "lng": 127.0206768,
    "lat": 37.28295135
  },
  {
    "shopName": "카페",
    "branchName": "숨갤러리",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1284",
    "roadAddress": "경기도 수원시 영통구 창룡대로 250",
    "lng": 127.0368989,
    "lat": 37.29488869
  },
  {
    "shopName": "할리스커피",
    "branchName": "수원팔달문점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 팔달로2가 128-2",
    "roadAddress": "경기도 수원시 팔달구 정조로777번길 2",
    "lng": 127.0161224,
    "lat": 37.27764223
  },
  {
    "shopName": "공주다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 북수동 171",
    "roadAddress": "경기도 수원시 팔달구 정조로 868",
    "lng": 127.0158161,
    "lat": 37.28557825
  },
  {
    "shopName": "스마일아이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 16-10",
    "roadAddress": "경기도 수원시 팔달구 향교로 3-2",
    "lng": 127.0016175,
    "lat": 37.2676719
  },
  {
    "shopName": "카페",
    "branchName": "마징가보드",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1040-3",
    "roadAddress": "경기도 수원시 팔달구 인계로124번길 27-18",
    "lng": 127.0315655,
    "lat": 37.26573102
  },
  {
    "shopName": "cafedrawing",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 1400-2",
    "roadAddress": "경기도 수원시 권선구 호매실로104번길 24-61",
    "lng": 126.9626271,
    "lat": 37.25882141
  },
  {
    "shopName": "쥬씨망포역점",
    "branchName": "망포역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 973-3",
    "roadAddress": "경기도 수원시 영통구 영통로 232",
    "lng": 127.0584677,
    "lat": 37.24841275
  },
  {
    "shopName": "easycoffee",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 이목동 285-2",
    "roadAddress": "경기도 수원시 장안구 장안로 394",
    "lng": 126.9841403,
    "lat": 37.31559599
  },
  {
    "shopName": "에이플러스보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1043-9",
    "roadAddress": "경기도 수원시 팔달구 효원로265번길 41",
    "lng": 127.0312728,
    "lat": 37.26393546
  },
  {
    "shopName": "101커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 지동 261-1",
    "roadAddress": "경기도 수원시 팔달구 경수대로 697",
    "lng": 127.0257397,
    "lat": 37.2873634
  },
  {
    "shopName": "북문충전소커피판매기",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 365-1",
    "roadAddress": "경기도 수원시 장안구 팔달로247번길 1",
    "lng": 127.0120914,
    "lat": 37.28840367
  },
  {
    "shopName": "브리즈피씨까페",
    "branchName": "수원영통점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 998-7",
    "roadAddress": "경기도 수원시 영통구 청명남로 25",
    "lng": 127.074718,
    "lat": 37.25240655
  },
  {
    "shopName": "스타벅스",
    "branchName": "수원망포DT점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 38-23",
    "roadAddress": "경기도 수원시 영통구 덕영대로 1467",
    "lng": 127.0513306,
    "lat": 37.24587778
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "수원경희대점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1024-8",
    "roadAddress": "경기도 수원시 영통구 덕영대로 1701",
    "lng": 127.0773423,
    "lat": 37.24796661
  },
  {
    "shopName": "소유",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 354-2",
    "roadAddress": "경기도 수원시 장안구 대평로 154",
    "lng": 126.9897914,
    "lat": 37.30134422
  },
  {
    "shopName": "한샘다방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 장안구 영화동 395-11",
    "roadAddress": "경기도 수원시 장안구 장안로 53",
    "lng": 127.0039692,
    "lat": 37.28942591
  },
  {
    "shopName": "나는카페수원의료원점",
    "branchName": "수원의료원점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 886-9",
    "roadAddress": "경기도 수원시 장안구 수성로245번길 69",
    "lng": 126.9963695,
    "lat": 37.29184871
  },
  {
    "shopName": "쥬씨",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 544-11",
    "roadAddress": "경기도 수원시 영통구 태장로 84",
    "lng": 127.0555198,
    "lat": 37.23895481
  },
  {
    "shopName": "카페",
    "branchName": "매직샵",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 987-4",
    "roadAddress": "경기도 수원시 영통구 광교중앙로 242",
    "lng": 127.0665646,
    "lat": 37.29195454
  },
  {
    "shopName": "독다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 남창동 98-3",
    "roadAddress": "경기도 수원시 팔달구 행궁로 36",
    "lng": 127.0149177,
    "lat": 37.27922713
  },
  {
    "shopName": "웰스헬스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1364",
    "roadAddress": "경기도 수원시 권선구 동수원로177번길 40",
    "lng": 127.0301416,
    "lat": 37.24664326
  },
  {
    "shopName": "홍라드",
    "branchName": "2호점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 신풍동 120-1",
    "roadAddress": "경기도 수원시 팔달구 화서문로16번길 15",
    "lng": 127.0096488,
    "lat": 37.28460771
  },
  {
    "shopName": "쥬씨",
    "branchName": "북수원점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 898-1",
    "roadAddress": "경기도 수원시 장안구 송원로 81",
    "lng": 127.009216,
    "lat": 37.30213018
  },
  {
    "shopName": "카페",
    "branchName": "또,봄플라워앤",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 40-11",
    "roadAddress": "경기도 수원시 장안구 장안로 106",
    "lng": 127.0012999,
    "lat": 37.29342225
  },
  {
    "shopName": "알리바바커피&도넛",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1105-10",
    "roadAddress": "경기도 수원시 권선구 금곡로197번길 59-31",
    "lng": 126.9536051,
    "lat": 37.27616898
  },
  {
    "shopName": "정지영커피로스터즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 북수동 33-9",
    "roadAddress": "경기도 수원시 팔달구 수원천로 375",
    "lng": 127.0172088,
    "lat": 37.28687838
  },
  {
    "shopName": "사주&타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 395-24",
    "roadAddress": "경기도 수원시 권선구 금호로 27",
    "lng": 126.9547777,
    "lat": 37.26883551
  },
  {
    "shopName": "에어라인",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 839-7",
    "roadAddress": "경기도 수원시 권선구 탑동로 23",
    "lng": 126.9745594,
    "lat": 37.27091881
  },
  {
    "shopName": "요거프레소",
    "branchName": "광교SK뷰레이크점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 1016-1",
    "roadAddress": "경기도 수원시 영통구 법조로 25",
    "lng": 127.0598979,
    "lat": 37.28751348
  },
  {
    "shopName": "모노로그",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1088",
    "roadAddress": "경기도 수원시 권선구 금곡로118번길 10-31",
    "lng": 126.9423803,
    "lat": 37.27332092
  },
  {
    "shopName": "아뜰리에202",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 589",
    "roadAddress": "경기도 수원시 영통구 광교호수공원로 277",
    "lng": 127.0566058,
    "lat": 37.28381985
  },
  {
    "shopName": "커피라운지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 971-1",
    "roadAddress": "경기도 수원시 영통구 덕영대로1555번길 20",
    "lng": 127.0618068,
    "lat": 37.24729487
  },
  {
    "shopName": "푸르릇",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 262-10",
    "roadAddress": "경기도 수원시 권선구 금호로15번길 15",
    "lng": 126.9529242,
    "lat": 37.26997252
  },
  {
    "shopName": "요거프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 남수동 95-5",
    "roadAddress": "경기도 수원시 팔달구 수원천로 292",
    "lng": 127.0188717,
    "lat": 37.27953931
  },
  {
    "shopName": "우드바인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 40-1",
    "roadAddress": "경기도 수원시 권선구 매송고색로 723",
    "lng": 126.9835093,
    "lat": 37.25181185
  },
  {
    "shopName": "anoldchum",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 고등동 86-6",
    "roadAddress": "경기도 수원시 팔달구 고화로39번길 76",
    "lng": 127.0047364,
    "lat": 37.26970759
  },
  {
    "shopName": "쏭다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 180-5",
    "roadAddress": "경기도 수원시 팔달구 동말로38번길 9-10",
    "lng": 126.9990343,
    "lat": 37.27799456
  },
  {
    "shopName": "오프에어",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 장안동 315-2",
    "roadAddress": "경기도 수원시 팔달구 화서문로 33",
    "lng": 127.0115596,
    "lat": 37.28509224
  },
  {
    "shopName": "완벽한순간",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 300",
    "roadAddress": "경기도 수원시 장안구 율전로108번길 9",
    "lng": 126.9698227,
    "lat": 37.29912663
  },
  {
    "shopName": "COFFEE21",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 890-15",
    "roadAddress": "경기도 수원시 권선구 매송고색로711번길 3-4",
    "lng": 126.9818108,
    "lat": 37.25154495
  },
  {
    "shopName": "아란커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 송죽동 239-2",
    "roadAddress": "경기도 수원시 장안구 정조로 1087",
    "lng": 127.002543,
    "lat": 37.30177677
  },
  {
    "shopName": "아지랑이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 665-1",
    "roadAddress": "경기도 수원시 권선구 칠보로88번길 20",
    "lng": 126.9479789,
    "lat": 37.26560347
  },
  {
    "shopName": "콘트란쉐리에",
    "branchName": "롯데아울렛광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1338",
    "roadAddress": "경기도 수원시 영통구 도청로 10",
    "lng": 127.0559605,
    "lat": 37.28673424
  },
  {
    "shopName": "삼성웰스토리소재연구단지",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 560",
    "roadAddress": "경기도 수원시 영통구 삼성로 130",
    "lng": 127.0574429,
    "lat": 37.2546672
  },
  {
    "shopName": "뜰커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1267-7",
    "roadAddress": "경기도 수원시 영통구 효원로 397",
    "lng": 127.0451567,
    "lat": 37.25904719
  },
  {
    "shopName": "부릉카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 957-10",
    "roadAddress": "경기도 수원시 영통구 법조로149번길 62",
    "lng": 127.0703815,
    "lat": 37.29430939
  },
  {
    "shopName": "박철두의브라더스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1053-4",
    "roadAddress": "경기도 수원시 권선구 경수대로352번길 48",
    "lng": 127.0255664,
    "lat": 37.25706737
  },
  {
    "shopName": "원포레스트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 835-6",
    "roadAddress": "경기도 수원시 권선구 하탑로 29",
    "lng": 126.9748449,
    "lat": 37.26898395
  },
  {
    "shopName": "달리는커피",
    "branchName": "수원영통점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1093",
    "roadAddress": "경기도 수원시 영통구 봉영로1482번길 18",
    "lng": 127.0661993,
    "lat": 37.24483355
  },
  {
    "shopName": "달리는커피",
    "branchName": "수원장안점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 327-2",
    "roadAddress": "경기도 수원시 장안구 대평로142번길 23-14",
    "lng": 126.9914408,
    "lat": 37.30115104
  },
  {
    "shopName": "시루아네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 896",
    "roadAddress": "경기도 수원시 장안구 경수대로 930",
    "lng": 127.0088017,
    "lat": 37.30275747
  },
  {
    "shopName": "미크레",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 589-8",
    "roadAddress": "경기도 수원시 권선구 동수원로36번길 9",
    "lng": 127.0242195,
    "lat": 37.23475424
  },
  {
    "shopName": "엔제리너스",
    "branchName": "수원인계점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1113",
    "roadAddress": "경기도 수원시 팔달구 권광로 187",
    "lng": 127.0324639,
    "lat": 37.26424256
  },
  {
    "shopName": "안목",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1300",
    "roadAddress": "경기도 수원시 영통구 센트럴파크로128번길 75",
    "lng": 127.0582317,
    "lat": 37.29542981
  },
  {
    "shopName": "카페로뎀",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 1128",
    "roadAddress": "경기도 수원시 권선구 덕영대로1152번길 1",
    "lng": 127.0168134,
    "lat": 37.25051617
  },
  {
    "shopName": "물가에심기운카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1263-1",
    "roadAddress": "경기도 수원시 영통구 대학1로 62",
    "lng": 127.0462296,
    "lat": 37.29910925
  },
  {
    "shopName": "뜰7",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 1119-13",
    "roadAddress": "경기도 수원시 권선구 경수대로261번길 20",
    "lng": 127.0177198,
    "lat": 37.2510283
  },
  {
    "shopName": "커피베이",
    "branchName": "매탄삼성점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 486-8",
    "roadAddress": "경기도 수원시 영통구 신원로 213",
    "lng": 127.0599312,
    "lat": 37.25491226
  },
  {
    "shopName": "카페바를정",
    "branchName": "바를정",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 462-1",
    "roadAddress": "경기도 수원시 장안구 정자로 132-9",
    "lng": 126.9916004,
    "lat": 37.30271127
  },
  {
    "shopName": "디자인108",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 889",
    "roadAddress": "경기도 수원시 권선구 수성로35번길 60",
    "lng": 126.976739,
    "lat": 37.28565238
  },
  {
    "shopName": "G커피앤카페",
    "branchName": "G커피앤",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 997",
    "roadAddress": "경기도 수원시 팔달구 장다리로 179",
    "lng": 127.0241661,
    "lat": 37.26599466
  },
  {
    "shopName": "커피볶는집",
    "branchName": "우리동네",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 678-2",
    "roadAddress": "경기도 수원시 팔달구 수성로157번길 27-4",
    "lng": 126.9893568,
    "lat": 37.28745482
  },
  {
    "shopName": "카페",
    "branchName": "솔대",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 송죽동 496",
    "roadAddress": "경기도 수원시 장안구 경수대로973번길 13-4",
    "lng": 127.0043238,
    "lat": 37.30359393
  },
  {
    "shopName": "할리스커피광교테크노밸리점",
    "branchName": "광교테크노밸리점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1351",
    "roadAddress": "경기도 수원시 영통구 에듀타운로 108",
    "lng": 127.0454383,
    "lat": 37.29031728
  },
  {
    "shopName": "카페드파리롯데백화점수원점",
    "branchName": "오가다더심플수원롯데몰점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 서둔동 381",
    "roadAddress": "경기도 수원시 권선구 세화로 134",
    "lng": 126.9972782,
    "lat": 37.26416604
  },
  {
    "shopName": "플리터커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 988",
    "roadAddress": "경기도 수원시 권선구 경수대로359번길 11",
    "lng": 127.0222302,
    "lat": 37.25876095
  },
  {
    "shopName": "어썸PC카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 398-1",
    "roadAddress": "경기도 수원시 장안구 수성로258번길 3",
    "lng": 127.0010239,
    "lat": 37.28956328
  },
  {
    "shopName": "라온커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 882-5",
    "roadAddress": "경기도 수원시 장안구 대평로51번길 56",
    "lng": 126.9917515,
    "lat": 37.29224198
  },
  {
    "shopName": "봄을꿈꾸는카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1311-2",
    "roadAddress": "경기도 수원시 권선구 동수원로224번길 10",
    "lng": 127.0343572,
    "lat": 37.24929089
  },
  {
    "shopName": "망고키즈카페",
    "branchName": "망고키즈",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 570-5",
    "roadAddress": "경기도 수원시 영통구 영통로 103",
    "lng": 127.0583003,
    "lat": 37.23740905
  },
  {
    "shopName": "정식클럽",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 395",
    "roadAddress": "경기도 수원시 장안구 장안로 232",
    "lng": 126.9934621,
    "lat": 37.30436708
  },
  {
    "shopName": "만랩커피광교sk레이크점",
    "branchName": "광교SK레이크점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 1016-1",
    "roadAddress": "경기도 수원시 영통구 법조로 25",
    "lng": 127.0598979,
    "lat": 37.28751348
  },
  {
    "shopName": "cafei",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 1350-1",
    "roadAddress": "경기도 수원시 권선구 금곡로140번길 95-64",
    "lng": 126.943249,
    "lat": 37.26764285
  },
  {
    "shopName": "호호",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 1369",
    "roadAddress": "경기도 수원시 권선구 칠보로 169",
    "lng": 126.9579118,
    "lat": 37.26640318
  },
  {
    "shopName": "힐링&카페라떼르",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 35",
    "roadAddress": "경기도 수원시 팔달구 향교로 11-2",
    "lng": 127.0024704,
    "lat": 37.26797645
  },
  {
    "shopName": "북카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 890-191",
    "roadAddress": "경기도 수원시 권선구 매송고색로721번길 26",
    "lng": 126.9828202,
    "lat": 37.25276109
  },
  {
    "shopName": "더치앤빈",
    "branchName": "병점점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 지동 116-22",
    "roadAddress": "경기도 수원시 팔달구 중부대로 81",
    "lng": 127.0255755,
    "lat": 37.27648593
  },
  {
    "shopName": "카페다",
    "branchName": "광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 985-2",
    "roadAddress": "경기도 수원시 영통구 광교중앙로248번길 107",
    "lng": 127.0691935,
    "lat": 37.29186712
  },
  {
    "shopName": "커피빈코리아수원송죽DT점",
    "branchName": "코리아수원송죽DT점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 송죽동 451-24",
    "roadAddress": "경기도 수원시 장안구 경수대로 989",
    "lng": 127.0029169,
    "lat": 37.30506887
  },
  {
    "shopName": "라떼야커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 886-125",
    "roadAddress": "경기도 수원시 권선구 서부로1596번길 10",
    "lng": 126.9765474,
    "lat": 37.25149056
  },
  {
    "shopName": "엔제리너스",
    "branchName": "롯데아울렛광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1338",
    "roadAddress": "경기도 수원시 영통구 도청로 10",
    "lng": 127.0559103,
    "lat": 37.28623824
  },
  {
    "shopName": "청춘물고기낚시카페",
    "branchName": "청춘물고기낚시",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 13-4",
    "roadAddress": "경기도 수원시 팔달구 향교로1번길 22-15",
    "lng": 127.0008539,
    "lat": 37.26915225
  },
  {
    "shopName": "커피에이앤컴퍼니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 991-9",
    "roadAddress": "경기도 수원시 권선구 경수대로335번길 10",
    "lng": 127.0214985,
    "lat": 37.25693471
  },
  {
    "shopName": "커피홀릭",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 372-20",
    "roadAddress": "경기도 수원시 영통구 신원로 295",
    "lng": 127.0602959,
    "lat": 37.26185357
  },
  {
    "shopName": "쉬어가다",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 57-1",
    "roadAddress": "경기도 수원시 장안구 수일로219번길 50",
    "lng": 127.0140069,
    "lat": 37.30841469
  },
  {
    "shopName": "옥다방",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 신풍동 198-2",
    "roadAddress": "경기도 수원시 팔달구 정조로 857",
    "lng": 127.0157047,
    "lat": 37.28460416
  },
  {
    "shopName": "스무디킹",
    "branchName": "영통메가박스점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 961-1",
    "roadAddress": "경기도 수원시 영통구 청명로 151",
    "lng": 127.0720442,
    "lat": 37.25717945
  },
  {
    "shopName": "요거프레소",
    "branchName": "수원SK스카이뷰점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 945",
    "roadAddress": "경기도 수원시 장안구 이목로 24",
    "lng": 126.983592,
    "lat": 37.30939185
  },
  {
    "shopName": "스타벅스",
    "branchName": "수원이비스점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1132-12",
    "roadAddress": "경기도 수원시 팔달구 권광로 132",
    "lng": 127.0312995,
    "lat": 37.25921396
  },
  {
    "shopName": "할리스커피",
    "branchName": "인계써드아이점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1036-5",
    "roadAddress": "경기도 수원시 팔달구 인계로 130",
    "lng": 127.0317631,
    "lat": 37.26703021
  },
  {
    "shopName": "카페델로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 958-2",
    "roadAddress": "경기도 수원시 팔달구 장다리로 282-5",
    "lng": 127.0285957,
    "lat": 37.2739877
  },
  {
    "shopName": "커피가",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 입북동 412-4",
    "roadAddress": "경기도 수원시 권선구 입북로 35",
    "lng": 126.9592901,
    "lat": 37.29486248
  },
  {
    "shopName": "이따금",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 신풍동 69",
    "roadAddress": "경기도 수원시 팔달구 화서문로32번길 15",
    "lng": 127.0120312,
    "lat": 37.28438432
  },
  {
    "shopName": "카페베네",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 18",
    "roadAddress": "경기도 수원시 팔달구 덕영대로 924",
    "lng": 127.0000881,
    "lat": 37.26566759
  },
  {
    "shopName": "커피빈",
    "branchName": "코리아광교아브뉴프랑점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1332",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 85",
    "lng": 127.0504641,
    "lat": 37.29155615
  },
  {
    "shopName": "커피베이",
    "branchName": "홈플러스동수원점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1045",
    "roadAddress": "경기도 수원시 팔달구 효원로 257",
    "lng": 127.0301156,
    "lat": 37.26274556
  },
  {
    "shopName": "스위티두",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1022-5",
    "roadAddress": "경기도 수원시 영통구 영일로6번길 35",
    "lng": 127.0778788,
    "lat": 37.24834024
  },
  {
    "shopName": "이리부농1",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 권선구 호매실동 678-1",
    "roadAddress": "경기도 수원시 권선구 매곡로 6-8",
    "lng": 126.9508378,
    "lat": 37.2667552
  },
  {
    "shopName": "너라는계절",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1124-1",
    "roadAddress": "경기도 수원시 권선구 금곡로196번길 62",
    "lng": 126.954739,
    "lat": 37.2732685
  },
  {
    "shopName": "인터라켄",
    "branchName": "드인터라켄",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1027-6",
    "roadAddress": "경기도 수원시 권선구 권선로 716-1",
    "lng": 127.0293745,
    "lat": 37.25811689
  },
  {
    "shopName": "오제뉴어리카페",
    "branchName": "오제뉴어리",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 590",
    "roadAddress": "경기도 수원시 영통구 광교호수공원로 155",
    "lng": 127.0601915,
    "lat": 37.27660361
  },
  {
    "shopName": "카페쉘터",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매교동 161-3",
    "roadAddress": "경기도 수원시 팔달구 정조로 643",
    "lng": 127.015503,
    "lat": 37.26631941
  },
  {
    "shopName": "노천사랑방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1115-4",
    "roadAddress": "경기도 수원시 권선구 금곡로 225",
    "lng": 126.9548145,
    "lat": 37.27514342
  },
  {
    "shopName": "커피에반하다",
    "branchName": "구운점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 527-1",
    "roadAddress": "경기도 수원시 권선구 구운로27번길 28",
    "lng": 126.9741769,
    "lat": 37.27583542
  },
  {
    "shopName": "카페",
    "branchName": "인중독광교에듀하임점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1352",
    "roadAddress": "경기도 수원시 영통구 에듀타운로 101",
    "lng": 127.0449493,
    "lat": 37.28974565
  },
  {
    "shopName": "덕스커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 13-5",
    "roadAddress": "경기도 수원시 팔달구 향교로1번길 22-19",
    "lng": 127.0009987,
    "lat": 37.26927963
  },
  {
    "shopName": "음음음",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 208-7",
    "roadAddress": "경기도 수원시 영통구 매원로12번길 6",
    "lng": 127.0471272,
    "lat": 37.26638894
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "수원인계점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1131",
    "roadAddress": "경기도 수원시 팔달구 권광로 138",
    "lng": 127.031607,
    "lat": 37.25984724
  },
  {
    "shopName": "스타벅스",
    "branchName": "수원광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1332",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 85",
    "lng": 127.0512039,
    "lat": 37.29012034
  },
  {
    "shopName": "탐앤탐스",
    "branchName": "아주대점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 18-1",
    "roadAddress": "경기도 수원시 영통구 아주로 46",
    "lng": 127.0440729,
    "lat": 37.27879035
  },
  {
    "shopName": "커피주택",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 722-14",
    "roadAddress": "경기도 수원시 팔달구 일월로42번길 8-15",
    "lng": 126.9796377,
    "lat": 37.28645233
  },
  {
    "shopName": "쉐르본",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 295",
    "roadAddress": "경기도 수원시 영통구 영통로153번길 30",
    "lng": 127.053492,
    "lat": 37.24158784
  },
  {
    "shopName": "디샤커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 고등동 4-1",
    "roadAddress": "경기도 수원시 팔달구 고화로 103",
    "lng": 127.006401,
    "lat": 37.27859728
  },
  {
    "shopName": "메가커피",
    "branchName": "수원율전점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 407-5",
    "roadAddress": "경기도 수원시 장안구 서부로2105번길 16-4",
    "lng": 126.9694691,
    "lat": 37.29693392
  },
  {
    "shopName": "시작스터디카페",
    "branchName": "수원매탄점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1263-4",
    "roadAddress": "경기도 수원시 영통구 매탄로100번길 17",
    "lng": 127.0442141,
    "lat": 37.25958925
  },
  {
    "shopName": "루움",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 912-6",
    "roadAddress": "경기도 수원시 권선구 일월천로4번길 49-6",
    "lng": 126.9749503,
    "lat": 37.28283453
  },
  {
    "shopName": "카페일프로",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1302",
    "roadAddress": "경기도 수원시 권선구 세권로 331",
    "lng": 127.040479,
    "lat": 37.25187272
  },
  {
    "shopName": "이코나",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 1152",
    "roadAddress": "경기도 수원시 권선구 산업로156번길 142-10",
    "lng": 126.9864605,
    "lat": 37.23851003
  },
  {
    "shopName": "다정커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 북수동 75",
    "roadAddress": "경기도 수원시 팔달구 화서문로71번길 6",
    "lng": 127.0156956,
    "lat": 37.28617197
  },
  {
    "shopName": "카페그로브",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 563-1",
    "roadAddress": "경기도 수원시 권선구 곡선로50번길 5-3",
    "lng": 127.0299296,
    "lat": 37.23855872
  },
  {
    "shopName": "커피잡은손",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1306-20",
    "roadAddress": "경기도 수원시 영통구 센트럴파크로127번길 18",
    "lng": 127.0552215,
    "lat": 37.29532472
  },
  {
    "shopName": "카페로디",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 288-2",
    "roadAddress": "경기도 수원시 장안구 화산로213번길 11",
    "lng": 126.9728469,
    "lat": 37.29902676
  },
  {
    "shopName": "카페",
    "branchName": "이플러스",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 955-1",
    "roadAddress": "경기도 수원시 팔달구 경수대로 549",
    "lng": 127.0293488,
    "lat": 37.27504816
  },
  {
    "shopName": "chanceonsomeone",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 고등동 49-5",
    "roadAddress": "경기도 수원시 팔달구 고화로61번길 12",
    "lng": 127.0055132,
    "lat": 37.27494042
  },
  {
    "shopName": "다온블리스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 511-1",
    "roadAddress": "경기도 수원시 권선구 동수원로146번길 115",
    "lng": 127.0349228,
    "lat": 37.24560101
  },
  {
    "shopName": "쿠오레에스프레소",
    "branchName": "수원시청점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1044-14",
    "roadAddress": "경기도 수원시 팔달구 효원로249번길 18-21",
    "lng": 127.0307074,
    "lat": 37.26319194
  },
  {
    "shopName": "카페",
    "branchName": "플러스셀",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 오목천동 775",
    "roadAddress": "경기도 수원시 권선구 서수원로53번길 25-36",
    "lng": 126.9779101,
    "lat": 37.23238121
  },
  {
    "shopName": "사주카페",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 1087-15",
    "roadAddress": "경기도 수원시 권선구 세지로42번길 21",
    "lng": 127.0174334,
    "lat": 37.25572061
  },
  {
    "shopName": "요거프레소",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 1146-12",
    "roadAddress": "경기도 수원시 권선구 정조로388번길 3",
    "lng": 127.0148322,
    "lat": 37.24424613
  },
  {
    "shopName": "카페놀이",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1344",
    "roadAddress": "경기도 수원시 영통구 도청로 65",
    "lng": 127.0493983,
    "lat": 37.28931289
  },
  {
    "shopName": "그랜드커피숍",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 고등동 86-3",
    "roadAddress": "경기도 수원시 팔달구 고매로 4",
    "lng": 127.0046216,
    "lat": 37.26985981
  },
  {
    "shopName": "공간샘스터디카페",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1085-3",
    "roadAddress": "경기도 수원시 권선구 금곡로 112",
    "lng": 126.9425974,
    "lat": 37.27392659
  },
  {
    "shopName": "톡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1025-1",
    "roadAddress": "경기도 수원시 영통구 청명로 28",
    "lng": 127.0806461,
    "lat": 37.24972241
  },
  {
    "shopName": "애견카페이지독",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 송죽동 258-3",
    "roadAddress": "경기도 수원시 장안구 파장로 1",
    "lng": 126.9999152,
    "lat": 37.30344862
  },
  {
    "shopName": "유폴24시애견셀프목욕&애견유치원",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1126-9",
    "roadAddress": "경기도 수원시 팔달구 권광로142번길 31",
    "lng": 127.0332183,
    "lat": 37.25991448
  },
  {
    "shopName": "멍하면사주냥",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 739-8",
    "roadAddress": "경기도 수원시 장안구 조원로74번길 10-18",
    "lng": 127.018002,
    "lat": 37.29960828
  },
  {
    "shopName": "카페",
    "branchName": "올웨이즈24시",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1337",
    "roadAddress": "경기도 수원시 권선구 덕영대로1190번길 100",
    "lng": 127.0193806,
    "lat": 37.24464432
  },
  {
    "shopName": "퍼블리크",
    "branchName": "롯데아울렛광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1338",
    "roadAddress": "경기도 수원시 영통구 도청로 10",
    "lng": 127.0559605,
    "lat": 37.28673424
  },
  {
    "shopName": "메가커피",
    "branchName": "수원영통구청점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1267-3",
    "roadAddress": "경기도 수원시 영통구 효원로 387",
    "lng": 127.0439369,
    "lat": 37.25922658
  },
  {
    "shopName": "카페",
    "branchName": "하이라이트",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 오목천동 666-4",
    "roadAddress": "경기도 수원시 권선구 서수원로75번길 70-18",
    "lng": 126.9724627,
    "lat": 37.23436152
  },
  {
    "shopName": "45민",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 962-3",
    "roadAddress": "경기도 수원시 영통구 영통로 383",
    "lng": 127.0677885,
    "lat": 37.25856074
  },
  {
    "shopName": "피노키오",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 서둔동 105-5",
    "roadAddress": "경기도 수원시 권선구 상탑로 132-3",
    "lng": 126.9857678,
    "lat": 37.27085317
  },
  {
    "shopName": "카페제주",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 109-6",
    "roadAddress": "경기도 수원시 장안구 상률로46번길 33",
    "lng": 126.9701991,
    "lat": 37.30460847
  },
  {
    "shopName": "매머드커피",
    "branchName": "수원고색점",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 권선구 고색동 1094",
    "roadAddress": "경기도 수원시 권선구 산업로 180",
    "lng": 126.9841303,
    "lat": 37.24249992
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "영통역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 960-3",
    "roadAddress": "경기도 수원시 영통구 봉영로 1569",
    "lng": 127.0710137,
    "lat": 37.25205315
  },
  {
    "shopName": "레스티드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 85-3",
    "roadAddress": "경기도 수원시 팔달구 중부대로239번길 5",
    "lng": 127.0421619,
    "lat": 37.27564812
  },
  {
    "shopName": "3X-라지커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 1403-4",
    "roadAddress": "경기도 수원시 권선구 호매실로90번길 27",
    "lng": 126.9633981,
    "lat": 37.25685478
  },
  {
    "shopName": "디앤요",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 198-3",
    "roadAddress": "경기도 수원시 영통구 매여울로 27-1",
    "lng": 127.0461347,
    "lat": 37.2708864
  },
  {
    "shopName": "보드게임카페레드버튼",
    "branchName": "아주대점",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 18-6",
    "roadAddress": "경기도 수원시 영통구 아주로 38",
    "lng": 127.0440909,
    "lat": 37.27825885
  },
  {
    "shopName": "에이프런",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1319-4",
    "roadAddress": "경기도 수원시 영통구 센트럴파크로127번길 138",
    "lng": 127.054958,
    "lat": 37.29384483
  },
  {
    "shopName": "우디앤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1088-2",
    "roadAddress": "경기도 수원시 권선구 금곡로118번길 24",
    "lng": 126.942913,
    "lat": 37.27312744
  },
  {
    "shopName": "루시퍼",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1026",
    "roadAddress": "경기도 수원시 팔달구 효원로219번길 46-4",
    "lng": 127.0268271,
    "lat": 37.26509745
  },
  {
    "shopName": "더리터권선",
    "branchName": "인계점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1330",
    "roadAddress": "경기도 수원시 권선구 권광로 55",
    "lng": 127.0258065,
    "lat": 37.25505091
  },
  {
    "shopName": "카페",
    "branchName": "人충전",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 897-2",
    "roadAddress": "경기도 수원시 권선구 일월천로15번길 22-23",
    "lng": 126.9729261,
    "lat": 37.2849075
  },
  {
    "shopName": "커피엔줄리엣행궁점",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 북수동 346-1",
    "roadAddress": "경기도 수원시 팔달구 정조로 844",
    "lng": 127.0164878,
    "lat": 37.28335815
  },
  {
    "shopName": "필드키친",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 51-55",
    "roadAddress": "경기도 수원시 장안구 영화로85번길 2",
    "lng": 127.005702,
    "lat": 37.29401799
  },
  {
    "shopName": "플레르윤",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 11-5",
    "roadAddress": "경기도 수원시 장안구 수일로233번길 126",
    "lng": 127.0204662,
    "lat": 37.3070266
  },
  {
    "shopName": "하울즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1020-2",
    "roadAddress": "경기도 수원시 영통구 매영로415번길 52",
    "lng": 127.0790372,
    "lat": 37.24947562
  },
  {
    "shopName": "팔공티광교역",
    "branchName": "경기대점",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 이의동 1258",
    "roadAddress": "경기도 수원시 영통구 대학로 48",
    "lng": 127.044422,
    "lat": 37.30023004
  },
  {
    "shopName": "브라운가비",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 연무동 251-26",
    "roadAddress": "경기도 수원시 장안구 월드컵로429번길 2",
    "lng": 127.0251059,
    "lat": 37.29365678
  },
  {
    "shopName": "다이나믹카페인",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1031-2",
    "roadAddress": "경기도 수원시 권선구 경수대로370번길 16",
    "lng": 127.0245607,
    "lat": 37.25899644
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "수원정자시장점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 75-11",
    "roadAddress": "경기도 수원시 장안구 수성로 261",
    "lng": 127.000826,
    "lat": 37.29003018
  },
  {
    "shopName": "커피베이",
    "branchName": "곡반정동점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 539-8",
    "roadAddress": "경기도 수원시 권선구 동수원로146번길 283",
    "lng": 127.0296204,
    "lat": 37.24158386
  },
  {
    "shopName": "스타로드",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 465",
    "roadAddress": "경기도 수원시 팔달구 권광로 243",
    "lng": 127.0336921,
    "lat": 37.26782992
  },
  {
    "shopName": "퀸커피와타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 팔달구 신풍동 21",
    "roadAddress": "경기도 수원시 팔달구 화서문로 60",
    "lng": 127.0147003,
    "lat": 37.28552392
  },
  {
    "shopName": "태화신당",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1049-5",
    "roadAddress": "경기도 수원시 권선구 세권로195번길 10-16",
    "lng": 127.0266468,
    "lat": 37.2554543
  },
  {
    "shopName": "원유로커피광교",
    "branchName": "중앙역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1348",
    "roadAddress": "경기도 수원시 영통구 에듀타운로 102",
    "lng": 127.0460539,
    "lat": 37.28979961
  },
  {
    "shopName": "모로커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 743",
    "roadAddress": "경기도 수원시 팔달구 수성로244번길 25",
    "lng": 126.9999409,
    "lat": 37.28787812
  },
  {
    "shopName": "커피에반하다",
    "branchName": "수원시청역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1034-3",
    "roadAddress": "경기도 수원시 팔달구 경수대로466번길 52",
    "lng": 127.0298174,
    "lat": 37.26665384
  },
  {
    "shopName": "라우드커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 972-5",
    "roadAddress": "경기도 수원시 영통구 법조로149번길 173",
    "lng": 127.0704906,
    "lat": 37.2927784
  },
  {
    "shopName": "커스텀커피",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1078",
    "roadAddress": "경기도 수원시 권선구 서수원로577번길 341",
    "lng": 126.9370843,
    "lat": 37.2762831
  },
  {
    "shopName": "카페",
    "branchName": "마더스",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 416-9",
    "roadAddress": "경기도 수원시 장안구 율전로64번길 12-17",
    "lng": 126.9675563,
    "lat": 37.29494389
  },
  {
    "shopName": "카페다운",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 520-5",
    "roadAddress": "경기도 수원시 팔달구 월드컵로311번길 11-22",
    "lng": 127.0346472,
    "lat": 37.28485928
  },
  {
    "shopName": "정원",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 575-1",
    "roadAddress": "경기도 수원시 팔달구 아주로 37",
    "lng": 127.0435388,
    "lat": 37.27821835
  },
  {
    "shopName": "카페",
    "branchName": "캔버스서울경기지사",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1258-4",
    "roadAddress": "경기도 수원시 영통구 대학로 34",
    "lng": 127.0436335,
    "lat": 37.2992505
  },
  {
    "shopName": "모어브레드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 1016-1",
    "roadAddress": "경기도 수원시 영통구 법조로 25",
    "lng": 127.0598985,
    "lat": 37.28746843
  },
  {
    "shopName": "카페",
    "branchName": "더리치스",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1118-4",
    "roadAddress": "경기도 수원시 권선구 금곡로196번길 35",
    "lng": 126.9531607,
    "lat": 37.27324554
  },
  {
    "shopName": "아이캔커피",
    "branchName": "수원점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 833-28",
    "roadAddress": "경기도 수원시 영통구 매탄로160번길 15",
    "lng": 127.0461139,
    "lat": 37.26448849
  },
  {
    "shopName": "에버닌",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 장안동 322-3",
    "roadAddress": "경기도 수원시 팔달구 화서문로31번길 9-5",
    "lng": 127.0108343,
    "lat": 37.28536552
  },
  {
    "shopName": "김냥댕",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 167-11",
    "roadAddress": "경기도 수원시 영통구 권광로290번길 34-9",
    "lng": 127.0388196,
    "lat": 37.27335029
  },
  {
    "shopName": "도어온",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1331",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 107",
    "lng": 127.0481276,
    "lat": 37.29260066
  },
  {
    "shopName": "다니즈커피랩",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 오목천동 39-4",
    "roadAddress": "경기도 수원시 권선구 온정로 56",
    "lng": 126.9641001,
    "lat": 37.2508687
  },
  {
    "shopName": "도그앤도넛",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 720",
    "roadAddress": "경기도 수원시 영통구 덕영대로1484번길 21",
    "lng": 127.0545251,
    "lat": 37.24369565
  },
  {
    "shopName": "데이롱카페",
    "branchName": "수원매탄점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 176",
    "roadAddress": "경기도 수원시 영통구 권광로260번길 36",
    "lng": 127.041902,
    "lat": 37.27213177
  },
  {
    "shopName": "해피펫클럽",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 90-5",
    "roadAddress": "경기도 수원시 권선구 고현로25번길 30",
    "lng": 126.9855518,
    "lat": 37.24996411
  },
  {
    "shopName": "온앤오프",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 890-191",
    "roadAddress": "경기도 수원시 권선구 매송고색로721번길 26",
    "lng": 126.9828202,
    "lat": 37.25276109
  },
  {
    "shopName": "수원고양이호텔가토캣슬",
    "branchName": "영통점",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1045-5",
    "roadAddress": "경기도 수원시 영통구 청명로 69",
    "lng": 127.079464,
    "lat": 37.2533086
  },
  {
    "shopName": "카페베네",
    "branchName": "수원시연화장점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 하동 20",
    "roadAddress": "경기도 수원시 영통구 광교호수로 278",
    "lng": 127.0841603,
    "lat": 37.28997444
  },
  {
    "shopName": "텐퍼센트커피",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1085-3",
    "roadAddress": "경기도 수원시 권선구 금곡로 112",
    "lng": 126.9425974,
    "lat": 37.27392659
  },
  {
    "shopName": "카페",
    "branchName": "온화광교중앙역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1336",
    "roadAddress": "경기도 수원시 영통구 도청로18번길 26",
    "lng": 127.0568514,
    "lat": 37.28763342
  },
  {
    "shopName": "마이오븐북",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1083",
    "roadAddress": "경기도 수원시 권선구 금곡로102번길 30",
    "lng": 126.9411353,
    "lat": 37.27285024
  },
  {
    "shopName": "카페",
    "branchName": "스타보드",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 969-2",
    "roadAddress": "경기도 수원시 권선구 경수대로 361",
    "lng": 127.0228587,
    "lat": 37.25897339
  },
  {
    "shopName": "메가커피",
    "branchName": "수원오목천점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 오목천동 367-7",
    "roadAddress": "경기도 수원시 권선구 삼천병마로1597번길 6",
    "lng": 126.9633211,
    "lat": 37.24519404
  },
  {
    "shopName": "닥터스펫",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 팔달구 우만동 600",
    "roadAddress": "경기도 수원시 팔달구 권광로 373",
    "lng": 127.0362609,
    "lat": 37.28035798
  },
  {
    "shopName": "라망타로",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1170",
    "roadAddress": "경기도 수원시 영통구 매탄로 49",
    "lng": 127.0403737,
    "lat": 37.25572855
  },
  {
    "shopName": "타로앤톡",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 593",
    "roadAddress": "경기도 수원시 영통구 광교호수공원로 80",
    "lng": 127.0612619,
    "lat": 37.27303478
  },
  {
    "shopName": "원준우리사주조합",
    "branchName": "",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 1103",
    "roadAddress": "경기도 수원시 권선구 산업로 174-29",
    "lng": 126.9845843,
    "lat": 37.2414225
  },
  {
    "shopName": "예냥이",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 604",
    "roadAddress": "경기도 수원시 영통구 광교호수로 15",
    "lng": 127.0609302,
    "lat": 37.27068931
  },
  {
    "shopName": "느린마을멘토",
    "branchName": "수원점",
    "category": "사주카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로2가 27",
    "roadAddress": "경기도 수원시 팔달구 갓매산로 51",
    "lng": 127.0045434,
    "lat": 37.26894905
  },
  {
    "shopName": "디저트39",
    "branchName": "수원역점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 14-8",
    "roadAddress": "경기도 수원시 팔달구 향교로3번길 21",
    "lng": 127.001123,
    "lat": 37.26840662
  },
  {
    "shopName": "카페비쥬",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 975-9",
    "roadAddress": "경기도 수원시 권선구 덕영대로1126번길 54",
    "lng": 127.0129789,
    "lat": 37.24979944
  },
  {
    "shopName": "홀덤스타스튜디오",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 영통구 하동 987-1",
    "roadAddress": "경기도 수원시 영통구 광교중앙로 234",
    "lng": 127.0658126,
    "lat": 37.29166026
  },
  {
    "shopName": "왕호다방",
    "branchName": "화서점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 275-15",
    "roadAddress": "경기도 수원시 팔달구 수성로182번길 97-1",
    "lng": 126.9941527,
    "lat": 37.28299926
  },
  {
    "shopName": "사계절보드게임즈",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 매교동 161",
    "roadAddress": "경기도 수원시 팔달구 정조로 651",
    "lng": 127.0156451,
    "lat": 37.26666301
  },
  {
    "shopName": "카페",
    "branchName": "아이스하우스",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 512",
    "roadAddress": "경기도 수원시 권선구 효탑로16번길 20",
    "lng": 126.9770297,
    "lat": 37.26584004
  },
  {
    "shopName": "카페",
    "branchName": "오리네",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 천천동 475-12",
    "roadAddress": "경기도 수원시 장안구 하률로 41",
    "lng": 126.977596,
    "lat": 37.30315879
  },
  {
    "shopName": "푸룻앤타르트",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 207-4",
    "roadAddress": "경기도 수원시 장안구 덕영대로425번길 14-1",
    "lng": 126.9697873,
    "lat": 37.30172143
  },
  {
    "shopName": "요거트월드",
    "branchName": "영통점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 983-2",
    "roadAddress": "경기도 수원시 영통구 봉영로1482번길 7-1",
    "lng": 127.0659673,
    "lat": 37.24536337
  },
  {
    "shopName": "비트윈어스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1322-5",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 106",
    "lng": 127.0501447,
    "lat": 37.29273401
  },
  {
    "shopName": "열린문보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 503-1",
    "roadAddress": "경기도 수원시 권선구 덕영대로 1302",
    "lng": 127.0326163,
    "lat": 37.24615889
  },
  {
    "shopName": "도토리보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 957-6",
    "roadAddress": "경기도 수원시 영통구 청명로 132",
    "lng": 127.0741882,
    "lat": 37.25793513
  },
  {
    "shopName": "도넛벅헤드",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 520-4",
    "roadAddress": "경기도 수원시 권선구 동수원로146번길 151",
    "lng": 127.03411,
    "lat": 37.24393637
  },
  {
    "shopName": "다독다독",
    "branchName": "",
    "category": "애견카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1021-1",
    "roadAddress": "경기도 수원시 영통구 매영로 426",
    "lng": 127.0781927,
    "lat": 37.24847784
  },
  {
    "shopName": "컴포즈커피",
    "branchName": "수원삼성미래기술점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 560",
    "roadAddress": "경기도 수원시 영통구 삼성로 130",
    "lng": 127.0574429,
    "lat": 37.2546672
  },
  {
    "shopName": "요거트홈",
    "branchName": "망포점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 509-2",
    "roadAddress": "경기도 수원시 영통구 영통로154번길 116",
    "lng": 127.0628098,
    "lat": 37.24093206
  },
  {
    "shopName": "카페콕콕",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 팔달로1가 11-1",
    "roadAddress": "경기도 수원시 팔달구 정조로810번길 6",
    "lng": 127.0170464,
    "lat": 37.28029009
  },
  {
    "shopName": "천천동카페그린",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 천천동 509-8",
    "roadAddress": "경기도 수원시 장안구 덕영대로511번길 9",
    "lng": 126.9790775,
    "lat": 37.29870222
  },
  {
    "shopName": "브라운아토",
    "branchName": "장안점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 275-1",
    "roadAddress": "경기도 수원시 장안구 정조로934번길 22",
    "lng": 127.0139365,
    "lat": 37.29133857
  },
  {
    "shopName": "멍스타일",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 연무동 7-8",
    "roadAddress": "경기도 수원시 장안구 광교산로138번길 8",
    "lng": 127.030219,
    "lat": 37.29950177
  },
  {
    "shopName": "아원차",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1089-3",
    "roadAddress": "경기도 수원시 권선구 금곡로118번길 34-4",
    "lng": 126.9430538,
    "lat": 37.27273222
  },
  {
    "shopName": "가드니",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 남수동 11-129",
    "roadAddress": "경기도 수원시 팔달구 창룡대로 90-1",
    "lng": 127.0238568,
    "lat": 37.28645582
  },
  {
    "shopName": "쏠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1016-4",
    "roadAddress": "경기도 수원시 영통구 영일로 16-10",
    "lng": 127.0766214,
    "lat": 37.24884406
  },
  {
    "shopName": "우리카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 매향동 49",
    "roadAddress": "경기도 수원시 팔달구 창룡대로 21",
    "lng": 127.0189675,
    "lat": 37.28258578
  },
  {
    "shopName": "지트",
    "branchName": "카페아",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 506",
    "roadAddress": "경기도 수원시 권선구 구운로4번길 24",
    "lng": 126.9770676,
    "lat": 37.27804106
  },
  {
    "shopName": "포트캔커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1036-7",
    "roadAddress": "경기도 수원시 팔달구 인계로138번길 8",
    "lng": 127.0323988,
    "lat": 37.26669299
  },
  {
    "shopName": "하덴로스터리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 462",
    "roadAddress": "경기도 수원시 권선구 수성로 47",
    "lng": 126.9787553,
    "lat": 37.28331796
  },
  {
    "shopName": "과일주스와커피",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 팔달구 매산로1가 58-20",
    "roadAddress": "경기도 수원시 팔달구 매산로 2",
    "lng": 127.001868,
    "lat": 37.26663776
  },
  {
    "shopName": "빽다방",
    "branchName": "수원매탄위브점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 923-29",
    "roadAddress": "경기도 수원시 영통구 인계로220번길 10",
    "lng": 127.0412427,
    "lat": 37.26454826
  },
  {
    "shopName": "토스트카페마리",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1131-1",
    "roadAddress": "경기도 수원시 팔달구 효원로292번길 50",
    "lng": 127.0320027,
    "lat": 37.25976037
  },
  {
    "shopName": "카페공감",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1209",
    "roadAddress": "경기도 수원시 영통구 대학로 88",
    "lng": 127.0474334,
    "lat": 37.30293054
  },
  {
    "shopName": "롤33",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 947",
    "roadAddress": "경기도 수원시 장안구 이목로 24-25",
    "lng": 126.9863873,
    "lat": 37.30956901
  },
  {
    "shopName": "마틸다",
    "branchName": "수원시청점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 권선동 1042-16",
    "roadAddress": "경기도 수원시 권선구 권광로 89",
    "lng": 127.0293583,
    "lat": 37.25586403
  },
  {
    "shopName": "감성식혜",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 권선구 곡반정동 540-6",
    "roadAddress": "경기도 수원시 권선구 동수원로146번길 290-16",
    "lng": 127.0306714,
    "lat": 37.24135818
  },
  {
    "shopName": "르파티씨에벨지",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 하동 1016-1",
    "roadAddress": "경기도 수원시 영통구 법조로 25",
    "lng": 127.0598979,
    "lat": 37.28751348
  },
  {
    "shopName": "쉼터",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 743-80",
    "roadAddress": "경기도 수원시 팔달구 세지로 262",
    "lng": 127.0238434,
    "lat": 37.27439916
  },
  {
    "shopName": "더맛",
    "branchName": "나광교점",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 이의동 1330",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로 111",
    "lng": 127.0491655,
    "lat": 37.29257296
  },
  {
    "shopName": "온정",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 권선구 장지동 44-29",
    "roadAddress": "경기도 수원시 권선구 정조로 381",
    "lng": 127.0145717,
    "lat": 37.24347803
  },
  {
    "shopName": "마이요거트립",
    "branchName": "호매실점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1117-6",
    "roadAddress": "경기도 수원시 권선구 금곡로196번길 67",
    "lng": 126.9547762,
    "lat": 37.27383651
  },
  {
    "shopName": "카페",
    "branchName": "중보뜰",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 고색동 249",
    "roadAddress": "경기도 수원시 권선구 오목천로 276",
    "lng": 126.9903902,
    "lat": 37.24807714
  },
  {
    "shopName": "백",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 964-9",
    "roadAddress": "경기도 수원시 팔달구 경수대로507번길 19",
    "lng": 127.0269814,
    "lat": 37.27150546
  },
  {
    "shopName": "굼굼당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 1344-4",
    "roadAddress": "경기도 수원시 권선구 금곡로140번길 95-9",
    "lng": 126.9442716,
    "lat": 37.26949919
  },
  {
    "shopName": "그림제작소",
    "branchName": "수원행궁점",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 팔달구 신풍동 19-1",
    "roadAddress": "경기도 수원시 팔달구 화서문로 64",
    "lng": 127.0149364,
    "lat": 37.28557995
  },
  {
    "shopName": "니어스",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 신풍동 123-12",
    "roadAddress": "경기도 수원시 팔달구 신풍로23번길 59",
    "lng": 127.0117134,
    "lat": 37.28367882
  },
  {
    "shopName": "언포겟터블",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 32-16",
    "roadAddress": "경기도 수원시 권선구 상탑로53번길 37-5",
    "lng": 126.9762925,
    "lat": 37.27282609
  },
  {
    "shopName": "프룻팡",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 정자동 383",
    "roadAddress": "경기도 수원시 장안구 장안로217번길 14",
    "lng": 126.9934288,
    "lat": 37.30178971
  },
  {
    "shopName": "웨쉬웨쉬커피",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 팔달로2가 128-2",
    "roadAddress": "경기도 수원시 팔달구 정조로777번길 2",
    "lng": 127.0161224,
    "lat": 37.27764223
  },
  {
    "shopName": "메가엠지씨커피구운",
    "branchName": "일월점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 911-5",
    "roadAddress": "경기도 수원시 권선구 일월천로16번길 30",
    "lng": 126.9748737,
    "lat": 37.28349166
  },
  {
    "shopName": "이손코페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 연무동 187-45",
    "roadAddress": "경기도 수원시 장안구 수원천로414번길 16",
    "lng": 127.0201545,
    "lat": 37.28931771
  },
  {
    "shopName": "케이꾸",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 582-7",
    "roadAddress": "경기도 수원시 영통구 광교중앙로25번길 68",
    "lng": 127.0505413,
    "lat": 37.2764365
  },
  {
    "shopName": "카페온즈",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 1249-5",
    "roadAddress": "경기도 수원시 영통구 매탄로140번길 54-14",
    "lng": 127.0465402,
    "lat": 37.26197788
  },
  {
    "shopName": "빽다방",
    "branchName": "수원호매실칠보점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 호매실동 82-10",
    "roadAddress": "경기도 수원시 권선구 금호로 56",
    "lng": 126.9578566,
    "lat": 37.26959253
  },
  {
    "shopName": "카페",
    "branchName": "델루나보드",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 영통구 매탄동 398-10",
    "roadAddress": "경기도 수원시 영통구 삼성로 198",
    "lng": 127.0589735,
    "lat": 37.26031121
  },
  {
    "shopName": "카페스몰",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 송죽동 499-7",
    "roadAddress": "경기도 수원시 장안구 경수대로927번길 12-4",
    "lng": 127.0082543,
    "lat": 37.30149136
  },
  {
    "shopName": "동성마작관",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 340-9",
    "roadAddress": "경기도 수원시 장안구 정조로933번길 22",
    "lng": 127.0113996,
    "lat": 37.29042533
  },
  {
    "shopName": "프라다보드게임",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1254",
    "roadAddress": "경기도 수원시 영통구 대학3로 7",
    "lng": 127.0419806,
    "lat": 37.29973273
  },
  {
    "shopName": "카페원천",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 250-9",
    "roadAddress": "경기도 수원시 영통구 삼성로267번길 2",
    "lng": 127.063041,
    "lat": 37.26595728
  },
  {
    "shopName": "공차",
    "branchName": "수원태장점",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 망포동 569-3",
    "roadAddress": "경기도 수원시 영통구 영통로 107",
    "lng": 127.0576441,
    "lat": 37.23761108
  },
  {
    "shopName": "카페",
    "branchName": "아에광교점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1325-3",
    "roadAddress": "경기도 수원시 영통구 센트럴타운로100번길 8",
    "lng": 127.0508039,
    "lat": 37.29233381
  },
  {
    "shopName": "혜성모카",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 교동 11-44",
    "roadAddress": "경기도 수원시 팔달구 향교로 141",
    "lng": 127.0148796,
    "lat": 37.2734959
  },
  {
    "shopName": "와이블랙",
    "branchName": "오목천점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 오목천동 472-30",
    "roadAddress": "경기도 수원시 권선구 삼천병마로 1588",
    "lng": 126.9637297,
    "lat": 37.24416136
  },
  {
    "shopName": "공차",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 영통구 이의동 1240",
    "roadAddress": "경기도 수원시 영통구 광교로 191",
    "lng": 127.0469413,
    "lat": 37.29633964
  },
  {
    "shopName": "미로당",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 868-32",
    "roadAddress": "경기도 수원시 권선구 세권로101번길 20",
    "lng": 127.0159632,
    "lat": 37.258682
  },
  {
    "shopName": "탑홀덤",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 818-1",
    "roadAddress": "경기도 수원시 권선구 하탑로 1",
    "lng": 126.971909,
    "lat": 37.26848092
  },
  {
    "shopName": "심야카페",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 원천동 209-67",
    "roadAddress": "경기도 수원시 영통구 동탄원천로1109번길 10",
    "lng": 127.0579605,
    "lat": 37.26923298
  },
  {
    "shopName": "카페냠냠",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1352",
    "roadAddress": "경기도 수원시 영통구 에듀타운로 101",
    "lng": 127.0449493,
    "lat": 37.28974565
  },
  {
    "shopName": "메가엠지씨커피",
    "branchName": "경희대국제캠퍼스점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 영통동 1024-10",
    "roadAddress": "경기도 수원시 영통구 덕영대로 1705",
    "lng": 127.0778383,
    "lat": 37.24796146
  },
  {
    "shopName": "공차",
    "branchName": "화서사거리점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 팔달구 화서동 71-51",
    "roadAddress": "경기도 수원시 팔달구 동말로 81",
    "lng": 127.0031263,
    "lat": 37.2789482
  },
  {
    "shopName": "올인홀덤펍",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 장안구 파장동 572-40",
    "roadAddress": "경기도 수원시 장안구 파장로 88",
    "lng": 126.9916791,
    "lat": 37.30695603
  },
  {
    "shopName": "중국동포게임방",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 고등동 55-10",
    "roadAddress": "경기도 수원시 팔달구 고등로 69",
    "lng": 127.0046296,
    "lat": 37.27353631
  },
  {
    "shopName": "팟팟팟보드게임장",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1035-12",
    "roadAddress": "경기도 수원시 팔달구 경수대로466번길 43",
    "lng": 127.0296411,
    "lat": 37.26721108
  },
  {
    "shopName": "해피그",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 이의동 1352",
    "roadAddress": "경기도 수원시 영통구 에듀타운로 101",
    "lng": 127.0457566,
    "lat": 37.28922953
  },
  {
    "shopName": "고은사랑방",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 장안구 정자동 872-2",
    "roadAddress": "경기도 수원시 장안구 대평로90번길 19",
    "lng": 126.9937504,
    "lat": 37.29712484
  },
  {
    "shopName": "장안건강카페샘",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 조원동 888",
    "roadAddress": "경기도 수원시 장안구 송원로 101",
    "lng": 127.0103073,
    "lat": 37.30406763
  },
  {
    "shopName": "판사티로스",
    "branchName": "장안점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 영화동 424-7",
    "roadAddress": "경기도 수원시 장안구 장안로7번길 44",
    "lng": 127.0047117,
    "lat": 37.28699923
  },
  {
    "shopName": "메가후르츠",
    "branchName": "수원성균관대점",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 장안구 율전동 408-8",
    "roadAddress": "경기도 수원시 장안구 서부로2105번길 13",
    "lng": 126.9693392,
    "lat": 37.29653632
  },
  {
    "shopName": "카페",
    "branchName": "쓰리몽키즈",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 입북동 188-10",
    "roadAddress": "경기도 수원시 권선구 율전로63번길 5-10",
    "lng": 126.9654858,
    "lat": 37.29624138
  },
  {
    "shopName": "자연공작소",
    "branchName": "",
    "category": "전통찻집",
    "jibunAddress": "경기도 수원시 권선구 당수동 273-3",
    "roadAddress": "경기도 수원시 권선구 당진로15번길 56",
    "lng": 126.938971,
    "lat": 37.29208696
  },
  {
    "shopName": "투썸플레이스",
    "branchName": "수원성균관대점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 장안구 율전동 408-8",
    "roadAddress": "경기도 수원시 장안구 서부로2105번길 13",
    "lng": 126.9693392,
    "lat": 37.29653632
  },
  {
    "shopName": "영웅문",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1024-5",
    "roadAddress": "경기도 수원시 팔달구 인계로108번길 44",
    "lng": 127.0285868,
    "lat": 37.26590486
  },
  {
    "shopName": "꾸어봄",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 영통구 망포동 800",
    "roadAddress": "경기도 수원시 영통구 영통로89번길 83",
    "lng": 127.0541229,
    "lat": 37.23349203
  },
  {
    "shopName": "메가엠지씨커피수원",
    "branchName": "센트럴점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 세류동 1277-2",
    "roadAddress": "경기도 수원시 권선구 세류로 32",
    "lng": 127.007275,
    "lat": 37.26184438
  },
  {
    "shopName": "엑스홀덤",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 권선구 탑동 789-10",
    "roadAddress": "경기도 수원시 권선구 탑동로 38",
    "lng": 126.9745974,
    "lat": 37.27227077
  },
  {
    "shopName": "메타포커",
    "branchName": "",
    "category": "보드카페",
    "jibunAddress": "경기도 수원시 팔달구 인계동 1024-1",
    "roadAddress": "경기도 수원시 팔달구 인계로94번길 39-10",
    "lng": 127.0276824,
    "lat": 37.26609568
  },
  {
    "shopName": "그릭박스",
    "branchName": "구운점",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 구운동 519-11",
    "roadAddress": "경기도 수원시 권선구 구운로45번길 5",
    "lng": 126.9733086,
    "lat": 37.27750391
  },
  {
    "shopName": "카페엘림",
    "branchName": "",
    "category": "일반카페",
    "jibunAddress": "경기도 수원시 권선구 금곡동 1136-1",
    "roadAddress": "경기도 수원시 권선구 금호로 73-17",
    "lng": 126.9583283,
    "lat": 37.27136281
  }
]
// module.exports  = data
exports.data = data


