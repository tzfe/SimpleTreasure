import './App.css';
import 'antd/dist/antd.css'; 

import FormPage from './pages/FormPage';
import MyFormPage from "./pages/MyFormPage";

function App() {
  return (
    <div className="App">
      112
      {/* 表单组件 */}
      <FormPage />

      {/* 我的表单 */}
      <MyFormPage/>
    </div>
  );
}

export default App;
