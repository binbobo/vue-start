<template>
  <div id="app">
    <nav class="nav">
      <ul class="menu-list">
        <li> 
          <router-link :to="{path: '/'}">HelloWorld</router-link>
        </li>
        <li> 
          <router-link to="ToDo">ToDo</router-link>
        </li>
      </ul>
    </nav>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
/* common styles */
ul {
  list-style-type: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 导航菜单样式 */
.nav {
  width: 100%;
  height: 30px;

  position: fixed;
  top: 0;
  left: 0;

  text-align: left;
}

.nav .menu-list {
  padding-left:24px;
  border-bottom: 1px solid #fafafa;
}

.nav .menu-list li {
  display: inline-block;
  margin: auto 3px;
  line-height: 30px;
}

.nav .menu-list li a {
  text-decoration: none;
  color:#777;
  font-weight: bold;

  display: inline-block;
  width: 100%;
  height: 27px;
}

.nav .menu-list li a:hover {
  color:#777;
}
.nav .menu-list li a.router-link-exact-active {
  border-bottom: 3px solid #4285f4;
  color: #4285f4;
}
</style>
