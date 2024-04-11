import React, { PropsWithChildren, useContext, useMemo } from "react";

import { User, UserConfig, UserContext } from "jake-core";

const UserProviderContext = React.createContext<UserContext>({ user: null });

export type UserProviderProps = UserConfig & PropsWithChildren;

export const UserProvider: React.FC<UserProviderProps> = (props) => {
  const user = useMemo(() => {
    return new User({ name: props.name, age: props.age });
  }, []);

  const providedValue = {
    user,
  };

  return (
    <UserProviderContext.Provider value={providedValue}>
      {props.children}
    </UserProviderContext.Provider>
  );
};

export const userUser = () => useContext(UserProviderContext);
