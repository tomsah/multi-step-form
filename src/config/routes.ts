import UserInfoForm from '../components/form/userInfoForm'
import UserPrivacyForm from '../components/form/userPrivacyForm'
import EndForm from '../components/form/endForm'
import RouteInterface from '../interfaces/routes'

const userInfoRoutes: RouteInterface[] = [
  {
    path: '/',
    name: 'User info',
    component: UserInfoForm,
    exact: true,
  },
]

const privacyRoutes: RouteInterface[] = [
  {
    path: '/privacy',
    name: 'Privacy setting',
    component: UserPrivacyForm,
    exact: true,
  },
]

const doneRoutes: RouteInterface[] = [
  {
    path: '/done',
    name: 'done',
    component: EndForm,
    exact: true,
  },
]

const routes: RouteInterface[] = [
  ...userInfoRoutes,
  ...privacyRoutes,
  ...doneRoutes,
]

export default routes
