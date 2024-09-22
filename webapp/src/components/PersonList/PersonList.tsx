import { useEffect, useState } from 'react';
import { Person } from '../../types/person';
import './PersonList.css';

function PersonList() {
  const [persons, setPersons] = useState<Array<Person>>();

  useEffect(() => {
    (async () => {
      const foo = await fetch('http://localhost:3000/persons');
      const bar = (await foo.json()) as Array<Person>;
      setPersons(bar);
    })();
  }, []);

  if (!persons || persons.length === 0) {
    return <h2>no people</h2>;
  }

  return (
    <>
      <ul>
        {persons.map(p => (
          <li>
            {p.firstName} {p.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PersonList;
