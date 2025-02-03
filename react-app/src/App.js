// import logo from './logo.svg';
import './App.css';
import {MyApp, Bio, ToDoList, TodoList} from './components/JSX';
import {FunctionCom, FunctionComponent, HookFuncComponent,ClassComponent} from './components/Func_Class_Com';
import {CounterProp,PropEx, DefaultProp} from './components/State_Prop';
import { PackingList, PackingLists } from './components/ConditionalRendering';
import { CardComposition, CardChildren } from './components/Composition';
import { ItemListFilter,ItemListMap } from './components/RenderList';
import { CounterRefs , CounterState, Chat, Toggle, Dashboard, Chats} from './components/refs';
import ParentComponent from './hooks/Hooks';


import {Counter, UpdatingObj, UpdateArr,ArrayObject,ResetKey} from './hooks/useState'
import { DataFetcher } from './hooks/useEffect';
function App() {
  return (
    <div>
     {/* <MyApp/>
     <Bio/>
     <ToDoList/>
     <TodoList/>
     <FunctionCom/>
     <FunctionComponent/>
     <HookFuncComponent/>
     <ClassComponent/>
     <CounterProp/>

    <PropEx name="Anshika" age={22} />
    <PropEx name="React" age={5} />

    <DefaultProp name='Aman' age={20}/>
    <DefaultProp/>
    
    <PackingList/>
    <PackingLists/>

    <CardComposition title="React Basics" description="Learn the fundamentals of React." />
    <CardComposition title="Advanced React" description="Dive deeper into React concepts." />

    <CardChildren>
      <h1>Card 1</h1>
      <p>First description.</p>
    </CardChildren>

    <CardChildren>
        <h1>Card 2</h1>
        <p>Second description.</p>
    </CardChildren>

    <ItemListMap/>
    <ItemListFilter/>

    <CounterRefs/><br/>
    <CounterState/><br/>
    <Chat/><br/>
    <Toggle/><br/>
    <Dashboard/><br/>
    <Chats/>


    <h1>Starting Hooks from here.....</h1>
    <Counter/>
    <UpdatingObj/><br/>
    <UpdateArr/><br/>
    <ArrayObject/><br/>
    <ResetKey/>

    <DataFetcher/> */}
    <ParentComponent/>  
    </div>

   
  );
}

export default App;
