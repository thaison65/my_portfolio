import React from 'react';
import { DiscordSVG, GithubSVG, LinkedinSVG } from '../../../assets/icons';

interface IconListProps {}

const IconList: React.FC<IconListProps> = () => {
  const icons = [
    {
      url: 'https://www.linkedin.com/in/thaison65/',
      icon: <LinkedinSVG fill="#12F7D6" width={'20'} height={'20'} />,
      title: 'Linkedin',
    },
    {
      url: 'https://github.com/thaison65',
      icon: <GithubSVG fill="#12F7D6" width={'20'} height={'20'} />,
      title: 'Github',
    },
    { url: '', icon: <DiscordSVG fill="#12F7D6" width={'20'} height={'20'} />, title: 'Discord' },
  ];

  return (
    <>
      {icons.map((item, index) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="icon-item"
        >
          <figure>{item.icon}</figure>
          <span className="icon-title">{item.title}</span>
        </a>
      ))}
    </>
  );
};

export default IconList;
