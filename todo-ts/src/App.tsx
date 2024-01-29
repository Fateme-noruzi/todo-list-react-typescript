import React from 'react';
import './App.css';
import { shallowEqual, useSelector } from 'react-redux';
import { TodoState } from './models/type-todo';
import { toggleFilter } from './redux/todo/actions';
import Item from './models/Item';
import { AddTodo, TodoList, SwitchInput } from './components';
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
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg align-middle">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-center text-2xl">TODO LIST</h1>
            <AddTodo />
            {!!items.length && <div className="mt-8">
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
