import {AuthorizationStatus} from './AuthorizationStatus.ts';
import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../app/routes.ts';


type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIN}/>
  );
}

export default PrivateRoute;
