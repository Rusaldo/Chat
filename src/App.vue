<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*-------- FONTS ----------*/
@import url('https://fonts.googleapis.com/css?family=Karla:400,700');

/*------ VARIABLES --------*/
:root {
  --accent: #ffbdb8;
  --accent-hover: #ffa39d;
  --text-dark: #000000;
  --text-light: #ffffff;
  --text-secondary: #b49190;
}
/*-------- GLOBAL ---------*/
* {
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: inherit;
}
html {
  height: 100%;
  width: 100%;
  font-size: 10px;
}
body {
  margin: 0;
  height: 100%;
  min-width: 320px;
  font-family: "Karla", Arial, sans-serif;
  font-size: 2rem;
  line-height: 1.5;
  color: var(--text-dark);
  background-color: #fccccc38;
  overflow: hidden;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
img,
video,
audio {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;
}
input {
    border-radius: 0;
}
button {
  margin: 0;
}
.container {
	width: 100%;
  height: 100%;
}

/*-------- MEDIA ---------*/
@media screen and (min-width: 768px) {
  html {
    font-size: 11px;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 12px;
  }
}
</style>
