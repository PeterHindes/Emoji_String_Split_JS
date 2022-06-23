const splitE6 = (string) => [...new Intl.Segmenter().segment(string)].map(x => x.segment)
const assembleE6 = (arr) => {let ret = ""; arr.forEach(e => {ret+=e}) ; return ret}

module.exports = { splitE6, assembleE6 };