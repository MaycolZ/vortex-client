import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Books from './components/Books';
import Layout from './components/layout';
import NotFound from './components/NotFound';

export default function Router() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<Books />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}