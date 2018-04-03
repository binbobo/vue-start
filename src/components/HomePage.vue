<template>
  <div class="layout">
    {{routes}}
    <Layout>
      <Sider ref="side1" class="sider-menu" hide-trigger collapsible :collapsed-width="60" v-model="isCollapsed">
        <Menu active-name="todo" theme="dark" width="auto" :class="menuitemClasses">
         <sider-bar-menu v-for="route in routes" :key="route.name" :route="route"></sider-bar-menu>
        </Menu>
      </Sider>
      <Layout>
        <Header class="header-bar">
          <Icon @click.native="collapsedSider" class="toggle-collapsed-icon" :class="rotateIcon" type="navicon-round" size="24"></Icon>
          <!-- <Button class="pull-right" @click="logout" type="error">Logout</Button> -->
        </Header>
        <Content class="content-container">
          <!-- breadcrumb -->
          <router-view></router-view>
        </Content>
      </Layout>
  </Layout>
  </div>
</template>

<script>
import {logout} from 'api/user'
import {heart} from 'api/login'
import { mapState } from 'vuex'
import {siderBarMenuRoutes} from '@/router'

import SiderBarMenu from './sider-bar-menu'

export default {
  name: 'HomePage',
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.app.isLogin,
      loginUser: state => state.app.loginUser
    }),
    routes () {
      return this.filterRoutes(siderBarMenuRoutes)
    },
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  created () {
    this.startHeart()
  },
  components: {
    SiderBarMenu
  },
  methods: {
    logout () {
      logout().then(() => {
        this.$store.commit('LOGIN_OUT')
        this.$router.push('/login')
      })
    },
    startHeart () {
      if (this.isLogin) {
        heart().then((user) => {
          // 上次调用成功之后  继续下次调用
          setTimeout(this.startHeart, 60 * 1000)
        }).catch(() => {
          setTimeout(this.startHeart, 60 * 1000)
        })
      }
    },
    // 过滤出路由中的有效信息(递归)
    filterRoutes (routes) {
      if (Array.isArray(routes)) {
        return routes.map((route) => {
          if (route.children && route.children.length) {
            return {
              path: route.path,
              name: route.name,
              children: this.filterRoutes(route.children)
            }
          }
          return {
            path: route.path,
            name: route.name
          }
        })
      }
      return []
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
      this.$store.commit('TOGGLE_COLLAPSED', this.isCollapsed)
    }
  }
}
</script>

<style scoped lang='scss'>
@import 'src/styles/common.scss';
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  .header-bar {
    background: white;
    padding: 0 12px;
    height: 40px;
  }

  .content-container {
    padding: 12px;
  }
}
.sider-menu {
  height: 99vh;
}
.toggle-collapsed-icon {
  cursor: pointer;
  &.menu-icon{
    transition: all .3s;
    &.rotate-icon {
      transform: rotate(-90deg);
    }
  }
}

</style>
