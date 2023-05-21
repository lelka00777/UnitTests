import { StydentType } from "./../test02/test02";
import { addSkils, liveStudentInCitty, makeSrtudenActive, set11} from "./test03";

let student: StydentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "lelka",
    age: 32,
    iSAactive:false,
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
});

test("New tech skill should be added to student", () => {
  expect(student.technologes.length).toBe(3);
  addSkils(student, "JS");
  expect(student.technologes.length).toBe(4);
  expect(student.technologes[3].title).toBe("JS");
  expect(student.technologes[3].id).toBeDefined();
});

test('student should be made active boolean',() => {

    expect(student.iSAactive).toBe(false);
    makeSrtudenActive(student);
    expect(student.iSAactive).toBe(true);
  

})

test("student should be made active1", () => {
  expect(student.address.streetTitle).toBe("surganova");

  set11(student, "leninskiy");
  expect(student.address.streetTitle).toBe("leninskiy");
});

test("dous live student in citty",()=>{
  let res = liveStudentInCitty(student,"Moskov")
  let res1 = liveStudentInCitty(student,"Minsk")

  expect(res).toBe(false)
  expect(res1).toBe(true)
})