/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let answer = x;
    let a;  
  
    while (answer !== a) {
        a = answer;
        answer = Math.floor((a + x / a) / 2);
    }

    return answer;
}   

/**
 * https://en.wikipedia.org/wiki/Square_root#Computation
 * Start with an arbitrary positive start value x. The closer to the square root of a, the fewer the iterations that will be needed to achieve the desired precision.
 * Replace x by the average (a + x/a) / 2 between x and a/x.
 * Repeat from step 2, using this average as the new value of x.
 * a = 25, x = 4
 * (4 + 25/4) / 2
 */
