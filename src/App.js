
import './App.css';
import Tabs from './Tabs';


const App = () => {
  const tabItems = [
    { label: 'Tab 1', content: 'Contenido de Tab 1' },
    { label: 'Tab 2', content: 'Contenido de Tab 2' },
    { label: 'Tab 3', content: 'Contenido de Tab 3' },
  ];

  return <Tabs items={tabItems} />;
};

export default App;
