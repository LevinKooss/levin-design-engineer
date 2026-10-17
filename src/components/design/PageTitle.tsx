import { useEffect } from 'react';

export const PageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Levin Kooss`;
    return () => { document.title = previousTitle; };
  }, [title]);

  return null;
};
