// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let spaces = ' '
    let stair = '#'

    for (let i = 1; i <= n; i++){
        console.log(stair.repeat(i) + spaces.repeat(n - i))
    }
}

console.log(steps(2))

module.exports = steps;
