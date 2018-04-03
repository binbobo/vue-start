<template>
  <Submenu :name="route.name" v-if="route.children && route.children.length">
    <template slot="title">
      <Icon type="ios-paper"></Icon>
      <span>{{route.name}}</span>
    </template>
    <sider-bar-menu v-for="subRoute in route.children" :key="subRoute.name" :route="subRoute"></sider-bar-menu>
  </Submenu>
  <MenuItem @click.native="changeRoute(route.path)" v-else :name="route.name">
    <Icon type="ios-paper"></Icon>
    <span>{{route.name}}</span>
  </MenuItem>
</template>

<script>
export default {
  name: 'SiderBarMenu',
  props: {
    route: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    changeRoute (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang='scss'>

.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i {
  transform: translateX(-5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
