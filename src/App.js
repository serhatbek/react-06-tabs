import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [tabItems, setTabItems] = useState();
  console.log('tab items', tabItems);

  const getTabsItems = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setTabItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTabsItems();
  }, []);

  return <div className='App'>Tabs</div>;
}

export default App;
