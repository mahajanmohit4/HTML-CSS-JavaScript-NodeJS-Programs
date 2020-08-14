/** Study setInterval */

// Case - 1 :: calling setInterval
setInterval(function () {
    // logic here
    console.log("I am interval, using annonymous!!");
  }, 1000);
  
  // Case - 2
  setInterval(() => {
    // logic here
    console.log("I am also interval, using Arrow");
  }, 1000);
  
  // Case - 3;
  let anfn = function () {
    // logic here
    console.log("I am getting uses as parameter inside the setinveral");
  };
  setInterval(anfn, 1000);



  /**
 * the logic of the program is syncronous
 * the execution happens in this program in one order or proper order
 *
 * all the statement are blocking in nature;
 */
function example() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
  }
  
  /**
   * Exeuction is async here;
   * At one place it does not execute in sync
   */
  function example1() {
    console.log("1");
    console.log("2");
  
    // non-blocking statment ::
    // Ayncchronous
    // at pizzahut; we place the order; but we dont block the next customer
    setInterval(() => {
      console.log("3. I am callback", new Date());
    }, 2000);
  
    console.log("4");
    console.log("5");
  }