import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./Friends/Friends";
import { Transactions } from "./Transactions/Transactions";
import profile from "./dataset/profile.json";
import statistics from "./dataset/data.json";
import friends from "./dataset/friends.json"; 
import transactions from "./dataset/transactions.json";

export const App = () => {
  const {username,tag,location,avatar,stats} = profile
  return (
    <div>
      <Profile username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}/>
      <Statistics title="Upload stats" stats={statistics} />
      <Friends friends={friends} />
      <Transactions items={transactions} />;
    </div>
  );
};
