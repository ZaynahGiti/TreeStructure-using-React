const generate = (n, f) => {
  f = f || function(i){return i}
  let arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(f(i))
  }
  return arr;
}

export const data = {
  text: 'awesome Node',
  number: '999',
  object: {
    key1: 'keyValue',
    array1: generate(2),
    object1: {
      text: 'Test'
    }
  },
  arrayOfObjects: generate(2, (i) => { return { x: i, y: i*i } }),
  arrayOfComplexObjects: generate(2, (i) => {
    return {
      x: i,
      y: generate(2, (i) => { return { x: 'value'+i, y: i*i*i } })
    }
  }),
  largeArray: generate(5, function(i){
 
    return {
      x: i,
      y: 2*i
    }
  })
};
