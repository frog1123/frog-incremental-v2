const changelogArray = [
  { name: 'initial-prerelease-v0.0.1a', date: '11/5/2022', content: ['added 1st, 2nd, 3rd frog ponds', 'added multipler upgrade'] },
  { name: 'initial-prerelease-v0.0.1b', date: '11/5/2022', content: ['minified with gulp'] },
  { name: 'initial-prerelease-v0.0.1c', date: '11/5/2022', content: ['switched from github pages to vercel'] },
  { name: 'initial-prerelease-v0.0.2a', date: '11/5/2022', content: ['added sidebar to switch pages'] },
  { name: 'initial-prerelease-v0.0.2b', date: '11/5/2022', content: ['fixed issue with assets not loading correctly'] },
  { name: 'initial-prerelease-v0.0.3a', date: '11/5/2022', content: ['added 4th pond', 'added save and load buttons', 'auto load-btn', 'can preserve page'] },
  { name: 'initial-prerelease-v0.0.3b', date: '11/5/2022', content: ['fixed issue with first load'] },
  { name: 'initial-prerelease-v0.0.4a', date: '11/6/2022', content: ['made layout responsive'] },
  { name: 'initial-prerelease-v0.0.5a', date: '11/6/2022', content: ['added buy max multiplier button', 'added sound effects on buy'] },
  { name: 'initial-prerelease-v0.0.6a', date: '11/6/2022', content: ['sidebar closes when clicked anywhere besides sidebar'] },
  { name: 'initial-prerelease-v0.0.7a', date: '11/6/2022', content: ['added export and import button', 'added toggle soudn effects button'] },
  { name: 'initial-prerelease-v0.0.8a', date: '11/7/2022', updateName: 'The River Update', content: ['added rivers (prestige system)', 'added 5th and 6th ponds'] },
  {
    name: 'initial-prerelease-v0.0.8b',
    date: '11/8/2022',
    content: [
      'added 7th, 8th, 9th, 10th frog ponds',
      'fixed issue with river amount displaying as NaN',
      'made river prestige button responsive',
      'styled scrollbar',
      'fixed sidebar overlay to cover whole page'
    ]
  },
  { name: 'initial-prerelease-v0.0.9a', date: '11/8/2022', content: ['frog amount can bow be seen on any page', 'plans for a tutorial page', 'changelog can be accesed through sidebar'] },
  { name: 'initial-prerelease-v0.0.9b', date: '11/8/2022', content: ['added babel'] },
  { name: 'initial-prerelease-v0.0.9c', date: '11/8/2022', content: ['fixed format not working which broke game', 'removed random console log'] },
  { name: 'initial-prerelease-v0.0.9d', date: '11/9/2022', content: ['fixed 7th, 8th, 9th, 10th not resetting properly on local reset'] },
  { name: 'initial-prerelease-v0.0.9e', date: '11/15/2022', content: ['fixed issue with ui not displaying text correctly'] },
  { name: 'initial-prerelease-v0.0.10a', date: '11/15/2022', updateName: 'The Lake Update', content: ['added lakes (prestige system above rivers)'] }
];

const createChangelogs = obj => {
  const node = document.createElement('div');
  const nodeClass = document.createAttribute('class');
  nodeClass.value = 'changelog-container';
  const nodeId = document.createAttribute('id');
  nodeId.value = obj.name;
  node.setAttributeNode(nodeId);
  node.setAttributeNode(nodeClass);

  const titleContainer = document.createElement('div');
  const titleContainerClass = document.createAttribute('class');
  titleContainerClass.value = 'changelog-title-container';
  titleContainer.setAttributeNode(titleContainerClass);

  const h1 = document.createElement('h1');
  h1.textContent = obj.name;
  titleContainer.appendChild(h1);

  const date = document.createElement('p');
  date.textContent = obj.date;
  titleContainer.appendChild(date);

  const line = document.createElement('div');
  const lineClass = document.createAttribute('class');
  lineClass.value = 'line';
  line.setAttributeNode(lineClass);

  const updateName = document.createElement('h1');
  const updateNameClass = document.createAttribute('class');
  updateNameClass.value = 'update-name';
  updateName.setAttributeNode(updateNameClass);

  if (typeof obj.updateName !== 'undefined') updateName.textContent = obj.updateName;

  const changelogContent = document.createElement('div');
  const changelogContentClass = document.createAttribute('class');
  changelogContentClass.value = 'changelog-content';
  changelogContent.setAttributeNode(changelogContentClass);

  obj.content.forEach(c => {
    const contentLine = document.createElement('p');
    contentLine.textContent = `- ${c}`;

    changelogContent.appendChild(contentLine);
  });

  node.appendChild(titleContainer);
  node.appendChild(line);
  if (typeof obj.updateName !== 'undefined') node.appendChild(updateName);
  node.appendChild(changelogContent);
  document.getElementById('changelogs-container').appendChild(node);
};

const createJumpToLinks = obj => {
  const node = document.createElement('a');
  const nodeClass = document.createAttribute('class');
  nodeClass.value = 'jump-to-link';
  const nodeHref = document.createAttribute('href');
  nodeHref.value = `#${obj.name}`;
  node.setAttributeNode(nodeHref);
  node.setAttributeNode(nodeClass);
  node.textContent = obj.name;

  document.getElementById('jump-to-container').appendChild(node);
};

window.onload = () => {
  changelogArray.forEach(obj => {
    createChangelogs(obj);
    createJumpToLinks(obj);
  });
};
