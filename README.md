# docs.realgrid.com

- reactjs, nextjs, nextrajs on vercel

## 참여 방법

### 저장소 클론

```sh
git clone https://github.com/realgrid/realgrid-docs.git
code reakgrid-docs
```

### 설치

```sh
yarn
```

### 개발

```sh
yarn dev
```

- guide예제를 로컬에서 실행중이라면

```sh
yarn dev:local
```

### 빌드

```sh
yarn build
```

- guide예제를 로컬에서 실행중이라면

```sh
yarn build:local
```


### 배포

- 저장소의 docs 브랜치에 commit 하면 자동배포
- 배포 담당자 vercel에 계정 필요

### 유틸리티

- 여러개 파일의 이름 바꾸기
- windows에서 되는지 확인 불가

**예:**

- md 파일을 mdx 파일로 일괄 변환 (파일명 바꾸기)

```sh
for file in pages/refs/**/*.md; do
  mv -- "$file" "${file%.md}.ko.mdx"
done
```

- kr.mdx 파일을 en.mdx 파일로 복사

```sh
for file in pages/faqs/**/*.ko.mdx; do
  cp -- "$file" "${file%.ko.mdx}.en.mdx"
done
```

## 문서 작업

- 디렉토리 및 파일의 이름은 목차와 별개로 할 수 있기 때문에 기존의 이름을 가능한 유지한다.
- 유지하는 이유는 samples로 이동한 문서내의 데모 페이지의 경로가 기존의 경로를 그대로 유지해서 만들었기 때문
- 앞으로 추가되는 문서 파일의 경로도 비슷한 방법으로 처리하면 될것 같다.

### 다국어지원

- 다국어를 지원하기 위한 설정 파일은 아래와 같다.
  - /theme.config.tsx
  - /next.config.js
  - 위 설정 파일에 언어 코드를 추가하고 문서 파일(~.mdx) 또는 목차 파일(_meta~.json)을 만들때 그 언어 코드를 이용해서 이름을 만들어 준다.

## 샘플 코드

- 문서내 예시를 보여주기 위한 샘플 코드는 https://github.com/realgrid/samples/realgrid2/docs 디렉토리에 있다.
- 샘플 코드에 사용되는 그리드, 피봇등 라이브러리는 오프라인에서도 동작 할수 있게 samples 내부에 배치
- [여기](https://github.com/realgrid/samples/archive/refs/heads/gh-pages.zip)서 다운로드 할 수 있다.

## API 문서 변환

- api-extractor 를 이용해 모델 파일 docs/realgrid.api.json 생성
- api-documenter(docs/rushstack/api-documenter) 를 이용해 mdx 파일 생성

### api-documenter 커스텀

- md 파일만 생성하는 해당 모듈을 mdx에 맞게 변환하기 위해 [folk](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository)
- 해당 패키지는 packages/api-document 밑에 위치시키고 api-extrator 등은 의존 한다.
- 문서 배포 전에 미리 api-mdx를 모두 만들고 번역본도 만들어 배포하면 실시간 빌드할 필요는 없을것.
- 가능하면 변경된 api 만 다시 만들도록 라이브러리 수정 필요.

### 빌드 오류

- 대부분 빌드 오류는 mdx를 랜더링 하는 과정에서 사용하면 안되는 문자열 등의 사용으로 인해 발생한다.
- 해결을 위해 property, method, event 페이지는 상위 클래스 또는 인터페이스 페이지에 병합하는 형태로 페이지 수를 줄인다.

### realgrid api 문서 이슈
- RealGrid package 제거?
- Class, Interface: 각 파일 Type, Var
- 영문 문서 파일 생성
- 변경된 문서만 재 생성
- 기존 문서에서의 링크 수정

## 문서 배포 프로세스

### 리얼그리드 새로운 버전이 배포 된 경우

- `npm run extract`를 실행한다.
- `npm run dev`명령으로 로컬 실행할 수 있다.
- `npm run build` 명령으로 빌드오류를 점검 한다.
-  커밋한다.

### 가이드를 추가하는 경우

- docs/pages 에 가이드 문서를 한글/영문 세트로 작성한다.
- `npm run dev` 명령으로 로컬 실행 할 수 있다.
- `npm run build` 명령으로 빌드오류를 점검 한다.
- 커밋한다.
