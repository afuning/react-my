export function formatEmoji (uCode) {
    let uCodeFormat = parseInt(uCode.replace(/U\+/, ''), 16);
    // console.log(uCodeFormat);
    // return `&#${uCodeFormat};`;
    return {__html: `&#${uCodeFormat};`};
}
export function getRand (min, max) {
    return Math.floor(Math.random() * max) + min;
}