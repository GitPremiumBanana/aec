function c1v1(ratingA, ratingB, K, result) {

    if (result > 1 || 0 > result) {

        return `\n\nc1v1: SyntaxError: Unexpected Number\n\n`

    }

    var Ea = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));

    var Ra = ratingA + K * (result - Ea)

    Ra = Math.round(Ra * 100) / 100;


    var Eb = 1 / (1 + Math.pow(10, (ratingA - ratingB) / 400));

    var Rb = ratingB + K * (((result - 1) * -1) - Eb)

    Rb = Math.round(Rb * 100) / 100;

    var res = []

    res.push(Ra)
    res.push(Rb)
    res.push(Ea * 100)
    res.push(Eb * 100)

    return res;

    // 0: New Rating A
    // 1: New Rating B

    // 2: Win % A
    // 3: Win % B

}

function c2v2(ratingA, ratingB, ratingC, ratingD, K, result) {

    if (result > 1 || 0 > result) {

        return `\n\nc2v2: SyntaxError: Unexpected Number\n\n`

    }

    var avAB = (parseFloat(ratingA + ratingB)) / 2
    var avCD = (parseFloat(ratingC + ratingD)) / 2

    var Eab = 1 / (1 + Math.pow(10, (avCD - avAB) / 400));

    var Ra = ratingA + K * (result - Eab)
    var Rb = ratingB + K * (result - Eab)

    Ra = Math.round(Ra * 100) / 100;
    Rb = Math.round(Rb * 100) / 100;


    var Ecd = 1 / (1 + Math.pow(10, (avAB - avCD) / 400));

    var Rc = ratingC + K * (((result - 1) * -1) - Ecd)
    var Rd = ratingD + K * (((result - 1) * -1) - Ecd)

    Rc = Math.round(Rc * 100) / 100;
    Rd = Math.round(Rd * 100) / 100;

    var res = []

    res.push(Ra)
    res.push(Rb)
    res.push(Rc)
    res.push(Rd)
    res.push(Eab * 100)
    res.push(Ecd * 100)

    return res;

    // 0: New Rating A
    // 1: New Rating B
    // 2: New Rating C
    // 3: New Rating D

    // 4: Win % AB
    // 5: Win % CD

}

function c3v3(ratingA, ratingB, ratingC, ratingD, ratingE, ratingF, K, result) {

    if (result > 1 || 0 > result) {

        return `\n\nc3v3: SyntaxError: Unexpected Number\n\n`

    }

    var avABC = (parseFloat(ratingA + ratingB + ratingC)) / 3
    var avDEF = (parseFloat(ratingD + ratingE + ratingF)) / 3

    var Eabc = 1 / (1 + Math.pow(10, (avDEF - avABC) / 400));

    var Ra = ratingA + K * (result - Eabc)
    var Rb = ratingB + K * (result - Eabc)
    var Rc = ratingC + K * (result - Eabc)

    Ra = Math.round(Ra * 100) / 100;
    Rb = Math.round(Rb * 100) / 100;
    Rc = Math.round(Rc * 100) / 100;


    var Edef = 1 / (1 + Math.pow(10, (avABC - avDEF) / 400));

    var Rd = ratingD + K * (((result - 1) * -1) - Edef)
    var Re = ratingE + K * (((result - 1) * -1) - Edef)
    var Rf = ratingF + K * (((result - 1) * -1) - Edef)

    Rd = Math.round(Rd * 100) / 100;
    Re = Math.round(Re * 100) / 100;
    Rf = Math.round(Rf * 100) / 100;

    var res = []

    res.push(Ra)
    res.push(Rb)
    res.push(Rc)
    res.push(Rd)
    res.push(Re)
    res.push(Rf)
    res.push(Eabc * 100)
    res.push(Edef * 100)

    return res;

    // 0: New Rating A
    // 1: New Rating B
    // 2: New Rating C
    // 3: New Rating D
    // 4: New Rating E
    // 5: New Rating F

    // 6: Win % AB
    // 7: Win % CD

}

function c4v4(ratingA, ratingB, ratingC, ratingD, ratingE, ratingF, ratingG, ratingH, K, result) {

    if (result > 1 || 0 > result) {

        return `\n\nc3v3: SyntaxError: Unexpected Number\n\n`

    }

    var avABCD = (parseFloat(ratingA + ratingB + ratingC + ratingD)) / 4
    var avEFGH = (parseFloat(ratingE + ratingF + ratingG + ratingH)) / 4

    var Eabcd = 1 / (1 + Math.pow(10, (avEFGH - avABCD) / 400));

    var Ra = ratingA + K * (result - Eabcd)
    var Rb = ratingB + K * (result - Eabcd)
    var Rc = ratingC + K * (result - Eabcd)
    var Rd = ratingD + K * (result - Eabcd)

    Ra = Math.round(Ra * 100) / 100;
    Rb = Math.round(Rb * 100) / 100;
    Rc = Math.round(Rc * 100) / 100;
    Rc = Math.round(Rc * 100) / 100;
    Rd = Math.round(Rd * 100) / 100;


    var Eefgh = 1 / (1 + Math.pow(10, (avABCD - avEFGH) / 400));

    var Re = ratingE + K * (((result - 1) * -1) - Eefgh)
    var Rf = ratingF + K * (((result - 1) * -1) - Eefgh)
    var Rg = ratingG + K * (((result - 1) * -1) - Eefgh)
    var Rh = ratingH + K * (((result - 1) * -1) - Eefgh)

    Re = Math.round(Re * 100) / 100;
    Rf = Math.round(Rf * 100) / 100;
    Rg = Math.round(Rg * 100) / 100;
    Rh = Math.round(Rh * 100) / 100;

    var res = []

    res.push(Ra)
    res.push(Rb)
    res.push(Rc)
    res.push(Rd)
    res.push(Re)
    res.push(Rf)
    res.push(Rg)
    res.push(Rh)
    res.push(Eabcd * 100)
    res.push(Eefgh * 100)

    return res;

    // 0: New Rating A
    // 1: New Rating B
    // 2: New Rating C
    // 3: New Rating D
    // 4: New Rating E
    // 5: New Rating F
    // 6: New Rating G
    // 7: New Rating H

    // 8: Win % AB
    // 9: Win % CD

}

module.exports = {
    c1v1: c1v1,
    c2v2: c2v2,
    c3v3: c3v3,
    c4v4: c4v4
}