import React from 'react';

const LayoutGrid = ({ children }) => (
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <main class="flex-grow">{children}</main>
  </div>
);

export default LayoutGrid;
