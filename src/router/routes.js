
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: "currentTournament",
        path: '/currentTournament',
        component: () => import('pages/currentTournament.vue'),
      },
      {
        name: "nextTournaments",
        path: '/nextTournaments',
        component: () => import('pages/nextTournaments.vue'),
      },
      {
        name: "youTubeBroadcasts",
        path: '/youTubeBroadcasts',
        component: () => import('pages/youTubeBroadcasts.vue'),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
