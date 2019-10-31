/**
 * @author Samob Chea <sombochea@cubetiqs.com>
 *
 * Booler can convert any value to Boolean.
 * 
 * @param {*} val Value to parse.
 */
const booler = (val) => {
    return val == 't' || val == 'true' || val == 1;
}

// export module within function name `booler`.
module.exports = booler;