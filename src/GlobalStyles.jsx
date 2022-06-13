/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트
 * @author: TinkleCycle Team
 */


/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";


/**
 * 전역 스타일 시트를 정의한 객체, reset.css 적용
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* 사용 폰트font */
//메인 폰트(레코체)
@font-face {
    font-family: 'Recipekorea';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


/* color 가이드
* 바탕 및 흰색 바탕에 blue 사용시 blue-light 사용
* 포인트 및 hover 사용시 blue-main 사용
* 버튼 컬러는 gray light 사용
* 흰색 바탕의 설명 및 글 작성 시 gray-dark 사용 
* 그 외에는 혹시 몰라서 넣어놨습니다.
 */
$blue-light:#98D6F6;
$blue-main:#228AE6;
$gray:#7e7e7e;
$gray-dark:#535353;
$gray-light: #d5d5d5;
$gray-EXlight:#f6f3f2;

/* font-size 가이드 
* 웹폰트에서 적용 가능한 가장 작은 글자는 10px 이므로, 가장 작은 글자 적용시 font-XS사용
* 설명 및 정보 작성시 font-S 사용
* 서브 타이틀 작성시 font-M 사용
* 메인 타이틀 작성시 font-L 사용
* 그 외의 큰 타이틀 작성시 font-XL 사용
*/
$font-XS:'S-CoreDream-2ExtraLight' 10px;
$font-S: 'S-CoreDream-3Light' 12px;
$font-M: 'S-CoreDream-6Bold' 14px;
$font-L: 'S-CoreDream-8Heavy' 16px;
$font-XL: 'S-CoreDream-9Black' 35px;

`;

export default GlobalStyles;
