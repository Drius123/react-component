import routeNames from './routing/routs';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={routeNames.PATH} element={<AppLayout />}>
          <Route path={routeNames.PATH} element={<Navigate to={routeNames.HOME} />} />
          <Route path={routeNames.HOME} element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
