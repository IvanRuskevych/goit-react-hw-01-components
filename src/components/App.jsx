import Section from './task-01/Section/Section';
import TitleSecond from './task-01/TitleSecond/TitleSecond';

import Profile from './task-01/Profile/Profile';
import Statistics from './task-02/Statistics/Statistics';
import FriendList from './task-03/FriendList/FriendList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

console.log(friends);

export const App = () => {
  return (
    <>
      <Section cls="taskOne">
        <TitleSecond
          title="Завадання 1 - Профіль соціальної мережі"
          cls="titleSecond"
        ></TitleSecond>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section cls="taskTwo">
        <TitleSecond
          title="Завадання 2 - Секція статистики"
          cls="titleSecond"
        ></TitleSecond>
        <TitleSecond title="upload stats" cls="titleStat"></TitleSecond>
        <Statistics stats={data}></Statistics>
      </Section>

      <Section cls="taskThree">
        <TitleSecond
          title="Завадання 3 - Список друзів"
          cls="titleSecond"
        ></TitleSecond>

        <FriendList items={friends}></FriendList>
      </Section>
    </>
  );
};
