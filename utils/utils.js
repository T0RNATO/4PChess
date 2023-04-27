export function arrContentsMatch(arr1, arr2) {
    return arr1.every((elem, i) => {
        return elem === arr2[i];
    });
}
export function arrHasArr(parent, arr) {
    return parent.some(subArr => {
        return arrContentsMatch(subArr, arr);
    })
}

const turnColours = [0x8c1818, 0x286283, 0x8f7f1f, 0x40732f, 0x8c1818];
let lerpR = 0;

/**
 * @param {HTMLElement} el - the element to animate on
 * @param {Number} turn1 - original turn number
 * @param {Number} turn2 - new turn number
 */
export function lerpBg(el, turn1, turn2) {
    lerpR += 0.05;
    const startC = turnColours[turn1];
    const endC = turnColours[turn2];
    const hex = "#" + lerpColour(startC, endC, lerpR).toString(16)
    if (turn2 === 0) {
        turn2 = 4;
    }
    const turn = lerp(turn1, turn2, lerpR)
    el.style.setProperty("--turn-color", hex)
    el.style.setProperty("--turn", turn * 90)
    if (lerpR < 1) {
        requestAnimationFrame(() => {
            lerpBg(el, turn1, turn2)
        })
    } else {
        lerpR = 0;
        if (turn2 === 4) {
            el.style.setProperty("--turn", 0)
        }
    }
}
/**
* @param {Number} a  (hex color start val)
* @param {Number} b  (hex color end val)
* @param {Number} amount  (the amount to fade from a to b)
* @returns {Number}
*/
export function lerpColour(a, b, amount) {
    const ar = a >> 16,
        ag = a >> 8 & 0xff,
        ab = a & 0xff,

        br = b >> 16,
        bg = b >> 8 & 0xff,
        bb = b & 0xff,

        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return (rr << 16) + (rg << 8) + (rb | 0);
}
export function lerp (start, end, amt){
    return (1-amt)*start+amt*end;
}