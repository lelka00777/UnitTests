export type StydentType = {
  id: number;
  name: string;
  age: number;
  iSAactive: boolean;
  address: TypeAdress;
  technologes: TypeTechnologes[];
};
type TypeAdress = {
  streetTitle: string;
  sitti: TypeSitti;
};
type TypeSitti = {
  title: string;
  contryTitle: string;
};
type TypeTechnologes = {
  id: number;
  title: string;
};

export const student: StydentType = {
  id: 1,
  name: "lelka",
  age: 32,
  iSAactive: true,
  address: {
    streetTitle: "surganova",
    sitti: {
      title: "Minsk",
      contryTitle: "Belaruse",
    },
  },
  technologes: [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "React" },
  ],
};

export const impart = (student: StydentType) => {
  return student;
};
