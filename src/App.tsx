import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import { Layout } from './components/Layout';
import { ProjectDialog } from './components/ProjectDialog';
import { ProfilePage } from './pages/ProfilePage';
import { WorkPage } from './pages/WorkPage';
import { PhotosPage } from './pages/PhotosPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { showPhotos } from './data/photos';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<ProfilePage />} />
            {/* nested so the grid stays mounted behind the detail overlay */}
            <Route path='/work' element={<WorkPage />}>
              <Route path=':slug' element={<ProjectDialog />} />
            </Route>
            {/* the page is still built; showPhotos just gates the way in */}
            <Route
              path='/photos'
              element={showPhotos ? <PhotosPage /> : <Navigate to='/' replace />}
            />
            <Route path='/resume' element={<ResumePage />} />
            <Route path='/contact' element={<ContactPage />} />
            {/* the old link-in-bio page now lives inside Work */}
            <Route path='/links' element={<Navigate to='/work' replace />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
