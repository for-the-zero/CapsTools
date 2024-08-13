var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/mdui/mdui.js
var mdui_exports = {};
__export(mdui_exports, {
  $: () => $,
  Avatar: () => Avatar,
  Badge: () => Badge,
  BottomAppBar: () => BottomAppBar,
  Button: () => Button,
  ButtonIcon: () => ButtonIcon,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  CircularProgress: () => CircularProgress,
  Collapse: () => Collapse,
  CollapseItem: () => CollapseItem,
  Dialog: () => Dialog,
  Divider: () => Divider,
  Dropdown: () => Dropdown,
  Fab: () => Fab,
  Icon: () => Icon,
  Layout: () => Layout,
  LayoutItem: () => LayoutItem,
  LayoutMain: () => LayoutMain,
  LinearProgress: () => LinearProgress,
  List: () => List,
  ListItem: () => ListItem,
  ListSubheader: () => ListSubheader,
  Menu: () => Menu,
  MenuItem: () => MenuItem,
  NavigationBar: () => NavigationBar,
  NavigationBarItem: () => NavigationBarItem,
  NavigationDrawer: () => NavigationDrawer,
  NavigationRail: () => NavigationRail,
  NavigationRailItem: () => NavigationRailItem,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  RangeSlider: () => RangeSlider,
  Ripple: () => Ripple,
  SegmentedButton: () => SegmentedButton,
  SegmentedButtonGroup: () => SegmentedButtonGroup,
  Select: () => Select,
  Slider: () => Slider,
  Snackbar: () => Snackbar,
  Switch: () => Switch,
  Tab: () => Tab,
  TabPanel: () => TabPanel,
  Tabs: () => Tabs,
  TextField: () => TextField,
  Tooltip: () => Tooltip,
  TopAppBar: () => TopAppBar,
  TopAppBarTitle: () => TopAppBarTitle,
  alert: () => alert,
  breakpoint: () => breakpoint,
  confirm: () => confirm,
  dialog: () => dialog,
  getColorFromImage: () => getColorFromImage,
  getLocale: () => getLocale3,
  getTheme: () => getTheme,
  loadLocale: () => loadLocale2,
  observeResize: () => observeResize,
  prompt: () => prompt,
  removeColorScheme: () => removeColorScheme,
  setColorScheme: () => setColorScheme,
  setLocale: () => setLocale3,
  setTheme: () => setTheme,
  snackbar: () => snackbar,
  throttle: () => throttle
});
module.exports = __toCommonJS(mdui_exports);

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent2() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id2) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id2);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/@mdui/jq/shared/helper.js
var getNodeName = (element) => {
  return element?.nodeName.toLowerCase() ?? "";
};
var isNodeName = (element, name) => {
  return element?.nodeName.toLowerCase() === name.toLowerCase();
};
var isFunction = (target) => {
  return typeof target === "function";
};
var isString = (target) => {
  return typeof target === "string";
};
var isNumber = (target) => {
  return typeof target === "number";
};
var isBoolean = (target) => {
  return typeof target === "boolean";
};
var isUndefined = (target) => {
  return typeof target === "undefined";
};
var isNull = (target) => {
  return target === null;
};
var isWindow = (target) => {
  return typeof Window !== "undefined" && target instanceof Window;
};
var isDocument = (target) => {
  return typeof Document !== "undefined" && target instanceof Document;
};
var isElement = (target) => {
  return typeof Element !== "undefined" && target instanceof Element;
};
var isNode = (target) => {
  return typeof Node !== "undefined" && target instanceof Node;
};
var isArrayLike = (target) => {
  return !isFunction(target) && !isWindow(target) && isNumber(target.length);
};
var isObjectLike = (target) => {
  return typeof target === "object" && target !== null;
};
var toElement = (target) => {
  return isDocument(target) ? target.documentElement : target;
};
var toCamelCase = (string) => {
  return string.replace(/-([a-z])/g, (_2, letter) => {
    return letter.toUpperCase();
  });
};
var toKebabCase = (string) => {
  if (!string) {
    return string;
  }
  return string.replace(/^./, string[0].toLowerCase()).replace(/[A-Z]/g, (replacer) => {
    return "-" + replacer.toLowerCase();
  });
};
var returnFalse = () => {
  return false;
};
var returnTrue = () => {
  return true;
};
var eachArray = (target, callback) => {
  for (let i4 = 0; i4 < target.length; i4 += 1) {
    if (callback.call(target[i4], target[i4], i4) === false) {
      return target;
    }
  }
  return target;
};
var eachObject = (target, callback) => {
  const keys = Object.keys(target);
  for (let i4 = 0; i4 < keys.length; i4 += 1) {
    const key = keys[i4];
    if (callback.call(target[key], key, target[key]) === false) {
      return target;
    }
  }
  return target;
};

// node_modules/@mdui/jq/shared/core.js
var JQ = class {
  constructor(arr) {
    this.length = 0;
    if (!arr) {
      return this;
    }
    eachArray(arr, (item, i4) => {
      this[i4] = item;
    });
    this.length = arr.length;
    return this;
  }
};

// node_modules/@mdui/jq/shared/dom.js
var isDomReady = (document3 = getDocument()) => {
  return /complete|interactive/.test(document3.readyState);
};
var createElement = (tagName) => {
  const document3 = getDocument();
  return document3.createElement(tagName);
};
var appendChild = (element, child) => {
  return element.appendChild(child);
};
var removeChild = (element) => {
  return element.parentNode ? element.parentNode.removeChild(element) : element;
};
var getChildNodesArray = (target, parent) => {
  const tempParent = createElement(parent);
  tempParent.innerHTML = target;
  return [].slice.call(tempParent.childNodes);
};

// node_modules/@mdui/jq/$.js
var get$ = () => {
  const $3 = function(selector) {
    if (!selector) {
      return new JQ();
    }
    if (selector instanceof JQ) {
      return selector;
    }
    if (isFunction(selector)) {
      const document3 = getDocument();
      if (isDomReady(document3)) {
        selector.call(document3, $3);
      } else {
        document3.addEventListener("DOMContentLoaded", () => selector.call(document3, $3), { once: true });
      }
      return new JQ([document3]);
    }
    if (isString(selector)) {
      const html = selector.trim();
      if (html.startsWith("<") && html.endsWith(">")) {
        let toCreate = "div";
        const tags = {
          li: "ul",
          tr: "tbody",
          td: "tr",
          th: "tr",
          tbody: "table",
          option: "select"
        };
        eachObject(tags, (childTag, parentTag) => {
          if (html.startsWith(`<${childTag}`)) {
            toCreate = parentTag;
            return false;
          }
          return;
        });
        return new JQ(getChildNodesArray(html, toCreate));
      }
      const document3 = getDocument();
      return new JQ(document3.querySelectorAll(selector));
    }
    if (isArrayLike(selector) && !isNode(selector)) {
      return new JQ(selector);
    }
    return new JQ([selector]);
  };
  $3.fn = JQ.prototype;
  return $3;
};
var $ = get$();

// node_modules/@mdui/jq/functions/merge.js
var merge = (first, second) => {
  eachArray(second, (value) => {
    first.push(value);
  });
  return first;
};

// node_modules/@mdui/jq/functions/unique.js
var unique = (arr) => {
  return [...new Set(arr)];
};

// node_modules/@mdui/jq/methods/get.js
$.fn.get = function(index) {
  return index === void 0 ? [].slice.call(this) : this[index >= 0 ? index : index + this.length];
};

// node_modules/@mdui/jq/methods/add.js
$.fn.add = function(selector) {
  return new JQ(unique(merge(this.get(), $(selector).get())));
};

// node_modules/@mdui/jq/shared/attributes.js
var getAttribute = (element, key, defaultValue2) => {
  const value = element.getAttribute(key);
  return isNull(value) ? defaultValue2 : value;
};
var removeAttribute = (element, key) => {
  element.removeAttribute(key);
};
var setAttribute = (element, key, value) => {
  isNull(value) ? removeAttribute(element, key) : element.setAttribute(key, value);
};

// node_modules/@mdui/jq/methods/each.js
$.fn.each = function(callback) {
  return eachArray(this, (value, index) => {
    return callback.call(value, index, value);
  });
};

// node_modules/@mdui/jq/methods/addClass.js
eachArray(["add", "remove", "toggle"], (name) => {
  $.fn[`${name}Class`] = function(className2) {
    if (name === "remove" && !arguments.length) {
      return this.each((_2, element) => {
        setAttribute(element, "class", "");
      });
    }
    return this.each((i4, element) => {
      if (!isElement(element)) {
        return;
      }
      const classes = (isFunction(className2) ? className2.call(element, i4, getAttribute(element, "class", "")) : className2).split(" ").filter((name2) => name2);
      eachArray(classes, (cls) => {
        element.classList[name](cls);
      });
    });
  };
});

// node_modules/@mdui/jq/methods/insertBefore.js
eachArray(["insertBefore", "insertAfter"], (name, nameIndex) => {
  $.fn[name] = function(target) {
    const $element = nameIndex ? $(this.get().reverse()) : this;
    const $target = $(target);
    const result = [];
    $target.each((index, target2) => {
      if (!target2.parentNode) {
        return;
      }
      $element.each((_2, element) => {
        const newItem = index ? element.cloneNode(true) : element;
        const existingItem = nameIndex ? target2.nextSibling : target2;
        result.push(newItem);
        target2.parentNode.insertBefore(newItem, existingItem);
      });
    });
    return $(nameIndex ? result.reverse() : result);
  };
});

// node_modules/@mdui/jq/methods/before.js
var isPlainText = (target) => {
  return isString(target) && !(target.startsWith("<") && target.endsWith(">"));
};
eachArray(["before", "after"], (name, nameIndex) => {
  $.fn[name] = function(...args) {
    if (nameIndex === 1) {
      args = args.reverse();
    }
    return this.each((index, element) => {
      const targets = isFunction(args[0]) ? [args[0].call(element, index, element.innerHTML)] : args;
      eachArray(targets, (target) => {
        let $target;
        if (isPlainText(target)) {
          $target = $(getChildNodesArray(target, "div"));
        } else if (index && isElement(target)) {
          $target = $(target.cloneNode(true));
        } else {
          $target = $(target);
        }
        $target[nameIndex ? "insertAfter" : "insertBefore"](element);
      });
    });
  };
});

// node_modules/@mdui/jq/functions/each.js
function each(target, callback) {
  return isArrayLike(target) ? eachArray(target, (value, index) => {
    return callback.call(value, index, value);
  }) : eachObject(target, callback);
}

// node_modules/@mdui/jq/functions/map.js
function map(elements, callback) {
  const window2 = getWindow();
  let value;
  const ret = [];
  each(elements, (i4, element) => {
    value = callback.call(window2, element, i4);
    if (value != null) {
      ret.push(value);
    }
  });
  return [].concat(...ret);
}

// node_modules/@mdui/jq/methods/map.js
$.fn.map = function(callback) {
  return new JQ(map(this, (element, i4) => {
    return callback.call(element, i4, element);
  }));
};

// node_modules/@mdui/jq/methods/clone.js
$.fn.clone = function() {
  return this.map(function() {
    return this.cloneNode(true);
  });
};

// node_modules/@mdui/jq/methods/is.js
$.fn.is = function(selector) {
  let isMatched = false;
  if (isFunction(selector)) {
    this.each((index, element) => {
      if (selector.call(element, index, element)) {
        isMatched = true;
      }
    });
    return isMatched;
  }
  if (isString(selector)) {
    this.each((_2, element) => {
      if (isDocument(element) || isWindow(element)) {
        return;
      }
      if (element.matches.call(element, selector)) {
        isMatched = true;
      }
    });
    return isMatched;
  }
  const $compareWith = $(selector);
  this.each((_2, element) => {
    $compareWith.each((_3, compare2) => {
      if (element === compare2) {
        isMatched = true;
      }
    });
  });
  return isMatched;
};

// node_modules/@mdui/jq/methods/remove.js
$.fn.remove = function(selector) {
  return this.each((_2, element) => {
    if (!selector || $(element).is(selector)) {
      removeChild(element);
    }
  });
};

// node_modules/@mdui/jq/methods/append.js
eachArray(["prepend", "append"], (name, nameIndex) => {
  $.fn[name] = function(...args) {
    return this.each((index, element) => {
      const childNodes = element.childNodes;
      const childLength = childNodes.length;
      const child = childLength ? childNodes[nameIndex ? childLength - 1 : 0] : createElement("div");
      if (!childLength) {
        appendChild(element, child);
      }
      let contents = isFunction(args[0]) ? [args[0].call(element, index, element.innerHTML)] : args;
      if (index) {
        contents = contents.map((content) => {
          return isString(content) ? content : $(content).clone();
        });
      }
      $(child)[nameIndex ? "after" : "before"](...contents);
      if (!childLength) {
        removeChild(child);
      }
    });
  };
});

// node_modules/@mdui/jq/methods/appendTo.js
eachArray(["appendTo", "prependTo"], (name, nameIndex) => {
  $.fn[name] = function(target) {
    const extraChilds = [];
    const $target = $(target).map((_2, element) => {
      const childNodes = element.childNodes;
      const childLength = childNodes.length;
      if (childLength) {
        return childNodes[nameIndex ? 0 : childLength - 1];
      }
      const child = createElement("div");
      appendChild(element, child);
      extraChilds.push(child);
      return child;
    });
    const $result = this[nameIndex ? "insertBefore" : "insertAfter"]($target);
    $(extraChilds).remove();
    return $result;
  };
});

// node_modules/@mdui/jq/shared/css.js
var getComputedStyleValue = (element, name) => {
  const window2 = getWindow();
  return window2.getComputedStyle(element).getPropertyValue(toKebabCase(name));
};
var isBorderBox = (element) => {
  return getComputedStyleValue(element, "box-sizing") === "border-box";
};
var getExtraWidth = (element, direction, extra) => {
  const position = direction === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  return [0, 1].reduce((prev, _2, index) => {
    let prop = extra + position[index];
    if (extra === "border") {
      prop += "Width";
    }
    return prev + parseFloat(getComputedStyleValue(element, prop) || "0");
  }, 0);
};
var getStyle = (element, name) => {
  if (name === "width" || name === "height") {
    const valueNumber = element.getBoundingClientRect()[name];
    if (isBorderBox(element)) {
      return `${valueNumber}px`;
    }
    return `${valueNumber - getExtraWidth(element, name, "border") - getExtraWidth(element, name, "padding")}px`;
  }
  return getComputedStyleValue(element, name);
};
var cssNumber = [
  "animation-iteration-count",
  "column-count",
  "fill-opacity",
  "flex-grow",
  "flex-shrink",
  "font-weight",
  "grid-area",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "line-height",
  "opacity",
  "order",
  "orphans",
  "widows",
  "z-index",
  "zoom"
];

// node_modules/@mdui/jq/methods/attr.js
eachArray(["attr", "prop", "css"], (name, nameIndex) => {
  const set4 = (element, key, value) => {
    if (isUndefined(value)) {
      return;
    }
    if (nameIndex === 0) {
      return setAttribute(element, key, value);
    }
    if (nameIndex === 1) {
      element[key] = value;
      return;
    }
    key = toKebabCase(key);
    const getSuffix = () => key.startsWith("--") || cssNumber.includes(key) ? "" : "px";
    element.style.setProperty(key, isNumber(value) ? `${value}${getSuffix()}` : value);
  };
  const get4 = (element, key) => {
    if (nameIndex === 0) {
      return getAttribute(element, key);
    }
    if (nameIndex === 1) {
      return element[key];
    }
    return getStyle(element, key);
  };
  $.fn[name] = function(key, value) {
    if (isObjectLike(key)) {
      eachObject(key, (k2, v3) => {
        this[name](k2, v3);
      });
      return this;
    }
    if (arguments.length === 1) {
      const element = this[0];
      return isElement(element) ? get4(element, key) : void 0;
    }
    return this.each((i4, element) => {
      set4(element, key, isFunction(value) ? value.call(element, i4, get4(element, key)) : value);
    });
  };
});

// node_modules/@mdui/jq/methods/children.js
$.fn.children = function(selector) {
  const children = [];
  this.each((_2, element) => {
    eachArray(element.childNodes, (childNode) => {
      if (!isElement(childNode)) {
        return;
      }
      if (!selector || $(childNode).is(selector)) {
        children.push(childNode);
      }
    });
  });
  return new JQ(unique(children));
};

// node_modules/@mdui/jq/methods/slice.js
$.fn.slice = function(...args) {
  return new JQ([].slice.apply(this, args));
};

// node_modules/@mdui/jq/methods/eq.js
$.fn.eq = function(index) {
  const ret = index === -1 ? this.slice(index) : this.slice(index, +index + 1);
  return new JQ(ret);
};

// node_modules/@mdui/jq/methods/utils/dir.js
var dir = ($elements, nameIndex, node, selector, filter) => {
  const ret = [];
  let target;
  $elements.each((_2, element) => {
    target = element[node];
    while (target && isElement(target)) {
      if (nameIndex === 2) {
        if (selector && $(target).is(selector)) {
          break;
        }
        if (!filter || $(target).is(filter)) {
          ret.push(target);
        }
      } else if (nameIndex === 0) {
        if (!selector || $(target).is(selector)) {
          ret.push(target);
        }
        break;
      } else {
        if (!selector || $(target).is(selector)) {
          ret.push(target);
        }
      }
      target = target[node];
    }
  });
  return new JQ(unique(ret));
};

// node_modules/@mdui/jq/methods/parent.js
eachArray(["", "s", "sUntil"], (name, nameIndex) => {
  $.fn[`parent${name}`] = function(selector, filter) {
    const $nodes = !nameIndex ? this : $(this.get().reverse());
    return dir($nodes, nameIndex, "parentNode", selector, filter);
  };
});

// node_modules/@mdui/jq/methods/closest.js
$.fn.closest = function(selector) {
  if (this.is(selector)) {
    return this;
  }
  const matched = [];
  this.parents().each((_2, element) => {
    if ($(element).is(selector)) {
      matched.push(element);
      return false;
    }
  });
  return new JQ(matched);
};

// node_modules/@mdui/jq/shared/data.js
var weakMap = /* @__PURE__ */ new WeakMap();
var getAll = (element) => {
  return weakMap.get(element) ?? {};
};
var get = (element, keyOriginal) => {
  const data2 = getAll(element);
  const key = toCamelCase(keyOriginal);
  return key in data2 ? data2[key] : void 0;
};
var setAll = (element, object) => {
  const data2 = getAll(element);
  eachObject(object, (keyOriginal, value) => {
    data2[toCamelCase(keyOriginal)] = value;
  });
  weakMap.set(element, data2);
};
var set = (element, keyOriginal, value) => {
  setAll(element, { [keyOriginal]: value });
};
var removeAll = (element) => {
  weakMap.delete(element);
};
var removeMultiple = (element, keysOriginal) => {
  const data2 = getAll(element);
  eachArray(keysOriginal, (keyOriginal) => {
    const key = toCamelCase(keyOriginal);
    delete data2[key];
  });
  weakMap.set(element, data2);
};
var rbrace = /^(?:{[\w\W]*\}|\[[\w\W]*\])$/;
var stringTransform = (value) => {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === "null") {
    return null;
  }
  if (value === +value + "") {
    return +value;
  }
  if (rbrace.test(value)) {
    return JSON.parse(value);
  }
  return value;
};
var dataAttr = (element, key, value) => {
  if (isUndefined(value) && element.nodeType === 1) {
    value = element.dataset[key];
    if (isString(value)) {
      try {
        value = stringTransform(value);
      } catch (e5) {
      }
    }
  }
  return value;
};

// node_modules/@mdui/jq/methods/data.js
$.fn.data = function(key, value) {
  if (isUndefined(key)) {
    if (!this.length) {
      return void 0;
    }
    const element = this[0];
    const resultData = getAll(element);
    if (element.nodeType !== 1) {
      return resultData;
    }
    eachObject(element.dataset, (key2) => {
      resultData[key2] = dataAttr(element, key2, resultData[key2]);
    });
    return resultData;
  }
  if (isObjectLike(key)) {
    return this.each(function() {
      setAll(this, key);
    });
  }
  if (arguments.length === 2 && isUndefined(value)) {
    return this;
  }
  if (!isUndefined(value)) {
    return this.each(function() {
      set(this, key, value);
    });
  }
  if (!this.length) {
    return void 0;
  }
  return dataAttr(this[0], toCamelCase(key), get(this[0], key));
};

// node_modules/@mdui/jq/methods/empty.js
$.fn.empty = function() {
  return this.each((_2, element) => {
    element.innerHTML = "";
  });
};

// node_modules/@mdui/jq/methods/extend.js
$.fn.extend = function(obj) {
  eachObject(obj, (prop, value) => {
    $.fn[prop] = value;
  });
  return this;
};

// node_modules/@mdui/jq/methods/filter.js
$.fn.filter = function(selector) {
  if (isFunction(selector)) {
    return this.map((index, element) => {
      return selector.call(element, index, element) ? element : void 0;
    });
  }
  if (isString(selector)) {
    return this.map((_2, element) => {
      return $(element).is(selector) ? element : void 0;
    });
  }
  const $selector = $(selector);
  return this.map((_2, element) => {
    return $selector.get().includes(element) ? element : void 0;
  });
};

// node_modules/@mdui/jq/methods/find.js
$.fn.find = function(selector) {
  const foundElements = [];
  this.each((_2, element) => {
    merge(foundElements, $(element.querySelectorAll(selector)).get());
  });
  return new JQ(foundElements);
};

// node_modules/@mdui/jq/methods/first.js
$.fn.first = function() {
  return this.eq(0);
};

// node_modules/@mdui/jq/functions/contains.js
var contains = (container2, contains2) => {
  return container2 !== contains2 && toElement(container2).contains(contains2);
};

// node_modules/@mdui/jq/methods/has.js
$.fn.has = function(selector) {
  const $targets = isString(selector) ? this.find(selector) : $(selector);
  const { length } = $targets;
  return this.map(function() {
    for (let i4 = 0; i4 < length; i4 += 1) {
      if (contains(this, $targets[i4])) {
        return this;
      }
    }
    return;
  });
};

// node_modules/@mdui/jq/methods/hasClass.js
$.fn.hasClass = function(className2) {
  return this[0].classList.contains(className2);
};

// node_modules/@mdui/jq/methods/width.js
var handleExtraWidth = (element, name, value, funcIndex, includeMargin, multiply) => {
  const getExtraWidthValue = (extra) => {
    return getExtraWidth(element, name.toLowerCase(), extra) * multiply;
  };
  if (funcIndex === 2 && includeMargin) {
    value += getExtraWidthValue("margin");
  }
  if (isBorderBox(element)) {
    if (funcIndex === 0) {
      value -= getExtraWidthValue("border");
    }
    if (funcIndex === 1) {
      value -= getExtraWidthValue("border");
      value -= getExtraWidthValue("padding");
    }
  } else {
    if (funcIndex === 0) {
      value += getExtraWidthValue("padding");
    }
    if (funcIndex === 2) {
      value += getExtraWidthValue("border");
      value += getExtraWidthValue("padding");
    }
  }
  return value;
};
var get2 = (element, name, funcIndex, includeMargin) => {
  const document3 = getDocument();
  const clientProp = `client${name}`;
  const scrollProp = `scroll${name}`;
  const offsetProp = `offset${name}`;
  const innerProp = `inner${name}`;
  if (isWindow(element)) {
    return funcIndex === 2 ? element[innerProp] : toElement(document3)[clientProp];
  }
  if (isDocument(element)) {
    const doc = toElement(element);
    return Math.max(
      // @ts-ignore
      element.body[scrollProp],
      doc[scrollProp],
      // @ts-ignore
      element.body[offsetProp],
      doc[offsetProp],
      doc[clientProp]
    );
  }
  const value = parseFloat(getComputedStyleValue(element, name.toLowerCase()) || "0");
  return handleExtraWidth(element, name, value, funcIndex, includeMargin, 1);
};
var set2 = (element, elementIndex, name, funcIndex, includeMargin, value) => {
  let computedValue = isFunction(value) ? value.call(element, elementIndex, get2(element, name, funcIndex, includeMargin)) : value;
  if (computedValue == null) {
    return;
  }
  const $element = $(element);
  const dimension = name.toLowerCase();
  if (isString(computedValue) && ["auto", "inherit", ""].includes(computedValue)) {
    $element.css(dimension, computedValue);
    return;
  }
  const suffix = computedValue.toString().replace(/\b[0-9.]*/, "");
  const numerical = parseFloat(computedValue);
  computedValue = handleExtraWidth(element, name, numerical, funcIndex, includeMargin, -1) + (suffix || "px");
  $element.css(dimension, computedValue);
};
eachArray(["Width", "Height"], (name) => {
  eachArray([`inner${name}`, name.toLowerCase(), `outer${name}`], (funcName, funcIndex) => {
    $.fn[funcName] = function(margin, value) {
      const isSet = arguments.length && (funcIndex < 2 || !isBoolean(margin));
      const includeMargin = margin === true || value === true;
      if (!isSet) {
        return this.length ? get2(this[0], name, funcIndex, includeMargin) : void 0;
      }
      return this.each((index, element) => {
        return set2(element, index, name, funcIndex, includeMargin, margin);
      });
    };
  });
});

// node_modules/@mdui/jq/methods/hide.js
$.fn.hide = function() {
  return this.each((_2, element) => {
    element.style.display = "none";
  });
};

// node_modules/@mdui/jq/methods/val.js
eachArray(["val", "html", "text"], (name, nameIndex) => {
  const props = ["value", "innerHTML", "textContent"];
  const propName = props[nameIndex];
  const get4 = ($elements) => {
    if (nameIndex === 2) {
      return map($elements, (element) => {
        return toElement(element)[propName];
      }).join("");
    }
    if (!$elements.length) {
      return void 0;
    }
    const firstElement = $elements[0];
    const $firstElement = $(firstElement);
    if (nameIndex === 0 && $firstElement.is("select[multiple]")) {
      return map($firstElement.find("option:checked"), (element) => element.value);
    }
    return firstElement[propName];
  };
  const set4 = (element, value) => {
    if (isUndefined(value)) {
      if (nameIndex !== 0) {
        return;
      }
      value = "";
    }
    if (nameIndex === 1 && isElement(value)) {
      value = value.outerHTML;
    }
    element[propName] = value;
  };
  $.fn[name] = function(value) {
    if (!arguments.length) {
      return get4(this);
    }
    return this.each((i4, element) => {
      const $element = $(element);
      const computedValue = isFunction(value) ? value.call(element, i4, get4($element)) : value;
      if (nameIndex === 0 && Array.isArray(computedValue)) {
        if ($element.is("select[multiple]")) {
          map($element.find("option"), (option) => {
            return option.selected = computedValue.includes(option.value);
          });
        } else {
          element.checked = computedValue.includes(element.value);
        }
      } else {
        set4(element, computedValue);
      }
    });
  };
});

// node_modules/@mdui/jq/methods/index.js
$.fn.index = function(selector) {
  if (!arguments.length) {
    return this.eq(0).parent().children().get().indexOf(this[0]);
  }
  if (isString(selector)) {
    return $(selector).get().indexOf(this[0]);
  }
  return this.get().indexOf($(selector)[0]);
};

// node_modules/@mdui/jq/methods/last.js
$.fn.last = function() {
  return this.eq(-1);
};

// node_modules/@mdui/jq/methods/next.js
eachArray(["", "All", "Until"], (name, nameIndex) => {
  $.fn[`next${name}`] = function(selector, filter) {
    return dir(this, nameIndex, "nextElementSibling", selector, filter);
  };
});

// node_modules/@mdui/jq/methods/not.js
$.fn.not = function(selector) {
  const $excludes = this.filter(selector);
  return this.map((_2, element) => {
    return $excludes.index(element) > -1 ? void 0 : element;
  });
};

// node_modules/@mdui/jq/shared/event.js
var CustomEvent3 = getWindow().CustomEvent;
var MduiCustomEvent = class extends CustomEvent3 {
  constructor(type, options) {
    super(type, options);
    this.data = options.data;
    this.namespace = options.namespace;
  }
};
var elementIdMap = /* @__PURE__ */ new WeakMap();
var elementId = 1;
var getElementId = (element) => {
  if (!elementIdMap.has(element)) {
    elementIdMap.set(element, ++elementId);
  }
  return elementIdMap.get(element);
};
var handlersMap = /* @__PURE__ */ new Map();
var getHandlers = (element) => {
  const id2 = getElementId(element);
  return handlersMap.get(id2) || handlersMap.set(id2, []).get(id2);
};
var parse = (type) => {
  const parts = type.split(".");
  return {
    type: parts[0],
    namespace: parts.slice(1).sort().join(" ")
  };
};
var matcherFor = (namespace) => {
  return new RegExp("(?:^| )" + namespace.replace(" ", " .* ?") + "(?: |$)");
};
var getMatchedHandlers = (element, type, func, selector) => {
  const event = parse(type);
  return getHandlers(element).filter((handler) => {
    return handler && (!event.type || handler.type === event.type) && (!event.namespace || matcherFor(event.namespace).test(handler.namespace)) && (!func || getElementId(handler.func) === getElementId(func)) && (!selector || handler.selector === selector);
  });
};
var add = (element, types, func, data2, selector) => {
  let useCapture = false;
  if (isObjectLike(data2) && data2.useCapture) {
    useCapture = true;
  }
  types.split(" ").forEach((type) => {
    if (!type) {
      return;
    }
    const event = parse(type);
    const callFn = (e5, elem) => {
      const result = func.apply(
        elem,
        // @ts-ignore
        e5.detail === null ? [e5] : [e5].concat(e5.detail)
      );
      if (result === false) {
        e5.preventDefault();
        e5.stopPropagation();
      }
    };
    const proxyFn = (e5) => {
      if (e5.namespace && !matcherFor(e5.namespace).test(event.namespace)) {
        return;
      }
      e5.data = data2;
      if (selector) {
        $(element).find(selector).get().reverse().forEach((elem) => {
          if (elem === e5.target || contains(elem, e5.target)) {
            callFn(e5, elem);
          }
        });
      } else {
        callFn(e5, element);
      }
    };
    const handler = {
      type: event.type,
      namespace: event.namespace,
      func,
      selector,
      id: getHandlers(element).length,
      proxy: proxyFn
    };
    getHandlers(element).push(handler);
    element.addEventListener(handler.type, proxyFn, useCapture);
  });
};
var remove = (element, types, func, selector) => {
  const handlersInElement = getHandlers(element);
  const removeEvent = (handler) => {
    delete handlersInElement[handler.id];
    element.removeEventListener(handler.type, handler.proxy, false);
  };
  if (!types) {
    handlersInElement.forEach((handler) => {
      removeEvent(handler);
    });
  } else {
    types.split(" ").forEach((type) => {
      if (type) {
        getMatchedHandlers(element, type, func, selector).forEach((handler) => {
          removeEvent(handler);
        });
      }
    });
  }
};

// node_modules/@mdui/jq/methods/off.js
$.fn.off = function(types, selector, callback) {
  if (isObjectLike(types)) {
    eachObject(types, (type, fn) => {
      this.off(type, selector, fn);
    });
    return this;
  }
  if (selector === false || isFunction(selector)) {
    callback = selector;
    selector = void 0;
  }
  if (callback === false) {
    callback = returnFalse;
  }
  return this.each(function() {
    remove(this, types, callback, selector);
  });
};

// node_modules/@mdui/jq/functions/extend.js
function extend2(target, ...objectN) {
  eachArray(objectN, (object) => {
    eachObject(object, (prop, value) => {
      if (!isUndefined(value)) {
        target[prop] = value;
      }
    });
  });
  return target;
}

// node_modules/@mdui/jq/methods/offsetParent.js
$.fn.offsetParent = function() {
  const document3 = getDocument();
  return this.map(function() {
    let offsetParent = this.offsetParent;
    while (offsetParent && $(offsetParent).css("position") === "static") {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || document3.documentElement;
  });
};

// node_modules/@mdui/jq/methods/position.js
var floatStyle = ($element, name) => {
  return parseFloat($element.css(name));
};
$.fn.position = function() {
  if (!this.length) {
    return void 0;
  }
  const $element = this.eq(0);
  let currentOffset;
  let parentOffset = {
    left: 0,
    top: 0
  };
  if ($element.css("position") === "fixed") {
    currentOffset = $element[0].getBoundingClientRect();
  } else {
    currentOffset = $element.offset();
    const $offsetParent = $element.offsetParent();
    parentOffset = $offsetParent.offset();
    parentOffset.top += floatStyle($offsetParent, "border-top-width");
    parentOffset.left += floatStyle($offsetParent, "border-left-width");
  }
  return {
    top: currentOffset.top - parentOffset.top - floatStyle($element, "margin-top"),
    left: currentOffset.left - parentOffset.left - floatStyle($element, "margin-left")
  };
};

// node_modules/@mdui/jq/methods/offset.js
var get3 = (element) => {
  if (!element.getClientRects().length) {
    return { top: 0, left: 0 };
  }
  const { top, left } = element.getBoundingClientRect();
  const { pageYOffset, pageXOffset } = element.ownerDocument.defaultView;
  return {
    top: top + pageYOffset,
    left: left + pageXOffset
  };
};
var set3 = (element, value, index) => {
  const $element = $(element);
  const position = $element.css("position");
  if (position === "static") {
    $element.css("position", "relative");
  }
  const currentOffset = get3(element);
  const currentTopString = $element.css("top");
  const currentLeftString = $element.css("left");
  let currentTop;
  let currentLeft;
  const calculatePosition = (position === "absolute" || position === "fixed") && (currentTopString + currentLeftString).includes("auto");
  if (calculatePosition) {
    const currentPosition = $element.position();
    currentTop = currentPosition.top;
    currentLeft = currentPosition.left;
  } else {
    currentTop = parseFloat(currentTopString);
    currentLeft = parseFloat(currentLeftString);
  }
  const computedValue = isFunction(value) ? value.call(element, index, extend2({}, currentOffset)) : value;
  $element.css({
    top: computedValue.top != null ? computedValue.top - currentOffset.top + currentTop : void 0,
    left: computedValue.left != null ? computedValue.left - currentOffset.left + currentLeft : void 0
  });
};
$.fn.offset = function(value) {
  if (!arguments.length) {
    if (!this.length) {
      return void 0;
    }
    return get3(this[0]);
  }
  return this.each(function(index) {
    set3(this, value, index);
  });
};

// node_modules/@mdui/jq/methods/on.js
$.fn.on = function(types, selector, data2, callback, one) {
  if (isObjectLike(types)) {
    if (!isString(selector)) {
      data2 = data2 || selector;
      selector = void 0;
    }
    eachObject(types, (type, fn) => {
      this.on(type, selector, data2, fn, one);
    });
    return this;
  }
  if (data2 == null && callback == null) {
    callback = selector;
    data2 = selector = void 0;
  } else if (callback == null) {
    if (isString(selector)) {
      callback = data2;
      data2 = void 0;
    } else {
      callback = data2;
      data2 = selector;
      selector = void 0;
    }
  }
  if (callback === false) {
    callback = returnFalse;
  } else if (!callback) {
    return this;
  }
  if (one) {
    const _this = this;
    const origCallback = callback;
    callback = function(event, ...dataN) {
      _this.off(event.type, selector, callback);
      return origCallback.call(this, event, ...dataN);
    };
  }
  return this.each(function() {
    add(this, types, callback, data2, selector);
  });
};

// node_modules/@mdui/jq/methods/one.js
$.fn.one = function(types, selector, data2, callback) {
  return this.on(types, selector, data2, callback, true);
};

// node_modules/@mdui/jq/methods/prev.js
eachArray(["", "All", "Until"], (name, nameIndex) => {
  $.fn[`prev${name}`] = function(selector, filter) {
    const $nodes = !nameIndex ? this : $(this.get().reverse());
    return dir($nodes, nameIndex, "previousElementSibling", selector, filter);
  };
});

// node_modules/@mdui/jq/methods/removeAttr.js
$.fn.removeAttr = function(attributeName) {
  const names = attributeName.split(" ").filter((name) => name);
  return this.each(function() {
    eachArray(names, (name) => {
      removeAttribute(this, name);
    });
  });
};

// node_modules/@mdui/jq/functions/removeData.js
var removeData = (element, name) => {
  if (isUndefined(name)) {
    return removeAll(element);
  }
  const keys = isString(name) ? name.split(" ").filter((nameItem) => nameItem) : name;
  removeMultiple(element, keys);
};

// node_modules/@mdui/jq/methods/removeData.js
$.fn.removeData = function(name) {
  return this.each((_2, element) => {
    removeData(element, name);
  });
};

// node_modules/@mdui/jq/methods/removeProp.js
$.fn.removeProp = function(name) {
  return this.each((_2, element) => {
    try {
      delete element[name];
    } catch (e5) {
    }
  });
};

// node_modules/@mdui/jq/methods/replaceWith.js
$.fn.replaceWith = function(newContent) {
  this.each((index, element) => {
    let content = newContent;
    if (isFunction(content)) {
      content = content.call(element, index, element.innerHTML);
    } else if (index && !isString(content)) {
      content = $(content).clone();
    }
    $(element).before(content);
  });
  return this.remove();
};

// node_modules/@mdui/jq/methods/replaceAll.js
$.fn.replaceAll = function(target) {
  return $(target).map((index, element) => {
    $(element).replaceWith(index ? this.clone() : this);
    return this.get();
  });
};

// node_modules/@mdui/jq/functions/param.js
var param = (obj) => {
  if (!isObjectLike(obj) && !Array.isArray(obj)) {
    return "";
  }
  const args = [];
  const destructure = (key, value) => {
    let keyTmp;
    if (isObjectLike(value)) {
      eachObject(value, (i4, v3) => {
        keyTmp = Array.isArray(value) && !isObjectLike(v3) ? "" : i4;
        destructure(`${key}[${keyTmp}]`, v3);
      });
    } else {
      keyTmp = value == null || value === "" ? "=" : `=${encodeURIComponent(value)}`;
      args.push(encodeURIComponent(key) + keyTmp);
    }
  };
  if (Array.isArray(obj)) {
    eachArray(obj, ({ name, value }) => {
      return destructure(name, value);
    });
  } else {
    eachObject(obj, destructure);
  }
  return args.join("&");
};

// node_modules/@mdui/jq/shared/form.js
var formCollections = /* @__PURE__ */ new WeakMap();
var getFormControls = (form) => {
  const nativeFormControls = [...form.elements];
  const formControls = formCollections.get(form) || [];
  const comparePosition = (a3, b3) => {
    const position = a3.compareDocumentPosition(b3);
    return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  };
  return [...nativeFormControls, ...formControls].sort(comparePosition);
};

// node_modules/@mdui/jq/methods/serializeArray.js
var getFormControlsValue = ($elements) => {
  const result = [];
  $elements.each((_2, element) => {
    const elements = element instanceof HTMLFormElement ? getFormControls(element) : [element];
    $(elements).each((_3, element2) => {
      const $element = $(element2);
      const type = element2.type;
      const nodeName = element2.nodeName.toLowerCase();
      if (nodeName !== "fieldset" && element2.name && !element2.disabled && [
        "input",
        "select",
        "textarea",
        "keygen",
        "mdui-checkbox",
        "mdui-radio-group",
        "mdui-switch",
        "mdui-text-field",
        "mdui-select",
        "mdui-slider",
        "mdui-range-slider",
        "mdui-segmented-button-group"
      ].includes(nodeName) && !["submit", "button", "image", "reset", "file"].includes(type) && (!["radio", "checkbox"].includes(type) || element2.checked) && (!["mdui-checkbox", "mdui-switch"].includes(nodeName) || element2.checked)) {
        result.push({
          name: element2.name,
          value: $element.val()
        });
      }
    });
  });
  return result;
};
$.fn.serializeArray = function() {
  return getFormControlsValue(this).map((element) => {
    if (!Array.isArray(element.value)) {
      return element;
    }
    return element.value.map((value) => ({
      name: element.name,
      value
    }));
  }).flat();
};

// node_modules/@mdui/jq/methods/serialize.js
$.fn.serialize = function() {
  return param(this.serializeArray());
};

// node_modules/@mdui/jq/methods/serializeObject.js
$.fn.serializeObject = function() {
  const result = {};
  getFormControlsValue(this).forEach((element) => {
    const { name, value } = element;
    if (!result.hasOwnProperty(name)) {
      result[name] = value;
    } else {
      const originalValue = result[name];
      if (!Array.isArray(originalValue)) {
        result[name] = [originalValue];
      }
      if (Array.isArray(value)) {
        result[name].push(...value);
      } else {
        result[name].push(value);
      }
    }
  });
  return result;
};

// node_modules/@mdui/jq/methods/show.js
var elementDisplay = {};
var defaultDisplay = (nodeName) => {
  const document3 = getDocument();
  let element;
  let display;
  if (!elementDisplay[nodeName]) {
    element = createElement(nodeName);
    appendChild(document3.body, element);
    display = getStyle(element, "display");
    removeChild(element);
    if (display === "none") {
      display = "block";
    }
    elementDisplay[nodeName] = display;
  }
  return elementDisplay[nodeName];
};
$.fn.show = function() {
  return this.each((_2, element) => {
    if (element.style.display === "none") {
      element.style.display = "";
    }
    if (getStyle(element, "display") === "none") {
      element.style.display = defaultDisplay(element.nodeName);
    }
  });
};

// node_modules/@mdui/jq/methods/siblings.js
$.fn.siblings = function(selector) {
  return this.prevAll(selector).add(this.nextAll(selector));
};

// node_modules/@mdui/jq/methods/toggle.js
$.fn.toggle = function() {
  return this.each((_2, element) => {
    getStyle(element, "display") === "none" ? $(element).show() : $(element).hide();
  });
};

// node_modules/@mdui/jq/methods/trigger.js
$.fn.trigger = function(name, detail = null, options) {
  const { type, namespace } = parse(name);
  const event = new MduiCustomEvent(type, {
    detail,
    data: null,
    namespace,
    bubbles: true,
    cancelable: false,
    composed: true,
    ...options
  });
  return this.each((_2, element) => {
    element.dispatchEvent(event);
  });
};

// node_modules/@mdui/jq/shared/ajax.js
var ajaxStart = "ajaxStart";
var ajaxSuccess = "ajaxSuccess";
var ajaxError = "ajaxError";
var ajaxComplete = "ajaxComplete";
var globalOptions = {};
var isQueryStringData = (method) => {
  return ["GET", "HEAD"].includes(method);
};
var appendQuery = (url, query) => {
  return `${url}&${query}`.replace(/[&?]{1,2}/, "?");
};
var isCrossDomain = (url) => {
  const window2 = getWindow();
  return /^([\w-]+:)?\/\/([^/]+)/.test(url) && RegExp.$2 !== window2.location.host;
};
var isHttpStatusSuccess = (status) => {
  return status >= 200 && status < 300 || [0, 304].includes(status);
};
var mergeOptions = (options) => {
  const defaults = {
    url: "",
    method: "GET",
    data: "",
    processData: true,
    async: true,
    cache: true,
    username: "",
    password: "",
    headers: {},
    xhrFields: {},
    statusCode: {},
    dataType: "",
    contentType: "application/x-www-form-urlencoded",
    timeout: 0,
    global: true
  };
  eachObject(globalOptions, (key, value) => {
    const callbacks = [
      "beforeSend",
      "success",
      "error",
      "complete",
      "statusCode"
    ];
    if (!callbacks.includes(key) && !isUndefined(value)) {
      defaults[key] = value;
    }
  });
  return extend2({}, defaults, options);
};

// node_modules/@mdui/jq/functions/ajax.js
var ajax = (options) => {
  const document3 = getDocument();
  const window2 = getWindow();
  let isCanceled = false;
  const eventParams = {};
  const successEventParams = {};
  const mergedOptions = mergeOptions(options);
  const method = mergedOptions.method.toUpperCase();
  let { data: data2, url } = mergedOptions;
  url = url || window2.location.toString();
  const { processData, async, cache, username, password, headers, xhrFields, statusCode, dataType, contentType, timeout, global } = mergedOptions;
  const isMethodQueryString = isQueryStringData(method);
  if (data2 && (isMethodQueryString || processData) && !isString(data2) && !(data2 instanceof ArrayBuffer) && !(data2 instanceof Blob) && !(data2 instanceof Document) && !(data2 instanceof FormData)) {
    data2 = param(data2);
  }
  if (data2 && isMethodQueryString) {
    url = appendQuery(url, data2);
    data2 = null;
  }
  const trigger = (event, callback, ...args) => {
    if (global) {
      $(document3).trigger(event, callback === "success" ? successEventParams : eventParams);
    }
    let resultGlobal;
    let resultCustom;
    if (callback in globalOptions) {
      resultGlobal = globalOptions[callback](...args);
    }
    if (mergedOptions[callback]) {
      resultCustom = mergedOptions[callback](...args);
    }
    if (callback === "beforeSend" && [resultGlobal, resultCustom].includes(false)) {
      isCanceled = true;
    }
  };
  const XHR = () => {
    let textStatus;
    return new Promise((resolve, reject) => {
      const doReject = (reason) => {
        return reject(new Error(reason));
      };
      if (isMethodQueryString && !cache) {
        url = appendQuery(url, `_=${Date.now()}`);
      }
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, async, username, password);
      if (contentType || data2 && !isMethodQueryString && contentType !== false) {
        xhr.setRequestHeader("Content-Type", contentType);
      }
      if (dataType === "json") {
        xhr.setRequestHeader("Accept", "application/json, text/javascript");
      }
      eachObject(headers, (key, value) => {
        if (!isUndefined(value)) {
          xhr.setRequestHeader(key, value + "");
        }
      });
      if (!isCrossDomain(url)) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      }
      eachObject(xhrFields, (key, value) => {
        xhr[key] = value;
      });
      eventParams.xhr = successEventParams.xhr = xhr;
      eventParams.options = successEventParams.options = mergedOptions;
      let xhrTimeout;
      xhr.onload = () => {
        if (xhrTimeout) {
          clearTimeout(xhrTimeout);
        }
        const isSuccess = isHttpStatusSuccess(xhr.status);
        let responseData = void 0;
        if (isSuccess) {
          textStatus = xhr.status === 204 || method === "HEAD" ? "nocontent" : xhr.status === 304 ? "notmodified" : "success";
          if (dataType === "json" || !dataType && (xhr.getResponseHeader("content-type") || "").includes("json")) {
            try {
              responseData = method === "HEAD" ? void 0 : JSON.parse(xhr.responseText);
              successEventParams.response = responseData;
            } catch (err) {
              textStatus = "parsererror";
              trigger(ajaxError, "error", xhr, textStatus);
              doReject(textStatus);
            }
            if (textStatus !== "parsererror") {
              trigger(ajaxSuccess, "success", responseData, textStatus, xhr);
              resolve(responseData);
            }
          } else {
            responseData = method === "HEAD" ? void 0 : xhr.responseType === "text" || xhr.responseType === "" ? xhr.responseText : xhr.response;
            successEventParams.response = responseData;
            trigger(ajaxSuccess, "success", responseData, textStatus, xhr);
            resolve(responseData);
          }
        } else {
          textStatus = "error";
          trigger(ajaxError, "error", xhr, textStatus);
          doReject(textStatus);
        }
        eachArray([globalOptions.statusCode ?? {}, statusCode], (func) => {
          if (func[xhr.status]) {
            if (isSuccess) {
              func[xhr.status](responseData, textStatus, xhr);
            } else {
              func[xhr.status](xhr, textStatus);
            }
          }
        });
        trigger(ajaxComplete, "complete", xhr, textStatus);
      };
      xhr.onerror = () => {
        if (xhrTimeout) {
          clearTimeout(xhrTimeout);
        }
        trigger(ajaxError, "error", xhr, xhr.statusText);
        trigger(ajaxComplete, "complete", xhr, "error");
        doReject(xhr.statusText);
      };
      xhr.onabort = () => {
        let statusText = "abort";
        if (xhrTimeout) {
          statusText = "timeout";
          clearTimeout(xhrTimeout);
        }
        trigger(ajaxError, "error", xhr, statusText);
        trigger(ajaxComplete, "complete", xhr, statusText);
        doReject(statusText);
      };
      trigger(ajaxStart, "beforeSend", xhr, mergedOptions);
      if (isCanceled) {
        return doReject("cancel");
      }
      if (timeout > 0) {
        xhrTimeout = window2.setTimeout(() => xhr.abort(), timeout);
      }
      xhr.send(data2);
    });
  };
  return XHR();
};

// node_modules/@mdui/jq/static/ajax.js
$.ajax = ajax;

// node_modules/@mdui/jq/functions/ajaxSetup.js
var ajaxSetup = (options) => {
  return extend2(globalOptions, options);
};

// node_modules/@mdui/jq/static/ajaxSetup.js
$.ajaxSetup = ajaxSetup;

// node_modules/@mdui/jq/static/contains.js
$.contains = contains;

// node_modules/@mdui/jq/functions/data.js
function data(element, key, value) {
  if (isObjectLike(key)) {
    setAll(element, key);
    return key;
  }
  if (!isUndefined(value)) {
    set(element, key, value);
    return value;
  }
  if (isUndefined(key)) {
    return getAll(element);
  }
  return get(element, key);
}

// node_modules/@mdui/jq/static/data.js
$.data = data;

// node_modules/@mdui/jq/static/each.js
$.each = each;

// node_modules/@mdui/jq/static/extend.js
$.extend = function(target, ...objectN) {
  if (!objectN.length) {
    eachObject(target, (prop, value) => {
      this[prop] = value;
    });
    return this;
  }
  return extend2(target, ...objectN);
};

// node_modules/@mdui/jq/static/map.js
$.map = map;

// node_modules/@mdui/jq/static/merge.js
$.merge = merge;

// node_modules/@mdui/jq/static/param.js
$.param = param;

// node_modules/@mdui/jq/static/removeData.js
$.removeData = removeData;

// node_modules/@mdui/jq/static/unique.js
$.unique = unique;

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d3 = decorators[i4]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
  return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
}

// node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js
var ElementInternalsShim = class ElementInternals {
  get shadowRoot() {
    return this.__host.__shadowRoot;
  }
  constructor(_host) {
    this.ariaAtomic = "";
    this.ariaAutoComplete = "";
    this.ariaBrailleLabel = "";
    this.ariaBrailleRoleDescription = "";
    this.ariaBusy = "";
    this.ariaChecked = "";
    this.ariaColCount = "";
    this.ariaColIndex = "";
    this.ariaColSpan = "";
    this.ariaCurrent = "";
    this.ariaDescription = "";
    this.ariaDisabled = "";
    this.ariaExpanded = "";
    this.ariaHasPopup = "";
    this.ariaHidden = "";
    this.ariaInvalid = "";
    this.ariaKeyShortcuts = "";
    this.ariaLabel = "";
    this.ariaLevel = "";
    this.ariaLive = "";
    this.ariaModal = "";
    this.ariaMultiLine = "";
    this.ariaMultiSelectable = "";
    this.ariaOrientation = "";
    this.ariaPlaceholder = "";
    this.ariaPosInSet = "";
    this.ariaPressed = "";
    this.ariaReadOnly = "";
    this.ariaRequired = "";
    this.ariaRoleDescription = "";
    this.ariaRowCount = "";
    this.ariaRowIndex = "";
    this.ariaRowSpan = "";
    this.ariaSelected = "";
    this.ariaSetSize = "";
    this.ariaSort = "";
    this.ariaValueMax = "";
    this.ariaValueMin = "";
    this.ariaValueNow = "";
    this.ariaValueText = "";
    this.role = "";
    this.form = null;
    this.labels = [];
    this.states = /* @__PURE__ */ new Set();
    this.validationMessage = "";
    this.validity = {};
    this.willValidate = true;
    this.__host = _host;
  }
  checkValidity() {
    console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true.");
    return true;
  }
  reportValidity() {
    return true;
  }
  setFormValue() {
  }
  setValidity() {
  }
};

// node_modules/@lit-labs/ssr-dom-shim/index.js
var attributes = /* @__PURE__ */ new WeakMap();
var attributesForElement = (element) => {
  let attrs = attributes.get(element);
  if (attrs === void 0) {
    attributes.set(element, attrs = /* @__PURE__ */ new Map());
  }
  return attrs;
};
var ElementShim = class Element2 {
  constructor() {
    this.__shadowRootMode = null;
    this.__shadowRoot = null;
    this.__internals = null;
  }
  get attributes() {
    return Array.from(attributesForElement(this)).map(([name, value]) => ({
      name,
      value
    }));
  }
  get shadowRoot() {
    if (this.__shadowRootMode === "closed") {
      return null;
    }
    return this.__shadowRoot;
  }
  get localName() {
    return this.constructor.__localName;
  }
  get tagName() {
    return this.localName?.toUpperCase();
  }
  setAttribute(name, value) {
    attributesForElement(this).set(name, String(value));
  }
  removeAttribute(name) {
    attributesForElement(this).delete(name);
  }
  toggleAttribute(name, force) {
    if (this.hasAttribute(name)) {
      if (force === void 0 || !force) {
        this.removeAttribute(name);
        return false;
      }
    } else {
      if (force === void 0 || force) {
        this.setAttribute(name, "");
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  hasAttribute(name) {
    return attributesForElement(this).has(name);
  }
  attachShadow(init) {
    const shadowRoot = { host: this };
    this.__shadowRootMode = init.mode;
    if (init && init.mode === "open") {
      this.__shadowRoot = shadowRoot;
    }
    return shadowRoot;
  }
  attachInternals() {
    if (this.__internals !== null) {
      throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.`);
    }
    const internals = new ElementInternalsShim(this);
    this.__internals = internals;
    return internals;
  }
  getAttribute(name) {
    const value = attributesForElement(this).get(name);
    return value ?? null;
  }
};
var HTMLElementShim = class HTMLElement2 extends ElementShim {
};
var HTMLElementShimWithRealType = HTMLElementShim;
var CustomElementRegistryShim = class CustomElementRegistry {
  constructor() {
    this.__definitions = /* @__PURE__ */ new Map();
  }
  define(name, ctor) {
    if (this.__definitions.has(name)) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`'CustomElementRegistry' already has "${name}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);
      } else {
        throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${name}" has already been used with this registry`);
      }
    }
    ctor.__localName = name;
    this.__definitions.set(name, {
      ctor,
      // Note it's important we read `observedAttributes` in case it is a getter
      // with side-effects, as is the case in Lit, where it triggers class
      // finalization.
      //
      // TODO(aomarks) To be spec compliant, we should also capture the
      // registration-time lifecycle methods like `connectedCallback`. For them
      // to be actually accessible to e.g. the Lit SSR element renderer, though,
      // we'd need to introduce a new API for accessing them (since `get` only
      // returns the constructor).
      observedAttributes: ctor.observedAttributes ?? []
    });
  }
  get(name) {
    const definition = this.__definitions.get(name);
    return definition?.ctor;
  }
};
var CustomElementRegistryShimWithRealType = CustomElementRegistryShim;
var customElements2 = new CustomElementRegistryShimWithRealType();

// node_modules/@lit/reactive-element/node/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t5, e5, o6) {
    if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e5;
  }
  get styleSheet() {
    let t5 = this.o;
    const s2 = this.t;
    if (e && void 0 === t5) {
      const e5 = void 0 !== s2 && 1 === s2.length;
      e5 && (t5 = o.get(s2)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s2, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, s);
var i = (t5, ...e5) => {
  const o6 = 1 === t5.length ? t5[0] : e5.reduce((e6, s2, o7) => e6 + ((t6) => {
    if (true === t6._$cssResult$) return t6.cssText;
    if ("number" == typeof t6) return t6;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t5[o7 + 1], t5[0]);
  return new n(o6, t5, s);
};
var S = (s2, o6) => {
  if (e) s2.adoptedStyleSheets = o6.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else for (const e5 of o6) {
    const o7 = document.createElement("style"), n6 = t.litNonce;
    void 0 !== n6 && o7.setAttribute("nonce", n6), o7.textContent = e5.cssText, s2.appendChild(o7);
  }
};
var c = e || void 0 === t.CSSStyleSheet ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e5 = "";
  for (const s2 of t6.cssRules) e5 += s2.cssText;
  return r(e5);
})(t5) : t5;

// node_modules/@lit/reactive-element/node/reactive-element.js
var { is: r2, defineProperty: h, getOwnPropertyDescriptor: o2, getOwnPropertyNames: n2, getOwnPropertySymbols: a, getPrototypeOf: c2 } = Object;
var l = globalThis;
l.customElements ??= customElements2;
var p = l.trustedTypes;
var d = p ? p.emptyScript : "";
var u = l.reactiveElementPolyfillSupport;
var f = (t5, s2) => t5;
var b = { toAttribute(t5, s2) {
  switch (s2) {
    case Boolean:
      t5 = t5 ? d : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, s2) {
  let i4 = t5;
  switch (s2) {
    case Boolean:
      i4 = null !== t5;
      break;
    case Number:
      i4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        i4 = JSON.parse(t5);
      } catch (t6) {
        i4 = null;
      }
  }
  return i4;
} };
var y = (t5, s2) => !r2(t5, s2);
var m = { attribute: true, type: String, converter: b, reflect: false, hasChanged: y };
Symbol.metadata ??= Symbol("metadata"), l.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends (globalThis.HTMLElement ?? HTMLElementShimWithRealType) {
  static addInitializer(t5) {
    this._$Ei(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t5, s2 = m) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t5, s2), !s2.noAccessor) {
      const i4 = Symbol(), e5 = this.getPropertyDescriptor(t5, i4, s2);
      void 0 !== e5 && h(this.prototype, t5, e5);
    }
  }
  static getPropertyDescriptor(t5, s2, i4) {
    const { get: e5, set: r7 } = o2(this.prototype, t5) ?? { get() {
      return this[s2];
    }, set(t6) {
      this[s2] = t6;
    } };
    return { get() {
      return e5?.call(this);
    }, set(s3) {
      const h5 = e5?.call(this);
      r7.call(this, s3), this.requestUpdate(t5, h5, i4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? m;
  }
  static _$Ei() {
    if (this.hasOwnProperty(f("elementProperties"))) return;
    const t5 = c2(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(f("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(f("properties"))) {
      const t6 = this.properties, s2 = [...n2(t6), ...a(t6)];
      for (const i4 of s2) this.createProperty(i4, t6[i4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const s2 = litPropertyMetadata.get(t5);
      if (void 0 !== s2) for (const [t6, i4] of s2) this.elementProperties.set(t6, i4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t6, s2] of this.elementProperties) {
      const i4 = this._$Eu(t6, s2);
      void 0 !== i4 && this._$Eh.set(i4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const s2 = [];
    if (Array.isArray(t5)) {
      const e5 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of e5) s2.unshift(c(t6));
    } else void 0 !== t5 && s2.push(c(t5));
    return s2;
  }
  static _$Eu(t5, s2) {
    const i4 = s2.attribute;
    return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this._$EO?.delete(t5);
  }
  _$E_() {
    const t5 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i4 of s2.keys()) this.hasOwnProperty(i4) && (t5.set(i4, this[i4]), delete this[i4]);
    t5.size > 0 && (this._$Ep = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, s2, i4) {
    this._$AK(t5, i4);
  }
  _$EC(t5, s2) {
    const i4 = this.constructor.elementProperties.get(t5), e5 = this.constructor._$Eu(t5, i4);
    if (void 0 !== e5 && true === i4.reflect) {
      const r7 = (void 0 !== i4.converter?.toAttribute ? i4.converter : b).toAttribute(s2, i4.type);
      this._$Em = t5, null == r7 ? this.removeAttribute(e5) : this.setAttribute(e5, r7), this._$Em = null;
    }
  }
  _$AK(t5, s2) {
    const i4 = this.constructor, e5 = i4._$Eh.get(t5);
    if (void 0 !== e5 && this._$Em !== e5) {
      const t6 = i4.getPropertyOptions(e5), r7 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : b;
      this._$Em = e5, this[e5] = r7.fromAttribute(s2, t6.type), this._$Em = null;
    }
  }
  requestUpdate(t5, s2, i4) {
    if (void 0 !== t5) {
      if (i4 ??= this.constructor.getPropertyOptions(t5), !(i4.hasChanged ?? y)(this[t5], s2)) return;
      this.P(t5, s2, i4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t5, s2, i4) {
    this._$AL.has(t5) || this._$AL.set(t5, s2), true === i4.reflect && this._$Em !== t5 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t5);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t7, s3] of this._$Ep) this[t7] = s3;
        this._$Ep = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0) for (const [s3, i4] of t6) true !== i4.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i4);
    }
    let t5 = false;
    const s2 = this._$AL;
    try {
      t5 = this.shouldUpdate(s2), t5 ? (this.willUpdate(s2), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(s2)) : this._$EU();
    } catch (s3) {
      throw t5 = false, this._$EU(), s3;
    }
    t5 && this._$AE(s2);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$Ej &&= this._$Ej.forEach((t6) => this._$EC(t6, this[t6])), this._$EU();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[f("elementProperties")] = /* @__PURE__ */ new Map(), g[f("finalized")] = /* @__PURE__ */ new Map(), u?.({ ReactiveElement: g }), (l.reactiveElementVersions ??= []).push("2.0.4");

// node_modules/lit-html/node/lit-html.js
var n3 = globalThis;
var c3 = n3.trustedTypes;
var h2 = c3 ? c3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
var f2 = "$lit$";
var v = `lit$${Math.random().toFixed(9).slice(2)}$`;
var m2 = "?" + v;
var _ = `<${m2}>`;
var w = void 0 === n3.document ? { createTreeWalker: () => ({}) } : document;
var lt = () => w.createComment("");
var st = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
var g2 = Array.isArray;
var $2 = (t5) => g2(t5) || "function" == typeof t5?.[Symbol.iterator];
var x = "[ 	\n\f\r]";
var T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var E = /-->/g;
var k = />/g;
var O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var S2 = /'/g;
var j = /"/g;
var M = /^(?:script|style|textarea|title)$/i;
var P = (t5) => (i4, ...s2) => ({ _$litType$: t5, strings: i4, values: s2 });
var ke = P(1);
var Oe = P(2);
var Se = P(3);
var R = Symbol.for("lit-noChange");
var D = Symbol.for("lit-nothing");
var V = /* @__PURE__ */ new WeakMap();
var I = w.createTreeWalker(w, 129);
function N(t5, i4) {
  if (!g2(t5) || !t5.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== h2 ? h2.createHTML(i4) : i4;
}
var U = (t5, i4) => {
  const s2 = t5.length - 1, e5 = [];
  let h5, o6 = 2 === i4 ? "<svg>" : 3 === i4 ? "<math>" : "", n6 = T;
  for (let i5 = 0; i5 < s2; i5++) {
    const s3 = t5[i5];
    let r7, l3, c5 = -1, a3 = 0;
    for (; a3 < s3.length && (n6.lastIndex = a3, l3 = n6.exec(s3), null !== l3); ) a3 = n6.lastIndex, n6 === T ? "!--" === l3[1] ? n6 = E : void 0 !== l3[1] ? n6 = k : void 0 !== l3[2] ? (M.test(l3[2]) && (h5 = RegExp("</" + l3[2], "g")), n6 = O) : void 0 !== l3[3] && (n6 = O) : n6 === O ? ">" === l3[0] ? (n6 = h5 ?? T, c5 = -1) : void 0 === l3[1] ? c5 = -2 : (c5 = n6.lastIndex - l3[2].length, r7 = l3[1], n6 = void 0 === l3[3] ? O : '"' === l3[3] ? j : S2) : n6 === j || n6 === S2 ? n6 = O : n6 === E || n6 === k ? n6 = T : (n6 = O, h5 = void 0);
    const u3 = n6 === O && t5[i5 + 1].startsWith("/>") ? " " : "";
    o6 += n6 === T ? s3 + _ : c5 >= 0 ? (e5.push(r7), s3.slice(0, c5) + f2 + s3.slice(c5) + v + u3) : s3 + v + (-2 === c5 ? i5 : u3);
  }
  return [N(t5, o6 + (t5[s2] || "<?>") + (2 === i4 ? "</svg>" : 3 === i4 ? "</math>" : "")), e5];
};
var B = class _B {
  constructor({ strings: t5, _$litType$: i4 }, s2) {
    let e5;
    this.parts = [];
    let h5 = 0, o6 = 0;
    const n6 = t5.length - 1, r7 = this.parts, [l3, a3] = U(t5, i4);
    if (this.el = _B.createElement(l3, s2), I.currentNode = this.el.content, 2 === i4 || 3 === i4) {
      const t6 = this.el.content.firstChild;
      t6.replaceWith(...t6.childNodes);
    }
    for (; null !== (e5 = I.nextNode()) && r7.length < n6; ) {
      if (1 === e5.nodeType) {
        if (e5.hasAttributes()) for (const t6 of e5.getAttributeNames()) if (t6.endsWith(f2)) {
          const i5 = a3[o6++], s3 = e5.getAttribute(t6).split(v), n7 = /([.?@])?(.*)/.exec(i5);
          r7.push({ type: 1, index: h5, name: n7[2], strings: s3, ctor: "." === n7[1] ? Y : "?" === n7[1] ? Z : "@" === n7[1] ? q : G }), e5.removeAttribute(t6);
        } else t6.startsWith(v) && (r7.push({ type: 6, index: h5 }), e5.removeAttribute(t6));
        if (M.test(e5.tagName)) {
          const t6 = e5.textContent.split(v), i5 = t6.length - 1;
          if (i5 > 0) {
            e5.textContent = c3 ? c3.emptyScript : "";
            for (let s3 = 0; s3 < i5; s3++) e5.append(t6[s3], lt()), I.nextNode(), r7.push({ type: 2, index: ++h5 });
            e5.append(t6[i5], lt());
          }
        }
      } else if (8 === e5.nodeType) if (e5.data === m2) r7.push({ type: 2, index: h5 });
      else {
        let t6 = -1;
        for (; -1 !== (t6 = e5.data.indexOf(v, t6 + 1)); ) r7.push({ type: 7, index: h5 }), t6 += v.length - 1;
      }
      h5++;
    }
  }
  static createElement(t5, i4) {
    const s2 = w.createElement("template");
    return s2.innerHTML = t5, s2;
  }
};
function z(t5, i4, s2 = t5, e5) {
  if (i4 === R) return i4;
  let h5 = void 0 !== e5 ? s2.o?.[e5] : s2.l;
  const o6 = st(i4) ? void 0 : i4._$litDirective$;
  return h5?.constructor !== o6 && (h5?._$AO?.(false), void 0 === o6 ? h5 = void 0 : (h5 = new o6(t5), h5._$AT(t5, s2, e5)), void 0 !== e5 ? (s2.o ??= [])[e5] = h5 : s2.l = h5), void 0 !== h5 && (i4 = z(t5, h5._$AS(t5, i4.values), h5, e5)), i4;
}
var F = class {
  constructor(t5, i4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t5) {
    const { el: { content: i4 }, parts: s2 } = this._$AD, e5 = (t5?.creationScope ?? w).importNode(i4, true);
    I.currentNode = e5;
    let h5 = I.nextNode(), o6 = 0, n6 = 0, r7 = s2[0];
    for (; void 0 !== r7; ) {
      if (o6 === r7.index) {
        let i5;
        2 === r7.type ? i5 = new et(h5, h5.nextSibling, this, t5) : 1 === r7.type ? i5 = new r7.ctor(h5, r7.name, r7.strings, this, t5) : 6 === r7.type && (i5 = new K(h5, this, t5)), this._$AV.push(i5), r7 = s2[++n6];
      }
      o6 !== r7?.index && (h5 = I.nextNode(), o6++);
    }
    return I.currentNode = w, e5;
  }
  p(t5) {
    let i4 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t5, s2, i4), i4 += s2.strings.length - 2) : s2._$AI(t5[i4])), i4++;
  }
};
var et = class _et {
  get _$AU() {
    return this._$AM?._$AU ?? this.v;
  }
  constructor(t5, i4, s2, e5) {
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t5, this._$AB = i4, this._$AM = s2, this.options = e5, this.v = e5?.isConnected ?? true;
  }
  get parentNode() {
    let t5 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === t5?.nodeType && (t5 = i4.parentNode), t5;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t5, i4 = this) {
    t5 = z(this, t5, i4), st(t5) ? t5 === D || null == t5 || "" === t5 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t5 !== this._$AH && t5 !== R && this._(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : $2(t5) ? this.k(t5) : this._(t5);
  }
  O(t5) {
    return this._$AA.parentNode.insertBefore(t5, this._$AB);
  }
  T(t5) {
    this._$AH !== t5 && (this._$AR(), this._$AH = this.O(t5));
  }
  _(t5) {
    this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(w.createTextNode(t5)), this._$AH = t5;
  }
  $(t5) {
    const { values: i4, _$litType$: s2 } = t5, e5 = "number" == typeof s2 ? this._$AC(t5) : (void 0 === s2.el && (s2.el = B.createElement(N(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e5) this._$AH.p(i4);
    else {
      const t6 = new F(e5, this), s3 = t6.u(this.options);
      t6.p(i4), this.T(s3), this._$AH = t6;
    }
  }
  _$AC(t5) {
    let i4 = V.get(t5.strings);
    return void 0 === i4 && V.set(t5.strings, i4 = new B(t5)), i4;
  }
  k(t5) {
    g2(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s2, e5 = 0;
    for (const h5 of t5) e5 === i4.length ? i4.push(s2 = new _et(this.O(lt()), this.O(lt()), this, this.options)) : s2 = i4[e5], s2._$AI(h5), e5++;
    e5 < i4.length && (this._$AR(s2 && s2._$AB.nextSibling, e5), i4.length = e5);
  }
  _$AR(t5 = this._$AA.nextSibling, i4) {
    for (this._$AP?.(false, true, i4); t5 && t5 !== this._$AB; ) {
      const i5 = t5.nextSibling;
      t5.remove(), t5 = i5;
    }
  }
  setConnected(t5) {
    void 0 === this._$AM && (this.v = t5, this._$AP?.(t5));
  }
};
var G = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t5, i4, s2, e5, h5) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t5, this.name = i4, this._$AM = e5, this.options = h5, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = D;
  }
  _$AI(t5, i4 = this, s2, e5) {
    const h5 = this.strings;
    let o6 = false;
    if (void 0 === h5) t5 = z(this, t5, i4, 0), o6 = !st(t5) || t5 !== this._$AH && t5 !== R, o6 && (this._$AH = t5);
    else {
      const e6 = t5;
      let n6, r7;
      for (t5 = h5[0], n6 = 0; n6 < h5.length - 1; n6++) r7 = z(this, e6[s2 + n6], i4, n6), r7 === R && (r7 = this._$AH[n6]), o6 ||= !st(r7) || r7 !== this._$AH[n6], r7 === D ? t5 = D : t5 !== D && (t5 += (r7 ?? "") + h5[n6 + 1]), this._$AH[n6] = r7;
    }
    o6 && !e5 && this.j(t5);
  }
  j(t5) {
    t5 === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
  }
};
var Y = class extends G {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t5) {
    this.element[this.name] = t5 === D ? void 0 : t5;
  }
};
var Z = class extends G {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t5) {
    this.element.toggleAttribute(this.name, !!t5 && t5 !== D);
  }
};
var q = class extends G {
  constructor(t5, i4, s2, e5, h5) {
    super(t5, i4, s2, e5, h5), this.type = 5;
  }
  _$AI(t5, i4 = this) {
    if ((t5 = z(this, t5, i4, 0) ?? D) === R) return;
    const s2 = this._$AH, e5 = t5 === D && s2 !== D || t5.capture !== s2.capture || t5.once !== s2.once || t5.passive !== s2.passive, h5 = t5 !== D && (s2 === D || e5);
    e5 && this.element.removeEventListener(this.name, this, s2), h5 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
  }
  handleEvent(t5) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
  }
};
var K = class {
  constructor(t5, i4, s2) {
    this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5) {
    z(this, t5);
  }
};
var si = { M: f2, P: v, A: m2, C: 1, L: U, R: F, D: $2, V: z, I: et, H: G, N: Z, U: q, B: Y, F: K };
var Re = n3.litHtmlPolyfillSupport;
Re?.(B, et), (n3.litHtmlVersions ??= []).push("3.2.0");
var Q = (t5, i4, s2) => {
  const e5 = s2?.renderBefore ?? i4;
  let h5 = e5._$litPart$;
  if (void 0 === h5) {
    const t6 = s2?.renderBefore ?? null;
    e5._$litPart$ = h5 = new et(i4.insertBefore(lt(), t6), t6, void 0, s2 ?? {});
  }
  return h5._$AI(t5), h5;
};

// node_modules/lit-element/lit-element.js
var h3 = class extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    const t5 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t5.firstChild, t5;
  }
  update(t5) {
    const e5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this.o = Q(e5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.o?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.o?.setConnected(false);
  }
  render() {
    return R;
  }
};
h3._$litElement$ = true, h3["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: h3 });
var f3 = globalThis.litElementPolyfillSupport;
f3?.({ LitElement: h3 });
(globalThis.litElementVersions ??= []).push("4.1.0");

// node_modules/@lit/reactive-element/node/decorators/custom-element.js
var t2 = (t5) => (e5, o6) => {
  void 0 !== o6 ? o6.addInitializer(() => {
    customElements.define(t5, e5);
  }) : customElements.define(t5, e5);
};

// node_modules/@lit/reactive-element/node/decorators/property.js
var o3 = { attribute: true, type: String, converter: b, reflect: false, hasChanged: y };
var r3 = (t5 = o3, e5, r7) => {
  const { kind: n6, metadata: i4 } = r7;
  let s2 = globalThis.litPropertyMetadata.get(i4);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i4, s2 = /* @__PURE__ */ new Map()), s2.set(r7.name, t5), "accessor" === n6) {
    const { name: o6 } = r7;
    return { set(r8) {
      const n7 = e5.get.call(this);
      e5.set.call(this, r8), this.requestUpdate(o6, n7, t5);
    }, init(e6) {
      return void 0 !== e6 && this.P(o6, void 0, t5), e6;
    } };
  }
  if ("setter" === n6) {
    const { name: o6 } = r7;
    return function(r8) {
      const n7 = this[o6];
      e5.call(this, r8), this.requestUpdate(o6, n7, t5);
    };
  }
  throw Error("Unsupported decorator location: " + n6);
};
function n4(t5) {
  return (e5, o6) => "object" == typeof o6 ? r3(t5, e5, o6) : ((t6, e6, o7) => {
    const r7 = e6.hasOwnProperty(o7);
    return e6.constructor.createProperty(o7, r7 ? { ...t6, wrapped: true } : t6), r7 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
  })(t5, e5, o6);
}

// node_modules/@lit/reactive-element/node/decorators/state.js
function r4(r7) {
  return n4({ ...r7, state: true, attribute: false });
}

// node_modules/@lit/reactive-element/node/decorators/base.js
var e2 = (e5, t5, c5) => (c5.configurable = true, c5.enumerable = true, Reflect.decorate && "object" != typeof t5 && Object.defineProperty(e5, t5, c5), c5);

// node_modules/@lit/reactive-element/node/decorators/query-assigned-elements.js
function o4(o6) {
  return (e5, n6) => {
    const { slot: r7, selector: s2 } = o6 ?? {}, c5 = "slot" + (r7 ? `[name=${r7}]` : ":not([name])");
    return e2(e5, n6, { get() {
      const t5 = this.renderRoot?.querySelector(c5), e6 = t5?.assignedElements(o6) ?? [];
      return void 0 === s2 ? e6 : e6.filter((t6) => t6.matches(s2));
    } });
  };
}

// node_modules/lit-html/node/directives/if-defined.js
var to = (t5) => t5 ?? D;

// node_modules/lit-html/node/directive.js
var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e3 = (t5) => (...e5) => ({ _$litDirective$: t5, values: e5 });
var i2 = class {
  constructor(t5) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t5, e5, i4) {
    this.t = t5, this._$AM = e5, this.i = i4;
  }
  _$AS(t5, e5) {
    return this.update(t5, e5);
  }
  update(t5, e5) {
    return this.render(...e5);
  }
};

// node_modules/lit-html/node/directives/style-map.js
var ee = "important";
var ie = " !" + ee;
var se = e3(class extends i2 {
  constructor(e5) {
    if (super(e5), e5.type !== t3.ATTRIBUTE || "style" !== e5.name || e5.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return Object.keys(t5).reduce((e5, r7) => {
      const s2 = t5[r7];
      return null == s2 ? e5 : e5 + `${r7 = r7.includes("-") ? r7 : r7.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(t5, [e5]) {
    const { style: r7 } = t5.element;
    if (void 0 === this.ft) return this.ft = new Set(Object.keys(e5)), this.render(e5);
    for (const t6 of this.ft) null == e5[t6] && (this.ft.delete(t6), t6.includes("-") ? r7.removeProperty(t6) : r7[t6] = null);
    for (const t6 in e5) {
      const s2 = e5[t6];
      if (null != s2) {
        this.ft.add(t6);
        const e6 = "string" == typeof s2 && s2.endsWith(ie);
        t6.includes("-") || e6 ? r7.setProperty(t6, e6 ? s2.slice(0, -11) : s2, e6 ? ee : "") : r7[t6] = s2;
      }
    }
    return R;
  }
});

// node_modules/@mdui/shared/base/mdui-element.js
var MduiElement = class extends h3 {
  /**
   * 触发自定义事件。若返回 false，表示事件被取消
   * @param type
   * @param options 通常只用到 cancelable 和 detail；bubbles、composed 统一不用
   */
  emit(type, options) {
    const event = new CustomEvent(type, Object.assign({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    return this.dispatchEvent(event);
  }
};

// node_modules/@mdui/shared/controllers/has-slot.js
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    (this.host = host).addController(this);
    this.slotNames = slotNames;
    this.onSlotChange = this.onSlotChange.bind(this);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.onSlotChange);
    if (!isDomReady()) {
      $(() => {
        this.host.requestUpdate();
      });
    }
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.onSlotChange);
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  onSlotChange(event) {
    const slot = event.target;
    if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
      this.host.requestUpdate();
    }
  }
};

// node_modules/@mdui/shared/helpers/template.js
var nothingTemplate = ke`${D}`;

// node_modules/@mdui/shared/lit-styles/component-style.js
var componentStyle = i`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}:host :focus,:host :focus-visible,:host(:focus),:host(:focus-visible){outline:0}[hidden]{display:none!important}`;

// node_modules/lit-html/node/directives/unsafe-html.js
var le = class extends i2 {
  constructor(i4) {
    if (super(i4), this.it = D, i4.type !== t3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t5) {
    if (t5 === D || null == t5) return this._t = void 0, this.it = t5;
    if (t5 === R) return t5;
    if ("string" != typeof t5) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t5 === this.it) return this._t;
    this.it = t5;
    const i4 = [t5];
    return i4.raw = i4, this._t = { _$litType$: this.constructor.resultType, strings: i4, values: [] };
  }
};
le.directiveName = "unsafeHTML", le.resultType = 1;
var ae = e3(le);

// node_modules/lit-html/node/directives/unsafe-svg.js
var pe = class extends le {
};
pe.directiveName = "unsafeSVG", pe.resultType = 2;
var fe = e3(pe);

// node_modules/lit-html/node/directive-helpers.js
var { I: et2 } = si;
var st2 = (o6) => null === o6 || "object" != typeof o6 && "function" != typeof o6;
var rt = (o6) => void 0 === o6.strings;
var ht = {};
var dt = (o6, t5 = ht) => o6._$AH = t5;

// node_modules/lit-html/node/async-directive.js
var mt = (i4, t5) => {
  const e5 = i4._$AN;
  if (void 0 === e5) return false;
  for (const i5 of e5) i5._$AO?.(t5, false), mt(i5, t5);
  return true;
};
var _t = (i4) => {
  let t5, e5;
  do {
    if (void 0 === (t5 = i4._$AM)) break;
    e5 = t5._$AN, e5.delete(i4), i4 = t5;
  } while (0 === e5?.size);
};
var wt = (i4) => {
  for (let t5; t5 = i4._$AM; i4 = t5) {
    let e5 = t5._$AN;
    if (void 0 === e5) t5._$AN = e5 = /* @__PURE__ */ new Set();
    else if (e5.has(i4)) break;
    e5.add(i4), gt(t5);
  }
};
function bt(i4) {
  void 0 !== this._$AN ? (_t(this), this._$AM = i4, wt(this)) : this._$AM = i4;
}
function yt(i4, t5 = false, e5 = 0) {
  const s2 = this._$AH, o6 = this._$AN;
  if (void 0 !== o6 && 0 !== o6.size) if (t5) if (Array.isArray(s2)) for (let i5 = e5; i5 < s2.length; i5++) mt(s2[i5], false), _t(s2[i5]);
  else null != s2 && (mt(s2, false), _t(s2));
  else mt(this, i4);
}
var gt = (i4) => {
  i4.type == t3.CHILD && (i4._$AP ??= yt, i4._$AQ ??= bt);
};
var $t = class extends i2 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i4, t5, e5) {
    super._$AT(i4, t5, e5), wt(this), this.isConnected = i4._$AU;
  }
  _$AO(i4, t5 = true) {
    i4 !== this.isConnected && (this.isConnected = i4, i4 ? this.reconnected?.() : this.disconnected?.()), t5 && (mt(this, i4), _t(this));
  }
  setValue(i4) {
    if (rt(this.t)) this.t._$AI(i4, this);
    else {
      const t5 = [...this.t._$AH];
      t5[this.i] = i4, this.t._$AI(t5, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/node/directives/private-async-helpers.js
var Tt = class {
  constructor(t5) {
    this.Y = t5;
  }
  disconnect() {
    this.Y = void 0;
  }
  reconnect(t5) {
    this.Y = t5;
  }
  deref() {
    return this.Y;
  }
};
var Et = class {
  constructor() {
    this.Z = void 0, this.q = void 0;
  }
  get() {
    return this.Z;
  }
  pause() {
    this.Z ??= new Promise((t5) => this.q = t5);
  }
  resume() {
    this.q?.(), this.Z = this.q = void 0;
  }
};

// node_modules/lit-html/node/directives/until.js
var me = (t5) => !st2(t5) && "function" == typeof t5.then;
var _e = 1073741823;
var we = class extends $t {
  constructor() {
    super(...arguments), this.wt = _e, this.bt = [], this.K = new Tt(this), this.X = new Et();
  }
  render(...t5) {
    return t5.find((t6) => !me(t6)) ?? R;
  }
  update(t5, s2) {
    const i4 = this.bt;
    let e5 = i4.length;
    this.bt = s2;
    const r7 = this.K, o6 = this.X;
    this.isConnected || this.disconnected();
    for (let t6 = 0; t6 < s2.length && !(t6 > this.wt); t6++) {
      const n6 = s2[t6];
      if (!me(n6)) return this.wt = t6, n6;
      t6 < e5 && n6 === i4[t6] || (this.wt = _e, e5 = 0, Promise.resolve(n6).then(async (t7) => {
        for (; o6.get(); ) await o6.get();
        const s3 = r7.deref();
        if (void 0 !== s3) {
          const i5 = s3.bt.indexOf(n6);
          i5 > -1 && i5 < s3.wt && (s3.wt = i5, s3.setValue(t7));
        }
      }));
    }
    return R;
  }
  disconnected() {
    this.K.disconnect(), this.X.pause();
  }
  reconnected() {
    this.K.reconnect(this), this.X.resume();
  }
};
var be = e3(we);

// node_modules/mdui/components/icon/style.js
var style = i`:host{display:inline-block;width:1em;height:1em;font-weight:400;font-family:'Material Icons';font-display:block;font-style:normal;line-height:1;direction:ltr;letter-spacing:normal;white-space:nowrap;text-transform:none;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-size:1.5rem}::slotted(svg),svg{width:100%;height:100%;fill:currentcolor}`;

// node_modules/mdui/components/icon/index.js
var Icon = class Icon2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]");
  }
  render() {
    const renderDefault = () => {
      if (this.name) {
        const [name, variant] = this.name.split("--");
        const familyMap = /* @__PURE__ */ new Map([
          ["outlined", "Material Icons Outlined"],
          ["filled", "Material Icons"],
          ["rounded", "Material Icons Round"],
          ["sharp", "Material Icons Sharp"],
          ["two-tone", "Material Icons Two Tone"]
        ]);
        return ke`<span style="${se({ fontFamily: familyMap.get(variant) })}">${name}</span>`;
      }
      if (this.src) {
        return ke`${be(ajax({ url: this.src }).then(fe))}`;
      }
      return ke``;
    };
    return this.hasSlotController.test("[default]") ? ke`<slot></slot>` : renderDefault();
  }
};
Icon.styles = [componentStyle, style];
__decorate([
  n4({ reflect: true })
], Icon.prototype, "name", void 0);
__decorate([
  n4({ reflect: true })
], Icon.prototype, "src", void 0);
Icon = __decorate([
  t2("mdui-icon")
], Icon);

// node_modules/mdui/components/avatar/style.js
var style2 = i`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;white-space:nowrap;vertical-align:middle;border-radius:var(--shape-corner);-webkit-user-select:none;user-select:none;width:2.5rem;height:2.5rem;background-color:rgb(var(--mdui-color-primary-container));color:rgb(var(--mdui-color-on-primary-container));font-size:var(--mdui-typescale-title-medium-size);font-weight:var(--mdui-typescale-title-medium-weight);letter-spacing:var(--mdui-typescale-title-medium-tracking);line-height:var(--mdui-typescale-title-medium-line-height)}img{width:100%;height:100%}::slotted(mdui-icon),mdui-icon{font-size:1.5em}`;

// node_modules/mdui/components/avatar/index.js
var Avatar = class Avatar2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]");
  }
  render() {
    return this.hasSlotController.test("[default]") ? ke`<slot></slot>` : this.src ? ke`<img part="image" alt="${to(this.label)}" src="${this.src}" style="${se({ objectFit: this.fit })}">` : this.icon ? ke`<mdui-icon part="icon" name="${this.icon}"></mdui-icon>` : nothingTemplate;
  }
};
Avatar.styles = [componentStyle, style2];
__decorate([
  n4({ reflect: true })
], Avatar.prototype, "src", void 0);
__decorate([
  n4({ reflect: true })
], Avatar.prototype, "fit", void 0);
__decorate([
  n4({ reflect: true })
], Avatar.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true })
], Avatar.prototype, "label", void 0);
Avatar = __decorate([
  t2("mdui-avatar")
], Avatar);

// node_modules/mdui/components/badge/style.js
var style3 = i`:host{--shape-corner:var(--mdui-shape-corner-full);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:var(--shape-corner);padding-left:.25rem;padding-right:.25rem;color:rgb(var(--mdui-color-on-error));background-color:rgb(var(--mdui-color-error));height:1rem;min-width:1rem;font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height)}:host([variant=small]){min-width:0;padding:0;width:.375rem;height:.375rem}`;

// node_modules/mdui/components/badge/index.js
var Badge = class Badge2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.variant = "large";
  }
  render() {
    if (this.variant === "small") {
      return nothingTemplate;
    }
    return ke`<slot></slot>`;
  }
};
Badge.styles = [componentStyle, style3];
__decorate([
  n4({ reflect: true })
], Badge.prototype, "variant", void 0);
Badge = __decorate([
  t2("mdui-badge")
], Badge);

// node_modules/@mdui/shared/helpers/decorator.js
var booleanConverter = (value) => {
  return value !== null && value !== "false";
};

// node_modules/@mdui/shared/controllers/defined.js
var DefinedController = class {
  constructor(host, options) {
    this.defined = false;
    (this.host = host).addController(this);
    this.relatedElements = options.relatedElements;
    this.needDomReady = options.needDomReady || !!options.relatedElements;
    this.onSlotChange = this.onSlotChange.bind(this);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.onSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.onSlotChange);
  }
  /**
   * 判断组件是否定义完成
   */
  isDefined() {
    if (this.defined) {
      return true;
    }
    this.defined = (!this.needDomReady || isDomReady()) && !this.getUndefinedLocalNames().length;
    return this.defined;
  }
  /**
   * 在组件定义完成后，promise 被 resolve
   */
  async whenDefined() {
    if (this.defined) {
      return Promise.resolve();
    }
    const document3 = getDocument();
    if (this.needDomReady && !isDomReady(document3)) {
      await new Promise((resolve) => {
        document3.addEventListener("DOMContentLoaded", () => resolve(), {
          once: true
        });
      });
    }
    const undefinedLocalNames = this.getUndefinedLocalNames();
    if (undefinedLocalNames.length) {
      const promises = [];
      undefinedLocalNames.forEach((localName) => {
        promises.push(customElements.whenDefined(localName));
      });
      await Promise.all(promises);
    }
    this.defined = true;
    return;
  }
  /**
   * slot 中的未完成定义的相关 Web components 组件的 CSS 选择器
   */
  getScopeLocalNameSelector() {
    const localNames = this.relatedElements;
    if (!localNames) {
      return null;
    }
    if (Array.isArray(localNames)) {
      return localNames.map((localName) => `${localName}:not(:defined)`).join(",");
    }
    return Object.keys(localNames).filter((localName) => !localNames[localName]).map((localName) => `${localName}:not(:defined)`).join(",");
  }
  /**
   * 整个页面中的未完成定义的相关 Web components 组件的 CSS 选择器
   */
  getGlobalLocalNameSelector() {
    const localNames = this.relatedElements;
    if (!localNames || Array.isArray(localNames)) {
      return null;
    }
    return Object.keys(localNames).filter((localName) => localNames[localName]).map((localName) => `${localName}:not(:defined)`).join(",");
  }
  /**
   * 获取未完成定义的相关 Web components 组件名
   */
  getUndefinedLocalNames() {
    const scopeSelector = this.getScopeLocalNameSelector();
    const globalSelector = this.getGlobalLocalNameSelector();
    const undefinedScopeElements = scopeSelector ? [...this.host.querySelectorAll(scopeSelector)] : [];
    const undefinedGlobalElements = globalSelector ? [...getDocument().querySelectorAll(globalSelector)] : [];
    const localNames = [
      ...undefinedScopeElements,
      ...undefinedGlobalElements
    ].map((element) => element.localName);
    return unique(localNames);
  }
  /**
   * slot 变更时，若 slot 中包含未完成定义的相关 Web components 组件，则组件未定义完成
   */
  onSlotChange() {
    const selector = this.getScopeLocalNameSelector();
    if (selector) {
      const undefinedElements = this.host.querySelectorAll(selector);
      if (undefinedElements.length) {
        this.defined = false;
      }
    }
  }
};

// node_modules/@mdui/shared/decorators/watch.js
function watch(propName, waitUntilFirstUpdate = false) {
  return (proto, functionName) => {
    const { update } = proto;
    if (propName in proto) {
      proto.update = function(changedProperties) {
        if (changedProperties.has(propName)) {
          const oldValue = changedProperties.get(propName);
          const newValue = this[propName];
          if (oldValue !== newValue) {
            if (!waitUntilFirstUpdate || this.hasUpdated) {
              this[functionName](oldValue, newValue);
            }
          }
        }
        update.call(this, changedProperties);
      };
    }
  };
}

// node_modules/@mdui/shared/mixins/scrollBehavior.js
var ScrollBehaviorMixin = (superclass) => {
  class ScrollBehaviorMixinClass extends superclass {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args) {
      super(...args);
      this.scrollBehaviorDefinedController = new DefinedController(this, {
        needDomReady: true
      });
      this.lastScrollTopThreshold = 0;
      this.lastScrollTopNoThreshold = 0;
      this.isParentLayout = false;
      this.onListeningScroll = this.onListeningScroll.bind(this);
    }
    /**
     * 滚动时，如果需要给 container 添加 padding，添加在顶部还是底部
     */
    get scrollPaddingPosition() {
      throw new Error("Must implement scrollPaddingPosition getter");
    }
    async onScrollTargetChange(oldValue, newValue) {
      await this.scrollBehaviorDefinedController.whenDefined();
      if (oldValue && !newValue || !oldValue && newValue) {
        this.updateContainerPadding();
      }
      if (!this.scrollBehavior) {
        return;
      }
      const oldListening = this.getListening(oldValue);
      if (oldListening) {
        oldListening.removeEventListener("scroll", this.onListeningScroll);
      }
      const newListening = this.getListening(newValue);
      if (newListening) {
        this.updateScrollTop(newListening);
        newListening.addEventListener("scroll", this.onListeningScroll);
      }
    }
    async onScrollBehaviorChange(oldValue, newValue) {
      await this.scrollBehaviorDefinedController.whenDefined();
      if (oldValue && !newValue || !oldValue && newValue) {
        this.updateContainerPadding();
      }
      const listening = this.getListening(this.scrollTarget);
      if (!listening) {
        return;
      }
      if (this.scrollBehavior) {
        this.updateScrollTop(listening);
        listening.addEventListener("scroll", this.onListeningScroll);
      } else {
        listening.removeEventListener("scroll", this.onListeningScroll);
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this.scrollBehaviorDefinedController.whenDefined().then(() => {
        this.isParentLayout = isNodeName(this.parentElement, "mdui-layout");
        this.updateContainerPadding();
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.scrollBehaviorDefinedController.whenDefined().then(() => {
        this.updateContainerPadding(false);
      });
    }
    /**
     * scrollBehavior 包含多个滚动行为，用空格分割
     * 用该方法判断指定滚动行为是否在 scrollBehavior 中
     * @param behavior 为数组时，只要其中一个行为在 scrollBehavior 中，即返回 `true`
     */
    hasScrollBehavior(behavior) {
      const behaviors = this.scrollBehavior?.split(" ") ?? [];
      if (Array.isArray(behavior)) {
        return !!behaviors.filter((v3) => behavior.includes(v3)).length;
      } else {
        return behaviors.includes(behavior);
      }
    }
    /**
     * 执行滚动事件，在滚动距离超过 scrollThreshold 时才会执行
     * Note: 父类可以按需实现该方法
     * @param isScrollingUp 是否向上滚动
     * @param scrollTop 距离 scrollTarget 顶部的距离
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runScrollThreshold(isScrollingUp, scrollTop) {
      return;
    }
    /**
     * 执行滚动事件，会无视 scrollThreshold，始终会执行
     * @param isScrollingUp 是否向上滚动
     * @param scrollTop 距离 scrollTarget 顶部的距离
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runScrollNoThreshold(isScrollingUp, scrollTop) {
      return;
    }
    /**
     * 更新滚动容器的 padding，避免内容被 navigation-bar 覆盖
     * 仅 scrollBehavior 包含 hide、shrink 时，添加 padding
     * @param withPadding 该值为 false 时，为移除 padding
     */
    updateContainerPadding(withPadding = true) {
      const container2 = this.getContainer(this.scrollTarget);
      if (!container2 || this.isParentLayout) {
        return;
      }
      const propName = this.scrollPaddingPosition === "top" ? "paddingTop" : "paddingBottom";
      if (withPadding) {
        const propValue = this.getListening(this.scrollTarget) && ["fixed", "absolute"].includes($(this).css("position")) ? this.offsetHeight : null;
        $(container2).css({ [propName]: propValue });
      } else {
        $(container2).css({ [propName]: null });
      }
    }
    onListeningScroll() {
      const listening = this.getListening(this.scrollTarget);
      window.requestAnimationFrame(() => this.onScroll(listening));
    }
    /**
     * 滚动事件，这里过滤掉不符合条件的滚动
     */
    onScroll(listening) {
      const scrollTop = listening.scrollY ?? listening.scrollTop;
      if (this.lastScrollTopNoThreshold !== scrollTop) {
        this.runScrollNoThreshold(scrollTop < this.lastScrollTopNoThreshold, scrollTop);
        this.lastScrollTopNoThreshold = scrollTop;
      }
      if (Math.abs(scrollTop - this.lastScrollTopThreshold) > (this.scrollThreshold || 0)) {
        this.runScrollThreshold(scrollTop < this.lastScrollTopThreshold, scrollTop);
        this.lastScrollTopThreshold = scrollTop;
      }
    }
    /**
     * 重新更新 lastScrollTopThreshold、lastScrollTopNoThreshold 的值
     * 用于在 scrollTarget、scrollBehavior 变更时，重新设置 lastScrollTopThreshold、lastScrollTopNoThreshold 的初始值
     */
    updateScrollTop(listening) {
      this.lastScrollTopThreshold = this.lastScrollTopNoThreshold = listening.scrollY ?? listening.scrollTop;
    }
    /**
     * 获取组件需要监听哪个元素的滚动状态
     */
    getListening(target) {
      return target ? $(target)[0] : window;
    }
    /**
     * 获取组件在哪个容器内滚动
     */
    getContainer(target) {
      return target ? $(target)[0] : document.body;
    }
  }
  __decorate([
    n4({ attribute: "scroll-target" })
  ], ScrollBehaviorMixinClass.prototype, "scrollTarget", void 0);
  __decorate([
    n4({ reflect: true, attribute: "scroll-behavior" })
  ], ScrollBehaviorMixinClass.prototype, "scrollBehavior", void 0);
  __decorate([
    n4({ type: Number, reflect: true, attribute: "scroll-threshold" })
  ], ScrollBehaviorMixinClass.prototype, "scrollThreshold", void 0);
  __decorate([
    watch("scrollTarget")
  ], ScrollBehaviorMixinClass.prototype, "onScrollTargetChange", null);
  __decorate([
    watch("scrollBehavior")
  ], ScrollBehaviorMixinClass.prototype, "onScrollBehaviorChange", null);
  return ScrollBehaviorMixinClass;
};

// node_modules/@mdui/shared/helpers/uniqueId.js
var id = 0;
var uniqueId = () => {
  return ++id;
};

// node_modules/@mdui/shared/helpers/observeResize.js
var weakMap2;
var observer;
var observeResize = (target, callback) => {
  const $target = $(target);
  const key = uniqueId();
  const result = {
    unobserve: () => {
      $target.each((_2, target2) => {
        const options = weakMap2.get(target2);
        const index = options.coArr.findIndex((co) => co.key === key);
        if (index !== -1) {
          options.coArr.splice(index, 1);
        }
        if (!options.coArr.length) {
          observer.unobserve(target2);
          weakMap2.delete(target2);
        } else {
          weakMap2.set(target2, options);
        }
      });
    }
  };
  if (!weakMap2) {
    weakMap2 = /* @__PURE__ */ new WeakMap();
    observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const target2 = entry.target;
        const options = weakMap2.get(target2);
        options.entry = entry;
        options.coArr.forEach((co) => {
          co.callback.call(result, entry, result);
        });
      });
    });
  }
  $target.each((_2, target2) => {
    const options = weakMap2.get(target2) ?? { coArr: [] };
    if (options.coArr.length && options.entry) {
      callback.call(result, options.entry, result);
    }
    options.coArr.push({ callback, key });
    weakMap2.set(target2, options);
    observer.observe(target2);
  });
  return result;
};

// node_modules/mdui/components/layout/helper.js
var LayoutManager = class {
  constructor() {
    this.states = [];
  }
  /**
   * 注册 `<mdui-layout-main>`
   */
  registerMain(element) {
    this.$main = $(element);
  }
  /**
   * 取消注册 `<mdui-layout-main>`
   */
  unregisterMain() {
    this.$main = void 0;
  }
  /**
   * 注册新的 `<mdui-layout-item>`
   */
  registerItem(element) {
    const state = { element };
    this.states.push(state);
    state.observeResize = observeResize(state.element, () => {
      this.updateLayout(state.element, {
        width: this.isNoWidth(state) ? 0 : void 0
      });
    });
    this.items = void 0;
    this.resort();
    this.updateLayout();
  }
  /**
   * 取消注册 `<mdui-layout-item>`
   */
  unregisterItem(element) {
    const index = this.states.findIndex((item2) => item2.element === element);
    if (index < 0) {
      return;
    }
    const item = this.states[index];
    item.observeResize?.unobserve();
    this.items = void 0;
    this.states.splice(index, 1);
    if (this.states[index]) {
      this.updateLayout(this.states[index].element);
    }
  }
  /**
   * 获取所有 `<mdui-layout-item>` 元素（按在 DOM 中的顺序）
   */
  getItems() {
    if (!this.items) {
      const items = this.states.map((state) => state.element);
      this.items = items.sort((a3, b3) => {
        const position = a3.compareDocumentPosition(b3);
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
          return -1;
        } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return this.items;
  }
  /**
   * 获取 `<mdui-layout-main>` 元素
   */
  getMain() {
    return this.$main ? this.$main[0] : void 0;
  }
  /**
   * 获取 `<mdui-layout-item>` 及 `<mdui-layout-main>` 元素
   */
  getItemsAndMain() {
    return [...this.getItems(), this.getMain()].filter((i4) => i4);
  }
  /**
   * 更新 `order` 值，更新完后重新计算布局
   */
  updateOrder() {
    this.resort();
    this.updateLayout();
  }
  /**
   * 重新计算布局
   * @param element 从哪一个元素开始更新；若未传入参数，则将更新所有元素
   * @param size 此次更新中，元素的宽高（仅在此次更新中使用）。若不传则自动计算
   */
  updateLayout(element, size) {
    const state = element ? {
      element,
      width: size?.width,
      height: size?.height
    } : void 0;
    const index = state ? this.states.findIndex((v3) => v3.element === state.element) : 0;
    if (index < 0) {
      return;
    }
    Object.assign(this.states[index], state);
    this.states.forEach((currState, currIndex) => {
      if (currIndex < index) {
        return;
      }
      const placement = currState.element.layoutPlacement;
      const prevState = currIndex > 0 ? this.states[currIndex - 1] : void 0;
      const top = prevState?.top ?? 0;
      const right = prevState?.right ?? 0;
      const bottom = prevState?.bottom ?? 0;
      const left = prevState?.left ?? 0;
      Object.assign(currState, { top, right, bottom, left });
      switch (placement) {
        case "top":
        case "bottom":
          currState[placement] += currState.height ?? currState.element.offsetHeight;
          break;
        case "right":
        case "left":
          currState[placement] += (this.isNoWidth(currState) ? 0 : currState.width) ?? currState.element.offsetWidth;
          break;
      }
      currState.height = currState.width = void 0;
      $(currState.element).css({
        position: "absolute",
        top: placement === "bottom" ? null : top,
        right: placement === "left" ? null : right,
        bottom: placement === "top" ? null : bottom,
        left: placement === "right" ? null : left
      });
    });
    const lastState = this.states[this.states.length - 1];
    if (this.$main) {
      this.$main.css({
        paddingTop: lastState.top,
        paddingRight: lastState.right,
        paddingBottom: lastState.bottom,
        paddingLeft: lastState.left
      });
    }
  }
  /**
   * 按 order 排序，order 相同时，按在 DOM 中的顺序排序
   */
  resort() {
    const items = this.getItems();
    this.states.sort((a3, b3) => {
      const aOrder = a3.element.order ?? 0;
      const bOrder = b3.element.order ?? 0;
      if (aOrder > bOrder) {
        return 1;
      }
      if (aOrder < bOrder) {
        return -1;
      }
      if (items.indexOf(a3.element) > items.indexOf(b3.element)) {
        return 1;
      }
      if (items.indexOf(a3.element) < items.indexOf(b3.element)) {
        return -1;
      }
      return 0;
    });
  }
  /**
   * 组件宽度是否为 0
   * mdui-navigation-drawer 较为特殊，在为模态化时，占据的宽度为 0
   */
  isNoWidth(state) {
    return isNodeName(state.element, "mdui-navigation-drawer") && // @ts-ignore
    state.element.isModal;
  }
};
var layoutManagerMap = /* @__PURE__ */ new WeakMap();
var getLayout = (element) => {
  if (!layoutManagerMap.has(element)) {
    layoutManagerMap.set(element, new LayoutManager());
  }
  return layoutManagerMap.get(element);
};

// node_modules/mdui/components/layout/layout-item-base.js
var LayoutItemBase = class extends MduiElement {
  constructor() {
    super(...arguments);
    this.isParentLayout = false;
  }
  /**
   * 当前布局组件所处的位置，父类必须实现该 getter
   */
  get layoutPlacement() {
    throw new Error("Must implement placement getter!");
  }
  // order 变更时，需要重新调整布局
  onOrderChange() {
    this.layoutManager?.updateOrder();
  }
  connectedCallback() {
    super.connectedCallback();
    const parentElement = this.parentElement;
    this.isParentLayout = isNodeName(parentElement, "mdui-layout");
    if (this.isParentLayout) {
      this.layoutManager = getLayout(parentElement);
      this.layoutManager.registerItem(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.layoutManager) {
      this.layoutManager.unregisterItem(this);
    }
  }
};
__decorate([
  n4({ type: Number, reflect: true })
], LayoutItemBase.prototype, "order", void 0);
__decorate([
  watch("order", true)
], LayoutItemBase.prototype, "onOrderChange", null);

// node_modules/mdui/components/bottom-app-bar/style.js
var style4 = i`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;right:0;bottom:0;left:0;display:flex;flex:0 0 auto;align-items:center;justify-content:flex-start;border-radius:var(--shape-corner) var(--shape-corner) 0 0;z-index:var(--z-index);transition:bottom var(--mdui-motion-duration-long2) var(--mdui-motion-easing-emphasized);padding:0 1rem;height:5rem;background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2)}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([hide]){transition-duration:var(--mdui-motion-duration-short4);bottom:-5.625rem}::slotted(:not(:first-child)){margin-left:.5rem}::slotted(mdui-fab){box-shadow:var(--mdui-elevation-level0)}:host([fab-detach]) ::slotted(mdui-fab){position:absolute;transition:bottom var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard);right:1rem;bottom:.75rem}:host([fab-detach][hide][scroll-behavior~=hide]) ::slotted(mdui-fab){transition-duration:var(--mdui-motion-duration-short4);bottom:1rem;box-shadow:var(--mdui-elevation-level2)}:host([fab-detach][hide][scroll-behavior~=hide][scroll-target]:not([scroll-target=''])) ::slotted(mdui-fab){bottom:6.625rem}:host([hide]) ::slotted(:not(mdui-fab)),:host([hide]:not([fab-detach])) ::slotted(mdui-fab){transform:translateY(8.75rem);transition:transform var(--mdui-motion-duration-0) var(--mdui-motion-easing-emphasized-accelerate) var(--mdui-motion-duration-short4)}::slotted(:first-child){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short1)}::slotted(:nth-child(2)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short3)}::slotted(:nth-child(3)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short4)}::slotted(:nth-child(4)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium1)}::slotted(:nth-child(5)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium2)}::slotted(:nth-child(6)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium3)}`;

// node_modules/mdui/components/bottom-app-bar/index.js
var BottomAppBar = class BottomAppBar2 extends ScrollBehaviorMixin(LayoutItemBase) {
  constructor() {
    super(...arguments);
    this.hide = false;
    this.fabDetach = false;
  }
  get scrollPaddingPosition() {
    return "bottom";
  }
  get layoutPlacement() {
    return "bottom";
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.addEventListener("transitionend", (event) => {
      if (event.target === this) {
        this.emit(this.hide ? "hidden" : "shown");
      }
    });
  }
  render() {
    return ke`<slot></slot>`;
  }
  /**
   * 滚动行为
   * 当前仅支持 hide 这一个行为，所以不做行为类型判断
   */
  runScrollThreshold(isScrollingUp) {
    if (!isScrollingUp && !this.hide) {
      const eventProceeded = this.emit("hide", { cancelable: true });
      if (eventProceeded) {
        this.hide = true;
      }
    }
    if (isScrollingUp && this.hide) {
      const eventProceeded = this.emit("show", { cancelable: true });
      if (eventProceeded) {
        this.hide = false;
      }
    }
  }
};
BottomAppBar.styles = [componentStyle, style4];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], BottomAppBar.prototype, "hide", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "fab-detach"
  })
], BottomAppBar.prototype, "fabDetach", void 0);
__decorate([
  n4({ reflect: true, attribute: "scroll-behavior" })
], BottomAppBar.prototype, "scrollBehavior", void 0);
BottomAppBar = __decorate([
  t2("mdui-bottom-app-bar")
], BottomAppBar);

// node_modules/lit-html/node/directives/ref.js
var ii = () => new Zt();
var Zt = class {
};
var qt = /* @__PURE__ */ new WeakMap();
var Kt = e3(class extends $t {
  render(t5) {
    return D;
  }
  update(t5, [i4]) {
    const s2 = i4 !== this.Y;
    return s2 && void 0 !== this.Y && this.rt(void 0), (s2 || this.lt !== this.ct) && (this.Y = i4, this.ht = t5.options?.host, this.rt(this.ct = t5.element)), D;
  }
  rt(t5) {
    if (this.isConnected || (t5 = void 0), "function" == typeof this.Y) {
      const i4 = this.ht ?? globalThis;
      let s2 = qt.get(i4);
      void 0 === s2 && (s2 = /* @__PURE__ */ new WeakMap(), qt.set(i4, s2)), void 0 !== s2.get(this.Y) && this.Y.call(this.ht, void 0), s2.set(this.Y, t5), void 0 !== t5 && this.Y.call(this.ht, t5);
    } else this.Y.value = t5;
  }
  get lt() {
    return "function" == typeof this.Y ? qt.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// node_modules/classcat/index.js
function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names;
  let out = "";
  if (Array.isArray(names)) {
    for (let i4 = 0, tmp; i4 < names.length; i4++) {
      if ((tmp = cc(names[i4])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k2 in names) {
      if (names[k2]) out += (out && " ") + k2;
    }
  }
  return out;
}

// node_modules/@mdui/shared/controllers/form.js
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var formResets = /* @__PURE__ */ new WeakMap();
var FormController = class {
  constructor(host, options) {
    (this.host = host).addController(this);
    this.definedController = new DefinedController(host, {
      needDomReady: true
    });
    this.options = {
      form: (control) => {
        const formId = $(control).attr("form");
        if (formId) {
          const root = control.getRootNode();
          return root.getElementById(formId);
        }
        return control.closest("form");
      },
      name: (control) => control.name,
      value: (control) => control.value,
      defaultValue: (control) => control.defaultValue,
      setValue: (control, value) => control.value = value,
      disabled: (control) => control.disabled,
      reportValidity: (control) => isFunction(control.reportValidity) ? control.reportValidity() : true,
      ...options
    };
    this.onFormData = this.onFormData.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormReset = this.onFormReset.bind(this);
    this.reportFormValidity = this.reportFormValidity.bind(this);
  }
  hostConnected() {
    this.definedController.whenDefined().then(() => {
      this.form = this.options.form(this.host);
      if (this.form) {
        this.attachForm(this.form);
      }
    });
  }
  hostDisconnected() {
    this.detachForm();
  }
  hostUpdated() {
    this.definedController.whenDefined().then(() => {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
    });
  }
  /**
   * 获取当前表单控件关联的 `<form>` 元素
   */
  getForm() {
    return this.form ?? null;
  }
  /**
   * 重置整个表单，所有表单控件恢复成默认值
   */
  reset(invoker) {
    this.doAction("reset", invoker);
  }
  /**
   * 提交整个表单
   */
  submit(invoker) {
    this.doAction("submit", invoker);
  }
  attachForm(form) {
    if (!form) {
      this.form = void 0;
      return;
    }
    this.form = form;
    if (formCollections.has(this.form)) {
      formCollections.get(this.form).add(this.host);
    } else {
      formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
    }
    this.form.addEventListener("formdata", this.onFormData);
    this.form.addEventListener("submit", this.onFormSubmit);
    this.form.addEventListener("reset", this.onFormReset);
    if (!reportValidityOverloads.has(this.form)) {
      reportValidityOverloads.set(this.form, this.form.reportValidity);
      this.form.reportValidity = () => this.reportFormValidity();
    }
  }
  detachForm() {
    if (this.form) {
      formCollections.get(this.form).delete(this.host);
      this.form.removeEventListener("formdata", this.onFormData);
      this.form.removeEventListener("submit", this.onFormSubmit);
      this.form.removeEventListener("reset", this.onFormReset);
      if (reportValidityOverloads.has(this.form) && !formCollections.get(this.form).size) {
        this.form.reportValidity = reportValidityOverloads.get(this.form);
        reportValidityOverloads.delete(this.form);
      }
    }
  }
  doAction(type, invoker) {
    if (!this.form) {
      return;
    }
    const $button = $(`<button type="${type}">`).css({
      position: "absolute",
      width: 0,
      height: 0,
      clipPath: "inset(50%)",
      overflow: "hidden",
      whiteSpace: "nowrap"
    });
    const button = $button[0];
    if (invoker) {
      button.name = invoker.name;
      button.value = invoker.value;
      [
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget"
      ].forEach((attr) => {
        $button.attr(attr, $(invoker).attr(attr));
      });
    }
    this.form.append(button);
    button.click();
    button.remove();
  }
  onFormData(event) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);
    const isButton = [
      "mdui-button",
      "mdui-button-icon",
      "mdui-chip",
      "mdui-fab",
      "mdui-segmented-button"
    ].includes(this.host.tagName.toLowerCase());
    if (!disabled && !isButton && isString(name) && name && !isUndefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          event.formData.append(name, val.toString());
        });
      } else {
        event.formData.append(name, value.toString());
      }
    }
  }
  // todo: 当前组件进行验证的顺序，取决于组件的注册顺序，而不会按在 DOM 中的顺序从上到下验证。如何按 DOM 顺序验证？
  onFormSubmit(event) {
    const disabled = this.options.disabled(this.host);
    const reportValidity = this.options.reportValidity;
    if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  onFormReset() {
    if (this.form) {
      this.options.setValue(this.host, this.options.defaultValue(this.host));
      this.host.invalid = false;
      if (formResets.has(this.form)) {
        formResets.get(this.form).add(this.host);
      } else {
        formResets.set(this.form, /* @__PURE__ */ new Set([this.host]));
      }
    }
  }
  reportFormValidity() {
    if (this.form && !this.form.noValidate) {
      const elements = getFormControls(this.form);
      for (const element of elements) {
        if (isFunction(element.reportValidity) && !element.reportValidity()) {
          return false;
        }
      }
    }
    return true;
  }
};

// node_modules/@mdui/shared/mixins/anchor.js
var AnchorMixin = (superclass) => {
  class AnchorMixinClass extends superclass {
    renderAnchor({ id: id2, className: className2, part, content = ke`<slot></slot>`, refDirective, tabIndex }) {
      return ke`<a ${refDirective} id="${to(id2)}" class="_a ${className2 ? className2 : ""}" part="${to(part)}" href="${to(this.href)}" download="${to(this.download)}" target="${to(this.target)}" rel="${to(this.rel)}" tabindex="${to(tabIndex)}">${content}</a>`;
    }
  }
  __decorate([
    n4({ reflect: true })
  ], AnchorMixinClass.prototype, "href", void 0);
  __decorate([
    n4({ reflect: true })
  ], AnchorMixinClass.prototype, "download", void 0);
  __decorate([
    n4({ reflect: true })
  ], AnchorMixinClass.prototype, "target", void 0);
  __decorate([
    n4({ reflect: true })
  ], AnchorMixinClass.prototype, "rel", void 0);
  return AnchorMixinClass;
};

// node_modules/@mdui/shared/mixins/focusable.js
var isClick = true;
var document2 = getDocument();
document2.addEventListener("pointerdown", () => {
  isClick = true;
});
document2.addEventListener("keydown", () => {
  isClick = false;
});
var FocusableMixin = (superclass) => {
  class FocusableMixinClass extends superclass {
    constructor() {
      super(...arguments);
      this.autofocus = false;
      this.focused = false;
      this.focusVisible = false;
      this.focusableDefinedController = new DefinedController(this, { relatedElements: [""] });
      this._manipulatingTabindex = false;
      this._tabIndex = 0;
    }
    /**
     * 元素在使用 Tab 键切换焦点时的顺序
     */
    get tabIndex() {
      const $this = $(this);
      if (this.focusElement === this) {
        return Number($this.attr("tabindex") || -1);
      }
      const tabIndexAttribute = Number($this.attr("tabindex") || 0);
      if (this.focusDisabled || tabIndexAttribute < 0) {
        return -1;
      }
      if (!this.focusElement) {
        return tabIndexAttribute;
      }
      return this.focusElement.tabIndex;
    }
    set tabIndex(tabIndex) {
      if (this._manipulatingTabindex) {
        this._manipulatingTabindex = false;
        return;
      }
      const $this = $(this);
      if (this.focusElement === this) {
        if (tabIndex !== null) {
          this._tabIndex = tabIndex;
        }
        $this.attr("tabindex", this.focusDisabled ? null : tabIndex);
        return;
      }
      const onPointerDown = () => {
        if (this.tabIndex === -1) {
          this.tabIndex = 0;
          this.focus({ preventScroll: true });
        }
      };
      if (tabIndex === -1) {
        this.addEventListener("pointerdown", onPointerDown);
      } else {
        this._manipulatingTabindex = true;
        this.removeEventListener("pointerdown", onPointerDown);
      }
      if (tabIndex === -1 || this.focusDisabled) {
        $this.attr("tabindex", -1);
        if (tabIndex !== -1) {
          this.manageFocusElementTabindex(tabIndex);
        }
        return;
      }
      if (!this.hasAttribute("tabindex")) {
        this._manipulatingTabindex = false;
      }
      this.manageFocusElementTabindex(tabIndex);
    }
    /**
     * 父类要实现该属性，表示是否禁用 focus 状态
     */
    get focusDisabled() {
      throw new Error("Must implement focusDisabled getter!");
    }
    /**
     * 最终获得焦点的元素
     */
    get focusElement() {
      throw new Error("Must implement focusElement getter!");
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateComplete.then(() => {
        requestAnimationFrame(() => {
          this.manageAutoFocus();
        });
      });
    }
    /**
     * 模拟鼠标点击元素
     */
    click() {
      if (this.focusDisabled) {
        return;
      }
      if (this.focusElement !== this) {
        this.focusElement.click();
      } else {
        HTMLElement.prototype.click.apply(this);
      }
    }
    /**
     * 将焦点设置到当前元素。
     *
     * 可以传入一个对象作为参数，该对象的属性包括：
     *
     * * `preventScroll`：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 `true`。
     */
    focus(options) {
      if (this.focusDisabled || !this.focusElement) {
        return;
      }
      if (this.focusElement !== this) {
        this.focusElement.focus(options);
      } else {
        HTMLElement.prototype.focus.apply(this, [options]);
      }
    }
    /**
     * 移除当前元素的焦点
     */
    blur() {
      if (this.focusElement !== this) {
        this.focusElement.blur();
      } else {
        HTMLElement.prototype.blur.apply(this);
      }
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      this.focusElement.addEventListener("focus", () => {
        this.focused = true;
        this.focusVisible = !isClick;
      });
      this.focusElement.addEventListener("blur", () => {
        this.focused = false;
        this.focusVisible = false;
      });
    }
    update(changedProperties) {
      if (this._lastFocusDisabled === void 0 || this._lastFocusDisabled !== this.focusDisabled) {
        this._lastFocusDisabled = this.focusDisabled;
        const $this = $(this);
        if (this.focusDisabled) {
          $this.removeAttr("tabindex");
        } else {
          if (this.focusElement === this) {
            this._manipulatingTabindex = true;
            $this.attr("tabindex", this._tabIndex);
          } else if (this.tabIndex > -1) {
            $this.removeAttr("tabindex");
          }
        }
      }
      super.update(changedProperties);
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (this.focused && this.focusDisabled) {
        this.blur();
      }
    }
    async manageFocusElementTabindex(tabIndex) {
      if (!this.focusElement) {
        await this.updateComplete;
      }
      if (tabIndex === null) {
        this.focusElement.removeAttribute("tabindex");
      } else {
        this.focusElement.tabIndex = tabIndex;
      }
    }
    manageAutoFocus() {
      if (this.autofocus) {
        this.dispatchEvent(new KeyboardEvent("keydown", {
          code: "Tab"
        }));
        this.focusElement.focus();
      }
    }
  }
  __decorate([
    n4({
      type: Boolean,
      /**
       * 哪些属性需要 reflect: true？
       * 一般所有属性都需要 reflect，但以下情况除外：
       * 1. 会频繁变更的属性
       * 2. 属性同步会造成较大性能开销的属性
       * 3. 复杂类型属性（数组、对象等，仅提供 property，不提供 attribute）
       */
      reflect: true,
      converter: booleanConverter
    })
  ], FocusableMixinClass.prototype, "autofocus", void 0);
  __decorate([
    n4({
      type: Boolean,
      reflect: true,
      converter: booleanConverter
    })
  ], FocusableMixinClass.prototype, "focused", void 0);
  __decorate([
    n4({
      type: Boolean,
      reflect: true,
      converter: booleanConverter,
      attribute: "focus-visible"
    })
  ], FocusableMixinClass.prototype, "focusVisible", void 0);
  __decorate([
    n4({ type: Number, attribute: "tabindex" })
  ], FocusableMixinClass.prototype, "tabIndex", null);
  return FocusableMixinClass;
};

// node_modules/lit-html/node/directives/class-map.js
var Rt = e3(class extends i2 {
  constructor(s2) {
    if (super(s2), s2.type !== t3.ATTRIBUTE || "class" !== s2.name || s2.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return " " + Object.keys(t5).filter((s2) => t5[s2]).join(" ") + " ";
  }
  update(t5, [s2]) {
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== t5.strings && (this.nt = new Set(t5.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
      for (const t6 in s2) s2[t6] && !this.nt?.has(t6) && this.st.add(t6);
      return this.render(s2);
    }
    const i4 = t5.element.classList;
    for (const t6 of this.st) t6 in s2 || (i4.remove(t6), this.st.delete(t6));
    for (const t6 in s2) {
      const r7 = !!s2[t6];
      r7 === this.st.has(t6) || this.nt?.has(t6) || (r7 ? (i4.add(t6), this.st.add(t6)) : (i4.remove(t6), this.st.delete(t6)));
    }
    return R;
  }
});

// node_modules/mdui/components/circular-progress/style.js
var style5 = i`:host{position:relative;display:inline-block;flex-shrink:0;width:2.5rem;height:2.5rem;stroke:rgb(var(--mdui-color-primary))}.progress{position:relative;display:inline-block;width:100%;height:100%;text-align:left;transition:opacity var(--mdui-motion-duration-medium1) var(--mdui-motion-easing-linear)}.determinate svg{transform:rotate(-90deg);fill:transparent}.determinate .track{stroke:transparent}.determinate .circle{stroke:inherit;transition:stroke-dashoffset var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard)}.indeterminate{font-size:0;letter-spacing:0;white-space:nowrap;animation:mdui-comp-circular-progress-rotate 1568ms var(--mdui-motion-easing-linear) infinite}.indeterminate .circle,.indeterminate .layer{position:absolute;width:100%;height:100%}.indeterminate .layer{animation:mdui-comp-circular-progress-layer-rotate 5332ms var(--mdui-motion-easing-standard) infinite both}.indeterminate .circle{fill:transparent;stroke:inherit}.indeterminate .gap-patch{position:absolute;top:0;left:47.5%;width:5%;height:100%;overflow:hidden}.indeterminate .gap-patch .circle{left:-900%;width:2000%;transform:rotate(180deg)}.indeterminate .clipper{position:relative;display:inline-block;width:50%;height:100%;overflow:hidden}.indeterminate .clipper .circle{width:200%}.indeterminate .clipper.left .circle{animation:mdui-comp-circular-progress-left-spin 1333ms var(--mdui-motion-easing-standard) infinite both}.indeterminate .clipper.right .circle{left:-100%;animation:mdui-comp-circular-progress-right-spin 1333ms var(--mdui-motion-easing-standard) infinite both}@keyframes mdui-comp-circular-progress-rotate{to{transform:rotate(360deg)}}@keyframes mdui-comp-circular-progress-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdui-comp-circular-progress-left-spin{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes mdui-comp-circular-progress-right-spin{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}100%{transform:rotate(-265deg)}}`;

// node_modules/mdui/components/circular-progress/index.js
var CircularProgress = class CircularProgress2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.max = 1;
  }
  render() {
    const isDeterminate = !isUndefined(this.value);
    return ke`<div class="progress ${Rt({
      determinate: isDeterminate,
      indeterminate: !isDeterminate
    })}">${isDeterminate ? this.renderDeterminate() : this.renderInDeterminate()}</div>`;
  }
  renderDeterminate() {
    const value = this.value;
    const strokeWidth = 4;
    const circleRadius = 18;
    const \u03C0 = 3.1415926;
    const center = circleRadius + strokeWidth / 2;
    const circumference = 2 * \u03C0 * circleRadius;
    const determinateStrokeDashOffset = (1 - value / Math.max(this.max ?? value, value)) * circumference;
    return ke`<svg viewBox="0 0 ${center * 2} ${center * 2}"><circle class="track" cx="${center}" cy="${center}" r="${circleRadius}" stroke-width="${strokeWidth}"></circle><circle class="circle" cx="${center}" cy="${center}" r="${circleRadius}" stroke-dasharray="${2 * \u03C0 * circleRadius}" stroke-dashoffset="${determinateStrokeDashOffset}" stroke-width="${strokeWidth}"></circle></svg>`;
  }
  renderInDeterminate() {
    const strokeWidth = 4;
    const circleRadius = 18;
    const \u03C0 = 3.1415926;
    const center = circleRadius + strokeWidth / 2;
    const circumference = 2 * \u03C0 * circleRadius;
    const halfCircumference = 0.5 * circumference;
    const circle = (thisStrokeWidth) => ke`<svg class="circle" viewBox="0 0 ${center * 2} ${center * 2}"><circle cx="${center}" cy="${center}" r="${circleRadius}" stroke-dasharray="${circumference}" stroke-dashoffset="${halfCircumference}" stroke-width="${thisStrokeWidth}"></circle></svg>`;
    return ke`<div class="layer"><div class="clipper left">${circle(strokeWidth)}</div><div class="gap-patch">${circle(strokeWidth * 0.8)}</div><div class="clipper right">${circle(strokeWidth)}</div></div>`;
  }
};
CircularProgress.styles = [componentStyle, style5];
__decorate([
  n4({ type: Number, reflect: true })
], CircularProgress.prototype, "max", void 0);
__decorate([
  n4({ type: Number })
], CircularProgress.prototype, "value", void 0);
CircularProgress = __decorate([
  t2("mdui-circular-progress")
], CircularProgress);

// node_modules/mdui/components/ripple/style.js
var style6 = i`:host{position:absolute;top:0;left:0;display:block;width:100%;height:100%;overflow:hidden;pointer-events:none}.surface{position:absolute;top:0;left:0;width:100%;height:100%;transition-duration:280ms;transition-property:background-color;pointer-events:none;transition-timing-function:var(--mdui-motion-easing-standard)}.hover{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-hover))}:host-context([focus-visible]) .focused{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-focus))}.dragged{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-dragged))}.wave{position:absolute;z-index:1;background-color:rgb(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)));border-radius:50%;transform:translate3d(0,0,0) scale(.4);opacity:0;animation:225ms ease 0s 1 normal forwards running mdui-comp-ripple-radius-in,75ms ease 0s 1 normal forwards running mdui-comp-ripple-opacity-in;pointer-events:none}.out{transform:translate3d(var(--mdui-comp-ripple-transition-x,0),var(--mdui-comp-ripple-transition-y,0),0) scale(1);animation:150ms ease 0s 1 normal none running mdui-comp-ripple-opacity-out}@keyframes mdui-comp-ripple-radius-in{from{transform:translate3d(0,0,0) scale(.4);animation-timing-function:var(--mdui-motion-easing-standard)}to{transform:translate3d(var(--mdui-comp-ripple-transition-x,0),var(--mdui-comp-ripple-transition-y,0),0) scale(1)}}@keyframes mdui-comp-ripple-opacity-in{from{opacity:0;animation-timing-function:linear}to{opacity:var(--mdui-state-layer-pressed)}}@keyframes mdui-comp-ripple-opacity-out{from{animation-timing-function:linear;opacity:var(--mdui-state-layer-pressed)}to{opacity:0}}`;

// node_modules/mdui/components/ripple/index.js
var Ripple = class Ripple2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.noRipple = false;
    this.hover = false;
    this.focused = false;
    this.dragged = false;
    this.surfaceRef = ii();
  }
  startPress(event) {
    if (this.noRipple) {
      return;
    }
    const $surface = $(this.surfaceRef.value);
    const surfaceHeight = $surface.innerHeight();
    const surfaceWidth = $surface.innerWidth();
    let touchStartX;
    let touchStartY;
    if (!event) {
      touchStartX = surfaceWidth / 2;
      touchStartY = surfaceHeight / 2;
    } else {
      const touchPosition = typeof TouchEvent !== "undefined" && event instanceof TouchEvent && event.touches.length ? event.touches[0] : event;
      const offset = $surface.offset();
      if (touchPosition.pageX < offset.left || touchPosition.pageX > offset.left + surfaceWidth || touchPosition.pageY < offset.top || touchPosition.pageY > offset.top + surfaceHeight) {
        return;
      }
      touchStartX = touchPosition.pageX - offset.left;
      touchStartY = touchPosition.pageY - offset.top;
    }
    const diameter = Math.max(Math.pow(Math.pow(surfaceHeight, 2) + Math.pow(surfaceWidth, 2), 0.5), 48);
    const translateX = `${-touchStartX + surfaceWidth / 2}px`;
    const translateY = `${-touchStartY + surfaceHeight / 2}px`;
    const translate = `translate3d(${translateX}, ${translateY}, 0) scale(1)`;
    $('<div class="wave"></div>').css({
      width: diameter,
      height: diameter,
      marginTop: -diameter / 2,
      marginLeft: -diameter / 2,
      left: touchStartX,
      top: touchStartY
    }).each((_2, wave) => {
      wave.style.setProperty("--mdui-comp-ripple-transition-x", translateX);
      wave.style.setProperty("--mdui-comp-ripple-transition-y", translateY);
    }).prependTo(this.surfaceRef.value).each((_2, wave) => wave.clientLeft).css("transform", translate).on("animationend", function(e5) {
      const event2 = e5;
      if (event2.animationName === "mdui-comp-ripple-radius-in") {
        $(this).data("filled", true);
      }
    });
  }
  endPress() {
    const $waves = $(this.surfaceRef.value).children().filter((_2, wave) => !$(wave).data("removing")).data("removing", true);
    const hideAndRemove = ($waves2) => {
      $waves2.addClass("out").each((_2, wave) => wave.clientLeft).on("animationend", function() {
        $(this).remove();
      });
    };
    $waves.filter((_2, wave) => !$(wave).data("filled")).on("animationend", function(e5) {
      const event = e5;
      if (event.animationName === "mdui-comp-ripple-radius-in") {
        hideAndRemove($(this));
      }
    });
    hideAndRemove($waves.filter((_2, wave) => !!$(wave).data("filled")));
  }
  startHover() {
    this.hover = true;
  }
  endHover() {
    this.hover = false;
  }
  startFocus() {
    this.focused = true;
  }
  endFocus() {
    this.focused = false;
  }
  startDrag() {
    this.dragged = true;
  }
  endDrag() {
    this.dragged = false;
  }
  render() {
    return ke`<div ${Kt(this.surfaceRef)} class="surface ${Rt({
      hover: this.hover,
      focused: this.focused,
      dragged: this.dragged
    })}"></div>`;
  }
};
Ripple.styles = [componentStyle, style6];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "no-ripple"
  })
], Ripple.prototype, "noRipple", void 0);
__decorate([
  r4()
], Ripple.prototype, "hover", void 0);
__decorate([
  r4()
], Ripple.prototype, "focused", void 0);
__decorate([
  r4()
], Ripple.prototype, "dragged", void 0);
Ripple = __decorate([
  t2("mdui-ripple")
], Ripple);

// node_modules/mdui/components/ripple/ripple-mixin.js
var RippleMixin = (superclass) => {
  class Mixin extends superclass {
    constructor() {
      super(...arguments);
      this.noRipple = false;
      this.rippleIndex = void 0;
      this.getRippleIndex = () => this.rippleIndex;
    }
    /**
     * 子类要添加该属性，指向 <mdui-ripple> 元素
     * 如果一个组件中包含多个 <mdui-ripple> 元素，则这里可以是一个数组或 NodeList
     */
    get rippleElement() {
      throw new Error("Must implement rippleElement getter!");
    }
    /**
     * 子类要实现该属性，表示是否禁用 ripple
     * 如果一个组件中包含多个 <mdui-ripple> 元素，则这里可以是一个数组；也可以是单个值，同时控制多个 <mdui-ripple> 元素
     */
    get rippleDisabled() {
      throw new Error("Must implement rippleDisabled getter!");
    }
    /**
     * 当前 <mdui-ripple> 元素相对于哪个元素存在，即 hover、pressed、dragged 属性要添加到哪个元素上，默认为 :host
     * 如果需要修改该属性，则子类可以实现该属性
     * 如果一个组件中包含多个 <mdui-ripple> 元素，则这里可以是一个数组；也可以是单个值，同时控制多个 <mdui-ripple> 元素
     */
    get rippleTarget() {
      return this;
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      const $rippleTarget = $(this.rippleTarget);
      const setRippleIndex = (event) => {
        if (isArrayLike(this.rippleTarget)) {
          this.rippleIndex = $rippleTarget.index(event.target);
        }
      };
      const rippleTargetArr = isArrayLike(this.rippleTarget) ? this.rippleTarget : [this.rippleTarget];
      rippleTargetArr.forEach((rippleTarget) => {
        rippleTarget.addEventListener("pointerdown", (event) => {
          setRippleIndex(event);
          this.startPress(event);
        });
        rippleTarget.addEventListener("pointerenter", (event) => {
          setRippleIndex(event);
          this.startHover(event);
        });
        rippleTarget.addEventListener("pointerleave", (event) => {
          setRippleIndex(event);
          this.endHover(event);
        });
        rippleTarget.addEventListener("focus", (event) => {
          setRippleIndex(event);
          this.startFocus();
        });
        rippleTarget.addEventListener("blur", (event) => {
          setRippleIndex(event);
          this.endFocus();
        });
      });
    }
    /**
     * 若存在多个 <mdui-ripple>，但 rippleTarget 为同一个，则 hover 状态无法在多个 <mdui-ripple> 之间切换
     * 所以把 startHover 和 endHover 设置为 protected，供子类调用
     * 子类中，在 getRippleIndex() 的返回值变更前调用 endHover(event)，变更后调用 startHover(event)
     */
    startHover(event) {
      if (event.pointerType !== "mouse" || this.isRippleDisabled()) {
        return;
      }
      this.getRippleTarget().setAttribute("hover", "");
      this.getRippleElement().startHover();
    }
    endHover(event) {
      if (event.pointerType !== "mouse" || this.isRippleDisabled()) {
        return;
      }
      this.getRippleTarget().removeAttribute("hover");
      this.getRippleElement().endHover();
    }
    /**
     * 当前激活的 <mdui-ripple> 元素是否被禁用
     */
    isRippleDisabled() {
      const disabled = this.rippleDisabled;
      if (!Array.isArray(disabled)) {
        return disabled;
      }
      const rippleIndex = this.getRippleIndex();
      if (rippleIndex !== void 0) {
        return disabled[rippleIndex];
      }
      return disabled.length ? disabled[0] : false;
    }
    /**
     * 获取当前激活的 <mdui-ripple> 元素实例
     */
    getRippleElement() {
      const ripple = this.rippleElement;
      if (!isArrayLike(ripple)) {
        return ripple;
      }
      const rippleIndex = this.getRippleIndex();
      if (rippleIndex !== void 0) {
        return ripple[rippleIndex];
      }
      return ripple[0];
    }
    /**
     * 获取当前激活的 <mdui-ripple> 元素相对于哪个元素存在
     */
    getRippleTarget() {
      const target = this.rippleTarget;
      if (!isArrayLike(target)) {
        return target;
      }
      const rippleIndex = this.getRippleIndex();
      if (rippleIndex !== void 0) {
        return target[rippleIndex];
      }
      return target[0];
    }
    startFocus() {
      if (this.isRippleDisabled()) {
        return;
      }
      this.getRippleElement().startFocus();
    }
    endFocus() {
      if (this.isRippleDisabled()) {
        return;
      }
      this.getRippleElement().endFocus();
    }
    startPress(event) {
      if (this.isRippleDisabled() || event.button) {
        return;
      }
      const target = this.getRippleTarget();
      target.setAttribute("pressed", "");
      if (["touch", "pen"].includes(event.pointerType)) {
        let hidden = false;
        let timer = setTimeout(() => {
          timer = 0;
          this.getRippleElement().startPress(event);
        }, 70);
        const hideRipple = () => {
          if (timer) {
            clearTimeout(timer);
            timer = 0;
            this.getRippleElement().startPress(event);
          }
          if (!hidden) {
            hidden = true;
            this.endPress();
          }
          target.removeEventListener("pointerup", hideRipple);
          target.removeEventListener("pointercancel", hideRipple);
        };
        const touchMove = () => {
          if (timer) {
            clearTimeout(timer);
            timer = 0;
          }
          target.removeEventListener("touchmove", touchMove);
        };
        target.addEventListener("touchmove", touchMove);
        target.addEventListener("pointerup", hideRipple);
        target.addEventListener("pointercancel", hideRipple);
      }
      if (event.pointerType === "mouse" && event.button === 0) {
        const hideRipple = () => {
          this.endPress();
          target.removeEventListener("pointerup", hideRipple);
          target.removeEventListener("pointercancel", hideRipple);
          target.removeEventListener("pointerleave", hideRipple);
        };
        this.getRippleElement().startPress(event);
        target.addEventListener("pointerup", hideRipple);
        target.addEventListener("pointercancel", hideRipple);
        target.addEventListener("pointerleave", hideRipple);
      }
    }
    endPress() {
      if (this.isRippleDisabled()) {
        return;
      }
      this.getRippleTarget().removeAttribute("pressed");
      this.getRippleElement().endPress();
    }
    startDrag() {
      if (this.isRippleDisabled()) {
        return;
      }
      this.getRippleElement().startDrag();
    }
    endDrag() {
      if (this.isRippleDisabled()) {
        return;
      }
      this.getRippleElement().endDrag();
    }
  }
  __decorate([
    n4({
      type: Boolean,
      reflect: true,
      converter: booleanConverter,
      attribute: "no-ripple"
    })
  ], Mixin.prototype, "noRipple", void 0);
  return Mixin;
};

// node_modules/mdui/components/button/button-base-style.js
var buttonBaseStyle = i`.button{position:relative;display:inline-flex;align-items:center;justify-content:center;height:100%;padding:0;overflow:hidden;color:inherit;font-size:inherit;font-family:inherit;font-weight:inherit;letter-spacing:inherit;white-space:nowrap;text-align:center;text-decoration:none;vertical-align:middle;background:0 0;border:none;outline:0;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}`;

// node_modules/mdui/components/button/button-base.js
var ButtonBase = class extends AnchorMixin(RippleMixin(FocusableMixin(MduiElement))) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.loading = false;
    this.name = "";
    this.value = "";
    this.type = "button";
    this.formNoValidate = false;
    this.formController = new FormController(this);
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    if (this.isButton()) {
      return this.focusElement.validity;
    }
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    if (this.isButton()) {
      return this.focusElement.validationMessage;
    }
  }
  get rippleDisabled() {
    return this.disabled || this.loading;
  }
  get focusElement() {
    return this.isButton() ? this.renderRoot?.querySelector("._button") : !this.focusDisabled ? this.renderRoot?.querySelector("._a") : this;
  }
  get focusDisabled() {
    return this.disabled || this.loading;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    if (this.isButton()) {
      const valid = this.focusElement.checkValidity();
      if (!valid) {
        this.emit("invalid", {
          bubbles: false,
          cancelable: true,
          composed: false
        });
      }
      return valid;
    }
    return true;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    if (this.isButton()) {
      const invalid = !this.focusElement.reportValidity();
      if (invalid) {
        this.emit("invalid", {
          bubbles: false,
          cancelable: true,
          composed: false
        });
      }
      return !invalid;
    }
    return true;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    if (this.isButton()) {
      this.focusElement.setCustomValidity(message);
    }
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.addEventListener("click", () => {
      if (this.type === "submit") {
        this.formController.submit(this);
      }
      if (this.type === "reset") {
        this.formController.reset(this);
      }
    });
  }
  renderLoading() {
    return this.loading ? ke`<mdui-circular-progress part="loading"></mdui-circular-progress>` : nothingTemplate;
  }
  renderButton({ id: id2, className: className2, part, content = ke`<slot></slot>` }) {
    return ke`<button id="${to(id2)}" class="${cc(["_button", className2])}" part="${to(part)}" ?disabled="${this.rippleDisabled || this.focusDisabled}">${content}</button>`;
  }
  isButton() {
    return !this.href;
  }
};
ButtonBase.styles = [
  componentStyle,
  buttonBaseStyle
];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ButtonBase.prototype, "loading", void 0);
__decorate([
  n4({ reflect: true })
], ButtonBase.prototype, "name", void 0);
__decorate([
  n4({ reflect: true })
], ButtonBase.prototype, "value", void 0);
__decorate([
  n4({ reflect: true })
], ButtonBase.prototype, "type", void 0);
__decorate([
  n4({ reflect: true })
], ButtonBase.prototype, "form", void 0);
__decorate([
  n4({ reflect: true, attribute: "formaction" })
], ButtonBase.prototype, "formAction", void 0);
__decorate([
  n4({ reflect: true, attribute: "formenctype" })
], ButtonBase.prototype, "formEnctype", void 0);
__decorate([
  n4({ reflect: true, attribute: "formmethod" })
], ButtonBase.prototype, "formMethod", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "formnovalidate"
  })
], ButtonBase.prototype, "formNoValidate", void 0);
__decorate([
  n4({ reflect: true, attribute: "formtarget" })
], ButtonBase.prototype, "formTarget", void 0);

// node_modules/mdui/components/button/style.js
var style7 = i`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;text-align:center;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);min-width:3rem;height:2.5rem;color:rgb(var(--mdui-color-primary));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.button{width:100%;padding:0 1rem}:host([full-width]){display:block}:host([variant=elevated]){box-shadow:var(--mdui-elevation-level1);background-color:rgb(var(--mdui-color-surface-container-low));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=filled]){color:rgb(var(--mdui-color-on-primary));background-color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-primary)}:host([variant=tonal]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=outlined]){border:.0625rem solid rgb(var(--mdui-color-outline));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=text]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=outlined][focus-visible]){border-color:rgb(var(--mdui-color-primary))}:host([variant=elevated][hover]){box-shadow:var(--mdui-elevation-level2)}:host([variant=filled][hover]),:host([variant=tonal][hover]){box-shadow:var(--mdui-elevation-level1)}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),38%);box-shadow:var(--mdui-elevation-level0)}:host([variant=elevated][disabled]),:host([variant=filled][disabled]),:host([variant=tonal][disabled]){background-color:rgba(var(--mdui-color-on-surface),12%)}:host([variant=outlined][disabled]){border-color:rgba(var(--mdui-color-on-surface),12%)}.label{display:inline-flex;padding-right:.5rem;padding-left:.5rem}.end-icon,.icon{display:inline-flex;font-size:1.28571429em}.end-icon mdui-icon,.icon mdui-icon,::slotted([slot=end-icon]),::slotted([slot=icon]){font-size:inherit}mdui-circular-progress{display:inline-flex;width:1.125rem;height:1.125rem}:host([variant=filled]) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-primary))}:host([variant=tonal]) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-secondary-container))}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;

// node_modules/mdui/components/button/index.js
var Button = class Button2 extends ButtonBase {
  constructor() {
    super(...arguments);
    this.variant = "filled";
    this.fullWidth = false;
    this.rippleRef = ii();
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  render() {
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
      className: "button",
      part: "button",
      content: this.renderInner()
    }) : this.disabled || this.loading ? ke`<span part="button" class="button _a">${this.renderInner()}</span>` : this.renderAnchor({
      className: "button",
      part: "button",
      content: this.renderInner()
    })}`;
  }
  renderIcon() {
    if (this.loading) {
      return this.renderLoading();
    }
    return ke`<slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderLabel() {
    return ke`<slot part="label" class="label"></slot>`;
  }
  renderEndIcon() {
    return ke`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ke`<mdui-icon name="${this.endIcon}"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderInner() {
    return [this.renderIcon(), this.renderLabel(), this.renderEndIcon()];
  }
};
Button.styles = [ButtonBase.styles, style7];
__decorate([
  n4({ reflect: true })
], Button.prototype, "variant", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "full-width"
  })
], Button.prototype, "fullWidth", void 0);
__decorate([
  n4({ reflect: true })
], Button.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], Button.prototype, "endIcon", void 0);
Button = __decorate([
  t2("mdui-button")
], Button);

// node_modules/mdui/components/button-icon/style.js
var style8 = i`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;text-align:center;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;font-size:1.5rem;width:2.5rem;height:2.5rem}:host([variant=standard]){color:rgb(var(--mdui-color-on-surface-variant));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=filled]){color:rgb(var(--mdui-color-primary));background-color:rgb(var(--mdui-color-surface-container-highest));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=tonal]){color:rgb(var(--mdui-color-on-surface-variant));background-color:rgb(var(--mdui-color-surface-container-highest));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=outlined]){border:.0625rem solid rgb(var(--mdui-color-outline));color:rgb(var(--mdui-color-on-surface-variant));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=outlined][pressed]){color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([variant=standard][selected]){color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=filled]:not([selectable])),:host([variant=filled][selected]){color:rgb(var(--mdui-color-on-primary));background-color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-primary)}:host([variant=tonal]:not([selectable])),:host([variant=tonal][selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=outlined][selected]){border:none;color:rgb(var(--mdui-color-inverse-on-surface));background-color:rgb(var(--mdui-color-inverse-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}:host([variant=filled][disabled]),:host([variant=outlined][disabled]),:host([variant=tonal][disabled]){background-color:rgba(var(--mdui-color-on-surface),.12);border-color:rgba(var(--mdui-color-on-surface),.12)}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),.38)!important}:host([loading]) .button,:host([loading]) mdui-ripple{opacity:0}.button{float:left;width:100%}.icon,.selected-icon mdui-icon,::slotted(*){font-size:inherit}mdui-circular-progress{display:flex;position:absolute;top:calc(50% - 1.5rem / 2);left:calc(50% - 1.5rem / 2);width:1.5rem;height:1.5rem}:host([variant=filled]:not([disabled])) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-primary))}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;

// node_modules/mdui/components/button-icon/index.js
var ButtonIcon = class ButtonIcon2 extends ButtonBase {
  constructor() {
    super(...arguments);
    this.variant = "standard";
    this.selectable = false;
    this.selected = false;
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "[default]", "selected-icon");
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  onSelectedChange() {
    this.emit("change");
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.addEventListener("click", () => {
      if (!this.selectable || this.disabled) {
        return;
      }
      this.selected = !this.selected;
    });
  }
  render() {
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
      className: "button",
      part: "button",
      content: this.renderIcon()
    }) : this.disabled || this.loading ? ke`<span part="button" class="button _a">${this.renderIcon()}</span>` : this.renderAnchor({
      className: "button",
      part: "button",
      content: this.renderIcon()
    })} ${this.renderLoading()}`;
  }
  renderIcon() {
    const icon = () => this.hasSlotController.test("[default]") ? ke`<slot></slot>` : this.icon ? ke`<mdui-icon part="icon" class="icon" name="${this.icon}"></mdui-icon>` : nothingTemplate;
    const selectedIcon = () => this.hasSlotController.test("selected-icon") || this.selectedIcon ? ke`<slot name="selected-icon" part="selected-icon" class="selected-icon"><mdui-icon name="${this.selectedIcon}"></mdui-icon></slot>` : icon();
    return this.selected ? selectedIcon() : icon();
  }
};
ButtonIcon.styles = [ButtonBase.styles, style8];
__decorate([
  n4({ reflect: true })
], ButtonIcon.prototype, "variant", void 0);
__decorate([
  n4({ reflect: true })
], ButtonIcon.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "selected-icon" })
], ButtonIcon.prototype, "selectedIcon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ButtonIcon.prototype, "selectable", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ButtonIcon.prototype, "selected", void 0);
__decorate([
  watch("selected", true)
], ButtonIcon.prototype, "onSelectedChange", null);
ButtonIcon = __decorate([
  t2("mdui-button-icon")
], ButtonIcon);

// node_modules/mdui/components/card/style.js
var style9 = i`:host{--shape-corner:var(--mdui-shape-corner-medium);position:relative;display:inline-block;overflow:hidden;border-radius:var(--shape-corner);-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([clickable]){cursor:pointer}:host([variant=elevated]){background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([variant=filled]){background-color:rgb(var(--mdui-color-surface-container-highest))}:host([variant=outlined]){background-color:rgb(var(--mdui-color-surface));border:.0625rem solid rgb(var(--mdui-color-outline))}:host([variant=elevated][hover]){box-shadow:var(--mdui-elevation-level2)}:host([variant=filled][hover]),:host([variant=outlined][hover]){box-shadow:var(--mdui-elevation-level1)}:host([variant=elevated][dragged]),:host([variant=filled][dragged]),:host([variant=outlined][dragged]){box-shadow:var(--mdui-elevation-level3)}:host([disabled]){opacity:.38;cursor:default;-webkit-user-select:none;user-select:none}:host([variant=elevated][disabled]){background-color:rgb(var(--mdui-color-surface-variant));box-shadow:var(--mdui-elevation-level0)}:host([variant=filled][disabled]){background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level1)}:host([variant=outlined][disabled]){box-shadow:var(--mdui-elevation-level0);border-color:rgba(var(--mdui-color-outline),.32)}.link{position:relative;display:inline-block;width:100%;height:100%;color:inherit;font-size:inherit;letter-spacing:inherit;text-decoration:none;touch-action:manipulation;-webkit-user-drag:none}`;

// node_modules/mdui/components/card/index.js
var Card = class Card2 extends AnchorMixin(RippleMixin(FocusableMixin(MduiElement))) {
  constructor() {
    super(...arguments);
    this.variant = "elevated";
    this.clickable = false;
    this.disabled = false;
    this.rippleRef = ii();
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.disabled || !this.href && !this.clickable;
  }
  get focusElement() {
    return this.href && !this.disabled ? this.renderRoot.querySelector("._a") : this;
  }
  get focusDisabled() {
    return this.rippleDisabled;
  }
  render() {
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.href && !this.disabled ? this.renderAnchor({
      className: "link",
      content: ke`<slot></slot>`
    }) : ke`<slot></slot>`}`;
  }
};
Card.styles = [componentStyle, style9];
__decorate([
  n4({ reflect: true })
], Card.prototype, "variant", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Card.prototype, "clickable", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Card.prototype, "disabled", void 0);
Card = __decorate([
  t2("mdui-card")
], Card);

// node_modules/lit-html/node/directives/live.js
var Ft = e3(class extends i2 {
  constructor(r7) {
    if (super(r7), r7.type !== t3.PROPERTY && r7.type !== t3.ATTRIBUTE && r7.type !== t3.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!rt(r7)) throw Error("`live` bindings can only contain a single expression");
  }
  render(r7) {
    return r7;
  }
  update(r7, [e5]) {
    if (e5 === R || e5 === D) return e5;
    const i4 = r7.element, n6 = r7.name;
    if (r7.type === t3.PROPERTY) {
      if (e5 === i4[n6]) return R;
    } else if (r7.type === t3.BOOLEAN_ATTRIBUTE) {
      if (!!e5 === i4.hasAttribute(n6)) return R;
    } else if (r7.type === t3.ATTRIBUTE && i4.getAttribute(n6) === e5 + "") return R;
    return dt(r7), e5;
  }
});

// node_modules/@mdui/shared/decorators/default-value.js
function defaultValue(propertyName = "value") {
  return (proto, key) => {
    const constructor = proto.constructor;
    const attributeChangedCallback = constructor.prototype.attributeChangedCallback;
    constructor.prototype.attributeChangedCallback = function(name, old, value) {
      const options = constructor.getPropertyOptions(propertyName);
      const attributeName = isString(options.attribute) ? options.attribute : propertyName;
      if (name === attributeName) {
        const converter = options.converter || b;
        const fromAttribute = isFunction(converter) ? converter : converter?.fromAttribute ?? b.fromAttribute;
        const newValue = fromAttribute(value, options.type);
        if (this[propertyName] !== newValue) {
          this[key] = newValue;
        }
      }
      attributeChangedCallback.call(this, name, old, value);
    };
  };
}

// node_modules/@mdui/shared/icons/shared/style.js
var style10 = i`:host{display:inline-block;width:1em;height:1em;line-height:1;font-size:1.5rem}`;

// node_modules/@mdui/shared/icons/shared/svg-tag.js
var svgTag = (svgPaths) => ke`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">${fe(svgPaths)}</svg>`;

// node_modules/@mdui/shared/icons/check-box-outline-blank.js
var IconCheckBoxOutlineBlank = class IconCheckBoxOutlineBlank2 extends h3 {
  render() {
    return svgTag('<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
  }
};
IconCheckBoxOutlineBlank.styles = style10;
IconCheckBoxOutlineBlank = __decorate([
  t2("mdui-icon-check-box-outline-blank")
], IconCheckBoxOutlineBlank);

// node_modules/@mdui/shared/icons/check-box.js
var IconCheckBox = class IconCheckBox2 extends h3 {
  render() {
    return svgTag('<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>');
  }
};
IconCheckBox.styles = style10;
IconCheckBox = __decorate([
  t2("mdui-icon-check-box")
], IconCheckBox);

// node_modules/@mdui/shared/icons/indeterminate-check-box.js
var IconIndeterminateCheckBox = class IconIndeterminateCheckBox2 extends h3 {
  render() {
    return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>');
  }
};
IconIndeterminateCheckBox.styles = style10;
IconIndeterminateCheckBox = __decorate([
  t2("mdui-icon-indeterminate-check-box")
], IconIndeterminateCheckBox);

// node_modules/mdui/components/checkbox/style.js
var style11 = i`:host{position:relative;display:inline-flex;cursor:pointer;-webkit-tap-highlight-color:transparent;border-radius:.125rem;font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}label{display:inline-flex;align-items:center;width:100%;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.125rem;height:1.125rem;margin:0 0 0 .6875rem}.icon{display:flex;position:absolute;opacity:1;transform:scale(1);color:rgb(var(--mdui-color-on-surface));font-size:1.5rem;transition:color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.checked-icon,.indeterminate-icon{opacity:0;transform:scale(.5);transition-property:color,opacity,transform;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard)}.icon .i,::slotted([slot=checked-icon]),::slotted([slot=indeterminate-icon]),::slotted([slot=unchecked-icon]){color:inherit;font-size:inherit}i{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;border-radius:50%;width:2.5rem;height:2.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.label{display:flex;width:100%;padding-top:.625rem;padding-bottom:.625rem;color:rgb(var(--mdui-color-on-surface));transition:color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}:host([checked]) i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]) .icon{color:rgb(var(--mdui-color-primary))}:host([checked]) .indeterminate-icon{opacity:0;transform:scale(.5)}:host([checked]) .checked-icon{opacity:1;transform:scale(1)}:host([indeterminate]) i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([indeterminate]) .icon{color:rgb(var(--mdui-color-primary))}:host([indeterminate]) .checked-icon{opacity:0;transform:scale(.5)}:host([indeterminate]) .indeterminate-icon{opacity:1;transform:scale(1)}.invalid i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}.invalid .icon{color:rgb(var(--mdui-color-error))}.invalid .label{color:rgb(var(--mdui-color-error))}:host([disabled]){cursor:default;pointer-events:none}:host([disabled]) .icon{color:rgba(var(--mdui-color-on-surface),38%)}:host([disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}:host([disabled][checked]) .unchecked-icon,:host([disabled][indeterminate]) .unchecked-icon{opacity:0}`;

// node_modules/mdui/components/checkbox/index.js
var Checkbox = class Checkbox2 extends RippleMixin(FocusableMixin(MduiElement)) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.indeterminate = false;
    this.required = false;
    this.name = "";
    this.value = "on";
    this.invalid = false;
    this.inputRef = ii();
    this.rippleRef = ii();
    this.formController = new FormController(this, {
      value: (control) => control.checked ? control.value : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.inputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.inputRef.value.validationMessage;
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.disabled;
  }
  get focusElement() {
    return this.inputRef.value;
  }
  get focusDisabled() {
    return this.disabled;
  }
  async onDisabledChange() {
    await this.updateComplete;
    this.invalid = !this.inputRef.value.checkValidity();
  }
  async onCheckedChange() {
    await this.updateComplete;
    const form = this.formController.getForm();
    if (form && formResets.get(form)?.has(this)) {
      this.invalid = false;
      formResets.get(form).delete(this);
    } else {
      this.invalid = !this.inputRef.value.checkValidity();
    }
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.inputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.inputRef.value.reportValidity();
    if (this.invalid) {
      const eventProceeded = this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      if (!eventProceeded) {
        this.blur();
        this.focus();
      }
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.inputRef.value.setCustomValidity(message);
    this.invalid = !this.inputRef.value.checkValidity();
  }
  render() {
    return ke`<label class="${Rt({ invalid: this.invalid })}"><input ${Kt(this.inputRef)} type="checkbox" name="${to(this.name)}" value="${to(this.value)}" .indeterminate="${Ft(this.indeterminate)}" .disabled="${this.disabled}" .checked="${Ft(this.checked)}" .required="${this.required}" @change="${this.onChange}"> <i part="control"><mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><slot name="unchecked-icon" part="unchecked-icon" class="icon unchecked-icon">${this.uncheckedIcon ? ke`<mdui-icon name="${this.uncheckedIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-check-box-outline-blank class="i"></mdui-icon-check-box-outline-blank>`}</slot><slot name="checked-icon" part="checked-icon" class="icon checked-icon">${this.checkedIcon ? ke`<mdui-icon name="${this.checkedIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-check-box class="i"></mdui-icon-check-box>`}</slot><slot name="indeterminate-icon" part="indeterminate-icon" class="icon indeterminate-icon">${this.indeterminateIcon ? ke`<mdui-icon name="${this.indeterminateIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-indeterminate-check-box class="i"></mdui-icon-indeterminate-check-box>`}</slot></i><slot part="label" class="label"></slot></label>`;
  }
  /**
   * input[type="checkbox"] 的 change 事件无法冒泡越过 shadow dom
   */
  onChange() {
    this.checked = this.inputRef.value.checked;
    this.indeterminate = false;
    this.emit("change");
  }
};
Checkbox.styles = [componentStyle, style11];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Checkbox.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Checkbox.prototype, "checked", void 0);
__decorate([
  defaultValue("checked")
], Checkbox.prototype, "defaultChecked", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Checkbox.prototype, "required", void 0);
__decorate([
  n4({ reflect: true })
], Checkbox.prototype, "form", void 0);
__decorate([
  n4({ reflect: true })
], Checkbox.prototype, "name", void 0);
__decorate([
  n4({ reflect: true })
], Checkbox.prototype, "value", void 0);
__decorate([
  n4({ reflect: true, attribute: "unchecked-icon" })
], Checkbox.prototype, "uncheckedIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "checked-icon" })
], Checkbox.prototype, "checkedIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "indeterminate-icon" })
], Checkbox.prototype, "indeterminateIcon", void 0);
__decorate([
  r4()
], Checkbox.prototype, "invalid", void 0);
__decorate([
  watch("disabled", true),
  watch("indeterminate", true),
  watch("required", true)
], Checkbox.prototype, "onDisabledChange", null);
__decorate([
  watch("checked", true)
], Checkbox.prototype, "onCheckedChange", null);
Checkbox = __decorate([
  t2("mdui-checkbox")
], Checkbox);

// node_modules/@mdui/shared/icons/check.js
var IconCheck = class IconCheck2 extends h3 {
  render() {
    return svgTag('<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>');
  }
};
IconCheck.styles = style10;
IconCheck = __decorate([
  t2("mdui-icon-check")
], IconCheck);

// node_modules/@mdui/shared/icons/clear.js
var IconClear = class IconClear2 extends h3 {
  render() {
    return svgTag('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>');
  }
};
IconClear.styles = style10;
IconClear = __decorate([
  t2("mdui-icon-clear")
], IconClear);

// node_modules/mdui/components/chip/style.js
var style12 = i`:host{--shape-corner:var(--mdui-shape-corner-small);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);height:2rem;background-color:rgb(var(--mdui-color-surface));border:.0625rem solid rgb(var(--mdui-color-outline));color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.button{padding-right:.4375rem;padding-left:.4375rem}:host([variant=input]) .button{padding-right:.1875rem;padding-left:.1875rem}:host([selected]) .button{padding-right:.5rem;padding-left:.5rem}:host([selected][variant=input]) .button{padding-right:.25rem;padding-left:.25rem}:host([elevated]) .button{padding-right:.5rem;padding-left:.5rem}:host([variant=assist]){color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([elevated]){border-width:0;background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));border-width:0;--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){border-color:rgba(var(--mdui-color-on-surface),12%);color:rgba(var(--mdui-color-on-surface),38%);box-shadow:var(--mdui-elevation-level0)}:host([disabled][elevated]),:host([disabled][selected]){background-color:rgba(var(--mdui-color-on-surface),12%)}:host([selected][hover]){box-shadow:var(--mdui-elevation-level1)}:host([elevated][hover]){color:rgb(var(--mdui-color-on-secondary-container));box-shadow:var(--mdui-elevation-level2)}:host([variant=filter][hover]),:host([variant=input][hover]),:host([variant=suggestion][hover]){color:rgb(var(--mdui-color-on-surface-variant))}:host([variant=filter][focus-visible]),:host([variant=input][focus-visible]),:host([variant=suggestion][focus-visible]){border-color:rgb(var(--mdui-color-on-surface-variant))}:host([dragged]),:host([dragged][hover]){box-shadow:var(--mdui-elevation-level4)}.button{overflow:visible}.label{display:inline-flex;padding-right:.5rem;padding-left:.5rem}.end-icon,.icon,.selected-icon{display:inline-flex;font-size:1.28571429em;color:rgb(var(--mdui-color-on-surface-variant))}:host([variant=assist]) .end-icon,:host([variant=assist]) .icon,:host([variant=assist]) .selected-icon{color:rgb(var(--mdui-color-primary))}:host([selected]) .end-icon,:host([selected]) .icon,:host([selected]) .selected-icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([disabled]) .end-icon,:host([disabled]) .icon,:host([disabled]) .selected-icon{opacity:.38;color:rgb(var(--mdui-color-on-surface))}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}:host([variant=input]) .has-icon .icon,:host([variant=input]) .has-icon .selected-icon,:host([variant=input]) .has-icon mdui-circular-progress{margin-left:.25rem}:host([variant=input]) .has-end-icon .end-icon{margin-right:.25rem}mdui-circular-progress{display:inline-flex;width:1.125rem;height:1.125rem}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}::slotted(mdui-avatar[slot=end-icon]),::slotted(mdui-avatar[slot=icon]),::slotted(mdui-avatar[slot=selected-icon]){width:1.5rem;height:1.5rem}:host([disabled]) ::slotted(mdui-avatar[slot=end-icon]),:host([disabled]) ::slotted(mdui-avatar[slot=icon]),:host([disabled]) ::slotted(mdui-avatar[slot=selected-icon]){opacity:.38}::slotted(mdui-avatar[slot=icon]),::slotted(mdui-avatar[slot=selected-icon]){margin-left:-.25rem;margin-right:-.125rem}::slotted(mdui-avatar[slot=end-icon]){margin-right:-.25rem;margin-left:-.125rem}.delete-icon{display:inline-flex;font-size:1.28571429em;transition:background-color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);border-radius:var(--mdui-shape-corner-full);margin-right:-.25rem;margin-left:-.25rem;padding:.25rem;color:rgb(var(--mdui-color-on-surface-variant))}.delete-icon:hover{background-color:rgba(var(--mdui-color-on-surface-variant),12%)}.has-end-icon .delete-icon{margin-left:.25rem}:host([variant=assiat]) .delete-icon{color:rgb(var(--mdui-color-primary))}:host([variant=input]) .delete-icon{margin-right:.0625rem}:host([disabled]) .delete-icon{color:rgba(var(--mdui-color-on-surface),38%)}.delete-icon .i,::slotted([slot=delete-icon]){font-size:inherit}::slotted(mdui-avatar[slot=delete-icon]){width:1.125rem;height:1.125rem}`;

// node_modules/mdui/components/chip/index.js
var Chip = class Chip2 extends ButtonBase {
  constructor() {
    super();
    this.variant = "assist";
    this.elevated = false;
    this.selectable = false;
    this.selected = false;
    this.deletable = false;
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "icon", "selected-icon", "end-icon");
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  onSelectedChange() {
    this.emit("change");
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.addEventListener("click", this.onClick);
    this.addEventListener("keydown", this.onKeyDown);
  }
  render() {
    const hasIcon = this.icon || this.hasSlotController.test("icon");
    const hasEndIcon = this.endIcon || this.hasSlotController.test("end-icon");
    const hasSelectedIcon = this.selectedIcon || ["assist", "filter"].includes(this.variant) || hasIcon || this.hasSlotController.test("selected-icon");
    const className2 = cc({
      button: true,
      "has-icon": this.loading || !this.selected && hasIcon || this.selected && hasSelectedIcon,
      "has-end-icon": hasEndIcon
    });
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
      className: className2,
      part: "button",
      content: this.renderInner()
    }) : this.disabled || this.loading ? ke`<span part="button" class="${className2} _a">${this.renderInner()}</span>` : this.renderAnchor({
      className: className2,
      part: "button",
      content: this.renderInner()
    })}`;
  }
  onClick() {
    if (this.disabled || this.loading) {
      return;
    }
    if (this.selectable) {
      this.selected = !this.selected;
    }
  }
  onKeyDown(event) {
    if (this.disabled || this.loading) {
      return;
    }
    if (this.selectable && event.key === " ") {
      event.preventDefault();
      this.selected = !this.selected;
    }
    if (this.deletable && ["Delete", "Backspace"].includes(event.key)) {
      this.emit("delete");
    }
  }
  /**
   * 点击删除按钮
   */
  onDelete(event) {
    event.stopPropagation();
    this.emit("delete");
  }
  renderIcon() {
    if (this.loading) {
      return this.renderLoading();
    }
    const icon = () => {
      return this.icon ? ke`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : nothingTemplate;
    };
    const selectedIcon = () => {
      if (this.selectedIcon) {
        return ke`<mdui-icon name="${this.selectedIcon}" class="i"></mdui-icon>`;
      }
      if (this.variant === "assist" || this.variant === "filter") {
        return ke`<mdui-icon-check class="i"></mdui-icon-check>`;
      }
      return icon();
    };
    return !this.selected ? ke`<slot name="icon" part="icon" class="icon">${icon()}</slot>` : ke`<slot name="selected-icon" part="selected-icon" class="selected-icon">${selectedIcon()}</slot>`;
  }
  renderLabel() {
    return ke`<slot part="label" class="label"></slot>`;
  }
  renderEndIcon() {
    return ke`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ke`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderDeleteIcon() {
    if (!this.deletable) {
      return nothingTemplate;
    }
    return ke`<slot name="delete-icon" part="delete-icon" class="delete-icon" @click="${this.onDelete}">${this.deleteIcon ? ke`<mdui-icon name="${this.deleteIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-clear class="i"></mdui-icon-clear>`}</slot>`;
  }
  renderInner() {
    return [
      this.renderIcon(),
      this.renderLabel(),
      this.renderEndIcon(),
      this.renderDeleteIcon()
    ];
  }
};
Chip.styles = [ButtonBase.styles, style12];
__decorate([
  n4({ reflect: true })
], Chip.prototype, "variant", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Chip.prototype, "elevated", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Chip.prototype, "selectable", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Chip.prototype, "selected", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Chip.prototype, "deletable", void 0);
__decorate([
  n4({ reflect: true })
], Chip.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "selected-icon" })
], Chip.prototype, "selectedIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], Chip.prototype, "endIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "delete-icon" })
], Chip.prototype, "deleteIcon", void 0);
__decorate([
  watch("selected", true)
], Chip.prototype, "onSelectedChange", null);
Chip = __decorate([
  t2("mdui-chip")
], Chip);

// node_modules/@mdui/shared/helpers/array.js
var arraysEqualIgnoreOrder = (a3, b3) => {
  if (a3.length !== b3.length) {
    return false;
  }
  const sortedA = [...a3].sort();
  const sortedB = [...b3].sort();
  return sortedA.every((value, index) => value === sortedB[index]);
};

// node_modules/mdui/components/collapse/collapse-style.js
var collapseStyle = i`:host{display:block}`;

// node_modules/mdui/components/collapse/collapse.js
var Collapse = class Collapse2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.accordion = false;
    this.disabled = false;
    this.activeKeys = [];
    this.isInitial = true;
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-collapse-item"]
    });
  }
  async onActiveKeysChange() {
    await this.definedController.whenDefined();
    const value = this.accordion ? this.items.find((item) => this.activeKeys.includes(item.key))?.value : this.items.filter((item) => this.activeKeys.includes(item.key)).map((item) => item.value);
    this.setValue(value);
    if (!this.isInitial) {
      this.emit("change");
    }
  }
  async onValueChange() {
    this.isInitial = !this.hasUpdated;
    await this.definedController.whenDefined();
    if (this.accordion) {
      const value = this.value;
      if (!value) {
        this.setActiveKeys([]);
      } else {
        const item = this.items.find((item2) => item2.value === value);
        this.setActiveKeys(item ? [item.key] : []);
      }
    } else {
      const value = this.value;
      if (!value.length) {
        this.setActiveKeys([]);
      } else {
        const activeKeys = this.items.filter((item) => value.includes(item.value)).map((item) => item.key);
        this.setActiveKeys(activeKeys);
      }
    }
    this.updateItems();
  }
  render() {
    return ke`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`;
  }
  setActiveKeys(activeKeys) {
    if (!arraysEqualIgnoreOrder(this.activeKeys, activeKeys)) {
      this.activeKeys = activeKeys;
    }
  }
  setValue(value) {
    if (this.accordion || isUndefined(this.value) || isUndefined(value)) {
      this.value = value;
    } else if (!arraysEqualIgnoreOrder(this.value, value)) {
      this.value = value;
    }
  }
  onClick(event) {
    if (this.disabled) {
      return;
    }
    if (event.button) {
      return;
    }
    const target = event.target;
    const item = target.closest("mdui-collapse-item");
    if (!item || item.disabled) {
      return;
    }
    const path = event.composedPath();
    if (item.trigger && !path.find((element) => isElement(element) && $(element).is(item.trigger))) {
      return;
    }
    if (!path.find((element) => isElement(element) && element.part.contains("header"))) {
      return;
    }
    if (this.accordion) {
      if (this.activeKeys.includes(item.key)) {
        this.setActiveKeys([]);
      } else {
        this.setActiveKeys([item.key]);
      }
    } else {
      const activeKeys = [...this.activeKeys];
      if (activeKeys.includes(item.key)) {
        activeKeys.splice(activeKeys.indexOf(item.key), 1);
      } else {
        activeKeys.push(item.key);
      }
      this.setActiveKeys(activeKeys);
    }
    this.isInitial = false;
    this.updateItems();
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.updateItems();
  }
  // 更新 <mdui-collapse-item> 的状态
  updateItems() {
    this.items.forEach((item) => {
      item.active = this.activeKeys.includes(item.key);
      item.isInitial = this.isInitial;
    });
  }
};
Collapse.styles = [
  componentStyle,
  collapseStyle
];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Collapse.prototype, "accordion", void 0);
__decorate([
  n4()
], Collapse.prototype, "value", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Collapse.prototype, "disabled", void 0);
__decorate([
  r4()
], Collapse.prototype, "activeKeys", void 0);
__decorate([
  o4({ selector: "mdui-collapse-item", flatten: true })
], Collapse.prototype, "items", void 0);
__decorate([
  watch("activeKeys", true)
], Collapse.prototype, "onActiveKeysChange", null);
__decorate([
  watch("value")
], Collapse.prototype, "onValueChange", null);
Collapse = __decorate([
  t2("mdui-collapse")
], Collapse);

// node_modules/mdui/components/collapse/collapse-item-style.js
var collapseItemStyle = i`:host{display:flex;flex-direction:column}.header{display:block}.body{display:block;overflow:hidden;transition:height var(--mdui-motion-duration-short4) var(--mdui-motion-easing-emphasized)}.body.opened{overflow:visible}.body.active{transition-duration:var(--mdui-motion-duration-medium4)}`;

// node_modules/mdui/components/collapse/collapse-item.js
var CollapseItem = class CollapseItem2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.active = false;
    this.state = "closed";
    this.isInitial = true;
    this.key = uniqueId();
    this.bodyRef = ii();
  }
  onActiveChange() {
    if (this.isInitial) {
      this.state = this.active ? "opened" : "closed";
      if (this.hasUpdated) {
        this.updateBodyHeight();
      }
    } else {
      this.state = this.active ? "open" : "close";
      this.emit(this.state);
      this.updateBodyHeight();
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.updateBodyHeight();
  }
  render() {
    return ke`<slot name="header" part="header" class="header">${this.header}</slot><slot part="body" class="body ${Rt({
      opened: this.state === "opened",
      active: this.active
    })}" ${Kt(this.bodyRef)} @transitionend="${this.onTransitionEnd}"></slot>`;
  }
  onTransitionEnd(event) {
    if (event.target === this.bodyRef.value) {
      this.state = this.active ? "opened" : "closed";
      this.emit(this.state);
      this.updateBodyHeight();
    }
  }
  updateBodyHeight() {
    const scrollHeight = this.bodyRef.value.scrollHeight;
    if (this.state === "close") {
      $(this.bodyRef.value).height(scrollHeight);
      this.bodyRef.value.clientLeft;
    }
    $(this.bodyRef.value).height(this.state === "opened" ? "auto" : this.state === "open" ? scrollHeight : 0);
  }
};
CollapseItem.styles = [
  componentStyle,
  collapseItemStyle
];
__decorate([
  n4({ reflect: true })
], CollapseItem.prototype, "value", void 0);
__decorate([
  n4({ reflect: true })
], CollapseItem.prototype, "header", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], CollapseItem.prototype, "disabled", void 0);
__decorate([
  n4()
], CollapseItem.prototype, "trigger", void 0);
__decorate([
  r4()
], CollapseItem.prototype, "active", void 0);
__decorate([
  r4()
], CollapseItem.prototype, "state", void 0);
__decorate([
  watch("active")
], CollapseItem.prototype, "onActiveChange", null);
CollapseItem = __decorate([
  t2("mdui-collapse-item")
], CollapseItem);

// node_modules/lit-html/node/directives/when.js
function nn(n6, r7, t5) {
  return n6 ? r7(n6) : t5?.(n6);
}

// node_modules/@mdui/shared/helpers/animate.js
function animateTo(el, keyframes, options) {
  if (!el) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    if (options.duration === Infinity) {
      throw new Error("Promise-based animations must be finite.");
    }
    if (isNumber(options.duration) && isNaN(options.duration)) {
      options.duration = 0;
    }
    if (options.easing === "") {
      options.easing = "linear";
    }
    const animation = el.animate(keyframes, options);
    animation.addEventListener("cancel", resolve, { once: true });
    animation.addEventListener("finish", resolve, { once: true });
  });
}
function stopAnimations(el) {
  if (!el) {
    return Promise.resolve();
  }
  return Promise.all(el.getAnimations().map((animation) => {
    return new Promise((resolve) => {
      const handleAnimationEvent = requestAnimationFrame(resolve);
      animation.addEventListener("cancel", () => handleAnimationEvent, {
        once: true
      });
      animation.addEventListener("finish", () => handleAnimationEvent, {
        once: true
      });
      animation.cancel();
    });
  }));
}

// node_modules/@mdui/shared/helpers/tabbable.js
function isTabbable(el) {
  const window2 = getWindow();
  const localName = el.localName;
  if (el.getAttribute("tabindex") === "-1") {
    return false;
  }
  if (el.hasAttribute("disabled")) {
    return false;
  }
  if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") {
    return false;
  }
  if (localName === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
    return false;
  }
  if (el.offsetParent === null) {
    return false;
  }
  if (window2.getComputedStyle(el).visibility === "hidden") {
    return false;
  }
  if ((localName === "audio" || localName === "video") && el.hasAttribute("controls")) {
    return true;
  }
  if (el.hasAttribute("tabindex")) {
    return true;
  }
  if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
    return true;
  }
  return [
    "button",
    "input",
    "select",
    "textarea",
    "a",
    "audio",
    "video",
    "summary"
  ].includes(localName);
}
function getTabbableBoundary(root) {
  const allElements = [];
  function walk(el) {
    if (el instanceof HTMLElement) {
      allElements.push(el);
      if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
        walk(el.shadowRoot);
      }
    }
    const children = el.children;
    [...children].forEach((e5) => walk(e5));
  }
  walk(root);
  const start = allElements.find((el) => isTabbable(el)) ?? null;
  const end = allElements.reverse().find((el) => isTabbable(el)) ?? null;
  return { start, end };
}

// node_modules/@mdui/shared/helpers/modal.js
var activeModals = [];
var Modal = class {
  constructor(element) {
    this.tabDirection = "forward";
    this.element = element;
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  activate() {
    activeModals.push(this.element);
    document.addEventListener("focusin", this.handleFocusIn);
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  deactivate() {
    activeModals = activeModals.filter((modal) => modal !== this.element);
    document.removeEventListener("focusin", this.handleFocusIn);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
  isActive() {
    return activeModals[activeModals.length - 1] === this.element;
  }
  checkFocus() {
    if (this.isActive()) {
      if (!this.element.matches(":focus-within")) {
        const { start, end } = getTabbableBoundary(this.element);
        const target = this.tabDirection === "forward" ? start : end;
        if (typeof target?.focus === "function") {
          target.focus({ preventScroll: true });
        }
      }
    }
  }
  handleFocusIn() {
    this.checkFocus();
  }
  handleKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey) {
      this.tabDirection = "backward";
    }
    requestAnimationFrame(() => this.checkFocus());
  }
  handleKeyUp() {
    this.tabDirection = "forward";
  }
};

// node_modules/@mdui/shared/helpers/motion.js
var getEasing = (element, name) => {
  const cssVariableName = `--mdui-motion-easing-${name}`;
  return $(element).css(cssVariableName).trim();
};
var getDuration = (element, name) => {
  const cssVariableName = `--mdui-motion-duration-${name}`;
  const cssValue = $(element).css(cssVariableName).trim().toLowerCase();
  if (cssValue.endsWith("ms")) {
    return parseFloat(cssValue);
  } else {
    return parseFloat(cssValue) * 1e3;
  }
};

// node_modules/@mdui/shared/helpers/scroll.js
var scrollBarSizeCached;
var getScrollBarSize = (fresh) => {
  if (isUndefined(document)) {
    return 0;
  }
  if (fresh || scrollBarSizeCached === void 0) {
    const $inner = $("<div>").css({
      width: "100%",
      height: "200px"
    });
    const $outer = $("<div>").css({
      position: "absolute",
      top: "0",
      left: "0",
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }).append($inner).appendTo(document.body);
    const widthContained = $inner[0].offsetWidth;
    $outer.css("overflow", "scroll");
    let widthScroll = $inner[0].offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = $outer[0].clientWidth;
    }
    $outer.remove();
    scrollBarSizeCached = widthContained - widthScroll;
  }
  return scrollBarSizeCached;
};
var hasScrollbar = (target) => {
  return target.scrollHeight > target.clientHeight;
};
var lockMap = /* @__PURE__ */ new WeakMap();
var className = "mdui-lock-screen";
var lockScreen = (source, target) => {
  const document3 = getDocument();
  target ??= document3.documentElement;
  if (!lockMap.has(target)) {
    lockMap.set(target, /* @__PURE__ */ new Set());
  }
  const lock = lockMap.get(target);
  lock.add(source);
  const $target = $(target);
  if (hasScrollbar(target)) {
    $target.css("width", `calc(100% - ${getScrollBarSize()}px)`);
  }
  $target.addClass(className);
};
var unlockScreen = (source, target) => {
  const document3 = getDocument();
  target ??= document3.documentElement;
  const lock = lockMap.get(target);
  if (!lock) {
    return;
  }
  lock.delete(source);
  if (lock.size === 0) {
    lockMap.delete(target);
    $(target).removeClass(className).width("");
  }
};

// node_modules/@lit/localize/internal/locale-status-event.js
var LOCALE_STATUS_EVENT = "lit-localize-status";

// node_modules/@lit/localize/internal/str-tag.js
var isStrTagged = (val) => typeof val !== "string" && "strTag" in val;
var joinStringsAndValues = (strings, values, valueOrder) => {
  let concat = strings[0];
  for (let i4 = 1; i4 < strings.length; i4++) {
    concat += values[valueOrder ? valueOrder[i4 - 1] : i4 - 1];
    concat += strings[i4];
  }
  return concat;
};

// node_modules/@lit/localize/internal/default-msg.js
var defaultMsg = (template) => isStrTagged(template) ? joinStringsAndValues(template.strings, template.values) : template;

// node_modules/@lit/localize/init/install.js
var msg = defaultMsg;
var installed = false;
function _installMsgImplementation(impl) {
  if (installed) {
    throw new Error("lit-localize can only be configured once");
  }
  msg = impl;
  installed = true;
}

// node_modules/@lit/localize/internal/deferred.js
var Deferred = class {
  constructor() {
    this.settled = false;
    this.promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  resolve(value) {
    this.settled = true;
    this._resolve(value);
  }
  reject(error) {
    this.settled = true;
    this._reject(error);
  }
};

// node_modules/@lit/localize/internal/fnv1a64.js
var hl = [];
for (let i4 = 0; i4 < 256; i4++) {
  hl[i4] = (i4 >> 4 & 15).toString(16) + (i4 & 15).toString(16);
}
function fnv1a64(str) {
  let t0 = 0, v0 = 8997, t1 = 0, v1 = 33826, t22 = 0, v22 = 40164, t32 = 0, v3 = 52210;
  for (let i4 = 0; i4 < str.length; i4++) {
    v0 ^= str.charCodeAt(i4);
    t0 = v0 * 435;
    t1 = v1 * 435;
    t22 = v22 * 435;
    t32 = v3 * 435;
    t22 += v0 << 8;
    t32 += v1 << 8;
    t1 += t0 >>> 16;
    v0 = t0 & 65535;
    t22 += t1 >>> 16;
    v1 = t1 & 65535;
    v3 = t32 + (t22 >>> 16) & 65535;
    v22 = t22 & 65535;
  }
  return hl[v3 >> 8] + hl[v3 & 255] + hl[v22 >> 8] + hl[v22 & 255] + hl[v1 >> 8] + hl[v1 & 255] + hl[v0 >> 8] + hl[v0 & 255];
}

// node_modules/@lit/localize/internal/id-generation.js
var HASH_DELIMITER = "";
var HTML_PREFIX = "h";
var STRING_PREFIX = "s";
function generateMsgId(strings, isHtmlTagged) {
  return (isHtmlTagged ? HTML_PREFIX : STRING_PREFIX) + fnv1a64(typeof strings === "string" ? strings : strings.join(HASH_DELIMITER));
}

// node_modules/@lit/localize/internal/runtime-msg.js
var expressionOrders = /* @__PURE__ */ new WeakMap();
var hashCache = /* @__PURE__ */ new Map();
function runtimeMsg(templates2, template, options) {
  if (templates2) {
    const id2 = options?.id ?? generateId(template);
    const localized = templates2[id2];
    if (localized) {
      if (typeof localized === "string") {
        return localized;
      } else if ("strTag" in localized) {
        return joinStringsAndValues(
          localized.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          template.values,
          localized.values
        );
      } else {
        let order = expressionOrders.get(localized);
        if (order === void 0) {
          order = localized.values;
          expressionOrders.set(localized, order);
        }
        return {
          ...localized,
          values: order.map((i4) => template.values[i4])
        };
      }
    }
  }
  return defaultMsg(template);
}
function generateId(template) {
  const strings = typeof template === "string" ? template : template.strings;
  let id2 = hashCache.get(strings);
  if (id2 === void 0) {
    id2 = generateMsgId(strings, typeof template !== "string" && !("strTag" in template));
    hashCache.set(strings, id2);
  }
  return id2;
}

// node_modules/@lit/localize/init/runtime.js
function dispatchStatusEvent(detail) {
  window.dispatchEvent(new CustomEvent(LOCALE_STATUS_EVENT, { detail }));
}
var activeLocale = "";
var loadingLocale;
var sourceLocale;
var validLocales;
var loadLocale;
var templates;
var loading = new Deferred();
loading.resolve();
var requestId = 0;
var configureLocalization = (config) => {
  _installMsgImplementation((template, options) => runtimeMsg(templates, template, options));
  activeLocale = sourceLocale = config.sourceLocale;
  validLocales = new Set(config.targetLocales);
  validLocales.add(config.sourceLocale);
  loadLocale = config.loadLocale;
  return { getLocale, setLocale };
};
var getLocale = () => {
  return activeLocale;
};
var setLocale = (newLocale) => {
  if (newLocale === (loadingLocale ?? activeLocale)) {
    return loading.promise;
  }
  if (!validLocales || !loadLocale) {
    throw new Error("Internal error");
  }
  if (!validLocales.has(newLocale)) {
    throw new Error("Invalid locale code");
  }
  requestId++;
  const thisRequestId = requestId;
  loadingLocale = newLocale;
  if (loading.settled) {
    loading = new Deferred();
  }
  dispatchStatusEvent({ status: "loading", loadingLocale: newLocale });
  const localePromise = newLocale === sourceLocale ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : loadLocale(newLocale);
  localePromise.then((mod) => {
    if (requestId === thisRequestId) {
      activeLocale = newLocale;
      loadingLocale = void 0;
      templates = mod.templates;
      dispatchStatusEvent({ status: "ready", readyLocale: newLocale });
      loading.resolve();
    }
  }, (err) => {
    if (requestId === thisRequestId) {
      dispatchStatusEvent({
        status: "error",
        errorLocale: newLocale,
        errorMessage: err.toString()
      });
      loading.reject(err);
    }
  });
  return loading.promise;
};

// node_modules/mdui/internal/localeCodes.js
var sourceLocale2 = `en-us`;
var targetLocales = [
  `ar-eg`,
  `az-az`,
  `be-by`,
  `bg-bg`,
  `bn-bd`,
  `ca-es`,
  `cs-cz`,
  `da-dk`,
  `de-de`,
  `el-gr`,
  `en-gb`,
  `es-es`,
  `et-ee`,
  `fa-ir`,
  `fi-fi`,
  `fr-be`,
  `fr-ca`,
  `fr-fr`,
  `ga-ie`,
  `gl-es`,
  `he-il`,
  `hi-in`,
  `hr-hr`,
  `hu-hu`,
  `hy-am`,
  `id-id`,
  `is-is`,
  `it-it`,
  `ja-jp`,
  `ka-ge`,
  `kk-kz`,
  `km-kh`,
  `kmr-iq`,
  `kn-in`,
  `ko-kr`,
  `lt-lt`,
  `lv-lv`,
  `mk-mk`,
  `ml-in`,
  `mn-mn`,
  `ms-my`,
  `nb-no`,
  `ne-np`,
  `nl-be`,
  `nl-nl`,
  `pl-pl`,
  `pt-br`,
  `pt-pt`,
  `ro-ro`,
  `ru-ru`,
  `sk-sk`,
  `sl-si`,
  `sr-rs`,
  `sv-se`,
  `ta-in`,
  `th-th`,
  `tr-tr`,
  `uk-ua`,
  `ur-pk`,
  `vi-vn`,
  `zh-cn`,
  `zh-hk`,
  `zh-tw`
];

// node_modules/mdui/internal/localize.js
var uninitializedError = "You must call `loadLocale` first to set up the localized template.";
var getLocale2;
var setLocale2;
var initializeLocalize = (loadFunc) => {
  const window2 = getWindow();
  const result = configureLocalization({
    sourceLocale: sourceLocale2,
    targetLocales,
    loadLocale: loadFunc
  });
  getLocale2 = result.getLocale;
  setLocale2 = result.setLocale;
  window2.addEventListener(LOCALE_STATUS_EVENT, (event) => {
    window2.dispatchEvent(new CustomEvent("mdui-localize-status", {
      detail: event.detail
    }));
  });
};
var listeningLitLocalizeStatus = false;
var localeReadyCallbacksMap = /* @__PURE__ */ new Map();
var onLocaleReady = (target, callback) => {
  if (!listeningLitLocalizeStatus) {
    listeningLitLocalizeStatus = true;
    const window2 = getWindow();
    window2.addEventListener(LOCALE_STATUS_EVENT, (event) => {
      if (event.detail.status === "ready") {
        localeReadyCallbacksMap.forEach((callbacks2) => {
          callbacks2.forEach((cb) => cb());
        });
      }
    });
  }
  const callbacks = localeReadyCallbacksMap.get(target) || [];
  callbacks.push(callback);
  localeReadyCallbacksMap.set(target, callbacks);
};
var offLocaleReady = (target) => {
  localeReadyCallbacksMap.delete(target);
};

// node_modules/mdui/components/dialog/style.js
var style13 = i`:host{--shape-corner:var(--mdui-shape-corner-extra-large);--z-index:2300;position:fixed;z-index:var(--z-index);display:none;align-items:center;justify-content:center;inset:0;padding:3rem}::slotted(mdui-top-app-bar[slot=header]){position:absolute;border-top-left-radius:var(--mdui-shape-corner-extra-large);border-top-right-radius:var(--mdui-shape-corner-extra-large);background-color:rgb(var(--mdui-color-surface-container-high))}:host([fullscreen]){--shape-corner:var(--mdui-shape-corner-none);padding:0}:host([fullscreen]) ::slotted(mdui-top-app-bar[slot=header]){border-top-left-radius:var(--mdui-shape-corner-none);border-top-right-radius:var(--mdui-shape-corner-none)}.overlay{position:fixed;inset:0;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{--mdui-color-background:var(--mdui-color-surface-container-high);position:relative;display:flex;flex-direction:column;max-height:100%;border-radius:var(--shape-corner);outline:0;transform-origin:top;min-width:17.5rem;max-width:35rem;padding:1.5rem;background-color:rgb(var(--mdui-color-surface-container-high));box-shadow:var(--mdui-elevation-level3)}:host([fullscreen]) .panel{width:100%;max-width:100%;height:100%;max-height:100%;box-shadow:var(--mdui-elevation-level0)}.header{display:flex;flex-direction:column}.has-icon .header{align-items:center}.icon{display:flex;color:rgb(var(--mdui-color-secondary));font-size:1.5rem}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}.headline{display:flex;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.icon+.headline{padding-top:1rem}.body{overflow:auto}.header+.body{margin-top:1rem}.description{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([fullscreen]) .description{color:rgb(var(--mdui-color-on-surface))}.has-description.has-default .description{margin-bottom:1rem}.action{display:flex;justify-content:flex-end;padding-top:1.5rem}.action::slotted(:not(:first-child)){margin-left:.5rem}:host([stacked-actions]) .action{flex-direction:column;align-items:end}:host([stacked-actions]) .action::slotted(:not(:first-child)){margin-left:0;margin-top:.5rem}`;

// node_modules/mdui/components/dialog/index.js
var Dialog = class Dialog2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.open = false;
    this.fullscreen = false;
    this.closeOnEsc = false;
    this.closeOnOverlayClick = false;
    this.stackedActions = false;
    this.overlayRef = ii();
    this.panelRef = ii();
    this.bodyRef = ii();
    this.hasSlotController = new HasSlotController(this, "header", "icon", "headline", "description", "action", "[default]");
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-top-app-bar"]
    });
  }
  async onOpenChange() {
    const hasUpdated = this.hasUpdated;
    if (!this.open && !hasUpdated) {
      return;
    }
    await this.definedController.whenDefined();
    if (!hasUpdated) {
      await this.updateComplete;
    }
    const children = Array.from(this.panelRef.value.querySelectorAll(".header, .body, .actions"));
    const easingLinear = getEasing(this, "linear");
    const easingEmphasizedDecelerate = getEasing(this, "emphasized-decelerate");
    const easingEmphasizedAccelerate = getEasing(this, "emphasized-accelerate");
    const stopAnimation = () => Promise.all([
      stopAnimations(this.overlayRef.value),
      stopAnimations(this.panelRef.value),
      ...children.map((child) => stopAnimations(child))
    ]);
    if (this.open) {
      if (hasUpdated) {
        const eventProceeded = this.emit("open", { cancelable: true });
        if (!eventProceeded) {
          return;
        }
      }
      this.style.display = "flex";
      const topAppBarElements = this.topAppBarElements ?? [];
      if (topAppBarElements.length) {
        const topAppBarElement = topAppBarElements[0];
        if (!topAppBarElement.scrollTarget) {
          topAppBarElement.scrollTarget = this.bodyRef.value;
        }
        this.bodyRef.value.style.marginTop = "0";
      }
      this.originalTrigger = document.activeElement;
      this.modalHelper.activate();
      lockScreen(this);
      await stopAnimation();
      requestAnimationFrame(() => {
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.focus({ preventScroll: true });
        } else {
          this.panelRef.value.focus({ preventScroll: true });
        }
      });
      const duration = getDuration(this, "medium4");
      await Promise.all([
        animateTo(this.overlayRef.value, [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1 }], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        }),
        animateTo(this.panelRef.value, [
          { transform: "translateY(-1.875rem) scaleY(0)" },
          { transform: "translateY(0) scaleY(1)" }
        ], {
          duration: hasUpdated ? duration : 0,
          easing: easingEmphasizedDecelerate
        }),
        animateTo(this.panelRef.value, [{ opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 1 }], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        }),
        ...children.map((child) => animateTo(child, [
          { opacity: 0 },
          { opacity: 0, offset: 0.2 },
          { opacity: 1, offset: 0.8 },
          { opacity: 1 }
        ], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        }))
      ]);
      if (hasUpdated) {
        this.emit("opened");
      }
    } else {
      const eventProceeded = this.emit("close", { cancelable: true });
      if (!eventProceeded) {
        return;
      }
      this.modalHelper.deactivate();
      await stopAnimation();
      const duration = getDuration(this, "short4");
      await Promise.all([
        animateTo(this.overlayRef.value, [{ opacity: 1 }, { opacity: 0 }], {
          duration,
          easing: easingLinear
        }),
        animateTo(this.panelRef.value, [
          { transform: "translateY(0) scaleY(1)" },
          { transform: "translateY(-1.875rem) scaleY(0.6)" }
        ], { duration, easing: easingEmphasizedAccelerate }),
        animateTo(this.panelRef.value, [{ opacity: 1 }, { opacity: 1, offset: 0.75 }, { opacity: 0 }], { duration, easing: easingLinear }),
        ...children.map((child) => animateTo(child, [{ opacity: 1 }, { opacity: 0, offset: 0.75 }, { opacity: 0 }], { duration, easing: easingLinear }))
      ]);
      this.style.display = "none";
      unlockScreen(this);
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("closed");
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockScreen(this);
    offLocaleReady(this);
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.modalHelper = new Modal(this);
    this.addEventListener("keydown", (event) => {
      if (this.open && this.closeOnEsc && event.key === "Escape") {
        event.stopPropagation();
        this.open = false;
      }
    });
  }
  render() {
    const hasActionSlot = this.hasSlotController.test("action");
    const hasDefaultSlot = this.hasSlotController.test("[default]");
    const hasIcon = !!this.icon || this.hasSlotController.test("icon");
    const hasHeadline = !!this.headline || this.hasSlotController.test("headline");
    const hasDescription = !!this.description || this.hasSlotController.test("description");
    const hasHeader = hasIcon || hasHeadline || this.hasSlotController.test("header");
    const hasBody = hasDescription || hasDefaultSlot;
    return ke`<div ${Kt(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}" tabindex="-1"></div><div ${Kt(this.panelRef)} part="panel" class="panel ${Rt({
      "has-icon": hasIcon,
      "has-description": hasDescription,
      "has-default": hasDefaultSlot
    })}" tabindex="0">${nn(hasHeader, () => ke`<slot name="header" part="header" class="header">${nn(hasIcon, () => this.renderIcon())} ${nn(hasHeadline, () => this.renderHeadline())}</slot>`)} ${nn(hasBody, () => ke`<div ${Kt(this.bodyRef)} part="body" class="body">${nn(hasDescription, () => this.renderDescription())}<slot></slot></div>`)} ${nn(hasActionSlot, () => ke`<slot name="action" part="action" class="action"></slot>`)}</div>`;
  }
  onOverlayClick() {
    this.emit("overlay-click");
    if (!this.closeOnOverlayClick) {
      return;
    }
    this.open = false;
  }
  renderIcon() {
    return ke`<slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderHeadline() {
    return ke`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`;
  }
  renderDescription() {
    return ke`<slot name="description" part="description" class="description">${this.description}</slot>`;
  }
};
Dialog.styles = [componentStyle, style13];
__decorate([
  n4({ reflect: true })
], Dialog.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true })
], Dialog.prototype, "headline", void 0);
__decorate([
  n4({ reflect: true })
], Dialog.prototype, "description", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Dialog.prototype, "open", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Dialog.prototype, "fullscreen", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "close-on-esc"
  })
], Dialog.prototype, "closeOnEsc", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "close-on-overlay-click"
  })
], Dialog.prototype, "closeOnOverlayClick", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "stacked-actions"
  })
], Dialog.prototype, "stackedActions", void 0);
__decorate([
  o4({
    slot: "header",
    selector: "mdui-top-app-bar",
    flatten: true
  })
], Dialog.prototype, "topAppBarElements", void 0);
__decorate([
  watch("open")
], Dialog.prototype, "onOpenChange", null);
Dialog = __decorate([
  t2("mdui-dialog")
], Dialog);

// node_modules/mdui/components/divider/style.js
var style14 = i`:host{display:block;height:.0625rem;background-color:rgb(var(--mdui-color-surface-variant))}:host([inset]){margin-left:1rem}:host([middle]){margin-left:1rem;margin-right:1rem}:host([vertical]){height:100%;width:.0625rem}`;

// node_modules/mdui/components/divider/index.js
var Divider = class Divider2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
    this.inset = false;
    this.middle = false;
  }
  render() {
    return ke``;
  }
};
Divider.styles = [componentStyle, style14];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Divider.prototype, "vertical", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Divider.prototype, "inset", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Divider.prototype, "middle", void 0);
Divider = __decorate([
  t2("mdui-divider")
], Divider);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName2(node) {
  if (isNode2(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow2(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode2(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode2(value) {
  return value instanceof Node || value instanceof getWindow2(value).Node;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow2(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow2(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName2(node));
}
function getComputedStyle2(element) {
  return getWindow2(element).getComputedStyle(element);
}
function getParentNode(node) {
  if (getNodeName2(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow2(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/mdui/components/dropdown/style.js
var style15 = i`:host{--z-index:2100;display:contents}.panel{display:block;position:fixed;z-index:var(--z-index)}`;

// node_modules/mdui/components/dropdown/index.js
var Dropdown = class Dropdown2 extends MduiElement {
  constructor() {
    super();
    this.open = false;
    this.disabled = false;
    this.trigger = "click";
    this.placement = "auto";
    this.stayOpenOnClick = false;
    this.openDelay = 150;
    this.closeDelay = 150;
    this.openOnPointer = false;
    this.panelRef = ii();
    this.definedController = new DefinedController(this, {
      relatedElements: [""]
    });
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onDocumentKeydown = this.onDocumentKeydown.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onPanelClick = this.onPanelClick.bind(this);
  }
  get triggerElement() {
    return this.triggerElements[0];
  }
  // 这些属性变更时，需要更新样式
  async onPositionChange() {
    if (this.open) {
      await this.definedController.whenDefined();
      this.updatePositioner();
    }
  }
  async onOpenChange() {
    const hasUpdated = this.hasUpdated;
    if (!this.open && !hasUpdated) {
      return;
    }
    await this.definedController.whenDefined();
    if (!hasUpdated) {
      await this.updateComplete;
    }
    const easingLinear = getEasing(this, "linear");
    const easingEmphasizedDecelerate = getEasing(this, "emphasized-decelerate");
    const easingEmphasizedAccelerate = getEasing(this, "emphasized-accelerate");
    if (this.open) {
      if (hasUpdated) {
        const eventProceeded = this.emit("open", { cancelable: true });
        if (!eventProceeded) {
          return;
        }
      }
      const focusablePanel = this.panelElements.find((panel) => isFunction(panel.focus));
      setTimeout(() => {
        focusablePanel?.focus();
      });
      const duration = getDuration(this, "medium4");
      await stopAnimations(this.panelRef.value);
      this.panelRef.value.hidden = false;
      this.updatePositioner();
      await Promise.all([
        animateTo(this.panelRef.value, [
          { transform: `${this.getCssScaleName()}(0.45)` },
          { transform: `${this.getCssScaleName()}(1)` }
        ], {
          duration: hasUpdated ? duration : 0,
          easing: easingEmphasizedDecelerate
        }),
        animateTo(this.panelRef.value, [{ opacity: 0 }, { opacity: 1, offset: 0.125 }, { opacity: 1 }], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        })
      ]);
      if (hasUpdated) {
        this.emit("opened");
      }
    } else {
      const eventProceeded = this.emit("close", { cancelable: true });
      if (!eventProceeded) {
        return;
      }
      if (!this.hasTrigger("focus") && isFunction(this.triggerElement?.focus) && (this.contains(document.activeElement) || this.contains(document.activeElement?.assignedSlot ?? null))) {
        this.triggerElement.focus();
      }
      const duration = getDuration(this, "short4");
      await stopAnimations(this.panelRef.value);
      await Promise.all([
        animateTo(this.panelRef.value, [
          { transform: `${this.getCssScaleName()}(1)` },
          { transform: `${this.getCssScaleName()}(0.45)` }
        ], { duration, easing: easingEmphasizedAccelerate }),
        animateTo(this.panelRef.value, [{ opacity: 1 }, { opacity: 1, offset: 0.875 }, { opacity: 0 }], { duration, easing: easingLinear })
      ]);
      if (this.panelRef.value) {
        this.panelRef.value.hidden = true;
      }
      this.emit("closed");
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.definedController.whenDefined().then(() => {
      document.addEventListener("pointerdown", this.onDocumentClick);
      document.addEventListener("keydown", this.onDocumentKeydown);
      this.overflowAncestors = getOverflowAncestors(this.triggerElement);
      this.overflowAncestors.forEach((ancestor) => {
        ancestor.addEventListener("scroll", this.onWindowScroll);
      });
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("pointerdown", this.onDocumentClick);
    document.removeEventListener("keydown", this.onDocumentKeydown);
    this.overflowAncestors?.forEach((ancestor) => {
      ancestor.removeEventListener("scroll", this.onWindowScroll);
    });
    this.observeResize?.unobserve();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.addEventListener("mouseleave", this.onMouseLeave);
    this.definedController.whenDefined().then(() => {
      this.triggerElement.addEventListener("focus", this.onFocus);
      this.triggerElement.addEventListener("click", this.onClick);
      this.triggerElement.addEventListener("contextmenu", this.onContextMenu);
      this.triggerElement.addEventListener("mouseenter", this.onMouseEnter);
      this.observeResize = observeResize(this.triggerElement, () => {
        this.updatePositioner();
      });
    });
  }
  render() {
    return ke`<slot name="trigger" part="trigger" class="trigger"></slot><slot ${Kt(this.panelRef)} part="panel" class="panel" hidden @click="${this.onPanelClick}"></slot>`;
  }
  /**
   * 获取 dropdown 打开、关闭动画的 CSS scaleX 或 scaleY
   */
  getCssScaleName() {
    return this.animateDirection === "horizontal" ? "scaleX" : "scaleY";
  }
  /**
   * 在 document 上点击时，根据条件判断是否要关闭 dropdown
   */
  onDocumentClick(e5) {
    if (this.disabled || !this.open) {
      return;
    }
    const path = e5.composedPath();
    if (!path.includes(this)) {
      this.open = false;
    }
    if (this.hasTrigger("contextmenu") && !this.hasTrigger("click") && path.includes(this.triggerElement)) {
      this.open = false;
    }
  }
  /**
   * 在 document 上按下按键时，根据条件判断是否要关闭 dropdown
   */
  onDocumentKeydown(event) {
    if (this.disabled || !this.open) {
      return;
    }
    if (event.key === "Escape") {
      this.open = false;
      return;
    }
    if (event.key === "Tab") {
      if (!this.hasTrigger("focus") && isFunction(this.triggerElement?.focus)) {
        event.preventDefault();
      }
      this.open = false;
    }
  }
  onWindowScroll() {
    window.requestAnimationFrame(() => this.onPositionChange());
  }
  hasTrigger(trigger) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(trigger);
  }
  onFocus() {
    if (this.disabled || this.open || !this.hasTrigger("focus")) {
      return;
    }
    this.open = true;
  }
  onClick(e5) {
    if (this.disabled || e5.button || !this.hasTrigger("click")) {
      return;
    }
    if (this.open && (this.hasTrigger("hover") || this.hasTrigger("focus"))) {
      return;
    }
    this.pointerOffsetX = e5.offsetX;
    this.pointerOffsetY = e5.offsetY;
    this.open = !this.open;
  }
  onPanelClick(e5) {
    if (!this.disabled && !this.stayOpenOnClick && $(e5.target).is("mdui-menu-item")) {
      this.open = false;
    }
  }
  onContextMenu(e5) {
    if (this.disabled || !this.hasTrigger("contextmenu")) {
      return;
    }
    e5.preventDefault();
    this.pointerOffsetX = e5.offsetX;
    this.pointerOffsetY = e5.offsetY;
    this.open = true;
  }
  onMouseEnter() {
    if (this.disabled || !this.hasTrigger("hover")) {
      return;
    }
    window.clearTimeout(this.closeTimeout);
    if (this.openDelay) {
      this.openTimeout = window.setTimeout(() => {
        this.open = true;
      }, this.openDelay);
    } else {
      this.open = true;
    }
  }
  onMouseLeave() {
    if (this.disabled || !this.hasTrigger("hover")) {
      return;
    }
    window.clearTimeout(this.openTimeout);
    this.closeTimeout = window.setTimeout(() => {
      this.open = false;
    }, this.closeDelay || 50);
  }
  // 更新 panel 的位置
  updatePositioner() {
    const $panel = $(this.panelRef.value);
    const $window = $(window);
    const panelElements = this.panelElements;
    const panelRect = {
      width: Math.max(...panelElements?.map((panel) => panel.offsetWidth) ?? []),
      height: panelElements?.map((panel) => panel.offsetHeight).reduce((total, height) => total + height, 0)
    };
    const triggerClientRect = this.triggerElement.getBoundingClientRect();
    const triggerRect = this.openOnPointer ? {
      top: this.pointerOffsetY + triggerClientRect.top,
      left: this.pointerOffsetX + triggerClientRect.left,
      width: 0,
      height: 0
    } : triggerClientRect;
    const screenMargin = 8;
    let transformOriginX;
    let transformOriginY;
    let top;
    let left;
    let placement = this.placement;
    if (placement === "auto") {
      const windowWidth = $window.width();
      const windowHeight = $window.height();
      let position2;
      let alignment2;
      if (windowHeight - triggerRect.top - triggerRect.height > panelRect.height + screenMargin) {
        position2 = "bottom";
      } else if (triggerRect.top > panelRect.height + screenMargin) {
        position2 = "top";
      } else if (windowWidth - triggerRect.left - triggerRect.width > panelRect.width + screenMargin) {
        position2 = "right";
      } else if (triggerRect.left > panelRect.width + screenMargin) {
        position2 = "left";
      } else {
        position2 = "bottom";
      }
      if (["top", "bottom"].includes(position2)) {
        if (windowWidth - triggerRect.left > panelRect.width + screenMargin) {
          alignment2 = "start";
        } else if (triggerRect.left + triggerRect.width / 2 > panelRect.width / 2 + screenMargin && windowWidth - triggerRect.left - triggerRect.width / 2 > panelRect.width / 2 + screenMargin) {
          alignment2 = void 0;
        } else if (triggerRect.left + triggerRect.width > panelRect.width + screenMargin) {
          alignment2 = "end";
        } else {
          alignment2 = "start";
        }
      } else {
        if (windowHeight - triggerRect.top > panelRect.height + screenMargin) {
          alignment2 = "start";
        } else if (triggerRect.top + triggerRect.height / 2 > panelRect.height / 2 + screenMargin && windowHeight - triggerRect.top - triggerRect.height / 2 > panelRect.height / 2 + screenMargin) {
          alignment2 = void 0;
        } else if (triggerRect.top + triggerRect.height > panelRect.height + screenMargin) {
          alignment2 = "end";
        } else {
          alignment2 = "start";
        }
      }
      placement = alignment2 ? [position2, alignment2].join("-") : position2;
    }
    const [position, alignment] = placement.split("-");
    this.animateDirection = ["top", "bottom"].includes(position) ? "vertical" : "horizontal";
    switch (position) {
      case "top":
        transformOriginY = "bottom";
        top = triggerRect.top - panelRect.height;
        break;
      case "bottom":
        transformOriginY = "top";
        top = triggerRect.top + triggerRect.height;
        break;
      default:
        transformOriginY = "center";
        switch (alignment) {
          case "start":
            top = triggerRect.top;
            break;
          case "end":
            top = triggerRect.top + triggerRect.height - panelRect.height;
            break;
          default:
            top = triggerRect.top + triggerRect.height / 2 - panelRect.height / 2;
            break;
        }
        break;
    }
    switch (position) {
      case "left":
        transformOriginX = "right";
        left = triggerRect.left - panelRect.width;
        break;
      case "right":
        transformOriginX = "left";
        left = triggerRect.left + triggerRect.width;
        break;
      default:
        transformOriginX = "center";
        switch (alignment) {
          case "start":
            left = triggerRect.left;
            break;
          case "end":
            left = triggerRect.left + triggerRect.width - panelRect.width;
            break;
          default:
            left = triggerRect.left + triggerRect.width / 2 - panelRect.width / 2;
            break;
        }
        break;
    }
    $panel.css({
      top,
      left,
      transformOrigin: [transformOriginX, transformOriginY].join(" ")
    });
  }
};
Dropdown.styles = [componentStyle, style15];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Dropdown.prototype, "open", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Dropdown.prototype, "disabled", void 0);
__decorate([
  n4({ reflect: true })
], Dropdown.prototype, "trigger", void 0);
__decorate([
  n4({ reflect: true })
], Dropdown.prototype, "placement", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "stay-open-on-click"
  })
], Dropdown.prototype, "stayOpenOnClick", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "open-delay" })
], Dropdown.prototype, "openDelay", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "close-delay" })
], Dropdown.prototype, "closeDelay", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "open-on-pointer"
  })
], Dropdown.prototype, "openOnPointer", void 0);
__decorate([
  o4({ slot: "trigger", flatten: true })
], Dropdown.prototype, "triggerElements", void 0);
__decorate([
  o4({ flatten: true })
], Dropdown.prototype, "panelElements", void 0);
__decorate([
  watch("placement", true),
  watch("openOnPointer", true)
], Dropdown.prototype, "onPositionChange", null);
__decorate([
  watch("open")
], Dropdown.prototype, "onOpenChange", null);
Dropdown = __decorate([
  t2("mdui-dropdown")
], Dropdown);

// node_modules/@mdui/shared/helpers/delay.js
var delay = (duration = 0) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

// node_modules/mdui/components/fab/style.js
var style16 = i`:host{--shape-corner-small:var(--mdui-shape-corner-small);--shape-corner-normal:var(--mdui-shape-corner-large);--shape-corner-large:var(--mdui-shape-corner-extra-large);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;text-align:center;border-radius:var(--shape-corner-normal);cursor:pointer;-webkit-tap-highlight-color:transparent;transition-property:box-shadow;transition-timing-function:var(--mdui-motion-easing-emphasized);transition-duration:var(--mdui-motion-duration-medium4);width:3.5rem;height:3.5rem;box-shadow:var(--mdui-elevation-level3);font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.button{padding:0 1rem}:host([size=small]) .button{padding:0 .5rem}:host([size=large]) .button{padding:0 1.875rem}:host([lowered]){box-shadow:var(--mdui-elevation-level1)}:host([focus-visible]){box-shadow:var(--mdui-elevation-level3)}:host([lowered][focus-visible]){box-shadow:var(--mdui-elevation-level1)}:host([pressed]){box-shadow:var(--mdui-elevation-level3)}:host([lowered][pressed]){box-shadow:var(--mdui-elevation-level1)}:host([hover]){box-shadow:var(--mdui-elevation-level4)}:host([lowered][hover]){box-shadow:var(--mdui-elevation-level2)}:host([variant=primary]){color:rgb(var(--mdui-color-on-primary-container));background-color:rgb(var(--mdui-color-primary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-primary-container
    )}:host([variant=surface]){color:rgb(var(--mdui-color-primary));background-color:rgb(var(--mdui-color-surface-container-high));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=surface][lowered]){background-color:rgb(var(--mdui-color-surface-container-low))}:host([variant=secondary]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=tertiary]){color:rgb(var(--mdui-color-on-tertiary-container));background-color:rgb(var(--mdui-color-tertiary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-tertiary-container
    )}:host([size=small]){border-radius:var(--shape-corner-small);width:2.5rem;height:2.5rem}:host([size=large]){border-radius:var(--shape-corner-large);width:6rem;height:6rem}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),38%);background-color:rgba(var(--mdui-color-on-surface),12%);box-shadow:var(--mdui-elevation-level0)}:host([extended]){width:auto}.label{display:inline-flex;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear) var(--mdui-motion-duration-short2);padding-left:.25rem;padding-right:.25rem}.has-icon .label{margin-left:.5rem}:host([size=small]) .has-icon .label{margin-left:.25rem}:host([size=large]) .has-icon .label{margin-left:1rem}:host(:not([extended])) .label{opacity:0;transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1)}:host([size=large]) .label{font-size:1.5em}.icon{display:inline-flex;font-size:1.71428571em}:host([size=large]) .icon{font-size:2.57142857em}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}mdui-circular-progress{display:inline-flex;width:1.5rem;height:1.5rem}:host([size=large]) mdui-circular-progress{width:2.25rem;height:2.25rem}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;

// node_modules/mdui/components/fab/index.js
var Fab = class Fab2 extends ButtonBase {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.size = "normal";
    this.extended = false;
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "icon");
    this.definedController = new DefinedController(this, {
      relatedElements: [""]
    });
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  /**
   * extended 变更时，设置动画
   */
  async onExtendedChange() {
    const hasUpdated = this.hasUpdated;
    if (this.extended) {
      this.style.width = `${this.scrollWidth}px`;
    } else {
      this.style.width = "";
    }
    await this.definedController.whenDefined();
    await this.updateComplete;
    if (this.extended && !hasUpdated) {
      this.style.width = `${this.scrollWidth}px`;
    }
    if (!hasUpdated) {
      await delay();
      this.style.transitionProperty = "box-shadow, width, bottom, transform";
    }
  }
  render() {
    const className2 = cc({
      button: true,
      "has-icon": this.icon || this.hasSlotController.test("icon")
    });
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
      className: className2,
      part: "button",
      content: this.renderInner()
    }) : this.disabled || this.loading ? ke`<span part="button" class="_a ${className2}">${this.renderInner()}</span>` : this.renderAnchor({
      className: className2,
      part: "button",
      content: this.renderInner()
    })}`;
  }
  renderLabel() {
    return ke`<slot part="label" class="label"></slot>`;
  }
  renderIcon() {
    if (this.loading) {
      return this.renderLoading();
    }
    return ke`<slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderInner() {
    return [this.renderIcon(), this.renderLabel()];
  }
};
Fab.styles = [ButtonBase.styles, style16];
__decorate([
  n4({ reflect: true })
], Fab.prototype, "variant", void 0);
__decorate([
  n4({ reflect: true })
], Fab.prototype, "size", void 0);
__decorate([
  n4({ reflect: true })
], Fab.prototype, "icon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Fab.prototype, "extended", void 0);
__decorate([
  watch("extended")
], Fab.prototype, "onExtendedChange", null);
Fab = __decorate([
  t2("mdui-fab")
], Fab);

// node_modules/mdui/components/layout/layout-style.js
var layoutStyle = i`:host{position:relative;display:flex;flex:1 1 auto;overflow:hidden}:host([full-height]){height:100%}`;

// node_modules/mdui/components/layout/layout.js
var Layout = class Layout2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.fullHeight = false;
  }
  render() {
    return ke`<slot></slot>`;
  }
};
Layout.styles = [componentStyle, layoutStyle];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "full-height"
  })
], Layout.prototype, "fullHeight", void 0);
Layout = __decorate([
  t2("mdui-layout")
], Layout);

// node_modules/mdui/components/layout/layout-item-style.js
var layoutItemStyle = i`:host{display:flex;z-index:1}`;

// node_modules/mdui/components/layout/layout-item.js
var LayoutItem = class LayoutItem2 extends LayoutItemBase {
  constructor() {
    super(...arguments);
    this.placement = "top";
  }
  get layoutPlacement() {
    return this.placement;
  }
  // placement 变更时，需要重新调整布局
  onPlacementChange() {
    this.layoutManager?.updateLayout(this);
  }
  render() {
    return ke`<slot></slot>`;
  }
};
LayoutItem.styles = [
  componentStyle,
  layoutItemStyle
];
__decorate([
  n4({ reflect: true })
], LayoutItem.prototype, "placement", void 0);
__decorate([
  watch("placement", true)
], LayoutItem.prototype, "onPlacementChange", null);
LayoutItem = __decorate([
  t2("mdui-layout-item")
], LayoutItem);

// node_modules/mdui/components/layout/layout-main-style.js
var layoutMainStyle = i`:host{flex:1 0 auto;max-width:100%;overflow:auto}`;

// node_modules/mdui/components/layout/layout-main.js
var LayoutMain = class LayoutMain2 extends MduiElement {
  connectedCallback() {
    super.connectedCallback();
    const parentElement = this.parentElement;
    if (isNodeName(parentElement, "mdui-layout")) {
      this.layoutManager = getLayout(parentElement);
      this.layoutManager.registerMain(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.layoutManager) {
      this.layoutManager.unregisterMain();
    }
  }
  render() {
    return ke`<slot></slot>`;
  }
};
LayoutMain.styles = [
  componentStyle,
  layoutMainStyle
];
LayoutMain = __decorate([
  t2("mdui-layout-main")
], LayoutMain);

// node_modules/mdui/components/linear-progress/style.js
var style17 = i`:host{--shape-corner:var(--mdui-shape-corner-none);position:relative;display:inline-block;width:100%;overflow:hidden;border-radius:var(--shape-corner);background-color:rgb(var(--mdui-color-surface-container-highest));height:.25rem}.determinate,.indeterminate{background-color:rgb(var(--mdui-color-primary))}.determinate{height:100%;transition:width var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard)}.indeterminate::before{position:absolute;top:0;bottom:0;left:0;background-color:inherit;animation:mdui-comp-progress-indeterminate 2s var(--mdui-motion-easing-linear) infinite;content:' '}.indeterminate::after{position:absolute;top:0;bottom:0;left:0;background-color:inherit;animation:mdui-comp-progress-indeterminate-short 2s var(--mdui-motion-easing-linear) infinite;content:' '}@keyframes mdui-comp-progress-indeterminate{0%{left:0;width:0}50%{left:30%;width:70%}75%{left:100%;width:0}}@keyframes mdui-comp-progress-indeterminate-short{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}100%{left:100%;width:0}}`;

// node_modules/mdui/components/linear-progress/index.js
var LinearProgress = class LinearProgress2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.max = 1;
  }
  render() {
    const isDeterminate = !isUndefined(this.value);
    if (isDeterminate) {
      const value = this.value;
      return ke`<div part="indicator" class="determinate" style="${se({
        width: `${value / Math.max(this.max ?? value, value) * 100}%`
      })}"></div>`;
    }
    return ke`<div part="indicator" class="indeterminate"></div>`;
  }
};
LinearProgress.styles = [componentStyle, style17];
__decorate([
  n4({ type: Number, reflect: true })
], LinearProgress.prototype, "max", void 0);
__decorate([
  n4({ type: Number })
], LinearProgress.prototype, "value", void 0);
LinearProgress = __decorate([
  t2("mdui-linear-progress")
], LinearProgress);

// node_modules/mdui/components/list/list-item-style.js
var listItemStyle = i`:host{--shape-corner:var(--mdui-shape-corner-none);--shape-corner-rounded:var(--mdui-shape-corner-extra-large);position:relative;display:block;border-radius:var(--shape-corner);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([rounded]),:host([rounded]) mdui-ripple{border-radius:var(--shape-corner-rounded)}:host([active]){background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]){pointer-events:none}.container{cursor:pointer;-webkit-user-select:none;user-select:none;text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}:host([disabled]) .container{cursor:default;opacity:.38}:host([nonclickable]:not([href])) .container{cursor:auto;-webkit-user-select:auto;user-select:auto}.preset{display:flex;align-items:center;padding:.5rem 1.5rem .5rem 1rem;min-height:3.5rem}:host([alignment=start]) .preset{align-items:flex-start}:host([alignment=end]) .preset{align-items:flex-end}.body{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;min-width:0}.headline{display:block;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}:host([active]) .headline{color:rgb(var(--mdui-color-on-secondary-container))}.description{display:none;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([disabled]) .description,:host([focused]) .description,:host([hover]) .description,:host([pressed]) .description{color:rgb(var(--mdui-color-on-surface))}.has-description .description{display:block}:host([description-line='1']) .description,:host([headline-line='1']) .headline{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([description-line='2']) .description,:host([description-line='3']) .description,:host([headline-line='2']) .headline,:host([headline-line='3']) .headline{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([description-line='2']) .description,:host([headline-line='2']) .headline{-webkit-line-clamp:2}:host([description-line='3']) .description,:host([headline-line='3']) .headline{-webkit-line-clamp:3}.end-icon,.icon{display:flex;flex:0 0 auto;font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height);color:rgb(var(--mdui-color-on-surface-variant))}:host([disabled]) .end-icon,:host([disabled]) .icon,:host([focused]) .end-icon,:host([focused]) .icon,:host([hover]) .end-icon,:host([hover]) .icon,:host([pressed]) .end-icon,:host([pressed]) .icon{color:rgb(var(--mdui-color-on-surface))}:host([active]) .end-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}.end-icon mdui-icon,.icon mdui-icon,.is-end-icon ::slotted([slot=end-icon]),.is-icon ::slotted([slot=icon]){font-size:1.5rem}.has-icon .icon{margin-right:1rem}.has-icon ::slotted(mdui-checkbox[slot=icon]),.has-icon ::slotted(mdui-radio[slot=icon]){margin-left:-.5rem}.has-end-icon .end-icon{margin-left:1rem}.has-end-icon ::slotted(mdui-checkbox[slot=end-icon]),.has-end-icon ::slotted(mdui-radio[slot=end-icon]){margin-right:-.5rem}`;

// node_modules/mdui/components/list/list-item.js
var ListItem = class ListItem2 extends AnchorMixin(RippleMixin(FocusableMixin(MduiElement))) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.active = false;
    this.nonclickable = false;
    this.rounded = false;
    this.alignment = "center";
    this.rippleRef = ii();
    this.itemRef = ii();
    this.hasSlotController = new HasSlotController(this, "[default]", "description", "icon", "end-icon", "custom");
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.focusDisabled;
  }
  get focusElement() {
    return this.href && !this.disabled ? this.itemRef.value : this;
  }
  get focusDisabled() {
    return this.href ? this.disabled : this.disabled || this.nonclickable;
  }
  render() {
    const preset = !this.hasSlotController.test("custom");
    const hasIcon = this.icon || this.hasSlotController.test("icon");
    const hasEndIcon = this.endIcon || this.hasSlotController.test("end-icon");
    const hasDescription = this.description || this.hasSlotController.test("description");
    const className2 = cc({
      container: true,
      preset,
      "has-icon": hasIcon,
      "has-end-icon": hasEndIcon,
      "has-description": hasDescription,
      // icon slot 中的元素是否为 mdui-icon 或 mdui-icon-* 组件
      "is-icon": isNodeName(this.iconElements[0], "mdui-icon"),
      // end-icon slot 中的元素是否为 mdui-icon 或 mdui-icon-* 组件
      "is-end-icon": getNodeName(this.endIconElements[0]).startsWith("mdui-icon-")
    });
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.href && !this.disabled ? this.renderAnchor({
      className: className2,
      content: this.renderInner(),
      part: "container",
      refDirective: Kt(this.itemRef)
    }) : ke`<div part="container" class="${className2}" ${Kt(this.itemRef)}>${this.renderInner()}</div>`}`;
  }
  renderInner() {
    const hasDefaultSlot = this.hasSlotController.test("[default]");
    return ke`<slot name="custom"><slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot><div part="body" class="body">${hasDefaultSlot ? ke`<slot part="headline" class="headline"></slot>` : ke`<div part="headline" class="headline">${this.headline}</div>`}<slot name="description" part="description" class="description">${this.description}</slot></div><slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ke`<mdui-icon name="${this.endIcon}"></mdui-icon>` : nothingTemplate}</slot></slot>`;
  }
};
ListItem.styles = [
  componentStyle,
  listItemStyle
];
__decorate([
  n4({ reflect: true })
], ListItem.prototype, "headline", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "headline-line" })
], ListItem.prototype, "headlineLine", void 0);
__decorate([
  n4({ reflect: true })
], ListItem.prototype, "description", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "description-line" })
], ListItem.prototype, "descriptionLine", void 0);
__decorate([
  n4({ reflect: true })
], ListItem.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], ListItem.prototype, "endIcon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ListItem.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ListItem.prototype, "active", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ListItem.prototype, "nonclickable", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], ListItem.prototype, "rounded", void 0);
__decorate([
  n4({ reflect: true })
], ListItem.prototype, "alignment", void 0);
__decorate([
  o4({ slot: "icon", flatten: true })
], ListItem.prototype, "iconElements", void 0);
__decorate([
  o4({ slot: "end-icon", flatten: true })
], ListItem.prototype, "endIconElements", void 0);
ListItem = __decorate([
  t2("mdui-list-item")
], ListItem);

// node_modules/mdui/components/list/list-subheader-style.js
var listSubheaderStyle = i`:host{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:default;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height);padding-left:1rem;padding-right:1.5rem;height:3.5rem;line-height:3.5rem}`;

// node_modules/mdui/components/list/list-subheader.js
var ListSubheader = class ListSubheader2 extends MduiElement {
  render() {
    return ke`<slot></slot>`;
  }
};
ListSubheader.styles = [
  componentStyle,
  listSubheaderStyle
];
ListSubheader = __decorate([
  t2("mdui-list-subheader")
], ListSubheader);

// node_modules/mdui/components/list/list-style.js
var listStyle = i`:host{display:block;padding:.5rem 0}::slotted(mdui-divider[middle]){margin-left:1rem;margin-right:1.5rem}`;

// node_modules/mdui/components/list/list.js
var List = class List2 extends MduiElement {
  render() {
    return ke`<slot></slot>`;
  }
};
List.styles = [componentStyle, listStyle];
List = __decorate([
  t2("mdui-list")
], List);

// node_modules/@mdui/shared/icons/arrow-right.js
var IconArrowRight = class IconArrowRight2 extends h3 {
  render() {
    return svgTag('<path d="m10 17 5-5-5-5v10z"/>');
  }
};
IconArrowRight.styles = style10;
IconArrowRight = __decorate([
  t2("mdui-icon-arrow-right")
], IconArrowRight);

// node_modules/mdui/components/menu/menu-item-style.js
var menuItemStyle = i`:host{position:relative;display:block}:host([selected]){background-color:rgba(var(--mdui-color-primary),12%)}:host([disabled]){pointer-events:none}.container{cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host([disabled]) .container{cursor:default;opacity:.38}.preset{display:flex;align-items:center;text-decoration:none;height:3rem;padding:0 .75rem}.preset.dense{height:2rem}.label-container{flex:1 1 100%;min-width:0}.label{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking)}.end-icon,.end-text,.icon,.selected-icon{display:none;flex:0 0 auto;color:rgb(var(--mdui-color-on-surface-variant))}.has-end-icon .end-icon,.has-end-text .end-text,.has-icon .icon,.has-icon .selected-icon{display:flex}.end-icon,.icon,.selected-icon{font-size:1.5rem}.end-icon::slotted(mdui-avatar),.icon::slotted(mdui-avatar),.selected-icon::slotted(mdui-avatar){width:1.5rem;height:1.5rem}.dense .end-icon,.dense .icon,.dense .selected-icon{font-size:1.125rem}.dense .end-icon::slotted(mdui-avatar),.dense .icon::slotted(mdui-avatar),.dense .selected-icon::slotted(mdui-avatar){width:1.125rem;height:1.125rem}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}.end-text{font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.icon,.selected-icon{margin-right:.75rem}.end-icon,.end-text{margin-left:.75rem}.arrow-right{color:rgb(var(--mdui-color-on-surface))}.submenu{--shape-corner:var(--mdui-shape-corner-extra-small);display:block;position:absolute;z-index:1;border-radius:var(--shape-corner);background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2);min-width:7rem;max-width:17.5rem;padding-top:.5rem;padding-bottom:.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.submenu::slotted(mdui-divider){margin-top:.5rem;margin-bottom:.5rem}`;

// node_modules/mdui/components/menu/menu-item.js
var MenuItem = class MenuItem2 extends AnchorMixin(RippleMixin(FocusableMixin(MduiElement))) {
  constructor() {
    super();
    this.disabled = false;
    this.submenuOpen = false;
    this.selected = false;
    this.dense = false;
    this.focusable = false;
    this.key = uniqueId();
    this.rippleRef = ii();
    this.containerRef = ii();
    this.submenuRef = ii();
    this.hasSlotController = new HasSlotController(this, "[default]", "icon", "end-icon", "end-text", "submenu", "custom");
    this.definedController = new DefinedController(this, {
      relatedElements: [""]
    });
    this.onOuterClick = this.onOuterClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  get focusDisabled() {
    return this.disabled || !this.focusable;
  }
  get focusElement() {
    return this.href && !this.disabled ? this.containerRef.value : this;
  }
  get rippleDisabled() {
    return this.disabled;
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get hasSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  async onOpenChange() {
    const hasUpdated = this.hasUpdated;
    if (!this.submenuOpen && !hasUpdated) {
      return;
    }
    await this.definedController.whenDefined();
    if (!hasUpdated) {
      await this.updateComplete;
    }
    const easingLinear = getEasing(this, "linear");
    const easingEmphasizedDecelerate = getEasing(this, "emphasized-decelerate");
    const easingEmphasizedAccelerate = getEasing(this, "emphasized-accelerate");
    if (this.submenuOpen) {
      if (hasUpdated) {
        const eventProceeded = this.emit("submenu-open", { cancelable: true });
        if (!eventProceeded) {
          return;
        }
      }
      const duration = getDuration(this, "medium4");
      await stopAnimations(this.submenuRef.value);
      this.submenuRef.value.hidden = false;
      this.updateSubmenuPositioner();
      await Promise.all([
        animateTo(this.submenuRef.value, [{ transform: "scaleY(0.45)" }, { transform: "scaleY(1)" }], {
          duration: hasUpdated ? duration : 0,
          easing: easingEmphasizedDecelerate
        }),
        animateTo(this.submenuRef.value, [{ opacity: 0 }, { opacity: 1, offset: 0.125 }, { opacity: 1 }], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        })
      ]);
      if (hasUpdated) {
        this.emit("submenu-opened");
      }
    } else {
      const eventProceeded = this.emit("submenu-close", { cancelable: true });
      if (!eventProceeded) {
        return;
      }
      const duration = getDuration(this, "short4");
      await stopAnimations(this.submenuRef.value);
      await Promise.all([
        animateTo(this.submenuRef.value, [{ transform: "scaleY(1)" }, { transform: "scaleY(0.45)" }], { duration, easing: easingEmphasizedAccelerate }),
        animateTo(this.submenuRef.value, [{ opacity: 1 }, { opacity: 1, offset: 0.875 }, { opacity: 0 }], { duration, easing: easingLinear })
      ]);
      if (this.submenuRef.value) {
        this.submenuRef.value.hidden = true;
      }
      this.emit("submenu-closed");
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.definedController.whenDefined().then(() => {
      document.addEventListener("pointerdown", this.onOuterClick);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("pointerdown", this.onOuterClick);
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.definedController.whenDefined().then(() => {
      this.addEventListener("focus", this.onFocus);
      this.addEventListener("blur", this.onBlur);
      this.addEventListener("click", this.onClick);
      this.addEventListener("keydown", this.onKeydown);
      this.addEventListener("mouseenter", this.onMouseEnter);
      this.addEventListener("mouseleave", this.onMouseLeave);
    });
  }
  render() {
    const hasSubmenu = this.hasSubmenu;
    const hasCustomSlot = this.hasSlotController.test("custom");
    const hasEndIconSlot = this.hasSlotController.test("end-icon");
    const useDefaultEndIcon = !this.endIcon && hasSubmenu && !hasEndIconSlot;
    const hasEndIcon = this.endIcon || hasSubmenu || hasEndIconSlot;
    const hasIcon = !isUndefined(this.icon) || this.selects === "single" || this.selects === "multiple" || this.hasSlotController.test("icon");
    const hasEndText = !!this.endText || this.hasSlotController.test("end-text");
    const className2 = cc({
      container: true,
      dense: this.dense,
      preset: !hasCustomSlot,
      "has-icon": hasIcon,
      "has-end-text": hasEndText,
      "has-end-icon": hasEndIcon
    });
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.href && !this.disabled ? this.renderAnchor({
      part: "container",
      className: className2,
      content: this.renderInner(useDefaultEndIcon, hasIcon),
      refDirective: Kt(this.containerRef),
      tabIndex: this.focusable ? 0 : -1
    }) : ke`<div part="container" ${Kt(this.containerRef)} class="${className2}">${this.renderInner(useDefaultEndIcon, hasIcon)}</div>`} ${nn(hasSubmenu, () => ke`<slot name="submenu" ${Kt(this.submenuRef)} part="submenu" class="submenu" hidden></slot>`)}`;
  }
  /**
   * 点击子菜单外面的区域，关闭子菜单
   */
  onOuterClick(event) {
    if (!this.disabled && this.submenuOpen && this !== event.target && !$.contains(this, event.target)) {
      this.submenuOpen = false;
    }
  }
  hasTrigger(trigger) {
    return this.submenuTrigger ? this.submenuTrigger.split(" ").includes(trigger) : false;
  }
  onFocus() {
    if (this.disabled || this.submenuOpen || !this.hasTrigger("focus") || !this.hasSubmenu) {
      return;
    }
    this.submenuOpen = true;
  }
  onBlur() {
    if (this.disabled || !this.submenuOpen || !this.hasTrigger("focus") || !this.hasSubmenu) {
      return;
    }
    this.submenuOpen = false;
  }
  onClick(event) {
    if (this.disabled || event.button) {
      return;
    }
    if (!this.hasTrigger("click") || event.target !== this || !this.hasSubmenu) {
      return;
    }
    if (this.submenuOpen && (this.hasTrigger("hover") || this.hasTrigger("focus"))) {
      return;
    }
    this.submenuOpen = !this.submenuOpen;
  }
  onKeydown(event) {
    if (this.disabled || !this.hasSubmenu) {
      return;
    }
    if (!this.submenuOpen && event.key === "Enter") {
      event.stopPropagation();
      this.submenuOpen = true;
    }
    if (this.submenuOpen && event.key === "Escape") {
      event.stopPropagation();
      this.submenuOpen = false;
    }
  }
  onMouseEnter() {
    if (this.disabled || !this.hasTrigger("hover") || !this.hasSubmenu) {
      return;
    }
    window.clearTimeout(this.submenuCloseTimeout);
    if (this.submenuOpenDelay) {
      this.submenuOpenTimeout = window.setTimeout(() => {
        this.submenuOpen = true;
      }, this.submenuOpenDelay);
    } else {
      this.submenuOpen = true;
    }
  }
  onMouseLeave() {
    if (this.disabled || !this.hasTrigger("hover") || !this.hasSubmenu) {
      return;
    }
    window.clearTimeout(this.submenuOpenTimeout);
    this.submenuCloseTimeout = window.setTimeout(() => {
      this.submenuOpen = false;
    }, this.submenuCloseDelay || 50);
  }
  // 更新子菜单的位置
  updateSubmenuPositioner() {
    const $window = $(window);
    const $submenu = $(this.submenuRef.value);
    const itemRect = this.getBoundingClientRect();
    const submenuWidth = $submenu.innerWidth();
    const submenuHeight = $submenu.innerHeight();
    const screenMargin = 8;
    let placementX = "bottom";
    let placementY = "right";
    if ($window.height() - itemRect.top > submenuHeight + screenMargin) {
      placementX = "bottom";
    } else if (itemRect.top + itemRect.height > submenuHeight + screenMargin) {
      placementX = "top";
    }
    if ($window.width() - itemRect.left - itemRect.width > submenuWidth + screenMargin) {
      placementY = "right";
    } else if (itemRect.left > submenuWidth + screenMargin) {
      placementY = "left";
    }
    $(this.submenuRef.value).css({
      top: placementX === "bottom" ? 0 : itemRect.height - submenuHeight,
      left: placementY === "right" ? itemRect.width : -submenuWidth,
      transformOrigin: [
        placementY === "right" ? 0 : "100%",
        placementX === "bottom" ? 0 : "100%"
      ].join(" ")
    });
  }
  renderInner(useDefaultEndIcon, hasIcon) {
    return ke`<slot name="custom">${this.selected ? ke`<slot name="selected-icon" part="selected-icon" class="selected-icon">${this.selectedIcon ? ke`<mdui-icon name="${this.selectedIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-check class="i"></mdui-icon-check>`}</slot>` : ke`<slot name="icon" part="icon" class="icon">${hasIcon ? ke`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : nothingTemplate}</slot>`}<div class="label-container"><slot part="label" class="label"></slot></div><slot name="end-text" part="end-text" class="end-text">${this.endText}</slot>${useDefaultEndIcon ? ke`<mdui-icon-arrow-right part="end-icon" class="end-icon arrow-right"></mdui-icon-arrow-right>` : ke`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ke`<mdui-icon name="${this.endIcon}"></mdui-icon>` : nothingTemplate}</slot>`}</slot>`;
  }
};
MenuItem.styles = [
  componentStyle,
  menuItemStyle
];
__decorate([
  n4({ reflect: true })
], MenuItem.prototype, "value", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], MenuItem.prototype, "disabled", void 0);
__decorate([
  n4({ reflect: true })
], MenuItem.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], MenuItem.prototype, "endIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-text" })
], MenuItem.prototype, "endText", void 0);
__decorate([
  n4({ reflect: true, attribute: "selected-icon" })
], MenuItem.prototype, "selectedIcon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "submenu-open"
  })
], MenuItem.prototype, "submenuOpen", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], MenuItem.prototype, "selected", void 0);
__decorate([
  r4()
], MenuItem.prototype, "dense", void 0);
__decorate([
  r4()
], MenuItem.prototype, "selects", void 0);
__decorate([
  r4()
], MenuItem.prototype, "submenuTrigger", void 0);
__decorate([
  r4()
], MenuItem.prototype, "submenuOpenDelay", void 0);
__decorate([
  r4()
], MenuItem.prototype, "submenuCloseDelay", void 0);
__decorate([
  r4()
], MenuItem.prototype, "focusable", void 0);
__decorate([
  watch("submenuOpen")
], MenuItem.prototype, "onOpenChange", null);
MenuItem = __decorate([
  t2("mdui-menu-item")
], MenuItem);

// node_modules/mdui/components/menu/menu-style.js
var menuStyle = i`:host{--shape-corner:var(--mdui-shape-corner-extra-small);position:relative;display:block;border-radius:var(--shape-corner);background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2);min-width:7rem;max-width:17.5rem;padding-top:.5rem;padding-bottom:.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}::slotted(mdui-divider){margin-top:.5rem;margin-bottom:.5rem}`;

// node_modules/mdui/components/menu/menu.js
var Menu = class Menu2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.dense = false;
    this.submenuTrigger = "click hover";
    this.submenuOpenDelay = 200;
    this.submenuCloseDelay = 200;
    this.selectedKeys = [];
    this.isInitial = true;
    this.lastActiveItems = [];
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-menu-item"]
    });
  }
  // 菜单项元素（包含子菜单中的菜单项）
  get items() {
    return $(this.childrenItems).find("mdui-menu-item").add(this.childrenItems).get();
  }
  // 菜单项元素（不包含已禁用的，包含子菜单中的菜单项）
  get itemsEnabled() {
    return this.items.filter((item) => !item.disabled);
  }
  // 当前菜单是否为单选
  get isSingle() {
    return this.selects === "single";
  }
  // 当前菜单是否为多选
  get isMultiple() {
    return this.selects === "multiple";
  }
  // 当前菜单是否可选择
  get isSelectable() {
    return this.isSingle || this.isMultiple;
  }
  // 当前菜单是否为子菜单
  get isSubmenu() {
    return !$(this).parent().length;
  }
  // 最深层级的子菜单中，最后交互过的 menu-item
  get lastActiveItem() {
    const index = this.lastActiveItems.length ? this.lastActiveItems.length - 1 : 0;
    return this.lastActiveItems[index];
  }
  set lastActiveItem(item) {
    const index = this.lastActiveItems.length ? this.lastActiveItems.length - 1 : 0;
    this.lastActiveItems[index] = item;
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.items.forEach((item) => {
      item.dense = this.dense;
      item.selects = this.selects;
      item.submenuTrigger = this.submenuTrigger;
      item.submenuOpenDelay = this.submenuOpenDelay;
      item.submenuCloseDelay = this.submenuCloseDelay;
    });
  }
  async onSelectsChange() {
    if (!this.isSelectable) {
      this.setSelectedKeys([]);
    } else if (this.isSingle) {
      this.setSelectedKeys(this.selectedKeys.slice(0, 1));
    }
    await this.onSelectedKeysChange();
  }
  async onSelectedKeysChange() {
    await this.definedController.whenDefined();
    const values = this.itemsEnabled.filter((item) => this.selectedKeys.includes(item.key)).map((item) => item.value);
    const value = this.isMultiple ? values : values[0] || void 0;
    this.setValue(value);
    if (!this.isInitial) {
      this.emit("change");
    }
  }
  async onValueChange() {
    this.isInitial = !this.hasUpdated;
    await this.definedController.whenDefined();
    if (!this.isSelectable) {
      this.updateSelected();
      return;
    }
    const values = (this.isSingle ? [this.value] : (
      // 多选时，传入的值可能是字符串（通过 attribute 属性设置）；或字符串数组（通过 property 属性设置）
      isString(this.value) ? [this.value] : this.value
    )).filter((i4) => i4);
    if (!values.length) {
      this.setSelectedKeys([]);
    } else if (this.isSingle) {
      const firstItem = this.itemsEnabled.find((item) => item.value === values[0]);
      this.setSelectedKeys(firstItem ? [firstItem.key] : []);
    } else if (this.isMultiple) {
      this.setSelectedKeys(this.itemsEnabled.filter((item) => values.includes(item.value)).map((item) => item.key));
    }
    this.updateSelected();
    this.updateFocusable();
  }
  /**
   * 将焦点设置在当前元素上
   */
  focus(options) {
    if (this.lastActiveItem) {
      this.focusOne(this.lastActiveItem, options);
    }
  }
  /**
   * 从当前元素中移除焦点
   */
  blur() {
    if (this.lastActiveItem) {
      this.lastActiveItem.blur();
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.definedController.whenDefined().then(() => {
      this.updateFocusable();
      this.lastActiveItem = this.items.find((item) => item.focusable);
    });
    this.addEventListener("submenu-open", (e5) => {
      const $parentItem = $(e5.target);
      const submenuItemsEnabled = $parentItem.children("mdui-menu-item:not([disabled])").get();
      const submenuLevel = $parentItem.parents("mdui-menu-item").length + 1;
      if (submenuItemsEnabled.length) {
        this.lastActiveItems[submenuLevel] = submenuItemsEnabled[0];
        this.updateFocusable();
        this.focusOne(this.lastActiveItems[submenuLevel]);
      }
    });
    this.addEventListener("submenu-close", (e5) => {
      const $parentItem = $(e5.target);
      const submenuLevel = $parentItem.parents("mdui-menu-item").length + 1;
      if (this.lastActiveItems.length - 1 === submenuLevel) {
        this.lastActiveItems.pop();
        this.updateFocusable();
        if (this.lastActiveItems[submenuLevel - 1]) {
          this.focusOne(this.lastActiveItems[submenuLevel - 1]);
        }
      }
    });
  }
  render() {
    return ke`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}" @keydown="${this.onKeyDown}"></slot>`;
  }
  setSelectedKeys(selectedKeys) {
    if (!arraysEqualIgnoreOrder(this.selectedKeys, selectedKeys)) {
      this.selectedKeys = selectedKeys;
    }
  }
  setValue(value) {
    if (this.isSingle || isUndefined(this.value) || isUndefined(value)) {
      this.value = value;
    } else if (!arraysEqualIgnoreOrder(this.value, value)) {
      this.value = value;
    }
  }
  // 获取和指定菜单项同级的所有菜单项
  getSiblingsItems(item, onlyEnabled = false) {
    return $(item).parent().children(`mdui-menu-item${onlyEnabled ? ":not([disabled])" : ""}`).get();
  }
  // 更新 menu-item 的可聚焦状态
  updateFocusable() {
    if (this.lastActiveItem) {
      this.items.forEach((item) => {
        item.focusable = item.key === this.lastActiveItem.key;
      });
      return;
    }
    if (!this.selectedKeys.length) {
      this.itemsEnabled.forEach((item, index) => {
        item.focusable = !index;
      });
      return;
    }
    if (this.isSingle) {
      this.items.forEach((item) => {
        item.focusable = this.selectedKeys.includes(item.key);
      });
      return;
    }
    if (this.isMultiple) {
      const focusableItem = this.items.find((item) => item.focusable);
      if (!focusableItem?.key || !this.selectedKeys.includes(focusableItem.key)) {
        this.itemsEnabled.filter((item) => this.selectedKeys.includes(item.key)).forEach((item, index) => item.focusable = !index);
      }
    }
  }
  updateSelected() {
    this.items.forEach((item) => {
      item.selected = this.selectedKeys.includes(item.key);
    });
  }
  // 切换一个菜单项的选中状态
  selectOne(item) {
    if (this.isMultiple) {
      const selectedKeys = [...this.selectedKeys];
      if (selectedKeys.includes(item.key)) {
        selectedKeys.splice(selectedKeys.indexOf(item.key), 1);
      } else {
        selectedKeys.push(item.key);
      }
      this.setSelectedKeys(selectedKeys);
    }
    if (this.isSingle) {
      if (this.selectedKeys.includes(item.key)) {
        this.setSelectedKeys([]);
      } else {
        this.setSelectedKeys([item.key]);
      }
    }
    this.isInitial = false;
    this.updateSelected();
  }
  // 使一个 menu-item 可聚焦
  async focusableOne(item) {
    this.items.forEach((_item) => _item.focusable = _item.key === item.key);
    await delay();
  }
  // 聚焦一个 menu-item
  focusOne(item, options) {
    item.focus(options);
  }
  async onClick(event) {
    if (!this.definedController.isDefined()) {
      return;
    }
    if (this.isSubmenu) {
      return;
    }
    if (event.button) {
      return;
    }
    const target = event.target;
    const item = target.closest("mdui-menu-item");
    if (!item || item.disabled) {
      return;
    }
    this.lastActiveItem = item;
    if (this.isSelectable && item.value) {
      this.selectOne(item);
    }
    await this.focusableOne(item);
    this.focusOne(item);
  }
  async onKeyDown(event) {
    if (!this.definedController.isDefined()) {
      return;
    }
    if (this.isSubmenu) {
      return;
    }
    const item = event.target;
    if (event.key === "Enter") {
      event.preventDefault();
      item.click();
    }
    if (event.key === " ") {
      event.preventDefault();
      if (this.isSelectable && item.value) {
        this.selectOne(item);
        await this.focusableOne(item);
        this.focusOne(item);
      }
    }
    if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const items = this.getSiblingsItems(item, true);
      const activeItem = items.find((item2) => item2.focusable);
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (items.length > 0) {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }
        this.lastActiveItem = items[index];
        await this.focusableOne(items[index]);
        this.focusOne(items[index]);
        return;
      }
    }
  }
};
Menu.styles = [componentStyle, menuStyle];
__decorate([
  n4({ reflect: true })
  // eslint-disable-next-line prettier/prettier
], Menu.prototype, "selects", void 0);
__decorate([
  n4()
], Menu.prototype, "value", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Menu.prototype, "dense", void 0);
__decorate([
  n4({ reflect: true, attribute: "submenu-trigger" })
], Menu.prototype, "submenuTrigger", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "submenu-open-delay" })
], Menu.prototype, "submenuOpenDelay", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "submenu-close-delay" })
], Menu.prototype, "submenuCloseDelay", void 0);
__decorate([
  r4()
], Menu.prototype, "selectedKeys", void 0);
__decorate([
  o4({ flatten: true, selector: "mdui-menu-item" })
], Menu.prototype, "childrenItems", void 0);
__decorate([
  watch("dense"),
  watch("selects"),
  watch("submenuTrigger"),
  watch("submenuOpenDelay"),
  watch("submenuCloseDelay")
], Menu.prototype, "onSlotChange", null);
__decorate([
  watch("selects", true)
], Menu.prototype, "onSelectsChange", null);
__decorate([
  watch("selectedKeys", true)
], Menu.prototype, "onSelectedKeysChange", null);
__decorate([
  watch("value")
], Menu.prototype, "onValueChange", null);
Menu = __decorate([
  t2("mdui-menu")
], Menu);

// node_modules/mdui/components/navigation-bar/navigation-bar-item-style.js
var navigationBarItemStyle = i`:host{--shape-corner-indicator:var(--mdui-shape-corner-full);position:relative;z-index:0;flex:1;overflow:hidden;min-width:3rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;padding-top:.75rem;padding-bottom:.75rem}.container:not(.initial){transition:padding var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}mdui-ripple{z-index:1;left:50%;transform:translateX(-50%);width:4rem;height:2rem;margin-top:.75rem;border-radius:var(--mdui-shape-corner-full)}mdui-ripple:not(.initial){transition:margin-top var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.indicator{position:relative;display:flex;align-items:center;justify-content:center;background-color:transparent;border-radius:var(--shape-corner-indicator);height:2rem;width:2rem}:not(.initial) .indicator{transition:background-color var(--mdui-motion-duration-short1) var(--mdui-motion-easing-standard),width var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.active-icon,.icon{color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}.active-icon mdui-icon,.icon mdui-icon,::slotted([slot=active]),::slotted([slot=icon]){font-size:inherit}.icon{display:flex}.active-icon{display:none}.label{display:flex;align-items:center;height:1rem;color:rgb(var(--mdui-color-on-surface-variant));margin-top:.25rem;margin-bottom:.25rem;font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height)}:not(.initial) .label{transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear)}:host(:not([active])) mdui-ripple.label-visibility-selected,mdui-ripple.label-visibility-unlabeled{margin-top:1.5rem}.container.label-visibility-unlabeled,:host(:not([active])) .container.label-visibility-selected{padding-top:1.5rem;padding-bottom:0}.container.label-visibility-unlabeled .label,:host(:not([active])) .container.label-visibility-selected .label{opacity:0}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]) .indicator{width:4rem;background-color:rgb(var(--mdui-color-secondary-container))}:host([active]) .active-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([active]) .has-active-icon .active-icon{display:flex}:host([active]) .has-active-icon .icon{display:none}:host([active]) .label{color:rgb(var(--mdui-color-on-surface))}`;

// node_modules/mdui/components/navigation-bar/navigation-bar-item.js
var NavigationBarItem = class NavigationBarItem2 extends AnchorMixin(RippleMixin(FocusableMixin(MduiElement))) {
  constructor() {
    super(...arguments);
    this.isInitial = true;
    this.active = false;
    this.disabled = false;
    this.key = uniqueId();
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "active-icon");
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.disabled;
  }
  get focusElement() {
    return this.href ? this.renderRoot?.querySelector("._a") : this;
  }
  get focusDisabled() {
    return this.disabled;
  }
  render() {
    const labelVisibilityClassName = cc({
      "label-visibility-selected": this.labelVisibility === "selected",
      "label-visibility-labeled": this.labelVisibility === "labeled",
      "label-visibility-unlabeled": this.labelVisibility === "unlabeled",
      initial: this.isInitial
    });
    const className2 = cc([
      {
        container: true,
        "has-active-icon": this.activeIcon || this.hasSlotController.test("active-icon")
      },
      labelVisibilityClassName
    ]);
    return ke`<mdui-ripple .noRipple="${!this.active || this.noRipple}" class="${labelVisibilityClassName}" ${Kt(this.rippleRef)}></mdui-ripple>${this.href ? this.renderAnchor({
      part: "container",
      className: className2,
      content: this.renderInner()
    }) : ke`<div part="container" class="${className2}">${this.renderInner()}</div>`}`;
  }
  renderInner() {
    return ke`<div part="indicator" class="indicator"><slot name="badge" part="badge" class="badge"></slot><slot name="active-icon" part="active-icon" class="active-icon">${this.activeIcon ? ke`<mdui-icon name="${this.activeIcon}"></mdui-icon>` : nothingTemplate}</slot><slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot></div><slot part="label" class="label"></slot>`;
  }
};
NavigationBarItem.styles = [
  componentStyle,
  navigationBarItemStyle
];
__decorate([
  n4({ reflect: true })
], NavigationBarItem.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "active-icon" })
], NavigationBarItem.prototype, "activeIcon", void 0);
__decorate([
  n4({ reflect: true })
], NavigationBarItem.prototype, "value", void 0);
__decorate([
  r4()
], NavigationBarItem.prototype, "labelVisibility", void 0);
__decorate([
  r4()
], NavigationBarItem.prototype, "isInitial", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationBarItem.prototype, "active", void 0);
__decorate([
  r4()
], NavigationBarItem.prototype, "disabled", void 0);
NavigationBarItem = __decorate([
  t2("mdui-navigation-bar-item")
], NavigationBarItem);

// node_modules/mdui/components/navigation-bar/navigation-bar-style.js
var navigationBarStyle = i`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;right:0;bottom:0;left:0;display:flex;flex:0 0 auto;overflow:hidden;border-radius:var(--shape-corner) var(--shape-corner) 0 0;z-index:var(--z-index);transition-property:transform;transition-duration:var(--mdui-motion-duration-long2);transition-timing-function:var(--mdui-motion-easing-emphasized);height:5rem;background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level2)}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([hide]){transform:translateY(5.625rem);transition-duration:var(--mdui-motion-duration-short4)}`;

// node_modules/mdui/components/navigation-bar/navigation-bar.js
var NavigationBar = class NavigationBar2 extends ScrollBehaviorMixin(LayoutItemBase) {
  constructor() {
    super(...arguments);
    this.hide = false;
    this.labelVisibility = "auto";
    this.activeKey = 0;
    this.isInitial = true;
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-navigation-bar-item"]
    });
  }
  get scrollPaddingPosition() {
    return "bottom";
  }
  get layoutPlacement() {
    return "bottom";
  }
  async onActiveKeyChange() {
    await this.definedController.whenDefined();
    const item = this.items.find((item2) => item2.key === this.activeKey);
    this.value = item?.value;
    if (!this.isInitial) {
      this.emit("change");
    }
  }
  async onValueChange() {
    this.isInitial = !this.hasUpdated;
    await this.definedController.whenDefined();
    const item = this.items.find((item2) => item2.value === this.value);
    this.activeKey = item?.key ?? 0;
    this.updateItems();
  }
  async onLabelVisibilityChange() {
    await this.definedController.whenDefined();
    this.updateItems();
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.addEventListener("transitionend", (event) => {
      if (event.target === this) {
        this.emit(this.hide ? "hidden" : "shown");
      }
    });
  }
  render() {
    return ke`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`;
  }
  /**
   * 滚动行为
   * 当前仅支持 hide 这一个行为，所以不做行为类型判断
   */
  runScrollThreshold(isScrollingUp) {
    if (!isScrollingUp && !this.hide) {
      const eventProceeded = this.emit("hide", { cancelable: true });
      if (eventProceeded) {
        this.hide = true;
      }
    }
    if (isScrollingUp && this.hide) {
      const eventProceeded = this.emit("show", { cancelable: true });
      if (eventProceeded) {
        this.hide = false;
      }
    }
  }
  onClick(event) {
    if (event.button) {
      return;
    }
    const target = event.target;
    const item = target.closest("mdui-navigation-bar-item");
    if (!item) {
      return;
    }
    this.activeKey = item.key;
    this.isInitial = false;
    this.updateItems();
  }
  // 更新 <mdui-navigation-bar-item> 的状态
  updateItems() {
    const items = this.items;
    const labelVisibility = this.labelVisibility === "auto" ? items.length <= 3 ? "labeled" : "selected" : this.labelVisibility;
    items.forEach((item) => {
      item.active = this.activeKey === item.key;
      item.labelVisibility = labelVisibility;
      item.isInitial = this.isInitial;
    });
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.updateItems();
  }
};
NavigationBar.styles = [
  componentStyle,
  navigationBarStyle
];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationBar.prototype, "hide", void 0);
__decorate([
  n4({ reflect: true, attribute: "label-visibility" })
], NavigationBar.prototype, "labelVisibility", void 0);
__decorate([
  n4({ reflect: true })
], NavigationBar.prototype, "value", void 0);
__decorate([
  n4({ reflect: true, attribute: "scroll-behavior" })
], NavigationBar.prototype, "scrollBehavior", void 0);
__decorate([
  r4()
], NavigationBar.prototype, "activeKey", void 0);
__decorate([
  o4({
    selector: "mdui-navigation-bar-item",
    flatten: true
  })
], NavigationBar.prototype, "items", void 0);
__decorate([
  watch("activeKey", true)
], NavigationBar.prototype, "onActiveKeyChange", null);
__decorate([
  watch("value")
], NavigationBar.prototype, "onValueChange", null);
__decorate([
  watch("labelVisibility", true)
], NavigationBar.prototype, "onLabelVisibilityChange", null);
NavigationBar = __decorate([
  t2("mdui-navigation-bar")
], NavigationBar);

// node_modules/@mdui/shared/helpers/breakpoint.js
var breakpoint = (width) => {
  const window2 = getWindow();
  const document3 = getDocument();
  const computedStyle = window2.getComputedStyle(document3.documentElement);
  const containerWidth = isElement(width) ? $(width).innerWidth() : isNumber(width) ? width : $(window2).innerWidth();
  const getBreakpointValue = (breakpoint2) => {
    const width2 = computedStyle.getPropertyValue(`--mdui-breakpoint-${breakpoint2}`).toLowerCase();
    return parseFloat(width2);
  };
  const getNextBreakpoint = (breakpoint2) => {
    switch (breakpoint2) {
      case "xs":
        return "sm";
      case "sm":
        return "md";
      case "md":
        return "lg";
      case "lg":
        return "xl";
      case "xl":
        return "xxl";
    }
  };
  return {
    /**
     * 当前宽度是否大于指定断点值
     * @param breakpoint
     */
    up(breakpoint2) {
      return containerWidth >= getBreakpointValue(breakpoint2);
    },
    /**
     * 当前宽度是否小于指定断点值
     * @param breakpoint
     */
    down(breakpoint2) {
      return containerWidth < getBreakpointValue(breakpoint2);
    },
    /**
     * 当前宽度是否在指定断点值内
     * @param breakpoint
     */
    only(breakpoint2) {
      if (breakpoint2 === "xxl") {
        return this.up(breakpoint2);
      } else {
        return this.up(breakpoint2) && this.down(getNextBreakpoint(breakpoint2));
      }
    },
    /**
     * 当前宽度是否不在指定断点值内
     * @param breakpoint
     */
    not(breakpoint2) {
      return !this.only(breakpoint2);
    },
    /**
     * 当前宽度是否在指定断点值之间
     * @param startBreakpoint
     * @param endBreakpoint
     * @returns
     */
    between(startBreakpoint, endBreakpoint) {
      return this.up(startBreakpoint) && this.down(endBreakpoint);
    }
  };
};

// node_modules/mdui/components/navigation-drawer/style.js
var style18 = i`:host{--shape-corner:var(--mdui-shape-corner-large);--z-index:2200;display:none;position:fixed;top:0;bottom:0;left:0;z-index:1;width:22.5rem}:host([placement=right]){left:initial;right:0}:host([mobile]),:host([modal]){top:0!important;right:0;bottom:0!important;width:initial;z-index:var(--z-index)}:host([placement=right][mobile]),:host([placement=right][modal]){left:0}:host([contained]){position:absolute}.overlay{position:absolute;inset:0;z-index:inherit;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{display:block;position:absolute;top:0;bottom:0;left:0;width:100%;overflow:auto;z-index:inherit;background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level0)}:host([mobile]) .panel,:host([modal]) .panel{border-radius:0 var(--shape-corner) var(--shape-corner) 0;max-width:80%;width:22.5rem;background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([placement=right]) .panel{left:initial;right:0}:host([placement=right][mobile]) .panel,:host([placement=right][modal]) .panel{border-radius:var(--shape-corner) 0 0 var(--shape-corner)}`;

// node_modules/mdui/components/navigation-drawer/index.js
var NavigationDrawer = class NavigationDrawer2 extends LayoutItemBase {
  constructor() {
    super(...arguments);
    this.open = false;
    this.modal = false;
    this.closeOnEsc = false;
    this.closeOnOverlayClick = false;
    this.placement = "left";
    this.contained = false;
    this.mobile = false;
    this.overlayRef = ii();
    this.panelRef = ii();
    this.definedController = new DefinedController(this, {
      needDomReady: true
    });
  }
  get layoutPlacement() {
    return this.placement;
  }
  get lockTarget() {
    return this.contained || this.isParentLayout ? this.parentElement : document.documentElement;
  }
  get isModal() {
    return this.mobile || this.modal;
  }
  // contained 变更后，修改监听尺寸变化的元素。为 true 时，监听父元素；为 false 时，监听 body
  async onContainedChange() {
    await this.definedController.whenDefined();
    this.observeResize?.unobserve();
    this.observeResize = observeResize(this.contained ? this.parentElement : document.documentElement, () => {
      const target = this.contained ? this.parentElement : void 0;
      this.mobile = breakpoint(target).down("md");
      if (this.isParentLayout) {
        this.layoutManager.updateLayout(this, {
          width: this.isModal ? 0 : void 0
        });
      }
    });
  }
  onPlacementChange() {
    if (this.isParentLayout) {
      this.layoutManager.updateLayout(this);
    }
  }
  async onMobileChange() {
    if (!this.open || this.isParentLayout || this.contained) {
      return;
    }
    await this.definedController.whenDefined();
    if (this.isModal) {
      lockScreen(this, this.lockTarget);
      await this.getLockTargetAnimate(false, 0);
    } else {
      unlockScreen(this, this.lockTarget);
      await this.getLockTargetAnimate(true, 0);
    }
  }
  async onOpenChange() {
    let panel = this.panelRef.value;
    let overlay = this.overlayRef.value;
    const isRight = this.placement === "right";
    const easingLinear = getEasing(this, "linear");
    const easingEmphasized = getEasing(this, "emphasized");
    const setLayoutTransition = (duration, easing) => {
      $(this.layoutManager.getItemsAndMain()).css("transition", isNull(duration) ? null : `all ${duration}ms ${easing}`);
    };
    const stopOldAnimations = async () => {
      const elements = [];
      if (this.isModal) {
        elements.push(overlay, panel);
      } else if (!this.isParentLayout) {
        elements.push(this.lockTarget);
      }
      if (this.isParentLayout) {
        const layoutItems = this.layoutManager.getItemsAndMain();
        const layoutIndex = layoutItems.indexOf(this);
        elements.push(...layoutItems.slice(layoutIndex));
      }
      if (!this.isModal && !elements.includes(this)) {
        elements.push(this);
      }
      await Promise.all(elements.map((element) => stopAnimations(element)));
    };
    if (this.open) {
      const hasUpdated = this.hasUpdated;
      if (!hasUpdated) {
        await this.updateComplete;
        panel = this.panelRef.value;
        overlay = this.overlayRef.value;
      }
      if (hasUpdated) {
        const eventProceeded = this.emit("open", { cancelable: true });
        if (!eventProceeded) {
          return;
        }
      }
      await this.definedController.whenDefined();
      this.style.display = "block";
      this.originalTrigger = document.activeElement;
      if (this.isModal) {
        this.modalHelper.activate();
        if (!this.contained) {
          lockScreen(this, this.lockTarget);
        }
      }
      await stopOldAnimations();
      requestAnimationFrame(() => {
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.focus({ preventScroll: true });
        } else {
          panel.focus({ preventScroll: true });
        }
      });
      const duration = getDuration(this, "long2");
      const animations = [];
      if (this.isModal) {
        animations.push(animateTo(overlay, [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1 }], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        }));
      } else if (!this.isParentLayout) {
        animations.push(this.getLockTargetAnimate(true, hasUpdated ? duration : 0));
      }
      if (this.isParentLayout && hasUpdated) {
        setLayoutTransition(duration, easingEmphasized);
        this.layoutManager.updateLayout(this);
      }
      animations.push(animateTo(this.isModal ? panel : this, [
        { transform: `translateX(${isRight ? "" : "-"}100%)` },
        { transform: "translateX(0)" }
      ], {
        duration: hasUpdated ? duration : 0,
        easing: easingEmphasized
      }));
      await Promise.all(animations);
      if (!this.open) {
        return;
      }
      if (this.isParentLayout && hasUpdated) {
        setLayoutTransition(null);
      }
      if (hasUpdated) {
        this.emit("opened");
      }
    } else if (this.hasUpdated) {
      const eventProceeded = this.emit("close", { cancelable: true });
      if (!eventProceeded) {
        return;
      }
      await this.definedController.whenDefined();
      if (this.isModal) {
        this.modalHelper.deactivate();
      }
      await stopOldAnimations();
      const duration = getDuration(this, "short4");
      const animations = [];
      if (this.isModal) {
        animations.push(animateTo(overlay, [{ opacity: 1 }, { opacity: 0 }], {
          duration,
          easing: easingLinear
        }));
      } else if (!this.isParentLayout) {
        animations.push(this.getLockTargetAnimate(false, duration));
      }
      if (this.isParentLayout) {
        setLayoutTransition(duration, easingEmphasized);
        this.layoutManager.updateLayout(this, { width: 0 });
      }
      animations.push(animateTo(this.isModal ? panel : this, [
        { transform: "translateX(0)" },
        { transform: `translateX(${isRight ? "" : "-"}100%)` }
      ], { duration, easing: easingEmphasized }));
      await Promise.all(animations);
      if (this.open) {
        return;
      }
      if (this.isParentLayout) {
        setLayoutTransition(null);
      }
      this.style.display = "none";
      if (this.isModal && !this.contained) {
        unlockScreen(this, this.lockTarget);
      }
      const trigger = this.originalTrigger;
      if (isFunction(trigger?.focus)) {
        setTimeout(() => trigger.focus());
      }
      this.emit("closed");
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.modalHelper = new Modal(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockScreen(this, this.lockTarget);
    this.observeResize?.unobserve();
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.addEventListener("keydown", (event) => {
      if (this.open && this.closeOnEsc && event.key === "Escape" && this.isModal) {
        event.stopPropagation();
        this.open = false;
      }
    });
  }
  render() {
    return ke`${nn(this.isModal, () => ke`<div ${Kt(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}"></div>`)}<slot ${Kt(this.panelRef)} part="panel" class="panel" tabindex="0"></slot>`;
  }
  onOverlayClick() {
    this.emit("overlay-click");
    if (this.closeOnOverlayClick) {
      this.open = false;
    }
  }
  getLockTargetAnimate(open, duration) {
    const paddingName = this.placement === "right" ? "paddingRight" : "paddingLeft";
    const panelWidth = $(this.panelRef.value).innerWidth() + "px";
    return animateTo(this.lockTarget, [
      { [paddingName]: open ? 0 : panelWidth },
      { [paddingName]: open ? panelWidth : 0 }
    ], {
      duration,
      easing: getEasing(this, "emphasized"),
      fill: "forwards"
    });
  }
};
NavigationDrawer.styles = [componentStyle, style18];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationDrawer.prototype, "open", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationDrawer.prototype, "modal", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "close-on-esc"
  })
], NavigationDrawer.prototype, "closeOnEsc", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "close-on-overlay-click"
  })
], NavigationDrawer.prototype, "closeOnOverlayClick", void 0);
__decorate([
  n4({ reflect: true })
  // eslint-disable-next-line prettier/prettier
], NavigationDrawer.prototype, "placement", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationDrawer.prototype, "contained", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationDrawer.prototype, "mobile", void 0);
__decorate([
  watch("contained")
], NavigationDrawer.prototype, "onContainedChange", null);
__decorate([
  watch("placement", true)
], NavigationDrawer.prototype, "onPlacementChange", null);
__decorate([
  watch("mobile", true),
  watch("modal", true)
], NavigationDrawer.prototype, "onMobileChange", null);
__decorate([
  watch("open")
], NavigationDrawer.prototype, "onOpenChange", null);
NavigationDrawer = __decorate([
  t2("mdui-navigation-drawer")
], NavigationDrawer);

// node_modules/mdui/components/navigation-rail/navigation-rail-style.js
var navigationRailStyle = i`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;top:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;border-radius:0 var(--shape-corner) var(--shape-corner) 0;z-index:var(--z-index);width:5rem;background-color:rgb(var(--mdui-color-surface));padding:.375rem .75rem}:host([contained]){position:absolute}:host([divider]){border-right:.0625rem solid rgb(var(--mdui-color-surface-variant));width:5.0625rem}:host([placement=right]){left:initial;right:0;border-radius:var(--shape-corner) 0 0 var(--shape-corner)}:host([placement=right][divider]){border-right:none;border-left:.0625rem solid rgb(var(--mdui-color-surface-variant))}.bottom,.items,.top{display:flex;flex-direction:column;align-items:center;width:100%}.top{margin-bottom:1.75rem}.bottom{margin-top:1.75rem}::slotted([slot=bottom]),::slotted([slot=top]),::slotted(mdui-navigation-rail-item){margin-top:.375rem;margin-bottom:.375rem}:host([alignment=start]) .top-spacer{flex-grow:0}:host([alignment=start]) .bottom-spacer{flex-grow:1}:host([alignment=end]) .top-spacer{flex-grow:1}:host([alignment=end]) .bottom-spacer{flex-grow:0}:host([alignment=center]){justify-content:center}:host([alignment=center]) .bottom,:host([alignment=center]) .top{position:absolute}:host([alignment=center]) .top{top:.375rem}:host([alignment=center]) .bottom{bottom:.375rem}`;

// node_modules/mdui/components/navigation-rail/navigation-rail.js
var NavigationRail = class NavigationRail2 extends LayoutItemBase {
  constructor() {
    super(...arguments);
    this.placement = "left";
    this.alignment = "start";
    this.contained = false;
    this.divider = false;
    this.activeKey = 0;
    this.hasSlotController = new HasSlotController(this, "top", "bottom");
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-navigation-rail-item"]
    });
    this.isInitial = true;
  }
  get layoutPlacement() {
    return this.placement;
  }
  get parentTarget() {
    return this.contained || this.isParentLayout ? this.parentElement : document.body;
  }
  get isRight() {
    return this.placement === "right";
  }
  get paddingValue() {
    return ["fixed", "absolute"].includes($(this).css("position")) ? this.offsetWidth : void 0;
  }
  async onActiveKeyChange() {
    await this.definedController.whenDefined();
    const item = this.items.find((item2) => item2.key === this.activeKey);
    this.value = item?.value;
    if (!this.isInitial) {
      this.emit("change");
    }
  }
  async onValueChange() {
    this.isInitial = !this.hasUpdated;
    await this.definedController.whenDefined();
    const item = this.items.find((item2) => item2.value === this.value);
    this.activeKey = item?.key ?? 0;
    this.updateItems();
  }
  async onContainedChange() {
    if (this.isParentLayout) {
      return;
    }
    await this.definedController.whenDefined();
    $(document.body).css({
      paddingLeft: this.contained || this.isRight ? null : this.paddingValue,
      paddingRight: this.contained || !this.isRight ? null : this.paddingValue
    });
    $(this.parentElement).css({
      paddingLeft: this.contained && !this.isRight ? this.paddingValue : null,
      paddingRight: this.contained && this.isRight ? this.paddingValue : null
    });
  }
  async onPlacementChange() {
    await this.definedController.whenDefined();
    this.layoutManager?.updateLayout(this);
    this.items.forEach((item) => {
      item.placement = this.placement;
    });
    if (!this.isParentLayout) {
      $(this.parentTarget).css({
        paddingLeft: this.isRight ? null : this.paddingValue,
        paddingRight: this.isRight ? this.paddingValue : null
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.isParentLayout) {
      this.definedController.whenDefined().then(() => {
        $(this.parentTarget).css({
          paddingLeft: this.isRight ? null : this.paddingValue,
          paddingRight: this.isRight ? this.paddingValue : null
        });
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (!this.isParentLayout && this.definedController.isDefined()) {
      $(this.parentTarget).css({
        paddingLeft: this.isRight ? void 0 : null,
        paddingRight: this.isRight ? null : void 0
      });
    }
  }
  render() {
    const hasTopSlot = this.hasSlotController.test("top");
    const hasBottomSlot = this.hasSlotController.test("bottom");
    return ke`${nn(hasTopSlot, () => ke`<slot name="top" part="top" class="top"></slot>`)} <span class="top-spacer"></span><slot part="items" class="items" @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot><span class="bottom-spacer"></span> ${nn(hasBottomSlot, () => ke`<slot name="bottom" part="bottom" class="bottom"></slot>`)}`;
  }
  onClick(event) {
    if (event.button) {
      return;
    }
    const target = event.target;
    const item = target.closest("mdui-navigation-rail-item");
    if (!item) {
      return;
    }
    this.activeKey = item.key;
    this.isInitial = false;
    this.updateItems();
  }
  updateItems() {
    this.items.forEach((item) => {
      item.active = this.activeKey === item.key;
      item.placement = this.placement;
      item.isInitial = this.isInitial;
    });
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.updateItems();
  }
};
NavigationRail.styles = [
  componentStyle,
  navigationRailStyle
];
__decorate([
  n4({ reflect: true })
], NavigationRail.prototype, "value", void 0);
__decorate([
  n4({ reflect: true })
  // eslint-disable-next-line prettier/prettier
], NavigationRail.prototype, "placement", void 0);
__decorate([
  n4({ reflect: true })
], NavigationRail.prototype, "alignment", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationRail.prototype, "contained", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationRail.prototype, "divider", void 0);
__decorate([
  r4()
], NavigationRail.prototype, "activeKey", void 0);
__decorate([
  o4({
    selector: "mdui-navigation-rail-item",
    flatten: true
  })
], NavigationRail.prototype, "items", void 0);
__decorate([
  watch("activeKey", true)
], NavigationRail.prototype, "onActiveKeyChange", null);
__decorate([
  watch("value")
], NavigationRail.prototype, "onValueChange", null);
__decorate([
  watch("contained", true)
], NavigationRail.prototype, "onContainedChange", null);
__decorate([
  watch("placement", true)
], NavigationRail.prototype, "onPlacementChange", null);
NavigationRail = __decorate([
  t2("mdui-navigation-rail")
], NavigationRail);

// node_modules/mdui/components/navigation-rail/navigation-rail-item-style.js
var navigationRailItemStyle = i`:host{--shape-corner-indicator:var(--mdui-shape-corner-full);position:relative;z-index:0;width:100%;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.container{display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;height:3.5rem}.container:not(.initial){transition:padding var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}mdui-ripple{z-index:1;width:3.5rem;height:2rem;border-radius:var(--mdui-shape-corner-full)}.container:not(.has-label)+mdui-ripple{height:3.5rem}.indicator{position:relative;display:flex;align-items:center;justify-content:center;background-color:transparent;border-radius:var(--shape-corner-indicator);height:2rem;width:2rem}:not(.initial) .indicator{transition:background-color var(--mdui-motion-duration-short1) var(--mdui-motion-easing-standard),width var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard),height var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}.placement-right::slotted([slot=badge]){transform:translate(-50%,-50%)}::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.placement-right::slotted([slot=badge][variant=small]){transform:translate(-.5625rem,-.5625rem)}.active-icon,.icon{color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}.active-icon mdui-icon,.icon mdui-icon,::slotted([slot=active-icon]),::slotted([slot=icon]){font-size:inherit}.icon{display:flex}.active-icon{display:none}.label{display:flex;align-items:center;height:1rem;color:rgb(var(--mdui-color-on-surface-variant));margin-top:.25rem;margin-bottom:.25rem;font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height)}:not(.initial) .label{transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear)}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]) .indicator{width:3.5rem;background-color:rgb(var(--mdui-color-secondary-container))}:host([active]) :not(.has-label) .indicator{height:3.5rem}:host([active]) .active-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([active]) .has-active-icon .active-icon{display:flex}:host([active]) .has-active-icon .icon{display:none}:host([active]) .label{color:rgb(var(--mdui-color-on-surface))}`;

// node_modules/mdui/components/navigation-rail/navigation-rail-item.js
var NavigationRailItem = class NavigationRailItem2 extends AnchorMixin(RippleMixin(FocusableMixin(MduiElement))) {
  constructor() {
    super(...arguments);
    this.active = false;
    this.isInitial = true;
    this.placement = "left";
    this.disabled = false;
    this.key = uniqueId();
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "[default]", "active-icon");
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.disabled;
  }
  get focusElement() {
    return this.href ? this.renderRoot?.querySelector("._a") : this;
  }
  get focusDisabled() {
    return this.disabled;
  }
  render() {
    const hasDefaultSlot = this.hasSlotController.test("[default]");
    const className2 = cc({
      container: true,
      "has-label": hasDefaultSlot,
      "has-active-icon": this.activeIcon || this.hasSlotController.test("active-icon"),
      initial: this.isInitial
    });
    return ke`${this.href ? this.renderAnchor({
      part: "container",
      className: className2,
      content: this.renderInner(hasDefaultSlot)
    }) : ke`<div part="container" class="${className2}">${this.renderInner(hasDefaultSlot)}</div>`}<mdui-ripple .noRipple="${!this.active || this.noRipple}" ${Kt(this.rippleRef)}></mdui-ripple>`;
  }
  renderInner(hasDefaultSlot) {
    return ke`<div part="indicator" class="indicator"><slot name="badge" part="badge" class="${Rt({
      badge: true,
      "placement-right": this.placement === "right"
    })}"></slot><slot name="active-icon" part="active-icon" class="active-icon">${this.activeIcon ? ke`<mdui-icon name="${this.activeIcon}"></mdui-icon>` : nothingTemplate}</slot><slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot></div>${hasDefaultSlot ? ke`<slot part="label" class="label"></slot>` : D}`;
  }
};
NavigationRailItem.styles = [
  componentStyle,
  navigationRailItemStyle
];
__decorate([
  n4({ reflect: true })
], NavigationRailItem.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "active-icon" })
], NavigationRailItem.prototype, "activeIcon", void 0);
__decorate([
  n4({ reflect: true })
], NavigationRailItem.prototype, "value", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], NavigationRailItem.prototype, "active", void 0);
__decorate([
  r4()
], NavigationRailItem.prototype, "isInitial", void 0);
__decorate([
  r4()
], NavigationRailItem.prototype, "placement", void 0);
__decorate([
  r4()
], NavigationRailItem.prototype, "disabled", void 0);
NavigationRailItem = __decorate([
  t2("mdui-navigation-rail-item")
], NavigationRailItem);

// node_modules/@mdui/shared/icons/circle.js
var IconCircle = class IconCircle2 extends h3 {
  render() {
    return svgTag('<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>');
  }
};
IconCircle.styles = style10;
IconCircle = __decorate([
  t2("mdui-icon-circle")
], IconCircle);

// node_modules/@mdui/shared/icons/radio-button-unchecked.js
var IconRadioButtonUnchecked = class IconRadioButtonUnchecked2 extends h3 {
  render() {
    return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>');
  }
};
IconRadioButtonUnchecked.styles = style10;
IconRadioButtonUnchecked = __decorate([
  t2("mdui-icon-radio-button-unchecked")
], IconRadioButtonUnchecked);

// node_modules/mdui/components/radio/radio-style.js
var radioStyle = i`:host{position:relative;display:inline-flex;align-items:center;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none;border-radius:.125rem;font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.icon{display:flex;position:absolute;font-size:1.5rem}:not(.initial) .icon{transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard)}.unchecked-icon{transition-property:color;color:rgb(var(--mdui-color-on-surface-variant))}:host([focused]) .unchecked-icon,:host([hover]) .unchecked-icon,:host([pressed]) .unchecked-icon{color:rgb(var(--mdui-color-on-surface))}.checked-icon{opacity:0;transform:scale(.2);transition-property:color,opacity,transform;color:rgb(var(--mdui-color-primary))}.icon .i,::slotted([slot=checked-icon]),::slotted([slot=unchecked-icon]){color:inherit;font-size:inherit}i{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;border-radius:50%;width:2.5rem;height:2.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.label{display:flex;width:100%;padding-top:.625rem;padding-bottom:.625rem;color:rgb(var(--mdui-color-on-surface))}.label:not(.initial){transition:color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}:host([checked]) i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]) .icon{color:rgb(var(--mdui-color-primary))}:host([checked]) .checked-icon{opacity:1;transform:scale(.5)}i.invalid{--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}i.invalid .icon{color:rgb(var(--mdui-color-error))}.label.invalid{color:rgb(var(--mdui-color-error))}:host([disabled]),:host([group-disabled]){cursor:default;pointer-events:none}:host([disabled]) .icon,:host([group-disabled]) .icon{color:rgba(var(--mdui-color-on-surface),38%)}:host([disabled]) .label,:host([group-disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}`;

// node_modules/mdui/components/radio/radio.js
var Radio = class Radio2 extends RippleMixin(FocusableMixin(MduiElement)) {
  constructor() {
    super(...arguments);
    this.value = "";
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
    this.groupDisabled = false;
    this.focusable = true;
    this.isInitial = true;
    this.rippleRef = ii();
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.isDisabled();
  }
  get focusElement() {
    return this;
  }
  get focusDisabled() {
    return this.isDisabled() || !this.focusable;
  }
  onCheckedChange() {
    this.emit("change");
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.addEventListener("click", () => {
      if (!this.isDisabled()) {
        this.checked = true;
      }
    });
  }
  render() {
    const className2 = Rt({
      invalid: this.invalid,
      initial: this.isInitial
    });
    return ke`<i part="control" class="${className2}"><mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><slot name="unchecked-icon" part="unchecked-icon" class="icon unchecked-icon">${this.uncheckedIcon ? ke`<mdui-icon name="${this.uncheckedIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-radio-button-unchecked class="i"></mdui-icon-radio-button-unchecked>`}</slot><slot name="checked-icon" part="checked-icon" class="icon checked-icon">${this.checkedIcon ? ke`<mdui-icon name="${this.checkedIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-circle class="i"></mdui-icon-circle>`}</slot></i><slot part="label" class="label ${className2}"></slot>`;
  }
  isDisabled() {
    return this.disabled || this.groupDisabled;
  }
};
Radio.styles = [componentStyle, radioStyle];
__decorate([
  n4({ reflect: true })
], Radio.prototype, "value", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Radio.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Radio.prototype, "checked", void 0);
__decorate([
  n4({ reflect: true, attribute: "unchecked-icon" })
], Radio.prototype, "uncheckedIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "checked-icon" })
], Radio.prototype, "checkedIcon", void 0);
__decorate([
  r4()
], Radio.prototype, "invalid", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "group-disabled"
  })
], Radio.prototype, "groupDisabled", void 0);
__decorate([
  r4()
], Radio.prototype, "focusable", void 0);
__decorate([
  r4()
], Radio.prototype, "isInitial", void 0);
__decorate([
  watch("checked", true)
], Radio.prototype, "onCheckedChange", null);
Radio = __decorate([
  t2("mdui-radio")
], Radio);

// node_modules/mdui/components/radio/radio-group-style.js
var radioGroupStyle = i`:host{display:inline-block}fieldset{border:none;padding:0;margin:0;min-width:0}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.25rem;height:1.25rem;margin:0 0 0 .625rem}`;

// node_modules/mdui/components/radio/radio-group.js
var RadioGroup = class RadioGroup2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.required = false;
    this.invalid = false;
    this.isInitial = true;
    this.inputRef = ii();
    this.formController = new FormController(this);
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-radio"]
    });
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.inputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.inputRef.value.validationMessage;
  }
  // 为了使 <mdui-radio> 可以不是该组件的直接子元素，这里不用 @queryAssignedElements()
  get items() {
    return $(this).find("mdui-radio").get();
  }
  get itemsEnabled() {
    return $(this).find("mdui-radio:not([disabled])").get();
  }
  async onValueChange() {
    this.isInitial = false;
    await this.definedController.whenDefined();
    this.emit("input");
    this.emit("change");
    this.updateItems();
    this.updateRadioFocusable();
    await this.updateComplete;
    const form = this.formController.getForm();
    if (form && formResets.get(form)?.has(this)) {
      this.invalid = false;
      formResets.get(form).delete(this);
    } else {
      this.invalid = !this.inputRef.value.checkValidity();
    }
  }
  async onInvalidChange() {
    await this.definedController.whenDefined();
    this.updateItems();
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.inputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.inputRef.value.reportValidity();
    if (this.invalid) {
      const eventProceeded = this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      if (!eventProceeded) {
        this.inputRef.value.blur();
        this.inputRef.value.focus();
      }
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.inputRef.value.setCustomValidity(message);
    this.invalid = !this.inputRef.value.checkValidity();
  }
  render() {
    return ke`<fieldset><input ${Kt(this.inputRef)} type="radio" class="input" name="${to(this.name)}" value="${to(this.value)}" .checked="${!!this.value}" .required="${this.required}" tabindex="-1" @keydown="${this.onKeyDown}"><slot @click="${this.onClick}" @keydown="${this.onKeyDown}" @slotchange="${this.onSlotChange}" @change="${this.onCheckedChange}"></slot></fieldset>`;
  }
  // 更新 mdui-radio 的 checked 后，需要更新可聚焦状态
  // 同一个 mdui-radio-group 中的多个 mdui-radio，仅有一个可聚焦
  // 若有已选中的，则已选中的可聚焦；若没有已选中的，则第一个可聚焦
  updateRadioFocusable() {
    const items = this.items;
    const itemChecked = items.find((item) => item.checked);
    if (itemChecked) {
      items.forEach((item) => {
        item.focusable = item === itemChecked;
      });
    } else {
      this.itemsEnabled.forEach((item, index) => {
        item.focusable = !index;
      });
    }
  }
  async onClick(event) {
    await this.definedController.whenDefined();
    const target = event.target;
    const item = target.closest("mdui-radio");
    if (!item || item.disabled) {
      return;
    }
    this.value = item.value;
    await this.updateComplete;
    item.focus();
  }
  /**
   * 在内部的 `<mdui-radio>` 上按下按键时，在 `<mdui-radio>` 之间切换焦点
   */
  async onKeyDown(event) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }
    event.preventDefault();
    await this.definedController.whenDefined();
    const items = this.itemsEnabled;
    const itemChecked = items.find((item) => item.checked) ?? items[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    let index = items.indexOf(itemChecked) + incr;
    if (index < 0) {
      index = items.length - 1;
    }
    if (index > items.length - 1) {
      index = 0;
    }
    this.value = items[index].value;
    await this.updateComplete;
    items[index].focus();
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.updateItems();
    this.updateRadioFocusable();
  }
  /**
   * slot 中的 mdui-radio 的 checked 变更时触发的事件
   */
  onCheckedChange(event) {
    event.stopPropagation();
  }
  // 更新 <mdui-radio> 的状态
  updateItems() {
    this.items.forEach((item) => {
      item.checked = item.value === this.value;
      item.invalid = this.invalid;
      item.groupDisabled = this.disabled;
      item.isInitial = this.isInitial;
    });
  }
};
RadioGroup.styles = [
  componentStyle,
  radioGroupStyle
];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], RadioGroup.prototype, "disabled", void 0);
__decorate([
  n4({ reflect: true })
], RadioGroup.prototype, "form", void 0);
__decorate([
  n4({ reflect: true })
], RadioGroup.prototype, "name", void 0);
__decorate([
  n4({ reflect: true })
], RadioGroup.prototype, "value", void 0);
__decorate([
  defaultValue()
], RadioGroup.prototype, "defaultValue", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], RadioGroup.prototype, "required", void 0);
__decorate([
  r4()
], RadioGroup.prototype, "invalid", void 0);
__decorate([
  watch("value", true)
], RadioGroup.prototype, "onValueChange", null);
__decorate([
  watch("invalid", true),
  watch("disabled")
], RadioGroup.prototype, "onInvalidChange", null);
RadioGroup = __decorate([
  t2("mdui-radio-group")
], RadioGroup);

// node_modules/lit-html/node/directives/map.js
function* oo(o6, f5) {
  if (void 0 !== o6) {
    let i4 = 0;
    for (const t5 of o6) yield f5(t5, i4++);
  }
}

// node_modules/mdui/components/slider/slider-base-style.js
var sliderBaseStyle = i`:host{position:relative;display:block;width:100%;-webkit-tap-highlight-color:transparent;height:2.5rem;padding:0 1.25rem}label{position:relative;display:block;width:100%;height:100%}input[type=range]{position:absolute;inset:0;z-index:4;height:100%;cursor:pointer;opacity:0;appearance:none;width:calc(100% + 20rem * 2 / 16);margin:0 -1.25rem;padding:0 .75rem}:host([disabled]) input[type=range]{cursor:not-allowed}.track-active,.track-inactive{position:absolute;top:50%;height:.25rem;margin-top:-.125rem}.track-inactive{left:-.125rem;right:-.125rem;border-radius:var(--mdui-shape-corner-full);background-color:rgb(var(--mdui-color-surface-container-highest))}.invalid .track-inactive{background-color:rgba(var(--mdui-color-error),.12)}:host([disabled]) .track-inactive{background-color:rgba(var(--mdui-color-on-surface),.12)}.track-active{background-color:rgb(var(--mdui-color-primary))}.invalid .track-active{background-color:rgb(var(--mdui-color-error))}:host([disabled]) .track-active{background-color:rgba(var(--mdui-color-on-surface),.38)}.handle{position:absolute;top:50%;transform:translate(-50%);cursor:pointer;z-index:2;width:2.5rem;height:2.5rem;margin-top:-1.25rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}.invalid .handle{--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}.handle .elevation,.handle::before{position:absolute;display:block;content:' ';left:.625rem;top:.625rem;width:1.25rem;height:1.25rem;border-radius:var(--mdui-shape-corner-full)}.handle .elevation{background-color:rgb(var(--mdui-color-primary));box-shadow:var(--mdui-elevation-level1)}.invalid .handle .elevation{background-color:rgb(var(--mdui-color-error))}:host([disabled]) .handle .elevation{background-color:rgba(var(--mdui-color-on-surface),.38);box-shadow:var(--mdui-elevation-level0)}.handle::before{background-color:rgb(var(--mdui-color-background))}.handle mdui-ripple{border-radius:var(--mdui-shape-corner-full)}.label{position:absolute;left:50%;transform:translateX(-50%) scale(0);transform-origin:center bottom;display:flex;align-items:center;justify-content:center;cursor:default;white-space:nowrap;-webkit-user-select:none;user-select:none;pointer-events:none;transition:transform var(--mdui-motion-duration-short2) var(--mdui-motion-easing-standard);bottom:2.5rem;min-width:1.75rem;height:1.75rem;padding:.375rem .5rem;border-radius:var(--mdui-shape-corner-full);color:rgb(var(--mdui-color-on-primary));font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height);background-color:rgb(var(--mdui-color-primary))}.invalid .label{color:rgb(var(--mdui-color-on-error));background-color:rgb(var(--mdui-color-error))}.label::after{content:' ';position:absolute;z-index:-1;transform:rotate(45deg);width:.875rem;height:.875rem;bottom:-.125rem;background-color:rgb(var(--mdui-color-primary))}.invalid .label::after{background-color:rgb(var(--mdui-color-error))}.label-visible{transform:translateX(-50%) scale(1);transition:transform var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.tickmark{position:absolute;top:50%;transform:translate(-50%);width:.125rem;height:.125rem;margin-top:-.0625rem;border-radius:var(--mdui-shape-corner-full);background-color:rgba(var(--mdui-color-on-surface-variant),.38)}.invalid .tickmark{background-color:rgba(var(--mdui-color-error),.38)}.tickmark.active{background-color:rgba(var(--mdui-color-on-primary),.38)}.invalid .tickmark.active{background-color:rgba(var(--mdui-color-on-error),.38)}:host([disabled]) .tickmark{background-color:rgba(var(--mdui-color-on-surface),.38)}`;

// node_modules/mdui/components/slider/slider-base.js
var SliderBase = class extends RippleMixin(FocusableMixin(MduiElement)) {
  constructor() {
    super(...arguments);
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.tickmarks = false;
    this.nolabel = false;
    this.disabled = false;
    this.name = "";
    this.invalid = false;
    this.labelVisible = false;
    this.inputRef = ii();
    this.trackActiveRef = ii();
    this.labelFormatter = (value) => value.toString();
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.inputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.inputRef.value.validationMessage;
  }
  get rippleDisabled() {
    return this.disabled;
  }
  get focusElement() {
    return this.inputRef.value;
  }
  get focusDisabled() {
    return this.disabled;
  }
  onDisabledChange() {
    this.invalid = !this.inputRef.value.checkValidity();
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.inputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.inputRef.value.reportValidity();
    if (this.invalid) {
      const eventProceeded = this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      if (!eventProceeded) {
        this.blur();
        this.focus();
      }
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.inputRef.value.setCustomValidity(message);
    this.invalid = !this.inputRef.value.checkValidity();
  }
  /**
   * value 不在 min、max 或 step 的限制范围内时，修正 value 的值
   */
  fixValue(value) {
    const { min, max, step } = this;
    value = Math.min(Math.max(value, min), max);
    const steps = Math.round((value - min) / step);
    let fixedValue = min + steps * step;
    if (fixedValue > max) {
      fixedValue -= step;
    }
    return fixedValue;
  }
  /**
   * 获取候选值组成的数组
   */
  getCandidateValues() {
    return Array.from({ length: this.max - this.min + 1 }, (_2, index) => index + this.min).filter((value) => !((value - this.min) % this.step));
  }
  /**
   * 渲染浮动标签
   */
  renderLabel(value) {
    return nn(!this.nolabel, () => ke`<div part="label" class="label ${Rt({ "label-visible": this.labelVisible })}">${this.labelFormatter(value)}</div>`);
  }
  onChange() {
    this.emit("change");
  }
};
SliderBase.styles = [
  componentStyle,
  sliderBaseStyle
];
__decorate([
  n4({ type: Number, reflect: true })
], SliderBase.prototype, "min", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], SliderBase.prototype, "max", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], SliderBase.prototype, "step", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SliderBase.prototype, "tickmarks", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SliderBase.prototype, "nolabel", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SliderBase.prototype, "disabled", void 0);
__decorate([
  n4({ reflect: true })
], SliderBase.prototype, "form", void 0);
__decorate([
  n4({ reflect: true })
], SliderBase.prototype, "name", void 0);
__decorate([
  r4()
], SliderBase.prototype, "invalid", void 0);
__decorate([
  r4()
], SliderBase.prototype, "labelVisible", void 0);
__decorate([
  n4({ attribute: false })
], SliderBase.prototype, "labelFormatter", void 0);
__decorate([
  watch("disabled", true)
], SliderBase.prototype, "onDisabledChange", null);

// node_modules/mdui/components/range-slider/index.js
var RangeSlider = class RangeSlider2 extends SliderBase {
  constructor() {
    super(...arguments);
    this.defaultValue = [];
    this.currentHandle = "start";
    this.rippleStartRef = ii();
    this.rippleEndRef = ii();
    this.handleStartRef = ii();
    this.handleEndRef = ii();
    this.formController = new FormController(this);
    this._value = [];
    this.getRippleIndex = () => {
      if (this.hoverHandle) {
        return this.hoverHandle === "start" ? 0 : 1;
      }
      return this.currentHandle === "start" ? 0 : 1;
    };
  }
  /**
   * 滑块的值，为数组格式，将于表单数据一起提交。
   *
   * **NOTE**：该属性无法通过 HTML 属性设置初始值，如果要修改该值，只能通过修改 JavaScript 属性值实现。
   */
  get value() {
    return this._value;
  }
  set value(_value) {
    const oldValue = [...this._value];
    this._value = [this.fixValue(_value[0]), this.fixValue(_value[1])];
    this.requestUpdate("value", oldValue);
    this.updateComplete.then(() => {
      this.updateStyle();
      const form = this.formController.getForm();
      if (form && formResets.get(form)?.has(this)) {
        this.invalid = false;
        formResets.get(form).delete(this);
      } else {
        this.invalid = !this.inputRef.value.checkValidity();
      }
    });
  }
  get rippleElement() {
    return [this.rippleStartRef.value, this.rippleEndRef.value];
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.value.length) {
      this.value = [this.min, this.max];
    }
    this.value[0] = this.fixValue(this.value[0]);
    this.value[1] = this.fixValue(this.value[1]);
    if (!this.defaultValue.length) {
      this.defaultValue = [...this.value];
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const getCurrentHandle = (event) => {
      const $this = $(this);
      const paddingLeft = parseFloat($this.css("padding-left"));
      const paddingRight = parseFloat($this.css("padding-right"));
      const percent = (event.offsetX - paddingLeft) / (this.clientWidth - paddingLeft - paddingRight);
      const pointerValue = (this.max - this.min) * percent + this.min;
      const middleValue = (this.value[1] - this.value[0]) / 2 + this.value[0];
      return pointerValue > middleValue ? "end" : "start";
    };
    const onTouchStart = () => {
      if (!this.disabled) {
        this.labelVisible = true;
      }
    };
    const onTouchEnd = () => {
      if (!this.disabled) {
        this.labelVisible = false;
      }
    };
    this.addEventListener("touchstart", onTouchStart);
    this.addEventListener("mousedown", onTouchStart);
    this.addEventListener("touchend", onTouchEnd);
    this.addEventListener("mouseup", onTouchEnd);
    this.addEventListener("pointerdown", (event) => {
      this.currentHandle = getCurrentHandle(event);
    });
    this.addEventListener("pointermove", (event) => {
      const currentHandle = getCurrentHandle(event);
      if (this.hoverHandle !== currentHandle) {
        this.endHover(event);
        this.hoverHandle = currentHandle;
        this.startHover(event);
      }
    });
    this.updateStyle();
  }
  /**
   * <input /> 用于提供拖拽操作
   * <input class="invalid" /> 用于提供 html5 自带的表单错误提示
   */
  render() {
    return ke`<label class="${Rt({ invalid: this.invalid })}"><input ${Kt(this.inputRef)} type="range" step="${this.step}" min="${this.min}" max="${this.max}" ?disabled="${this.disabled}" @input="${this.onInput}" @change="${this.onChange}"><div part="track-inactive" class="track-inactive"></div><div ${Kt(this.trackActiveRef)} part="track-active" class="track-active"></div><div ${Kt(this.handleStartRef)} part="handle" class="handle start" style="${se({
      "z-index": this.currentHandle === "start" ? "2" : "1"
    })}"><div class="elevation"></div><mdui-ripple ${Kt(this.rippleStartRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.renderLabel(this.value[0])}</div><div ${Kt(this.handleEndRef)} part="handle" class="handle end" style="${se({
      "z-index": this.currentHandle === "end" ? "2" : "1"
    })}"><div class="elevation"></div><mdui-ripple ${Kt(this.rippleEndRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.renderLabel(this.value[1])}</div>${nn(this.tickmarks, () => oo(this.getCandidateValues(), (value) => ke`<div part="tickmark" class="tickmark ${Rt({
      active: value > this.value[0] && value < this.value[1]
    })}" style="${se({
      left: `${(value - this.min) / this.max * 100}%`,
      display: value === this.value[0] || value === this.value[1] ? "none" : "block"
    })}"></div>`))}</label>`;
  }
  updateStyle() {
    const getPercent = (value) => (value - this.min) / (this.max - this.min) * 100;
    const startPercent = getPercent(this.value[0]);
    const endPercent = getPercent(this.value[1]);
    this.trackActiveRef.value.style.width = `${endPercent - startPercent}%`;
    this.trackActiveRef.value.style.left = `${startPercent}%`;
    this.handleStartRef.value.style.left = `${startPercent}%`;
    this.handleEndRef.value.style.left = `${endPercent}%`;
  }
  onInput() {
    const isStart = this.currentHandle === "start";
    const value = parseFloat(this.inputRef.value.value);
    const startValue = this.value[0];
    const endValue = this.value[1];
    const doInput = () => {
      this.updateStyle();
    };
    if (isStart) {
      if (value <= endValue) {
        this.value = [value, endValue];
        doInput();
      } else if (startValue !== endValue) {
        this.value = [endValue, endValue];
        doInput();
      }
    } else {
      if (value >= startValue) {
        this.value = [startValue, value];
        doInput();
      } else if (startValue !== endValue) {
        this.value = [startValue, startValue];
        doInput();
      }
    }
  }
};
RangeSlider.styles = [SliderBase.styles];
__decorate([
  defaultValue()
], RangeSlider.prototype, "defaultValue", void 0);
__decorate([
  r4()
], RangeSlider.prototype, "currentHandle", void 0);
__decorate([
  n4({ type: Array, attribute: false })
], RangeSlider.prototype, "value", null);
RangeSlider = __decorate([
  t2("mdui-range-slider")
], RangeSlider);

// node_modules/mdui/components/segmented-button/segmented-button-style.js
var segmentedButtonStyle = i`:host{position:relative;display:inline-flex;flex-grow:1;flex-shrink:0;float:left;height:100%;overflow:hidden;cursor:pointer;-webkit-tap-highlight-color:transparent;border:.0625rem solid rgb(var(--mdui-color-outline))}.button{width:100%;padding:0 .75rem}:host([invalid]){color:rgb(var(--mdui-color-error));border-color:rgb(var(--mdui-color-error))}:host([invalid]) .button{background-color:rgb(var(--mdui-color-error-container))}:host([selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]),:host([group-disabled]){cursor:default;pointer-events:none;color:rgba(var(--mdui-color-on-surface),38%);border-color:rgba(var(--mdui-color-on-surface),12%)}:host([loading]){cursor:default;pointer-events:none}:host(:not(.mdui-segmented-button-first)){margin-left:-.0625rem}:host(.mdui-segmented-button-first){border-radius:var(--shape-corner) 0 0 var(--shape-corner)}:host(.mdui-segmented-button-last){border-radius:0 var(--shape-corner) var(--shape-corner) 0}.end-icon,.icon,.selected-icon{display:inline-flex;font-size:1.28571429em}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}mdui-circular-progress{width:1.125rem;height:1.125rem}:host([disabled]) mdui-circular-progress{opacity:.38}.label{display:inline-flex}.has-icon .label{padding-left:.5rem}.has-end-icon .label{padding-right:.5rem}`;

// node_modules/mdui/components/segmented-button/segmented-button.js
var SegmentedButton = class SegmentedButton2 extends ButtonBase {
  constructor() {
    super(...arguments);
    this.selected = false;
    this.invalid = false;
    this.groupDisabled = false;
    this.key = uniqueId();
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "[default]", "icon", "end-icon");
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.isDisabled() || this.loading;
  }
  get focusDisabled() {
    return this.isDisabled() || this.loading;
  }
  render() {
    const className2 = cc({
      button: true,
      "has-icon": this.icon || this.selected || this.loading || this.hasSlotController.test("icon"),
      "has-end-icon": this.endIcon || this.hasSlotController.test("end-icon")
    });
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
      className: className2,
      part: "button",
      content: this.renderInner()
    }) : this.isDisabled() || this.loading ? ke`<span part="button" class="_a ${className2}">${this.renderInner()}</span>` : this.renderAnchor({
      className: className2,
      part: "button",
      content: this.renderInner()
    })}`;
  }
  isDisabled() {
    return this.disabled || this.groupDisabled;
  }
  renderIcon() {
    if (this.loading) {
      return this.renderLoading();
    }
    if (this.selected) {
      return ke`<slot name="selected-icon" part="selected-icon" class="selected-icon">${this.selectedIcon ? ke`<mdui-icon name="${this.selectedIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-check class="i"></mdui-icon-check>`}</slot>`;
    }
    return ke`<slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderLabel() {
    const hasLabel = this.hasSlotController.test("[default]");
    if (!hasLabel) {
      return nothingTemplate;
    }
    return ke`<slot part="label" class="label"></slot>`;
  }
  renderEndIcon() {
    return ke`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ke`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>` : nothingTemplate}</slot>`;
  }
  renderInner() {
    return [this.renderIcon(), this.renderLabel(), this.renderEndIcon()];
  }
};
SegmentedButton.styles = [
  ButtonBase.styles,
  segmentedButtonStyle
];
__decorate([
  n4({ reflect: true })
], SegmentedButton.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], SegmentedButton.prototype, "endIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "selected-icon" })
], SegmentedButton.prototype, "selectedIcon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SegmentedButton.prototype, "selected", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SegmentedButton.prototype, "invalid", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "group-disabled"
  })
], SegmentedButton.prototype, "groupDisabled", void 0);
SegmentedButton = __decorate([
  t2("mdui-segmented-button")
], SegmentedButton);

// node_modules/mdui/components/segmented-button/segmented-button-group-style.js
var segmentedButtonGroupStyle = i`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-flex;vertical-align:middle;height:2.5rem;font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height);color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([full-width]){display:flex;flex-wrap:nowrap}input,select{position:absolute;width:100%;height:100%;padding:0;opacity:0;pointer-events:none}`;

// node_modules/mdui/components/segmented-button/segmented-button-group.js
var SegmentedButtonGroup = class SegmentedButtonGroup2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.fullWidth = false;
    this.disabled = false;
    this.required = false;
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.selectedKeys = [];
    this.invalid = false;
    this.isInitial = true;
    this.inputRef = ii();
    this.formController = new FormController(this);
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-segmented-button"]
    });
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.inputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.inputRef.value.validationMessage;
  }
  // 为了使 <mdui-segmented-button> 可以不是该组件的直接子元素，这里不用 @queryAssignedElements()
  get items() {
    return $(this).find("mdui-segmented-button").get();
  }
  // 所有的子项元素（不包含已禁用的）
  get itemsEnabled() {
    return $(this).find("mdui-segmented-button:not([disabled])").get();
  }
  // 是否为单选
  get isSingle() {
    return this.selects === "single";
  }
  // 是否为多选
  get isMultiple() {
    return this.selects === "multiple";
  }
  // 是否可选择
  get isSelectable() {
    return this.isSingle || this.isMultiple;
  }
  async onSelectsChange() {
    if (!this.isSelectable) {
      this.setSelectedKeys([]);
    } else if (this.isSingle) {
      this.setSelectedKeys(this.selectedKeys.slice(0, 1));
    }
    await this.onSelectedKeysChange();
  }
  async onSelectedKeysChange() {
    await this.definedController.whenDefined();
    const values = this.itemsEnabled.filter((item) => this.selectedKeys.includes(item.key)).map((item) => item.value);
    const value = this.isMultiple ? values : values[0] || "";
    this.setValue(value);
    if (!this.isInitial) {
      this.emit("change");
    }
  }
  async onValueChange() {
    this.isInitial = !this.hasUpdated;
    await this.definedController.whenDefined();
    if (!this.isSelectable) {
      this.updateItems();
      return;
    }
    const values = (this.isSingle ? [this.value] : (
      // 多选时，传入的值可能是字符串（通过 attribute 属性设置）；或字符串数组（通过 property 属性设置）
      isString(this.value) ? [this.value] : this.value
    )).filter((i4) => i4);
    if (!values.length) {
      this.setSelectedKeys([]);
    } else if (this.isSingle) {
      const firstItem = this.itemsEnabled.find((item) => item.value === values[0]);
      this.setSelectedKeys(firstItem ? [firstItem.key] : []);
    } else if (this.isMultiple) {
      this.setSelectedKeys(this.itemsEnabled.filter((item) => values.includes(item.value)).map((item) => item.key));
    }
    this.updateItems();
    if (!this.isInitial) {
      const form = this.formController.getForm();
      if (form && formResets.get(form)?.has(this)) {
        this.invalid = false;
        formResets.get(form).delete(this);
      } else {
        this.invalid = !this.inputRef.value.checkValidity();
      }
    }
  }
  async onInvalidChange() {
    await this.definedController.whenDefined();
    this.updateItems();
  }
  connectedCallback() {
    super.connectedCallback();
    this.value = this.isMultiple && isString(this.value) ? this.value ? [this.value] : [] : this.value;
    this.defaultValue = this.selects === "multiple" ? [] : "";
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.inputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.inputRef.value.reportValidity();
    if (this.invalid) {
      const eventProceeded = this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      if (!eventProceeded) {
        this.inputRef.value.blur();
        this.inputRef.value.focus();
      }
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.inputRef.value.setCustomValidity(message);
    this.invalid = !this.inputRef.value.checkValidity();
  }
  render() {
    return ke`${nn(this.isSelectable && this.isSingle, () => ke`<input ${Kt(this.inputRef)} type="radio" name="${to(this.name)}" value="1" .disabled="${this.disabled}" .required="${this.required}" .checked="${!!this.value}" tabindex="-1" @keydown="${this.onInputKeyDown}">`)}${nn(this.isSelectable && this.isMultiple, () => ke`<select ${Kt(this.inputRef)} name="${to(this.name)}" .disabled="${this.disabled}" .required="${this.required}" multiple="multiple" tabindex="-1" @keydown="${this.onInputKeyDown}">${oo(this.value, (value) => ke`<option selected="selected" value="${value}"></option>`)}</select>`)}<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`;
  }
  // 切换一个元素的选中状态
  selectOne(item) {
    if (this.isMultiple) {
      const selectedKeys = [...this.selectedKeys];
      if (selectedKeys.includes(item.key)) {
        selectedKeys.splice(selectedKeys.indexOf(item.key), 1);
      } else {
        selectedKeys.push(item.key);
      }
      this.setSelectedKeys(selectedKeys);
    }
    if (this.isSingle) {
      if (this.selectedKeys.includes(item.key)) {
        this.setSelectedKeys([]);
      } else {
        this.setSelectedKeys([item.key]);
      }
    }
    this.isInitial = false;
    this.updateItems();
  }
  async onClick(event) {
    if (event.button) {
      return;
    }
    await this.definedController.whenDefined();
    const target = event.target;
    const item = target.closest("mdui-segmented-button");
    if (!item || item.disabled) {
      return;
    }
    if (this.isSelectable && item.value) {
      this.selectOne(item);
    }
  }
  /**
   * 在隐藏的 `<input>` 或 `<select>` 上按下按键时，切换选中状态
   * 通常为验证不通过时，默认聚焦到 `<input>` 或 `<select>` 上，此时按下按键，切换第一个元素的选中状态
   */
  async onInputKeyDown(event) {
    if (!["Enter", " "].includes(event.key)) {
      return;
    }
    event.preventDefault();
    await this.definedController.whenDefined();
    if (this.isSingle) {
      const input = event.target;
      input.checked = !input.checked;
      this.selectOne(this.itemsEnabled[0]);
      this.itemsEnabled[0].focus();
    }
    if (this.isMultiple) {
      this.selectOne(this.itemsEnabled[0]);
      this.itemsEnabled[0].focus();
    }
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.updateItems(true);
  }
  setSelectedKeys(selectedKeys) {
    if (!arraysEqualIgnoreOrder(this.selectedKeys, selectedKeys)) {
      this.selectedKeys = selectedKeys;
    }
  }
  setValue(value) {
    if (this.isSingle) {
      this.value = value;
    } else if (!arraysEqualIgnoreOrder(this.value, value)) {
      this.value = value;
    }
  }
  updateItems(slotChange = false) {
    const items = this.items;
    items.forEach((item, index) => {
      item.invalid = this.invalid;
      item.groupDisabled = this.disabled;
      item.selected = this.selectedKeys.includes(item.key);
      if (slotChange) {
        item.classList.toggle("mdui-segmented-button-first", index === 0);
        item.classList.toggle("mdui-segmented-button-last", index === items.length - 1);
      }
    });
  }
};
SegmentedButtonGroup.styles = [
  componentStyle,
  segmentedButtonGroupStyle
];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "full-width"
  })
], SegmentedButtonGroup.prototype, "fullWidth", void 0);
__decorate([
  n4({ reflect: true })
  // eslint-disable-next-line prettier/prettier
], SegmentedButtonGroup.prototype, "selects", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SegmentedButtonGroup.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], SegmentedButtonGroup.prototype, "required", void 0);
__decorate([
  n4({ reflect: true })
], SegmentedButtonGroup.prototype, "form", void 0);
__decorate([
  n4({ reflect: true })
], SegmentedButtonGroup.prototype, "name", void 0);
__decorate([
  n4()
], SegmentedButtonGroup.prototype, "value", void 0);
__decorate([
  defaultValue()
], SegmentedButtonGroup.prototype, "defaultValue", void 0);
__decorate([
  r4()
], SegmentedButtonGroup.prototype, "selectedKeys", void 0);
__decorate([
  r4()
], SegmentedButtonGroup.prototype, "invalid", void 0);
__decorate([
  watch("selects", true)
], SegmentedButtonGroup.prototype, "onSelectsChange", null);
__decorate([
  watch("selectedKeys", true)
], SegmentedButtonGroup.prototype, "onSelectedKeysChange", null);
__decorate([
  watch("value")
], SegmentedButtonGroup.prototype, "onValueChange", null);
__decorate([
  watch("invalid", true),
  watch("disabled")
], SegmentedButtonGroup.prototype, "onInvalidChange", null);
SegmentedButtonGroup = __decorate([
  t2("mdui-segmented-button-group")
], SegmentedButtonGroup);

// node_modules/@lit-labs/motion/animate-controller.js
var i3 = /* @__PURE__ */ new WeakMap();

// node_modules/@lit-labs/motion/animate.js
var o5 = 0;
var r5 = /* @__PURE__ */ new Map();
var n5 = /* @__PURE__ */ new WeakSet();
var a2 = () => new Promise((t5) => requestAnimationFrame(t5));
var g3 = (t5, i4) => {
  const s2 = t5 - i4;
  return 0 === s2 ? void 0 : s2;
};
var w2 = (t5, i4) => {
  const s2 = t5 / i4;
  return 1 === s2 ? void 0 : s2;
};
var N2 = { left: (t5, i4) => {
  const s2 = g3(t5, i4);
  return { value: s2, transform: null == s2 || isNaN(s2) ? void 0 : `translateX(${s2}px)` };
}, top: (t5, i4) => {
  const s2 = g3(t5, i4);
  return { value: s2, transform: null == s2 || isNaN(s2) ? void 0 : `translateY(${s2}px)` };
}, width: (t5, i4) => {
  let s2;
  0 === i4 && (i4 = 1, s2 = { width: "1px" });
  const e5 = w2(t5, i4);
  return { value: e5, overrideFrom: s2, transform: null == e5 || isNaN(e5) ? void 0 : `scaleX(${e5})` };
}, height: (t5, i4) => {
  let s2;
  0 === i4 && (i4 = 1, s2 = { height: "1px" });
  const e5 = w2(t5, i4);
  return { value: e5, overrideFrom: s2, transform: null == e5 || isNaN(e5) ? void 0 : `scaleY(${e5})` };
} };
var A = { duration: 333, easing: "ease-in-out" };
var b2 = ["left", "top", "width", "height", "opacity", "color", "background"];
var j2 = /* @__PURE__ */ new WeakMap();
var x2 = class extends $t {
  constructor(t5) {
    if (super(t5), this.t = false, this.i = null, this.o = null, this.h = true, this.shouldLog = false, t5.type === t3.CHILD) throw Error("The `animate` directive must be used in attribute position.");
    this.createFinished();
  }
  createFinished() {
    this.resolveFinished?.(), this.finished = new Promise((t5) => {
      this.l = t5;
    });
  }
  async resolveFinished() {
    this.l?.(), this.l = void 0;
  }
  render(i4) {
    return D;
  }
  getController() {
    return i3.get(this.u);
  }
  isDisabled() {
    return this.options.disabled || this.getController()?.disabled;
  }
  update(t5, [i4]) {
    const s2 = void 0 === this.u;
    return s2 && (this.u = t5.options?.host, this.u.addController(this), this.u.updateComplete.then((t6) => this.t = true), this.element = t5.element, j2.set(this.element, this)), this.optionsOrCallback = i4, (s2 || "function" != typeof i4) && this.p(i4), this.render(i4);
  }
  p(t5) {
    t5 = t5 ?? {};
    const i4 = this.getController();
    void 0 !== i4 && ((t5 = { ...i4.defaultOptions, ...t5 }).keyframeOptions = { ...i4.defaultOptions.keyframeOptions, ...t5.keyframeOptions }), t5.properties ??= b2, this.options = t5;
  }
  m() {
    const t5 = {}, i4 = this.element.getBoundingClientRect(), s2 = getComputedStyle(this.element);
    return this.options.properties.forEach((e5) => {
      const h5 = i4[e5] ?? (N2[e5] ? void 0 : s2[e5]), o6 = Number(h5);
      t5[e5] = isNaN(o6) ? h5 + "" : o6;
    }), t5;
  }
  v() {
    let t5, i4 = true;
    return this.options.guard && (t5 = this.options.guard(), i4 = ((t6, i5) => {
      if (Array.isArray(t6)) {
        if (Array.isArray(i5) && i5.length === t6.length && t6.every((t7, s2) => t7 === i5[s2])) return false;
      } else if (i5 === t6) return false;
      return true;
    })(t5, this._)), this.h = this.t && !this.isDisabled() && !this.isAnimating() && i4 && this.element.isConnected, this.h && (this._ = Array.isArray(t5) ? Array.from(t5) : t5), this.h;
  }
  hostUpdate() {
    "function" == typeof this.optionsOrCallback && this.p(this.optionsOrCallback()), this.v() && (this.A = this.m(), this.i = this.i ?? this.element.parentNode, this.o = this.element.nextSibling);
  }
  async hostUpdated() {
    if (!this.h || !this.element.isConnected || this.options.skipInitial && !this.isHostRendered) return;
    let t5;
    this.prepare(), await a2;
    const i4 = this.O(), s2 = this.j(this.options.keyframeOptions, i4), e5 = this.m();
    if (void 0 !== this.A) {
      const { from: s3, to: h5 } = this.N(this.A, e5, i4);
      this.log("measured", [this.A, e5, s3, h5]), t5 = this.calculateKeyframes(s3, h5);
    } else {
      const s3 = r5.get(this.options.inId);
      if (s3) {
        r5.delete(this.options.inId);
        const { from: h5, to: n6 } = this.N(s3, e5, i4);
        t5 = this.calculateKeyframes(h5, n6), t5 = this.options.in ? [{ ...this.options.in[0], ...t5[0] }, ...this.options.in.slice(1), t5[1]] : t5, o5++, t5.forEach((t6) => t6.zIndex = o5);
      } else this.options.in && (t5 = [...this.options.in, {}]);
    }
    this.animate(t5, s2);
  }
  resetStyles() {
    void 0 !== this.P && (this.element.setAttribute("style", this.P ?? ""), this.P = void 0);
  }
  commitStyles() {
    this.P = this.element.getAttribute("style"), this.webAnimation?.commitStyles(), this.webAnimation?.cancel();
  }
  reconnected() {
  }
  async disconnected() {
    if (!this.h) return;
    if (void 0 !== this.options.id && r5.set(this.options.id, this.A), void 0 === this.options.out) return;
    if (this.prepare(), await a2(), this.i?.isConnected) {
      const t6 = this.o && this.o.parentNode === this.i ? this.o : null;
      if (this.i.insertBefore(this.element, t6), this.options.stabilizeOut) {
        const t7 = this.m();
        this.log("stabilizing out");
        const i4 = this.A.left - t7.left, s2 = this.A.top - t7.top;
        !("static" === getComputedStyle(this.element).position) || 0 === i4 && 0 === s2 || (this.element.style.position = "relative"), 0 !== i4 && (this.element.style.left = i4 + "px"), 0 !== s2 && (this.element.style.top = s2 + "px");
      }
    }
    const t5 = this.j(this.options.keyframeOptions);
    await this.animate(this.options.out, t5), this.element.remove();
  }
  prepare() {
    this.createFinished();
  }
  start() {
    this.options.onStart?.(this);
  }
  didFinish(t5) {
    t5 && this.options.onComplete?.(this), this.A = void 0, this.animatingProperties = void 0, this.frames = void 0, this.resolveFinished();
  }
  O() {
    const t5 = [];
    for (let i4 = this.element.parentNode; i4; i4 = i4?.parentNode) {
      const s2 = j2.get(i4);
      s2 && !s2.isDisabled() && s2 && t5.push(s2);
    }
    return t5;
  }
  get isHostRendered() {
    const t5 = n5.has(this.u);
    return t5 || this.u.updateComplete.then(() => {
      n5.add(this.u);
    }), t5;
  }
  j(t5, i4 = this.O()) {
    const s2 = { ...A };
    return i4.forEach((t6) => Object.assign(s2, t6.options.keyframeOptions)), Object.assign(s2, t5), s2;
  }
  N(t5, i4, s2) {
    t5 = { ...t5 }, i4 = { ...i4 };
    const e5 = s2.map((t6) => t6.animatingProperties).filter((t6) => void 0 !== t6);
    let h5 = 1, o6 = 1;
    return e5.length > 0 && (e5.forEach((t6) => {
      t6.width && (h5 /= t6.width), t6.height && (o6 /= t6.height);
    }), void 0 !== t5.left && void 0 !== i4.left && (t5.left = h5 * t5.left, i4.left = h5 * i4.left), void 0 !== t5.top && void 0 !== i4.top && (t5.top = o6 * t5.top, i4.top = o6 * i4.top)), { from: t5, to: i4 };
  }
  calculateKeyframes(t5, i4, s2 = false) {
    const e5 = {}, h5 = {};
    let o6 = false;
    const r7 = {};
    for (const s3 in i4) {
      const n6 = t5[s3], a3 = i4[s3];
      if (s3 in N2) {
        const t6 = N2[s3];
        if (void 0 === n6 || void 0 === a3) continue;
        const i5 = t6(n6, a3);
        void 0 !== i5.transform && (r7[s3] = i5.value, o6 = true, e5.transform = `${e5.transform ?? ""} ${i5.transform}`, void 0 !== i5.overrideFrom && Object.assign(e5, i5.overrideFrom));
      } else n6 !== a3 && void 0 !== n6 && void 0 !== a3 && (o6 = true, e5[s3] = n6, h5[s3] = a3);
    }
    return e5.transformOrigin = h5.transformOrigin = s2 ? "center center" : "top left", this.animatingProperties = r7, o6 ? [e5, h5] : void 0;
  }
  async animate(t5, i4 = this.options.keyframeOptions) {
    this.start(), this.frames = t5;
    let s2 = false;
    if (!this.isAnimating() && !this.isDisabled() && (this.options.onFrames && (this.frames = t5 = this.options.onFrames(this), this.log("modified frames", t5)), void 0 !== t5)) {
      this.log("animate", [t5, i4]), s2 = true, this.webAnimation = this.element.animate(t5, i4);
      const e5 = this.getController();
      e5?.add(this);
      try {
        await this.webAnimation.finished;
      } catch (t6) {
      }
      e5?.remove(this);
    }
    return this.didFinish(s2), s2;
  }
  isAnimating() {
    return "running" === this.webAnimation?.playState || this.webAnimation?.pending;
  }
  log(t5, i4) {
    this.shouldLog && !this.isDisabled() && console.log(t5, this.options.id, i4);
  }
};
var F2 = e3(x2);

// node_modules/@lit-labs/motion/position.js
var r6 = ["top", "right", "bottom", "left"];
var e4 = class extends $t {
  constructor(t5) {
    if (super(t5), t5.type !== t3.ELEMENT) throw Error("The `position` directive must be used in attribute position.");
  }
  render(i4, s2) {
    return D;
  }
  update(t5, [i4, s2]) {
    return void 0 === this.u && (this.u = t5.options?.host, this.u.addController(this)), this.S = t5.element, this.C = i4, this.F = s2 ?? ["left", "top", "width", "height"], this.render(i4, s2);
  }
  hostUpdated() {
    this.$();
  }
  $() {
    const t5 = "function" == typeof this.C ? this.C() : this.C?.value, i4 = t5.offsetParent;
    if (void 0 === t5 || !i4) return;
    const s2 = t5.getBoundingClientRect(), o6 = i4.getBoundingClientRect();
    this.F?.forEach((t6) => {
      const i5 = r6.includes(t6) ? s2[t6] - o6[t6] : s2[t6];
      this.S.style[t6] = i5 + "px";
    });
  }
};
var h4 = e3(e4);

// node_modules/@mdui/shared/icons/cancel--outlined.js
var IconCancel_Outlined = class IconCancel_Outlined2 extends h3 {
  render() {
    return svgTag('<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>');
  }
};
IconCancel_Outlined.styles = style10;
IconCancel_Outlined = __decorate([
  t2("mdui-icon-cancel--outlined")
], IconCancel_Outlined);

// node_modules/@mdui/shared/icons/error.js
var IconError = class IconError2 extends h3 {
  render() {
    return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>');
  }
};
IconError.styles = style10;
IconError = __decorate([
  t2("mdui-icon-error")
], IconError);

// node_modules/@mdui/shared/icons/visibility-off.js
var IconVisibilityOff = class IconVisibilityOff2 extends h3 {
  render() {
    return svgTag('<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>');
  }
};
IconVisibilityOff.styles = style10;
IconVisibilityOff = __decorate([
  t2("mdui-icon-visibility-off")
], IconVisibilityOff);

// node_modules/@mdui/shared/icons/visibility.js
var IconVisibility = class IconVisibility2 extends h3 {
  render() {
    return svgTag('<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>');
  }
};
IconVisibility.styles = style10;
IconVisibility = __decorate([
  t2("mdui-icon-visibility")
], IconVisibility);

// node_modules/mdui/components/text-field/style.js
var style19 = i`:host{display:inline-block;width:100%}:host([disabled]){pointer-events:none}:host([type=hidden]){display:none}.container{position:relative;display:flex;align-items:center;height:100%;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard);padding:0 1rem}.container.has-icon{padding-left:.75rem}.container.has-end-icon,.container.has-error-icon{padding-right:.75rem}:host([variant=filled]) .container{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-surface-variant));background-color:rgb(var(--mdui-color-surface-container-highest));border-radius:var(--mdui-shape-corner-extra-small) var(--mdui-shape-corner-extra-small) 0 0}:host([variant=filled]) .container.invalid,:host([variant=filled]) .container.invalid-style{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-error))}:host([variant=filled]:hover) .container{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-surface))}:host([variant=filled]:hover) .container.invalid,:host([variant=filled]:hover) .container.invalid-style{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-error-container))}:host([variant=filled][focused-style]) .container,:host([variant=filled][focused]) .container{box-shadow:inset 0 -.125rem 0 0 rgb(var(--mdui-color-primary))}:host([variant=filled][focused-style]) .container.invalid,:host([variant=filled][focused-style]) .container.invalid-style,:host([variant=filled][focused]) .container.invalid,:host([variant=filled][focused]) .container.invalid-style{box-shadow:inset 0 -.125rem 0 0 rgb(var(--mdui-color-error))}:host([variant=filled][disabled]) .container{box-shadow:inset 0 -.0625rem 0 0 rgba(var(--mdui-color-on-surface),38%);background-color:rgba(var(--mdui-color-on-surface),4%)}:host([variant=outlined]) .container{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-outline));border-radius:var(--mdui-shape-corner-extra-small)}:host([variant=outlined]) .container.invalid,:host([variant=outlined]) .container.invalid-style{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-error))}:host([variant=outlined]:hover) .container{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-on-surface))}:host([variant=outlined]:hover) .container.invalid,:host([variant=outlined]:hover) .container.invalid-style{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-on-error-container))}:host([variant=outlined][focused-style]) .container,:host([variant=outlined][focused]) .container{box-shadow:inset 0 0 0 .125rem rgb(var(--mdui-color-primary))}:host([variant=outlined][focused-style]) .container.invalid,:host([variant=outlined][focused-style]) .container.invalid-style,:host([variant=outlined][focused]) .container.invalid,:host([variant=outlined][focused]) .container.invalid-style{box-shadow:inset 0 0 0 .125rem rgb(var(--mdui-color-error))}:host([variant=outlined][disabled]) .container{box-shadow:inset 0 0 0 .125rem rgba(var(--mdui-color-on-surface),12%)}.icon,.prefix,.right-icon,.suffix{display:flex;-webkit-user-select:none;user-select:none;color:rgb(var(--mdui-color-on-surface-variant))}:host([disabled]) .icon,:host([disabled]) .prefix,:host([disabled]) .right-icon,:host([disabled]) .suffix{color:rgba(var(--mdui-color-on-surface),38%)}.invalid .right-icon,.invalid .suffix,.invalid-style .right-icon,.invalid-style .suffix{color:rgb(var(--mdui-color-error))}:host(:hover) .invalid .right-icon,:host(:hover) .invalid .suffix,:host(:hover) .invalid-style .right-icon,:host(:hover) .invalid-style .suffix{color:rgb(var(--mdui-color-on-error-container))}:host([focused-style]) .invalid .right-icon,:host([focused-style]) .invalid .suffix,:host([focused-style]) .invalid-style .right-icon,:host([focused-style]) .invalid-style .suffix,:host([focused]) .invalid .right-icon,:host([focused]) .invalid .suffix,:host([focused]) .invalid-style .right-icon,:host([focused]) .invalid-style .suffix{color:rgb(var(--mdui-color-error))}.icon,.right-icon{font-size:1.5rem}.icon mdui-button-icon,.right-icon mdui-button-icon,::slotted(mdui-button-icon[slot]){margin-left:-.5rem;margin-right:-.5rem}.icon .i,.right-icon .i,::slotted([slot$=icon]){font-size:inherit}.has-icon .icon{margin-right:1rem}.has-end-icon .end-icon,.right-icon:not(.end-icon){margin-left:1rem}.prefix,.suffix{display:none;font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}:host([variant=filled][label]) .prefix,:host([variant=filled][label]) .suffix{padding-top:1rem}.has-value .prefix,.has-value .suffix,:host([focused-style]) .prefix,:host([focused-style]) .suffix,:host([focused]) .prefix,:host([focused]) .suffix{display:flex}.has-prefix .prefix{padding-right:.125rem}.has-suffix .suffix{padding-left:.125rem}.input-container{width:100%;height:100%}.label{position:absolute;pointer-events:none;max-width:calc(100% - 1rem);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1;top:1rem;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}.invalid .label,.invalid-style .label{color:rgb(var(--mdui-color-error))}:host([variant=outlined]) .label{padding:0 .25rem;margin:0 -.25rem}:host([variant=outlined]:hover) .label{color:rgb(var(--mdui-color-on-surface))}:host([variant=filled]:hover) .invalid .label,:host([variant=filled]:hover) .invalid-style .label,:host([variant=outlined]:hover) .invalid .label,:host([variant=outlined]:hover) .invalid-style .label{color:rgb(var(--mdui-color-on-error-container))}:host([variant=filled][focused-style]) .label,:host([variant=filled][focused]) .label,:host([variant=outlined][focused-style]) .label,:host([variant=outlined][focused]) .label{color:rgb(var(--mdui-color-primary))}:host([variant=filled]) .has-value .label,:host([variant=filled][focused-style]) .label,:host([variant=filled][focused]) .label,:host([variant=filled][type=date]) .label,:host([variant=filled][type=datetime-local]) .label,:host([variant=filled][type=month]) .label,:host([variant=filled][type=time]) .label,:host([variant=filled][type=week]) .label{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height);top:.25rem}:host([variant=outlined]) .has-value .label,:host([variant=outlined][focused-style]) .label,:host([variant=outlined][focused]) .label,:host([variant=outlined][type=date]) .label,:host([variant=outlined][type=datetime-local]) .label,:host([variant=outlined][type=month]) .label,:host([variant=outlined][type=time]) .label,:host([variant=outlined][type=week]) .label{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height);top:-.5rem;left:.75rem;background-color:rgb(var(--mdui-color-background))}:host([variant=filled][focused-style]) .invalid .label,:host([variant=filled][focused-style]) .invalid-style .label,:host([variant=filled][focused]) .invalid .label,:host([variant=filled][focused]) .invalid-style .label,:host([variant=outlined][focused-style]) .invalid .label,:host([variant=outlined][focused-style]) .invalid-style .label,:host([variant=outlined][focused]) .invalid .label,:host([variant=outlined][focused]) .invalid-style .label{color:rgb(var(--mdui-color-error))}:host([variant=filled][disabled]) .label,:host([variant=outlined][disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}.input{display:flex;flex-wrap:wrap;width:100%;height:100%;min-height:100%;border:none;outline:0;background:0 0;appearance:none;resize:none;cursor:inherit;font-family:inherit;padding:1rem 0;font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height);color:rgb(var(--mdui-color-on-surface));caret-color:rgb(var(--mdui-color-primary))}.input.hide-input{opacity:0;height:0;min-height:0;padding:0!important;overflow:hidden}.input::placeholder{color:rgb(var(--mdui-color-on-surface-variant))}.invalid .input,.invalid-style .input{caret-color:rgb(var(--mdui-color-error))}:host([disabled]) .input{color:rgba(var(--mdui-color-on-surface),38%)}:host([end-aligned]) .input{text-align:right}:host([variant=filled]) .label+.input{padding:1.5rem 0 .5rem 0}.supporting{display:flex;justify-content:space-between;padding:.25rem 1rem;color:rgb(var(--mdui-color-on-surface-variant))}.supporting.invalid,.supporting.invalid-style{color:rgb(var(--mdui-color-error))}.helper{display:block;opacity:1;transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}:host([disabled]) .helper{color:rgba(var(--mdui-color-on-surface),38%)}:host([helper-on-focus]) .helper{opacity:0}:host([helper-on-focus][focused-style]) .helper,:host([helper-on-focus][focused]) .helper{opacity:1}.error{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}.counter{flex-wrap:nowrap;padding-left:1rem;font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}::-ms-reveal{display:none}.is-firefox .input[type=date],.is-firefox .input[type=datetime-local],.is-firefox .input[type=time]{clip-path:inset(0 2em 0 0)}.input[type=number]::-webkit-inner-spin-button,.input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;display:none}.input[type=number]{-moz-appearance:textfield}.input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none}`;

// node_modules/mdui/components/text-field/index.js
var TextField = class TextField2 extends FocusableMixin(MduiElement) {
  constructor() {
    super(...arguments);
    this.variant = "filled";
    this.type = "text";
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.helperOnFocus = false;
    this.clearable = false;
    this.endAligned = false;
    this.readonly = false;
    this.disabled = false;
    this.required = false;
    this.autosize = false;
    this.counter = false;
    this.togglePassword = false;
    this.spellcheck = false;
    this.invalid = false;
    this.invalidStyle = false;
    this.focusedStyle = false;
    this.isPasswordVisible = false;
    this.hasValue = false;
    this.error = "";
    this.inputRef = ii();
    this.formController = new FormController(this);
    this.hasSlotController = new HasSlotController(this, "icon", "end-icon", "helper", "input");
    this.readonlyButClearable = false;
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.inputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.inputRef.value.validationMessage;
  }
  /**
   * 获取当前值，并转换为 `number` 类型；或设置一个 `number` 类型的值。
   * 如果值无法被转换为 `number` 类型，则会返回 `NaN`。
   */
  get valueAsNumber() {
    return this.inputRef.value?.valueAsNumber ?? parseFloat(this.value);
  }
  set valueAsNumber(newValue) {
    const input = document.createElement("input");
    input.type = "number";
    input.valueAsNumber = newValue;
    this.value = input.value;
  }
  get focusElement() {
    return this.inputRef.value;
  }
  get focusDisabled() {
    return this.disabled;
  }
  /**
   * 是否显示聚焦状态样式
   */
  get isFocusedStyle() {
    return this.focused || this.focusedStyle;
  }
  /**
   * 是否渲染为 textarea。为 false 时渲染为 input
   */
  get isTextarea() {
    return this.rows && this.rows > 1 || this.autosize;
  }
  onDisabledChange() {
    this.inputRef.value.disabled = this.disabled;
    this.invalid = !this.inputRef.value.checkValidity();
  }
  async onValueChange() {
    this.hasValue = !["", null].includes(this.value);
    if (this.hasUpdated) {
      await this.updateComplete;
      const form = this.formController.getForm();
      if (form && formResets.get(form)?.has(this)) {
        this.invalid = false;
        formResets.get(form).delete(this);
      } else {
        this.invalid = !this.inputRef.value.checkValidity();
      }
    }
  }
  onRowsChange() {
    this.setTextareaHeight();
  }
  async onMaxRowsChange() {
    if (!this.autosize) {
      return;
    }
    if (!this.hasUpdated) {
      await this.updateComplete;
    }
    const $input = $(this.inputRef.value);
    $input.css("max-height", parseFloat($input.css("line-height")) * (this.maxRows ?? 1) + parseFloat($input.css("padding-top")) + parseFloat($input.css("padding-bottom")));
  }
  async onMinRowsChange() {
    if (!this.autosize) {
      return;
    }
    if (!this.hasUpdated) {
      await this.updateComplete;
    }
    const $input = $(this.inputRef.value);
    $input.css("min-height", parseFloat($input.css("line-height")) * (this.minRows ?? 1) + parseFloat($input.css("padding-top")) + parseFloat($input.css("padding-bottom")));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observeResize?.unobserve();
    offLocaleReady(this);
  }
  /**
   * 选中文本框中的文本
   */
  select() {
    this.inputRef.value.select();
  }
  /**
   * 选中文本框中特定范围的内容
   *
   * @param start 被选中的第一个字符的位置索引，从 `0` 开始。如果这个值比元素的 `value` 长度还大，则会被看作 `value` 最后一个位置的索引
   * @param end 被选中的最后一个字符的*下一个*位置索引。如果这个值比元素的 `value` 长度还大，则会被看作 `value` 最后一个位置的索引
   * @param direction 一个表示选择方向的字符串，可能的值有：`forward`、`backward`、`none`
   */
  setSelectionRange(start, end, direction = "none") {
    this.inputRef.value.setSelectionRange(start, end, direction);
  }
  /**
   * 将文本框中特定范围的文本替换为新的文本
   * @param replacement 要插入的字符串
   * @param start 要替换的字符的起止位置的索引。默认为当前用户选中的字符的起始位置的索引
   * @param end 要替换的字符的结束位置的索引。默认为当前用户选中的字符的结束位置的索引
   * @param selectMode 文本被替换后，选取的状态。可选值为：
   * * `select`：选择新插入的文本
   * * `start`：将光标移动到新插入的文本的起始位置
   * * `end`：将光标移动到新插入的文本的结束位置
   * * `preserve`：默认值。尝试保留选取
   */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    this.inputRef.value.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.inputRef.value.value) {
      this.value = this.inputRef.value.value;
      this.setTextareaHeight();
      this.emit("input");
      this.emit("change");
    }
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.inputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.inputRef.value.reportValidity();
    if (this.invalid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      this.focus();
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.setCustomValidityInternal(message);
    offLocaleReady(this);
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.setTextareaHeight();
    this.observeResize = observeResize(this.inputRef.value, () => this.setTextareaHeight());
  }
  render() {
    const hasIcon = !!this.icon || this.hasSlotController.test("icon");
    const hasEndIcon = !!this.endIcon || this.hasSlotController.test("end-icon");
    const hasErrorIcon = this.invalid || this.invalidStyle;
    const hasPrefix = !!this.prefix || this.hasSlotController.test("prefix");
    const hasSuffix = !!this.suffix || this.hasSlotController.test("suffix");
    const hasHelper = !!this.helper || this.hasSlotController.test("helper");
    const hasError = hasErrorIcon && !!(this.error || this.inputRef.value.validationMessage);
    const hasCounter = this.counter && !!this.maxlength;
    const hasInputSlot = this.hasSlotController.test("input");
    const invalidClassNameObj = {
      invalid: this.invalid,
      "invalid-style": this.invalidStyle
    };
    const className2 = Rt({
      container: true,
      "has-value": this.hasValue,
      "has-icon": hasIcon,
      "has-end-icon": hasEndIcon,
      "has-error-icon": hasErrorIcon,
      "has-prefix": hasPrefix,
      "has-suffix": hasSuffix,
      "is-firefox": navigator.userAgent.includes("Firefox"),
      ...invalidClassNameObj
    });
    return ke`<div part="container" class="${className2}">${this.renderPrefix()}<div class="input-container">${this.renderLabel()} ${this.isTextarea ? this.renderTextArea(hasInputSlot) : this.renderInput(hasInputSlot)} ${nn(hasInputSlot, () => ke`<slot name="input" class="input"></slot>`)}</div>${this.renderClearButton()}${this.renderTogglePasswordButton()} ${this.renderSuffix(hasErrorIcon)}</div>${nn(hasError || hasHelper || hasCounter, () => ke`<div part="supporting" class="${Rt({ supporting: true, ...invalidClassNameObj })}">${this.renderHelper(hasError, hasHelper)} ${this.renderCounter(hasCounter)}</div>`)}`;
  }
  setCustomValidityInternal(message) {
    this.inputRef.value.setCustomValidity(message);
    this.invalid = !this.inputRef.value.checkValidity();
    this.requestUpdate();
  }
  onChange() {
    this.value = this.inputRef.value.value;
    if (this.isTextarea) {
      this.setTextareaHeight();
    }
    this.emit("change");
  }
  onClear(event) {
    this.value = "";
    this.emit("clear");
    this.emit("input");
    this.emit("change");
    this.focus();
    event.stopPropagation();
  }
  onInput() {
    this.value = this.inputRef.value.value;
    if (this.isTextarea) {
      this.setTextareaHeight();
    }
    this.emit("input");
  }
  onInvalid(event) {
    event.preventDefault();
  }
  onKeyDown(event) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented) {
          this.formController.submit();
        }
      });
    }
  }
  /**
   * textarea 不支持 pattern 属性，所以在 keyup 时执行验证
   */
  onTextAreaKeyUp() {
    if (this.pattern) {
      const patternRegex = new RegExp(this.pattern);
      const hasError = this.value && !this.value.match(patternRegex);
      if (hasError) {
        this.setCustomValidityInternal(this.getPatternErrorMsg());
        onLocaleReady(this, () => {
          this.setCustomValidityInternal(this.getPatternErrorMsg());
        });
      } else {
        this.setCustomValidityInternal("");
        offLocaleReady(this);
      }
    }
  }
  onTogglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  getPatternErrorMsg() {
    return msg("Please match the requested format.", {
      id: "components.textField.patternError"
    });
  }
  setTextareaHeight() {
    if (this.autosize) {
      this.inputRef.value.style.height = "auto";
      this.inputRef.value.style.height = `${this.inputRef.value.scrollHeight}px`;
    } else {
      this.inputRef.value.style.height = void 0;
    }
  }
  renderLabel() {
    return this.label ? ke`<label part="label" class="label" ${F2({
      keyframeOptions: {
        duration: getDuration(this, "short4"),
        easing: getEasing(this, "standard")
      }
    })}>${this.label}</label>` : nothingTemplate;
  }
  renderPrefix() {
    return ke`<slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : nothingTemplate}</slot><slot name="prefix" part="prefix" class="prefix">${this.prefix}</slot>`;
  }
  renderSuffix(hasErrorIcon) {
    return ke`<slot name="suffix" part="suffix" class="suffix">${this.suffix}</slot>${hasErrorIcon ? ke`<slot name="error-icon" part="error-icon" class="right-icon">${this.errorIcon ? ke`<mdui-icon name="${this.errorIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-error class="i"></mdui-icon-error>`}</slot>` : ke`<slot name="end-icon" part="end-icon" class="end-icon right-icon">${this.endIcon ? ke`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>` : nothingTemplate}</slot>`}`;
  }
  renderClearButton() {
    const hasClearButton = this.clearable && !this.disabled && (!this.readonly || this.readonlyButClearable) && (typeof this.value === "number" || this.value.length > 0);
    return nn(hasClearButton, () => ke`<slot name="clear-button" part="clear-button" class="right-icon" @click="${this.onClear}"><mdui-button-icon tabindex="-1"><slot name="clear-icon" part="clear-icon">${this.clearIcon ? ke`<mdui-icon name="${this.clearIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-cancel--outlined class="i"></mdui-icon-cancel--outlined>`}</slot></mdui-button-icon></slot>`);
  }
  renderTogglePasswordButton() {
    const hasTogglePasswordButton = this.type === "password" && this.togglePassword && !this.disabled;
    return nn(hasTogglePasswordButton, () => ke`<slot name="toggle-password-button" part="toggle-password-button" class="right-icon" @click="${this.onTogglePassword}"><mdui-button-icon tabindex="-1">${this.isPasswordVisible ? ke`<slot name="show-password-icon" part="show-password-icon">${this.showPasswordIcon ? ke`<mdui-icon name="${this.showPasswordIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-visibility-off class="i"></mdui-icon-visibility-off>`}</slot>` : ke`<slot name="hide-password-icon" part="hide-password-icon">${this.hidePasswordIcon ? ke`<mdui-icon name="${this.hidePasswordIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-visibility class="i"></mdui-icon-visibility>`}</slot>`}</mdui-button-icon></slot>`);
  }
  renderInput(hasInputSlot) {
    return ke`<input ${Kt(this.inputRef)} part="input" class="input ${Rt({ "hide-input": hasInputSlot })}" type="${this.type === "password" && this.isPasswordVisible ? "text" : this.type}" name="${to(this.name)}" .value="${Ft(this.value)}" placeholder="${to(
      // @ts-ignore
      !this.label || this.isFocusedStyle || this.hasValue ? this.placeholder : void 0
    )}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" ?required="${this.required}" minlength="${to(this.minlength)}" maxlength="${to(this.maxlength)}" min="${to(this.min)}" max="${to(this.max)}" step="${to(this.step)}" autocapitalize="${to(this.type === "password" ? "off" : this.autocapitalize)}" autocomplete="${to(this.type === "password" ? "off" : this.autocomplete)}" autocorrect="${to(this.type === "password" ? "off" : this.autocorrect)}" spellcheck="${to(this.spellcheck)}" pattern="${to(this.pattern)}" enterkeyhint="${to(this.enterkeyhint)}" inputmode="${to(this.inputmode)}" @change="${this.onChange}" @input="${this.onInput}" @invalid="${this.onInvalid}" @keydown="${this.onKeyDown}">`;
  }
  renderTextArea(hasInputSlot) {
    return ke`<textarea ${Kt(this.inputRef)} part="input" class="input ${Rt({ "hide-input": hasInputSlot })}" name="${to(this.name)}" .value="${Ft(this.value)}" placeholder="${to(
      // @ts-ignore
      !this.label || this.isFocusedStyle || this.hasValue ? this.placeholder : void 0
    )}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" ?required="${this.required}" minlength="${to(this.minlength)}" maxlength="${to(this.maxlength)}" rows="${this.rows ?? 1}" autocapitalize="${to(this.autocapitalize)}" autocorrect="${to(this.autocorrect)}" spellcheck="${to(this.spellcheck)}" enterkeyhint="${to(this.enterkeyhint)}" inputmode="${to(this.inputmode)}" @change="${this.onChange}" @input="${this.onInput}" @invalid="${this.onInvalid}" @keydown="${this.onKeyDown}" @keyup="${this.onTextAreaKeyUp}"></textarea>`;
  }
  /**
   * @param hasError 是否包含错误提示
   * @param hasHelper 是否含 helper 属性或 helper slot
   */
  renderHelper(hasError, hasHelper) {
    return hasError ? ke`<div part="error" class="error">${this.error || this.inputRef.value.validationMessage}</div>` : hasHelper ? ke`<slot name="helper" part="helper" class="helper">${this.helper}</slot>` : (
      // 右边有 counter，需要占位
      ke`<span></span>`
    );
  }
  renderCounter(hasCounter) {
    return hasCounter ? ke`<div part="counter" class="counter">${this.value.length}/${this.maxlength}</div>` : nothingTemplate;
  }
};
TextField.styles = [componentStyle, style19];
__decorate([
  n4({ reflect: true })
], TextField.prototype, "variant", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "type", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "name", void 0);
__decorate([
  n4()
], TextField.prototype, "value", void 0);
__decorate([
  defaultValue()
], TextField.prototype, "defaultValue", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "label", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "placeholder", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "helper", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "helper-on-focus"
  })
], TextField.prototype, "helperOnFocus", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TextField.prototype, "clearable", void 0);
__decorate([
  n4({ reflect: true, attribute: "clear-icon" })
], TextField.prototype, "clearIcon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "end-aligned"
  })
], TextField.prototype, "endAligned", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "prefix", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "suffix", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], TextField.prototype, "endIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "error-icon" })
], TextField.prototype, "errorIcon", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "form", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TextField.prototype, "readonly", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TextField.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TextField.prototype, "required", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], TextField.prototype, "rows", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TextField.prototype, "autosize", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "min-rows" })
], TextField.prototype, "minRows", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "max-rows" })
], TextField.prototype, "maxRows", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], TextField.prototype, "minlength", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], TextField.prototype, "maxlength", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TextField.prototype, "counter", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], TextField.prototype, "min", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], TextField.prototype, "max", void 0);
__decorate([
  n4({ type: Number, reflect: true })
], TextField.prototype, "step", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "pattern", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "toggle-password"
  })
], TextField.prototype, "togglePassword", void 0);
__decorate([
  n4({ reflect: true, attribute: "show-password-icon" })
], TextField.prototype, "showPasswordIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "hide-password-icon" })
], TextField.prototype, "hidePasswordIcon", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "autocapitalize", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "autocorrect", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "autocomplete", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "enterkeyhint", void 0);
__decorate([
  n4({ type: Boolean, reflect: true, converter: booleanConverter })
], TextField.prototype, "spellcheck", void 0);
__decorate([
  n4({ reflect: true })
], TextField.prototype, "inputmode", void 0);
__decorate([
  r4()
], TextField.prototype, "invalid", void 0);
__decorate([
  r4()
], TextField.prototype, "invalidStyle", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "focused-style"
  })
], TextField.prototype, "focusedStyle", void 0);
__decorate([
  r4()
], TextField.prototype, "isPasswordVisible", void 0);
__decorate([
  r4()
], TextField.prototype, "hasValue", void 0);
__decorate([
  r4()
], TextField.prototype, "error", void 0);
__decorate([
  watch("disabled", true)
], TextField.prototype, "onDisabledChange", null);
__decorate([
  watch("value")
], TextField.prototype, "onValueChange", null);
__decorate([
  watch("rows", true)
], TextField.prototype, "onRowsChange", null);
__decorate([
  watch("maxRows")
], TextField.prototype, "onMaxRowsChange", null);
__decorate([
  watch("minRows")
], TextField.prototype, "onMinRowsChange", null);
TextField = __decorate([
  t2("mdui-text-field")
], TextField);

// node_modules/mdui/components/select/style.js
var style20 = i`:host{display:inline-block;width:100%}.hidden-input{display:none}.text-field{cursor:pointer}.chips{display:flex;flex-wrap:wrap;margin:-.5rem -.25rem;min-height:2.5rem}:host([variant=filled][label]) .chips{margin:0 -.25rem -1rem -.25rem}.chip{margin:.25rem}mdui-menu{max-width:none}`;

// node_modules/mdui/components/select/index.js
var Select = class Select2 extends FocusableMixin(MduiElement) {
  constructor() {
    super(...arguments);
    this.variant = "filled";
    this.multiple = false;
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.clearable = false;
    this.placement = "auto";
    this.endAligned = false;
    this.readonly = false;
    this.disabled = false;
    this.required = false;
    this.invalid = false;
    this.menuRef = ii();
    this.textFieldRef = ii();
    this.hiddenInputRef = ii();
    this.formController = new FormController(this);
    this.hasSlotController = new HasSlotController(this, "icon", "end-icon", "error-icon", "prefix", "suffix", "clear-button", "clear-icon", "helper");
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-menu-item"]
    });
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.hiddenInputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.hiddenInputRef.value.validationMessage;
  }
  get focusElement() {
    return this.textFieldRef.value;
  }
  get focusDisabled() {
    return this.disabled;
  }
  connectedCallback() {
    super.connectedCallback();
    this.value = this.multiple && isString(this.value) ? this.value ? [this.value] : [] : this.value;
    this.defaultValue = this.multiple ? [] : "";
    this.definedController.whenDefined().then(() => {
      this.requestUpdate();
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observeResize?.unobserve();
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.hiddenInputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.hiddenInputRef.value.reportValidity();
    if (this.invalid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      this.focus();
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.hiddenInputRef.value.setCustomValidity(message);
    this.invalid = !this.hiddenInputRef.value.checkValidity();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.observeResize = observeResize(this.textFieldRef.value, () => this.resizeMenu());
  }
  render() {
    const hasSelection = this.multiple ? !!this.value.length : !!this.value;
    return ke`${this.multiple ? ke`<select ${Kt(this.hiddenInputRef)} class="hidden-input" name="${to(this.name)}" value="${to(this.value)}" .required="${this.required}" .disabled="${this.disabled}" multiple="multiple" tabindex="-1">${oo(this.value, (value) => ke`<option selected="selected" value="${value}"></option>`)}</select>` : ke`<input ${Kt(this.hiddenInputRef)} type="radio" class="hidden-input" name="${to(this.name)}" value="${to(this.value)}" .required="${this.required}" .disabled="${this.disabled}" .checked="${hasSelection}" tabindex="-1">`}<mdui-dropdown .stayOpenOnClick="${this.multiple}" .disabled="${this.readonly || this.disabled}" .placement="${this.placement === "top" ? "top-start" : this.placement === "bottom" ? "bottom-start" : "auto"}" @open="${this.onDropdownOpen}" @close="${this.onDropdownClose}"><mdui-text-field ${Kt(this.textFieldRef)} slot="trigger" part="text-field" class="text-field" exportparts="${[
      "container",
      "icon",
      "end-icon",
      "error-icon",
      "prefix",
      "suffix",
      "label",
      "input",
      "clear-button",
      "clear-icon",
      "supporting",
      "helper",
      "error"
    ].map((v3) => `${v3}:text-field__${v3}`).join(",")}" readonly="readonly" .readonlyButClearable="${true}" .variant="${this.variant}" .name="${this.name}" .value="${this.multiple ? this.value.length ? " " : "" : this.getMenuItemLabelByValue(this.value)}" .label="${this.label}" .placeholder="${this.placeholder}" .helper="${this.helper}" .error="${this.hiddenInputRef.value?.validationMessage}" .clearable="${this.clearable}" .clearIcon="${this.clearIcon}" .endAligned="${this.endAligned}" .prefix="${this.prefix}" .suffix="${this.suffix}" .icon="${this.icon}" .endIcon="${this.endIcon}" .errorIcon="${this.errorIcon}" .form="${this.form}" .disabled="${this.disabled}" .required="${this.required}" .invalidStyle="${this.invalid}" @clear="${this.onClear}" @change="${(e5) => e5.stopPropagation()}" @keydown="${this.onTextFieldKeyDown}">${oo([
      "icon",
      "end-icon",
      "error-icon",
      "prefix",
      "suffix",
      "clear-button",
      "clear-icon",
      "helper"
    ], (slotName) => this.hasSlotController.test(slotName) ? ke`<slot name="${slotName}" slot="${slotName}"></slot>` : D)} ${nn(this.multiple && this.value.length, () => ke`<div slot="input" class="chips" part="chips">${oo(this.value, (valueItem) => ke`<mdui-chip class="chip" part="chip" exportparts="${["button", "label", "delete-icon"].map((v3) => `${v3}:chip__${v3}`).join(",")}" variant="input" deletable tabindex="-1" @delete="${() => this.onDeleteOneValue(valueItem)}">${this.getMenuItemLabelByValue(valueItem)}</mdui-chip>`)}</div>`)}</mdui-text-field><mdui-menu ${Kt(this.menuRef)} part="menu" .selects="${this.multiple ? "multiple" : "single"}" .value="${this.value}" @change="${this.onValueChange}"><slot></slot></mdui-menu></mdui-dropdown>`;
  }
  getMenuItemLabelByValue(valueItem) {
    if (!this.menuItems.length) {
      return valueItem;
    }
    return this.menuItems.find((item) => item.value === valueItem)?.textContent?.trim() || valueItem;
  }
  resizeMenu() {
    this.menuRef.value.style.width = `${this.textFieldRef.value.clientWidth}px`;
  }
  async onDropdownOpen() {
    this.textFieldRef.value.focusedStyle = true;
  }
  onDropdownClose() {
    this.textFieldRef.value.focusedStyle = false;
    if (this.contains(document.activeElement) || this.contains(document.activeElement?.assignedSlot ?? null)) {
      setTimeout(() => {
        this.focus();
      });
    }
  }
  async onValueChange(e5) {
    const menu = e5.target;
    this.value = this.multiple ? menu.value.map((v3) => v3 ?? "") : menu.value ?? "";
    await this.updateComplete;
    const form = this.formController.getForm();
    if (form && formResets.get(form)?.has(this)) {
      this.invalid = false;
      formResets.get(form).delete(this);
    } else {
      this.invalid = !this.hiddenInputRef.value.checkValidity();
    }
  }
  /**
   * multiple 为 true 时，点 chip 的删除按钮，删除其中一个值
   */
  onDeleteOneValue(valueItem) {
    const value = [...this.value];
    if (value.includes(valueItem)) {
      value.splice(value.indexOf(valueItem), 1);
    }
    this.value = value;
  }
  onClear() {
    this.value = this.multiple ? [] : "";
  }
  /**
   * 焦点在 text-field 上时，按下回车键，打开下拉选项
   */
  onTextFieldKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.textFieldRef.value.click();
    }
  }
};
Select.styles = [componentStyle, style20];
__decorate([
  n4({ reflect: true })
], Select.prototype, "variant", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Select.prototype, "multiple", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "name", void 0);
__decorate([
  n4()
], Select.prototype, "value", void 0);
__decorate([
  defaultValue()
], Select.prototype, "defaultValue", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "label", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "placeholder", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "helper", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Select.prototype, "clearable", void 0);
__decorate([
  n4({ reflect: true, attribute: "clear-icon" })
], Select.prototype, "clearIcon", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "placement", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "end-aligned"
  })
], Select.prototype, "endAligned", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "prefix", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "suffix", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "icon", void 0);
__decorate([
  n4({ reflect: true, attribute: "end-icon" })
], Select.prototype, "endIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "error-icon" })
], Select.prototype, "errorIcon", void 0);
__decorate([
  n4({ reflect: true })
], Select.prototype, "form", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Select.prototype, "readonly", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Select.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Select.prototype, "required", void 0);
__decorate([
  r4()
], Select.prototype, "invalid", void 0);
__decorate([
  o4({ flatten: true, selector: "mdui-menu-item" })
], Select.prototype, "menuItems", void 0);
Select = __decorate([
  t2("mdui-select")
], Select);

// node_modules/mdui/components/slider/style.js
var style21 = i`.track-active{left:-.125rem;border-radius:var(--mdui-shape-corner-full) 0 0 var(--mdui-shape-corner-full)}`;

// node_modules/mdui/components/slider/index.js
var Slider = class Slider2 extends SliderBase {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.defaultValue = 0;
    this.rippleRef = ii();
    this.handleRef = ii();
    this.formController = new FormController(this);
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  async onValueChange() {
    this.value = this.fixValue(this.value);
    const form = this.formController.getForm();
    if (form && formResets.get(form)?.has(this)) {
      this.invalid = false;
      formResets.get(form).delete(this);
    } else {
      await this.updateComplete;
      this.invalid = !this.inputRef.value.checkValidity();
    }
    this.updateStyle();
  }
  connectedCallback() {
    super.connectedCallback();
    this.value = this.fixValue(this.value);
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const onTouchStart = () => {
      if (!this.disabled) {
        this.labelVisible = true;
      }
    };
    const onTouchEnd = () => {
      if (!this.disabled) {
        this.labelVisible = false;
      }
    };
    this.addEventListener("touchstart", onTouchStart);
    this.addEventListener("mousedown", onTouchStart);
    this.addEventListener("touchend", onTouchEnd);
    this.addEventListener("mouseup", onTouchEnd);
    this.updateStyle();
  }
  /**
   * <input /> 用于提供拖拽操作
   * <input class="invalid" /> 用于提供 html5 自带的表单错误提示
   */
  render() {
    return ke`<label class="${Rt({ invalid: this.invalid })}"><input ${Kt(this.inputRef)} type="range" step="${this.step}" min="${this.min}" max="${this.max}" ?disabled="${this.disabled}" .value="${Ft(this.value.toString())}" @input="${this.onInput}" @change="${this.onChange}"><div part="track-inactive" class="track-inactive"></div><div ${Kt(this.trackActiveRef)} part="track-active" class="track-active"></div><div ${Kt(this.handleRef)} part="handle" class="handle"><div class="elevation"></div><mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.renderLabel(this.value)}</div>${nn(this.tickmarks, () => oo(this.getCandidateValues(), (value) => ke`<div part="tickmark" class="tickmark ${Rt({ active: value < this.value })}" style="${se({
      left: `${(value - this.min) / this.max * 100}%`,
      display: value === this.value ? "none" : "block"
    })}"></div>`))}</label>`;
  }
  updateStyle() {
    const percent = (this.value - this.min) / (this.max - this.min) * 100;
    this.trackActiveRef.value.style.width = `${percent}%`;
    this.handleRef.value.style.left = `${percent}%`;
  }
  onInput() {
    this.value = parseFloat(this.inputRef.value.value);
    this.updateStyle();
  }
};
Slider.styles = [SliderBase.styles, style21];
__decorate([
  n4({ type: Number })
], Slider.prototype, "value", void 0);
__decorate([
  defaultValue()
], Slider.prototype, "defaultValue", void 0);
__decorate([
  watch("value", true)
], Slider.prototype, "onValueChange", null);
Slider = __decorate([
  t2("mdui-slider")
], Slider);

// node_modules/mdui/components/snackbar/style.js
var style22 = i`:host{--shape-corner:var(--mdui-shape-corner-extra-small);--z-index:2400;position:fixed;z-index:var(--z-index);display:none;align-items:center;flex-wrap:wrap;border-radius:var(--shape-corner);min-width:20rem;max-width:36rem;padding:.25rem 0;box-shadow:var(--mdui-elevation-level3);background-color:rgb(var(--mdui-color-inverse-surface));color:rgb(var(--mdui-color-inverse-on-surface));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([placement^=top]){transform-origin:top;top:1rem}:host([placement^=bottom]){transform-origin:bottom;bottom:1rem}:host([placement=bottom-start]),:host([placement=top-start]){left:1rem}:host([placement=bottom-end]),:host([placement=top-end]){right:1rem}.message{display:block;margin:.625rem 1rem}:host([message-line='1']) .message{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([message-line='2']) .message{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.action-group{display:flex;align-items:center;margin-left:auto;padding-right:.5rem}.action,.close-button{display:inline-flex;align-items:center;justify-content:center}.action{color:rgb(var(--mdui-color-inverse-primary));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking)}.action mdui-button,::slotted(mdui-button[slot=action][variant=outlined]),::slotted(mdui-button[slot=action][variant=text]){color:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-primary)}.action mdui-button::part(button){padding:0 .5rem}.close-button{margin:0 -.25rem 0 .25rem;font-size:1.5rem;color:rgb(var(--mdui-color-inverse-on-surface))}.close-button mdui-button-icon,::slotted(mdui-button-icon[slot=close-button][variant=outlined]),::slotted(mdui-button-icon[slot=close-button][variant=standard]){font-size:inherit;color:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}.close-button .i,::slotted([slot=close-icon]){font-size:inherit}`;

// node_modules/mdui/components/snackbar/index.js
var Snackbar = class Snackbar2 extends MduiElement {
  constructor() {
    super();
    this.open = false;
    this.placement = "bottom";
    this.actionLoading = false;
    this.closeable = false;
    this.autoCloseDelay = 5e3;
    this.closeOnOutsideClick = false;
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }
  async onOpenChange() {
    const isMobile = breakpoint().down("sm");
    const isCenteredHorizontally = ["top", "bottom"].includes(this.placement);
    const easingLinear = getEasing(this, "linear");
    const easingEmphasizedDecelerate = getEasing(this, "emphasized-decelerate");
    const children = Array.from(this.renderRoot.querySelectorAll(".message, .action-group"));
    const commonStyle = isMobile ? { left: "1rem", right: "1rem", minWidth: 0 } : isCenteredHorizontally ? { left: "50%" } : {};
    if (this.open) {
      const hasUpdated = this.hasUpdated;
      if (!hasUpdated) {
        await this.updateComplete;
      }
      if (hasUpdated) {
        const eventProceeded = this.emit("open", { cancelable: true });
        if (!eventProceeded) {
          return;
        }
      }
      window.clearTimeout(this.closeTimeout);
      if (this.autoCloseDelay) {
        this.closeTimeout = window.setTimeout(() => {
          this.open = false;
        }, this.autoCloseDelay);
      }
      this.style.display = "flex";
      await Promise.all([
        stopAnimations(this),
        ...children.map((child) => stopAnimations(child))
      ]);
      const duration = getDuration(this, "medium4");
      const getOpenStyle = (ident) => {
        const scaleY = `scaleY(${ident === "start" ? 0 : 1})`;
        if (isMobile) {
          return { transform: scaleY };
        } else {
          return {
            transform: [
              scaleY,
              isCenteredHorizontally ? "translateX(-50%)" : ""
            ].filter((i4) => i4).join(" ")
          };
        }
      };
      await Promise.all([
        animateTo(this, [
          { ...getOpenStyle("start"), ...commonStyle },
          { ...getOpenStyle("end"), ...commonStyle }
        ], {
          duration: hasUpdated ? duration : 0,
          easing: easingEmphasizedDecelerate,
          fill: "forwards"
        }),
        animateTo(this, [{ opacity: 0 }, { opacity: 1, offset: 0.5 }, { opacity: 1 }], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear,
          fill: "forwards"
        }),
        ...children.map((child) => animateTo(child, [
          { opacity: 0 },
          { opacity: 0, offset: 0.2 },
          { opacity: 1, offset: 0.8 },
          { opacity: 1 }
        ], {
          duration: hasUpdated ? duration : 0,
          easing: easingLinear
        }))
      ]);
      if (hasUpdated) {
        this.emit("opened");
      }
      return;
    }
    if (!this.open && this.hasUpdated) {
      const eventProceeded = this.emit("close", { cancelable: true });
      if (!eventProceeded) {
        return;
      }
      window.clearTimeout(this.closeTimeout);
      await Promise.all([
        stopAnimations(this),
        ...children.map((child) => stopAnimations(child))
      ]);
      const duration = getDuration(this, "short4");
      const getCloseStyle = (ident) => {
        const opacity = ident === "start" ? 1 : 0;
        const styles = { opacity };
        if (!isMobile && isCenteredHorizontally) {
          Object.assign(styles, { transform: "translateX(-50%)" });
        }
        return styles;
      };
      await Promise.all([
        animateTo(this, [
          { ...getCloseStyle("start"), ...commonStyle },
          { ...getCloseStyle("end"), ...commonStyle }
        ], {
          duration,
          easing: easingLinear,
          fill: "forwards"
        }),
        ...children.map((child) => animateTo(child, [{ opacity: 1 }, { opacity: 0, offset: 0.75 }, { opacity: 0 }], { duration, easing: easingLinear }))
      ]);
      this.style.display = "none";
      this.emit("closed");
      return;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("pointerdown", this.onDocumentClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("pointerdown", this.onDocumentClick);
  }
  render() {
    return ke`<slot part="message" class="message"></slot><div class="action-group"><slot name="action" part="action" class="action" @click="${this.onActionClick}">${this.action ? ke`<mdui-button variant="text" loading="${this.actionLoading}">${this.action}</mdui-button>` : nothingTemplate}</slot>${nn(this.closeable, () => ke`<slot name="close-button" part="close-button" class="close-button" @click="${this.onCloseClick}"><mdui-button-icon><slot name="close-icon" part="close-icon">${this.closeIcon ? ke`<mdui-icon name="${this.closeIcon}" class="i"></mdui-icon>` : ke`<mdui-icon-clear class="i"></mdui-icon-clear>`}</slot></mdui-button-icon></slot>`)}</div>`;
  }
  /**
   * 在 document 上点击时，根据条件判断是否要关闭 snackbar
   */
  onDocumentClick(e5) {
    if (!this.open || !this.closeOnOutsideClick) {
      return;
    }
    const target = e5.target;
    if (!this.contains(target) && this !== target) {
      this.open = false;
    }
  }
  onActionClick(event) {
    event.stopPropagation();
    this.emit("action-click");
  }
  onCloseClick() {
    this.open = false;
  }
};
Snackbar.styles = [componentStyle, style22];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Snackbar.prototype, "open", void 0);
__decorate([
  n4({ reflect: true })
], Snackbar.prototype, "placement", void 0);
__decorate([
  n4({ reflect: true, attribute: "action" })
], Snackbar.prototype, "action", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "action-loading"
  })
], Snackbar.prototype, "actionLoading", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Snackbar.prototype, "closeable", void 0);
__decorate([
  n4({ reflect: true, attribute: "close-icon" })
], Snackbar.prototype, "closeIcon", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "message-line" })
  // eslint-disable-next-line prettier/prettier
], Snackbar.prototype, "messageLine", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "auto-close-delay" })
], Snackbar.prototype, "autoCloseDelay", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    attribute: "close-on-outside-click",
    converter: booleanConverter
  })
], Snackbar.prototype, "closeOnOutsideClick", void 0);
__decorate([
  watch("open")
], Snackbar.prototype, "onOpenChange", null);
Snackbar = __decorate([
  t2("mdui-snackbar")
], Snackbar);

// node_modules/mdui/components/switch/style.js
var style23 = i`:host{--shape-corner:var(--mdui-shape-corner-full);--shape-corner-thumb:var(--mdui-shape-corner-full);position:relative;display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent;height:2.5rem}:host([disabled]){cursor:default;pointer-events:none}label{display:inline-flex;align-items:center;width:100%;height:100%;white-space:nowrap;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}.track{position:relative;display:flex;align-items:center;border-radius:var(--shape-corner);transition-property:background-color,border-width;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);height:2rem;width:3.25rem;border:.125rem solid rgb(var(--mdui-color-outline));background-color:rgb(var(--mdui-color-surface-container-highest))}:host([checked]) .track{background-color:rgb(var(--mdui-color-primary));border-width:0}.invalid .track{background-color:rgb(var(--mdui-color-error-container));border-color:rgb(var(--mdui-color-error))}:host([disabled]) .track{background-color:rgba(var(--mdui-color-surface-container-highest),.12);border-color:rgba(var(--mdui-color-on-surface),.12)}:host([disabled][checked]) .track{background-color:rgba(var(--mdui-color-on-surface),.12)}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.25rem;height:1.25rem;margin:0 0 0 .625rem}mdui-ripple{border-radius:50%;transition-property:left,top;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);width:2.5rem;height:2.5rem}.thumb{position:absolute;display:flex;align-items:center;justify-content:center;border-radius:var(--shape-corner-thumb);transition-property:width,height,left,background-color;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);height:1rem;width:1rem;left:.375rem;background-color:rgb(var(--mdui-color-outline));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.thumb mdui-ripple{left:-.75rem;top:-.75rem}.has-unchecked-icon .thumb{height:1.5rem;width:1.5rem;left:.125rem}.has-unchecked-icon .thumb mdui-ripple{left:-.5rem;top:-.5rem}:host([focus-visible]) .thumb,:host([hover]) .thumb,:host([pressed]) .thumb{background-color:rgb(var(--mdui-color-on-surface-variant))}:host([checked]) .thumb{height:1.5rem;width:1.5rem;left:1.5rem;background-color:rgb(var(--mdui-color-on-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]) .thumb mdui-ripple{left:-.5rem;top:-.5rem}:host([pressed]) .thumb{height:1.75rem;width:1.75rem;left:0}:host([pressed]) .thumb mdui-ripple{left:-.375rem;top:-.375rem}:host([pressed][checked]) .thumb{left:1.375rem}:host([focus-visible][checked]) .thumb,:host([hover][checked]) .thumb,:host([pressed][checked]) .thumb{background-color:rgb(var(--mdui-color-primary-container))}.invalid .thumb{background-color:rgb(var(--mdui-color-error));--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}:host([focus-visible]) .invalid .thumb,:host([hover]) .invalid .thumb,:host([pressed]) .invalid .thumb{background-color:rgb(var(--mdui-color-error))}:host([disabled]) .thumb{background-color:rgba(var(--mdui-color-on-surface),.38)}:host([disabled][checked]) .thumb{background-color:rgb(var(--mdui-color-surface))}.checked-icon,.unchecked-icon{display:flex;position:absolute;transition-property:opacity,transform;font-size:1rem}.unchecked-icon{opacity:1;transform:scale(1);transition-delay:var(--mdui-motion-duration-short1);transition-duration:var(--mdui-motion-duration-short3);transition-timing-function:var(--mdui-motion-easing-linear);color:rgb(var(--mdui-color-surface-container-highest))}:host([checked]) .unchecked-icon{opacity:0;transform:scale(.92);transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1)}:host([disabled]) .unchecked-icon{color:rgba(var(--mdui-color-surface-container-highest),.38)}.checked-icon{opacity:0;transform:scale(.92);transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1);transition-timing-function:var(--mdui-motion-easing-linear);color:rgb(var(--mdui-color-on-primary-container))}:host([checked]) .checked-icon{opacity:1;transform:scale(1);transition-delay:var(--mdui-motion-duration-short1);transition-duration:var(--mdui-motion-duration-short3)}.invalid .checked-icon{color:rgb(var(--mdui-color-error-container))}:host([disabled]) .checked-icon{color:rgba(var(--mdui-color-on-surface),.38)}.checked-icon .i,.unchecked-icon .i,::slotted([slot=checked-icon]),::slotted([slot=unchecked-icon]){font-size:inherit;color:inherit}`;

// node_modules/mdui/components/switch/index.js
var Switch = class Switch2 extends RippleMixin(FocusableMixin(MduiElement)) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.required = false;
    this.name = "";
    this.value = "on";
    this.invalid = false;
    this.rippleRef = ii();
    this.inputRef = ii();
    this.formController = new FormController(this, {
      value: (control) => control.checked ? control.value : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new HasSlotController(this, "unchecked-icon");
  }
  /**
   * 表单验证状态对象，具体参见 [`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState)
   */
  get validity() {
    return this.inputRef.value.validity;
  }
  /**
   * 如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串
   */
  get validationMessage() {
    return this.inputRef.value.validationMessage;
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return this.disabled;
  }
  get focusElement() {
    return this.inputRef.value;
  }
  get focusDisabled() {
    return this.disabled;
  }
  async onDisabledChange() {
    await this.updateComplete;
    this.invalid = !this.inputRef.value.checkValidity();
  }
  async onCheckedChange() {
    await this.updateComplete;
    const form = this.formController.getForm();
    if (form && formResets.get(form)?.has(this)) {
      this.invalid = false;
      formResets.get(form).delete(this);
    } else {
      this.invalid = !this.inputRef.value.checkValidity();
    }
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`
   */
  checkValidity() {
    const valid = this.inputRef.value.checkValidity();
    if (!valid) {
      this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
    }
    return valid;
  }
  /**
   * 检查表单字段是否通过验证。如果未通过，返回 `false` 并触发 `invalid` 事件；如果通过，返回 `true`。
   *
   * 如果验证未通过，还会在组件上显示验证失败的提示。
   */
  reportValidity() {
    this.invalid = !this.inputRef.value.reportValidity();
    if (this.invalid) {
      const eventProceeded = this.emit("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      if (!eventProceeded) {
        this.blur();
        this.focus();
      }
    }
    return !this.invalid;
  }
  /**
   * 设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证
   *
   * @param message 自定义的错误提示文本
   */
  setCustomValidity(message) {
    this.inputRef.value.setCustomValidity(message);
    this.invalid = !this.inputRef.value.checkValidity();
  }
  render() {
    return ke`<label class="${Rt({
      invalid: this.invalid,
      "has-unchecked-icon": this.uncheckedIcon || this.hasSlotController.test("unchecked-icon")
    })}"><input ${Kt(this.inputRef)} type="checkbox" name="${to(this.name)}" value="${to(this.value)}" .disabled="${this.disabled}" .checked="${Ft(this.checked)}" .required="${this.required}" @change="${this.onChange}"><div part="track" class="track"><div part="thumb" class="thumb"><mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><slot name="checked-icon" part="checked-icon" class="checked-icon">${this.checkedIcon ? ke`<mdui-icon name="${this.checkedIcon}" class="i"></mdui-icon>` : this.checkedIcon === "" ? nothingTemplate : ke`<mdui-icon-check class="i"></mdui-icon-check>`}</slot><slot name="unchecked-icon" part="unchecked-icon" class="unchecked-icon">${this.uncheckedIcon ? ke`<mdui-icon name="${this.uncheckedIcon}" class="i"></mdui-icon>` : nothingTemplate}</slot></div></div></label>`;
  }
  /**
   * input[type="checkbox"] 的 change 事件无法冒泡越过 shadow dom
   */
  onChange() {
    this.checked = this.inputRef.value.checked;
    this.emit("change");
  }
};
Switch.styles = [componentStyle, style23];
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Switch.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Switch.prototype, "checked", void 0);
__decorate([
  defaultValue("checked")
], Switch.prototype, "defaultChecked", void 0);
__decorate([
  n4({ reflect: true, attribute: "unchecked-icon" })
], Switch.prototype, "uncheckedIcon", void 0);
__decorate([
  n4({ reflect: true, attribute: "checked-icon" })
], Switch.prototype, "checkedIcon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Switch.prototype, "required", void 0);
__decorate([
  n4({ reflect: true })
], Switch.prototype, "form", void 0);
__decorate([
  n4({ reflect: true })
], Switch.prototype, "name", void 0);
__decorate([
  n4({ reflect: true })
], Switch.prototype, "value", void 0);
__decorate([
  r4()
], Switch.prototype, "invalid", void 0);
__decorate([
  watch("disabled", true),
  watch("required", true)
], Switch.prototype, "onDisabledChange", null);
__decorate([
  watch("checked", true)
], Switch.prototype, "onCheckedChange", null);
Switch = __decorate([
  t2("mdui-switch")
], Switch);

// node_modules/mdui/components/tabs/tab-style.js
var tabStyle = i`:host{position:relative;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}.container{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;height:100%}.preset{flex-direction:column;min-height:3rem;padding:.625rem 1rem}:host([inline]) .preset{flex-direction:row}.icon-container,.label-container{position:relative;display:flex;align-items:center;justify-content:center}.icon-container ::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}.icon-container ::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.label-container ::slotted([slot=badge]){position:absolute;left:100%;bottom:100%;transform:translate(-.75rem,.625rem)}.label-container ::slotted([slot=badge][variant=small]){transform:translate(-.375rem,.375rem)}.icon,.label{display:flex;color:rgb(var(--mdui-color-on-surface-variant))}:host([focused]) .icon,:host([focused]) .label,:host([hover]) .icon,:host([hover]) .label,:host([pressed]) .icon,:host([pressed]) .label{color:rgb(var(--mdui-color-on-surface))}:host([active]) .icon,:host([active]) .label{color:rgb(var(--mdui-color-primary))}:host([active]) .variant-secondary .icon,:host([active]) .variant-secondary .label{color:rgb(var(--mdui-color-on-surface))}.icon{font-size:1.5rem}.label{font-size:var(--mdui-typescale-title-small-size);font-weight:var(--mdui-typescale-title-small-weight);letter-spacing:var(--mdui-typescale-title-small-tracking);line-height:var(--mdui-typescale-title-small-line-height)}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit;color:inherit}`;

// node_modules/mdui/components/tabs/tab.js
var Tab = class Tab2 extends RippleMixin(FocusableMixin(MduiElement)) {
  constructor() {
    super(...arguments);
    this.inline = false;
    this.active = false;
    this.variant = "primary";
    this.key = uniqueId();
    this.rippleRef = ii();
    this.hasSlotController = new HasSlotController(this, "icon", "custom");
  }
  get rippleElement() {
    return this.rippleRef.value;
  }
  get rippleDisabled() {
    return false;
  }
  get focusElement() {
    return this;
  }
  get focusDisabled() {
    return false;
  }
  render() {
    const hasIcon = this.icon || this.hasSlotController.test("icon");
    const hasCustomSlot = this.hasSlotController.test("custom");
    const renderBadge = () => ke`<slot name="badge"></slot>`;
    return ke`<mdui-ripple ${Kt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><div part="container" class="${Rt({
      container: true,
      preset: !hasCustomSlot,
      "variant-secondary": this.variant === "secondary"
    })}"><slot name="custom"><div class="icon-container">${nn(hasIcon || this.icon, renderBadge)}<slot name="icon" part="icon" class="icon">${this.icon ? ke`<mdui-icon name="${this.icon}"></mdui-icon>` : nothingTemplate}</slot></div><div class="label-container">${nn(!hasIcon, renderBadge)}<slot part="label" class="label"></slot></div></slot></div>`;
  }
};
Tab.styles = [componentStyle, tabStyle];
__decorate([
  n4({ reflect: true })
], Tab.prototype, "value", void 0);
__decorate([
  n4({ reflect: true })
], Tab.prototype, "icon", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Tab.prototype, "inline", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Tab.prototype, "active", void 0);
__decorate([
  r4()
], Tab.prototype, "variant", void 0);
Tab = __decorate([
  t2("mdui-tab")
], Tab);

// node_modules/mdui/components/tabs/tab-panel-style.js
var tabPanelStyle = i`:host{display:block;overflow-y:auto;flex:1 1 auto}:host(:not([active])){display:none}`;

// node_modules/mdui/components/tabs/tab-panel.js
var TabPanel = class TabPanel2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.active = false;
  }
  render() {
    return ke`<slot></slot>`;
  }
};
TabPanel.styles = [
  componentStyle,
  tabPanelStyle
];
__decorate([
  n4({ reflect: true })
], TabPanel.prototype, "value", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TabPanel.prototype, "active", void 0);
TabPanel = __decorate([
  t2("mdui-tab-panel")
], TabPanel);

// node_modules/mdui/components/tabs/tabs-style.js
var tabsStyle = i`:host{position:relative;display:flex}:host([placement^=top]){flex-direction:column}:host([placement^=bottom]){flex-direction:column-reverse}:host([placement^=left]){flex-direction:row}:host([placement^=right]){flex-direction:row-reverse}.container{position:relative;display:flex;flex:0 0 auto;overflow-x:auto;background-color:rgb(var(--mdui-color-surface))}:host([placement^=bottom]) .container,:host([placement^=top]) .container{flex-direction:row}:host([placement^=left]) .container,:host([placement^=right]) .container{flex-direction:column}:host([placement$='-start']) .container{justify-content:flex-start}:host([placement=bottom]) .container,:host([placement=left]) .container,:host([placement=right]) .container,:host([placement=top]) .container{justify-content:center}:host([placement$='-end']) .container{justify-content:flex-end}.container::after{content:' ';position:absolute;background-color:rgb(var(--mdui-color-surface-variant))}:host([placement^=bottom]) .container::after,:host([placement^=top]) .container::after{left:0;width:100%;height:.0625rem}:host([placement^=top]) .container::after{bottom:0}:host([placement^=bottom]) .container::after{top:0}:host([placement^=left]) .container::after,:host([placement^=right]) .container::after{top:0;height:100%;width:.0625rem}:host([placement^=left]) .container::after{right:0}:host([placement^=right]) .container::after{left:0}.indicator{position:absolute;z-index:1;background-color:rgb(var(--mdui-color-primary))}.container:not(.initial) .indicator{transition-duration:var(--mdui-motion-duration-medium2);transition-timing-function:var(--mdui-motion-easing-standard-decelerate)}:host([placement^=bottom]) .indicator,:host([placement^=top]) .indicator{transition-property:transform,left,width}:host([placement^=left]) .indicator,:host([placement^=right]) .indicator{transition-property:transform,top,height}:host([placement^=top]) .indicator{bottom:0}:host([placement^=bottom]) .indicator{top:0}:host([placement^=left]) .indicator{right:0}:host([placement^=right]) .indicator{left:0}:host([placement^=bottom][variant=primary]) .indicator,:host([placement^=top][variant=primary]) .indicator{height:.1875rem}:host([placement^=bottom][variant=secondary]) .indicator,:host([placement^=top][variant=secondary]) .indicator{height:.125rem}:host([placement^=left][variant=primary]) .indicator,:host([placement^=right][variant=primary]) .indicator{width:.1875rem}:host([placement^=left][variant=secondary]) .indicator,:host([placement^=right][variant=secondary]) .indicator{width:.125rem}:host([placement^=top][variant=primary]) .indicator{border-top-left-radius:.1875rem;border-top-right-radius:.1875rem}:host([placement^=bottom][variant=primary]) .indicator{border-bottom-right-radius:.1875rem;border-bottom-left-radius:.1875rem}:host([placement^=left][variant=primary]) .indicator{border-top-left-radius:.1875rem;border-bottom-left-radius:.1875rem}:host([placement^=right][variant=primary]) .indicator{border-top-right-radius:.1875rem;border-bottom-right-radius:.1875rem}:host([full-width]) ::slotted(mdui-tab){flex:1}`;

// node_modules/mdui/components/tabs/tabs.js
var Tabs = class Tabs2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.placement = "top-start";
    this.fullWidth = false;
    this.activeKey = 0;
    this.isInitial = true;
    this.containerRef = ii();
    this.indicatorRef = ii();
    this.definedController = new DefinedController(this, {
      relatedElements: ["mdui-tab", "mdui-tab-panel"]
    });
  }
  async onActiveKeyChange() {
    await this.definedController.whenDefined();
    this.value = this.tabs.find((tab) => tab.key === this.activeKey)?.value;
    this.updateActive();
    if (!this.isInitial) {
      this.emit("change");
    }
  }
  async onValueChange() {
    this.isInitial = !this.hasUpdated;
    await this.definedController.whenDefined();
    const tab = this.tabs.find((tab2) => tab2.value === this.value);
    this.activeKey = tab?.key ?? 0;
  }
  async onIndicatorChange() {
    await this.updateComplete;
    this.updateIndicator();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observeResize?.unobserve();
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.observeResize = observeResize(this.containerRef.value, () => this.updateIndicator());
  }
  render() {
    return ke`<div ${Kt(this.containerRef)} part="container" class="container ${Rt({ initial: this.isInitial })}"><slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot><div ${Kt(this.indicatorRef)} part="indicator" class="indicator"></div></div><slot name="panel" @slotchange="${this.onSlotChange}"></slot>`;
  }
  async onSlotChange() {
    await this.definedController.whenDefined();
    this.updateActive();
  }
  async onClick(event) {
    if (event.button) {
      return;
    }
    await this.definedController.whenDefined();
    const target = event.target;
    const tab = target.closest("mdui-tab");
    if (!tab) {
      return;
    }
    this.activeKey = tab.key;
    this.isInitial = false;
    this.updateActive();
  }
  updateActive() {
    this.activeTab = this.tabs.map((tab) => {
      tab.active = this.activeKey === tab.key;
      return tab;
    }).find((tab) => tab.active);
    this.panels.forEach((panel) => panel.active = panel.value === this.activeTab?.value);
    this.updateIndicator();
  }
  updateIndicator() {
    const activeTab = this.activeTab;
    const $indicator = $(this.indicatorRef.value);
    const isVertical = this.placement.startsWith("left") || this.placement.startsWith("right");
    if (!activeTab) {
      $indicator.css({
        transform: isVertical ? "scaleY(0)" : "scaleX(0)"
      });
      return;
    }
    const $activeTab = $(activeTab);
    const offsetTop = activeTab.offsetTop;
    const offsetLeft = activeTab.offsetLeft;
    const commonStyle = isVertical ? { transform: "scaleY(1)", width: "", left: "" } : { transform: "scaleX(1)", height: "", top: "" };
    let shownStyle = {};
    if (this.variant === "primary") {
      const $customSlots = $activeTab.find(':scope > [slot="custom"]');
      const children = $customSlots.length ? $customSlots.get() : $(activeTab.renderRoot).find('slot[name="custom"]').children().get();
      if (isVertical) {
        const top = Math.min(...children.map((child) => child.offsetTop)) + offsetTop;
        const bottom = Math.max(...children.map((child) => child.offsetTop + child.offsetHeight)) + offsetTop;
        shownStyle = { top, height: bottom - top };
      } else {
        const left = Math.min(...children.map((child) => child.offsetLeft)) + offsetLeft;
        const right = Math.max(...children.map((child) => child.offsetLeft + child.offsetWidth)) + offsetLeft;
        shownStyle = { left, width: right - left };
      }
    }
    if (this.variant === "secondary") {
      shownStyle = isVertical ? { top: offsetTop, height: activeTab.offsetHeight } : { left: offsetLeft, width: activeTab.offsetWidth };
    }
    $indicator.css({ ...commonStyle, ...shownStyle });
  }
};
Tabs.styles = [componentStyle, tabsStyle];
__decorate([
  n4({ reflect: true })
], Tabs.prototype, "variant", void 0);
__decorate([
  n4({ reflect: true })
], Tabs.prototype, "value", void 0);
__decorate([
  n4({ reflect: true })
], Tabs.prototype, "placement", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter,
    attribute: "full-width"
  })
], Tabs.prototype, "fullWidth", void 0);
__decorate([
  r4()
], Tabs.prototype, "activeKey", void 0);
__decorate([
  r4()
], Tabs.prototype, "isInitial", void 0);
__decorate([
  o4({ selector: "mdui-tab", flatten: true })
], Tabs.prototype, "tabs", void 0);
__decorate([
  o4({
    selector: "mdui-tab-panel",
    slot: "panel",
    flatten: true
  })
], Tabs.prototype, "panels", void 0);
__decorate([
  watch("activeKey", true)
], Tabs.prototype, "onActiveKeyChange", null);
__decorate([
  watch("value")
], Tabs.prototype, "onValueChange", null);
__decorate([
  watch("variant", true),
  watch("placement", true),
  watch("fullWidth", true)
], Tabs.prototype, "onIndicatorChange", null);
Tabs = __decorate([
  t2("mdui-tabs")
], Tabs);

// node_modules/@mdui/shared/controllers/hover.js
var HoverController = class {
  /**
   * @param host
   * @param elementRef 检查鼠标是否放在该元素上
   */
  constructor(host, elementRef) {
    this.isHover = false;
    this.uniqueID = uniqueId();
    this.enterEventName = `mouseenter.${this.uniqueID}.hoverController`;
    this.leaveEventName = `mouseleave.${this.uniqueID}.hoverController`;
    this.mouseEnterItems = [];
    this.mouseLeaveItems = [];
    (this.host = host).addController(this);
    this.elementRef = elementRef;
  }
  hostConnected() {
    this.host.updateComplete.then(() => {
      $(this.elementRef.value).on(this.enterEventName, () => {
        this.isHover = true;
        for (let i4 = this.mouseEnterItems.length - 1; i4 >= 0; i4--) {
          const item = this.mouseEnterItems[i4];
          item.callback();
          if (item.one) {
            this.mouseEnterItems.splice(i4, 1);
          }
        }
      }).on(this.leaveEventName, () => {
        this.isHover = false;
        for (let i4 = this.mouseLeaveItems.length - 1; i4 >= 0; i4--) {
          const item = this.mouseLeaveItems[i4];
          item.callback();
          if (item.one) {
            this.mouseLeaveItems.splice(i4, 1);
          }
        }
      });
    });
  }
  hostDisconnected() {
    $(this.elementRef.value).off(this.enterEventName).off(this.leaveEventName);
  }
  /**
   * 指定鼠标移入时的回调函数
   * @param callback 要执行的回调函数
   * @param one 是否仅执行一次
   */
  onMouseEnter(callback, one = false) {
    this.mouseEnterItems.push({ callback, one });
  }
  /**
   * 指定鼠标移出时的回调函数
   * @param callback 要执行的回调函数
   * @param one 是否仅执行一次
   */
  onMouseLeave(callback, one = false) {
    this.mouseLeaveItems.push({ callback, one });
  }
};

// node_modules/mdui/components/tooltip/style.js
var style24 = i`:host{--shape-corner-plain:var(--mdui-shape-corner-extra-small);--shape-corner-rich:var(--mdui-shape-corner-medium);--z-index:2500;display:contents}.popup{position:fixed;display:flex;flex-direction:column;z-index:var(--z-index);border-radius:var(--shape-corner-plain);background-color:rgb(var(--mdui-color-inverse-surface));padding:0 .5rem;min-width:1.75rem;max-width:20rem}:host([variant=rich]) .popup{border-radius:var(--shape-corner-rich);background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2);padding:.75rem 1rem .5rem 1rem}.headline{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-title-small-size);font-weight:var(--mdui-typescale-title-small-weight);letter-spacing:var(--mdui-typescale-title-small-tracking);line-height:var(--mdui-typescale-title-small-line-height)}.content{display:flex;padding:.25rem 0;color:rgb(var(--mdui-color-inverse-on-surface));font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}:host([variant=rich]) .content{color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}.action{display:flex;justify-content:flex-start;padding-top:.5rem}.action ::slotted(:not(:last-child)){margin-right:.5rem}`;

// node_modules/mdui/components/tooltip/index.js
var Tooltip = class Tooltip2 extends MduiElement {
  constructor() {
    super();
    this.variant = "plain";
    this.placement = "auto";
    this.openDelay = 150;
    this.closeDelay = 150;
    this.trigger = "hover focus";
    this.disabled = false;
    this.open = false;
    this.popupRef = ii();
    this.hasSlotController = new HasSlotController(this, "headline", "action");
    this.hoverController = new HoverController(this, this.popupRef);
    this.definedController = new DefinedController(this, {
      needDomReady: true
    });
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  /**
   * 获取第一个非 <style> 和 content slot 的子元素，作为 tooltip 的目标元素
   */
  get target() {
    return [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
  }
  async onPositionChange() {
    if (this.open) {
      await this.definedController.whenDefined();
      this.updatePositioner();
    }
  }
  async onOpenChange() {
    const hasUpdated = this.hasUpdated;
    const duration = getDuration(this, "short4");
    const easing = getEasing(this, "standard");
    if (this.open) {
      await this.definedController.whenDefined();
      $(`mdui-tooltip[variant="${this.variant}"]`).filter((_2, element) => element !== this).prop("open", false);
      if (!hasUpdated) {
        await this.updateComplete;
      }
      if (hasUpdated) {
        const eventProceeded = this.emit("open", { cancelable: true });
        if (!eventProceeded) {
          return;
        }
      }
      await stopAnimations(this.popupRef.value);
      this.popupRef.value.hidden = false;
      this.updatePositioner();
      await animateTo(this.popupRef.value, [{ transform: "scale(0)" }, { transform: "scale(1)" }], {
        duration: hasUpdated ? duration : 0,
        easing
      });
      if (hasUpdated) {
        this.emit("opened");
      }
      return;
    }
    if (!this.open && hasUpdated) {
      const eventProceeded = this.emit("close", { cancelable: true });
      if (!eventProceeded) {
        return;
      }
      await stopAnimations(this.popupRef.value);
      await animateTo(this.popupRef.value, [{ transform: "scale(1)" }, { transform: "scale(0)" }], { duration, easing });
      this.popupRef.value.hidden = true;
      this.emit("closed");
    }
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("pointerdown", this.onDocumentClick);
    this.overflowAncestors = getOverflowAncestors(this.target);
    this.overflowAncestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", this.onWindowScroll);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("pointerdown", this.onDocumentClick);
    this.overflowAncestors?.forEach((ancestor) => {
      ancestor.removeEventListener("scroll", this.onWindowScroll);
    });
    this.observeResize?.unobserve();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.definedController.whenDefined().then(() => {
      const target = this.target;
      target.addEventListener("focus", this.onFocus);
      target.addEventListener("blur", this.onBlur);
      target.addEventListener("pointerdown", this.onClick);
      target.addEventListener("keydown", this.onKeydown);
      target.addEventListener("mouseenter", this.onMouseEnter);
      target.addEventListener("mouseleave", this.onMouseLeave);
      this.observeResize = observeResize(target, () => {
        this.updatePositioner();
      });
    });
  }
  render() {
    const hasHeadline = this.isRich() && (this.headline || this.hasSlotController.test("headline"));
    const hasAction = this.isRich() && this.hasSlotController.test("action");
    return ke`<slot></slot><div ${Kt(this.popupRef)} part="popup" class="popup" hidden>${nn(hasHeadline, () => ke`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`)}<slot name="content" part="content" class="content">${this.content}</slot>${nn(hasAction, () => ke`<slot name="action" part="action" class="action"></slot>`)}</div>`;
  }
  isRich() {
    return this.variant === "rich";
  }
  /**
   * 请求关闭 tooltip。鼠标未悬浮在 tooltip 上时，直接关闭；否则等鼠标移走再关闭
   */
  requestClose() {
    if (!this.hoverController.isHover) {
      this.open = false;
      return;
    }
    this.hoverController.onMouseLeave(() => {
      if (this.hasTrigger("hover")) {
        this.hoverTimeout = window.setTimeout(() => {
          this.open = false;
        }, this.closeDelay || 50);
      } else {
        this.open = false;
      }
    }, true);
  }
  hasTrigger(trigger) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(trigger);
  }
  onFocus() {
    if (this.disabled || this.open || !this.hasTrigger("focus")) {
      return;
    }
    this.open = true;
  }
  onBlur() {
    if (this.disabled || !this.open || !this.hasTrigger("focus")) {
      return;
    }
    this.requestClose();
  }
  onClick(e5) {
    if (this.disabled || e5.button || !this.hasTrigger("click")) {
      return;
    }
    if (this.open && (this.hasTrigger("hover") || this.hasTrigger("focus"))) {
      return;
    }
    this.open = !this.open;
  }
  onKeydown(e5) {
    if (this.disabled || !this.open || e5.key !== "Escape") {
      return;
    }
    e5.stopPropagation();
    this.requestClose();
  }
  onMouseEnter() {
    if (this.disabled || this.open || !this.hasTrigger("hover")) {
      return;
    }
    if (this.openDelay) {
      window.clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => {
        this.open = true;
      }, this.openDelay);
    } else {
      this.open = true;
    }
  }
  onMouseLeave() {
    window.clearTimeout(this.hoverTimeout);
    if (this.disabled || !this.open || !this.hasTrigger("hover")) {
      return;
    }
    this.hoverTimeout = window.setTimeout(() => {
      this.requestClose();
    }, this.closeDelay || 50);
  }
  /**
   * 在 document 上点击时，根据条件判断是否关闭 tooltip
   */
  onDocumentClick(e5) {
    if (this.disabled || !this.open) {
      return;
    }
    const path = e5.composedPath();
    if (!path.includes(this)) {
      this.requestClose();
    }
  }
  onWindowScroll() {
    window.requestAnimationFrame(() => this.updatePositioner());
  }
  updatePositioner() {
    const $popup = $(this.popupRef.value);
    const targetMargin = this.isRich() ? 0 : 4;
    const popupMargin = 4;
    const targetRect = this.target.getBoundingClientRect();
    const targetTop = targetRect.top;
    const targetLeft = targetRect.left;
    const targetHeight = targetRect.height;
    const targetWidth = targetRect.width;
    const popupHeight = this.popupRef.value.offsetHeight;
    const popupWidth = this.popupRef.value.offsetWidth;
    const popupXSpace = popupWidth + targetMargin + popupMargin;
    const popupYSpace = popupHeight + targetMargin + popupMargin;
    let transformOriginX;
    let transformOriginY;
    let top;
    let left;
    let placement = this.placement;
    if (placement === "auto") {
      const $window = $(window);
      const hasTopSpace = targetTop > popupYSpace;
      const hasBottomSpace = $window.height() - targetTop - targetHeight > popupYSpace;
      const hasLeftSpace = targetLeft > popupXSpace;
      const hasRightSpace = $window.width() - targetLeft - targetWidth > popupXSpace;
      if (this.isRich()) {
        placement = "bottom-right";
        if (hasBottomSpace && hasRightSpace) {
          placement = "bottom-right";
        } else if (hasBottomSpace && hasLeftSpace) {
          placement = "bottom-left";
        } else if (hasTopSpace && hasRightSpace) {
          placement = "top-right";
        } else if (hasTopSpace && hasLeftSpace) {
          placement = "top-left";
        } else if (hasBottomSpace) {
          placement = "bottom";
        } else if (hasTopSpace) {
          placement = "top";
        } else if (hasRightSpace) {
          placement = "right";
        } else if (hasLeftSpace) {
          placement = "left";
        }
      } else {
        placement = "top";
        if (hasTopSpace) {
          placement = "top";
        } else if (hasBottomSpace) {
          placement = "bottom";
        } else if (hasLeftSpace) {
          placement = "left";
        } else if (hasRightSpace) {
          placement = "right";
        }
      }
    }
    const [position, alignment] = placement.split("-");
    switch (position) {
      case "top":
        transformOriginY = "bottom";
        top = targetTop - popupHeight - targetMargin;
        break;
      case "bottom":
        transformOriginY = "top";
        top = targetTop + targetHeight + targetMargin;
        break;
      default:
        transformOriginY = "center";
        switch (alignment) {
          case "start":
            top = targetTop;
            break;
          case "end":
            top = targetTop + targetHeight - popupHeight;
            break;
          default:
            top = targetTop + targetHeight / 2 - popupHeight / 2;
            break;
        }
        break;
    }
    switch (position) {
      case "left":
        transformOriginX = "right";
        left = targetLeft - popupWidth - targetMargin;
        break;
      case "right":
        transformOriginX = "left";
        left = targetLeft + targetWidth + targetMargin;
        break;
      default:
        transformOriginX = "center";
        switch (alignment) {
          case "start":
            left = targetLeft;
            break;
          case "end":
            left = targetLeft + targetWidth - popupWidth;
            break;
          case "left":
            transformOriginX = "right";
            left = targetLeft - popupWidth - targetMargin;
            break;
          case "right":
            transformOriginX = "left";
            left = targetLeft + targetWidth + targetMargin;
            break;
          default:
            left = targetLeft + targetWidth / 2 - popupWidth / 2;
            break;
        }
        break;
    }
    $popup.css({
      top,
      left,
      transformOrigin: [transformOriginX, transformOriginY].join(" ")
    });
  }
};
Tooltip.styles = [componentStyle, style24];
__decorate([
  n4({ reflect: true })
], Tooltip.prototype, "variant", void 0);
__decorate([
  n4({ reflect: true })
], Tooltip.prototype, "placement", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "open-delay" })
], Tooltip.prototype, "openDelay", void 0);
__decorate([
  n4({ type: Number, reflect: true, attribute: "close-delay" })
], Tooltip.prototype, "closeDelay", void 0);
__decorate([
  n4({ reflect: true })
], Tooltip.prototype, "headline", void 0);
__decorate([
  n4({ reflect: true })
], Tooltip.prototype, "content", void 0);
__decorate([
  n4({ reflect: true })
], Tooltip.prototype, "trigger", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Tooltip.prototype, "disabled", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], Tooltip.prototype, "open", void 0);
__decorate([
  watch("placement", true),
  watch("content", true)
], Tooltip.prototype, "onPositionChange", null);
__decorate([
  watch("open")
], Tooltip.prototype, "onOpenChange", null);
Tooltip = __decorate([
  t2("mdui-tooltip")
], Tooltip);

// node_modules/@mdui/shared/helpers/slot.js
var getInnerHtmlFromSlot = (slot) => {
  const nodes = slot.assignedNodes({ flatten: true });
  let html = "";
  [...nodes].forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      html += node.outerHTML;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      html += node.textContent;
    }
  });
  return html;
};

// node_modules/mdui/components/top-app-bar/top-app-bar-title-style.js
var topAppBarTitleStyle = i`:host{display:block;width:100%;flex-shrink:initial!important;overflow:hidden;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-title-large-size);font-weight:var(--mdui-typescale-title-large-weight);letter-spacing:var(--mdui-typescale-title-large-tracking);line-height:var(--mdui-typescale-title-large-line-height);line-height:2.5rem}.label{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:1;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear)}.label.variant-center-aligned{text-align:center}.label.variant-large:not(.shrink),.label.variant-medium:not(.shrink){opacity:0}.label.variant-large.shrink,.label.variant-medium.shrink{transition-delay:var(--mdui-motion-duration-short2)}.label-large{display:none;position:absolute;width:100%;left:0;margin-right:0;padding:0 1rem;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear)}.label-large.variant-large,.label-large.variant-medium{display:block}.label-large.variant-medium{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;bottom:.75rem;font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.label-large.variant-large{display:-webkit-box;overflow:hidden;white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2;bottom:1.25rem;font-size:var(--mdui-typescale-headline-medium-size);font-weight:var(--mdui-typescale-headline-medium-weight);letter-spacing:var(--mdui-typescale-headline-medium-tracking);line-height:var(--mdui-typescale-headline-medium-line-height)}.label-large.variant-large:not(.shrink),.label-large.variant-medium:not(.shrink){opacity:1;transition-delay:var(--mdui-motion-duration-short2)}.label-large.variant-large.shrink,.label-large.variant-medium.shrink{opacity:0;z-index:-1}`;

// node_modules/mdui/components/top-app-bar/top-app-bar-title.js
var TopAppBarTitle = class TopAppBarTitle2 extends MduiElement {
  constructor() {
    super(...arguments);
    this.variant = "small";
    this.shrink = false;
    this.hasSlotController = new HasSlotController(this, "label-large");
    this.labelLargeRef = ii();
    this.defaultSlotRef = ii();
  }
  render() {
    const hasLabelLargeSlot = this.hasSlotController.test("label-large");
    const className2 = Rt({
      shrink: this.shrink,
      "variant-center-aligned": this.variant === "center-aligned",
      "variant-small": this.variant === "small",
      "variant-medium": this.variant === "medium",
      "variant-large": this.variant === "large"
    });
    return ke`<slot part="label" class="label ${className2}" ${Kt(this.defaultSlotRef)} @slotchange="${() => this.onSlotChange(hasLabelLargeSlot)}"></slot>${hasLabelLargeSlot ? ke`<slot name="label-large" part="label-large" class="label-large ${className2}"></slot>` : ke`<div ${Kt(this.labelLargeRef)} part="label-large" class="label-large ${className2}"></div>`}`;
  }
  /**
   * default slot 变化时，同步到 label-large 中
   * @param hasLabelLargeSlot
   * @private
   */
  onSlotChange(hasLabelLargeSlot) {
    if (!hasLabelLargeSlot) {
      this.labelLargeRef.value.innerHTML = getInnerHtmlFromSlot(this.defaultSlotRef.value);
    }
  }
};
TopAppBarTitle.styles = [
  componentStyle,
  topAppBarTitleStyle
];
__decorate([
  r4()
], TopAppBarTitle.prototype, "variant", void 0);
__decorate([
  r4()
], TopAppBarTitle.prototype, "shrink", void 0);
TopAppBarTitle = __decorate([
  t2("mdui-top-app-bar-title")
], TopAppBarTitle);

// node_modules/mdui/components/top-app-bar/top-app-bar-style.js
var topAppBarStyle = i`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;top:0;right:0;left:0;display:flex;flex:0 0 auto;align-items:flex-start;justify-content:flex-start;border-bottom-left-radius:var(--shape-corner);border-bottom-right-radius:var(--shape-corner);z-index:var(--z-index);transition:top var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard),height var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard),box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear),background-color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);padding:.75rem .5rem;height:4rem;background-color:rgb(var(--mdui-color-surface))}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([scroll-behavior~=shrink]){transition-duration:var(--mdui-motion-duration-short4)}:host([scrolling]){background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2)}::slotted(mdui-button-icon){color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}::slotted(mdui-button-icon:first-child){color:rgb(var(--mdui-color-on-surface))}::slotted(mdui-avatar){width:1.875rem;height:1.875rem;margin-top:.3125rem;margin-bottom:.3125rem}::slotted(*){flex-shrink:0}::slotted(:not(:last-child)){margin-right:.5rem}:host([variant=medium]){height:7rem}:host([variant=large]){height:9.5rem}:host([hide]){transition-duration:var(--mdui-motion-duration-short4);top:-4.625rem}:host([hide][variant=medium]){top:-7.625rem}:host([hide][variant=large]){top:-10.125rem}:host([shrink][variant=large]),:host([shrink][variant=medium]){transition-duration:var(--mdui-motion-duration-short4);height:4rem}`;

// node_modules/mdui/components/top-app-bar/top-app-bar.js
var TopAppBar = class TopAppBar2 extends ScrollBehaviorMixin(LayoutItemBase) {
  constructor() {
    super(...arguments);
    this.variant = "small";
    this.hide = false;
    this.shrink = false;
    this.scrolling = false;
  }
  get scrollPaddingPosition() {
    return "top";
  }
  get layoutPlacement() {
    return "top";
  }
  async onVariantChange() {
    if (this.hasUpdated) {
      this.addEventListener("transitionend", async () => {
        await this.scrollBehaviorDefinedController.whenDefined();
        this.updateContainerPadding();
      }, { once: true });
    } else {
      await this.updateComplete;
    }
    this.titleElements.forEach((titleElement) => {
      titleElement.variant = this.variant;
    });
  }
  async onShrinkChange() {
    if (!this.hasUpdated) {
      await this.updateComplete;
    }
    this.titleElements.forEach((titleElement) => {
      titleElement.shrink = this.shrink;
    });
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.addEventListener("transitionend", (e5) => {
      if (e5.target === this) {
        this.emit(this.hide ? "hidden" : "shown");
      }
    });
  }
  render() {
    return ke`<slot></slot>`;
  }
  runScrollNoThreshold(isScrollingUp, scrollTop) {
    if (this.hasScrollBehavior("shrink")) {
      if (isScrollingUp && scrollTop < 8) {
        this.shrink = false;
      }
    }
  }
  runScrollThreshold(isScrollingUp, scrollTop) {
    if (this.hasScrollBehavior("elevate")) {
      this.scrolling = !!scrollTop;
    }
    if (this.hasScrollBehavior("shrink")) {
      if (!isScrollingUp) {
        this.shrink = true;
      }
    }
    if (this.hasScrollBehavior("hide")) {
      if (!isScrollingUp && !this.hide) {
        const eventProceeded = this.emit("hide", { cancelable: true });
        if (eventProceeded) {
          this.hide = true;
        }
      }
      if (isScrollingUp && this.hide) {
        const eventProceeded = this.emit("show", { cancelable: true });
        if (eventProceeded) {
          this.hide = false;
        }
      }
    }
  }
};
TopAppBar.styles = [
  componentStyle,
  topAppBarStyle
];
__decorate([
  n4({ reflect: true })
], TopAppBar.prototype, "variant", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TopAppBar.prototype, "hide", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TopAppBar.prototype, "shrink", void 0);
__decorate([
  n4({ reflect: true, attribute: "scroll-behavior" })
], TopAppBar.prototype, "scrollBehavior", void 0);
__decorate([
  n4({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
], TopAppBar.prototype, "scrolling", void 0);
__decorate([
  o4({ selector: "mdui-top-app-bar-title", flatten: true })
], TopAppBar.prototype, "titleElements", void 0);
__decorate([
  watch("variant")
], TopAppBar.prototype, "onVariantChange", null);
__decorate([
  watch("shrink")
], TopAppBar.prototype, "onShrinkChange", null);
TopAppBar = __decorate([
  t2("mdui-top-app-bar")
], TopAppBar);

// node_modules/is-promise/index.mjs
function isPromise(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}

// node_modules/@mdui/shared/helpers/queue.js
var container = {};
function queue(name, func) {
  if (isUndefined(container[name])) {
    container[name] = [];
  }
  if (isUndefined(func)) {
    return container[name];
  }
  container[name].push(func);
}
function dequeue(name) {
  if (isUndefined(container[name])) {
    return;
  }
  if (!container[name].length) {
    return;
  }
  const func = container[name].shift();
  func();
}

// node_modules/mdui/functions/dialog.js
var defaultAction = {
  onClick: returnTrue
};
var queueName = "mdui.functions.dialog.";
var currentDialog = void 0;
var dialog = (options) => {
  const dialog2 = new Dialog();
  const $dialog = $(dialog2);
  const properties = [
    "headline",
    "description",
    "icon",
    "closeOnEsc",
    "closeOnOverlayClick",
    "stackedActions"
  ];
  const callbacks = ["onOpen", "onOpened", "onClose", "onClosed", "onOverlayClick"];
  Object.entries(options).forEach(([key, value]) => {
    if (properties.includes(key)) {
      dialog2[key] = value;
    } else if (callbacks.includes(key)) {
      const eventName = toKebabCase(key.slice(2));
      $dialog.on(eventName, () => {
        value.call(dialog2, dialog2);
      });
    }
  });
  if (options.body) {
    $dialog.append(options.body);
  }
  if (options.actions) {
    options.actions.forEach((action) => {
      const mergedAction = Object.assign({}, defaultAction, action);
      $(`<mdui-button
        slot="action"
        variant="text"
      >${mergedAction.text}</mdui-button>`).appendTo($dialog).on("click", function() {
        const clickResult = mergedAction.onClick.call(dialog2, dialog2);
        if (isPromise(clickResult)) {
          this.loading = true;
          clickResult.then(() => {
            dialog2.open = false;
          }).finally(() => {
            this.loading = false;
          });
        } else if (clickResult !== false) {
          dialog2.open = false;
        }
      });
    });
  }
  $dialog.appendTo("body").on("closed", () => {
    $dialog.remove();
    if (options.queue) {
      currentDialog = void 0;
      dequeue(queueName + options.queue);
    }
  });
  if (!options.queue) {
    setTimeout(() => {
      dialog2.open = true;
    });
  } else if (currentDialog) {
    queue(queueName + options.queue, () => {
      dialog2.open = true;
      currentDialog = dialog2;
    });
  } else {
    setTimeout(() => {
      dialog2.open = true;
    });
    currentDialog = dialog2;
  }
  return dialog2;
};

// node_modules/mdui/functions/alert.js
var getConfirmText = () => {
  return msg("OK", {
    id: "functions.alert.confirmText"
  });
};
var alert = (options) => {
  const mergedOptions = Object.assign({}, {
    confirmText: getConfirmText(),
    onConfirm: returnTrue
  }, options);
  const properties = [
    "headline",
    "description",
    "icon",
    "closeOnEsc",
    "closeOnOverlayClick",
    "queue",
    "onOpen",
    "onOpened",
    "onClose",
    "onClosed",
    "onOverlayClick"
  ];
  return new Promise((resolve, reject) => {
    let isResolve = false;
    const dialog2 = dialog({
      ...Object.fromEntries(properties.filter((key) => !isUndefined(mergedOptions[key])).map((key) => [key, mergedOptions[key]])),
      actions: [
        {
          text: mergedOptions.confirmText,
          onClick: (dialog3) => {
            const clickResult = mergedOptions.onConfirm.call(dialog3, dialog3);
            if (isPromise(clickResult)) {
              clickResult.then(() => {
                isResolve = true;
              });
            } else if (clickResult !== false) {
              isResolve = true;
            }
            return clickResult;
          }
        }
      ]
    });
    if (!options.confirmText) {
      onLocaleReady(dialog2, () => {
        $(dialog2).find('[slot="action"]').text(getConfirmText());
      });
    }
    $(dialog2).on("close", () => {
      isResolve ? resolve() : reject();
      offLocaleReady(dialog2);
    });
  });
};

// node_modules/mdui/functions/confirm.js
var getConfirmText2 = () => {
  return msg("OK", {
    id: "functions.confirm.confirmText"
  });
};
var getCancelText = () => {
  return msg("Cancel", {
    id: "functions.confirm.cancelText"
  });
};
var confirm = (options) => {
  const mergedOptions = Object.assign({}, {
    confirmText: getConfirmText2(),
    cancelText: getCancelText(),
    onConfirm: returnTrue,
    onCancel: returnTrue
  }, options);
  const properties = [
    "headline",
    "description",
    "icon",
    "closeOnEsc",
    "closeOnOverlayClick",
    "stackedActions",
    "queue",
    "onOpen",
    "onOpened",
    "onClose",
    "onClosed",
    "onOverlayClick"
  ];
  return new Promise((resolve, reject) => {
    let isResolve = false;
    const dialog2 = dialog({
      ...Object.fromEntries(properties.filter((key) => !isUndefined(mergedOptions[key])).map((key) => [key, mergedOptions[key]])),
      actions: [
        {
          text: mergedOptions.cancelText,
          onClick: (dialog3) => {
            return mergedOptions.onCancel.call(dialog3, dialog3);
          }
        },
        {
          text: mergedOptions.confirmText,
          onClick: (dialog3) => {
            const clickResult = mergedOptions.onConfirm.call(dialog3, dialog3);
            if (isPromise(clickResult)) {
              clickResult.then(() => {
                isResolve = true;
              });
            } else if (clickResult !== false) {
              isResolve = true;
            }
            return clickResult;
          }
        }
      ]
    });
    if (!options.confirmText) {
      onLocaleReady(dialog2, () => {
        $(dialog2).find('[slot="action"]').last().text(getConfirmText2());
      });
    }
    if (!options.cancelText) {
      onLocaleReady(dialog2, () => {
        $(dialog2).find('[slot="action"]').first().text(getCancelText());
      });
    }
    $(dialog2).on("close", () => {
      isResolve ? resolve() : reject();
      offLocaleReady(dialog2);
    });
  });
};

// node_modules/@material/material-color-utilities/utils/math_utils.js
function signum(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else {
    return 1;
  }
}
function lerp(start, stop, amount) {
  return (1 - amount) * start + amount * stop;
}
function clampInt(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function clampDouble(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function sanitizeDegreesInt(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function sanitizeDegreesDouble(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function rotationDirection(from, to2) {
  const increasingDifference = sanitizeDegreesDouble(to2 - from);
  return increasingDifference <= 180 ? 1 : -1;
}
function differenceDegrees(a3, b3) {
  return 180 - Math.abs(Math.abs(a3 - b3) - 180);
}
function matrixMultiply(row, matrix) {
  const a3 = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
  const b3 = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
  const c5 = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
  return [a3, b3, c5];
}

// node_modules/@material/material-color-utilities/utils/color_utils.js
var SRGB_TO_XYZ = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
];
var XYZ_TO_SRGB = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
];
var WHITE_POINT_D65 = [95.047, 100, 108.883];
function argbFromRgb(red, green, blue) {
  return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}
function argbFromLinrgb(linrgb) {
  const r7 = delinearized(linrgb[0]);
  const g4 = delinearized(linrgb[1]);
  const b3 = delinearized(linrgb[2]);
  return argbFromRgb(r7, g4, b3);
}
function alphaFromArgb(argb) {
  return argb >> 24 & 255;
}
function redFromArgb(argb) {
  return argb >> 16 & 255;
}
function greenFromArgb(argb) {
  return argb >> 8 & 255;
}
function blueFromArgb(argb) {
  return argb & 255;
}
function argbFromXyz(x3, y3, z2) {
  const matrix = XYZ_TO_SRGB;
  const linearR = matrix[0][0] * x3 + matrix[0][1] * y3 + matrix[0][2] * z2;
  const linearG = matrix[1][0] * x3 + matrix[1][1] * y3 + matrix[1][2] * z2;
  const linearB = matrix[2][0] * x3 + matrix[2][1] * y3 + matrix[2][2] * z2;
  const r7 = delinearized(linearR);
  const g4 = delinearized(linearG);
  const b3 = delinearized(linearB);
  return argbFromRgb(r7, g4, b3);
}
function xyzFromArgb(argb) {
  const r7 = linearized(redFromArgb(argb));
  const g4 = linearized(greenFromArgb(argb));
  const b3 = linearized(blueFromArgb(argb));
  return matrixMultiply([r7, g4, b3], SRGB_TO_XYZ);
}
function argbFromLab(l3, a3, b3) {
  const whitePoint = WHITE_POINT_D65;
  const fy = (l3 + 16) / 116;
  const fx = a3 / 500 + fy;
  const fz = fy - b3 / 200;
  const xNormalized = labInvf(fx);
  const yNormalized = labInvf(fy);
  const zNormalized = labInvf(fz);
  const x3 = xNormalized * whitePoint[0];
  const y3 = yNormalized * whitePoint[1];
  const z2 = zNormalized * whitePoint[2];
  return argbFromXyz(x3, y3, z2);
}
function labFromArgb(argb) {
  const linearR = linearized(redFromArgb(argb));
  const linearG = linearized(greenFromArgb(argb));
  const linearB = linearized(blueFromArgb(argb));
  const matrix = SRGB_TO_XYZ;
  const x3 = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
  const y3 = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
  const z2 = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
  const whitePoint = WHITE_POINT_D65;
  const xNormalized = x3 / whitePoint[0];
  const yNormalized = y3 / whitePoint[1];
  const zNormalized = z2 / whitePoint[2];
  const fx = labF(xNormalized);
  const fy = labF(yNormalized);
  const fz = labF(zNormalized);
  const l3 = 116 * fy - 16;
  const a3 = 500 * (fx - fy);
  const b3 = 200 * (fy - fz);
  return [l3, a3, b3];
}
function argbFromLstar(lstar) {
  const y3 = yFromLstar(lstar);
  const component = delinearized(y3);
  return argbFromRgb(component, component, component);
}
function lstarFromArgb(argb) {
  const y3 = xyzFromArgb(argb)[1];
  return 116 * labF(y3 / 100) - 16;
}
function yFromLstar(lstar) {
  return 100 * labInvf((lstar + 16) / 116);
}
function lstarFromY(y3) {
  return labF(y3 / 100) * 116 - 16;
}
function linearized(rgbComponent) {
  const normalized = rgbComponent / 255;
  if (normalized <= 0.040449936) {
    return normalized / 12.92 * 100;
  } else {
    return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100;
  }
}
function delinearized(rgbComponent) {
  const normalized = rgbComponent / 100;
  let delinearized2 = 0;
  if (normalized <= 31308e-7) {
    delinearized2 = normalized * 12.92;
  } else {
    delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
  }
  return clampInt(0, 255, Math.round(delinearized2 * 255));
}
function whitePointD65() {
  return WHITE_POINT_D65;
}
function labF(t5) {
  const e5 = 216 / 24389;
  const kappa = 24389 / 27;
  if (t5 > e5) {
    return Math.pow(t5, 1 / 3);
  } else {
    return (kappa * t5 + 16) / 116;
  }
}
function labInvf(ft) {
  const e5 = 216 / 24389;
  const kappa = 24389 / 27;
  const ft3 = ft * ft * ft;
  if (ft3 > e5) {
    return ft3;
  } else {
    return (116 * ft - 16) / kappa;
  }
}

// node_modules/@material/material-color-utilities/hct/viewing_conditions.js
var ViewingConditions = class _ViewingConditions {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
    const xyz = whitePoint;
    const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
    const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
    const bW = xyz[0] * -2079e-6 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
    const f5 = 0.8 + surround / 10;
    const c5 = f5 >= 0.9 ? lerp(0.59, 0.69, (f5 - 0.9) * 10) : lerp(0.525, 0.59, (f5 - 0.8) * 10);
    let d3 = discountingIlluminant ? 1 : f5 * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
    d3 = d3 > 1 ? 1 : d3 < 0 ? 0 : d3;
    const nc = f5;
    const rgbD = [
      d3 * (100 / rW) + 1 - d3,
      d3 * (100 / gW) + 1 - d3,
      d3 * (100 / bW) + 1 - d3
    ];
    const k2 = 1 / (5 * adaptingLuminance + 1);
    const k4 = k2 * k2 * k2 * k2;
    const k4F = 1 - k4;
    const fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
    const n6 = yFromLstar(backgroundLstar) / whitePoint[1];
    const z2 = 1.48 + Math.sqrt(n6);
    const nbb = 0.725 / Math.pow(n6, 0.2);
    const ncb = nbb;
    const rgbAFactors = [
      Math.pow(fl * rgbD[0] * rW / 100, 0.42),
      Math.pow(fl * rgbD[1] * gW / 100, 0.42),
      Math.pow(fl * rgbD[2] * bW / 100, 0.42)
    ];
    const rgbA = [
      400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
      400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
      400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
    ];
    const aw = (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
    return new _ViewingConditions(n6, aw, nbb, ncb, c5, nc, rgbD, fl, Math.pow(fl, 0.25), z2);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(n6, aw, nbb, ncb, c5, nc, rgbD, fl, fLRoot, z2) {
    this.n = n6;
    this.aw = aw;
    this.nbb = nbb;
    this.ncb = ncb;
    this.c = c5;
    this.nc = nc;
    this.rgbD = rgbD;
    this.fl = fl;
    this.fLRoot = fLRoot;
    this.z = z2;
  }
};
ViewingConditions.DEFAULT = ViewingConditions.make();

// node_modules/@material/material-color-utilities/hct/cam16.js
var Cam16 = class _Cam16 {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(hue, chroma, j3, q2, m4, s2, jstar, astar, bstar) {
    this.hue = hue;
    this.chroma = chroma;
    this.j = j3;
    this.q = q2;
    this.m = m4;
    this.s = s2;
    this.jstar = jstar;
    this.astar = astar;
    this.bstar = bstar;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(other) {
    const dJ = this.jstar - other.jstar;
    const dA = this.astar - other.astar;
    const dB = this.bstar - other.bstar;
    const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
    const dE = 1.41 * Math.pow(dEPrime, 0.63);
    return dE;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(argb) {
    return _Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(argb, viewingConditions) {
    const red = (argb & 16711680) >> 16;
    const green = (argb & 65280) >> 8;
    const blue = argb & 255;
    const redL = linearized(red);
    const greenL = linearized(green);
    const blueL = linearized(blue);
    const x3 = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
    const y3 = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
    const z2 = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
    const rC = 0.401288 * x3 + 0.650173 * y3 - 0.051461 * z2;
    const gC = -0.250268 * x3 + 1.204414 * y3 + 0.045854 * z2;
    const bC = -2079e-6 * x3 + 0.048952 * y3 + 0.953127 * z2;
    const rD = viewingConditions.rgbD[0] * rC;
    const gD = viewingConditions.rgbD[1] * gC;
    const bD = viewingConditions.rgbD[2] * bC;
    const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
    const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
    const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
    const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
    const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
    const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
    const a3 = (11 * rA + -12 * gA + bA) / 11;
    const b3 = (rA + gA - 2 * bA) / 9;
    const u3 = (20 * rA + 20 * gA + 21 * bA) / 20;
    const p22 = (40 * rA + 20 * gA + bA) / 20;
    const atan2 = Math.atan2(b3, a3);
    const atanDegrees = atan2 * 180 / Math.PI;
    const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
    const hueRadians = hue * Math.PI / 180;
    const ac = p22 * viewingConditions.nbb;
    const j3 = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
    const q2 = 4 / viewingConditions.c * Math.sqrt(j3 / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const huePrime = hue < 20.14 ? hue + 360 : hue;
    const eHue = 0.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
    const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
    const t5 = p1 * Math.sqrt(a3 * a3 + b3 * b3) / (u3 + 0.305);
    const alpha = Math.pow(t5, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const c5 = alpha * Math.sqrt(j3 / 100);
    const m4 = c5 * viewingConditions.fLRoot;
    const s2 = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const jstar = (1 + 100 * 7e-3) * j3 / (1 + 7e-3 * j3);
    const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m4);
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(hue, c5, j3, q2, m4, s2, jstar, astar, bstar);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(j3, c5, h5) {
    return _Cam16.fromJchInViewingConditions(j3, c5, h5, ViewingConditions.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(j3, c5, h5, viewingConditions) {
    const q2 = 4 / viewingConditions.c * Math.sqrt(j3 / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const m4 = c5 * viewingConditions.fLRoot;
    const alpha = c5 / Math.sqrt(j3 / 100);
    const s2 = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const hueRadians = h5 * Math.PI / 180;
    const jstar = (1 + 100 * 7e-3) * j3 / (1 + 7e-3 * j3);
    const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m4);
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(h5, c5, j3, q2, m4, s2, jstar, astar, bstar);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(jstar, astar, bstar) {
    return _Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
    const a3 = astar;
    const b3 = bstar;
    const m4 = Math.sqrt(a3 * a3 + b3 * b3);
    const M2 = (Math.exp(m4 * 0.0228) - 1) / 0.0228;
    const c5 = M2 / viewingConditions.fLRoot;
    let h5 = Math.atan2(b3, a3) * (180 / Math.PI);
    if (h5 < 0) {
      h5 += 360;
    }
    const j3 = jstar / (1 - (jstar - 100) * 7e-3);
    return _Cam16.fromJchInViewingConditions(j3, c5, h5, viewingConditions);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(ViewingConditions.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(viewingConditions) {
    const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
    const t5 = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
    const hRad = this.hue * Math.PI / 180;
    const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const p22 = ac / viewingConditions.nbb;
    const hSin = Math.sin(hRad);
    const hCos = Math.cos(hRad);
    const gamma = 23 * (p22 + 0.305) * t5 / (23 * p1 + 11 * t5 * hCos + 108 * t5 * hSin);
    const a3 = gamma * hCos;
    const b3 = gamma * hSin;
    const rA = (460 * p22 + 451 * a3 + 288 * b3) / 1403;
    const gA = (460 * p22 - 891 * a3 - 261 * b3) / 1403;
    const bA = (460 * p22 - 220 * a3 - 6300 * b3) / 1403;
    const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
    const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
    const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
    const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
    const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
    const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
    const rF = rC / viewingConditions.rgbD[0];
    const gF = gC / viewingConditions.rgbD[1];
    const bF = bC / viewingConditions.rgbD[2];
    const x3 = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
    const y3 = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
    const z2 = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
    const argb = argbFromXyz(x3, y3, z2);
    return argb;
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(x3, y3, z2, viewingConditions) {
    const rC = 0.401288 * x3 + 0.650173 * y3 - 0.051461 * z2;
    const gC = -0.250268 * x3 + 1.204414 * y3 + 0.045854 * z2;
    const bC = -2079e-6 * x3 + 0.048952 * y3 + 0.953127 * z2;
    const rD = viewingConditions.rgbD[0] * rC;
    const gD = viewingConditions.rgbD[1] * gC;
    const bD = viewingConditions.rgbD[2] * bC;
    const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
    const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
    const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
    const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
    const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
    const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
    const a3 = (11 * rA + -12 * gA + bA) / 11;
    const b3 = (rA + gA - 2 * bA) / 9;
    const u3 = (20 * rA + 20 * gA + 21 * bA) / 20;
    const p22 = (40 * rA + 20 * gA + bA) / 20;
    const atan2 = Math.atan2(b3, a3);
    const atanDegrees = atan2 * 180 / Math.PI;
    const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
    const hueRadians = hue * Math.PI / 180;
    const ac = p22 * viewingConditions.nbb;
    const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
    const Q2 = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const huePrime = hue < 20.14 ? hue + 360 : hue;
    const eHue = 1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
    const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
    const t5 = p1 * Math.sqrt(a3 * a3 + b3 * b3) / (u3 + 0.305);
    const alpha = Math.pow(t5, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const C = alpha * Math.sqrt(J / 100);
    const M2 = C * viewingConditions.fLRoot;
    const s2 = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const jstar = (1 + 100 * 7e-3) * J / (1 + 7e-3 * J);
    const mstar = Math.log(1 + 0.0228 * M2) / 0.0228;
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(hue, C, J, Q2, M2, s2, jstar, astar, bstar);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(viewingConditions) {
    const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
    const t5 = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
    const hRad = this.hue * Math.PI / 180;
    const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const p22 = ac / viewingConditions.nbb;
    const hSin = Math.sin(hRad);
    const hCos = Math.cos(hRad);
    const gamma = 23 * (p22 + 0.305) * t5 / (23 * p1 + 11 * t5 * hCos + 108 * t5 * hSin);
    const a3 = gamma * hCos;
    const b3 = gamma * hSin;
    const rA = (460 * p22 + 451 * a3 + 288 * b3) / 1403;
    const gA = (460 * p22 - 891 * a3 - 261 * b3) / 1403;
    const bA = (460 * p22 - 220 * a3 - 6300 * b3) / 1403;
    const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
    const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
    const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
    const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
    const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
    const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
    const rF = rC / viewingConditions.rgbD[0];
    const gF = gC / viewingConditions.rgbD[1];
    const bF = bC / viewingConditions.rgbD[2];
    const x3 = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
    const y3 = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
    const z2 = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
    return [x3, y3, z2];
  }
};

// node_modules/@material/material-color-utilities/hct/hct_solver.js
var HctSolver = class _HctSolver {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(angle) {
    return (angle + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(rgbComponent) {
    const normalized = rgbComponent / 100;
    let delinearized2 = 0;
    if (normalized <= 31308e-7) {
      delinearized2 = normalized * 12.92;
    } else {
      delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
    }
    return delinearized2 * 255;
  }
  static chromaticAdaptation(component) {
    const af = Math.pow(Math.abs(component), 0.42);
    return signum(component) * 400 * af / (af + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(linrgb) {
    const scaledDiscount = matrixMultiply(linrgb, _HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
    const rA = _HctSolver.chromaticAdaptation(scaledDiscount[0]);
    const gA = _HctSolver.chromaticAdaptation(scaledDiscount[1]);
    const bA = _HctSolver.chromaticAdaptation(scaledDiscount[2]);
    const a3 = (11 * rA + -12 * gA + bA) / 11;
    const b3 = (rA + gA - 2 * bA) / 9;
    return Math.atan2(b3, a3);
  }
  static areInCyclicOrder(a3, b3, c5) {
    const deltaAB = _HctSolver.sanitizeRadians(b3 - a3);
    const deltaAC = _HctSolver.sanitizeRadians(c5 - a3);
    return deltaAB < deltaAC;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(source, mid, target) {
    return (mid - source) / (target - source);
  }
  static lerpPoint(source, t5, target) {
    return [
      source[0] + (target[0] - source[0]) * t5,
      source[1] + (target[1] - source[1]) * t5,
      source[2] + (target[2] - source[2]) * t5
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(source, coordinate, target, axis) {
    const t5 = _HctSolver.intercept(source[axis], coordinate, target[axis]);
    return _HctSolver.lerpPoint(source, t5, target);
  }
  static isBounded(x3) {
    return 0 <= x3 && x3 <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(y3, n6) {
    const kR = _HctSolver.Y_FROM_LINRGB[0];
    const kG = _HctSolver.Y_FROM_LINRGB[1];
    const kB = _HctSolver.Y_FROM_LINRGB[2];
    const coordA = n6 % 4 <= 1 ? 0 : 100;
    const coordB = n6 % 2 === 0 ? 0 : 100;
    if (n6 < 4) {
      const g4 = coordA;
      const b3 = coordB;
      const r7 = (y3 - g4 * kG - b3 * kB) / kR;
      if (_HctSolver.isBounded(r7)) {
        return [r7, g4, b3];
      } else {
        return [-1, -1, -1];
      }
    } else if (n6 < 8) {
      const b3 = coordA;
      const r7 = coordB;
      const g4 = (y3 - r7 * kR - b3 * kB) / kG;
      if (_HctSolver.isBounded(g4)) {
        return [r7, g4, b3];
      } else {
        return [-1, -1, -1];
      }
    } else {
      const r7 = coordA;
      const g4 = coordB;
      const b3 = (y3 - r7 * kR - g4 * kG) / kB;
      if (_HctSolver.isBounded(b3)) {
        return [r7, g4, b3];
      } else {
        return [-1, -1, -1];
      }
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(y3, targetHue) {
    let left = [-1, -1, -1];
    let right = left;
    let leftHue = 0;
    let rightHue = 0;
    let initialized = false;
    let uncut = true;
    for (let n6 = 0; n6 < 12; n6++) {
      const mid = _HctSolver.nthVertex(y3, n6);
      if (mid[0] < 0) {
        continue;
      }
      const midHue = _HctSolver.hueOf(mid);
      if (!initialized) {
        left = mid;
        right = mid;
        leftHue = midHue;
        rightHue = midHue;
        initialized = true;
        continue;
      }
      if (uncut || _HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
        uncut = false;
        if (_HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
          right = mid;
          rightHue = midHue;
        } else {
          left = mid;
          leftHue = midHue;
        }
      }
    }
    return [left, right];
  }
  static midpoint(a3, b3) {
    return [
      (a3[0] + b3[0]) / 2,
      (a3[1] + b3[1]) / 2,
      (a3[2] + b3[2]) / 2
    ];
  }
  static criticalPlaneBelow(x3) {
    return Math.floor(x3 - 0.5);
  }
  static criticalPlaneAbove(x3) {
    return Math.ceil(x3 - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(y3, targetHue) {
    const segment = _HctSolver.bisectToSegment(y3, targetHue);
    let left = segment[0];
    let leftHue = _HctSolver.hueOf(left);
    let right = segment[1];
    for (let axis = 0; axis < 3; axis++) {
      if (left[axis] !== right[axis]) {
        let lPlane = -1;
        let rPlane = 255;
        if (left[axis] < right[axis]) {
          lPlane = _HctSolver.criticalPlaneBelow(_HctSolver.trueDelinearized(left[axis]));
          rPlane = _HctSolver.criticalPlaneAbove(_HctSolver.trueDelinearized(right[axis]));
        } else {
          lPlane = _HctSolver.criticalPlaneAbove(_HctSolver.trueDelinearized(left[axis]));
          rPlane = _HctSolver.criticalPlaneBelow(_HctSolver.trueDelinearized(right[axis]));
        }
        for (let i4 = 0; i4 < 8; i4++) {
          if (Math.abs(rPlane - lPlane) <= 1) {
            break;
          } else {
            const mPlane = Math.floor((lPlane + rPlane) / 2);
            const midPlaneCoordinate = _HctSolver.CRITICAL_PLANES[mPlane];
            const mid = _HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
            const midHue = _HctSolver.hueOf(mid);
            if (_HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
              right = mid;
              rPlane = mPlane;
            } else {
              left = mid;
              leftHue = midHue;
              lPlane = mPlane;
            }
          }
        }
      }
    }
    return _HctSolver.midpoint(left, right);
  }
  static inverseChromaticAdaptation(adapted) {
    const adaptedAbs = Math.abs(adapted);
    const base = Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
    return signum(adapted) * Math.pow(base, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(hueRadians, chroma, y3) {
    let j3 = Math.sqrt(y3) * 11;
    const viewingConditions = ViewingConditions.DEFAULT;
    const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const eHue = 0.25 * (Math.cos(hueRadians + 2) + 3.8);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const hSin = Math.sin(hueRadians);
    const hCos = Math.cos(hueRadians);
    for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
      const jNormalized = j3 / 100;
      const alpha = chroma === 0 || j3 === 0 ? 0 : chroma / Math.sqrt(jNormalized);
      const t5 = Math.pow(alpha * tInnerCoeff, 1 / 0.9);
      const ac = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z);
      const p22 = ac / viewingConditions.nbb;
      const gamma = 23 * (p22 + 0.305) * t5 / (23 * p1 + 11 * t5 * hCos + 108 * t5 * hSin);
      const a3 = gamma * hCos;
      const b3 = gamma * hSin;
      const rA = (460 * p22 + 451 * a3 + 288 * b3) / 1403;
      const gA = (460 * p22 - 891 * a3 - 261 * b3) / 1403;
      const bA = (460 * p22 - 220 * a3 - 6300 * b3) / 1403;
      const rCScaled = _HctSolver.inverseChromaticAdaptation(rA);
      const gCScaled = _HctSolver.inverseChromaticAdaptation(gA);
      const bCScaled = _HctSolver.inverseChromaticAdaptation(bA);
      const linrgb = matrixMultiply([rCScaled, gCScaled, bCScaled], _HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
      if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
        return 0;
      }
      const kR = _HctSolver.Y_FROM_LINRGB[0];
      const kG = _HctSolver.Y_FROM_LINRGB[1];
      const kB = _HctSolver.Y_FROM_LINRGB[2];
      const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
      if (fnj <= 0) {
        return 0;
      }
      if (iterationRound === 4 || Math.abs(fnj - y3) < 2e-3) {
        if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
          return 0;
        }
        return argbFromLinrgb(linrgb);
      }
      j3 = j3 - (fnj - y3) * j3 / (2 * fnj);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(hueDegrees, chroma, lstar) {
    if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) {
      return argbFromLstar(lstar);
    }
    hueDegrees = sanitizeDegreesDouble(hueDegrees);
    const hueRadians = hueDegrees / 180 * Math.PI;
    const y3 = yFromLstar(lstar);
    const exactAnswer = _HctSolver.findResultByJ(hueRadians, chroma, y3);
    if (exactAnswer !== 0) {
      return exactAnswer;
    }
    const linrgb = _HctSolver.bisectToLimit(y3, hueRadians);
    return argbFromLinrgb(linrgb);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(hueDegrees, chroma, lstar) {
    return Cam16.fromInt(_HctSolver.solveToInt(hueDegrees, chroma, lstar));
  }
};
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];

// node_modules/@material/material-color-utilities/hct/hct.js
var Hct = class _Hct {
  static from(hue, chroma, tone) {
    return new _Hct(HctSolver.solveToInt(hue, chroma, tone));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(argb) {
    return new _Hct(argb);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(newHue) {
    this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(newChroma) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(newTone) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
  }
  constructor(argb) {
    this.argb = argb;
    const cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = lstarFromArgb(argb);
    this.argb = argb;
  }
  setInternalState(argb) {
    const cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = lstarFromArgb(argb);
    this.argb = argb;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(vc) {
    const cam = Cam16.fromInt(this.toInt());
    const viewedInVc = cam.xyzInViewingConditions(vc);
    const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
    const recastHct = _Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
    return recastHct;
  }
};

// node_modules/@material/material-color-utilities/blend/blend.js
var Blend = class _Blend {
  /**
   * Blend the design color's HCT hue towards the key color's HCT
   * hue, in a way that leaves the original color recognizable and
   * recognizably shifted towards the key color.
   *
   * @param designColor ARGB representation of an arbitrary color.
   * @param sourceColor ARGB representation of the main theme color.
   * @return The design color with a hue shifted towards the
   * system's color, a slightly warmer/cooler variant of the design
   * color's hue.
   */
  static harmonize(designColor, sourceColor) {
    const fromHct = Hct.fromInt(designColor);
    const toHct = Hct.fromInt(sourceColor);
    const differenceDegrees2 = differenceDegrees(fromHct.hue, toHct.hue);
    const rotationDegrees = Math.min(differenceDegrees2 * 0.5, 15);
    const outputHue = sanitizeDegreesDouble(fromHct.hue + rotationDegrees * rotationDirection(fromHct.hue, toHct.hue));
    return Hct.from(outputHue, fromHct.chroma, fromHct.tone).toInt();
  }
  /**
   * Blends hue from one color into another. The chroma and tone of
   * the original color are maintained.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, with a hue blended towards to. Chroma and tone
   * are constant.
   */
  static hctHue(from, to2, amount) {
    const ucs = _Blend.cam16Ucs(from, to2, amount);
    const ucsCam = Cam16.fromInt(ucs);
    const fromCam = Cam16.fromInt(from);
    const blended = Hct.from(ucsCam.hue, fromCam.chroma, lstarFromArgb(from));
    return blended.toInt();
  }
  /**
   * Blend in CAM16-UCS space.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, blended towards to. Hue, chroma, and tone will
   * change.
   */
  static cam16Ucs(from, to2, amount) {
    const fromCam = Cam16.fromInt(from);
    const toCam = Cam16.fromInt(to2);
    const fromJ = fromCam.jstar;
    const fromA = fromCam.astar;
    const fromB = fromCam.bstar;
    const toJ = toCam.jstar;
    const toA = toCam.astar;
    const toB = toCam.bstar;
    const jstar = fromJ + (toJ - fromJ) * amount;
    const astar = fromA + (toA - fromA) * amount;
    const bstar = fromB + (toB - fromB) * amount;
    return Cam16.fromUcs(jstar, astar, bstar).toInt();
  }
};

// node_modules/@material/material-color-utilities/contrast/contrast.js
var Contrast = class _Contrast {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(toneA, toneB) {
    toneA = clampDouble(0, 100, toneA);
    toneB = clampDouble(0, 100, toneB);
    return _Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
  }
  static ratioOfYs(y1, y22) {
    const lighter = y1 > y22 ? y1 : y22;
    const darker = lighter === y22 ? y1 : y22;
    return (lighter + 5) / (darker + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(tone, ratio) {
    if (tone < 0 || tone > 100) {
      return -1;
    }
    const darkY = yFromLstar(tone);
    const lightY = ratio * (darkY + 5) - 5;
    const realContrast = _Contrast.ratioOfYs(lightY, darkY);
    const delta = Math.abs(realContrast - ratio);
    if (realContrast < ratio && delta > 0.04) {
      return -1;
    }
    const returnValue = lstarFromY(lightY) + 0.4;
    if (returnValue < 0 || returnValue > 100) {
      return -1;
    }
    return returnValue;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(tone, ratio) {
    if (tone < 0 || tone > 100) {
      return -1;
    }
    const lightY = yFromLstar(tone);
    const darkY = (lightY + 5) / ratio - 5;
    const realContrast = _Contrast.ratioOfYs(lightY, darkY);
    const delta = Math.abs(realContrast - ratio);
    if (realContrast < ratio && delta > 0.04) {
      return -1;
    }
    const returnValue = lstarFromY(darkY) - 0.4;
    if (returnValue < 0 || returnValue > 100) {
      return -1;
    }
    return returnValue;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(tone, ratio) {
    const lighterSafe = _Contrast.lighter(tone, ratio);
    return lighterSafe < 0 ? 100 : lighterSafe;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(tone, ratio) {
    const darkerSafe = _Contrast.darker(tone, ratio);
    return darkerSafe < 0 ? 0 : darkerSafe;
  }
};

// node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
var DislikeAnalyzer = class _DislikeAnalyzer {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(hct) {
    const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
    const chromaPasses = Math.round(hct.chroma) > 16;
    const tonePasses = Math.round(hct.tone) < 65;
    return huePasses && chromaPasses && tonePasses;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(hct) {
    if (_DislikeAnalyzer.isDisliked(hct)) {
      return Hct.from(hct.hue, hct.chroma, 70);
    }
    return hct;
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
var DynamicColor = class _DynamicColor {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(args) {
    return new _DynamicColor(args.name ?? "", args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
    this.name = name;
    this.palette = palette;
    this.tone = tone;
    this.isBackground = isBackground;
    this.background = background;
    this.secondBackground = secondBackground;
    this.contrastCurve = contrastCurve;
    this.toneDeltaPair = toneDeltaPair;
    this.hctCache = /* @__PURE__ */ new Map();
    if (!background && secondBackground) {
      throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
    }
    if (!background && contrastCurve) {
      throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
    }
    if (background && !contrastCurve) {
      throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
    }
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(scheme) {
    return this.getHct(scheme).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(scheme) {
    const cachedAnswer = this.hctCache.get(scheme);
    if (cachedAnswer != null) {
      return cachedAnswer;
    }
    const tone = this.getTone(scheme);
    const answer = this.palette(scheme).getHct(tone);
    if (this.hctCache.size > 4) {
      this.hctCache.clear();
    }
    this.hctCache.set(scheme, answer);
    return answer;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(scheme) {
    const decreasingContrast = scheme.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const toneDeltaPair = this.toneDeltaPair(scheme);
      const roleA = toneDeltaPair.roleA;
      const roleB = toneDeltaPair.roleB;
      const delta = toneDeltaPair.delta;
      const polarity = toneDeltaPair.polarity;
      const stayTogether = toneDeltaPair.stayTogether;
      const bg = this.background(scheme);
      const bgTone = bg.getTone(scheme);
      const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
      const nearer = aIsNearer ? roleA : roleB;
      const farther = aIsNearer ? roleB : roleA;
      const amNearer = this.name === nearer.name;
      const expansionDir = scheme.isDark ? 1 : -1;
      const nContrast = nearer.contrastCurve.get(scheme.contrastLevel);
      const fContrast = farther.contrastCurve.get(scheme.contrastLevel);
      const nInitialTone = nearer.tone(scheme);
      let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : _DynamicColor.foregroundTone(bgTone, nContrast);
      const fInitialTone = farther.tone(scheme);
      let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : _DynamicColor.foregroundTone(bgTone, fContrast);
      if (decreasingContrast) {
        nTone = _DynamicColor.foregroundTone(bgTone, nContrast);
        fTone = _DynamicColor.foregroundTone(bgTone, fContrast);
      }
      if ((fTone - nTone) * expansionDir >= delta) {
      } else {
        fTone = clampDouble(0, 100, nTone + delta * expansionDir);
        if ((fTone - nTone) * expansionDir >= delta) {
        } else {
          nTone = clampDouble(0, 100, fTone - delta * expansionDir);
        }
      }
      if (50 <= nTone && nTone < 60) {
        if (expansionDir > 0) {
          nTone = 60;
          fTone = Math.max(fTone, nTone + delta * expansionDir);
        } else {
          nTone = 49;
          fTone = Math.min(fTone, nTone + delta * expansionDir);
        }
      } else if (50 <= fTone && fTone < 60) {
        if (stayTogether) {
          if (expansionDir > 0) {
            nTone = 60;
            fTone = Math.max(fTone, nTone + delta * expansionDir);
          } else {
            nTone = 49;
            fTone = Math.min(fTone, nTone + delta * expansionDir);
          }
        } else {
          if (expansionDir > 0) {
            fTone = 60;
          } else {
            fTone = 49;
          }
        }
      }
      return amNearer ? nTone : fTone;
    } else {
      let answer = this.tone(scheme);
      if (this.background == null) {
        return answer;
      }
      const bgTone = this.background(scheme).getTone(scheme);
      const desiredRatio = this.contrastCurve.get(scheme.contrastLevel);
      if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {
      } else {
        answer = _DynamicColor.foregroundTone(bgTone, desiredRatio);
      }
      if (decreasingContrast) {
        answer = _DynamicColor.foregroundTone(bgTone, desiredRatio);
      }
      if (this.isBackground && 50 <= answer && answer < 60) {
        if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
          answer = 49;
        } else {
          answer = 60;
        }
      }
      if (this.secondBackground) {
        const [bg1, bg2] = [this.background, this.secondBackground];
        const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
        const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
        if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
          return answer;
        }
        const lightOption = Contrast.lighter(upper, desiredRatio);
        const darkOption = Contrast.darker(lower, desiredRatio);
        const availables = [];
        if (lightOption !== -1)
          availables.push(lightOption);
        if (darkOption !== -1)
          availables.push(darkOption);
        const prefersLight = _DynamicColor.tonePrefersLightForeground(bgTone1) || _DynamicColor.tonePrefersLightForeground(bgTone2);
        if (prefersLight) {
          return lightOption < 0 ? 100 : lightOption;
        }
        if (availables.length === 1) {
          return availables[0];
        }
        return darkOption < 0 ? 0 : darkOption;
      }
      return answer;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(bgTone, ratio) {
    const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
    const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
    const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
    const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
    const preferLighter = _DynamicColor.tonePrefersLightForeground(bgTone);
    if (preferLighter) {
      const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 && lighterRatio < ratio && darkerRatio < ratio;
      return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
    } else {
      return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
    }
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(tone) {
    return Math.round(tone) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(tone) {
    return Math.round(tone) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(tone) {
    if (_DynamicColor.tonePrefersLightForeground(tone) && !_DynamicColor.toneAllowsLightForeground(tone)) {
      return 49;
    }
    return tone;
  }
};

// node_modules/@material/material-color-utilities/palettes/tonal_palette.js
var TonalPalette = class _TonalPalette {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(argb) {
    const hct = Hct.fromInt(argb);
    return _TonalPalette.fromHct(hct);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(hct) {
    return new _TonalPalette(hct.hue, hct.chroma, hct);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(hue, chroma) {
    const keyColor = new KeyColor(hue, chroma).create();
    return new _TonalPalette(hue, chroma, keyColor);
  }
  constructor(hue, chroma, keyColor) {
    this.hue = hue;
    this.chroma = chroma;
    this.keyColor = keyColor;
    this.cache = /* @__PURE__ */ new Map();
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(tone) {
    let argb = this.cache.get(tone);
    if (argb === void 0) {
      argb = Hct.from(this.hue, this.chroma, tone).toInt();
      this.cache.set(tone, argb);
    }
    return argb;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(tone) {
    return Hct.fromInt(this.tone(tone));
  }
};
var KeyColor = class {
  constructor(hue, requestedChroma) {
    this.hue = hue;
    this.requestedChroma = requestedChroma;
    this.chromaCache = /* @__PURE__ */ new Map();
    this.maxChromaValue = 200;
  }
  /**
   * Creates a key color from a [hue] and a [chroma].
   * The key color is the first tone, starting from T50, matching the given hue
   * and chroma.
   *
   * @return Key color [Hct]
   */
  create() {
    const pivotTone = 50;
    const toneStepSize = 1;
    const epsilon = 0.01;
    let lowerTone = 0;
    let upperTone = 100;
    while (lowerTone < upperTone) {
      const midTone = Math.floor((lowerTone + upperTone) / 2);
      const isAscending = this.maxChroma(midTone) < this.maxChroma(midTone + toneStepSize);
      const sufficientChroma = this.maxChroma(midTone) >= this.requestedChroma - epsilon;
      if (sufficientChroma) {
        if (Math.abs(lowerTone - pivotTone) < Math.abs(upperTone - pivotTone)) {
          upperTone = midTone;
        } else {
          if (lowerTone === midTone) {
            return Hct.from(this.hue, this.requestedChroma, lowerTone);
          }
          lowerTone = midTone;
        }
      } else {
        if (isAscending) {
          lowerTone = midTone + toneStepSize;
        } else {
          upperTone = midTone;
        }
      }
    }
    return Hct.from(this.hue, this.requestedChroma, lowerTone);
  }
  // Find the maximum chroma for a given tone
  maxChroma(tone) {
    if (this.chromaCache.has(tone)) {
      return this.chromaCache.get(tone);
    }
    const chroma = Hct.from(this.hue, this.maxChromaValue, tone).chroma;
    this.chromaCache.set(tone, chroma);
    return chroma;
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
var ContrastCurve = class {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Value for contrast level -1.0
   * @param normal Value for contrast level 0.0
   * @param medium Value for contrast level 0.5
   * @param high Value for contrast level 1.0
   */
  constructor(low, normal, medium, high) {
    this.low = low;
    this.normal = normal;
    this.medium = medium;
    this.high = high;
  }
  /**
   * Returns the value at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal); -1.0
   *     is the lowest; 1.0 is the highest.
   * @return The value. For contrast ratios, a number between 1.0 and 21.0.
   */
  get(contrastLevel) {
    if (contrastLevel <= -1) {
      return this.low;
    } else if (contrastLevel < 0) {
      return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
    } else if (contrastLevel < 0.5) {
      return lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
    } else if (contrastLevel < 1) {
      return lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
    } else {
      return this.high;
    }
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
var ToneDeltaPair = class {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(roleA, roleB, delta, polarity, stayTogether) {
    this.roleA = roleA;
    this.roleB = roleB;
    this.delta = delta;
    this.polarity = polarity;
    this.stayTogether = stayTogether;
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/variant.js
var Variant;
(function(Variant2) {
  Variant2[Variant2["MONOCHROME"] = 0] = "MONOCHROME";
  Variant2[Variant2["NEUTRAL"] = 1] = "NEUTRAL";
  Variant2[Variant2["TONAL_SPOT"] = 2] = "TONAL_SPOT";
  Variant2[Variant2["VIBRANT"] = 3] = "VIBRANT";
  Variant2[Variant2["EXPRESSIVE"] = 4] = "EXPRESSIVE";
  Variant2[Variant2["FIDELITY"] = 5] = "FIDELITY";
  Variant2[Variant2["CONTENT"] = 6] = "CONTENT";
  Variant2[Variant2["RAINBOW"] = 7] = "RAINBOW";
  Variant2[Variant2["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));

// node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
function isFidelity(scheme) {
  return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
}
function isMonochrome(scheme) {
  return scheme.variant === Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
  let answer = tone;
  let closestToChroma = Hct.from(hue, chroma, tone);
  if (closestToChroma.chroma < chroma) {
    let chromaPeak = closestToChroma.chroma;
    while (closestToChroma.chroma < chroma) {
      answer += byDecreasingTone ? -1 : 1;
      const potentialSolution = Hct.from(hue, chroma, answer);
      if (chromaPeak > potentialSolution.chroma) {
        break;
      }
      if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
        break;
      }
      const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
      const currentDelta = Math.abs(closestToChroma.chroma - chroma);
      if (potentialDelta < currentDelta) {
        closestToChroma = potentialSolution;
      }
      chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
    }
  }
  return answer;
}
var MaterialDynamicColors = class _MaterialDynamicColors {
  static highestSurface(s2) {
    return s2.isDark ? _MaterialDynamicColors.surfaceBright : _MaterialDynamicColors.surfaceDim;
  }
};
MaterialDynamicColors.contentAccentToneDelta = 15;
MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "primary_palette_key_color",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => s2.primaryPalette.keyColor.tone
});
MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "secondary_palette_key_color",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => s2.secondaryPalette.keyColor.tone
});
MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => s2.tertiaryPalette.keyColor.tone
});
MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
  name: "neutral_palette_key_color",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.neutralPalette.keyColor.tone
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (s2) => s2.neutralVariantPalette,
  tone: (s2) => s2.neutralVariantPalette.keyColor.tone
});
MaterialDynamicColors.background = DynamicColor.fromPalette({
  name: "background",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 6 : 98,
  isBackground: true
});
MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
  name: "on_background",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 90 : 10,
  background: (s2) => MaterialDynamicColors.background,
  contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
});
MaterialDynamicColors.surface = DynamicColor.fromPalette({
  name: "surface",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 6 : 98,
  isBackground: true
});
MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
  name: "surface_dim",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s2.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
  name: "surface_bright",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? new ContrastCurve(24, 24, 29, 34).get(s2.contrastLevel) : 98,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
  name: "surface_container_lowest",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? new ContrastCurve(4, 4, 2, 0).get(s2.contrastLevel) : 100,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
  name: "surface_container_low",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? new ContrastCurve(10, 10, 11, 12).get(s2.contrastLevel) : new ContrastCurve(96, 96, 96, 95).get(s2.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
  name: "surface_container",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? new ContrastCurve(12, 12, 16, 20).get(s2.contrastLevel) : new ContrastCurve(94, 94, 92, 90).get(s2.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
  name: "surface_container_high",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? new ContrastCurve(17, 17, 21, 25).get(s2.contrastLevel) : new ContrastCurve(92, 92, 88, 85).get(s2.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
  name: "surface_container_highest",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? new ContrastCurve(22, 22, 26, 30).get(s2.contrastLevel) : new ContrastCurve(90, 90, 84, 80).get(s2.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
  name: "on_surface",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 90 : 10,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
  name: "surface_variant",
  palette: (s2) => s2.neutralVariantPalette,
  tone: (s2) => s2.isDark ? 30 : 90,
  isBackground: true
});
MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
  name: "on_surface_variant",
  palette: (s2) => s2.neutralVariantPalette,
  tone: (s2) => s2.isDark ? 80 : 30,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
  name: "inverse_surface",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 90 : 20
});
MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
  name: "inverse_on_surface",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => s2.isDark ? 20 : 95,
  background: (s2) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.outline = DynamicColor.fromPalette({
  name: "outline",
  palette: (s2) => s2.neutralVariantPalette,
  tone: (s2) => s2.isDark ? 60 : 50,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
});
MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
  name: "outline_variant",
  palette: (s2) => s2.neutralVariantPalette,
  tone: (s2) => s2.isDark ? 30 : 80,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5)
});
MaterialDynamicColors.shadow = DynamicColor.fromPalette({
  name: "shadow",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => 0
});
MaterialDynamicColors.scrim = DynamicColor.fromPalette({
  name: "scrim",
  palette: (s2) => s2.neutralPalette,
  tone: (s2) => 0
});
MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
  name: "surface_tint",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => s2.isDark ? 80 : 40,
  isBackground: true
});
MaterialDynamicColors.primary = DynamicColor.fromPalette({
  name: "primary",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 100 : 0;
    }
    return s2.isDark ? 80 : 40;
  },
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
});
MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
  name: "on_primary",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 10 : 90;
    }
    return s2.isDark ? 20 : 100;
  },
  background: (s2) => MaterialDynamicColors.primary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
  name: "primary_container",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => {
    if (isFidelity(s2)) {
      return s2.sourceColorHct.tone;
    }
    if (isMonochrome(s2)) {
      return s2.isDark ? 85 : 25;
    }
    return s2.isDark ? 30 : 90;
  },
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
});
MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
  name: "on_primary_container",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => {
    if (isFidelity(s2)) {
      return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s2), 4.5);
    }
    if (isMonochrome(s2)) {
      return s2.isDark ? 0 : 100;
    }
    return s2.isDark ? 90 : 30;
  },
  background: (s2) => MaterialDynamicColors.primaryContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
  name: "inverse_primary",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => s2.isDark ? 40 : 80,
  background: (s2) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7)
});
MaterialDynamicColors.secondary = DynamicColor.fromPalette({
  name: "secondary",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => s2.isDark ? 80 : 40,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
});
MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
  name: "on_secondary",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 10 : 100;
    } else {
      return s2.isDark ? 20 : 100;
    }
  },
  background: (s2) => MaterialDynamicColors.secondary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
  name: "secondary_container",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => {
    const initialTone = s2.isDark ? 30 : 90;
    if (isMonochrome(s2)) {
      return s2.isDark ? 30 : 85;
    }
    if (!isFidelity(s2)) {
      return initialTone;
    }
    return findDesiredChromaByTone(s2.secondaryPalette.hue, s2.secondaryPalette.chroma, initialTone, s2.isDark ? false : true);
  },
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
});
MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
  name: "on_secondary_container",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 90 : 10;
    }
    if (!isFidelity(s2)) {
      return s2.isDark ? 90 : 30;
    }
    return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s2), 4.5);
  },
  background: (s2) => MaterialDynamicColors.secondaryContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
  name: "tertiary",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 90 : 25;
    }
    return s2.isDark ? 80 : 40;
  },
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
});
MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
  name: "on_tertiary",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 10 : 90;
    }
    return s2.isDark ? 20 : 100;
  },
  background: (s2) => MaterialDynamicColors.tertiary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
  name: "tertiary_container",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 60 : 49;
    }
    if (!isFidelity(s2)) {
      return s2.isDark ? 30 : 90;
    }
    const proposedHct = s2.tertiaryPalette.getHct(s2.sourceColorHct.tone);
    return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
  },
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
});
MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
  name: "on_tertiary_container",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 0 : 100;
    }
    if (!isFidelity(s2)) {
      return s2.isDark ? 90 : 30;
    }
    return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s2), 4.5);
  },
  background: (s2) => MaterialDynamicColors.tertiaryContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.error = DynamicColor.fromPalette({
  name: "error",
  palette: (s2) => s2.errorPalette,
  tone: (s2) => s2.isDark ? 80 : 40,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
});
MaterialDynamicColors.onError = DynamicColor.fromPalette({
  name: "on_error",
  palette: (s2) => s2.errorPalette,
  tone: (s2) => s2.isDark ? 20 : 100,
  background: (s2) => MaterialDynamicColors.error,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
  name: "error_container",
  palette: (s2) => s2.errorPalette,
  tone: (s2) => s2.isDark ? 30 : 90,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
});
MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
  name: "on_error_container",
  palette: (s2) => s2.errorPalette,
  tone: (s2) => {
    if (isMonochrome(s2)) {
      return s2.isDark ? 90 : 10;
    }
    return s2.isDark ? 90 : 30;
  },
  background: (s2) => MaterialDynamicColors.errorContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
  name: "primary_fixed",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => isMonochrome(s2) ? 40 : 90,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
  name: "primary_fixed_dim",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => isMonochrome(s2) ? 30 : 80,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
  name: "on_primary_fixed",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => isMonochrome(s2) ? 100 : 10,
  background: (s2) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s2) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (s2) => s2.primaryPalette,
  tone: (s2) => isMonochrome(s2) ? 90 : 30,
  background: (s2) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s2) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
  name: "secondary_fixed",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => isMonochrome(s2) ? 80 : 90,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
  name: "secondary_fixed_dim",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => isMonochrome(s2) ? 70 : 80,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
  name: "on_secondary_fixed",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => 10,
  background: (s2) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s2) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (s2) => s2.secondaryPalette,
  tone: (s2) => isMonochrome(s2) ? 25 : 30,
  background: (s2) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s2) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
  name: "tertiary_fixed",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => isMonochrome(s2) ? 40 : 90,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => isMonochrome(s2) ? 30 : 80,
  isBackground: true,
  background: (s2) => MaterialDynamicColors.highestSurface(s2),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s2) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
  name: "on_tertiary_fixed",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => isMonochrome(s2) ? 100 : 10,
  background: (s2) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s2) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (s2) => s2.tertiaryPalette,
  tone: (s2) => isMonochrome(s2) ? 90 : 30,
  background: (s2) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s2) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});

// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_scheme.js
var DynamicScheme = class {
  constructor(args) {
    this.sourceColorArgb = args.sourceColorArgb;
    this.variant = args.variant;
    this.contrastLevel = args.contrastLevel;
    this.isDark = args.isDark;
    this.sourceColorHct = Hct.fromInt(args.sourceColorArgb);
    this.primaryPalette = args.primaryPalette;
    this.secondaryPalette = args.secondaryPalette;
    this.tertiaryPalette = args.tertiaryPalette;
    this.neutralPalette = args.neutralPalette;
    this.neutralVariantPalette = args.neutralVariantPalette;
    this.errorPalette = TonalPalette.fromHueAndChroma(25, 84);
  }
  /**
   * Support design spec'ing Dynamic Color by schemes that specify hue
   * rotations that should be applied at certain breakpoints.
   * @param sourceColor the source color of the theme, in HCT.
   * @param hues The "breakpoints", i.e. the hues at which a rotation should
   * be apply.
   * @param rotations The rotation that should be applied when source color's
   * hue is >= the same index in hues array, and <= the hue at the next index
   * in hues array.
   */
  static getRotatedHue(sourceColor, hues, rotations) {
    const sourceHue = sourceColor.hue;
    if (hues.length !== rotations.length) {
      throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
    }
    if (rotations.length === 1) {
      return sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
    }
    const size = hues.length;
    for (let i4 = 0; i4 <= size - 2; i4++) {
      const thisHue = hues[i4];
      const nextHue = hues[i4 + 1];
      if (thisHue < sourceHue && sourceHue < nextHue) {
        return sanitizeDegreesDouble(sourceHue + rotations[i4]);
      }
    }
    return sourceHue;
  }
  getArgb(dynamicColor) {
    return dynamicColor.getArgb(this);
  }
  getHct(dynamicColor) {
    return dynamicColor.getHct(this);
  }
  get primaryPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.primaryPaletteKeyColor);
  }
  get secondaryPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.secondaryPaletteKeyColor);
  }
  get tertiaryPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.tertiaryPaletteKeyColor);
  }
  get neutralPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.neutralPaletteKeyColor);
  }
  get neutralVariantPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.neutralVariantPaletteKeyColor);
  }
  get background() {
    return this.getArgb(MaterialDynamicColors.background);
  }
  get onBackground() {
    return this.getArgb(MaterialDynamicColors.onBackground);
  }
  get surface() {
    return this.getArgb(MaterialDynamicColors.surface);
  }
  get surfaceDim() {
    return this.getArgb(MaterialDynamicColors.surfaceDim);
  }
  get surfaceBright() {
    return this.getArgb(MaterialDynamicColors.surfaceBright);
  }
  get surfaceContainerLowest() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerLowest);
  }
  get surfaceContainerLow() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerLow);
  }
  get surfaceContainer() {
    return this.getArgb(MaterialDynamicColors.surfaceContainer);
  }
  get surfaceContainerHigh() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerHigh);
  }
  get surfaceContainerHighest() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerHighest);
  }
  get onSurface() {
    return this.getArgb(MaterialDynamicColors.onSurface);
  }
  get surfaceVariant() {
    return this.getArgb(MaterialDynamicColors.surfaceVariant);
  }
  get onSurfaceVariant() {
    return this.getArgb(MaterialDynamicColors.onSurfaceVariant);
  }
  get inverseSurface() {
    return this.getArgb(MaterialDynamicColors.inverseSurface);
  }
  get inverseOnSurface() {
    return this.getArgb(MaterialDynamicColors.inverseOnSurface);
  }
  get outline() {
    return this.getArgb(MaterialDynamicColors.outline);
  }
  get outlineVariant() {
    return this.getArgb(MaterialDynamicColors.outlineVariant);
  }
  get shadow() {
    return this.getArgb(MaterialDynamicColors.shadow);
  }
  get scrim() {
    return this.getArgb(MaterialDynamicColors.scrim);
  }
  get surfaceTint() {
    return this.getArgb(MaterialDynamicColors.surfaceTint);
  }
  get primary() {
    return this.getArgb(MaterialDynamicColors.primary);
  }
  get onPrimary() {
    return this.getArgb(MaterialDynamicColors.onPrimary);
  }
  get primaryContainer() {
    return this.getArgb(MaterialDynamicColors.primaryContainer);
  }
  get onPrimaryContainer() {
    return this.getArgb(MaterialDynamicColors.onPrimaryContainer);
  }
  get inversePrimary() {
    return this.getArgb(MaterialDynamicColors.inversePrimary);
  }
  get secondary() {
    return this.getArgb(MaterialDynamicColors.secondary);
  }
  get onSecondary() {
    return this.getArgb(MaterialDynamicColors.onSecondary);
  }
  get secondaryContainer() {
    return this.getArgb(MaterialDynamicColors.secondaryContainer);
  }
  get onSecondaryContainer() {
    return this.getArgb(MaterialDynamicColors.onSecondaryContainer);
  }
  get tertiary() {
    return this.getArgb(MaterialDynamicColors.tertiary);
  }
  get onTertiary() {
    return this.getArgb(MaterialDynamicColors.onTertiary);
  }
  get tertiaryContainer() {
    return this.getArgb(MaterialDynamicColors.tertiaryContainer);
  }
  get onTertiaryContainer() {
    return this.getArgb(MaterialDynamicColors.onTertiaryContainer);
  }
  get error() {
    return this.getArgb(MaterialDynamicColors.error);
  }
  get onError() {
    return this.getArgb(MaterialDynamicColors.onError);
  }
  get errorContainer() {
    return this.getArgb(MaterialDynamicColors.errorContainer);
  }
  get onErrorContainer() {
    return this.getArgb(MaterialDynamicColors.onErrorContainer);
  }
  get primaryFixed() {
    return this.getArgb(MaterialDynamicColors.primaryFixed);
  }
  get primaryFixedDim() {
    return this.getArgb(MaterialDynamicColors.primaryFixedDim);
  }
  get onPrimaryFixed() {
    return this.getArgb(MaterialDynamicColors.onPrimaryFixed);
  }
  get onPrimaryFixedVariant() {
    return this.getArgb(MaterialDynamicColors.onPrimaryFixedVariant);
  }
  get secondaryFixed() {
    return this.getArgb(MaterialDynamicColors.secondaryFixed);
  }
  get secondaryFixedDim() {
    return this.getArgb(MaterialDynamicColors.secondaryFixedDim);
  }
  get onSecondaryFixed() {
    return this.getArgb(MaterialDynamicColors.onSecondaryFixed);
  }
  get onSecondaryFixedVariant() {
    return this.getArgb(MaterialDynamicColors.onSecondaryFixedVariant);
  }
  get tertiaryFixed() {
    return this.getArgb(MaterialDynamicColors.tertiaryFixed);
  }
  get tertiaryFixedDim() {
    return this.getArgb(MaterialDynamicColors.tertiaryFixedDim);
  }
  get onTertiaryFixed() {
    return this.getArgb(MaterialDynamicColors.onTertiaryFixed);
  }
  get onTertiaryFixedVariant() {
    return this.getArgb(MaterialDynamicColors.onTertiaryFixedVariant);
  }
};

// node_modules/@material/material-color-utilities/palettes/core_palette.js
var CorePalette = class _CorePalette {
  /**
   * @param argb ARGB representation of a color
   */
  static of(argb) {
    return new _CorePalette(argb, false);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(argb) {
    return new _CorePalette(argb, true);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(colors) {
    return _CorePalette.createPaletteFromColors(false, colors);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(colors) {
    return _CorePalette.createPaletteFromColors(true, colors);
  }
  static createPaletteFromColors(content, colors) {
    const palette = new _CorePalette(colors.primary, content);
    if (colors.secondary) {
      const p3 = new _CorePalette(colors.secondary, content);
      palette.a2 = p3.a1;
    }
    if (colors.tertiary) {
      const p3 = new _CorePalette(colors.tertiary, content);
      palette.a3 = p3.a1;
    }
    if (colors.error) {
      const p3 = new _CorePalette(colors.error, content);
      palette.error = p3.a1;
    }
    if (colors.neutral) {
      const p3 = new _CorePalette(colors.neutral, content);
      palette.n1 = p3.n1;
    }
    if (colors.neutralVariant) {
      const p3 = new _CorePalette(colors.neutralVariant, content);
      palette.n2 = p3.n2;
    }
    return palette;
  }
  constructor(argb, isContent) {
    const hct = Hct.fromInt(argb);
    const hue = hct.hue;
    const chroma = hct.chroma;
    if (isContent) {
      this.a1 = TonalPalette.fromHueAndChroma(hue, chroma);
      this.a2 = TonalPalette.fromHueAndChroma(hue, chroma / 3);
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
      this.n1 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4));
      this.n2 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8));
    } else {
      this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma));
      this.a2 = TonalPalette.fromHueAndChroma(hue, 16);
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24);
      this.n1 = TonalPalette.fromHueAndChroma(hue, 4);
      this.n2 = TonalPalette.fromHueAndChroma(hue, 8);
    }
    this.error = TonalPalette.fromHueAndChroma(25, 84);
  }
};

// node_modules/@material/material-color-utilities/quantize/lab_point_provider.js
var LabPointProvider = class {
  /**
   * Convert a color represented in ARGB to a 3-element array of L*a*b*
   * coordinates of the color.
   */
  fromInt(argb) {
    return labFromArgb(argb);
  }
  /**
   * Convert a 3-element array to a color represented in ARGB.
   */
  toInt(point) {
    return argbFromLab(point[0], point[1], point[2]);
  }
  /**
   * Standard CIE 1976 delta E formula also takes the square root, unneeded
   * here. This method is used by quantization algorithms to compare distance,
   * and the relative ordering is the same, with or without a square root.
   *
   * This relatively minor optimization is helpful because this method is
   * called at least once for each pixel in an image.
   */
  distance(from, to2) {
    const dL = from[0] - to2[0];
    const dA = from[1] - to2[1];
    const dB = from[2] - to2[2];
    return dL * dL + dA * dA + dB * dB;
  }
};

// node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js
var MAX_ITERATIONS = 10;
var MIN_MOVEMENT_DISTANCE = 3;
var QuantizerWsmeans = class {
  /**
   * @param inputPixels Colors in ARGB format.
   * @param startingClusters Defines the initial state of the quantizer. Passing
   *     an empty array is fine, the implementation will create its own initial
   *     state that leads to reproducible results for the same inputs.
   *     Passing an array that is the result of Wu quantization leads to higher
   *     quality results.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  static quantize(inputPixels, startingClusters, maxColors) {
    const pixelToCount = /* @__PURE__ */ new Map();
    const points = new Array();
    const pixels = new Array();
    const pointProvider = new LabPointProvider();
    let pointCount = 0;
    for (let i4 = 0; i4 < inputPixels.length; i4++) {
      const inputPixel = inputPixels[i4];
      const pixelCount = pixelToCount.get(inputPixel);
      if (pixelCount === void 0) {
        pointCount++;
        points.push(pointProvider.fromInt(inputPixel));
        pixels.push(inputPixel);
        pixelToCount.set(inputPixel, 1);
      } else {
        pixelToCount.set(inputPixel, pixelCount + 1);
      }
    }
    const counts = new Array();
    for (let i4 = 0; i4 < pointCount; i4++) {
      const pixel = pixels[i4];
      const count = pixelToCount.get(pixel);
      if (count !== void 0) {
        counts[i4] = count;
      }
    }
    let clusterCount = Math.min(maxColors, pointCount);
    if (startingClusters.length > 0) {
      clusterCount = Math.min(clusterCount, startingClusters.length);
    }
    const clusters = new Array();
    for (let i4 = 0; i4 < startingClusters.length; i4++) {
      clusters.push(pointProvider.fromInt(startingClusters[i4]));
    }
    const additionalClustersNeeded = clusterCount - clusters.length;
    if (startingClusters.length === 0 && additionalClustersNeeded > 0) {
      for (let i4 = 0; i4 < additionalClustersNeeded; i4++) {
        const l3 = Math.random() * 100;
        const a3 = Math.random() * (100 - -100 + 1) + -100;
        const b3 = Math.random() * (100 - -100 + 1) + -100;
        clusters.push(new Array(l3, a3, b3));
      }
    }
    const clusterIndices = new Array();
    for (let i4 = 0; i4 < pointCount; i4++) {
      clusterIndices.push(Math.floor(Math.random() * clusterCount));
    }
    const indexMatrix = new Array();
    for (let i4 = 0; i4 < clusterCount; i4++) {
      indexMatrix.push(new Array());
      for (let j3 = 0; j3 < clusterCount; j3++) {
        indexMatrix[i4].push(0);
      }
    }
    const distanceToIndexMatrix = new Array();
    for (let i4 = 0; i4 < clusterCount; i4++) {
      distanceToIndexMatrix.push(new Array());
      for (let j3 = 0; j3 < clusterCount; j3++) {
        distanceToIndexMatrix[i4].push(new DistanceAndIndex());
      }
    }
    const pixelCountSums = new Array();
    for (let i4 = 0; i4 < clusterCount; i4++) {
      pixelCountSums.push(0);
    }
    for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
      for (let i4 = 0; i4 < clusterCount; i4++) {
        for (let j3 = i4 + 1; j3 < clusterCount; j3++) {
          const distance = pointProvider.distance(clusters[i4], clusters[j3]);
          distanceToIndexMatrix[j3][i4].distance = distance;
          distanceToIndexMatrix[j3][i4].index = i4;
          distanceToIndexMatrix[i4][j3].distance = distance;
          distanceToIndexMatrix[i4][j3].index = j3;
        }
        distanceToIndexMatrix[i4].sort();
        for (let j3 = 0; j3 < clusterCount; j3++) {
          indexMatrix[i4][j3] = distanceToIndexMatrix[i4][j3].index;
        }
      }
      let pointsMoved = 0;
      for (let i4 = 0; i4 < pointCount; i4++) {
        const point = points[i4];
        const previousClusterIndex = clusterIndices[i4];
        const previousCluster = clusters[previousClusterIndex];
        const previousDistance = pointProvider.distance(point, previousCluster);
        let minimumDistance = previousDistance;
        let newClusterIndex = -1;
        for (let j3 = 0; j3 < clusterCount; j3++) {
          if (distanceToIndexMatrix[previousClusterIndex][j3].distance >= 4 * previousDistance) {
            continue;
          }
          const distance = pointProvider.distance(point, clusters[j3]);
          if (distance < minimumDistance) {
            minimumDistance = distance;
            newClusterIndex = j3;
          }
        }
        if (newClusterIndex !== -1) {
          const distanceChange = Math.abs(Math.sqrt(minimumDistance) - Math.sqrt(previousDistance));
          if (distanceChange > MIN_MOVEMENT_DISTANCE) {
            pointsMoved++;
            clusterIndices[i4] = newClusterIndex;
          }
        }
      }
      if (pointsMoved === 0 && iteration !== 0) {
        break;
      }
      const componentASums = new Array(clusterCount).fill(0);
      const componentBSums = new Array(clusterCount).fill(0);
      const componentCSums = new Array(clusterCount).fill(0);
      for (let i4 = 0; i4 < clusterCount; i4++) {
        pixelCountSums[i4] = 0;
      }
      for (let i4 = 0; i4 < pointCount; i4++) {
        const clusterIndex = clusterIndices[i4];
        const point = points[i4];
        const count = counts[i4];
        pixelCountSums[clusterIndex] += count;
        componentASums[clusterIndex] += point[0] * count;
        componentBSums[clusterIndex] += point[1] * count;
        componentCSums[clusterIndex] += point[2] * count;
      }
      for (let i4 = 0; i4 < clusterCount; i4++) {
        const count = pixelCountSums[i4];
        if (count === 0) {
          clusters[i4] = [0, 0, 0];
          continue;
        }
        const a3 = componentASums[i4] / count;
        const b3 = componentBSums[i4] / count;
        const c5 = componentCSums[i4] / count;
        clusters[i4] = [a3, b3, c5];
      }
    }
    const argbToPopulation = /* @__PURE__ */ new Map();
    for (let i4 = 0; i4 < clusterCount; i4++) {
      const count = pixelCountSums[i4];
      if (count === 0) {
        continue;
      }
      const possibleNewCluster = pointProvider.toInt(clusters[i4]);
      if (argbToPopulation.has(possibleNewCluster)) {
        continue;
      }
      argbToPopulation.set(possibleNewCluster, count);
    }
    return argbToPopulation;
  }
};
var DistanceAndIndex = class {
  constructor() {
    this.distance = -1;
    this.index = -1;
  }
};

// node_modules/@material/material-color-utilities/quantize/quantizer_map.js
var QuantizerMap = class {
  /**
   * @param pixels Colors in ARGB format.
   * @return A Map with keys of ARGB colors, and values of the number of times
   *     the color appears in the image.
   */
  static quantize(pixels) {
    const countByColor = /* @__PURE__ */ new Map();
    for (let i4 = 0; i4 < pixels.length; i4++) {
      const pixel = pixels[i4];
      const alpha = alphaFromArgb(pixel);
      if (alpha < 255) {
        continue;
      }
      countByColor.set(pixel, (countByColor.get(pixel) ?? 0) + 1);
    }
    return countByColor;
  }
};

// node_modules/@material/material-color-utilities/quantize/quantizer_wu.js
var INDEX_BITS = 5;
var SIDE_LENGTH = 33;
var TOTAL_SIZE = 35937;
var directions = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};
var QuantizerWu = class {
  constructor(weights = [], momentsR = [], momentsG = [], momentsB = [], moments = [], cubes = []) {
    this.weights = weights;
    this.momentsR = momentsR;
    this.momentsG = momentsG;
    this.momentsB = momentsB;
    this.moments = moments;
    this.cubes = cubes;
  }
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  quantize(pixels, maxColors) {
    this.constructHistogram(pixels);
    this.computeMoments();
    const createBoxesResult = this.createBoxes(maxColors);
    const results = this.createResult(createBoxesResult.resultCount);
    return results;
  }
  constructHistogram(pixels) {
    this.weights = Array.from({ length: TOTAL_SIZE }).fill(0);
    this.momentsR = Array.from({ length: TOTAL_SIZE }).fill(0);
    this.momentsG = Array.from({ length: TOTAL_SIZE }).fill(0);
    this.momentsB = Array.from({ length: TOTAL_SIZE }).fill(0);
    this.moments = Array.from({ length: TOTAL_SIZE }).fill(0);
    const countByColor = QuantizerMap.quantize(pixels);
    for (const [pixel, count] of countByColor.entries()) {
      const red = redFromArgb(pixel);
      const green = greenFromArgb(pixel);
      const blue = blueFromArgb(pixel);
      const bitsToRemove = 8 - INDEX_BITS;
      const iR = (red >> bitsToRemove) + 1;
      const iG = (green >> bitsToRemove) + 1;
      const iB = (blue >> bitsToRemove) + 1;
      const index = this.getIndex(iR, iG, iB);
      this.weights[index] = (this.weights[index] ?? 0) + count;
      this.momentsR[index] += count * red;
      this.momentsG[index] += count * green;
      this.momentsB[index] += count * blue;
      this.moments[index] += count * (red * red + green * green + blue * blue);
    }
  }
  computeMoments() {
    for (let r7 = 1; r7 < SIDE_LENGTH; r7++) {
      const area = Array.from({ length: SIDE_LENGTH }).fill(0);
      const areaR = Array.from({ length: SIDE_LENGTH }).fill(0);
      const areaG = Array.from({ length: SIDE_LENGTH }).fill(0);
      const areaB = Array.from({ length: SIDE_LENGTH }).fill(0);
      const area2 = Array.from({ length: SIDE_LENGTH }).fill(0);
      for (let g4 = 1; g4 < SIDE_LENGTH; g4++) {
        let line = 0;
        let lineR = 0;
        let lineG = 0;
        let lineB = 0;
        let line2 = 0;
        for (let b3 = 1; b3 < SIDE_LENGTH; b3++) {
          const index = this.getIndex(r7, g4, b3);
          line += this.weights[index];
          lineR += this.momentsR[index];
          lineG += this.momentsG[index];
          lineB += this.momentsB[index];
          line2 += this.moments[index];
          area[b3] += line;
          areaR[b3] += lineR;
          areaG[b3] += lineG;
          areaB[b3] += lineB;
          area2[b3] += line2;
          const previousIndex = this.getIndex(r7 - 1, g4, b3);
          this.weights[index] = this.weights[previousIndex] + area[b3];
          this.momentsR[index] = this.momentsR[previousIndex] + areaR[b3];
          this.momentsG[index] = this.momentsG[previousIndex] + areaG[b3];
          this.momentsB[index] = this.momentsB[previousIndex] + areaB[b3];
          this.moments[index] = this.moments[previousIndex] + area2[b3];
        }
      }
    }
  }
  createBoxes(maxColors) {
    this.cubes = Array.from({ length: maxColors }).fill(0).map(() => new Box());
    const volumeVariance = Array.from({ length: maxColors }).fill(0);
    this.cubes[0].r0 = 0;
    this.cubes[0].g0 = 0;
    this.cubes[0].b0 = 0;
    this.cubes[0].r1 = SIDE_LENGTH - 1;
    this.cubes[0].g1 = SIDE_LENGTH - 1;
    this.cubes[0].b1 = SIDE_LENGTH - 1;
    let generatedColorCount = maxColors;
    let next = 0;
    for (let i4 = 1; i4 < maxColors; i4++) {
      if (this.cut(this.cubes[next], this.cubes[i4])) {
        volumeVariance[next] = this.cubes[next].vol > 1 ? this.variance(this.cubes[next]) : 0;
        volumeVariance[i4] = this.cubes[i4].vol > 1 ? this.variance(this.cubes[i4]) : 0;
      } else {
        volumeVariance[next] = 0;
        i4--;
      }
      next = 0;
      let temp = volumeVariance[0];
      for (let j3 = 1; j3 <= i4; j3++) {
        if (volumeVariance[j3] > temp) {
          temp = volumeVariance[j3];
          next = j3;
        }
      }
      if (temp <= 0) {
        generatedColorCount = i4 + 1;
        break;
      }
    }
    return new CreateBoxesResult(maxColors, generatedColorCount);
  }
  createResult(colorCount) {
    const colors = [];
    for (let i4 = 0; i4 < colorCount; ++i4) {
      const cube = this.cubes[i4];
      const weight = this.volume(cube, this.weights);
      if (weight > 0) {
        const r7 = Math.round(this.volume(cube, this.momentsR) / weight);
        const g4 = Math.round(this.volume(cube, this.momentsG) / weight);
        const b3 = Math.round(this.volume(cube, this.momentsB) / weight);
        const color = 255 << 24 | (r7 & 255) << 16 | (g4 & 255) << 8 | b3 & 255;
        colors.push(color);
      }
    }
    return colors;
  }
  variance(cube) {
    const dr = this.volume(cube, this.momentsR);
    const dg = this.volume(cube, this.momentsG);
    const db = this.volume(cube, this.momentsB);
    const xx = this.moments[this.getIndex(cube.r1, cube.g1, cube.b1)] - this.moments[this.getIndex(cube.r1, cube.g1, cube.b0)] - this.moments[this.getIndex(cube.r1, cube.g0, cube.b1)] + this.moments[this.getIndex(cube.r1, cube.g0, cube.b0)] - this.moments[this.getIndex(cube.r0, cube.g1, cube.b1)] + this.moments[this.getIndex(cube.r0, cube.g1, cube.b0)] + this.moments[this.getIndex(cube.r0, cube.g0, cube.b1)] - this.moments[this.getIndex(cube.r0, cube.g0, cube.b0)];
    const hypotenuse = dr * dr + dg * dg + db * db;
    const volume = this.volume(cube, this.weights);
    return xx - hypotenuse / volume;
  }
  cut(one, two) {
    const wholeR = this.volume(one, this.momentsR);
    const wholeG = this.volume(one, this.momentsG);
    const wholeB = this.volume(one, this.momentsB);
    const wholeW = this.volume(one, this.weights);
    const maxRResult = this.maximize(one, directions.RED, one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW);
    const maxGResult = this.maximize(one, directions.GREEN, one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW);
    const maxBResult = this.maximize(one, directions.BLUE, one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
    let direction;
    const maxR = maxRResult.maximum;
    const maxG = maxGResult.maximum;
    const maxB = maxBResult.maximum;
    if (maxR >= maxG && maxR >= maxB) {
      if (maxRResult.cutLocation < 0) {
        return false;
      }
      direction = directions.RED;
    } else if (maxG >= maxR && maxG >= maxB) {
      direction = directions.GREEN;
    } else {
      direction = directions.BLUE;
    }
    two.r1 = one.r1;
    two.g1 = one.g1;
    two.b1 = one.b1;
    switch (direction) {
      case directions.RED:
        one.r1 = maxRResult.cutLocation;
        two.r0 = one.r1;
        two.g0 = one.g0;
        two.b0 = one.b0;
        break;
      case directions.GREEN:
        one.g1 = maxGResult.cutLocation;
        two.r0 = one.r0;
        two.g0 = one.g1;
        two.b0 = one.b0;
        break;
      case directions.BLUE:
        one.b1 = maxBResult.cutLocation;
        two.r0 = one.r0;
        two.g0 = one.g0;
        two.b0 = one.b1;
        break;
      default:
        throw new Error("unexpected direction " + direction);
    }
    one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
    two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
    return true;
  }
  maximize(cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
    const bottomR = this.bottom(cube, direction, this.momentsR);
    const bottomG = this.bottom(cube, direction, this.momentsG);
    const bottomB = this.bottom(cube, direction, this.momentsB);
    const bottomW = this.bottom(cube, direction, this.weights);
    let max = 0;
    let cut = -1;
    let halfR = 0;
    let halfG = 0;
    let halfB = 0;
    let halfW = 0;
    for (let i4 = first; i4 < last; i4++) {
      halfR = bottomR + this.top(cube, direction, i4, this.momentsR);
      halfG = bottomG + this.top(cube, direction, i4, this.momentsG);
      halfB = bottomB + this.top(cube, direction, i4, this.momentsB);
      halfW = bottomW + this.top(cube, direction, i4, this.weights);
      if (halfW === 0) {
        continue;
      }
      let tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1;
      let tempDenominator = halfW * 1;
      let temp = tempNumerator / tempDenominator;
      halfR = wholeR - halfR;
      halfG = wholeG - halfG;
      halfB = wholeB - halfB;
      halfW = wholeW - halfW;
      if (halfW === 0) {
        continue;
      }
      tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1;
      tempDenominator = halfW * 1;
      temp += tempNumerator / tempDenominator;
      if (temp > max) {
        max = temp;
        cut = i4;
      }
    }
    return new MaximizeResult(cut, max);
  }
  volume(cube, moment) {
    return moment[this.getIndex(cube.r1, cube.g1, cube.b1)] - moment[this.getIndex(cube.r1, cube.g1, cube.b0)] - moment[this.getIndex(cube.r1, cube.g0, cube.b1)] + moment[this.getIndex(cube.r1, cube.g0, cube.b0)] - moment[this.getIndex(cube.r0, cube.g1, cube.b1)] + moment[this.getIndex(cube.r0, cube.g1, cube.b0)] + moment[this.getIndex(cube.r0, cube.g0, cube.b1)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
  }
  bottom(cube, direction, moment) {
    switch (direction) {
      case directions.RED:
        return -moment[this.getIndex(cube.r0, cube.g1, cube.b1)] + moment[this.getIndex(cube.r0, cube.g1, cube.b0)] + moment[this.getIndex(cube.r0, cube.g0, cube.b1)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
      case directions.GREEN:
        return -moment[this.getIndex(cube.r1, cube.g0, cube.b1)] + moment[this.getIndex(cube.r1, cube.g0, cube.b0)] + moment[this.getIndex(cube.r0, cube.g0, cube.b1)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
      case directions.BLUE:
        return -moment[this.getIndex(cube.r1, cube.g1, cube.b0)] + moment[this.getIndex(cube.r1, cube.g0, cube.b0)] + moment[this.getIndex(cube.r0, cube.g1, cube.b0)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  top(cube, direction, position, moment) {
    switch (direction) {
      case directions.RED:
        return moment[this.getIndex(position, cube.g1, cube.b1)] - moment[this.getIndex(position, cube.g1, cube.b0)] - moment[this.getIndex(position, cube.g0, cube.b1)] + moment[this.getIndex(position, cube.g0, cube.b0)];
      case directions.GREEN:
        return moment[this.getIndex(cube.r1, position, cube.b1)] - moment[this.getIndex(cube.r1, position, cube.b0)] - moment[this.getIndex(cube.r0, position, cube.b1)] + moment[this.getIndex(cube.r0, position, cube.b0)];
      case directions.BLUE:
        return moment[this.getIndex(cube.r1, cube.g1, position)] - moment[this.getIndex(cube.r1, cube.g0, position)] - moment[this.getIndex(cube.r0, cube.g1, position)] + moment[this.getIndex(cube.r0, cube.g0, position)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  getIndex(r7, g4, b3) {
    return (r7 << INDEX_BITS * 2) + (r7 << INDEX_BITS + 1) + r7 + (g4 << INDEX_BITS) + g4 + b3;
  }
};
var Box = class {
  constructor(r0 = 0, r1 = 0, g0 = 0, g1 = 0, b0 = 0, b1 = 0, vol = 0) {
    this.r0 = r0;
    this.r1 = r1;
    this.g0 = g0;
    this.g1 = g1;
    this.b0 = b0;
    this.b1 = b1;
    this.vol = vol;
  }
};
var CreateBoxesResult = class {
  /**
   * @param requestedCount how many colors the caller asked to be returned from
   *     quantization.
   * @param resultCount the actual number of colors achieved from quantization.
   *     May be lower than the requested count.
   */
  constructor(requestedCount, resultCount) {
    this.requestedCount = requestedCount;
    this.resultCount = resultCount;
  }
};
var MaximizeResult = class {
  constructor(cutLocation, maximum) {
    this.cutLocation = cutLocation;
    this.maximum = maximum;
  }
};

// node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js
var QuantizerCelebi = class {
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Map with keys of colors in ARGB format, and values of number of
   *     pixels in the original image that correspond to the color in the
   *     quantized image.
   */
  static quantize(pixels, maxColors) {
    const wu = new QuantizerWu();
    const wuResult = wu.quantize(pixels, maxColors);
    return QuantizerWsmeans.quantize(pixels, wuResult, maxColors);
  }
};

// node_modules/@material/material-color-utilities/scheme/scheme.js
var Scheme = class _Scheme {
  get primary() {
    return this.props.primary;
  }
  get onPrimary() {
    return this.props.onPrimary;
  }
  get primaryContainer() {
    return this.props.primaryContainer;
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer;
  }
  get secondary() {
    return this.props.secondary;
  }
  get onSecondary() {
    return this.props.onSecondary;
  }
  get secondaryContainer() {
    return this.props.secondaryContainer;
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer;
  }
  get tertiary() {
    return this.props.tertiary;
  }
  get onTertiary() {
    return this.props.onTertiary;
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer;
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer;
  }
  get error() {
    return this.props.error;
  }
  get onError() {
    return this.props.onError;
  }
  get errorContainer() {
    return this.props.errorContainer;
  }
  get onErrorContainer() {
    return this.props.onErrorContainer;
  }
  get background() {
    return this.props.background;
  }
  get onBackground() {
    return this.props.onBackground;
  }
  get surface() {
    return this.props.surface;
  }
  get onSurface() {
    return this.props.onSurface;
  }
  get surfaceVariant() {
    return this.props.surfaceVariant;
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant;
  }
  get outline() {
    return this.props.outline;
  }
  get outlineVariant() {
    return this.props.outlineVariant;
  }
  get shadow() {
    return this.props.shadow;
  }
  get scrim() {
    return this.props.scrim;
  }
  get inverseSurface() {
    return this.props.inverseSurface;
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface;
  }
  get inversePrimary() {
    return this.props.inversePrimary;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material color scheme, based on the color's hue.
   */
  static light(argb) {
    return _Scheme.lightFromCorePalette(CorePalette.of(argb));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(argb) {
    return _Scheme.darkFromCorePalette(CorePalette.of(argb));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(argb) {
    return _Scheme.lightFromCorePalette(CorePalette.contentOf(argb));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(argb) {
    return _Scheme.darkFromCorePalette(CorePalette.contentOf(argb));
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(core) {
    return new _Scheme({
      primary: core.a1.tone(40),
      onPrimary: core.a1.tone(100),
      primaryContainer: core.a1.tone(90),
      onPrimaryContainer: core.a1.tone(10),
      secondary: core.a2.tone(40),
      onSecondary: core.a2.tone(100),
      secondaryContainer: core.a2.tone(90),
      onSecondaryContainer: core.a2.tone(10),
      tertiary: core.a3.tone(40),
      onTertiary: core.a3.tone(100),
      tertiaryContainer: core.a3.tone(90),
      onTertiaryContainer: core.a3.tone(10),
      error: core.error.tone(40),
      onError: core.error.tone(100),
      errorContainer: core.error.tone(90),
      onErrorContainer: core.error.tone(10),
      background: core.n1.tone(99),
      onBackground: core.n1.tone(10),
      surface: core.n1.tone(99),
      onSurface: core.n1.tone(10),
      surfaceVariant: core.n2.tone(90),
      onSurfaceVariant: core.n2.tone(30),
      outline: core.n2.tone(50),
      outlineVariant: core.n2.tone(80),
      shadow: core.n1.tone(0),
      scrim: core.n1.tone(0),
      inverseSurface: core.n1.tone(20),
      inverseOnSurface: core.n1.tone(95),
      inversePrimary: core.a1.tone(80)
    });
  }
  /**
   * Dark scheme from core palette
   */
  static darkFromCorePalette(core) {
    return new _Scheme({
      primary: core.a1.tone(80),
      onPrimary: core.a1.tone(20),
      primaryContainer: core.a1.tone(30),
      onPrimaryContainer: core.a1.tone(90),
      secondary: core.a2.tone(80),
      onSecondary: core.a2.tone(20),
      secondaryContainer: core.a2.tone(30),
      onSecondaryContainer: core.a2.tone(90),
      tertiary: core.a3.tone(80),
      onTertiary: core.a3.tone(20),
      tertiaryContainer: core.a3.tone(30),
      onTertiaryContainer: core.a3.tone(90),
      error: core.error.tone(80),
      onError: core.error.tone(20),
      errorContainer: core.error.tone(30),
      onErrorContainer: core.error.tone(80),
      background: core.n1.tone(10),
      onBackground: core.n1.tone(90),
      surface: core.n1.tone(10),
      onSurface: core.n1.tone(90),
      surfaceVariant: core.n2.tone(30),
      onSurfaceVariant: core.n2.tone(80),
      outline: core.n2.tone(60),
      outlineVariant: core.n2.tone(30),
      shadow: core.n1.tone(0),
      scrim: core.n1.tone(0),
      inverseSurface: core.n1.tone(90),
      inverseOnSurface: core.n1.tone(20),
      inversePrimary: core.a1.tone(40)
    });
  }
  constructor(props) {
    this.props = props;
  }
  toJSON() {
    return {
      ...this.props
    };
  }
};

// node_modules/@material/material-color-utilities/scheme/scheme_expressive.js
var SchemeExpressive = class _SchemeExpressive extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.EXPRESSIVE,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 240), 40),
      secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeExpressive.hues, _SchemeExpressive.secondaryRotations), 24),
      tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeExpressive.hues, _SchemeExpressive.tertiaryRotations), 32),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12)
    });
  }
};
SchemeExpressive.hues = [
  0,
  21,
  51,
  121,
  151,
  191,
  271,
  321,
  360
];
SchemeExpressive.secondaryRotations = [
  45,
  95,
  45,
  20,
  45,
  90,
  45,
  45,
  45
];
SchemeExpressive.tertiaryRotations = [
  120,
  120,
  20,
  45,
  20,
  15,
  20,
  120,
  120
];

// node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js
var SchemeVibrant = class _SchemeVibrant extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.VIBRANT,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200),
      secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeVibrant.hues, _SchemeVibrant.secondaryRotations), 24),
      tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeVibrant.hues, _SchemeVibrant.tertiaryRotations), 32),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12)
    });
  }
};
SchemeVibrant.hues = [
  0,
  41,
  61,
  101,
  131,
  181,
  251,
  301,
  360
];
SchemeVibrant.secondaryRotations = [
  18,
  15,
  10,
  12,
  15,
  18,
  15,
  12,
  12
];
SchemeVibrant.tertiaryRotations = [
  35,
  30,
  20,
  25,
  30,
  35,
  30,
  25,
  25
];

// node_modules/@material/material-color-utilities/score/score.js
var SCORE_OPTION_DEFAULTS = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: true
  // Avoid unsuitable colors.
};
function compare(a3, b3) {
  if (a3.score > b3.score) {
    return -1;
  } else if (a3.score < b3.score) {
    return 1;
  }
  return 0;
}
var Score = class _Score {
  constructor() {
  }
  /**
   * Given a map with keys of colors and values of how often the color appears,
   * rank the colors based on suitability for being used for a UI theme.
   *
   * @param colorsToPopulation map with keys of colors and values of how often
   *     the color appears, usually from a source image.
   * @param {ScoreOptions} options optional parameters.
   * @return Colors sorted by suitability for a UI theme. The most suitable
   *     color is the first item, the least suitable is the last. There will
   *     always be at least one color returned. If all the input colors
   *     were not suitable for a theme, a default fallback color will be
   *     provided, Google Blue.
   */
  static score(colorsToPopulation, options) {
    const { desired, fallbackColorARGB, filter } = { ...SCORE_OPTION_DEFAULTS, ...options };
    const colorsHct = [];
    const huePopulation = new Array(360).fill(0);
    let populationSum = 0;
    for (const [argb, population] of colorsToPopulation.entries()) {
      const hct = Hct.fromInt(argb);
      colorsHct.push(hct);
      const hue = Math.floor(hct.hue);
      huePopulation[hue] += population;
      populationSum += population;
    }
    const hueExcitedProportions = new Array(360).fill(0);
    for (let hue = 0; hue < 360; hue++) {
      const proportion = huePopulation[hue] / populationSum;
      for (let i4 = hue - 14; i4 < hue + 16; i4++) {
        const neighborHue = sanitizeDegreesInt(i4);
        hueExcitedProportions[neighborHue] += proportion;
      }
    }
    const scoredHct = new Array();
    for (const hct of colorsHct) {
      const hue = sanitizeDegreesInt(Math.round(hct.hue));
      const proportion = hueExcitedProportions[hue];
      if (filter && (hct.chroma < _Score.CUTOFF_CHROMA || proportion <= _Score.CUTOFF_EXCITED_PROPORTION)) {
        continue;
      }
      const proportionScore = proportion * 100 * _Score.WEIGHT_PROPORTION;
      const chromaWeight = hct.chroma < _Score.TARGET_CHROMA ? _Score.WEIGHT_CHROMA_BELOW : _Score.WEIGHT_CHROMA_ABOVE;
      const chromaScore = (hct.chroma - _Score.TARGET_CHROMA) * chromaWeight;
      const score = proportionScore + chromaScore;
      scoredHct.push({ hct, score });
    }
    scoredHct.sort(compare);
    const chosenColors = [];
    for (let differenceDegrees2 = 90; differenceDegrees2 >= 15; differenceDegrees2--) {
      chosenColors.length = 0;
      for (const { hct } of scoredHct) {
        const duplicateHue = chosenColors.find((chosenHct) => {
          return differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees2;
        });
        if (!duplicateHue) {
          chosenColors.push(hct);
        }
        if (chosenColors.length >= desired)
          break;
      }
      if (chosenColors.length >= desired)
        break;
    }
    const colors = [];
    if (chosenColors.length === 0) {
      colors.push(fallbackColorARGB);
    }
    for (const chosenHct of chosenColors) {
      colors.push(chosenHct.toInt());
    }
    return colors;
  }
};
Score.TARGET_CHROMA = 48;
Score.WEIGHT_PROPORTION = 0.7;
Score.WEIGHT_CHROMA_ABOVE = 0.3;
Score.WEIGHT_CHROMA_BELOW = 0.1;
Score.CUTOFF_CHROMA = 5;
Score.CUTOFF_EXCITED_PROPORTION = 0.01;

// node_modules/@material/material-color-utilities/utils/string_utils.js
function hexFromArgb(argb) {
  const r7 = redFromArgb(argb);
  const g4 = greenFromArgb(argb);
  const b3 = blueFromArgb(argb);
  const outParts = [r7.toString(16), g4.toString(16), b3.toString(16)];
  for (const [i4, part] of outParts.entries()) {
    if (part.length === 1) {
      outParts[i4] = "0" + part;
    }
  }
  return "#" + outParts.join("");
}
function argbFromHex(hex) {
  hex = hex.replace("#", "");
  const isThree = hex.length === 3;
  const isSix = hex.length === 6;
  const isEight = hex.length === 8;
  if (!isThree && !isSix && !isEight) {
    throw new Error("unexpected hex " + hex);
  }
  let r7 = 0;
  let g4 = 0;
  let b3 = 0;
  if (isThree) {
    r7 = parseIntHex(hex.slice(0, 1).repeat(2));
    g4 = parseIntHex(hex.slice(1, 2).repeat(2));
    b3 = parseIntHex(hex.slice(2, 3).repeat(2));
  } else if (isSix) {
    r7 = parseIntHex(hex.slice(0, 2));
    g4 = parseIntHex(hex.slice(2, 4));
    b3 = parseIntHex(hex.slice(4, 6));
  } else if (isEight) {
    r7 = parseIntHex(hex.slice(2, 4));
    g4 = parseIntHex(hex.slice(4, 6));
    b3 = parseIntHex(hex.slice(6, 8));
  }
  return (255 << 24 | (r7 & 255) << 16 | (g4 & 255) << 8 | b3 & 255) >>> 0;
}
function parseIntHex(value) {
  return parseInt(value, 16);
}

// node_modules/@material/material-color-utilities/utils/image_utils.js
async function sourceColorFromImage(image) {
  const imageBytes = await new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      reject(new Error("Could not get canvas context"));
      return;
    }
    const loadCallback = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      let rect = [0, 0, image.width, image.height];
      const area = image.dataset["area"];
      if (area && /^\d+(\s*,\s*\d+){3}$/.test(area)) {
        rect = area.split(/\s*,\s*/).map((s2) => {
          return parseInt(s2, 10);
        });
      }
      const [sx, sy, sw, sh] = rect;
      resolve(context.getImageData(sx, sy, sw, sh).data);
    };
    const errorCallback = () => {
      reject(new Error("Image load failed"));
    };
    if (image.complete) {
      loadCallback();
    } else {
      image.onload = loadCallback;
      image.onerror = errorCallback;
    }
  });
  const pixels = [];
  for (let i4 = 0; i4 < imageBytes.length; i4 += 4) {
    const r7 = imageBytes[i4];
    const g4 = imageBytes[i4 + 1];
    const b3 = imageBytes[i4 + 2];
    const a3 = imageBytes[i4 + 3];
    if (a3 < 255) {
      continue;
    }
    const argb = argbFromRgb(r7, g4, b3);
    pixels.push(argb);
  }
  const result = QuantizerCelebi.quantize(pixels, 128);
  const ranked = Score.score(result);
  const top = ranked[0];
  return top;
}

// node_modules/@material/material-color-utilities/utils/theme_utils.js
function customColor(source, color) {
  let value = color.value;
  const from = value;
  const to2 = source;
  if (color.blend) {
    value = Blend.harmonize(from, to2);
  }
  const palette = CorePalette.of(value);
  const tones = palette.a1;
  return {
    color,
    value,
    light: {
      color: tones.tone(40),
      onColor: tones.tone(100),
      colorContainer: tones.tone(90),
      onColorContainer: tones.tone(10)
    },
    dark: {
      color: tones.tone(80),
      onColor: tones.tone(20),
      colorContainer: tones.tone(30),
      onColorContainer: tones.tone(90)
    }
  };
}

// node_modules/mdui/functions/getColorFromImage.js
var getColorFromImage = async (image) => {
  const $image = $(image);
  const source = await sourceColorFromImage($image[0]);
  return hexFromArgb(source);
};

// node_modules/mdui/functions/getLocale.js
var getLocale3 = () => {
  if (!getLocale2) {
    throw new Error(uninitializedError);
  }
  return getLocale2();
};

// node_modules/mdui/functions/getTheme.js
var getTheme = (target = document.documentElement) => {
  const element = $(target)[0];
  const themes = ["light", "dark", "auto"];
  const prefix2 = "mdui-theme-";
  return Array.from(element.classList).find((className2) => themes.map((theme) => prefix2 + theme).includes(className2))?.slice(prefix2.length) ?? "light";
};

// node_modules/mdui/functions/loadLocale.js
var loadLocale2 = (loadFunc) => {
  initializeLocalize(loadFunc);
};

// node_modules/mdui/functions/prompt.js
var getConfirmText3 = () => {
  return msg("OK", {
    id: "functions.prompt.confirmText"
  });
};
var getCancelText2 = () => {
  return msg("Cancel", {
    id: "functions.prompt.cancelText"
  });
};
var prompt = (options) => {
  const mergedOptions = Object.assign({}, {
    confirmText: getConfirmText3(),
    cancelText: getCancelText2(),
    onConfirm: returnTrue,
    onCancel: returnTrue,
    validator: returnTrue,
    textFieldOptions: {}
  }, options);
  const properties = [
    "headline",
    "description",
    "icon",
    "closeOnEsc",
    "closeOnOverlayClick",
    "stackedActions",
    "queue",
    "onOpen",
    "onOpened",
    "onClose",
    "onClosed",
    "onOverlayClick"
  ];
  const textField = new TextField();
  Object.entries(mergedOptions.textFieldOptions).forEach(([key, value]) => {
    textField[key] = value;
  });
  return new Promise((resolve, reject) => {
    let isResolve = false;
    const dialog2 = dialog({
      ...Object.fromEntries(properties.filter((key) => !isUndefined(mergedOptions[key])).map((key) => [key, mergedOptions[key]])),
      body: textField,
      actions: [
        {
          text: mergedOptions.cancelText,
          onClick: (dialog3) => {
            return mergedOptions.onCancel.call(dialog3, textField.value, dialog3);
          }
        },
        {
          text: mergedOptions.confirmText,
          onClick: (dialog3) => {
            const onConfirm = () => {
              const clickResult = mergedOptions.onConfirm.call(dialog3, textField.value, dialog3);
              if (isPromise(clickResult)) {
                clickResult.then(() => {
                  isResolve = true;
                });
              } else if (clickResult !== false) {
                isResolve = true;
              }
              return clickResult;
            };
            textField.setCustomValidity("");
            if (!textField.reportValidity()) {
              return false;
            }
            const validateResult = mergedOptions.validator.call(textField, textField.value);
            if (isBoolean(validateResult) && !validateResult) {
              textField.setCustomValidity(" ");
              return false;
            }
            if (isString(validateResult)) {
              textField.setCustomValidity(validateResult);
              return false;
            }
            if (isPromise(validateResult)) {
              return new Promise((resolve2, reject2) => {
                validateResult.then(resolve2).catch((reason) => {
                  textField.setCustomValidity(reason);
                  reject2(reason);
                });
              });
            }
            return onConfirm();
          }
        }
      ]
    });
    if (!options.confirmText) {
      onLocaleReady(dialog2, () => {
        $(dialog2).find('[slot="action"]').last().text(getConfirmText3());
      });
    }
    if (!options.cancelText) {
      onLocaleReady(dialog2, () => {
        $(dialog2).find('[slot="action"]').first().text(getCancelText2());
      });
    }
    $(dialog2).on("close", () => {
      isResolve ? resolve(textField.value) : reject();
      offLocaleReady(dialog2);
    });
  });
};

// node_modules/mdui/internal/colorScheme.js
var themeArr = ["light", "dark"];
var prefix = "mdui-custom-color-scheme-";
var themeIndex = 0;
var rgbFromArgb = (source) => {
  const red = redFromArgb(source);
  const green = greenFromArgb(source);
  const blue = blueFromArgb(source);
  return [red, green, blue].join(", ");
};
var remove2 = (target) => {
  const $target = $(target);
  let classNames = $target.get().map((element) => Array.from(element.classList)).flat();
  classNames = unique(classNames).filter((className2) => className2.startsWith(prefix));
  $target.removeClass(classNames.join(" "));
  const unusedClassNames = classNames.filter((className2) => $(`.${className2}`).length === 0);
  $(unusedClassNames.map((i4) => `#${i4}`).join(",")).remove();
};
var setFromSource = (source, options) => {
  const document3 = getDocument();
  const $target = $(options?.target || document3.documentElement);
  const schemes = {
    light: Scheme.light(source).toJSON(),
    dark: Scheme.dark(source).toJSON()
  };
  const palette = CorePalette.of(source);
  Object.assign(schemes.light, {
    "surface-dim": palette.n1.tone(87),
    "surface-bright": palette.n1.tone(98),
    "surface-container-lowest": palette.n1.tone(100),
    "surface-container-low": palette.n1.tone(96),
    "surface-container": palette.n1.tone(94),
    "surface-container-high": palette.n1.tone(92),
    "surface-container-highest": palette.n1.tone(90),
    "surface-tint-color": schemes.light.primary
  });
  Object.assign(schemes.dark, {
    "surface-dim": palette.n1.tone(6),
    "surface-bright": palette.n1.tone(24),
    "surface-container-lowest": palette.n1.tone(4),
    "surface-container-low": palette.n1.tone(10),
    "surface-container": palette.n1.tone(12),
    "surface-container-high": palette.n1.tone(17),
    "surface-container-highest": palette.n1.tone(22),
    "surface-tint-color": schemes.dark.primary
  });
  (options?.customColors || []).map((color) => {
    const name = toKebabCase(color.name);
    const custom = customColor(source, {
      name,
      value: argbFromHex(color.value),
      blend: true
    });
    themeArr.forEach((theme) => {
      schemes[theme][name] = custom[theme].color;
      schemes[theme][`on-${name}`] = custom[theme].onColor;
      schemes[theme][`${name}-container`] = custom[theme].colorContainer;
      schemes[theme][`on-${name}-container`] = custom[theme].onColorContainer;
    });
  });
  const colorVar = (theme, callback) => {
    return Object.entries(schemes[theme]).map(([key, value]) => callback(toKebabCase(key), rgbFromArgb(value))).join("");
  };
  const className2 = prefix + `${source}-${themeIndex++}`;
  const cssText = `.${className2} {
  ${colorVar("light", (token, rgb) => `--mdui-color-${token}-light: ${rgb};`)}
  ${colorVar("dark", (token, rgb) => `--mdui-color-${token}-dark: ${rgb};`)}
  ${colorVar("light", (token) => `--mdui-color-${token}: var(--mdui-color-${token}-light);`)}

  color: rgb(var(--mdui-color-on-background));
  background-color: rgb(var(--mdui-color-background));
}

.mdui-theme-dark .${className2},
.mdui-theme-dark.${className2} {
  ${colorVar("dark", (token) => `--mdui-color-${token}: var(--mdui-color-${token}-dark);`)}
}

@media (prefers-color-scheme: dark) {
  .mdui-theme-auto .${className2},
  .mdui-theme-auto.${className2} {
    ${colorVar("dark", (token) => `--mdui-color-${token}: var(--mdui-color-${token}-dark);`)}
  }
}`;
  remove2($target);
  $(document3.head).append(`<style id="${className2}">${cssText}</style>`);
  $target.addClass(className2);
};

// node_modules/mdui/functions/removeColorScheme.js
var removeColorScheme = (target = document.documentElement) => {
  remove2(target);
};

// node_modules/mdui/functions/setColorScheme.js
var setColorScheme = (hex, options) => {
  const source = argbFromHex(hex);
  setFromSource(source, options);
};

// node_modules/mdui/functions/setLocale.js
var setLocale3 = (locale) => {
  if (!setLocale2) {
    throw new Error(uninitializedError);
  }
  return setLocale2(locale);
};

// node_modules/mdui/functions/setTheme.js
var setTheme = (theme, target = document.documentElement) => {
  const $target = $(target);
  const themes = ["light", "dark", "auto"];
  const prefix2 = "mdui-theme-";
  $target.removeClass(themes.map((theme2) => prefix2 + theme2).join(" ")).addClass(prefix2 + theme);
};

// node_modules/mdui/functions/snackbar.js
var queueName2 = "mdui.functions.snackbar.";
var currentSnackbar = void 0;
var snackbar = (options) => {
  const snackbar2 = new Snackbar();
  const $snackbar = $(snackbar2);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "message") {
      snackbar2.innerHTML = value;
    } else if ([
      "onClick",
      "onActionClick",
      "onOpen",
      "onOpened",
      "onClose",
      "onClosed"
    ].includes(key)) {
      const eventName = toKebabCase(key.slice(2));
      $snackbar.on(eventName, () => {
        if (key === "onActionClick") {
          const actionClick = (options.onActionClick ?? returnTrue).call(snackbar2, snackbar2);
          if (isPromise(actionClick)) {
            snackbar2.actionLoading = true;
            actionClick.then(() => {
              snackbar2.open = false;
            }).finally(() => {
              snackbar2.actionLoading = false;
            });
          } else if (actionClick !== false) {
            snackbar2.open = false;
          }
        } else {
          value.call(snackbar2, snackbar2);
        }
      });
    } else {
      snackbar2[key] = value;
    }
  });
  $snackbar.appendTo("body").on("closed", () => {
    $snackbar.remove();
    if (options.queue) {
      currentSnackbar = void 0;
      dequeue(queueName2 + options.queue);
    }
  });
  if (!options.queue) {
    setTimeout(() => {
      snackbar2.open = true;
    });
  } else if (currentSnackbar) {
    queue(queueName2 + options.queue, () => {
      snackbar2.open = true;
      currentSnackbar = snackbar2;
    });
  } else {
    setTimeout(() => {
      snackbar2.open = true;
    });
    currentSnackbar = snackbar2;
  }
  return snackbar2;
};

// node_modules/@mdui/shared/helpers/throttle.js
var throttle = (func, wait = 0) => {
  const window2 = getWindow();
  let timer;
  let result;
  return function(...args) {
    if (timer === void 0) {
      timer = window2.setTimeout(() => {
        result = func.apply(this, args);
        timer = void 0;
      }, wait);
    }
    return result;
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $,
  Avatar,
  Badge,
  BottomAppBar,
  Button,
  ButtonIcon,
  Card,
  Checkbox,
  Chip,
  CircularProgress,
  Collapse,
  CollapseItem,
  Dialog,
  Divider,
  Dropdown,
  Fab,
  Icon,
  Layout,
  LayoutItem,
  LayoutMain,
  LinearProgress,
  List,
  ListItem,
  ListSubheader,
  Menu,
  MenuItem,
  NavigationBar,
  NavigationBarItem,
  NavigationDrawer,
  NavigationRail,
  NavigationRailItem,
  Radio,
  RadioGroup,
  RangeSlider,
  Ripple,
  SegmentedButton,
  SegmentedButtonGroup,
  Select,
  Slider,
  Snackbar,
  Switch,
  Tab,
  TabPanel,
  Tabs,
  TextField,
  Tooltip,
  TopAppBar,
  TopAppBarTitle,
  alert,
  breakpoint,
  confirm,
  dialog,
  getColorFromImage,
  getLocale,
  getTheme,
  loadLocale,
  observeResize,
  prompt,
  removeColorScheme,
  setColorScheme,
  setLocale,
  setTheme,
  snackbar,
  throttle
});
/*! Bundled license information:

@lit-labs/ssr-dom-shim/lib/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-dom-shim/index.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/locale-status-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/str-tag.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/types.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/default-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-controller.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-decorator.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/deferred.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/fnv1a64.js:
  (**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   *)

@lit/localize/internal/id-generation.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/runtime-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/runtime.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/lit-localize.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/material-color-utilities/utils/math_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/color_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/viewing_conditions.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/cam16.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct_solver.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/blend/blend.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_color.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/tonal_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/contrast_curve.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/variant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_scheme.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/core_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/lab_point_provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wsmeans.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wu.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_celebi.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_android.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/temperature/temperature_cache.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_expressive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fruit_salad.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_monochrome.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_neutral.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_rainbow.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_tonal_spot.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/score/score.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/string_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/image_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/theme_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
