export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SkillSection {
  title: string;
  skills: SkillGroup[];
}

const skills: SkillSection[] = [
  {
    title: 'Programming, Frameworks & Libraries',
    skills: [
      {
        label: 'Languages',
        items: [
          'Python',
          'JavaScript/TypeScript',
          'Java',
          'Bash/Shell scripting',
        ],
      },
      {
        label: 'Frameworks',
        items: ['Django', 'Django REST Framework', 'Node.js'],
      },
      {
        label: 'Frontend Libraries',
        items: ['React', 'React Router', 'Material UI'],
      },
      {
        label: 'Data/GIS Libraries',
        items: [
          'GDAL',
          'Pandas',
          'NumPy',
          'Matplotlib',
          'BeautifulSoup',
          'D3',
          'OpenLayers',
          'Leaflet',
          'MapLibre',
        ],
      },
      { label: 'Data Formats', items: ['XML', 'YAML', '(Geo)JSON', 'KML'] },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      {
        label: 'HTML/CSS',
        items: [
          'HTML5',
          'CSS3',
          'Tailwind',
          'Bootstrap',
          'Skeleton',
          'Foundation',
        ],
      },
      { label: 'APIs', items: ['RESTful APIs', 'JSON-based data exchange'] },
      {
        label: 'Frontend Tooling',
        items: ['ESLint', 'Prettier', 'Vite', 'npm', 'yarn'],
      },
    ],
  },
  {
    title: 'Databases',
    skills: [
      {
        label: 'Database Systems',
        items: ['PostgreSQL/PostGIS (PL/pgSQL)', 'MySQL', 'SQL'],
      },
      { label: 'ORM Experience', items: ['Django ORM'] },
      { label: 'Database Tools', items: ['DBeaver'] },
    ],
  },
  {
    title: 'GIS & Mapping',
    skills: [
      {
        label: 'Desktop GIS & Analysis',
        items: ['QGIS', 'GRASS', 'SAGA', 'JOSM'],
      },
      {
        label: 'OpenGIS Web Services',
        items: ['WFS', 'WMS', 'WMTS', 'TMS', 'TileServer'],
      },
      {
        label: 'OSM Tools',
        items: ['OSM mapping and data validation', 'Overpass API'],
      },
      {
        label: 'Geospatial Data Integration',
        items: [
          'OSM data',
          'Natural Earth',
          'Geonames',
          'GPS',
          'RGB imagery',
          'SAR',
          'LiDAR',
          'Shapefiles',
          'GeoJSON',
          'GeoPackage',
        ],
      },
    ],
  },
  {
    title: 'DevOps & Deployment',
    skills: [
      { label: 'CI/CD', items: ['GitLab CI/CD', 'GitHub Actions'] },
      {
        label: 'Containerization & Deployment',
        items: ['Docker', 'Docker Compose'],
      },
      { label: 'Linux & Web Servers', items: ['Ubuntu', 'Apache', 'Tomcat'] },
      { label: 'Version Control & Documentation', items: ['GitLab', 'GitHub'] },
    ],
  },
  {
    title: 'Test Automation & Manual Testing',
    skills: [
      { label: 'GUI / Desktop Testing', items: ['Squish'] },
      { label: 'Test Frameworks', items: ['Robot Framework', 'pytest'] },
      { label: 'API Testing', items: ['Postman'] },
      {
        label: 'Manual Testing',
        items: ['smoke tests', 'exploratory testing'],
      },
    ],
  },
  {
    title: 'Project Management & Collaboration',
    skills: [
      {
        label: 'Tools / Platforms',
        items: [
          'Jira/Zephyr Scale',
          'Confluence',
          'Redmine',
          'Git',
          'Slack',
          'Miro',
        ],
      },
      { label: 'Methods / Workflows', items: ['Agile', 'Kanban', 'Scrum'] },
      {
        label: 'Processes',
        items: ['Technical documentation and coordination'],
      },
      {
        label: 'Documentation / Reporting',
        items: ['Office', 'Google Sheets', 'LaTeX', 'Markdown'],
      },
    ],
  },
  {
    title: 'Software & Tools',
    skills: [
      {
        label: 'Software',
        items: ['PIX4Dmatic', 'PIX4Dsurvey', 'Inkscape', 'GIMP', 'ExifTool'],
      },
    ],
  },
  {
    title: 'CMS & Web Publishing',
    skills: [
      {
        label: 'CMS & Web Publishing',
        items: ['Jekyll', 'WordPress', 'Textpattern', 'TYPO3'],
      },
    ],
  },
];

export default skills;
