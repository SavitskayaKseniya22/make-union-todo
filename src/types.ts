export interface UserType {
  id: string;
  email: string;
  name: string;
  tel: string;
  bio: string;
}

export const isUser = (data: any): data is UserType => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.email === 'string' &&
    typeof data.name === 'string' &&
    typeof data.tel === 'string' &&
    typeof data.bio === 'string'
  );
};

export const isUserResult = (data: any): data is UserType[] => {
  return data && (data.length === 0 || (data.length > 0 && isUser(data[0])));
};
