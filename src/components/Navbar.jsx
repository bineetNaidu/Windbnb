import { Input } from '@chakra-ui/input';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>Windbnb</h1>

      <div>
        <Input variant="outline" placeholder="Outline" />
      </div>
    </nav>
  );
};

export default Navbar;
