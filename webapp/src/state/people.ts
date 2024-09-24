import { selector } from 'recoil';
import { Person } from '../types/person';

export const peopleSelector = selector<Person[]>({
  key: 'peopleSelectorState', // unique ID (with respect to other atoms/selectors)
  get: async () => {
    const data = await fetch('http://localhost:3000/people');
    const people = (await data.json()) as Person[];
    return people;
  },
});
