import {Provider}  from ' redux'
import store from './lib/redux'

import InBoxScreen from './components/InBoxScreen'
import './index.css'

export function App ()
{
    return (
    <Provider store={store}>
      <InBoxScreen />
    </Provider>
  );

}

export default App
