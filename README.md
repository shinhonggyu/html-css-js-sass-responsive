**sass사용법**

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

**responsive web**

- **em과 rem**

px은 가변성이 없다.

em은 부모 요소의 글꼴 크기를,  
rem은 루트 요소의 글꼴 크기를 의미

em으로 padding과 margin를 정할때는  
자기 자신의 글자 크기를 기준

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
