import { useLocation } from 'react-router-dom';
import { UserType, isUser } from '../types';
import { useEffect, useState } from 'react';
import ReturnButton from './ReturnButton';
import InfoBox from './to-do/Info';

export default function User() {
  const [data, setData] = useState<UserType | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const state = location.state;

    if (isUser(state)) {
      setData(state);
    } else {
      setIsError(true);
    }
  }, [location.state]);

  return (
    <div className="container">
      {isError && <InfoBox needReturn={true}>No data found</InfoBox>}
      {data && (
        <div className="user">
          <div className="user__header">
            <img src="/profile.svg" alt="Фото" className="user__pic" />
            <div>
              <h2 className="user__header-name">{data.name}</h2>
              <a href={`mailto:${data.email}`} className="user__header-email">
                {data.email}
              </a>
            </div>
          </div>
          <ul>
            <li className="user__content-item">
              <span>Name: </span>
              <span>{data.name}</span>
            </li>
            <li className="user__content-item">
              <span>Email: </span>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </li>
            <li className="user__content-item">
              <span>Tel: </span>
              <a href={`tel:${data.tel}`}>{data.tel}</a>
            </li>
            <li className="user__content-item user__content-bio">{data.bio}</li>
          </ul>
          <ReturnButton />
        </div>
      )}
    </div>
  );
}
