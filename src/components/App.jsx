import Section from './section/Section';
import Profile from './task-01/Profile';
import user from '../data/user.json';
console.log(user);

export const App = () => {
  return (
    <Section
      title="Завадання 1 - Профіль соціальної мережі"
      cssVariant="taskOne"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Section>
  );
};
