const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Android Studio',
    competency: 4,
    category: ['Mobile', 'Tools'],
  },
  {
    title: 'Jetpack Compose',
    competency: 3,
    category: ['Mobile'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'VS Code',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Visual Stuido 2022',
    competency: 3,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
