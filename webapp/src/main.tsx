import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/Header/Header.tsx';
import { PeopleList } from './components/PeopleList/PeopleList.tsx';
import { NewPerson } from './components/NewPerson/NewPerson.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PeopleList />,
  },
  {
    path: '/new',
    element: <NewPerson />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <Header />
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>,
);
