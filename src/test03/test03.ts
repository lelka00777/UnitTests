import { student } from './../test02/test02';
import { StydentType } from "../test02/test02";


export const sum = (a: number, b: number) => {
  return a + b;
};

const res = sum(sum(2, 3), sum(3, 4));

export const addSkils = (st: StydentType, skill: string) => {
  st.technologes.push({ id: new Date().getTime(), title: skill });
};

export function makeSrtudenActive(s:StydentType){

s.iSAactive = true
}

export function set11(s:StydentType,street:string){
s.address.streetTitle="lenin"
}