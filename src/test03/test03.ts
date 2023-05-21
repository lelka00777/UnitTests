import { student } from "./../test02/test02";
import { StydentType } from "../test02/test02";
import {
  CityType,
  TypeHouses,
  governmentBuildingsType,
} from "../test02/test02_02";

export const sum = (a: number, b: number) => {
  return a + b;
};

const res = sum(sum(2, 3), sum(3, 4));

export const addSkils = (st: StydentType, skill: string) => {
  st.technologes.push({ id: new Date().getTime(), title: skill });
};

export function makeSrtudenActive(s: StydentType) {
  s.iSAactive = true;
}

export function set11(s: StydentType, street: string) {
  s.address.streetTitle = "leninskiy";
}
export const liveStudentInCitty = (s: StydentType, cittyName: string) => {
  return s.address.sitti.title === cittyName;
};
export const addMoneyToBudget = (
  build: governmentBuildingsType,
  budget: number
) => {
  build.budget += budget;
};
export const repairHouse = (houses: TypeHouses) => {
  houses.repaired = true;
};
export const toFireStaff = (
  staffCount: governmentBuildingsType,
  num: number
) => {
  staffCount.staffCount -= num;
};

export const toHireStaff = (
  staffCount: governmentBuildingsType,
  num: number
) => {
  staffCount.staffCount += num;
};


export const createMessege = (
  city:CityType
) => {
  return `Hello ${city.title} citizens.I wont you be happy.All ${city.cityZenumber}`
};