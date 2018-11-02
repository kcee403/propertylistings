import Login from '../Login';
import MovieResults from '../../../containers/MovieResults';
import Redirect from 'react-router-dom';

export const UpdateRoute = (loggedin) =>
        <Router>
        <Route exact path="/" render={() => (
          loggedin ? (
            <MovieResults />
          ) : (
            <Login />
          )
        )}/>
        </Router>

export const logout = () => {
  let token = localStorage.getItem('token');
  console.log('Logging Out and Getting Rid Of Token: ', token);
  localStorage.removeItem('token');
}
