import * as React from 'react';
import Image from 'next/image';

const Header = ({ }) => {
  return (
    <div>
      <Image
        src="/images/netflix.png"
        height={50}
        width={150}
        alt="Netflix Clone"
      />
    </div>
  );
};

export default Header;
