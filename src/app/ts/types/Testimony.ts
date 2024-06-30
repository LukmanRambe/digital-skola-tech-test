export type Testimony = {
  id: number;
  username: string;
  imageUrl: string;
  title: {
    last: string;
    current: string;
  };
  company: {
    last: string;
    current: string;
  };
  testimony: string;
  duration: string;
};
