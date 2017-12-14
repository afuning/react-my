export function formatEmoji (uCode) {
    let uCodeFormat = parseInt(uCode.replace(/U\+/, ''), 16);
    // console.log(uCodeFormat);
    // return `&#${uCodeFormat};`;
    return {__html: `&#${uCodeFormat};`};
}
export function getRand (min, max) {
    return Math.floor(Math.random() * max) + min;
}
export function secondToMinute (s) {
    const m = parseInt(s / 60, 10);
    s = parseInt(s - m * 60, 10);
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}