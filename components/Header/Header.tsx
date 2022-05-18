import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ }) => {
  return (
    <Link href='/'>
      <a>
        <Image
          src="/images/netflix.png"
          height={50}
          width={150}
          alt="Netflix Clone"
        />
      </a>
    </Link>
  );
};

export default Header;
