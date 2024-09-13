import React from 'react';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => (
  <section className='container-logo'>
    <span className="logo text-primary">&lt;C/&gt;</span>
    <span className="logo text-white">Shaun</span>
  </section>
);

export default Logo;
