import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { shallowEqual, useSelector } from 'react-redux';
import { TodoState } from './models/type-todo';
import { toggleFilter } from './redux/todo/actions';
import { AddTodo } from './components/AddTodo';
import SwitchInput from './components/swithc';
import 'devextreme/dist/css/dx.light.css';
import Item from './models/Item';
const App: React.FC = () => {

  const enabledFilter: boolean = useSelector(
    (state: TodoState) => state.enabledFilter,
    shallowEqual
  )

  const items: Item[] = useSelector(
    (state: TodoState) => state.items,
    shallowEqual
  )

  return (
    <main>
      <div className="div-main dx-viewport" >
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <AddTodo />
            {!!items.length && <div className="mt-4">
              <SwitchInput enabled={enabledFilter} setEnabled={toggleFilter} />
            </div>}
            <TodoList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
