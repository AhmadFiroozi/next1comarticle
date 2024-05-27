import { Navigate } from "react-router-dom";
import {isLogin} from './utils'
function PraivateRouts({ children }){
    
      return(
        <>{isLogin() ? children : <Navigate to={'/login'}/>}</>
      )
}
export default PraivateRouts;