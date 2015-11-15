import path from 'path'
import Router from 'koa-router'
import koaBody from 'koa-body'
import { APP } from '~/src/config/paths'
import compose from '~/src/server/utils/compose'
import handleError from '~/src/server/middleware/handleError'
import createStore from '~/src/server/middleware/createStore'
import setRouteContext from '~/src/server/middleware/setRouteContext'
import renderRouteContext from '~/src/server/middleware/renderRouteContext'

export default function configureRouter(app, isomorphicTools) {
  const makeRoutes = require(path.join(APP, 'makeRoutes'))
  const rootRouter = Router()
  const apiRouter = Router()
  const parseBody = koaBody()

  app.use(handleError)

  apiRouter
    .post('ping', parseBody, function *() {
      this.response.body = { pong: this.request.body }
    })

  const renderApp = compose(
    createStore,
    setRouteContext(makeRoutes),
    renderRouteContext(isomorphicTools.assets())
  )

  rootRouter
    .use('/api', apiRouter.routes())
    .get('/error', renderApp)
    .get('/(.*)', renderApp)

  app.use(rootRouter.routes())
}