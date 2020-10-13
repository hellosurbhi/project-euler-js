const { multiplesOf3and5 } = require('./problem1');

describe('Adder of multiples of 3 and 5 function', () => {
  it('should add all the multiples of 3 and 5 from 1 to 1000', () => {
      expect(multiplesOf3and5(1000)).toBe(233168)
  })
  it('should add all the multiples of 3 and 5 from 1 to 10', () => {
    expect(multiplesOf3and5(10)).toBe(23)
})
})

// describe('Demo adder function', () => {

//   it('Should add 2 and 2 and equal 4', () => {
//     expect(add(2, 2)).toBe(4)
//   })

//   it('Should add 5 and 5 and equal 10', () => {
//     expect(add(5, 5)).toBe(10)
//   })

//   it('Should add 100 and 100 and equal 200', () => {
//     expect(add(100, 100)).toBe(200)
//   })
// })

// describe('Demo multiply function', () => {

//   it('Should multiply 2 and 2 and equal 4', () => {
//     expect(multiply(2, 2)).toBe(4)
//   })

//   it('Should multiply 5 and 5 and equal 25', () => {
//     expect(multiply(5, 5)).toBe(25)
//   })

//   it('Should multiply 100 and 100 and equal -10000', () => {
//     expect(multiply(100, -100)).toBe(-10000)
//   })
// })


// describe('Split method', () => {
//   it('should split a string into an array', () => {
//     expect(split('abc')).toEqual(['a', 'b', 'c'])


//     // expect([] === []).toBe(true)
//     // const arr =[]
//     // const arr2 = arr
//     // expect(arr).toBe(arr2)

//   })
//   // it('should compare arrays', () => {
//   //   expect('abc').toBe('abc');
//   // })

// })

// describe('Request mock function', () => {
// //   it('Should provide data if status is 200', () => {
// //     expect(request(200)).toBe('Here is your data')
// //   })
// //   it('Should throw error if status is not 200', () => {
// //     expect(() => request(500)).toThrow('Server is down!')
// //   })

//   it('Should asynchronously fetch data', aynch, () => {
//     request().then(response =>{
//       expect(response).toEqual({ data: 'Hello World!' })
//       })
//   })

// })

// 233168
