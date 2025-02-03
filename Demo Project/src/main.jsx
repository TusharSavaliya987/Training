import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Import all components
import AlertDialog from './components/AlertDialog';
import AspectRatio from './components/AspectRatio';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Button from './components/Button';
import Callout from './components/Callout';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import CheckboxCards from './components/CheckboxCards';
import ContextMenu from './components/ContextMenu';
import DataList from './components/DataList';
import Dialog from './components/Dialog';
import DropdownMenu from './components/DropdownMenu';
import HoverCard from './components/HoverCard';
import IconButton from './components/IconButton';
import Inset from './components/Inset';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alertdialog" element={<AlertDialog />} />
        <Route path="/aspectratio" element={<AspectRatio />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/button" element={<Button />} />
        <Route path="/callout" element={<Callout />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/checkboxgroup" element={<CheckboxGroup />} />
        <Route path="/checkboxcards" element={<CheckboxCards />} />
        <Route path="/contextmenu" element={<ContextMenu />} />
        <Route path="/datalist" element={<DataList />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/dropdownmenu" element={<DropdownMenu />} />
        <Route path="/hovercard" element={<HoverCard />} />
        <Route path="/iconbutton" element={<IconButton />} />
        <Route path="/inset" element={<Inset />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);