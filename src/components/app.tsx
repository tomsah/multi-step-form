import React from 'react'
import form from './app.module.scss'
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom'

import routes from '../config/routes'
import StepProgress from './form/stepProgress'

const App: React.FunctionComponent = () => {
  return (
    <div className={form.container}>
      <BrowserRouter>
        <StepProgress />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
