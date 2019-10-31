/**
 *
 * Booler can convert any value to Boolean type.
 * 
 * @author Samob Chea <sombochea@cubetiqs.com>
 * @param {*} val Value to parse.
 */
const booler = (val) => {
    // transform to string lower case.
    val = val + "".toLowerCase();
    return val == 't' || val == 'true' || val == 1;
}

// export module within function name `booler`.
module.exports = booler;