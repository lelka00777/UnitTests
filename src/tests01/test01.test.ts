import { massiv, multuplay, sum } from "./test01";

let a:number;
let b:number;
let c:number;


beforeEach(()=>{
    a = 1
    b = 2
    c = 3
})

test('sum shulbe correct ',() => {
    



    const resalt1 = sum(a,b)
    const resalt2 = sum(b,c)

    expect(resalt1).toBe(3)
    expect(resalt2).toBe(5)
})

test('multuplay shulbe correct ',() => {
  


    const resalt1 = multuplay(a,b)
    const resalt2 = multuplay(b,c)

    expect(resalt1).toBe(2)
    expect(resalt2).toBe(6)
})
test('array string shulbe correct ',() => {
    
    const sent1 = 'hello my freand';
    const  sent2 = 'JS - the best programming language'
   


    const resalt1 = massiv(sent1)
    const resalt2 = massiv(sent2)
  

    expect(resalt1.length).toBe(3)
    expect(resalt1[0]).toBe('hello')
    expect(resalt1[1]).toBe('my')
    expect(resalt1[2]).toBe('freand')

    expect(resalt2.length).toBe(6)
    expect(resalt2[0]).toBe('JS') 
    expect(resalt2[1]).toBe('-')
    expect(resalt2[2]).toBe('the')
    expect(resalt2[3]).toBe('best')
    expect(resalt2[4]).toBe('programming')
    expect(resalt2[5]).toBe('language')
    
})


 