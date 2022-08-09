import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import {authActions} from '../store/auth';
import classes from './Auth.module.css';
const Auth = () => {
  const dispatch = useDispatch();
  const name = useRef();
  const password = useRef();
  const loginHandler=(event)=>{
      dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='name'>User Name</label>
            <input ref={name} type='name' id='name' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={password} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      
     </section>
    </main>
  );
};

export default Auth;