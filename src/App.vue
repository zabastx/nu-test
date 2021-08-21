<template>
  <div id="app">
    <nav>
      <router-link to="./">Карточки</router-link>
      <router-link to="./layers">Слои</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~material-design-icons/iconfont/material-icons.css';

html {
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  height: 1px;
}

main {
  display: flow-root;
  padding: 20px;
}

#app {
  background: #17212b;
  min-height: 100%;
  height: max-content;
}

nav {
  padding: 30px;
  border-bottom: 1px solid black;
  display: flex;
  gap: 20px;
  box-shadow: 0 0 5px black;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  cursor: pointer;
}

.btns {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 15px 0;
  .btn {
    span {
      vertical-align: middle;
    }
  }
}
</style>
