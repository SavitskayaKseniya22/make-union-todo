import { useEffect, useState } from 'react';
import { UserType, isUserResult } from '../types';
import { Link } from 'react-router-dom';
import InfoBox from './to-do/Info';

export default function Users() {
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.jsonserver.io/users', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-Jsio-Token': '97970985a43ad5b2c7e848922a5c9c5c',
          },
        });
        const result = await response.json();
        if (isUserResult(result)) {
          setUsers(result);
        } else {
          throw new Error('Type of data is wrong');
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <div className="container">
      {isLoading && <InfoBox needReturn={false}>it is loading...</InfoBox>}
      {isError && <InfoBox needReturn={true}>Something went wrong! Reload the page.</InfoBox>}
      {users && (
        <ul className="users__list">
          {users.map((item) => {
            return (
              <li key={item.id} className="users__item">
                <Link to={`user/${item.id}`} state={item}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
