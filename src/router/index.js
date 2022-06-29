import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: "/tree",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue"),
    children: [
      {
        path: "/tree",
        name: "Tree",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/g6-tree/index.vue"),
        redirect: "/tree/one",
        children: [
          {
            path: "/tree/one",
            name: "One",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-tree/One.vue"
              ),
          },
          {
            path: "/tree/two",
            name: "Two",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-tree/Two.vue"
              ),
          },
          {
            path: "/tree/three",
            name: "Three",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-tree/Three.vue"
              ),
          },
          {
            path: "/tree/four",
            name: "Four",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-tree/Four.vue"
              ),
          },
          {
            path: "/tree/five",
            name: "Five",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-tree/Five.vue"
              ),
          },
        ],
      },
      {
        path: "/normalmap",
        name: "Normalmap",
        redirect: "/normalmap/yi",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/g6-normalmap/index.vue"
          ),
        children: [
          {
            path: "/normalmap/yi",
            name: "Yi",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-normalmap/yi.vue"
              ),
          },
          {
            path: "/normalmap/er",
            name: "Er",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-normalmap/er.vue"
              ),
          },
          {
            path: "/normalmap/san",
            name: "San",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-normalmap/san.vue"
              ),
          },
          {
            path: "/normalmap/si",
            name: "Si",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-normalmap/si.vue"
              ),
          },
        ],
      },
      {
        path: "/element",
        name: "Element",
        redirect: "/element/a",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/g6-element/index.vue"
          ),
        children: [
          {
            path: "/element/a",
            name: "A",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-element/a.vue"
              ),
          },
          {
            path: "/element/b",
            name: "B",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-element/b.vue"
              ),
          },
          {
            path: "/element/c",
            name: "C",
            component: () =>
              import(
                /* webpackChunkName: "about" */ "../views/g6-element/c.vue"
              ),
          },
        ],
      },
      {
        path: "/g2",
        name: "G2",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/g2/index.vue"),
      },
      {
        path: "/x6",
        name: "X6",
        redirect: "/x6/aa",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/x6/index.vue"),
        children: [
          {
            path: "/x6/aa",
            name: "AA",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/aa.vue"),
          },
          {
            path: "/x6/bb",
            name: "BB",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/bb.vue"),
          },
          {
            path: "/x6/cc",
            name: "CC",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/cc.vue"),
          },
          {
            path: "/x6/dd",
            name: "DD",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/dd.vue"),
          },
          {
            path: "/x6/ee",
            name: "EE",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/ee.vue"),
          },
          {
            path: "/x6/ff",
            name: "FF",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/ff.vue"),
          },
          {
            path: "/x6/gg",
            name: "GG",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/gg.vue"),
          },
          {
            path: "/x6/hh",
            name: "HH",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/x6/hh.vue"),
          },
        ],
      },
      {
        path: "/l7",
        name: "L7",
        redirect: "/l7/aaa",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/l7/index.vue"),
        children: [
          {
            path: "/l7/aaa",
            name: "AAA",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/aaa.vue"),
          },
          {
            path: "/l7/bbb",
            name: "BBB",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/bbb.vue"),
          },
          {
            path: "/l7/ccc",
            name: "CCC",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/ccc.vue"),
          },
          {
            path: "/l7/ddd",
            name: "DDD",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/ddd.vue"),
          },
          {
            path: "/l7/eee",
            name: "EEE",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/eee.vue"),
          },

          {
            path: "/l7/fff",
            name: "FFF",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/fff.vue"),
          },
          {
            path: "/l7/ggg",
            name: "GGG",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/ggg.vue"),
          },
          {
            path: "/l7/hhh",
            name: "HHH",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/hhh.vue"),
          },
          {
            path: "/l7/iii",
            name: "III",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/iii.vue"),
          },
          {
            path: "/l7/jjj",
            name: "JJJ",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/l7/jjj.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;
