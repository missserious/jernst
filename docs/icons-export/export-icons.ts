import fs from 'fs';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IoIosFlash } from 'react-icons/io';
import { SiJest } from 'react-icons/si';
import { FaGears } from 'react-icons/fa6';
import { RiToolsFill } from 'react-icons/ri';
import { MdInstallMobile } from 'react-icons/md';
import { BiTestTube } from 'react-icons/bi';
import { IoIosRocket } from 'react-icons/io';
import { PiNotePencilBold } from 'react-icons/pi';
import { LuListTodo } from 'react-icons/lu';
import { FaPaintBrush } from 'react-icons/fa';
import { MdEditDocument } from 'react-icons/md';
import { ImImages } from 'react-icons/im';
import { FiGlobe } from 'react-icons/fi';
import { FiBarChart2 } from 'react-icons/fi';
import { LiaTrafficLightSolid } from 'react-icons/lia';
import { PiPrinter } from 'react-icons/pi';
import { FiTag } from 'react-icons/fi';
import { FiPackage } from 'react-icons/fi';

// To run the script: npx ts-node export-icons.ts

type IconExport = {
  component: React.ComponentType;
  name: string;
  color: string;
};

const icons: IconExport[] = [
  { component: IoIosFlash, name: 'flash', color: '#fb61bbff' },
  { component: FaGears, name: 'gear', color: '#fb61bbff' },
  { component: RiToolsFill, name: 'tool', color: '#fb61bbff' },
  { component: MdInstallMobile, name: 'install', color: '#fb61bbff' },
  { component: BiTestTube, name: 'test', color: '#fb61bbff' },
  { component: IoIosRocket, name: 'rocket', color: '#fb61bbff' },
  { component: PiNotePencilBold, name: 'note', color: '#fb61bbff' },
  { component: LuListTodo, name: 'todo', color: '#fb61bbff' },
  { component: FaPaintBrush, name: 'paint', color: '#fb61bbff' },
  { component: MdEditDocument, name: 'document', color: '#fb61bbff' },
  { component: ImImages, name: 'image', color: '#fb61bbff' },
  { component: FiGlobe, name: 'globe', color: '#fb61bbff' },
  { component: FiBarChart2, name: 'chart', color: '#fb61bbff' },
  { component: LiaTrafficLightSolid, name: 'traffic', color: '#fb61bbff' },
  { component: PiPrinter, name: 'print', color: '#fb61bbff' },
  { component: FiTag, name: 'tag', color: '#fb61bbff' },
  { component: FiPackage, name: 'package', color: '#fb61bbff' },
  { component: SiJest, name: 'jest', color: '#54aeff' },
];

icons.forEach(({ component: Icon, name, color }) => {
  const svg = renderToStaticMarkup(React.createElement(Icon, { size: 48, color }));
  fs.writeFileSync(`${name}.svg`, svg);
  console.log(`Exported ${name}.svg`);
});
