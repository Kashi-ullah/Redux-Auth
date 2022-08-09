import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import{useSelector,useDispatch} from 'react-redux';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { authActions } from './store/index';

function App() {
const isUserAuthentic = useSelector((state)=>state.auth.isAuthenticated);
  return (
    <div className="back">
  
        <Fragment>
        <Header></Header>
      {!isUserAuthentic ? <Auth></Auth> : <UserProfile></UserProfile>}
      {/* {isUserAuthentic && } */}
        
        </Fragment>
       
     
    </div>
  );
}

export default App;
