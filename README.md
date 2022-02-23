**⭐responsive web**

반응형 웹이란,  
기기나 브라우저의 크기에 맞게 구성이나 크기를 변경해가며 반응하는 웹문서 또는 이를 위해 사용하는 기법을 뜻한다.  
반응형 웹사이트에서 가장 핵심키워드는 '가변성'이다.  
기기에 따라 다른 화면크기에 대응하기 위해, 웹문서에 viewport속성에 대한 마크업을 추가해야한다.

- **em과 rem**

px은 가변성이 없다.

em은 부모 요소의 글꼴 크기를,  
rem은 루트 요소의 글꼴 크기를 의미

em으로 padding과 margin를 정할때는  
자기 자신의 글자 크기를 기준⭐

- **뷰포트 단위 vw vh vmin vmax**

em과 rem은 가변성을 지니고 있지만,  
브라우저나 기기 화면에 크기에 따라 달라지는 단위는 아니다.

화면크기(뷰포트)에 맞춰 반응하는 단위

```css
font-size: 1vw; /*뷰포트 너비의 100분 1 */
font-size: 1vh; /*뷰포트 높이의 100분 1 */

font-size: 1vmin; /*뷰포트 높이와 너비 중 작은 쪽의 100분의 1 */
font-size: 1vh; /*뷰포트 높이와 너비 중 큰 쪽의 100분의 1 */
```

- **가변 레이아웃 (가변 그리드) %**

비율에 기반한 크기 조절  
em을 이용해 상대적인 크기의 폰트를 적용할 때처럼, 레이아웃에도 비율에 기반한 개념을 적용.  
부모 요소의 크기에 비례해 자식 요소의 크기가 변하는방식은 가변 레이아웃을 만들때 사용된다.

부모 요소와의 상대적 크기를 지정할때 사용.

```css
font-size: 50%; /*부모 요소의 글자크기에 비례 */
height: 50%; /*부모 요소의 높이에 비례 */
width: 50%; /*부모 요소의 넓이(width)에 비례 */
margin: 10%; /*⭐부모 요소의 넓이(width)에 비례 */
padding: 10%; /*⭐부모 요소의 넓이(width)에 비례 */
```

- **CSS 함수 개념과 calc()**  
  함수란 주어진 인수에 따라 정해지는 값을 일컫는 표현.  
  calc()를 이용하면 계산식의 결과를 속성값으로 지정할 수 있다.

  ```css
  .message_text {
    width: calc(100% - 100px);
    height: 100%;
  }
  ```

- **미디어 쿼리**

```css
@media 미디어_타입 and (조건에_대한_물음) {
  /* 
  미디어 타입과 조건을
  모두 만족할 때 덮어씌울(추가적용)
  스타일 선언문
  */
}
```

```css
@media screen and (max-width: 768px) {
  /*  
  화면(screen)의 너비가 768px 이하일 경우에
  여기에 정의된 스타일 선언문을
  추가 적용!
  */
}
```

- **가변 이미지**

  - 이미지 요소에도 상대 단위 em, vw, % 사용
  - 브라우저에서 이미지는 기본적으로 비율을 유지한다.
  - 이미지가 커지면 품질이 떨어질수있다.
  - max-width 속성은 최대 너비 제한
  - picture와 srcset요소는 이미지를 미디어 조건에 맞게 선택적으로 불러올수있다

  ```css
  img {
    width: 100%;
    max-width: 640px;
  }
  ```

  ```html
  <div width="50%">
    <img max-width="100%" src="imgs/1.png" />
  </div>
  ```

- **가변 동영상**

- **모듈화된 디자인**  
  모듈화란? 개별 컴포넌트를 하나의 조립 부품(모듈)으로 보고 작업하는것!

**⭐sass**

Sass 중 한구문 scss -> 전처일러 + compile -> 브라우저가 이해할수있는 css파일로 빌드

(타입스크리트랑 비슷한 원리)

1. vscode extend live-sass-compiler
2. 명령행 인터페이스 (터미널)
   - node 설치
   - npm i -g sass (글로벌)
   - 터미널 폴더경로주의 (style폴더에있는 main.scss를 컴파일 : 컴파일명)
   - sass --watch(라이브) --style compressed(압축) style/main.scss:style/main.css

```scss
/* nesting */
/* 선택자를 서로 다른 선언문에서 계속 반복해 쓰지 않고 nesting */
div {
  p {
    span {
    }
  }
}
```

🔽css로 컴파일

```css
/* css */
div {
}
/* div 모든자식 p */
div p {
}
/* div 바로밑자식 p */
div > p {
}

div p span {
}
```

단축 속성 중첩

```scss
p {
  font: {
    family: sans-serif;
    size: 1em;
    style: normal;
    weight: 900;
  }
}
```

&기호로 상위 선택자 참조하기

$기호로 변수만들기

믹스인을 사용하여 재사용할 스타일 그룹 정의

```scss
@mixin my-font {
  font-family: sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 900;
  color: orange;
}
```

@include 를 사용하여 해당 믹스인을 호출

```scss
h1 {
  @include my-font;
}
```

sass의 믹스인은 정의 시에 인자를 취할 수 있다.

```scss
@mixin my-font($font-color) {
  font-size: 18px;
  font-weight: 900;
  color: $font-color;
}
```

```scss
h1 {
  @include my-font(red);
}

p {
  @include my-font(blue);
}
```

믹스인 인자 기본값

```scss
@mixin my-font($font-color, $bg-color: yellow) {
  font-size: 18px;
  font-weight: 900;
  color: $font-color;
  background-color: $bg-color;
}
```
