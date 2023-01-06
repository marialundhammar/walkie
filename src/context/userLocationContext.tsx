import { createContext, useContext, useState } from 'react';

interface UserLocationI {
  lat: number;
  long: number;
}

export const UserLocationContext = createContext<{
  updateUserLocation: (location: any) => void;
  userLocation: { lat: number; long: number };
}>(null);

const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({
    lat: 13,
    long: 55,
  });

  const updateUserLocation = (location: any) => {
    setUserLocation(location);
  };

  return (
    <UserLocationContext.Provider value={{ updateUserLocation, userLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
