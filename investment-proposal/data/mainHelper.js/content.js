const vm = require('vm')

const interpolate = (tmpl, vars) => {
  return vm.runInNewContext('`' + tmpl + '`' , vars)
}

async function localizeExt(key, folder, opts) {
  const v = await localize(key, folder);
  return interpolate(v, opts.hash)
}

function ifEquals(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
}

function ifvalue(conditional, options) {
    if (options.hash.value === conditional) {
        return options.fn(this)
    } else {
        return options.inverse(this);
    }
}

function toUpperCase(text) {
  return text.toUpperCase()
}

function toLocaleString(text) {
  return text.toLocaleString();
}

function formatNumber(number, decimalPlaces=2, isPercentage=false) {
  if (isPercentage) number = number * 100;
  number = number.toFixed(decimalPlaces);
  number = number.toLocaleString()
  if (isPercentage) number = `${number}%`;
  return number;
}
