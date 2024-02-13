import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ParentComponent1 from './ParentComponent1';
import HookUseEffect1 from './HookUseEffect1';
import HookUseEffect2 from './HookUseEffect2';
import HookUseEffect3 from './HookUseEffect3';
import HookUseState1 from './HookUseState1';
import HookUseEffect4 from './HookUseEffect4';
import HookMouse from './HookMouse';
import MouseContainer from './MouseContainer';
import UseEffectCounter from './UseEffectCounter';
import ComponentA from './Components/ComponentA';
import UseReducerOne from './UseReducer/UseReducerOne';
import UseReducerParentContainer from './UseReducer/UseReducerParentContainer';
import UseReducerTwo from './UseReducer/UseReducerTwo';
import UseCallbackHookOne from './UseCallBackHook/UseCallbackHookOne';
import Counter from './UseMemoHook/Counter';
import UseRefHookOne from './UseRefHook/UseRefHookOne';
import UseRefHookTwo from './UseRefHook/UseRefHookTwo';
import CustomHooksContainer from './CustomHook/CustomHooksContainer';
import UserForm from './CustomHook/UserForm';
import RenderingContextContainer from './RenderingContext/RenderingContextContainer';
// import Test1 from './Test1';
// import Test2 from './Test2';
// import Test3 from './Test3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <label htmlFor=""> method 1 </label> */}
    {/* <Test1 /> */}
    {/* <label htmlFor=""> method 2 </label> */}
    {/* <Test2 /> */}

    {/* <Test3 name={"test"}>
      <p> from parent </p>
    </Test3> */}

    {/* <ParentComponent1 /> */}
    {/* <HookUseEffect1 /> */}
    {/* <HookUseEffect2 /> */}
    {/* <HookUseEffect3 /> */}
    {/* <HookUseState1 /> */}
    {/* <HookUseEffect4 /> */}
    {/* <HookMouse /> */}
    {/* <MouseContainer /> */}
    {/* <UseEffectCounter /> */}
    {/* <ComponentA /> */}
    {/* <UseReducerOne /> */}
    {/* <UseReducerParentContainer /> */}
    {/* <UseReducerTwo /> */}
    {/* <UseCallbackHookOne /> */}
    <Counter />
    {/* <UseRefHookOne /> */}
    {/* <UseRefHookTwo /> */}
    {/* <CustomHooksContainer /> */}
    {/* <UserForm /> */}
    {/* <RenderingContextContainer /> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
