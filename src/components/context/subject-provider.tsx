import React, { createContext, useState } from 'react';

type SubjectProviderProps = {
  children: React.ReactNode;
};

type SubjectContextType = {
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
};

const defaultContext = {
  subject: '',
  setSubject: () => {},
};

export const Subject = createContext<SubjectContextType>(defaultContext);

export function SubjectProvider({ children }: SubjectProviderProps) {
  const [subject, setSubject] = useState<string>(defaultContext.subject);

  return (
    <Subject.Provider
      value={{
        subject,
        setSubject,
      }}
    >
      {children}
    </Subject.Provider>
  );
}
