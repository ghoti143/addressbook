import { FunctionComponent } from 'react';
import { peopleSelector } from '../../state/people';
import { useRecoilValueLoadable } from 'recoil';

import './PeopleList.css';

export const PeopleList: FunctionComponent = () => {
  const peopleLoadable = useRecoilValueLoadable(peopleSelector);

  if (peopleLoadable.state === 'hasError') return <h2>Error. Unable to display people.</h2>;

  if (peopleLoadable.state === 'loading') return <h2>Loading people...</h2>;

  if (peopleLoadable.contents.length === 0) return <h2>no people</h2>;

  return (
    <>
      <ul>
        {peopleLoadable.contents.map(p => (
          <li key={p.id}>
            {p.firstName} {p.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};
