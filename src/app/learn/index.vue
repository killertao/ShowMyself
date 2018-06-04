<template>
  <div>
    es66666666666666666666666666666666666666
    {{msg}}
  </div>
</template>
<script>
  const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]: function () {

    },
    next: function () {
       ;
      let values = Object.values(this);

      i++;
      return {
        value: values[i] + 4,
        done: !Boolean(values[i])
      };
    }
  }
  const obj2 = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
           ;
          return {
            value: 1,
            done: true
          };
        }
      };
    }
  };
  ;
  //
  //  class RangeIterator {
  //    constructor(start, stop) {
  //      this.value = start;
  //      this.stop = stop;
  //    }
  //
  //    [Symbol.iterator]() {
  //      return this;
  //    }
  //
  //    next() {
  //      var value = this.value;
  //      if (value < this.stop) {
  //        this.value++;
  //        return {done: false, value: value};
  //      }
  //      return {done: true, value: undefined};
  //    }
  //  }
  //
  //  function range(start, stop) {
  //    return new RangeIterator(start, stop);
  //  }

  //  for (var value of range(0, 3)) {
  //    console.log(value); // 0, 1, 2
  //  }
//  for (var item of obj2) {
//     ;
//    console.log(item);
//  }
  //  let arr = ['a', 'b', 'c'];
  //   ;
  //  let iter = arr[Symbol.iterator]();
  //
  //  iter.next() // { value: 'a', done: false }
  //  iter.next() // { value: 'b', done: false }
  //  iter.next() // { value: 'c', done: false }
  //  iter.next() // { value: undefined, done: true }
 console.log(1);
  export default {
    name: 'Index',
    data() {
      return {
        msg: "我是msg a "
      }
    }
  }
</script>
