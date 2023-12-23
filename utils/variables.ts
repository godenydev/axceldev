import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Electron',
    description: 'Yakında çıkacak olan electron, 24/7 Aktif şekilde hizmet verecektir.',
    link: 'https://discord.com/api/oauth2/authorize?client_id=1183017268796469318&permissions=8&scope=bot',
    iconURL: 'https://media.discordapp.net/attachments/1188138484561616968/1188140008658456627/images.png?ex=6599709c&is=6586fb9c&hm=0aca57851bf5b5e784cf5f40ed51e7e1b39c4b3e6802505d28cee2688315dfcb&=&format=webp&quality=lossless',
  },
  {
    name: 'Axcel Müzik',
    description: 'Bot çıkmıştı, üyeleriniz botun sesteyken müziği duyamadıklarını söylediler yeniden kodluyoruz.',
    link: 'https://discord.gg/NetmysN9VA',
    iconURL: 'https://cdn.discordapp.com/icons/1096085223881576549/c2a37851263289188afde2ea135e0665.png',
  },
];

export const githubUsername = 'opelaxcel';
export const discordId = '1159843729771868181';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/godeny' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/1159843729771868181' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    iconURL: BsInstagram,
  },
  {
    name: 'X',
    link: 'https://twitter.com/',
    iconURL: BsTwitterX,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Typescript',
    iconURL: SiTypescript,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Tailwindcss',
    iconURL: SiTailwindcss,
  },
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'C#',
    iconURL: TbBrandCSharp,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
  {
    name: 'Firebase',
    iconURL: SiFirebase,
  },
];
