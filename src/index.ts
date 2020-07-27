import basic from './basic';
import conversion from './conversion';
import isMethod from './isMethod';
import number from './number';
import search from './search';
import sort from './sort';

const mathPro = {
  ...basic,
  ...conversion,
  ...isMethod,
  ...number,
  ...search,
  ...sort
}

export = mathPro;