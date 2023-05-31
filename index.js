'use strict'

// Removes undefined values from object
/**
 * @param {Object} obj
 * @returns {Object}
 */
function strip(obj) {
  let entries = Object.entries(obj)
  return entries.length == 0 ? obj : entries
  .map(([k,v])=>[k,v && typeof v === "object" ? Array.isArray(v) ? v : strip(v) : v])
  .reduce((a,[k,v]) => { return (v == null ? a : (a[k]=v, a)) }, {})
}
export default strip