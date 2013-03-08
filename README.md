jasmine-every
=============

A helper function for Jasmine to allow one to iterate a test or suite through an array of test case data.

You pass ```every``` an array of test data, along with a callback containing tests and suites, and it iterates through the array, applying the tests to each case of data. To wit:

```javascript
var testcases = ["dataset_one","dataset_two","dataset_three"]

every(testcases,function(index, testcase){
  describe("each Test Case",function(){
    it("should be a string",function(){
      expect(typeof testcase).toEqual("string");
      })
    })  
  };
```

There's more
------------
Say something is broken, and you want to temporarily step through just one your testcases without your dismantling test data, or the test suite, to do so. Simply give the ```every``` function the array position of the case you do want to run and it will run just that. To run the third case in your array of test cases:

```javascript
every(testcase, 2,function(index,testcase){
  // tests go here
});
```

It can also take an array, if there are a specific set of tests you want to run. So, to iterate through the first three cases:


```javascript
every(testcase,[0,1,2],function(index,testcase){
  // tests go here
});
```


Installation
------------
Include this whereever you are including your jasmine files.
