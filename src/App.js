import {Provider} from 'react-redux'
import Presentation1 from './components/Todolist/Presentation1';
import Store from './store/Store';
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
     <h1>Todo-App</h1>
     <Presentation1/>
    </div>
    </Provider>
    
  );
}

export default App;
