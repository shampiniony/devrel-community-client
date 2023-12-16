import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormPage } from './pages/FormPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routes... */}
        <Route path="/forms/:form_id" element={<FormPage></FormPage>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
