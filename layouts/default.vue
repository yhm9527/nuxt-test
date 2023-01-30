<template>
  <el-container>
    <el-aside width="250px">
      <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <block v-for="item in menus" :key="item.index">
          <template v-if="item.type == 'menu'">
            <el-menu-item :index="item.index">
              <i v-if="item.icon" :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
          <template v-if="item.type == 'group'">
            <el-submenu :index="item.index">
              <template slot="title">
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <block v-for="subItem in item.subMenus" :key="subItem.index">
                  <template v-if="subItem.type == 'menu'">
                    <el-menu-item :index="subItem.index">
                      <i v-if="subItem.icon" :class="subItem.icon"></i>
                      <span slot="title">{{ subItem.title }}</span>
                    </el-menu-item>
                  </template>
                  <template v-if="subItem.type == 'group'">
                    <el-submenu :index="subItem.index">
                      <template slot="title">
                        <i v-if="subItem.icon" :class="subItem.icon"></i>
                        <span>{{ subItem.title }}</span>
                      </template>
                      <block v-for="i in subItem.subMenus" :key="i.index">
                        <template v-if="i.type == 'menu'">
                          <el-menu-item :index="i.index">
                            <i v-if="i.icon" :class="i.icon"></i>
                            <span slot="title">{{ i.title }}</span>
                          </el-menu-item>
                        </template>
                      </block>
                    </el-submenu>
                  </template>
                </block>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </block>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          type: "menu",
          title: "home",
          index: "/home",
          icon: "el-icon-menu",
        },
        {
          type: "menu",
          title: "user",
          index: "/user",
          icon: "el-icon-menu",
        },
        {
          type: "group",
          title: "Settings",
          index: "settings",
          icon: "el-icon-menu",
          subMenus: [
            {
              type: "menu",
              title: "menu1",
              index: "/setting/1",
              icon: "el-icon-menu",
            },
            {
              type: "menu",
              title: "menu2",
              index: "/setting/2",
              icon: "el-icon-menu",
            },
            {
              type: "group",
              title: "Sub Setting",
              index: "subSetting",
              icon: "el-icon-menu",
              subMenus: [
                {
                  type: "menu",
                  title: "menu3",
                  index: "/setting/3",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  line-height: 60px;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-main {
  background-color: #fff;
}

body {
  padding: 0;
  margin: 0;
}
</style>
