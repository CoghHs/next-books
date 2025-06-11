# 📚 Next.js 베스트셀러 책 정보 사이트

> **뉴욕타임즈 베스트셀러 목록을 한눈에 확인하고, Amazon 구매 페이지로 이동할 수 있는 간단한 책 탐색 웹앱입니다.**  
> Next.js 14 기반으로, 카테고리별 도서를 한눈에 볼 수 있도록 구성했습니다.

---

## 🎯 프로젝트 목적

- 뉴욕타임즈 API를 활용해 실시간 베스트셀러 정보를 불러옵니다.
- 카테고리별로 책 리스트를 제공하며, 각 도서는 **Amazon 구매 링크**로 연결됩니다.
- 불필요한 기능 없이 **간결한 UI와 깔끔한 구성**을 목표로 제작되었습니다.

---

## ⚙️ 사용 기술 스택

| 분야         | 기술                           |
|--------------|--------------------------------|
| **Framework**| Next.js 14 (App Router)        |
| **Language** | TypeScript                     |
| **Styling**  | CSS Modules                    |
| **API**      | The New York Times Books API   |
| **Deploy**   | Vercel                         |

---

## 📌 주요 기능

- 📚 **카테고리별 베스트셀러 도서 목록 제공**
- 🔗 **도서별 Amazon 구매 링크 연결**
- 🧭 **간결하고 명확한 탐색 흐름**
- 📱 **반응형 지원 (CSS Modules 활용)**

---

## 📸 미리보기

| 홈 화면 | 책 리스트 |
|---------|-----------|
| ![홈]<img width="1470" alt="홈" src="https://github.com/user-attachments/assets/bb40c6bd-e07a-40ec-8375-0910ee923506" /> | ![디테일]<img width="1470" alt="디테일" src="https://github.com/user-attachments/assets/fd45c7e8-c435-4d31-a299-be26539e7ed5" /> |

---

## 🧪 실행 방법 (개발용)

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드 후 실행
npm run build
npm run start
