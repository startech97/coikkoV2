import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import {Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home'
import Results from './containers/Results/Results'
import {useRoutes} from './routes'
import 'materialize-css'
function App() {
  const routes = useRoutes(false)
  return (
   <Layout>
     {/* <Switch>
       <Route path='/auth' component={Auth}/>
       <Route path='/results' component={Results}/>
       <Route path='/home' component={Home}/>
     </Switch> */}
     {routes}
   </Layout>
  );
}

export default App;
