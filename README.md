# Cafe log(카페 로그)
안녕하세요 카페로그 개발한 항해99 13기 10조 입니다.

<img src="https://velog.velcdn.com/images/clue97/post/cb5cdb33-c8b2-466c-a98d-cd475a708a2f/image.png"/>

## 프로젝트 소개
Cafe Log는 지역과 범위에 따라 가맹점 카페들을 소개하고,

유저는 피드를 남기며 카페 정보를 공유하고,

나의 즐겨찾기를 커스텀 폴더에 저장 하는 서비스입니다.

## 배포 사이트
[사이트 이동하기](http://yongminbucket.s3-website.ap-northeast-2.amazonaws.com/)

## 주요 기능

1. 메인페이지 : 내 근처 카페들 썸네일/간단한 정보 리스팅, 위치기반 주변 카페 플로팅(네이버 맵)
2. 로그인페이지 : 카카오톡 소셜 로그인, 어드민(관리자) 로그인
3. 피드페이지 :  피드 작성, 조회, 삭제
4. 마이페이지 : 내가 작성한 피드 관리, 삭제, 닉네임 변경
5. 피드 댓글 기능 : 해당 피드의 댓글 조회, 작성, 삭제
6. 스크랩 기능 : 해당 카페 즐겨 찾기에 추가
7. 라이크 기능 : 해당 피드의 좋아요 기능
8. 즐겨찾기 기능 : 내가 스크랩한 가게들을 폴더들을 만들어서 나만의 즐겨찾기 커스텀 마이징

## 주요 기술 스텍
<div float: left;>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"> 
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  
  <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
  <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-%23232F3E.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img src="https://img.shields.io/badge/EC2-%23FF9900.svg?style=for-the-badge&logo=AmazonEC2&logoColor=white"/>
</div>


## 시스템 아키텍쳐
<img src="https://user-images.githubusercontent.com/121918099/236741003-328d14e6-c36b-4a1c-86fa-780a12a33163.png"/>

## 기술적 의사 결정
| 요구 사항 | 사용한 기술스택 | 핵심 기술을 선택한 이유 및 근거 |
| :--- | --- | --- |
| 카카오톡 소셜 로그인 |passport, passport-kakao|일반적인 회원가입 하기에는 귀찮기에 대중적으로 많이 사용하는 카카오톡 소셜 로그인을 사용해서 회원가입 생략하고 바로 로그인 쉽게 할 수 있게 하였다.|
| 데이터 관리 |MYSQL, Sequelize|각 테이블마다 데이터의 일관성과 무결성을 보장하고, 유연한 데이터 구조를 유지하며, 쿼리의 성능을 최적화하고, Sequelize ORM의 사용으로 데이터베이스 조작을 더욱 편리하게 할 수 있어 사용하였다. 또한 각각의 테이블마다 정의를 내리고, 테이블이랑 연관 관계가 명확해야 할 필요가 있기에 NoSQL의 MongoDB 보다는 RDBMS인 MySQL을 사용하였다.|
| 토큰&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |jsonwebtoken, cookie-parser|웹 어플리케이션에서 사용자 인증 정보를 안전하게 전달하고 관리하는데 사용하였다. 또한 보안성과 확장성을 보장하며, 편의성과 대중성도 확보할 수 있었기 때문에 사용하였고, 사용하는데 그렇게 어렵지도 않아서 토큰들을 관리하는데 용이했다.|
| 거리 계산 |haversine|현재 위치에서 카페 거리를 계산할때 직접 계산하면 코드가 매우 복잡하지만 해당 라이브러리를 사용해서 두 좌표의 거리 계산을 쉽게 구할 수 있었다.|
| 사진 저장 |multer|피드에서 사진들을 저장하기 위한 파일들을 만들어서 사진들을 저장을 하였고, 다른 라이브러리에 비해 쉬운 사용법과 Express와 함께 사용할 때 더욱 간편하게 파일 업로드를 처리할 수 있었다.|

## 트러블 슈팅
<details>
<summary>맛집 데이터 수집 관련</summary>

- 나타난 문제) 위도,경도(GPS)를 사용해서 유저 위치기반으로 shop 정보들을 뿌려줘야하는데, 그러려면 많은 데이터가 필요. 데이터 크롤링이 가능한지, 이를 우리 데이터로 가공할 수 있는지 확인이 필요

- 해결방안) 크롤링은 요즘 막혀있는 사이트가 점점 늘어나고 있고 설령 가능하더라도 한 페이지에 많아도 몇십개만 넣을 수 있기에 수천개를 넣는거에는 어려움이 많았다. 그래서 우리가 해결 한 방안은 공공데이터포털에서 엑셀로 다운을 받아서 업체들 중에서 서울과 수원 지역들을 필터링 해서 , 주소, 위도, 경도 등 데이터를 수집하였고 이것을  JSON(data.json 파일) 파일로 변환 후 route폴더 안에 있는 temp.js 파일 안에서 데이터베이스에 넣는 작업으로 해결 (4월 11일 해결)

(단, 가게 내 메뉴명, 카테고리, 메뉴의 가격, 전화번호, 영업시간 등등은 공공데이터에는 없어서 우리가 정한 임의의 기준을 잡아서 넣는 것으로 대체)

</details>
<details>
<summary>네이버, 카카오 소셜 로그인 및 토큰 문제</summary>

- 나타난 문제) 카카오,네이버 api를 가져와서 로그인을 백에서는 구현 완료 되었다.  그러나 로그인 구현을 프론트에서 담당하고 인자토큰을 넘겨 받아 구현하는 과정에서  오류가 발생 (4월 3일 문제 추가)
	
- 원인) 문제는 크게 2가지 존재
1. 클라이언트 id,url을 프론트로 설정 (하나의 어플리캐이션의 ID,URL을 사용 했어야 했는데 프론트id 백  rul을 사용했었다) 
2. 프론트 어플리캐이션 보안설정 (어플리캐이션에 보안설정이 되어있을 경우 시크릿 값을 추가로 보내야 했었다)
    
- 해결) 넘겨받은 값이 인자코드가 아니라 접근 코드를 받았다 (4월 8일 해결)

(최종적으로는 카카오톡 소셜 로그인만 구현 → 굳이 소셜로그인 2개 쓸 필요가 없었고, 네이버 소셜 로그인은 카카오톡보다 보안이 엄격해서 최종적으로 제외함)

</details>
<details>
<summary>메인페이지, 상세페이지 isScrap 관련</summary>

- 나타난 문제) 현재 메인페이지와 상세페이지는 로그인 없이도 이용 할 수 있게 구현하였는데, 해당 카페에 스크랩을 했는지 안했는지를 기능을 추가하게 되면서 로그인 필수 기능이 되어버려,  메인페이지, 상세페이지 마저도 로그인 이용자만 할 수 있게 되는 문제점을 발견하였다. (4월 14일 문제 추가)
    
- 해결방안) 기존 소셜 로그인 미들웨어(snsAuthmiddleware)에서 같은 파일을 하나 더 복사해서, 토큰 유무 체크하는 에러핸들링만 제거한 미들웨어(snsMiddleware)를 하나 더 만든 다음, 기존 shop.route에서 로그인 유무 따지지 않는 미들웨어를 사용하고, shop.controller에서도 if….else문을 사용해서 로그인 했을때는 scrap를 확인해서 있으면 true, 없으면 false로 출력하게 하였고, 비로그인이면 전부 false로 고정을 하는 것으로 해결하였다. (4월 17일 해결)

</details>
<details>
<summary>메인페이지를 전체 조회 할 때 리스폰 시간이 지나치게 오래 걸리는 현상</summary>

- 나타난 문제) 로컬 테스트 했을 때에는 맛집 데이터가 2 ~ 30개 밖에 없던 시절에는 걸려도 0.5초 밖에 안되었는데  맛집 데이터를 3천개 넣고 전체 조회 돌리면 4 ~ 50초 넘게 걸리는 현상을 발견하였다. (4월 17일 문제 추가)

<img src="https://file.notion.so/f/s/beb9f5f6-7ec9-4b62-a9f8-4743654643ea/Untitled.png?id=5e759c20-6eb9-44f7-a421-200e06e1dd54&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683615898901&signature=Fn2cbnl_UpfPAJUZqOH3KwD5IVYZZiqU0mJ8p5uVMxk&downloadName=Untitled.png"/>

- 원인) findAll으로 맛집 고유번호(ShopId) 하나하나마다 쿼리를 3천번이 넘게 실행되서 4~50초 넘게 걸리는 현상을 발견하였다. 

<img src="https://file.notion.so/f/s/c5682b09-1fb0-4f0d-99bb-51da9daaca82/Untitled.png?id=14bb6c9f-0a5c-4063-8f9e-3a2178e3c5f8&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683616038420&signature=GLDWtBFyagdJCAaEbtwwB0i-sxRa_A_cO2zxNzIfuvM&downloadName=Untitled.png"/>

- 해결방안) 해당 맛집마다 feedCount와 isScrap 유무를 확인하기 때문에 카페 하나하나마다 for문으로 다 돌렸고 그 안에 mysql 조건문을 사용했기 때문에 그래서 쿼리가 3천개가 나와서 오래 걸렸고, respone에 해당되지 않는 카페들도 모두 쿼리를 실행을 하였다. 그래서 isScrap과 feedCount 데이터 가공하는 것은 우선적으로 제외 한 후 기존 데이터들은 그대로 먼저 출력을 하였다. 그 다음에 조건에 맞는 것들만 변수 cn으로 선언해 length 길이만큼만 쿼리가 실행 할 수 있게 하였고, 또 다른 result2 변수를 만들어서 거기서 feedCount와 isScrap를 출력하는 방법으로 구현을 하였다. 그 결과 조건에 맞는 맛집만 쿼리가 실행하게 바뀌었고, 덕분에 시간도 4~50초 걸리는 부분을 0.3~5초 정도로 대폭 단축하였다. (4월 18일 해결)

<img src="https://file.notion.so/f/s/bae28af0-a438-4579-96a2-ebdebf8603cd/Untitled.png?id=a168b2a8-29ce-431f-be90-89a8d3b00e68&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683616059533&signature=0VbvggGmmOzKSRNfkkMmJFhtbMINLTYfS3099wx8768&downloadName=Untitled.png"/>

</details>
<details>
<summary>피드 작성 부분 백엔드에서는 잘 되었으나. 프론트엔드에서 값이 안 불려지는 현상</summary>

- 나타난 문제) 백엔드에서는 postman으로 form-data로 작성이 잘 되는 것을 확인하였고 해당 부분을 ec2로 배포를 하였지만, 프론트에서는 피드 작성 부분에서 feedPic 값이 불려지지 않는 현상이 발생 (4월 19일 문제 추가)

- 해결 방안) 지금까지 사진을 담기 위한 multer 라이브러리를 사용하였는데,  여러 사진을 업로드 하는 함수인 upload.fields를 사용하고 있었다. 근데 어쩌피 사진은 1장만 구현 하면 되었는데 나중에 feed.route파일에서 upload.slngle로 바꾸고 피드 컨트롤러 계층에서도 req.files에서 req.file로 바꾸니까 비로소 값이 받아지는 것을 확인하였다. 프론트에서는 사진이 어쩌피 한장이라 배열이 아닌 string으로 구현을 했어서 값이 불러지지 않았던 것으로 추정된다. 만약  upload.fields로 한다면 사진이 여러 장 이다 보니까 프론트에서 값 받아오는 방식을 배열 형식으로 구현하면 되지 않을까 생각한다. 일단은 우리쪽에서  upload.slngle로 바꾸는 것으로 해결하였다.  (4월 20일 해결)

```js
    //변경 전
    router.post("/shop/:shopId/feed",authMiddle, upload.fields([{ name: 'feedPic', maxCount: 1 }]), feedController.postFeed2);
    //변경 후
    router.post("/shop/:shopId/feed",authMiddle, upload.single('feedPic'), feedController.postFeed);
```

</details>
<details>
<summary>Folder 와 List ,Scarap 간의 관계</summary>

- 나타난 문제) scrap을 이용해 list를 찾지 못하는 현상 (4월 24일 문제 추가)
  <details>
  <summary>시도해본 erd 설계</summary>
  <img src="https://file.notion.so/f/s/25e79feb-02a4-46ac-a189-93d90c958b39/drawSQL--export-2023-04-24.png?id=2d5160cb-beaf-49ac-a6bc-e7f42d1b416b&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683616900557&signature=MQYHRMLN5Av2jOQJjbTQSkAWsUSrHFmk5hWB2Bmhrns&downloadName=drawSQL--export-2023-04-24.png"/>
  <img src="https://file.notion.so/f/s/a9b38f1e-7a91-4fb0-828a-403bb4d36fac/drawSQL--export-2023-04-25.png?id=028a26fb-31fd-410e-aa82-c546ca687628&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683616962925&signature=jU-wsuziobHeIMvSjnp2-ry3HQ_qy8dB0z9FHqh9TUo&downloadName=drawSQL--export-2023-04-25.png"/>
  <img src="https://file.notion.so/f/s/4b78961f-f804-437e-9c14-2489f6feaffc/erd1.jpg?id=55e488a6-11d3-4962-aa38-29c90d53654f&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683616798235&signature=tDPgyJ7WB3qy1i7xCBgVfOTJvBlrsdFq1c8nZJcAOj0&downloadName=erd1.jpg"/>
  </details>

- 해결방안) list는 folderId와 ScarpId를 가져서 1:n 관계를 형성하였고 userId를 통해 list값을 찾아오는 방식으로 구현 (4월 27일 해결)

<img src="https://file.notion.so/f/s/81a652cb-e1ec-46c6-9c01-dafdc87cf2fd/%EC%99%84%EC%84%B1%EB%90%9C_erd.jpg?id=8247ebae-dc74-4d1e-ad22-64b6884c23b0&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1683616626757&signature=gMC0WnPbHpBb8n74jViVFR6c_T_nsqTKPQb0kgMGLfc&downloadName=%EC%99%84%EC%84%B1%EB%90%9C+erd.jpg"/>
</details>

## ERD
<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa88cb49f-dbec-4e0e-b3cc-aeaf9f892fc1%2FdrawSQL--export-2023-05-05_(1).png?id=d0f7ec1b-68c1-410d-82cd-d5564f30fb06&table=block&spaceId=260f887b-8556-40ce-a271-f96b57122ce0&width=2000&userId=590d24df-8177-46bb-a06f-834b55fe5afd&cache=v2"/>

## API 명세서
[API 명세서 이동](https://www.notion.so/bb4ae82cea364e9ab9ac97cb39f099fa?v=19d62894b34c46cc99ee7311e782da6c)

## 팀원
|이름|역할|주특기|
|------|---|---|
|김용민|팀장|REACT|
|이주희|팀원|REACT|
|송종호|부팀장|NODE.JS|
|박찬웅|팀원|NODE.JS|
|김진아|팀원|디자이너|

## 커밋 메세지 유형 지정

- `FEAT` : 새로운 기능의 추가
- `FIX` : 버그 수정
- `DOCS` : 문서 수정
- `STYLE` : 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- `REFACTOR` : 코드 리펙토링
- `TEST` : 테스트 코트, 리펙토링 테스트 코드 추가
- `CHORE` : 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

## 개발 기간
- 전체 : 2023.3.31 ~ 5.12(6주)

- 개발 : 2023.3.31 ~ 5.4

- UT : 2023.5.4 ~ 5.8

- 발표준비 : 2023.5.8 ~ 5.12
