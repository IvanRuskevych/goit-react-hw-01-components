import Section from './task-01/Section/Section';
import TitleSecond from './task-01/TitleSecond/TitleSecond';

import Profile from './task-01/Profile/Profile';
import Statistics from './task-02/Statistics/Statistics';
import FriendList from './task-03/FriendList/FriendList';
import TransactionHistory from './task-04/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

// console.log(transactions);

export const App = () => {
  return (
    <>
      <Section>
        <TitleSecond
          title="Завдання 1 - Профіль соціальної мережі"
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

      <Section>
        <TitleSecond
          title="Завдання 2 - Секція статистики"
          cls="titleSecond"
        ></TitleSecond>
        <TitleSecond title="upload stats" cls="titleStat"></TitleSecond>
        <Statistics stats={data}></Statistics>
      </Section>

      <Section>
        <TitleSecond
          title="Завдання 3 - Список друзів"
          cls="titleSecond"
        ></TitleSecond>

        <FriendList items={friends}></FriendList>
      </Section>

      <Section>
        <TitleSecond
          title="Завдання 4 - Історія транзакцій"
          cls="titleSecond"
        ></TitleSecond>

        <TransactionHistory items={transactions}></TransactionHistory>
      </Section>
    </>
  );
};
