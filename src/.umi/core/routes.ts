// @ts-nocheck
import { ApplyPluginsType } from 'F:/umi学习-kkb/umi-test/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('F:/umi学习-kkb/umi-test/src/pages/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('F:/umi学习-kkb/umi-test/src/layouts').default,
    "routes": [
      {
        "path": "/",
        "component": require('F:/umi学习-kkb/umi-test/src/pages/goods/index').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('F:/umi学习-kkb/umi-test/src/pages/about').default,
        "Routes": [
          "./routes/PrivateRoute.js"
        ],
        "exact": true
      },
      {
        "path": "/users",
        "component": require('F:/umi学习-kkb/umi-test/src/pages/users/_layout').default,
        "routes": [
          {
            "path": "/users/",
            "component": require('F:/umi学习-kkb/umi-test/src/pages/users/index').default,
            "exact": true
          },
          {
            "path": "/users/:id",
            "component": require('F:/umi学习-kkb/umi-test/src/pages/users/$id').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('F:/umi学习-kkb/umi-test/src/pages/404').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
