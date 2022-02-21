sass사용법

Sass 중 한구문 scss -> 전처일러 + compile -> 브라우저가 이해할수있는 css파일로 빌드

(타입스크리트랑 비슷한 원리)

1. vscode extend live-sass-compiler
2. 명령행 인터페이스 (터미널)
   - node 설치
   - npm i -g sass (글로벌)
   - 터미널 폴더경로주의 (style폴더에있는 main.scss를 컴파일 : 컴파일명)
   - sass --watch(유지함) --style compressed(압축) style/main.scss:style/main.css
