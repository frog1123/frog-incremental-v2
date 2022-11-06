const changelogArray = [
  { name: 'initial-prerelease-v0.0.1a', date: '11/5/2022', content: ['added 1st, 2nd 3rd frog ponds', 'added multipler upgrade'] },
  { name: 'initial-prerelease-v0.0.1b', date: '11/5/2022', content: ['minified with gulp'] },
  { name: 'initial-prerelease-v0.0.1c', date: '11/5/2022', content: ['switched from github pages to vercel'] },
  { name: 'initial-prerelease-v0.0.2a', date: '11/5/2022', content: ['add sidebar to switch pages'] },
  { name: 'initial-prerelease-v0.0.2b', date: '11/5/2022', content: ['fixed issue with assets not loading correctly'] },
  { name: 'initial-prerelease-v0.0.3a', date: '11/5/2022', content: ['added 4th pond', 'added save and load buttons', 'auto load-btn', 'can preserve page'] },
  { name: 'initial-prerelease-v0.0.3b', date: '11/5/2022', content: ['fixed issue with first load'] }
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

  const changelogContent = document.createElement('div');
  const changelogContentClass = document.createAttribute('class');
  changelogContentClass.value = 'changelog-content';
  changelogContent.setAttributeNode(changelogContentClass);

  obj.content.forEach(c => {
    const contentLine = document.createElement('p');
    contentLine.textContent = `- ${c}`;

    changelogContent.appendChild(contentLine);

    console.log(c);
  });

  node.appendChild(titleContainer);
  node.appendChild(line);
  node.appendChild(changelogContent);
  document.getElementById('changelogs-container').appendChild(node);
};

window.onload = () => {
  changelogArray.forEach(obj => createChangelogs(obj));
};