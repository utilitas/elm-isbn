(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done(elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done(elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done(elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? elm$http$Http$GoodStatus_ : elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return elm$core$Dict$empty;
	}

	var headers = elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(elm$core$Dict$update, key, function(oldValue) {
				return elm$core$Maybe$Just(elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2(elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2(elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? elm$core$Maybe$Just(event.total) : elm$core$Maybe$Nothing
		}))));
	});
}



// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Main$Done = {$: 'Done'};
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$init = function (_n0) {
	return _Utils_Tuple2(
		{books: _List_Nil, content: _List_Nil, input: '', offset: 0, status: author$project$Main$Done, table: _List_Nil},
		elm$core$Platform$Cmd$none);
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$none;
};
var author$project$Main$Loading = {$: 'Loading'};
var author$project$Main$GotBookInfo = function (a) {
	return {$: 'GotBookInfo', a: a};
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var author$project$Main$dictNation = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('978-0', 'English'),
			_Utils_Tuple2('978-1', 'English'),
			_Utils_Tuple2('978-2', 'French'),
			_Utils_Tuple2('978-3', 'German'),
			_Utils_Tuple2('978-4', 'Japan'),
			_Utils_Tuple2('978-5', 'former USSR'),
			_Utils_Tuple2('978-600', 'Iran'),
			_Utils_Tuple2('978-601', 'Kazakhstan'),
			_Utils_Tuple2('978-602', 'Indonesia'),
			_Utils_Tuple2('978-603', 'Saudi Arabia'),
			_Utils_Tuple2('978-604', 'Vietnam'),
			_Utils_Tuple2('978-605', 'Turkey'),
			_Utils_Tuple2('978-606', 'Romania'),
			_Utils_Tuple2('978-607', 'Mexico'),
			_Utils_Tuple2('978-608', 'Macedonia'),
			_Utils_Tuple2('978-609', 'Lithuania'),
			_Utils_Tuple2('978-611', 'Thailand'),
			_Utils_Tuple2('978-612', 'Peru'),
			_Utils_Tuple2('978-613', 'Mauritius'),
			_Utils_Tuple2('978-614', 'Lebanon'),
			_Utils_Tuple2('978-615', 'Hungary'),
			_Utils_Tuple2('978-616', 'Thailand'),
			_Utils_Tuple2('978-617', 'Ukraine'),
			_Utils_Tuple2('978-618', 'Greece'),
			_Utils_Tuple2('978-619', 'Bulgaria'),
			_Utils_Tuple2('978-620', 'Mauritius'),
			_Utils_Tuple2('978-621', 'Philippines'),
			_Utils_Tuple2('978-622', 'Iran'),
			_Utils_Tuple2('978-623', 'Indonesia'),
			_Utils_Tuple2('978-65', 'Brazil'),
			_Utils_Tuple2('978-7', 'China'),
			_Utils_Tuple2('978-80', 'former Czechoslovakia'),
			_Utils_Tuple2('978-81', 'India'),
			_Utils_Tuple2('978-82', 'Norway'),
			_Utils_Tuple2('978-83', 'Poland'),
			_Utils_Tuple2('978-84', 'Spain'),
			_Utils_Tuple2('978-85', 'Brazil'),
			_Utils_Tuple2('978-86', 'former Yugoslavia'),
			_Utils_Tuple2('978-87', 'Denmark'),
			_Utils_Tuple2('978-88', 'Italy'),
			_Utils_Tuple2('978-89', 'Republic of Korea'),
			_Utils_Tuple2('978-90', 'Netherlands'),
			_Utils_Tuple2('978-91', 'Sweden'),
			_Utils_Tuple2('978-92', 'International NGO'),
			_Utils_Tuple2('978-93', 'India'),
			_Utils_Tuple2('978-94', 'Netherlands'),
			_Utils_Tuple2('978-950', 'Argentina'),
			_Utils_Tuple2('978-951', 'Finland'),
			_Utils_Tuple2('978-952', 'Finland'),
			_Utils_Tuple2('978-953', 'Croatia'),
			_Utils_Tuple2('978-954', 'Bulgaria'),
			_Utils_Tuple2('978-955', 'Sri Lanka'),
			_Utils_Tuple2('978-956', 'Chile'),
			_Utils_Tuple2('978-957', 'Taiwan'),
			_Utils_Tuple2('978-958', 'Colombia'),
			_Utils_Tuple2('978-959', 'Cuba'),
			_Utils_Tuple2('978-960', 'Greece'),
			_Utils_Tuple2('978-961', 'Slovenia'),
			_Utils_Tuple2('978-962', 'Hong Kong'),
			_Utils_Tuple2('978-963', 'Hungary'),
			_Utils_Tuple2('978-964', 'Iran'),
			_Utils_Tuple2('978-965', 'Israel'),
			_Utils_Tuple2('978-966', 'Ukraine'),
			_Utils_Tuple2('978-967', 'Malaysia'),
			_Utils_Tuple2('978-968', 'Mexico'),
			_Utils_Tuple2('978-969', 'Pakistan'),
			_Utils_Tuple2('978-970', 'Mexico'),
			_Utils_Tuple2('978-971', 'Philippines'),
			_Utils_Tuple2('978-972', 'Portugal'),
			_Utils_Tuple2('978-973', 'Romania'),
			_Utils_Tuple2('978-974', 'Thailand'),
			_Utils_Tuple2('978-975', 'Turkey'),
			_Utils_Tuple2('978-976', 'CARICOM'),
			_Utils_Tuple2('978-977', 'Egypt'),
			_Utils_Tuple2('978-978', 'Nigeria'),
			_Utils_Tuple2('978-979', 'Indonesia'),
			_Utils_Tuple2('978-980', 'Venezuela'),
			_Utils_Tuple2('978-981', 'Singapore'),
			_Utils_Tuple2('978-982', 'South Pacific'),
			_Utils_Tuple2('978-983', 'Malaysia'),
			_Utils_Tuple2('978-984', 'Bangladesh'),
			_Utils_Tuple2('978-985', 'Belarus'),
			_Utils_Tuple2('978-986', 'Taiwan'),
			_Utils_Tuple2('978-987', 'Argentina'),
			_Utils_Tuple2('978-988', 'Hong Kong'),
			_Utils_Tuple2('978-989', 'Portugal'),
			_Utils_Tuple2('978-9920', 'Morocco'),
			_Utils_Tuple2('978-9921', 'Kuwait'),
			_Utils_Tuple2('978-9922', 'Iraq'),
			_Utils_Tuple2('978-9923', 'Jordan'),
			_Utils_Tuple2('978-9924', 'Cambodia'),
			_Utils_Tuple2('978-9925', 'Cyprus'),
			_Utils_Tuple2('978-9926', 'Bosnia and Herzegovina'),
			_Utils_Tuple2('978-9927', 'Qatar'),
			_Utils_Tuple2('978-9928', 'Albania'),
			_Utils_Tuple2('978-9929', 'Guatemala'),
			_Utils_Tuple2('978-9930', 'Costa'),
			_Utils_Tuple2('978-9931', 'Algeria'),
			_Utils_Tuple2('978-9932', 'Laos'),
			_Utils_Tuple2('978-9933', 'Syria'),
			_Utils_Tuple2('978-9934', 'Latvia'),
			_Utils_Tuple2('978-9935', 'Iceland'),
			_Utils_Tuple2('978-9936', 'Afghanistan'),
			_Utils_Tuple2('978-9937', 'Nepal'),
			_Utils_Tuple2('978-9938', 'Tunisia'),
			_Utils_Tuple2('978-9939', 'Armenia'),
			_Utils_Tuple2('978-9940', 'Montenegro'),
			_Utils_Tuple2('978-9941', 'Georgia'),
			_Utils_Tuple2('978-9942', 'Ecuador'),
			_Utils_Tuple2('978-9943', 'Uzbekistan'),
			_Utils_Tuple2('978-9944', 'Turkey'),
			_Utils_Tuple2('978-9945', 'Dominican Republic'),
			_Utils_Tuple2('978-9946', 'North'),
			_Utils_Tuple2('978-9947', 'Algeria'),
			_Utils_Tuple2('978-9948', 'United Arab Emirates'),
			_Utils_Tuple2('978-9949', 'Estonia'),
			_Utils_Tuple2('978-9950', 'Palestine'),
			_Utils_Tuple2('978-9951', 'Kosova'),
			_Utils_Tuple2('978-9952', 'Azerbaijan'),
			_Utils_Tuple2('978-9953', 'Lebanon'),
			_Utils_Tuple2('978-9954', 'Morocco'),
			_Utils_Tuple2('978-9955', 'Lithuania'),
			_Utils_Tuple2('978-9956', 'Cameroon'),
			_Utils_Tuple2('978-9957', 'Jordan'),
			_Utils_Tuple2('978-9958', 'Bosnia and Herzegovina'),
			_Utils_Tuple2('978-9959', 'Libya'),
			_Utils_Tuple2('978-9960', 'Saudi Arabia'),
			_Utils_Tuple2('978-9961', 'Algeria'),
			_Utils_Tuple2('978-9962', 'Panama'),
			_Utils_Tuple2('978-9963', 'Cyprus'),
			_Utils_Tuple2('978-9964', 'Ghana'),
			_Utils_Tuple2('978-9965', 'Kazakhstan'),
			_Utils_Tuple2('978-9966', 'Kenya'),
			_Utils_Tuple2('978-9967', 'Kyrgyzstan'),
			_Utils_Tuple2('978-9968', 'Costa'),
			_Utils_Tuple2('978-9970', 'Uganda'),
			_Utils_Tuple2('978-9971', 'Singapore'),
			_Utils_Tuple2('978-9972', 'Peru'),
			_Utils_Tuple2('978-9973', 'Tunisia'),
			_Utils_Tuple2('978-9974', 'Uruguay'),
			_Utils_Tuple2('978-9975', 'Moldova'),
			_Utils_Tuple2('978-9976', 'Tanzania'),
			_Utils_Tuple2('978-9977', 'Costa'),
			_Utils_Tuple2('978-9978', 'Ecuador'),
			_Utils_Tuple2('978-9979', 'Iceland'),
			_Utils_Tuple2('978-9980', 'Papua New Guinea'),
			_Utils_Tuple2('978-9981', 'Morocco'),
			_Utils_Tuple2('978-9982', 'Zambia'),
			_Utils_Tuple2('978-9983', 'Gambia'),
			_Utils_Tuple2('978-9984', 'Latvia'),
			_Utils_Tuple2('978-9985', 'Estonia'),
			_Utils_Tuple2('978-9986', 'Lithuania'),
			_Utils_Tuple2('978-9987', 'Tanzania'),
			_Utils_Tuple2('978-9988', 'Ghana'),
			_Utils_Tuple2('978-9989', 'Macedonia'),
			_Utils_Tuple2('978-99901', 'Bahrain'),
			_Utils_Tuple2('978-99902', 'Gabon'),
			_Utils_Tuple2('978-99903', 'Mauritius'),
			_Utils_Tuple2('978-99904', 'Curaçao'),
			_Utils_Tuple2('978-99905', 'Bolivia'),
			_Utils_Tuple2('978-99906', 'Kuwait'),
			_Utils_Tuple2('978-99908', 'Malawi'),
			_Utils_Tuple2('978-99909', 'Malta'),
			_Utils_Tuple2('978-99910', 'Sierra'),
			_Utils_Tuple2('978-99911', 'Lesotho'),
			_Utils_Tuple2('978-99912', 'Botswana'),
			_Utils_Tuple2('978-99913', 'Andorra'),
			_Utils_Tuple2('978-99914', 'Suriname'),
			_Utils_Tuple2('978-99915', 'Maldives'),
			_Utils_Tuple2('978-99916', 'Namibia'),
			_Utils_Tuple2('978-99917', 'Brunei Darussalam'),
			_Utils_Tuple2('978-99918', 'Faroe Islands'),
			_Utils_Tuple2('978-99919', 'Benin'),
			_Utils_Tuple2('978-99920', 'Andorra'),
			_Utils_Tuple2('978-99921', 'Qatar'),
			_Utils_Tuple2('978-99922', 'Guatemala'),
			_Utils_Tuple2('978-99923', 'El Salvador'),
			_Utils_Tuple2('978-99924', 'Nicaragua'),
			_Utils_Tuple2('978-99925', 'Paraguay'),
			_Utils_Tuple2('978-99926', 'Honduras'),
			_Utils_Tuple2('978-99927', 'Albania'),
			_Utils_Tuple2('978-99928', 'Georgia'),
			_Utils_Tuple2('978-99929', 'Mongolia'),
			_Utils_Tuple2('978-99930', 'Armenia'),
			_Utils_Tuple2('978-99931', 'Seychelles'),
			_Utils_Tuple2('978-99932', 'Malta'),
			_Utils_Tuple2('978-99933', 'Nepal'),
			_Utils_Tuple2('978-99934', 'Dominican Republic'),
			_Utils_Tuple2('978-99935', 'Haiti'),
			_Utils_Tuple2('978-99936', 'Bhutan'),
			_Utils_Tuple2('978-99937', 'Macau'),
			_Utils_Tuple2('978-99938', 'Republika Srpska'),
			_Utils_Tuple2('978-99939', 'Guatemala'),
			_Utils_Tuple2('978-99940', 'Georgia'),
			_Utils_Tuple2('978-99941', 'Armenia'),
			_Utils_Tuple2('978-99942', 'Sudan'),
			_Utils_Tuple2('978-99943', 'Albania'),
			_Utils_Tuple2('978-99944', 'Ethiopia'),
			_Utils_Tuple2('978-99945', 'Namibia'),
			_Utils_Tuple2('978-99946', 'Nepal'),
			_Utils_Tuple2('978-99947', 'Tajikistan'),
			_Utils_Tuple2('978-99948', 'Eritrea'),
			_Utils_Tuple2('978-99949', 'Mauritius'),
			_Utils_Tuple2('978-99950', 'Cambodia'),
			_Utils_Tuple2('978-99951', 'Democratic Republic of Congo'),
			_Utils_Tuple2('978-99952', 'Mali'),
			_Utils_Tuple2('978-99953', 'Paraguay'),
			_Utils_Tuple2('978-99954', 'Bolivia'),
			_Utils_Tuple2('978-99955', 'Republika Srpska'),
			_Utils_Tuple2('978-99956', 'Albania'),
			_Utils_Tuple2('978-99957', 'Malta'),
			_Utils_Tuple2('978-99958', 'Bahrain'),
			_Utils_Tuple2('978-99959', 'Luxembourg'),
			_Utils_Tuple2('978-99960', 'Malawi'),
			_Utils_Tuple2('978-99961', 'El Salvador'),
			_Utils_Tuple2('978-99962', 'Mongolia'),
			_Utils_Tuple2('978-99963', 'Cambodia'),
			_Utils_Tuple2('978-99964', 'Nicaragua'),
			_Utils_Tuple2('978-99965', 'Macau'),
			_Utils_Tuple2('978-99966', 'Kuwait'),
			_Utils_Tuple2('978-99967', 'Paraguay'),
			_Utils_Tuple2('978-99968', 'Botswana'),
			_Utils_Tuple2('978-99969', 'Oman'),
			_Utils_Tuple2('978-99970', 'Haiti'),
			_Utils_Tuple2('978-99971', 'Myanmar'),
			_Utils_Tuple2('978-99972', 'Faroe Islands'),
			_Utils_Tuple2('978-99973', 'Mongolia'),
			_Utils_Tuple2('978-99974', 'Bolivia'),
			_Utils_Tuple2('978-99975', 'Tajikistan'),
			_Utils_Tuple2('978-99976', 'Republika Srpska'),
			_Utils_Tuple2('978-99977', 'Rwanda'),
			_Utils_Tuple2('978-99978', 'Mongolia'),
			_Utils_Tuple2('978-99979', 'Honduras'),
			_Utils_Tuple2('978-99980', 'Bhutan'),
			_Utils_Tuple2('978-99981', 'Macau'),
			_Utils_Tuple2('979-10', 'France'),
			_Utils_Tuple2('979-11', 'Republic of Korea'),
			_Utils_Tuple2('979-12', 'Italy')
		]));
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var author$project$Main$intsToString = A2(
	elm$core$Basics$composeR,
	elm$core$List$map(
		function (n) {
			return (n === 10) ? 'X' : elm$core$String$fromInt(n);
		}),
	elm$core$String$concat);
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var author$project$Main$getNation = function (isbn) {
	var key = (_Utils_eq(isbn.header, _List_Nil) ? '978' : author$project$Main$intsToString(isbn.header)) + ('-' + author$project$Main$intsToString(isbn.nation));
	var name = A2(elm$core$Dict$get, key, author$project$Main$dictNation);
	if (name.$ === 'Just') {
		var s = name.a;
		return s;
	} else {
		return 'unallocated: ' + key;
	}
};
var author$project$Main$dictPub = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('00', '岩波書店'),
			_Utils_Tuple2('01', '旺文社'),
			_Utils_Tuple2('02', '朝日新聞社'),
			_Utils_Tuple2('03', '偕成社'),
			_Utils_Tuple2('04', '角川書店'),
			_Utils_Tuple2('05', '学習研究社'),
			_Utils_Tuple2('06', '講談社'),
			_Utils_Tuple2('07', '主婦の友社'),
			_Utils_Tuple2('08', '集英社'),
			_Utils_Tuple2('09', '小学館'),
			_Utils_Tuple2('10', '新潮社'),
			_Utils_Tuple2('11', '全音楽譜社'),
			_Utils_Tuple2('12', '中央公論新社'),
			_Utils_Tuple2('13', '東京大学出版会'),
			_Utils_Tuple2('14', '日本放送出版協会(ＮＨＫ出版)'),
			_Utils_Tuple2('15', '早川書房'),
			_Utils_Tuple2('16', '文藝春秋'),
			_Utils_Tuple2('17', '国立印刷局'),
			_Utils_Tuple2('18', '明治図書出版'),
			_Utils_Tuple2('19', '徳間書店'),
			_Utils_Tuple2('250', '青木書店'),
			_Utils_Tuple2('251', 'あかね書房'),
			_Utils_Tuple2('252', '暁教育図書'),
			_Utils_Tuple2('253', '秋田書店'),
			_Utils_Tuple2('254', '朝倉書店'),
			_Utils_Tuple2('255', '朝日出版社'),
			_Utils_Tuple2('256', '朝倉書店'),
			_Utils_Tuple2('257', '朝日ソノラマ'),
			_Utils_Tuple2('258', 'アジア経済研究所'),
			_Utils_Tuple2('259', '家の光協会'),
			_Utils_Tuple2('260', '医学書院'),
			_Utils_Tuple2('261', '郁文堂'),
			_Utils_Tuple2('262', '池田書店'),
			_Utils_Tuple2('263', '医歯薬出版'),
			_Utils_Tuple2('264', 'いのちのことば社'),
			_Utils_Tuple2('265', '岩崎書店'),
			_Utils_Tuple2('266', 'いんなあとりっぷ社'),
			_Utils_Tuple2('267', '潮出版社'),
			_Utils_Tuple2('268', '英潮社'),
			_Utils_Tuple2('269', '英宝社'),
			_Utils_Tuple2('270', 'ランダムハウス講談社'),
			_Utils_Tuple2('271', '大阪教育図書'),
			_Utils_Tuple2('272', '大月書店'),
			_Utils_Tuple2('273', 'おうふう'),
			_Utils_Tuple2('274', 'オーム社'),
			_Utils_Tuple2('275', '御茶の水書房'),
			_Utils_Tuple2('276', '音楽之友社'),
			_Utils_Tuple2('277', '雄鷄社'),
			_Utils_Tuple2('278', '大泉書店'),
			_Utils_Tuple2('279', 'オール出版'),
			_Utils_Tuple2('280', 'アポロン'),
			_Utils_Tuple2('281', '医歯薬出版'),
			_Utils_Tuple2('282', 'アスキー'),
			_Utils_Tuple2('283', '大空社'),
			_Utils_Tuple2('284', '日本図書センター'),
			_Utils_Tuple2('303', '海文堂出版'),
			_Utils_Tuple2('304', '開隆堂出版'),
			_Utils_Tuple2('305', '笠間書院'),
			_Utils_Tuple2('306', '鹿島出版会'),
			_Utils_Tuple2('307', '金原出版'),
			_Utils_Tuple2('308', '鎌倉書房'),
			_Utils_Tuple2('309', '河出書房新社'),
			_Utils_Tuple2('310', '関東出版社'),
			_Utils_Tuple2('311', '学生社'),
			_Utils_Tuple2('312', '學燈社'),
			_Utils_Tuple2('313', '学陽書房'),
			_Utils_Tuple2('314', '紀伊國屋書店出版部'),
			_Utils_Tuple2('315', 'ニュートンプレス'),
			_Utils_Tuple2('316', '教育出版'),
			_Utils_Tuple2('317', '教育書籍'),
			_Utils_Tuple2('318', '教学研究社'),
			_Utils_Tuple2('319', '協同出版'),
			_Utils_Tuple2('320', '共立出版'),
			_Utils_Tuple2('321', '金園社'),
			_Utils_Tuple2('322', '金融財政事情研究会'),
			_Utils_Tuple2('322', '金融財政事情研究会'),
			_Utils_Tuple2('323', '金の星社'),
			_Utils_Tuple2('324', 'ぎょうせい'),
			_Utils_Tuple2('325', '教学社'),
			_Utils_Tuple2('326', '勁草書房'),
			_Utils_Tuple2('327', '研究社'),
			_Utils_Tuple2('328', '芸術生活社'),
			_Utils_Tuple2('329', '現代思潮新社'),
			_Utils_Tuple2('330', '交通新聞社(弘済出版社)'),
			_Utils_Tuple2('331', '廣済堂出版'),
			_Utils_Tuple2('332', '光生館'),
			_Utils_Tuple2('333', '佼成出版社'),
			_Utils_Tuple2('334', '光文社'),
			_Utils_Tuple2('335', '弘文堂'),
			_Utils_Tuple2('336', '国書刊行会'),
			_Utils_Tuple2('337', '国土社'),
			_Utils_Tuple2('338', '小峰書店'),
			_Utils_Tuple2('339', 'コロナ社'),
			_Utils_Tuple2('340', '梧桐書院'),
			_Utils_Tuple2('341', 'ごま書房'),
			_Utils_Tuple2('342', '桐原書店'),
			_Utils_Tuple2('343', '神戸新聞総合出版センター'),
			_Utils_Tuple2('344', '幻冬舎'),
			_Utils_Tuple2('377', 'サイマル出版会'),
			_Utils_Tuple2('378', 'さ・え・ら書房'),
			_Utils_Tuple2('379', '鷺書房'),
			_Utils_Tuple2('380', '三一書房'),
			_Utils_Tuple2('381', '山海堂'),
			_Utils_Tuple2('382', '産能大学出版部'),
			_Utils_Tuple2('383', '扶桑社(サンケイ出版)'),
			_Utils_Tuple2('384', '三修社'),
			_Utils_Tuple2('385', '三省堂'),
			_Utils_Tuple2('386', '産業報知センター'),
			_Utils_Tuple2('387', 'サンリオ'),
			_Utils_Tuple2('388', '柴田書店'),
			_Utils_Tuple2('389', '清水書院'),
			_Utils_Tuple2('390', '社会思想社'),
			_Utils_Tuple2('391', '主婦と生活社'),
			_Utils_Tuple2('393', '春秋社'),
			_Utils_Tuple2('394', '春陽堂書店'),
			_Utils_Tuple2('395', '彰国社'),
			_Utils_Tuple2('396', '祥伝社'),
			_Utils_Tuple2('397', '駸々堂出版'),
			_Utils_Tuple2('398', '昭文社'),
			_Utils_Tuple2('399', '昇龍堂出版'),
			_Utils_Tuple2('400', '新教出版社'),
			_Utils_Tuple2('401', 'シンコーミュージック'),
			_Utils_Tuple2('402', '新興出版社啓林館'),
			_Utils_Tuple2('403', '新書館'),
			_Utils_Tuple2('404', '新人物往来社'),
			_Utils_Tuple2('405', '新星出版社'),
			_Utils_Tuple2('406', '新日本出版社'),
			_Utils_Tuple2('407', '実教出版'),
			_Utils_Tuple2('408', '実業之日本社'),
			_Utils_Tuple2('409', '人文書院'),
			_Utils_Tuple2('410', '数研出版'),
			_Utils_Tuple2('411', '駿河台出版社'),
			_Utils_Tuple2('412', '聖教新聞社'),
			_Utils_Tuple2('413', '青春出版社'),
			_Utils_Tuple2('414', '誠信書房'),
			_Utils_Tuple2('415', '成美堂出版'),
			_Utils_Tuple2('416', '誠文堂新光社'),
			_Utils_Tuple2('417', '青林書院'),
			_Utils_Tuple2('418', '世界文化社'),
			_Utils_Tuple2('419', '税務経理協会'),
			_Utils_Tuple2('420', '創美社'),
			_Utils_Tuple2('421', '近代消防社'),
			_Utils_Tuple2('422', '創元社'),
			_Utils_Tuple2('423', '創文社'),
			_Utils_Tuple2('424', '増進堂・受験研究社'),
			_Utils_Tuple2('425', '成山堂書店'),
			_Utils_Tuple2('426', '自由国民社'),
			_Utils_Tuple2('427', '三省堂教材システム'),
			_Utils_Tuple2('431', 'シュプリンガーフェアラーク東京'),
			_Utils_Tuple2('432', 'ゼンリン'),
			_Utils_Tuple2('434', 'ほおずき書籍(鬼灯書籍)'),
			_Utils_Tuple2('434', 'ほおずき書籍(鬼灯書籍)'),
			_Utils_Tuple2('434', 'ほおずき書籍(鬼灯書籍)'),
			_Utils_Tuple2('434', 'ほおずき書籍(鬼灯書籍)'),
			_Utils_Tuple2('469', '大修館書店'),
			_Utils_Tuple2('470', '大明堂'),
			_Utils_Tuple2('471', '高橋書店'),
			_Utils_Tuple2('472', '（学）玉川大学出版部'),
			_Utils_Tuple2('473', '淡交社'),
			_Utils_Tuple2('474', '第一法規'),
			_Utils_Tuple2('475', '大学書林'),
			_Utils_Tuple2('476', '第三文明社'),
			_Utils_Tuple2('477', '大日本図書'),
			_Utils_Tuple2('478', 'ダイヤモンド社'),
			_Utils_Tuple2('479', '大和書房'),
			_Utils_Tuple2('480', '筑摩書房'),
			_Utils_Tuple2('481', '中央経済社'),
			_Utils_Tuple2('482', '中央図書出版社'),
			_Utils_Tuple2('483', '中教(中教出版)'),
			_Utils_Tuple2('484', 'ティビーエス・ブリタニカ(ＴＢＳブリタニカ)'),
			_Utils_Tuple2('485', '電気書院'),
			_Utils_Tuple2('486', '東海大学出版会'),
			_Utils_Tuple2('487', '東京書籍'),
			_Utils_Tuple2('488', '東京創元社'),
			_Utils_Tuple2('489', '東京図書'),
			_Utils_Tuple2('490', '東京堂出版'),
			_Utils_Tuple2('491', '東洋館出版社'),
			_Utils_Tuple2('492', '東洋経済新報社'),
			_Utils_Tuple2('494', '童心社'),
			_Utils_Tuple2('495', '同文舘出版'),
			_Utils_Tuple2('496', '同友館'),
			_Utils_Tuple2('497', '東方書店'),
			_Utils_Tuple2('498', '中外医学社'),
			_Utils_Tuple2('499', '大日本絵画'),
			_Utils_Tuple2('500', '大東出版社'),
			_Utils_Tuple2('501', '東京電機大学出版局'),
			_Utils_Tuple2('502', '中央経済社'),
			_Utils_Tuple2('521', '中山書店'),
			_Utils_Tuple2('522', '永岡書店'),
			_Utils_Tuple2('523', '南雲堂'),
			_Utils_Tuple2('524', '南江堂'),
			_Utils_Tuple2('525', '南山堂'),
			_Utils_Tuple2('526', '日刊工業新聞社'),
			_Utils_Tuple2('527', '日地出版'),
			_Utils_Tuple2('528', '日東書院'),
			_Utils_Tuple2('529', '日本ヴォーグ社'),
			_Utils_Tuple2('530', '日本共産党中央委員会出版局'),
			_Utils_Tuple2('531', '日本教文社'),
			_Utils_Tuple2('532', '日本経済新聞社出版局'),
			_Utils_Tuple2('533', 'ＪＴＢ出版事業局'),
			_Utils_Tuple2('534', '日本実業出版社'),
			_Utils_Tuple2('535', '日本評論社'),
			_Utils_Tuple2('536', '日本文教出版'),
			_Utils_Tuple2('537', '日本文芸社'),
			_Utils_Tuple2('538', '日本労働研究機構'),
			_Utils_Tuple2('539', '日本法令'),
			_Utils_Tuple2('540', '農山漁村文化協会'),
			_Utils_Tuple2('541', '農林統計協会'),
			_Utils_Tuple2('542', '日本規格協会'),
			_Utils_Tuple2('543', '日音プロモーション'),
			_Utils_Tuple2('544', '二玄社'),
			_Utils_Tuple2('560', '白水社'),
			_Utils_Tuple2('561', '白桃書房'),
			_Utils_Tuple2('562', '原書房'),
			_Utils_Tuple2('563', '培風館'),
			_Utils_Tuple2('564', 'ひかりのくに'),
			_Utils_Tuple2('565', '一ッ橋書店'),
			_Utils_Tuple2('566', '評論社'),
			_Utils_Tuple2('567', '廣川書店'),
			_Utils_Tuple2('568', '美術出版社'),
			_Utils_Tuple2('569', 'ＰＨＰ研究所'),
			_Utils_Tuple2('571', '福村出版'),
			_Utils_Tuple2('572', '冨山房'),
			_Utils_Tuple2('573', 'アシェット婦人画報社'),
			_Utils_Tuple2('574', '婦人生活社'),
			_Utils_Tuple2('575', '双葉社'),
			_Utils_Tuple2('576', '二見書房(マドンナ社)'),
			_Utils_Tuple2('577', 'フレーベル館'),
			_Utils_Tuple2('578', '文英堂'),
			_Utils_Tuple2('579', '文化出版局(文化学園)'),
			_Utils_Tuple2('580', '文研出版'),
			_Utils_Tuple2('581', '文理'),
			_Utils_Tuple2('582', '平凡社'),
			_Utils_Tuple2('583', 'ベースボール・マガジン社'),
			_Utils_Tuple2('584', 'ベストセラーズ'),
			_Utils_Tuple2('585', '勉誠出版'),
			_Utils_Tuple2('586', '保育社'),
			_Utils_Tuple2('587', '法学書院'),
			_Utils_Tuple2('588', '法政大学出版局'),
			_Utils_Tuple2('589', '法律文化社'),
			_Utils_Tuple2('590', '北星堂書店'),
			_Utils_Tuple2('591', 'ポプラ社'),
			_Utils_Tuple2('592', '白泉社'),
			_Utils_Tuple2('593', 'ほるぷ出版'),
			_Utils_Tuple2('594', '扶桑社'),
			_Utils_Tuple2('595', '放送大学教育振興会'),
			_Utils_Tuple2('620', '毎日新聞社'),
			_Utils_Tuple2('621', '丸善出版事業部'),
			_Utils_Tuple2('622', 'みすず書房'),
			_Utils_Tuple2('623', 'ミネルヴァ書房'),
			_Utils_Tuple2('624', '未来社'),
			_Utils_Tuple2('625', '明治書院'),
			_Utils_Tuple2('626', '名著出版'),
			_Utils_Tuple2('627', '森北出版'),
			_Utils_Tuple2('634', '山川出版社'),
			_Utils_Tuple2('635', '山と溪谷社'),
			_Utils_Tuple2('636', 'ヤマハ・ミュージックメディア'),
			_Utils_Tuple2('638', '有紀書房'),
			_Utils_Tuple2('639', '雄山閣'),
			_Utils_Tuple2('640', '有精堂出版'),
			_Utils_Tuple2('641', '有斐閣'),
			_Utils_Tuple2('642', '吉川弘文館'),
			_Utils_Tuple2('643', '読売新聞東京本社出版局'),
			_Utils_Tuple2('650', '理想社'),
			_Utils_Tuple2('651', '立風書房'),
			_Utils_Tuple2('652', '理論社'),
			_Utils_Tuple2('653', '臨川書店'),
			_Utils_Tuple2('654', '黎明書房'),
			_Utils_Tuple2('656', '良書普及会'),
			_Utils_Tuple2('657', '早稲田大学出版部'),
			_Utils_Tuple2('7500', '愛育社'),
			_Utils_Tuple2('7501', '相川書房'),
			_Utils_Tuple2('7502', '愛隆堂'),
			_Utils_Tuple2('7503', '明石書店'),
			_Utils_Tuple2('7504', '暁出版'),
			_Utils_Tuple2('7505', '亜紀書房'),
			_Utils_Tuple2('7506', '秋元書房'),
			_Utils_Tuple2('7507', 'アグネ'),
			_Utils_Tuple2('7508', '曙出版'),
			_Utils_Tuple2('7509', '朝雲新聞社'),
			_Utils_Tuple2('7510', '英文朝日'),
			_Utils_Tuple2('7511', '旭屋出版'),
			_Utils_Tuple2('7512', '葦書房'),
			_Utils_Tuple2('7513', 'アジア・アフリカ経済研究会'),
			_Utils_Tuple2('7514', 'ライリスト社'),
			_Utils_Tuple2('7515', 'あすなろ書房'),
			_Utils_Tuple2('7516', '吾妻書房'),
			_Utils_Tuple2('7517', '校倉書房'),
			_Utils_Tuple2('7518', 'アトリエ出版社'),
			_Utils_Tuple2('7519', 'あゆみ出版'),
			_Utils_Tuple2('7520', 'アリス館'),
			_Utils_Tuple2('7521', '荒地出版社'),
			_Utils_Tuple2('7522', '飯塚書店'),
			_Utils_Tuple2('7523', '育英堂'),
			_Utils_Tuple2('7524', '育文社'),
			_Utils_Tuple2('7525', '池田書店'),
			_Utils_Tuple2('7526', 'いずみ書房'),
			_Utils_Tuple2('7527', '一粒社'),
			_Utils_Tuple2('7528', '一光社'),
			_Utils_Tuple2('7529', '医道の日本社'),
			_Utils_Tuple2('7530', '井上書院'),
			_Utils_Tuple2('7531', '以文社'),
			_Utils_Tuple2('7532', '医薬ジャーナル社'),
			_Utils_Tuple2('7533', '岩崎学術出版社'),
			_Utils_Tuple2('7534', '岩崎美術社'),
			_Utils_Tuple2('7535', '印美書房'),
			_Utils_Tuple2('7536', '内田老鶴圃'),
			_Utils_Tuple2('7537', 'ウニタ書舗'),
			_Utils_Tuple2('7538', '芸艸堂'),
			_Utils_Tuple2('7539', 'エール出版社'),
			_Utils_Tuple2('7540', '栄光社'),
			_Utils_Tuple2('7541', '栄光出版社'),
			_Utils_Tuple2('7542', '英知出版'),
			_Utils_Tuple2('7543', 'エレック社'),
			_Utils_Tuple2('7544', 'エンデルレ書店'),
			_Utils_Tuple2('7545', '大門出版'),
			_Utils_Tuple2('7546', '壱番館書房'),
			_Utils_Tuple2('7547', '大蔵財務協会'),
			_Utils_Tuple2('7548', '大阪書籍'),
			_Utils_Tuple2('7549', 'エー・ティー・エヌ'),
			_Utils_Tuple2('7550', '大湊書房'),
			_Utils_Tuple2('7551', '小沢書店'),
			_Utils_Tuple2('7552', 'オックスフォード大学出版局'),
			_Utils_Tuple2('7553', '音羽書房鶴見書店'),
			_Utils_Tuple2('7554', 'インパクト出版会'),
			_Utils_Tuple2('7555', 'アストロ教育システム'),
			_Utils_Tuple2('7556', '芦書房'),
			_Utils_Tuple2('7557', '医学書院サウンダース'),
			_Utils_Tuple2('7558', '英語教育協議会(ＥＬＥＣ)'),
			_Utils_Tuple2('7560', '英俊社'),
			_Utils_Tuple2('7561', 'アスキー'),
			_Utils_Tuple2('7562', '英友社'),
			_Utils_Tuple2('7563', '大村書店'),
			_Utils_Tuple2('7564', 'オリジン出版センター'),
			_Utils_Tuple2('7565', 'イザラ書房'),
			_Utils_Tuple2('7566', 'ありな書房'),
			_Utils_Tuple2('7568', '大空社'),
			_Utils_Tuple2('7569', '明日香出版社'),
			_Utils_Tuple2('7570', '旺文社インタラクティブ'),
			_Utils_Tuple2('7577', 'エンターブレイン'),
			_Utils_Tuple2('7578', '医学出版'),
			_Utils_Tuple2('7585', '海外技術資料研究所'),
			_Utils_Tuple2('7586', 'カイガイ'),
			_Utils_Tuple2('7587', '櫂書房'),
			_Utils_Tuple2('7588', '改造図書出版販売'),
			_Utils_Tuple2('7589', '開拓社'),
			_Utils_Tuple2('7590', '海南書房'),
			_Utils_Tuple2('7591', '開発社'),
			_Utils_Tuple2('7592', '解放出版社'),
			_Utils_Tuple2('7593', '海竜社'),
			_Utils_Tuple2('7594', '化学工業社'),
			_Utils_Tuple2('7595', '科学書籍出版'),
			_Utils_Tuple2('7596', 'フォーラムＡ企画'),
			_Utils_Tuple2('7597', '科学情報社'),
			_Utils_Tuple2('7598', '化学同人'),
			_Utils_Tuple2('7599', '風間書房'),
			_Utils_Tuple2('7600', '加島書店'),
			_Utils_Tuple2('7601', '柏書房'),
			_Utils_Tuple2('7602', '花神社'),
			_Utils_Tuple2('7603', '霞ケ関出版'),
			_Utils_Tuple2('7604', '霞ケ関出版社'),
			_Utils_Tuple2('7605', '霞ケ関書房'),
			_Utils_Tuple2('7606', '家政教育社'),
			_Utils_Tuple2('7607', '中道館'),
			_Utils_Tuple2('7608', '金子書房'),
			_Utils_Tuple2('7609', '河合楽器製作所出版事業部'),
			_Utils_Tuple2('7610', '川島書店'),
			_Utils_Tuple2('7611', '河原書店'),
			_Utils_Tuple2('7612', 'かんき出版'),
			_Utils_Tuple2('7613', '関西書院'),
			_Utils_Tuple2('7614', '学苑社'),
			_Utils_Tuple2('7615', '学芸出版社'),
			_Utils_Tuple2('7616', '学芸図書'),
			_Utils_Tuple2('7617', '学習の友社'),
			_Utils_Tuple2('7618', '学書房出版'),
			_Utils_Tuple2('7619', '学事出版'),
			_Utils_Tuple2('7620', '学文社'),
			_Utils_Tuple2('7621', '学隆社'),
			_Utils_Tuple2('7622', '学会出版センター'),
			_Utils_Tuple2('7623', '学献社'),
			_Utils_Tuple2('7624', '学建書院'),
			_Utils_Tuple2('7625', '学校図書'),
			_Utils_Tuple2('7626', '巌南堂書店'),
			_Utils_Tuple2('7627', '奇想天外社'),
			_Utils_Tuple2('7628', '北大路書房'),
			_Utils_Tuple2('7629', '汲古書院'),
			_Utils_Tuple2('7630', '求龍堂'),
			_Utils_Tuple2('7631', 'サンマーク出版'),
			_Utils_Tuple2('7632', 'グローバルメディア'),
			_Utils_Tuple2('7633', '教育新潮社'),
			_Utils_Tuple2('7634', '共栄書房'),
			_Utils_Tuple2('7634', '共栄書房'),
			_Utils_Tuple2('7635', '協楽社ＤＭセンター'),
			_Utils_Tuple2('7636', '京都書院'),
			_Utils_Tuple2('7637', '京都書房'),
			_Utils_Tuple2('7638', '京都新聞出版センター'),
			_Utils_Tuple2('7639', '協同医書出版社'),
			_Utils_Tuple2('7640', '共同書房'),
			_Utils_Tuple2('7641', '共同通信社'),
			_Utils_Tuple2('7642', '教文館'),
			_Utils_Tuple2('7643', '共文社'),
			_Utils_Tuple2('7644', '杏林書院'),
			_Utils_Tuple2('7645', '技術と人間'),
			_Utils_Tuple2('7646', '錦正社'),
			_Utils_Tuple2('7647', '金星堂'),
			_Utils_Tuple2('7648', '近代映画社'),
			_Utils_Tuple2('7649', '近代科学社'),
			_Utils_Tuple2('7650', '近代セールス社'),
			_Utils_Tuple2('7651', '近代図書'),
			_Utils_Tuple2('7652', '恒友出版'),
			_Utils_Tuple2('7653', '金芳堂'),
			_Utils_Tuple2('7654', '技術書院'),
			_Utils_Tuple2('7655', '技報堂出版'),
			_Utils_Tuple2('7656', 'セントラル出版'),
			_Utils_Tuple2('7657', 'ＢＳＩエデュケーション(銀行研修社)'),
			_Utils_Tuple2('7658', '国元書房'),
			_Utils_Tuple2('7659', '久保書店'),
			_Utils_Tuple2('7660', '暮しの手帖社'),
			_Utils_Tuple2('7661', 'グラフィック社'),
			_Utils_Tuple2('7662', 'グラフ社'),
			_Utils_Tuple2('7663', 'グリーンアロー出版社'),
			_Utils_Tuple2('7664', '慶應義塾大学出版会'),
			_Utils_Tuple2('7665', '啓学出版'),
			_Utils_Tuple2('7666', '経済往来社'),
			_Utils_Tuple2('7667', '経済界'),
			_Utils_Tuple2('7668', '経済法令研究会'),
			_Utils_Tuple2('7669', '勁文社'),
			_Utils_Tuple2('7670', '敬文堂'),
			_Utils_Tuple2('7671', '啓明書房'),
			_Utils_Tuple2('7672', '啓佑社'),
			_Utils_Tuple2('7673', '経林書房'),
			_Utils_Tuple2('7674', '研究社'),
			_Utils_Tuple2('7675', '研数書院'),
			_Utils_Tuple2('7676', '建設物価調査会'),
			_Utils_Tuple2('7677', '建築技術'),
			_Utils_Tuple2('7678', 'エクスナレッジ'),
			_Utils_Tuple2('7679', '建帛社'),
			_Utils_Tuple2('7680', '研文書院'),
			_Utils_Tuple2('7681', '芸林書房'),
			_Utils_Tuple2('7682', '月刊ペン社'),
			_Utils_Tuple2('7683', '玄光社'),
			_Utils_Tuple2('7684', '現代書館'),
			_Utils_Tuple2('7685', '現代情報社'),
			_Utils_Tuple2('7686', '現代ジャーナリズム出版会'),
			_Utils_Tuple2('7687', '現代数学社'),
			_Utils_Tuple2('7688', '現代評論社'),
			_Utils_Tuple2('7689', '現代理工学出版'),
			_Utils_Tuple2('7690', '好学社'),
			_Utils_Tuple2('7691', '工学出版'),
			_Utils_Tuple2('7692', 'スペック'),
			_Utils_Tuple2('7692', 'スペック'),
			_Utils_Tuple2('7693', '工業調査会'),
			_Utils_Tuple2('7694', '光芸出版'),
			_Utils_Tuple2('7695', '巧玄出版'),
			_Utils_Tuple2('7696', 'こう書房'),
			_Utils_Tuple2('7697', '弘文堂書房'),
			_Utils_Tuple2('7698', '光人社'),
			_Utils_Tuple2('7699', '恒星社厚生閣'),
			_Utils_Tuple2('7700', '講談社インターナショナル'),
			_Utils_Tuple2('7701', '交通日本社'),
			_Utils_Tuple2('7702', '高分子刊行会'),
			_Utils_Tuple2('7703', '弘文社'),
			_Utils_Tuple2('7704', '恒文社'),
			_Utils_Tuple2('7705', '径書房'),
			_Utils_Tuple2('7706', '光文書院'),
			_Utils_Tuple2('7707', '高文堂出版社'),
			_Utils_Tuple2('7708', 'コムパック'),
			_Utils_Tuple2('7709', '虹有社'),
			_Utils_Tuple2('7710', '晃洋書房'),
			_Utils_Tuple2('7711', '高陵社書店'),
			_Utils_Tuple2('7712', '光琳'),
			_Utils_Tuple2('7713', '光琳社出版'),
			_Utils_Tuple2('7714', '公論社'),
			_Utils_Tuple2('7715', '声の教育社'),
			_Utils_Tuple2('7716', 'コーキ出版'),
			_Utils_Tuple2('7717', '国際情報社'),
			_Utils_Tuple2('7718', '国際地学協会'),
			_Utils_Tuple2('7719', '克誠堂出版'),
			_Utils_Tuple2('7720', '国文社'),
			_Utils_Tuple2('7721', 'こぐま社'),
			_Utils_Tuple2('7722', '古今書院'),
			_Utils_Tuple2('7723', '小綬鶏社'),
			_Utils_Tuple2('7724', '金剛出版'),
			_Utils_Tuple2('7725', '近藤出版社'),
			_Utils_Tuple2('7726', '合同出版'),
			_Utils_Tuple2('7727', '五月書房'),
			_Utils_Tuple2('7728', 'ゴルフダイジェスト社'),
			_Utils_Tuple2('7729', '啓文社'),
			_Utils_Tuple2('7730', '笠倉出版社'),
			_Utils_Tuple2('7732', 'ケイ・エム・ピー'),
			_Utils_Tuple2('7733', '近代文芸社'),
			_Utils_Tuple2('7734', '垣内出版'),
			_Utils_Tuple2('7735', '仮説社'),
			_Utils_Tuple2('7736', '凱風社'),
			_Utils_Tuple2('7737', '健友館'),
			_Utils_Tuple2('7738', '現代企画室'),
			_Utils_Tuple2('7739', '源流社'),
			_Utils_Tuple2('7740', 'かまくら春秋社'),
			_Utils_Tuple2('7741', '技術評論社'),
			_Utils_Tuple2('7742', '学習図書出版社'),
			_Utils_Tuple2('7743', 'くもん出版'),
			_Utils_Tuple2('7744', '皓星社'),
			_Utils_Tuple2('7748', '神戸新聞社情報科学研究所'),
			_Utils_Tuple2('7749', '京都造形芸術大学出版会'),
			_Utils_Tuple2('7750', 'クーネマン・ジャパン'),
			_Utils_Tuple2('7762', 'アスコム'),
			_Utils_Tuple2('7765', '日本文学館'),
			_Utils_Tuple2('7780', '小学館クリエイティブ'),
			_Utils_Tuple2('7782', 'カナリア書房'),
			_Utils_Tuple2('7819', 'サイエンス社'),
			_Utils_Tuple2('7820', '菜根出版'),
			_Utils_Tuple2('7821', '幸書房'),
			_Utils_Tuple2('7822', '酒井書店育英堂'),
			_Utils_Tuple2('7823', '嵯峨野書院'),
			_Utils_Tuple2('7824', '相模書房'),
			_Utils_Tuple2('7825', '産学社'),
			_Utils_Tuple2('7826', '三月書房'),
			_Utils_Tuple2('7827', '三共出版'),
			_Utils_Tuple2('7828', '産業図書'),
			_Utils_Tuple2('7829', '三恵書房'),
			_Utils_Tuple2('7830', '三晃書房(日本文教出版)'),
			_Utils_Tuple2('7831', '三彩社'),
			_Utils_Tuple2('7832', 'サンブライト'),
			_Utils_Tuple2('7833', '三和書房'),
			_Utils_Tuple2('7834', '至光社'),
			_Utils_Tuple2('7835', '新思索社'),
			_Utils_Tuple2('7836', '思想の科学社'),
			_Utils_Tuple2('7837', '思潮社'),
			_Utils_Tuple2('7838', '静岡新聞社出版局'),
			_Utils_Tuple2('7839', '信濃教育会出版部'),
			_Utils_Tuple2('7840', '信濃毎日新聞'),
			_Utils_Tuple2('7841', '篠崎書林'),
			_Utils_Tuple2('7842', '思文閣出版'),
			_Utils_Tuple2('7843', '至文堂'),
			_Utils_Tuple2('7844', '長谷川町子美術館'),
			_Utils_Tuple2('7845', '社会評論社'),
			_Utils_Tuple2('7846', '社会保険出版社'),
			_Utils_Tuple2('7847', '秀英出版'),
			_Utils_Tuple2('7848', '週刊住宅新聞社'),
			_Utils_Tuple2('7849', '日本医事新報社'),
			_Utils_Tuple2('7850', '集文館'),
			_Utils_Tuple2('7851', '集文社'),
			_Utils_Tuple2('7852', '出版ニュース社'),
			_Utils_Tuple2('7853', '裳華房'),
			_Utils_Tuple2('7854', '尚学図書'),
			_Utils_Tuple2('7855', '商業界'),
			_Utils_Tuple2('7856', '昭晃堂'),
			_Utils_Tuple2('7857', '商事法務'),
			_Utils_Tuple2('7858', '商店建築社'),
			_Utils_Tuple2('7859', '少年画報社'),
			_Utils_Tuple2('7860', '昌平社出版'),
			_Utils_Tuple2('7861', '逍遥書院'),
			_Utils_Tuple2('7862', '昭和女子大学近代文化研究所'),
			_Utils_Tuple2('7863', '職業訓練教材研究会'),
			_Utils_Tuple2('7864', '書芸文化新社'),
			_Utils_Tuple2('7865', '書林'),
			_Utils_Tuple2('7866', '白石書店'),
			_Utils_Tuple2('7867', '白川書院'),
			_Utils_Tuple2('7868', '新学社'),
			_Utils_Tuple2('7869', '新建築社'),
			_Utils_Tuple2('7870', '新光閣書店'),
			_Utils_Tuple2('7871', '新思潮社'),
			_Utils_Tuple2('7872', '青弓社'),
			_Utils_Tuple2('7873', '千書房'),
			_Utils_Tuple2('7874', '新時代社'),
			_Utils_Tuple2('7875', '新樹社'),
			_Utils_Tuple2('7876', '創樹社美術出版'),
			_Utils_Tuple2('7877', '新泉社'),
			_Utils_Tuple2('7878', '診断と治療社'),
			_Utils_Tuple2('7879', '新典社'),
			_Utils_Tuple2('7880', '新読書社'),
			_Utils_Tuple2('7881', '新日本教文'),
			_Utils_Tuple2('7882', '新日本法規出版'),
			_Utils_Tuple2('7883', '審美社'),
			_Utils_Tuple2('7884', '新評社'),
			_Utils_Tuple2('7885', '新曜社'),
			_Utils_Tuple2('7886', 'ジェイエーエフ出版社'),
			_Utils_Tuple2('7887', '時事通信社'),
			_Utils_Tuple2('7888', '時潮社'),
			_Utils_Tuple2('7889', '実務教育出版'),
			_Utils_Tuple2('7890', 'ジャパンタイムズ'),
			_Utils_Tuple2('7891', '蒼樹書房'),
			_Utils_Tuple2('7892', '住宅新報社'),
			_Utils_Tuple2('7893', '創土社'),
			_Utils_Tuple2('7894', '社会保険研究所'),
			_Utils_Tuple2('7895', '女子栄養大学出版部'),
			_Utils_Tuple2('7896', '女子パウロ会'),
			_Utils_Tuple2('7897', 'ソニー・マガジンズ'),
			_Utils_Tuple2('7898', 'ＣＱ出版'),
			_Utils_Tuple2('7899', 'スキージャーナル'),
			_Utils_Tuple2('7900', '杉山書店'),
			_Utils_Tuple2('7901', '松文館'),
			_Utils_Tuple2('7902', '鈴木出版'),
			_Utils_Tuple2('7903', 'スポーツニッポン新聞東京本社'),
			_Utils_Tuple2('7904', '砂子屋書房'),
			_Utils_Tuple2('7905', '青蛙房'),
			_Utils_Tuple2('7906', '青娥書房'),
			_Utils_Tuple2('7907', '世界思想社'),
			_Utils_Tuple2('7908', '清雅堂'),
			_Utils_Tuple2('7909', '正高社'),
			_Utils_Tuple2('7910', '清山社'),
			_Utils_Tuple2('7911', '星和書店'),
			_Utils_Tuple2('7912', '聖書図書刊行会'),
			_Utils_Tuple2('7913', '青樹社'),
			_Utils_Tuple2('7914', '精道教育促進協会'),
			_Utils_Tuple2('7915', 'セイドー外国語研究所'),
			_Utils_Tuple2('7916', '西東社'),
			_Utils_Tuple2('7917', '青土社'),
			_Utils_Tuple2('7918', '青年書館'),
			_Utils_Tuple2('7919', '成美堂'),
			_Utils_Tuple2('7920', '清文社'),
			_Utils_Tuple2('7921', '聖文舍'),
			_Utils_Tuple2('7922', '聖文新社'),
			_Utils_Tuple2('7923', '成文堂'),
			_Utils_Tuple2('7924', '清文堂出版'),
			_Utils_Tuple2('7925', '西北出版'),
			_Utils_Tuple2('7926', '青林堂'),
			_Utils_Tuple2('7927', '世界書院'),
			_Utils_Tuple2('7928', '雪華社'),
			_Utils_Tuple2('7929', '千趣会'),
			_Utils_Tuple2('7930', '泉文堂'),
			_Utils_Tuple2('7931', '税務研究会出版局'),
			_Utils_Tuple2('7932', '全教図'),
			_Utils_Tuple2('7933', '全国学校図書館協議会'),
			_Utils_Tuple2('7934', '全国協同出版'),
			_Utils_Tuple2('7935', '全国社会福祉協議会出版部'),
			_Utils_Tuple2('7936', '全国農業改良普及協会'),
			_Utils_Tuple2('7937', '全日本社会教育連合会'),
			_Utils_Tuple2('7938', 'そうよう'),
			_Utils_Tuple2('7939', '善本社'),
			_Utils_Tuple2('7940', '綜芸舎'),
			_Utils_Tuple2('7941', '総合労働研究所'),
			_Utils_Tuple2('7942', '草思社'),
			_Utils_Tuple2('7943', '創樹社'),
			_Utils_Tuple2('7944', '創成社'),
			_Utils_Tuple2('7945', '草土文化'),
			_Utils_Tuple2('7947', '叢文社'),
			_Utils_Tuple2('7948', '新評論'),
			_Utils_Tuple2('7949', '晶文社'),
			_Utils_Tuple2('7950', 'シーズ'),
			_Utils_Tuple2('7951', '創土社'),
			_Utils_Tuple2('7952', 'ライブストーン'),
			_Utils_Tuple2('7952', 'ライブストーン'),
			_Utils_Tuple2('7953', '至誠堂'),
			_Utils_Tuple2('7954', 'すずさわ書店'),
			_Utils_Tuple2('7955', '総合研究開発機構'),
			_Utils_Tuple2('7956', '小学館販売'),
			_Utils_Tuple2('7957', '小学館パブリッシング・サービス'),
			_Utils_Tuple2('7958', '情報センター出版局'),
			_Utils_Tuple2('7959', '人文社'),
			_Utils_Tuple2('7960', '清文社'),
			_Utils_Tuple2('7961', '駿台文庫'),
			_Utils_Tuple2('7962', 'スコラ'),
			_Utils_Tuple2('7963', '山喜房佛書林'),
			_Utils_Tuple2('7965', '照林社'),
			_Utils_Tuple2('7966', '宝島社'),
			_Utils_Tuple2('7967', 'せりか書房'),
			_Utils_Tuple2('7969', '駸々堂書店'),
			_Utils_Tuple2('7970', '出版・企画カギコウ'),
			_Utils_Tuple2('7971', '続群書類従完成会'),
			_Utils_Tuple2('7972', '信山社出版'),
			_Utils_Tuple2('7973', 'ソフトバンク'),
			_Utils_Tuple2('7974', '新風舎'),
			_Utils_Tuple2('7975', 'ＪＶＣアドバンストメディア'),
			_Utils_Tuple2('7976', '集英社インターナショナル'),
			_Utils_Tuple2('7978', 'セレンディップ'),
			_Utils_Tuple2('8027', '泰光堂'),
			_Utils_Tuple2('8028', '大成出版社'),
			_Utils_Tuple2('8029', '泰文館'),
			_Utils_Tuple2('8030', '泰文堂'),
			_Utils_Tuple2('8031', '太平出版社'),
			_Utils_Tuple2('8032', 'たいまつ社'),
			_Utils_Tuple2('8033', '大陸書房'),
			_Utils_Tuple2('8034', '鷹書房弓プレス'),
			_Utils_Tuple2('8035', '雄山閣'),
			_Utils_Tuple2('8036', 'たたら書房'),
			_Utils_Tuple2('8037', '立花書房'),
			_Utils_Tuple2('8038', '田畑書店'),
			_Utils_Tuple2('8039', '短歌新聞社'),
			_Utils_Tuple2('8040', '第一学習社'),
			_Utils_Tuple2('8041', '第一出版'),
			_Utils_Tuple2('8042', '第一書房'),
			_Utils_Tuple2('8043', '大蔵出版'),
			_Utils_Tuple2('8044', '大東出版'),
			_Utils_Tuple2('8045', 'ＴＤＫコア'),
			_Utils_Tuple2('8046', '大法輪閣'),
			_Utils_Tuple2('8047', '大和出版'),
			_Utils_Tuple2('8048', 'ダヴイツド社'),
			_Utils_Tuple2('8049', '地球社'),
			_Utils_Tuple2('8050', 'チクマ秀版社'),
			_Utils_Tuple2('8051', '千倉書房'),
			_Utils_Tuple2('8052', '地人書館'),
			_Utils_Tuple2('8053', 'チャールズ・イー・タトル出版'),
			_Utils_Tuple2('8054', 'チャイルド本社'),
			_Utils_Tuple2('8055', '中央公論美術出版'),
			_Utils_Tuple2('8056', 'サンパウロ'),
			_Utils_Tuple2('8057', '中央大学出版部'),
			_Utils_Tuple2('8058', '中央法規出版'),
			_Utils_Tuple2('8059', '中央労働災害防止協会'),
			_Utils_Tuple2('8060', '沖積舎'),
			_Utils_Tuple2('8061', '中経出版'),
			_Utils_Tuple2('8062', '中日新聞社開発局出版開発部'),
			_Utils_Tuple2('8063', '潮文社'),
			_Utils_Tuple2('8064', '東京経済'),
			_Utils_Tuple2('8065', '経済産業調査会'),
			_Utils_Tuple2('8066', '津軽書房'),
			_Utils_Tuple2('8067', '築地書館'),
			_Utils_Tuple2('8068', '柘植書房新社'),
			_Utils_Tuple2('8069', '土屋書店'),
			_Utils_Tuple2('8070', '鶴書房'),
			_Utils_Tuple2('8071', '帝国書院'),
			_Utils_Tuple2('8072', '舵社'),
			_Utils_Tuple2('8073', '天理教道友社'),
			_Utils_Tuple2('8074', '第三書館'),
			_Utils_Tuple2('8075', '伝統と現代社'),
			_Utils_Tuple2('8076', '電気通信振興会'),
			_Utils_Tuple2('8077', '東栄堂'),
			_Utils_Tuple2('8078', '桃園書房'),
			_Utils_Tuple2('8079', '東京化学同人'),
			_Utils_Tuple2('8080', '東京学参'),
			_Utils_Tuple2('8081', '東京教育情報センター'),
			_Utils_Tuple2('8082', '東京教学社'),
			_Utils_Tuple2('8083', '東京新聞出版局'),
			_Utils_Tuple2('8084', '東京スポーツ新聞社出版部'),
			_Utils_Tuple2('8085', '東京地図出版'),
			_Utils_Tuple2('8086', '第三書房'),
			_Utils_Tuple2('8087', '東京美術'),
			_Utils_Tuple2('8088', '東京文藝社'),
			_Utils_Tuple2('8089', '東京法経学院出版'),
			_Utils_Tuple2('8090', '東京法令出版'),
			_Utils_Tuple2('8091', '桃源社'),
			_Utils_Tuple2('8092', '冬樹社'),
			_Utils_Tuple2('8093', '東方出版'),
			_Utils_Tuple2('8094', '東邦出版'),
			_Utils_Tuple2('8095', '東明社'),
			_Utils_Tuple2('8096', '東洋出版'),
			_Utils_Tuple2('8097', '東洋文庫'),
			_Utils_Tuple2('8098', '所書店'),
			_Utils_Tuple2('8099', '図書出版社'),
			_Utils_Tuple2('8100', '図書文化社'),
			_Utils_Tuple2('8101', 'トッパン'),
			_Utils_Tuple2('8102', '同学社'),
			_Utils_Tuple2('8103', '同文書院'),
			_Utils_Tuple2('8104', '同朋舎'),
			_Utils_Tuple2('8105', '道和書院'),
			_Utils_Tuple2('8106', '土木学会'),
			_Utils_Tuple2('8107', 'ドメス出版'),
			_Utils_Tuple2('8108', 'ドレミ楽譜出版社'),
			_Utils_Tuple2('8109', '東京布井出版'),
			_Utils_Tuple2('8110', '東亜音楽社'),
			_Utils_Tuple2('8111', '東京楽譜出版社'),
			_Utils_Tuple2('8113', '汐文社'),
			_Utils_Tuple2('8114', '東京音楽書院'),
			_Utils_Tuple2('8115', '多賀出版'),
			_Utils_Tuple2('8116', '図書出版美学館'),
			_Utils_Tuple2('8117', '大正出版'),
			_Utils_Tuple2('8118', '太郎次郎社'),
			_Utils_Tuple2('8119', '筑波書房'),
			_Utils_Tuple2('8120', '土曜美術社出版販売'),
			_Utils_Tuple2('8121', '泰流社'),
			_Utils_Tuple2('8122', '昭和堂'),
			_Utils_Tuple2('8131', '東北新社'),
			_Utils_Tuple2('8134', '天竜市立秋野不矩美術館'),
			_Utils_Tuple2('8158', '名古屋大学出版会'),
			_Utils_Tuple2('8159', '永井書店'),
			_Utils_Tuple2('8160', '永末書店'),
			_Utils_Tuple2('8161', '永田書房'),
			_Utils_Tuple2('8162', '永田文昌堂'),
			_Utils_Tuple2('8163', 'ナツメ社'),
			_Utils_Tuple2('8164', '波書房'),
			_Utils_Tuple2('8165', '南窓社'),
			_Utils_Tuple2('8166', '梨の木舎'),
			_Utils_Tuple2('8167', '西日本新聞社'),
			_Utils_Tuple2('8168', '日栄社'),
			_Utils_Tuple2('8169', '日外アソシエーツ'),
			_Utils_Tuple2('8170', '日貿出版社'),
			_Utils_Tuple2('8171', '日科技連出版社'),
			_Utils_Tuple2('8172', '日刊スポーツ出版社'),
			_Utils_Tuple2('8173', '日新出版'),
			_Utils_Tuple2('8174', '日新報道'),
			_Utils_Tuple2('8175', '日中出版'),
			_Utils_Tuple2('8176', '二宮書店'),
			_Utils_Tuple2('8177', '日本英語教育協会'),
			_Utils_Tuple2('8178', '日本加除出版'),
			_Utils_Tuple2('8179', '日本カメラ社'),
			_Utils_Tuple2('8180', '日本看護協会出版会'),
			_Utils_Tuple2('8181', '日本学術振興会'),
			_Utils_Tuple2('8182', '日本棋院'),
			_Utils_Tuple2('8183', '日本教育'),
			_Utils_Tuple2('8184', '日本キリスト教団出版局'),
			_Utils_Tuple2('8185', '日本経済団体連合会出版研修事業本部'),
			_Utils_Tuple2('8186', '日本経営協会総合研究所'),
			_Utils_Tuple2('8187', '日本経済通信社'),
			_Utils_Tuple2('8188', '日本経済評論社'),
			_Utils_Tuple2('8189', '日本建築学会'),
			_Utils_Tuple2('8190', '日本工業出版'),
			_Utils_Tuple2('8191', '日本工業新聞社出版局'),
			_Utils_Tuple2('8192', '日本公衆衛生協会'),
			_Utils_Tuple2('8193', '日本国際問題研究所'),
			_Utils_Tuple2('8194', '日本シェル出版'),
			_Utils_Tuple2('8195', '日本習字普及協会'),
			_Utils_Tuple2('8196', '日本珠算研究社'),
			_Utils_Tuple2('8197', '日本将棋連盟'),
			_Utils_Tuple2('8198', '日本書館'),
			_Utils_Tuple2('8199', '日本書籍'),
			_Utils_Tuple2('8200', '日本書房'),
			_Utils_Tuple2('8201', '生産性出版'),
			_Utils_Tuple2('8202', '日本聖書協会'),
			_Utils_Tuple2('8203', '日本テレビ放送網'),
			_Utils_Tuple2('8204', '日本図書館協会'),
			_Utils_Tuple2('8205', '日本図書センター'),
			_Utils_Tuple2('8206', 'ＣＳ成長センター'),
			_Utils_Tuple2('8207', '日本能率協会マネジメントセンター'),
			_Utils_Tuple2('8208', '日本標準'),
			_Utils_Tuple2('8209', '日本ブリタニカ'),
			_Utils_Tuple2('8210', '日本文化科学社'),
			_Utils_Tuple2('8211', 'ぶんか社'),
			_Utils_Tuple2('8212', '日本文教出版'),
			_Utils_Tuple2('8213', '日本リーダーズダイジェスト社'),
			_Utils_Tuple2('8215', '日本ＹＭＣＡ同盟出版部'),
			_Utils_Tuple2('8216', 'ニュー・サイエンス社'),
			_Utils_Tuple2('8218', '能楽書林'),
			_Utils_Tuple2('8219', '農業図書'),
			_Utils_Tuple2('8220', '日本マンパワー出版'),
			_Utils_Tuple2('8221', '野島出版'),
			_Utils_Tuple2('8222', '日経ＢＰ社'),
			_Utils_Tuple2('8223', '日本統計協会'),
			_Utils_Tuple2('8224', '日本貿易振興会(ジェトロ)'),
			_Utils_Tuple2('8225', 'ニューライフ出版社'),
			_Utils_Tuple2('8226', '人間の科学新社'),
			_Utils_Tuple2('8227', '日経ＢＰ出版センター'),
			_Utils_Tuple2('8228', '七つ森書館'),
			_Utils_Tuple2('8229', '日経ＢＰ販売'),
			_Utils_Tuple2('8230', '年友企画'),
			_Utils_Tuple2('8261', '芳賀書店'),
			_Utils_Tuple2('8262', '白鳳社'),
			_Utils_Tuple2('8263', '柏樹社'),
			_Utils_Tuple2('8264', '話の特集編集室'),
			_Utils_Tuple2('8265', '批評社'),
			_Utils_Tuple2('8266', '白馬出版'),
			_Utils_Tuple2('8267', '白眉学芸社'),
			_Utils_Tuple2('8268', '博友社'),
			_Utils_Tuple2('8269', '白揚社'),
			_Utils_Tuple2('8270', '八曜社'),
			_Utils_Tuple2('8271', '発明協会'),
			_Utils_Tuple2('8273', '塙書房'),
			_Utils_Tuple2('8274', '番町書房'),
			_Utils_Tuple2('8275', 'ＳＳコミュニケーションズ'),
			_Utils_Tuple2('8276', '頭脳集団ぱるす出版'),
			_Utils_Tuple2('8277', 'パワー社'),
			_Utils_Tuple2('8278', '東山書房'),
			_Utils_Tuple2('8279', '檜書店'),
			_Utils_Tuple2('8280', 'つばめ書房'),
			_Utils_Tuple2('8281', '百華苑'),
			_Utils_Tuple2('8282', '評言社'),
			_Utils_Tuple2('8283', 'ビジネス教育出版社'),
			_Utils_Tuple2('8284', 'ビジネス社'),
			_Utils_Tuple2('8285', '美誠社'),
			_Utils_Tuple2('8286', 'ビブリオ'),
			_Utils_Tuple2('8288', 'ベネッセコーポレーション'),
			_Utils_Tuple2('8289', 'フジアート出版'),
			_Utils_Tuple2('8290', '富士教育出版社'),
			_Utils_Tuple2('8291', '富士見書房'),
			_Utils_Tuple2('8292', '婦人之友社'),
			_Utils_Tuple2('8293', '不昧堂出版'),
			_Utils_Tuple2('8294', '富民協会'),
			_Utils_Tuple2('8295', '芙蓉書房出版'),
			_Utils_Tuple2('8296', 'フランス書院(プランタン出版)'),
			_Utils_Tuple2('8296', 'フランス書院(プランタン出版)'),
			_Utils_Tuple2('8297', '武揚堂'),
			_Utils_Tuple2('8298', '部落問題研究所'),
			_Utils_Tuple2('8299', '文一総合出版'),
			_Utils_Tuple2('8300', '文永堂出版'),
			_Utils_Tuple2('8301', '文化書房博文社'),
			_Utils_Tuple2('8302', '文化評論'),
			_Utils_Tuple2('8303', '文化放送開発センター出版部'),
			_Utils_Tuple2('8304', '文雅堂銀行研究社'),
			_Utils_Tuple2('8305', '文献出版'),
			_Utils_Tuple2('8306', '文光堂'),
			_Utils_Tuple2('8307', '文秀出版社'),
			_Utils_Tuple2('8308', '文進堂'),
			_Utils_Tuple2('8309', '文眞堂'),
			_Utils_Tuple2('8310', '文泉堂出版'),
			_Utils_Tuple2('8311', '文潮出版'),
			_Utils_Tuple2('8312', '文理書院'),
			_Utils_Tuple2('8313', '平楽寺書店'),
			_Utils_Tuple2('8314', 'ベストブック'),
			_Utils_Tuple2('8315', 'ぺりかん社'),
			_Utils_Tuple2('8316', '鳳山社'),
			_Utils_Tuple2('8317', '法曹会'),
			_Utils_Tuple2('8318', '法蔵館'),
			_Utils_Tuple2('8319', '報知新聞社'),
			_Utils_Tuple2('8320', '宝文館出版'),
			_Utils_Tuple2('8321', '法文社'),
			_Utils_Tuple2('8322', '芳文社'),
			_Utils_Tuple2('8323', '宝文堂出版販売'),
			_Utils_Tuple2('8324', '朋友出版'),
			_Utils_Tuple2('8325', '北洋社'),
			_Utils_Tuple2('8326', '北隆館'),
			_Utils_Tuple2('8327', '保健同人社'),
			_Utils_Tuple2('8328', '北海道出版企画センター'),
			_Utils_Tuple2('8329', '北海道大学図書刊行会'),
			_Utils_Tuple2('8330', '北国新聞社'),
			_Utils_Tuple2('8331', '風媒社'),
			_Utils_Tuple2('8332', '木鐸社'),
			_Utils_Tuple2('8333', '牧羊社'),
			_Utils_Tuple2('8334', 'プレジデント社'),
			_Utils_Tuple2('8336', '邦楽社'),
			_Utils_Tuple2('8337', 'ＨＢＪ出版局'),
			_Utils_Tuple2('8338', '文教書院'),
			_Utils_Tuple2('8339', 'ブレーンセンター'),
			_Utils_Tuple2('8340', '福音館書店'),
			_Utils_Tuple2('8341', '東本願寺出版部(真宗大谷派宗務所出版部)'),
			_Utils_Tuple2('8342', 'ホーム社'),
			_Utils_Tuple2('8343', '浜島書店'),
			_Utils_Tuple2('8344', 'ゆうプロジェクト(白順社)'),
			_Utils_Tuple2('8345', '原楽器店'),
			_Utils_Tuple2('8346', '文新社'),
			_Utils_Tuple2('8347', 'ブティック社'),
			_Utils_Tuple2('8348', '一橋出版'),
			_Utils_Tuple2('8353', '福島介護福祉専門学校'),
			_Utils_Tuple2('8354', 'ブッキング'),
			_Utils_Tuple2('8373', 'マール社'),
			_Utils_Tuple2('8374', '前野書店'),
			_Utils_Tuple2('8375', '槇書店'),
			_Utils_Tuple2('8376', 'マキノ出版'),
			_Utils_Tuple2('8377', 'マコー社'),
			_Utils_Tuple2('8378', 'マネジメント社'),
			_Utils_Tuple2('8379', '三笠書房'),
			_Utils_Tuple2('8380', 'みずうみ書房'),
			_Utils_Tuple2('8381', '光村推古書院'),
			_Utils_Tuple2('8382', '三弥井書店'),
			_Utils_Tuple2('8383', '民衆社'),
			_Utils_Tuple2('8384', 'むぎ書房'),
			_Utils_Tuple2('8385', 'むさし書房'),
			_Utils_Tuple2('8386', '武蔵野書院'),
			_Utils_Tuple2('8387', 'マガジンハウス'),
			_Utils_Tuple2('8388', '明現社'),
			_Utils_Tuple2('8389', '明玄書房'),
			_Utils_Tuple2('8390', '名著刊行会'),
			_Utils_Tuple2('8391', '明文書房'),
			_Utils_Tuple2('8392', 'メヂカルフレンド社'),
			_Utils_Tuple2('8393', '木耳社'),
			_Utils_Tuple2('8394', '森山書店'),
			_Utils_Tuple2('8395', '丸善ニューメディア部'),
			_Utils_Tuple2('8396', 'めこん'),
			_Utils_Tuple2('8397', 'めるくまーる'),
			_Utils_Tuple2('8398', 'メタローグ'),
			_Utils_Tuple2('8400', 'ミュージックエイト'),
			_Utils_Tuple2('8402', 'メディアワークス'),
			_Utils_Tuple2('8406', '八木書店'),
			_Utils_Tuple2('8407', 'じほう'),
			_Utils_Tuple2('8408', '薬事日報社'),
			_Utils_Tuple2('8409', '柳原出版'),
			_Utils_Tuple2('8410', '矢野経済研究所'),
			_Utils_Tuple2('8411', '山口書店'),
			_Utils_Tuple2('8412', '八重岳書房'),
			_Utils_Tuple2('8413', '山手書房新社'),
			_Utils_Tuple2('8414', '山本書店'),
			_Utils_Tuple2('8415', '彌生書房'),
			_Utils_Tuple2('8416', '佑学社'),
			_Utils_Tuple2('8417', '有光書房'),
			_Utils_Tuple2('8418', '雄渾社'),
			_Utils_Tuple2('8419', '雄松堂出版'),
			_Utils_Tuple2('8420', '有信堂高文社'),
			_Utils_Tuple2('8421', '右文書院'),
			_Utils_Tuple2('8422', '有朋堂'),
			_Utils_Tuple2('8423', 'ユニコン出版'),
			_Utils_Tuple2('8424', '弓書房'),
			_Utils_Tuple2('8425', '養賢堂'),
			_Utils_Tuple2('8426', '養徳社'),
			_Utils_Tuple2('8427', '吉岡書店'),
			_Utils_Tuple2('8428', 'ヨルダン社'),
			_Utils_Tuple2('8429', '八千代出版'),
			_Utils_Tuple2('8430', '吉野教育図書'),
			_Utils_Tuple2('8431', 'ユック舎'),
			_Utils_Tuple2('8432', 'ユニテ'),
			_Utils_Tuple2('8434', '吉田地図'),
			_Utils_Tuple2('8440', 'ライオン社'),
			_Utils_Tuple2('8441', '雷鳥社'),
			_Utils_Tuple2('8442', '洛陽社'),
			_Utils_Tuple2('8443', 'エムディエヌコーポレーション(ＭｄＮ)'),
			_Utils_Tuple2('8443', 'エムディエヌコーポレーション(ＭｄＮ)'),
			_Utils_Tuple2('8444', 'ラテイス'),
			_Utils_Tuple2('8445', '理工学社'),
			_Utils_Tuple2('8446', '理工図書'),
			_Utils_Tuple2('8447', '龍溪書舎'),
			_Utils_Tuple2('8448', '龍吟社'),
			_Utils_Tuple2('8449', '東京リーガルマインド'),
			_Utils_Tuple2('8450', '労働教育センター'),
			_Utils_Tuple2('8451', '旬報社'),
			_Utils_Tuple2('8452', '労務行政'),
			_Utils_Tuple2('8453', '六興出版'),
			_Utils_Tuple2('8454', 'ロングセラーズ'),
			_Utils_Tuple2('8455', '崙書房出版'),
			_Utils_Tuple2('8456', 'リットーミュージック'),
			_Utils_Tuple2('8457', 'リブロポート'),
			_Utils_Tuple2('8458', 'リイド社'),
			_Utils_Tuple2('8459', 'フィルムアート社'),
			_Utils_Tuple2('8460', '論創社'),
			_Utils_Tuple2('8461', '緑風出版'),
			_Utils_Tuple2('8462', 'れんが書房新社'),
			_Utils_Tuple2('8463', '鹿砦社'),
			_Utils_Tuple2('8464', '栄光教育文化研究所'),
			_Utils_Tuple2('8465', 'ワールドフォトプレス'),
			_Utils_Tuple2('8466', '若木書房'),
			_Utils_Tuple2('8468', 'ワラヂヤ出版'),
			_Utils_Tuple2('8469', 'わんや書店'),
			_Utils_Tuple2('8470', 'ワニブックス'),
			_Utils_Tuple2('86008', '芝パーク出版'),
			_Utils_Tuple2('86009', '神戸大学経済経営研究所'),
			_Utils_Tuple2('86013', '労働法令'),
			_Utils_Tuple2('86017', 'カシス'),
			_Utils_Tuple2('86019', '京都吉田地図'),
			_Utils_Tuple2('86022', 'データクラフト'),
			_Utils_Tuple2('86025', '日本映画新社'),
			_Utils_Tuple2('86027', '東京財団'),
			_Utils_Tuple2('86033', '三省堂企画'),
			_Utils_Tuple2('86034', 'エルゼビア・サイエンス・ミクス'),
			_Utils_Tuple2('86035', '建築ジャーナル'),
			_Utils_Tuple2('86038', '原田印刷出版'),
			_Utils_Tuple2('86040', 'ブックハウスジャパン'),
			_Utils_Tuple2('86041', '批評空間'),
			_Utils_Tuple2('86046', 'アクアハウス'),
			_Utils_Tuple2('86048', 'インデックス・マガジンズ'),
			_Utils_Tuple2('86059', 'アーク出版'),
			_Utils_Tuple2('86060', '日本楽譜出版社'),
			_Utils_Tuple2('86070', '日本マンパワーキャリア開発部'),
			_Utils_Tuple2('86075', '信山社'),
			_Utils_Tuple2('86082', '遊無有'),
			_Utils_Tuple2('86090', 'トライエックス'),
			_Utils_Tuple2('86105', 'オークス'),
			_Utils_Tuple2('86116', '日教販仕入部'),
			_Utils_Tuple2('86134', 'フロンティアワークス'),
			_Utils_Tuple2('86137', '浅川書房'),
			_Utils_Tuple2('86142', '図書出版出町書房'),
			_Utils_Tuple2('86147', 'メディアセレクト'),
			_Utils_Tuple2('86153', '日経ＢＰクリエーティブ'),
			_Utils_Tuple2('86154', '佛教大学通信教育部(浄土宗教育資団)'),
			_Utils_Tuple2('86155', 'コナミメディアエンタテインメント'),
			_Utils_Tuple2('86157', '日本放射線技師会出版会'),
			_Utils_Tuple2('87000', 'アート社出版'),
			_Utils_Tuple2('87001', 'アーニ出版'),
			_Utils_Tuple2('87002', '愛育出版'),
			_Utils_Tuple2('87003', '愛鳩の友社'),
			_Utils_Tuple2('87004', 'あい書房'),
			_Utils_Tuple2('87005', '葵出版社'),
			_Utils_Tuple2('87006', 'エデュカ'),
			_Utils_Tuple2('87007', '青い鳥社'),
			_Utils_Tuple2('87008', '青葉出版'),
			_Utils_Tuple2('87009', '青森県文芸協会出版部'),
			_Utils_Tuple2('87010', '青山書院'),
			_Utils_Tuple2('87011', '青山光雄'),
			_Utils_Tuple2('87012', '赤尾照文堂'),
			_Utils_Tuple2('87013', 'あかし書房'),
			_Utils_Tuple2('87014', '赤ちゃんとママ社'),
			_Utils_Tuple2('87015', '暁印書館'),
			_Utils_Tuple2('87016', 'アカデミア出版会'),
			_Utils_Tuple2('87017', 'アカデミア・ミュージック'),
			_Utils_Tuple2('87018', '赤間関書房'),
			_Utils_Tuple2('87019', '秋書房'),
			_Utils_Tuple2('87020', '秋田魁新報社'),
			_Utils_Tuple2('87021', '秋田書房'),
			_Utils_Tuple2('87022', '秋田文化出版'),
			_Utils_Tuple2('87023', '秋山書店'),
			_Utils_Tuple2('87024', 'あさを社'),
			_Utils_Tuple2('87026', '葦書房'),
			_Utils_Tuple2('87027', '安藤出版社'),
			_Utils_Tuple2('87028', 'アジアコーポレーション'),
			_Utils_Tuple2('87029', 'アスカコーポレーション'),
			_Utils_Tuple2('87031', '飛鳥新社'),
			_Utils_Tuple2('87033', '国連アジア極東犯罪防止研修所'),
			_Utils_Tuple2('87034', 'あすなろ社'),
			_Utils_Tuple2('87035', '梓書院'),
			_Utils_Tuple2('87036', '東出版'),
			_Utils_Tuple2('87037', 'あいわプリント'),
			_Utils_Tuple2('87038', '東出版寧楽社'),
			_Utils_Tuple2('87039', 'アディン書房'),
			_Utils_Tuple2('87040', '油屋書店'),
			_Utils_Tuple2('87041', 'あぽろん社'),
			_Utils_Tuple2('87042', 'あまとりあ社'),
			_Utils_Tuple2('87043', '荒竹出版'),
			_Utils_Tuple2('87044', '有明書房'),
			_Utils_Tuple2('87045', '有峰書店新社'),
			_Utils_Tuple2('87046', 'あるふあ出版'),
			_Utils_Tuple2('87047', 'アイペックプレス'),
			_Utils_Tuple2('87048', '安全衛生技術試験協会'),
			_Utils_Tuple2('87049', '槐書房'),
			_Utils_Tuple2('87050', 'アムコインターナショナル'),
			_Utils_Tuple2('87051', 'いかだ社'),
			_Utils_Tuple2('87052', '医学研究社'),
			_Utils_Tuple2('87053', '医学研修出版社'),
			_Utils_Tuple2('87054', '医学芸術社'),
			_Utils_Tuple2('87055', '医学出版社'),
			_Utils_Tuple2('87056', '医学書院洋書部'),
			_Utils_Tuple2('87057', '医学書房'),
			_Utils_Tuple2('87058', '医学通信社'),
			_Utils_Tuple2('87059', '医学の世界社'),
			_Utils_Tuple2('87060', '伊吉書院'),
			_Utils_Tuple2('87061', '郁文'),
			_Utils_Tuple2('87062', '池上書店'),
			_Utils_Tuple2('87064', '石崎書店'),
			_Utils_Tuple2('87065', '両国ブックス'),
			_Utils_Tuple2('87066', '医事出版社'),
			_Utils_Tuple2('87067', 'いずみ出版'),
			_Utils_Tuple2('87068', '和泉文化研究会'),
			_Utils_Tuple2('87069', '衣生活研究会'),
			_Utils_Tuple2('87070', '伊勢民俗学会'),
			_Utils_Tuple2('87071', '市ヶ谷出版社'),
			_Utils_Tuple2('87072', '一の丸出版'),
			_Utils_Tuple2('87073', '一枚の繪'),
			_Utils_Tuple2('87074', '一茎書房'),
			_Utils_Tuple2('87075', '一周会'),
			_Utils_Tuple2('87076', '一水社'),
			_Utils_Tuple2('87077', '一声社'),
			_Utils_Tuple2('87078', '一世出版'),
			_Utils_Tuple2('87079', '一燈園出版部'),
			_Utils_Tuple2('87080', '出光書店'),
			_Utils_Tuple2('87081', '伊那毎日新聞社'),
			_Utils_Tuple2('87082', '井上書店'),
			_Utils_Tuple2('87083', '医薬品産業研究所'),
			_Utils_Tuple2('87084', 'いれぶん出版'),
			_Utils_Tuple2('87085', '印刷学会出版部'),
			_Utils_Tuple2('87086', '印刷出版研究所'),
			_Utils_Tuple2('87087', 'インタープレス'),
			_Utils_Tuple2('87089', 'インテリア出版'),
			_Utils_Tuple2('87090', '潮書房'),
			_Utils_Tuple2('87091', '卯辰山文庫'),
			_Utils_Tuple2('87092', 'ザ・コスモロジー'),
			_Utils_Tuple2('87093', 'うちゅうろん社'),
			_Utils_Tuple2('87094', 'ヴェーダーンタ文庫'),
			_Utils_Tuple2('87095', '栄冠教育出版'),
			_Utils_Tuple2('87096', '英研社'),
			_Utils_Tuple2('87097', '英光社'),
			_Utils_Tuple2('87098', '英才教育情報センター出版部'),
			_Utils_Tuple2('87099', 'トライベッカ'),
			_Utils_Tuple2('87100', '映人社'),
			_Utils_Tuple2('87101', '栄文堂書店'),
			_Utils_Tuple2('87103', '英林社'),
			_Utils_Tuple2('87104', 'エコー出版'),
			_Utils_Tuple2('87105', 'エス・アイ・エス'),
			_Utils_Tuple2('87106', 'エヌピー出版'),
			_Utils_Tuple2('87107', '榎本書店'),
			_Utils_Tuple2('87108', 'ＮＨＫサービスセンター'),
			_Utils_Tuple2('87109', 'エホバはアミダ仏研究会'),
			_Utils_Tuple2('87110', '絵本館'),
			_Utils_Tuple2('87111', 'ＥＬＥ'),
			_Utils_Tuple2('87112', 'エリエイ出版部プレス・アイゼンバーン'),
			_Utils_Tuple2('87113', 'エレクトロニクスダイジェスト'),
			_Utils_Tuple2('87114', '遠州出版社'),
			_Utils_Tuple2('87115', 'ＮＳＫ地方出版社'),
			_Utils_Tuple2('87116', 'オーク'),
			_Utils_Tuple2('87117', '大阪心理出版'),
			_Utils_Tuple2('87118', '大阪屋'),
			_Utils_Tuple2('87119', '旺史社'),
			_Utils_Tuple2('87120', 'エーブイエス'),
			_Utils_Tuple2('87121', '鳳舎'),
			_Utils_Tuple2('87122', '鳳書院'),
			_Utils_Tuple2('87123', '大西書店'),
			_Utils_Tuple2('87124', '大原新生社'),
			_Utils_Tuple2('87125', '旺文社インターナショナル'),
			_Utils_Tuple2('87127', '沖繩タイムス社'),
			_Utils_Tuple2('87128', '尾鈴山書房'),
			_Utils_Tuple2('87129', '落合書店'),
			_Utils_Tuple2('87130', 'オービーエスアカデミー'),
			_Utils_Tuple2('87131', 'オリコン'),
			_Utils_Tuple2('87133', 'おりじん書房'),
			_Utils_Tuple2('87134', 'イムマヌエル総合伝道団出版局'),
			_Utils_Tuple2('87135', '音楽鑑賞教育振興会'),
			_Utils_Tuple2('87136', '音楽教育研究協会'),
			_Utils_Tuple2('87137', '音楽の世界社'),
			_Utils_Tuple2('87138', '創拓社出版'),
			_Utils_Tuple2('87139', '朝日コミュニケーションズ'),
			_Utils_Tuple2('87140', 'エーディーエー・エディタ・トーキョー'),
			_Utils_Tuple2('87141', '丘書房'),
			_Utils_Tuple2('87143', '安達図書'),
			_Utils_Tuple2('87144', '益文堂書店'),
			_Utils_Tuple2('87145', '大築書房'),
			_Utils_Tuple2('87146', '一進堂書店'),
			_Utils_Tuple2('87147', 'オリエント書房'),
			_Utils_Tuple2('87148', 'アスキー'),
			_Utils_Tuple2('87149', 'イカロス出版'),
			_Utils_Tuple2('87150', 'エミール館'),
			_Utils_Tuple2('87151', '医学図書出版'),
			_Utils_Tuple2('87152', 'アテネ書房'),
			_Utils_Tuple2('87153', 'イーストウエストパブリケイションズ'),
			_Utils_Tuple2('87155', 'アシェット・ジャポン'),
			_Utils_Tuple2('87156', 'アミーゴ'),
			_Utils_Tuple2('87157', 'インテリジェンス社'),
			_Utils_Tuple2('87158', 'オリーブ社'),
			_Utils_Tuple2('87159', '吾妻書館'),
			_Utils_Tuple2('87160', '大阪人文社'),
			_Utils_Tuple2('87161', '愛知県郷土資料刊行会'),
			_Utils_Tuple2('87162', '赤坂グループ事務所'),
			_Utils_Tuple2('87163', '医学教育出版社'),
			_Utils_Tuple2('87164', 'エイト社'),
			_Utils_Tuple2('87165', 'あずさ書房'),
			_Utils_Tuple2('87166', '岡山市立オリエント美術館'),
			_Utils_Tuple2('87167', '鴻出版'),
			_Utils_Tuple2('87168', 'エイデル研究所'),
			_Utils_Tuple2('87169', 'オーエイ出版'),
			_Utils_Tuple2('87170', 'エム・アイ・エー'),
			_Utils_Tuple2('87171', '以和貴出版'),
			_Utils_Tuple2('87172', 'エムジー'),
			_Utils_Tuple2('87174', '生ける水の川'),
			_Utils_Tuple2('87175', '英研出版'),
			_Utils_Tuple2('87176', 'エー・アイ・ソフト'),
			_Utils_Tuple2('87177', 'あっぷる出版社'),
			_Utils_Tuple2('87178', 'あいわ出版'),
			_Utils_Tuple2('87179', 'オレンジ出版'),
			_Utils_Tuple2('87180', '池宮商会'),
			_Utils_Tuple2('87181', 'アドロード'),
			_Utils_Tuple2('87182', '茜新社'),
			_Utils_Tuple2('87184', '秋葉出版'),
			_Utils_Tuple2('87185', 'インテル'),
			_Utils_Tuple2('87186', '大竹出版'),
			_Utils_Tuple2('87187', '石プレス'),
			_Utils_Tuple2('87189', 'インフォメーションサイエンス'),
			_Utils_Tuple2('87192', '音楽教育振興会'),
			_Utils_Tuple2('87193', 'エーアイ出版'),
			_Utils_Tuple2('87194', 'オイル・リポート社'),
			_Utils_Tuple2('87195', 'ＳＦＣ音楽出版'),
			_Utils_Tuple2('87196', '一葉社'),
			_Utils_Tuple2('87197', 'エム・ピー・シー'),
			_Utils_Tuple2('87198', 'アルファベータ'),
			_Utils_Tuple2('87199', 'エルテ出版'),
			_Utils_Tuple2('87200', 'エピック・ソニー'),
			_Utils_Tuple2('87201', '岩手日報社'),
			_Utils_Tuple2('87202', 'アートスペースコンセプト'),
			_Utils_Tuple2('87203', 'オセアニア出版社'),
			_Utils_Tuple2('87204', '大阪経済法科大学出版部'),
			_Utils_Tuple2('87205', 'いずみ出版'),
			_Utils_Tuple2('87206', '碇'),
			_Utils_Tuple2('87209', 'イーオン語学教育研究所'),
			_Utils_Tuple2('87210', 'エームクリエイティブプロダクツ'),
			_Utils_Tuple2('87212', 'アウン'),
			_Utils_Tuple2('87213', 'ウオカーズカンパニー'),
			_Utils_Tuple2('87214', 'イマジニア'),
			_Utils_Tuple2('87215', '沖縄自分史センター'),
			_Utils_Tuple2('87216', 'インターメッド'),
			_Utils_Tuple2('87217', 'アスク'),
			_Utils_Tuple2('87218', 'ＩＮ通信社'),
			_Utils_Tuple2('87219', 'エス・ピー・オー'),
			_Utils_Tuple2('87220', '好文出版'),
			_Utils_Tuple2('87221', 'エヌ・ティ・ティ・メディアスコープ'),
			_Utils_Tuple2('87222', 'アドバンプレス'),
			_Utils_Tuple2('87223', '天田印刷加工'),
			_Utils_Tuple2('87224', '碧楽出版'),
			_Utils_Tuple2('87225', '音教社'),
			_Utils_Tuple2('87226', 'アーバンスタジオ'),
			_Utils_Tuple2('87227', '梅里書房'),
			_Utils_Tuple2('87228', 'エトナ出版'),
			_Utils_Tuple2('87229', 'イオット出版'),
			_Utils_Tuple2('87230', 'うらべ書房大和美術印刷出版事業部'),
			_Utils_Tuple2('87231', 'エイエスエイブックス'),
			_Utils_Tuple2('87232', 'オリエンス宗教研究所'),
			_Utils_Tuple2('87235', 'ＳＡＳソフトウェア'),
			_Utils_Tuple2('87236', '大空社'),
			_Utils_Tuple2('87237', 'エス・ケイ・ワイ'),
			_Utils_Tuple2('87238', 'ＯＡＧ・ドイツ東洋文化研究協会'),
			_Utils_Tuple2('87239', '教育図書出版オックス'),
			_Utils_Tuple2('87240', 'アサ'),
			_Utils_Tuple2('87241', 'いのちのことば社シーアール企画'),
			_Utils_Tuple2('87243', 'ＳＥＧ出版'),
			_Utils_Tuple2('87244', 'ＮＨＫソフトウェア'),
			_Utils_Tuple2('87245', 'アスミックエースエンタテイメント'),
			_Utils_Tuple2('87247', '恩寵社'),
			_Utils_Tuple2('87249', 'エスジーエヌ'),
			_Utils_Tuple2('87250', 'アイコムアソシエイツ'),
			_Utils_Tuple2('87251', 'ウィズ・ワイ'),
			_Utils_Tuple2('87252', '英進社'),
			_Utils_Tuple2('87253', 'アドテックス'),
			_Utils_Tuple2('87254', 'アイ信'),
			_Utils_Tuple2('87255', 'デジタルグラフィック'),
			_Utils_Tuple2('87256', '愛智出版'),
			_Utils_Tuple2('87258', '大原出版'),
			_Utils_Tuple2('87259', '大阪大学出版会'),
			_Utils_Tuple2('87260', 'オー・ケイ出版社'),
			_Utils_Tuple2('87261', 'オデッセウス'),
			_Utils_Tuple2('87263', 'エッチアールシー'),
			_Utils_Tuple2('87264', '岩瀬書店'),
			_Utils_Tuple2('87267', 'エルダブリューダブリュー医学書院'),
			_Utils_Tuple2('87268', 'アイテック'),
			_Utils_Tuple2('87270', 'アース出版局'),
			_Utils_Tuple2('87273', '茨城新聞社'),
			_Utils_Tuple2('87274', 'エムオーエー商事出版部'),
			_Utils_Tuple2('87275', 'ＩＮＡＸ出版'),
			_Utils_Tuple2('87281', 'エス・ワイ・ピー'),
			_Utils_Tuple2('87282', 'あんず堂'),
			_Utils_Tuple2('87283', 'エクスメディア'),
			_Utils_Tuple2('87284', 'ウイネット'),
			_Utils_Tuple2('87285', 'インテグレイテッドマーケティングコミュニケーションズ'),
			_Utils_Tuple2('87286', '安楽城出版'),
			_Utils_Tuple2('87288', 'ウイング野上出版事業部'),
			_Utils_Tuple2('87289', 'アークシステム出版事業部'),
			_Utils_Tuple2('87292', 'アゴラ'),
			_Utils_Tuple2('87297', 'アジア・アフリカ言語文化研究所'),
			_Utils_Tuple2('87298', 'アートボックス・インターナショナル'),
			_Utils_Tuple2('87299', 'イマジン出版'),
			_Utils_Tuple2('87301', 'オカムラ出版事業部'),
			_Utils_Tuple2('87304', 'オリンパス光学工業ＤＭプロジェクト'),
			_Utils_Tuple2('87305', 'ＯＫＩ－ＲＢＡ出版'),
			_Utils_Tuple2('87306', 'エンジェル出版'),
			_Utils_Tuple2('87308', '大阪ボランティア協会'),
			_Utils_Tuple2('87309', '医学生物学研究所'),
			_Utils_Tuple2('87310', '暗黒通信団'),
			_Utils_Tuple2('87312', 'アルソ出版'),
			_Utils_Tuple2('87313', 'アロエ印刷'),
			_Utils_Tuple2('87314', 'ＦＣミュージック'),
			_Utils_Tuple2('87315', 'エコノミスト社'),
			_Utils_Tuple2('87316', 'アミューズソフト販売'),
			_Utils_Tuple2('87317', 'あおば出版'),
			_Utils_Tuple2('87318', '改革社'),
			_Utils_Tuple2('87319', '海燕書房'),
			_Utils_Tuple2('87320', '海外調査研究所'),
			_Utils_Tuple2('87321', 'かんと出版'),
			_Utils_Tuple2('87322', '皆美社'),
			_Utils_Tuple2('87323', '開明書院'),
			_Utils_Tuple2('87324', '海洋出版'),
			_Utils_Tuple2('87325', '化学経済研究所'),
			_Utils_Tuple2('87326', '化学工業日報社'),
			_Utils_Tuple2('87327', '化学市場研究所'),
			_Utils_Tuple2('87328', '科学評論社'),
			_Utils_Tuple2('87329', '加賀谷書店'),
			_Utils_Tuple2('87331', '柿発行所'),
			_Utils_Tuple2('87332', 'コープ出版'),
			_Utils_Tuple2('87333', '学友出版'),
			_Utils_Tuple2('87334', '葛城出版'),
			_Utils_Tuple2('87335', '関西外国語大学'),
			_Utils_Tuple2('87337', '風書房'),
			_Utils_Tuple2('87338', '加田経済研究所'),
			_Utils_Tuple2('87339', '金沢文庫'),
			_Utils_Tuple2('87340', '花卉園芸新聞社'),
			_Utils_Tuple2('87341', '河北新報総合サービス出版センター'),
			_Utils_Tuple2('87343', '紙パルプ技術協会'),
			_Utils_Tuple2('87344', 'カメラアート社'),
			_Utils_Tuple2('87346', '花曜社'),
			_Utils_Tuple2('87347', '烏書房'),
			_Utils_Tuple2('87348', '仮縫室'),
			_Utils_Tuple2('87349', '環境情報科学センター'),
			_Utils_Tuple2('87350', '元興寺文化財研究所'),
			_Utils_Tuple2('87351', '韓国書籍センター'),
			_Utils_Tuple2('87352', '煥乎堂'),
			_Utils_Tuple2('87353', '関西衣生活研究会'),
			_Utils_Tuple2('87354', '関西大学出版部'),
			_Utils_Tuple2('87355', '岳洋社'),
			_Utils_Tuple2('87356', '巖松堂出版'),
			_Utils_Tuple2('87357', '酣燈社'),
			_Utils_Tuple2('87358', '神無書房'),
			_Utils_Tuple2('87359', '外国為替貿易研究会'),
			_Utils_Tuple2('87360', 'ガイド出版社'),
			_Utils_Tuple2('87361', '学術図書出版社'),
			_Utils_Tuple2('87362', '学窓社'),
			_Utils_Tuple2('87363', '学友社'),
			_Utils_Tuple2('87364', '画文堂'),
			_Utils_Tuple2('87365', '棋苑図書'),
			_Utils_Tuple2('87367', '企画センター'),
			_Utils_Tuple2('87368', '紀元社出版'),
			_Utils_Tuple2('87369', '季節社'),
			_Utils_Tuple2('87370', '機械集覧出版'),
			_Utils_Tuple2('87371', '北沢図書出版'),
			_Utils_Tuple2('87372', '北書房'),
			_Utils_Tuple2('87373', '北の街社'),
			_Utils_Tuple2('87374', '北村書店'),
			_Utils_Tuple2('87375', '帰徳書房'),
			_Utils_Tuple2('87376', 'キネマ旬報社'),
			_Utils_Tuple2('87377', 'キハラ'),
			_Utils_Tuple2('87378', '九州大学出版会'),
			_Utils_Tuple2('87379', '教育工学社'),
			_Utils_Tuple2('87380', '教育開発研究所'),
			_Utils_Tuple2('87381', '教育家庭新聞社'),
			_Utils_Tuple2('87382', '教育計画'),
			_Utils_Tuple2('87383', '教育新聞社'),
			_Utils_Tuple2('87384', '教育同人社'),
			_Utils_Tuple2('87385', '京鹿子社'),
			_Utils_Tuple2('87386', '極東出版社'),
			_Utils_Tuple2('87387', '矯正協会'),
			_Utils_Tuple2('87388', '京都修道院出版局'),
			_Utils_Tuple2('87389', 'クエスト'),
			_Utils_Tuple2('87390', '共同音楽出版社'),
			_Utils_Tuple2('87391', '協同産業出版部'),
			_Utils_Tuple2('87392', '郷土誌刊行会'),
			_Utils_Tuple2('87393', '協和出版販売'),
			_Utils_Tuple2('87394', '極東書店'),
			_Utils_Tuple2('87395', 'キリスト新聞社'),
			_Utils_Tuple2('87396', '金花舎'),
			_Utils_Tuple2('87397', '金華堂'),
			_Utils_Tuple2('87398', '金港堂出版部'),
			_Utils_Tuple2('87399', '金高堂書店'),
			_Utils_Tuple2('87400', '近代交通社'),
			_Utils_Tuple2('87401', '近代ゴルフプロモーション'),
			_Utils_Tuple2('87402', '近代出版'),
			_Utils_Tuple2('87403', '近代編集社'),
			_Utils_Tuple2('87404', '金融図書コンサルタント社'),
			_Utils_Tuple2('87405', '金龍堂'),
			_Utils_Tuple2('87406', '技術出版'),
			_Utils_Tuple2('87407', '河中自治振興財団'),
			_Utils_Tuple2('87409', '漁協経営センター'),
			_Utils_Tuple2('87410', '玉川堂'),
			_Utils_Tuple2('87411', '魚菜学園出版局'),
			_Utils_Tuple2('87412', '銀河社'),
			_Utils_Tuple2('87413', '銀河書房'),
			_Utils_Tuple2('87416', '鬼磨子書房'),
			_Utils_Tuple2('87417', 'クインテッセンス出版'),
			_Utils_Tuple2('87418', '空気調和・衛生工学会'),
			_Utils_Tuple2('87419', '蜘蛛出版社'),
			_Utils_Tuple2('87420', '鞍馬弘教総本山鞍馬寺出版部'),
			_Utils_Tuple2('87421', '栗田出版会'),
			_Utils_Tuple2('87422', '栗田出版販売'),
			_Utils_Tuple2('87423', '鍬谷書店'),
			_Utils_Tuple2('87424', 'くろしお出版'),
			_Utils_Tuple2('87425', '薫風社'),
			_Utils_Tuple2('87426', 'グノモン社'),
			_Utils_Tuple2('87427', '軍事問題研究会'),
			_Utils_Tuple2('87428', '経営情報出版社'),
			_Utils_Tuple2('87429', '慶応書房'),
			_Utils_Tuple2('87430', '恵雅堂出版'),
			_Utils_Tuple2('87431', '日本アルミニウム協会'),
			_Utils_Tuple2('87432', 'カロス出版'),
			_Utils_Tuple2('87433', '軽金属通信ある社'),
			_Utils_Tuple2('87434', '研算社'),
			_Utils_Tuple2('87435', '京阪神エルマガジン社'),
			_Utils_Tuple2('87436', '経済地図社'),
			_Utils_Tuple2('87437', '経済調査会'),
			_Utils_Tuple2('87438', '経済調査協会'),
			_Utils_Tuple2('87439', 'ロードストーン'),
			_Utils_Tuple2('87440', '溪水社'),
			_Utils_Tuple2('87441', '形成社'),
			_Utils_Tuple2('87442', '溪声社'),
			_Utils_Tuple2('87443', '研数広文館'),
			_Utils_Tuple2('87444', 'けいせい出版'),
			_Utils_Tuple2('87445', '啓草社'),
			_Utils_Tuple2('87446', '圭文社'),
			_Utils_Tuple2('87447', '圭文社'),
			_Utils_Tuple2('87448', '啓明出版'),
			_Utils_Tuple2('87449', '慶友社'),
			_Utils_Tuple2('87450', '日本計量振興協会'),
			_Utils_Tuple2('87451', '結核予防会本部分室出版調査課'),
			_Utils_Tuple2('87452', 'けやき書房'),
			_Utils_Tuple2('87453', '健康医学社'),
			_Utils_Tuple2('87454', 'アポロ出版'),
			_Utils_Tuple2('87455', '研秀出版'),
			_Utils_Tuple2('87456', '建設産業調査会'),
			_Utils_Tuple2('87457', '建設資材研究会'),
			_Utils_Tuple2('87458', '建設綜合資料社'),
			_Utils_Tuple2('87459', '建設図書'),
			_Utils_Tuple2('87460', '建築資料研究社'),
			_Utils_Tuple2('87462', '兼六館出版'),
			_Utils_Tuple2('87463', '芸術現代社'),
			_Utils_Tuple2('87464', '芸風書院'),
			_Utils_Tuple2('87465', '芸文社'),
			_Utils_Tuple2('87466', '芸立出版'),
			_Utils_Tuple2('87467', '月刊沖縄社'),
			_Utils_Tuple2('87468', '幻想社'),
			_Utils_Tuple2('87469', '現代アジア出版会'),
			_Utils_Tuple2('87471', '現代ギター社'),
			_Utils_Tuple2('87472', '現代工学社'),
			_Utils_Tuple2('87473', '現代史出版会'),
			_Utils_Tuple2('87474', '現代社'),
			_Utils_Tuple2('87475', '現代出版'),
			_Utils_Tuple2('87476', '現代人社'),
			_Utils_Tuple2('87477', '現代創造社'),
			_Utils_Tuple2('87478', '研数学館'),
			_Utils_Tuple2('87479', '現代人形劇センター'),
			_Utils_Tuple2('87480', '現代の理論社'),
			_Utils_Tuple2('87481', '現代舞踊協会'),
			_Utils_Tuple2('87482', '現代旅行研究所'),
			_Utils_Tuple2('87483', '刊広社'),
			_Utils_Tuple2('87484', '鶏鳴出版'),
			_Utils_Tuple2('87486', 'ＫＣＣ出版部'),
			_Utils_Tuple2('87487', 'ＫＭＡダイアリー'),
			_Utils_Tuple2('87488', '公害研究対策センター'),
			_Utils_Tuple2('87489', '公害対策技術同友会'),
			_Utils_Tuple2('87490', '講学館'),
			_Utils_Tuple2('87491', '興学社'),
			_Utils_Tuple2('87492', 'アイ・ケイコーポレーション'),
			_Utils_Tuple2('87493', '工学書協会'),
			_Utils_Tuple2('87494', '工学書目録刊行会'),
			_Utils_Tuple2('87495', '航空新聞社'),
			_Utils_Tuple2('87496', '航空ジャーナル社'),
			_Utils_Tuple2('87497', '交通総合センター'),
			_Utils_Tuple2('87498', '高文研'),
			_Utils_Tuple2('87499', '考古堂書店'),
			_Utils_Tuple2('87500', '口語俳句発行所'),
			_Utils_Tuple2('87501', '光彩社'),
			_Utils_Tuple2('87502', '工作舎'),
			_Utils_Tuple2('87503', '高知新聞企業'),
			_Utils_Tuple2('87504', '香草社'),
			_Utils_Tuple2('87505', '高知県文教協会'),
			_Utils_Tuple2('87506', '紅天社'),
			_Utils_Tuple2('87507', '廣文堂書店'),
			_Utils_Tuple2('87508', '広潤社'),
			_Utils_Tuple2('87509', '弘詢社'),
			_Utils_Tuple2('87511', '厚生統計協会'),
			_Utils_Tuple2('87512', '甲鳥書林'),
			_Utils_Tuple2('87513', '交通新聞社'),
			_Utils_Tuple2('87514', '交通タイムス社'),
			_Utils_Tuple2('87515', '講道館'),
			_Utils_Tuple2('87516', '行動社'),
			_Utils_Tuple2('87518', '河野心理教育研究所出版部'),
			_Utils_Tuple2('87519', '光風社出版'),
			_Utils_Tuple2('87520', '弘文出版'),
			_Utils_Tuple2('87521', '神戸新聞総合出版センター'),
			_Utils_Tuple2('87522', '神戸新報社'),
			_Utils_Tuple2('87523', '神戸都市問題研究所'),
			_Utils_Tuple2('87524', '神戸人とまち編集室'),
			_Utils_Tuple2('87525', '海鳴社'),
			_Utils_Tuple2('87526', '公職研'),
			_Utils_Tuple2('87527', '高野山出版社'),
			_Utils_Tuple2('87528', '高野山大学出版部'),
			_Utils_Tuple2('87531', '甲陽書房'),
			_Utils_Tuple2('87532', '高陽堂書店'),
			_Utils_Tuple2('87533', '交鈴社'),
			_Utils_Tuple2('87534', '行路社'),
			_Utils_Tuple2('87535', '広論社'),
			_Utils_Tuple2('87536', '恒和出版'),
			_Utils_Tuple2('87537', '港湾都市情報サービス'),
			_Utils_Tuple2('87538', '光和堂'),
			_Utils_Tuple2('87539', '国際開発ジャーナル社'),
			_Utils_Tuple2('87540', '国際交流基金'),
			_Utils_Tuple2('87541', '国際出版'),
			_Utils_Tuple2('87542', '国際商業出版'),
			_Utils_Tuple2('87543', '国際商事法研究所'),
			_Utils_Tuple2('87544', '国際博物館会議日本委員会'),
			_Utils_Tuple2('87545', '国際文化交流協会'),
			_Utils_Tuple2('87546', '国際文化出版社'),
			_Utils_Tuple2('87547', '国際聯合通信社'),
			_Utils_Tuple2('87548', '黒色戦線社'),
			_Utils_Tuple2('87549', '矢野恒太記念会(国勢社)'),
			_Utils_Tuple2('87550', '国政出版室'),
			_Utils_Tuple2('87551', 'くんぷる'),
			_Utils_Tuple2('87552', '国土地理協会'),
			_Utils_Tuple2('87553', '国民科学社'),
			_Utils_Tuple2('87554', '国民新聞社'),
			_Utils_Tuple2('87555', '公人の友社'),
			_Utils_Tuple2('87556', '児島書店'),
			_Utils_Tuple2('87557', 'シモン企画'),
			_Utils_Tuple2('87558', 'こびあん書房'),
			_Utils_Tuple2('87559', 'こぶし書房'),
			_Utils_Tuple2('87560', 'ユージン伝'),
			_Utils_Tuple2('87561', '高麗書林'),
			_Utils_Tuple2('87562', '小宮山出版'),
			_Utils_Tuple2('87563', '雇用問題研究会'),
			_Utils_Tuple2('87564', '近藤書店'),
			_Utils_Tuple2('87565', '今日の話題社'),
			_Utils_Tuple2('87566', 'コンピュータ・エージ社'),
			_Utils_Tuple2('87567', '五禾書房'),
			_Utils_Tuple2('87568', '語学春秋社'),
			_Utils_Tuple2('87569', '午夢舘'),
			_Utils_Tuple2('87570', '海難審判協会'),
			_Utils_Tuple2('87571', '開文社出版'),
			_Utils_Tuple2('87572', '啓正社'),
			_Utils_Tuple2('87573', '紀伊國屋書店洋書部'),
			_Utils_Tuple2('87574', '構想社'),
			_Utils_Tuple2('87575', '雁書舘'),
			_Utils_Tuple2('87577', '共栄図書'),
			_Utils_Tuple2('87578', '神戸図書'),
			_Utils_Tuple2('87579', 'キクヤ図書販売'),
			_Utils_Tuple2('87580', '金文図書出版販売'),
			_Utils_Tuple2('87581', '向学社'),
			_Utils_Tuple2('87582', '国立国会図書館'),
			_Utils_Tuple2('87583', 'アークメディア'),
			_Utils_Tuple2('87584', '公明機関紙局'),
			_Utils_Tuple2('87585', '経営実務出版'),
			_Utils_Tuple2('87586', '芸術新聞社'),
			_Utils_Tuple2('87587', '行政通信社'),
			_Utils_Tuple2('87588', '金鶏社'),
			_Utils_Tuple2('87589', '教育システム'),
			_Utils_Tuple2('87590', '近畿文学結社・豊中詩人協会'),
			_Utils_Tuple2('87591', '学伸社'),
			_Utils_Tuple2('87592', '国文学研究資料館'),
			_Utils_Tuple2('87594', 'ブレーンセンター'),
			_Utils_Tuple2('87595', '近代医学出版社'),
			_Utils_Tuple2('87596', '小林出版'),
			_Utils_Tuple2('87597', '現代出版'),
			_Utils_Tuple2('87598', 'かど創房'),
			_Utils_Tuple2('87599', '原生林'),
			_Utils_Tuple2('87600', '教会新報社'),
			_Utils_Tuple2('87601', '講談社出版サービスセンター'),
			_Utils_Tuple2('87602', '霞出版社'),
			_Utils_Tuple2('87603', '開成出版'),
			_Utils_Tuple2('87604', '駒込書房'),
			_Utils_Tuple2('87605', '経済広報センター'),
			_Utils_Tuple2('87606', '河合塾'),
			_Utils_Tuple2('87607', '暮しの編集企画室'),
			_Utils_Tuple2('87608', '水星舎'),
			_Utils_Tuple2('87609', '玄文社'),
			_Utils_Tuple2('87610', '神戸市健康教育公社'),
			_Utils_Tuple2('87611', 'かなえ書房'),
			_Utils_Tuple2('87612', '工業時事通信社'),
			_Utils_Tuple2('87613', '国際協力サービスセンター'),
			_Utils_Tuple2('87614', '北辰堂(渓水社)'),
			_Utils_Tuple2('87615', '語研'),
			_Utils_Tuple2('87616', '海風社'),
			_Utils_Tuple2('87617', '群雄社出版'),
			_Utils_Tuple2('87618', '黒船印刷'),
			_Utils_Tuple2('87619', '閣文社'),
			_Utils_Tuple2('87622', '公正取引協会'),
			_Utils_Tuple2('87623', '経国出版社'),
			_Utils_Tuple2('87624', '経済通信'),
			_Utils_Tuple2('87625', 'いるむ'),
			_Utils_Tuple2('87626', '高年齢者雇用開発協会'),
			_Utils_Tuple2('87628', '資料工学'),
			_Utils_Tuple2('87629', '家庭法律社'),
			_Utils_Tuple2('87630', '学芸教育出版社'),
			_Utils_Tuple2('87631', '経営システム研究所'),
			_Utils_Tuple2('87632', '共同出版(共同商品開発・出版部)'),
			_Utils_Tuple2('87634', 'コンプティーク'),
			_Utils_Tuple2('87635', 'コーテック'),
			_Utils_Tuple2('87636', '研文出版(山本書店出版部)'),
			_Utils_Tuple2('87637', 'コレール社'),
			_Utils_Tuple2('87638', '近畿日本ツーリスト'),
			_Utils_Tuple2('87639', '研成社'),
			_Utils_Tuple2('87640', '基督教音楽出版'),
			_Utils_Tuple2('87641', 'キョーハンブックス'),
			_Utils_Tuple2('87642', '京都国立近代美術館'),
			_Utils_Tuple2('87643', 'ケント出版'),
			_Utils_Tuple2('87644', '皇学館大学出版部'),
			_Utils_Tuple2('87645', '神奈川新聞社(かなしん出版)'),
			_Utils_Tuple2('87646', '工学研究社'),
			_Utils_Tuple2('87647', '桐書房'),
			_Utils_Tuple2('87648', '草の根出版会'),
			_Utils_Tuple2('87649', 'ケイブン出版'),
			_Utils_Tuple2('87650', '甲子書院'),
			_Utils_Tuple2('87651', 'コスカ出版'),
			_Utils_Tuple2('87652', '教育史料出版会'),
			_Utils_Tuple2('87653', '科学技術出版'),
			_Utils_Tuple2('87654', '学陽出版'),
			_Utils_Tuple2('87655', 'コナミ'),
			_Utils_Tuple2('87656', '光言社'),
			_Utils_Tuple2('87657', '企画出版天恵堂'),
			_Utils_Tuple2('87658', '近代政経研究会'),
			_Utils_Tuple2('87659', 'がくげい'),
			_Utils_Tuple2('87660', '学友社'),
			_Utils_Tuple2('87662', '光陽出版社'),
			_Utils_Tuple2('87663', '郷土出版社(松本)'),
			_Utils_Tuple2('87664', '郷土出版社(岐阜)'),
			_Utils_Tuple2('87665', '郷土出版社(静岡)'),
			_Utils_Tuple2('87666', 'コスモ・テン'),
			_Utils_Tuple2('87667', '海洋架橋調査会'),
			_Utils_Tuple2('87668', 'つむぎ出版'),
			_Utils_Tuple2('87669', '学書'),
			_Utils_Tuple2('87670', '郷土出版社(名古屋)'),
			_Utils_Tuple2('87671', '虔十社'),
			_Utils_Tuple2('87672', '雲母書房'),
			_Utils_Tuple2('87674', '建設総合サービス'),
			_Utils_Tuple2('87675', '銀座屋出版社'),
			_Utils_Tuple2('87676', '工芸学会'),
			_Utils_Tuple2('87677', 'ケイ・ティー・ケイ学術図書出版'),
			_Utils_Tuple2('87678', '感性学院'),
			_Utils_Tuple2('87679', 'ガイア'),
			_Utils_Tuple2('87681', '鴻盟社'),
			_Utils_Tuple2('87682', '京都カルチャー出版'),
			_Utils_Tuple2('87683', 'コスモ出版'),
			_Utils_Tuple2('87684', 'パワーソフト'),
			_Utils_Tuple2('87685', '救世軍出版供給部'),
			_Utils_Tuple2('87686', 'コスモヘイアン'),
			_Utils_Tuple2('87689', 'フットワーク出版'),
			_Utils_Tuple2('87690', '五月社'),
			_Utils_Tuple2('87691', 'くらしのリサーチセンター'),
			_Utils_Tuple2('87694', '北見市(市立北見図書館)'),
			_Utils_Tuple2('87695', 'ゲオ'),
			_Utils_Tuple2('87696', 'セブンエイト'),
			_Utils_Tuple2('87698', '京都大学学術出版会'),
			_Utils_Tuple2('87700', '国際大学日米関係研究所'),
			_Utils_Tuple2('87701', '京王出版'),
			_Utils_Tuple2('87702', '郷土芸能刊行会'),
			_Utils_Tuple2('87703', 'のべる出版'),
			_Utils_Tuple2('87703', 'のべる出版'),
			_Utils_Tuple2('87704', 'コミックセラーズ'),
			_Utils_Tuple2('87705', '国際言語教育研究所'),
			_Utils_Tuple2('87706', '現代短歌分類辞典刊行所'),
			_Utils_Tuple2('87707', '湖南会'),
			_Utils_Tuple2('87708', 'ケィ・ディー・シー'),
			_Utils_Tuple2('87709', 'ＫＳＳ出版事業部'),
			_Utils_Tuple2('87710', '協和企画大阪本社'),
			_Utils_Tuple2('87712', 'クレスト社'),
			_Utils_Tuple2('87713', '海外経済調査会'),
			_Utils_Tuple2('87714', '影書房'),
			_Utils_Tuple2('87716', '金融タイムス社'),
			_Utils_Tuple2('87717', '五山堂書店'),
			_Utils_Tuple2('87718', '国際言語科学出版会'),
			_Utils_Tuple2('87720', '熊谷印刷出版部'),
			_Utils_Tuple2('87722', '子供の教育社'),
			_Utils_Tuple2('87724', '海王社'),
			_Utils_Tuple2('87726', '国際教育情報センター'),
			_Utils_Tuple2('87728', '幻冬舎'),
			_Utils_Tuple2('87729', 'クラリオンソフト'),
			_Utils_Tuple2('87734', 'コアマガジン'),
			_Utils_Tuple2('87738', '紀伊國屋書店和書部'),
			_Utils_Tuple2('87740', '学習ブックス'),
			_Utils_Tuple2('87742', '近現代資料刊行会'),
			_Utils_Tuple2('87746', '木魂社'),
			_Utils_Tuple2('87747', '広美'),
			_Utils_Tuple2('87749', '構造システムミニワールド'),
			_Utils_Tuple2('87750', 'カトリック中央協議会'),
			_Utils_Tuple2('87753', '幸福の科学経典部'),
			_Utils_Tuple2('87756', '高知新聞企業'),
			_Utils_Tuple2('87757', '気象業務支援センター'),
			_Utils_Tuple2('87759', '国土技術研究センター'),
			_Utils_Tuple2('87761', '光進社'),
			_Utils_Tuple2('87767', '桐原ユニ'),
			_Utils_Tuple2('87768', '教育新聞社'),
			_Utils_Tuple2('87769', '関西社会経済研究所'),
			_Utils_Tuple2('87770', 'きんのくわがた社'),
			_Utils_Tuple2('87772', '弘毅書林'),
			_Utils_Tuple2('87773', '開発教育協議会'),
			_Utils_Tuple2('87774', 'がんばる舎'),
			_Utils_Tuple2('87776', '錦栄書房'),
			_Utils_Tuple2('87779', '後藤商会'),
			_Utils_Tuple2('87780', '九州大学応用力学研究所'),
			_Utils_Tuple2('87781', 'コスモス'),
			_Utils_Tuple2('87787', '交友プランニングセンター'),
			_Utils_Tuple2('87789', 'コジマ印刷'),
			_Utils_Tuple2('87793', '教育新聞社'),
			_Utils_Tuple2('87794', '協和企画編集出版本部'),
			_Utils_Tuple2('87796', '銀座書館'),
			_Utils_Tuple2('87800', '蝸牛新社'),
			_Utils_Tuple2('87801', '国際協力推進協会'),
			_Utils_Tuple2('87802', '紀伊國屋書店コンテンツ営業部'),
			_Utils_Tuple2('87803', '国立科学博物館'),
			_Utils_Tuple2('87889', '埼玉新聞社出版局'),
			_Utils_Tuple2('87890', 'さいたま豆本の会'),
			_Utils_Tuple2('87891', 'さきたま出版会'),
			_Utils_Tuple2('87893', '作品社'),
			_Utils_Tuple2('87894', '作文社'),
			_Utils_Tuple2('87895', 'サクラクレパス出版部'),
			_Utils_Tuple2('87896', 'ささら書房'),
			_Utils_Tuple2('87897', 'さつき書院'),
			_Utils_Tuple2('87898', '奢バ都館'),
			_Utils_Tuple2('87899', 'サムライ出版'),
			_Utils_Tuple2('87900', 'サラブレッド血統センター'),
			_Utils_Tuple2('87901', 'さろるん書房'),
			_Utils_Tuple2('87902', 'サワズ出版'),
			_Utils_Tuple2('87903', '山陰中央新報社'),
			_Utils_Tuple2('87904', '三栄書房'),
			_Utils_Tuple2('87905', '三芽'),
			_Utils_Tuple2('87906', '三学出版'),
			_Utils_Tuple2('87907', '山雅房'),
			_Utils_Tuple2('87908', '産業開発社'),
			_Utils_Tuple2('87909', '産経新聞メディックス'),
			_Utils_Tuple2('87910', '産業計画センター'),
			_Utils_Tuple2('87911', '産業新潮社'),
			_Utils_Tuple2('87912', '産業用水調査会'),
			_Utils_Tuple2('87913', '産労総合研究所'),
			_Utils_Tuple2('87914', '三景'),
			_Utils_Tuple2('87916', 'サンケイ新聞プロダクション'),
			_Utils_Tuple2('87917', '全研本社'),
			_Utils_Tuple2('87918', '三光出版社'),
			_Utils_Tuple2('87919', '三交社'),
			_Utils_Tuple2('87920', '産心社'),
			_Utils_Tuple2('87921', '三信図書'),
			_Utils_Tuple2('87922', '三成書房'),
			_Utils_Tuple2('87923', '三省堂書店'),
			_Utils_Tuple2('87924', '青丘文化社'),
			_Utils_Tuple2('87925', '燦葉出版社'),
			_Utils_Tuple2('87926', '山文社'),
			_Utils_Tuple2('87927', '讃文社'),
			_Utils_Tuple2('87928', '三宝出版'),
			_Utils_Tuple2('87930', '三洋出版貿易'),
			_Utils_Tuple2('87931', 'サンマーク'),
			_Utils_Tuple2('87932', '財界研究所'),
			_Utils_Tuple2('87933', '財界さっぽろ'),
			_Utils_Tuple2('87934', '財界展望新社'),
			_Utils_Tuple2('87935', '在家佛教協会'),
			_Utils_Tuple2('87936', '財務出版'),
			_Utils_Tuple2('87937', 'ＣＬＣ出版'),
			_Utils_Tuple2('87938', '滋賀民俗学会'),
			_Utils_Tuple2('87939', '至言社'),
			_Utils_Tuple2('87940', '紫紅社'),
			_Utils_Tuple2('87941', '試行出版部'),
			_Utils_Tuple2('87942', '市場新聞社'),
			_Utils_Tuple2('87943', '自然館新社'),
			_Utils_Tuple2('87944', '七月堂'),
			_Utils_Tuple2('87945', '静岡県茶業会議所'),
			_Utils_Tuple2('87946', '静岡谷島屋'),
			_Utils_Tuple2('87947', 'アース工房'),
			_Utils_Tuple2('87949', '篠原出版'),
			_Utils_Tuple2('87950', '清水弘文堂書房'),
			_Utils_Tuple2('87951', '社会主義協会出版局'),
			_Utils_Tuple2('87952', '社会保険広報社'),
			_Utils_Tuple2('87953', '社会保険新報社'),
			_Utils_Tuple2('87954', '法研'),
			_Utils_Tuple2('87955', '写真化学'),
			_Utils_Tuple2('87956', '写真工業出版社'),
			_Utils_Tuple2('87957', '秀英書房'),
			_Utils_Tuple2('87958', '週刊釣りサンデー'),
			_Utils_Tuple2('87959', '修学社'),
			_Utils_Tuple2('87960', '宗教心理出版'),
			_Utils_Tuple2('87961', '修光社'),
			_Utils_Tuple2('87962', '秀潤社'),
			_Utils_Tuple2('87963', '秀文インターナショナル'),
			_Utils_Tuple2('87964', '修文館出版'),
			_Utils_Tuple2('87965', '秀文出版'),
			_Utils_Tuple2('87967', '修養団教育事業部'),
			_Utils_Tuple2('87968', '出版開発社'),
			_Utils_Tuple2('87969', '出版研'),
			_Utils_Tuple2('87970', '出版協同社(海人社)'),
			_Utils_Tuple2('87971', '出版東京'),
			_Utils_Tuple2('87972', '出版同人'),
			_Utils_Tuple2('87973', '省エネルギーセンター'),
			_Utils_Tuple2('87974', '松香堂書店'),
			_Utils_Tuple2('87975', '書学院出版部'),
			_Utils_Tuple2('87976', '尚学社'),
			_Utils_Tuple2('87977', '商工政策史刊行会'),
			_Utils_Tuple2('87978', '象山社'),
			_Utils_Tuple2('87979', '昭森社'),
			_Utils_Tuple2('87981', '少年写真新聞社'),
			_Utils_Tuple2('87982', '彰文館書店'),
			_Utils_Tuple2('87983', '昌文社'),
			_Utils_Tuple2('87984', '松籟社'),
			_Utils_Tuple2('87985', '昭和出版'),
			_Utils_Tuple2('87986', '昭和図書出版'),
			_Utils_Tuple2('87987', '初等英語研究社'),
			_Utils_Tuple2('87988', '食肉通信社'),
			_Utils_Tuple2('87989', '食品研究社'),
			_Utils_Tuple2('87990', '食品産業新聞社'),
			_Utils_Tuple2('87991', '食品資材研究会'),
			_Utils_Tuple2('87992', '食品新聞社'),
			_Utils_Tuple2('87993', '食品出版社'),
			_Utils_Tuple2('87994', '食品と科学社'),
			_Utils_Tuple2('87995', '書肆山田'),
			_Utils_Tuple2('87996', 'アトラス２１'),
			_Utils_Tuple2('87997', '書評年報刊行会'),
			_Utils_Tuple2('87998', '白玉書房'),
			_Utils_Tuple2('88000', '新企画出版社'),
			_Utils_Tuple2('88001', '新月社'),
			_Utils_Tuple2('88002', '新興医学出版社'),
			_Utils_Tuple2('88003', '真興交易医書出版'),
			_Utils_Tuple2('88004', '新興出版社'),
			_Utils_Tuple2('88005', '新小説社'),
			_Utils_Tuple2('88006', '新実業出版社'),
			_Utils_Tuple2('88007', '新ジャーナル社'),
			_Utils_Tuple2('88008', '新宿書房'),
			_Utils_Tuple2('88009', '真珠書院'),
			_Utils_Tuple2('88010', '新栄出版'),
			_Utils_Tuple2('88011', '新生出版'),
			_Utils_Tuple2('88012', '新世研'),
			_Utils_Tuple2('88013', '新星書房'),
			_Utils_Tuple2('88014', 'オーキッド社'),
			_Utils_Tuple2('88015', '新装飾'),
			_Utils_Tuple2('88016', '新体育社'),
			_Utils_Tuple2('88017', '新短歌社'),
			_Utils_Tuple2('88018', '新地書房'),
			_Utils_Tuple2('88019', '尚文出版'),
			_Utils_Tuple2('88020', '新塔社'),
			_Utils_Tuple2('88021', '新涛社'),
			_Utils_Tuple2('88022', '新東洋出版社'),
			_Utils_Tuple2('88023', '本の泉社'),
			_Utils_Tuple2('88024', '新日本教育図書'),
			_Utils_Tuple2('88025', '新日本研究所'),
			_Utils_Tuple2('88026', '新日本スポーツ連盟'),
			_Utils_Tuple2('88027', '新日本鋳鍛造協会'),
			_Utils_Tuple2('88028', '新農林社'),
			_Utils_Tuple2('88029', 'マスコミ市民(双柿舎)'),
			_Utils_Tuple2('88030', '新美容出版'),
			_Utils_Tuple2('88031', '新文化通信社'),
			_Utils_Tuple2('88032', '深夜叢書社'),
			_Utils_Tuple2('88033', '新有堂'),
			_Utils_Tuple2('88035', '新和出版'),
			_Utils_Tuple2('88036', 'ジェミニ'),
			_Utils_Tuple2('88037', '自治体研究社'),
			_Utils_Tuple2('88038', '実業公報社'),
			_Utils_Tuple2('88039', '実業図書'),
			_Utils_Tuple2('88040', '実業の世界社'),
			_Utils_Tuple2('88041', '自動車産業研究所'),
			_Utils_Tuple2('88042', '政経研究所'),
			_Utils_Tuple2('88043', 'じゃこめてい出版'),
			_Utils_Tuple2('88044', 'ジャテック出版'),
			_Utils_Tuple2('88045', 'ジャパンインダストリアルパブリシング'),
			_Utils_Tuple2('88046', 'ジャパンクッキングセンター'),
			_Utils_Tuple2('88048', 'ジャパン・プレス・サービス'),
			_Utils_Tuple2('88049', 'ジャパンマシニスト社'),
			_Utils_Tuple2('88050', 'ジャパン・ミリタリー・レビュー'),
			_Utils_Tuple2('88051', '草楽社'),
			_Utils_Tuple2('88052', '自由企画・出版'),
			_Utils_Tuple2('88053', '重化学工業通信社'),
			_Utils_Tuple2('88055', '自由書房'),
			_Utils_Tuple2('88056', '情報科学研究所'),
			_Utils_Tuple2('88057', '情報産業新聞社'),
			_Utils_Tuple2('88058', '上毛新聞社出版局'),
			_Utils_Tuple2('88059', '而立書房'),
			_Utils_Tuple2('88060', '新日本文学会'),
			_Utils_Tuple2('88061', 'ＣアンドＰ'),
			_Utils_Tuple2('88062', 'ＪＣＡ出版'),
			_Utils_Tuple2('880637966', '宝島社'),
			_Utils_Tuple2('88064', '水交社'),
			_Utils_Tuple2('88065', '水曜社'),
			_Utils_Tuple2('88066', '面影橋出版'),
			_Utils_Tuple2('88067', 'スイングジャーナル社'),
			_Utils_Tuple2('88068', 'すぐ書房'),
			_Utils_Tuple2('88069', '鈴木書店'),
			_Utils_Tuple2('88070', '世界出版販売'),
			_Utils_Tuple2('88071', 'すずらん書房'),
			_Utils_Tuple2('88072', 'スタジオＶＩＣ'),
			_Utils_Tuple2('88073', 'ステレオサウンド'),
			_Utils_Tuple2('88075', '諏訪文化会館出版部'),
			_Utils_Tuple2('88077', '聖恵授産所出版部'),
			_Utils_Tuple2('88078', '青雲書院'),
			_Utils_Tuple2('88079', '青雲書房'),
			_Utils_Tuple2('88080', '聖歌の友社'),
			_Utils_Tuple2('88081', '成学館'),
			_Utils_Tuple2('88082', '政経社'),
			_Utils_Tuple2('88083', 'セイケイ出版社'),
			_Utils_Tuple2('88084', '青巧社'),
			_Utils_Tuple2('88086', '成甲書房'),
			_Utils_Tuple2('88087', '生産技術振興協会'),
			_Utils_Tuple2('88088', '生産技術センター新社'),
			_Utils_Tuple2('88089', '日本新エルサレム教会静思社'),
			_Utils_Tuple2('88090', '青少年問題研究会'),
			_Utils_Tuple2('88091', '正進社'),
			_Utils_Tuple2('88093', '政治経済史学会'),
			_Utils_Tuple2('88094', '政治広報センター'),
			_Utils_Tuple2('88095', '青磁社'),
			_Utils_Tuple2('88096', 'さんが出版'),
			_Utils_Tuple2('88097', '青潮社'),
			_Utils_Tuple2('88098', '西東書房'),
			_Utils_Tuple2('88099', '青銅社'),
			_Utils_Tuple2('88100', '青年出版社'),
			_Utils_Tuple2('88101', 'せいび広報社'),
			_Utils_Tuple2('88102', '精文館'),
			_Utils_Tuple2('88103', '晴文社'),
			_Utils_Tuple2('88104', '政文堂'),
			_Utils_Tuple2('88105', '青也コミュニケーションズ'),
			_Utils_Tuple2('88106', '清隆社'),
			_Utils_Tuple2('88107', '正林書院'),
			_Utils_Tuple2('88109', '世界経済調査会'),
			_Utils_Tuple2('88110', '世界聖典刊行協会'),
			_Utils_Tuple2('88111', '世界書房'),
			_Utils_Tuple2('88112', '世界の動き社'),
			_Utils_Tuple2('88113', '世界文庫'),
			_Utils_Tuple2('88114', 'エースアート'),
			_Utils_Tuple2('88115', '関書院新社'),
			_Utils_Tuple2('88116', '績文堂出版'),
			_Utils_Tuple2('88118', '瀬戸内物産出版部'),
			_Utils_Tuple2('88120', '繊維技術研究社'),
			_Utils_Tuple2('88121', '繊維研究社'),
			_Utils_Tuple2('88122', 'センイ・ジヤァナル'),
			_Utils_Tuple2('88123', '戦旗復刻版刊行会'),
			_Utils_Tuple2('88124', '繊研新聞社'),
			_Utils_Tuple2('88125', '専修大学出版局'),
			_Utils_Tuple2('88126', '千城'),
			_Utils_Tuple2('88127', '千人書房'),
			_Utils_Tuple2('88128', 'セントラル・プレス'),
			_Utils_Tuple2('88129', '船舶技術協会'),
			_Utils_Tuple2('88130', '専門図書館協議会'),
			_Utils_Tuple2('88131', 'テレビ朝日'),
			_Utils_Tuple2('88132', '全国学校給食協会'),
			_Utils_Tuple2('88133', '全国治水砂防協会'),
			_Utils_Tuple2('88134', '全国障害者問題研究会出版部'),
			_Utils_Tuple2('88136', '国鉄身障者協会'),
			_Utils_Tuple2('88137', '全国農村教育協会'),
			_Utils_Tuple2('88138', '全国林業改良普及協会'),
			_Utils_Tuple2('88139', '前進社'),
			_Utils_Tuple2('88140', '全日本水産写真資料協会'),
			_Utils_Tuple2('88141', '全日本労働総同盟'),
			_Utils_Tuple2('88142', '創英社(三省堂書店)'),
			_Utils_Tuple2('88143', '蒼海出版'),
			_Utils_Tuple2('88144', '創芸社'),
			_Utils_Tuple2('88145', '草月文化事業'),
			_Utils_Tuple2('88146', '創言社'),
			_Utils_Tuple2('88147', '総合調査研究所'),
			_Utils_Tuple2('88149', '綜合包装出版'),
			_Utils_Tuple2('88150', '綜合ユニコム'),
			_Utils_Tuple2('88151', '創思社'),
			_Utils_Tuple2('88152', '相似象学会'),
			_Utils_Tuple2('88154', '創世記'),
			_Utils_Tuple2('88155', '創造'),
			_Utils_Tuple2('88156', '創造社'),
			_Utils_Tuple2('88157', '創造社'),
			_Utils_Tuple2('88158', '創造出版'),
			_Utils_Tuple2('88159', '創造書房'),
			_Utils_Tuple2('88160', '曹洞宗宗務庁'),
			_Utils_Tuple2('88162', 'ソニー企業'),
			_Utils_Tuple2('88163', '草風社'),
			_Utils_Tuple2('88164', '双文社出版'),
			_Utils_Tuple2('88165', '創林社'),
			_Utils_Tuple2('88166', 'ソーテック社'),
			_Utils_Tuple2('88167', 'Ｓｏｐｈｉａ・Ｕｎｉｖｅｒｓｉｔｙ上智大学'),
			_Utils_Tuple2('88168', '上智大学比較文化研究所'),
			_Utils_Tuple2('88169', 'そしえて'),
			_Utils_Tuple2('88170', '素人社'),
			_Utils_Tuple2('88171', 'ソフトサイエンス社'),
			_Utils_Tuple2('88172', '造形社'),
			_Utils_Tuple2('88174', '三愛会'),
			_Utils_Tuple2('88175', 'セメント協会'),
			_Utils_Tuple2('88176', '創隆社'),
			_Utils_Tuple2('88177', '財経詳報社'),
			_Utils_Tuple2('88178', '市民出版社'),
			_Utils_Tuple2('88179', '青山社'),
			_Utils_Tuple2('88180', '彩光社'),
			_Utils_Tuple2('88181', '総合科学出版'),
			_Utils_Tuple2('88182', '禅文化研究所'),
			_Utils_Tuple2('88183', '誠光堂書籍'),
			_Utils_Tuple2('88184', '親和会'),
			_Utils_Tuple2('88185', 'セブン新社'),
			_Utils_Tuple2('88186', '相互印刷'),
			_Utils_Tuple2('88187', '総美社'),
			_Utils_Tuple2('88189', '至芸出版社'),
			_Utils_Tuple2('88190', '清至書院'),
			_Utils_Tuple2('88191', 'プラネット出版'),
			_Utils_Tuple2('88192', '新聞ダイジェスト社'),
			_Utils_Tuple2('88193', '札幌商工会議所'),
			_Utils_Tuple2('88194', '清栄社'),
			_Utils_Tuple2('88195', '誠文図書'),
			_Utils_Tuple2('88196', '世紀社'),
			_Utils_Tuple2('88197', '山陽新聞社出版部'),
			_Utils_Tuple2('88199', '新声社'),
			_Utils_Tuple2('88200', '碩文社'),
			_Utils_Tuple2('88201', '世界日報社'),
			_Utils_Tuple2('88202', '彩流社'),
			_Utils_Tuple2('88203', 'サンデー社'),
			_Utils_Tuple2('88204', 'サン・プランニング'),
			_Utils_Tuple2('88205', '全国統計協会連合会'),
			_Utils_Tuple2('88206', '社会科学研究所'),
			_Utils_Tuple2('88208', '市井社'),
			_Utils_Tuple2('88209', '湘南出版社'),
			_Utils_Tuple2('88210', '新数社'),
			_Utils_Tuple2('88211', '新世紀書房'),
			_Utils_Tuple2('88213', '綜文館'),
			_Utils_Tuple2('88214', '世界経済情報サービス'),
			_Utils_Tuple2('88215', '食品需給研究センター'),
			_Utils_Tuple2('88216', '聖母の騎士社'),
			_Utils_Tuple2('88217', 'ジャスト出版'),
			_Utils_Tuple2('88218', '島津書房'),
			_Utils_Tuple2('88219', 'サニー出版'),
			_Utils_Tuple2('88220', 'ジャパンブックスサービス'),
			_Utils_Tuple2('88221', '新世代システムセンター'),
			_Utils_Tuple2('88222', '秀央社'),
			_Utils_Tuple2('88223', '広樹社'),
			_Utils_Tuple2('88224', '新芸術社'),
			_Utils_Tuple2('88225', '三昧堂'),
			_Utils_Tuple2('88226', '鈴木教育ソフト'),
			_Utils_Tuple2('88227', 'ジャパンプロス'),
			_Utils_Tuple2('88228', '新聞月報社'),
			_Utils_Tuple2('88230', '三公社'),
			_Utils_Tuple2('88231', 'シーエムシー出版'),
			_Utils_Tuple2('88232', '島田音楽出版'),
			_Utils_Tuple2('88233', '青英舎'),
			_Utils_Tuple2('88235', 'システムソフト'),
			_Utils_Tuple2('88236', '四季出版'),
			_Utils_Tuple2('88237', '情報開発研究所'),
			_Utils_Tuple2('88238', 'サンケイ新聞写真ニュースセンター'),
			_Utils_Tuple2('88239', 'スケール'),
			_Utils_Tuple2('88240', 'セイコー社'),
			_Utils_Tuple2('88241', '尚友出版'),
			_Utils_Tuple2('88242', '新葉社'),
			_Utils_Tuple2('88243', '全国大学生活協同組合連合会'),
			_Utils_Tuple2('88244', 'サイエンテック'),
			_Utils_Tuple2('88245', '創現社出版'),
			_Utils_Tuple2('88247', '奨学社'),
			_Utils_Tuple2('88248', '社会経済国民会議'),
			_Utils_Tuple2('88251', '新成'),
			_Utils_Tuple2('88252', 'すばる書房'),
			_Utils_Tuple2('88253', '清話会出版'),
			_Utils_Tuple2('88254', '青山書房'),
			_Utils_Tuple2('88255', '飛鳥出版室'),
			_Utils_Tuple2('88257', '新企画出版局'),
			_Utils_Tuple2('88258', '青龍社'),
			_Utils_Tuple2('88259', '生活ジャーナル'),
			_Utils_Tuple2('88260', '三協法規出版'),
			_Utils_Tuple2('88262', '情報科学出版社'),
			_Utils_Tuple2('88263', 'さーくる社'),
			_Utils_Tuple2('88264', '草炎社'),
			_Utils_Tuple2('88265', '秀作社出版'),
			_Utils_Tuple2('88266', '静雲堂'),
			_Utils_Tuple2('88267', '時空出版'),
			_Utils_Tuple2('88269', '新風書房'),
			_Utils_Tuple2('88270', '昭和印刷出版'),
			_Utils_Tuple2('88272', '斯文堂'),
			_Utils_Tuple2('88273', '草輝出版'),
			_Utils_Tuple2('88274', '聖公会出版'),
			_Utils_Tuple2('88276', '西武百貨店'),
			_Utils_Tuple2('88278', '秋桜社'),
			_Utils_Tuple2('88279', '出版サービスセンター'),
			_Utils_Tuple2('88280', 'サン電子'),
			_Utils_Tuple2('88281', '新生運動'),
			_Utils_Tuple2('88283', 'ジェー・アール・アール'),
			_Utils_Tuple2('88284', 'ジュラ出版局'),
			_Utils_Tuple2('88285', 'ジャパンホームビデオ'),
			_Utils_Tuple2('88286', '下野新聞社'),
			_Utils_Tuple2('88287', 'スピリッツ映像出版社'),
			_Utils_Tuple2('88288', 'サクセス・ビデオ・コミュニティー'),
			_Utils_Tuple2('88289', '参陽社'),
			_Utils_Tuple2('88290', '騒人社'),
			_Utils_Tuple2('88291', '蒼樹出版'),
			_Utils_Tuple2('88292', 'スフィンクス'),
			_Utils_Tuple2('88293', '出版芸術社'),
			_Utils_Tuple2('88295', 'シーティーエー'),
			_Utils_Tuple2('88296', '青人社'),
			_Utils_Tuple2('88297', 'シー・ディー・アイ'),
			_Utils_Tuple2('88298', '佐賀新聞社'),
			_Utils_Tuple2('88299', '人の森出版'),
			_Utils_Tuple2('88300', 'ショウワノート'),
			_Utils_Tuple2('88301', '禅プランニングアンドプロデュース'),
			_Utils_Tuple2('88303', '三元社'),
			_Utils_Tuple2('88304', '七賢出版'),
			_Utils_Tuple2('88304', '七賢出版'),
			_Utils_Tuple2('88307', 'サザンクロスビデオアーツ'),
			_Utils_Tuple2('88309', 'ジャストシステム出版'),
			_Utils_Tuple2('88310', '資本市場研究会'),
			_Utils_Tuple2('88311', '総合ライフ出版'),
			_Utils_Tuple2('88314', 'スターリング'),
			_Utils_Tuple2('88316', '静岡出版'),
			_Utils_Tuple2('88318', '産報出版'),
			_Utils_Tuple2('88320', '三五館'),
			_Utils_Tuple2('88321', 'ジャパン・ミックス'),
			_Utils_Tuple2('88322', '三友社出版'),
			_Utils_Tuple2('88323', '草風館'),
			_Utils_Tuple2('88324', '専門教育出版'),
			_Utils_Tuple2('88325', 'サンライズ出版'),
			_Utils_Tuple2('88326', '笹川平和財団'),
			_Utils_Tuple2('88327', '全経出版英光社'),
			_Utils_Tuple2('88328', 'そうぶん社出版'),
			_Utils_Tuple2('88329', 'サイマル・インターナショナル'),
			_Utils_Tuple2('88331', '住宅総合研究財団'),
			_Utils_Tuple2('88334', '修学社'),
			_Utils_Tuple2('88336', 'セスコ・ジャパン'),
			_Utils_Tuple2('88337', 'ソシム'),
			_Utils_Tuple2('88340', '創森社'),
			_Utils_Tuple2('88341', '創英出版'),
			_Utils_Tuple2('88344', '石風社'),
			_Utils_Tuple2('88345', '不知火書房'),
			_Utils_Tuple2('88349', '情創'),
			_Utils_Tuple2('88351', '創樹社'),
			_Utils_Tuple2('88361', '三恵社'),
			_Utils_Tuple2('88363', '浄土宗出版室'),
			_Utils_Tuple2('88365', 'サニーサイドミュージック'),
			_Utils_Tuple2('88366', 'シー・エム・ゼット'),
			_Utils_Tuple2('88368', '日本地図観光社'),
			_Utils_Tuple2('88370', 'スコラメディア'),
			_Utils_Tuple2('88371', 'サーベル社'),
			_Utils_Tuple2('88372', '社会経済生産性本部生産性労働情報センター'),
			_Utils_Tuple2('88374', '書肆青樹社'),
			_Utils_Tuple2('88379', '青林工藝舎'),
			_Utils_Tuple2('88389', 'サンウェイ出版'),
			_Utils_Tuple2('88390', '上武印刷'),
			_Utils_Tuple2('88391', '消防庁消防研究所'),
			_Utils_Tuple2('88394', '情報都市研究所'),
			_Utils_Tuple2('88396', '埼玉県戸田・蕨保健所'),
			_Utils_Tuple2('88402', 'サクソンコートジャパン'),
			_Utils_Tuple2('88406', '自費出版図書館'),
			_Utils_Tuple2('88408', '生活と経済'),
			_Utils_Tuple2('88409', '鈴木教育出版'),
			_Utils_Tuple2('88410', '新聞資料出版'),
			_Utils_Tuple2('88412', '篠原出版新社'),
			_Utils_Tuple2('88415', '青雲出版'),
			_Utils_Tuple2('88417', '創価学会'),
			_Utils_Tuple2('88419', '埼玉福祉会'),
			_Utils_Tuple2('88420', 'ＳＥＭＩジャパン'),
			_Utils_Tuple2('88458', '体育とスポーツ出版社'),
			_Utils_Tuple2('88459', '大雅堂'),
			_Utils_Tuple2('88461', '大成社'),
			_Utils_Tuple2('88462', '大盛堂書店出版部'),
			_Utils_Tuple2('88463', '大盛堂書房'),
			_Utils_Tuple2('88464', '泰文堂'),
			_Utils_Tuple2('88465', 'タイムス'),
			_Utils_Tuple2('88466', '太陽企画出版'),
			_Utils_Tuple2('88467', '太洋社'),
			_Utils_Tuple2('88468', '太陽社'),
			_Utils_Tuple2('88469', '太陽出版'),
			_Utils_Tuple2('884708121', '泰流社'),
			_Utils_Tuple2('88471', '高木書房'),
			_Utils_Tuple2('88472', 'タキイ種苗出版部'),
			_Utils_Tuple2('88473', 'たくみ書房'),
			_Utils_Tuple2('88474', '致知出版社'),
			_Utils_Tuple2('884758124', '竹書房'),
			_Utils_Tuple2('88476', '詳文社'),
			_Utils_Tuple2('88477', '千秋社'),
			_Utils_Tuple2('88478', '建具工芸研究所'),
			_Utils_Tuple2('88479', '田中直染料店'),
			_Utils_Tuple2('88480', 'タナベ経営'),
			_Utils_Tuple2('884818127', 'たま出版'),
			_Utils_Tuple2('884828118', '太郎次郎社'),
			_Utils_Tuple2('88483', '探究社'),
			_Utils_Tuple2('88484', '第一公報社'),
			_Utils_Tuple2('88485', '第一書店出版部'),
			_Utils_Tuple2('88486', '大学通信'),
			_Utils_Tuple2('88487', '大学堂書店'),
			_Utils_Tuple2('88488', '第三紀層の会出版センター'),
			_Utils_Tuple2('88489', '第三出版'),
			_Utils_Tuple2('88490', '大東急記念文庫'),
			_Utils_Tuple2('88491', '大東塾出版部'),
			_Utils_Tuple2('88493', 'ダイナミックセラーズ出版'),
			_Utils_Tuple2('88494', 'ダイヤモンド・ビッグ社'),
			_Utils_Tuple2('88495', 'ダイヤモンド・フリードマン社'),
			_Utils_Tuple2('88496', 'ダイレック'),
			_Utils_Tuple2('88498', '大和文庫'),
			_Utils_Tuple2('88499', '千種正文館書店'),
			_Utils_Tuple2('88500', 'チクサン出版社'),
			_Utils_Tuple2('88501', '地人書房'),
			_Utils_Tuple2('88502', '知能教材開発センター'),
			_Utils_Tuple2('88503', '地湧社'),
			_Utils_Tuple2('88504', '地方財務協会'),
			_Utils_Tuple2('88505', '地方史研究所'),
			_Utils_Tuple2('88506', '茶と美舎'),
			_Utils_Tuple2('88507', '茶道之研究社'),
			_Utils_Tuple2('88508', 'チャネラー'),
			_Utils_Tuple2('88509', 'チーム医療'),
			_Utils_Tuple2('88510', 'デンタルダイヤモンド社'),
			_Utils_Tuple2('88511', '中央公論事業出版'),
			_Utils_Tuple2('88512', '中央社'),
			_Utils_Tuple2('88513', '中央出版企画'),
			_Utils_Tuple2('88514', '中央書院(新宿)'),
			_Utils_Tuple2('88515', '中央大学生協出版局'),
			_Utils_Tuple2('88516', '中国漢方'),
			_Utils_Tuple2('88517', '中国新聞社'),
			_Utils_Tuple2('88518', '中小企業診断協会'),
			_Utils_Tuple2('88519', '中日出版社'),
			_Utils_Tuple2('88520', '中部経済新聞社'),
			_Utils_Tuple2('88521', '中部日本教育文化会'),
			_Utils_Tuple2('88522', '朝鮮青年社'),
			_Utils_Tuple2('88523', '潮汐社'),
			_Utils_Tuple2('88524', '長風社'),
			_Utils_Tuple2('88525', '潮流出版社'),
			_Utils_Tuple2('88526', '著作権情報センター'),
			_Utils_Tuple2('88527', '地歴社'),
			_Utils_Tuple2('88528', '通産資料調査会'),
			_Utils_Tuple2('88529', '通産資料調査会'),
			_Utils_Tuple2('88530', '土筆社'),
			_Utils_Tuple2('88531', '土筆書房'),
			_Utils_Tuple2('88533', '中央企画'),
			_Utils_Tuple2('88534', '釣の友社'),
			_Utils_Tuple2('88535', 'つむぎ社'),
			_Utils_Tuple2('88536', 'つり人社'),
			_Utils_Tuple2('88537', 'テアトロ'),
			_Utils_Tuple2('88538', 'テクノ'),
			_Utils_Tuple2('88539', '鉄道現業社'),
			_Utils_Tuple2('88540', '鉄道史資料保存会'),
			_Utils_Tuple2('88541', '日本鉄道電気技術協会'),
			_Utils_Tuple2('88542', '鉄道図書刊行会'),
			_Utils_Tuple2('88543', '鉄道日本社'),
			_Utils_Tuple2('88544', '転轍社'),
			_Utils_Tuple2('88545', 'てんびん社'),
			_Utils_Tuple2('88546', '展望社'),
			_Utils_Tuple2('88547', '天満堂書店'),
			_Utils_Tuple2('88548', '電気車研究会'),
			_Utils_Tuple2('88549', '電気通信協会'),
			_Utils_Tuple2('88550', '電子技術出版'),
			_Utils_Tuple2('88552', '電子情報通信学会'),
			_Utils_Tuple2('88553', '電通'),
			_Utils_Tuple2('88554', '電波新聞社'),
			_Utils_Tuple2('88555', 'エネルギーフォーラム'),
			_Utils_Tuple2('88556', 'ＴＢＳ出版会'),
			_Utils_Tuple2('88557', 'ＤＩフォト企画'),
			_Utils_Tuple2('88558', 'ＴＢデザイン研究所'),
			_Utils_Tuple2('88559', 'ダイゴー'),
			_Utils_Tuple2('88560', '東栄'),
			_Utils_Tuple2('88561', '東奥日報社'),
			_Utils_Tuple2('88562', '桐華社'),
			_Utils_Tuple2('88563', '東京医学社'),
			_Utils_Tuple2('88564', '東京音楽社'),
			_Utils_Tuple2('88566', '東京建築士会'),
			_Utils_Tuple2('88567', '東京交通新聞社'),
			_Utils_Tuple2('88568', '東京国際学園出版部'),
			_Utils_Tuple2('88569', '東京子ども図書館'),
			_Utils_Tuple2('88571', '東京出版センター'),
			_Utils_Tuple2('88572', '東京証券取引所企画調査部'),
			_Utils_Tuple2('88573', '東京書館'),
			_Utils_Tuple2('88574', '東京書店'),
			_Utils_Tuple2('88575', '東京書房社'),
			_Utils_Tuple2('88576', '東京白川書院'),
			_Utils_Tuple2('88577', '東京製図工業社'),
			_Utils_Tuple2('88578', '東京精文館'),
			_Utils_Tuple2('88579', '東京都印刷工業組合'),
			_Utils_Tuple2('88580', '東洋医学舎'),
			_Utils_Tuple2('88581', '東京文庫'),
			_Utils_Tuple2('88582', '冬至書房'),
			_Utils_Tuple2('88583', '刀剣春秋新聞社'),
			_Utils_Tuple2('88584', '凍原社'),
			_Utils_Tuple2('88585', '東考社'),
			_Utils_Tuple2('88586', '東西哲学書院'),
			_Utils_Tuple2('88588', '東宣出版'),
			_Utils_Tuple2('88589', '東都出版'),
			_Utils_Tuple2('88590', '東販商事'),
			_Utils_Tuple2('88591', '東方出版'),
			_Utils_Tuple2('88592', '東峰書房'),
			_Utils_Tuple2('88593', '東陽出版'),
			_Utils_Tuple2('88594', '東洋書院'),
			_Utils_Tuple2('88595', '東洋書店'),
			_Utils_Tuple2('88596', '東洋哲学研究所'),
			_Utils_Tuple2('88597', '東洋図書'),
			_Utils_Tuple2('88598', '東洋図書出版'),
			_Utils_Tuple2('88599', '東洋文化社'),
			_Utils_Tuple2('88600', '東洋法規出版'),
			_Utils_Tuple2('88601', '桃林書房'),
			_Utils_Tuple2('88602', '朱鷺書房'),
			_Utils_Tuple2('88603', '常盤山文庫出版部'),
			_Utils_Tuple2('88604', '徳川美術館(徳川黎明会)'),
			_Utils_Tuple2('88605', '徳島県出版文化協会'),
			_Utils_Tuple2('88606', '徳島新聞社'),
			_Utils_Tuple2('88607', '徳文堂書店'),
			_Utils_Tuple2('88608', '土佐鯨会'),
			_Utils_Tuple2('88609', '都市計画研究所'),
			_Utils_Tuple2('88610', '図書館問題研究会'),
			_Utils_Tuple2('88611', '図書新聞'),
			_Utils_Tuple2('88612', '都政出版社'),
			_Utils_Tuple2('88613', '都政人舎出版部'),
			_Utils_Tuple2('88614', '都政新報社'),
			_Utils_Tuple2('88615', '土木施工管理技術研究会'),
			_Utils_Tuple2('88616', '栃の葉書房'),
			_Utils_Tuple2('88617', '豊住書店'),
			_Utils_Tuple2('88618', 'テイアイエス'),
			_Utils_Tuple2('88619', 'トライシステム'),
			_Utils_Tuple2('88620', '同信社'),
			_Utils_Tuple2('88621', '同成社'),
			_Utils_Tuple2('88622', 'どうぶつ社'),
			_Utils_Tuple2('88623', 'どおくまんプロ'),
			_Utils_Tuple2('88624', '土木工学社'),
			_Utils_Tuple2('88626', 'ドン・ボスコ社'),
			_Utils_Tuple2('88627', '徳島出版'),
			_Utils_Tuple2('88628', 'たあぶる館出版'),
			_Utils_Tuple2('88630', '鉄道弘済会'),
			_Utils_Tuple2('88631', '東邦書籍'),
			_Utils_Tuple2('88632', '東武書籍販売'),
			_Utils_Tuple2('88633', '土屋信明堂'),
			_Utils_Tuple2('88634', '高橋書店'),
			_Utils_Tuple2('88635', '中央社'),
			_Utils_Tuple2('88636', 'たまいらぼ出版'),
			_Utils_Tuple2('88638', '東研出版'),
			_Utils_Tuple2('88640', '中小企業リサーチセンター'),
			_Utils_Tuple2('886417778', '辰巳出版'),
			_Utils_Tuple2('88642', '太陽'),
			_Utils_Tuple2('88643', '東京ジャーナルセンター'),
			_Utils_Tuple2('88644', '地盤工学会'),
			_Utils_Tuple2('88645', '同信社'),
			_Utils_Tuple2('88646', '第一書林'),
			_Utils_Tuple2('88647', 'ＳＣＣ'),
			_Utils_Tuple2('88648', 'ダイワアート'),
			_Utils_Tuple2('88649', '東京出版'),
			_Utils_Tuple2('88650', '東京官書普及'),
			_Utils_Tuple2('88651885878132', 'ＴＡＣ出版'),
			_Utils_Tuple2('88652', '十緑出版社'),
			_Utils_Tuple2('88653', '大都社'),
			_Utils_Tuple2('88654', '北海タイムス社'),
			_Utils_Tuple2('88655', '東京理科大学出版会'),
			_Utils_Tuple2('88657', 'トリケップス'),
			_Utils_Tuple2('88658', '徳間ジャパンコミュニケーションズ'),
			_Utils_Tuple2('88659', '東京大学附属図書館'),
			_Utils_Tuple2('88660', 'トーハン'),
			_Utils_Tuple2('88661', '大河出版'),
			_Utils_Tuple2('88662', '匠出版'),
			_Utils_Tuple2('88663', '利根出版'),
			_Utils_Tuple2('88664', '知道出版'),
			_Utils_Tuple2('88665', '潮流社'),
			_Utils_Tuple2('88666', '知人館'),
			_Utils_Tuple2('88667', '蛋白質研究奨励会'),
			_Utils_Tuple2('88668', '東都書房'),
			_Utils_Tuple2('88671', '著作社'),
			_Utils_Tuple2('886728130', '大洋図書'),
			_Utils_Tuple2('88673', 'ＴＯＷＮ編集室'),
			_Utils_Tuple2('88674', '都市と生活社'),
			_Utils_Tuple2('88675', '東邦企画'),
			_Utils_Tuple2('88676', '東洋文化出版'),
			_Utils_Tuple2('88677', 'テレコム・ジャパン'),
			_Utils_Tuple2('88678', '塔文社'),
			_Utils_Tuple2('88679', '哲学書房'),
			_Utils_Tuple2('88680', '大正屋出版'),
			_Utils_Tuple2('88681', 'アンセス'),
			_Utils_Tuple2('886828125', 'DAI－X出版'),
			_Utils_Tuple2('88683', '同時代社'),
			_Utils_Tuple2('88684', '泰雅美術'),
			_Utils_Tuple2('88685', '大栄教育システム'),
			_Utils_Tuple2('88686', '電気学会'),
			_Utils_Tuple2('88687', 'トレペ出版'),
			_Utils_Tuple2('88688', '天理やまと文化会議'),
			_Utils_Tuple2('88689', '武田書店'),
			_Utils_Tuple2('88690', '田辺製薬'),
			_Utils_Tuple2('88691', '東京地勢堂'),
			_Utils_Tuple2('886928133', 'たちばな出版'),
			_Utils_Tuple2('88694', '東京農業大学出版会'),
			_Utils_Tuple2('88695', '朝文社'),
			_Utils_Tuple2('88696', 'テン・ブックス'),
			_Utils_Tuple2('88697', 'デラ'),
			_Utils_Tuple2('88698', 'オート・ビジョン'),
			_Utils_Tuple2('88699', 'てらぺいあ'),
			_Utils_Tuple2('88700', '東京臨床出版'),
			_Utils_Tuple2('88701', 'ミオシン出版'),
			_Utils_Tuple2('88702', '中東調査会'),
			_Utils_Tuple2('88703', '伝道文書販売センター'),
			_Utils_Tuple2('88704', 'テラ学術図書出版'),
			_Utils_Tuple2('88705', '高尾山報刊行会'),
			_Utils_Tuple2('88706', 'ＴＯＴＯ出版'),
			_Utils_Tuple2('88707', '東芝ＥＭＩ'),
			_Utils_Tuple2('88708', '刀水書房'),
			_Utils_Tuple2('88709', '東京経済情報出版'),
			_Utils_Tuple2('88711', '日本ドリコム'),
			_Utils_Tuple2('88712', '共に考える出版'),
			_Utils_Tuple2('88713', '東信堂'),
			_Utils_Tuple2('88715', '天来書院'),
			_Utils_Tuple2('88716', 'トンボ出版'),
			_Utils_Tuple2('88717', '東京放送事業局ソフト事業部'),
			_Utils_Tuple2('88720', '筒井書房'),
			_Utils_Tuple2('88721', '東洋書林'),
			_Utils_Tuple2('88723', 'つがる'),
			_Utils_Tuple2('88724', 'ディーエイチシー'),
			_Utils_Tuple2('88726', '東京エーヴィセンター'),
			_Utils_Tuple2('88727', '辰已法律研究所'),
			_Utils_Tuple2('88728', '辰征'),
			_Utils_Tuple2('88729', 'ダイヤモンド・リード社'),
			_Utils_Tuple2('88733', 'ダイナウェア'),
			_Utils_Tuple2('88734', 'ドーム'),
			_Utils_Tuple2('88738', 'テレビ東京'),
			_Utils_Tuple2('88740', 'トップアイ'),
			_Utils_Tuple2('88741', '冬水社'),
			_Utils_Tuple2('88743', '手帖舎'),
			_Utils_Tuple2('88744', '中国地図出版'),
			_Utils_Tuple2('88746', 'ワーナーエンターテイメントジャパン'),
			_Utils_Tuple2('88751', 'トラベルコンサルタンツ'),
			_Utils_Tuple2('88753', '東洋大学'),
			_Utils_Tuple2('88755', 'ティー・エム・ティー'),
			_Utils_Tuple2('88760', '知研出版'),
			_Utils_Tuple2('88763', 'デプロ'),
			_Utils_Tuple2('88764', '大陽出版'),
			_Utils_Tuple2('88767', '辰己法律研究所大阪本校'),
			_Utils_Tuple2('88768', 'デマンド'),
			_Utils_Tuple2('88769', '中央職業能力開発協会'),
			_Utils_Tuple2('88770', 'クリエイツ'),
			_Utils_Tuple2('88772', '大出版社'),
			_Utils_Tuple2('88774', 'ティーアイネット'),
			_Utils_Tuple2('88776', '地方債協会'),
			_Utils_Tuple2('88778', 'チャールズ・イー・タトル出版ペリプラス事業部'),
			_Utils_Tuple2('88779', 'ダブリュネット'),
			_Utils_Tuple2('88780', 'トヤマ出版'),
			_Utils_Tuple2('88781', '杜陵高速印刷出版部'),
			_Utils_Tuple2('88783', 'タッシェンジャパン'),
			_Utils_Tuple2('88785', '中小企業情報化促進協会'),
			_Utils_Tuple2('88788', '地球環境戦略研究機関'),
			_Utils_Tuple2('88846', 'ナウカ'),
			_Utils_Tuple2('88847', '中尾松泉堂書店'),
			_Utils_Tuple2('88848', 'ナカニシヤ出版'),
			_Utils_Tuple2('88849', '永井出版企画'),
			_Utils_Tuple2('88850', '長倉書店'),
			_Utils_Tuple2('88851', '長崎文献社'),
			_Utils_Tuple2('88852', '長野郷土史研究会'),
			_Utils_Tuple2('88853', '夏の書房'),
			_Utils_Tuple2('88854', '浪速社'),
			_Utils_Tuple2('88855', '涛書房'),
			_Utils_Tuple2('88856', '奈良新聞社'),
			_Utils_Tuple2('88857', '南雲堂深山社'),
			_Utils_Tuple2('88858', '南柯書局'),
			_Utils_Tuple2('88859', 'ナンバー出版'),
			_Utils_Tuple2('88860', '南方社'),
			_Utils_Tuple2('88861', '南洋堂出版'),
			_Utils_Tuple2('88863', '二月社'),
			_Utils_Tuple2('88864', '西会本部'),
			_Utils_Tuple2('88865', '西沢道書舗'),
			_Utils_Tuple2('88866', '西田書店'),
			_Utils_Tuple2('88867', '西日本書房'),
			_Utils_Tuple2('88868', '２１世紀社'),
			_Utils_Tuple2('88869', '日常出版'),
			_Utils_Tuple2('88870', '日動出版部'),
			_Utils_Tuple2('88871', '日輪閣'),
			_Utils_Tuple2('88872', '日蓮正宗国際センター'),
			_Utils_Tuple2('88873', 'にっかつ出版'),
			_Utils_Tuple2('88874', 'ニツク'),
			_Utils_Tuple2('88875', '日本メディカルセンター'),
			_Utils_Tuple2('88876', '日験'),
			_Utils_Tuple2('88877', '日興企画'),
			_Utils_Tuple2('88878', '日光堂書店'),
			_Utils_Tuple2('88879', '日清堂書店'),
			_Utils_Tuple2('88880', '日中経済協会'),
			_Utils_Tuple2('88881', '日東館出版'),
			_Utils_Tuple2('88882', '日本イリゲーションクラブ'),
			_Utils_Tuple2('88883', '日本印度学会'),
			_Utils_Tuple2('88884', '日本印刷新聞社'),
			_Utils_Tuple2('88885', '日本インドネシア協会'),
			_Utils_Tuple2('88886', '日本映画テレビ技術協会'),
			_Utils_Tuple2('88887', '日本エスペラント学会'),
			_Utils_Tuple2('88888', '日本エディタースクール出版部'),
			_Utils_Tuple2('88889', '日本海事協会'),
			_Utils_Tuple2('88890', '科学技術振興事業団'),
			_Utils_Tuple2('88891', '日本割烹学校出版局'),
			_Utils_Tuple2('88892', '日本株式新聞社'),
			_Utils_Tuple2('88893', '日本環境衛生センター'),
			_Utils_Tuple2('88894', '日本観光協会'),
			_Utils_Tuple2('88895', '日本関税協会'),
			_Utils_Tuple2('88896', '南雲堂フェニックス'),
			_Utils_Tuple2('88897', '日本ガス協会'),
			_Utils_Tuple2('88898', '日本機械学会'),
			_Utils_Tuple2('88899', '日本機関紙協会'),
			_Utils_Tuple2('88900', '日本機関紙出版センター'),
			_Utils_Tuple2('88901', '日本気象協会'),
			_Utils_Tuple2('88902', '日本教育出版社'),
			_Utils_Tuple2('88903', '日本金属学会'),
			_Utils_Tuple2('88904', '日本近代文学館'),
			_Utils_Tuple2('88905', '日本金融通信社'),
			_Utils_Tuple2('88906', '新堀ギターアカデミー'),
			_Utils_Tuple2('88907', '日本国際交流センター'),
			_Utils_Tuple2('88908', '日本計量新報社'),
			_Utils_Tuple2('88909', '日本建築士会連合会'),
			_Utils_Tuple2('88910', '日本建築センター'),
			_Utils_Tuple2('88911', '日本原子力産業会議'),
			_Utils_Tuple2('88912', '日本航空協会'),
			_Utils_Tuple2('88913', '日本港湾協会'),
			_Utils_Tuple2('88914', '日本古書通信社'),
			_Utils_Tuple2('88915', '貴重本刊行会'),
			_Utils_Tuple2('88916', '日本コンサルタントグループ出版部'),
			_Utils_Tuple2('88917', '日本コンピュータ協会'),
			_Utils_Tuple2('88918', '日本ゴム協会'),
			_Utils_Tuple2('88919', '日本資材管理協会'),
			_Utils_Tuple2('88920', '日本肢体不自由児協会'),
			_Utils_Tuple2('88921', '日本ＣＩ協会'),
			_Utils_Tuple2('88922', '日本出版サービス'),
			_Utils_Tuple2('88923', '日本照明委員会'),
			_Utils_Tuple2('88924', '日本小児医事出版社'),
			_Utils_Tuple2('88925', '日本食品衛生協会'),
			_Utils_Tuple2('88926', '日本植物防疫協会'),
			_Utils_Tuple2('88927', '日本食糧新聞社'),
			_Utils_Tuple2('88928', '日本資料刊行会'),
			_Utils_Tuple2('88929', '日本新聞協会'),
			_Utils_Tuple2('88930', '日本児童文芸家協会'),
			_Utils_Tuple2('88931', '日本女性学習財団'),
			_Utils_Tuple2('88932', '日本女子社会教育会'),
			_Utils_Tuple2('88933', '日本随筆家協会'),
			_Utils_Tuple2('88934', '日本政経新聞社'),
			_Utils_Tuple2('88935', '日本知的障害者福祉協会'),
			_Utils_Tuple2('88936', '日本セルフサービス協会'),
			_Utils_Tuple2('88937', '日本石油コンサルタント'),
			_Utils_Tuple2('88938', '日本繊維経済研究所'),
			_Utils_Tuple2('88939', '日本繊維センター'),
			_Utils_Tuple2('88940', '日本貿易振興会輸入対策部'),
			_Utils_Tuple2('88941', '日本測量協会'),
			_Utils_Tuple2('88942', '日本体育協会'),
			_Utils_Tuple2('88943', '日本体育社'),
			_Utils_Tuple2('88944', '日本地域開発センター'),
			_Utils_Tuple2('88945', '日本治山治水協会'),
			_Utils_Tuple2('88946', '日本地図センター'),
			_Utils_Tuple2('88947', '日本鉄道施設協会'),
			_Utils_Tuple2('88948', '日本電気協会出版課'),
			_Utils_Tuple2('88949', '日本電設工業協会'),
			_Utils_Tuple2('88950', '日本道路協会'),
			_Utils_Tuple2('88951', '情報科学技術協会'),
			_Utils_Tuple2('88952', '日本博物館協会'),
			_Utils_Tuple2('88953', '日本ヒマラヤ協会'),
			_Utils_Tuple2('88954', '日本風景社'),
			_Utils_Tuple2('88955', '日本仏教普及会'),
			_Utils_Tuple2('88956', '日本プラントメンテナンス協会'),
			_Utils_Tuple2('88957', '日本ペンクラブ'),
			_Utils_Tuple2('88958', '日本放送教育協会'),
			_Utils_Tuple2('88959', '日本語学教育協会'),
			_Utils_Tuple2('88960', '日本マーケティング教育センター'),
			_Utils_Tuple2('88961', '日本画像情報マネジメント協会'),
			_Utils_Tuple2('88962', '日本木材加工技術協会'),
			_Utils_Tuple2('88963', '日本郵趣協会'),
			_Utils_Tuple2('88964', '日本林業技術協会'),
			_Utils_Tuple2('88965', '日本林業調査会'),
			_Utils_Tuple2('88966', '日本臨床衛生検査技師会'),
			_Utils_Tuple2('88967', '日本冷凍空調学会'),
			_Utils_Tuple2('88968', '日本労務研究会'),
			_Utils_Tuple2('88969', 'ニューハウス出版'),
			_Utils_Tuple2('88970', '人間医学社'),
			_Utils_Tuple2('88971', '人間禅教団'),
			_Utils_Tuple2('88973', 'ぬ書房'),
			_Utils_Tuple2('88974', '沼田書店'),
			_Utils_Tuple2('88975', 'ぬぷん'),
			_Utils_Tuple2('88976', '根っこ文庫太陽社'),
			_Utils_Tuple2('88977', 'ねじの世界社'),
			_Utils_Tuple2('88978', '燃焼社'),
			_Utils_Tuple2('88979', '農業技術協会'),
			_Utils_Tuple2('88980', '農業土木学会'),
			_Utils_Tuple2('88981', 'ノラブックス'),
			_Utils_Tuple2('88982', '農政調査会'),
			_Utils_Tuple2('88983', '日本印刷技術協会'),
			_Utils_Tuple2('88984', 'ノーベル書房'),
			_Utils_Tuple2('88985', '野田経済研究所'),
			_Utils_Tuple2('88986', '野ばら社'),
			_Utils_Tuple2('88987', '野火発行所'),
			_Utils_Tuple2('88988', '野間教育研究所'),
			_Utils_Tuple2('88989', '日本書院'),
			_Utils_Tuple2('88990', '野村総合研究所'),
			_Utils_Tuple2('88992', '日本比較法研究所'),
			_Utils_Tuple2('88993', '日本出版販売'),
			_Utils_Tuple2('88994', '日教販'),
			_Utils_Tuple2('88995', '日本雑誌販売'),
			_Utils_Tuple2('88996', '日本出版貿易'),
			_Utils_Tuple2('88997', '西村書店'),
			_Utils_Tuple2('88998', '日本地図共販'),
			_Utils_Tuple2('88999', '日新堂書店'),
			_Utils_Tuple2('89000', '二里木書店'),
			_Utils_Tuple2('89001', '根橋書店'),
			_Utils_Tuple2('89002', '中山書房'),
			_Utils_Tuple2('89003', '日本書籍出版協会'),
			_Utils_Tuple2('89004', '日本雑誌広告協会'),
			_Utils_Tuple2('89005', '日ソ図書'),
			_Utils_Tuple2('89006', '岳(ヌプリ)書房'),
			_Utils_Tuple2('89007', '人間と歴史社'),
			_Utils_Tuple2('89008', '日本デザインクリエーターズカンパニー'),
			_Utils_Tuple2('89009', '日本古典文学会'),
			_Utils_Tuple2('89010', '能登印刷出版部'),
			_Utils_Tuple2('89011', '日本芸術出版社'),
			_Utils_Tuple2('89012', '日本経営指導センター'),
			_Utils_Tuple2('89013', '西村書店'),
			_Utils_Tuple2('89015', '日本メルク萬有'),
			_Utils_Tuple2('89016', '日本航空'),
			_Utils_Tuple2('89017', '日本リーダーズ協会'),
			_Utils_Tuple2('89018', '日本書店商業組合連合会'),
			_Utils_Tuple2('89019', '日本理工出版会'),
			_Utils_Tuple2('89020', '日本進路指導協会'),
			_Utils_Tuple2('89021', '日本海事広報協会'),
			_Utils_Tuple2('89022', '日本地域社会研究所'),
			_Utils_Tuple2('89023', '日本洋書販売'),
			_Utils_Tuple2('89024', '日本メール・オーダー'),
			_Utils_Tuple2('89025', '日本列島出版'),
			_Utils_Tuple2('89026', '日本教育研究センター'),
			_Utils_Tuple2('89027', '日本物理学会'),
			_Utils_Tuple2('89028', '日本医学院'),
			_Utils_Tuple2('89029', 'エヌ・シー・アイ'),
			_Utils_Tuple2('89030', '日本ソフトアンドハード社出版部'),
			_Utils_Tuple2('89031', '日本ラーニング・ラボラトリー教育センター'),
			_Utils_Tuple2('89032', '日本証券経済研究所'),
			_Utils_Tuple2('89033', '日本工業技術連盟'),
			_Utils_Tuple2('89034', '日通総合研究所'),
			_Utils_Tuple2('89035', '日本貿易振興会経済情報部'),
			_Utils_Tuple2('89036', '文春ネスコ'),
			_Utils_Tuple2('89037', 'サミーミュージック'),
			_Utils_Tuple2('89038', '日本太陽エネルギー学会'),
			_Utils_Tuple2('89040', '名古屋流行発信'),
			_Utils_Tuple2('89041', '日本医療企画'),
			_Utils_Tuple2('89042', '教育總研'),
			_Utils_Tuple2('89043', '日本写真新聞社'),
			_Utils_Tuple2('89044', '日本医学館'),
			_Utils_Tuple2('89045', '日蓮宗新聞社'),
			_Utils_Tuple2('89046', '日本中央出版'),
			_Utils_Tuple2('89047', '日本原子力学会'),
			_Utils_Tuple2('89050', '二期出版'),
			_Utils_Tuple2('89051', '農薬工業会'),
			_Utils_Tuple2('89053', '二十二世紀社'),
			_Utils_Tuple2('89054', 'ぬ利彦出版'),
			_Utils_Tuple2('89056', '日本ブックマネジメント'),
			_Utils_Tuple2('89057', '日本私史出版会'),
			_Utils_Tuple2('89058', '日本ビクタービデオソフト事業部'),
			_Utils_Tuple2('89059', '日本教会新報社'),
			_Utils_Tuple2('89060', '日本ミッション'),
			_Utils_Tuple2('89061', '日本福音書房'),
			_Utils_Tuple2('89062', 'ナイスデイブックス'),
			_Utils_Tuple2('89063', '並木書房'),
			_Utils_Tuple2('89064', '日本書籍貿易'),
			_Utils_Tuple2('89065', '日活'),
			_Utils_Tuple2('89066', '日本ショット'),
			_Utils_Tuple2('89067', '日本住宅総合センター'),
			_Utils_Tuple2('89068', '日本パーソナルコンピュータソフトウェア技術研究所'),
			_Utils_Tuple2('89069', '日本司法学院司法教材出版'),
			_Utils_Tuple2('89071', '日本スタックマガジン社'),
			_Utils_Tuple2('89072', 'ニコリ'),
			_Utils_Tuple2('89073', '日本アイソトープ協会'),
			_Utils_Tuple2('89074', '日本化学物質安全・情報センター'),
			_Utils_Tuple2('89075', '日本格付研究所'),
			_Utils_Tuple2('89076', '日本教材システム'),
			_Utils_Tuple2('89077', 'にいおか印刷'),
			_Utils_Tuple2('89078', '日本情報処理開発協会'),
			_Utils_Tuple2('89079', '日本教育コンピューター'),
			_Utils_Tuple2('89080', '日本アイ・ビー・エム'),
			_Utils_Tuple2('89081', '日本コンベンションサービス'),
			_Utils_Tuple2('89087', '日本電気パーソナルＣ＆Ｃマーケティング本部'),
			_Utils_Tuple2('89090', 'ＮＥＣインターチャネル'),
			_Utils_Tuple2('89091', '日外アソシエーツ出版'),
			_Utils_Tuple2('89092', '農業機械学会'),
			_Utils_Tuple2('89093', '日本建設新聞社'),
			_Utils_Tuple2('89094', 'ニューシークエンスサプライ'),
			_Utils_Tuple2('89097', '中山書房仏書林'),
			_Utils_Tuple2('89098', 'ネクストイレブン・クラブ'),
			_Utils_Tuple2('89100', '日経ＢＰソフトプレス'),
			_Utils_Tuple2('89102', '日本シンガポール協会'),
			_Utils_Tuple2('89103', '日経映像'),
			_Utils_Tuple2('89104', '日研'),
			_Utils_Tuple2('89105', '日本ビジネスレポート'),
			_Utils_Tuple2('89106', '日本建設情報総合センター'),
			_Utils_Tuple2('89109', '日芸企画'),
			_Utils_Tuple2('89110', '日本政策投資銀行'),
			_Utils_Tuple2('89111', '日本ガスタービン学会'),
			_Utils_Tuple2('89113', 'ニッセン'),
			_Utils_Tuple2('89116', '日本スポーツクラブ協会'),
			_Utils_Tuple2('89169', '般庵野間光辰華甲記念会'),
			_Utils_Tuple2('89170', '俳句研究新社'),
			_Utils_Tuple2('89171', '俳人協会'),
			_Utils_Tuple2('89172', '白亜書房'),
			_Utils_Tuple2('89173', '白日社'),
			_Utils_Tuple2('89174', '白帝社'),
			_Utils_Tuple2('89176', '水声社'),
			_Utils_Tuple2('89178', '白鳳出版社'),
			_Utils_Tuple2('89179', '博隆書房'),
			_Utils_Tuple2('89180', '八宝堂'),
			_Utils_Tuple2('89181', '発明特許新聞社'),
			_Utils_Tuple2('89183', '花書房'),
			_Utils_Tuple2('89184', 'はなぶさ短歌会'),
			_Utils_Tuple2('89185', '早川図書'),
			_Utils_Tuple2('89186', '判例タイムズ社'),
			_Utils_Tuple2('89187', '万国貨幣洋行'),
			_Utils_Tuple2('89188', '晩聲社'),
			_Utils_Tuple2('89189', 'バンダイ'),
			_Utils_Tuple2('89190', 'パイパーズ'),
			_Utils_Tuple2('89191', 'ぱいぽ出版'),
			_Utils_Tuple2('89192', 'パッケージング社'),
			_Utils_Tuple2('89193', 'パナジアン'),
			_Utils_Tuple2('89194', 'パルコ出版'),
			_Utils_Tuple2('89195', '光商事'),
			_Utils_Tuple2('89197', '一ツ橋書房'),
			_Utils_Tuple2('89198', '日之出出版'),
			_Utils_Tuple2('89199', '一二三書房'),
			_Utils_Tuple2('89200', '百人委員会'),
			_Utils_Tuple2('89201', '表現社'),
			_Utils_Tuple2('89202', '兵庫部落問題研究所'),
			_Utils_Tuple2('89203', '平河出版社'),
			_Utils_Tuple2('89204', '肥料協会新聞部'),
			_Utils_Tuple2('89205', '麗澤大学出版会'),
			_Utils_Tuple2('89206', '弘前農業協同組合'),
			_Utils_Tuple2('89207', 'ひろしま・みんぞくの会'),
			_Utils_Tuple2('89208', 'ビジネス・リサーチ'),
			_Utils_Tuple2('89209', '美術書院'),
			_Utils_Tuple2('89210', '美術年鑑社'),
			_Utils_Tuple2('89211', 'トーコー出版'),
			_Utils_Tuple2('89212', 'ビデオ出版'),
			_Utils_Tuple2('89213', '美乃美'),
			_Utils_Tuple2('89214', '白光真宏会出版局'),
			_Utils_Tuple2('89216', 'ぴぽ社'),
			_Utils_Tuple2('89217', '平和写真印刷'),
			_Utils_Tuple2('89218', '風信社'),
			_Utils_Tuple2('89219', '風涛社'),
			_Utils_Tuple2('89220', 'フェニックス出版'),
			_Utils_Tuple2('89221', '福井県郷土誌懇談会'),
			_Utils_Tuple2('89222', '福音社'),
			_Utils_Tuple2('89223', '福岡人文社'),
			_Utils_Tuple2('89224', '福昌堂'),
			_Utils_Tuple2('89226', 'フジ出版社'),
			_Utils_Tuple2('89227', '富士書店'),
			_Utils_Tuple2('89228', '富士書房'),
			_Utils_Tuple2('89229', '富士書苑'),
			_Utils_Tuple2('89230', '富士短期大学出版部'),
			_Utils_Tuple2('89231', '婦女界出版社'),
			_Utils_Tuple2('89232', 'フタバ書店'),
			_Utils_Tuple2('89233', 'フタバ図書'),
			_Utils_Tuple2('89234', '不動工房'),
			_Utils_Tuple2('89235', '比較医事法学会'),
			_Utils_Tuple2('89236', '古川書房'),
			_Utils_Tuple2('89237', '仏教伝道協会'),
			_Utils_Tuple2('89240', 'ぶどう社'),
			_Utils_Tuple2('89241', 'ブレイン図書出版'),
			_Utils_Tuple2('89242', 'ブレーン出版'),
			_Utils_Tuple2('89243', '文栄堂書店'),
			_Utils_Tuple2('89244', '文海堂'),
			_Utils_Tuple2('89245', '文化開発社'),
			_Utils_Tuple2('89246', 'ドリコム・アド'),
			_Utils_Tuple2('89247', '文華堂出版社'),
			_Utils_Tuple2('89248', '文教図書'),
			_Utils_Tuple2('89249', '文建書房'),
			_Utils_Tuple2('89250', '文芸出版社'),
			_Utils_Tuple2('89251', '文人社'),
			_Utils_Tuple2('89252', '文人書房'),
			_Utils_Tuple2('89253', '文生書院'),
			_Utils_Tuple2('89254', 'ブンセン'),
			_Utils_Tuple2('89255', '文民社'),
			_Utils_Tuple2('89256', '文明堂'),
			_Utils_Tuple2('89257', '文遊社'),
			_Utils_Tuple2('89258', '文陽社'),
			_Utils_Tuple2('89259', '文理閣'),
			_Utils_Tuple2('89260', '文理堂'),
			_Utils_Tuple2('89261', '文和書房'),
			_Utils_Tuple2('89262', 'プラザ出版'),
			_Utils_Tuple2('89263', 'プラスチックスエージ'),
			_Utils_Tuple2('89265', 'プレス東京'),
			_Utils_Tuple2('89266', '平安清明教'),
			_Utils_Tuple2('89268', '平和国土計画会議'),
			_Utils_Tuple2('89269', 'へるす出版'),
			_Utils_Tuple2('89270', '辺境社'),
			_Utils_Tuple2('89271', '編集工房ノア'),
			_Utils_Tuple2('89272', '編集出版センター'),
			_Utils_Tuple2('89273', '便利堂'),
			_Utils_Tuple2('89274', 'ペンギン社'),
			_Utils_Tuple2('89275', '邦光書房'),
			_Utils_Tuple2('89276', '蓬左書房'),
			_Utils_Tuple2('89277', '峯文閣'),
			_Utils_Tuple2('89279', '鳳文書林出版販売'),
			_Utils_Tuple2('89280', '鳳鳴堂書店'),
			_Utils_Tuple2('89281', '朋友書店'),
			_Utils_Tuple2('89282', '鵬和出版'),
			_Utils_Tuple2('89283', 'ホームライフ社'),
			_Utils_Tuple2('89284', '北越出版'),
			_Utils_Tuple2('89285', '北苑社'),
			_Utils_Tuple2('89286', '北欧社'),
			_Utils_Tuple2('89287', '北辰堂'),
			_Utils_Tuple2('89288', '北辰図書出版'),
			_Utils_Tuple2('89289', '北冬書房'),
			_Utils_Tuple2('89290', '北斗書房'),
			_Utils_Tuple2('89291', '北海道教育社'),
			_Utils_Tuple2('89292', '北陸通信社'),
			_Utils_Tuple2('89293', '保険毎日新聞社'),
			_Utils_Tuple2('89294', '星の環会'),
			_Utils_Tuple2('89296', '北海道テレビ放送'),
			_Utils_Tuple2('89297', '北方新社'),
			_Utils_Tuple2('89298', '佛乃世界社'),
			_Utils_Tuple2('89299', 'ほるぷ総連合・ほるぷ教育開発研究所'),
			_Utils_Tuple2('89300', '本願寺出版協会'),
			_Utils_Tuple2('89301', '風来舎'),
			_Utils_Tuple2('89302', '真世界社'),
			_Utils_Tuple2('89303', '墨水書房'),
			_Utils_Tuple2('89304', 'ボン工房'),
			_Utils_Tuple2('89305', 'ポリマー工業研究所'),
			_Utils_Tuple2('89306', 'ＢＯＣ出版部'),
			_Utils_Tuple2('89308', 'ブックマン社'),
			_Utils_Tuple2('89309', 'ブロンズ新社'),
			_Utils_Tuple2('89310', '博文社'),
			_Utils_Tuple2('89311', '富士通オフィス機器(ＦＯＭ出版)'),
			_Utils_Tuple2('89312', '北隆館書店'),
			_Utils_Tuple2('89313', '不二美書院'),
			_Utils_Tuple2('89314', '文教商事'),
			_Utils_Tuple2('89315', '橋本文苑社'),
			_Utils_Tuple2('89316', '原田書店'),
			_Utils_Tuple2('89317', 'ひくまの出版'),
			_Utils_Tuple2('89318', 'ビデオジャポニカ'),
			_Utils_Tuple2('89319', '文林堂'),
			_Utils_Tuple2('89320', 'ふたば書房出版局'),
			_Utils_Tuple2('89321', 'ひかり書房'),
			_Utils_Tuple2('89322', '光書房'),
			_Utils_Tuple2('89323', '報光社'),
			_Utils_Tuple2('89324', '藤田書店'),
			_Utils_Tuple2('89325', 'ひさかたチャイルド'),
			_Utils_Tuple2('89326', '福音宣教会'),
			_Utils_Tuple2('89328', 'ひたく書房'),
			_Utils_Tuple2('89329', '本邦書籍'),
			_Utils_Tuple2('89330', '美術公論社'),
			_Utils_Tuple2('89331', 'プロセスアーキテクチュア'),
			_Utils_Tuple2('89332', 'ペガサス'),
			_Utils_Tuple2('89333', 'ひまわり出版'),
			_Utils_Tuple2('89334', '古橋書店'),
			_Utils_Tuple2('89335', '光書房'),
			_Utils_Tuple2('89336', '文園社'),
			_Utils_Tuple2('89337', '汪洋社'),
			_Utils_Tuple2('89338', '表現社'),
			_Utils_Tuple2('89339', 'ハイライフ出版'),
			_Utils_Tuple2('89340', 'ばるん舎'),
			_Utils_Tuple2('89342', 'ペヨトル工房'),
			_Utils_Tuple2('89343', '北海道総合文化開発機構'),
			_Utils_Tuple2('89344', '歩牛舎'),
			_Utils_Tuple2('89345', 'ホームダイヤモンド'),
			_Utils_Tuple2('89346', '総合法令出版'),
			_Utils_Tuple2('89347', '萌文書林'),
			_Utils_Tuple2('89348', 'フォトマップ'),
			_Utils_Tuple2('89349', 'フジタ'),
			_Utils_Tuple2('89350', '八幡書店'),
			_Utils_Tuple2('89351', 'ペップ出版'),
			_Utils_Tuple2('89352', '石田パンリサーチ出版局'),
			_Utils_Tuple2('89353', '扶桑社'),
			_Utils_Tuple2('89354', '富岳書房'),
			_Utils_Tuple2('89355', 'パナ教育システム'),
			_Utils_Tuple2('89356', 'ブラザー・ジョルダン社'),
			_Utils_Tuple2('89357', 'パテント社'),
			_Utils_Tuple2('89358', '凡人社'),
			_Utils_Tuple2('89359', '白地社'),
			_Utils_Tuple2('89360', 'パーソナリー・オリエンテッド'),
			_Utils_Tuple2('89361', 'はまの出版'),
			_Utils_Tuple2('89362', 'パーソナルメディア'),
			_Utils_Tuple2('89364', '美術出版意匠工房'),
			_Utils_Tuple2('89365', '法曹同人'),
			_Utils_Tuple2('89368', 'ピーエムシー出版'),
			_Utils_Tuple2('89370', 'オーシーシー・ジャパン'),
			_Utils_Tuple2('89371', '評伝社'),
			_Utils_Tuple2('89372', '八峰出版'),
			_Utils_Tuple2('89374', 'ぴいぷる社'),
			_Utils_Tuple2('89375', '蕗出版'),
			_Utils_Tuple2('89376', 'フォー・ユー'),
			_Utils_Tuple2('89377', 'ビー・アイ・アイ'),
			_Utils_Tuple2('89378', 'バルシステムリサーチ'),
			_Utils_Tuple2('89379', '橋本確文堂'),
			_Utils_Tuple2('89381', '紅書房'),
			_Utils_Tuple2('89382', '不動産情報社'),
			_Utils_Tuple2('89384', '北樹出版'),
			_Utils_Tuple2('89385', '柏伸出版社'),
			_Utils_Tuple2('89388', 'ブックページ刊行会'),
			_Utils_Tuple2('89389', 'ビクターエンタテインメント'),
			_Utils_Tuple2('89390', 'ぶんしん出版'),
			_Utils_Tuple2('89392', 'エイチエムピイ'),
			_Utils_Tuple2('89393', 'ふゅーじょんぷろだくと'),
			_Utils_Tuple2('89394', 'ボーイスカウト日本連盟'),
			_Utils_Tuple2('89395', '法研出版'),
			_Utils_Tuple2('89396', 'パッチワーク通信社'),
			_Utils_Tuple2('89397', 'ビデオブック'),
			_Utils_Tuple2('89398', '白光トータルプランニング'),
			_Utils_Tuple2('89399', '光出版印刷'),
			_Utils_Tuple2('89400', 'ファーマインターナショナル'),
			_Utils_Tuple2('89401', 'ブルーキャニオンプレス'),
			_Utils_Tuple2('89402', 'ふらんす堂'),
			_Utils_Tuple2('89403', 'セキセーヒューマンネットワーク事業部'),
			_Utils_Tuple2('89404', 'ビクターエンタテインメント第一営業統括部ＳＰＯ営業部'),
			_Utils_Tuple2('89405', 'ビック・マン'),
			_Utils_Tuple2('89406', '富士興業コンピュータセクションロードス'),
			_Utils_Tuple2('89407', 'スクリーンプレイ'),
			_Utils_Tuple2('89408', 'ピー・エス・ピー'),
			_Utils_Tuple2('89409', 'ファラオ企画'),
			_Utils_Tuple2('89410', 'ハートメディア'),
			_Utils_Tuple2('89411', 'フタミ企画'),
			_Utils_Tuple2('89412', 'ヴェスコインターナショナル'),
			_Utils_Tuple2('89413', 'ピーエス書房'),
			_Utils_Tuple2('89414', 'バイオメディクス'),
			_Utils_Tuple2('89415', 'ビジュアルヴック社'),
			_Utils_Tuple2('89416', '本願寺出版社'),
			_Utils_Tuple2('89418', '広島大学学校教育学部'),
			_Utils_Tuple2('89419', 'パロル舎'),
			_Utils_Tuple2('89420', 'ムーブ'),
			_Utils_Tuple2('89421', '富士美出版'),
			_Utils_Tuple2('89424', '風雅書房'),
			_Utils_Tuple2('89426', '風琳堂'),
			_Utils_Tuple2('89427', 'ほるぷ'),
			_Utils_Tuple2('89430', '母子保健事業団'),
			_Utils_Tuple2('89435', 'フジテレビギャラリー'),
			_Utils_Tuple2('89437', 'ビジュアル・ケイ'),
			_Utils_Tuple2('89438', 'フォルテミュージックエンタテインメント'),
			_Utils_Tuple2('89445', '本多企画'),
			_Utils_Tuple2('89446', '富士通パレックス'),
			_Utils_Tuple2('89448', '北溟社'),
			_Utils_Tuple2('89450', 'ファブコミュニケーションズ'),
			_Utils_Tuple2('89451', 'フォレスト出版'),
			_Utils_Tuple2('89455', 'バンダイ・デジタル・エンタテインメント'),
			_Utils_Tuple2('89461', 'バウハウス'),
			_Utils_Tuple2('89462', 'ビームエンタテインメント'),
			_Utils_Tuple2('89467', '北斗プリント社'),
			_Utils_Tuple2('89470', 'ハイサイ'),
			_Utils_Tuple2('89471', 'ピアソン・エデュケーション'),
			_Utils_Tuple2('89472', '美健ガイド社'),
			_Utils_Tuple2('89480', '方丈堂出版'),
			_Utils_Tuple2('89481', 'フクト'),
			_Utils_Tuple2('89484', '北海道町村会'),
			_Utils_Tuple2('89487', '文芸東北新社'),
			_Utils_Tuple2('89490', 'パラダイム'),
			_Utils_Tuple2('89493', 'パーソナルケア出版部みき書房'),
			_Utils_Tuple2('89494', 'バップ'),
			_Utils_Tuple2('89496', 'マーケティング研究協会'),
			_Utils_Tuple2('89497', '鳴鐘社'),
			_Utils_Tuple2('89498', '前田書店'),
			_Utils_Tuple2('89499', '松前町史編集室'),
			_Utils_Tuple2('89500', '牧野出版'),
			_Utils_Tuple2('89501', 'マグロウヒルブック'),
			_Utils_Tuple2('89502', 'マグブロス出版'),
			_Utils_Tuple2('89503', '森田塾出版'),
			_Utils_Tuple2('89504', '町田ジャーナル社'),
			_Utils_Tuple2('89505', 'マツノ書店'),
			_Utils_Tuple2('89506', '松の実社'),
			_Utils_Tuple2('89507', '松山郷土史文学研究会'),
			_Utils_Tuple2('89508', '松山市文化財協会'),
			_Utils_Tuple2('89509', 'マネジメントセンター出版部'),
			_Utils_Tuple2('89510', 'マネジメント総研'),
			_Utils_Tuple2('89511', 'マリア書房'),
			_Utils_Tuple2('89512', 'マリン企画'),
			_Utils_Tuple2('89513', '丸岡書店'),
			_Utils_Tuple2('89514', '中央公論事業出版'),
			_Utils_Tuple2('89515', 'マルミ'),
			_Utils_Tuple2('89516', '万世出版'),
			_Utils_Tuple2('89517', 'ミヤザワ'),
			_Utils_Tuple2('89518', '萬葉堂出版'),
			_Utils_Tuple2('89519', 'みかさ堂'),
			_Utils_Tuple2('89520', '未刊国文資料刊行会'),
			_Utils_Tuple2('89521', 'みき書房'),
			_Utils_Tuple2('89522', '三樹書房'),
			_Utils_Tuple2('89523', 'みくに書店'),
			_Utils_Tuple2('89525', '三崎書房'),
			_Utils_Tuple2('89526', '三沢書店'),
			_Utils_Tuple2('89527', '三井文庫'),
			_Utils_Tuple2('89528', '光村図書出版'),
			_Utils_Tuple2('89529', 'みづほ出版'),
			_Utils_Tuple2('89530', '味燈書屋'),
			_Utils_Tuple2('89531', '緑書房'),
			_Utils_Tuple2('89532', '峯書房'),
			_Utils_Tuple2('89533', '木莵書館'),
			_Utils_Tuple2('89534', 'みやま書房'),
			_Utils_Tuple2('89535', '美夜古文化墾話会'),
			_Utils_Tuple2('89536', '三瀧社'),
			_Utils_Tuple2('89537', '民社党国際局'),
			_Utils_Tuple2('89538', 'むかでや文庫'),
			_Utils_Tuple2('89539', '麦書房'),
			_Utils_Tuple2('89540', '無限'),
			_Utils_Tuple2('89541', '武蔵野郷土史刊行会'),
			_Utils_Tuple2('89542', '光芒社'),
			_Utils_Tuple2('89543', '武都紀歌会'),
			_Utils_Tuple2('89544', '無明舎出版'),
			_Utils_Tuple2('89545', '村田書店'),
			_Utils_Tuple2('89546', '村松書館'),
			_Utils_Tuple2('89547', '宗高書房'),
			_Utils_Tuple2('89548', '名英図書出版協会'),
			_Utils_Tuple2('89549', '明星大学出版部'),
			_Utils_Tuple2('89550', '冥草舎'),
			_Utils_Tuple2('89551', '名著普及会'),
			_Utils_Tuple2('89552', '明文社'),
			_Utils_Tuple2('89554', 'メディア・リサーチ・センター'),
			_Utils_Tuple2('89555', 'メディカルリサーチセンター'),
			_Utils_Tuple2('89557', '元在外公務員援護会'),
			_Utils_Tuple2('89558', 'もく馬社'),
			_Utils_Tuple2('89559', 'トラベルジャーナル'),
			_Utils_Tuple2('89560', 'モンジュ'),
			_Utils_Tuple2('89561', '門土社'),
			_Utils_Tuple2('89564', '明文図書'),
			_Utils_Tuple2('89565', '松島書店'),
			_Utils_Tuple2('89566', '村山書店'),
			_Utils_Tuple2('89567', '宮井書店'),
			_Utils_Tuple2('89568', '三星'),
			_Utils_Tuple2('89569', 'メシアニカ・ゼネラル'),
			_Utils_Tuple2('89570', 'メディカル出版'),
			_Utils_Tuple2('89571', '丸井図書出版'),
			_Utils_Tuple2('89572', '光村教育図書'),
			_Utils_Tuple2('89574', 'メディカル・プランニング'),
			_Utils_Tuple2('89575', '明甲社'),
			_Utils_Tuple2('89576', '翠書房'),
			_Utils_Tuple2('89577', 'メイツ出版'),
			_Utils_Tuple2('89579', '芽ばえ社'),
			_Utils_Tuple2('89580', '丸善貿易部'),
			_Utils_Tuple2('89581', 'メディア'),
			_Utils_Tuple2('89582', 'メイカ出版'),
			_Utils_Tuple2('89583', '三田出版会'),
			_Utils_Tuple2('89584', '夢元社'),
			_Utils_Tuple2('89586', 'ミルトス'),
			_Utils_Tuple2('89587', 'ミクス'),
			_Utils_Tuple2('89588', '三起商行'),
			_Utils_Tuple2('89590', '三輪書店'),
			_Utils_Tuple2('89591', 'モード学園出版局'),
			_Utils_Tuple2('89593', '松江今井書店'),
			_Utils_Tuple2('89594', 'モエ出版'),
			_Utils_Tuple2('89595', 'メタモル出版'),
			_Utils_Tuple2('89596', '球体研究所'),
			_Utils_Tuple2('89598', '鱒書房'),
			_Utils_Tuple2('89599', 'もしもしホットライン'),
			_Utils_Tuple2('89602', 'みのり書房'),
			_Utils_Tuple2('89603', 'キリスト友の会日本年会'),
			_Utils_Tuple2('89604', '丘書房'),
			_Utils_Tuple2('89605', '口腔保健協会'),
			_Utils_Tuple2('89606', 'キリスト聖書塾'),
			_Utils_Tuple2('89608', '九藝出版'),
			_Utils_Tuple2('89609', '瑞穂印刷産業出版部'),
			_Utils_Tuple2('89610', 'メディアパル'),
			_Utils_Tuple2('89611', 'マップシステムアイゼン'),
			_Utils_Tuple2('89612', '図書出版まろうど社'),
			_Utils_Tuple2('89613', 'メディアックス'),
			_Utils_Tuple2('89614', 'エムティ出版'),
			_Utils_Tuple2('89615', '光村印刷'),
			_Utils_Tuple2('89616', 'マルジュ社'),
			_Utils_Tuple2('89619', '明徳出版社'),
			_Utils_Tuple2('89622', 'メイト'),
			_Utils_Tuple2('89624', '宮川エンタープライズ社'),
			_Utils_Tuple2('89629', '港の人'),
			_Utils_Tuple2('89630', '丸善日本橋店出版サービスセンター'),
			_Utils_Tuple2('89631', 'まほろば'),
			_Utils_Tuple2('89633', 'モダン出版'),
			_Utils_Tuple2('89636', 'まほろば'),
			_Utils_Tuple2('89638', 'ミュージックランド'),
			_Utils_Tuple2('89639', 'モラロジー研究所出版部'),
			_Utils_Tuple2('89640', 'むげん出版'),
			_Utils_Tuple2('89647', '薬務公報社'),
			_Utils_Tuple2('89648', '八雲井書院'),
			_Utils_Tuple2('89649', '八雲書房'),
			_Utils_Tuple2('89650', '八潮出版社'),
			_Utils_Tuple2('89651', '安田書店'),
			_Utils_Tuple2('89652', '柳沢書苑'),
			_Utils_Tuple2('89653', '山形新聞社'),
			_Utils_Tuple2('89654', '山口民報社'),
			_Utils_Tuple2('89655', '大和山出版社'),
			_Utils_Tuple2('89656', 'ユネスコ東アジア文化研究センター'),
			_Utils_Tuple2('89657', 'ヤング友の社'),
			_Utils_Tuple2('89658', '夕刊三重新聞社'),
			_Utils_Tuple2('89659', '遊戯社'),
			_Utils_Tuple2('89660', '有隣堂'),
			_Utils_Tuple2('89661', '湯川書房'),
			_Utils_Tuple2('89662', '輸送新聞社'),
			_Utils_Tuple2('89663', '雪解発行所'),
			_Utils_Tuple2('89665', 'ユニバース出版社(矢沢サイエンスオフィス)'),
			_Utils_Tuple2('89666', 'ゆまにて出版'),
			_Utils_Tuple2('89667', '弓立社'),
			_Utils_Tuple2('89669', '百合出版'),
			_Utils_Tuple2('89670', '窯業協会'),
			_Utils_Tuple2('89671', '陽光文明研究会'),
			_Utils_Tuple2('89672', '洋装社'),
			_Utils_Tuple2('89673', 'アパレルファッション'),
			_Utils_Tuple2('89674', '洋々社'),
			_Utils_Tuple2('89676', '横川書房'),
			_Utils_Tuple2('89677', '横須賀史学研究会'),
			_Utils_Tuple2('89678', '米子今井書店'),
			_Utils_Tuple2('89679', '米沢温故会'),
			_Utils_Tuple2('89680', '代々木ライブラリー'),
			_Utils_Tuple2('89681', '安田生命社会事業団'),
			_Utils_Tuple2('89682', '柳沢書店'),
			_Utils_Tuple2('89683', '柳原書店'),
			_Utils_Tuple2('89684', '洋販出版'),
			_Utils_Tuple2('89685', 'ヨシダ財政社会法規研究会'),
			_Utils_Tuple2('89686', '有恒書院'),
			_Utils_Tuple2('89687', '有朋舎'),
			_Utils_Tuple2('89688', 'ベアフォード'),
			_Utils_Tuple2('89689', 'ユニコム'),
			_Utils_Tuple2('89690', '洋光'),
			_Utils_Tuple2('89691', '洋泉社'),
			_Utils_Tuple2('89692', '駿台曜曜社'),
			_Utils_Tuple2('89693', '雄文社出版企画室'),
			_Utils_Tuple2('89694', '八坂書房'),
			_Utils_Tuple2('89695', '有斐閣学術センター'),
			_Utils_Tuple2('89697', '横浜市公害研究所'),
			_Utils_Tuple2('89698', 'ユニグラフィック'),
			_Utils_Tuple2('89699', 'ゆりな企画'),
			_Utils_Tuple2('89700', 'ユサコ'),
			_Utils_Tuple2('89701', '横浜市'),
			_Utils_Tuple2('89702', '羊群社'),
			_Utils_Tuple2('89703', 'ヤマハオンソフト'),
			_Utils_Tuple2('89707', '四谷大塚出版'),
			_Utils_Tuple2('89710', '山梨日日新聞社'),
			_Utils_Tuple2('89713', '有朋書院'),
			_Utils_Tuple2('89715', 'ユニマットライフ'),
			_Utils_Tuple2('89717', '吉本興業'),
			_Utils_Tuple2('89730', 'ライフ社'),
			_Utils_Tuple2('89731', '酪農事情社'),
			_Utils_Tuple2('89732', '日本コンピュータ情報'),
			_Utils_Tuple2('89733', '洛陽書房'),
			_Utils_Tuple2('89734', '理学書院'),
			_Utils_Tuple2('89736', '六藝書房'),
			_Utils_Tuple2('89737', '六耀社'),
			_Utils_Tuple2('89738', '理工出版社'),
			_Utils_Tuple2('89739', 'リサーチ出版'),
			_Utils_Tuple2('89740', '立体社'),
			_Utils_Tuple2('89741', '竜王文庫'),
			_Utils_Tuple2('89742', '琉球新報社'),
			_Utils_Tuple2('89743', '龍詩社'),
			_Utils_Tuple2('89744', '龍星閣'),
			_Utils_Tuple2('89745', '流通システム研究センター'),
			_Utils_Tuple2('89746', '流動出版'),
			_Utils_Tuple2('89747', '隆文館'),
			_Utils_Tuple2('89748', '燎原'),
			_Utils_Tuple2('89749', '良寛の書研究会'),
			_Utils_Tuple2('89750', '緑星社'),
			_Utils_Tuple2('89751', '緑地社'),
			_Utils_Tuple2('89752', '旅行読売出版社'),
			_Utils_Tuple2('89753', '倫理研究所'),
			_Utils_Tuple2('89754', 'ルガール社'),
			_Utils_Tuple2('89755', '令文社'),
			_Utils_Tuple2('89756', 'レオ企画'),
			_Utils_Tuple2('89757', '歴史春秋出版'),
			_Utils_Tuple2('89759', '錬金社'),
			_Utils_Tuple2('89760', '労働科学研究所出版部'),
			_Utils_Tuple2('89761', '労働新聞社出版部'),
			_Utils_Tuple2('89762', '労働情報研究所'),
			_Utils_Tuple2('89763', '労働法学出版'),
			_Utils_Tuple2('89764', '労働法令協会'),
			_Utils_Tuple2('89765', '産業関係研究所'),
			_Utils_Tuple2('89767', 'ロッキー出版'),
			_Utils_Tuple2('89768', 'ロマン・ロラン協会'),
			_Utils_Tuple2('89770', '六法出版社'),
			_Utils_Tuple2('89771', '理想出版社'),
			_Utils_Tuple2('89772', '連合出版'),
			_Utils_Tuple2('89773', '流通ジャーナル'),
			_Utils_Tuple2('89774', '緑蔭書房'),
			_Utils_Tuple2('89775', 'ライフサイエンス出版'),
			_Utils_Tuple2('89776', '力富書房'),
			_Utils_Tuple2('89777', 'らくだ出版'),
			_Utils_Tuple2('89778', 'ルー出版'),
			_Utils_Tuple2('89779', '龍門出版社'),
			_Utils_Tuple2('89780', '檸檬社'),
			_Utils_Tuple2('89781', 'ライフ・サイエンス・センター'),
			_Utils_Tuple2('89782', '労働調査会'),
			_Utils_Tuple2('89783', '理工新社'),
			_Utils_Tuple2('89785', '大阪教科書出版部立教書院'),
			_Utils_Tuple2('89786', 'ラボネート'),
			_Utils_Tuple2('89787', 'ランダム出版'),
			_Utils_Tuple2('89788', 'ロータス・プレス'),
			_Utils_Tuple2('89789', 'レマック総合研究所'),
			_Utils_Tuple2('89790', '理美容教育出版'),
			_Utils_Tuple2('89791', 'リンガフォン・ジャパン'),
			_Utils_Tuple2('89792', '労委協会'),
			_Utils_Tuple2('89793', 'レッツ'),
			_Utils_Tuple2('89794', 'ロイヤル・アート'),
			_Utils_Tuple2('89795', 'ライブ出版'),
			_Utils_Tuple2('89796', 'ループテック'),
			_Utils_Tuple2('89800', 'リム出版新社'),
			_Utils_Tuple2('89802', '驢馬出版'),
			_Utils_Tuple2('89803', 'リーガル出版'),
			_Utils_Tuple2('89804', 'ロングマンジャパン'),
			_Utils_Tuple2('89809', 'ラインブックス(コアハウス)'),
			_Utils_Tuple2('89814', 'ローカス'),
			_Utils_Tuple2('89817', 'ローランド'),
			_Utils_Tuple2('89818', '燎原社'),
			_Utils_Tuple2('89819', '若狭史学会'),
			_Utils_Tuple2('89820', 'ワグナー出版'),
			_Utils_Tuple2('89821', '和広出版'),
			_Utils_Tuple2('89822', 'ワニ・プロダクション'),
			_Utils_Tuple2('89824', 'わかば出版'),
			_Utils_Tuple2('89825', 'わらび書房'),
			_Utils_Tuple2('89827', '早稲田出版'),
			_Utils_Tuple2('89828', 'ワープロ出版'),
			_Utils_Tuple2('89829', 'ワニマガジン社'),
			_Utils_Tuple2('89832', 'ワーナーヴィジョン・ジャパン'),
			_Utils_Tuple2('89974', 'アジア開発銀行研究所'),
			_Utils_Tuple2('89977', 'ラトルズ'),
			_Utils_Tuple2('89978', 'ウインズセンチュリー'),
			_Utils_Tuple2('89981', 'アーバンプロ出版センター'),
			_Utils_Tuple2('89987', '演劇ぶっく社'),
			_Utils_Tuple2('89988', '亜細亜文化出版社'),
			_Utils_Tuple2('89990', 'ハウジングエージェンシー'),
			_Utils_Tuple2('89994', '大阪市都市工学情報センター'),
			_Utils_Tuple2('89997', 'Ａ＆ＡＰｕｂｌｉｓｈｉｎｇ'),
			_Utils_Tuple2('89999', 'オクト出版社'),
			_Utils_Tuple2('900000', '飛鳥出版'),
			_Utils_Tuple2('900001', '梓川書房'),
			_Utils_Tuple2('900002', 'アース社'),
			_Utils_Tuple2('900003', 'アーバン東京'),
			_Utils_Tuple2('900004', 'アールダシエ'),
			_Utils_Tuple2('900005', 'アール・ブイ・シー'),
			_Utils_Tuple2('900006', 'アイエム'),
			_Utils_Tuple2('900007', 'あい出版'),
			_Utils_Tuple2('900008', 'あい書林'),
			_Utils_Tuple2('900009', '藍短歌会'),
			_Utils_Tuple2('900010', '愛知県教育振興会'),
			_Utils_Tuple2('900011', 'あきつ出版'),
			_Utils_Tuple2('900012', '愛知県第一官報販売所'),
			_Utils_Tuple2('900013', '愛知県第二官報販売所'),
			_Utils_Tuple2('900014', 'アイディア社'),
			_Utils_Tuple2('900015', '愛の事業社'),
			_Utils_Tuple2('900016', '青い海出版社'),
			_Utils_Tuple2('900017', '青い季詩社'),
			_Utils_Tuple2('900018', '青い地球社'),
			_Utils_Tuple2('900019', '葵通信社'),
			_Utils_Tuple2('900020', '青い麦舎'),
			_Utils_Tuple2('900021', '青垣山房'),
			_Utils_Tuple2('900022', '青樫社'),
			_Utils_Tuple2('900023', '青芝俳句会'),
			_Utils_Tuple2('900024', '青葉図書'),
			_Utils_Tuple2('900025', '青森書房'),
			_Utils_Tuple2('900026', '青森県児童文学研究会'),
			_Utils_Tuple2('900027', '青森大学出版局'),
			_Utils_Tuple2('900028', '編集工房一生社'),
			_Utils_Tuple2('900029', '赤石印刷出版部'),
			_Utils_Tuple2('900030', 'アカシヤ俳句会'),
			_Utils_Tuple2('900031', 'あかつき書房'),
			_Utils_Tuple2('900033', 'アカデミー'),
			_Utils_Tuple2('900034', 'アニマ２００１'),
			_Utils_Tuple2('900035', '秋田近代文芸史研究会'),
			_Utils_Tuple2('900036', '秋田木材通信社'),
			_Utils_Tuple2('900037', '安芸津記念病院郷土史料室'),
			_Utils_Tuple2('900038', '秋月書房'),
			_Utils_Tuple2('900039', '秋発行所'),
			_Utils_Tuple2('900040', '悪臭公害研究会'),
			_Utils_Tuple2('900043', 'あけぼの社出版局'),
			_Utils_Tuple2('900044', 'あけぼの出版'),
			_Utils_Tuple2('900045', '浅川謙次追悼遺稿集刊行委員会'),
			_Utils_Tuple2('900046', 'えみーる書房'),
			_Utils_Tuple2('900047', '麻俳句会'),
			_Utils_Tuple2('900048', 'インタラック'),
			_Utils_Tuple2('900049', '朝日出版'),
			_Utils_Tuple2('900050', '朝日新聞社事業開発本部'),
			_Utils_Tuple2('900051', '朝日新聞社大阪本社'),
			_Utils_Tuple2('900052', '朝日新聞社名古屋本社'),
			_Utils_Tuple2('900053', '朝日新聞社西部本社'),
			_Utils_Tuple2('900054', '赤坂書院'),
			_Utils_Tuple2('900055', '朝日放送'),
			_Utils_Tuple2('900056', 'エフエムジャパン'),
			_Utils_Tuple2('900057', '葦真文社'),
			_Utils_Tuple2('900058', '葦の葉出版会'),
			_Utils_Tuple2('900059', '馬酔木発行所'),
			_Utils_Tuple2('900060', '阿修羅窟'),
			_Utils_Tuple2('900061', 'アジアクラブ'),
			_Utils_Tuple2('900062', 'アジア総合開発研究所'),
			_Utils_Tuple2('900063', 'アジア太平洋資料センター'),
			_Utils_Tuple2('900064', 'アジア調査会'),
			_Utils_Tuple2('900065', 'アジア・ビジョン'),
			_Utils_Tuple2('900066', 'アジスアベバ社'),
			_Utils_Tuple2('900067', '明日香社'),
			_Utils_Tuple2('900068', 'あすか書房'),
			_Utils_Tuple2('900069', 'アングロ・ワールド・ジャパン'),
			_Utils_Tuple2('900070', 'エンジェル出版'),
			_Utils_Tuple2('900072', 'あづま書房'),
			_Utils_Tuple2('900073', '東書房'),
			_Utils_Tuple2('900075', '愛宕書房'),
			_Utils_Tuple2('900076', '新しい芸術研究室'),
			_Utils_Tuple2('900077', 'オフィステン'),
			_Utils_Tuple2('900078', 'アップル社'),
			_Utils_Tuple2('900079', 'アヅミ書房'),
			_Utils_Tuple2('900080', '朝日ホームドクター社'),
			_Utils_Tuple2('900081', 'アテネ書房'),
			_Utils_Tuple2('900082', 'アテネ出版'),
			_Utils_Tuple2('900083', 'エスプリライン'),
			_Utils_Tuple2('900084', 'アドファイブ出版局'),
			_Utils_Tuple2('900085', 'アーバン・コミュニケーションズ'),
			_Utils_Tuple2('900086', 'アドレポートセンター'),
			_Utils_Tuple2('900087', 'アパッシュ館'),
			_Utils_Tuple2('900088', 'アフリカ開発協会'),
			_Utils_Tuple2('900089', 'アフリカ協会'),
			_Utils_Tuple2('900091', '阿部久書店'),
			_Utils_Tuple2('900092', 'アポロ社'),
			_Utils_Tuple2('900093', 'アートスタジオ'),
			_Utils_Tuple2('900094', 'アポロン企画'),
			_Utils_Tuple2('900095', 'アポロン社'),
			_Utils_Tuple2('900096', 'アマダ'),
			_Utils_Tuple2('900097', '奄美文化研究所'),
			_Utils_Tuple2('900098', 'アミコ出版社'),
			_Utils_Tuple2('900099', 'アキラ・コーポレーション'),
			_Utils_Tuple2('900100', 'アラビア語渋谷教室出版部'),
			_Utils_Tuple2('900101', '新屋経済研究所'),
			_Utils_Tuple2('900102', '新アララギ発行所'),
			_Utils_Tuple2('900104', '有馬書店'),
			_Utils_Tuple2('900106', 'アルドオ'),
			_Utils_Tuple2('900107', 'アルス出版'),
			_Utils_Tuple2('900108', 'アルベール書房'),
			_Utils_Tuple2('900110', '淡路書房'),
			_Utils_Tuple2('900111', 'アンヴィエル'),
			_Utils_Tuple2('900112', 'アン・エンタープライズ'),
			_Utils_Tuple2('900113', '安全工学協会'),
			_Utils_Tuple2('900114', 'アンモニア系製品協会'),
			_Utils_Tuple2('900115', '飯塚書房'),
			_Utils_Tuple2('900116', '飯田橋教育産業'),
			_Utils_Tuple2('900117', '井内古文化研究室'),
			_Utils_Tuple2('900118', 'イエズス会出版'),
			_Utils_Tuple2('900119', '医学映像教育センター'),
			_Utils_Tuple2('900120', '医学情報サービス'),
			_Utils_Tuple2('900121', '医学中央雑誌刊行会'),
			_Utils_Tuple2('900122', 'イスラミックセンター・ジャパン'),
			_Utils_Tuple2('900123', '育英館'),
			_Utils_Tuple2('900125', 'いくせい出版'),
			_Utils_Tuple2('900126', '郁文堂書店'),
			_Utils_Tuple2('900127', '池田公園研究会'),
			_Utils_Tuple2('900128', '一世館'),
			_Utils_Tuple2('900129', '十六夜社'),
			_Utils_Tuple2('900130', 'アート・グラフ社'),
			_Utils_Tuple2('900131', '石川県図書館協会'),
			_Utils_Tuple2('900132', '石川県労働者福祉協議会'),
			_Utils_Tuple2('900133', '石発行所'),
			_Utils_Tuple2('900134', '石本マオラン'),
			_Utils_Tuple2('900135', '石山針灸医学社'),
			_Utils_Tuple2('900136', '医事公論社'),
			_Utils_Tuple2('900138', '泉書房'),
			_Utils_Tuple2('900139', 'いずみ白珠発行所'),
			_Utils_Tuple2('900140', '出雲書店'),
			_Utils_Tuple2('900141', '衣盛社'),
			_Utils_Tuple2('900142', '伊勢崎郷土文化協会'),
			_Utils_Tuple2('900143', 'イタリア書房'),
			_Utils_Tuple2('900144', '一宮川柳社'),
			_Utils_Tuple2('900145', '愛石界'),
			_Utils_Tuple2('900146', 'エース学院'),
			_Utils_Tuple2('900147', '一律書房'),
			_Utils_Tuple2('900148', '一歩社書店'),
			_Utils_Tuple2('900149', 'イデア書院'),
			_Utils_Tuple2('900150', '伊藤伊'),
			_Utils_Tuple2('900151', '稲垣書店出版部'),
			_Utils_Tuple2('900152', '伊藤伊福岡営業所'),
			_Utils_Tuple2('900153', '井上興産'),
			_Utils_Tuple2('900154', 'イベリア'),
			_Utils_Tuple2('900155', 'イマージュ'),
			_Utils_Tuple2('900156', 'アクア出版'),
			_Utils_Tuple2('900157', '伊麻書房'),
			_Utils_Tuple2('900158', '井村書房'),
			_Utils_Tuple2('900159', '井村文化事業社'),
			_Utils_Tuple2('900160', '一道社'),
			_Utils_Tuple2('900161', '伊予史談会'),
			_Utils_Tuple2('900162', '伊予史料集成刊行会'),
			_Utils_Tuple2('900163', '東宝投資顧問'),
			_Utils_Tuple2('900164', '医理産業新聞社'),
			_Utils_Tuple2('900165', '医療図書出版社'),
			_Utils_Tuple2('900166', 'イワヰ'),
			_Utils_Tuple2('900167', 'いわき春秋社'),
			_Utils_Tuple2('900168', '岩下書店'),
			_Utils_Tuple2('900169', '磐田市子ども会世話人会連合会'),
			_Utils_Tuple2('900170', '石楯尾神社'),
			_Utils_Tuple2('900171', '岩手医科大学'),
			_Utils_Tuple2('900172', '岩手教育会館出版部'),
			_Utils_Tuple2('900173', '大成投資顧問'),
			_Utils_Tuple2('900174', '印刷アトリエ'),
			_Utils_Tuple2('900175', '印刷朝陽会'),
			_Utils_Tuple2('900176', '印刷時報社'),
			_Utils_Tuple2('900177', '印象短歌会'),
			_Utils_Tuple2('900178', 'インターコンチネンタルマーケッティング'),
			_Utils_Tuple2('900179', 'インターソング'),
			_Utils_Tuple2('900180', '伊勢治書店'),
			_Utils_Tuple2('900181', 'ＩＹＢ研究所'),
			_Utils_Tuple2('900182', 'インターナショナル・スチューデント・アドバイザーズ'),
			_Utils_Tuple2('900183', 'インターナショナルタイムズ社'),
			_Utils_Tuple2('900184', 'インダストリアリズム研究所'),
			_Utils_Tuple2('900185', '印度学研究所'),
			_Utils_Tuple2('900186', '奈良人権部落解放研究所'),
			_Utils_Tuple2('900187', 'インフォメーション出版社'),
			_Utils_Tuple2('900188', '淡交ウェザヒル出版社'),
			_Utils_Tuple2('900189', '上田安子服飾研究所'),
			_Utils_Tuple2('900190', '上野ステーションホテル'),
			_Utils_Tuple2('900191', '槙村浩の会'),
			_Utils_Tuple2('900192', '魚河岸俳句会'),
			_Utils_Tuple2('900193', '雨月発行所'),
			_Utils_Tuple2('900194', '内田洋行'),
			_Utils_Tuple2('900195', '内山松魅堂'),
			_Utils_Tuple2('900196', '内山書店'),
			_Utils_Tuple2('900197', '宇宙出版'),
			_Utils_Tuple2('900198', '宇宙堂八木書店'),
			_Utils_Tuple2('900199', '宇都宮功喜'),
			_Utils_Tuple2('900200', '出版梓会'),
			_Utils_Tuple2('900201', '卯の花会出版部'),
			_Utils_Tuple2('900202', '宇部地方史研究会'),
			_Utils_Tuple2('900203', '海出版社'),
			_Utils_Tuple2('900204', '短説の会'),
			_Utils_Tuple2('900205', '梅田書房'),
			_Utils_Tuple2('900206', '噂の真相'),
			_Utils_Tuple2('900207', '雲母社'),
			_Utils_Tuple2('900208', '雲母南総支社'),
			_Utils_Tuple2('900209', '運輸政策研究機構'),
			_Utils_Tuple2('900210', '井上成美伝記刊行会'),
			_Utils_Tuple2('900211', 'エー・アンド・ユー'),
			_Utils_Tuple2('900212', 'エスアールエージェンシー'),
			_Utils_Tuple2('900213', 'エーアイシー'),
			_Utils_Tuple2('900214', 'エーデルワイスクラブ'),
			_Utils_Tuple2('900215', 'エアワールド'),
			_Utils_Tuple2('900216', '鋭角発行所'),
			_Utils_Tuple2('900217', '映画芸術新社'),
			_Utils_Tuple2('900218', '映画史研究会'),
			_Utils_Tuple2('900219', '映画出版社'),
			_Utils_Tuple2('900220', '英研'),
			_Utils_Tuple2('900221', '英玄社'),
			_Utils_Tuple2('900222', '叡光堂'),
			_Utils_Tuple2('900223', 'アプライ'),
			_Utils_Tuple2('900224', '英語リズム普及センター'),
			_Utils_Tuple2('900225', 'エイジ'),
			_Utils_Tuple2('900226', '永立出版'),
			_Utils_Tuple2('900227', '永田社'),
			_Utils_Tuple2('900228', 'ウェストケープコーポレーション'),
			_Utils_Tuple2('900229', '英和出版'),
			_Utils_Tuple2('900230', '英陽産業'),
			_Utils_Tuple2('900231', 'エキスプレス広告社'),
			_Utils_Tuple2('900232', 'エコー企画'),
			_Utils_Tuple2('900233', 'エコン'),
			_Utils_Tuple2('900234', 'エスアイ'),
			_Utils_Tuple2('900235', 'エスエル出版会'),
			_Utils_Tuple2('900236', '越後タイムス'),
			_Utils_Tuple2('900237', '悦声社'),
			_Utils_Tuple2('900238', 'エディシオン＜象＞'),
			_Utils_Tuple2('900239', 'エディトリアル・プランニング'),
			_Utils_Tuple2('900240', '金雀枝短歌会'),
			_Utils_Tuple2('900241', '大森印刷所'),
			_Utils_Tuple2('900242', 'エヌ・エス・ティインターナショナル'),
			_Utils_Tuple2('900243', 'エヌ・ジー・シー'),
			_Utils_Tuple2('900244', 'エヌダブリュウ・エスエフ社'),
			_Utils_Tuple2('900245', 'オーロラ自由アトリエ'),
			_Utils_Tuple2('900246', 'エネルギージャーナル社'),
			_Utils_Tuple2('900247', '江ノ電沿線新聞社'),
			_Utils_Tuple2('900249', '愛媛地学会'),
			_Utils_Tuple2('900250', '愛媛文化双書刊行会'),
			_Utils_Tuple2('900251', 'エフェルセンター'),
			_Utils_Tuple2('900252', 'エム・イー振興協会'),
			_Utils_Tuple2('900253', 'エムジーコーポレーション'),
			_Utils_Tuple2('900254', 'エリナ社'),
			_Utils_Tuple2('900255', '園芸学会'),
			_Utils_Tuple2('900256', '演劇出版社'),
			_Utils_Tuple2('900257', '遠天社'),
			_Utils_Tuple2('900258', '遠藤青汁の会'),
			_Utils_Tuple2('900259', '遠藤誠法律事務所'),
			_Utils_Tuple2('900260', '遠兵パブリコ'),
			_Utils_Tuple2('900261', '一竹書房'),
			_Utils_Tuple2('900262', 'エイ・アイ・ピー・ピー・アイ日本部会'),
			_Utils_Tuple2('900263', 'ＮＣＢ(文化放送)留学委員会'),
			_Utils_Tuple2('900264', 'アート・インタナショナル'),
			_Utils_Tuple2('900265', 'エースデザイン'),
			_Utils_Tuple2('900266', '音楽図書館協議会'),
			_Utils_Tuple2('900267', '大石神社社務所'),
			_Utils_Tuple2('900268', '大分県社会福祉協議会'),
			_Utils_Tuple2('900269', '大分県人社'),
			_Utils_Tuple2('900270', '大分県の民話刊行会'),
			_Utils_Tuple2('900271', '大江出版社'),
			_Utils_Tuple2('900273', '大神神社史料編修委員会'),
			_Utils_Tuple2('900274', '狼プロ'),
			_Utils_Tuple2('900275', '大倉精神文化研究所'),
			_Utils_Tuple2('900276', 'マルチモード'),
			_Utils_Tuple2('900277', 'かんぽう'),
			_Utils_Tuple2('900278', '大阪官報社'),
			_Utils_Tuple2('900279', '大阪経済史料集成刊行委員会'),
			_Utils_Tuple2('900280', '大阪経済評論社'),
			_Utils_Tuple2('900281', '大阪工研協会'),
			_Utils_Tuple2('900282', '大阪史談会'),
			_Utils_Tuple2('900283', '大阪出版協会'),
			_Utils_Tuple2('900284', '大沢商会・教育機材部'),
			_Utils_Tuple2('900285', '大阪証券取引所(広報グループ)'),
			_Utils_Tuple2('900286', '大阪商工会議所'),
			_Utils_Tuple2('900287', '大阪市立大学経済学会'),
			_Utils_Tuple2('900288', '大阪市立大学経済研究会'),
			_Utils_Tuple2('900289', '大阪綜合事務センター'),
			_Utils_Tuple2('900290', '大阪フォルム画廊出版部'),
			_Utils_Tuple2('900291', '大阪ブリキ玩具資料室'),
			_Utils_Tuple2('900292', '大阪文化団体連合会'),
			_Utils_Tuple2('900293', 'オーシャン・エージ社'),
			_Utils_Tuple2('900294', 'オオカワ・リアルエステート'),
			_Utils_Tuple2('900295', '太田書房'),
			_Utils_Tuple2('900296', '大谷店舗装備'),
			_Utils_Tuple2('900297', 'オータパブリケイションズ'),
			_Utils_Tuple2('900298', '大塚巧藝社'),
			_Utils_Tuple2('900299', 'オーディオ出版'),
			_Utils_Tuple2('900300', '大手町出版社'),
			_Utils_Tuple2('900301', 'オート'),
			_Utils_Tuple2('900302', '沿岸開発技術研究センター'),
			_Utils_Tuple2('900303', '黄土社'),
			_Utils_Tuple2('900305', '大原出版'),
			_Utils_Tuple2('900306', '大原出版企画'),
			_Utils_Tuple2('900307', '大村史談会'),
			_Utils_Tuple2('900308', '青梅短歌会'),
			_Utils_Tuple2('900309', '青梅郷土博物館'),
			_Utils_Tuple2('900310', '産業科学システムズ'),
			_Utils_Tuple2('900311', '大淀事業社'),
			_Utils_Tuple2('900312', '大類作文教育研究所'),
			_Utils_Tuple2('900313', 'アド・プロヴィジョン'),
			_Utils_Tuple2('900314', '岡沢祐吉書店'),
			_Utils_Tuple2('900315', 'アビックス出版'),
			_Utils_Tuple2('900316', '岡田スタンプ商会'),
			_Utils_Tuple2('900317', '岡山日日新聞社'),
			_Utils_Tuple2('900318', '小川出版'),
			_Utils_Tuple2('900319', '荻野政'),
			_Utils_Tuple2('900321', '尾崎清文'),
			_Utils_Tuple2('900322', '小樽川柳社'),
			_Utils_Tuple2('900323', '小田原市立図書館'),
			_Utils_Tuple2('900324', 'オットーズ・ブックス社'),
			_Utils_Tuple2('900325', 'オヌママリン'),
			_Utils_Tuple2('900326', '宇宙創生・光の界'),
			_Utils_Tuple2('900327', '帯伊書店'),
			_Utils_Tuple2('900328', 'アメニティ・サイエンス'),
			_Utils_Tuple2('900329', 'オフィス・マガジン'),
			_Utils_Tuple2('900330', 'オホーツク書房'),
			_Utils_Tuple2('900331', 'アースエイド'),
			_Utils_Tuple2('900332', 'オリエンタルエコノミスト'),
			_Utils_Tuple2('900333', 'オリエントエンタープライズ'),
			_Utils_Tuple2('900334', '大阪市土木技術協会'),
			_Utils_Tuple2('900335', 'オリオン'),
			_Utils_Tuple2('900336', 'オリジナル企画'),
			_Utils_Tuple2('900337', 'オリンパスエー・ビー・エス'),
			_Utils_Tuple2('900338', 'オレンジキャット'),
			_Utils_Tuple2('900339', '音楽教育社'),
			_Utils_Tuple2('900340', '音楽出版社'),
			_Utils_Tuple2('900341', 'イヤサカ商事'),
			_Utils_Tuple2('900342', '音楽新報社'),
			_Utils_Tuple2('900344', '音楽センター'),
			_Utils_Tuple2('900345', '音元出版'),
			_Utils_Tuple2('900346', 'アイデスク出版'),
			_Utils_Tuple2('900347', 'ＯＮＰ'),
			_Utils_Tuple2('900348', '青企画出版'),
			_Utils_Tuple2('900349', 'ＳＥＳ'),
			_Utils_Tuple2('900350', 'エーアンドエム茜出版'),
			_Utils_Tuple2('900351', '江崎書店'),
			_Utils_Tuple2('900352', 'ＥＭ外語研究所'),
			_Utils_Tuple2('900353', 'アイスター'),
			_Utils_Tuple2('900354', 'あずさ書店'),
			_Utils_Tuple2('900355', '医学館'),
			_Utils_Tuple2('900356', '太陽投資顧問'),
			_Utils_Tuple2('900357', '大阪創作出版会'),
			_Utils_Tuple2('900358', 'アボック社'),
			_Utils_Tuple2('900359', 'オレンジーポコ'),
			_Utils_Tuple2('900360', 'アイ・エス・シー'),
			_Utils_Tuple2('900361', 'アジア文化研究会'),
			_Utils_Tuple2('900362', 'ありす'),
			_Utils_Tuple2('900363', 'アーバン出版会'),
			_Utils_Tuple2('900364', '医事日報'),
			_Utils_Tuple2('900366', 'あいであ・らいふ'),
			_Utils_Tuple2('900368', 'インターナショナル・ラーニング・システムズ（ジャパン）ＬＴＤ'),
			_Utils_Tuple2('900369', '温故堂出版'),
			_Utils_Tuple2('900370', 'アサヒ出版'),
			_Utils_Tuple2('900371', '有田書房'),
			_Utils_Tuple2('900372', '英文堂書店'),
			_Utils_Tuple2('900373', 'エイビス・ブックセールス'),
			_Utils_Tuple2('900374', '沖縄教販'),
			_Utils_Tuple2('900375', 'オークブックセラーズ'),
			_Utils_Tuple2('900376', 'アシーネ'),
			_Utils_Tuple2('900377', 'エイペックス出版部'),
			_Utils_Tuple2('900378', 'アドパックセンター'),
			_Utils_Tuple2('900379', 'ウチダ出版会'),
			_Utils_Tuple2('900380', 'アデカ啓文舎'),
			_Utils_Tuple2('900381', 'いちえんそう'),
			_Utils_Tuple2('900382', 'ウサギヤ書店'),
			_Utils_Tuple2('900383', '永和語学社'),
			_Utils_Tuple2('900384', '有明社'),
			_Utils_Tuple2('900385', '大塚カラー出版'),
			_Utils_Tuple2('900386', '歩書房'),
			_Utils_Tuple2('900387', 'ＡＢＣ出版'),
			_Utils_Tuple2('900389', 'アイ・エス・エス'),
			_Utils_Tuple2('900390', 'オーシャンライフ'),
			_Utils_Tuple2('900391', '鱗形屋プロダクション'),
			_Utils_Tuple2('900393', 'ベルブック'),
			_Utils_Tuple2('900394', 'エルピス'),
			_Utils_Tuple2('900395', 'エディシオン・アルシーヴ'),
			_Utils_Tuple2('900396', '医学情報社'),
			_Utils_Tuple2('900397', 'エンマン・インターナショナル'),
			_Utils_Tuple2('900398', 'イッシプレス'),
			_Utils_Tuple2('900399', 'オカワ出版'),
			_Utils_Tuple2('900400', '飛鳥保存財団'),
			_Utils_Tuple2('900401', 'あいうえお館'),
			_Utils_Tuple2('900402', 'アール・アール・シー'),
			_Utils_Tuple2('900404', 'アクティブスポーツ社'),
			_Utils_Tuple2('900405', 'インロック社'),
			_Utils_Tuple2('900406', 'ＡＡ出版'),
			_Utils_Tuple2('900407', '医療情報システム開発センター'),
			_Utils_Tuple2('900408', '櫟'),
			_Utils_Tuple2('900409', '小矢部青年会議所'),
			_Utils_Tuple2('900410', '栄光堂'),
			_Utils_Tuple2('900411', '大阪日刊スポーツ新聞社'),
			_Utils_Tuple2('900412', 'エヌシービー出版'),
			_Utils_Tuple2('900413', 'あの人この人社'),
			_Utils_Tuple2('900414', 'あきがわ書房'),
			_Utils_Tuple2('900415', '大阪に司書職制度の確立をすすめる会'),
			_Utils_Tuple2('900418', '味の素'),
			_Utils_Tuple2('900419', '応用薬理研究会'),
			_Utils_Tuple2('900420', '伊勢原新聞社'),
			_Utils_Tuple2('900421', '太極拳長江会出版部'),
			_Utils_Tuple2('900422', 'アークインタナショナル'),
			_Utils_Tuple2('900424', 'いちい書房'),
			_Utils_Tuple2('900425', 'オート・トレード・ジャーナル'),
			_Utils_Tuple2('900426', 'アイク'),
			_Utils_Tuple2('900427', 'おはなしキャラバンをひろめる会'),
			_Utils_Tuple2('900428', 'あき書房'),
			_Utils_Tuple2('900429', 'アシスト'),
			_Utils_Tuple2('900431', 'アイシンブック'),
			_Utils_Tuple2('900432', 'いんてる社'),
			_Utils_Tuple2('900433', '有馬編集工舎'),
			_Utils_Tuple2('900434', 'アーバンブックス'),
			_Utils_Tuple2('900436', '岡村デザイン事務所'),
			_Utils_Tuple2('900437', 'アベ・グリム事業部'),
			_Utils_Tuple2('900438', 'えせんす'),
			_Utils_Tuple2('900439', '一風社'),
			_Utils_Tuple2('900440', 'アーバンプロデュース'),
			_Utils_Tuple2('900441', 'みいづ舎'),
			_Utils_Tuple2('900442', 'アイオーエム'),
			_Utils_Tuple2('900443', '茨城県観光協会'),
			_Utils_Tuple2('900444', 'ＩＵＦＲＯシンポジウム組織委員会'),
			_Utils_Tuple2('900445', 'ＡＣＯＲＮ'),
			_Utils_Tuple2('900446', 'アート・ライフ'),
			_Utils_Tuple2('900447', 'エスクエラ'),
			_Utils_Tuple2('900448', '泉屋書店'),
			_Utils_Tuple2('900449', 'アルカナ出版'),
			_Utils_Tuple2('900450', 'アクシス'),
			_Utils_Tuple2('900452', 'オフィス弐千弐拾'),
			_Utils_Tuple2('900453', 'オリエント教育システム'),
			_Utils_Tuple2('900454', 'エルサレム宗教文化研究所'),
			_Utils_Tuple2('900455', 'アートダイジェスト'),
			_Utils_Tuple2('900457', '伊勢新聞社'),
			_Utils_Tuple2('900458', 'アジア資料懇話会'),
			_Utils_Tuple2('900459', '石川事務所'),
			_Utils_Tuple2('900460', 'エンタープライズ・カンパニー'),
			_Utils_Tuple2('900461', 'オーディーエス'),
			_Utils_Tuple2('900462', '医療専門職研究会'),
			_Utils_Tuple2('900463', 'エスコム'),
			_Utils_Tuple2('900464', 'あまから手帖社'),
			_Utils_Tuple2('900465', 'アビック'),
			_Utils_Tuple2('900466', 'Ｓ・Ｔ・Ａ'),
			_Utils_Tuple2('900467', '磯貝布帛工業'),
			_Utils_Tuple2('900468', 'オールインワン出版部'),
			_Utils_Tuple2('900469', '演歌ジャーナル'),
			_Utils_Tuple2('900470', 'うぶすな書院'),
			_Utils_Tuple2('900471', 'アパートニュース出版'),
			_Utils_Tuple2('900472', '岩崎博物館(ゲーテ座記念)出版局'),
			_Utils_Tuple2('900473', 'アド出版'),
			_Utils_Tuple2('900474', 'オプトロニクス社'),
			_Utils_Tuple2('900475', 'エディション・フランセーズ'),
			_Utils_Tuple2('900477', 'アイシーエーオブジャパン(江戸カルチャープレス)'),
			_Utils_Tuple2('900478', '市進・市進出版'),
			_Utils_Tuple2('900479', '宙(オオゾラ)'),
			_Utils_Tuple2('900480', '無限堂'),
			_Utils_Tuple2('900481', '一心出版'),
			_Utils_Tuple2('900482', '一穂社'),
			_Utils_Tuple2('900483', 'イメージハウス'),
			_Utils_Tuple2('900484', 'アパマン'),
			_Utils_Tuple2('900485', 'オフィス・マインド'),
			_Utils_Tuple2('900486', 'イトー三洋'),
			_Utils_Tuple2('900487', 'エル・アイ・シー'),
			_Utils_Tuple2('900488', 'オーマック'),
			_Utils_Tuple2('900489', 'エルボーフ'),
			_Utils_Tuple2('900490', 'イングリッシュ・コミュニケーション・プレス'),
			_Utils_Tuple2('900491', '岩波出版サービスセンター'),
			_Utils_Tuple2('900492', '愛知図書館協会'),
			_Utils_Tuple2('900493', 'サーモン出版'),
			_Utils_Tuple2('900494', 'エイチ・ティー出版'),
			_Utils_Tuple2('900495', 'おとずれ社'),
			_Utils_Tuple2('900496', 'アイ・プランニング'),
			_Utils_Tuple2('900498', 'うつのみや'),
			_Utils_Tuple2('900499', 'アオバゼミナール'),
			_Utils_Tuple2('900500', 'アウン'),
			_Utils_Tuple2('900501', '“傲れる者彼を忘れて”出版グループ'),
			_Utils_Tuple2('900502', '大阪市立東洋陶磁美術館'),
			_Utils_Tuple2('900503', 'イオブックス'),
			_Utils_Tuple2('900504', 'オピニオン'),
			_Utils_Tuple2('900505', 'アルカ'),
			_Utils_Tuple2('900506', 'アジア文化交流センター'),
			_Utils_Tuple2('900507', '英和企画'),
			_Utils_Tuple2('900508', 'アグネ承風社'),
			_Utils_Tuple2('900509', 'アートセンター出版'),
			_Utils_Tuple2('900510', '井ノ川博行公認会計士事務所'),
			_Utils_Tuple2('900511', 'アドア出版'),
			_Utils_Tuple2('900512', 'イメージプロダクツ'),
			_Utils_Tuple2('900513', 'エーシーシー'),
			_Utils_Tuple2('900514', '医典社'),
			_Utils_Tuple2('900515', 'ＡＡＯ出版'),
			_Utils_Tuple2('900516', '光星社'),
			_Utils_Tuple2('900517', 'アート出版'),
			_Utils_Tuple2('900518', 'ＳＳＨ英語教育研究会'),
			_Utils_Tuple2('900520', 'アドバタイズコミュニケーション'),
			_Utils_Tuple2('900521', '亜細亜大学アジア研究所(アジア書房)'),
			_Utils_Tuple2('900522', 'アジア民族造形文化研究所'),
			_Utils_Tuple2('900523', 'オーエスビー出版'),
			_Utils_Tuple2('900524', 'エル・ジー・シー総合研究所'),
			_Utils_Tuple2('900525', '育児文化研究所出版部'),
			_Utils_Tuple2('900526', '物理系学術誌刊行協会'),
			_Utils_Tuple2('900529', 'エリート出版社'),
			_Utils_Tuple2('900530', 'アジア書籍展実行委員会'),
			_Utils_Tuple2('900531', '宇治書店'),
			_Utils_Tuple2('900532', 'エム・アイ通信社'),
			_Utils_Tuple2('900533', '絵本の家'),
			_Utils_Tuple2('900536', '近江文化社'),
			_Utils_Tuple2('900537', '場所環境科学高等研究院'),
			_Utils_Tuple2('900538', '印旛沼環境基金'),
			_Utils_Tuple2('900539', '大塚製薬'),
			_Utils_Tuple2('900540', 'エス・ピー・エス出版'),
			_Utils_Tuple2('900541', '亜璃西社'),
			_Utils_Tuple2('900542', 'ウイ書房'),
			_Utils_Tuple2('900543', 'イグザミナ'),
			_Utils_Tuple2('900544', 'Ｅｄｉｔｉｏｎ Ｗａｃｏａｌ'),
			_Utils_Tuple2('900545', '伊砂文様研究所'),
			_Utils_Tuple2('900546', 'アズ工房'),
			_Utils_Tuple2('900547', '赤ちゃん本舗'),
			_Utils_Tuple2('900548', '石山健一'),
			_Utils_Tuple2('900549', 'あーまん企画'),
			_Utils_Tuple2('900551', 'アリネ社'),
			_Utils_Tuple2('900552', 'アンテナハウス'),
			_Utils_Tuple2('900553', 'エム・エヌ・エス'),
			_Utils_Tuple2('900554', 'アルト出版企画'),
			_Utils_Tuple2('900555', '飛鳥'),
			_Utils_Tuple2('900556', '愛知書房'),
			_Utils_Tuple2('900557', '石川島播磨重工業原子力事業部総合設計部'),
			_Utils_Tuple2('900558', '大阪都市協会'),
			_Utils_Tuple2('900559', '江沼地方史研究会'),
			_Utils_Tuple2('900560', 'あいでん舎インターナショナル'),
			_Utils_Tuple2('900561', 'イデアイデア出版局'),
			_Utils_Tuple2('900562', '衣服衛生管理学院'),
			_Utils_Tuple2('900563', 'アシュラム・センター'),
			_Utils_Tuple2('900565', 'アピア'),
			_Utils_Tuple2('900566', 'インターコミュニケーション'),
			_Utils_Tuple2('900567', '映音'),
			_Utils_Tuple2('900569', 'エディポック'),
			_Utils_Tuple2('900570', 'アプライドナレッジ'),
			_Utils_Tuple2('900571', '医学振興社'),
			_Utils_Tuple2('900572', 'アーツ出版部'),
			_Utils_Tuple2('900574', 'エルランティの光出版'),
			_Utils_Tuple2('900575', '医学出版センター'),
			_Utils_Tuple2('900576', 'アール・グレイ出版'),
			_Utils_Tuple2('900577', 'エイジェイ出版'),
			_Utils_Tuple2('900578', 'アイネック'),
			_Utils_Tuple2('900579', '池田編集事務所'),
			_Utils_Tuple2('900580', 'アビダルマ研究所'),
			_Utils_Tuple2('900581', 'エルピス社'),
			_Utils_Tuple2('900582', 'ＦＹ出版'),
			_Utils_Tuple2('900583', 'エー・ビー・シー開発'),
			_Utils_Tuple2('900584', 'イースタン・ブック・サーヴィス'),
			_Utils_Tuple2('900585', 'あみのさん'),
			_Utils_Tuple2('900586', '合氣ニュース'),
			_Utils_Tuple2('900587', 'エイ・ピー・シー'),
			_Utils_Tuple2('900588', '大阪外国語大学学術出版委員会'),
			_Utils_Tuple2('900589', 'ＯＬＪ'),
			_Utils_Tuple2('900590', '阿吽社'),
			_Utils_Tuple2('900591', '青い空'),
			_Utils_Tuple2('900592', 'エミール社'),
			_Utils_Tuple2('900593', 'ニフティ'),
			_Utils_Tuple2('900594', 'ウェッジ'),
			_Utils_Tuple2('900595', 'エポックス研究所'),
			_Utils_Tuple2('900596', '家永'),
			_Utils_Tuple2('900597', '上島出版'),
			_Utils_Tuple2('900598', '広視書院'),
			_Utils_Tuple2('900599', 'アミカル'),
			_Utils_Tuple2('900600', '医聖社'),
			_Utils_Tuple2('900601', 'アビリティネットワーク'),
			_Utils_Tuple2('900602', 'ウォルシュジャパンバイオメディス事業部'),
			_Utils_Tuple2('900603', 'アートデータ'),
			_Utils_Tuple2('900604', 'オビワン・ケヌービー'),
			_Utils_Tuple2('900605', '井関書店'),
			_Utils_Tuple2('900606', 'アドバンス大分'),
			_Utils_Tuple2('900607', '大阪進研'),
			_Utils_Tuple2('900608', 'ＮＴＴラーニングシステムズ'),
			_Utils_Tuple2('900609', 'インテリジェンス・カウンセル'),
			_Utils_Tuple2('900610', 'イベントダイヤル'),
			_Utils_Tuple2('900611', '石原出版社'),
			_Utils_Tuple2('900612', '和尚エンタープライズジャパン'),
			_Utils_Tuple2('900613', 'Ｉｎｆｉｎｉｔｅ Ｒｅｓｏｕｒｃｅｓ'),
			_Utils_Tuple2('900614', 'イノベーター'),
			_Utils_Tuple2('900616', '朝日書林'),
			_Utils_Tuple2('900617', 'エス・ビー・エイ'),
			_Utils_Tuple2('900618', 'アジア・プレス'),
			_Utils_Tuple2('900619', 'ＡＶ生活総合研究所'),
			_Utils_Tuple2('900620', 'アルファーマ・ジャパン'),
			_Utils_Tuple2('900621', 'あむすく'),
			_Utils_Tuple2('900622', 'ＥＲＣ出版'),
			_Utils_Tuple2('900623', '大橋芳美出版'),
			_Utils_Tuple2('900624', 'ＡＧＮ Ｓ Ｂ'),
			_Utils_Tuple2('900625', 'イー・シー'),
			_Utils_Tuple2('900626', 'イセブ'),
			_Utils_Tuple2('900627', '暁学園'),
			_Utils_Tuple2('900628', 'いよぎん地域経済研究センター'),
			_Utils_Tuple2('900629', 'ＡＤＩＳ ＩＮＴＥＲＮＡＴＩＯＮＡＬ ＬＴＤ'),
			_Utils_Tuple2('900630', 'エイティエイト'),
			_Utils_Tuple2('900631', 'アクターズ'),
			_Utils_Tuple2('900632', 'アドリブ'),
			_Utils_Tuple2('900633', 'インターメルク'),
			_Utils_Tuple2('900634', 'エイド出版'),
			_Utils_Tuple2('900635', 'アール・アール・シー'),
			_Utils_Tuple2('900636', '医学書房'),
			_Utils_Tuple2('900637', 'インテルナ出版'),
			_Utils_Tuple2('900638', '大阪予備校・大阪北予備校'),
			_Utils_Tuple2('900639', 'アズ・コミュニケーションズ'),
			_Utils_Tuple2('900640', 'カトリックイエズス会'),
			_Utils_Tuple2('900642', 'ＯＫプロ'),
			_Utils_Tuple2('900643', 'インターレップス'),
			_Utils_Tuple2('900644', 'エスパ'),
			_Utils_Tuple2('900645', '愛編集室・垂水社'),
			_Utils_Tuple2('900646', 'インターステイト・ウィル・ゴルフ'),
			_Utils_Tuple2('900647', 'エムシーアール'),
			_Utils_Tuple2('900648', '大阪総合医学・教育研究会'),
			_Utils_Tuple2('900649', '大妻女子大学人間生活科学研究所'),
			_Utils_Tuple2('900650', 'エヌアンドエヌパブリッシング'),
			_Utils_Tuple2('900651', '岡田企画'),
			_Utils_Tuple2('900652', 'アイメックス'),
			_Utils_Tuple2('900653', 'オノエ・パブリケイション'),
			_Utils_Tuple2('900654', '煎本孝'),
			_Utils_Tuple2('900655', 'エスティエスエンタープライズ'),
			_Utils_Tuple2('900656', 'アスラン書房'),
			_Utils_Tuple2('900657', '医科学出版社'),
			_Utils_Tuple2('900658', 'ＨＦＳ出版'),
			_Utils_Tuple2('900659', 'アドスリー'),
			_Utils_Tuple2('900660', 'ＮＫＳ情報ネットワーク'),
			_Utils_Tuple2('900661', '岩手政策情報センター'),
			_Utils_Tuple2('900662', 'インターセル'),
			_Utils_Tuple2('900663', '稲盛財団'),
			_Utils_Tuple2('900664', 'Ｓ・Ｃ・Ｃ'),
			_Utils_Tuple2('900665', 'インフォマートジャパン'),
			_Utils_Tuple2('900666', '一麦出版社'),
			_Utils_Tuple2('900667', 'ＮＣＭ２ ＢＯＯＫ'),
			_Utils_Tuple2('900668', '沖縄出版'),
			_Utils_Tuple2('900669', 'エムピーアイ出版'),
			_Utils_Tuple2('900670', 'アイ・エヌ・ジー'),
			_Utils_Tuple2('900671', '井上總合印刷'),
			_Utils_Tuple2('900672', 'エヌ・アンド・アイコーポレーション'),
			_Utils_Tuple2('900673', 'エスアンドエス'),
			_Utils_Tuple2('900674', 'インフォメイト'),
			_Utils_Tuple2('900675', 'アイエスアイ'),
			_Utils_Tuple2('900676', 'エイト出版'),
			_Utils_Tuple2('900677', 'あめんどう'),
			_Utils_Tuple2('900678', '麻布台出版社'),
			_Utils_Tuple2('900679', '安芸タイプ'),
			_Utils_Tuple2('900680', '大阪土質試験所'),
			_Utils_Tuple2('900682', '黙出版'),
			_Utils_Tuple2('900683', '面河山岳博物館'),
			_Utils_Tuple2('900684', 'エディ'),
			_Utils_Tuple2('900685', 'アイ出版企画'),
			_Utils_Tuple2('900686', 'エディケーション'),
			_Utils_Tuple2('900687', '大阪市文化財協会'),
			_Utils_Tuple2('900688', '奥泉和香'),
			_Utils_Tuple2('900689', 'インターカムプレス'),
			_Utils_Tuple2('900691', 'ＩＢＣビジョン'),
			_Utils_Tuple2('900692', '一元社'),
			_Utils_Tuple2('900693', '四恩舎'),
			_Utils_Tuple2('900694', 'いろり社'),
			_Utils_Tuple2('900695', 'エスト出版'),
			_Utils_Tuple2('900696', '朝日メディアインターナショナル'),
			_Utils_Tuple2('900698', '永順ログ・キャビン出版'),
			_Utils_Tuple2('900701', 'ＭＨＬ出版社'),
			_Utils_Tuple2('900702', 'オムニ情報開発'),
			_Utils_Tuple2('900703', 'ウーム・スタック'),
			_Utils_Tuple2('900704', 'エスラップ・コミュニケーションズ'),
			_Utils_Tuple2('900705', 'Ａ．Ｅ．Ｌ．Ｓ．'),
			_Utils_Tuple2('900706', '市川総合文化企画研究所'),
			_Utils_Tuple2('900707', '大谷大学真宗総合研究所'),
			_Utils_Tuple2('900709', 'エース出版'),
			_Utils_Tuple2('900710', '麻布プロデュース'),
			_Utils_Tuple2('900711', '大本エスペラント普及会'),
			_Utils_Tuple2('900712', '大阪国際交流センター'),
			_Utils_Tuple2('900713', '親業訓練協会'),
			_Utils_Tuple2('900714', 'エス・イー・エル・インターナショナル'),
			_Utils_Tuple2('900715', 'オリオン'),
			_Utils_Tuple2('900716', 'アペックス'),
			_Utils_Tuple2('900717', 'エルコ'),
			_Utils_Tuple2('900718', 'インターナショナルトムソンパブリッシング'),
			_Utils_Tuple2('900719', 'ＭＭ企画'),
			_Utils_Tuple2('900720', '英創社'),
			_Utils_Tuple2('900721', '会津大学出版局'),
			_Utils_Tuple2('900722', '朝日カルチャーセンター'),
			_Utils_Tuple2('900723', 'アイネットワーク'),
			_Utils_Tuple2('900724', 'ウィンズ'),
			_Utils_Tuple2('900726', '栄光出版'),
			_Utils_Tuple2('900727', '秋編集事務所'),
			_Utils_Tuple2('900728', 'アップリンク'),
			_Utils_Tuple2('900729', 'アトリエ風信'),
			_Utils_Tuple2('900730', 'ＩＴＰＪ'),
			_Utils_Tuple2('900731', 'エスビービーシステム'),
			_Utils_Tuple2('900732', 'アイアイ'),
			_Utils_Tuple2('900733', 'おおとり舎'),
			_Utils_Tuple2('900734', 'エイチ・アイ・エイチバイオセンタープレス部'),
			_Utils_Tuple2('900735', 'アイン房'),
			_Utils_Tuple2('900736', 'アルマス・バイオコスモス研究所'),
			_Utils_Tuple2('900737', 'ＹＥＮ ＢＯＯＫＳ'),
			_Utils_Tuple2('900738', 'アイビー出版'),
			_Utils_Tuple2('900739', 'アイジーアール・パブリケーションズ'),
			_Utils_Tuple2('900740', 'Ｅｉｇｏ ＴＥＡＭ'),
			_Utils_Tuple2('900741', 'インフォ・クリエイツ'),
			_Utils_Tuple2('900742', 'あさひ高速印刷出版部'),
			_Utils_Tuple2('900743', '石川書店'),
			_Utils_Tuple2('900744', 'アイメイト'),
			_Utils_Tuple2('900745', '育英工業高等専門学校'),
			_Utils_Tuple2('900746', 'インターネット'),
			_Utils_Tuple2('900748', 'ＩＣＭ Ｐｒｅｓｓ'),
			_Utils_Tuple2('900749', '医療ジャーナル社'),
			_Utils_Tuple2('900750', 'アファジャパンアソシエイツ'),
			_Utils_Tuple2('900751', 'イメージファクトリー・アイエム'),
			_Utils_Tuple2('900752', 'エーペックス・インターナショナル'),
			_Utils_Tuple2('900753', 'オープンブック'),
			_Utils_Tuple2('900754', '朝日ビジネスカルチャー'),
			_Utils_Tuple2('900755', 'エイムズ'),
			_Utils_Tuple2('900756', 'オフィスバッハ'),
			_Utils_Tuple2('900757', 'アトリエＯＣＴＡ'),
			_Utils_Tuple2('900758', '大月美術出版事業部'),
			_Utils_Tuple2('900759', '伊勢文化舎'),
			_Utils_Tuple2('900760', 'エール学園出版局'),
			_Utils_Tuple2('900761', '医療法人宏樹会太田内科'),
			_Utils_Tuple2('900762', 'アジア書房'),
			_Utils_Tuple2('900763', 'Ａｂｉｋｏ Ｌｉｔｅｒａｒｙ Ｐｒｅｓｓ(ＡＬＰ)'),
			_Utils_Tuple2('900764', 'アーキ・プラン'),
			_Utils_Tuple2('900765', 'うみうし社'),
			_Utils_Tuple2('900766', 'オッホ'),
			_Utils_Tuple2('900768', '江戸クリエート'),
			_Utils_Tuple2('900769', 'エスイー'),
			_Utils_Tuple2('900771', '大本本部国際部'),
			_Utils_Tuple2('900772', 'エウレカ'),
			_Utils_Tuple2('900773', 'アザーハウス'),
			_Utils_Tuple2('900774', '三ッ村書店'),
			_Utils_Tuple2('900775', 'おはようねこの出版社'),
			_Utils_Tuple2('900776', '青葉印刷'),
			_Utils_Tuple2('900777', 'アートコレクションハウス'),
			_Utils_Tuple2('900778', 'アイ・エム・シー'),
			_Utils_Tuple2('900779', 'イーハ・トーヴ出版'),
			_Utils_Tuple2('900781', 'エージー出版'),
			_Utils_Tuple2('900782', 'えとしっく'),
			_Utils_Tuple2('900783', 'あまのはしだて出版'),
			_Utils_Tuple2('900784', 'アイシーエス企画'),
			_Utils_Tuple2('900785', 'インファス'),
			_Utils_Tuple2('900786', 'アスカ自費出版'),
			_Utils_Tuple2('900787', 'あさま童風社'),
			_Utils_Tuple2('900788', 'エイチアイシィー'),
			_Utils_Tuple2('900789', '清春白樺美術館'),
			_Utils_Tuple2('900790', 'アイシーピー'),
			_Utils_Tuple2('900791', '音楽文献目録委員会'),
			_Utils_Tuple2('900792', '赤門倶楽部'),
			_Utils_Tuple2('900793', 'イタリア国立東方学研究所'),
			_Utils_Tuple2('900794', 'エム・エス・プレス'),
			_Utils_Tuple2('900795', '大阪サンスポ企画'),
			_Utils_Tuple2('900798', 'ＥＡＳＹ ＬＩＦＥ社'),
			_Utils_Tuple2('900800', '大阪キリスト教書店'),
			_Utils_Tuple2('900801', 'ＩＵＰ・移動大学出版会'),
			_Utils_Tuple2('900802', 'アクアプラン'),
			_Utils_Tuple2('900803', 'アトソン'),
			_Utils_Tuple2('900804', '沖縄生物学会'),
			_Utils_Tuple2('900805', 'オールウェイズ'),
			_Utils_Tuple2('900806', 'ピースオンデマンド'),
			_Utils_Tuple2('900807', '医学情報社'),
			_Utils_Tuple2('900809', '青い海出版'),
			_Utils_Tuple2('900810', 'オラシオン'),
			_Utils_Tuple2('900811', 'ＮＫＪインコーポレイテッド'),
			_Utils_Tuple2('900812', 'エヌ・アイ・シー'),
			_Utils_Tuple2('900813', '五橋研究所'),
			_Utils_Tuple2('900814', 'オープンインタフェース'),
			_Utils_Tuple2('900815', '国際協力ＮＧＯセンター'),
			_Utils_Tuple2('900816', 'あかがね印刷出版'),
			_Utils_Tuple2('900817', 'Ａ．Ｉ．Ｃ'),
			_Utils_Tuple2('900818', 'エフ・エー・ブイ'),
			_Utils_Tuple2('900819', 'ＡＢＡＸ'),
			_Utils_Tuple2('900820', 'エイコー出版'),
			_Utils_Tuple2('900821', 'ヴィンテージ・パブリケーションズ'),
			_Utils_Tuple2('900822', 'アイ企画'),
			_Utils_Tuple2('900823', 'フナイエンタテイメントジャパン'),
			_Utils_Tuple2('900824', '大橋書店'),
			_Utils_Tuple2('900825', '赤井図書出版'),
			_Utils_Tuple2('900826', '栄光印刷'),
			_Utils_Tuple2('900827', 'インフォシティ'),
			_Utils_Tuple2('900828', 'インターメディカル'),
			_Utils_Tuple2('900829', 'ヴィクトリープレス'),
			_Utils_Tuple2('900831', 'ＳＨＥ'),
			_Utils_Tuple2('900832', 'あづまキリスト教伝道協会出版部'),
			_Utils_Tuple2('900833', '英伝社'),
			_Utils_Tuple2('900834', '東芝エンタテイメント'),
			_Utils_Tuple2('900835', 'イエローページ'),
			_Utils_Tuple2('900836', 'エヌ・シー・エイ研究所'),
			_Utils_Tuple2('900837', 'エフツウ'),
			_Utils_Tuple2('900838', '岩橋美術'),
			_Utils_Tuple2('900839', 'アンカークロス'),
			_Utils_Tuple2('900840', 'エヌピー通信社'),
			_Utils_Tuple2('900841', 'アテネ社'),
			_Utils_Tuple2('900842', '秋葉工房'),
			_Utils_Tuple2('900843', 'ウィック・ビジュアル・ビューロウ'),
			_Utils_Tuple2('900844', 'Ａｂｅｃａｓｉｓ Ｖｅｒｌａｇ'),
			_Utils_Tuple2('900846', 'アジア女性交流・研究フォーラム'),
			_Utils_Tuple2('900847', 'エスエス'),
			_Utils_Tuple2('900848', 'アドバタイジングハウス'),
			_Utils_Tuple2('900849', 'アーバン・コネクションズ'),
			_Utils_Tuple2('900850', 'オール日本スーパーマーケット協会'),
			_Utils_Tuple2('900851', 'エスコアール'),
			_Utils_Tuple2('900854', 'アップルパイ'),
			_Utils_Tuple2('900855', 'エターナルライフミニストリーズ'),
			_Utils_Tuple2('900856', 'アリス・エフ'),
			_Utils_Tuple2('900857', 'アクティー'),
			_Utils_Tuple2('900858', 'エクシート'),
			_Utils_Tuple2('900859', 'ういずゆう'),
			_Utils_Tuple2('900860', 'オンタイムズ'),
			_Utils_Tuple2('900861', 'アップロード'),
			_Utils_Tuple2('900862', 'オーマックアドバイザリー'),
			_Utils_Tuple2('900863', 'アトリエＭＯＨ'),
			_Utils_Tuple2('900864', 'エース出版'),
			_Utils_Tuple2('900865', 'オーエムシー'),
			_Utils_Tuple2('900866', '大風印刷'),
			_Utils_Tuple2('900867', 'クリスタル出版'),
			_Utils_Tuple2('900868', '医学書林'),
			_Utils_Tuple2('900869', 'アイ・ティ・オー・コーポレーション'),
			_Utils_Tuple2('900870', 'ある'),
			_Utils_Tuple2('900871', '朝日新聞社大阪企画部'),
			_Utils_Tuple2('900872', 'ＳＧ企画'),
			_Utils_Tuple2('900873', 'アムソン出版'),
			_Utils_Tuple2('900874', 'エー・ジー'),
			_Utils_Tuple2('900875', 'ＲＭ Ｐａｃｉｆｉｃ'),
			_Utils_Tuple2('900876', '藍書房'),
			_Utils_Tuple2('900877', 'エーアンドエー'),
			_Utils_Tuple2('900879', 'インターダイム'),
			_Utils_Tuple2('900880', 'イシイ'),
			_Utils_Tuple2('900881', 'エービーシー出版'),
			_Utils_Tuple2('900882', 'アトラス'),
			_Utils_Tuple2('900883', 'アイ・オー・ソフトウェア'),
			_Utils_Tuple2('900884', 'アトリエ７７'),
			_Utils_Tuple2('900885', 'アイドル・ジャパン・レコード'),
			_Utils_Tuple2('900886', 'ＮＴＴアドバンステクノロジ'),
			_Utils_Tuple2('900887', '大谷通信社'),
			_Utils_Tuple2('900888', 'いちかわ書店'),
			_Utils_Tuple2('900889', 'アイセス'),
			_Utils_Tuple2('900890', 'アリスト'),
			_Utils_Tuple2('900891', '映像文化研究連絡協議会'),
			_Utils_Tuple2('900892', '秋草書房'),
			_Utils_Tuple2('900893', 'エンデバー出版局'),
			_Utils_Tuple2('900894', 'アップオン'),
			_Utils_Tuple2('900895', 'えぬ編集室'),
			_Utils_Tuple2('900896', '大阪春秋社'),
			_Utils_Tuple2('900897', '青空出版'),
			_Utils_Tuple2('900898', 'アジア産業研究所'),
			_Utils_Tuple2('900899', '大阪数学刊行会'),
			_Utils_Tuple2('900901', '戎光祥出版'),
			_Utils_Tuple2('900902', '伊勢丹データセンター'),
			_Utils_Tuple2('900903', 'エクシング'),
			_Utils_Tuple2('900904', '愛があれば大丈夫'),
			_Utils_Tuple2('900905', '葵出版'),
			_Utils_Tuple2('900906', '運輸経済通信社'),
			_Utils_Tuple2('900907', '温羅書房'),
			_Utils_Tuple2('900908', 'アナトーム社'),
			_Utils_Tuple2('900909', 'アイ・エル・エス出版'),
			_Utils_Tuple2('900910', '親子読書地域文庫全国連絡会'),
			_Utils_Tuple2('900911', 'アマナ'),
			_Utils_Tuple2('900912', 'アクセス２１出版'),
			_Utils_Tuple2('900913', 'アルメディア'),
			_Utils_Tuple2('900914', 'ＩＭＡＧＩＣＡ'),
			_Utils_Tuple2('900915', 'アスピランテ出版部'),
			_Utils_Tuple2('900916', 'オアシスクリエイト'),
			_Utils_Tuple2('900917', 'オフィスエム・アイ・ティ'),
			_Utils_Tuple2('900918', 'オフィスエム'),
			_Utils_Tuple2('900919', 'ＮＨＳクリエイティブ'),
			_Utils_Tuple2('900920', 'アルテ'),
			_Utils_Tuple2('900921', 'アイクビジネスアンドテクノロジー出版部'),
			_Utils_Tuple2('900922', 'アローラ出版'),
			_Utils_Tuple2('900923', 'アジア文化交流協会'),
			_Utils_Tuple2('900924', 'テレビ朝日映像'),
			_Utils_Tuple2('900925', 'アートイディア'),
			_Utils_Tuple2('900926', 'エディロール'),
			_Utils_Tuple2('900927', 'エム・イー・ケイ'),
			_Utils_Tuple2('900928', 'インナーブレイン'),
			_Utils_Tuple2('900929', 'インテリジェンスコミュニケーション'),
			_Utils_Tuple2('900930', 'アイキューブ'),
			_Utils_Tuple2('900931', 'ＥＤＳ出版社'),
			_Utils_Tuple2('900932', 'オーシャン・コマース'),
			_Utils_Tuple2('900933', '医療タイムス社'),
			_Utils_Tuple2('900934', 'アイデックス音楽総研'),
			_Utils_Tuple2('900935', 'アトムス'),
			_Utils_Tuple2('900936', 'アポロンクリエイト'),
			_Utils_Tuple2('900937', 'イマジン'),
			_Utils_Tuple2('900938', '荒金大琳'),
			_Utils_Tuple2('900939', 'いずみ書房'),
			_Utils_Tuple2('900940', 'イデー'),
			_Utils_Tuple2('900941', '栄都出版'),
			_Utils_Tuple2('900942', 'インターハート'),
			_Utils_Tuple2('900943', 'アイペック'),
			_Utils_Tuple2('900944', '藍美ネットワーク'),
			_Utils_Tuple2('900945', 'アルコール健康医学協会'),
			_Utils_Tuple2('900946', 'アスク・ミュージック'),
			_Utils_Tuple2('900947', '有田一郎'),
			_Utils_Tuple2('900948', 'イメージライブラリー'),
			_Utils_Tuple2('900949', '国際情報アカデミー'),
			_Utils_Tuple2('900950', '栄光グラフィックシステム'),
			_Utils_Tuple2('900951', '泉良'),
			_Utils_Tuple2('900953', 'エフコーポレーション'),
			_Utils_Tuple2('900954', 'イメージ・ユウ'),
			_Utils_Tuple2('900955', 'Ａ企画'),
			_Utils_Tuple2('900956', 'あすなろ社'),
			_Utils_Tuple2('900957', 'ウイングシステムズ'),
			_Utils_Tuple2('900958', 'イハップス'),
			_Utils_Tuple2('900959', 'ＩＡＡ国際会議事務局'),
			_Utils_Tuple2('900960', 'アイカム'),
			_Utils_Tuple2('900961', 'サワキ電装'),
			_Utils_Tuple2('900962', 'アトラス'),
			_Utils_Tuple2('900963', 'いそっぷ社'),
			_Utils_Tuple2('900964', 'あさざ書房'),
			_Utils_Tuple2('900965', 'エスエルタワーズ在宅ケア推進事業部'),
			_Utils_Tuple2('900966', 'オンワード'),
			_Utils_Tuple2('900967', 'イーストゲイトジャパン'),
			_Utils_Tuple2('900968', 'エムアイティ・オオサカ'),
			_Utils_Tuple2('900969', 'シーウォーカー編集部'),
			_Utils_Tuple2('900970', '上野誠治'),
			_Utils_Tuple2('900971', 'ありあけ出版'),
			_Utils_Tuple2('900972', 'アド・サークル出版部'),
			_Utils_Tuple2('900973', 'アイ・ティ・シー'),
			_Utils_Tuple2('900974', 'アルファミュージック'),
			_Utils_Tuple2('900975', 'オスカー'),
			_Utils_Tuple2('900977', 'エフ・アンド・ジー'),
			_Utils_Tuple2('900978', 'いしやくユーロアメリカ'),
			_Utils_Tuple2('900979', 'インタラクション'),
			_Utils_Tuple2('900980', 'ＩＡＣ出版'),
			_Utils_Tuple2('900981', 'エイチ・アイ・シー・ピー・エム研究所'),
			_Utils_Tuple2('900982', 'エニアックインターナショナル'),
			_Utils_Tuple2('900983', 'アテンション'),
			_Utils_Tuple2('900984', 'インフォメディア・ジャパン'),
			_Utils_Tuple2('900985', 'アド・セントラル出版'),
			_Utils_Tuple2('900986', '荒川印刷(南風発行所)'),
			_Utils_Tuple2('900987', 'ＩＬＬＵＭＩＮＡＴＯＲ ＰＵＢＬＩＣＡＴＩＯＮＳ'),
			_Utils_Tuple2('900988', 'インターナショナル・ラングエジ・センター'),
			_Utils_Tuple2('900989', 'イーエムピー'),
			_Utils_Tuple2('900990', 'アス'),
			_Utils_Tuple2('900991', 'ＬＡＫ ｃｏｒｐｏｒａｔｉｏｎ'),
			_Utils_Tuple2('900992', 'アディック'),
			_Utils_Tuple2('900993', 'あわわ'),
			_Utils_Tuple2('900994', 'ＥＳＣ出版'),
			_Utils_Tuple2('900995', 'オークスビジネスサービス'),
			_Utils_Tuple2('900996', '梅沢印刷所'),
			_Utils_Tuple2('900997', 'インスクリプト'),
			_Utils_Tuple2('900998', 'アポロプレス'),
			_Utils_Tuple2('900999', 'アピス'),
			_Utils_Tuple2('901000', 'アセアンセンター富士経済'),
			_Utils_Tuple2('901001', 'アントレ編集部'),
			_Utils_Tuple2('901002', 'インクリメントＰ'),
			_Utils_Tuple2('901003', 'えむ出版企画'),
			_Utils_Tuple2('901004', 'あったか編集工房'),
			_Utils_Tuple2('901005', 'アルファ・アビエーション'),
			_Utils_Tuple2('901006', 'アートン'),
			_Utils_Tuple2('901007', '音羽出版'),
			_Utils_Tuple2('901008', '沖縄マリン出版'),
			_Utils_Tuple2('901009', 'イデア・インスティテュート'),
			_Utils_Tuple2('901010', 'オリエント建物管理'),
			_Utils_Tuple2('901011', 'アイビーエー'),
			_Utils_Tuple2('901012', '江中八郎'),
			_Utils_Tuple2('901013', 'ＩＣＡ'),
			_Utils_Tuple2('901014', 'ウェルコム・ジャパン'),
			_Utils_Tuple2('901015', 'エアーフロント協会'),
			_Utils_Tuple2('901016', 'アートアンドブレーン'),
			_Utils_Tuple2('901017', 'ゑゐ文社'),
			_Utils_Tuple2('901018', 'エム・ディ・ビー'),
			_Utils_Tuple2('901019', '育英出版社'),
			_Utils_Tuple2('901020', 'イーネット'),
			_Utils_Tuple2('901021', 'アメンドメディアプランニング'),
			_Utils_Tuple2('901022', 'イースト'),
			_Utils_Tuple2('901023', 'ＩｍａｇｅＷｏｒｋＳｔｕｄｉｏ＆ＳＨＩＭＡＺＵＯＦＦＩＣＥ'),
			_Utils_Tuple2('901024', 'エム・エス・ディ・ジャパン'),
			_Utils_Tuple2('901025', 'エル・デー・ビー'),
			_Utils_Tuple2('901026', 'アドベンチスト聴力障害者メディアサービス'),
			_Utils_Tuple2('901027', 'アイベックス'),
			_Utils_Tuple2('901028', 'あづま書房'),
			_Utils_Tuple2('901029', '沖縄高速印刷出版部'),
			_Utils_Tuple2('901030', 'アスク・ヒューマン・ケア'),
			_Utils_Tuple2('901031', 'エム・アンド・ケイメディカル'),
			_Utils_Tuple2('901032', 'エイチアンドアイ'),
			_Utils_Tuple2('901033', 'エフジー武蔵'),
			_Utils_Tuple2('901034', 'ウリム出版'),
			_Utils_Tuple2('901035', 'エディション歩'),
			_Utils_Tuple2('901036', '栄光社'),
			_Utils_Tuple2('901037', '池守真人'),
			_Utils_Tuple2('901038', 'ＭＩＩＢＯＡＴ Ｂｏｏｋｓ(岡庭加奈)'),
			_Utils_Tuple2('901039', '動くゲイとレズビアンの会'),
			_Utils_Tuple2('901040', 'ＭＩＴ'),
			_Utils_Tuple2('901041', 'アルタイ社'),
			_Utils_Tuple2('901042', '大月経済'),
			_Utils_Tuple2('901043', 'エイゴメディア'),
			_Utils_Tuple2('901044', 'イマ・カンパニー'),
			_Utils_Tuple2('901046', 'ＳＰＧ出版'),
			_Utils_Tuple2('901047', 'エデュテイメント・プラーニング'),
			_Utils_Tuple2('901048', 'あさひかわらばん'),
			_Utils_Tuple2('901049', 'アツミ出版'),
			_Utils_Tuple2('901050', 'インクス'),
			_Utils_Tuple2('901051', 'エイコー'),
			_Utils_Tuple2('901052', '大石天狗堂本店'),
			_Utils_Tuple2('901053', 'アートヴィレッジ'),
			_Utils_Tuple2('901054', 'アゴスト'),
			_Utils_Tuple2('901055', 'エマオ'),
			_Utils_Tuple2('901056', 'アガサス'),
			_Utils_Tuple2('901057', '絵手紙'),
			_Utils_Tuple2('901058', 'エクシーズ'),
			_Utils_Tuple2('901059', 'ＳＲＡ'),
			_Utils_Tuple2('901060', 'アール・シー・ワイ・ブラザーズ'),
			_Utils_Tuple2('901061', 'アイアールディー企画'),
			_Utils_Tuple2('901062', '愛知県美術館'),
			_Utils_Tuple2('901063', '石井昭示(木犀舎)'),
			_Utils_Tuple2('901064', 'イデア・ネットワーク'),
			_Utils_Tuple2('901065', '海川企画'),
			_Utils_Tuple2('901066', 'ｏｎ・Ｄ鈴木啓文'),
			_Utils_Tuple2('901067', 'Ａｓａｉ法令学院'),
			_Utils_Tuple2('901068', 'エス・ユー・プレス'),
			_Utils_Tuple2('901069', 'アルル書店'),
			_Utils_Tuple2('901070', 'インターグループ'),
			_Utils_Tuple2('901071', 'アニマル・メディア社'),
			_Utils_Tuple2('901072', 'オアシス社'),
			_Utils_Tuple2('901073', '大阪２１世紀協会'),
			_Utils_Tuple2('901074', '沖ソフトウェア'),
			_Utils_Tuple2('901075', '沖縄県公文書館'),
			_Utils_Tuple2('901076', 'アルゴ'),
			_Utils_Tuple2('901077', 'アイエスエスイトマンスイミングスクール'),
			_Utils_Tuple2('901078', 'アオキ'),
			_Utils_Tuple2('901079', 'エヌ・シー・ワイ'),
			_Utils_Tuple2('901080', '岡山県立大学'),
			_Utils_Tuple2('901081', '海の風琴社'),
			_Utils_Tuple2('901082', 'アイワード'),
			_Utils_Tuple2('901083', 'エフライム社'),
			_Utils_Tuple2('901084', 'アップルプレス'),
			_Utils_Tuple2('901085', '小田原アカデミー'),
			_Utils_Tuple2('901086', 'オルナック'),
			_Utils_Tuple2('901087', 'おもと出版'),
			_Utils_Tuple2('901088', '今人舎'),
			_Utils_Tuple2('901089', 'アルファコミック'),
			_Utils_Tuple2('901090', '小口健次'),
			_Utils_Tuple2('901091', 'インデックス'),
			_Utils_Tuple2('901092', 'インデックス出版'),
			_Utils_Tuple2('901093', 'アイビック出版部'),
			_Utils_Tuple2('901094', 'イワセ'),
			_Utils_Tuple2('901095', 'あるむ'),
			_Utils_Tuple2('901096', '永版社'),
			_Utils_Tuple2('901097', 'アイ・シー・シー・アイ'),
			_Utils_Tuple2('901098', 'トラベルガイド社'),
			_Utils_Tuple2('901099', 'ＩＮＴＥＲＮＡＴＩＯＮＡＬ ＥＤＵＣＡＴＩＯＮＡＬ ＩＮＩＴＩＡＴＩＶＥＳ'),
			_Utils_Tuple2('901100', '小野清美'),
			_Utils_Tuple2('901101', 'ＳＷＴ－ＪＡＰＡＮ'),
			_Utils_Tuple2('901103', 'エコー出版'),
			_Utils_Tuple2('901104', 'アポロ社'),
			_Utils_Tuple2('901105', 'エーエルエス'),
			_Utils_Tuple2('901106', 'エイブル'),
			_Utils_Tuple2('901107', 'ナル書房'),
			_Utils_Tuple2('901108', 'アトラス出版'),
			_Utils_Tuple2('901109', '栄光堂印刷所'),
			_Utils_Tuple2('901110', 'ＥＲ－ＲＡＦＩＡ ＭＯＨＡＭＭＥＤ'),
			_Utils_Tuple2('901111', 'エービーシーコンサルタント'),
			_Utils_Tuple2('901112', 'アイキューブつくば'),
			_Utils_Tuple2('901113', 'ＩＢＲＤ ＪＡＰＡＮ'),
			_Utils_Tuple2('901114', 'エム企画祭り囃子'),
			_Utils_Tuple2('901116', 'アースコミュニケーションズ'),
			_Utils_Tuple2('901117', '石狩川振興財団'),
			_Utils_Tuple2('901118', '英文プレス'),
			_Utils_Tuple2('901119', '宇高企画出版'),
			_Utils_Tuple2('901120', '大分合同新聞文化センター'),
			_Utils_Tuple2('901121', 'えびす出版'),
			_Utils_Tuple2('901122', 'ＭＶＡ Ｏｒｇａｎｉｚｉｎｇ Ｃｏｍｍｉｔｔｅｅ'),
			_Utils_Tuple2('901123', 'ウィルソンプロ'),
			_Utils_Tuple2('901124', 'オフィス２０１１'),
			_Utils_Tuple2('901125', 'オール関西'),
			_Utils_Tuple2('901126', 'アートスペース'),
			_Utils_Tuple2('901127', 'エルネット'),
			_Utils_Tuple2('901128', 'いだき'),
			_Utils_Tuple2('901129', 'いずみ書房'),
			_Utils_Tuple2('901130', '壱四四倶楽部'),
			_Utils_Tuple2('901131', 'アトリエ書店'),
			_Utils_Tuple2('901132', '桜子社'),
			_Utils_Tuple2('901133', 'エスエイティーティー'),
			_Utils_Tuple2('901134', 'エディトリアルデザイン研究所'),
			_Utils_Tuple2('901135', 'ＮＦＳエンタープライズ'),
			_Utils_Tuple2('901136', '稲元印刷'),
			_Utils_Tuple2('901137', 'アールズ'),
			_Utils_Tuple2('901138', 'オリエント通商出版部'),
			_Utils_Tuple2('901139', '医療研修推進財団'),
			_Utils_Tuple2('901140', 'アル・ヴァンテアン'),
			_Utils_Tuple2('901141', '医療放射線防護連絡協議会'),
			_Utils_Tuple2('901143', 'ヴィレッジ'),
			_Utils_Tuple2('901144', 'イエプレスコーポレーション'),
			_Utils_Tuple2('901145', 'おもろ出版'),
			_Utils_Tuple2('901146', 'エムティービーインベストメントテクノロジー研究所'),
			_Utils_Tuple2('901147', '医療と宗教を考える会'),
			_Utils_Tuple2('901148', 'アイシージー・ミューズ出版'),
			_Utils_Tuple2('901149', 'インターナショナル・ヒューマン・ネットワーク'),
			_Utils_Tuple2('901150', 'ガーリー'),
			_Utils_Tuple2('901151', 'アガリ総合研究所'),
			_Utils_Tuple2('901152', 'イメージ'),
			_Utils_Tuple2('901153', '伊豆新聞本社'),
			_Utils_Tuple2('901154', 'アイ・ピー・エム'),
			_Utils_Tuple2('901155', '愛媛製版センター'),
			_Utils_Tuple2('901156', '演劇人会議'),
			_Utils_Tuple2('901157', 'エムエム'),
			_Utils_Tuple2('901158', '大阪市立美術館'),
			_Utils_Tuple2('901159', 'アニメワールドスター'),
			_Utils_Tuple2('901160', 'アルメディオ'),
			_Utils_Tuple2('901161', 'インターワーク出版'),
			_Utils_Tuple2('901162', '伊奈町'),
			_Utils_Tuple2('901163', 'あんてな出版'),
			_Utils_Tuple2('901164', '沖縄図書センター'),
			_Utils_Tuple2('901165', 'アートセンターサカモト'),
			_Utils_Tuple2('901166', '相田みつを美術館'),
			_Utils_Tuple2('901167', '奥会津書房'),
			_Utils_Tuple2('901168', 'エー・アール・ティ'),
			_Utils_Tuple2('901169', 'エンタテイメント・プレゼンツ'),
			_Utils_Tuple2('901170', 'オフィスジュピター'),
			_Utils_Tuple2('901171', '生島企画室'),
			_Utils_Tuple2('901172', 'アン'),
			_Utils_Tuple2('901173', '内山工房'),
			_Utils_Tuple2('901174', 'うなぎ書房'),
			_Utils_Tuple2('901175', '菅原印刷エース出版事業部'),
			_Utils_Tuple2('901176', 'エース出版'),
			_Utils_Tuple2('901177', 'エーディプラント'),
			_Utils_Tuple2('901178', 'ウェイン・エス・グラシック'),
			_Utils_Tuple2('901179', 'アシーナ'),
			_Utils_Tuple2('901180', 'ヴェリタス書房'),
			_Utils_Tuple2('901181', '飯村隆彦映像研究所'),
			_Utils_Tuple2('901182', '阿木譲(アトリエユキ)'),
			_Utils_Tuple2('901183', 'アクト'),
			_Utils_Tuple2('901184', 'アドプレス'),
			_Utils_Tuple2('901185', 'オイコス事務所'),
			_Utils_Tuple2('901186', 'オリオン書房'),
			_Utils_Tuple2('901187', 'オービット出版'),
			_Utils_Tuple2('901188', 'エディット・パルク'),
			_Utils_Tuple2('901189', 'あかぎ出版'),
			_Utils_Tuple2('901190', 'アークインクス'),
			_Utils_Tuple2('901192', 'エムアイプランニング'),
			_Utils_Tuple2('901193', 'エス・バイ・エス'),
			_Utils_Tuple2('901194', 'オフィス・イマージュ'),
			_Utils_Tuple2('901195', '岩手県立大学メディアセンター'),
			_Utils_Tuple2('901196', 'アイヴィー'),
			_Utils_Tuple2('901197', 'オフィス美輪'),
			_Utils_Tuple2('901198', 'アルフ'),
			_Utils_Tuple2('901199', 'イー・エックス・ピー(ＥＸＰ)'),
			_Utils_Tuple2('901200', 'アウル企画'),
			_Utils_Tuple2('901201', '青沼英語塾'),
			_Utils_Tuple2('901202', 'オフィス・オガサワラ'),
			_Utils_Tuple2('901203', 'アストラ'),
			_Utils_Tuple2('901204', 'エサップ'),
			_Utils_Tuple2('901205', 'イレブン'),
			_Utils_Tuple2('901207', 'インターメディア'),
			_Utils_Tuple2('901208', 'アドミックス'),
			_Utils_Tuple2('901209', 'アート・ユニオン'),
			_Utils_Tuple2('901210', 'アーク音楽出版'),
			_Utils_Tuple2('901211', 'キャップ出版部アート舎'),
			_Utils_Tuple2('901212', 'オールプランナー'),
			_Utils_Tuple2('901213', 'アルク出版企画'),
			_Utils_Tuple2('901214', 'エムエス経営研究所'),
			_Utils_Tuple2('901215', 'アクロス'),
			_Utils_Tuple2('901216', 'アイケム'),
			_Utils_Tuple2('901217', 'あしがら印刷'),
			_Utils_Tuple2('901219', 'エム・ウェーブ'),
			_Utils_Tuple2('901220', 'インターハーツ'),
			_Utils_Tuple2('901221', 'アカリＦＣＢ・万来舎'),
			_Utils_Tuple2('901222', 'エム・ビー・エス'),
			_Utils_Tuple2('901223', 'アラジン'),
			_Utils_Tuple2('901224', '石出和博'),
			_Utils_Tuple2('901225', '市位尚文堂'),
			_Utils_Tuple2('901226', 'アールズ出版'),
			_Utils_Tuple2('901227', 'ＡＷＡ認証機構'),
			_Utils_Tuple2('901228', 'アサヒヤ印刷'),
			_Utils_Tuple2('901229', 'ウーマンライフ新聞社'),
			_Utils_Tuple2('901230', '一陽舎'),
			_Utils_Tuple2('901231', 'イー・ブラジル'),
			_Utils_Tuple2('901232', '大崎タイムス社'),
			_Utils_Tuple2('901233', 'アップルハウス'),
			_Utils_Tuple2('901234', '英治出版'),
			_Utils_Tuple2('901236', 'アドバンス・クリエイト'),
			_Utils_Tuple2('901237', '愛徳カルメル修道女会'),
			_Utils_Tuple2('901238', 'エム・ケイ・ニュース社'),
			_Utils_Tuple2('901239', 'アクティブ'),
			_Utils_Tuple2('901240', '英語読み上げ算教育協会'),
			_Utils_Tuple2('901241', 'オフィスヘリア'),
			_Utils_Tuple2('901242', '梅田出版'),
			_Utils_Tuple2('901243', 'エド・インター'),
			_Utils_Tuple2('901244', '医学出版ビューロー'),
			_Utils_Tuple2('901245', '海野光弘版画作品刊行会'),
			_Utils_Tuple2('901246', 'アートバンク'),
			_Utils_Tuple2('901247', '運輸調査局'),
			_Utils_Tuple2('901248', 'オフィスエフエックス'),
			_Utils_Tuple2('901249', 'アテックインターナショナル'),
			_Utils_Tuple2('901250', '桜門書房'),
			_Utils_Tuple2('901251', '大阪府建築家協同組合'),
			_Utils_Tuple2('901252', 'エコ・クエスト'),
			_Utils_Tuple2('901253', '一藝社'),
			_Utils_Tuple2('901254', '大西純'),
			_Utils_Tuple2('901255', '愛知みどりの会'),
			_Utils_Tuple2('901256', 'エヌヴィにじゅういち'),
			_Utils_Tuple2('901257', 'Ａ・Ｆ・Ｔ企画'),
			_Utils_Tuple2('901258', '医薬情報ネット'),
			_Utils_Tuple2('901259', 'エム・エム・シー'),
			_Utils_Tuple2('901260', 'アド真美'),
			_Utils_Tuple2('901261', 'アイディー'),
			_Utils_Tuple2('901262', '旭出版企画'),
			_Utils_Tuple2('901263', '沖縄県'),
			_Utils_Tuple2('901264', '秋田軽出版'),
			_Utils_Tuple2('901265', '愛媛県文化振興財団'),
			_Utils_Tuple2('901266', 'アイヴィネットワーク'),
			_Utils_Tuple2('901267', 'アミックス'),
			_Utils_Tuple2('901268', 'あい工房'),
			_Utils_Tuple2('901269', 'エルフ'),
			_Utils_Tuple2('901270', 'エヌ・エヌ・エー'),
			_Utils_Tuple2('901271', 'イーブック出版'),
			_Utils_Tuple2('901272', '池田博子'),
			_Utils_Tuple2('901273', 'エンドレスサイエンスインフォメーション'),
			_Utils_Tuple2('901274', 'Ｗｅｂ Ｐｒｅｓｓ 葉っぱの坑夫'),
			_Utils_Tuple2('901275', 'エフ・ニッパチヨン・グループ'),
			_Utils_Tuple2('901276', 'エムイー振興協会'),
			_Utils_Tuple2('901277', 'インフォマティカ'),
			_Utils_Tuple2('901278', 'アポヤンド'),
			_Utils_Tuple2('901279', 'インデックスコレクション'),
			_Utils_Tuple2('901280', 'ｃｂｏｏｋ２４．ｃｏｍ'),
			_Utils_Tuple2('901281', 'アイルヒーリング研究社'),
			_Utils_Tuple2('901282', 'インフォテック・サーブ'),
			_Utils_Tuple2('901283', 'ヴェルデ'),
			_Utils_Tuple2('901284', 'アピアランス工房'),
			_Utils_Tuple2('901285', 'インターリンクプランニング'),
			_Utils_Tuple2('901286', 'エシャロット出版'),
			_Utils_Tuple2('901287', '池坊短期大学'),
			_Utils_Tuple2('901288', 'ソル・インターナショナル'),
			_Utils_Tuple2('901289', 'エクシィード翔英学院'),
			_Utils_Tuple2('901290', 'ＮＰＯ法人ジュース'),
			_Utils_Tuple2('901291', 'ＩＰＣ出版センター'),
			_Utils_Tuple2('901292', 'エクセル・インターナショナル'),
			_Utils_Tuple2('901293', 'エム・エム・オー企画音楽事務所'),
			_Utils_Tuple2('901294', 'ＡＢ設計'),
			_Utils_Tuple2('901295', 'エルエルイーコーポレーション'),
			_Utils_Tuple2('901296', 'アイラス出版'),
			_Utils_Tuple2('901297', 'エイ・アイ・ケイ出版部'),
			_Utils_Tuple2('901298', 'エイバックズーム'),
			_Utils_Tuple2('901299', 'ＡＢＣ工房'),
			_Utils_Tuple2('901300', 'エクスプランテ'),
			_Utils_Tuple2('901301', '海工房'),
			_Utils_Tuple2('901302', 'あるっく社'),
			_Utils_Tuple2('901303', 'イクティス'),
			_Utils_Tuple2('901304', 'プレスプラン'),
			_Utils_Tuple2('901305', '興門資料刊行会'),
			_Utils_Tuple2('901306', '国際コミュニケーションズ事業本部'),
			_Utils_Tuple2('901307', 'メディアロジック'),
			_Utils_Tuple2('901308', 'バクティヴェーダンタ文庫社'),
			_Utils_Tuple2('901309', '文化出版'),
			_Utils_Tuple2('901310', 'コンプレス'),
			_Utils_Tuple2('901311', '中央畜産会'),
			_Utils_Tuple2('901312', '創風舎'),
			_Utils_Tuple2('901313', '子どもと教育社'),
			_Utils_Tuple2('901314', '書肆フローラ'),
			_Utils_Tuple2('901315', 'パブリックセンター'),
			_Utils_Tuple2('901317', '街と暮らし社'),
			_Utils_Tuple2('901318', 'あ・うん'),
			_Utils_Tuple2('901320', 'フィラ・プロジェクツ'),
			_Utils_Tuple2('901321', 'みどりと絵本の企画舎 Ｗｉｎｄ Ｎｏｔｅ'),
			_Utils_Tuple2('901322', '大学出版センター'),
			_Utils_Tuple2('901323', '蓋世企画'),
			_Utils_Tuple2('901324', 'みるめ書房'),
			_Utils_Tuple2('901325', '上田印刷'),
			_Utils_Tuple2('901326', 'けいしんかい'),
			_Utils_Tuple2('901327', 'ゴールデンエイジ出版'),
			_Utils_Tuple2('901328', 'ＩＴ ＪＡＰＡＮ'),
			_Utils_Tuple2('901329', '国際情報研究所'),
			_Utils_Tuple2('901330', '子どもの未来社'),
			_Utils_Tuple2('901331', 'テーミス'),
			_Utils_Tuple2('901332', '東京大学大学院工学系研究科附属原子力工学研究施設'),
			_Utils_Tuple2('901333', 'アジアブックス札幌ＣＭセンター'),
			_Utils_Tuple2('901334', '中国新聞企画開発'),
			_Utils_Tuple2('901335', 'シンクフォリスト'),
			_Utils_Tuple2('901336', '海豹舎'),
			_Utils_Tuple2('901338', 'エイベックス・ディストリビューション'),
			_Utils_Tuple2('901339', '同朋舎メディアプラン'),
			_Utils_Tuple2('901340', 'ネット書房'),
			_Utils_Tuple2('901341', 'メジテース'),
			_Utils_Tuple2('901342', '海声社'),
			_Utils_Tuple2('901343', 'インフラックスコム'),
			_Utils_Tuple2('901344', '博秀工芸'),
			_Utils_Tuple2('901345', 'ワイレア出版'),
			_Utils_Tuple2('901346', 'のぶ工房'),
			_Utils_Tuple2('901347', 'ウィズダムブック社'),
			_Utils_Tuple2('901348', '静岡教育出版社'),
			_Utils_Tuple2('901349', 'ゆうエージェンシー'),
			_Utils_Tuple2('901350', 'インターメディア出版'),
			_Utils_Tuple2('901351', '太陽書房'),
			_Utils_Tuple2('901353', 'エムケイ・スクエア'),
			_Utils_Tuple2('901354', '健康と年金出版社'),
			_Utils_Tuple2('901355', '日本色研事業'),
			_Utils_Tuple2('901356', '共用品推進機構'),
			_Utils_Tuple2('901357', 'アプトインターナショナル'),
			_Utils_Tuple2('901358', '日本遊戯玩具'),
			_Utils_Tuple2('901359', '共立速記印刷「優しい食卓」出版部'),
			_Utils_Tuple2('901360', 'ゼニス出版'),
			_Utils_Tuple2('901361', '愛知労働問題研究所'),
			_Utils_Tuple2('901362', '三井ギャラリー出版部'),
			_Utils_Tuple2('901364', 'たんぽぽ出版'),
			_Utils_Tuple2('901365', 'まんがの森'),
			_Utils_Tuple2('901366', '日本通信教育連盟'),
			_Utils_Tuple2('901367', 'トライアングル・フォース'),
			_Utils_Tuple2('901368', '光和'),
			_Utils_Tuple2('901370', 'ＩＩＥＥＣ英語教師トレーニングセンター'),
			_Utils_Tuple2('901371', 'ケン・グルーヴ'),
			_Utils_Tuple2('901372', 'ポリメディア'),
			_Utils_Tuple2('901373', 'ネイチャーライヴ'),
			_Utils_Tuple2('901374', 'エムミュージック'),
			_Utils_Tuple2('901375', 'コスミック'),
			_Utils_Tuple2('901376', 'ワイルドプライド'),
			_Utils_Tuple2('901377', '日本電気ＢＩＧＬＯＢＥサービス事業本部パーソナルサービス事業部'),
			_Utils_Tuple2('901378', 'スカイフィッシュ・グラフィックス'),
			_Utils_Tuple2('901379', '池部出版デザインオフィス'),
			_Utils_Tuple2('901380', 'セルバ出版'),
			_Utils_Tuple2('901381', '日本材料学会'),
			_Utils_Tuple2('901382', 'キーネット'),
			_Utils_Tuple2('901383', '小林写真工業'),
			_Utils_Tuple2('901384', '国際医療福祉大学出版会'),
			_Utils_Tuple2('901385', 'ＩＭＳ出版'),
			_Utils_Tuple2('901386', '愛善世界社'),
			_Utils_Tuple2('901387', '現代美術センターＣＣＡ北九州'),
			_Utils_Tuple2('901388', '現代書房'),
			_Utils_Tuple2('901389', '太宰府天満宮文化研究所'),
			_Utils_Tuple2('901390', '電彩アート'),
			_Utils_Tuple2('901391', 'ウェイツ'),
			_Utils_Tuple2('901392', 'ＦＵＺＺ ＭＡＧＡＺＩＮＥ ＰＲＯＤＵＣＴＳ'),
			_Utils_Tuple2('901393', '石川書房'),
			_Utils_Tuple2('901394', '市民かわら版社'),
			_Utils_Tuple2('901395', 'ｓａｏｔｏ ｌａｂｅｌ'),
			_Utils_Tuple2('901396', '浅野太鼓文化研究所'),
			_Utils_Tuple2('901397', '情報処理振興事業協会・技術センター'),
			_Utils_Tuple2('901398', '移動教室出版事業局'),
			_Utils_Tuple2('901399', 'ソマード'),
			_Utils_Tuple2('901400', 'イーホープ'),
			_Utils_Tuple2('901401', 'アイシーメディックス'),
			_Utils_Tuple2('901402', '医薬ビジランスセンター'),
			_Utils_Tuple2('901403', 'そして企画'),
			_Utils_Tuple2('901404', '正文社'),
			_Utils_Tuple2('901405', '農業技術研究機構北海道農業研究センター'),
			_Utils_Tuple2('901406', '富山県統計協会'),
			_Utils_Tuple2('901407', '野村インベスター・リレーションズ'),
			_Utils_Tuple2('901408', 'ホームスクーリング・ビジョン'),
			_Utils_Tuple2('901409', '大阪公立大学共同出版会'),
			_Utils_Tuple2('901410', '松雲堂書店'),
			_Utils_Tuple2('901411', '隆美出版'),
			_Utils_Tuple2('901412', '三重県立看護大学'),
			_Utils_Tuple2('901413', 'さるパソ'),
			_Utils_Tuple2('901414', 'ジャパンメディアートパブリッシング'),
			_Utils_Tuple2('901415', '伝道出版社'),
			_Utils_Tuple2('901416', 'ライン出版'),
			_Utils_Tuple2('901417', 'アストロワークス'),
			_Utils_Tuple2('901418', 'オフィスＷＯＬ'),
			_Utils_Tuple2('901419', 'ゴーイングコンサーン'),
			_Utils_Tuple2('901420', '思考社'),
			_Utils_Tuple2('901421', 'ステンレス構造建築協会'),
			_Utils_Tuple2('901422', '九州情報サービス'),
			_Utils_Tuple2('901423', 'グスコー出版'),
			_Utils_Tuple2('901424', '歴文堂書房'),
			_Utils_Tuple2('901425', '三興出版'),
			_Utils_Tuple2('901426', '同盟出版サービス'),
			_Utils_Tuple2('901427', '南山舎'),
			_Utils_Tuple2('901428', '美峰'),
			_Utils_Tuple2('901429', 'ジェイ・リサーチ出版'),
			_Utils_Tuple2('901430', 'ムゲンダイ出版'),
			_Utils_Tuple2('901431', 'プログレス'),
			_Utils_Tuple2('901432', '筑波大学歴史人類学系文化人類学研究室'),
			_Utils_Tuple2('901433', '三煌社'),
			_Utils_Tuple2('901434', 'アーテーデー・エヌテーデー聖書註解刊行会'),
			_Utils_Tuple2('901435', 'アートジャーナル社'),
			_Utils_Tuple2('901436', 'イニシア'),
			_Utils_Tuple2('901437', 'ピープル'),
			_Utils_Tuple2('901438', 'リンクス'),
			_Utils_Tuple2('901439', 'アジアコンクリートモデルコード国際委員会'),
			_Utils_Tuple2('901440', '西武出版印刷'),
			_Utils_Tuple2('901442', 'フラットコミュニケーションズ'),
			_Utils_Tuple2('901443', '黒猫館'),
			_Utils_Tuple2('901444', '読売ライフ'),
			_Utils_Tuple2('901445', 'メテオインターゲート'),
			_Utils_Tuple2('901446', '清泉図書'),
			_Utils_Tuple2('901447', 'ラインテック'),
			_Utils_Tuple2('901448', 'ＮＥＣソフト'),
			_Utils_Tuple2('901449', '東北大学東北アジア研究センター'),
			_Utils_Tuple2('901450', '自由工房'),
			_Utils_Tuple2('901451', '悠々社'),
			_Utils_Tuple2('901452', '犬橇舎'),
			_Utils_Tuple2('901453', 'オフィス・コシイシ'),
			_Utils_Tuple2('901454', 'トプコ'),
			_Utils_Tuple2('901455', 'テックキューブ'),
			_Utils_Tuple2('901456', '白馬小谷研究社'),
			_Utils_Tuple2('901457', '美容の友社'),
			_Utils_Tuple2('901458', '企業経営通信学院'),
			_Utils_Tuple2('901459', '東北福祉大学芹沢けい介美術工芸館'),
			_Utils_Tuple2('901460', 'しょういん'),
			_Utils_Tuple2('901461', 'エディコム'),
			_Utils_Tuple2('901462', 'ピーツーピーネットワーク'),
			_Utils_Tuple2('901463', 'ＮＲＩラーニングネットワーク'),
			_Utils_Tuple2('901466', '平和資料館草の家'),
			_Utils_Tuple2('901467', 'レポック社'),
			_Utils_Tuple2('901468', 'オットートレーディング'),
			_Utils_Tuple2('901469', '木鶏舎'),
			_Utils_Tuple2('901470', '新都心ねっと'),
			_Utils_Tuple2('901471', '社会経済生産性本部経営品質推進部'),
			_Utils_Tuple2('901472', 'アイシス'),
			_Utils_Tuple2('901473', 'ニューポート'),
			_Utils_Tuple2('901474', '朝日印刷工業'),
			_Utils_Tuple2('901475', 'サザンプレス'),
			_Utils_Tuple2('901476', 'システム規格社'),
			_Utils_Tuple2('901477', '月曜社'),
			_Utils_Tuple2('901479', '日本財団'),
			_Utils_Tuple2('901480', 'エヌケーエンタープライズ'),
			_Utils_Tuple2('901482', 'ユニバーサル・プランニング'),
			_Utils_Tuple2('901483', '木星舎'),
			_Utils_Tuple2('901484', 'ジャパンライフデザインシステムズ'),
			_Utils_Tuple2('901485', '童具館'),
			_Utils_Tuple2('901486', '実業印刷'),
			_Utils_Tuple2('901488', '番組情報データベースセンター'),
			_Utils_Tuple2('901489', '和光出版'),
			_Utils_Tuple2('901490', 'イル・プルー・シュル・ラ・セーヌ企画'),
			_Utils_Tuple2('901491', 'ナナ・コーポレート・コミュニケーション'),
			_Utils_Tuple2('901492', 'ノルドズッド・ジャパン'),
			_Utils_Tuple2('901493', 'アイピーシー'),
			_Utils_Tuple2('901494', '茜屋書店'),
			_Utils_Tuple2('901497', '栃木県文藝家協会'),
			_Utils_Tuple2('901499', 'スプリング'),
			_Utils_Tuple2('901500', 'チョウタリィ文庫'),
			_Utils_Tuple2('901501', 'ぼりゅうむわんプロダクツ'),
			_Utils_Tuple2('901502', '建設産業経理研究所'),
			_Utils_Tuple2('901503', '東海メディア'),
			_Utils_Tuple2('901504', 'アイイーインスティテュート'),
			_Utils_Tuple2('901505', 'ジーアンドエム'),
			_Utils_Tuple2('901506', 'ＰＥＧドクターズネットワーク'),
			_Utils_Tuple2('901507', 'メディアジョイ'),
			_Utils_Tuple2('901508', 'ジーシー'),
			_Utils_Tuple2('901509', 'サンライズ'),
			_Utils_Tuple2('901510', 'トランスビュー'),
			_Utils_Tuple2('901511', '名古屋クリスチャンセンター教会'),
			_Utils_Tuple2('901513', 'ペネット'),
			_Utils_Tuple2('901514', 'コムスエンジニアリング'),
			_Utils_Tuple2('901515', 'バイオメディカ'),
			_Utils_Tuple2('901516', 'ラパンインタナショナル'),
			_Utils_Tuple2('901517', '東京大学大学院総合文化研究科アメリカ太平洋地域研究センター'),
			_Utils_Tuple2('901518', 'サン美術印刷'),
			_Utils_Tuple2('901519', '歴史振興共済会'),
			_Utils_Tuple2('901520', '文芸出版'),
			_Utils_Tuple2('901521', 'フロンティア'),
			_Utils_Tuple2('901522', '関西大学経済政治研究所'),
			_Utils_Tuple2('901523', '真木正博'),
			_Utils_Tuple2('901524', 'グローバル教育出版'),
			_Utils_Tuple2('901525', '本の森'),
			_Utils_Tuple2('901526', 'エース総合研究所'),
			_Utils_Tuple2('901527', '日本教育ネットワーク電気技術協会'),
			_Utils_Tuple2('901528', '石橋財団ブリヂストン美術館'),
			_Utils_Tuple2('901529', '青磁社'),
			_Utils_Tuple2('901530', '東京急行電鉄'),
			_Utils_Tuple2('901532', 'リバース'),
			_Utils_Tuple2('901533', 'エデュタウンジャパン'),
			_Utils_Tuple2('901534', '丹精社'),
			_Utils_Tuple2('901535', 'ファイブ・シックス・セブン'),
			_Utils_Tuple2('901536', '寺田貴子'),
			_Utils_Tuple2('901537', 'オメガＡ．Ｔ．ミュージック'),
			_Utils_Tuple2('901538', '東印書房'),
			_Utils_Tuple2('901539', '今村書店サンクリエイト'),
			_Utils_Tuple2('901540', 'スーケン'),
			_Utils_Tuple2('901541', 'メディアタックエンタープライズ'),
			_Utils_Tuple2('901542', '現代教育新聞社'),
			_Utils_Tuple2('901543', '森ビル'),
			_Utils_Tuple2('901544', '大阪科学技術センターＡＴＡＣ'),
			_Utils_Tuple2('901545', '継命新聞社'),
			_Utils_Tuple2('901546', 'インテック'),
			_Utils_Tuple2('901547', 'アクティベートジャパン'),
			_Utils_Tuple2('901548', '日の本文化繼承'),
			_Utils_Tuple2('901549', 'ミル企画'),
			_Utils_Tuple2('901550', '谷戸楽舎'),
			_Utils_Tuple2('901553', '書信館出版'),
			_Utils_Tuple2('901554', '財界２１'),
			_Utils_Tuple2('901555', 'グループ現代'),
			_Utils_Tuple2('901556', 'ヴィータ臨床生命学研究所'),
			_Utils_Tuple2('901557', 'きもつき出版'),
			_Utils_Tuple2('901558', '国際日本文化研究センター'),
			_Utils_Tuple2('901559', '丸善神戸出版サービスセンター'),
			_Utils_Tuple2('901560', 'イー・オートメーション'),
			_Utils_Tuple2('901561', '阿羅人舎'),
			_Utils_Tuple2('901562', '心臓病看護教育研究会'),
			_Utils_Tuple2('901563', 'オフィスエムツー'),
			_Utils_Tuple2('901564', '遊鱗館'),
			_Utils_Tuple2('901565', '九州大学環境システム科学研究センター'),
			_Utils_Tuple2('901567', 'オンラインブックス'),
			_Utils_Tuple2('901568', 'アクセット'),
			_Utils_Tuple2('901569', '丸善福岡出版サービスセンター'),
			_Utils_Tuple2('901570', 'Ｎｉｎｅ ＡＸＩＳ'),
			_Utils_Tuple2('901571', '樹海社'),
			_Utils_Tuple2('901572', '蒼穹出版'),
			_Utils_Tuple2('901573', 'ミュートス'),
			_Utils_Tuple2('901574', '結エディット'),
			_Utils_Tuple2('901575', 'ノエル'),
			_Utils_Tuple2('901577', '葦津事務所'),
			_Utils_Tuple2('901578', 'シオンライブラリーサービス'),
			_Utils_Tuple2('901579', 'ワンツーマガジン社'),
			_Utils_Tuple2('901580', '篠原印刷所'),
			_Utils_Tuple2('901581', 'ネイチャーインタフェイス'),
			_Utils_Tuple2('901582', 'ｂａｍｂｉｎｉ'),
			_Utils_Tuple2('901583', '丸善大阪出版サービスセンター'),
			_Utils_Tuple2('901584', 'ヒュース・テン'),
			_Utils_Tuple2('901585', '七寶出版'),
			_Utils_Tuple2('901586', '日本ビジネス開発'),
			_Utils_Tuple2('901587', 'フォー・ネクスト'),
			_Utils_Tuple2('901588', '水九出版'),
			_Utils_Tuple2('901589', '樹の森出版'),
			_Utils_Tuple2('901590', '島根日日新聞社'),
			_Utils_Tuple2('901591', '藤岡敏彦'),
			_Utils_Tuple2('901592', 'アーツアンドクラフツ'),
			_Utils_Tuple2('901593', 'オリジナルブックマイン'),
			_Utils_Tuple2('901594', 'ギャップ出版'),
			_Utils_Tuple2('901595', '風土工学デザイン研究所'),
			_Utils_Tuple2('901596', '大元出版'),
			_Utils_Tuple2('901597', 'リンガマスター'),
			_Utils_Tuple2('901598', '総合研究大学院大学教育研究交流センター'),
			_Utils_Tuple2('901599', 'メディアファイブ'),
			_Utils_Tuple2('901600', 'マッターホルン'),
			_Utils_Tuple2('901601', 'オフィスさち'),
			_Utils_Tuple2('901602', 'イー・ピックス 大船渡印刷'),
			_Utils_Tuple2('901603', 'ベストリンクス'),
			_Utils_Tuple2('901604', '悠文社'),
			_Utils_Tuple2('901605', '星の友舎'),
			_Utils_Tuple2('901606', '神田印刷工業'),
			_Utils_Tuple2('901607', 'ビーアイネット'),
			_Utils_Tuple2('901608', 'マークゲイン'),
			_Utils_Tuple2('901609', '六然社'),
			_Utils_Tuple2('901610', 'ＢＲＣプロ'),
			_Utils_Tuple2('901611', 'メディア・ポート'),
			_Utils_Tuple2('901612', 'アクトオン'),
			_Utils_Tuple2('901613', 'エヴァナム'),
			_Utils_Tuple2('901614', '都市防災研究所アジア防災センター'),
			_Utils_Tuple2('901615', 'ファウプ'),
			_Utils_Tuple2('901617', '日本文献出版'),
			_Utils_Tuple2('901618', 'マンション管理新聞社'),
			_Utils_Tuple2('901619', '武友書籍出版'),
			_Utils_Tuple2('901620', '現代川柳「隗」'),
			_Utils_Tuple2('901621', 'ゲイン'),
			_Utils_Tuple2('901622', '毎日ワンズ'),
			_Utils_Tuple2('901623', 'ギャラリーシルバー企画'),
			_Utils_Tuple2('901624', 'ジグザグ・アジア'),
			_Utils_Tuple2('901625', '麻布プレス'),
			_Utils_Tuple2('901626', 'しゅるい研究社'),
			_Utils_Tuple2('901627', 'スピリチュアリズム・サークル心の道場'),
			_Utils_Tuple2('901628', 'キプリ'),
			_Utils_Tuple2('901629', '企業戦略デザイン研究所'),
			_Utils_Tuple2('901630', 'どんぐり舎'),
			_Utils_Tuple2('901631', '武蔵野美術大学出版局'),
			_Utils_Tuple2('901632', 'ビタミン'),
			_Utils_Tuple2('901633', 'ヒートウェーブ'),
			_Utils_Tuple2('901634', 'リバイバル新聞社'),
			_Utils_Tuple2('901635', 'オー・メソッド出版'),
			_Utils_Tuple2('901636', '魔美出版社'),
			_Utils_Tuple2('901638', '卓球王国'),
			_Utils_Tuple2('901640', 'パースニップス・ジャパン'),
			_Utils_Tuple2('901641', '東山出版'),
			_Utils_Tuple2('901642', '三秀舎'),
			_Utils_Tuple2('901643', 'サンスカラ研究所'),
			_Utils_Tuple2('901644', '北海道新聞社出版局自費出版「道新マイブック」'),
			_Utils_Tuple2('901645', 'あしぶえ出版'),
			_Utils_Tuple2('901647', '日本数学検定協会'),
			_Utils_Tuple2('901648', '英光舎'),
			_Utils_Tuple2('901649', 'らくだぶっく'),
			_Utils_Tuple2('901650', 'ＷＯＷＯＷ'),
			_Utils_Tuple2('901651', '日本仏教エスペランチスト連盟'),
			_Utils_Tuple2('901652', '世界緑茶協会'),
			_Utils_Tuple2('901653', '自費出版社はまなす文庫'),
			_Utils_Tuple2('901654', '知泉書館'),
			_Utils_Tuple2('901655', 'ふぃっつ'),
			_Utils_Tuple2('901656', '森ノ宮医療学園出版部'),
			_Utils_Tuple2('901657', 'ユニオンアートジャパンコーポレーション'),
			_Utils_Tuple2('901658', 'フジデン'),
			_Utils_Tuple2('901659', 'ＣＯＮＥＣＴ ＷＯＲＫＳＨＯＰ'),
			_Utils_Tuple2('901660', '日本防犯設備協会'),
			_Utils_Tuple2('901661', 'カトリック新聞社'),
			_Utils_Tuple2('901662', '中央印刷'),
			_Utils_Tuple2('901663', '字典舎'),
			_Utils_Tuple2('901664', '夢幻海'),
			_Utils_Tuple2('901665', '東京学芸大学出版会'),
			_Utils_Tuple2('901666', 'メディアプロダクション'),
			_Utils_Tuple2('901667', 'ヴォア'),
			_Utils_Tuple2('901668', '京都大学東南アジア研究センター'),
			_Utils_Tuple2('901669', 'ＢＥプランニング'),
			_Utils_Tuple2('901670', 'Ａｓｉａ Ｇｅｏ'),
			_Utils_Tuple2('901671', '宇宙クラブ'),
			_Utils_Tuple2('901672', 'エスアイビー・アクセス'),
			_Utils_Tuple2('901673', '秀文館'),
			_Utils_Tuple2('901674', '愛知大学国際コミュニケーション学会'),
			_Utils_Tuple2('901675', '８ｐｌｕｓ'),
			_Utils_Tuple2('901676', '九天社'),
			_Utils_Tuple2('901677', '情報機構'),
			_Utils_Tuple2('901678', 'マップネット'),
			_Utils_Tuple2('901679', 'サンガ'),
			_Utils_Tuple2('901680', 'Ｂｅｙｏｎｄ Ｃ．'),
			_Utils_Tuple2('901681', 'アスク'),
			_Utils_Tuple2('901682', '後藤芳一'),
			_Utils_Tuple2('901683', '数理工学社'),
			_Utils_Tuple2('901684', 'デジタル企画出版黒潮社'),
			_Utils_Tuple2('901685', '日本楽譜出版社'),
			_Utils_Tuple2('901686', 'バイオコミュニケーションズ'),
			_Utils_Tuple2('901687', 'ランドガレージ'),
			_Utils_Tuple2('901688', 'ライトアップ'),
			_Utils_Tuple2('901690', 'ＥＳＣＯクラブ'),
			_Utils_Tuple2('901691', '観想社'),
			_Utils_Tuple2('901692', '芦原稔'),
			_Utils_Tuple2('901693', 'ヴォヴィス'),
			_Utils_Tuple2('901694', 'アルタ出版'),
			_Utils_Tuple2('901695', 'ジャパンアミューズメントエージェンシー'),
			_Utils_Tuple2('901696', 'ジェックス'),
			_Utils_Tuple2('901698', 'メディアフロント'),
			_Utils_Tuple2('901699', 'ビジネス情報企画'),
			_Utils_Tuple2('901700', 'ＮＰＯ手話技能検定協会'),
			_Utils_Tuple2('901701', 'クイン出版'),
			_Utils_Tuple2('901702', '國民會館'),
			_Utils_Tuple2('901703', 'ＮＡＲＣＩＳＡ－ＵＹ－ＹＵ'),
			_Utils_Tuple2('901704', 'ＳＴ Ｋｉｋａｋｕ'),
			_Utils_Tuple2('901705', '認知工学'),
			_Utils_Tuple2('901706', 'マガジンサポート'),
			_Utils_Tuple2('901707', 'ＮＡＮ工房'),
			_Utils_Tuple2('901708', '日本音声保存'),
			_Utils_Tuple2('901709', '福良商会'),
			_Utils_Tuple2('901710', 'イー・キュー・マネジメント技研'),
			_Utils_Tuple2('901712', 'ノエル'),
			_Utils_Tuple2('901713', 'フェリス女学院大学'),
			_Utils_Tuple2('901715', '世界聖典普及協会'),
			_Utils_Tuple2('901717', 'パソコン教室わかるとできる'),
			_Utils_Tuple2('901718', 'アノムツリー'),
			_Utils_Tuple2('901719', 'ＧＲＡＴＩＴＵＤＥ ＢＯＯＫＳ．ＣＯＭ'),
			_Utils_Tuple2('901720', '書肆楽々'),
			_Utils_Tuple2('901721', '経葉社'),
			_Utils_Tuple2('901722', 'フィールドワイ'),
			_Utils_Tuple2('901723', '神戸商科大学大学院研究会'),
			_Utils_Tuple2('901724', '明鏡舎'),
			_Utils_Tuple2('901725', 'ゲオグラフィア'),
			_Utils_Tuple2('901726', '日本弘道会'),
			_Utils_Tuple2('901727', 'かんげき屋'),
			_Utils_Tuple2('901728', '文教出版会'),
			_Utils_Tuple2('901729', '総合企画'),
			_Utils_Tuple2('901730', 'マナハウス'),
			_Utils_Tuple2('901733', 'うしお書店'),
			_Utils_Tuple2('901734', '関東学院大学出版会'),
			_Utils_Tuple2('901735', '現代文藝社'),
			_Utils_Tuple2('901736', 'エイベックス'),
			_Utils_Tuple2('901737', 'ジェック'),
			_Utils_Tuple2('901738', 'アジア文化総合研究所出版会'),
			_Utils_Tuple2('901739', 'トップノッチ企画'),
			_Utils_Tuple2('901740', 'マインドシェア九州'),
			_Utils_Tuple2('901741', '直島コンテンポラリーアートミュージアム'),
			_Utils_Tuple2('901742', '章文館'),
			_Utils_Tuple2('901743', 'ヒューマンキャピタルシステムズ'),
			_Utils_Tuple2('901744', 'エプコット'),
			_Utils_Tuple2('901745', 'キュレイターズ'),
			_Utils_Tuple2('901746', '日本放哉学会'),
			_Utils_Tuple2('901747', 'アンデレ宣教神学院'),
			_Utils_Tuple2('901748', 'サンレム出版'),
			_Utils_Tuple2('901751', '教育企画'),
			_Utils_Tuple2('901753', 'キックオフ'),
			_Utils_Tuple2('901754', '週刊レキオ社'),
			_Utils_Tuple2('901755', '檜出版'),
			_Utils_Tuple2('901756', 'プリマ楽器'),
			_Utils_Tuple2('901758', '国際仏教学大学院大学'),
			_Utils_Tuple2('901759', 'ストリート編集室'),
			_Utils_Tuple2('901760', '東宣社'),
			_Utils_Tuple2('901761', 'ビッグハーベスト'),
			_Utils_Tuple2('901762', '日立国際ビジネス'),
			_Utils_Tuple2('901763', '周防書房'),
			_Utils_Tuple2('901764', 'ペパーズ・ジャパン'),
			_Utils_Tuple2('901765', 'セルフケア・ニュース'),
			_Utils_Tuple2('901766', '東京ファイナンシャルプランナーズ'),
			_Utils_Tuple2('901767', 'メディカルユーコン'),
			_Utils_Tuple2('901768', '京都大学防災研究所附属巨大災害研究センター'),
			_Utils_Tuple2('901769', '樹立社'),
			_Utils_Tuple2('901770', '本つくり舎'),
			_Utils_Tuple2('901771', 'アールアンドディ'),
			_Utils_Tuple2('901772', '建築画報社'),
			_Utils_Tuple2('901773', 'ニューウェーブ'),
			_Utils_Tuple2('901774', '葉山産業'),
			_Utils_Tuple2('901775', '東京映像社'),
			_Utils_Tuple2('901776', '筑波大学大学院国際政治経済学研究科'),
			_Utils_Tuple2('901777', '丸善学術情報ナビゲーション事業部'),
			_Utils_Tuple2('901778', '松帆真知子'),
			_Utils_Tuple2('901779', 'イーフロンティア'),
			_Utils_Tuple2('901780', 'おぺら読本出版'),
			_Utils_Tuple2('901781', '観空の宇'),
			_Utils_Tuple2('901782', 'カンゼン'),
			_Utils_Tuple2('901784', 'バジリコ'),
			_Utils_Tuple2('901785', 'マッシュルーム'),
			_Utils_Tuple2('901786', '愛知大学中部地方産業研究所'),
			_Utils_Tuple2('901787', 'ヒマラヤ地域天然薬物資源研究会'),
			_Utils_Tuple2('901788', 'レギー'),
			_Utils_Tuple2('901789', '廣川英男事務所'),
			_Utils_Tuple2('901790', 'イーディーリサーチ'),
			_Utils_Tuple2('901791', 'オルタロープ'),
			_Utils_Tuple2('901792', 'ブラザー商会'),
			_Utils_Tuple2('901794', 'オフィスＨＡＮＳ'),
			_Utils_Tuple2('901795', 'サンスター文具'),
			_Utils_Tuple2('901796', '桐々舎'),
			_Utils_Tuple2('901797', '立命館大学アメリカ研究センター'),
			_Utils_Tuple2('901798', 'シーエルエス'),
			_Utils_Tuple2('901799', '保険六法新聞社'),
			_Utils_Tuple2('901800', 'スカウト社'),
			_Utils_Tuple2('901801', 'サイブロ'),
			_Utils_Tuple2('901802', 'パンダブックス'),
			_Utils_Tuple2('901804', '径草社'),
			_Utils_Tuple2('901805', '日本アイアール'),
			_Utils_Tuple2('901806', 'ワークスジャパン'),
			_Utils_Tuple2('901807', 'シープレス'),
			_Utils_Tuple2('901808', '銀海舎'),
			_Utils_Tuple2('901811', '愛知学泉大学出版会'),
			_Utils_Tuple2('901812', 'エンジェルプレス'),
			_Utils_Tuple2('901814', '山口エレクトロ・デザイン'),
			_Utils_Tuple2('901815', 'ミニソフト'),
			_Utils_Tuple2('901816', 'エム・エー・シー'),
			_Utils_Tuple2('901817', '紀伊牟羅書店'),
			_Utils_Tuple2('901818', 'スペースポート'),
			_Utils_Tuple2('901820', '下岡事務所'),
			_Utils_Tuple2('901821', '籍文社'),
			_Utils_Tuple2('901822', 'セプト'),
			_Utils_Tuple2('901823', '日経ＢＰコンサルティング'),
			_Utils_Tuple2('901824', '日本メディアエージェンシー'),
			_Utils_Tuple2('901825', 'ユーリード出版'),
			_Utils_Tuple2('901826', '沖縄県立芸術大学'),
			_Utils_Tuple2('901827', '丹水社'),
			_Utils_Tuple2('901828', '鶏卵肉情報センター'),
			_Utils_Tuple2('901829', 'カーディナルシステムズ'),
			_Utils_Tuple2('901831', '梧葉出版'),
			_Utils_Tuple2('901832', '三研メディアプロダクト'),
			_Utils_Tuple2('901833', '海洋科学技術センター'),
			_Utils_Tuple2('901834', '石橋財団石橋美術館'),
			_Utils_Tuple2('901835', '春夏秋冬叢書'),
			_Utils_Tuple2('901836', '塩事業センター'),
			_Utils_Tuple2('901837', '芦屋倶楽部人間環境行動研究所'),
			_Utils_Tuple2('901838', '国立民族学博物館地域研究企画交流センター'),
			_Utils_Tuple2('901839', '里山出版'),
			_Utils_Tuple2('901840', '青山商事'),
			_Utils_Tuple2('901841', 'ジー・ビー'),
			_Utils_Tuple2('901842', 'キーストン通信社'),
			_Utils_Tuple2('901843', '日本女医会'),
			_Utils_Tuple2('901844', '日本スカイウェイ'),
			_Utils_Tuple2('901845', 'Ｗｏｎｄｅｒ ｒａｂｂｉｔ Ｃｌｕｂ'),
			_Utils_Tuple2('901846', 'リトル・ドッグ・プレス'),
			_Utils_Tuple2('901847', 'リ・メンバー出版社'),
			_Utils_Tuple2('901848', 'インタークロス研究所'),
			_Utils_Tuple2('901849', '夢みつけ隊'),
			_Utils_Tuple2('901850', '如月出版'),
			_Utils_Tuple2('901852', 'ケイ・アイ・エム'),
			_Utils_Tuple2('901853', 'ほるぷフォーラム'),
			_Utils_Tuple2('901854', '心音研究所'),
			_Utils_Tuple2('901855', 'ドレミファン'),
			_Utils_Tuple2('901856', '九州システム情報技術研究所'),
			_Utils_Tuple2('901857', '保険教育システム研究所'),
			_Utils_Tuple2('901858', 'ジェーシー出版'),
			_Utils_Tuple2('901859', 'ごりら出版'),
			_Utils_Tuple2('901861', '三木市観光協会'),
			_Utils_Tuple2('901862', 'トッパンメディカルコミュニケーションズ'),
			_Utils_Tuple2('901863', 'ｉ．Ｂｏｏｋｓ'),
			_Utils_Tuple2('901864', '通産資料出版会'),
			_Utils_Tuple2('901865', 'ＳＯＦＴ－Ｒ'),
			_Utils_Tuple2('901866', 'ぶどうの木出版'),
			_Utils_Tuple2('901867', 'サテマガ・ビーアイ'),
			_Utils_Tuple2('901868', 'アンドリュース・クリエイティヴ'),
			_Utils_Tuple2('901869', '九州医学書出版会'),
			_Utils_Tuple2('901870', 'イーマーケットプロモーションズ'),
			_Utils_Tuple2('901871', 'ジャパン・アドバンス・プラン'),
			_Utils_Tuple2('901872', 'ＥＳＰ総研'),
			_Utils_Tuple2('901873', 'インフォバーン'),
			_Utils_Tuple2('901874', 'パド・ウィメンズ・オフィス'),
			_Utils_Tuple2('901875', '新社会文化出版会'),
			_Utils_Tuple2('901877', 'アルプス社'),
			_Utils_Tuple2('901878', 'イーメディア'),
			_Utils_Tuple2('901879', 'チャイルドフッド'),
			_Utils_Tuple2('901880', 'リフレ出版'),
			_Utils_Tuple2('901881', '愛文書林'),
			_Utils_Tuple2('901882', '絵美寿出版販売'),
			_Utils_Tuple2('901883', 'ｓａｂｏｔ６課'),
			_Utils_Tuple2('901884', '日本アイリス・マードック学会'),
			_Utils_Tuple2('901885', '二十一世紀教育研究所'),
			_Utils_Tuple2('901886', 'にじ書房'),
			_Utils_Tuple2('901887', '一粒社出版部'),
			_Utils_Tuple2('901888', 'アテナイの田園'),
			_Utils_Tuple2('901889', '国際仏教学大学院大学附属図書館'),
			_Utils_Tuple2('901890', 'ディジタルメディアネットワーク'),
			_Utils_Tuple2('901891', '言海書房'),
			_Utils_Tuple2('901892', '日経出版販売'),
			_Utils_Tuple2('901893', 'ゴー・プロダクションズ'),
			_Utils_Tuple2('901895', '愛和技術研究所'),
			_Utils_Tuple2('901896', 'コンピュータ教育社'),
			_Utils_Tuple2('901897', 'サン・エージェンシー'),
			_Utils_Tuple2('901898', 'Ｑ．Ｏ．Ｌサービス'),
			_Utils_Tuple2('901899', '富士アカデミー'),
			_Utils_Tuple2('901900', 'ポーラ美術振興財団'),
			_Utils_Tuple2('901901', 'ほんのしろ'),
			_Utils_Tuple2('901902', 'ウィルメディカルコミュニケーションズ'),
			_Utils_Tuple2('901903', 'あいり出版'),
			_Utils_Tuple2('901904', 'ディレクト・システム社'),
			_Utils_Tuple2('901905', '国際ビジネスサポートサービス'),
			_Utils_Tuple2('901906', '国立民族学博物館'),
			_Utils_Tuple2('901907', 'ジパング'),
			_Utils_Tuple2('901908', '西日本出版社'),
			_Utils_Tuple2('901910', 'ミュージックネットワーク'),
			_Utils_Tuple2('901911', 'ジャパン・プロデュース・ネットワーク(ＪＰＮ)'),
			_Utils_Tuple2('901912', 'ハイパーダイン'),
			_Utils_Tuple2('901913', '童夢舎'),
			_Utils_Tuple2('901914', 'ロックフィールド・ファウンデーション'),
			_Utils_Tuple2('901916', '蒼天社出版'),
			_Utils_Tuple2('901917', 'コライユ出版'),
			_Utils_Tuple2('901918', 'ナイスタウン出版'),
			_Utils_Tuple2('901919', 'ユーラシア旅行社'),
			_Utils_Tuple2('901920', 'インターナショナルプレスジャパン'),
			_Utils_Tuple2('901923', '私には夢がある'),
			_Utils_Tuple2('901924', 'リーフパブリケイションズ'),
			_Utils_Tuple2('901925', '東京電化'),
			_Utils_Tuple2('901928', '甲南ジャーナル社'),
			_Utils_Tuple2('901929', 'トランスメディア'),
			_Utils_Tuple2('901930', '熊本県コロニー協会'),
			_Utils_Tuple2('901931', '高知工科大学出版会'),
			_Utils_Tuple2('901932', '全国精神障害者家族会連合会'),
			_Utils_Tuple2('901933', '明和出版'),
			_Utils_Tuple2('901934', '睦美マイクロアート企画室'),
			_Utils_Tuple2('901935', '電通サドラー・アンド・ヘネシー'),
			_Utils_Tuple2('901936', '理想科学工業'),
			_Utils_Tuple2('901937', 'ナテック'),
			_Utils_Tuple2('901938', 'トランスフォーマー'),
			_Utils_Tuple2('901939', '地域文化研究所'),
			_Utils_Tuple2('901940', '高原の小さな出版社'),
			_Utils_Tuple2('901941', 'おじゃら'),
			_Utils_Tuple2('901942', 'ＭＡＮＤＡＬＡＮＥＴ'),
			_Utils_Tuple2('901943', 'コイノニア社'),
			_Utils_Tuple2('901944', '東京大学ＲＣＡＳＴ先端テクノロジービジネスセンター'),
			_Utils_Tuple2('901945', '寿スタジオ'),
			_Utils_Tuple2('901946', 'ラムネ出版'),
			_Utils_Tuple2('901947', '全国コミュニティライフサポートセンター'),
			_Utils_Tuple2('901948', '国際広報企画'),
			_Utils_Tuple2('901949', 'インフォマティクス'),
			_Utils_Tuple2('901950', 'アイリス出版'),
			_Utils_Tuple2('901951', '今井出版'),
			_Utils_Tuple2('901952', '谷岡印刷出版部'),
			_Utils_Tuple2('901953', 'パワーデスク'),
			_Utils_Tuple2('901954', 'イーシンコミュニケーションズ'),
			_Utils_Tuple2('901955', '東京イタリア文化会館'),
			_Utils_Tuple2('901956', '産研'),
			_Utils_Tuple2('901957', '楫野圭一郎'),
			_Utils_Tuple2('901958', 'ガクジュツ'),
			_Utils_Tuple2('901959', '創美'),
			_Utils_Tuple2('901960', 'サニーヘルス'),
			_Utils_Tuple2('901961', '福岡大学医学部公衆衛生学教室'),
			_Utils_Tuple2('901962', '丸井インザルーム'),
			_Utils_Tuple2('901963', '大学出版'),
			_Utils_Tuple2('901964', 'アニカ'),
			_Utils_Tuple2('901965', '喜楽研'),
			_Utils_Tuple2('901966', '東風社'),
			_Utils_Tuple2('901967', '足立区立郷土博物館'),
			_Utils_Tuple2('901968', 'コダック'),
			_Utils_Tuple2('901969', 'アーリストインターナショナル'),
			_Utils_Tuple2('901970', 'あづき'),
			_Utils_Tuple2('901971', 'ウイスマー'),
			_Utils_Tuple2('901972', 'ＭＣプレス'),
			_Utils_Tuple2('901973', '曹亜鋼'),
			_Utils_Tuple2('901974', '創英知的財産研究所'),
			_Utils_Tuple2('901975', '見龍出版'),
			_Utils_Tuple2('901976', 'アクセス・パブリッシング'),
			_Utils_Tuple2('901977', '藤本印刷'),
			_Utils_Tuple2('901978', 'ぺんぎん書房'),
			_Utils_Tuple2('901979', 'ポトス出版'),
			_Utils_Tuple2('901980', 'プランネットデジタルデザイン'),
			_Utils_Tuple2('901982', 'ＮＲＩセキュアテクノロジーズ'),
			_Utils_Tuple2('901983', 'エルアイユー'),
			_Utils_Tuple2('901984', '京大出版センター'),
			_Utils_Tuple2('901986', 'ティ・エム・エス'),
			_Utils_Tuple2('901987', 'ソウルノート'),
			_Utils_Tuple2('901988', '立教大学出版会'),
			_Utils_Tuple2('901989', 'スペース伽耶'),
			_Utils_Tuple2('901990', '日本プレス社'),
			_Utils_Tuple2('901991', '乳業ジャーナル'),
			_Utils_Tuple2('901992', 'サンネット'),
			_Utils_Tuple2('901993', 'レディーバード'),
			_Utils_Tuple2('901994', 'わくわくコーポレーション'),
			_Utils_Tuple2('901995', 'ヒューマン・ライフ'),
			_Utils_Tuple2('901996', '図書館情報大学同窓会橘会'),
			_Utils_Tuple2('901997', '岐阜県現代陶芸美術館'),
			_Utils_Tuple2('901998', '幻戯書房'),
			_Utils_Tuple2('901999', '青山書籍'),
			_Utils_Tuple2('902000', 'み声新聞社'),
			_Utils_Tuple2('902001', '宇部時報社'),
			_Utils_Tuple2('902002', 'キタック'),
			_Utils_Tuple2('902003', '産業科学システムズ'),
			_Utils_Tuple2('902004', 'ＮＰＯ関西国際交流団体協議会'),
			_Utils_Tuple2('902005', '鳥取県教科図書販売'),
			_Utils_Tuple2('902006', '作文社'),
			_Utils_Tuple2('902007', 'メディカル・パブリケーションズ'),
			_Utils_Tuple2('902008', '高美書店'),
			_Utils_Tuple2('902009', '金沢大学工学部物質化学工学科化学工学コース'),
			_Utils_Tuple2('902010', '文化財研究所奈良文化財研究所'),
			_Utils_Tuple2('902011', '政府刊行物普及'),
			_Utils_Tuple2('902012', 'アレッジオ・プレス'),
			_Utils_Tuple2('902013', 'アズール'),
			_Utils_Tuple2('902014', '発心社'),
			_Utils_Tuple2('902015', 'タイユ'),
			_Utils_Tuple2('902017', 'レッドハート'),
			_Utils_Tuple2('902018', 'オゾン'),
			_Utils_Tuple2('902019', 'ぷれすアルファ'),
			_Utils_Tuple2('902020', '梁塵社'),
			_Utils_Tuple2('902021', 'ラピス'),
			_Utils_Tuple2('902022', 'コアミックス'),
			_Utils_Tuple2('902023', 'ハイディヤノ・インターナショナル'),
			_Utils_Tuple2('902025', '女性ライフサイクル研究所'),
			_Utils_Tuple2('902026', 'フロッグエンターテイメント'),
			_Utils_Tuple2('902027', '有斐閣アカデミア'),
			_Utils_Tuple2('902028', 'フェイズ・インタラクティブ'),
			_Utils_Tuple2('902029', 'ＤＥＣＡＧＯＮ'),
			_Utils_Tuple2('902030', '出版社サムソン'),
			_Utils_Tuple2('902031', '大覚寺出版部'),
			_Utils_Tuple2('902033', '理想書林'),
			_Utils_Tuple2('902034', 'パブリックス'),
			_Utils_Tuple2('902035', 'メディアリンクス・ジャパン'),
			_Utils_Tuple2('902037', '創文'),
			_Utils_Tuple2('902040', 'ＢＣ出版'),
			_Utils_Tuple2('902041', 'ＮＰＯ東京賢治の学校'),
			_Utils_Tuple2('902042', '東京都高齢者研究・福祉振興財団'),
			_Utils_Tuple2('902043', '福本事務所'),
			_Utils_Tuple2('902044', 'ヌールエ'),
			_Utils_Tuple2('902045', '国際熱帯木材機関'),
			_Utils_Tuple2('902046', '創文新社'),
			_Utils_Tuple2('902047', '大和印刷所出版事業部'),
			_Utils_Tuple2('902048', 'ＦＰサポートセンター'),
			_Utils_Tuple2('902049', 'サンブックス'),
			_Utils_Tuple2('902050', 'Ｌ’ＡＰＰＡＲＥＩＬ－ＰＨＯＴＯｅｄｉｔｅｕｒ'),
			_Utils_Tuple2('902051', '倉地庸嗣'),
			_Utils_Tuple2('902052', 'ワクワク開発研究所'),
			_Utils_Tuple2('902053', '自然と人間社'),
			_Utils_Tuple2('902054', '日本インターネットプロバイダー協会'),
			_Utils_Tuple2('902055', '薫風社'),
			_Utils_Tuple2('902056', '曹洞宗宗務庁'),
			_Utils_Tuple2('902058', '大谷喜作商店ＴＯＫＹＯＳＴＵＤＩＯ'),
			_Utils_Tuple2('902059', '平安出版'),
			_Utils_Tuple2('902060', '武田大樹'),
			_Utils_Tuple2('902061', 'ＮＰＯふるさと文化研究会'),
			_Utils_Tuple2('902062', '諏訪清実'),
			_Utils_Tuple2('902063', 'ＬａｎｇｕａｇｅＳｏｌｕｔｉｏｎｓＩｎｃ．'),
			_Utils_Tuple2('902064', 'シーンラボ'),
			_Utils_Tuple2('902065', 'シェアパブリシング'),
			_Utils_Tuple2('902066', '北海道大学大学院法学研究科附属高等法政教育研究センター'),
			_Utils_Tuple2('902067', 'フォーシス・ネットワークパブリッシング'),
			_Utils_Tuple2('902068', '上越タイムス社'),
			_Utils_Tuple2('902069', '道後温泉誇れるまちづくり推進協議会'),
			_Utils_Tuple2('902070', 'ワコウ・ワークス・オブ・アート'),
			_Utils_Tuple2('902071', '原子力安全システム研究所'),
			_Utils_Tuple2('902072', 'ハンコムリナックス'),
			_Utils_Tuple2('902073', 'アクシオン'),
			_Utils_Tuple2('902074', 'アワーズ'),
			_Utils_Tuple2('902075', '黒田藩プレス'),
			_Utils_Tuple2('902076', 'ハッピー・ゴー・ラッキー・エイム'),
			_Utils_Tuple2('902077', 'ＮＰＯブックスタート支援センター'),
			_Utils_Tuple2('902078', '美学出版'),
			_Utils_Tuple2('902079', 'アメニティライフ'),
			_Utils_Tuple2('902080', 'アートビートパブリッシャーズ'),
			_Utils_Tuple2('902081', '花銀河出版がば編集室'),
			_Utils_Tuple2('902082', 'スペクトラム出版社'),
			_Utils_Tuple2('902083', 'リュービン・システムズ'),
			_Utils_Tuple2('902084', '竹林舎'),
			_Utils_Tuple2('902085', 'ヌーヴェルヒロカワ'),
			_Utils_Tuple2('902086', '未来書房'),
			_Utils_Tuple2('902087', '情報理論とその応用学会'),
			_Utils_Tuple2('902089', 'ユウメディア'),
			_Utils_Tuple2('902090', 'メディカルフロントインターナショナルリミテッド'),
			_Utils_Tuple2('902091', 'コスモピア'),
			_Utils_Tuple2('902092', '日本テーラワーダ仏教協会'),
			_Utils_Tuple2('902093', '光風舎'),
			_Utils_Tuple2('902094', 'アド南海'),
			_Utils_Tuple2('902095', '三雲社'),
			_Utils_Tuple2('902097', 'いろは出版'),
			_Utils_Tuple2('902098', 'かんた'),
			_Utils_Tuple2('902100', 'アゴラさがみはら出版'),
			_Utils_Tuple2('902101', 'オープンアカウント'),
			_Utils_Tuple2('902102', '丸山和男'),
			_Utils_Tuple2('902103', 'セイコードー'),
			_Utils_Tuple2('902104', '遥向舎'),
			_Utils_Tuple2('902105', '構造品質保証研究所'),
			_Utils_Tuple2('902106', 'デジタルメディスン'),
			_Utils_Tuple2('902107', '日本カメラ博物館'),
			_Utils_Tuple2('902110', 'ままとんきっず'),
			_Utils_Tuple2('902111', 'ミリオン'),
			_Utils_Tuple2('902112', 'ヒューマンブレイン'),
			_Utils_Tuple2('902113', 'エアワークス'),
			_Utils_Tuple2('902114', 'インタークラフト'),
			_Utils_Tuple2('902115', '上武大学出版会'),
			_Utils_Tuple2('902116', '弦書房'),
			_Utils_Tuple2('902117', '日本知的障害者福祉協会'),
			_Utils_Tuple2('902118', '遠山博'),
			_Utils_Tuple2('902119', '渡部出版'),
			_Utils_Tuple2('902120', '椿寿館'),
			_Utils_Tuple2('902123', 'ＡＩ ＮＥＴＷＯＲＫ'),
			_Utils_Tuple2('902124', 'じんざい社'),
			_Utils_Tuple2('902125', '医学書院出版サービス'),
			_Utils_Tuple2('902126', 'アジア海援隊'),
			_Utils_Tuple2('902127', '結書房'),
			_Utils_Tuple2('902129', '廣済堂仙台情報センター'),
			_Utils_Tuple2('902130', '資生堂文化デザイン部'),
			_Utils_Tuple2('902131', 'インナービジョン'),
			_Utils_Tuple2('902132', 'イングリッシュハウス'),
			_Utils_Tuple2('902133', 'ソラと星出版'),
			_Utils_Tuple2('902134', '日本脱カルト研究会'),
			_Utils_Tuple2('902135', 'アートハウス・ゴン'),
			_Utils_Tuple2('902136', 'アジア印刷'),
			_Utils_Tuple2('902138', 'デジターボ'),
			_Utils_Tuple2('902139', 'アイ・シー・エス国際文化教育センター'),
			_Utils_Tuple2('902140', '新潟大学大学院現代社会文化研究科'),
			_Utils_Tuple2('902141', '秋吉台国際芸術村'),
			_Utils_Tuple2('902142', 'エス・シー・シー'),
			_Utils_Tuple2('902143', 'あきたタウン情報'),
			_Utils_Tuple2('902144', 'いつくしみセンター'),
			_Utils_Tuple2('902145', 'ジェイピーカルロス'),
			_Utils_Tuple2('902146', 'ｈｅａｒｔｓ＆ｗｏｒｄｓ'),
			_Utils_Tuple2('902147', 'ウエルオン'),
			_Utils_Tuple2('902148', '南葉舎'),
			_Utils_Tuple2('902149', '大阪読売サービス'),
			_Utils_Tuple2('902150', '林業土木コンサルタンツ'),
			_Utils_Tuple2('902152', '明治大学社会科学研究所'),
			_Utils_Tuple2('902153', 'なずなワールド'),
			_Utils_Tuple2('902154', '文芸企画'),
			_Utils_Tuple2('902155', 'アストラル'),
			_Utils_Tuple2('902156', 'ネット教育センター'),
			_Utils_Tuple2('902157', '半蔵門出版'),
			_Utils_Tuple2('902158', '全国手話研修センター'),
			_Utils_Tuple2('902159', 'みづき出版'),
			_Utils_Tuple2('902161', 'イー・ディー・エス'),
			_Utils_Tuple2('902162', 'イスペット'),
			_Utils_Tuple2('902164', '海猫屋'),
			_Utils_Tuple2('902165', 'えれほん'),
			_Utils_Tuple2('902166', 'エイル・パブリッシング'),
			_Utils_Tuple2('902167', 'ＣＯＴＯ'),
			_Utils_Tuple2('902168', '石鹸新報社'),
			_Utils_Tuple2('902169', 'ＣＤＩＣ出版'),
			_Utils_Tuple2('902170', 'ドラッグマガジン'),
			_Utils_Tuple2('902171', '森本和伸(ヴィジット)'),
			_Utils_Tuple2('902172', '三清道觀少林寺活佛院'),
			_Utils_Tuple2('902173', 'エリプスガイド'),
			_Utils_Tuple2('902174', '高橋道枝'),
			_Utils_Tuple2('902175', 'アークライト'),
			_Utils_Tuple2('902176', 'エスジーケイ'),
			_Utils_Tuple2('902177', '公募ガイド社'),
			_Utils_Tuple2('902178', '山陰ランドドットコム'),
			_Utils_Tuple2('902179', '百絵出版販売'),
			_Utils_Tuple2('902180', '生命保険文化センター'),
			_Utils_Tuple2('902181', '日本情報出版'),
			_Utils_Tuple2('902182', 'オブアワーズ'),
			_Utils_Tuple2('902183', '文芸の森社'),
			_Utils_Tuple2('902184', 'ふみくら書房'),
			_Utils_Tuple2('902185', '大和インベスター・リレーションズ'),
			_Utils_Tuple2('902186', 'ウエップ'),
			_Utils_Tuple2('902187', 'ヤマトエージェンシー'),
			_Utils_Tuple2('902188', 'デジタオ'),
			_Utils_Tuple2('902189', '登龍館'),
			_Utils_Tuple2('902190', 'サン－ケイ'),
			_Utils_Tuple2('902192', 'ソルト・サイエンス研究財団'),
			_Utils_Tuple2('902193', '新星出版'),
			_Utils_Tuple2('902194', '日本経済団体連合会社会本部'),
			_Utils_Tuple2('902195', 'ＦＬＹＩＮＧ ＢＯＤＹ ＰＲＥＳＳ'),
			_Utils_Tuple2('902196', '科学技術教育協会'),
			_Utils_Tuple2('902197', 'お茶の水学術事業会'),
			_Utils_Tuple2('902198', '東京都社会福祉協議会'),
			_Utils_Tuple2('902199', 'カラーフィールドインコーポレイテッド'),
			_Utils_Tuple2('902200', 'あとむ堂出版'),
			_Utils_Tuple2('902201', 'アルマット'),
			_Utils_Tuple2('902202', 'Ａ．Ｗ．Ｐ．'),
			_Utils_Tuple2('902203', '音楽文化創造'),
			_Utils_Tuple2('902204', '信成社'),
			_Utils_Tuple2('902205', 'オーディオブックジャパン'),
			_Utils_Tuple2('902206', '松井秀行'),
			_Utils_Tuple2('902207', '山口大学工学部知能情報システム工学科'),
			_Utils_Tuple2('902208', 'バハイ出版局'),
			_Utils_Tuple2('902209', 'データブック出版社'),
			_Utils_Tuple2('902210', 'デージーエス・コンピュータ'),
			_Utils_Tuple2('902211', '教友社'),
			_Utils_Tuple2('902212', 'あさんてさーな'),
			_Utils_Tuple2('902213', '写真工房'),
			_Utils_Tuple2('902214', '日商社'),
			_Utils_Tuple2('902215', 'ナカニシ印刷出版部'),
			_Utils_Tuple2('902216', 'アールアイシー出版'),
			_Utils_Tuple2('902217', 'ミュージックギャラリー'),
			_Utils_Tuple2('902218', 'ブイツーソリューション'),
			_Utils_Tuple2('902219', 'メディカルアイ'),
			_Utils_Tuple2('902221', 'ヘッジホッグ・ブックス'),
			_Utils_Tuple2('902222', 'アチーブメント出版'),
			_Utils_Tuple2('902223', 'セールス手帖社保険ＦＰＳ研究所'),
			_Utils_Tuple2('902224', 'オフィス未来'),
			_Utils_Tuple2('902225', '唯学書房'),
			_Utils_Tuple2('902226', 'アイ・ピー・ビー'),
			_Utils_Tuple2('902227', 'ザナドゥ'),
			_Utils_Tuple2('902228', 'オーバーグラウンド'),
			_Utils_Tuple2('902229', 'パークエディティング'),
			_Utils_Tuple2('902230', '矢吹修'),
			_Utils_Tuple2('902232', 'ひまわり社'),
			_Utils_Tuple2('902233', 'あゆみ書店'),
			_Utils_Tuple2('902234', '草間'),
			_Utils_Tuple2('902235', '日本軽種馬登録協会'),
			_Utils_Tuple2('902236', 'ディーズ・クラブ'),
			_Utils_Tuple2('902237', 'イタリア語検定協会'),
			_Utils_Tuple2('902238', '山口大学大学院工学研究科ＭＯＴ教材編集委員会'),
			_Utils_Tuple2('902239', '日本精神神経学会'),
			_Utils_Tuple2('902240', 'コウワーカー'),
			_Utils_Tuple2('902241', 'ジーベック'),
			_Utils_Tuple2('902242', 'エミル出版'),
			_Utils_Tuple2('902243', 'ＣＲＯＳＳＷＩＮＧ'),
			_Utils_Tuple2('902244', 'クリエイツかもがわ'),
			_Utils_Tuple2('902245', '開扇堂'),
			_Utils_Tuple2('902246', 'エースプランニング'),
			_Utils_Tuple2('902247', 'オイコス出版'),
			_Utils_Tuple2('902248', 'うめだ印刷'),
			_Utils_Tuple2('902249', '青海社'),
			_Utils_Tuple2('902250', 'ロンパーズ'),
			_Utils_Tuple2('902251', '出版メディアパル'),
			_Utils_Tuple2('902252', 'フォースカンパニー'),
			_Utils_Tuple2('902253', 'アルクス'),
			_Utils_Tuple2('902255', '私学インフォメーション'),
			_Utils_Tuple2('902256', 'Ａ－Ｗｏｒｋｓ'),
			_Utils_Tuple2('902257', 'ゴブリン書房'),
			_Utils_Tuple2('902259', '漢方養生研究所'),
			_Utils_Tuple2('902260', 'ブルースカイ'),
			_Utils_Tuple2('902261', '木戸製本所'),
			_Utils_Tuple2('902262', 'アウラ・マーニャイタリアオペラ出版'),
			_Utils_Tuple2('902263', 'イレーヌ'),
			_Utils_Tuple2('902264', '広島修道大学総合研究所'),
			_Utils_Tuple2('902265', 'アーカイブ・イット'),
			_Utils_Tuple2('902267', 'ティ・エフ・コミュニケーションズ'),
			_Utils_Tuple2('902268', 'ＳＣＬ'),
			_Utils_Tuple2('902270', 'アルテミシア'),
			_Utils_Tuple2('902271', 'ヴォルテックス'),
			_Utils_Tuple2('902272', 'ネットアドバンス'),
			_Utils_Tuple2('902273', 'Ｏｃ＆Ｓパブリッシング'),
			_Utils_Tuple2('902274', 'スルー・Ｔ＿ＢＯＯＫＳ'),
			_Utils_Tuple2('902275', 'サンライズ・ゴトウ'),
			_Utils_Tuple2('902276', 'スプリームマスターチンハイインターナショナルアソシエーション'),
			_Utils_Tuple2('902277', '日刊建設産業新聞社'),
			_Utils_Tuple2('902278', '岩波映像'),
			_Utils_Tuple2('902279', '日報Ｉ・Ｂ'),
			_Utils_Tuple2('902280', 'ココロ・プロジェクト'),
			_Utils_Tuple2('902281', '第三企画'),
			_Utils_Tuple2('902282', '横浜ユーラシア文化館'),
			_Utils_Tuple2('902283', '弘風社'),
			_Utils_Tuple2('902284', '愛知教育大学わかばの会'),
			_Utils_Tuple2('902285', '東京税務協会'),
			_Utils_Tuple2('902286', 'ＩＴサービスマネジメントフォーラムジャパン'),
			_Utils_Tuple2('902287', '建設ジャーナル'),
			_Utils_Tuple2('902288', '日本語教育学会'),
			_Utils_Tuple2('902289', 'ジアース'),
			_Utils_Tuple2('902290', 'ユナイテッドパブリッシャーズサービス社'),
			_Utils_Tuple2('902291', 'インパクト・コミュニケーションズ'),
			_Utils_Tuple2('902292', '比較文化研究所'),
			_Utils_Tuple2('902294', 'ＥＳＲＩジャパン'),
			_Utils_Tuple2('902295', 'マインド'),
			_Utils_Tuple2('902296', 'Ｈｅａｖｅｎ’ｓ Ｇａｒｄｅｎ'),
			_Utils_Tuple2('902297', '東北大学百年史編集委員会'),
			_Utils_Tuple2('902298', '全日空商事'),
			_Utils_Tuple2('902299', 'ソースネクスト'),
			_Utils_Tuple2('902300', '季想社'),
			_Utils_Tuple2('902301', '和歌山人権研究所'),
			_Utils_Tuple2('902302', 'ＰＣＬ'),
			_Utils_Tuple2('902303', 'スバル・アド'),
			_Utils_Tuple2('902304', '奥野かるた店'),
			_Utils_Tuple2('902305', '銀河教室出版'),
			_Utils_Tuple2('902306', 'ネットワーク地球村'),
			_Utils_Tuple2('902307', 'スコラマガジン'),
			_Utils_Tuple2('902308', 'サイラアンドハウス'),
			_Utils_Tuple2('902309', 'アトリエ・ヴァイル'),
			_Utils_Tuple2('902310', 'アルビス'),
			_Utils_Tuple2('902311', 'ＣＣＴ出版局'),
			_Utils_Tuple2('902313', 'ピーイー・エデュケーション'),
			_Utils_Tuple2('902314', 'ジャイブ'),
			_Utils_Tuple2('902315', 'ＩＭＡＧＥ ＦＡＣＴＯＲＹ'),
			_Utils_Tuple2('902316', '太陽出版社'),
			_Utils_Tuple2('902317', 'サンビーム'),
			_Utils_Tuple2('902318', 'エスキ・ヨルジュ'),
			_Utils_Tuple2('902319', '草子舎'),
			_Utils_Tuple2('902320', 'ジーク出版'),
			_Utils_Tuple2('902321', '日本フラワーデザイナー協会'),
			_Utils_Tuple2('902322', 'アジンコート出版 アジンコート'),
			_Utils_Tuple2('902323', '大高和寿'),
			_Utils_Tuple2('902324', 'ヒラタ印刷万象堂'),
			_Utils_Tuple2('902325', '総合地球環境学研究所'),
			_Utils_Tuple2('902326', '青風舎'),
			_Utils_Tuple2('902327', '万葉路'),
			_Utils_Tuple2('902328', 'メディアジャパン'),
			_Utils_Tuple2('902329', '輸送文研社'),
			_Utils_Tuple2('902330', '文学の森'),
			_Utils_Tuple2('902331', '薔薇会幼児教室'),
			_Utils_Tuple2('902332', '第一出版'),
			_Utils_Tuple2('902333', '共同物産'),
			_Utils_Tuple2('902334', 'カシオ計算機ＣＥＳマーケティング室'),
			_Utils_Tuple2('902335', 'シーアイエー'),
			_Utils_Tuple2('902336', 'ＡＮＣ社'),
			_Utils_Tuple2('902337', 'ヌースアカデメイア'),
			_Utils_Tuple2('902338', 'グレース'),
			_Utils_Tuple2('902339', 'ＡＰＭＣ国内委員会'),
			_Utils_Tuple2('902340', 'インタープレス'),
			_Utils_Tuple2('902341', 'いとうたつこ音楽デザイン'),
			_Utils_Tuple2('902342', 'ストレンジ・デイズ'),
			_Utils_Tuple2('902343', '肥後潮二'),
			_Utils_Tuple2('902344', 'マザーブック 江尾商事'),
			_Utils_Tuple2('902345', 'インフォグリーンユー'),
			_Utils_Tuple2('902346', 'コンピューターエンターテインメント協会'),
			_Utils_Tuple2('902347', '小桜研究所'),
			_Utils_Tuple2('902348', 'Ｍ＆Ｈ'),
			_Utils_Tuple2('902349', 'デイエム企画'),
			_Utils_Tuple2('902350', 'ジールワールドワイドジャパン'),
			_Utils_Tuple2('902351', 'ピーエスコム'),
			_Utils_Tuple2('902352', '国際出版研究所'),
			_Utils_Tuple2('902353', '高島易断総本家'),
			_Utils_Tuple2('902355', '銀座 森前'),
			_Utils_Tuple2('902356', 'Ｗｅｌｌ－Ｂｅｉｎｇ'),
			_Utils_Tuple2('902357', '編集工房 樹が陣営'),
			_Utils_Tuple2('902358', 'フリープレス'),
			_Utils_Tuple2('902359', '大学生協神戸事業連合'),
			_Utils_Tuple2('902360', '超音速'),
			_Utils_Tuple2('902361', 'ペントハウスアジア'),
			_Utils_Tuple2('902362', 'セブンシーズ'),
			_Utils_Tuple2('902363', 'レアルタ'),
			_Utils_Tuple2('902364', '２０世紀フォックスホームエンターテイメントジャパン'),
			_Utils_Tuple2('902365', '大阪村上楽器'),
			_Utils_Tuple2('902366', 'ｆｌａｒｅ'),
			_Utils_Tuple2('902367', '高明社'),
			_Utils_Tuple2('902368', '菁文社'),
			_Utils_Tuple2('902369', 'メディアライフ'),
			_Utils_Tuple2('902370', '日本ケミカルデータベース'),
			_Utils_Tuple2('902371', 'カイ'),
			_Utils_Tuple2('902372', 'ナムコ'),
			_Utils_Tuple2('902373', '日本政策研究センター'),
			_Utils_Tuple2('902374', 'ブロードキャスト'),
			_Utils_Tuple2('902375', '俳句ネット'),
			_Utils_Tuple2('902376', '耕出版'),
			_Utils_Tuple2('902377', '鼓童文化財団'),
			_Utils_Tuple2('902378', 'プロジェクトマネジメント学会'),
			_Utils_Tuple2('902379', '日本医療機能評価機構'),
			_Utils_Tuple2('902381', '瀬谷出版'),
			_Utils_Tuple2('902382', 'ガイア・オペレーションズ'),
			_Utils_Tuple2('902383', 'ひとみ音楽工房'),
			_Utils_Tuple2('902386', '銀河編集室'),
			_Utils_Tuple2('902387', 'ごまめ書房'),
			_Utils_Tuple2('902388', 'ビタミン愛'),
			_Utils_Tuple2('902389', 'ＩＤＲ'),
			_Utils_Tuple2('902390', 'エスパッキ'),
			_Utils_Tuple2('902391', 'ＰＩＮＥ ＰＩＣＴＵＲＥＳ'),
			_Utils_Tuple2('902392', '出版企画かんきょう'),
			_Utils_Tuple2('902393', '三菱化学ビーシーエル'),
			_Utils_Tuple2('902394', 'アジアプラネット'),
			_Utils_Tuple2('902396', 'マガジンボックス'),
			_Utils_Tuple2('902397', 'イースト'),
			_Utils_Tuple2('902398', '自分史・自費出版サポートセンター'),
			_Utils_Tuple2('902399', 'セイカ'),
			_Utils_Tuple2('902400', '健康情報館イーコム２１'),
			_Utils_Tuple2('902401', 'ＡＴＲメディア情報科学研究所'),
			_Utils_Tuple2('902402', 'パンメデア'),
			_Utils_Tuple2('902403', 'テクノレヴュー'),
			_Utils_Tuple2('902404', '鬣の会'),
			_Utils_Tuple2('902405', '巽プレス'),
			_Utils_Tuple2('902406', '杉本マス子出版'),
			_Utils_Tuple2('902407', '日本ユナイテッド・システムズ'),
			_Utils_Tuple2('902408', '領域知識文脈処理研究会出版会'),
			_Utils_Tuple2('902409', '剖生出版'),
			_Utils_Tuple2('902410', 'フロンティア出版'),
			_Utils_Tuple2('902412', '沖縄文化社'),
			_Utils_Tuple2('902413', '中加代子'),
			_Utils_Tuple2('902414', '中南米新聞社'),
			_Utils_Tuple2('902415', '二上書房'),
			_Utils_Tuple2('902416', '創泉堂出版'),
			_Utils_Tuple2('902417', '大河書房'),
			_Utils_Tuple2('902418', 'テーブルクリエイト・Ｕ出版部'),
			_Utils_Tuple2('902419', 'ギャップ・ジャパン'),
			_Utils_Tuple2('902420', 'ウィン'),
			_Utils_Tuple2('902421', 'クリエイト'),
			_Utils_Tuple2('902422', 'フォーレスト・リバー・プレス'),
			_Utils_Tuple2('902423', '経済産業研究所'),
			_Utils_Tuple2('902424', 'エッチエスケー'),
			_Utils_Tuple2('902425', '忍野ブックス'),
			_Utils_Tuple2('902426', '木城えほんの郷'),
			_Utils_Tuple2('902427', 'まちづくり役場'),
			_Utils_Tuple2('902428', 'クリエイト・ハラ'),
			_Utils_Tuple2('902429', 'グラパックジャパン'),
			_Utils_Tuple2('902431', 'エコール・セザム'),
			_Utils_Tuple2('902432', '「戦争と性」編集室'),
			_Utils_Tuple2('902433', '牧歌舎'),
			_Utils_Tuple2('902434', 'ビットマガジン社'),
			_Utils_Tuple2('902435', '地球科学技術総合推進機構'),
			_Utils_Tuple2('902436', 'ホープチャーチパブリケーション'),
			_Utils_Tuple2('902437', 'Ｎｅｗ Ｙｏｒｋ Ａｒｔ'),
			_Utils_Tuple2('902438', '秦靖彦'),
			_Utils_Tuple2('902439', '情通出版'),
			_Utils_Tuple2('902440', '心の友社'),
			_Utils_Tuple2('902441', '現代企画'),
			_Utils_Tuple2('902442', 'あくり出版'),
			_Utils_Tuple2('902443', '遊行社'),
			_Utils_Tuple2('902444', 'オープンナレッジ'),
			_Utils_Tuple2('902445', 'コーデックスイメージズ'),
			_Utils_Tuple2('902446', 'ＮＢワークス'),
			_Utils_Tuple2('902447', 'アルヒーフ'),
			_Utils_Tuple2('902448', '日本知的障害福祉連盟'),
			_Utils_Tuple2('902449', '齊藤フランツィスカ'),
			_Utils_Tuple2('902450', '星の手帖社'),
			_Utils_Tuple2('902451', 'つくば書店'),
			_Utils_Tuple2('902452', '日本ヘリコバクター学会'),
			_Utils_Tuple2('902453', 'ダイナミックマーケティング社'),
			_Utils_Tuple2('902454', 'ユーリカ・プレス'),
			_Utils_Tuple2('902457', 'ＬＬＬ ＰＵＢＬＩＳＨＥＲ'),
			_Utils_Tuple2('902458', 'メ・トムテン'),
			_Utils_Tuple2('902459', '明治薬科大学'),
			_Utils_Tuple2('902460', '日本ネットワークインフォメーションセンター'),
			_Utils_Tuple2('902461', 'リアルセルフレコード'),
			_Utils_Tuple2('902462', 'ヌース出版'),
			_Utils_Tuple2('902463', '猫乃電子出版'),
			_Utils_Tuple2('902464', 'カワチェン'),
			_Utils_Tuple2('902465', '双風舎'),
			_Utils_Tuple2('902466', '星風堂'),
			_Utils_Tuple2('902467', '潤光堂'),
			_Utils_Tuple2('902468', 'インデザイン'),
			_Utils_Tuple2('902469', 'イーネット・フロンティア'),
			_Utils_Tuple2('902470', 'シービーアール'),
			_Utils_Tuple2('902471', 'デジタルウルトラプロジェクト'),
			_Utils_Tuple2('902472', 'オフィスサンサーラ'),
			_Utils_Tuple2('902473', '歩行開発研究所'),
			_Utils_Tuple2('902474', 'アドム'),
			_Utils_Tuple2('902475', '健康と良い友だち社'),
			_Utils_Tuple2('902476', 'スーパーストア'),
			_Utils_Tuple2('902477', '流通研究社'),
			_Utils_Tuple2('902478', '齋藤総合研究所'),
			_Utils_Tuple2('902479', 'アイケイインターナショナル'),
			_Utils_Tuple2('902480', 'ＶＥＲＹ ＧＯＯＤ'),
			_Utils_Tuple2('902481', 'チャンプ'),
			_Utils_Tuple2('902482', 'ほんの実'),
			_Utils_Tuple2('902483', '東京自治問題研究所'),
			_Utils_Tuple2('902484', '中録サービス'),
			_Utils_Tuple2('902486', 'ものがたり文化の会'),
			_Utils_Tuple2('902487', 'フーガブックス コンパス・ポイント'),
			_Utils_Tuple2('902488', 'ＳＷアジア言語文化研究会'),
			_Utils_Tuple2('902489', 'エムディエス'),
			_Utils_Tuple2('902490', '伊藤忠商事 愛・地球博マスターライセンシーオフィス'),
			_Utils_Tuple2('902491', 'ゴルト・ブレイン'),
			_Utils_Tuple2('902492', 'ノーブル・プレス'),
			_Utils_Tuple2('902493', '教育教材ネット研究所'),
			_Utils_Tuple2('902494', '省察社'),
			_Utils_Tuple2('902495', 'マリコ・コーポレーション'),
			_Utils_Tuple2('902496', 'リブロ・サイエンス'),
			_Utils_Tuple2('902498', 'ムーンプレス'),
			_Utils_Tuple2('902499', 'マウンハーフ教育出版'),
			_Utils_Tuple2('902500', 'ステレオグラフィック'),
			_Utils_Tuple2('902501', '岡田竜馬'),
			_Utils_Tuple2('902502', 'ソーゴー印刷情報出版センター'),
			_Utils_Tuple2('902503', '東弘出版事業部'),
			_Utils_Tuple2('902504', '鉤屋'),
			_Utils_Tuple2('902506', '逸見彰男'),
			_Utils_Tuple2('902507', '人間考学研究所／インター・アート・コミッティーズ'),
			_Utils_Tuple2('902508', 'オフィスティ'),
			_Utils_Tuple2('902509', '大統領'),
			_Utils_Tuple2('902510', '西日本出版販売センター'),
			_Utils_Tuple2('902511', 'ｂｅ ２０８．ｃｏｍ'),
			_Utils_Tuple2('902513', 'エス・アールマトリックス'),
			_Utils_Tuple2('902515', '学研トイホビー'),
			_Utils_Tuple2('902516', 'ほぼ日刊イトイ新聞'),
			_Utils_Tuple2('902517', '回游詩人会'),
			_Utils_Tuple2('902518', 'ＢＯＯＫＳ ４３°ＮＯＲＴＨ'),
			_Utils_Tuple2('902519', 'ブルーマーク'),
			_Utils_Tuple2('902520', 'ひろしまタウン情報'),
			_Utils_Tuple2('902521', 'ＩＥＳ Ｓｃｈｏｏｌ ｏｆ Ｃｏｍｍｕｎｉｃａｔｉｏｎ'),
			_Utils_Tuple2('902523', 'ＩＣＭＵ'),
			_Utils_Tuple2('902524', 'アカデミア'),
			_Utils_Tuple2('902525', 'ペンギンＢｏｏｋｓ'),
			_Utils_Tuple2('902526', 'ラインコミュニケーションズ'),
			_Utils_Tuple2('902527', 'ヘルス・システム研究所'),
			_Utils_Tuple2('902528', 'ハッピーオウル社'),
			_Utils_Tuple2('902529', 'ゆー・はす'),
			_Utils_Tuple2('902530', 'シンクハウス'),
			_Utils_Tuple2('902531', 'エイジア出版'),
			_Utils_Tuple2('902532', 'らいむす企画'),
			_Utils_Tuple2('902533', '書道ジャーナル研究所'),
			_Utils_Tuple2('902534', '京都クリエイト'),
			_Utils_Tuple2('902535', 'ノベル出版'),
			_Utils_Tuple2('902536', '文抄房'),
			_Utils_Tuple2('902537', '氏言葉'),
			_Utils_Tuple2('902538', 'フォーサウス'),
			_Utils_Tuple2('902539', '編集出版組織体アセテート'),
			_Utils_Tuple2('902540', 'ふくろう書房'),
			_Utils_Tuple2('902542', '青いポスト二十一'),
			_Utils_Tuple2('902544', 'ＳＯＮＯＲＩ'),
			_Utils_Tuple2('902545', 'サガミヤ'),
			_Utils_Tuple2('902546', '福来出版 飛騨福来心理学研究所'),
			_Utils_Tuple2('902547', 'ミクモ'),
			_Utils_Tuple2('902548', 'トラフィックイーストアジアジャパン'),
			_Utils_Tuple2('902549', 'トナカイ出版'),
			_Utils_Tuple2('902550', 'レイライン'),
			_Utils_Tuple2('902551', 'パールロード'),
			_Utils_Tuple2('902552', 'クムラン'),
			_Utils_Tuple2('902554', '芸術書院'),
			_Utils_Tuple2('902555', '伊豆急行'),
			_Utils_Tuple2('902556', '下町人間総合研究所'),
			_Utils_Tuple2('902557', '京都福音教会 京都中央チャペル'),
			_Utils_Tuple2('902558', '立命館アジア太平洋研究センター'),
			_Utils_Tuple2('902559', 'カードス学習器'),
			_Utils_Tuple2('902560', '祥文堂印刷'),
			_Utils_Tuple2('902561', 'ワールド'),
			_Utils_Tuple2('902562', 'スー・アンド・エマ'),
			_Utils_Tuple2('902563', '児童図書館研究会'),
			_Utils_Tuple2('902564', 'ＮａｏＬｉｆｅ'),
			_Utils_Tuple2('902565', '新潟市マンガ振興協会'),
			_Utils_Tuple2('902568', 'ネクストビュー'),
			_Utils_Tuple2('902569', '日本アビリティーズ協会'),
			_Utils_Tuple2('902570', '地域自然科学研究所'),
			_Utils_Tuple2('902571', 'ヒューマン・ジャパン'),
			_Utils_Tuple2('902572', 'ブーマーズ'),
			_Utils_Tuple2('902573', 'せいうん'),
			_Utils_Tuple2('902574', 'ＯＦＦＩＣＥ Ｙ’ｓ ＭＥＤＩＡ ＰＲＯＤＵＣＴＳ'),
			_Utils_Tuple2('902575', 'ウイズ出版'),
			_Utils_Tuple2('902576', 'エフ・ピィ・ケィ研修センター'),
			_Utils_Tuple2('902577', '大誠社'),
			_Utils_Tuple2('902578', '慶應義塾大学２１世紀ＣＯＥ心の統合的研究センター'),
			_Utils_Tuple2('902579', '天風会'),
			_Utils_Tuple2('902580', 'ワーカホリックス'),
			_Utils_Tuple2('902581', 'ＹＡＲＮＥ ａｎｄ Ｃｏｍｐａｎｙ'),
			_Utils_Tuple2('902582', 'ＴＭＴ'),
			_Utils_Tuple2('902583', '神田神社'),
			_Utils_Tuple2('902584', 'ジュリアン'),
			_Utils_Tuple2('902585', '笹田義美'),
			_Utils_Tuple2('902586', 'スーパーボール・インコーポレイテッド'),
			_Utils_Tuple2('902587', '製品評価技術基盤機構'),
			_Utils_Tuple2('902588', 'ポーロス会'),
			_Utils_Tuple2('902589', 'オンリーワン'),
			_Utils_Tuple2('902592', 'Ｕ－Ｐｒｅｓｓ'),
			_Utils_Tuple2('902593', 'ファイドン'),
			_Utils_Tuple2('902594', 'パヒューマ・アジア・カンパニー・リミテッド'),
			_Utils_Tuple2('902596', 'ハミングバードジャパン'),
			_Utils_Tuple2('902597', '日本農業集落排水協会'),
			_Utils_Tuple2('902598', '日欧産業協力センター'),
			_Utils_Tuple2('905546', 'カーボンブラック協会'),
			_Utils_Tuple2('905547', '開進'),
			_Utils_Tuple2('905548', '海峡の会'),
			_Utils_Tuple2('905549', '偕行社'),
			_Utils_Tuple2('905550', '海事産業研究所'),
			_Utils_Tuple2('905551', '海人社'),
			_Utils_Tuple2('905552', '開成学習研究所・出版事業部'),
			_Utils_Tuple2('905554', '開創社'),
			_Utils_Tuple2('905555', '海程発行所'),
			_Utils_Tuple2('905556', '海文社'),
			_Utils_Tuple2('905557', '海外出版貿易'),
			_Utils_Tuple2('905558', '開放経済研究所'),
			_Utils_Tuple2('905559', '解放書店'),
			_Utils_Tuple2('905561', '海洋文化クラブ'),
			_Utils_Tuple2('905562', '海洋牧場研究会'),
			_Utils_Tuple2('905563', '環翠堂'),
			_Utils_Tuple2('905564', '桂書房'),
			_Utils_Tuple2('905565', '花王'),
			_Utils_Tuple2('905566', '黄河'),
			_Utils_Tuple2('905567', '歌学刊行会'),
			_Utils_Tuple2('905568', '科学企画出版社'),
			_Utils_Tuple2('905569', '科学技術センター'),
			_Utils_Tuple2('905570', '科学教材社'),
			_Utils_Tuple2('905571', '科学技術社'),
			_Utils_Tuple2('905573', '化学工業協会'),
			_Utils_Tuple2('905574', '化学工業時報社出版部'),
			_Utils_Tuple2('905575', '科学書院'),
			_Utils_Tuple2('905576', '科学書刊'),
			_Utils_Tuple2('905578', '柿村書店'),
			_Utils_Tuple2('905580', '学習書協会'),
			_Utils_Tuple2('905581', '学術文献普及会'),
			_Utils_Tuple2('905583', '学陽堂'),
			_Utils_Tuple2('905584', '核心評論社'),
			_Utils_Tuple2('905585', '家具産業出版社'),
			_Utils_Tuple2('905586', '笠岡編修事務所'),
			_Utils_Tuple2('905589', '歌樹社'),
			_Utils_Tuple2('905590', '春日書房'),
			_Utils_Tuple2('905591', '霞山会'),
			_Utils_Tuple2('905592', '家政学図書目録刊行会'),
			_Utils_Tuple2('905593', '果然庵'),
			_Utils_Tuple2('905595', '学校教育研究会'),
			_Utils_Tuple2('905596', '学校教育研究会'),
			_Utils_Tuple2('905597', 'あらき書店'),
			_Utils_Tuple2('905598', '家庭科教材'),
			_Utils_Tuple2('905599', '家庭クラブ'),
			_Utils_Tuple2('905600', 'カトリ'),
			_Utils_Tuple2('905601', '花鳥堂'),
			_Utils_Tuple2('905602', '金井スタンプ商会'),
			_Utils_Tuple2('905603', 'かながわ豆本の会'),
			_Utils_Tuple2('905604', '金原商店'),
			_Utils_Tuple2('905605', 'カナモジカイ'),
			_Utils_Tuple2('905606', 'かのう書房'),
			_Utils_Tuple2('905607', 'かびれ社'),
			_Utils_Tuple2('905608', '歌舞伎'),
			_Utils_Tuple2('905609', '鎌倉藝林新社'),
			_Utils_Tuple2('905610', '「回想の第七代国立国会図書館長」刊行会'),
			_Utils_Tuple2('905611', '川上村文化財愛護協会'),
			_Utils_Tuple2('905612', '川喜田研究所'),
			_Utils_Tuple2('905613', '川越地方史研究会'),
			_Utils_Tuple2('905614', '河田'),
			_Utils_Tuple2('905615', 'カワタパブリシティ'),
			_Utils_Tuple2('905616', '河出興産'),
			_Utils_Tuple2('905617', '川又書店'),
			_Utils_Tuple2('905618', '河本精文社'),
			_Utils_Tuple2('905619', '眼科臨床医報社'),
			_Utils_Tuple2('905620', '環境衛生研究会'),
			_Utils_Tuple2('905621', '環境企画研究所'),
			_Utils_Tuple2('905623', '官業労働研究所'),
			_Utils_Tuple2('905624', '観光資源保護財団'),
			_Utils_Tuple2('905625', '観光図書出版さんおん'),
			_Utils_Tuple2('905626', '観光展望社'),
			_Utils_Tuple2('905627', '観光と物産社'),
			_Utils_Tuple2('905629', '関西経済連合会'),
			_Utils_Tuple2('905630', '環コミュニケーションズ'),
			_Utils_Tuple2('905631', '官庁通信社'),
			_Utils_Tuple2('905632', 'カンデラ書館'),
			_Utils_Tuple2('905633', '関東図書'),
			_Utils_Tuple2('905634', '関東ポニー'),
			_Utils_Tuple2('905635', '寒雷発行所'),
			_Utils_Tuple2('905636', '外交時報社'),
			_Utils_Tuple2('905637', '外国為替研究協会'),
			_Utils_Tuple2('905638', '外国為替情報社'),
			_Utils_Tuple2('905639', '学園書房'),
			_Utils_Tuple2('905641', '光洋出版'),
			_Utils_Tuple2('905643', '華押出版'),
			_Utils_Tuple2('905644', '学純同総本部'),
			_Utils_Tuple2('905645', '学生書房'),
			_Utils_Tuple2('905646', '雅山洞'),
			_Utils_Tuple2('905647', '画像工学研究所'),
			_Utils_Tuple2('905648', '学会誌刊行センター'),
			_Utils_Tuple2('905649', '学校食事研究会'),
			_Utils_Tuple2('905650', '画報出版東京社'),
			_Utils_Tuple2('905651', '機械技術協会'),
			_Utils_Tuple2('905652', '季刊芸術出版'),
			_Utils_Tuple2('905653', '機関紙連合通信社'),
			_Utils_Tuple2('905654', '企業開発センター'),
			_Utils_Tuple2('905655', '企業経営協会'),
			_Utils_Tuple2('905656', '書店きくざわ'),
			_Utils_Tuple2('905657', '掬水文庫'),
			_Utils_Tuple2('905658', '銀座出版社'),
			_Utils_Tuple2('905659', '機芸出版社'),
			_Utils_Tuple2('905660', '紀元書房'),
			_Utils_Tuple2('905661', '稀書刊行会'),
			_Utils_Tuple2('905662', '北上書房'),
			_Utils_Tuple2('905663', 'キイチ民芸店'),
			_Utils_Tuple2('905665', '企画編集工房'),
			_Utils_Tuple2('905666', '企業研究会'),
			_Utils_Tuple2('905667', '企業デザイン'),
			_Utils_Tuple2('905668', '共同出版社'),
			_Utils_Tuple2('905669', '起山房'),
			_Utils_Tuple2('905670', '季節発行所'),
			_Utils_Tuple2('905671', '北上市史刊行会'),
			_Utils_Tuple2('905672', '北上史談会'),
			_Utils_Tuple2('905673', '氣の研究会'),
			_Utils_Tuple2('905674', '北日本出版'),
			_Utils_Tuple2('905675', '北日本児童文化協会'),
			_Utils_Tuple2('905676', '吉川書房'),
			_Utils_Tuple2('905677', '其中堂'),
			_Utils_Tuple2('905678', '吉四六研究会'),
			_Utils_Tuple2('905679', '切手経済社'),
			_Utils_Tuple2('905680', '切手趣味社'),
			_Utils_Tuple2('905681', '共和書院'),
			_Utils_Tuple2('905682', '京都教材研究所'),
			_Utils_Tuple2('905683', '紀伊國屋書店和書部'),
			_Utils_Tuple2('905684', '木下秀一郎叢書刊行会'),
			_Utils_Tuple2('905685', '紀伊植物誌刊行会'),
			_Utils_Tuple2('905686', '黄薔薇社'),
			_Utils_Tuple2('905687', '岐阜県郷土資料研究協議会'),
			_Utils_Tuple2('905688', '高岳出版'),
			_Utils_Tuple2('905689', '木本書店'),
			_Utils_Tuple2('905690', '厚生科学研究所'),
			_Utils_Tuple2('905691', 'キャピタル'),
			_Utils_Tuple2('905692', 'ギャラリーゴッコ'),
			_Utils_Tuple2('905693', 'キンキ出版'),
			_Utils_Tuple2('905694', '九州公論社'),
			_Utils_Tuple2('905695', '九州人文化の会'),
			_Utils_Tuple2('905696', '九州旅行案内社'),
			_Utils_Tuple2('905697', '求美編集室'),
			_Utils_Tuple2('905698', '教育学習社'),
			_Utils_Tuple2('905701', '教育研究所協会'),
			_Utils_Tuple2('905702', '教育出版センター'),
			_Utils_Tuple2('905703', '教育出版文化協会'),
			_Utils_Tuple2('905704', '北京都出版'),
			_Utils_Tuple2('905705', 'キリスト教保育連盟'),
			_Utils_Tuple2('905706', '教育評論社'),
			_Utils_Tuple2('905707', '教育タイムス社'),
			_Utils_Tuple2('905709', '教育図書研究会'),
			_Utils_Tuple2('905710', '教育図書総目録刊行会'),
			_Utils_Tuple2('905711', '教育美術振興会'),
			_Utils_Tuple2('905712', '教育文化出版'),
			_Utils_Tuple2('905713', '教育報道社'),
			_Utils_Tuple2('905714', '銀河社'),
			_Utils_Tuple2('905715', '魚類科学研究所'),
			_Utils_Tuple2('905716', '教科書研究センター'),
			_Utils_Tuple2('905717', '教研学習社'),
			_Utils_Tuple2('905718', '共済法規研究会出版部'),
			_Utils_Tuple2('905719', '久知会'),
			_Utils_Tuple2('905720', 'キョードー東京'),
			_Utils_Tuple2('905721', '協同組合通信社'),
			_Utils_Tuple2('905722', '共同図書出版'),
			_Utils_Tuple2('905723', '郷土行事の会'),
			_Utils_Tuple2('905724', '京都芸術家協会'),
			_Utils_Tuple2('905725', '京都芸大美術教育研究会'),
			_Utils_Tuple2('905726', '京都産業大学出版会'),
			_Utils_Tuple2('905727', '京都市観光協会'),
			_Utils_Tuple2('905728', '京都官書普及会'),
			_Utils_Tuple2('905729', '京都市埋蔵文化財研究所'),
			_Utils_Tuple2('905730', '京都社会労働問題研究所'),
			_Utils_Tuple2('905731', '京都町名歴史調査会'),
			_Utils_Tuple2('905732', '京都俳句作家協会'),
			_Utils_Tuple2('905733', '京都鳩居堂'),
			_Utils_Tuple2('905734', '京都版画院'),
			_Utils_Tuple2('905735', '京都部落史研究所'),
			_Utils_Tuple2('905736', '郷土文化学会'),
			_Utils_Tuple2('905738', '巨朋社'),
			_Utils_Tuple2('905739', '共立女子大学教務課'),
			_Utils_Tuple2('905740', '橋梁編纂委員会'),
			_Utils_Tuple2('905741', 'ギャルド'),
			_Utils_Tuple2('905742', '協和'),
			_Utils_Tuple2('905743', '共和機器'),
			_Utils_Tuple2('905744', '協和企画'),
			_Utils_Tuple2('905746', '共和紙工'),
			_Utils_Tuple2('905747', '協和出版'),
			_Utils_Tuple2('905748', '曲水社'),
			_Utils_Tuple2('905749', '基督教学徒兄弟団出版部'),
			_Utils_Tuple2('905750', 'キリスト教文書センター'),
			_Utils_Tuple2('905751', '記録社'),
			_Utils_Tuple2('905752', '記録文化社'),
			_Utils_Tuple2('905753', '銀河出版'),
			_Utils_Tuple2('905754', '近畿大学出版局(東京事務所)'),
			_Utils_Tuple2('905755', '国際金融情報センター'),
			_Utils_Tuple2('905756', 'クルーズ'),
			_Utils_Tuple2('905757', '金鶏山真成院「密門会」出版部'),
			_Utils_Tuple2('905758', '銀通'),
			_Utils_Tuple2('905759', '銀座企画'),
			_Utils_Tuple2('905760', '近世日本城郭研究所'),
			_Utils_Tuple2('905761', '群馬東方医学同好会'),
			_Utils_Tuple2('905762', '近世文書研究会'),
			_Utils_Tuple2('905763', '金属家具新聞社'),
			_Utils_Tuple2('905764', '金属産業新聞社'),
			_Utils_Tuple2('905765', '金属時評社'),
			_Utils_Tuple2('905766', '金属通信社'),
			_Utils_Tuple2('905767', '金属表面技術協会'),
			_Utils_Tuple2('905768', '弘文館'),
			_Utils_Tuple2('905769', 'グッドラック'),
			_Utils_Tuple2('905771', '近代建築社'),
			_Utils_Tuple2('905772', '近代社'),
			_Utils_Tuple2('905773', '近代ジャーナル・レビュー'),
			_Utils_Tuple2('905774', '近代将棋社'),
			_Utils_Tuple2('905775', '近代農業社'),
			_Utils_Tuple2('905777', '近代出版'),
			_Utils_Tuple2('905778', '金融界社'),
			_Utils_Tuple2('905779', '金融経済研究所'),
			_Utils_Tuple2('905780', 'ギャガ・コミュニケーションズ'),
			_Utils_Tuple2('905781', '海事プレス社'),
			_Utils_Tuple2('905782', '金融ジャーナル社'),
			_Utils_Tuple2('905783', '技献'),
			_Utils_Tuple2('905784', '技興社'),
			_Utils_Tuple2('905785', '技術新聞社'),
			_Utils_Tuple2('905787', 'けんめいや'),
			_Utils_Tuple2('905788', '玉龍企画'),
			_Utils_Tuple2('905789', '漁船機関士協会'),
			_Utils_Tuple2('905790', '漁村文化協会'),
			_Utils_Tuple2('905791', '銀河書房'),
			_Utils_Tuple2('905792', '銀行時評社'),
			_Utils_Tuple2('905793', 'クヴェレ会'),
			_Utils_Tuple2('905794', '久我五千男'),
			_Utils_Tuple2('905795', '久保田商事'),
			_Utils_Tuple2('905796', 'グループ多摩虫'),
			_Utils_Tuple2('905797', '国立音楽大学出版部'),
			_Utils_Tuple2('905798', '熊谷印刷出版部'),
			_Utils_Tuple2('905799', '熊本工業大学出版局'),
			_Utils_Tuple2('905800', '熊本川柳研究会'),
			_Utils_Tuple2('905801', '熊本年鑑社'),
			_Utils_Tuple2('905803', 'クラウンミュージックパブリッシャー'),
			_Utils_Tuple2('905804', 'クラウンレコード'),
			_Utils_Tuple2('905805', '暮しのコツ研究所'),
			_Utils_Tuple2('905806', 'クラフトメイト社'),
			_Utils_Tuple2('905807', '花林書房'),
			_Utils_Tuple2('905808', 'クリスチャンＡＶセンター'),
			_Utils_Tuple2('905809', 'クリニックマガジン'),
			_Utils_Tuple2('905810', 'クリエー出版部'),
			_Utils_Tuple2('905811', 'くるみ書房'),
			_Utils_Tuple2('905812', 'クレジット広報センター'),
			_Utils_Tuple2('905813', '国際航業'),
			_Utils_Tuple2('905814', 'グリム'),
			_Utils_Tuple2('905815', 'ぐるーぷ・ぱあめ・ぱあめ書房'),
			_Utils_Tuple2('905816', 'グロービジョン出版'),
			_Utils_Tuple2('905817', 'グロビュー社'),
			_Utils_Tuple2('905818', 'グロリア・インターナショナル日本支社'),
			_Utils_Tuple2('905819', 'グロリヤ出版'),
			_Utils_Tuple2('905820', '群出版'),
			_Utils_Tuple2('905821', '群像社'),
			_Utils_Tuple2('905822', '経営経済社'),
			_Utils_Tuple2('905823', '経営情報社'),
			_Utils_Tuple2('905824', '経営評論社'),
			_Utils_Tuple2('905825', 'クリーンエネルギー研究所'),
			_Utils_Tuple2('905826', '経営法学アカデミー'),
			_Utils_Tuple2('905827', 'ＫＮＢ興産出版部'),
			_Utils_Tuple2('905828', '啓旺出版'),
			_Utils_Tuple2('905829', '軽金属学会'),
			_Utils_Tuple2('905830', '軽金属溶接構造協会'),
			_Utils_Tuple2('905831', '継書房'),
			_Utils_Tuple2('905832', '経済外交研究会'),
			_Utils_Tuple2('905833', '経済企画協会'),
			_Utils_Tuple2('905834', '経済サロン社'),
			_Utils_Tuple2('905835', 'ケイザイ春秋社'),
			_Utils_Tuple2('905836', '経済新誌社'),
			_Utils_Tuple2('905837', '経済新潮社'),
			_Utils_Tuple2('905838', '経済旋風社'),
			_Utils_Tuple2('905839', '経済団体連合会'),
			_Utils_Tuple2('905840', '経済通信社'),
			_Utils_Tuple2('905841', '経済展望社'),
			_Utils_Tuple2('905842', '経済文芸社'),
			_Utils_Tuple2('905843', '経済法律時報社'),
			_Utils_Tuple2('905844', '経済論壇社'),
			_Utils_Tuple2('905846', '形成社'),
			_Utils_Tuple2('905847', '渓声出版'),
			_Utils_Tuple2('905848', '恵文社'),
			_Utils_Tuple2('905849', '慧文社'),
			_Utils_Tuple2('905850', '警察時報社'),
			_Utils_Tuple2('905851', '競馬人協会'),
			_Utils_Tuple2('905852', '啓明社'),
			_Utils_Tuple2('905853', '國學院大學日本文化研究所'),
			_Utils_Tuple2('905854', '競友教育出版'),
			_Utils_Tuple2('905855', '計友協会'),
			_Utils_Tuple2('905856', '鶏友社'),
			_Utils_Tuple2('905857', '建築環境工学へのコンピュータ利用に関する国際シンポジウム'),
			_Utils_Tuple2('905858', '鶏林館書店'),
			_Utils_Tuple2('905859', '桂林書院'),
			_Utils_Tuple2('905860', '恵和出版'),
			_Utils_Tuple2('905861', '罌粟書房'),
			_Utils_Tuple2('905862', 'けやき出版'),
			_Utils_Tuple2('905863', '欅発行所'),
			_Utils_Tuple2('905865', '健康之友社'),
			_Utils_Tuple2('905866', '健康保導会'),
			_Utils_Tuple2('905867', 'けん出版'),
			_Utils_Tuple2('905868', '幻燈社書店'),
			_Utils_Tuple2('905870', '建設企業新聞社'),
			_Utils_Tuple2('905871', '建設行政資料調査会'),
			_Utils_Tuple2('905872', '建設産業研究所'),
			_Utils_Tuple2('905873', '公共建築協会(建設出版センター)'),
			_Utils_Tuple2('905874', '建設調査会'),
			_Utils_Tuple2('905875', 'Ｋ・Ｙプランニング'),
			_Utils_Tuple2('905876', '国際医療専門家協会'),
			_Utils_Tuple2('905877', '健文社学生の友社'),
			_Utils_Tuple2('905878', '建築資材社'),
			_Utils_Tuple2('905879', '建築ジャーナリズム研究所'),
			_Utils_Tuple2('905880', '建築設備綜合協会出版部'),
			_Utils_Tuple2('905881', '建築博容社'),
			_Utils_Tuple2('905882', '拳闘社'),
			_Utils_Tuple2('905883', '賢美閣'),
			_Utils_Tuple2('905885', '研文堂出版'),
			_Utils_Tuple2('905886', '憲法会議'),
			_Utils_Tuple2('905887', '建報社'),
			_Utils_Tuple2('905888', '研友社'),
			_Utils_Tuple2('905889', 'カブ'),
			_Utils_Tuple2('905890', 'ゲーテ書房'),
			_Utils_Tuple2('905891', '藝苑社'),
			_Utils_Tuple2('905892', '芸術春秋社'),
			_Utils_Tuple2('905893', '海外職業訓練協会'),
			_Utils_Tuple2('905894', '芸術文化社'),
			_Utils_Tuple2('905895', '芸能発行所'),
			_Utils_Tuple2('905896', '芸文出版'),
			_Utils_Tuple2('905897', '芸文堂'),
			_Utils_Tuple2('905898', '芸友センター'),
			_Utils_Tuple2('905899', '芸林発行所'),
			_Utils_Tuple2('905900', '劇書房'),
			_Utils_Tuple2('905901', '劇団木馬座'),
			_Utils_Tuple2('905902', '月刊かごしま発行所'),
			_Utils_Tuple2('905903', '月刊経済社'),
			_Utils_Tuple2('905904', '月刊さつき研究社'),
			_Utils_Tuple2('905905', '月刊時事社'),
			_Utils_Tuple2('905906', '官公庁通信社'),
			_Utils_Tuple2('905907', '月刊水発行所'),
			_Utils_Tuple2('905908', '月刊みんよう社'),
			_Utils_Tuple2('905909', '教育企画コヒガシ'),
			_Utils_Tuple2('905910', '玄海出版'),
			_Utils_Tuple2('905911', '児玉マリ・エンタープライズ'),
			_Utils_Tuple2('905912', '原始林社'),
			_Utils_Tuple2('905913', '言叢社'),
			_Utils_Tuple2('905914', '玄短歌会'),
			_Utils_Tuple2('905916', '現代企画通信社'),
			_Utils_Tuple2('905917', '現代研究会出版局'),
			_Utils_Tuple2('905918', '現代研究社'),
			_Utils_Tuple2('905919', '広華企画'),
			_Utils_Tuple2('905920', '現代詩工房'),
			_Utils_Tuple2('905921', '現代史の会'),
			_Utils_Tuple2('905922', '現代出版社'),
			_Utils_Tuple2('905923', '現代出版社'),
			_Utils_Tuple2('905925', '近畿印刷工業'),
			_Utils_Tuple2('905926', '現代短歌委員会'),
			_Utils_Tuple2('905927', '現代展望'),
			_Utils_Tuple2('905928', '現代日本社'),
			_Utils_Tuple2('905929', '現代の世界社'),
			_Utils_Tuple2('905930', '海游舎'),
			_Utils_Tuple2('905931', '現代美術社'),
			_Utils_Tuple2('905932', '現代ブック社'),
			_Utils_Tuple2('905933', '現代舞踊社'),
			_Utils_Tuple2('905934', '幻燈協会'),
			_Utils_Tuple2('905935', '玄同社'),
			_Utils_Tuple2('905936', '南の風社'),
			_Utils_Tuple2('905937', '玄文社'),
			_Utils_Tuple2('905938', '言游社'),
			_Utils_Tuple2('905939', '元老院会議筆記刊行会'),
			_Utils_Tuple2('905940', '言論科学振興協会'),
			_Utils_Tuple2('905941', '言論社'),
			_Utils_Tuple2('905943', 'カタログハウス'),
			_Utils_Tuple2('905944', 'コーティナアカデミー日本支社'),
			_Utils_Tuple2('905945', 'コーヨーシャ'),
			_Utils_Tuple2('905946', '工業複写センター'),
			_Utils_Tuple2('905947', '黄河出版社'),
			_Utils_Tuple2('905948', '公害問題研究会'),
			_Utils_Tuple2('905949', '語学新潮社'),
			_Utils_Tuple2('905950', '神戸楽譜'),
			_Utils_Tuple2('905951', 'コンピューターサービス'),
			_Utils_Tuple2('905952', '晃学出版'),
			_Utils_Tuple2('905953', '公学塾'),
			_Utils_Tuple2('905954', '広軌発行所'),
			_Utils_Tuple2('905955', '高教出版'),
			_Utils_Tuple2('905956', '工業開発研究会'),
			_Utils_Tuple2('905957', '工業技術社'),
			_Utils_Tuple2('905959', '工業製品技術協会'),
			_Utils_Tuple2('905960', '工業日々新聞社'),
			_Utils_Tuple2('905961', '航空ニュース社'),
			_Utils_Tuple2('905962', '広研社'),
			_Utils_Tuple2('905963', '交研社'),
			_Utils_Tuple2('905964', '健康科学センター'),
			_Utils_Tuple2('905966', '工作社'),
			_Utils_Tuple2('905967', '公社債引受協会'),
			_Utils_Tuple2('905968', '恒春閣'),
			_Utils_Tuple2('905969', '広信社'),
			_Utils_Tuple2('905970', '交誠社'),
			_Utils_Tuple2('905971', '興生社'),
			_Utils_Tuple2('905972', '講談社出版販売'),
			_Utils_Tuple2('905973', '高等教科書協会'),
			_Utils_Tuple2('905974', '好日社'),
			_Utils_Tuple2('905975', '工文社'),
			_Utils_Tuple2('905976', '麹町企画'),
			_Utils_Tuple2('905977', '麹町出版'),
			_Utils_Tuple2('905978', '行人社'),
			_Utils_Tuple2('905979', '厚生行政資料調査会'),
			_Utils_Tuple2('905981', '厚生出版社'),
			_Utils_Tuple2('905982', '厚生問題研究会'),
			_Utils_Tuple2('905983', '巧創'),
			_Utils_Tuple2('905984', '国語国文学図書総目録刊行会'),
			_Utils_Tuple2('905985', '高速道路調査会'),
			_Utils_Tuple2('905986', '構造社出版'),
			_Utils_Tuple2('905987', '高知市民図書館'),
			_Utils_Tuple2('905988', '交通案内社出版部'),
			_Utils_Tuple2('905989', '交通協同出版社'),
			_Utils_Tuple2('905990', '交通工学研究会'),
			_Utils_Tuple2('905991', '交通公社トラベランド北海道事業部'),
			_Utils_Tuple2('905992', '交通出版社'),
			_Utils_Tuple2('905993', '交通統計研究所'),
			_Utils_Tuple2('905994', '交通読売新聞社'),
			_Utils_Tuple2('905995', '高等教育研究会'),
			_Utils_Tuple2('905996', '公論社'),
			_Utils_Tuple2('905997', '学習ゼミナール'),
			_Utils_Tuple2('905998', '高分子学会'),
			_Utils_Tuple2('906000', '交文社'),
			_Utils_Tuple2('906001', '広文堂'),
			_Utils_Tuple2('906002', '神戸学術出版'),
			_Utils_Tuple2('906003', '神戸空襲を記録する会'),
			_Utils_Tuple2('906004', '神戸出版販売'),
			_Utils_Tuple2('906005', '虹霓出版社'),
			_Utils_Tuple2('906006', '光風館'),
			_Utils_Tuple2('906007', '広文堂'),
			_Utils_Tuple2('906012', '国会通信社'),
			_Utils_Tuple2('906013', '錦紫出版'),
			_Utils_Tuple2('906014', '光陽社出版部'),
			_Utils_Tuple2('906015', '国際留学生センター'),
			_Utils_Tuple2('906016', '後楽出版'),
			_Utils_Tuple2('906017', '黒潮社'),
			_Utils_Tuple2('906018', '恒和出版'),
			_Utils_Tuple2('906019', '光和書房'),
			_Utils_Tuple2('906020', '狐雲草房'),
			_Utils_Tuple2('906021', '小池編集事務所'),
			_Utils_Tuple2('906022', '郡山文学会'),
			_Utils_Tuple2('906023', 'コールドチェーン協会'),
			_Utils_Tuple2('906024', '小金井新聞社'),
			_Utils_Tuple2('906025', '小林印刷出版部'),
			_Utils_Tuple2('906026', '光輪出版研究所(大光宮神法教)'),
			_Utils_Tuple2('906027', '国際楽譜出版社'),
			_Utils_Tuple2('906028', '国際看護交流協会'),
			_Utils_Tuple2('906029', '国際技術協力協会'),
			_Utils_Tuple2('906030', '国際教育開発'),
			_Utils_Tuple2('906031', '国際経済学会'),
			_Utils_Tuple2('906033', '国際コミュニケーションズ'),
			_Utils_Tuple2('906034', '久米書房新社'),
			_Utils_Tuple2('906035', '国際食糧農業協会'),
			_Utils_Tuple2('906036', '学術文献出版会'),
			_Utils_Tuple2('906037', '国際地図出版'),
			_Utils_Tuple2('906038', '国際時計通信社'),
			_Utils_Tuple2('906039', '国際図書'),
			_Utils_Tuple2('906040', '国際動向出版'),
			_Utils_Tuple2('906041', '国際日本研究所'),
			_Utils_Tuple2('906042', '国際ＰＨＰ研究所'),
			_Utils_Tuple2('906043', '国際メディア'),
			_Utils_Tuple2('906044', '国際労働事務局(ＩＬＯ)東京支局'),
			_Utils_Tuple2('906045', '黒潮社'),
			_Utils_Tuple2('906046', '日本鉄道厚生事業協会'),
			_Utils_Tuple2('906047', '国土計画協会'),
			_Utils_Tuple2('906048', '弘陽出版'),
			_Utils_Tuple2('906049', '全国地区衛生組織連合会'),
			_Utils_Tuple2('906050', '国民出版協会'),
			_Utils_Tuple2('906051', '国民生活センター'),
			_Utils_Tuple2('906052', '国民政治研究センター'),
			_Utils_Tuple2('906053', '国民文化研究会'),
			_Utils_Tuple2('906054', '国民文学社'),
			_Utils_Tuple2('906055', '国立国語研究所'),
			_Utils_Tuple2('906056', '古径社'),
			_Utils_Tuple2('906057', 'こころの手帖社'),
			_Utils_Tuple2('906058', '古今短歌会'),
			_Utils_Tuple2('906059', '古今評論社'),
			_Utils_Tuple2('906060', '小桜書房'),
			_Utils_Tuple2('906061', '越書房'),
			_Utils_Tuple2('906062', '小島資料館'),
			_Utils_Tuple2('906063', 'コスモ出版'),
			_Utils_Tuple2('906064', '神戸青年会議所'),
			_Utils_Tuple2('906065', 'コスモス短歌会'),
			_Utils_Tuple2('906066', '国政社'),
			_Utils_Tuple2('906067', '古代を考える会'),
			_Utils_Tuple2('906068', 'こだま詩社'),
			_Utils_Tuple2('906069', 'こだま出版'),
			_Utils_Tuple2('906070', '国会タイムズ社'),
			_Utils_Tuple2('906071', '国家総動員史刊行会'),
			_Utils_Tuple2('906072', '古典研究会'),
			_Utils_Tuple2('906073', 'こども舎'),
			_Utils_Tuple2('906074', '子どもの文化研究所'),
			_Utils_Tuple2('906075', '子ども文庫の会'),
			_Utils_Tuple2('906076', '子ども部屋社'),
			_Utils_Tuple2('906077', '小林地図専門店'),
			_Utils_Tuple2('906078', '小林豊子着物学院出版部'),
			_Utils_Tuple2('906079', 'コバルト社'),
			_Utils_Tuple2('906080', '加藤玖仁子'),
			_Utils_Tuple2('906081', '湖北社'),
			_Utils_Tuple2('906082', '駒草出版'),
			_Utils_Tuple2('906083', '柏の森書房'),
			_Utils_Tuple2('906084', '小峰工業出版'),
			_Utils_Tuple2('906085', 'コリア評論社'),
			_Utils_Tuple2('906086', 'コルベ出版社'),
			_Utils_Tuple2('906087', 'コレクションジャポンＳＡ'),
			_Utils_Tuple2('906088', '金光教徒社'),
			_Utils_Tuple2('906089', '今日社'),
			_Utils_Tuple2('906090', '今週の日本'),
			_Utils_Tuple2('906091', 'クエスト出版部'),
			_Utils_Tuple2('906092', '川崎教育文化研究所'),
			_Utils_Tuple2('906093', '健康医学研究所'),
			_Utils_Tuple2('906094', '碁学社'),
			_Utils_Tuple2('906095', 'キャティア・サービス'),
			_Utils_Tuple2('906096', '国際日本語普及協会'),
			_Utils_Tuple2('906097', '国際企画出版'),
			_Utils_Tuple2('906098', 'コンビ社'),
			_Utils_Tuple2('906099', '後藤書店'),
			_Utils_Tuple2('906100', '五同産業出版部'),
			_Utils_Tuple2('906101', '吾八ぷれす'),
			_Utils_Tuple2('906102', 'ポスティコーポレーション'),
			_Utils_Tuple2('906103', '五稜出版社'),
			_Utils_Tuple2('906104', '光原図書'),
			_Utils_Tuple2('906105', 'ケイアイ企画'),
			_Utils_Tuple2('906106', '琴通信社'),
			_Utils_Tuple2('906107', '共同出版社'),
			_Utils_Tuple2('906108', '向陽書房'),
			_Utils_Tuple2('906109', '国際プレスセンター'),
			_Utils_Tuple2('906110', '黒木出版社'),
			_Utils_Tuple2('906111', '小玉'),
			_Utils_Tuple2('906112', '棋友社'),
			_Utils_Tuple2('906114', '近畿英語教育社'),
			_Utils_Tuple2('906115', '経済新潮社'),
			_Utils_Tuple2('906116', '九段出版'),
			_Utils_Tuple2('906118', 'こうべフードコンサルタント'),
			_Utils_Tuple2('906119', 'クロノス'),
			_Utils_Tuple2('906120', '関西市民書房'),
			_Utils_Tuple2('906121', 'コンパニオン出版'),
			_Utils_Tuple2('906122', '金沢工業大学出版局'),
			_Utils_Tuple2('906123', '学と文芸会'),
			_Utils_Tuple2('906124', 'かや書房'),
			_Utils_Tuple2('906126', '喜多見書房'),
			_Utils_Tuple2('906127', '古代オリエント博物館'),
			_Utils_Tuple2('906128', '浩明出版'),
			_Utils_Tuple2('906129', '銀泉書店'),
			_Utils_Tuple2('906130', '根源学書房'),
			_Utils_Tuple2('906131', '国際資源問題研究会'),
			_Utils_Tuple2('906132', 'カルティヴェイト２１'),
			_Utils_Tuple2('906133', '公社債新聞社'),
			_Utils_Tuple2('906134', '麹町書房'),
			_Utils_Tuple2('906135', 'ヴエルクジャポネ'),
			_Utils_Tuple2('906136', '神戸市交通局'),
			_Utils_Tuple2('906137', '公聞出版'),
			_Utils_Tuple2('906138', '京都府教科図書販売'),
			_Utils_Tuple2('906139', '共和アドエンタープライズ'),
			_Utils_Tuple2('906140', '「上方芸能」編集部'),
			_Utils_Tuple2('906141', 'カルダイ社'),
			_Utils_Tuple2('906142', '教材市場研究所'),
			_Utils_Tuple2('906143', '啓明社'),
			_Utils_Tuple2('906144', 'クワダ'),
			_Utils_Tuple2('906145', '京都アメリカ研究夏期セミナー'),
			_Utils_Tuple2('906147', '球体社'),
			_Utils_Tuple2('906148', '柿村書店'),
			_Utils_Tuple2('906149', '現代看護社'),
			_Utils_Tuple2('906150', '近代フォト出版社'),
			_Utils_Tuple2('906151', '健康食新聞社'),
			_Utils_Tuple2('906152', '門茂男プロレス全集刊行会'),
			_Utils_Tuple2('906153', '刊行社'),
			_Utils_Tuple2('906154', '月刊神戸っ子'),
			_Utils_Tuple2('906155', 'くさかご社'),
			_Utils_Tuple2('906156', '基督聖協団出版部'),
			_Utils_Tuple2('906157', '客観社'),
			_Utils_Tuple2('906159', '敬文社'),
			_Utils_Tuple2('906160', '神奈川図書'),
			_Utils_Tuple2('906161', 'コーキ出版販売'),
			_Utils_Tuple2('906162', '環境産業新聞社'),
			_Utils_Tuple2('906163', '株主の友社'),
			_Utils_Tuple2('906164', '国際投資研究所'),
			_Utils_Tuple2('906166', '魚菜'),
			_Utils_Tuple2('906167', '現代経営研究会'),
			_Utils_Tuple2('906169', '国際ロータリー旅行出版局'),
			_Utils_Tuple2('906170', '科学技術広報財団'),
			_Utils_Tuple2('906171', '公評社'),
			_Utils_Tuple2('906172', '向学社'),
			_Utils_Tuple2('906173', '公益法人協会'),
			_Utils_Tuple2('906174', '北沢書店'),
			_Utils_Tuple2('906175', 'コア'),
			_Utils_Tuple2('906176', '見聞社'),
			_Utils_Tuple2('906177', '規文堂'),
			_Utils_Tuple2('906178', '語学総合研究所'),
			_Utils_Tuple2('906179', 'カナザワ出版センター'),
			_Utils_Tuple2('906180', '学習研究社・情報機材事業本部'),
			_Utils_Tuple2('906181', 'ゲートボールライフ社'),
			_Utils_Tuple2('906182', '群羊社'),
			_Utils_Tuple2('906183', '現代紫明社'),
			_Utils_Tuple2('906184', '近代書房'),
			_Utils_Tuple2('906185', '経営と科学社'),
			_Utils_Tuple2('906186', '銀星出版社'),
			_Utils_Tuple2('906187', '危険物保安管理研究会'),
			_Utils_Tuple2('906188', '小泉定弘'),
			_Utils_Tuple2('906190', 'キングセラーズ'),
			_Utils_Tuple2('906191', '国際投資'),
			_Utils_Tuple2('906192', 'からさわ出版'),
			_Utils_Tuple2('906193', '教育文化研究社'),
			_Utils_Tuple2('906194', '教育史学会'),
			_Utils_Tuple2('906195', 'グランまま社'),
			_Utils_Tuple2('906196', 'クリエート・システム'),
			_Utils_Tuple2('906200', '九重出版'),
			_Utils_Tuple2('906201', '共栄出版社'),
			_Utils_Tuple2('906202', '国際時代社'),
			_Utils_Tuple2('906204', '厚生社'),
			_Utils_Tuple2('906205', '子研出版'),
			_Utils_Tuple2('906206', '小林エージェンシー出版部'),
			_Utils_Tuple2('906207', '辛夷社'),
			_Utils_Tuple2('906208', '厚生環境問題研究会'),
			_Utils_Tuple2('906209', '学力増進会'),
			_Utils_Tuple2('906210', '建設行政出版センター'),
			_Utils_Tuple2('906211', '航空交通管制協会'),
			_Utils_Tuple2('906212', '看護医学出版'),
			_Utils_Tuple2('906213', '蟹書房'),
			_Utils_Tuple2('906214', '共同出版'),
			_Utils_Tuple2('906216', '言語科学研究所'),
			_Utils_Tuple2('906217', 'きんが出版'),
			_Utils_Tuple2('906218', 'けやきの街'),
			_Utils_Tuple2('906219', '教育新聞出版事業センター'),
			_Utils_Tuple2('906221', '協和企画'),
			_Utils_Tuple2('906223', '広報社'),
			_Utils_Tuple2('906225', '癌と化学療法社'),
			_Utils_Tuple2('906226', 'カタクラ・リブリ'),
			_Utils_Tuple2('906227', '県南民報社'),
			_Utils_Tuple2('906228', '溪林出版'),
			_Utils_Tuple2('906229', 'キッコーマン'),
			_Utils_Tuple2('906230', 'コスモポリタン'),
			_Utils_Tuple2('906231', 'Ｇｏｌｄ Ｓｐｒｉｎｔ Ｌｉｍｉｔｅｄ'),
			_Utils_Tuple2('906232', 'ゼノア'),
			_Utils_Tuple2('906233', 'コンピュータ・エンジニアリング社'),
			_Utils_Tuple2('906235', '国際芸術文化振興会'),
			_Utils_Tuple2('906236', '国際連合地域開発センター'),
			_Utils_Tuple2('906237', 'かたくら書店'),
			_Utils_Tuple2('906238', '国連社'),
			_Utils_Tuple2('906239', '弘栄堂書店'),
			_Utils_Tuple2('906240', 'クォリティ出版'),
			_Utils_Tuple2('906242', '雅薹書店'),
			_Utils_Tuple2('906243', '久遠出版'),
			_Utils_Tuple2('906244', 'ゴーシードゥーパブリケイションズ'),
			_Utils_Tuple2('906245', '外食産業新聞社'),
			_Utils_Tuple2('906246', '現代フォーラム'),
			_Utils_Tuple2('906248', '近衛音楽研究所'),
			_Utils_Tuple2('906249', '鳩燕山房'),
			_Utils_Tuple2('906251', '科学技術総合研究所'),
			_Utils_Tuple2('906252', '京都文化財団'),
			_Utils_Tuple2('906253', '近畿書院'),
			_Utils_Tuple2('906254', '国際大学附属中東研究所'),
			_Utils_Tuple2('906255', '技術出版'),
			_Utils_Tuple2('906256', '関西テレビ放送'),
			_Utils_Tuple2('906257', '甲南出版社'),
			_Utils_Tuple2('906258', 'グリーンレーン'),
			_Utils_Tuple2('906259', '風のポニー'),
			_Utils_Tuple2('906260', '研修ジャーナル社'),
			_Utils_Tuple2('906261', '京都出版'),
			_Utils_Tuple2('906262', 'くだかけ社'),
			_Utils_Tuple2('906263', '茎書房'),
			_Utils_Tuple2('906264', 'ごとう書房'),
			_Utils_Tuple2('906265', 'ギャラリーＭＩＮ'),
			_Utils_Tuple2('906266', 'コミント'),
			_Utils_Tuple2('906267', '国際仏教学研究所'),
			_Utils_Tuple2('906269', '月刊同友社'),
			_Utils_Tuple2('906270', '国際事業企画'),
			_Utils_Tuple2('906271', '小林興業社'),
			_Utils_Tuple2('906272', '建築施工管理技術研究会'),
			_Utils_Tuple2('906273', '管工事施工管理技術研究会'),
			_Utils_Tuple2('906274', '国際ナビゲーター出版部'),
			_Utils_Tuple2('906275', '研究情報基金'),
			_Utils_Tuple2('906276', '厚生出版'),
			_Utils_Tuple2('906277', '高校出版'),
			_Utils_Tuple2('906278', '興仁舎'),
			_Utils_Tuple2('906279', '神奈川大学'),
			_Utils_Tuple2('906280', '教育企画出版'),
			_Utils_Tuple2('906281', '官公庁資料編纂会'),
			_Utils_Tuple2('906283', '学芸社'),
			_Utils_Tuple2('906284', '啓明研究会'),
			_Utils_Tuple2('906285', 'コオジオグラパブリケイションズ'),
			_Utils_Tuple2('906286', '公共投資ジャーナル社'),
			_Utils_Tuple2('906287', '弘隆社'),
			_Utils_Tuple2('906288', '吟涛社'),
			_Utils_Tuple2('906289', 'クリエイト井上'),
			_Utils_Tuple2('906290', '現代史研究所'),
			_Utils_Tuple2('906291', '科学書院'),
			_Utils_Tuple2('906292', 'コア企画出版'),
			_Utils_Tuple2('906293', '現代出版'),
			_Utils_Tuple2('906294', '国立音楽大学付属図書館'),
			_Utils_Tuple2('906295', '学生情報プレス'),
			_Utils_Tuple2('906296', '伽藍洞ギャラリー'),
			_Utils_Tuple2('906297', '関西分譲共同住宅管理組合協議会'),
			_Utils_Tuple2('906298', '偕高新社'),
			_Utils_Tuple2('906299', 'カヅサ共済法規出版部'),
			_Utils_Tuple2('906301', '企画室'),
			_Utils_Tuple2('906302', 'グリーンピース出版会'),
			_Utils_Tuple2('906303', '言論出版社'),
			_Utils_Tuple2('906304', '交通安全出版'),
			_Utils_Tuple2('906305', 'ペンローグ'),
			_Utils_Tuple2('906306', 'コーラル'),
			_Utils_Tuple2('906307', '共済保険研究会'),
			_Utils_Tuple2('906308', 'コミネエージェンシー'),
			_Utils_Tuple2('906309', 'ゴルフタイムス社'),
			_Utils_Tuple2('906310', '健学社'),
			_Utils_Tuple2('906311', 'カインドウェア'),
			_Utils_Tuple2('906312', 'カードジャック'),
			_Utils_Tuple2('906313', 'クリップメディアサービス'),
			_Utils_Tuple2('906314', '近電写真工業'),
			_Utils_Tuple2('906315', 'グラフ青森社'),
			_Utils_Tuple2('906316', 'カラ文化情報センター'),
			_Utils_Tuple2('906318', 'ケー・エフ・ジャパン'),
			_Utils_Tuple2('906320', '幻洋社'),
			_Utils_Tuple2('906321', 'コスモ・スペース'),
			_Utils_Tuple2('906322', '恩方一村逸品研究所'),
			_Utils_Tuple2('906326', '建設関連技術研究会'),
			_Utils_Tuple2('906327', 'グリーンヒル出版社'),
			_Utils_Tuple2('906328', '藝林社'),
			_Utils_Tuple2('906331', '開山堂出版'),
			_Utils_Tuple2('906333', '木村芳雄'),
			_Utils_Tuple2('906334', 'クラ・フォト・インターシティ'),
			_Utils_Tuple2('906335', '笠松中央公民館'),
			_Utils_Tuple2('906336', 'ＫＩＴ教材開発グループ'),
			_Utils_Tuple2('906337', 'ケーユー企画出版'),
			_Utils_Tuple2('906338', '国際文化評論社'),
			_Utils_Tuple2('906339', 'キャルイント販売'),
			_Utils_Tuple2('906340', 'ケイ・ワークス'),
			_Utils_Tuple2('906341', 'くれせんと出版部'),
			_Utils_Tuple2('906342', 'ケイシイシイ'),
			_Utils_Tuple2('906343', 'グローバルインスティテュート'),
			_Utils_Tuple2('906344', 'こだま出版'),
			_Utils_Tuple2('906345', '共信商事'),
			_Utils_Tuple2('906346', '京都ＴＯＭＯＲＲＯＷ出版社'),
			_Utils_Tuple2('906348', '弘文社'),
			_Utils_Tuple2('906349', 'クレステック'),
			_Utils_Tuple2('906350', '鯨書房'),
			_Utils_Tuple2('906351', '見聞社'),
			_Utils_Tuple2('906352', '国際協力出版会'),
			_Utils_Tuple2('906353', '開成出版'),
			_Utils_Tuple2('906354', 'ゲイン'),
			_Utils_Tuple2('906355', '京都出版サービスセンター'),
			_Utils_Tuple2('906356', '国際湖沼環境委員会'),
			_Utils_Tuple2('906357', '外食産業總合調査研究センター'),
			_Utils_Tuple2('906358', '紅月社'),
			_Utils_Tuple2('906360', '惠友社'),
			_Utils_Tuple2('906362', '共同企画通信社'),
			_Utils_Tuple2('906363', '河内書房'),
			_Utils_Tuple2('906364', '亀田ブックサービス'),
			_Utils_Tuple2('906365', '教育プロダクションキャッシュ'),
			_Utils_Tuple2('906366', '群馬出版センター'),
			_Utils_Tuple2('906368', '関西ビジネスインフォメーション'),
			_Utils_Tuple2('906370', '興英社'),
			_Utils_Tuple2('906372', 'ＫＤＤクリエイティブ'),
			_Utils_Tuple2('906373', '現代教育社'),
			_Utils_Tuple2('906374', 'クロス・コンサルティング'),
			_Utils_Tuple2('906375', 'ぎんのすず'),
			_Utils_Tuple2('906377', '記録ジャーナル社'),
			_Utils_Tuple2('906378', '加速学園'),
			_Utils_Tuple2('906380', 'コスモの本'),
			_Utils_Tuple2('906381', '近畿大学中央図書館'),
			_Utils_Tuple2('906382', '京都高度技術研究所'),
			_Utils_Tuple2('906384', 'クレイヴ'),
			_Utils_Tuple2('906385', '笠松町文化協会'),
			_Utils_Tuple2('906386', '共同出版'),
			_Utils_Tuple2('906387', '金沢倶楽部'),
			_Utils_Tuple2('906389', 'コンサルテック社'),
			_Utils_Tuple2('906390', 'キャロム'),
			_Utils_Tuple2('906392', 'かなかな舎'),
			_Utils_Tuple2('906393', '学習マンガ出版'),
			_Utils_Tuple2('906394', '金沢医科大学出版局'),
			_Utils_Tuple2('906395', 'コスモ出版'),
			_Utils_Tuple2('906397', '海苑社'),
			_Utils_Tuple2('906398', '技術情報センター'),
			_Utils_Tuple2('906399', '関西鉄道研究会'),
			_Utils_Tuple2('906400', '慶応義塾大学民族学考古学研究室'),
			_Utils_Tuple2('906401', 'キリスト教視聴覚センター'),
			_Utils_Tuple2('906402', 'ゴスペルミュージックエクスプレス'),
			_Utils_Tuple2('906403', '川口印刷工業'),
			_Utils_Tuple2('906404', '現代フォルム'),
			_Utils_Tuple2('906405', '晃阿書院'),
			_Utils_Tuple2('906406', 'コンビ'),
			_Utils_Tuple2('906409', '喜劇映画研究会'),
			_Utils_Tuple2('906410', '国際理解教育・資料情報センター'),
			_Utils_Tuple2('906411', '国際教育アカデミー'),
			_Utils_Tuple2('906412', '雇用情報センター'),
			_Utils_Tuple2('906413', '国際事業開発'),
			_Utils_Tuple2('906414', '企業メセナ協議会'),
			_Utils_Tuple2('906415', 'カルトクラブ'),
			_Utils_Tuple2('906416', '共研書房'),
			_Utils_Tuple2('906417', '学会センター関西'),
			_Utils_Tuple2('906418', 'カモンミュージック'),
			_Utils_Tuple2('906419', '鈴出版'),
			_Utils_Tuple2('906420', '国際東アジア研究センター'),
			_Utils_Tuple2('906421', '巖書房'),
			_Utils_Tuple2('906422', '河源社'),
			_Utils_Tuple2('906423', 'コインジャーナル'),
			_Utils_Tuple2('906425', 'キスコ'),
			_Utils_Tuple2('906426', 'げんごろう'),
			_Utils_Tuple2('906427', '京都女子大学'),
			_Utils_Tuple2('906428', '如月書房'),
			_Utils_Tuple2('906429', 'キューエル'),
			_Utils_Tuple2('906430', '公人社'),
			_Utils_Tuple2('906431', '近未来社'),
			_Utils_Tuple2('906432', 'キラメキ'),
			_Utils_Tuple2('906434', '近畿大学出版広報部'),
			_Utils_Tuple2('906435', 'ゴールデン出版'),
			_Utils_Tuple2('906437', 'コーレー'),
			_Utils_Tuple2('906438', '関西看護出版'),
			_Utils_Tuple2('906439', '建設電気技術協会'),
			_Utils_Tuple2('906440', 'こうきょう'),
			_Utils_Tuple2('906441', '休日と旅出版社'),
			_Utils_Tuple2('906442', '京都地方自治総合研究所'),
			_Utils_Tuple2('906443', '柏美術出版'),
			_Utils_Tuple2('906444', 'ゴユー企画印刷'),
			_Utils_Tuple2('906445', '技術経済研究所'),
			_Utils_Tuple2('906446', '岐阜書林'),
			_Utils_Tuple2('906447', 'キャンシティコーポレイション'),
			_Utils_Tuple2('906448', '九戸印刷'),
			_Utils_Tuple2('906449', '金融ブックス'),
			_Utils_Tuple2('906450', '加古川流域史学会'),
			_Utils_Tuple2('906451', '加工技術研究会'),
			_Utils_Tuple2('906452', 'ケイ・アンド・ワイカンパニー'),
			_Utils_Tuple2('906453', 'クリエイト・ノア'),
			_Utils_Tuple2('906454', '企業年金研究所'),
			_Utils_Tuple2('906455', '藝術出版社'),
			_Utils_Tuple2('906456', '耕文社'),
			_Utils_Tuple2('906457', '寒地港湾技術研究センター'),
			_Utils_Tuple2('906458', '北星印刷'),
			_Utils_Tuple2('906459', '光画コミュニケーションプロダクツ'),
			_Utils_Tuple2('906460', '神戸学生・青年センター出版部'),
			_Utils_Tuple2('906461', '京和オリジナル出版事業部'),
			_Utils_Tuple2('906462', '木下印刷'),
			_Utils_Tuple2('906463', '敬愛大学経済文化研究所'),
			_Utils_Tuple2('906464', '講談社サイエンティフィク'),
			_Utils_Tuple2('906466', '京麟'),
			_Utils_Tuple2('906467', '公共投資総研'),
			_Utils_Tuple2('906468', '共同企画'),
			_Utils_Tuple2('906469', '川鉄テクノリサーチ'),
			_Utils_Tuple2('906470', 'クリエイト・クルーズ'),
			_Utils_Tuple2('906471', 'カボ企画'),
			_Utils_Tuple2('906473', '神戸理科出版'),
			_Utils_Tuple2('906474', '国会資料編纂会'),
			_Utils_Tuple2('906475', 'ケネスインターナショナル'),
			_Utils_Tuple2('906476', '国立出版'),
			_Utils_Tuple2('906477', '国際環境創造研究所'),
			_Utils_Tuple2('906478', '啓明舎'),
			_Utils_Tuple2('906479', '関東建設弘済会'),
			_Utils_Tuple2('906480', '駒草書房'),
			_Utils_Tuple2('906482', '懐徳堂友の会'),
			_Utils_Tuple2('906484', '恵文堂'),
			_Utils_Tuple2('906485', '勝木書店'),
			_Utils_Tuple2('906486', '久万美術館'),
			_Utils_Tuple2('906487', '吉香'),
			_Utils_Tuple2('906488', '現代教育社'),
			_Utils_Tuple2('906489', 'こーりん社'),
			_Utils_Tuple2('906490', 'ケイワールド'),
			_Utils_Tuple2('906491', '京都外国語大学国際言語平和研究所'),
			_Utils_Tuple2('906492', '国際コミュニケーションセンター(国際交流センター)'),
			_Utils_Tuple2('906493', '広英社'),
			_Utils_Tuple2('906494', 'くりえい舎'),
			_Utils_Tuple2('906495', '学園時報社'),
			_Utils_Tuple2('906496', 'クラブハウス'),
			_Utils_Tuple2('906497', '可視化情報学会'),
			_Utils_Tuple2('906498', 'ギミック'),
			_Utils_Tuple2('906499', '健文社'),
			_Utils_Tuple2('906501', '小玉出版部'),
			_Utils_Tuple2('906502', '学樹書院'),
			_Utils_Tuple2('906503', 'コワフユール・ド・パリ・ジャポン'),
			_Utils_Tuple2('906504', '貝の火書房'),
			_Utils_Tuple2('906505', '学術情報流通センター'),
			_Utils_Tuple2('906506', '海外コンサルティング企業協会'),
			_Utils_Tuple2('906507', 'カイプレス'),
			_Utils_Tuple2('906508', '海立出版社'),
			_Utils_Tuple2('906509', '木村書店'),
			_Utils_Tuple2('906510', '紀伊國屋書店商品部'),
			_Utils_Tuple2('906511', '興文書院'),
			_Utils_Tuple2('906513', 'クラフト禅'),
			_Utils_Tuple2('906514', '学際企画'),
			_Utils_Tuple2('906515', '関西生薬勉強会'),
			_Utils_Tuple2('906516', '共同広告'),
			_Utils_Tuple2('906517', '求人ジャーナル'),
			_Utils_Tuple2('906518', '黒潮社'),
			_Utils_Tuple2('906519', '言語交流研究所・ヒッポファミリークラブ'),
			_Utils_Tuple2('906521', '啓明館'),
			_Utils_Tuple2('906522', 'キャドウェーブ'),
			_Utils_Tuple2('906523', '京都府書店商業組合'),
			_Utils_Tuple2('906524', 'グレートディッパー'),
			_Utils_Tuple2('906525', '近代史資料室'),
			_Utils_Tuple2('906526', '恒陽社'),
			_Utils_Tuple2('906527', 'キョウエイアドインターナショナル'),
			_Utils_Tuple2('906528', 'カデナクリエイト'),
			_Utils_Tuple2('906529', '川辺書林'),
			_Utils_Tuple2('906530', 'ゲイン社'),
			_Utils_Tuple2('906532', '故宮華夏文化社'),
			_Utils_Tuple2('906534', '関東書院'),
			_Utils_Tuple2('906536', '国立西洋美術館協力会'),
			_Utils_Tuple2('906537', '金融ファクシミリ新聞社'),
			_Utils_Tuple2('906538', 'コロナジャパン・インク'),
			_Utils_Tuple2('906539', 'カタツムリ社'),
			_Utils_Tuple2('906540', '子どもと文化研究所'),
			_Utils_Tuple2('906541', 'カーサ・フェミニナ教育研究所'),
			_Utils_Tuple2('906542', '高圧ガス保安協会'),
			_Utils_Tuple2('906543', '金沢出版社'),
			_Utils_Tuple2('906544', '建築・都市ワークショップ'),
			_Utils_Tuple2('906545', 'Ｇｏｌｄｓｕｎｓ Ｐｕｂｌｉｓｈｉｎｇ'),
			_Utils_Tuple2('906546', '宏文出版'),
			_Utils_Tuple2('906548', 'ケイ・コーポレーション'),
			_Utils_Tuple2('906549', '海洋工学研究所出版部'),
			_Utils_Tuple2('906550', '国際基督教大学比較文化研究会'),
			_Utils_Tuple2('906551', '共同メディア通信社'),
			_Utils_Tuple2('906552', '国際高麗学会'),
			_Utils_Tuple2('906553', '金沢印刷'),
			_Utils_Tuple2('906554', '国立環境研究所地球環境研究センター'),
			_Utils_Tuple2('906555', '関西大学法学研究所'),
			_Utils_Tuple2('906556', '海外文化振興協会'),
			_Utils_Tuple2('906557', '感性生活科学研究会'),
			_Utils_Tuple2('906558', '金苑書房'),
			_Utils_Tuple2('906559', 'ゲン・クリエイティブ'),
			_Utils_Tuple2('906560', '公開情報'),
			_Utils_Tuple2('906561', 'くすの木社'),
			_Utils_Tuple2('906562', 'キューブリサーチ３'),
			_Utils_Tuple2('906563', '久山社'),
			_Utils_Tuple2('906564', '計画堂'),
			_Utils_Tuple2('906565', '機械振興協会経済研究所'),
			_Utils_Tuple2('906566', '国立循環器病センター'),
			_Utils_Tuple2('906567', '行道文庫'),
			_Utils_Tuple2('906568', '戯画'),
			_Utils_Tuple2('906569', '研修社'),
			_Utils_Tuple2('906570', 'カズ出版'),
			_Utils_Tuple2('906571', 'グロリア・アーツ'),
			_Utils_Tuple2('906572', 'クラブキング'),
			_Utils_Tuple2('906573', '光陰書院'),
			_Utils_Tuple2('906574', '棋聖堂'),
			_Utils_Tuple2('906575', '九州文学社'),
			_Utils_Tuple2('906576', 'キッズコーポレーション'),
			_Utils_Tuple2('906578', '蛍友教育社'),
			_Utils_Tuple2('906579', '霞が関通信社'),
			_Utils_Tuple2('906580', 'ＫＦプロジェクト'),
			_Utils_Tuple2('906581', '家族計画国際協力財団'),
			_Utils_Tuple2('906582', 'カプコン'),
			_Utils_Tuple2('906583', '海外開発センター'),
			_Utils_Tuple2('906584', '国際マングローブ生態系協会'),
			_Utils_Tuple2('906585', '花梨社'),
			_Utils_Tuple2('906586', '九州人'),
			_Utils_Tuple2('906587', 'グレイゼ'),
			_Utils_Tuple2('906588', '学術図書出版'),
			_Utils_Tuple2('906589', '関西印刷出版部飛鳥書房'),
			_Utils_Tuple2('906590', 'カリファ'),
			_Utils_Tuple2('906591', '紀要出版'),
			_Utils_Tuple2('906592', '関西造船協会'),
			_Utils_Tuple2('906593', '経済ルック'),
			_Utils_Tuple2('906594', '協同録音'),
			_Utils_Tuple2('906595', '学習環境研究所'),
			_Utils_Tuple2('906596', '行政管理研究センター'),
			_Utils_Tuple2('906597', 'ケーズアート'),
			_Utils_Tuple2('906598', 'クリエートタイムス社'),
			_Utils_Tuple2('906599', '公経営研究所'),
			_Utils_Tuple2('906601', '学術出版印刷'),
			_Utils_Tuple2('906602', 'キャトル・キャー'),
			_Utils_Tuple2('906603', 'グローバルカルチャーセンター'),
			_Utils_Tuple2('906604', 'かつた印刷出版部'),
			_Utils_Tuple2('906605', '金曜日'),
			_Utils_Tuple2('906606', 'ＣＯＮＤＵＣＴＯＲ編集部'),
			_Utils_Tuple2('906607', '今野印刷'),
			_Utils_Tuple2('906609', 'インデックス'),
			_Utils_Tuple2('906610', '関西廣済堂(東日本支社)'),
			_Utils_Tuple2('906611', 'コスコムランゲージサービス'),
			_Utils_Tuple2('906612', '国際獣疫事務局(ＯＩＥ)アジア太平洋地域事務局'),
			_Utils_Tuple2('906614', 'クエリテ'),
			_Utils_Tuple2('906615', 'すぎのこ文化振興財団'),
			_Utils_Tuple2('906616', '国際芸術連盟'),
			_Utils_Tuple2('906617', 'キョクイチ'),
			_Utils_Tuple2('906618', '厚有出版'),
			_Utils_Tuple2('906619', 'ＫＧ情報'),
			_Utils_Tuple2('906620', '化学ソフトウェア学会'),
			_Utils_Tuple2('906621', 'コーポレイトデザイン研究所'),
			_Utils_Tuple2('906622', 'カルチュア出版'),
			_Utils_Tuple2('906623', 'ゴールデンブック'),
			_Utils_Tuple2('906624', 'グレイト'),
			_Utils_Tuple2('906625', 'カリフォルニアリース'),
			_Utils_Tuple2('906626', 'クレア'),
			_Utils_Tuple2('906628', '案々子書房'),
			_Utils_Tuple2('906629', '寿企画'),
			_Utils_Tuple2('906630', '競馬通信社'),
			_Utils_Tuple2('906632', 'クリエテ関西'),
			_Utils_Tuple2('906633', 'クリップ'),
			_Utils_Tuple2('906634', '国際図書出版'),
			_Utils_Tuple2('906635', '国際農林水産業研究センター'),
			_Utils_Tuple2('906636', '光文堂'),
			_Utils_Tuple2('906637', '雁塔舎'),
			_Utils_Tuple2('906638', 'キングベアー出版'),
			_Utils_Tuple2('906639', '桂実'),
			_Utils_Tuple2('906640', 'コモンズ'),
			_Utils_Tuple2('906641', '高志書店'),
			_Utils_Tuple2('906643', '国際通信社'),
			_Utils_Tuple2('906644', '閑山房'),
			_Utils_Tuple2('906645', '玄文社'),
			_Utils_Tuple2('906646', '広葉書林'),
			_Utils_Tuple2('906647', '九州ジャーナル社'),
			_Utils_Tuple2('906648', '海曜社'),
			_Utils_Tuple2('906649', '慶応義塾郵便切手研究会'),
			_Utils_Tuple2('906651', '国立極地研究所'),
			_Utils_Tuple2('906652', '学際社'),
			_Utils_Tuple2('906653', '航空宇宙技術研究所'),
			_Utils_Tuple2('906654', '広報社'),
			_Utils_Tuple2('906655', '楓工房'),
			_Utils_Tuple2('906656', 'カリアック'),
			_Utils_Tuple2('906657', 'コンピュータ・ニュース社'),
			_Utils_Tuple2('906658', '廣済堂科学情報社'),
			_Utils_Tuple2('906659', 'コンパイル'),
			_Utils_Tuple2('906660', '教学出版'),
			_Utils_Tuple2('906662', '関西図書出版'),
			_Utils_Tuple2('906663', '甲佐町教育委員会'),
			_Utils_Tuple2('906664', '浩気社'),
			_Utils_Tuple2('906665', '画像情報教育振興協会(ＣＧ－ＡＲＴＳ協会)'),
			_Utils_Tuple2('906666', '現代図書'),
			_Utils_Tuple2('906667', '興信データ'),
			_Utils_Tuple2('906668', '源草社'),
			_Utils_Tuple2('906669', '国立音楽大学楽器学資料館'),
			_Utils_Tuple2('906670', '国際企画'),
			_Utils_Tuple2('906671', '国際高等研究所'),
			_Utils_Tuple2('906672', '攻文社'),
			_Utils_Tuple2('906673', '五曜書房'),
			_Utils_Tuple2('906674', 'ケイアンドケイプレス'),
			_Utils_Tuple2('906675', 'カーネル出版'),
			_Utils_Tuple2('906676', 'キークリエイション出版社'),
			_Utils_Tuple2('906677', 'くまざさ社'),
			_Utils_Tuple2('906678', '北日本新聞社出版部'),
			_Utils_Tuple2('906679', '京都創文社'),
			_Utils_Tuple2('906680', '皓心社'),
			_Utils_Tuple2('906681', 'クレイン'),
			_Utils_Tuple2('906682', '九段ゼミナール'),
			_Utils_Tuple2('906683', '芸術計画Ｚ・Ａ'),
			_Utils_Tuple2('906684', '文芸書房社'),
			_Utils_Tuple2('906685', '神谷書房'),
			_Utils_Tuple2('906686', '国際連合大学高等研究所'),
			_Utils_Tuple2('906687', '国際開発高等教育機構'),
			_Utils_Tuple2('906688', 'クロノス'),
			_Utils_Tuple2('906689', '光文堂印刷'),
			_Utils_Tuple2('906690', '光原社'),
			_Utils_Tuple2('906691', '企画集団ぷりずむ'),
			_Utils_Tuple2('906692', '季節社'),
			_Utils_Tuple2('906693', 'ケー・アイ・ピー'),
			_Utils_Tuple2('906694', '小林潔司'),
			_Utils_Tuple2('906695', 'コモドア'),
			_Utils_Tuple2('906696', '学際図書出版'),
			_Utils_Tuple2('906697', 'コンポーズ・ユニ'),
			_Utils_Tuple2('906698', '雲の間にある虹出版'),
			_Utils_Tuple2('907637', 'プロジェクト'),
			_Utils_Tuple2('907638', 'コボリ出版'),
			_Utils_Tuple2('907639', 'カミン'),
			_Utils_Tuple2('907640', '給水工事技術振興財団'),
			_Utils_Tuple2('907641', '富士通九州システムエンジニアリング'),
			_Utils_Tuple2('907642', '鎌倉新書'),
			_Utils_Tuple2('907643', '玄陽社'),
			_Utils_Tuple2('907644', 'ゴスペルワールド'),
			_Utils_Tuple2('907645', 'コミュニティ新聞社'),
			_Utils_Tuple2('907646', '光輪出版会'),
			_Utils_Tuple2('907647', 'クエスチョンズ'),
			_Utils_Tuple2('907648', '凸版印刷コンテンツ部'),
			_Utils_Tuple2('907649', '経コン教育研究所'),
			_Utils_Tuple2('907650', 'きょうぶん社'),
			_Utils_Tuple2('907651', '国際地理学連合土地利用・被覆変化研究委員会'),
			_Utils_Tuple2('907652', '海援社'),
			_Utils_Tuple2('907653', 'コンテックス'),
			_Utils_Tuple2('907654', '関西学院大学出版会'),
			_Utils_Tuple2('907655', '京都大学大学院農学研究科'),
			_Utils_Tuple2('907656', '経済新報社'),
			_Utils_Tuple2('907657', 'グローバルネットワーク'),
			_Utils_Tuple2('907658', '権利問題研究会'),
			_Utils_Tuple2('907659', 'グローバル・プロジェクツ'),
			_Utils_Tuple2('907660', '関西文学会'),
			_Utils_Tuple2('907661', '神奈川新教育研究協会'),
			_Utils_Tuple2('907662', 'ＣＡＡＤＲＩＡ(アジア建築ＣＡＤ学会)'),
			_Utils_Tuple2('907663', '橘文書院'),
			_Utils_Tuple2('907664', 'クライム'),
			_Utils_Tuple2('907665', 'グラフィソフト・ジャパン'),
			_Utils_Tuple2('907666', '九段舎'),
			_Utils_Tuple2('907667', '海流社'),
			_Utils_Tuple2('907668', '片山眞之・洋子'),
			_Utils_Tuple2('907669', '一満舎(ケイエムケイ)'),
			_Utils_Tuple2('907670', 'ギルガメシュ'),
			_Utils_Tuple2('907671', 'カンテック'),
			_Utils_Tuple2('907672', '感性開発研究所'),
			_Utils_Tuple2('907673', 'コラーゲン技術研修会'),
			_Utils_Tuple2('907674', '国進印刷'),
			_Utils_Tuple2('907675', 'クレスナー'),
			_Utils_Tuple2('907676', '国際文化工房'),
			_Utils_Tuple2('907677', '柏木印刷出版部'),
			_Utils_Tuple2('907678', '京都新聞コミュニケーションズ'),
			_Utils_Tuple2('907679', '共和開発'),
			_Utils_Tuple2('907680', '香川県宅地建物取引業協会'),
			_Utils_Tuple2('907681', 'けやき舎'),
			_Utils_Tuple2('907682', 'グリーン情報'),
			_Utils_Tuple2('907683', '九段出版・情報センター'),
			_Utils_Tuple2('907684', '家族社'),
			_Utils_Tuple2('907685', 'クムスタ・コミュニケーションズ'),
			_Utils_Tuple2('907686', '共立通信'),
			_Utils_Tuple2('907687', 'クリエイティブハート'),
			_Utils_Tuple2('907688', '慶應義塾大学産業研究所'),
			_Utils_Tuple2('907689', '古今社'),
			_Utils_Tuple2('907690', '研秀社'),
			_Utils_Tuple2('907691', '熊野技研工業'),
			_Utils_Tuple2('907692', '芸能日本社'),
			_Utils_Tuple2('907693', '高知大学人文学部経済学科'),
			_Utils_Tuple2('907694', 'クオリティ研究所'),
			_Utils_Tuple2('907696', '国際臨床出版社'),
			_Utils_Tuple2('907697', 'キャッツハンズ社'),
			_Utils_Tuple2('907698', '海馬出版'),
			_Utils_Tuple2('907699', 'コジマ'),
			_Utils_Tuple2('907700', '行路文芸社'),
			_Utils_Tuple2('907701', '関西大学総合情報学部'),
			_Utils_Tuple2('907702', '国際文化交流推進協会'),
			_Utils_Tuple2('907703', 'かながわ・がんＱＯＬ研究会'),
			_Utils_Tuple2('907704', '海馬書房'),
			_Utils_Tuple2('907705', '神奈川学習センターＫＧＣ教研'),
			_Utils_Tuple2('907706', '鋼構造出版'),
			_Utils_Tuple2('907707', '奈良日日新聞社古代研究編集室'),
			_Utils_Tuple2('907708', '共伸出版'),
			_Utils_Tuple2('907709', 'コクソンインターミディエートラボラトリ'),
			_Utils_Tuple2('907711', '学法文化センター'),
			_Utils_Tuple2('907712', '岐阜県産業文化振興事業団'),
			_Utils_Tuple2('907713', 'クレイ'),
			_Utils_Tuple2('907714', 'ＫＤＤエンジニアリング・アンド・コンサルティング'),
			_Utils_Tuple2('907715', 'グリオ'),
			_Utils_Tuple2('907716', 'クイップマガジン'),
			_Utils_Tuple2('907717', '海象社'),
			_Utils_Tuple2('907718', 'ギデオン'),
			_Utils_Tuple2('907719', '神戸大学理学部数学教室'),
			_Utils_Tuple2('907720', '経営プラン協会'),
			_Utils_Tuple2('907721', 'Ｇａｌｌｅｒｙ０'),
			_Utils_Tuple2('907722', '公文出版'),
			_Utils_Tuple2('907723', '企画室ゆう'),
			_Utils_Tuple2('907724', '北野企画'),
			_Utils_Tuple2('907725', '花風社'),
			_Utils_Tuple2('907726', '北の杜編集工房'),
			_Utils_Tuple2('907727', '海拓舎'),
			_Utils_Tuple2('907728', '国際青少年育成振興財団'),
			_Utils_Tuple2('907729', 'こころの子育てインターねっと関西'),
			_Utils_Tuple2('907730', '鶴山堂'),
			_Utils_Tuple2('907731', 'コエランス'),
			_Utils_Tuple2('907732', '教育医事新聞社'),
			_Utils_Tuple2('907733', '光線研究所'),
			_Utils_Tuple2('907734', '吉備学園岡山商科大学'),
			_Utils_Tuple2('907735', '観峰文化センター'),
			_Utils_Tuple2('907736', '銀河'),
			_Utils_Tuple2('907737', '岳陽舎'),
			_Utils_Tuple2('907738', 'コンセル'),
			_Utils_Tuple2('907739', '近畿大学商経学会'),
			_Utils_Tuple2('907740', '開拓舎'),
			_Utils_Tuple2('907741', '風の旅社'),
			_Utils_Tuple2('907742', '国土交通省国土計画局首都機能移転企画課'),
			_Utils_Tuple2('907743', 'キッズコーポレーション'),
			_Utils_Tuple2('907744', 'かながわ学術研究交流財団'),
			_Utils_Tuple2('907745', '巧芸創作'),
			_Utils_Tuple2('907746', 'コンピュータ教育工学研究所'),
			_Utils_Tuple2('907748', 'キングコング社'),
			_Utils_Tuple2('907749', 'Ｃｏｎｔｅｎｔｚ Ｉｎｃ．'),
			_Utils_Tuple2('907750', 'くぬぎ出版'),
			_Utils_Tuple2('907751', 'カネハラトレーディング'),
			_Utils_Tuple2('907752', '生涯学習総合研究所'),
			_Utils_Tuple2('907753', 'キュー'),
			_Utils_Tuple2('907754', 'くすのき出版'),
			_Utils_Tuple2('907755', '岳風書房'),
			_Utils_Tuple2('907756', 'グラネット'),
			_Utils_Tuple2('907757', '久美'),
			_Utils_Tuple2('907758', '吉夏社'),
			_Utils_Tuple2('907759', '高齢者ケア出版'),
			_Utils_Tuple2('907760', '漢法・赤ひげ堂'),
			_Utils_Tuple2('907761', 'コボリフォト企画'),
			_Utils_Tuple2('907762', '建築保全センター'),
			_Utils_Tuple2('907763', '国際学術技術研究所'),
			_Utils_Tuple2('907764', '計測自動制御学会'),
			_Utils_Tuple2('907765', 'カワマタ印刷工芸社'),
			_Utils_Tuple2('907766', '中南米マガジン'),
			_Utils_Tuple2('907767', '語学ルネサンス'),
			_Utils_Tuple2('907768', '北日本海洋センター'),
			_Utils_Tuple2('907769', 'コーチャル出版部'),
			_Utils_Tuple2('907770', '北井企画'),
			_Utils_Tuple2('907771', 'ゴールドストーン'),
			_Utils_Tuple2('907772', 'クリエイティブハウスライズ'),
			_Utils_Tuple2('907773', '学進出版'),
			_Utils_Tuple2('907774', 'ＫＴ教育研究会'),
			_Utils_Tuple2('907775', 'カモミール社'),
			_Utils_Tuple2('907776', 'グンダーマンハンス'),
			_Utils_Tuple2('907777', '金沢美術工芸大学美術工芸研究所'),
			_Utils_Tuple2('907778', '吟詠普及会'),
			_Utils_Tuple2('907779', 'ジーコミュニケーション'),
			_Utils_Tuple2('907780', 'コーチング・スタッフ'),
			_Utils_Tuple2('907781', '孔明社'),
			_Utils_Tuple2('907782', 'キャリア戦略研究所'),
			_Utils_Tuple2('907783', 'カシヨ出版センター'),
			_Utils_Tuple2('907784', 'くらすなや書房'),
			_Utils_Tuple2('907785', 'かるさびな出版'),
			_Utils_Tuple2('907786', '小見山会計事務所'),
			_Utils_Tuple2('907787', 'ケイプラス出版'),
			_Utils_Tuple2('907788', '柏企画'),
			_Utils_Tuple2('907789', '金沢文圃閣'),
			_Utils_Tuple2('907790', '企画出版安曇野'),
			_Utils_Tuple2('907791', '近畿日本鉄道'),
			_Utils_Tuple2('907792', 'ゲーム・フィールド'),
			_Utils_Tuple2('907793', '東京プリント'),
			_Utils_Tuple2('907794', '協業組合ドゥ・アート'),
			_Utils_Tuple2('907795', '光星物産'),
			_Utils_Tuple2('907796', 'ケイ・アイ・メディア'),
			_Utils_Tuple2('907797', 'カネコ'),
			_Utils_Tuple2('907798', 'クロスネット'),
			_Utils_Tuple2('907799', 'コスモ・リバティ社'),
			_Utils_Tuple2('907800', '教材研究所'),
			_Utils_Tuple2('907801', '国土空間データ基盤推進協議会'),
			_Utils_Tuple2('907802', 'グラム'),
			_Utils_Tuple2('907803', '葵陵映像'),
			_Utils_Tuple2('907804', 'グリーン・プレス'),
			_Utils_Tuple2('907805', '企画専門フェイドイン'),
			_Utils_Tuple2('907806', 'クリエイターアクト'),
			_Utils_Tuple2('907807', 'ココロ'),
			_Utils_Tuple2('907808', '研友社'),
			_Utils_Tuple2('907809', 'こすもす'),
			_Utils_Tuple2('907810', 'グローブプレス'),
			_Utils_Tuple2('907811', 'きせつエジュケーショナルグループ'),
			_Utils_Tuple2('907812', '空無我堂々友会'),
			_Utils_Tuple2('907813', '学芸出版社'),
			_Utils_Tuple2('907814', 'コスモヒーリング振興会'),
			_Utils_Tuple2('907815', '国際アカデミー'),
			_Utils_Tuple2('907816', '近代出版社'),
			_Utils_Tuple2('907817', '木村印刷所'),
			_Utils_Tuple2('907818', '木楽舎'),
			_Utils_Tuple2('907819', '駒澤大学文学部心理学科'),
			_Utils_Tuple2('907820', '加賀市地域振興事業団'),
			_Utils_Tuple2('907821', 'ギルドブックス'),
			_Utils_Tuple2('907822', 'キッズメイト'),
			_Utils_Tuple2('907823', '藝文書院'),
			_Utils_Tuple2('907824', '北日本印刷'),
			_Utils_Tuple2('907825', '関西環境情報ステーション「Ｐｉｃｏ」'),
			_Utils_Tuple2('907826', '群馬評論社'),
			_Utils_Tuple2('907827', '呉工業高等専門学校'),
			_Utils_Tuple2('907828', 'ケー・ケー・ファンタジー'),
			_Utils_Tuple2('907829', 'ギャラリー本郷'),
			_Utils_Tuple2('907830', '過疎地域研究会'),
			_Utils_Tuple2('907831', 'クロノス'),
			_Utils_Tuple2('907832', 'キタ・メディア'),
			_Utils_Tuple2('907833', 'コスミック・ノレッヂ出版'),
			_Utils_Tuple2('907834', '国際花と緑の博覧会記念協会'),
			_Utils_Tuple2('907835', '学彩社'),
			_Utils_Tuple2('907836', '九州大学Ｐ＆Ｐ「アジア都市研究センター」プロジェクト研究体'),
			_Utils_Tuple2('907837', '技術教育出版'),
			_Utils_Tuple2('907838', '健康ジャーナル社'),
			_Utils_Tuple2('907839', '海外産業植林センター'),
			_Utils_Tuple2('907840', 'ギルド'),
			_Utils_Tuple2('907841', '紀伊民報'),
			_Utils_Tuple2('907842', 'ＫＤＪ出版'),
			_Utils_Tuple2('907843', '耕文社'),
			_Utils_Tuple2('907844', '近代史文庫'),
			_Utils_Tuple2('907845', '国際美術審議会'),
			_Utils_Tuple2('907846', '鼎書房'),
			_Utils_Tuple2('907847', 'グローバルネット'),
			_Utils_Tuple2('907848', '開々舎'),
			_Utils_Tuple2('907849', '教育システム'),
			_Utils_Tuple2('907850', '建設業振興基金'),
			_Utils_Tuple2('907851', '建設産業振興センター'),
			_Utils_Tuple2('907852', '北日本新聞開発センター'),
			_Utils_Tuple2('907853', 'コミュニティネットワーク協会'),
			_Utils_Tuple2('907854', 'エイチ・シー・ピー'),
			_Utils_Tuple2('907855', '環境社会学会'),
			_Utils_Tuple2('907856', '恒星出版'),
			_Utils_Tuple2('907857', 'クリエイティブセンター'),
			_Utils_Tuple2('907858', 'ぎょうけい新聞社'),
			_Utils_Tuple2('914904', '再現社'),
			_Utils_Tuple2('914905', '判例調査会'),
			_Utils_Tuple2('914907', '斎光社'),
			_Utils_Tuple2('914908', '犀書房'),
			_Utils_Tuple2('914909', '最新医学社'),
			_Utils_Tuple2('914910', 'さいたま事務局'),
			_Utils_Tuple2('914911', 'サウンズマーケティングシステム'),
			_Utils_Tuple2('914912', 'サウンド総合研究所'),
			_Utils_Tuple2('914913', '坂田種苗出版部'),
			_Utils_Tuple2('914914', '坂の上書店'),
			_Utils_Tuple2('914915', '阪本企画室'),
			_Utils_Tuple2('914916', '佐賀県教育図書'),
			_Utils_Tuple2('914917', '嵯峨野発行所'),
			_Utils_Tuple2('914918', '佐賀藩戊辰戦史刊行会'),
			_Utils_Tuple2('914919', 'さがみや書店'),
			_Utils_Tuple2('914920', '桜井書店'),
			_Utils_Tuple2('914921', '桜田倶楽部'),
			_Utils_Tuple2('914922', '滋賀県同和問題研究所'),
			_Utils_Tuple2('914923', '朔北会'),
			_Utils_Tuple2('914924', '東方印刷'),
			_Utils_Tuple2('914925', '桜書房'),
			_Utils_Tuple2('914926', 'さくら短歌会'),
			_Utils_Tuple2('914927', '酒之友社'),
			_Utils_Tuple2('914928', '佐々木印刷出版部'),
			_Utils_Tuple2('914929', '佐々木交通事故研究所'),
			_Utils_Tuple2('914930', '作家社'),
			_Utils_Tuple2('914931', 'さつき出版'),
			_Utils_Tuple2('914932', 'サツマヤ書店'),
			_Utils_Tuple2('914933', 'さとう工房'),
			_Utils_Tuple2('914934', '佐藤忠男'),
			_Utils_Tuple2('914935', '佐川出版'),
			_Utils_Tuple2('914936', '早苗書房'),
			_Utils_Tuple2('914937', 'サブ編集室'),
			_Utils_Tuple2('914938', 'サンケドー出版局'),
			_Utils_Tuple2('914939', 'サン・アド'),
			_Utils_Tuple2('914940', '山陰郷土文化研究会'),
			_Utils_Tuple2('914941', '山陰詩人クラブ'),
			_Utils_Tuple2('914942', '山陰民俗学会'),
			_Utils_Tuple2('914944', '山岳スポーツ研究所'),
			_Utils_Tuple2('914946', 'サーフマガジン社'),
			_Utils_Tuple2('914947', '三協社'),
			_Utils_Tuple2('914948', '三協商事'),
			_Utils_Tuple2('914949', '三京房'),
			_Utils_Tuple2('914950', '笹書房'),
			_Utils_Tuple2('914951', '産業教育センター出版事業部'),
			_Utils_Tuple2('914953', '産業環境管理協会'),
			_Utils_Tuple2('914954', '産業資材ＰＲセンター'),
			_Utils_Tuple2('914955', '産業新聞社'),
			_Utils_Tuple2('914956', '産業時報社'),
			_Utils_Tuple2('914957', '産業と経済'),
			_Utils_Tuple2('914958', '産業同盟社'),
			_Utils_Tuple2('914959', 'サングループ日興'),
			_Utils_Tuple2('914960', 'サンケイグラフ社'),
			_Utils_Tuple2('914961', '雑誌目録刊行会'),
			_Utils_Tuple2('914962', '三元社'),
			_Utils_Tuple2('914963', 'サンコウ出版'),
			_Utils_Tuple2('914964', '三幸'),
			_Utils_Tuple2('914966', '三秀社'),
			_Utils_Tuple2('914967', 'サン出版'),
			_Utils_Tuple2('914968', 'サン書店'),
			_Utils_Tuple2('914969', '三星社書房'),
			_Utils_Tuple2('914972', 'サン・エイジング'),
			_Utils_Tuple2('914973', 'サンデー'),
			_Utils_Tuple2('914974', 'アルゴノート'),
			_Utils_Tuple2('914975', 'サンデーゴルフ社'),
			_Utils_Tuple2('914976', '山東郵趣会'),
			_Utils_Tuple2('914977', '三人会'),
			_Utils_Tuple2('914978', 'さんぽう'),
			_Utils_Tuple2('914979', '三宝社'),
			_Utils_Tuple2('914980', '産業行動研究所'),
			_Utils_Tuple2('914981', '新盛堂天地社'),
			_Utils_Tuple2('914983', '三洋写真'),
			_Utils_Tuple2('914984', '北斗企画'),
			_Utils_Tuple2('914985', 'サンリード'),
			_Utils_Tuple2('914986', 'サンロード'),
			_Utils_Tuple2('914987', 'サンワールド'),
			_Utils_Tuple2('914988', '三和鉄軌工業'),
			_Utils_Tuple2('914990', '三和図書出版部'),
			_Utils_Tuple2('914991', '財界通信社'),
			_Utils_Tuple2('914992', '財界にっぽん'),
			_Utils_Tuple2('914993', '財界評論新社'),
			_Utils_Tuple2('914996', '財産形成リサーチセンター'),
			_Utils_Tuple2('914997', '財政経済弘報社'),
			_Utils_Tuple2('914998', '座右宝'),
			_Utils_Tuple2('914999', '雑艸苑書房'),
			_Utils_Tuple2('915000', '雑草句会'),
			_Utils_Tuple2('915002', '敷島出版'),
			_Utils_Tuple2('915003', '椎の木書房'),
			_Utils_Tuple2('915004', '椎の実書房'),
			_Utils_Tuple2('915005', 'シービーエス・ソニーファミリークラブ'),
			_Utils_Tuple2('915006', '紫雲莊'),
			_Utils_Tuple2('915007', '塩の会'),
			_Utils_Tuple2('915008', '四海社'),
			_Utils_Tuple2('915010', '私学経営研究会'),
			_Utils_Tuple2('915012', '滋賀文教短大教務課学生課'),
			_Utils_Tuple2('915013', '思学社'),
			_Utils_Tuple2('915014', '四季会'),
			_Utils_Tuple2('915015', '四季吟社'),
			_Utils_Tuple2('915016', '史記社'),
			_Utils_Tuple2('915017', '四季出版新社'),
			_Utils_Tuple2('915018', '四季書館'),
			_Utils_Tuple2('915019', '四季書房'),
			_Utils_Tuple2('915020', '色染社'),
			_Utils_Tuple2('915021', '紙業新聞社'),
			_Utils_Tuple2('915022', '紙業タイムス社'),
			_Utils_Tuple2('915023', 'シグマ'),
			_Utils_Tuple2('915025', '資源協会'),
			_Utils_Tuple2('915026', '試行社'),
			_Utils_Tuple2('915027', '思考社'),
			_Utils_Tuple2('915028', '芝光社'),
			_Utils_Tuple2('915029', '四国毎日広告社'),
			_Utils_Tuple2('915030', '師子王学会出版部'),
			_Utils_Tuple2('915031', '詩集刊行の会'),
			_Utils_Tuple2('915032', 'システムズ'),
			_Utils_Tuple2('915033', 'システムズフォミュレート'),
			_Utils_Tuple2('915034', 'システムセンター'),
			_Utils_Tuple2('915035', '市場春秋社'),
			_Utils_Tuple2('915036', '史籍出版'),
			_Utils_Tuple2('915037', '史迹美術同攷会'),
			_Utils_Tuple2('915038', '自然社'),
			_Utils_Tuple2('915039', '自然堂'),
			_Utils_Tuple2('915040', '自然の友社'),
			_Utils_Tuple2('915041', '視聴覚コンサルタントセンター技能訓練協会'),
			_Utils_Tuple2('915042', '詩通信社'),
			_Utils_Tuple2('915043', '品川書店'),
			_Utils_Tuple2('915044', '品川工学図書'),
			_Utils_Tuple2('915045', '信濃出版'),
			_Utils_Tuple2('915047', 'しなの川柳社'),
			_Utils_Tuple2('915048', 'シナリオ作家協会'),
			_Utils_Tuple2('915049', '芝江電器産業'),
			_Utils_Tuple2('915050', '思風庵哲学研究所'),
			_Utils_Tuple2('915051', '渋柿社'),
			_Utils_Tuple2('915052', '斯文書院'),
			_Utils_Tuple2('915053', '島出版'),
			_Utils_Tuple2('915054', '嶋田出版'),
			_Utils_Tuple2('915055', '嶋崎経済研究所'),
			_Utils_Tuple2('915056', '島根郷土資料刊行会'),
			_Utils_Tuple2('915057', '文化評論社'),
			_Utils_Tuple2('915058', '清水書房'),
			_Utils_Tuple2('915059', '市民書房'),
			_Utils_Tuple2('915060', '丈創平'),
			_Utils_Tuple2('915061', 'シャープ機器営業部'),
			_Utils_Tuple2('915062', '社会運動研究会'),
			_Utils_Tuple2('915063', '社会学通信会'),
			_Utils_Tuple2('915064', '社会教育協会'),
			_Utils_Tuple2('915065', '新現論社'),
			_Utils_Tuple2('915066', '社会新報社'),
			_Utils_Tuple2('915068', '社会保険実務研究所'),
			_Utils_Tuple2('915069', '社会保障研究所'),
			_Utils_Tuple2('915070', 'ジェー・エム・エス出版局'),
			_Utils_Tuple2('915071', '写真試論編集委員会'),
			_Utils_Tuple2('915072', '週刊株式社'),
			_Utils_Tuple2('915073', '週刊粧業'),
			_Utils_Tuple2('915074', '週刊醸造新聞社'),
			_Utils_Tuple2('915075', '週刊製菓時報'),
			_Utils_Tuple2('915076', '書肆亥工房'),
			_Utils_Tuple2('915078', '珠算プリント教材社'),
			_Utils_Tuple2('915079', '秀山社'),
			_Utils_Tuple2('915080', '習俗同政会'),
			_Utils_Tuple2('915081', '秀備'),
			_Utils_Tuple2('915083', '出版'),
			_Utils_Tuple2('915084', '出版科学研究所'),
			_Utils_Tuple2('915085', '出版研究センター'),
			_Utils_Tuple2('915086', '出版図書サービス'),
			_Utils_Tuple2('915087', '出版２１世紀'),
			_Utils_Tuple2('915088', '出版物共同流通センター'),
			_Utils_Tuple2('915089', '主婦の友商事'),
			_Utils_Tuple2('915091', '狩猟界社'),
			_Utils_Tuple2('915092', '狩猟の世界社'),
			_Utils_Tuple2('915093', '春苑堂出版'),
			_Utils_Tuple2('915094', '春夏秋冬倶楽部'),
			_Utils_Tuple2('915095', '春燈発行所'),
			_Utils_Tuple2('915096', '春潮社'),
			_Utils_Tuple2('915097', '春風堂'),
			_Utils_Tuple2('915098', 'シティ出版'),
			_Utils_Tuple2('915099', '消印同好会'),
			_Utils_Tuple2('915100', '松栄出版'),
			_Utils_Tuple2('915101', '障害児教育図書総目録刊行会'),
			_Utils_Tuple2('915103', '商業英語出版社'),
			_Utils_Tuple2('915104', '証券投資研究所'),
			_Utils_Tuple2('915105', '証券知識社'),
			_Utils_Tuple2('915106', '商工会館'),
			_Utils_Tuple2('915107', '商工組合中央金庫調査部'),
			_Utils_Tuple2('915108', '省光社'),
			_Utils_Tuple2('915109', '象詩人クラブ'),
			_Utils_Tuple2('915110', '松涛社'),
			_Utils_Tuple2('915111', '少年社'),
			_Utils_Tuple2('915112', 'エヌ・ジー・エス'),
			_Utils_Tuple2('915113', '商品研究所'),
			_Utils_Tuple2('915114', '正文館書店'),
			_Utils_Tuple2('915115', '匠文社'),
			_Utils_Tuple2('915117', '祥文社'),
			_Utils_Tuple2('915118', '証券ニュース社'),
			_Utils_Tuple2('915119', '松林堂'),
			_Utils_Tuple2('915120', '招霊易学研究所'),
			_Utils_Tuple2('915122', '昭和書院'),
			_Utils_Tuple2('915123', 'ジャックボックス'),
			_Utils_Tuple2('915124', '昭和礼文社'),
			_Utils_Tuple2('915127', '書紀書林'),
			_Utils_Tuple2('915129', '書芸界'),
			_Utils_Tuple2('915131', '書肆科野'),
			_Utils_Tuple2('915132', '書籍文物流通会'),
			_Utils_Tuple2('915133', '書壇院'),
			_Utils_Tuple2('915134', '紫陽社'),
			_Utils_Tuple2('915135', '白珠社'),
			_Utils_Tuple2('915136', '飼料日報社'),
			_Utils_Tuple2('915137', 'シルクロード'),
			_Utils_Tuple2('915138', '史録書房'),
			_Utils_Tuple2('915139', '城発行所'),
			_Utils_Tuple2('915140', '新英社'),
			_Utils_Tuple2('915141', '進栄堂'),
			_Utils_Tuple2('915142', '新栄堂出版'),
			_Utils_Tuple2('915143', '新科学出版社'),
			_Utils_Tuple2('915144', '新歌人社'),
			_Utils_Tuple2('915145', '進学館'),
			_Utils_Tuple2('915148', '新教育センター'),
			_Utils_Tuple2('915149', '伸共社'),
			_Utils_Tuple2('915150', '新金属協会'),
			_Utils_Tuple2('915151', '新技術開発センター'),
			_Utils_Tuple2('915152', '新経済知識社'),
			_Utils_Tuple2('915153', '新建築家技術者集団'),
			_Utils_Tuple2('915154', '真興社出版'),
			_Utils_Tuple2('915155', '伸光社'),
			_Utils_Tuple2('915156', '新公論社'),
			_Utils_Tuple2('915157', '新國民社'),
			_Utils_Tuple2('915159', '新詩人社'),
			_Utils_Tuple2('915160', '新信州社'),
			_Utils_Tuple2('915161', '駿々堂書店'),
			_Utils_Tuple2('915162', '新住宅社'),
			_Utils_Tuple2('915163', '真樹社'),
			_Utils_Tuple2('915164', '新樹書房'),
			_Utils_Tuple2('915166', '新生社'),
			_Utils_Tuple2('915167', '神保出版'),
			_Utils_Tuple2('915168', '新世館文庫'),
			_Utils_Tuple2('915169', '新雪詩社'),
			_Utils_Tuple2('915170', '新銭社'),
			_Utils_Tuple2('915171', '新短歌人連盟'),
			_Utils_Tuple2('915172', '新地平社'),
			_Utils_Tuple2('915173', '新潮堂出版部'),
			_Utils_Tuple2('915175', '新燈社'),
			_Utils_Tuple2('915176', '新藤美術印刷'),
			_Utils_Tuple2('915177', '新日ゴルフサービス'),
			_Utils_Tuple2('915178', '新日本医師協会'),
			_Utils_Tuple2('915179', '新日本歌人協会'),
			_Utils_Tuple2('915180', '新日本企画'),
			_Utils_Tuple2('915181', '新日本経済社'),
			_Utils_Tuple2('915182', '新日本書房'),
			_Utils_Tuple2('915184', '新ハイキング社'),
			_Utils_Tuple2('915185', '新俳句人連盟'),
			_Utils_Tuple2('915186', '新評論社出版部'),
			_Utils_Tuple2('915187', 'シンフォニー楽器店'),
			_Utils_Tuple2('915188', '進歩社'),
			_Utils_Tuple2('915190', '新約書房'),
			_Utils_Tuple2('915191', '新薬と臨床社'),
			_Utils_Tuple2('915192', '新鷹会'),
			_Utils_Tuple2('915193', '信陽堂'),
			_Utils_Tuple2('915194', '森林書房'),
			_Utils_Tuple2('915195', 'しんつくし山岳会'),
			_Utils_Tuple2('915196', '新ロマン社'),
			_Utils_Tuple2('915198', '新和出版社'),
			_Utils_Tuple2('915199', '慈愛園'),
			_Utils_Tuple2('915200', 'ジェイエム出版'),
			_Utils_Tuple2('915201', 'ジェーアンドエー出版'),
			_Utils_Tuple2('915202', 'ＪＰＰセンター'),
			_Utils_Tuple2('915203', 'ジェムコ日本経営'),
			_Utils_Tuple2('915204', '時間社'),
			_Utils_Tuple2('915205', '自研社'),
			_Utils_Tuple2('915206', '次元社'),
			_Utils_Tuple2('915207', '時事映画通信社'),
			_Utils_Tuple2('915208', '時事画報社'),
			_Utils_Tuple2('915209', '時事問題研究所'),
			_Utils_Tuple2('915210', '時代思潮社'),
			_Utils_Tuple2('915211', '自治日報社'),
			_Utils_Tuple2('915212', 'ジスク'),
			_Utils_Tuple2('915213', '実業往来社'),
			_Utils_Tuple2('915214', '実業界'),
			_Utils_Tuple2('915215', '実業公論社'),
			_Utils_Tuple2('915216', '辞典協会'),
			_Utils_Tuple2('915217', '実務法令出版'),
			_Utils_Tuple2('915218', '実用図書刊行会'),
			_Utils_Tuple2('915219', '自動車技術会'),
			_Utils_Tuple2('915220', '自動車工業振興会'),
			_Utils_Tuple2('915222', '自動車の実務出版局'),
			_Utils_Tuple2('915223', 'ジャーナル東京・国際教育交流センター'),
			_Utils_Tuple2('915224', 'ジャーナル・ビップ社'),
			_Utils_Tuple2('915225', 'ジャガタラ友の会'),
			_Utils_Tuple2('915226', 'ジャパンエコー社'),
			_Utils_Tuple2('915227', 'ジャパンエスピーアーチス'),
			_Utils_Tuple2('915228', '実験古代史学出版部'),
			_Utils_Tuple2('915229', 'ジャパンデザインセンター'),
			_Utils_Tuple2('915230', 'ジャパン・ポスト'),
			_Utils_Tuple2('915231', 'ジャパンローカルプレス'),
			_Utils_Tuple2('915232', '自由アジア社'),
			_Utils_Tuple2('915233', '十一房出版'),
			_Utils_Tuple2('915234', '十月書房'),
			_Utils_Tuple2('915235', '自由経済社'),
			_Utils_Tuple2('915236', '自由研究舎'),
			_Utils_Tuple2('915237', '自由社'),
			_Utils_Tuple2('915238', '伸樹社'),
			_Utils_Tuple2('915239', '住宅問題研究会'),
			_Utils_Tuple2('915240', '住宅問題研究会'),
			_Utils_Tuple2('915241', '自由都市社'),
			_Utils_Tuple2('915242', '自由ブックス社'),
			_Utils_Tuple2('915243', '自由民主党出版局'),
			_Utils_Tuple2('915244', 'ジュエリージャーナル'),
			_Utils_Tuple2('915245', '樹芸書房'),
			_Utils_Tuple2('915246', '樹氷出版'),
			_Utils_Tuple2('915247', '樹木社'),
			_Utils_Tuple2('915248', '準教出版'),
			_Utils_Tuple2('915250', 'ジョイント・ピープル'),
			_Utils_Tuple2('915251', '上越歌人会'),
			_Utils_Tuple2('915252', '情況出版'),
			_Utils_Tuple2('915253', '醸造産業新聞社'),
			_Utils_Tuple2('915254', '情緒刊行会'),
			_Utils_Tuple2('915255', '情報研究出版会'),
			_Utils_Tuple2('915256', '情報処理学会'),
			_Utils_Tuple2('915258', '条例アクセス'),
			_Utils_Tuple2('915260', '神栄館'),
			_Utils_Tuple2('915262', '人事興信所'),
			_Utils_Tuple2('915263', '人智学出版社'),
			_Utils_Tuple2('915264', '人物群像社'),
			_Utils_Tuple2('915265', '神社新報社'),
			_Utils_Tuple2('915266', '神社本庁'),
			_Utils_Tuple2('915268', '人文図書目録刊行会'),
			_Utils_Tuple2('915269', '人民の星社'),
			_Utils_Tuple2('915270', 'Ｃ・Ｄ企画'),
			_Utils_Tuple2('915271', 'ＪＰＵ出版'),
			_Utils_Tuple2('915272', 'スポーツビジネス研究所'),
			_Utils_Tuple2('915273', '水産社'),
			_Utils_Tuple2('915274', '水星社'),
			_Utils_Tuple2('915275', '水中造形センター'),
			_Utils_Tuple2('915276', '水道産業新聞社'),
			_Utils_Tuple2('915277', '水夢社'),
			_Utils_Tuple2('915278', '水明発行所'),
			_Utils_Tuple2('915279', '水利科学研究所'),
			_Utils_Tuple2('915280', '須田病院'),
			_Utils_Tuple2('915281', '杉並郷土史会'),
			_Utils_Tuple2('915282', '杉発行所'),
			_Utils_Tuple2('915283', '杉本書店'),
			_Utils_Tuple2('915284', 'すくらむ社'),
			_Utils_Tuple2('915285', '情報資料社'),
			_Utils_Tuple2('915286', 'すさみ'),
			_Utils_Tuple2('915287', 'スターランド社'),
			_Utils_Tuple2('915288', 'スタイル社'),
			_Utils_Tuple2('915290', 'スタジオゆにーく'),
			_Utils_Tuple2('915291', 'ステーツマン社'),
			_Utils_Tuple2('915292', 'ステンレス協会'),
			_Utils_Tuple2('915293', 'ストアーズ社'),
			_Utils_Tuple2('915294', '住吉会出版部'),
			_Utils_Tuple2('915295', 'スピン出版'),
			_Utils_Tuple2('915296', 'スポーツ・イベント'),
			_Utils_Tuple2('915297', 'スポーツ・保健体育書目録刊行会'),
			_Utils_Tuple2('915299', 'スポーツジャーナル'),
			_Utils_Tuple2('915300', 'スリーエム研究会'),
			_Utils_Tuple2('915301', '駿台社'),
			_Utils_Tuple2('915302', '精案社'),
			_Utils_Tuple2('915303', '政界往来社'),
			_Utils_Tuple2('915304', '製菓実験社'),
			_Utils_Tuple2('915306', '政経通信社'),
			_Utils_Tuple2('915307', '生活問題研究所'),
			_Utils_Tuple2('915308', '青河書房'),
			_Utils_Tuple2('915309', '精華堂'),
			_Utils_Tuple2('915310', '精密工学会'),
			_Utils_Tuple2('915311', '世紀社'),
			_Utils_Tuple2('915312', '千広企画出版部'),
			_Utils_Tuple2('915313', '世紀編集室'),
			_Utils_Tuple2('915314', '清教新社'),
			_Utils_Tuple2('915315', '政経公論社'),
			_Utils_Tuple2('915316', '青溪社'),
			_Utils_Tuple2('915317', '清彗社'),
			_Utils_Tuple2('915318', '全国出版'),
			_Utils_Tuple2('915319', '政経書院'),
			_Utils_Tuple2('915320', '政経通信社'),
			_Utils_Tuple2('915321', '青玄俳句会'),
			_Utils_Tuple2('915322', '聖文短歌会'),
			_Utils_Tuple2('915323', '青虹社'),
			_Utils_Tuple2('915324', '政策時報社'),
			_Utils_Tuple2('915325', '政財界'),
			_Utils_Tuple2('915326', '青鈴書房'),
			_Utils_Tuple2('915328', '青史社'),
			_Utils_Tuple2('915329', '青裳堂書店'),
			_Utils_Tuple2('915330', '聖書の言社'),
			_Utils_Tuple2('915331', '聖書の日本社'),
			_Utils_Tuple2('915332', '成城大学文芸学部研究室'),
			_Utils_Tuple2('915334', '青青堂'),
			_Utils_Tuple2('915335', '青泉社'),
			_Utils_Tuple2('915336', '青潮出版'),
			_Utils_Tuple2('915337', '青涛社'),
			_Utils_Tuple2('915338', '聖燈社'),
			_Utils_Tuple2('915340', '世論時報社'),
			_Utils_Tuple2('915341', '西武インターナショナル'),
			_Utils_Tuple2('915342', '生物研究社'),
			_Utils_Tuple2('915343', '精密工業新聞社'),
			_Utils_Tuple2('915344', '清明会出版部'),
			_Utils_Tuple2('915345', '生命科学協会'),
			_Utils_Tuple2('915346', '青友書房'),
			_Utils_Tuple2('915347', '青藍社'),
			_Utils_Tuple2('915348', '成隆出版'),
			_Utils_Tuple2('915349', '青林舎'),
			_Utils_Tuple2('915350', '石油評論社'),
			_Utils_Tuple2('915351', '清和堂書店'),
			_Utils_Tuple2('915352', '世界経済研究協会'),
			_Utils_Tuple2('915353', '世界情勢研究会出版局'),
			_Utils_Tuple2('915354', '世界政治経済研究所'),
			_Utils_Tuple2('915355', '政紘出版'),
			_Utils_Tuple2('915356', '世界文化研究会'),
			_Utils_Tuple2('915357', '碩学書房'),
			_Utils_Tuple2('915358', '石油化学新聞社'),
			_Utils_Tuple2('915359', '石油工業時報社'),
			_Utils_Tuple2('915360', '石油春秋社'),
			_Utils_Tuple2('915361', '石油文化社'),
			_Utils_Tuple2('915362', '世代群評社'),
			_Utils_Tuple2('915363', '雪溪書房(少年社)'),
			_Utils_Tuple2('915364', '瀬越囲碁普及会出版部'),
			_Utils_Tuple2('915365', 'セブン教育研究所'),
			_Utils_Tuple2('915366', '静雅堂'),
			_Utils_Tuple2('915367', '社会科学書房'),
			_Utils_Tuple2('915368', 'セメント新聞社'),
			_Utils_Tuple2('915369', '芹沢出版'),
			_Utils_Tuple2('915370', '宣協社'),
			_Utils_Tuple2('915371', '千軒社'),
			_Utils_Tuple2('915372', 'デルタ出版'),
			_Utils_Tuple2('915373', '西都書房'),
			_Utils_Tuple2('915374', '染織と生活社'),
			_Utils_Tuple2('915375', '仙台八十八選選定委員会'),
			_Utils_Tuple2('915377', 'セントラル教育ビデオ'),
			_Utils_Tuple2('915378', 'せんなり屋'),
			_Utils_Tuple2('915379', '千人社'),
			_Utils_Tuple2('915380', '泉文社'),
			_Utils_Tuple2('915381', '宣文堂書店'),
			_Utils_Tuple2('915382', '川柳きやり吟社'),
			_Utils_Tuple2('915383', '川柳教室'),
			_Utils_Tuple2('915384', '川柳展望社'),
			_Utils_Tuple2('915385', '川柳展望新社'),
			_Utils_Tuple2('915386', '税法研究所'),
			_Utils_Tuple2('915387', '税務指導協会出版事業部'),
			_Utils_Tuple2('915388', '全家連出版社'),
			_Utils_Tuple2('915389', '全経出版会'),
			_Utils_Tuple2('915390', '善光寺大本願'),
			_Utils_Tuple2('915391', '全国会計職員協会'),
			_Utils_Tuple2('915392', '全国官報販売協同組合'),
			_Utils_Tuple2('915393', '全国勤労者音楽協議会連絡会議'),
			_Utils_Tuple2('915394', '全国銀行協会'),
			_Utils_Tuple2('915395', '全国交通事故防止協会連合会'),
			_Utils_Tuple2('915396', '全国市長会'),
			_Utils_Tuple2('915397', '全国視聴覚教育連盟'),
			_Utils_Tuple2('915398', '全国社会保険協会連合会'),
			_Utils_Tuple2('915399', '全国社会保険労務士会連合会'),
			_Utils_Tuple2('915400', 'ういんぐ'),
			_Utils_Tuple2('915401', '全国証券取引所'),
			_Utils_Tuple2('915402', '全国新聞情報農業協同組合連合会'),
			_Utils_Tuple2('915403', '全国大学国語国文学会'),
			_Utils_Tuple2('915404', '全国知事会'),
			_Utils_Tuple2('915405', '全国地方公務協会'),
			_Utils_Tuple2('915406', '全国同人雑誌作家協会'),
			_Utils_Tuple2('915407', '全国道路利用者会議'),
			_Utils_Tuple2('915408', '全国農業会議所'),
			_Utils_Tuple2('915409', '全国俳誌協会'),
			_Utils_Tuple2('915410', '全国宝石学協会'),
			_Utils_Tuple2('915411', '全国養蚕農業協同組合連合会蚕糸の光編集部'),
			_Utils_Tuple2('915412', '全国養豚協会'),
			_Utils_Tuple2('915413', '全国旅行業協会'),
			_Utils_Tuple2('915414', '全私学新聞運営委員会社'),
			_Utils_Tuple2('915415', 'Ｐｒｏｇｒａｍ Ｃｏｍｍｉｔｔｅｅ ｏｆ ３ｒｄ ＵＯＥＨ Ｓｙｍｐｏｓｉｕｍ'),
			_Utils_Tuple2('915416', '絢文社'),
			_Utils_Tuple2('915417', '全生社'),
			_Utils_Tuple2('915418', 'ゼンセン同盟'),
			_Utils_Tuple2('915419', '全日本アマチュア演劇協議会'),
			_Utils_Tuple2('915420', '全日本印刷工業組合連合会'),
			_Utils_Tuple2('915421', '全日本弓道連盟'),
			_Utils_Tuple2('915422', '全日本司厨士協会'),
			_Utils_Tuple2('915423', '全日本シーエム放送連盟'),
			_Utils_Tuple2('915424', '全日本指定自動車教習所協会連合会'),
			_Utils_Tuple2('915425', '全日本青少年育成会育成出版局'),
			_Utils_Tuple2('915426', '全日本狩猟倶楽部'),
			_Utils_Tuple2('915427', '全日本書道芸術院'),
			_Utils_Tuple2('915428', '全日本スキー連盟'),
			_Utils_Tuple2('915429', '書肆昴'),
			_Utils_Tuple2('915430', '全日本プラスチック成形工業連合会'),
			_Utils_Tuple2('915431', '全日本舞踊連合'),
			_Utils_Tuple2('915432', '青甲社'),
			_Utils_Tuple2('915433', '草韻新社'),
			_Utils_Tuple2('915434', '層雲社'),
			_Utils_Tuple2('915435', '創栄研究所'),
			_Utils_Tuple2('915436', '創映出版'),
			_Utils_Tuple2('915437', '林檎プロモーション'),
			_Utils_Tuple2('915438', '創文出版部'),
			_Utils_Tuple2('915440', 'たま企画'),
			_Utils_Tuple2('915442', '蒼丘書林'),
			_Utils_Tuple2('915443', '創芸出版社'),
			_Utils_Tuple2('915444', '草原社'),
			_Utils_Tuple2('915445', '総合鋳物センター'),
			_Utils_Tuple2('915448', '総合通信社'),
			_Utils_Tuple2('915450', '綜合図書'),
			_Utils_Tuple2('915451', '総合土木研究所'),
			_Utils_Tuple2('915452', '総合評論社'),
			_Utils_Tuple2('915453', 'ソードビジネスシステムズ'),
			_Utils_Tuple2('915454', '総合文庫目録刊行会'),
			_Utils_Tuple2('915455', '総合防災出版'),
			_Utils_Tuple2('915456', '創作者'),
			_Utils_Tuple2('915457', '制作センター'),
			_Utils_Tuple2('915458', '創作舞踊社'),
			_Utils_Tuple2('915459', '誠秀堂'),
			_Utils_Tuple2('915460', '早春社'),
			_Utils_Tuple2('915461', '早進社'),
			_Utils_Tuple2('915463', '艸人舎'),
			_Utils_Tuple2('915464', '蒼人社'),
			_Utils_Tuple2('915466', '蒼々出版'),
			_Utils_Tuple2('915467', '創造教育センター'),
			_Utils_Tuple2('915468', '創造集団餓鬼の会'),
			_Utils_Tuple2('915469', '創造文化社'),
			_Utils_Tuple2('915475', '蒼文社'),
			_Utils_Tuple2('915476', '草文社'),
			_Utils_Tuple2('915477', '双文社'),
			_Utils_Tuple2('915478', '総北海'),
			_Utils_Tuple2('915479', '創芸出版'),
			_Utils_Tuple2('915480', '草莽社'),
			_Utils_Tuple2('915481', '叢葉書房'),
			_Utils_Tuple2('915482', 'ソルト出版'),
			_Utils_Tuple2('915484', '川柳文芸学会'),
			_Utils_Tuple2('915485', '双林印刷所'),
			_Utils_Tuple2('915487', '蘇麓社'),
			_Utils_Tuple2('915488', '損害保険企画'),
			_Utils_Tuple2('915489', '造型社'),
			_Utils_Tuple2('915490', '造形美術協会出版局'),
			_Utils_Tuple2('915492', '叢林書院'),
			_Utils_Tuple2('915493', 'ゾディアック'),
			_Utils_Tuple2('915494', '書店新風会'),
			_Utils_Tuple2('915495', '昭和物産出版部'),
			_Utils_Tuple2('915496', 'シードル'),
			_Utils_Tuple2('915498', '生活の友社'),
			_Utils_Tuple2('915499', '総合企画出版局'),
			_Utils_Tuple2('915500', '草文社'),
			_Utils_Tuple2('915501', 'サン・エンタープライズ'),
			_Utils_Tuple2('915502', 'エルアール出版'),
			_Utils_Tuple2('915504', '水府出版'),
			_Utils_Tuple2('915506', '三麗社'),
			_Utils_Tuple2('915508', 'ジャパン・イエローページ'),
			_Utils_Tuple2('915509', '新進'),
			_Utils_Tuple2('915510', '創知社'),
			_Utils_Tuple2('915511', '朔風社'),
			_Utils_Tuple2('915512', '静山社'),
			_Utils_Tuple2('915513', '素朴社'),
			_Utils_Tuple2('915514', '埼玉県自閉症児者親の会'),
			_Utils_Tuple2('915515', '千駄ケ谷日本語教育研究所出版部'),
			_Utils_Tuple2('915516', 'ジャパンライフ社'),
			_Utils_Tuple2('915517', '重力研究所'),
			_Utils_Tuple2('915518', 'さき書房'),
			_Utils_Tuple2('915519', 'シオン出版社'),
			_Utils_Tuple2('915520', '四星社'),
			_Utils_Tuple2('915521', '聚海書林'),
			_Utils_Tuple2('915522', '歯界広報社'),
			_Utils_Tuple2('915524', 'シュバル'),
			_Utils_Tuple2('915525', '自然科学社'),
			_Utils_Tuple2('915526', '新技術社'),
			_Utils_Tuple2('915527', '四国郷土研究会'),
			_Utils_Tuple2('915528', '児童憲章愛の会'),
			_Utils_Tuple2('915529', '西斗社'),
			_Utils_Tuple2('915530', '新風土記社'),
			_Utils_Tuple2('915531', 'さえら出版'),
			_Utils_Tuple2('915532', '新日本スポーツ企画'),
			_Utils_Tuple2('915535', 'サンエイテイ'),
			_Utils_Tuple2('915536', 'ジャプラン出版'),
			_Utils_Tuple2('915537', '技術調査会'),
			_Utils_Tuple2('915538', 'ステージガイド札幌'),
			_Utils_Tuple2('915539', '住宅産業研修財団'),
			_Utils_Tuple2('915540', '三才ブックス'),
			_Utils_Tuple2('915542', 'ソニーマグネテープセールス'),
			_Utils_Tuple2('915543', 'シバ'),
			_Utils_Tuple2('915544', '整形外科セラミック・インプラント研究会'),
			_Utils_Tuple2('915545', '情報出版'),
			_Utils_Tuple2('915546', 'ステディ出版'),
			_Utils_Tuple2('915547', '静山堂出版'),
			_Utils_Tuple2('915548', '千年出版'),
			_Utils_Tuple2('915549', '新峰社'),
			_Utils_Tuple2('915551', 'さわね出版'),
			_Utils_Tuple2('915552', '星林社'),
			_Utils_Tuple2('915553', '自動車部品出版'),
			_Utils_Tuple2('915555', '山陰放送'),
			_Utils_Tuple2('915557', '松坂(ジャズ批評ブックス)'),
			_Utils_Tuple2('915558', 'ジェー・イー・オー'),
			_Utils_Tuple2('915559', '幸福への招待社'),
			_Utils_Tuple2('915560', '総合技術センター'),
			_Utils_Tuple2('915561', '産研'),
			_Utils_Tuple2('915562', 'ＴＨＥ ＰＯＥＴＲＹ ＮＩＰＰＯＮ ＰＲＥＳＳ'),
			_Utils_Tuple2('915563', '時局社'),
			_Utils_Tuple2('915564', '蜻蛉舎'),
			_Utils_Tuple2('915565', '山水出版社'),
			_Utils_Tuple2('915566', '秀陽社'),
			_Utils_Tuple2('915568', 'サーベイ・ジャパン国際研究所'),
			_Utils_Tuple2('915569', '松竹'),
			_Utils_Tuple2('915570', '三青社'),
			_Utils_Tuple2('915571', '産業統計研究社'),
			_Utils_Tuple2('915572', 'サイエンスハウス'),
			_Utils_Tuple2('915573', '育てる会'),
			_Utils_Tuple2('915574', '自由書館'),
			_Utils_Tuple2('915575', '石原守一'),
			_Utils_Tuple2('915576', 'シネ・フロント社'),
			_Utils_Tuple2('915577', '書房「樹」'),
			_Utils_Tuple2('915578', 'ソフト情報'),
			_Utils_Tuple2('915579', '蒼鷹社'),
			_Utils_Tuple2('915580', '晴心出版'),
			_Utils_Tuple2('915581', '日本マーケティング研究所'),
			_Utils_Tuple2('915582', '正法出版社'),
			_Utils_Tuple2('915583', 'ＪＫ企画出版'),
			_Utils_Tuple2('915584', 'ソニー・クリエイティブプロダクツ'),
			_Utils_Tuple2('915585', 'せいこう出版'),
			_Utils_Tuple2('915586', '自然社出版部'),
			_Utils_Tuple2('915587', '創童舎'),
			_Utils_Tuple2('915588', '住と生活社'),
			_Utils_Tuple2('915589', '全友出版'),
			_Utils_Tuple2('915590', '集文社'),
			_Utils_Tuple2('915592', 'さんえい出版'),
			_Utils_Tuple2('915593', 'ミッドインターナショナル'),
			_Utils_Tuple2('915594', '山洋社'),
			_Utils_Tuple2('915595', 'セイシ'),
			_Utils_Tuple2('915596', '女性問題図書総目録刊行会'),
			_Utils_Tuple2('915597', '荘人社'),
			_Utils_Tuple2('915598', 'ジャパン・プレス・フォト'),
			_Utils_Tuple2('915599', 'バンガード社'),
			_Utils_Tuple2('915600', '佐藤体育芸術アカデミー'),
			_Utils_Tuple2('915601', '商業経済新聞社'),
			_Utils_Tuple2('915602', '創造'),
			_Utils_Tuple2('915605', 'ソサイエティオブジョウレイ'),
			_Utils_Tuple2('915606', '千里文化財団'),
			_Utils_Tuple2('915608', '造'),
			_Utils_Tuple2('915609', '総合工学出版会'),
			_Utils_Tuple2('915610', '酒井清六'),
			_Utils_Tuple2('915611', '堺屋図書'),
			_Utils_Tuple2('915612', '彩古書房'),
			_Utils_Tuple2('915613', '世界自然保護基金日本委員会'),
			_Utils_Tuple2('915614', '青玄社'),
			_Utils_Tuple2('915615', '全日出版社'),
			_Utils_Tuple2('915616', '聖書会・きぼう社'),
			_Utils_Tuple2('915617', 'ＪＳＰ出版'),
			_Utils_Tuple2('915618', 'ジェイアイシープレス'),
			_Utils_Tuple2('915619', 'ジー・シー・プレス'),
			_Utils_Tuple2('915621', '創映新社'),
			_Utils_Tuple2('915622', '衆浩センター'),
			_Utils_Tuple2('915624', 'アルキ'),
			_Utils_Tuple2('915625', '羊書房'),
			_Utils_Tuple2('915626', '諏訪メディカルサービス'),
			_Utils_Tuple2('915628', '蒼洋社'),
			_Utils_Tuple2('915629', '四海書房'),
			_Utils_Tuple2('915630', '真珠社'),
			_Utils_Tuple2('915631', '食料・農業政策研究センター'),
			_Utils_Tuple2('915633', '新々堂'),
			_Utils_Tuple2('915634', '聖山社'),
			_Utils_Tuple2('915635', 'ステンドグラス材料センター'),
			_Utils_Tuple2('915636', 'ジャスコ'),
			_Utils_Tuple2('915637', 'シーピー'),
			_Utils_Tuple2('915638', '情報・出版研究会'),
			_Utils_Tuple2('915639', '進学社'),
			_Utils_Tuple2('915640', '青銅企画出版'),
			_Utils_Tuple2('915641', '書苑社'),
			_Utils_Tuple2('915642', '主婦の科学社'),
			_Utils_Tuple2('915643', '関嘉彦事務所'),
			_Utils_Tuple2('915644', '神霊時報社'),
			_Utils_Tuple2('915645', 'ザ・イースト・パブリケイション'),
			_Utils_Tuple2('915646', '神文書院'),
			_Utils_Tuple2('915647', '週刊中古車ジャーナル社'),
			_Utils_Tuple2('915649', '青銅舎'),
			_Utils_Tuple2('915650', 'サンケイサービス'),
			_Utils_Tuple2('915651', '尚文社'),
			_Utils_Tuple2('915652', 'アイエスコム'),
			_Utils_Tuple2('915653', '承伝社'),
			_Utils_Tuple2('915654', 'ＪＢＢ出版'),
			_Utils_Tuple2('915656', 'ジャパン・アーチスト(アーチスト出版)'),
			_Utils_Tuple2('915657', '書肆田中'),
			_Utils_Tuple2('915658', '創友社'),
			_Utils_Tuple2('915660', 'インテージ'),
			_Utils_Tuple2('915661', '創和出版'),
			_Utils_Tuple2('915662', 'サンクリエイト'),
			_Utils_Tuple2('915663', '慧インターナショナル'),
			_Utils_Tuple2('915664', 'サンブリッジ'),
			_Utils_Tuple2('915665', '十月社'),
			_Utils_Tuple2('915666', 'シグマ出版'),
			_Utils_Tuple2('915667', '資源産業新聞社'),
			_Utils_Tuple2('915668', '全国公益法人協会'),
			_Utils_Tuple2('915669', '日本化学繊維協会'),
			_Utils_Tuple2('915670', '東海総合研究所'),
			_Utils_Tuple2('915671', '瀬戸出版'),
			_Utils_Tuple2('915672', 'サイトアンドサウンド'),
			_Utils_Tuple2('915675', '全日本ろうあ連盟'),
			_Utils_Tuple2('915676', 'ＣＫ学会学術出版部'),
			_Utils_Tuple2('915677', '清音舎'),
			_Utils_Tuple2('915678', '草隆社'),
			_Utils_Tuple2('915679', '総合広販'),
			_Utils_Tuple2('915680', 'サンコア社'),
			_Utils_Tuple2('915681', 'シュリ・サティア・サイ・センター日本支部出版部'),
			_Utils_Tuple2('915682', '在日米国商工会議所'),
			_Utils_Tuple2('915683', '制作社'),
			_Utils_Tuple2('915684', '秀和'),
			_Utils_Tuple2('915685', 'セルネート出版'),
			_Utils_Tuple2('915686', '全国ベーチェット協会'),
			_Utils_Tuple2('915687', '上智社会事業団出版部'),
			_Utils_Tuple2('915688', 'ジャパンメンテナンス'),
			_Utils_Tuple2('915689', 'システムファイブ'),
			_Utils_Tuple2('915691', 'ゾネ出版社'),
			_Utils_Tuple2('915692', '進路指導センター'),
			_Utils_Tuple2('915693', '翔文社'),
			_Utils_Tuple2('915694', '山王出版'),
			_Utils_Tuple2('915695', '志学館'),
			_Utils_Tuple2('915696', 'スタジオ・ウィズ'),
			_Utils_Tuple2('915697', 'リブロ社'),
			_Utils_Tuple2('915698', '春恒社'),
			_Utils_Tuple2('915700', 'エフ・アイ・プラン'),
			_Utils_Tuple2('915701', '四季出版'),
			_Utils_Tuple2('915702', '写真公園林'),
			_Utils_Tuple2('915703', 'アムタス'),
			_Utils_Tuple2('915704', 'スタイリングインターナショナル'),
			_Utils_Tuple2('915705', 'スポーツブック社'),
			_Utils_Tuple2('915706', '石文館'),
			_Utils_Tuple2('915707', 'サバイバル出版'),
			_Utils_Tuple2('915708', 'ジェイリス'),
			_Utils_Tuple2('915709', '蒼穹社'),
			_Utils_Tuple2('915710', '聖書の友社'),
			_Utils_Tuple2('915711', '市民大学講座出版局'),
			_Utils_Tuple2('915712', 'シンクス'),
			_Utils_Tuple2('915714', 'しらさぎ音楽学院'),
			_Utils_Tuple2('915715', 'ジェイシーエス出版'),
			_Utils_Tuple2('915716', '全国管工事業協同組合連合会'),
			_Utils_Tuple2('915717', '瑞鳥書房'),
			_Utils_Tuple2('915719', 'スタンダード・マッキンタイヤ'),
			_Utils_Tuple2('915720', '全国青少年教化協議会'),
			_Utils_Tuple2('915721', '受験法律研究会'),
			_Utils_Tuple2('915722', '産業教育研究所出版部'),
			_Utils_Tuple2('915723', '自由人権協会'),
			_Utils_Tuple2('915724', '情報通信総合研究所'),
			_Utils_Tuple2('915725', '全国観光と物産新聞社'),
			_Utils_Tuple2('915727', 'ラテラネットワーク'),
			_Utils_Tuple2('915728', '創教出版'),
			_Utils_Tuple2('915729', 'ＧＤＭ英語教授法研究会出版部'),
			_Utils_Tuple2('915730', '成文社'),
			_Utils_Tuple2('915732', '北都'),
			_Utils_Tuple2('915733', '産業政策研究所'),
			_Utils_Tuple2('915734', '修美社'),
			_Utils_Tuple2('915735', '人文会'),
			_Utils_Tuple2('915736', '成基学園'),
			_Utils_Tuple2('915737', 'シンプレス'),
			_Utils_Tuple2('915738', '助成財団資料センター'),
			_Utils_Tuple2('915739', '詩苑社'),
			_Utils_Tuple2('915740', 'システム制御情報学会'),
			_Utils_Tuple2('915741', '清林寺'),
			_Utils_Tuple2('915742', '全国建築コンクリートブロック工業会'),
			_Utils_Tuple2('915743', 'スーパーエディション'),
			_Utils_Tuple2('915744', '聖書知識社'),
			_Utils_Tuple2('915745', 'シャローム図書'),
			_Utils_Tuple2('915746', '須田製版出版部'),
			_Utils_Tuple2('915747', 'ＣＴＣ出版'),
			_Utils_Tuple2('915748', '聖書を読む会'),
			_Utils_Tuple2('915749', 'センケン'),
			_Utils_Tuple2('915751', '洗心'),
			_Utils_Tuple2('915752', '山陽放送'),
			_Utils_Tuple2('915753', '全国歴史資料保存利用機関連絡協議会'),
			_Utils_Tuple2('915754', '瀬戸内海汽船星ビル'),
			_Utils_Tuple2('915755', '誠練舎(英会話)シビル出版局'),
			_Utils_Tuple2('915756', 'ＳＴＵＤＩＯ ＣＯＳＭＯＳ'),
			_Utils_Tuple2('915758', 'セル'),
			_Utils_Tuple2('915759', '生長の家'),
			_Utils_Tuple2('915760', '三天出版社'),
			_Utils_Tuple2('915761', '新風社'),
			_Utils_Tuple2('915762', '真正書籍出版部'),
			_Utils_Tuple2('915763', 'イメージ・インテグレータ・ギャザリング'),
			_Utils_Tuple2('915765', '早研'),
			_Utils_Tuple2('915766', '修学館'),
			_Utils_Tuple2('915767', 'シビナ国際文化研究・交流会'),
			_Utils_Tuple2('915768', '総合行政出版'),
			_Utils_Tuple2('915769', '世界救世教'),
			_Utils_Tuple2('915770', '週刊上田新聞社'),
			_Utils_Tuple2('915771', 'ジェイアール西日本コミュニケーションズ'),
			_Utils_Tuple2('915772', 'セイカン企画'),
			_Utils_Tuple2('915773', '全国労働基準関係団体連合会'),
			_Utils_Tuple2('915774', '真宗大谷派名古屋別院'),
			_Utils_Tuple2('915775', 'シルバー精工'),
			_Utils_Tuple2('915777', 'すえもりブックス'),
			_Utils_Tuple2('915779', '江副学園 新宿日本語学校'),
			_Utils_Tuple2('915780', 'スキルアート・ジルクラフト'),
			_Utils_Tuple2('915781', '槍楯社'),
			_Utils_Tuple2('915782', '全英出版'),
			_Utils_Tuple2('915783', '修成学園出版局'),
			_Utils_Tuple2('915784', '参青山'),
			_Utils_Tuple2('915785', 'ＧＵ企画出版部'),
			_Utils_Tuple2('915786', 'シルペーク出版社'),
			_Utils_Tuple2('915788', '相立出版'),
			_Utils_Tuple2('915789', 'ゾーオン社'),
			_Utils_Tuple2('915790', '千毯館'),
			_Utils_Tuple2('915791', '新世代社'),
			_Utils_Tuple2('915792', 'サロンニューズマガジン'),
			_Utils_Tuple2('915793', '信仰ミニストリーズ'),
			_Utils_Tuple2('915794', '週刊つりニュース'),
			_Utils_Tuple2('915795', '成蹊堂'),
			_Utils_Tuple2('915796', '創流出版'),
			_Utils_Tuple2('915797', 'サナ'),
			_Utils_Tuple2('915798', '三青デザイン'),
			_Utils_Tuple2('915799', 'ジャパン・リーガル・パブリッシャーズ'),
			_Utils_Tuple2('915801', '水琴社'),
			_Utils_Tuple2('915802', 'セキネ商事'),
			_Utils_Tuple2('915803', 'スタジオニッポン'),
			_Utils_Tuple2('915804', '湘南出版センター'),
			_Utils_Tuple2('915805', '神戸松蔭女子学院大学学術研究会'),
			_Utils_Tuple2('915806', 'ジャブ・ＪＡＢＢ出版局'),
			_Utils_Tuple2('915807', '情報理学研究所'),
			_Utils_Tuple2('915808', 'ささら書房'),
			_Utils_Tuple2('915809', 'Ｊａｐａｎ Ｅｎｇｌｉｓｈ Ｓｅｒｖｉｃｅ'),
			_Utils_Tuple2('915810', '創研出版'),
			_Utils_Tuple2('915811', '２１世紀職業財団'),
			_Utils_Tuple2('915812', '日本レンタル・システム・サプライ'),
			_Utils_Tuple2('915813', 'ザ・イクタ・プレス'),
			_Utils_Tuple2('915814', '神陵文庫'),
			_Utils_Tuple2('915815', '壮光舎プロセス'),
			_Utils_Tuple2('915816', '真学社'),
			_Utils_Tuple2('915817', '新かながわ社'),
			_Utils_Tuple2('915819', 'ジェムコ出版'),
			_Utils_Tuple2('915820', '情報企画'),
			_Utils_Tuple2('915821', 'ジェイアール東日本コンサルタンツ'),
			_Utils_Tuple2('915822', '青谷舎'),
			_Utils_Tuple2('915823', 'システム農業'),
			_Utils_Tuple2('915824', '事務所経営研究協会'),
			_Utils_Tuple2('915825', 'サンメッセ出版事業部'),
			_Utils_Tuple2('915826', '聖学院ゼネラル・サービス'),
			_Utils_Tuple2('915827', '自動車輸送技術協会自動車基準認証国際化研究センター'),
			_Utils_Tuple2('915828', 'スコーレ企画'),
			_Utils_Tuple2('915829', 'ゼネックス'),
			_Utils_Tuple2('915830', '山河社'),
			_Utils_Tuple2('915832', '聖学院大学出版会'),
			_Utils_Tuple2('915833', '三和美術'),
			_Utils_Tuple2('915834', 'ステップ'),
			_Utils_Tuple2('915835', 'スペースプレゼンツ'),
			_Utils_Tuple2('915836', 'ソフィア'),
			_Utils_Tuple2('915837', '青陶社'),
			_Utils_Tuple2('915838', '新樹社'),
			_Utils_Tuple2('915839', 'スペック'),
			_Utils_Tuple2('915840', '政策時報出版社'),
			_Utils_Tuple2('915842', 'セディア'),
			_Utils_Tuple2('915843', 'サンテク'),
			_Utils_Tuple2('915844', '三協図書出版社'),
			_Utils_Tuple2('915845', 'ＣＣＨジャパンリミテッド'),
			_Utils_Tuple2('915846', '双思書房'),
			_Utils_Tuple2('915847', 'すばる書房新社'),
			_Utils_Tuple2('915848', '澤口東洋文化研究所'),
			_Utils_Tuple2('915849', 'セメントジャーナル社'),
			_Utils_Tuple2('915850', 'ジャパン・パブリケーションズ'),
			_Utils_Tuple2('915851', '新技術コミュニケーションズ'),
			_Utils_Tuple2('915852', 'ソフト・ネットワーク研究所'),
			_Utils_Tuple2('915853', '紙鳶社'),
			_Utils_Tuple2('915854', '三樹企画出版'),
			_Utils_Tuple2('915855', '秀明出版会'),
			_Utils_Tuple2('915856', '善文社'),
			_Utils_Tuple2('915857', '佐野美術館'),
			_Utils_Tuple2('915859', '新樹社書林'),
			_Utils_Tuple2('915860', '信州大学出版懇談会'),
			_Utils_Tuple2('915861', '小牧者出版'),
			_Utils_Tuple2('915862', 'システムニーズ'),
			_Utils_Tuple2('915863', '角屋文芸社'),
			_Utils_Tuple2('915864', '新東通信'),
			_Utils_Tuple2('915867', '三光社出版印刷'),
			_Utils_Tuple2('915868', '修英学園'),
			_Utils_Tuple2('915869', 'ソニーエンタテインメント事業準備室コンテンツ開発課'),
			_Utils_Tuple2('915870', '森林計画学会出版局'),
			_Utils_Tuple2('915871', '伸興通商'),
			_Utils_Tuple2('915873', '全国書籍出版'),
			_Utils_Tuple2('915874', '松柏舎'),
			_Utils_Tuple2('915875', '西欧美術出版社'),
			_Utils_Tuple2('915876', '総合情報社'),
			_Utils_Tuple2('915877', 'シナジー幾何学'),
			_Utils_Tuple2('915878', '荘道社'),
			_Utils_Tuple2('915879', 'スカイドア'),
			_Utils_Tuple2('915880', 'シー・エス・ピー・ジャパン'),
			_Utils_Tuple2('915881', 'サッポロ堂書店'),
			_Utils_Tuple2('915882', '総合防菌研究所'),
			_Utils_Tuple2('915883', 'シー・エス・アイ'),
			_Utils_Tuple2('915884', '出版館ブック・クラブ'),
			_Utils_Tuple2('915885', '樹発行所'),
			_Utils_Tuple2('915886', '創森出版'),
			_Utils_Tuple2('915887', '埼玉県立がんセンター'),
			_Utils_Tuple2('915888', '富士皇朝典範局'),
			_Utils_Tuple2('915889', '創英社'),
			_Utils_Tuple2('915890', '精神世界をひらく会'),
			_Utils_Tuple2('915893', '佐々木隆一郎'),
			_Utils_Tuple2('915895', '史明(スベン)'),
			_Utils_Tuple2('915897', '杉野要吉'),
			_Utils_Tuple2('915898', 'ステラ'),
			_Utils_Tuple2('915899', 'クリストファーコロンブスインターナショナルアカデミージャパン'),
			_Utils_Tuple2('915900', '翔聖'),
			_Utils_Tuple2('915902', '住宅産業新聞社'),
			_Utils_Tuple2('915903', '全国消費生活相談員協会'),
			_Utils_Tuple2('915904', 'ストーク'),
			_Utils_Tuple2('915905', '人工知能学会'),
			_Utils_Tuple2('915906', '壮神社'),
			_Utils_Tuple2('915907', 'Ｊｏｙ英語企画'),
			_Utils_Tuple2('915908', '情報企画研究所'),
			_Utils_Tuple2('915909', '総合工学出版会'),
			_Utils_Tuple2('915910', '自動車検査登録協力会'),
			_Utils_Tuple2('915911', '紫峰図書'),
			_Utils_Tuple2('915912', '埼玉川柳社'),
			_Utils_Tuple2('915913', '白樺書房'),
			_Utils_Tuple2('915914', 'サン・メルヘン企画'),
			_Utils_Tuple2('915915', '水産北海道協会'),
			_Utils_Tuple2('915916', '産業教育出版'),
			_Utils_Tuple2('915917', '診療新社'),
			_Utils_Tuple2('915918', '在日英国商業会議所'),
			_Utils_Tuple2('915919', '生活の友社'),
			_Utils_Tuple2('915920', '宗教ニュース'),
			_Utils_Tuple2('915921', '新日本建築家協会関東甲信越支部'),
			_Utils_Tuple2('915922', '晢書房'),
			_Utils_Tuple2('915923', '全国食糧振興会'),
			_Utils_Tuple2('915925', 'シヴィルパスポート社'),
			_Utils_Tuple2('915926', 'サニーサイドアップ'),
			_Utils_Tuple2('915927', 'すいしょう社'),
			_Utils_Tuple2('915928', 'サイテック'),
			_Utils_Tuple2('915929', 'サイエンス・コミュニケーションズ・インターナショナル'),
			_Utils_Tuple2('915930', 'スタジオ・ミュー'),
			_Utils_Tuple2('915931', '生活科学研究室'),
			_Utils_Tuple2('915932', 'スズキライフ'),
			_Utils_Tuple2('915933', 'ジョルダン'),
			_Utils_Tuple2('915934', '生活環境問題研究所'),
			_Utils_Tuple2('915935', '産業構造情報研究所'),
			_Utils_Tuple2('915936', 'ＳＥＩＫＥＮ－ＩＡＳＳシンポジウム'),
			_Utils_Tuple2('915937', 'サイメッド・パブリケーションズ'),
			_Utils_Tuple2('915938', '神人社'),
			_Utils_Tuple2('915939', 'ゼニスプラニング'),
			_Utils_Tuple2('915940', '湘南堂書店'),
			_Utils_Tuple2('915941', 'ジェイ・アイ・ピイ'),
			_Utils_Tuple2('915942', '京滋企画出版'),
			_Utils_Tuple2('915943', '政光プリプラン'),
			_Utils_Tuple2('915944', '笹川スポーツ財団'),
			_Utils_Tuple2('915945', '全日本美術新聞社'),
			_Utils_Tuple2('915946', 'サクセス出版販売'),
			_Utils_Tuple2('915947', '産業医学振興財団'),
			_Utils_Tuple2('915949', 'サンルート・看護研修センター'),
			_Utils_Tuple2('915950', '清泉女学院短期大学'),
			_Utils_Tuple2('915951', '全国労働衛生団体連合会'),
			_Utils_Tuple2('915952', '臭気対策研究協会'),
			_Utils_Tuple2('915953', 'ＪＴＣ国際教育振興協会'),
			_Utils_Tuple2('915954', '全国防犯協会連合会'),
			_Utils_Tuple2('915955', 'ＣＩＣカナダ国際大学出版局'),
			_Utils_Tuple2('915956', 'シスコ'),
			_Utils_Tuple2('915957', '産業技術サービスセンター'),
			_Utils_Tuple2('915958', '全日本書道院'),
			_Utils_Tuple2('915959', '自然環境研究センター'),
			_Utils_Tuple2('915960', 'サイコテックス'),
			_Utils_Tuple2('915961', 'せらび書房'),
			_Utils_Tuple2('915962', 'サクセスマーケティング'),
			_Utils_Tuple2('915963', 'スタジオ・リーフ'),
			_Utils_Tuple2('915964', 'オブラ・パブリケーション'),
			_Utils_Tuple2('915965', '政界出版社'),
			_Utils_Tuple2('915966', 'センチュリー'),
			_Utils_Tuple2('915967', '聖徳大学'),
			_Utils_Tuple2('915968', '西武新聞社'),
			_Utils_Tuple2('915969', '書楽'),
			_Utils_Tuple2('915970', '創史社'),
			_Utils_Tuple2('915971', '租税資料館'),
			_Utils_Tuple2('915972', '作間商事'),
			_Utils_Tuple2('915973', 'さがらブックス'),
			_Utils_Tuple2('915974', '全国学習塾協同組合'),
			_Utils_Tuple2('915975', 'Ｊｕｓｔ Ｉｎ Ｂｏｏｋ Ｓｅｒｖｉｃｅ'),
			_Utils_Tuple2('915976', '西蘭社'),
			_Utils_Tuple2('915978', '駿河台企画'),
			_Utils_Tuple2('915979', 'スタジオＲ'),
			_Utils_Tuple2('915980', 'シィ産業研究所'),
			_Utils_Tuple2('915981', '秀爽社'),
			_Utils_Tuple2('915982', '「真実の自己」を英訳する会'),
			_Utils_Tuple2('915983', '斎藤コロタイプ印刷'),
			_Utils_Tuple2('915984', '制作同人社'),
			_Utils_Tuple2('915985', '人力社'),
			_Utils_Tuple2('915986', '新経営サービス'),
			_Utils_Tuple2('915987', '史資料出版協会'),
			_Utils_Tuple2('915988', '青磁書房'),
			_Utils_Tuple2('915989', '創作舎'),
			_Utils_Tuple2('915990', 'サンデージャーナル'),
			_Utils_Tuple2('915991', 'しある出版'),
			_Utils_Tuple2('915992', 'サンライン'),
			_Utils_Tuple2('915993', '山海書房'),
			_Utils_Tuple2('915995', '新青出版'),
			_Utils_Tuple2('915996', 'シュヴァン'),
			_Utils_Tuple2('915997', 'スカイ・シンク・システム'),
			_Utils_Tuple2('915998', '創文書院'),
			_Utils_Tuple2('915999', '書籍情報社'),
			_Utils_Tuple2('916000', '滋賀県体育協会'),
			_Utils_Tuple2('916001', '私学公論社'),
			_Utils_Tuple2('916002', '尚文社ジャパン'),
			_Utils_Tuple2('916003', '創林社'),
			_Utils_Tuple2('916004', '創育社'),
			_Utils_Tuple2('916005', 'シミュレーション・メディア社'),
			_Utils_Tuple2('916006', '全通出版'),
			_Utils_Tuple2('916007', '京都総合研究所'),
			_Utils_Tuple2('916009', '聖マリア出版会'),
			_Utils_Tuple2('916010', 'ジャッツ'),
			_Utils_Tuple2('916011', '三彩社'),
			_Utils_Tuple2('916013', '斎藤美枝子'),
			_Utils_Tuple2('916014', '真生印刷'),
			_Utils_Tuple2('916015', 'ザイクスプロモーション'),
			_Utils_Tuple2('916016', '瑞雲舎'),
			_Utils_Tuple2('916018', '禅出版'),
			_Utils_Tuple2('916019', 'ジェイロックマガジン社'),
			_Utils_Tuple2('916020', 'サワダ'),
			_Utils_Tuple2('916021', 'ショットユーコンストラクト'),
			_Utils_Tuple2('916022', '市井文化社'),
			_Utils_Tuple2('916025', '瀬戸内海経済レポート'),
			_Utils_Tuple2('916026', '常野文献社'),
			_Utils_Tuple2('916027', '春光社'),
			_Utils_Tuple2('916029', 'ジュピター出版'),
			_Utils_Tuple2('916030', '反町金四郎'),
			_Utils_Tuple2('916031', '雀社'),
			_Utils_Tuple2('916032', 'スタジオＹＯＵ'),
			_Utils_Tuple2('916033', '秀峰堂'),
			_Utils_Tuple2('916034', 'スクール・ゾーン出版'),
			_Utils_Tuple2('916035', 'ジェリコ出版'),
			_Utils_Tuple2('916036', '蒼史社'),
			_Utils_Tuple2('916037', '三和書籍'),
			_Utils_Tuple2('916038', '青陽社'),
			_Utils_Tuple2('916039', 'ジャパンアート社'),
			_Utils_Tuple2('916040', '阪上雅樹'),
			_Utils_Tuple2('916041', '詩画工房'),
			_Utils_Tuple2('916043', '実践社'),
			_Utils_Tuple2('916045', '城西大学国際文化教育センター'),
			_Utils_Tuple2('916046', 'ＣＰプロジェクト'),
			_Utils_Tuple2('916047', '三優社'),
			_Utils_Tuple2('916048', 'テクニカルスタッフ'),
			_Utils_Tuple2('916049', 'せんだん書房(三交社)'),
			_Utils_Tuple2('916050', '佐々木耕二'),
			_Utils_Tuple2('916051', 'ヒランガニンゴタンド'),
			_Utils_Tuple2('916052', 'さいろ社'),
			_Utils_Tuple2('916053', 'シーエヌ企画'),
			_Utils_Tuple2('916054', '佐藤芳夫'),
			_Utils_Tuple2('916055', '出版文化産業振興財団'),
			_Utils_Tuple2('916056', 'ジャック・ホールディングス'),
			_Utils_Tuple2('916057', '山人舎'),
			_Utils_Tuple2('916058', 'シグロ'),
			_Utils_Tuple2('916059', '創流出版'),
			_Utils_Tuple2('916060', '事故情報調査会'),
			_Utils_Tuple2('916061', '城北高速印刷協業組合'),
			_Utils_Tuple2('916062', 'セイコーエプソンソフトメディア関連本部'),
			_Utils_Tuple2('916063', 'さむらい・イングリッシュ'),
			_Utils_Tuple2('916064', '修文社'),
			_Utils_Tuple2('916065', '尚生堂出版部'),
			_Utils_Tuple2('916066', '千鶴社'),
			_Utils_Tuple2('916068', 'ＣＳＫ'),
			_Utils_Tuple2('916069', 'ゾディアック'),
			_Utils_Tuple2('916070', '新日本公法'),
			_Utils_Tuple2('916071', 'シルクロード学研究センター'),
			_Utils_Tuple2('916072', 'ジェーピー通信社'),
			_Utils_Tuple2('916073', '住宅金融普及協会'),
			_Utils_Tuple2('916074', '真菜書房'),
			_Utils_Tuple2('916075', 'ジェイ・アイ・エス'),
			_Utils_Tuple2('916076', '蒼洋出版新社'),
			_Utils_Tuple2('916077', 'シンメトリア出版'),
			_Utils_Tuple2('916078', '信基社'),
			_Utils_Tuple2('916079', '世界出版研究センター'),
			_Utils_Tuple2('916080', '総徳出版'),
			_Utils_Tuple2('916081', '七田児童教育研究所'),
			_Utils_Tuple2('916082', '坂本鉄平事務所'),
			_Utils_Tuple2('916083', 'あいういんぐ'),
			_Utils_Tuple2('916084', '総合ゼミナール'),
			_Utils_Tuple2('916086', 'スリー・エー・システムズ'),
			_Utils_Tuple2('916087', '森話社'),
			_Utils_Tuple2('916088', 'スイテック・コーポレーション'),
			_Utils_Tuple2('916089', 'サイビズ'),
			_Utils_Tuple2('916091', '水中活動研究所'),
			_Utils_Tuple2('916092', 'シーエーピー出版'),
			_Utils_Tuple2('916093', '笹井書房'),
			_Utils_Tuple2('916095', '在日ドイツ商工会議所'),
			_Utils_Tuple2('916096', '双樹舎'),
			_Utils_Tuple2('916097', 'セコムラインズ'),
			_Utils_Tuple2('916098', '坂田音楽事務所'),
			_Utils_Tuple2('916099', 'サイエンスプレス'),
			_Utils_Tuple2('916100', 'シイーム(出版部)'),
			_Utils_Tuple2('916101', '総合食品研究所'),
			_Utils_Tuple2('916102', '全国教育産業協会ハクビ出版局'),
			_Utils_Tuple2('916103', 'さいたま「マイブック」サービス'),
			_Utils_Tuple2('916104', '普遊社'),
			_Utils_Tuple2('916105', '仙台共同印刷出版部'),
			_Utils_Tuple2('916106', 'シグマベイスキャピタル'),
			_Utils_Tuple2('916107', 'シムリー'),
			_Utils_Tuple2('916108', 'シェア・ジャパン出版'),
			_Utils_Tuple2('916109', '心泉社'),
			_Utils_Tuple2('916110', '自然食通信社'),
			_Utils_Tuple2('916111', '消費者教育支援センター'),
			_Utils_Tuple2('916112', '生活思想社'),
			_Utils_Tuple2('916113', 'スギモトエンジニアリング'),
			_Utils_Tuple2('916114', 'ジーベック音楽出版'),
			_Utils_Tuple2('916116', 'シンセイアート'),
			_Utils_Tuple2('916117', '社会批評社'),
			_Utils_Tuple2('916118', 'ゼウス'),
			_Utils_Tuple2('916119', '桜書房'),
			_Utils_Tuple2('916120', 'シャイニングプロダクション'),
			_Utils_Tuple2('916121', '春萠社'),
			_Utils_Tuple2('916122', 'Ｃ．Ｉ．Ｃ．出版'),
			_Utils_Tuple2('916123', 'ＵＦＪ総合研究所東京'),
			_Utils_Tuple2('916125', 'サークル出版'),
			_Utils_Tuple2('916126', 'システムピット出版部'),
			_Utils_Tuple2('916127', 'アリウス'),
			_Utils_Tuple2('916128', '新日本ＩＴＵ協会'),
			_Utils_Tuple2('916129', 'インターコミュニケーションズ'),
			_Utils_Tuple2('916130', '盛栄堂印刷所'),
			_Utils_Tuple2('916132', 'Ｃ．Ｗ．Ｅ'),
			_Utils_Tuple2('916133', 'シンクロニシティ'),
			_Utils_Tuple2('916134', 'ザ・アール'),
			_Utils_Tuple2('916135', 'ＺＷＡエンターテイメント'),
			_Utils_Tuple2('916136', '窓映社'),
			_Utils_Tuple2('916137', 'サクレ'),
			_Utils_Tuple2('916138', 'サティアサイオーガニゼーションジャパン'),
			_Utils_Tuple2('916139', '詩遊社'),
			_Utils_Tuple2('916140', '静電気学会'),
			_Utils_Tuple2('916141', '時報出版'),
			_Utils_Tuple2('916142', 'サム・トレーディング'),
			_Utils_Tuple2('916143', '食品化学新聞社'),
			_Utils_Tuple2('916144', 'シンフォレスト'),
			_Utils_Tuple2('916145', 'するが文庫(やまもと印刷工業出版部)'),
			_Utils_Tuple2('916146', 'スペース・ロム'),
			_Utils_Tuple2('916147', '青河社'),
			_Utils_Tuple2('916149', '札幌社会保険総合病院'),
			_Utils_Tuple2('916150', '石川書房'),
			_Utils_Tuple2('916151', '首都生活設計'),
			_Utils_Tuple2('916152', '三省堂教育開発'),
			_Utils_Tuple2('916153', 'ＣＣＲ出版会'),
			_Utils_Tuple2('916154', '千田洋之助'),
			_Utils_Tuple2('916155', 'セシール'),
			_Utils_Tuple2('916156', '嵯峨野'),
			_Utils_Tuple2('916158', 'ＫＩＢＡＢＯＯＫ志茂田景樹事務所'),
			_Utils_Tuple2('916159', '昭和堂印刷'),
			_Utils_Tuple2('916160', 'ジュリン出版'),
			_Utils_Tuple2('916161', 'ザ・ヒューマン(大学進学予備校ヒューマン・キャンパス)'),
			_Utils_Tuple2('916162', '専心道'),
			_Utils_Tuple2('916164', 'サイエンスフォーラム'),
			_Utils_Tuple2('916165', '損害保険事業総合研究所'),
			_Utils_Tuple2('916166', 'シナジー'),
			_Utils_Tuple2('916167', '青樹舎'),
			_Utils_Tuple2('916168', 'ザアオヤマスクールオブナチュラルメディシャンズ'),
			_Utils_Tuple2('916169', 'ジェイコム'),
			_Utils_Tuple2('916170', 'スプーン編集部'),
			_Utils_Tuple2('916172', '山愛書院'),
			_Utils_Tuple2('916173', '全国建設研修センター'),
			_Utils_Tuple2('916174', '創文'),
			_Utils_Tuple2('916175', '三洋インターネット出版'),
			_Utils_Tuple2('916176', '新日本製鐵マルチメディアシステムグループ'),
			_Utils_Tuple2('916177', '星座の会'),
			_Utils_Tuple2('916178', 'ＳＡＧａＣ'),
			_Utils_Tuple2('916179', '杉並通信'),
			_Utils_Tuple2('916180', 'シナジー'),
			_Utils_Tuple2('916181', 'シー・エー・ピー'),
			_Utils_Tuple2('916183', 'ＳＨＩＮ企画'),
			_Utils_Tuple2('916184', '私教育研究所内ＨＩＡＳ'),
			_Utils_Tuple2('916185', '静岡情報通信'),
			_Utils_Tuple2('916186', '全国日本学士会'),
			_Utils_Tuple2('916187', 'シーガルクラブ'),
			_Utils_Tuple2('916188', '翠書房(朋友書店)'),
			_Utils_Tuple2('916190', 'サークル'),
			_Utils_Tuple2('916191', '白鷺えくれ舎'),
			_Utils_Tuple2('916193', 'ジェイコム'),
			_Utils_Tuple2('916194', '新建新聞社'),
			_Utils_Tuple2('916195', '創研'),
			_Utils_Tuple2('916196', 'ソフトウエア・トウー'),
			_Utils_Tuple2('916197', '湘南海童社'),
			_Utils_Tuple2('916198', 'スタジオ・タブ'),
			_Utils_Tuple2('916199', '産業編集センター'),
			_Utils_Tuple2('916201', '総合法務保障'),
			_Utils_Tuple2('916202', '歴史民俗博物館振興会'),
			_Utils_Tuple2('916203', '砂浜美術館'),
			_Utils_Tuple2('916204', '松竹衣裳'),
			_Utils_Tuple2('916205', '辞游社'),
			_Utils_Tuple2('916206', 'ソフマップ'),
			_Utils_Tuple2('916207', 'ムーン・ストーン企画'),
			_Utils_Tuple2('916209', '住商オットー'),
			_Utils_Tuple2('916210', '上智大学言語学会'),
			_Utils_Tuple2('916211', '全国森林組合連合会'),
			_Utils_Tuple2('916212', 'ジャパンビルド'),
			_Utils_Tuple2('916213', '埼玉昆虫談話会'),
			_Utils_Tuple2('916214', '松竹ビデオ事業部'),
			_Utils_Tuple2('916215', 'ジェイエイチエヌ'),
			_Utils_Tuple2('916216', 'ＧＡ企画'),
			_Utils_Tuple2('916217', '説話社'),
			_Utils_Tuple2('916218', '写像工房'),
			_Utils_Tuple2('916220', '全国老人クラブ連合会(全国社会福祉協議会)'),
			_Utils_Tuple2('916221', 'すみれ書房'),
			_Utils_Tuple2('916222', '泉文社'),
			_Utils_Tuple2('916223', '全日本美術協会'),
			_Utils_Tuple2('916224', '新報出版'),
			_Utils_Tuple2('916226', '小論文研究会'),
			_Utils_Tuple2('916227', 'ソフトウェア技術者協会'),
			_Utils_Tuple2('921010', '千寿門院出版局'),
			_Utils_Tuple2('921011', '新行動社(アクタム)'),
			_Utils_Tuple2('921012', '世音社'),
			_Utils_Tuple2('921013', 'サンプロセス'),
			_Utils_Tuple2('921014', '秀学'),
			_Utils_Tuple2('921016', 'ザネット'),
			_Utils_Tuple2('921017', '事業開発研究所'),
			_Utils_Tuple2('921018', 'スリーマインド教育センター'),
			_Utils_Tuple2('921019', 'ゼファー'),
			_Utils_Tuple2('921020', 'スターシップ'),
			_Utils_Tuple2('921021', 'ＪＳコーポレーション'),
			_Utils_Tuple2('921022', '神鋼ヒューマン・クリエイト'),
			_Utils_Tuple2('921023', '衆芸社'),
			_Utils_Tuple2('921024', '創文社'),
			_Utils_Tuple2('921025', 'ソフィア総合研究所'),
			_Utils_Tuple2('921026', 'ソリマチ出版'),
			_Utils_Tuple2('921027', 'ジャングル・ファクトリー'),
			_Utils_Tuple2('921028', '下田印刷'),
			_Utils_Tuple2('921029', '自照社出版'),
			_Utils_Tuple2('921030', 'Ｊ－Ｌｉｓｔ'),
			_Utils_Tuple2('921031', '集出版社'),
			_Utils_Tuple2('921032', 'ＣＣＣ研究所'),
			_Utils_Tuple2('921033', 'スーパーステージ'),
			_Utils_Tuple2('921034', '三章文庫'),
			_Utils_Tuple2('921035', 'ジェネシス'),
			_Utils_Tuple2('921036', '清風社'),
			_Utils_Tuple2('921037', '静和印刷社'),
			_Utils_Tuple2('921038', 'サンセン出版'),
			_Utils_Tuple2('921039', '住宅デザイン研究所'),
			_Utils_Tuple2('921040', '雑草社'),
			_Utils_Tuple2('921041', 'ジェイティービー明和印刷'),
			_Utils_Tuple2('921042', '三陽印刷'),
			_Utils_Tuple2('921043', '創開'),
			_Utils_Tuple2('921045', 'シーティーイー'),
			_Utils_Tuple2('921046', '自湧社'),
			_Utils_Tuple2('921047', 'ソフトビジネス総合研究所'),
			_Utils_Tuple2('921048', '蒼生書房'),
			_Utils_Tuple2('921049', '晨鶏舎'),
			_Utils_Tuple2('921050', '昌美堂出版'),
			_Utils_Tuple2('921053', 'ザイロ'),
			_Utils_Tuple2('921054', 'ＪＰＩ'),
			_Utils_Tuple2('921055', '採用試験問題研究会'),
			_Utils_Tuple2('921056', '秀英予備校'),
			_Utils_Tuple2('921057', 'スター出版'),
			_Utils_Tuple2('921058', 'シャローム書房'),
			_Utils_Tuple2('921059', 'ジェイ・エム・シー'),
			_Utils_Tuple2('921060', 'さっぽろフォトライブ'),
			_Utils_Tuple2('921061', '青山社'),
			_Utils_Tuple2('921062', 'ジーイー企画センター'),
			_Utils_Tuple2('921063', 'シャロン健康研究所出版局'),
			_Utils_Tuple2('921064', '島田儀兵衛'),
			_Utils_Tuple2('921065', '桜井保秋写真事務所'),
			_Utils_Tuple2('921067', '出版文化研究'),
			_Utils_Tuple2('921069', 'シーズペット新聞社'),
			_Utils_Tuple2('921070', '島根県並河萬里写真財団'),
			_Utils_Tuple2('921071', '産業開発センター'),
			_Utils_Tuple2('921072', 'ジィー・バイ・ケイ'),
			_Utils_Tuple2('921073', '精密工学会知能メカトロニクス専門委員会'),
			_Utils_Tuple2('921074', 'シーガル'),
			_Utils_Tuple2('921075', '杉山頴男事務所'),
			_Utils_Tuple2('921076', '新和歌山新報社'),
			_Utils_Tuple2('921077', 'ジェイシー教育研究所'),
			_Utils_Tuple2('921078', '心力舎'),
			_Utils_Tuple2('921079', 'ジェイアール東日本企画'),
			_Utils_Tuple2('921080', '山陰文芸協会'),
			_Utils_Tuple2('921081', '荘銀総合研究所'),
			_Utils_Tuple2('921082', '水玄舎'),
			_Utils_Tuple2('921083', '私学教育振興会'),
			_Utils_Tuple2('921085', '自費出版ネットワーク'),
			_Utils_Tuple2('921086', 'サンライフ企画'),
			_Utils_Tuple2('921087', '審美'),
			_Utils_Tuple2('921088', '常陽新聞社'),
			_Utils_Tuple2('921089', '信越放送'),
			_Utils_Tuple2('921090', '佐賀大学低平地防災研究センター'),
			_Utils_Tuple2('921091', '三陸書房'),
			_Utils_Tuple2('921092', '全国中小企業団体中央会'),
			_Utils_Tuple2('921093', 'ソーホー出版'),
			_Utils_Tuple2('921094', '石英社'),
			_Utils_Tuple2('921095', '四恩社'),
			_Utils_Tuple2('921096', 'スペースデザイン研究室'),
			_Utils_Tuple2('921097', '実務出版'),
			_Utils_Tuple2('921098', '人事行政出版'),
			_Utils_Tuple2('921099', 'シーエーティー'),
			_Utils_Tuple2('921100', 'ジー・エム・アイ'),
			_Utils_Tuple2('921101', '叢林社'),
			_Utils_Tuple2('921102', '新藤智(ＮＳＫ出版)'),
			_Utils_Tuple2('921103', '滋賀県音楽療法研究学会'),
			_Utils_Tuple2('921104', 'ジオグラフィカ'),
			_Utils_Tuple2('921105', 'シーズ情報出版'),
			_Utils_Tuple2('921106', '島根国語国文会'),
			_Utils_Tuple2('921107', 'サンパル'),
			_Utils_Tuple2('921108', '西洋堂'),
			_Utils_Tuple2('921109', 'Ｓｏｐｈｉａ Ｕｎｉｖｅｒｓｉｔｙ Ｐｒｅｓｓ 上智大学'),
			_Utils_Tuple2('921110', 'ジャングル・ブック'),
			_Utils_Tuple2('921111', '札幌出版'),
			_Utils_Tuple2('921112', 'ＣＩＥＣ'),
			_Utils_Tuple2('921113', 'サンショウ'),
			_Utils_Tuple2('921114', '空とぶ木'),
			_Utils_Tuple2('921115', '三省堂自費出版センター'),
			_Utils_Tuple2('921116', '森光社'),
			_Utils_Tuple2('921117', '下板書房'),
			_Utils_Tuple2('921118', '松林社'),
			_Utils_Tuple2('921119', 'セルフラーニング研究所'),
			_Utils_Tuple2('921120', 'シャローム印刷'),
			_Utils_Tuple2('921121', 'シベール'),
			_Utils_Tuple2('921123', 'ジェーシーツー'),
			_Utils_Tuple2('921124', 'ジアース教育新社'),
			_Utils_Tuple2('921125', '星文社'),
			_Utils_Tuple2('921126', 'サティアサイ教育協会'),
			_Utils_Tuple2('921127', '社会システム研究所'),
			_Utils_Tuple2('921129', '真陽社'),
			_Utils_Tuple2('921130', '商業施設技術者団体連合会'),
			_Utils_Tuple2('921131', 'セルフセラピーＤ.Ｉ.Ｙラーニングセンター'),
			_Utils_Tuple2('921133', 'サンパティック・カフェ'),
			_Utils_Tuple2('921134', '三学出版'),
			_Utils_Tuple2('921135', '佐々木祐子'),
			_Utils_Tuple2('921136', '三草書院'),
			_Utils_Tuple2('921137', 'スカイ'),
			_Utils_Tuple2('921138', 'サンライトラボ'),
			_Utils_Tuple2('921139', 'スカイコム'),
			_Utils_Tuple2('921140', '翔雲社'),
			_Utils_Tuple2('921141', 'セイコーインスツルメンツ'),
			_Utils_Tuple2('921142', '星湖舎'),
			_Utils_Tuple2('921143', '水産通信社'),
			_Utils_Tuple2('921144', 'セルフ出版'),
			_Utils_Tuple2('921145', '青史出版'),
			_Utils_Tuple2('921147', 'ＪＣＭＮ出版'),
			_Utils_Tuple2('921148', '伸光堂'),
			_Utils_Tuple2('921149', '瀬戸内の環境を守る連絡会'),
			_Utils_Tuple2('921150', '全日本建設技術協会'),
			_Utils_Tuple2('921151', 'サーフェイス・レコーズ'),
			_Utils_Tuple2('921152', '書肆半日閑'),
			_Utils_Tuple2('921153', 'サン・グリーン出版'),
			_Utils_Tuple2('921154', 'スタートビジネス'),
			_Utils_Tuple2('921155', 'ジェイボックス'),
			_Utils_Tuple2('921156', '純福音出版'),
			_Utils_Tuple2('921157', '聖光出版'),
			_Utils_Tuple2('921158', '佐藤孝出版'),
			_Utils_Tuple2('921160', 'シィー・ディー・アイ'),
			_Utils_Tuple2('921161', '生物資源研究所出版部'),
			_Utils_Tuple2('921162', 'システム・テクノロジー・アイ'),
			_Utils_Tuple2('921163', 'ゼネラル・ビジネス・サービス'),
			_Utils_Tuple2('921164', '創文企画'),
			_Utils_Tuple2('921165', 'ジーオー企画出版'),
			_Utils_Tuple2('921166', '正食出版'),
			_Utils_Tuple2('921167', 'セントラル・ブレーン'),
			_Utils_Tuple2('921168', '思門出版会'),
			_Utils_Tuple2('921169', 'スターゲイズ'),
			_Utils_Tuple2('921170', 'シャーウッド'),
			_Utils_Tuple2('921171', '湊文社'),
			_Utils_Tuple2('921172', '選択出版(選択エージェンシー)'),
			_Utils_Tuple2('921173', 'ジャムシステム'),
			_Utils_Tuple2('921174', '白樺書房'),
			_Utils_Tuple2('921175', '全国理容中央学園'),
			_Utils_Tuple2('921176', '時流社'),
			_Utils_Tuple2('921177', 'サンセール'),
			_Utils_Tuple2('921178', '市民タイムス'),
			_Utils_Tuple2('921179', 'ソーエル'),
			_Utils_Tuple2('921180', '三星出版'),
			_Utils_Tuple2('921182', '桜書店'),
			_Utils_Tuple2('921183', '逍遥協会'),
			_Utils_Tuple2('921184', 'スタジオウィンズ'),
			_Utils_Tuple2('921185', 'センテナリアン倶楽部'),
			_Utils_Tuple2('921186', 'サンケイリビング新聞社'),
			_Utils_Tuple2('921187', '正陽文庫'),
			_Utils_Tuple2('921188', 'サンワード・ブックス'),
			_Utils_Tuple2('921189', '市民がつくる政策調査会'),
			_Utils_Tuple2('921190', '桜井書店'),
			_Utils_Tuple2('921191', '綜合デザイン研究所'),
			_Utils_Tuple2('921192', '青萠堂'),
			_Utils_Tuple2('921193', '上智大学イスパニア研究センター'),
			_Utils_Tuple2('921194', 'スライス・オブ・ライフ'),
			_Utils_Tuple2('921195', 'シルバー産業新聞社'),
			_Utils_Tuple2('921196', '書林駱駝の夢'),
			_Utils_Tuple2('921197', 'スタジオ・エス'),
			_Utils_Tuple2('921198', 'ｏｐｐｅｋｅ．ｃｏｍ'),
			_Utils_Tuple2('921199', '生物農業研究所'),
			_Utils_Tuple2('921200', '佐藤印刷営業部'),
			_Utils_Tuple2('921201', '佐藤印刷編集部'),
			_Utils_Tuple2('921202', '蒼文舎'),
			_Utils_Tuple2('921203', '桜映画社'),
			_Utils_Tuple2('921204', '住商データコム'),
			_Utils_Tuple2('921205', 'ジャパニメ'),
			_Utils_Tuple2('921206', '書肆秋櫻舎'),
			_Utils_Tuple2('921207', '創開コミュニティー'),
			_Utils_Tuple2('921208', '新日中出版社'),
			_Utils_Tuple2('921209', '青踏社'),
			_Utils_Tuple2('921211', '水王舎'),
			_Utils_Tuple2('921212', '申申閣'),
			_Utils_Tuple2('921213', '視覚障害者支援総合センター'),
			_Utils_Tuple2('921214', '蒼天社'),
			_Utils_Tuple2('921215', '再海社'),
			_Utils_Tuple2('921216', '湘南ジャーナル社'),
			_Utils_Tuple2('921217', '雪嶺文学会'),
			_Utils_Tuple2('921218', 'ソフト・オン・デマンド'),
			_Utils_Tuple2('921219', 'サピエンス研究所'),
			_Utils_Tuple2('921220', 'ジャイアンツカード事務局'),
			_Utils_Tuple2('921221', 'ジャパン・エデュテイメント・ラボ'),
			_Utils_Tuple2('921222', 'ジャパンインターナショナル総合研究所'),
			_Utils_Tuple2('921223', 'セプト'),
			_Utils_Tuple2('921224', '草原舎'),
			_Utils_Tuple2('924293', '太陽の会'),
			_Utils_Tuple2('924294', '待晨堂'),
			_Utils_Tuple2('924295', '大衆書房'),
			_Utils_Tuple2('924296', '大正新脩大蔵経刊行会'),
			_Utils_Tuple2('924297', '大正大学出版会'),
			_Utils_Tuple2('924298', 'テカル出版'),
			_Utils_Tuple2('924299', '泰樹社'),
			_Utils_Tuple2('924300', '大成出版牧野書房'),
			_Utils_Tuple2('924301', '大勢新聞社'),
			_Utils_Tuple2('924302', '泰星スタンプ・コイン'),
			_Utils_Tuple2('924303', '大成堂書店'),
			_Utils_Tuple2('924304', '泰全社'),
			_Utils_Tuple2('924305', '泰東書院出版部'),
			_Utils_Tuple2('924306', 'たいどう出版'),
			_Utils_Tuple2('924307', '太平書屋'),
			_Utils_Tuple2('924308', '千年書房'),
			_Utils_Tuple2('924309', '太平洋問題研究会'),
			_Utils_Tuple2('924310', '大報'),
			_Utils_Tuple2('924311', '大宝社'),
			_Utils_Tuple2('924312', '竹内産業'),
			_Utils_Tuple2('924313', 'タイムライフ教育システム'),
			_Utils_Tuple2('924314', '太陽出版'),
			_Utils_Tuple2('924315', '大洋書房'),
			_Utils_Tuple2('924316', '太陽書林'),
			_Utils_Tuple2('924317', 'ダムラン'),
			_Utils_Tuple2('924318', '太陽堂書店'),
			_Utils_Tuple2('924319', '平地学同好会'),
			_Utils_Tuple2('924320', '大陸研究社'),
			_Utils_Tuple2('924321', '対話社'),
			_Utils_Tuple2('924322', '台湾研究所'),
			_Utils_Tuple2('924323', '高崎南ロータリークラブ金曜会'),
			_Utils_Tuple2('924324', '高島書房出版部'),
			_Utils_Tuple2('924325', '高島暦出版'),
			_Utils_Tuple2('924326', '高田集蔵著書刊行会'),
			_Utils_Tuple2('924327', 'たかち出版'),
			_Utils_Tuple2('924328', '高千穂書房'),
			_Utils_Tuple2('924329', '鷹俳句会'),
			_Utils_Tuple2('924330', '太平社'),
			_Utils_Tuple2('924331', '高山書店'),
			_Utils_Tuple2('924332', '宝出版'),
			_Utils_Tuple2('924333', '宝塚歌劇団出版局'),
			_Utils_Tuple2('924334', '宝塚出版'),
			_Utils_Tuple2('924335', 'ダイエー印刷・出版事業部'),
			_Utils_Tuple2('924336', '武生史談会'),
			_Utils_Tuple2('924337', '武田芳美'),
			_Utils_Tuple2('924339', '田研出版'),
			_Utils_Tuple2('924340', '高義紙業'),
			_Utils_Tuple2('924341', '多田食味研究所出版局'),
			_Utils_Tuple2('924342', 'タッチダウン'),
			_Utils_Tuple2('924343', 'たつのこ出版'),
			_Utils_Tuple2('924344', '竜の子プロダクション'),
			_Utils_Tuple2('924345', '東京元気出版'),
			_Utils_Tuple2('924346', '谷口書店'),
			_Utils_Tuple2('924347', '谷沢書房'),
			_Utils_Tuple2('924348', '田原南軒'),
			_Utils_Tuple2('924349', 'たばこ総合研究センター'),
			_Utils_Tuple2('924350', '旅と信濃社'),
			_Utils_Tuple2('924351', 'タスト'),
			_Utils_Tuple2('924352', '玉江古典文物編刊所'),
			_Utils_Tuple2('924353', '多摩郷土研究の会'),
			_Utils_Tuple2('924354', '多摩書房'),
			_Utils_Tuple2('924355', 'タマ・セーリング'),
			_Utils_Tuple2('924356', '環文庫'),
			_Utils_Tuple2('924357', '田村將軍堂'),
			_Utils_Tuple2('924358', '玉藻社'),
			_Utils_Tuple2('924359', 'タリス'),
			_Utils_Tuple2('924361', '短歌あゆみ社'),
			_Utils_Tuple2('924362', '日本近代音楽財団日本近代音楽館'),
			_Utils_Tuple2('924363', '短歌研究社'),
			_Utils_Tuple2('924364', '短歌公論社'),
			_Utils_Tuple2('924365', '短歌春秋社'),
			_Utils_Tuple2('924366', '短歌時代社'),
			_Utils_Tuple2('924367', '短歌人会'),
			_Utils_Tuple2('924368', '短歌草原社'),
			_Utils_Tuple2('924369', '短歌文学会'),
			_Utils_Tuple2('924370', '旦州書院'),
			_Utils_Tuple2('924371', '丹波屋'),
			_Utils_Tuple2('924372', 'ダイアプレス'),
			_Utils_Tuple2('924373', '中央学院大学'),
			_Utils_Tuple2('924374', '第一出版センター'),
			_Utils_Tuple2('924375', '第一図書'),
			_Utils_Tuple2('924376', '大学教育社'),
			_Utils_Tuple2('924377', '中央書林'),
			_Utils_Tuple2('924378', '大学出版社'),
			_Utils_Tuple2('924379', '大学書房'),
			_Utils_Tuple2('924380', '大学図書'),
			_Utils_Tuple2('924382', '大元社'),
			_Utils_Tuple2('924383', '大興電気製作所'),
			_Utils_Tuple2('924384', '醍醐社'),
			_Utils_Tuple2('924386', '棚橋源太郎先生顕彰会'),
			_Utils_Tuple2('924387', '第十五興生社'),
			_Utils_Tuple2('924388', '東京地学協会'),
			_Utils_Tuple2('924389', '大東出版センター'),
			_Utils_Tuple2('924390', '大東總業'),
			_Utils_Tuple2('924391', '大道学館出版部'),
			_Utils_Tuple2('924392', 'ダイナミックプロダクション'),
			_Utils_Tuple2('924393', '第二書房'),
			_Utils_Tuple2('924394', 'ダイニチ出版'),
			_Utils_Tuple2('924395', '大日本山林会'),
			_Utils_Tuple2('924396', '大日本水産会'),
			_Utils_Tuple2('924397', '大文館書店'),
			_Utils_Tuple2('924398', '吐夢書房'),
			_Utils_Tuple2('924399', '電気通信共済会'),
			_Utils_Tuple2('92440088730', '大学教育出版'),
			_Utils_Tuple2('924401', 'ダイヤル社'),
			_Utils_Tuple2('924402', '大和'),
			_Utils_Tuple2('924403', 'ダイワＰＲ研究所'),
			_Utils_Tuple2('924404', 'ダク・マーケティング・コア'),
			_Utils_Tuple2('924405', 'ダービーニュース'),
			_Utils_Tuple2('924406', 'だるま堂書店'),
			_Utils_Tuple2('924407', 'ダンスと音楽社'),
			_Utils_Tuple2('924408', '暖流俳句会'),
			_Utils_Tuple2('924409', '地域と創造社'),
			_Utils_Tuple2('924410', '力書房'),
			_Utils_Tuple2('924411', '竹頭社'),
			_Utils_Tuple2('924412', 'チセイ堂'),
			_Utils_Tuple2('924413', '地図教材'),
			_Utils_Tuple2('924414', '地帯社'),
			_Utils_Tuple2('924415', '千鳥書房'),
			_Utils_Tuple2('924416', '知能教育国際交流センター'),
			_Utils_Tuple2('924417', '千葉県教科書特約販売'),
			_Utils_Tuple2('924418', '千葉日報社'),
			_Utils_Tuple2('924419', '地方史研究協議会'),
			_Utils_Tuple2('924421', '地方自治情報センター'),
			_Utils_Tuple2('924422', 'チャイルド・センター'),
			_Utils_Tuple2('924423', '中公商事'),
			_Utils_Tuple2('924424', 'ちやんそり舍'),
			_Utils_Tuple2('924425', '中研出版'),
			_Utils_Tuple2('924426', '中央競馬ピーアール・センター'),
			_Utils_Tuple2('924427', '中央書房'),
			_Utils_Tuple2('924428', '中央通信社'),
			_Utils_Tuple2('924429', '中央美術学園出版局'),
			_Utils_Tuple2('924430', '中央仏教社'),
			_Utils_Tuple2('924431', '中央法学院'),
			_Utils_Tuple2('924433', '中外海事新報社'),
			_Utils_Tuple2('924434', '中外出版'),
			_Utils_Tuple2('924435', '中外書房'),
			_Utils_Tuple2('924436', '中国研究所'),
			_Utils_Tuple2('924437', '中小企業経営研究会'),
			_Utils_Tuple2('924438', 'チーム'),
			_Utils_Tuple2('924439', '中央社'),
			_Utils_Tuple2('924440', '踏青社'),
			_Utils_Tuple2('924441', '中南米音楽'),
			_Utils_Tuple2('924443', '中部財界社'),
			_Utils_Tuple2('924444', '中部詩人サロン'),
			_Utils_Tuple2('924445', '中部短歌会'),
			_Utils_Tuple2('924446', '中部文学社'),
			_Utils_Tuple2('924447', '中和印刷'),
			_Utils_Tuple2('924448', 'チュチェ思想国際研究所'),
			_Utils_Tuple2('924449', '潮音社'),
			_Utils_Tuple2('924450', '肇国社'),
			_Utils_Tuple2('924451', '朝鮮画報社'),
			_Utils_Tuple2('924452', '朝鮮図書覆刻会'),
			_Utils_Tuple2('924453', '朝鮮文化社'),
			_Utils_Tuple2('924454', 'テマサ'),
			_Utils_Tuple2('924455', '帖面舎'),
			_Utils_Tuple2('924456', 'ディーエス企画'),
			_Utils_Tuple2('924457', '千代田永田書房'),
			_Utils_Tuple2('924458', '通産政策広報社'),
			_Utils_Tuple2('924459', '経済産業統計協会'),
			_Utils_Tuple2('924461', '東南アジア通信'),
			_Utils_Tuple2('924462', 'ＴＬメディカルサービス'),
			_Utils_Tuple2('924463', '山桃舎(島津出版会、乾木工芸指導相談部)'),
			_Utils_Tuple2('924465', '塚本出版社'),
			_Utils_Tuple2('924466', '「月の輪古墳」刊行会'),
			_Utils_Tuple2('924467', '築地聖典刊行会'),
			_Utils_Tuple2('924468', '黄楊書房'),
			_Utils_Tuple2('924469', 'トーチ出版'),
			_Utils_Tuple2('924471', '土と愛社'),
			_Utils_Tuple2('924472', 'ツディブックス'),
			_Utils_Tuple2('924473', '椿書院'),
			_Utils_Tuple2('924474', 'つばき発行所'),
			_Utils_Tuple2('924475', '翼書院'),
			_Utils_Tuple2('924476', '壷発行所'),
			_Utils_Tuple2('924477', 'つり案内社'),
			_Utils_Tuple2('924478', 'つりの旅社'),
			_Utils_Tuple2('924479', '鶴発行所'),
			_Utils_Tuple2('924480', 'ツルモトルーム'),
			_Utils_Tuple2('924481', 'ツルヤ出版部'),
			_Utils_Tuple2('924482', '庭園刊行会'),
			_Utils_Tuple2('924483', 'テイチクエンタテインメント'),
			_Utils_Tuple2('924484', 'ＴＭＣ'),
			_Utils_Tuple2('924486', 'ティ・ビー・エス・サービス'),
			_Utils_Tuple2('924487', 'テープサウンド'),
			_Utils_Tuple2('924488', '滴翠社'),
			_Utils_Tuple2('924489', 'テストロ・ブラザース'),
			_Utils_Tuple2('924490', '哲学普及会'),
			_Utils_Tuple2('924492', '鉄道研究社'),
			_Utils_Tuple2('924493', '鉄道弘済会社会福祉部'),
			_Utils_Tuple2('924494', '鉄道弘報社'),
			_Utils_Tuple2('924495', '鉄道時報局'),
			_Utils_Tuple2('924496', '鉄道ジャーナル社'),
			_Utils_Tuple2('924497', 'テニス新聞社'),
			_Utils_Tuple2('924498', '寺岡書洞'),
			_Utils_Tuple2('924499', '映像情報メディア学会'),
			_Utils_Tuple2('924500', '点字民報社'),
			_Utils_Tuple2('924502', '天道学会'),
			_Utils_Tuple2('924503', '天秤発行所'),
			_Utils_Tuple2('924504', '天幕書房'),
			_Utils_Tuple2('924505', '天狼俳句会'),
			_Utils_Tuple2('924506', 'デーリィ・ジャパン社'),
			_Utils_Tuple2('924507', 'デイリースポーツ事業社'),
			_Utils_Tuple2('924508', 'ティ・エー・シー企画'),
			_Utils_Tuple2('924509', 'ＴＯＡ出版'),
			_Utils_Tuple2('924510', 'デモス出版会'),
			_Utils_Tuple2('924511', 'デロス書房'),
			_Utils_Tuple2('924512', '電気化学会'),
			_Utils_Tuple2('924513', '電気情報社'),
			_Utils_Tuple2('924514', '電気評論社'),
			_Utils_Tuple2('924515', '電子計測出版社'),
			_Utils_Tuple2('924516', '電設資料協会'),
			_Utils_Tuple2('924517', '伝統花道研究会'),
			_Utils_Tuple2('924518', '電波実験社'),
			_Utils_Tuple2('924519', '東亜医学協会'),
			_Utils_Tuple2('924521', '東映芸能ビデオ'),
			_Utils_Tuple2('924522', '藤園堂書店'),
			_Utils_Tuple2('924523', '東海教育研究所'),
			_Utils_Tuple2('924524', '東海書房'),
			_Utils_Tuple2('924525', '東海大学附属相模高等学校'),
			_Utils_Tuple2('924526', '東海俳句懇話会'),
			_Utils_Tuple2('924528', '東京アド・バンク'),
			_Utils_Tuple2('924529', '東京アンドパリ社'),
			_Utils_Tuple2('924530', '東方学会'),
			_Utils_Tuple2('924531', '東京観光専門学院出版局'),
			_Utils_Tuple2('924532', '都市計画通信社'),
			_Utils_Tuple2('924533', '東京学習出版社'),
			_Utils_Tuple2('924534', '土木建築書協会'),
			_Utils_Tuple2('924535', '東京教科書供給'),
			_Utils_Tuple2('924536', '東京教材出版社'),
			_Utils_Tuple2('924537', '東京経営管理協会'),
			_Utils_Tuple2('924538', '東京経営学院'),
			_Utils_Tuple2('924539', '東京光悦刊行会'),
			_Utils_Tuple2('924540', '東京コピイ'),
			_Utils_Tuple2('924541', '東京コレギウム'),
			_Utils_Tuple2('924542', '東京市政調査会'),
			_Utils_Tuple2('924543', '東京社・総合ジャーナリズム研究所'),
			_Utils_Tuple2('924545', '東京出版'),
			_Utils_Tuple2('924546', '東京書院新社'),
			_Utils_Tuple2('924547', '東京商工会議所'),
			_Utils_Tuple2('924549', '東京書籍販売'),
			_Utils_Tuple2('924550', '東京書房'),
			_Utils_Tuple2('924551', '東京信用交換所'),
			_Utils_Tuple2('924552', '東京心理'),
			_Utils_Tuple2('924553', '東京ジャーナル'),
			_Utils_Tuple2('924554', '東京精神分折学研究所'),
			_Utils_Tuple2('924555', '東京綜合写眞専門学校出版局'),
			_Utils_Tuple2('924556', '東京大学新聞社'),
			_Utils_Tuple2('924557', '東京大学生産技術研究所'),
			_Utils_Tuple2('924558', '東販總研'),
			_Utils_Tuple2('924559', '東京通信社'),
			_Utils_Tuple2('924560', '東京テクノセンター'),
			_Utils_Tuple2('924561', '知的財産研究所'),
			_Utils_Tuple2('924562', '東京都営繕建築協同組合'),
			_Utils_Tuple2('924563', '東京都書店商業組合'),
			_Utils_Tuple2('924564', '東京都政調査会'),
			_Utils_Tuple2('924565', '東京都立中央図書館'),
			_Utils_Tuple2('924566', '東京ニュース通信社'),
			_Utils_Tuple2('924567', '東京農業大学社会通信教育部'),
			_Utils_Tuple2('924568', '東京プラニング'),
			_Utils_Tuple2('924569', '東京ヘレンケラー協会点字出版局'),
			_Utils_Tuple2('924570', '東京ポスト'),
			_Utils_Tuple2('924571', '東京民芸協会'),
			_Utils_Tuple2('924572', '東京メディカルセンター出版部'),
			_Utils_Tuple2('924573', '東京リーガルマインド'),
			_Utils_Tuple2('924574', 'トーレン'),
			_Utils_Tuple2('924575', '東京ブックランド'),
			_Utils_Tuple2('924576', '東銀リサーチインターナショナル'),
			_Utils_Tuple2('924577', '陶芸之日本社'),
			_Utils_Tuple2('924579', '東興秘密探偵社'),
			_Utils_Tuple2('924580', '遠山現代音楽研究所'),
			_Utils_Tuple2('924581', '東三文化会'),
			_Utils_Tuple2('924582', '東西医学社'),
			_Utils_Tuple2('924583', '東西文献'),
			_Utils_Tuple2('924584', 'トライサス'),
			_Utils_Tuple2('924585', '東山堂'),
			_Utils_Tuple2('924586', '投資経済社'),
			_Utils_Tuple2('924587', '投資日報社'),
			_Utils_Tuple2('924588', '東京タイムズ社出版局'),
			_Utils_Tuple2('924589', '東芝レビュー発行所'),
			_Utils_Tuple2('924590', '東芝ＥＭＩ音楽出版'),
			_Utils_Tuple2('924591', '投資問題研究所'),
			_Utils_Tuple2('924592', '都市工業'),
			_Utils_Tuple2('924593', '同潤社'),
			_Utils_Tuple2('924594', '中日教育出版'),
			_Utils_Tuple2('924595', '童牛社'),
			_Utils_Tuple2('924596', '東大寺図書館'),
			_Utils_Tuple2('924597', '東通社出版部'),
			_Utils_Tuple2('924598', '桃滴舎'),
			_Utils_Tuple2('924599', '東天社'),
			_Utils_Tuple2('924601', '東映企画プロモーション'),
			_Utils_Tuple2('924602', '東文館書院'),
			_Utils_Tuple2('924603', 'どうぶつ出版'),
			_Utils_Tuple2('924604', '東方界'),
			_Utils_Tuple2('924605', '桐朋教育研究所'),
			_Utils_Tuple2('924606', '東邦経済社'),
			_Utils_Tuple2('924607', '東宝出版社'),
			_Utils_Tuple2('924608', '同志社大学出版部'),
			_Utils_Tuple2('924609', '東宝映像事業部'),
			_Utils_Tuple2('924610', '東方堂'),
			_Utils_Tuple2('924612', '東門書屋'),
			_Utils_Tuple2('924613', '稲門堂'),
			_Utils_Tuple2('924614', '東洋経済日報社'),
			_Utils_Tuple2('924616', '東洋書道協会'),
			_Utils_Tuple2('924617', '東和エンジニアリング'),
			_Utils_Tuple2('924618', 'トーソー出版'),
			_Utils_Tuple2('924619', '塚本吉彦事務所'),
			_Utils_Tuple2('924620', '時の経済社'),
			_Utils_Tuple2('924621', '時の美術社'),
			_Utils_Tuple2('924623', '常盤書院'),
			_Utils_Tuple2('924624', 'サントキワ'),
			_Utils_Tuple2('924625', 'トクサン商事'),
			_Utils_Tuple2('924626', '徳島同友会'),
			_Utils_Tuple2('924627', '徳島藩士譜刊行会'),
			_Utils_Tuple2('924628', '特殊鋼倶楽部'),
			_Utils_Tuple2('924629', '徳間エーブイ教育'),
			_Utils_Tuple2('924630', '徳間音楽工業'),
			_Utils_Tuple2('924631', '土佐古代史研究会'),
			_Utils_Tuple2('924632', '土佐文学研究会'),
			_Utils_Tuple2('924633', '土佐民話の会'),
			_Utils_Tuple2('924634', '都市開発研究会'),
			_Utils_Tuple2('924635', '都市化研究公室'),
			_Utils_Tuple2('924636', '都市計画協会'),
			_Utils_Tuple2('924637', '豊島興産'),
			_Utils_Tuple2('924638', '戸田書店'),
			_Utils_Tuple2('924639', '栃木新聞社'),
			_Utils_Tuple2('924640', '土地住宅総合調査会'),
			_Utils_Tuple2('924641', '鳥取キリシタン研究会'),
			_Utils_Tuple2('924642', '灯短歌会'),
			_Utils_Tuple2('924643', '鳥羽志摩文化研究会'),
			_Utils_Tuple2('924644', '東京出版'),
			_Utils_Tuple2('924645', '友田出版社'),
			_Utils_Tuple2('924646', 'トヤマ楽器製造'),
			_Utils_Tuple2('924647', '富山県歌人連盟'),
			_Utils_Tuple2('924648', '富山県俳句連盟'),
			_Utils_Tuple2('924649', 'トラベラーカルチャープランニング'),
			_Utils_Tuple2('924650', 'トラベルニュース社'),
			_Utils_Tuple2('924651', '電子物性総合研究所'),
			_Utils_Tuple2('924652', 'トラベルメイツ社'),
			_Utils_Tuple2('924653', 'トリョー・コム'),
			_Utils_Tuple2('924654', 'トレードタイムズ社'),
			_Utils_Tuple2('924655', '十和田アドバー社'),
			_Utils_Tuple2('924656', '東洋企画'),
			_Utils_Tuple2('924657', 'トンボ鉛筆社'),
			_Utils_Tuple2('924658', 'トンボ楽器社'),
			_Utils_Tuple2('924659', 'トンボの家'),
			_Utils_Tuple2('924660', '童音社'),
			_Utils_Tuple2('924661', '動向社'),
			_Utils_Tuple2('924662', '同志社'),
			_Utils_Tuple2('924663', '洞史社'),
			_Utils_Tuple2('924665', '同心社'),
			_Utils_Tuple2('924666', '道標社'),
			_Utils_Tuple2('924667', '道標発行所'),
			_Utils_Tuple2('924668', '動物文学会'),
			_Utils_Tuple2('924669', '同盟通信社'),
			_Utils_Tuple2('924670', 'はせ書房'),
			_Utils_Tuple2('924671', '読書人'),
			_Utils_Tuple2('924672', '土木技術社'),
			_Utils_Tuple2('924673', '東京医進学院'),
			_Utils_Tuple2('924674', '土曜出版社'),
			_Utils_Tuple2('924675', 'どらねこ工房'),
			_Utils_Tuple2('924676', '東秀'),
			_Utils_Tuple2('924677', 'Ｔｏｄａｙ・Ｂｏｏｋｓ'),
			_Utils_Tuple2('924678', '徳間ジャパンコミュニケーションズ'),
			_Utils_Tuple2('924680', 'ＴＯＰファッションポスター'),
			_Utils_Tuple2('924681', 'たまき書房'),
			_Utils_Tuple2('924682', '北海道二十一世紀総合研究所'),
			_Utils_Tuple2('924685', 'ドゥ企画'),
			_Utils_Tuple2('924686', '東京国際教育研究所'),
			_Utils_Tuple2('924687', '畜産食品流通企画研究所'),
			_Utils_Tuple2('924688', '東西手話学会'),
			_Utils_Tuple2('924689', 'Ａ．Ｏ．Ｉ'),
			_Utils_Tuple2('924690', '東京ブレインズ'),
			_Utils_Tuple2('924692', '伝言社'),
			_Utils_Tuple2('924693', '東陽書房'),
			_Utils_Tuple2('924694', '東宛社'),
			_Utils_Tuple2('924695', '中央印刷'),
			_Utils_Tuple2('924696', 'テープフレンド'),
			_Utils_Tuple2('924697', '砦出版'),
			_Utils_Tuple2('924698', '交通毎日新聞社'),
			_Utils_Tuple2('924699', '投資ジャーナル'),
			_Utils_Tuple2('924700', '賃貸住宅ニュース社編集部'),
			_Utils_Tuple2('924703', '東海釣りガイド'),
			_Utils_Tuple2('924704', '塗料出版社'),
			_Utils_Tuple2('924705', '栃木県出版販売'),
			_Utils_Tuple2('924707', 'トップ通商'),
			_Utils_Tuple2('924708', '中外調査会'),
			_Utils_Tuple2('924709', '店舗ジャーナル社'),
			_Utils_Tuple2('924710', '戸田デザイン研究室'),
			_Utils_Tuple2('924711', 'ダンダン'),
			_Utils_Tuple2('924712', '大学生協事業センター'),
			_Utils_Tuple2('924713', 'たる出版'),
			_Utils_Tuple2('924714', '東京スチュワーデスクラブ'),
			_Utils_Tuple2('924715', '東京易占学院出版局'),
			_Utils_Tuple2('924716', '鉄鋼新聞社'),
			_Utils_Tuple2('924717', '東南アジア調査会'),
			_Utils_Tuple2('924718', '創出版'),
			_Utils_Tuple2('92471988719', '第一企画出版'),
			_Utils_Tuple2('924721', '手鞠文庫'),
			_Utils_Tuple2('924722', '桃源書房'),
			_Utils_Tuple2('924723', 'タウンズコーポレーション'),
			_Utils_Tuple2('924724', 'ダイセイコー'),
			_Utils_Tuple2('924726', '大龍堂書店'),
			_Utils_Tuple2('924727', '潮流出版'),
			_Utils_Tuple2('924728', 'テクノシステム'),
			_Utils_Tuple2('924729', '十勝毎日新聞社'),
			_Utils_Tuple2('924730', '地域・交通計画研究所'),
			_Utils_Tuple2('924731', '富山県バイオテクノロジー推進懇談会'),
			_Utils_Tuple2('924732', '高山市民時報社'),
			_Utils_Tuple2('924733', 'つばさ出版'),
			_Utils_Tuple2('924734', '高嶺書房'),
			_Utils_Tuple2('924735', '図書販売'),
			_Utils_Tuple2('924736', '中央文化出版'),
			_Utils_Tuple2('924737', '調理栄養教育公社'),
			_Utils_Tuple2('924738', 'トランサーチ'),
			_Utils_Tuple2('924739', '旅の友'),
			_Utils_Tuple2('924741', '高木書店'),
			_Utils_Tuple2('924742', '東京ルリユール'),
			_Utils_Tuple2('924743', '地域交流出版'),
			_Utils_Tuple2('924744', 'デルファイ研究所'),
			_Utils_Tuple2('924745', '大巧'),
			_Utils_Tuple2('924747', '冬芽社'),
			_Utils_Tuple2('924748', 'テレハウス'),
			_Utils_Tuple2('924749', '冨岡書房'),
			_Utils_Tuple2('92475288777', '高城書房'),
			_Utils_Tuple2('924753', '筑波出版会'),
			_Utils_Tuple2('924754', 'テック出版'),
			_Utils_Tuple2('924755', '栃木県文化協会'),
			_Utils_Tuple2('924756', 'デー・エム・ベー・ジャパン'),
			_Utils_Tuple2('924757', 'ティーディーケイ'),
			_Utils_Tuple2('924758', 'データネット'),
			_Utils_Tuple2('924759', 'デルボ・オーガニゼーション'),
			_Utils_Tuple2('924760', '澄香舎'),
			_Utils_Tuple2('924761', 'たなか屋出版部'),
			_Utils_Tuple2('924762', '第一出版'),
			_Utils_Tuple2('924763', '東京法規出版'),
			_Utils_Tuple2('924764', '高輪印刷'),
			_Utils_Tuple2('924765', '東京外国語センター'),
			_Utils_Tuple2('924766', '童夢出版'),
			_Utils_Tuple2('924767', '東京学習協力会'),
			_Utils_Tuple2('924769', 'タイケン'),
			_Utils_Tuple2('924770', 'チケ・インターナショナル'),
			_Utils_Tuple2('924771', 'テレカ'),
			_Utils_Tuple2('924772', 'ツキヨミ出版'),
			_Utils_Tuple2('924773', 'タックマネジメント・サービス'),
			_Utils_Tuple2('924774', '地域開発研究所'),
			_Utils_Tuple2('924775', '多摩出版'),
			_Utils_Tuple2('924776', '図書出版にじ書房'),
			_Utils_Tuple2('924777', 'データベース振興センター'),
			_Utils_Tuple2('924778', '東京金融情報センター'),
			_Utils_Tuple2('924779', '中国書店'),
			_Utils_Tuple2('924780', 'ドーワ・プランニング'),
			_Utils_Tuple2('924781', '地域金融研究所'),
			_Utils_Tuple2('924782', 'テクノフォーラム'),
			_Utils_Tuple2('924783', '中央アートフォーラム'),
			_Utils_Tuple2('924785', '大氣舎'),
			_Utils_Tuple2('924786', '東林出版'),
			_Utils_Tuple2('924787', '天理大学出版部'),
			_Utils_Tuple2('924788', 'ディーピーエーシュッパン'),
			_Utils_Tuple2('924789', 'デジタルネットワーク'),
			_Utils_Tuple2('924790', '都市経済研究会'),
			_Utils_Tuple2('924791', 'Ｔ・Ｗ・Ｃ出版'),
			_Utils_Tuple2('924792', 'プロスパー'),
			_Utils_Tuple2('924793', '図書出版'),
			_Utils_Tuple2('924794', '食べもの通信社'),
			_Utils_Tuple2('924796', '東映'),
			_Utils_Tuple2('924797', '短大入試センター（明倫館）'),
			_Utils_Tuple2('924798', '高科書店'),
			_Utils_Tuple2('924799', '電気工事施工管理技術研究会'),
			_Utils_Tuple2('924800', '中央人事通信社'),
			_Utils_Tuple2('924801', 'テクネット'),
			_Utils_Tuple2('924802', 'チャンネルゼロ'),
			_Utils_Tuple2('924803', '天王寺学館'),
			_Utils_Tuple2('924804', '大栄企画'),
			_Utils_Tuple2('924805', '鳥語社'),
			_Utils_Tuple2('924806', '道映写真'),
			_Utils_Tuple2('924807', '東和'),
			_Utils_Tuple2('924808', '東興書院'),
			_Utils_Tuple2('924809', '大活字本普及会'),
			_Utils_Tuple2('924810', 'タケダ実業'),
			_Utils_Tuple2('924811', '丹青社'),
			_Utils_Tuple2('924812', '東芝映像ソフト'),
			_Utils_Tuple2('924813', 'テックタイムス'),
			_Utils_Tuple2('924815', 'トパーズプレス'),
			_Utils_Tuple2('924816', '東京創芸院'),
			_Utils_Tuple2('924817', 'ディセット'),
			_Utils_Tuple2('924818', '大衛出版社'),
			_Utils_Tuple2('924819', '地域保健出版社'),
			_Utils_Tuple2('924820', 'ドイ文化事業室'),
			_Utils_Tuple2('924821', 'テンタクル'),
			_Utils_Tuple2('924822', 'ダイヤモンドプレス'),
			_Utils_Tuple2('924824', 'トロン協会'),
			_Utils_Tuple2('924825', '立川洋三'),
			_Utils_Tuple2('924826', '土日社'),
			_Utils_Tuple2('924827', '高島出版'),
			_Utils_Tuple2('924828', '透土社'),
			_Utils_Tuple2('924829', 'ツゥードゥークリエイト'),
			_Utils_Tuple2('924830', 'デン報道'),
			_Utils_Tuple2('924832', '東方学術文芸協会'),
			_Utils_Tuple2('924833', '体育施設出版'),
			_Utils_Tuple2('924834', 'つくし館'),
			_Utils_Tuple2('924835', '店舗システム協会'),
			_Utils_Tuple2('924836', 'つくばね舎(地歴社)'),
			_Utils_Tuple2('924837', 'たいせい'),
			_Utils_Tuple2('924838', '千代田開発'),
			_Utils_Tuple2('924839', '東京都立大学工学部機械工学科'),
			_Utils_Tuple2('924840', 'テンポラリーセンター出版局'),
			_Utils_Tuple2('924841', '東洋企画出版'),
			_Utils_Tuple2('924843', '筑波大学'),
			_Utils_Tuple2('924844', '竹田謄写堂'),
			_Utils_Tuple2('924845', 'タイム・アロー'),
			_Utils_Tuple2('924846', '東京プレスセンター'),
			_Utils_Tuple2('924847', 'タック設計企画'),
			_Utils_Tuple2('92484888782', '高須企画'),
			_Utils_Tuple2('924849', '東北ペンクラブ'),
			_Utils_Tuple2('924850', '東北大学生活協同組合'),
			_Utils_Tuple2('924851', 'どりーむ編集局'),
			_Utils_Tuple2('924852', '地の塩港南キリスト教会文書伝道部'),
			_Utils_Tuple2('924853', 'デック'),
			_Utils_Tuple2('924854', 'チャイルドデコおつむてんてん倶楽部出版部'),
			_Utils_Tuple2('924855', '東和'),
			_Utils_Tuple2('924856', '東京教科書出版'),
			_Utils_Tuple2('924857', '高輪出版社'),
			_Utils_Tuple2('924858', '第一歯科出版'),
			_Utils_Tuple2('924859', 'Ｄ．Ｒ．Ｈ．ＥＤＴＩＯＮ'),
			_Utils_Tuple2('924860', '東海熱学研究所'),
			_Utils_Tuple2('924861', '田中昭文堂印刷'),
			_Utils_Tuple2('924862', 'タカラバイオ'),
			_Utils_Tuple2('924863', '徳山大学総合経済研究所'),
			_Utils_Tuple2('924865', '徳島県教育印刷'),
			_Utils_Tuple2('924866', '東洋メディカル社'),
			_Utils_Tuple2('924867', '駐文館'),
			_Utils_Tuple2('924868', '千葉県工業技術振興センター'),
			_Utils_Tuple2('924870', '宅建主任者資格研究会'),
			_Utils_Tuple2('924871', 'トランソニック'),
			_Utils_Tuple2('924872', '角笛出版'),
			_Utils_Tuple2('924873', '大書出版'),
			_Utils_Tuple2('924874', '鶴見大学図書館'),
			_Utils_Tuple2('924875', '天理教少年会本部'),
			_Utils_Tuple2('924876', '津村研究所'),
			_Utils_Tuple2('924877', '第一教研'),
			_Utils_Tuple2('924879', '電材流通新聞社'),
			_Utils_Tuple2('924881', '中国語文研究会'),
			_Utils_Tuple2('924882', '多摩川新聞社'),
			_Utils_Tuple2('924883', '千葉県史料研究財団'),
			_Utils_Tuple2('924884', '大成建設図書管理室'),
			_Utils_Tuple2('924885', '地方公論社'),
			_Utils_Tuple2('924887', '大学教育研究所'),
			_Utils_Tuple2('924888', 'タカラ出版サービス'),
			_Utils_Tuple2('924889', 'ティエスシー'),
			_Utils_Tuple2('924890', 'ティー・アイ・シィー'),
			_Utils_Tuple2('924891', '待望社'),
			_Utils_Tuple2('924892', '東北電力'),
			_Utils_Tuple2('924893', '中部ブレイントラスト'),
			_Utils_Tuple2('924894', '東京システムアシスト'),
			_Utils_Tuple2('924895', '中央学院大学アクティブセンター出版編集部'),
			_Utils_Tuple2('924896', '東旺出版'),
			_Utils_Tuple2('924897', '東北振興研修所'),
			_Utils_Tuple2('924898', '城俊幸（タチトシユキ）'),
			_Utils_Tuple2('924899', '大巧社'),
			_Utils_Tuple2('924900', '図書館計画施設研究所'),
			_Utils_Tuple2('924901', 'ティーエーシー'),
			_Utils_Tuple2('924902', '知人社'),
			_Utils_Tuple2('924903', 'トライエックス'),
			_Utils_Tuple2('924904', '東京貞山会出版部'),
			_Utils_Tuple2('924905', '都市交通問題調査会'),
			_Utils_Tuple2('924906', '豊橋市自然史博物館'),
			_Utils_Tuple2('924907', 'ＴＩＪ東京日本語研修所'),
			_Utils_Tuple2('924908', 'メディカルカルチュア'),
			_Utils_Tuple2('924909', '東北レジャー情報'),
			_Utils_Tuple2('924911', 'タウンネットワーク'),
			_Utils_Tuple2('924912', '平電子印刷所出版部纂修堂'),
			_Utils_Tuple2('924913', '東京出版'),
			_Utils_Tuple2('924914', 'インターブックス'),
			_Utils_Tuple2('924915', '通販新聞社'),
			_Utils_Tuple2('924916', '天山舎'),
			_Utils_Tuple2('924917', '豊田文化堂'),
			_Utils_Tuple2('924918', '徳島印刷センター'),
			_Utils_Tuple2('924919', '地域産業研究所'),
			_Utils_Tuple2('924921', '十一法日本'),
			_Utils_Tuple2('924922', '東海ラジオ放送'),
			_Utils_Tuple2('924923', '治水社'),
			_Utils_Tuple2('924924', '超科学技術研究所'),
			_Utils_Tuple2('924925', 'デイブレイク出版事業部'),
			_Utils_Tuple2('924926', 'ディフェンスリサーチセンター'),
			_Utils_Tuple2('924927', 'ダンス・トラックス・データ・ネットワーク'),
			_Utils_Tuple2('924928', '電子出版情報センター'),
			_Utils_Tuple2('924929', '長征社'),
			_Utils_Tuple2('924931', 'シティライフニュー'),
			_Utils_Tuple2('924932', 'チャイナワーク'),
			_Utils_Tuple2('924933', '土地改良技術情報センター'),
			_Utils_Tuple2('924934', 'ブリタニカ・ジャパン'),
			_Utils_Tuple2('924935', '田園都市出版'),
			_Utils_Tuple2('924936', '東京コア'),
			_Utils_Tuple2('924939', '智蓮神道'),
			_Utils_Tuple2('924940', '幻視者社'),
			_Utils_Tuple2('924941', 'チューブエキスパーツ'),
			_Utils_Tuple2('924942', '東京文芸館'),
			_Utils_Tuple2('924943', 'たけはらプリントメディカート'),
			_Utils_Tuple2('924944', '東京都市計画社'),
			_Utils_Tuple2('924945', 'トムドゥ'),
			_Utils_Tuple2('924946', '東放出版'),
			_Utils_Tuple2('924947', 'ＴＫＣ出版'),
			_Utils_Tuple2('924948', '天満書房'),
			_Utils_Tuple2('924949', 'ＴＡＣ言語文化研究所'),
			_Utils_Tuple2('924950', 'メディア・ネオ'),
			_Utils_Tuple2('924951', '中央学術研究所'),
			_Utils_Tuple2('924952', 'ティー・シー・アール・シー'),
			_Utils_Tuple2('924953', '日本教育システム開発協会'),
			_Utils_Tuple2('924954', '東洋学術出版社'),
			_Utils_Tuple2('924955', 'トーキョーセブン出版事業部'),
			_Utils_Tuple2('924957', 'テスミックシステムズ'),
			_Utils_Tuple2('924958', 'エー・ティ・エー'),
			_Utils_Tuple2('924959', 'トイパッククリエーション'),
			_Utils_Tuple2('924960', '第１４回ダイオキシン国際会議組織委員会'),
			_Utils_Tuple2('924961', '大曜'),
			_Utils_Tuple2('924962', '巴コーポレーション'),
			_Utils_Tuple2('924963', '地方自治研究所'),
			_Utils_Tuple2('924964', '東海出版社'),
			_Utils_Tuple2('924965', '東京都江戸東京博物館'),
			_Utils_Tuple2('924966', '豊橋文化協会'),
			_Utils_Tuple2('924967', '第一プランニングセンター'),
			_Utils_Tuple2('924968', '宝塚出版社'),
			_Utils_Tuple2('924969', 'トワイライトエクスプレス'),
			_Utils_Tuple2('924970', '伝文社'),
			_Utils_Tuple2('924971', '国際文化会館'),
			_Utils_Tuple2('924972', 'たましん地域文化財団'),
			_Utils_Tuple2('924973', '著作権保護協会出版部'),
			_Utils_Tuple2('924974', '地球・人間環境フォーラム'),
			_Utils_Tuple2('924975', '東音企画'),
			_Utils_Tuple2('924976', 'テラ出版'),
			_Utils_Tuple2('924977', 'タンクロー出版'),
			_Utils_Tuple2('924978', 'チュンソフト'),
			_Utils_Tuple2('924979', '東方書林'),
			_Utils_Tuple2('924980', '東京ミッション研究所'),
			_Utils_Tuple2('924981', 'ツーワンライフ'),
			_Utils_Tuple2('924982', '東京学芸大学教育学部第３部(自然科学系)'),
			_Utils_Tuple2('924983', '豊田都市交通研究所'),
			_Utils_Tuple2('924984', 'ダゲレオ出版'),
			_Utils_Tuple2('924985', 'ＴＯＭＯＥ'),
			_Utils_Tuple2('924986', '樽書房'),
			_Utils_Tuple2('924987', '東京メディカル出版'),
			_Utils_Tuple2('924988', 'ティーディーシーソフトウェアエンジニアリング'),
			_Utils_Tuple2('924989', 'たばこと塩の博物館'),
			_Utils_Tuple2('924990', '図書出版路傍社'),
			_Utils_Tuple2('924991', 'デンタルリサーチ社'),
			_Utils_Tuple2('924992', 'トーア総合企画社'),
			_Utils_Tuple2('924993', '大和出版社'),
			_Utils_Tuple2('924994', 'とりい書房'),
			_Utils_Tuple2('924995', 'タケハヤ'),
			_Utils_Tuple2('924996', 'ダスキン'),
			_Utils_Tuple2('924997', '東京テキスタイル研究所'),
			_Utils_Tuple2('924998', 'テクノプレス'),
			_Utils_Tuple2('925000', '道路厚生会'),
			_Utils_Tuple2('925001', 'テラ・コーポレーション'),
			_Utils_Tuple2('925002', 'テクニカルライターユニオン'),
			_Utils_Tuple2('925003', '中外日報社'),
			_Utils_Tuple2('925004', '第三通信社'),
			_Utils_Tuple2('925006', '大海社'),
			_Utils_Tuple2('925007', 'ドット'),
			_Utils_Tuple2('925008', 'トータル・プランニング'),
			_Utils_Tuple2('925009', '東洋醫學薬學古典研究會'),
			_Utils_Tuple2('925010', '東京ビデオサービス'),
			_Utils_Tuple2('925011', '東京グラフィック・アーツ'),
			_Utils_Tuple2('925012', '中部大学'),
			_Utils_Tuple2('925013', '電子開発学園'),
			_Utils_Tuple2('925014', '竹田事務所'),
			_Utils_Tuple2('925015', 'テラダ商電'),
			_Utils_Tuple2('925016', 'ティーズ・ティ'),
			_Utils_Tuple2('925017', 'トヨタ財団'),
			_Utils_Tuple2('925018', '中萬学院'),
			_Utils_Tuple2('925019', '東京ヘレン・ケラー協会'),
			_Utils_Tuple2('925021', '徴古堂'),
			_Utils_Tuple2('925022', '千葉市美術館'),
			_Utils_Tuple2('925023', '電波タイムス社'),
			_Utils_Tuple2('925024', 'タワラヤプラン'),
			_Utils_Tuple2('925025', '鳥海書房'),
			_Utils_Tuple2('925026', '高遠書房'),
			_Utils_Tuple2('925027', 'テレシスネットワーク'),
			_Utils_Tuple2('925028', '東洋印刷'),
			_Utils_Tuple2('925029', '東京リスマチック中国情報センター'),
			_Utils_Tuple2('925030', 'タイガーエンタープライズ'),
			_Utils_Tuple2('925031', '大学サービス出版部'),
			_Utils_Tuple2('925032', '東京顕微鏡院'),
			_Utils_Tuple2('925033', '太陽学院出版'),
			_Utils_Tuple2('925034', '大東文化大学現代アジア研究所'),
			_Utils_Tuple2('925035', 'タッグ'),
			_Utils_Tuple2('925036', 'デジタル・メディア・ラボ'),
			_Utils_Tuple2('925037', 'デジテック'),
			_Utils_Tuple2('925038', 'ディスカバリーファーム'),
			_Utils_Tuple2('925039', '大日本印刷'),
			_Utils_Tuple2('925040', 'タマ・エンタープライズ'),
			_Utils_Tuple2('925041', '第二海援隊'),
			_Utils_Tuple2('925042', 'ダン社'),
			_Utils_Tuple2('925043', 'デカルト出版'),
			_Utils_Tuple2('925044', '東北の建設産業の明日を考える会'),
			_Utils_Tuple2('925045', 'テレビ新潟放送網'),
			_Utils_Tuple2('925046', '東北国際文化教育研究所'),
			_Utils_Tuple2('925048', '東芝情報システム'),
			_Utils_Tuple2('925049', 'テイエムエス'),
			_Utils_Tuple2('925050', 'トワイライトエクスプレス'),
			_Utils_Tuple2('925051', 'たてき出版'),
			_Utils_Tuple2('925052', 'トロイ'),
			_Utils_Tuple2('925053', '（株）大活字'),
			_Utils_Tuple2('925054', '長江舎'),
			_Utils_Tuple2('925055', 'トリワークス'),
			_Utils_Tuple2('925056', '東北大学工学部地球工学科'),
			_Utils_Tuple2('925057', '風出版'),
			_Utils_Tuple2('925058', '道新スポーツ'),
			_Utils_Tuple2('925059', '地域がん登録全国協議会'),
			_Utils_Tuple2('925060', '東京・沖縄・東アジア社会教育研究会'),
			_Utils_Tuple2('925061', 'テン'),
			_Utils_Tuple2('925062', '登奈海印刷'),
			_Utils_Tuple2('925063', '政経ニュース社'),
			_Utils_Tuple2('925064', 'ディスクユニオン'),
			_Utils_Tuple2('925065', '東京企画'),
			_Utils_Tuple2('925066', 'デジタルプレス'),
			_Utils_Tuple2('925067', '朝鮮新報社'),
			_Utils_Tuple2('925068', 'ウィッティウルフ'),
			_Utils_Tuple2('925069', '地域科学研究会'),
			_Utils_Tuple2('925070', '筑波教育出版社'),
			_Utils_Tuple2('925071', '時田製本印刷出版部'),
			_Utils_Tuple2('925072', '滝発行所'),
			_Utils_Tuple2('925073', 'デンタルフォーラム'),
			_Utils_Tuple2('925074', '千野'),
			_Utils_Tuple2('925076', 'テレビ山口'),
			_Utils_Tuple2('925077', '所沢福音キリスト教会'),
			_Utils_Tuple2('925078', 'タマディー・ティー・ピー'),
			_Utils_Tuple2('925079', '統計情報研究開発センター'),
			_Utils_Tuple2('925081', '東京都専修学校各種学校協会'),
			_Utils_Tuple2('925082', '高松源一郎（晴耕雨読）'),
			_Utils_Tuple2('925083', 'ディオス'),
			_Utils_Tuple2('925084', '東京大学大学院人文社会系研究科日本史学研究室'),
			_Utils_Tuple2('925085', '東北大学出版会'),
			_Utils_Tuple2('925086', '立原道造記念館'),
			_Utils_Tuple2('925087', 'とほネットワーク旅人宿の会'),
			_Utils_Tuple2('925088', '東洋紡パッケージング・プラン・サービス'),
			_Utils_Tuple2('925089', '寺田国際事務所／先端医療技術研究所'),
			_Utils_Tuple2('925090', '東方文化'),
			_Utils_Tuple2('925091', '竹田事務所'),
			_Utils_Tuple2('925092', '東海出版社'),
			_Utils_Tuple2('925093', 'テトラネット'),
			_Utils_Tuple2('925094', 'ＤＡＮぼ'),
			_Utils_Tuple2('925095', 'とっても便利出版部'),
			_Utils_Tuple2('925096', '東京海天'),
			_Utils_Tuple2('925097', 'タロウ企画出版'),
			_Utils_Tuple2('925098', '知碩書院'),
			_Utils_Tuple2('925099', '飛島建設'),
			_Utils_Tuple2('925100', '独立書人団'),
			_Utils_Tuple2('925101', '貴貴'),
			_Utils_Tuple2('925102', 'オーラルケア'),
			_Utils_Tuple2('925103', '東京カートグラフィック'),
			_Utils_Tuple2('92510486112', '大日本スクリーン製造'),
			_Utils_Tuple2('925105', '電算出版企画'),
			_Utils_Tuple2('925106', 'トウデイ'),
			_Utils_Tuple2('925107', 'トランスコム・ジャパン'),
			_Utils_Tuple2('925108', 'てらいんく'),
			_Utils_Tuple2('925109', 'ＴｙｐｅＴｅｃｈＣｏｍｍｕｎｉｃａｔｉｏｎｓ'),
			_Utils_Tuple2('925110', '電通パブリックリレーションズ'),
			_Utils_Tuple2('925111', 'たけしま出版'),
			_Utils_Tuple2('925112', 'トランスワールドジャパン'),
			_Utils_Tuple2('925113', '天台宗典編纂所'),
			_Utils_Tuple2('925114', '東芝ドキュメンツ'),
			_Utils_Tuple2('925115', '賃貸住宅ニュース社'),
			_Utils_Tuple2('925116', '東京ＹＭＣＡ'),
			_Utils_Tuple2('925117', '東京富士美術館'),
			_Utils_Tuple2('925119', 'Ｄｉｇｉｔａｌ Ｉｎｄｉｅｓ'),
			_Utils_Tuple2('925120', 'ダックス'),
			_Utils_Tuple2('925121', '地中海歴史風土研究所'),
			_Utils_Tuple2('925122', '高浜印刷'),
			_Utils_Tuple2('925123', 'ディーエヌ'),
			_Utils_Tuple2('925124', 'つくばクリスチャンセンター'),
			_Utils_Tuple2('925125', 'ティ・アイ・ピィー'),
			_Utils_Tuple2('925126', '中国文化出版センター'),
			_Utils_Tuple2('925127', 'ディサイプルシップ・パブリケーションズ・ジャパン'),
			_Utils_Tuple2('925128', 'トーホー書院'),
			_Utils_Tuple2('925130', '立山の花グループ'),
			_Utils_Tuple2('925131', '千明Ｄｏ'),
			_Utils_Tuple2('925132', '東京外語学園日本語学校'),
			_Utils_Tuple2('925133', '耐火物技術協会'),
			_Utils_Tuple2('925134', 'テクライツ'),
			_Utils_Tuple2('925135', 'ＴＵＦＩｎｔｅｒｎａｔｉｏｎａｌＪＳＰＳＰｒｏｊｅｃｔ'),
			_Utils_Tuple2('925136', 'ＤＮＡ医学研究所'),
			_Utils_Tuple2('925137', 'タスク・システムプロモーション'),
			_Utils_Tuple2('925138', '藤夢'),
			_Utils_Tuple2('925139', '道路緑化保全協会'),
			_Utils_Tuple2('925140', 'デジタルハリウッド出版局'),
			_Utils_Tuple2('925141', 'タイタニック・エキジビション・ジャパン'),
			_Utils_Tuple2('925142', '秩父路書房'),
			_Utils_Tuple2('925143', '電子メディアサービス'),
			_Utils_Tuple2('925144', 'ディジット'),
			_Utils_Tuple2('925145', '東京メディア出版'),
			_Utils_Tuple2('925146', '東洋ビデオ愛媛'),
			_Utils_Tuple2('925147', '徳田屋書店(鹿児島地図センター)'),
			_Utils_Tuple2('925148', '虎の穴ＦＯＸ出版'),
			_Utils_Tuple2('925149', '高島易断総本部神聖館'),
			_Utils_Tuple2('925150', 'タイスケ'),
			_Utils_Tuple2('925152', '投資レーダー'),
			_Utils_Tuple2('925153', '中央システム技研'),
			_Utils_Tuple2('925154', 'デュウ出版'),
			_Utils_Tuple2('925155', 'どりむ社'),
			_Utils_Tuple2('925156', '図書館情報大学'),
			_Utils_Tuple2('925157', 'トランク出版'),
			_Utils_Tuple2('925158', 'トップ'),
			_Utils_Tuple2('925159', 'トランスペース出版'),
			_Utils_Tuple2('925160', 'ＴＲＩＣＯＲＯＬＬ ＢＯＯＫＳ'),
			_Utils_Tuple2('925161', '東京経済'),
			_Utils_Tuple2('925162', 'テレマック'),
			_Utils_Tuple2('925164', '通訳センター'),
			_Utils_Tuple2('925165', 'ＤＡＮＫ'),
			_Utils_Tuple2('925166', '東京アイエムシー'),
			_Utils_Tuple2('925167', '高橋印刷'),
			_Utils_Tuple2('925170', '読書館'),
			_Utils_Tuple2('925171', '東洋大学国際交流センター'),
			_Utils_Tuple2('925172', '中央書林'),
			_Utils_Tuple2('925173', 'ＷＨＯ健康都市研究協力センター'),
			_Utils_Tuple2('925174', 'タマエ出版'),
			_Utils_Tuple2('925175', 'ＴＬＳ出版'),
			_Utils_Tuple2('925176', 'Ｔ・Ａ・Ｓ出版'),
			_Utils_Tuple2('925177', 'タラントン'),
			_Utils_Tuple2('925178', '独日情報研究室'),
			_Utils_Tuple2('925179', '第一印刷'),
			_Utils_Tuple2('925180', 'トール'),
			_Utils_Tuple2('92518186129', 'たにぐち書店'),
			_Utils_Tuple2('925182', 'ＴＯＰＩＡＲＹ Ｓｈｏｐ'),
			_Utils_Tuple2('925183', 'デジタルファクトリ'),
			_Utils_Tuple2('925184', '堤音楽院'),
			_Utils_Tuple2('925185', '醍醐書房'),
			_Utils_Tuple2('925186', 'デジタルアーツＲＡＦ社'),
			_Utils_Tuple2('925187', '東京文献センター'),
			_Utils_Tuple2('925188902128', 'タクト・ワン'),
			_Utils_Tuple2('925189', '東広出版部'),
			_Utils_Tuple2('925190', '泰斗舎'),
			_Utils_Tuple2('925191', '東洋出版'),
			_Utils_Tuple2('925192', 'ドリームクエスト'),
			_Utils_Tuple2('925193', '第一出版社'),
			_Utils_Tuple2('925194', 'データ分析研究所'),
			_Utils_Tuple2('925195', '地域流通経済研究所'),
			_Utils_Tuple2('925196', 'ティ・プライム'),
			_Utils_Tuple2('925197', '太陽文化の会'),
			_Utils_Tuple2('925198', '丹桂社'),
			_Utils_Tuple2('925199', 'トリム楽譜出版'),
			_Utils_Tuple2('925200', 'データジャパン'),
			_Utils_Tuple2('925201', 'ＴＯＰランゲージ日本語研究会'),
			_Utils_Tuple2('925202', 'ティー・エー・ビー'),
			_Utils_Tuple2('925203', '稲文舎'),
			_Utils_Tuple2('925204', '東京オペラシティ文化財団'),
			_Utils_Tuple2('925205', 'ダビデ社'),
			_Utils_Tuple2('925206', '太陽プロジェクト'),
			_Utils_Tuple2('925207', '東海出版'),
			_Utils_Tuple2('925209', 'たまご書房'),
			_Utils_Tuple2('925210', '東京大学大学院人文社会系研究科'),
			_Utils_Tuple2('925211', '智水'),
			_Utils_Tuple2('925212', '匠出版'),
			_Utils_Tuple2('925213', 'ティ・エッチ・ピー'),
			_Utils_Tuple2('925214', 'トトロのふるさと財団'),
			_Utils_Tuple2('925215', '大東印刷工業'),
			_Utils_Tuple2('925216', '中国地方総合研究センター'),
			_Utils_Tuple2('925217', '地域サービス'),
			_Utils_Tuple2('925218', 'ディスグラフィ'),
			_Utils_Tuple2('925220', '冬弓舎'),
			_Utils_Tuple2('925221', 'トライ・エックス'),
			_Utils_Tuple2('925222', '中部文芸出版社'),
			_Utils_Tuple2('925223', '豊田町香りの博物館'),
			_Utils_Tuple2('925224', '東京大学情報処理ナビゲーター編集委員会'),
			_Utils_Tuple2('925225', 'デジタル・データ・サプライ'),
			_Utils_Tuple2('925226', '第一メディカル'),
			_Utils_Tuple2('925227', 'デイ・シー・エス'),
			_Utils_Tuple2('925228', 'ドーマン研究所'),
			_Utils_Tuple2('925229', '太陽エージェンシー'),
			_Utils_Tuple2('925230', 'タム'),
			_Utils_Tuple2('925231', 'ティアンドティ・デザインラボ'),
			_Utils_Tuple2('925232', '太鼓センター'),
			_Utils_Tuple2('925233', '高島屋'),
			_Utils_Tuple2('925234', '東京バッハ合唱団'),
			_Utils_Tuple2('925235', '東京都立大学出版会'),
			_Utils_Tuple2('925236', '冬花社'),
			_Utils_Tuple2('925237', '地域メディア研究所'),
			_Utils_Tuple2('925238', '東京大学生産技術研究所今井研究室'),
			_Utils_Tuple2('925239', '東京黎明教会'),
			_Utils_Tuple2('925240', 'チルドレン・オブ・ディ・アース'),
			_Utils_Tuple2('925241', '妻木電子情報印刷'),
			_Utils_Tuple2('925242', 'テア'),
			_Utils_Tuple2('925243', '東京外国語大学'),
			_Utils_Tuple2('925244', '東京聖書教会'),
			_Utils_Tuple2('925245', '辻埜プランニングオフィス'),
			_Utils_Tuple2('925246', '同朋大学”いのちの教育”センター'),
			_Utils_Tuple2('925247', '帝塚山大学'),
			_Utils_Tuple2('925248', '中文導報出版社'),
			_Utils_Tuple2('925249', '地の塩書房'),
			_Utils_Tuple2('925250', 'テラメカニックス研究会'),
			_Utils_Tuple2('925251', 'とびら社'),
			_Utils_Tuple2('925252', 'テクスト'),
			_Utils_Tuple2('925253', '１万年堂出版'),
			_Utils_Tuple2('925254', 'Ｓｐｏｒｔｓ Ｃａｒ Ｒａｃｉｎｇ Ｇｒｏｕｐ'),
			_Utils_Tuple2('925255', '東京印刷'),
			_Utils_Tuple2('925256', 'テクノ'),
			_Utils_Tuple2('925257', '東急百貨店通信販売部'),
			_Utils_Tuple2('925258', 'チャイルド社'),
			_Utils_Tuple2('930677', '内外交易'),
			_Utils_Tuple2('930678', '内外出版社'),
			_Utils_Tuple2('930679', '内外事情研究所'),
			_Utils_Tuple2('930680', '内外労働問題研究所'),
			_Utils_Tuple2('930681', '日刊福井'),
			_Utils_Tuple2('930682', '中岡書店'),
			_Utils_Tuple2('930683', '中島甲一'),
			_Utils_Tuple2('930684', '中田商店'),
			_Utils_Tuple2('930685', '中出敦子'),
			_Utils_Tuple2('930686', '中日本スポーツ研究会'),
			_Utils_Tuple2('930687', '中日本蜻蛉談話会'),
			_Utils_Tuple2('930688', '中野点字出版所'),
			_Utils_Tuple2('930690', '中村地図研究所'),
			_Utils_Tuple2('930691', '中村出版社'),
			_Utils_Tuple2('930692', '中村書店'),
			_Utils_Tuple2('930693', '中村利之'),
			_Utils_Tuple2('930694', '長岡郷土史研究会'),
			_Utils_Tuple2('930696', 'ながさわ・しんきち'),
			_Utils_Tuple2('930697', '長岡ペンクラブ'),
			_Utils_Tuple2('930699', 'ナガリ書店'),
			_Utils_Tuple2('930700', '菜殻火発行所'),
			_Utils_Tuple2('930701', '夏草発行所'),
			_Utils_Tuple2('930702', '夏書館'),
			_Utils_Tuple2('930703', 'ナショナル出版'),
			_Utils_Tuple2('930704', 'なにわ書房'),
			_Utils_Tuple2('930705', '浪速書林'),
			_Utils_Tuple2('930707', '寧楽書房'),
			_Utils_Tuple2('930708', '成瀬書房'),
			_Utils_Tuple2('930709', '南海政治経済研究所'),
			_Utils_Tuple2('930710', '南海ブックス'),
			_Utils_Tuple2('930711', 'ニューエラパブリケーションズインターナショナル'),
			_Utils_Tuple2('930712', '南都仏教研究会'),
			_Utils_Tuple2('930713', 'ナンバーワン出版'),
			_Utils_Tuple2('930714', '南風発行所'),
			_Utils_Tuple2('930715', '南明社'),
			_Utils_Tuple2('930716', '南洋堂書店'),
			_Utils_Tuple2('930717', '日本監査役協会'),
			_Utils_Tuple2('930718', '新潟大学方言研究会'),
			_Utils_Tuple2('930719', '新島料理学院'),
			_Utils_Tuple2('930720', '西井弘之'),
			_Utils_Tuple2('930721', '西沢書店'),
			_Utils_Tuple2('930722', '西田通夫'),
			_Utils_Tuple2('930723', '西図協出版'),
			_Utils_Tuple2('930724', '西日本文化協会'),
			_Utils_Tuple2('930725', '西村商事'),
			_Utils_Tuple2('930726', '西村書店'),
			_Utils_Tuple2('930727', '虹出版'),
			_Utils_Tuple2('930728', '二十世紀社'),
			_Utils_Tuple2('930729', '２０世紀文学研究会'),
			_Utils_Tuple2('930730', 'ニスコ'),
			_Utils_Tuple2('930731', '日月書店'),
			_Utils_Tuple2('930732', 'ニーズ'),
			_Utils_Tuple2('930733', '日本奉仕センター'),
			_Utils_Tuple2('930734', '日刊海事通信社'),
			_Utils_Tuple2('930735', '日刊経済新聞社'),
			_Utils_Tuple2('930736', '日韓経済新聞社'),
			_Utils_Tuple2('930737', '日刊建設工業新聞社'),
			_Utils_Tuple2('930738', '日刊建設通信新聞社'),
			_Utils_Tuple2('930740', '日刊電気通信社'),
			_Utils_Tuple2('930741', '日本ダイレクト'),
			_Utils_Tuple2('930742', '日刊木材新聞社'),
			_Utils_Tuple2('930743', '日刊労働通信社'),
			_Utils_Tuple2('930744', '日教出版'),
			_Utils_Tuple2('930745', '日経広告研究所'),
			_Utils_Tuple2('930747', '日研'),
			_Utils_Tuple2('930748', '日興リサーチセンター'),
			_Utils_Tuple2('930749', 'エヌ・イー・エス'),
			_Utils_Tuple2('930751', '日正堂'),
			_Utils_Tuple2('930752', '日照堂'),
			_Utils_Tuple2('930753', '日新書房'),
			_Utils_Tuple2('930754', '日月出版社'),
			_Utils_Tuple2('930755', '日世企画'),
			_Utils_Tuple2('930756', '日世社'),
			_Utils_Tuple2('930757', '整研出版社'),
			_Utils_Tuple2('930758', '日ソ協会福岡県連合会'),
			_Utils_Tuple2('930759', '日本綜合経済社'),
			_Utils_Tuple2('930760', '日中弘報社'),
			_Utils_Tuple2('930761', '日本郷土史刊行会'),
			_Utils_Tuple2('930762', '日朝協会埼玉県連合会'),
			_Utils_Tuple2('930763', '名古屋商科大学'),
			_Utils_Tuple2('930764', '日東企画工芸'),
			_Utils_Tuple2('930765', '日本ビジネス社'),
			_Utils_Tuple2('930766', '日販メディア'),
			_Utils_Tuple2('930768', '二戸タイムス社'),
			_Utils_Tuple2('930769', '二人発行所'),
			_Utils_Tuple2('930770', '二松学舎大学佐古研究室'),
			_Utils_Tuple2('930771', '日本名書出版'),
			_Utils_Tuple2('930772', '日本アートセンター'),
			_Utils_Tuple2('930774', '日本アイ・ピー・エス'),
			_Utils_Tuple2('930775', '日本アビリティーズ協会'),
			_Utils_Tuple2('930776', '日本アルミニウム協会'),
			_Utils_Tuple2('930777', 'ニットー・コミュニケーションズ'),
			_Utils_Tuple2('930778', '日本医学文化保存会'),
			_Utils_Tuple2('930779', '日本医学放射線学会'),
			_Utils_Tuple2('930780', '日本育種学会'),
			_Utils_Tuple2('930781', '日本移動教室協会'),
			_Utils_Tuple2('930782', '日本印書技能研究所'),
			_Utils_Tuple2('930783', '日本国際医療団・東南アジア医療情報'),
			_Utils_Tuple2('930784', '日本視聴覚教育協会'),
			_Utils_Tuple2('930785', '日本エスペラント図書刊行会'),
			_Utils_Tuple2('930786', '日本栄養・食糧学会'),
			_Utils_Tuple2('930787', '日本エディターズ'),
			_Utils_Tuple2('930788', '日本園芸農業協同組合連合会'),
			_Utils_Tuple2('930789', '日本演劇教育連盟'),
			_Utils_Tuple2('930790', '日本演劇協会'),
			_Utils_Tuple2('930791', '日本オーディオ'),
			_Utils_Tuple2('930792', '日本オステオパシー協会'),
			_Utils_Tuple2('930793', '日本オペレーションズ・リサーチ学会'),
			_Utils_Tuple2('930794', 'ジェーアンドジェー・コーポレーション'),
			_Utils_Tuple2('930796', '日本音声学会'),
			_Utils_Tuple2('930797', '日本温泉協会'),
			_Utils_Tuple2('930798', '日本海運集会所'),
			_Utils_Tuple2('930799', '日本海事新聞社'),
			_Utils_Tuple2('930800', '日本海短歌会'),
			_Utils_Tuple2('930801', '日本化学会'),
			_Utils_Tuple2('930802', '日本科学協会'),
			_Utils_Tuple2('930803', '日本科学技術振興財団'),
			_Utils_Tuple2('930804', '日本科学飼料協会'),
			_Utils_Tuple2('930805', '日本河川協会'),
			_Utils_Tuple2('930806', '日本河川協会'),
			_Utils_Tuple2('930807', '日本家族計画協会'),
			_Utils_Tuple2('930808', '日本活性汚泥センター出版部'),
			_Utils_Tuple2('930810', '日本貨幣商協同組合'),
			_Utils_Tuple2('930811', '日本歌謡芸術協会'),
			_Utils_Tuple2('930812', '日本キリスト教団柿ノ木坂教会'),
			_Utils_Tuple2('930814', '日本学術通信社'),
			_Utils_Tuple2('930815', '日本楽器'),
			_Utils_Tuple2('930816', '日本電信電話ユーザ協会'),
			_Utils_Tuple2('930817', '根津美術館'),
			_Utils_Tuple2('930818', '日本給食技術協会'),
			_Utils_Tuple2('930819', '日本教育科学研究所'),
			_Utils_Tuple2('930820', '日本教育システム'),
			_Utils_Tuple2('930822', '日本教育センター出版局'),
			_Utils_Tuple2('930823', '日本教育テレビサービス'),
			_Utils_Tuple2('930824', '日本教育版画協会'),
			_Utils_Tuple2('930825', '日鉄技術情報センター'),
			_Utils_Tuple2('930827', 'ニューベリハウスパブリシャーズインターナショナルＩｎｃ'),
			_Utils_Tuple2('930828', '日本キリスト教書販売'),
			_Utils_Tuple2('930829', '日本勤労者山岳連盟出版局'),
			_Utils_Tuple2('930830', '日本積算学会出版部'),
			_Utils_Tuple2('930831', 'フローラル出版'),
			_Utils_Tuple2('930832', '日本空調衛生工事業協会'),
			_Utils_Tuple2('930833', '日本空調技術出版社'),
			_Utils_Tuple2('930834', '日本クリーニング界社'),
			_Utils_Tuple2('930835', '日本クリエート社'),
			_Utils_Tuple2('930836', '日本経営開発センター'),
			_Utils_Tuple2('930837', '日本経営科学研究所'),
			_Utils_Tuple2('930839', '日本経営新聞社'),
			_Utils_Tuple2('930840', '日本経営通信社'),
			_Utils_Tuple2('930841', '日本経済新報社'),
			_Utils_Tuple2('930842', '日本経済研究所'),
			_Utils_Tuple2('930843', '日本経済青年協議会'),
			_Utils_Tuple2('930844', '日本経済調査局'),
			_Utils_Tuple2('930845', '日本結核病学会'),
			_Utils_Tuple2('930846', '日本研究社'),
			_Utils_Tuple2('930847', '日本建設機械化協会'),
			_Utils_Tuple2('930848', '日本建設新聞社'),
			_Utils_Tuple2('930849', '日本建築協会'),
			_Utils_Tuple2('930850', '日本建築積算協会'),
			_Utils_Tuple2('930851', '日本建築大工技能士会'),
			_Utils_Tuple2('930852', '日本ゲーテ協会'),
			_Utils_Tuple2('930853', '日本高圧技術協会'),
			_Utils_Tuple2('930854', '日本広報協会'),
			_Utils_Tuple2('930855', '日本工業用水協会'),
			_Utils_Tuple2('930856', '日本工業炉協会'),
			_Utils_Tuple2('930857', '日本航空宇宙学会'),
			_Utils_Tuple2('930859', '日本光芸'),
			_Utils_Tuple2('930860', '日本厚生通信社'),
			_Utils_Tuple2('930861', '日本視聴覚教材センター'),
			_Utils_Tuple2('930862', '日本広報センター'),
			_Utils_Tuple2('930863', '日本工房'),
			_Utils_Tuple2('930864', '日本国語教育学会'),
			_Utils_Tuple2('930865', '日本国際政治学会'),
			_Utils_Tuple2('930866', '日本国際地図学会'),
			_Utils_Tuple2('930867', '日本国際貿易促進協会'),
			_Utils_Tuple2('930868', '日本国際連合協会'),
			_Utils_Tuple2('930869', '日本古城友の会城郭文庫'),
			_Utils_Tuple2('930870', '日本国会年鑑編纂会'),
			_Utils_Tuple2('930871', '日本こどもを守る会'),
			_Utils_Tuple2('930872', '子どもの本棚社'),
			_Utils_Tuple2('930873', '日本コロムビア'),
			_Utils_Tuple2('930874', '日本幼少児健康教育学会西日本学会'),
			_Utils_Tuple2('930875', '日本コンサルティングセンター'),
			_Utils_Tuple2('930876', '日本合成樹脂技術協会'),
			_Utils_Tuple2('930877', '日本蚕糸広報協会'),
			_Utils_Tuple2('930878', '日本蚕糸新聞社'),
			_Utils_Tuple2('930879', '日本経済研究所'),
			_Utils_Tuple2('930880', '日本材料強度学会'),
			_Utils_Tuple2('930881', 'ヒョーロン・パブリッシャーズ'),
			_Utils_Tuple2('930882', '日進書房'),
			_Utils_Tuple2('930883', '日本食品出版'),
			_Utils_Tuple2('930884', '日本詩人連盟'),
			_Utils_Tuple2('930885', '日本社会事業大学図書館'),
			_Utils_Tuple2('930887', '日本写真企画'),
			_Utils_Tuple2('930888', '日本写真協会'),
			_Utils_Tuple2('930889', '日本同和新報社'),
			_Utils_Tuple2('930890', '日本習字学会・東京美術文化協会'),
			_Utils_Tuple2('930891', '日本出版社'),
			_Utils_Tuple2('930893', 'ナレッジプレス'),
			_Utils_Tuple2('930894', '日本出版センター'),
			_Utils_Tuple2('930895', '日本春霞刀剣会'),
			_Utils_Tuple2('930896', '日本証券新聞社'),
			_Utils_Tuple2('930897', '日本商工出版'),
			_Utils_Tuple2('930898', '日本消費者協会'),
			_Utils_Tuple2('930899', '日本消費者連盟'),
			_Utils_Tuple2('930900', '日本職業指導協会'),
			_Utils_Tuple2('930901', '日本植物病理学会'),
			_Utils_Tuple2('930902', '日本高速情報印刷'),
			_Utils_Tuple2('930903', '日本ショッピングセンター協会'),
			_Utils_Tuple2('930904', '日本書店大学出版部'),
			_Utils_Tuple2('930905', '日本書道美術院'),
			_Utils_Tuple2('930906', '日本神経学会'),
			_Utils_Tuple2('930907', '日本新聞販売協会'),
			_Utils_Tuple2('930908', '日本新聞雑誌調査会'),
			_Utils_Tuple2('930910', '日本新薬'),
			_Utils_Tuple2('930911', '日本心理学会'),
			_Utils_Tuple2('930912', '日本中央新聞社'),
			_Utils_Tuple2('930913', '日本自身社'),
			_Utils_Tuple2('930914', 'ＮＯＶＡ出版'),
			_Utils_Tuple2('930915', '日本実業商工社'),
			_Utils_Tuple2('930917', '日本児童演劇協会'),
			_Utils_Tuple2('930918', '日本児童福祉協会'),
			_Utils_Tuple2('930919', 'こども未来財団'),
			_Utils_Tuple2('930920', '日本自動車会議所'),
			_Utils_Tuple2('930921', '日蘭学会'),
			_Utils_Tuple2('930922', '日本自動車ユーザーユニオン'),
			_Utils_Tuple2('930923', '日本児童図書出版協会'),
			_Utils_Tuple2('930924', '日本児童文学者協会'),
			_Utils_Tuple2('930925', '日本人事管理協会'),
			_Utils_Tuple2('930926', '日本城郭資料館出版会'),
			_Utils_Tuple2('930927', '日本ジャーナル出版'),
			_Utils_Tuple2('930928', '日本ジャーナリスト専門学校'),
			_Utils_Tuple2('930929', '日本獣医師会'),
			_Utils_Tuple2('930930', '日本住宅協会'),
			_Utils_Tuple2('930931', '日本住宅地図出版'),
			_Utils_Tuple2('930932', '日本トライボロジー学会'),
			_Utils_Tuple2('930933', '日本城郭協会'),
			_Utils_Tuple2('930934', '日本叙勲者協会'),
			_Utils_Tuple2('930935', '日本助産師会出版部'),
			_Utils_Tuple2('930936', '日本女子体育連盟'),
			_Utils_Tuple2('930937', '日本教会成長研修所'),
			_Utils_Tuple2('930938', '「日本人の海外活動に関する歴史的調査」の刊行を促進する会'),
			_Utils_Tuple2('930939', '日本水道協会'),
			_Utils_Tuple2('930940', '日本水路図誌'),
			_Utils_Tuple2('930941', '日本水道新聞社'),
			_Utils_Tuple2('930942', '日本スポーツ企画出版社'),
			_Utils_Tuple2('930943', '日本スポーツ出版社'),
			_Utils_Tuple2('930944', '日本生化学会'),
			_Utils_Tuple2('930945', '日本聖書神学校'),
			_Utils_Tuple2('930946', '日本政治経済研究所'),
			_Utils_Tuple2('930947', '日本青年出版社'),
			_Utils_Tuple2('930948', '日本精神遅滞教育研究会'),
			_Utils_Tuple2('930949', '日本生物教育学会徳島県支部'),
			_Utils_Tuple2('930950', '日本生理学会'),
			_Utils_Tuple2('930951', '日本石材工業新聞社'),
			_Utils_Tuple2('930952', '日本繊維意匠センター'),
			_Utils_Tuple2('930953', '日本繊維機械学会'),
			_Utils_Tuple2('930954', '日本繊維協議会'),
			_Utils_Tuple2('930955', '日本繊維研究会'),
			_Utils_Tuple2('930956', '日本繊維新聞社出版部'),
			_Utils_Tuple2('930957', '日本専門新聞協会'),
			_Utils_Tuple2('930958', '日本税経研究会'),
			_Utils_Tuple2('930959', '日本税務調査会'),
			_Utils_Tuple2('930960', '日本綜合教育機構'),
			_Utils_Tuple2('930961', '日本漕艇協会'),
			_Utils_Tuple2('930962', '中島'),
			_Utils_Tuple2('930963', '日本塑性加工学会'),
			_Utils_Tuple2('930964', '日本租税研究協会'),
			_Utils_Tuple2('930965', '日本速記協会'),
			_Utils_Tuple2('930966', '日本造船学会'),
			_Utils_Tuple2('930967', '日本造船工業会'),
			_Utils_Tuple2('930968', '新潟雪書房'),
			_Utils_Tuple2('930969', '日本建材情報センター'),
			_Utils_Tuple2('930970', '日本大学入試事務室'),
			_Utils_Tuple2('930971', '日本ダム協会'),
			_Utils_Tuple2('930972', '日本談義社'),
			_Utils_Tuple2('930973', '日本蓄針'),
			_Utils_Tuple2('930974', '日本中央競馬会'),
			_Utils_Tuple2('930975', '日本鳥学会'),
			_Utils_Tuple2('930976', '日本朝鮮研究所'),
			_Utils_Tuple2('930977', '日本著作権協議会'),
			_Utils_Tuple2('930978', '日本定形詩人会'),
			_Utils_Tuple2('930979', '日本テープ'),
			_Utils_Tuple2('930980', '日本鉄鋼協会'),
			_Utils_Tuple2('930981', '日本鉄鋼連盟'),
			_Utils_Tuple2('930982', '日本鉄道技術協会'),
			_Utils_Tuple2('930983', '日本鉄道図書'),
			_Utils_Tuple2('930984', '日本天文学会'),
			_Utils_Tuple2('930987', '日本色彩'),
			_Utils_Tuple2('930988', '日本国際コンサルタント'),
			_Utils_Tuple2('930989', '日本糖尿病学会'),
			_Utils_Tuple2('930990', '日本都市計画学会'),
			_Utils_Tuple2('930991', '日本都市センター'),
			_Utils_Tuple2('930992', '日本図書館研究会'),
			_Utils_Tuple2('930993', '日本図書販売'),
			_Utils_Tuple2('930994', '日本図書文化協会'),
			_Utils_Tuple2('930995', '日本土地区画整理協会'),
			_Utils_Tuple2('930996', '日本塗装技術協会'),
			_Utils_Tuple2('930997', '日本動物学会'),
			_Utils_Tuple2('930998', '日本動力協会'),
			_Utils_Tuple2('930999', '日本道路建設業協会'),
			_Utils_Tuple2('931000', '日本童話会'),
			_Utils_Tuple2('931001', '日本読書学会'),
			_Utils_Tuple2('931002', '日本読書新聞出版部'),
			_Utils_Tuple2('931003', '日本土壤肥料学会'),
			_Utils_Tuple2('931004', '日本内科学会'),
			_Utils_Tuple2('931005', '日本農業気象学会'),
			_Utils_Tuple2('931006', '日本農業新聞社'),
			_Utils_Tuple2('931007', '日本農芸化学会'),
			_Utils_Tuple2('931008', '日本農村調査会'),
			_Utils_Tuple2('931009', '日本農民文学会'),
			_Utils_Tuple2('931010', '日本農民新聞社'),
			_Utils_Tuple2('931011', '日本のローマ字社'),
			_Utils_Tuple2('931012', '日本醗酵工学会'),
			_Utils_Tuple2('931013', '日本バドミントン協会出版局'),
			_Utils_Tuple2('931014', '日本販売'),
			_Utils_Tuple2('931015', '日本バイオリズム協会'),
			_Utils_Tuple2('931016', 'ナンバーワン'),
			_Utils_Tuple2('931017', 'ニューゴスペル出版'),
			_Utils_Tuple2('931018', '日本非破壊検査協会'),
			_Utils_Tuple2('931019', '日本貿易振興会機械技術部'),
			_Utils_Tuple2('931020', '日本公法'),
			_Utils_Tuple2('931021', '日本美術会'),
			_Utils_Tuple2('931022', '日本美術工芸社'),
			_Utils_Tuple2('931023', '日本美術新報社'),
			_Utils_Tuple2('931024', '日本美術新社'),
			_Utils_Tuple2('931025', '日本ビタミン学会'),
			_Utils_Tuple2('931026', '日本ビルマ文化協会関東支部'),
			_Utils_Tuple2('931027', '日本ピアノ総合センター'),
			_Utils_Tuple2('931028', '日彫'),
			_Utils_Tuple2('931029', '日本婦人団体連合会'),
			_Utils_Tuple2('931030', '日本武道館'),
			_Utils_Tuple2('931031', '日本アルミット'),
			_Utils_Tuple2('931032', '日本文化興業出版販売'),
			_Utils_Tuple2('931034', '日本文学研究会'),
			_Utils_Tuple2('931035', '日本文学協会'),
			_Utils_Tuple2('931036', '日本分析化学会'),
			_Utils_Tuple2('931037', '日本ファイリング'),
			_Utils_Tuple2('931038', '日本フィルター社公害処理技術開発センター'),
			_Utils_Tuple2('931039', '日本プラスチック新報社'),
			_Utils_Tuple2('931040', 'アイウィル'),
			_Utils_Tuple2('931041', '日刊プロスポーツ新聞社'),
			_Utils_Tuple2('931042', '日本平和委員会'),
			_Utils_Tuple2('931043', '日本保育協会'),
			_Utils_Tuple2('931044', '日本芳香族工業会'),
			_Utils_Tuple2('931045', '日本宝石工業'),
			_Utils_Tuple2('931046', '日本脚本家連盟'),
			_Utils_Tuple2('931047', '日本脚本家連盟'),
			_Utils_Tuple2('931048', '日本ボウリングチェーン'),
			_Utils_Tuple2('931050', '日本防菌防黴学会'),
			_Utils_Tuple2('931051', '日本防錆技術協会'),
			_Utils_Tuple2('931052', '日本紡績協会'),
			_Utils_Tuple2('931053', '日本盆栽協会'),
			_Utils_Tuple2('931054', '日本マーケティング協会出版部'),
			_Utils_Tuple2('931055', '日本マスコミ市民会議'),
			_Utils_Tuple2('931056', '日本水処理技術研究会'),
			_Utils_Tuple2('931057', '日本ミニコミセンター'),
			_Utils_Tuple2('931058', '日本民間放送連盟'),
			_Utils_Tuple2('931059', '日本民宿センター'),
			_Utils_Tuple2('931060', '日本民主主義文学同盟'),
			_Utils_Tuple2('931061', '日本民主青年同盟出版事業部'),
			_Utils_Tuple2('931062', '南風社'),
			_Utils_Tuple2('931063', '日本ＭＲＳ'),
			_Utils_Tuple2('931064', '日本盲人評論家協会'),
			_Utils_Tuple2('931065', '日本木工新聞社'),
			_Utils_Tuple2('931066', '日本薬学会'),
			_Utils_Tuple2('931067', '日本藥業新聞社'),
			_Utils_Tuple2('931068', '日本野生生物研究センター'),
			_Utils_Tuple2('931069', '人間成長とカウンセリング研究所'),
			_Utils_Tuple2('931070', '日本フルードパワーシステム学会'),
			_Utils_Tuple2('931071', '日本郵便切手商協同組合'),
			_Utils_Tuple2('931072', '日本養鶏協会'),
			_Utils_Tuple2('931073', '日本エクステンションセンター'),
			_Utils_Tuple2('931074', '日本羊毛産業協議会羊毛編集部'),
			_Utils_Tuple2('931075', '日本洋服史刊行委員会'),
			_Utils_Tuple2('931076', '日本ライトハウス点字出版所'),
			_Utils_Tuple2('931077', '日本らいぶらり'),
			_Utils_Tuple2('931078', '日本リアリズム写真集団'),
			_Utils_Tuple2('931079', '日本理学書総目録刊行会'),
			_Utils_Tuple2('931080', '日本理学療法士協会'),
			_Utils_Tuple2('931081', '日本労働総合研究所'),
			_Utils_Tuple2('931082', '日宝社'),
			_Utils_Tuple2('931083', '日本リテイリングセンター'),
			_Utils_Tuple2('931084', '日本旅客船協会'),
			_Utils_Tuple2('931085', '日本緑化センター'),
			_Utils_Tuple2('931086', '日本林学会'),
			_Utils_Tuple2('931087', '臨床化学シンポジウム'),
			_Utils_Tuple2('931088', '日本臨床血液学会'),
			_Utils_Tuple2('931089', '日本臨牀社'),
			_Utils_Tuple2('931090', '日本林道協会'),
			_Utils_Tuple2('931091', '日本連珠社'),
			_Utils_Tuple2('931092', '日本老人福祉財団'),
			_Utils_Tuple2('931093', '日本労働組合総評議会'),
			_Utils_Tuple2('931094', '日本労働文化協会'),
			_Utils_Tuple2('931095', '日本ＢＣＬ連盟'),
			_Utils_Tuple2('931096', '日本ＥＬＳインターナショナル'),
			_Utils_Tuple2('931097', '日本ＩＬＯ協会'),
			_Utils_Tuple2('931098', '日本物流団体連合会'),
			_Utils_Tuple2('931099', '日本更生保護協会'),
			_Utils_Tuple2('931100', 'ニューライフ'),
			_Utils_Tuple2('931102', '楡書房'),
			_Utils_Tuple2('931103', '楡書房'),
			_Utils_Tuple2('931104', '木香書房'),
			_Utils_Tuple2('931105', '人間機能研究所'),
			_Utils_Tuple2('931106', '人間の星社'),
			_Utils_Tuple2('931107', 'ぬかご社'),
			_Utils_Tuple2('931108', '日本ゴルフ協会'),
			_Utils_Tuple2('931109', 'ネイチャー・ブックス'),
			_Utils_Tuple2('931110', '日本エネルギー学会'),
			_Utils_Tuple2('931111', '年輪発行所'),
			_Utils_Tuple2('931112', 'ノア'),
			_Utils_Tuple2('931113', 'ノア事業出版'),
			_Utils_Tuple2('931114', 'レジュウイール'),
			_Utils_Tuple2('931115', '農業機械化研究所'),
			_Utils_Tuple2('931116', '農業電化協会'),
			_Utils_Tuple2('931117', 'ノンブル社'),
			_Utils_Tuple2('931118', '農政調査委員会'),
			_Utils_Tuple2('931119', '農村と都市をむすぶ編集部'),
			_Utils_Tuple2('931120', '農民教育協会'),
			_Utils_Tuple2('931121', '農林技術出版社'),
			_Utils_Tuple2('931122', '農林経済研究所'),
			_Utils_Tuple2('931123', '農林出版'),
			_Utils_Tuple2('931124', '農林出版社'),
			_Utils_Tuple2('931126', '野田書房'),
			_Utils_Tuple2('931127', 'ノビス出版'),
			_Utils_Tuple2('931128', '野村証券'),
			_Utils_Tuple2('931129', 'のら書店'),
			_Utils_Tuple2('931130', 'にじゅういち出版'),
			_Utils_Tuple2('931131', '日本ビジネス印刷出版部'),
			_Utils_Tuple2('931132', '日本社'),
			_Utils_Tuple2('931134', '日本ロータリーセンター出版局'),
			_Utils_Tuple2('931135', '日本消費経済新聞社'),
			_Utils_Tuple2('931136', '日本複合材料学会'),
			_Utils_Tuple2('931137', '日本自動車輸入組合'),
			_Utils_Tuple2('931138', '日本プライス・データバンク'),
			_Utils_Tuple2('931139', '日韓文化出版社'),
			_Utils_Tuple2('931140', '西澤武雄'),
			_Utils_Tuple2('931141', 'ねんね社'),
			_Utils_Tuple2('931142', '日本テレビビデオ'),
			_Utils_Tuple2('931143', '日本図書ライブ'),
			_Utils_Tuple2('931145', '日本事務器'),
			_Utils_Tuple2('931147', '日本法制学会'),
			_Utils_Tuple2('931148', '日本ヴェーダーンタ協会'),
			_Utils_Tuple2('931149', '日本交通趣味協会'),
			_Utils_Tuple2('931150', '日本野鳥の会'),
			_Utils_Tuple2('931151', '日本図書普及'),
			_Utils_Tuple2('931152', '日本ビクター東京ビデオ営業所'),
			_Utils_Tuple2('931153', '日刊経済新聞社'),
			_Utils_Tuple2('931154', '日本クリエイターズ協会'),
			_Utils_Tuple2('931155', '日本林業協会'),
			_Utils_Tuple2('931156', '日本飛行連盟'),
			_Utils_Tuple2('931157', '日本出版協会'),
			_Utils_Tuple2('931158', '野村出版'),
			_Utils_Tuple2('931159', '農業書協会'),
			_Utils_Tuple2('931160', '日本航空機操縦士協会'),
			_Utils_Tuple2('931161', '日本考古学協会'),
			_Utils_Tuple2('931162', '習志野巖翠堂書店'),
			_Utils_Tuple2('931163', '２１世紀'),
			_Utils_Tuple2('931164', '日本公務員試験センター'),
			_Utils_Tuple2('931165', '日蘭協会'),
			_Utils_Tuple2('931166', '日本カージナルス'),
			_Utils_Tuple2('931167', '日本メディアーツ'),
			_Utils_Tuple2('931168', '日本電話番号簿'),
			_Utils_Tuple2('931169', 'にしき出版'),
			_Utils_Tuple2('931170', '日本貿易振興会国際交流部'),
			_Utils_Tuple2('931171', '日産自動車'),
			_Utils_Tuple2('931172', '日本電気'),
			_Utils_Tuple2('931173', '日本カルチャーセンター'),
			_Utils_Tuple2('931174', '名古屋教育センター'),
			_Utils_Tuple2('931175', '日本速読協会'),
			_Utils_Tuple2('931176', '日刊スポーツ事業'),
			_Utils_Tuple2('931177', '日本心霊科学協会'),
			_Utils_Tuple2('931178', '出窓社'),
			_Utils_Tuple2('931179', 'ネイチャーアイランド社'),
			_Utils_Tuple2('931180', '日本レクリエーション協会'),
			_Utils_Tuple2('931181', 'ナニワ書房'),
			_Utils_Tuple2('931182', '浪速書房'),
			_Utils_Tuple2('931183', '日本情報通信振興協会'),
			_Utils_Tuple2('931184', '名古屋タイムズ社'),
			_Utils_Tuple2('931185', '日本科学情報'),
			_Utils_Tuple2('931186', '浪速書房'),
			_Utils_Tuple2('931187', 'ねこのひげ企画'),
			_Utils_Tuple2('931188', 'ニューメディア'),
			_Utils_Tuple2('931189', '南山房'),
			_Utils_Tuple2('931190', '二十一世紀書院'),
			_Utils_Tuple2('931191', '日本航空写真文化社'),
			_Utils_Tuple2('931192', '日本経営史研究所'),
			_Utils_Tuple2('931193', '日興美術'),
			_Utils_Tuple2('931194', 'サリュート'),
			_Utils_Tuple2('931195', '日本ビジネス・ライセンス・スクール'),
			_Utils_Tuple2('931196', '日本自動車研究所'),
			_Utils_Tuple2('931197', '日本プランニングセンター'),
			_Utils_Tuple2('931198', '中里村史編さん委員会'),
			_Utils_Tuple2('931200', 'Ｎｏｗ＆Ｎｏｗ'),
			_Utils_Tuple2('931203', '西田催事企画研究所出版部'),
			_Utils_Tuple2('931205', '農村文化社'),
			_Utils_Tuple2('931206', '日本原子力情報センター'),
			_Utils_Tuple2('931207', '新森書房'),
			_Utils_Tuple2('931208', '日正社'),
			_Utils_Tuple2('931209', '日本出版クラブ'),
			_Utils_Tuple2('931210', 'ナゴヤマガジン'),
			_Utils_Tuple2('931211', '日本製靴'),
			_Utils_Tuple2('931212', '日本国際児童図書評議会'),
			_Utils_Tuple2('931213', '日本パーソナルコンピュータソフトウェア協会'),
			_Utils_Tuple2('931214', '日経ＳＰ企画'),
			_Utils_Tuple2('931215', '日本交通文化協会'),
			_Utils_Tuple2('931216', '長岡市市史編さん室'),
			_Utils_Tuple2('931217', '日本グラフィックマップ'),
			_Utils_Tuple2('931218', '日本商工経済研究所'),
			_Utils_Tuple2('931219', '日刊岩手建設工業新聞社'),
			_Utils_Tuple2('931220', '西日本法規出版'),
			_Utils_Tuple2('931221', '日本の自治を考える会'),
			_Utils_Tuple2('931222', '日本医学図書館協会'),
			_Utils_Tuple2('931223', 'ニュー・エラ・パブリケーションズ・ジャパン'),
			_Utils_Tuple2('931224', '日本カード出版'),
			_Utils_Tuple2('931225', '名古屋大学山岳会'),
			_Utils_Tuple2('931226', 'ナカノ総合出版'),
			_Utils_Tuple2('931227', '西日本文化出版'),
			_Utils_Tuple2('931228', '日本橋書房(三栄社)'),
			_Utils_Tuple2('931229', '日本教育振興センター'),
			_Utils_Tuple2('931230', '日本離島センター'),
			_Utils_Tuple2('931231', '日本クレジット産業協会'),
			_Utils_Tuple2('931232', 'ナカノ'),
			_Utils_Tuple2('931233', '弐壱弐研究所'),
			_Utils_Tuple2('931234', '日本工業技術振興協会'),
			_Utils_Tuple2('931235', '日本総合出版'),
			_Utils_Tuple2('931236', '日本イスラムインターナショナルパブリケーション'),
			_Utils_Tuple2('931238', '日本航空文化事業センター'),
			_Utils_Tuple2('931239', '日本フィラテリックセンター'),
			_Utils_Tuple2('931240', '日ＥＣ産業協力センター'),
			_Utils_Tuple2('931241', '日本ホーリネス教団出版局'),
			_Utils_Tuple2('931242', '日本基督教会出版局'),
			_Utils_Tuple2('931243', '日刊情報'),
			_Utils_Tuple2('931244', '日本基督教団西宮教会出版委員会'),
			_Utils_Tuple2('931245', '日本マイクロサージャーリー学会'),
			_Utils_Tuple2('931246', '南船北馬舎'),
			_Utils_Tuple2('931247', 'のんぶる舎'),
			_Utils_Tuple2('931248', '栗っ子の会(日本ビジネスネット)'),
			_Utils_Tuple2('931249', '日本油化学会'),
			_Utils_Tuple2('931250', '日本農学図書館協議会'),
			_Utils_Tuple2('931252', '中野書店'),
			_Utils_Tuple2('931253', '日仏図書館学会'),
			_Utils_Tuple2('931254', '日本公園緑地協会'),
			_Utils_Tuple2('931255', 'ＮＯＡ(ニューオフィスオートメーション)'),
			_Utils_Tuple2('931257', '日本校文館'),
			_Utils_Tuple2('931258', 'ＮＩＫＫ映像'),
			_Utils_Tuple2('931259', '日本電算企画'),
			_Utils_Tuple2('931260', '日本経営協会'),
			_Utils_Tuple2('931261', 'ナート'),
			_Utils_Tuple2('931263', '練馬凛'),
			_Utils_Tuple2('931264', '日商データバンク'),
			_Utils_Tuple2('931265', '日本ユース・ホステル協会'),
			_Utils_Tuple2('931266', '楡出版'),
			_Utils_Tuple2('931267', '日本計装工業会'),
			_Utils_Tuple2('931268', '日本之薔薇出版社'),
			_Utils_Tuple2('931269', 'ノイ・プロダクト'),
			_Utils_Tuple2('931270', 'ノマルエディション'),
			_Utils_Tuple2('931271', '日蓮正宗顕正会'),
			_Utils_Tuple2('931272', '虹企画'),
			_Utils_Tuple2('931273', '日本鉄道電気技術協会'),
			_Utils_Tuple2('931274', '日本パルス'),
			_Utils_Tuple2('931275', '日本文化社'),
			_Utils_Tuple2('931276', '日本芸能実演家団体協議会'),
			_Utils_Tuple2('931277', '日本バイオミュージック研究会'),
			_Utils_Tuple2('931278', '日本テレビ放送網文化事業団'),
			_Utils_Tuple2('931280', '日本機械保線'),
			_Utils_Tuple2('931281', '日本産業デザイン振興会'),
			_Utils_Tuple2('931282', '日本産業訓練協会'),
			_Utils_Tuple2('931283', '日本実験動物技術者協会'),
			_Utils_Tuple2('931285', '日刊食料新聞'),
			_Utils_Tuple2('931287', '日本包装学会'),
			_Utils_Tuple2('931288', 'ノースウィンメディア'),
			_Utils_Tuple2('931289', '日本出版'),
			_Utils_Tuple2('931290', 'ニューファミリー新聞社'),
			_Utils_Tuple2('931291', 'ネットワーク'),
			_Utils_Tuple2('931292', 'ノーバス'),
			_Utils_Tuple2('931293', '日本電波ニュース社'),
			_Utils_Tuple2('931294', 'ニューメディア'),
			_Utils_Tuple2('931296', '日中総合開発'),
			_Utils_Tuple2('931297', '日本折紙協会'),
			_Utils_Tuple2('931298', '日本セラミックス協会'),
			_Utils_Tuple2('931299', '農林水産省果樹試験場'),
			_Utils_Tuple2('931300', '日本マーブル協会'),
			_Utils_Tuple2('931301', '日本空調衛生工事業協会'),
			_Utils_Tuple2('931302', '日本関税協会知的財産情報センター'),
			_Utils_Tuple2('931303', 'ＮＥＷ ＷＯＲＬＤ ＧＲＯＵＰ ０００'),
			_Utils_Tuple2('931304', '日本バーコード'),
			_Utils_Tuple2('931305', 'アビバ出版社'),
			_Utils_Tuple2('931306', '中村理科工業'),
			_Utils_Tuple2('931307', '日本経営振興協会'),
			_Utils_Tuple2('931308', '日本青年奉仕協会'),
			_Utils_Tuple2('931309', '日本アッセンブリー教団日曜学校部'),
			_Utils_Tuple2('931310', '西村峩山プランニング'),
			_Utils_Tuple2('931311', '奈良日日新聞社'),
			_Utils_Tuple2('931312', '西村企画社'),
			_Utils_Tuple2('931313', 'なかみや出版'),
			_Utils_Tuple2('931314', 'ニライ社'),
			_Utils_Tuple2('931315', '日本語研究社'),
			_Utils_Tuple2('931316', '日本船舶標準協会'),
			_Utils_Tuple2('931317', '日本精神技術研究所'),
			_Utils_Tuple2('931318', '日本キリスト教団教育委員会'),
			_Utils_Tuple2('931319', 'ニチネン企画'),
			_Utils_Tuple2('931321', 'ニューベリーハウス'),
			_Utils_Tuple2('931322', '中尾書店'),
			_Utils_Tuple2('931323', 'ヌーベルエコール'),
			_Utils_Tuple2('931324', 'ニュークリエイトマネジメント'),
			_Utils_Tuple2('931325', '日本電子出版'),
			_Utils_Tuple2('931326', '日本翻訳センター'),
			_Utils_Tuple2('931327', 'ノヴリカ'),
			_Utils_Tuple2('931328', 'ノア書房'),
			_Utils_Tuple2('931329', '日本インテリアデザイナー協会'),
			_Utils_Tuple2('931330', 'ニューメディアソフト販売'),
			_Utils_Tuple2('931331', '日本教育センター'),
			_Utils_Tuple2('931332', '西宮公同教会出版事業部'),
			_Utils_Tuple2('931333', '日本ハンドボール協会'),
			_Utils_Tuple2('931334', '西部邁事務所'),
			_Utils_Tuple2('931335', '新堀芸術学院出版局'),
			_Utils_Tuple2('931336', 'ニチブン'),
			_Utils_Tuple2('931337', '日本経営研究所'),
			_Utils_Tuple2('931338', '日本教育事業振興協会'),
			_Utils_Tuple2('931339', '日和'),
			_Utils_Tuple2('931340', '日本環境測定分析協会'),
			_Utils_Tuple2('931341', '日本国際童謡館'),
			_Utils_Tuple2('931342', '日本学術文化社'),
			_Utils_Tuple2('931343', '虹の旅出版'),
			_Utils_Tuple2('931344', 'にんげん出版'),
			_Utils_Tuple2('931345', '能力開発センター'),
			_Utils_Tuple2('931346', '日本教育出版サービス'),
			_Utils_Tuple2('931347', '日本循環器学会'),
			_Utils_Tuple2('931348', '日本推命学館'),
			_Utils_Tuple2('931349', '日本国勢社'),
			_Utils_Tuple2('931350', '日本物流新聞社'),
			_Utils_Tuple2('931351', '日本屋根経済新聞社'),
			_Utils_Tuple2('931352', '南方堂'),
			_Utils_Tuple2('931353', '２３０ＣＬＵＢ新聞社'),
			_Utils_Tuple2('931354', '日本私立短期大学協会'),
			_Utils_Tuple2('931355', '日本ユニバイト'),
			_Utils_Tuple2('931357', '日本伝道出版'),
			_Utils_Tuple2('931358', '根研究会'),
			_Utils_Tuple2('931359', '日本心身修学協会出版部'),
			_Utils_Tuple2('931360', 'ニュース'),
			_Utils_Tuple2('931361', '肉牛新報社'),
			_Utils_Tuple2('931362', '日本トンネル技術協会'),
			_Utils_Tuple2('931363', '中川書店'),
			_Utils_Tuple2('931364', '日本公企'),
			_Utils_Tuple2('931365', '日光商事'),
			_Utils_Tuple2('931366', '日本コダック'),
			_Utils_Tuple2('931368', '日本ファイナンス学会'),
			_Utils_Tuple2('931369', '日本保健物理学会'),
			_Utils_Tuple2('931370', '日英語学研究所'),
			_Utils_Tuple2('931371', '日本樹木協会'),
			_Utils_Tuple2('931372', '日本美術企画'),
			_Utils_Tuple2('931373', '西日本リビング新聞社'),
			_Utils_Tuple2('931374', 'ないねん出版'),
			_Utils_Tuple2('931375', 'ネクステック'),
			_Utils_Tuple2('931377', 'ニューポート大学出版部'),
			_Utils_Tuple2('931378', '日本ファッション教育振興協会'),
			_Utils_Tuple2('931379', 'なのはな出版'),
			_Utils_Tuple2('931380', '日本てんかん協会'),
			_Utils_Tuple2('931381', 'ネオメディアウイング'),
			_Utils_Tuple2('931382', '日本医療情報センター'),
			_Utils_Tuple2('931383', '日本電気ホームエレクトロニクスエンターテイメント事業推進本部'),
			_Utils_Tuple2('931384', '名古屋製酪'),
			_Utils_Tuple2('931385', 'ニチギ'),
			_Utils_Tuple2('931387', 'ウィルソン・ラーニング・ワールドワイド'),
			_Utils_Tuple2('931388', '人間社'),
			_Utils_Tuple2('931389', '日本蟻類研究会'),
			_Utils_Tuple2('931390', '寧楽芸術研究所'),
			_Utils_Tuple2('931392', 'デンソークリエイト'),
			_Utils_Tuple2('931393', '日本生態系協会'),
			_Utils_Tuple2('931394', '中村企画印刷社'),
			_Utils_Tuple2('931395', '日本著作者出版'),
			_Utils_Tuple2('931397', 'トーマス出版局'),
			_Utils_Tuple2('931398', 'にじゅうに'),
			_Utils_Tuple2('931399', '日本アプリケーション'),
			_Utils_Tuple2('931400', '日経メディカル開発'),
			_Utils_Tuple2('931401', 'ヌーベルプラス'),
			_Utils_Tuple2('931402', '日本健生協会'),
			_Utils_Tuple2('931403', '日本開発銀行設備投資研究所'),
			_Utils_Tuple2('931404', '日本伝統美保存会出版部'),
			_Utils_Tuple2('931405', 'セブンレッドマーキュリー'),
			_Utils_Tuple2('931406', '日本電算機'),
			_Utils_Tuple2('931407', 'Ｋｎｅｅ Ｈｉｇｈ Ｍｅｄｉａ'),
			_Utils_Tuple2('931408', '人間舎'),
			_Utils_Tuple2('931409', '日本トータルシステムデザイン'),
			_Utils_Tuple2('931410', '内外出版'),
			_Utils_Tuple2('931411', 'ナップ'),
			_Utils_Tuple2('931412', 'ニューズ・ライン'),
			_Utils_Tuple2('931413', '日光印刷出版社'),
			_Utils_Tuple2('931414', '日本ジュエリー協会'),
			_Utils_Tuple2('931415', '日本コンクリート工学協会北海道支部'),
			_Utils_Tuple2('931416', '名古屋大学大学院工学研究科'),
			_Utils_Tuple2('931417', 'ネクストジャパン出版事業部'),
			_Utils_Tuple2('931418', '日経大阪ＰＲ'),
			_Utils_Tuple2('931419', '日本医学出版'),
			_Utils_Tuple2('931420', 'ナラサキビーズ'),
			_Utils_Tuple2('931421', '日経ホーム出版社'),
			_Utils_Tuple2('931422', '鳴美'),
			_Utils_Tuple2('931423', '日本Ｍテクノロジー学会出版会'),
			_Utils_Tuple2('931424', '日本語学教育学会'),
			_Utils_Tuple2('931425', '三菱化学'),
			_Utils_Tuple2('931426', '日本書写研究所'),
			_Utils_Tuple2('931427', '中村重久'),
			_Utils_Tuple2('931428', '中村正義'),
			_Utils_Tuple2('931429', '日本地ビール協会'),
			_Utils_Tuple2('931430', '日本ウエルエージング協会'),
			_Utils_Tuple2('931431', 'ナカタパブリシティ'),
			_Utils_Tuple2('931432', '日中未来振興機構出版部'),
			_Utils_Tuple2('931433', '日本パーセプティブ'),
			_Utils_Tuple2('931434', '日本ソフト販売'),
			_Utils_Tuple2('931436', '日本メディアリサーチ'),
			_Utils_Tuple2('931437', '日蓮宗海外布教後援会'),
			_Utils_Tuple2('931438', '日本古典普及協会'),
			_Utils_Tuple2('931439', '日本出版労働組合連合会'),
			_Utils_Tuple2('931440', 'なあぷる'),
			_Utils_Tuple2('931441', '日本フィルコン'),
			_Utils_Tuple2('931442', '那珂書房'),
			_Utils_Tuple2('931443', '日本テクノセンター'),
			_Utils_Tuple2('931445', '中野出版企画'),
			_Utils_Tuple2('931446', '農業技術研究機構中央農業総合研究センター'),
			_Utils_Tuple2('931447', '野間出版'),
			_Utils_Tuple2('931448', 'ニューホライズンジャパン'),
			_Utils_Tuple2('931449', 'ナチュラルスピリット'),
			_Utils_Tuple2('931450', '日経ナショナルジオグラフィック(日経ＢＰ出版センター)'),
			_Utils_Tuple2('931451', '日本コンクリート工学協会'),
			_Utils_Tuple2('931452', '日産自動車デジタルコミュニケーション事業部'),
			_Utils_Tuple2('931453', '猫及目本舗'),
			_Utils_Tuple2('931454', '名古屋ＣＤフォーラム'),
			_Utils_Tuple2('931455', '日本ＡＥＭ学会'),
			_Utils_Tuple2('931456', '日本信販'),
			_Utils_Tuple2('931457', '日本教育情報センター'),
			_Utils_Tuple2('931458', '南海日日新聞社'),
			_Utils_Tuple2('931459', '熱電変換研究会'),
			_Utils_Tuple2('931460', '日本痴呆学会'),
			_Utils_Tuple2('931461', 'トモエ産業'),
			_Utils_Tuple2('931462', '日報社'),
			_Utils_Tuple2('931463', 'ニシムラ精密地形模型'),
			_Utils_Tuple2('931464', '野田塾'),
			_Utils_Tuple2('931465', '日本リゾートシステム'),
			_Utils_Tuple2('931467', '認識の森舎出版部'),
			_Utils_Tuple2('931468', '日本エデュケイションセンター'),
			_Utils_Tuple2('931469', '日本数学会'),
			_Utils_Tuple2('931470', '日本を考える会'),
			_Utils_Tuple2('931471', '日本イベント産業振興協会'),
			_Utils_Tuple2('931472', '長崎出島文庫'),
			_Utils_Tuple2('931473', '野薔薇舎'),
			_Utils_Tuple2('931474', '日本ソフトウェア科学会'),
			_Utils_Tuple2('931475', '人間出版'),
			_Utils_Tuple2('931476', 'ニューズライン'),
			_Utils_Tuple2('931477', '日本ＨＳＫ実施委員会'),
			_Utils_Tuple2('931478', '日本ユニシス・ソフトウェア'),
			_Utils_Tuple2('931479', 'ノルウェー「男女平等の本」を出版する会'),
			_Utils_Tuple2('931480', 'ニュースメディア甲府'),
			_Utils_Tuple2('931481', '長崎ヒバクシャ医療国際協力会'),
			_Utils_Tuple2('931482', '日本エネルギー経済研究所アジア太平洋エネルギー研究センター'),
			_Utils_Tuple2('931483', '日本光電工業'),
			_Utils_Tuple2('931484', 'ＳＭＢＣコンサルティング'),
			_Utils_Tuple2('931485', '日本人材開発医科学研究所'),
			_Utils_Tuple2('931486', '西多摩新聞社'),
			_Utils_Tuple2('931487', '日本経済研究所'),
			_Utils_Tuple2('931488', '日本ＩＢＭ研修サービス'),
			_Utils_Tuple2('931489', '年金ライフ社'),
			_Utils_Tuple2('931490', '日本僑報'),
			_Utils_Tuple2('931491', '南海放送'),
			_Utils_Tuple2('931492', '日本制作社'),
			_Utils_Tuple2('931493', '長崎新聞社'),
			_Utils_Tuple2('931494', '日本燃焼学会'),
			_Utils_Tuple2('931495', '日本プランテック'),
			_Utils_Tuple2('931496', '日本カナダ教育学会'),
			_Utils_Tuple2('931497', '南謡出版'),
			_Utils_Tuple2('931498', '西日本印刷'),
			_Utils_Tuple2('931499', 'ネクストステージ'),
			_Utils_Tuple2('931500', '日刊経済通信社'),
			_Utils_Tuple2('931501', '日仏出版センター'),
			_Utils_Tuple2('931502', 'ニコン'),
			_Utils_Tuple2('931503', '日本メディア・ミックス'),
			_Utils_Tuple2('931504', '日新出版'),
			_Utils_Tuple2('931505', '日本教育制度学会'),
			_Utils_Tuple2('931506', 'ナーシングサイエンスアカデミー'),
			_Utils_Tuple2('931507', '日本専門図書出版'),
			_Utils_Tuple2('931508', '農林水産省農業環境技術研究所'),
			_Utils_Tuple2('931509', '日中通信社'),
			_Utils_Tuple2('931510', 'ニューパシフィックスポーツマーケティング'),
			_Utils_Tuple2('931512', '日本伝統文化研究所'),
			_Utils_Tuple2('931513', '日本輸出入銀行'),
			_Utils_Tuple2('931514', '西東京タウン誌紙会'),
			_Utils_Tuple2('931515', '日本新華僑出版社'),
			_Utils_Tuple2('931516', '日本洋書協会'),
			_Utils_Tuple2('931517', '日本応用地質学会'),
			_Utils_Tuple2('931518', '日本ルーテルアワー'),
			_Utils_Tuple2('931519', '日本消費者金融協会'),
			_Utils_Tuple2('931520', '日本テクノメディア'),
			_Utils_Tuple2('931521', '日本実用英語サービス'),
			_Utils_Tuple2('931522', 'ナダ出版センター'),
			_Utils_Tuple2('931523', 'ニワダニネットワークシステム'),
			_Utils_Tuple2('931524', '南々社'),
			_Utils_Tuple2('931525', '日本アドバンストテクノロジー'),
			_Utils_Tuple2('931526', '日本技術貿易'),
			_Utils_Tuple2('931527', '日東紡音響エンジニアリング'),
			_Utils_Tuple2('931528', '日本税務研究センター'),
			_Utils_Tuple2('931529', 'ＮＥＸＴブックス'),
			_Utils_Tuple2('931530', 'ネイチャーネットワーク'),
			_Utils_Tuple2('931531', '新渡戸基金'),
			_Utils_Tuple2('931532', '長門出版社'),
			_Utils_Tuple2('931533', '日本アロマテラピー協会'),
			_Utils_Tuple2('931534', '日本ツラノ書院'),
			_Utils_Tuple2('931535', 'ナラボー・プレス'),
			_Utils_Tuple2('931536', 'ナチュラル'),
			_Utils_Tuple2('931537', 'ネオ・メディク'),
			_Utils_Tuple2('931538', 'ナイタイ出版'),
			_Utils_Tuple2('931539', 'ナカノ総合出版'),
			_Utils_Tuple2('931540', '名古屋テレビ放送'),
			_Utils_Tuple2('931541', '日本ペプチド学会'),
			_Utils_Tuple2('931542', '日本テントシート工業組合連合会'),
			_Utils_Tuple2('931543', '日本ビルヂング経営センター'),
			_Utils_Tuple2('931544', '日本プレハブ建築研究所'),
			_Utils_Tuple2('931545', '中川製作所'),
			_Utils_Tuple2('931546', 'ニューホープチャペル出版部'),
			_Utils_Tuple2('931547', 'ノバプラン'),
			_Utils_Tuple2('931548', '日中展望出版社'),
			_Utils_Tuple2('931549', '日正出版'),
			_Utils_Tuple2('931550', '日本歯科新聞社'),
			_Utils_Tuple2('931551', '新田町文化会館'),
			_Utils_Tuple2('931552', '日本教育綜合研究所'),
			_Utils_Tuple2('931553', '中井豊'),
			_Utils_Tuple2('931554', '日流プランニング'),
			_Utils_Tuple2('931555', '奈良先端科学技術大学院大学研究協力課'),
			_Utils_Tuple2('931556', '日本コーディングセンター'),
			_Utils_Tuple2('931557', '日本睡眠学会'),
			_Utils_Tuple2('931558', '日本マーター・アムリターナンダマイ・センター'),
			_Utils_Tuple2('931559', 'ねっとチャンネル工房'),
			_Utils_Tuple2('931560', '日本インフォメーション・アンド・データサービスコーポレーション'),
			_Utils_Tuple2('931561', '日東印刷'),
			_Utils_Tuple2('931562', '日労研'),
			_Utils_Tuple2('931563', '日本経済新聞社広告局'),
			_Utils_Tuple2('931564', '日本厚生協会'),
			_Utils_Tuple2('931565', '西嶋尚彦'),
			_Utils_Tuple2('931566', '日本ベエツグループ'),
			_Utils_Tuple2('931567', '日本向老学学会出版会'),
			_Utils_Tuple2('931568', 'ノア・つりのとも'),
			_Utils_Tuple2('931569', 'ナビ出版'),
			_Utils_Tuple2('931570', '日宣広業'),
			_Utils_Tuple2('931571', 'ナランハ'),
			_Utils_Tuple2('931572', 'ネオナジー'),
			_Utils_Tuple2('931573', '志考社'),
			_Utils_Tuple2('931574', '日本貿易会'),
			_Utils_Tuple2('931575', '日本教育訓練センター'),
			_Utils_Tuple2('938129', '俳画人発行所'),
			_Utils_Tuple2('938130', '俳句公論社'),
			_Utils_Tuple2('938131', '俳句評論社'),
			_Utils_Tuple2('938134', '萩書房'),
			_Utils_Tuple2('938135', '萩原悠子'),
			_Utils_Tuple2('938136', 'はくおう社'),
			_Utils_Tuple2('938137', '博進堂出版部'),
			_Utils_Tuple2('938138', '羽衣出版'),
			_Utils_Tuple2('938139', '白鳥社'),
			_Utils_Tuple2('938140', '八月書館'),
			_Utils_Tuple2('938141', '白揚社'),
			_Utils_Tuple2('938142', '博洋社'),
			_Utils_Tuple2('938143', '柏葉書院'),
			_Utils_Tuple2('938144', '柏林社書店'),
			_Utils_Tuple2('938145', '羽黒洞'),
			_Utils_Tuple2('938146', '函館川柳社'),
			_Utils_Tuple2('938147', '箱根文庫'),
			_Utils_Tuple2('938148', 'ハスの実の家'),
			_Utils_Tuple2('938149', '長谷山房'),
			_Utils_Tuple2('938150', '畑地農業振興会'),
			_Utils_Tuple2('938151', '八光塾本部'),
			_Utils_Tuple2('938152', '八小堂'),
			_Utils_Tuple2('938153', 'パスカル出版'),
			_Utils_Tuple2('938154', '発明学会'),
			_Utils_Tuple2('938155', '鳩ケ谷郷土史研究会'),
			_Utils_Tuple2('938156', 'はとバス旅行'),
			_Utils_Tuple2('938157', 'はとぶえ会'),
			_Utils_Tuple2('938158', 'はましん企画'),
			_Utils_Tuple2('938159', '浜発行所'),
			_Utils_Tuple2('938160', '早川商会'),
			_Utils_Tuple2('938161', '早川書店'),
			_Utils_Tuple2('938162', '早野微生物学研究所'),
			_Utils_Tuple2('938163', '服部植物研究所'),
			_Utils_Tuple2('938164', 'はるみ書房'),
			_Utils_Tuple2('938165', 'パピルス'),
			_Utils_Tuple2('938166', '判例時報社'),
			_Utils_Tuple2('938167', '般若墨宝刊行会'),
			_Utils_Tuple2('938168', '梅花学園'),
			_Utils_Tuple2('938169', 'バイセル出版'),
			_Utils_Tuple2('938170', '麦秋社'),
			_Utils_Tuple2('938171', '麦秋社'),
			_Utils_Tuple2('938172', 'バイプレイン'),
			_Utils_Tuple2('938173', 'パルトス社'),
			_Utils_Tuple2('938174', 'ハローインターナショナル'),
			_Utils_Tuple2('938175', 'ばら出版'),
			_Utils_Tuple2('938176', '薔薇短歌会'),
			_Utils_Tuple2('938178', 'バンク・オブ・クリエティビティ(ＢＯＣ出版部)'),
			_Utils_Tuple2('938179', '萬松堂'),
			_Utils_Tuple2('938181', '万蕾発行所'),
			_Utils_Tuple2('938182', 'パアール'),
			_Utils_Tuple2('938183', 'パーク心臓研究財団'),
			_Utils_Tuple2('938184', 'ハーベスト出版'),
			_Utils_Tuple2('938185', 'パックスアーレン'),
			_Utils_Tuple2('938186', 'パルナシウスの会'),
			_Utils_Tuple2('938187', 'パレスチナ解放機構東京事務所'),
			_Utils_Tuple2('938189', 'パンドラ社'),
			_Utils_Tuple2('938190', 'パン・ニューズ・インターナショナル'),
			_Utils_Tuple2('938191', 'Ｈａｒｐｅｒ＆Ｒｏｗ出版社東京連絡事務所'),
			_Utils_Tuple2('938192', '萼工業所有権研究所出版部'),
			_Utils_Tuple2('938193', '比叡書房'),
			_Utils_Tuple2('938194', '日向文化研究所'),
			_Utils_Tuple2('938195', '比企文化社'),
			_Utils_Tuple2('938196', '東四国新聞社'),
			_Utils_Tuple2('938197', 'ひかり社'),
			_Utils_Tuple2('938198', 'ビー・セラーズ'),
			_Utils_Tuple2('938199', '広島県教科用図書販売'),
			_Utils_Tuple2('938200', '東大阪市立高井田東小学校ＰＴＡ文化委員会'),
			_Utils_Tuple2('938201', '東銀座印刷出版'),
			_Utils_Tuple2('938202', '東村山市立図書館'),
			_Utils_Tuple2('938203', 'ヒグチ出版'),
			_Utils_Tuple2('938204', '飛行船出版'),
			_Utils_Tuple2('938205', '久崎真行'),
			_Utils_Tuple2('938206', '久山善正'),
			_Utils_Tuple2('938207', '日立印刷出版センター'),
			_Utils_Tuple2('938208', '常陸書房'),
			_Utils_Tuple2('938209', '日立評論社'),
			_Utils_Tuple2('938210', 'ひとびと文庫'),
			_Utils_Tuple2('938211', '日の本教壇'),
			_Utils_Tuple2('938213', 'ひまわり俳句会'),
			_Utils_Tuple2('938214', '百鬼界'),
			_Utils_Tuple2('938215', '百日草'),
			_Utils_Tuple2('938216', '百年社'),
			_Utils_Tuple2('938217', 'ヒューマン・エクスプレス'),
			_Utils_Tuple2('938218', '表現舎'),
			_Utils_Tuple2('938219', '兵庫県教育図書販売'),
			_Utils_Tuple2('938220', '兵庫県社会福祉協議会'),
			_Utils_Tuple2('938221', '兵庫県川柳協会'),
			_Utils_Tuple2('938222', '兵庫県俳句協会'),
			_Utils_Tuple2('938223', '兵庫県民サービスセンター'),
			_Utils_Tuple2('938224', '評論新社'),
			_Utils_Tuple2('938225', '北海道アート社'),
			_Utils_Tuple2('938226', '平尾出版'),
			_Utils_Tuple2('938227', '平戸文化財研究所'),
			_Utils_Tuple2('938228', 'ひるぎ社'),
			_Utils_Tuple2('938229', '比較法研究センター'),
			_Utils_Tuple2('938230', '弘前市美術作家連盟'),
			_Utils_Tuple2('938231', '広島郷土史研究会'),
			_Utils_Tuple2('938232', 'ビーエスアール'),
			_Utils_Tuple2('938233', 'ビクターエンタテイメントＳＰＯ営業部'),
			_Utils_Tuple2('938234', '美研'),
			_Utils_Tuple2('938235', '美工出版'),
			_Utils_Tuple2('938236', '美巧社'),
			_Utils_Tuple2('938237', 'ビゴー作品刊行会'),
			_Utils_Tuple2('938239', '広島平和文化センター'),
			_Utils_Tuple2('938240', 'ビジネスセンター社'),
			_Utils_Tuple2('938241', '美術倶楽部'),
			_Utils_Tuple2('938242', '美術出版デザインセンター'),
			_Utils_Tuple2('938243', '美術書院'),
			_Utils_Tuple2('938244', '美術新聞社'),
			_Utils_Tuple2('938245', '美術探求社'),
			_Utils_Tuple2('938246', '美術同人社'),
			_Utils_Tuple2('938247', '美術評論社'),
			_Utils_Tuple2('938248', 'びじゅぶっく・ほしの'),
			_Utils_Tuple2('938250', 'ビックフォー出版'),
			_Utils_Tuple2('938251', 'びっぷ出版'),
			_Utils_Tuple2('938252', 'バイオメディカルリサーチファンデーション'),
			_Utils_Tuple2('938253', 'ビデオ・パック・ニッポン'),
			_Utils_Tuple2('938254', 'ビディオライフ社'),
			_Utils_Tuple2('938255', '白燕発行所'),
			_Utils_Tuple2('938257', '病院資料センター'),
			_Utils_Tuple2('938258', '琵琶湖研究会'),
			_Utils_Tuple2('938259', 'ビワの実学校'),
			_Utils_Tuple2('938260', 'びわの実文庫'),
			_Utils_Tuple2('938261', 'ピタカ'),
			_Utils_Tuple2('938262', 'ドクターズファミリー'),
			_Utils_Tuple2('938263', 'ＰＯＰ広告協会日本支部出版委員会'),
			_Utils_Tuple2('938264', 'ブックハウス'),
			_Utils_Tuple2('938265', 'ファニチャー出版社'),
			_Utils_Tuple2('938266', '風炎社'),
			_Utils_Tuple2('938267', 'ふえみなあ社'),
			_Utils_Tuple2('938268', 'ビーアンドシーアイ'),
			_Utils_Tuple2('938269', 'フォトマージュ'),
			_Utils_Tuple2('938270', '風景社'),
			_Utils_Tuple2('938271', '風日社'),
			_Utils_Tuple2('938272', 'フェニックス書院'),
			_Utils_Tuple2('938273', 'フェミニスト'),
			_Utils_Tuple2('938274', '深志同窓会'),
			_Utils_Tuple2('938275', '福井空襲史刊行会'),
			_Utils_Tuple2('938276', '福井県アルジェリア友好協会'),
			_Utils_Tuple2('938277', 'フクイゴルフ教室'),
			_Utils_Tuple2('938278', '福井豆本の会'),
			_Utils_Tuple2('938279', '福音印刷出版局'),
			_Utils_Tuple2('938280', 'ベルシステム２４'),
			_Utils_Tuple2('938281', '福祉新聞社'),
			_Utils_Tuple2('938282', '福島県図書教材'),
			_Utils_Tuple2('938283', '福島中央テレビ'),
			_Utils_Tuple2('938284', '福島日輪川柳社'),
			_Utils_Tuple2('938285', '服飾手帖社'),
			_Utils_Tuple2('938286', '福田三郎'),
			_Utils_Tuple2('938287', '福田芳文堂'),
			_Utils_Tuple2('938288', '富士印刷'),
			_Utils_Tuple2('938290', 'あい出版'),
			_Utils_Tuple2('938291', '不死鳥社'),
			_Utils_Tuple2('938292', '腐食防食協会'),
			_Utils_Tuple2('938293', '藤井誠信堂'),
			_Utils_Tuple2('938294', '富士クリエイティブハウス'),
			_Utils_Tuple2('938295', '富士システムリサーチ'),
			_Utils_Tuple2('938296', '富士社会教育センター'),
			_Utils_Tuple2('938297', 'フジ出版'),
			_Utils_Tuple2('938298', '富士書房'),
			_Utils_Tuple2('938299', '藤代商店'),
			_Utils_Tuple2('938300', '富士ジャーナル社'),
			_Utils_Tuple2('938301', '富士政経新聞社'),
			_Utils_Tuple2('938302', '仏教書総目録刊行会'),
			_Utils_Tuple2('938304', '藤浪短歌会'),
			_Utils_Tuple2('938305', '富士フォトサービス'),
			_Utils_Tuple2('938307', 'ヒューマガジン'),
			_Utils_Tuple2('938308', '藤文庫'),
			_Utils_Tuple2('938309', '富士グローバル・ビジネス・ネットワーク'),
			_Utils_Tuple2('938310', '藤森書店'),
			_Utils_Tuple2('938311', '富士屋書店'),
			_Utils_Tuple2('938312', '婦人教育研究所'),
			_Utils_Tuple2('938313', '府政新聞社'),
			_Utils_Tuple2('938314', 'フタバ'),
			_Utils_Tuple2('938315', '文庫の会'),
			_Utils_Tuple2('938316', 'ふだん記グループ'),
			_Utils_Tuple2('938317', '不動産経済研究所'),
			_Utils_Tuple2('938318', '不忘出版'),
			_Utils_Tuple2('938319', '平凡企画'),
			_Utils_Tuple2('938320', '冬草社'),
			_Utils_Tuple2('938321', '芙蓉情報センター'),
			_Utils_Tuple2('938322', 'フランシスコ会聖書研究所'),
			_Utils_Tuple2('938323', '古川書店'),
			_Utils_Tuple2('938324', '古沢和子'),
			_Utils_Tuple2('938325', 'フレール企画'),
			_Utils_Tuple2('938326', '部落解放人権図書目録刊行会'),
			_Utils_Tuple2('938327', 'フレンドリー'),
			_Utils_Tuple2('938328', '不老会'),
			_Utils_Tuple2('938329', 'フジコーポレーション'),
			_Utils_Tuple2('938330', '双葉興産アドセンター出版部'),
			_Utils_Tuple2('938331', '部隊史編纂委員会'),
			_Utils_Tuple2('938332', '仏教書林中山書房'),
			_Utils_Tuple2('938333', '仏教タイムス社'),
			_Utils_Tuple2('938334', 'ブックス'),
			_Utils_Tuple2('938335', 'ブックハウス・エイチディ'),
			_Utils_Tuple2('938336', 'ブックメイツ'),
			_Utils_Tuple2('938337', '武道出版研究所'),
			_Utils_Tuple2('938338', '部落解放同盟大阪府連合会'),
			_Utils_Tuple2('938340', 'ブレーン・ダイナミックス'),
			_Utils_Tuple2('938341', 'ブックショップ・マイタウン'),
			_Utils_Tuple2('938342', '文苑堂書店'),
			_Utils_Tuple2('938345', '文化新社'),
			_Utils_Tuple2('938346', '文化スライド'),
			_Utils_Tuple2('938347', '文化通信社'),
			_Utils_Tuple2('938348', '文学アートの会'),
			_Utils_Tuple2('938350', '文教堂出版'),
			_Utils_Tuple2('938351', 'ビデオ・エデュケーション'),
			_Utils_Tuple2('938352', 'キャノン販売'),
			_Utils_Tuple2('938353', '文京書房'),
			_Utils_Tuple2('938354', '文芸同人社'),
			_Utils_Tuple2('938355', '文憲堂'),
			_Utils_Tuple2('938356', '文芸市場社'),
			_Utils_Tuple2('938357', '博栄出版'),
			_Utils_Tuple2('938358', '文芸広場社'),
			_Utils_Tuple2('938359', '文芸復興社'),
			_Utils_Tuple2('938360', '文言社'),
			_Utils_Tuple2('938361', '文彩社'),
			_Utils_Tuple2('938362', '報徳思想研究会'),
			_Utils_Tuple2('938363', '文信堂書店'),
			_Utils_Tuple2('938364', '文治堂書店'),
			_Utils_Tuple2('938365', '平和のアトリエ'),
			_Utils_Tuple2('938366', 'プラサード出版'),
			_Utils_Tuple2('938367', 'プラスアルファー'),
			_Utils_Tuple2('938368', 'ぷやら新書刊行会'),
			_Utils_Tuple2('938369', 'プリントアートセンター'),
			_Utils_Tuple2('938370', 'プレイヤーコーポレーション'),
			_Utils_Tuple2('938371', 'プレス'),
			_Utils_Tuple2('938372', 'ベクトル・コア'),
			_Utils_Tuple2('938373', 'プロジェクトオーガン出版局'),
			_Utils_Tuple2('938374', 'プロフーズ'),
			_Utils_Tuple2('938375', '平安'),
			_Utils_Tuple2('938376', 'インターアート出版'),
			_Utils_Tuple2('938377', '平安書院'),
			_Utils_Tuple2('938378', '平安堂書店'),
			_Utils_Tuple2('938379', '平原社'),
			_Utils_Tuple2('938380', '平凡社教育産業センター'),
			_Utils_Tuple2('938381', '平明社'),
			_Utils_Tuple2('938382', '平和警備保障'),
			_Utils_Tuple2('938383', '平和産業'),
			_Utils_Tuple2('938385', 'へら鮒社'),
			_Utils_Tuple2('938386', 'ヘラルドエンタープライズ'),
			_Utils_Tuple2('938387', '北海道住宅新聞社'),
			_Utils_Tuple2('938388', 'ベアバック編集部'),
			_Utils_Tuple2('938389', '米穀新聞社'),
			_Utils_Tuple2('938390', 'ベイシック商会'),
			_Utils_Tuple2('938391', '平原社'),
			_Utils_Tuple2('938392', 'ベビーケアセンター'),
			_Utils_Tuple2('938393', '別所書店'),
			_Utils_Tuple2('938394', 'ヴェリタス出版社'),
			_Utils_Tuple2('938395', 'ベロ出版社'),
			_Utils_Tuple2('938396', 'ペットライフ社'),
			_Utils_Tuple2('938397', '北海道読書新聞社'),
			_Utils_Tuple2('938398', '芳英社'),
			_Utils_Tuple2('938399', '翻訳西洋文学会'),
			_Utils_Tuple2('938400', '法学選書刊行会'),
			_Utils_Tuple2('938401', '邦楽と舞踊出版社'),
			_Utils_Tuple2('938402', '邦楽の友社'),
			_Utils_Tuple2('938403', '豊川堂'),
			_Utils_Tuple2('938404', '法規文化出版社'),
			_Utils_Tuple2('938405', '方向感覚出版センター'),
			_Utils_Tuple2('938406', '方向社'),
			_Utils_Tuple2('938407', '鋒刃社'),
			_Utils_Tuple2('938408', '放送ジャーナル社'),
			_Utils_Tuple2('938409', '北欧文化通信社'),
			_Utils_Tuple2('938410', '報道春秋社'),
			_Utils_Tuple2('938411', '豊文社'),
			_Utils_Tuple2('938412', '豊饒書館'),
			_Utils_Tuple2('938413', '芳明堂書店'),
			_Utils_Tuple2('938414', '法友社'),
			_Utils_Tuple2('938415', '宝友出版社'),
			_Utils_Tuple2('938416', '法律書経済書経営書目録刊行会'),
			_Utils_Tuple2('938417', '北方ジャーナル'),
			_Utils_Tuple2('938418', '法輪出版'),
			_Utils_Tuple2('938419', '法令出版'),
			_Utils_Tuple2('938420', '法令書式センター'),
			_Utils_Tuple2('938421', '豊文堂'),
			_Utils_Tuple2('938422', 'ビズネス教養社'),
			_Utils_Tuple2('938423', '北星出版社'),
			_Utils_Tuple2('938426', '北都出版'),
			_Utils_Tuple2('938428', '北都書房'),
			_Utils_Tuple2('938430', 'ボーネルンド'),
			_Utils_Tuple2('938431', '北陸鉄道労働組合'),
			_Utils_Tuple2('938432', '北陸放送'),
			_Utils_Tuple2('938433', '保険実務研究所'),
			_Utils_Tuple2('938434', '保険セールス研究所'),
			_Utils_Tuple2('938435', '保健文化社'),
			_Utils_Tuple2('938436', '星野書店'),
			_Utils_Tuple2('938437', '八月一日出版'),
			_Utils_Tuple2('938438', '北海教育評論社'),
			_Utils_Tuple2('938439', '北海詩人社'),
			_Utils_Tuple2('938440', '北海プリント社'),
			_Utils_Tuple2('938441', 'ポプラ書房'),
			_Utils_Tuple2('938442', '北海道教育産業センター'),
			_Utils_Tuple2('938443', '宝鑑堂'),
			_Utils_Tuple2('938444', '北海道教科書供給所'),
			_Utils_Tuple2('938445', '北海道協同組合通信社'),
			_Utils_Tuple2('938446', '北海道撮影社'),
			_Utils_Tuple2('938447', 'ビステック'),
			_Utils_Tuple2('938448', '北海道治山協会'),
			_Utils_Tuple2('938449', '北海道日中文化交流懇話会'),
			_Utils_Tuple2('938451', '北郊文化社'),
			_Utils_Tuple2('938452', '堀越研究所'),
			_Utils_Tuple2('938453', '北洋化成工業'),
			_Utils_Tuple2('938454', '保険研究所'),
			_Utils_Tuple2('938456', 'プロデュース・センター出版局'),
			_Utils_Tuple2('938457', 'ビッグアップル'),
			_Utils_Tuple2('938458', 'ホトトギス社'),
			_Utils_Tuple2('938459', 'ホビーズ'),
			_Utils_Tuple2('938460', '炎書房'),
			_Utils_Tuple2('938462', 'ほるぷ'),
			_Utils_Tuple2('938464', 'ホンヤク出版社'),
			_Utils_Tuple2('938465', '防衛弘済会(マーチ出版)'),
			_Utils_Tuple2('938466', '防衛時報社'),
			_Utils_Tuple2('938467', '防衛日報社'),
			_Utils_Tuple2('938468', '防衛メディアセンター'),
			_Utils_Tuple2('938469', '貿易弘報社'),
			_Utils_Tuple2('938470', '貿易の日本社'),
			_Utils_Tuple2('938471', '紡織雑誌社'),
			_Utils_Tuple2('938472', '防長史料出版社'),
			_Utils_Tuple2('938473', '防府市観光協会'),
			_Utils_Tuple2('938474', '望洋社'),
			_Utils_Tuple2('938475', '博報堂生活総合研究所'),
			_Utils_Tuple2('938476', '墨源本舗'),
			_Utils_Tuple2('938477', '墨美社'),
			_Utils_Tuple2('938478', 'ヘスコインターナショナル'),
			_Utils_Tuple2('938479', '母子愛育会'),
			_Utils_Tuple2('938480', '発明開発連合会'),
			_Utils_Tuple2('938481', '母子衛生研究会'),
			_Utils_Tuple2('938482', '法律新聞社'),
			_Utils_Tuple2('938483', 'ボナンザ'),
			_Utils_Tuple2('938484', '梵文法華経刊行会'),
			_Utils_Tuple2('938485', 'ポエトピア社出版局'),
			_Utils_Tuple2('938486', 'ポトナム短歌会'),
			_Utils_Tuple2('938487', '文化書院'),
			_Utils_Tuple2('938488', 'フロンティア'),
			_Utils_Tuple2('938489', '文教出版'),
			_Utils_Tuple2('938490', '本願寺国際センター'),
			_Utils_Tuple2('938491', 'びわの実書房'),
			_Utils_Tuple2('938493', '物理探査学会'),
			_Utils_Tuple2('938494', 'プラパック'),
			_Utils_Tuple2('938496', '富士コンシューマセンター'),
			_Utils_Tuple2('938497', '法令社'),
			_Utils_Tuple2('938498', 'メディカグローブ'),
			_Utils_Tuple2('938499', 'プロメテウス'),
			_Utils_Tuple2('938501', '萩島商事'),
			_Utils_Tuple2('938502', 'ホーム社'),
			_Utils_Tuple2('938503', 'フォレスト'),
			_Utils_Tuple2('938504', '本郷種苗園出版部'),
			_Utils_Tuple2('938505', '莫想舎'),
			_Utils_Tuple2('938506', 'サロン・デ・ボザール'),
			_Utils_Tuple2('938507', '福山幸夫'),
			_Utils_Tuple2('938508', 'ベターホーム出版局'),
			_Utils_Tuple2('938509', 'スチュワードパブリケーションズ'),
			_Utils_Tuple2('938510', 'プロトコーポレーション'),
			_Utils_Tuple2('938511', 'プロコムジャパン'),
			_Utils_Tuple2('938512', '朋興社'),
			_Utils_Tuple2('938513', '平和戦略綜合研究所'),
			_Utils_Tuple2('938514', 'ふぁい～る出版'),
			_Utils_Tuple2('938515', 'フォーバイフォーマガジン社'),
			_Utils_Tuple2('938516', 'ハイパブリケーション'),
			_Utils_Tuple2('938517', '花柳妙穂'),
			_Utils_Tuple2('938518', 'パブリック'),
			_Utils_Tuple2('938519', 'パナリンガ出版'),
			_Utils_Tuple2('938520', '博新館'),
			_Utils_Tuple2('938521', '白文社'),
			_Utils_Tuple2('938522', 'あるちざん'),
			_Utils_Tuple2('938523', '文京書院'),
			_Utils_Tuple2('938524', '貿易日日通信社'),
			_Utils_Tuple2('938525', '噴火湾社'),
			_Utils_Tuple2('938526', '博報堂'),
			_Utils_Tuple2('938527', '深川書房'),
			_Utils_Tuple2('938528', 'パレルガ書房'),
			_Utils_Tuple2('938529', '八広社'),
			_Utils_Tuple2('938530', '平凡社販売'),
			_Utils_Tuple2('938531', 'ＨＡＴＯ書房'),
			_Utils_Tuple2('938532', 'ぱんたか'),
			_Utils_Tuple2('938533', 'ビバ'),
			_Utils_Tuple2('938534', '堀書店'),
			_Utils_Tuple2('938535', '東日本出版'),
			_Utils_Tuple2('938537', 'ハイテック'),
			_Utils_Tuple2('938538', 'ベスト・コミュニケーションズ'),
			_Utils_Tuple2('938539', 'ハーフタイム出版'),
			_Utils_Tuple2('938540', '福永書店'),
			_Utils_Tuple2('938541', '白鯨社'),
			_Utils_Tuple2('938542', 'フランク出版'),
			_Utils_Tuple2('938543', 'アニドウ・フィルム'),
			_Utils_Tuple2('938545', 'ヒロメディア'),
			_Utils_Tuple2('938546', 'くまざさ出版社'),
			_Utils_Tuple2('938548', '保育資料社'),
			_Utils_Tuple2('938549', 'ほるぷアカデミー'),
			_Utils_Tuple2('938551', 'ハーベスト社'),
			_Utils_Tuple2('938552', 'フロンヴィルホームズ'),
			_Utils_Tuple2('938553', '本の旅社'),
			_Utils_Tuple2('938555', 'フジ・テクノシステム'),
			_Utils_Tuple2('938557', 'ぶなの木出版'),
			_Utils_Tuple2('938558', '博報堂広島支社'),
			_Utils_Tuple2('938559', 'フランス語教育振興協会'),
			_Utils_Tuple2('938560', '北斗舎'),
			_Utils_Tuple2('938561', 'フェリオス'),
			_Utils_Tuple2('938562', '富士書房'),
			_Utils_Tuple2('938563', '文苑出版'),
			_Utils_Tuple2('938566', '楓林'),
			_Utils_Tuple2('938567', 'フランスベット販売'),
			_Utils_Tuple2('938569', '広島ＹＭＣＡ出版局'),
			_Utils_Tuple2('938570', '豊文社'),
			_Utils_Tuple2('938572', '北海道産業調査協会'),
			_Utils_Tuple2('938573', '編集工房らかぽし'),
			_Utils_Tuple2('938574', 'ピーシーダブリュコミュニケイションズ'),
			_Utils_Tuple2('938575', '法華宗宗務院'),
			_Utils_Tuple2('938576', '法華学園興隆学林専門学校'),
			_Utils_Tuple2('938577', '文献社'),
			_Utils_Tuple2('938578', 'ビューポイント'),
			_Utils_Tuple2('938579', '富士精版印刷'),
			_Utils_Tuple2('938580', '広島大学総合地誌研究資料センター'),
			_Utils_Tuple2('938581', 'ぶっく東京'),
			_Utils_Tuple2('938582', 'ハイテックラボジャパン'),
			_Utils_Tuple2('938583', 'バクスター'),
			_Utils_Tuple2('938584', 'フジ教育出版社'),
			_Utils_Tuple2('938587', '人と文化社'),
			_Utils_Tuple2('938589', 'ピービー'),
			_Utils_Tuple2('938590', '望稜舎'),
			_Utils_Tuple2('938591', 'バイオインダストリー協会'),
			_Utils_Tuple2('938592', 'プロダクトシステム'),
			_Utils_Tuple2('938593', 'ビジネスインデックス社'),
			_Utils_Tuple2('938594', 'プラス出版'),
			_Utils_Tuple2('938595', '博雅堂出版'),
			_Utils_Tuple2('938596', '風人社'),
			_Utils_Tuple2('938597', 'ひまわり書房'),
			_Utils_Tuple2('938599', 'ビッグ・エー'),
			_Utils_Tuple2('938600', '北陸出版'),
			_Utils_Tuple2('938601', 'プレス出版'),
			_Utils_Tuple2('938602', '蜂書房'),
			_Utils_Tuple2('938603', '白峰社'),
			_Utils_Tuple2('938604', 'パブリッシャユニコン'),
			_Utils_Tuple2('938605', 'バーズアイ'),
			_Utils_Tuple2('938606', 'バオバブブックス'),
			_Utils_Tuple2('938607', '富士出版'),
			_Utils_Tuple2('938608', '火の鳥社'),
			_Utils_Tuple2('938609', 'ビジ研'),
			_Utils_Tuple2('938611', 'プリハード'),
			_Utils_Tuple2('938612', '藤沢理研'),
			_Utils_Tuple2('938613', '北都'),
			_Utils_Tuple2('938614', '東日本旅客鉄道'),
			_Utils_Tuple2('938615', '堀本工場改善研究所'),
			_Utils_Tuple2('938616', 'ビデオロード'),
			_Utils_Tuple2('938617', '白楽'),
			_Utils_Tuple2('938621', '姫路獨協大学公開講座運営委員会'),
			_Utils_Tuple2('938623', 'バスタイム'),
			_Utils_Tuple2('938624', 'ブック・グローブ社'),
			_Utils_Tuple2('938625', 'フジテレビジョン'),
			_Utils_Tuple2('938626', 'フォーインクリエイティブプロダクツ'),
			_Utils_Tuple2('938627', '柏林書房'),
			_Utils_Tuple2('938628', 'モール'),
			_Utils_Tuple2('938629', '日本物流団体連合会'),
			_Utils_Tuple2('938630', 'フジ・カルチャー・ソフト'),
			_Utils_Tuple2('938632', 'ヒューマン・ティワイ'),
			_Utils_Tuple2('938633', 'フュージョン出版システムズ'),
			_Utils_Tuple2('938634', 'フナコシ医学出版'),
			_Utils_Tuple2('938635', 'ピーピーエス通信社'),
			_Utils_Tuple2('938636', 'ヒューマンライフ研究所'),
			_Utils_Tuple2('938637', '北海道大学スラブ研究センター'),
			_Utils_Tuple2('938638', '圀州'),
			_Utils_Tuple2('938639', '白露'),
			_Utils_Tuple2('938641', 'ＰＴＮ研究所'),
			_Utils_Tuple2('938642', 'フーディアム・コミュニケーション'),
			_Utils_Tuple2('938643', '風人社'),
			_Utils_Tuple2('938644', '母と子社'),
			_Utils_Tuple2('938645', 'ベルデ企画'),
			_Utils_Tuple2('938646', 'ハーベスト・タイム・ミニストリーズ出版部'),
			_Utils_Tuple2('938647', 'プラザ'),
			_Utils_Tuple2('938648', 'ほたる書房'),
			_Utils_Tuple2('938649', '文教資料協会'),
			_Utils_Tuple2('938651', '白馬社'),
			_Utils_Tuple2('938653', '福陽社'),
			_Utils_Tuple2('938654', '白石庵敬神会'),
			_Utils_Tuple2('938655', '白鵬'),
			_Utils_Tuple2('938656', 'ＦＡＬＬ(フォール)'),
			_Utils_Tuple2('938657', 'ＨＩＫＡＲＵ ＆ ＭＡＲＩＡ ＫＡＧＥＡＫＩ'),
			_Utils_Tuple2('938658', '新生言語文化研究会'),
			_Utils_Tuple2('938659', 'ピクニック企画'),
			_Utils_Tuple2('938662', '風行社'),
			_Utils_Tuple2('938663', 'ヒーズ・ジャパン'),
			_Utils_Tuple2('938664', '広島大学高等教育研究開発センター'),
			_Utils_Tuple2('938665', 'Ｐａｒａｃｏｍｍ(パラコム)'),
			_Utils_Tuple2('938666', 'ビデオ・シティ映像製作'),
			_Utils_Tuple2('938667', 'プロダクトリブ'),
			_Utils_Tuple2('938668', 'ビーズ'),
			_Utils_Tuple2('938670', 'ベスト'),
			_Utils_Tuple2('938671', 'Ｐ３オルタナティブミュージアム東京'),
			_Utils_Tuple2('938672', '穂高書店'),
			_Utils_Tuple2('938674', '白鴎大学出版局'),
			_Utils_Tuple2('938675', '兵庫コンサルティング'),
			_Utils_Tuple2('938676', '北海道土木技術会'),
			_Utils_Tuple2('938678', 'ホメロス社'),
			_Utils_Tuple2('938679', '文化社'),
			_Utils_Tuple2('938680', 'ハイパースペース'),
			_Utils_Tuple2('938681', '博光出版'),
			_Utils_Tuple2('938682', '評判社'),
			_Utils_Tuple2('938683', '文選社'),
			_Utils_Tuple2('938684', 'バース・インターナショナル'),
			_Utils_Tuple2('938685', 'パルス'),
			_Utils_Tuple2('938687', 'フェイム'),
			_Utils_Tuple2('938688', 'パロディー社'),
			_Utils_Tuple2('938689', 'フロムライフ'),
			_Utils_Tuple2('938690', 'ハイパーメディア'),
			_Utils_Tuple2('938691', 'Ｐｈａｒｍａｄａｔａ Ｐｕｂｌｉｓｈｉｎｇ'),
			_Utils_Tuple2('938692', 'ビー・エム・エル'),
			_Utils_Tuple2('938693', '発酵研究所'),
			_Utils_Tuple2('938694', 'ビジネスフォーラム研究所'),
			_Utils_Tuple2('938695', 'プロスパー企画'),
			_Utils_Tuple2('938696', 'パスコ'),
			_Utils_Tuple2('938697', 'フォト・ルミエール'),
			_Utils_Tuple2('938698', '北燈社'),
			_Utils_Tuple2('938699', '東山写真研究所'),
			_Utils_Tuple2('938700', '遍照出版'),
			_Utils_Tuple2('938702', 'ホワイトスタジオ出版事業部'),
			_Utils_Tuple2('938703', 'パンニュース社'),
			_Utils_Tuple2('938705', 'ＦＬＡＭＥ ＴＲＥＥ ＢＯＯＫＳ'),
			_Utils_Tuple2('938706', '博品社'),
			_Utils_Tuple2('938707', 'フォトにっぽん社'),
			_Utils_Tuple2('938708', '広島テレビ放送'),
			_Utils_Tuple2('938709', '広島女学院'),
			_Utils_Tuple2('938710', '文化科学高等研究院出版局'),
			_Utils_Tuple2('938712', 'プレンティスホール・リージェンツ'),
			_Utils_Tuple2('938713', 'はあと出版'),
			_Utils_Tuple2('938714', 'ふれあい企画'),
			_Utils_Tuple2('938715', 'バイオメディカル・ファジイ・システム研究会'),
			_Utils_Tuple2('938716', 'フールズメイト'),
			_Utils_Tuple2('938717', 'ファジィシステム研究所'),
			_Utils_Tuple2('938719', 'ブックリンクインターナショナル'),
			_Utils_Tuple2('938720', 'ホットスペース出版社'),
			_Utils_Tuple2('938721', '長谷工コーポレーション総合研究所'),
			_Utils_Tuple2('938722', '北斗通商'),
			_Utils_Tuple2('938723', '文教社'),
			_Utils_Tuple2('938724', '福音伝書会'),
			_Utils_Tuple2('938725', '福岡部落史研究会'),
			_Utils_Tuple2('938726', 'ブック・ハウス'),
			_Utils_Tuple2('938727', '文化工房'),
			_Utils_Tuple2('938728', 'プラネット'),
			_Utils_Tuple2('938729', 'フジタヘルスユニバーシティ出版会'),
			_Utils_Tuple2('938730', 'ヒューマン'),
			_Utils_Tuple2('938731', 'ベランド・アソシェーツ'),
			_Utils_Tuple2('938734', 'ビネバル出版'),
			_Utils_Tuple2('938735', '北北西'),
			_Utils_Tuple2('938736', '文化総合'),
			_Utils_Tuple2('938737', 'シングルカット'),
			_Utils_Tuple2('938738', '福岡成蹊学園'),
			_Utils_Tuple2('938739', '八月書房'),
			_Utils_Tuple2('938740', '三好企画'),
			_Utils_Tuple2('938741', 'フライングキャットブッククリエイト'),
			_Utils_Tuple2('938743', '福岡正信'),
			_Utils_Tuple2('938744', 'ボンシック／オキスコープ出版部'),
			_Utils_Tuple2('938745', 'フレンドプランニングシステム'),
			_Utils_Tuple2('938746', '日本花ヴェール健康学センター'),
			_Utils_Tuple2('938747', 'ハイテクノロジー・コミュニケーションズ'),
			_Utils_Tuple2('938749', 'ぼーぐなん'),
			_Utils_Tuple2('938750', 'ブラス出版'),
			_Utils_Tuple2('938751', '蕗薹書房'),
			_Utils_Tuple2('938753', 'プラスワン出版社'),
			_Utils_Tuple2('938754', 'ベルリッツパブリッシング'),
			_Utils_Tuple2('938755', '広島大学学校教育学部英語科'),
			_Utils_Tuple2('938756', 'ビジネスサプライ'),
			_Utils_Tuple2('938757', 'フジタフジタヴァンテ企画運営室'),
			_Utils_Tuple2('938758', '「ハングル」能力検定協会'),
			_Utils_Tuple2('938759', 'サンレー'),
			_Utils_Tuple2('938760', '文通社'),
			_Utils_Tuple2('938761', 'ペンギン・ブックス・ジャパン'),
			_Utils_Tuple2('938763', 'ノーススター出版'),
			_Utils_Tuple2('938764', 'プレイズ出版'),
			_Utils_Tuple2('938765', 'ボイジャー'),
			_Utils_Tuple2('938766', 'ＰＡＬＭ研究所'),
			_Utils_Tuple2('938767', '福音出版社'),
			_Utils_Tuple2('938768', '風水社'),
			_Utils_Tuple2('938769', 'ファーストクリエイト'),
			_Utils_Tuple2('938771', 'フォレスト・リサーチ研究所'),
			_Utils_Tuple2('938772', '福井県印刷出版協同組合'),
			_Utils_Tuple2('938773', '北海道総合出版'),
			_Utils_Tuple2('938774', '福音文書刊行会'),
			_Utils_Tuple2('938775', 'ヘルスライフ・エクササイズ研究会(Ｈ．Ｌ．Ｅ研究会)'),
			_Utils_Tuple2('938776', '白墨舎'),
			_Utils_Tuple2('938777', 'パイン・プロデュース'),
			_Utils_Tuple2('938778', 'フレックス・ファーム'),
			_Utils_Tuple2('938779', '本工舎'),
			_Utils_Tuple2('938780', 'ピーシーズ'),
			_Utils_Tuple2('938781', 'ひかり出版社'),
			_Utils_Tuple2('938782', 'プロジェクトハウス'),
			_Utils_Tuple2('938783', 'ボエキ'),
			_Utils_Tuple2('938785', 'プリズム社'),
			_Utils_Tuple2('938786', '文静書房'),
			_Utils_Tuple2('938787', '文教施設協会'),
			_Utils_Tuple2('938788', 'ＰＡＴＥＣＨ企画'),
			_Utils_Tuple2('938789', 'ボイックス'),
			_Utils_Tuple2('938790', 'ブリッツ・インターナショナル'),
			_Utils_Tuple2('938792', 'プロスペクト'),
			_Utils_Tuple2('938793', 'ビック・アール'),
			_Utils_Tuple2('938794', '藤田保健衛生大学'),
			_Utils_Tuple2('938795', '保育出版社'),
			_Utils_Tuple2('938796', '花園大学国際禅学研究所'),
			_Utils_Tuple2('938798', '報道文学会'),
			_Utils_Tuple2('938799', 'フルネット'),
			_Utils_Tuple2('938800', 'ベターリビング'),
			_Utils_Tuple2('938801', 'ぶんぶん書房'),
			_Utils_Tuple2('938802', 'ホワイトカメリア出版'),
			_Utils_Tuple2('938803', 'ひこばえ社'),
			_Utils_Tuple2('938804', 'Ｂ＆Ｒ'),
			_Utils_Tuple2('938805', '富士社会経済調査会'),
			_Utils_Tuple2('938806', 'バベル社'),
			_Utils_Tuple2('938807', 'ファームプレス'),
			_Utils_Tuple2('938808', 'パワーオン'),
			_Utils_Tuple2('938809', '橋詰和人'),
			_Utils_Tuple2('938810', '兵庫県労働運動総合研究所'),
			_Utils_Tuple2('938811', '報徳福運社報徳博物館'),
			_Utils_Tuple2('938813', 'Ｂｏｏｋｓ Ｗｏｒｌｄ'),
			_Utils_Tuple2('938814', '北海道自治タイムス社'),
			_Utils_Tuple2('938815', 'ビジネス・オーム'),
			_Utils_Tuple2('938816', '兵庫県芸術文化協会芸術文化センター推進室'),
			_Utils_Tuple2('938817', 'フォーユー'),
			_Utils_Tuple2('938818', '文進堂書店'),
			_Utils_Tuple2('938820', 'ビッグシティタイムス'),
			_Utils_Tuple2('938821', 'ハイネ社'),
			_Utils_Tuple2('938822', '文林館書店'),
			_Utils_Tuple2('938823', '北雪新書'),
			_Utils_Tuple2('938824', 'バイオプラン'),
			_Utils_Tuple2('938825', '日立アプリケーションシステムズ'),
			_Utils_Tuple2('938826', '編集室なるにあ'),
			_Utils_Tuple2('938828', 'パナ出版企画'),
			_Utils_Tuple2('938829', 'プレイグラフ社'),
			_Utils_Tuple2('938830', 'ビデオ・ドック'),
			_Utils_Tuple2('938831', 'フジックス'),
			_Utils_Tuple2('938832', 'バプテスト文書刊行会'),
			_Utils_Tuple2('938833', '福井新聞社'),
			_Utils_Tuple2('938834', '初芝文庫'),
			_Utils_Tuple2('938835', '表現技術開発センター(自分流文庫)'),
			_Utils_Tuple2('938836', 'パル企画'),
			_Utils_Tuple2('938837', 'ホンダキャラックス'),
			_Utils_Tuple2('938838', 'ぴあ書籍研究会'),
			_Utils_Tuple2('938839', 'ファミリーソフト'),
			_Utils_Tuple2('938840', '文芸タイムス社'),
			_Utils_Tuple2('938841', 'びすく社'),
			_Utils_Tuple2('938842', 'ブロードウェイ'),
			_Utils_Tuple2('938843', '北海道開発協会'),
			_Utils_Tuple2('938844', 'ヘルスワーク協会'),
			_Utils_Tuple2('938845', 'パナリンガ'),
			_Utils_Tuple2('938846', 'バッド・ニュース'),
			_Utils_Tuple2('938847', 'バンタンインターナショナル'),
			_Utils_Tuple2('938848', 'ヘルメス'),
			_Utils_Tuple2('938849', 'ビル管理教育センター'),
			_Utils_Tuple2('938850', '東創出版社'),
			_Utils_Tuple2('938851', 'ターボリナックスジャパン'),
			_Utils_Tuple2('938852', 'ハッピークリエイト'),
			_Utils_Tuple2('938853', 'フィールド出版'),
			_Utils_Tuple2('938854', 'ビューティークラブ事務局'),
			_Utils_Tuple2('938855', 'エスアールエスリミテッド'),
			_Utils_Tuple2('938856', '宝来社東京本社'),
			_Utils_Tuple2('938857', '博海展堂'),
			_Utils_Tuple2('938858', 'ホープ出版'),
			_Utils_Tuple2('938859', '白峰社'),
			_Utils_Tuple2('938860', '一二三セラミック'),
			_Utils_Tuple2('938861', 'フライングパンセ'),
			_Utils_Tuple2('938862', 'フォトバンク'),
			_Utils_Tuple2('938863', '編集工房あゆみ'),
			_Utils_Tuple2('938864', 'Ｐａｒａｄｉｓｅ Ｐｕｂｌｉｓｈｅｒｓ'),
			_Utils_Tuple2('938865', 'ブレスト'),
			_Utils_Tuple2('938866', 'プリメド社'),
			_Utils_Tuple2('938867', 'ブロッコリー'),
			_Utils_Tuple2('938868', '宝珠宗宝珠会聖人会'),
			_Utils_Tuple2('938869', 'プレツィオーゾ'),
			_Utils_Tuple2('938870', 'ボーダレス・エイジ'),
			_Utils_Tuple2('938871', 'バイオス'),
			_Utils_Tuple2('938872', 'プランズ・ユー'),
			_Utils_Tuple2('938873', 'ファイトテクノロジー研究会'),
			_Utils_Tuple2('938874', 'ほんの森出版'),
			_Utils_Tuple2('938875', '今井書店鳥取出版企画室'),
			_Utils_Tuple2('938876', '遙書房(パラダイム)'),
			_Utils_Tuple2('938877', 'プロデュースジャパン'),
			_Utils_Tuple2('938878', 'ビ・エーブル出版'),
			_Utils_Tuple2('938879', 'ビヨンド'),
			_Utils_Tuple2('938880', 'ビデオサービスジャパン'),
			_Utils_Tuple2('938881', 'ベクター'),
			_Utils_Tuple2('938882', '翻訳事務所スペースサノ'),
			_Utils_Tuple2('938883', '日立東北ソフトウェア'),
			_Utils_Tuple2('938884', '藤木出版'),
			_Utils_Tuple2('938885', 'ブックハウス'),
			_Utils_Tuple2('938886', 'ビデオ・パック・ニッポン'),
			_Utils_Tuple2('938887', '別府大学'),
			_Utils_Tuple2('938888', 'ファングス'),
			_Utils_Tuple2('938889', '放送文化基金'),
			_Utils_Tuple2('938890', 'フォーカスシステムズ'),
			_Utils_Tuple2('938891', 'ホワイトルーム'),
			_Utils_Tuple2('938892', 'プレコム'),
			_Utils_Tuple2('938893', '文京出版'),
			_Utils_Tuple2('938894', '風土社'),
			_Utils_Tuple2('938895', 'ハーベスト・プライム'),
			_Utils_Tuple2('938896', 'Ｖ企画六本木'),
			_Utils_Tuple2('938897', '兵庫県学校厚生会'),
			_Utils_Tuple2('938898', '北星社'),
			_Utils_Tuple2('938899', 'ブリッジコーポレーション'),
			_Utils_Tuple2('938901', 'フォー・ディー・エス'),
			_Utils_Tuple2('938902', 'ペンハウス'),
			_Utils_Tuple2('938903', '広島県環境保健協会'),
			_Utils_Tuple2('938904', '日立製作所'),
			_Utils_Tuple2('938905', 'ＰＦＵ'),
			_Utils_Tuple2('938906', 'ＰＯＷＥＲ ＰＵＢＬＩＣＡＴＩＯＮＳ'),
			_Utils_Tuple2('938907', 'ハギジン出版'),
			_Utils_Tuple2('938908', 'こうなんグループ(ＫＧ情報)'),
			_Utils_Tuple2('938909', '乃木坂出版'),
			_Utils_Tuple2('938910', '花書院'),
			_Utils_Tuple2('938911', '富士通ミドルウエア'),
			_Utils_Tuple2('938912', '白鴎社'),
			_Utils_Tuple2('938913', '冒険社'),
			_Utils_Tuple2('938914', 'ハーモニー出版部'),
			_Utils_Tuple2('938915', 'ヴィーゼ'),
			_Utils_Tuple2('938916', '文星出版'),
			_Utils_Tuple2('938919', '母と子の新聞社'),
			_Utils_Tuple2('938920', 'フォト民俗社'),
			_Utils_Tuple2('938921', 'フリーダム'),
			_Utils_Tuple2('938922', '文化ジャーナル鹿児島社'),
			_Utils_Tuple2('938924', '火の鳥社'),
			_Utils_Tuple2('938926', 'フリークス'),
			_Utils_Tuple2('938927', '富士通ラーニングメディア'),
			_Utils_Tuple2('938928', 'ピーアイジー研究所'),
			_Utils_Tuple2('938929', '富士通ビー・エス・シー'),
			_Utils_Tuple2('938930', '北海道東北地域経済総合研究所'),
			_Utils_Tuple2('938931', '豊文社'),
			_Utils_Tuple2('938932', 'フォンス・アモーリス'),
			_Utils_Tuple2('938933', '文香社'),
			_Utils_Tuple2('938934', 'ハヌマン'),
			_Utils_Tuple2('938936', '文化放送ブレーン'),
			_Utils_Tuple2('938937', '星と森'),
			_Utils_Tuple2('938938', 'ハスメル'),
			_Utils_Tuple2('938939', '風雲舎'),
			_Utils_Tuple2('938940', 'プリミティヴプランプレス'),
			_Utils_Tuple2('938941', '北海道アルバイト情報社'),
			_Utils_Tuple2('938942', 'パレックス'),
			_Utils_Tuple2('938943', 'フレア'),
			_Utils_Tuple2('938944', 'ＢＭＤ企画'),
			_Utils_Tuple2('938945', 'ふこく出版'),
			_Utils_Tuple2('938946', 'バーシティウェーブ'),
			_Utils_Tuple2('938947', 'フォーチュンソフト'),
			_Utils_Tuple2('938948', '宝珠出版'),
			_Utils_Tuple2('938949', 'フォース・ストリート'),
			_Utils_Tuple2('938950', 'フォーチュンヒル'),
			_Utils_Tuple2('938951', '光書房'),
			_Utils_Tuple2('938952', 'ホロン'),
			_Utils_Tuple2('938953', '破体門'),
			_Utils_Tuple2('938954', 'フェア・ウインド'),
			_Utils_Tuple2('938955', '比較文化ゼミ'),
			_Utils_Tuple2('938956', 'ベネフィットオンライン'),
			_Utils_Tuple2('938957', 'ハウストック'),
			_Utils_Tuple2('938958', '北海道未来総合研究所'),
			_Utils_Tuple2('938959', 'ぽんぽん堂'),
			_Utils_Tuple2('938960', 'ペーパーハウス'),
			_Utils_Tuple2('938961', '訪販ニュース社'),
			_Utils_Tuple2('938962', '貿易研修センター'),
			_Utils_Tuple2('938963', 'パーパス販売'),
			_Utils_Tuple2('938964', 'フィッシュマン'),
			_Utils_Tuple2('938965', '本の森'),
			_Utils_Tuple2('938966', '富士総合物流研究所'),
			_Utils_Tuple2('938967', 'ピーマンハウス'),
			_Utils_Tuple2('938968', 'プランニング秀巧社'),
			_Utils_Tuple2('938969', '百五経済研究所'),
			_Utils_Tuple2('938970', '兵庫ジャーナル社'),
			_Utils_Tuple2('938971', 'ヒューマン・ネットワーク'),
			_Utils_Tuple2('938972', 'プリズム'),
			_Utils_Tuple2('938973', 'ベスト社'),
			_Utils_Tuple2('938974', 'パックコミック'),
			_Utils_Tuple2('938975', 'ＢＡＲＢＡＲＡ ＳＩＭＳ'),
			_Utils_Tuple2('938976', 'ボブ出版社'),
			_Utils_Tuple2('938977', 'プランク'),
			_Utils_Tuple2('938978', 'フロンテア'),
			_Utils_Tuple2('938979', '葉月出版'),
			_Utils_Tuple2('938980', 'ファインクリエイション'),
			_Utils_Tuple2('938981', 'フジクリーン工業'),
			_Utils_Tuple2('938982', '富士通九州システムエンジニアリング'),
			_Utils_Tuple2('938983', 'ベッコアメ・インターネット'),
			_Utils_Tuple2('938984', '編集工房東洋企画'),
			_Utils_Tuple2('938985', '糸瓜書房'),
			_Utils_Tuple2('938986', 'パンセ・ア・ラ・ミュージック'),
			_Utils_Tuple2('938987', '放射線医学総合研究所'),
			_Utils_Tuple2('938988', 'プラトー出版'),
			_Utils_Tuple2('938989', '本の研究会'),
			_Utils_Tuple2('938990', 'パトモス社'),
			_Utils_Tuple2('938991', 'ハヤミ出版'),
			_Utils_Tuple2('938992', '文彩センター'),
			_Utils_Tuple2('938993', 'プラネット'),
			_Utils_Tuple2('938994', '平井工業'),
			_Utils_Tuple2('938995', 'ブリティッシュ・カウンシル'),
			_Utils_Tuple2('938996', 'フォーシーズンズプレス'),
			_Utils_Tuple2('938997', 'ぱど'),
			_Utils_Tuple2('938998', '這松舎'),
			_Utils_Tuple2('938999', '弘前大学消費生活協同組合'),
			_Utils_Tuple2('939000', '北水'),
			_Utils_Tuple2('939001', 'ブランシェ'),
			_Utils_Tuple2('939003', 'フライの雑誌社'),
			_Utils_Tuple2('939004', '文芸通信社'),
			_Utils_Tuple2('939006', 'ビーンズ'),
			_Utils_Tuple2('939007', 'ボーンデジタル'),
			_Utils_Tuple2('939008', 'プラチナ・コーポレーション'),
			_Utils_Tuple2('939009', '浜口通販'),
			_Utils_Tuple2('939010', 'ファイザーヘルスリサーチ振興財団'),
			_Utils_Tuple2('939011', '堀江ランゲージ・サービス'),
			_Utils_Tuple2('939012', 'ホットカプセル'),
			_Utils_Tuple2('939013', 'ファースト'),
			_Utils_Tuple2('939014', 'ベンチャー税理士研究会'),
			_Utils_Tuple2('939015', 'ポット出版'),
			_Utils_Tuple2('939016', 'ヒカリ・ジャパン'),
			_Utils_Tuple2('939017', '文化図書'),
			_Utils_Tuple2('939018', 'ファミリー・フォーカス・ジャパン'),
			_Utils_Tuple2('939019', 'フロンティア出版'),
			_Utils_Tuple2('939020', 'ペルソナージュ'),
			_Utils_Tuple2('939021', '北農会'),
			_Utils_Tuple2('939022', 'びわ湖放送'),
			_Utils_Tuple2('939023', 'ファッション教育社'),
			_Utils_Tuple2('939024', 'ビーエルエス'),
			_Utils_Tuple2('939025', '葉山豊'),
			_Utils_Tuple2('939026', '翡翠社'),
			_Utils_Tuple2('939027', '林純薬工業'),
			_Utils_Tuple2('939028', 'ブラックウェルパブリッシング'),
			_Utils_Tuple2('939029', 'ビリケン出版'),
			_Utils_Tuple2('939030', 'フォーリン・プレスセンター'),
			_Utils_Tuple2('939031', 'パールビジョン'),
			_Utils_Tuple2('939032', '八紘社印刷'),
			_Utils_Tuple2('939033', 'ヘルスメディシン社'),
			_Utils_Tuple2('939034', '防衛研究所'),
			_Utils_Tuple2('939035', 'ひかる書房'),
			_Utils_Tuple2('939036', '阪急電鉄創遊事業推進室'),
			_Utils_Tuple2('939037', 'フィスメック'),
			_Utils_Tuple2('939038', '編集工房沙羅'),
			_Utils_Tuple2('939039', 'ハルアンドアーク'),
			_Utils_Tuple2('939040', 'バーナーブロス'),
			_Utils_Tuple2('939041', 'ＢＥＡＵ Ｉｎｔｅｒｎａｔｉｏｎａｌ Ｐｌａｎｎｉｎｇ'),
			_Utils_Tuple2('939042', 'アットワークス'),
			_Utils_Tuple2('939043', 'プラトル'),
			_Utils_Tuple2('939044', 'ベルーナ'),
			_Utils_Tuple2('939045', 'フジシンクス'),
			_Utils_Tuple2('939046', '白鳥舎'),
			_Utils_Tuple2('939047', '文化財新報社'),
			_Utils_Tuple2('939048', 'フジメディカル出版'),
			_Utils_Tuple2('939050', '東日本ゴルフ新聞社'),
			_Utils_Tuple2('939051', 'ビーケイシー'),
			_Utils_Tuple2('939052', '福井放送'),
			_Utils_Tuple2('939054', 'ペンデュラム'),
			_Utils_Tuple2('939055', '浜屋'),
			_Utils_Tuple2('939056', '法律扶助協会'),
			_Utils_Tuple2('939057', 'ブラッディー・ドルフィンズ'),
			_Utils_Tuple2('939058', '八月舎'),
			_Utils_Tuple2('939059', '編集工房森樹'),
			_Utils_Tuple2('939060', 'プールチケットサービス'),
			_Utils_Tuple2('939061', 'パレード'),
			_Utils_Tuple2('939062', 'ピー・エス・インダストリー'),
			_Utils_Tuple2('939063', '豊文堂出版部'),
			_Utils_Tuple2('939064', 'パリッシュ出版'),
			_Utils_Tuple2('939065', 'ピーアールデスク'),
			_Utils_Tuple2('939066', 'フラッグシップ'),
			_Utils_Tuple2('939067', '北京中医薬大学日本分校'),
			_Utils_Tuple2('939068', 'ブレインストーム'),
			_Utils_Tuple2('939069', '福岡県建築住宅センター'),
			_Utils_Tuple2('939070', 'バックアップ・パブリッシング'),
			_Utils_Tuple2('939071', 'パスカル'),
			_Utils_Tuple2('939072', '文英出版社'),
			_Utils_Tuple2('939073', 'プランニングハウス'),
			_Utils_Tuple2('939074', 'ニュースバリュー'),
			_Utils_Tuple2('939075', 'ビル新聞社出版局'),
			_Utils_Tuple2('939077', '北国図書'),
			_Utils_Tuple2('939078', 'エクセラ'),
			_Utils_Tuple2('939079', 'パブリシティ研究所'),
			_Utils_Tuple2('939080', 'パコスジャパン'),
			_Utils_Tuple2('939081', 'フェニックス書房'),
			_Utils_Tuple2('939082', 'ファティーグ'),
			_Utils_Tuple2('939083', 'ビジュアル'),
			_Utils_Tuple2('939084', '備後レポート社'),
			_Utils_Tuple2('939085', 'ブレーン・サポート'),
			_Utils_Tuple2('939086', 'プロトスター'),
			_Utils_Tuple2('939087', '百番目のティ・シャツ出版事業部'),
			_Utils_Tuple2('939088', 'ホリゾント出版'),
			_Utils_Tuple2('939089', 'ベネコム'),
			_Utils_Tuple2('939090', 'ホビーネット'),
			_Utils_Tuple2('939091', 'ビュープロ'),
			_Utils_Tuple2('939092', 'ファクトデザイン事務所'),
			_Utils_Tuple2('939093', 'ファーマプラン'),
			_Utils_Tuple2('939094', '福島テレビ'),
			_Utils_Tuple2('939095', '文林堂'),
			_Utils_Tuple2('939096', '編集プロダクションあびぃ'),
			_Utils_Tuple2('939097', 'ＨＡＣ'),
			_Utils_Tuple2('939098', 'ＩＨＭ総合研究所(波動教育社)'),
			_Utils_Tuple2('939099', '桧山写真製版'),
			_Utils_Tuple2('939100', 'バルク・カンパニー'),
			_Utils_Tuple2('939101', 'ファミリーライフ・ジャパン'),
			_Utils_Tuple2('939102', 'プチグラパブリッシング'),
			_Utils_Tuple2('939104', 'ヒューマンウェア研究所'),
			_Utils_Tuple2('939105', '広島市現代美術館'),
			_Utils_Tuple2('939106', '八芳舎'),
			_Utils_Tuple2('939107', 'ショセキ'),
			_Utils_Tuple2('939108', '本心庵'),
			_Utils_Tuple2('939109', '美術団体蓼'),
			_Utils_Tuple2('939110', 'プラネット出版'),
			_Utils_Tuple2('939111', 'プリモ'),
			_Utils_Tuple2('939112', '比良出版'),
			_Utils_Tuple2('939113', 'ポカラ出版'),
			_Utils_Tuple2('939114', 'Ｆａｍ企画出版'),
			_Utils_Tuple2('939115', 'シマモトケイインナープロジェクト'),
			_Utils_Tuple2('939117', 'ひだまり出版'),
			_Utils_Tuple2('939118', 'ジリタリ'),
			_Utils_Tuple2('939119', 'バイオクリエイトプレス'),
			_Utils_Tuple2('939120', '渕上印刷'),
			_Utils_Tuple2('939121', 'プラヤ'),
			_Utils_Tuple2('939122', 'フリップブックス'),
			_Utils_Tuple2('939123', 'ブレインキャスト'),
			_Utils_Tuple2('939124', 'ハートフィールド・アソシエイツ'),
			_Utils_Tuple2('939125', 'ブラウンストーン・ブックス'),
			_Utils_Tuple2('939126', 'ＢＬＡＣＫＢＯＸ'),
			_Utils_Tuple2('939127', 'ボロンテ'),
			_Utils_Tuple2('939128', 'ピーワーク'),
			_Utils_Tuple2('939129', 'ホンダアクセス'),
			_Utils_Tuple2('939130', 'ＰＡＮＵＲＧＩＣ ＰＵＢＬＩＳＨＩＮＧ'),
			_Utils_Tuple2('939131', '宝文社'),
			_Utils_Tuple2('939132', 'びゅーらいふ'),
			_Utils_Tuple2('939133', 'ベルーガ'),
			_Utils_Tuple2('939134', '白竜社'),
			_Utils_Tuple2('939136', '広島リビング新聞社'),
			_Utils_Tuple2('939137', '火の鳥社'),
			_Utils_Tuple2('939138', 'フリースタイル'),
			_Utils_Tuple2('939139', '街から舎'),
			_Utils_Tuple2('939140', 'ハピネット'),
			_Utils_Tuple2('939141', 'Ｆｉｎｌａｎｄｉａ文化事業団'),
			_Utils_Tuple2('939142', '福島民友新聞社'),
			_Utils_Tuple2('939143', '不二たん白質研究振興財団'),
			_Utils_Tuple2('939144', '表現研究所'),
			_Utils_Tuple2('939145', '北星社'),
			_Utils_Tuple2('939146', '広島大学大学院工学研究科情報工学専攻システム信頼性工学研究室'),
			_Utils_Tuple2('939147', 'バリュー出版'),
			_Utils_Tuple2('939148', 'カイカイキキ'),
			_Utils_Tuple2('939149', 'ビーエスエス'),
			_Utils_Tuple2('939150', 'ふたば工房'),
			_Utils_Tuple2('939151', 'ファストラルハビタ'),
			_Utils_Tuple2('939152', '文栄社'),
			_Utils_Tuple2('939153', 'ビスタピーエス'),
			_Utils_Tuple2('939154', '本の風景社'),
			_Utils_Tuple2('939155', 'プランニング２１'),
			_Utils_Tuple2('939156', '法律情報出版'),
			_Utils_Tuple2('939157', '浮游社'),
			_Utils_Tuple2('939159', 'フロネーシス桜蔭社'),
			_Utils_Tuple2('939160', '北陸電算'),
			_Utils_Tuple2('939161', 'ブックハウス'),
			_Utils_Tuple2('939162', 'ファーストリテイリング'),
			_Utils_Tuple2('939163', '白土社'),
			_Utils_Tuple2('943786', 'マーコム'),
			_Utils_Tuple2('943787', 'マーチ出版'),
			_Utils_Tuple2('943788', 'マーベリック出版'),
			_Utils_Tuple2('943789', 'マイコール商会'),
			_Utils_Tuple2('943790', 'マイコール商会出版事業部'),
			_Utils_Tuple2('943791', 'シータスク'),
			_Utils_Tuple2('943792', 'メディア出版'),
			_Utils_Tuple2('943793', '無心社'),
			_Utils_Tuple2('943794', '町田ひろ子インテリアアカデミー'),
			_Utils_Tuple2('943795', 'マイヘルス社'),
			_Utils_Tuple2('943796', 'マイホーム情報'),
			_Utils_Tuple2('943797', 'マイライフ社'),
			_Utils_Tuple2('943798', '牧野出版'),
			_Utils_Tuple2('943799', 'マクミラン出版社'),
			_Utils_Tuple2('943800', '真砂書房'),
			_Utils_Tuple2('943801', '真の道出版部'),
			_Utils_Tuple2('943802', 'マシニスト出版'),
			_Utils_Tuple2('943803', 'マスコミ評論社'),
			_Utils_Tuple2('943804', 'メリットファイブ'),
			_Utils_Tuple2('943805', '又三郎書店'),
			_Utils_Tuple2('943806', '松浦史料博物館'),
			_Utils_Tuple2('943807', '毎日文庫'),
			_Utils_Tuple2('943808', '前田書店出版部'),
			_Utils_Tuple2('943809', '松沢書店'),
			_Utils_Tuple2('943811', '松島書店'),
			_Utils_Tuple2('943812', 'マップ・システム・カンパニー'),
			_Utils_Tuple2('943813', '松美書房'),
			_Utils_Tuple2('943814', 'マドラ'),
			_Utils_Tuple2('943815', 'マニラ会'),
			_Utils_Tuple2('943816', 'マネーライフ社'),
			_Utils_Tuple2('943817', 'マネジメント実務センター'),
			_Utils_Tuple2('943818', '真理屋'),
			_Utils_Tuple2('943819', 'マリンジャーナル社'),
			_Utils_Tuple2('943820', 'ミナ書房'),
			_Utils_Tuple2('943821', '丸正事件再審をかちとる東京・神奈川の会'),
			_Utils_Tuple2('943823', '丸善製販部'),
			_Utils_Tuple2('943824', '丸善名古屋支店'),
			_Utils_Tuple2('943825', '水戸芸術館現代美術ギャラリー'),
			_Utils_Tuple2('943826', '漫画社'),
			_Utils_Tuple2('943827', '満州第２０１部隊戦記刊行会'),
			_Utils_Tuple2('943828', '萬華社'),
			_Utils_Tuple2('943830', 'ＭＹ詩集編集部'),
			_Utils_Tuple2('943831', '三浦書店'),
			_Utils_Tuple2('943832', '三重県郷土資料刊行会'),
			_Utils_Tuple2('943833', '三重県俳句協会'),
			_Utils_Tuple2('943834', '未開出版社'),
			_Utils_Tuple2('943835', '丸善洋書センター卸営業部'),
			_Utils_Tuple2('943836', '三木楽器'),
			_Utils_Tuple2('943837', '三木熊二先生遺徳顕彰会'),
			_Utils_Tuple2('943838', '雅書房'),
			_Utils_Tuple2('943839', '岬書房'),
			_Utils_Tuple2('943840', '三崎堂書店'),
			_Utils_Tuple2('943841', '三田書房'),
			_Utils_Tuple2('943842', '水甕社'),
			_Utils_Tuple2('943844', '野の花'),
			_Utils_Tuple2('943845', 'みそさざい社'),
			_Utils_Tuple2('943846', '道田忠雄'),
			_Utils_Tuple2('943847', 'みちのく芸術社'),
			_Utils_Tuple2('943848', 'みちのく発行所'),
			_Utils_Tuple2('943849', '三井企画'),
			_Utils_Tuple2('943850', 'みくに書房'),
			_Utils_Tuple2('943851', '三石出版社'),
			_Utils_Tuple2('943852', '三菱経済研究所'),
			_Utils_Tuple2('943853', '三菱総合研究所'),
			_Utils_Tuple2('943854', 'みつる教育図書出版'),
			_Utils_Tuple2('943855', 'イクォリティ(平和文化)'),
			_Utils_Tuple2('943856', '瑞穂'),
			_Utils_Tuple2('943857', '丸伸'),
			_Utils_Tuple2('943858', 'みなかみ短歌会'),
			_Utils_Tuple2('943859', '港出版合作社'),
			_Utils_Tuple2('943860', '南日本放送'),
			_Utils_Tuple2('943861', '南富士病院資料室'),
			_Utils_Tuple2('943862', 'ミニコミセンター'),
			_Utils_Tuple2('943863', '峯村国一全歌集刊行会'),
			_Utils_Tuple2('943865', '民族振興文化協会'),
			_Utils_Tuple2('943866', 'みみづく'),
			_Utils_Tuple2('943867', '未名社'),
			_Utils_Tuple2('943868', '三森印刷'),
			_Utils_Tuple2('943869', '稔書房'),
			_Utils_Tuple2('943870', '都出版社'),
			_Utils_Tuple2('943871', '宮崎春秋社'),
			_Utils_Tuple2('943872', 'メディカスインターコン'),
			_Utils_Tuple2('943873', '宮脇書店'),
			_Utils_Tuple2('943874', '宮坂出版社'),
			_Utils_Tuple2('943875', '宮下商事'),
			_Utils_Tuple2('943876', 'ミュージアム出版'),
			_Utils_Tuple2('943877', '御堂企画'),
			_Utils_Tuple2('943878', 'ミュージックトレード社'),
			_Utils_Tuple2('943879', 'みゆき書房'),
			_Utils_Tuple2('943880', '三善'),
			_Utils_Tuple2('943881', '未来工房'),
			_Utils_Tuple2('943882', 'ミリオン出版'),
			_Utils_Tuple2('943883', 'ミリオン出版社'),
			_Utils_Tuple2('943884', '民間伝承六人社'),
			_Utils_Tuple2('943885', '民社党教宣局'),
			_Utils_Tuple2('943886', '民音音楽資料館'),
			_Utils_Tuple2('943887', '民主教育協会'),
			_Utils_Tuple2('943888', '政策研究フォーラム'),
			_Utils_Tuple2('943889', '民族と政治社'),
			_Utils_Tuple2('943890', 'みんと'),
			_Utils_Tuple2('943891', '民論社'),
			_Utils_Tuple2('943892', '民話の研究会'),
			_Utils_Tuple2('943893', 'ＭＩＫ出版'),
			_Utils_Tuple2('943895', '麦の芽出版'),
			_Utils_Tuple2('943896', '武蔵書房'),
			_Utils_Tuple2('943897', '武蔵野学園出版部'),
			_Utils_Tuple2('943898', '武蔵野書房'),
			_Utils_Tuple2('943899', '虫プロダクシヨン'),
			_Utils_Tuple2('943901', '未来出版'),
			_Utils_Tuple2('943902', '町田ひろ子インテリア出版局'),
			_Utils_Tuple2('943903', '明学出版社'),
			_Utils_Tuple2('943904', '明啓社'),
			_Utils_Tuple2('943905', '茗溪堂'),
			_Utils_Tuple2('943906', '明光企画'),
			_Utils_Tuple2('943907', '茗光社'),
			_Utils_Tuple2('943908', '明治書房'),
			_Utils_Tuple2('943909', 'ミクタムレコード'),
			_Utils_Tuple2('943910', '明治屋本社企画室'),
			_Utils_Tuple2('943911', '明治大正昭和新聞研究会'),
			_Utils_Tuple2('943912', '明治東洋医学院同窓会出版部'),
			_Utils_Tuple2('943913', '明善堂書店'),
			_Utils_Tuple2('943914', '明窓社'),
			_Utils_Tuple2('943916', '鳴鳳社出版'),
			_Utils_Tuple2('943917', '明隣堂出版部'),
			_Utils_Tuple2('943918', '明和珠算教材会'),
			_Utils_Tuple2('943919', 'メデイアＫ'),
			_Utils_Tuple2('943920', 'メディカルエレクトロタイムス'),
			_Utils_Tuple2('943922', 'モンセラ・インターナショナル'),
			_Utils_Tuple2('943923', 'モーター毎日出版'),
			_Utils_Tuple2('943924', 'モーターマガジン社'),
			_Utils_Tuple2('943925', 'モーターマテリアル社'),
			_Utils_Tuple2('943926', '明研図書'),
			_Utils_Tuple2('943927', 'モードエモード社'),
			_Utils_Tuple2('943928', '木犀書房'),
			_Utils_Tuple2('943929', 'メディア企画'),
			_Utils_Tuple2('943930', 'もぐら書房'),
			_Utils_Tuple2('943931', '木馬書館'),
			_Utils_Tuple2('943932', '門司宣里'),
			_Utils_Tuple2('943933', 'モダンテニス社'),
			_Utils_Tuple2('943934', 'モデルアート社'),
			_Utils_Tuple2('943935', 'クリエイティブ岡山'),
			_Utils_Tuple2('943936', 'モノグラム社'),
			_Utils_Tuple2('943937', 'モモセ英語研究会'),
			_Utils_Tuple2('943938', '盛書房'),
			_Utils_Tuple2('943939', 'モリス書房'),
			_Utils_Tuple2('943940', '門出版'),
			_Utils_Tuple2('943941', '問題と研究出版'),
			_Utils_Tuple2('943942', '門屋出版部'),
			_Utils_Tuple2('943943', 'メディサイエンス社'),
			_Utils_Tuple2('943944', '丸善ＭＡＳＩＳセンター'),
			_Utils_Tuple2('943945', 'ムジカノーヴァ'),
			_Utils_Tuple2('943948', 'ネオ書房'),
			_Utils_Tuple2('943949', 'マスデザイン'),
			_Utils_Tuple2('943950', 'めいけい出版'),
			_Utils_Tuple2('943951', '丸善ブックメイツ'),
			_Utils_Tuple2('943952', '道の島社'),
			_Utils_Tuple2('943953', '昧爽社'),
			_Utils_Tuple2('943954', 'みずき書房'),
			_Utils_Tuple2('943955', 'むし社'),
			_Utils_Tuple2('943956', 'マルチメディア研究所'),
			_Utils_Tuple2('943957', '夢想社'),
			_Utils_Tuple2('943958', 'マスコミ出版社'),
			_Utils_Tuple2('943959', 'ミュージック・マガジン'),
			_Utils_Tuple2('943960', 'みみずくぷれす'),
			_Utils_Tuple2('943961', '民評社'),
			_Utils_Tuple2('943962', '美土里書房'),
			_Utils_Tuple2('943963', 'ミサワホーム総合研究所'),
			_Utils_Tuple2('943964', '三峯出版事業部'),
			_Utils_Tuple2('943965', '丸善広島出版サービスセンター'),
			_Utils_Tuple2('943967', 'マロンブックス'),
			_Utils_Tuple2('943968', '鱒書房'),
			_Utils_Tuple2('943970', '緑の牧場クリスチャンミニストリーズ'),
			_Utils_Tuple2('943971', 'マガジンアンリエット'),
			_Utils_Tuple2('943972', 'もりの出版'),
			_Utils_Tuple2('943973', '政エ門出版'),
			_Utils_Tuple2('943974', 'まほろば書房'),
			_Utils_Tuple2('943975', 'メディカルブックサービス'),
			_Utils_Tuple2('943976', '明文堂書店'),
			_Utils_Tuple2('943977', '三井書房'),
			_Utils_Tuple2('943978', '椋の木社'),
			_Utils_Tuple2('943979', 'メディアハウス出版会'),
			_Utils_Tuple2('943980', '文樹社'),
			_Utils_Tuple2('943981', '南信州新聞社'),
			_Utils_Tuple2('943982', '明和産業'),
			_Utils_Tuple2('943984', 'ミューリサーチ'),
			_Utils_Tuple2('943985', 'メディカル・コア日本医学中央会'),
			_Utils_Tuple2('943986', '槙書房'),
			_Utils_Tuple2('943987', 'マイクロソフトウェア'),
			_Utils_Tuple2('943988', 'メルヘン社'),
			_Utils_Tuple2('943989', 'メディカルチャー'),
			_Utils_Tuple2('943991', '松下電工ライフスケッチ研究室'),
			_Utils_Tuple2('943992', '武庫川女子大学出版部'),
			_Utils_Tuple2('943993', 'ミディ企画'),
			_Utils_Tuple2('943994', 'マトリックス'),
			_Utils_Tuple2('943995', 'ミュー'),
			_Utils_Tuple2('943996', '北陸学芸出版'),
			_Utils_Tuple2('943997', '瑞穂社'),
			_Utils_Tuple2('943999', 'ミトラ'),
			_Utils_Tuple2('944002', '武蔵ゼミナール'),
			_Utils_Tuple2('944004', '幹書房'),
			_Utils_Tuple2('944005', 'ミドリ印刷'),
			_Utils_Tuple2('944006', 'モルグ社'),
			_Utils_Tuple2('944007', '宮城県短歌クラブ'),
			_Utils_Tuple2('944008', '未来工学研究所'),
			_Utils_Tuple2('944009', '丸紅'),
			_Utils_Tuple2('944010', 'メディアインフォメーション'),
			_Utils_Tuple2('944011', 'メディカプレス'),
			_Utils_Tuple2('944012', 'メディカルジャーナル社'),
			_Utils_Tuple2('944013', '室町書房'),
			_Utils_Tuple2('944014', '前田印刷出版部'),
			_Utils_Tuple2('944015', '未踏社'),
			_Utils_Tuple2('944016', '正木明'),
			_Utils_Tuple2('944017', 'マインドカルチャーセンター'),
			_Utils_Tuple2('944018', '三笠出版社'),
			_Utils_Tuple2('944019', 'マリア福音姉妹会'),
			_Utils_Tuple2('944020', 'マット出版'),
			_Utils_Tuple2('944021', '未来予測研究所'),
			_Utils_Tuple2('944022', '武蔵野クリエイト'),
			_Utils_Tuple2('944023', 'マスターフーズリミテッド'),
			_Utils_Tuple2('944026', 'メディカルプレス'),
			_Utils_Tuple2('944028', 'メディカル・ライフ'),
			_Utils_Tuple2('944029', 'ラポール'),
			_Utils_Tuple2('944030', '森企画'),
			_Utils_Tuple2('944031', 'マクミランリサーチ研究所'),
			_Utils_Tuple2('944032', 'ムトウ'),
			_Utils_Tuple2('944033', 'マイン'),
			_Utils_Tuple2('944034', '未踏科学技術協会'),
			_Utils_Tuple2('944035', 'マホロバアート'),
			_Utils_Tuple2('944036', '三宅特許問題研究所'),
			_Utils_Tuple2('944037', 'ミューズ'),
			_Utils_Tuple2('944038', 'マチス教育システム'),
			_Utils_Tuple2('944039', 'メディカルフォーラム社'),
			_Utils_Tuple2('944040', '舞字社'),
			_Utils_Tuple2('944041', '三重社会経済研究センター'),
			_Utils_Tuple2('944042', 'マーケティングリサーチサービス出版局'),
			_Utils_Tuple2('944044', '明治学院大学立法研究会'),
			_Utils_Tuple2('944045', 'モリタプロジェクト'),
			_Utils_Tuple2('944046', 'モア出版'),
			_Utils_Tuple2('944047', 'モトナ'),
			_Utils_Tuple2('944048', 'ＭＩＲＡＩ(ミライ)'),
			_Utils_Tuple2('944049', '牟禮印刷'),
			_Utils_Tuple2('944050', '源書房'),
			_Utils_Tuple2('944051', 'メディアボックス社'),
			_Utils_Tuple2('944052', 'みずすまし舎'),
			_Utils_Tuple2('944053', '盛岡タイムス社'),
			_Utils_Tuple2('944054', 'マック出版'),
			_Utils_Tuple2('944055', '松本工房'),
			_Utils_Tuple2('944056', 'マナメッセ'),
			_Utils_Tuple2('944057', '村石日本語研究所'),
			_Utils_Tuple2('944058', '無限社'),
			_Utils_Tuple2('944059', '翠書房'),
			_Utils_Tuple2('944060', 'メトロポリタン'),
			_Utils_Tuple2('944062', '三千和商工'),
			_Utils_Tuple2('944063', '三空出版'),
			_Utils_Tuple2('944064', '武蔵書院'),
			_Utils_Tuple2('944065', 'デジタルコンテンツ協会'),
			_Utils_Tuple2('944066', '美津穂メディアサービス'),
			_Utils_Tuple2('944067', '松永書店出版部'),
			_Utils_Tuple2('944068', '三重大学出版会(三重学術出版会)'),
			_Utils_Tuple2('944069', 'まつ出版'),
			_Utils_Tuple2('944071', 'マーキュリー・ソフトウェア・ジャパン'),
			_Utils_Tuple2('944072', 'メディア・リンク・システム'),
			_Utils_Tuple2('944073', '三菱樹脂'),
			_Utils_Tuple2('944074', '丸善大阪天満橋松坂屋店'),
			_Utils_Tuple2('944076', 'ミドスト'),
			_Utils_Tuple2('944077', 'みちのく書房'),
			_Utils_Tuple2('944078', '三菱商事'),
			_Utils_Tuple2('944079', 'マドラ出版'),
			_Utils_Tuple2('944081', '松島デザイン事務所'),
			_Utils_Tuple2('944082', 'マナ出版'),
			_Utils_Tuple2('944083', '丸井'),
			_Utils_Tuple2('944084', 'Ｍｅｔｒｏ Ｐｕｂｌｉｓｈｉｎｇ'),
			_Utils_Tuple2('944085', '三原医学社'),
			_Utils_Tuple2('944086', 'マージ'),
			_Utils_Tuple2('944087', '無名庵'),
			_Utils_Tuple2('944088', '夢窓庵'),
			_Utils_Tuple2('944089', 'キャラバン・インタラクティブ'),
			_Utils_Tuple2('944090', 'まどかクリエーション'),
			_Utils_Tuple2('944091', 'マルモ出版'),
			_Utils_Tuple2('944092', 'マスター'),
			_Utils_Tuple2('944093', '睦沢町歴史民俗資料館'),
			_Utils_Tuple2('944094', 'プレスウエーブ'),
			_Utils_Tuple2('944095', '南日本出版'),
			_Utils_Tuple2('944096', 'マックワールド・コミュニケーションズ・ジャパン・インク'),
			_Utils_Tuple2('944097', 'メディックス'),
			_Utils_Tuple2('944098', 'メタ・ブレーン'),
			_Utils_Tuple2('944100', 'ＭＥＣ出版'),
			_Utils_Tuple2('944101', 'マガジンランド'),
			_Utils_Tuple2('944102', '三重大学医療技術短期大学部'),
			_Utils_Tuple2('944103', '三浦印刷'),
			_Utils_Tuple2('944104', 'マコス'),
			_Utils_Tuple2('944105', '森教育学園出版部'),
			_Utils_Tuple2('944106', '森永製菓'),
			_Utils_Tuple2('944107', 'メディアポート'),
			_Utils_Tuple2('944108', '文芸遊人社'),
			_Utils_Tuple2('944109', 'メディカルパブリッシャー'),
			_Utils_Tuple2('944110', '魔女の家Ｂｏｏｋｓ'),
			_Utils_Tuple2('944112', 'ミトヨ図書出版'),
			_Utils_Tuple2('944113', 'ミュージアム図書'),
			_Utils_Tuple2('944114', 'まな出版企画'),
			_Utils_Tuple2('944115', 'メトロ'),
			_Utils_Tuple2('944116', 'むぎ社'),
			_Utils_Tuple2('944117', 'マップテクノ仙台'),
			_Utils_Tuple2('944118', 'ＭＯＯプロダクション'),
			_Utils_Tuple2('944119', 'マルチソフト'),
			_Utils_Tuple2('944120', '丸善札幌支店出版サービスセンター'),
			_Utils_Tuple2('944121', '前田書店'),
			_Utils_Tuple2('944122', '無機材質研究所'),
			_Utils_Tuple2('944123', 'メディカルアシスト'),
			_Utils_Tuple2('944124', 'ワイアンドエフ'),
			_Utils_Tuple2('944125', 'むくげの会'),
			_Utils_Tuple2('944126', '無尽蔵'),
			_Utils_Tuple2('944127', 'ミクロコスモス'),
			_Utils_Tuple2('944128', '明治生命フィナンシュアランス研究所'),
			_Utils_Tuple2('944129', 'メディアソフト研究所'),
			_Utils_Tuple2('944130', 'メジカルセンス'),
			_Utils_Tuple2('944131', 'モリテックス'),
			_Utils_Tuple2('944132', 'ミスターパートナー'),
			_Utils_Tuple2('944133', 'みき書房'),
			_Utils_Tuple2('944134', '毎日新聞名古屋開発'),
			_Utils_Tuple2('944135', '増田屋コーポレーション'),
			_Utils_Tuple2('944136', 'マジェスティック・シーン'),
			_Utils_Tuple2('944137', 'マーケティング総合設計研究所・総合情報事業開発機構'),
			_Utils_Tuple2('944138', '三井物産'),
			_Utils_Tuple2('944139', '瞑想社'),
			_Utils_Tuple2('944140', 'もも企画'),
			_Utils_Tuple2('944141', 'マシンコントロールシステム'),
			_Utils_Tuple2('944142', 'メデジットコーポレーション'),
			_Utils_Tuple2('944143', '眼鏡視力研究所'),
			_Utils_Tuple2('944144', 'メディア・ラボ'),
			_Utils_Tuple2('944145', 'メティス・メディカ'),
			_Utils_Tuple2('944146', 'モビリティ文化出版'),
			_Utils_Tuple2('944147', 'ミュレイディア'),
			_Utils_Tuple2('944148', 'モイス研究所'),
			_Utils_Tuple2('944149', 'みさき出版'),
			_Utils_Tuple2('944150', '三杉圭子'),
			_Utils_Tuple2('944151', 'メディカルパースペクティブス'),
			_Utils_Tuple2('944153', 'マックザウルス'),
			_Utils_Tuple2('944155', '民報印刷'),
			_Utils_Tuple2('944156', 'ムナカタ地図店'),
			_Utils_Tuple2('944157', 'メディカルドゥ'),
			_Utils_Tuple2('944158', 'マインド・出版'),
			_Utils_Tuple2('944159', 'メディカスインターコン大阪支社'),
			_Utils_Tuple2('944160', 'みもざ書房'),
			_Utils_Tuple2('944161', 'メイプルプレス'),
			_Utils_Tuple2('944162', 'マイクロテクノロジー'),
			_Utils_Tuple2('944163', 'アム・プロモーション'),
			_Utils_Tuple2('944165', 'メディス出版部'),
			_Utils_Tuple2('944166', '丸善名古屋松坂屋出版サービスセンター'),
			_Utils_Tuple2('944167', 'マネージドケア・ジャパン'),
			_Utils_Tuple2('944169', 'パスパル'),
			_Utils_Tuple2('944170', '繭書林'),
			_Utils_Tuple2('944171', '松本歯科大学出版会'),
			_Utils_Tuple2('944172', 'マウンテン出版'),
			_Utils_Tuple2('944173', 'みずのわ出版'),
			_Utils_Tuple2('944174', 'マイストロ'),
			_Utils_Tuple2('944175', '三重県三重郡菰野町'),
			_Utils_Tuple2('944176', 'ママ・チョイス'),
			_Utils_Tuple2('944177', 'マイクロ印刷'),
			_Utils_Tuple2('944178', 'マセマ'),
			_Utils_Tuple2('944179', '毎日新聞社北海道支社'),
			_Utils_Tuple2('944180', 'メディアクリエイト'),
			_Utils_Tuple2('944181', '桃山学院大学総合研究所'),
			_Utils_Tuple2('944182', 'メディアレブ'),
			_Utils_Tuple2('944183', 'マイブック社'),
			_Utils_Tuple2('944184', 'ＭＯＭＯ出版'),
			_Utils_Tuple2('944185', '万葉書房'),
			_Utils_Tuple2('944186', 'メディアカイト'),
			_Utils_Tuple2('944187', 'マルアイ'),
			_Utils_Tuple2('944188', '藻川出版'),
			_Utils_Tuple2('944189', '森田出版'),
			_Utils_Tuple2('944190', 'モビーディック'),
			_Utils_Tuple2('944191', 'みち書房'),
			_Utils_Tuple2('944192', '美洋'),
			_Utils_Tuple2('944193', '名光通信社'),
			_Utils_Tuple2('944194', 'マリンアド'),
			_Utils_Tuple2('944195', 'マガジンボックス社'),
			_Utils_Tuple2('944196', 'マ・シェリ'),
			_Utils_Tuple2('944197', 'マツミハウジング'),
			_Utils_Tuple2('944198', 'モンキーブックス'),
			_Utils_Tuple2('944199', 'みえばし出版印刷'),
			_Utils_Tuple2('944200', 'メディカル・コミュニケーションズ'),
			_Utils_Tuple2('944201', 'メディカル・スタッフ'),
			_Utils_Tuple2('944202', 'モデラート'),
			_Utils_Tuple2('944203', '民主音楽協会'),
			_Utils_Tuple2('944204', 'ミクスプランニング'),
			_Utils_Tuple2('944205', '薬ゼミ情報教育センター'),
			_Utils_Tuple2('944206', 'メディアルネサンス'),
			_Utils_Tuple2('944207', '木曜社'),
			_Utils_Tuple2('944208', 'ミヤチ'),
			_Utils_Tuple2('944209', '松下電工電機営業企画部'),
			_Utils_Tuple2('944210', 'マップウェア'),
			_Utils_Tuple2('944211', 'ミューエス'),
			_Utils_Tuple2('944212', '御園書房'),
			_Utils_Tuple2('944213', '三重大学附属図書館'),
			_Utils_Tuple2('944214', 'モッツ出版'),
			_Utils_Tuple2('944215', 'ミーナ出版'),
			_Utils_Tuple2('944216', '莫邦富事務所'),
			_Utils_Tuple2('944217', 'マルチグラフィックス'),
			_Utils_Tuple2('944218', 'マネジメント・ソリューション'),
			_Utils_Tuple2('944219', '明成社'),
			_Utils_Tuple2('944220', 'マッシュ'),
			_Utils_Tuple2('944221', '名鑑社'),
			_Utils_Tuple2('944222', 'メルヘン立体童話企画'),
			_Utils_Tuple2('944223', 'メキキ'),
			_Utils_Tuple2('944224', '森の風プロジェクト'),
			_Utils_Tuple2('944225', 'マーブル'),
			_Utils_Tuple2('944226', 'ムルク'),
			_Utils_Tuple2('944227', '室屋訂児'),
			_Utils_Tuple2('944228', '松本清張記念館'),
			_Utils_Tuple2('944229', '丸善京都支店'),
			_Utils_Tuple2('944230', 'あっぷるはうす'),
			_Utils_Tuple2('944231', 'ミ～ヤ'),
			_Utils_Tuple2('944232', '未来設計'),
			_Utils_Tuple2('944233', 'モモ'),
			_Utils_Tuple2('944234', '森拓之事務所'),
			_Utils_Tuple2('944235', 'まどか出版'),
			_Utils_Tuple2('944236', '幻堂出版'),
			_Utils_Tuple2('944237', 'ネット武蔵野'),
			_Utils_Tuple2('944238', 'みづほ'),
			_Utils_Tuple2('944239', '三重県人権問題研究所'),
			_Utils_Tuple2('946343', '藥業経済研究所'),
			_Utils_Tuple2('946344', '薬事新報社'),
			_Utils_Tuple2('946345', '八雲短歌会'),
			_Utils_Tuple2('946346', '優游社'),
			_Utils_Tuple2('946347', 'ユニ・ポスト'),
			_Utils_Tuple2('946348', '安川書店'),
			_Utils_Tuple2('946349', '野草社'),
			_Utils_Tuple2('946350', '矢立出版'),
			_Utils_Tuple2('946351', '山下書店'),
			_Utils_Tuple2('946352', 'やどりぎ短歌会'),
			_Utils_Tuple2('946353', '山と旅社'),
			_Utils_Tuple2('946354', '郡山城史跡柳沢文庫保存会'),
			_Utils_Tuple2('946355', 'ヤブ原出版部'),
			_Utils_Tuple2('946356', '山形地域社会研究会出版部'),
			_Utils_Tuple2('946357', '山崎書房'),
			_Utils_Tuple2('946358', '山城書房'),
			_Utils_Tuple2('946359', '大和文華館'),
			_Utils_Tuple2('946360', '大和屋出版'),
			_Utils_Tuple2('946361', '大和臨床医学談話会'),
			_Utils_Tuple2('946362', '山梨郷土研究会'),
			_Utils_Tuple2('946363', '山梨プランニングセンター'),
			_Utils_Tuple2('946364', '山梨文化学園'),
			_Utils_Tuple2('946365', '友愛書房'),
			_Utils_Tuple2('946366', '野蚕研究会'),
			_Utils_Tuple2('946367', '優工社'),
			_Utils_Tuple2('946368', '有秀堂'),
			_Utils_Tuple2('946369', '郵趣サービス社'),
			_Utils_Tuple2('946370', '優樹社'),
			_Utils_Tuple2('946371', '悠想社'),
			_Utils_Tuple2('946372', '郵便番号普及協会'),
			_Utils_Tuple2('946373', '有文社'),
			_Utils_Tuple2('946374', '有文社'),
			_Utils_Tuple2('946375', '祐文堂'),
			_Utils_Tuple2('946376', '有朋社'),
			_Utils_Tuple2('946377', '友隣社洋書部'),
			_Utils_Tuple2('946378', '祐和印刷出版'),
			_Utils_Tuple2('946379', '雪書房'),
			_Utils_Tuple2('946380', 'ゆきのした文化協会'),
			_Utils_Tuple2('946381', 'ゆく春発行所'),
			_Utils_Tuple2('946382', '豊書房'),
			_Utils_Tuple2('946383', 'ユタカ紙業'),
			_Utils_Tuple2('946384', 'ヤングアダルト図書総目録刊行会'),
			_Utils_Tuple2('946385', 'ユニバシティプレスユニオン'),
			_Utils_Tuple2('946386', 'ユニ・ピー・アール'),
			_Utils_Tuple2('946387', 'ユニ・ブレイン出版事業部'),
			_Utils_Tuple2('946388', 'ユナイテッドパブリッシャーズサービス'),
			_Utils_Tuple2('946389', 'ゆのき書房'),
			_Utils_Tuple2('946390', 'ゆりあぺむぺる工房'),
			_Utils_Tuple2('946391', 'ゆりかご社'),
			_Utils_Tuple2('946392', '夜明社'),
			_Utils_Tuple2('946393', '山口新聞舗'),
			_Utils_Tuple2('946394', '養鶏世界社'),
			_Utils_Tuple2('946395', '養鶏之日本社'),
			_Utils_Tuple2('946396', '陽光出版社'),
			_Utils_Tuple2('946397', '陽樹社'),
			_Utils_Tuple2('946399', '読売インフォメーションサービス'),
			_Utils_Tuple2('946400', '洋文社'),
			_Utils_Tuple2('946401', '耀連会'),
			_Utils_Tuple2('946402', 'ヨーロッパ・エコノミークラブ'),
			_Utils_Tuple2('946403', '自由時間デザイン協会'),
			_Utils_Tuple2('946405', '横浜演劇研究社'),
			_Utils_Tuple2('946406', '悠々社'),
			_Utils_Tuple2('946408', '横山住雄'),
			_Utils_Tuple2('946409', '横山徹也'),
			_Utils_Tuple2('946410', '横山良市'),
			_Utils_Tuple2('946411', '吉川書房'),
			_Utils_Tuple2('946412', '吉男第二句集刊行委員会'),
			_Utils_Tuple2('946413', '吉徳'),
			_Utils_Tuple2('946414', '吉見書店'),
			_Utils_Tuple2('946415', '予定社'),
			_Utils_Tuple2('946416', '米沢金剛会'),
			_Utils_Tuple2('946417', '米原十六堂'),
			_Utils_Tuple2('946418', '米本書店'),
			_Utils_Tuple2('946420', '山脈文庫'),
			_Utils_Tuple2('946421', 'ユニウス'),
			_Utils_Tuple2('946422', '雄景社'),
			_Utils_Tuple2('946423', '米川研究所'),
			_Utils_Tuple2('946424', '悠思社'),
			_Utils_Tuple2('946425', '雪谷出版社'),
			_Utils_Tuple2('946426', '悠々舎'),
			_Utils_Tuple2('946427', '吉田晴紀'),
			_Utils_Tuple2('946428', 'ユニオンサービス'),
			_Utils_Tuple2('946429', '郵研社'),
			_Utils_Tuple2('946431', '山猫書林'),
			_Utils_Tuple2('946433', 'よしのや本間'),
			_Utils_Tuple2('946434', 'ヤングライフ出版'),
			_Utils_Tuple2('946435', 'ゆぴてる社'),
			_Utils_Tuple2('946438', 'ユネスコ・アジア文化センター'),
			_Utils_Tuple2('946439', '吉井書店'),
			_Utils_Tuple2('946440', 'ユート・ブレーン'),
			_Utils_Tuple2('946443', 'ユニバーサル・アカデミー・プレス'),
			_Utils_Tuple2('946444', '谷中村出版社'),
			_Utils_Tuple2('946445', '矢切書房'),
			_Utils_Tuple2('946446', '悠久書房'),
			_Utils_Tuple2('946447', '友人社'),
			_Utils_Tuple2('946449', 'ユピテル'),
			_Utils_Tuple2('946450', 'ユニ出版'),
			_Utils_Tuple2('946451', 'ヤマシナ印刷'),
			_Utils_Tuple2('946452', '山脇印刷出版事業部'),
			_Utils_Tuple2('946453', '雄峰出版'),
			_Utils_Tuple2('946454', 'ＵＲＷ大伴研究室'),
			_Utils_Tuple2('946455', 'ヤマト出版局'),
			_Utils_Tuple2('946457', 'ヨミセス'),
			_Utils_Tuple2('946458', '裕林社'),
			_Utils_Tuple2('946459', '雄文社'),
			_Utils_Tuple2('946460', 'ユー・モア'),
			_Utils_Tuple2('946461', 'ユーシープランニング'),
			_Utils_Tuple2('946462', 'ヤマショー'),
			_Utils_Tuple2('946463', 'ユニ・エイト'),
			_Utils_Tuple2('946464', 'ユー・コスモス'),
			_Utils_Tuple2('946465', '山崎書林'),
			_Utils_Tuple2('946466', '横浜麦秋社'),
			_Utils_Tuple2('946467', '楊炯春(ヤンヒョンチュン)'),
			_Utils_Tuple2('946468', '遊時創造'),
			_Utils_Tuple2('946469', 'ユーシン'),
			_Utils_Tuple2('946470', 'ＹＡＰＯＣ ＣＡＤ・ＣＡＭ学院'),
			_Utils_Tuple2('946471', '野外科学出版会'),
			_Utils_Tuple2('946472', 'ユー企画'),
			_Utils_Tuple2('946473', 'ヤマハ教育システム事業部'),
			_Utils_Tuple2('946474', '読売プロジェクト'),
			_Utils_Tuple2('946475', 'ユーマックス'),
			_Utils_Tuple2('946476', '横浜国立大学土木工学図書'),
			_Utils_Tuple2('946478', 'ユウバイオス倫理'),
			_Utils_Tuple2('946479', 'ＵＣＡスポーツ研究所'),
			_Utils_Tuple2('946480', 'ユリカルチュラルセンター'),
			_Utils_Tuple2('946481', 'ヤマギシズム出版社'),
			_Utils_Tuple2('946482', '弥呂久'),
			_Utils_Tuple2('946483', 'アムズ・アーツ・プレス'),
			_Utils_Tuple2('946484', '裕文社'),
			_Utils_Tuple2('946485', 'ユニオンプレス'),
			_Utils_Tuple2('946486', '邑心文庫'),
			_Utils_Tuple2('946487', '遊演体'),
			_Utils_Tuple2('946488', 'ゆすりか社'),
			_Utils_Tuple2('946489', 'ユンブル'),
			_Utils_Tuple2('946490', '揚文社'),
			_Utils_Tuple2('946491', 'ユーリーグ'),
			_Utils_Tuple2('946492', 'ヤック企画(洋販)'),
			_Utils_Tuple2('946493', '薬局新聞社'),
			_Utils_Tuple2('946494', 'ユタカ'),
			_Utils_Tuple2('946495', 'よろず医療会ラダック基金'),
			_Utils_Tuple2('946497', 'ヨナ書房'),
			_Utils_Tuple2('946498', 'やどかり出版'),
			_Utils_Tuple2('946499', 'ＹＵＫＩ書房'),
			_Utils_Tuple2('946500', '山口北州印刷'),
			_Utils_Tuple2('946501', '裕利印刷'),
			_Utils_Tuple2('946502', '雄輝出版'),
			_Utils_Tuple2('946503', '宥坐堂出版'),
			_Utils_Tuple2('946504', 'ユニバース・リサーチ'),
			_Utils_Tuple2('946506', '代々木塾出版部'),
			_Utils_Tuple2('946507', 'ユニモト'),
			_Utils_Tuple2('946508', '陽光台ＯＡプラザ'),
			_Utils_Tuple2('946509', 'ゆみる出版'),
			_Utils_Tuple2('946510', '遊友出版'),
			_Utils_Tuple2('946511', '山興印刷'),
			_Utils_Tuple2('946512', 'ユニバーサル産業'),
			_Utils_Tuple2('946514', '横浜市中央図書館'),
			_Utils_Tuple2('946515', '四谷ラウンド'),
			_Utils_Tuple2('946516', 'ヤマダメディカルシェアリング創流社'),
			_Utils_Tuple2('946517', 'ユースビジコム'),
			_Utils_Tuple2('946518', 'ユージン'),
			_Utils_Tuple2('946519', 'ユニオンエース'),
			_Utils_Tuple2('946520', '湧水社出版'),
			_Utils_Tuple2('946521', 'ユアーズ'),
			_Utils_Tuple2('946522', 'グラント'),
			_Utils_Tuple2('946523', '雪華書林'),
			_Utils_Tuple2('946524', 'ユーロジャパンエレガンス'),
			_Utils_Tuple2('946525', '遊子館'),
			_Utils_Tuple2('946526', 'ユニバーサルメディア'),
			_Utils_Tuple2('946527', 'Ｙｏｋｏｔａ Ｏｆｆｉｃｅｒｓ スパウスズクラブ'),
			_Utils_Tuple2('946528', 'ユーフォニック'),
			_Utils_Tuple2('946529', 'ユニオン産業出版部'),
			_Utils_Tuple2('946532', '山口章(拳出版)'),
			_Utils_Tuple2('946533', '横浜育英社'),
			_Utils_Tuple2('946534', 'ユーコン企画'),
			_Utils_Tuple2('946535', '山形教育用品'),
			_Utils_Tuple2('946536', 'よなごプレス社'),
			_Utils_Tuple2('946537', 'ユニクラフト'),
			_Utils_Tuple2('946538', '読売情報開発大阪'),
			_Utils_Tuple2('946539', 'ゆい出版'),
			_Utils_Tuple2('946540', '洋学史学会'),
			_Utils_Tuple2('946541', 'ユーデック'),
			_Utils_Tuple2('946542', 'ユニコム'),
			_Utils_Tuple2('946543', '夢畠'),
			_Utils_Tuple2('946544', 'アノイント・ジャパン'),
			_Utils_Tuple2('946545', '吉田学院国家試験新報社'),
			_Utils_Tuple2('946546', 'Ｕ．Ｓ．－ＰＲＯ'),
			_Utils_Tuple2('946547', '山田プランニング'),
			_Utils_Tuple2('946548', 'ヤマト屋書店'),
			_Utils_Tuple2('946549', 'Ｕ・Ｊ－Ｐ社'),
			_Utils_Tuple2('946550', '遊絲社'),
			_Utils_Tuple2('946551', '山田翻訳事務所'),
			_Utils_Tuple2('946552', '横浜図書'),
			_Utils_Tuple2('946553', '米田出版'),
			_Utils_Tuple2('946554', '遊美堂'),
			_Utils_Tuple2('946555', '山形県スポーツ振興２１世紀協会'),
			_Utils_Tuple2('946556', '豊出版社'),
			_Utils_Tuple2('946557', '夕黄旺'),
			_Utils_Tuple2('946558', '薬日新聞社'),
			_Utils_Tuple2('946559', '萬鉄五郎記念美術館'),
			_Utils_Tuple2('946560', '山田勇'),
			_Utils_Tuple2('946561', 'ユニ通信社'),
			_Utils_Tuple2('946562', '遊人工房'),
			_Utils_Tuple2('946563', 'ユニテック'),
			_Utils_Tuple2('946564', '吉成印刷出版部'),
			_Utils_Tuple2('946565', 'ヨベル'),
			_Utils_Tuple2('946566', 'ヤマダ電機'),
			_Utils_Tuple2('946567', '米澤頼子'),
			_Utils_Tuple2('946568', '横浜経営出版会'),
			_Utils_Tuple2('946570', '洋学堂書店'),
			_Utils_Tuple2('946571', 'ヨシリツ'),
			_Utils_Tuple2('946572', 'ホメオパシー出版'),
			_Utils_Tuple2('947519', 'ライフケア'),
			_Utils_Tuple2('947521', '稜北出版'),
			_Utils_Tuple2('947522', 'アートプロダクションノア'),
			_Utils_Tuple2('947523', 'らいらっく書房'),
			_Utils_Tuple2('947524', 'らくがき舎'),
			_Utils_Tuple2('947525', '洛西書院'),
			_Utils_Tuple2('947526', '凌雲出版'),
			_Utils_Tuple2('947527', 'ロゴス出版'),
			_Utils_Tuple2('947528', '酪農技術普及学会'),
			_Utils_Tuple2('947529', '酪農経済通信社'),
			_Utils_Tuple2('947530', '洛文社'),
			_Utils_Tuple2('947531', 'ラッキー商会'),
			_Utils_Tuple2('947532', 'ラテン・アメリカ協会'),
			_Utils_Tuple2('947533', 'ラバーダイジェスト社'),
			_Utils_Tuple2('947534', 'ラボ国際交流センター'),
			_Utils_Tuple2('947536', 'プロスパー'),
			_Utils_Tuple2('947537', 'ランナーズ'),
			_Utils_Tuple2('947539', 'リサーチ社'),
			_Utils_Tuple2('947540', 'リザウンド'),
			_Utils_Tuple2('947541', 'りせい書房'),
			_Utils_Tuple2('947542', 'りーぶる出版企画'),
			_Utils_Tuple2('947543', '立教大学'),
			_Utils_Tuple2('947544', '立東社'),
			_Utils_Tuple2('947545', 'リブリオ図書館販売'),
			_Utils_Tuple2('947547', '新北海道教育新聞社'),
			_Utils_Tuple2('947548', '流域短歌会'),
			_Utils_Tuple2('947549', '留園出版'),
			_Utils_Tuple2('947550', '琉球文化社'),
			_Utils_Tuple2('947551', '流行通信社'),
			_Utils_Tuple2('947552', '硫酸協会'),
			_Utils_Tuple2('947553', '流通経済大学出版'),
			_Utils_Tuple2('947554', '流通システム開発センター'),
			_Utils_Tuple2('947555', '龍谷大学国文学出版部'),
			_Utils_Tuple2('947556', 'リュミェール社'),
			_Utils_Tuple2('947557', '良道会'),
			_Utils_Tuple2('947558', '涼風学舎'),
			_Utils_Tuple2('947559', '理容文化社'),
			_Utils_Tuple2('947560', '林苑発行所'),
			_Utils_Tuple2('947561', 'ロゴス・インターナショナル'),
			_Utils_Tuple2('947562', '林業経済研究所'),
			_Utils_Tuple2('947563', '臨牀歯科社'),
			_Utils_Tuple2('947564', '林昌出版'),
			_Utils_Tuple2('947565', '臨床病理刊行会'),
			_Utils_Tuple2('947566', '林材新聞社'),
			_Utils_Tuple2('947567', '林野弘済会'),
			_Utils_Tuple2('947568', 'るいべ社'),
			_Utils_Tuple2('947569', 'ル・マルス'),
			_Utils_Tuple2('947570', '瑠璃書房'),
			_Utils_Tuple2('947571', '歴史教育者協議会'),
			_Utils_Tuple2('947572', '歴史図書目録刊行会'),
			_Utils_Tuple2('947573', 'レキシデータ'),
			_Utils_Tuple2('947574', '歴程社'),
			_Utils_Tuple2('947575', 'レクラム社'),
			_Utils_Tuple2('947576', '黎明出版'),
			_Utils_Tuple2('947577', 'れもん社'),
			_Utils_Tuple2('947578', '檸檬社'),
			_Utils_Tuple2('947579', 'レイアウト印刷'),
			_Utils_Tuple2('947580', '連合通信社'),
			_Utils_Tuple2('947581', 'リーブル'),
			_Utils_Tuple2('947582', 'ローカーヤタ・古代インド唯物論刊行会'),
			_Utils_Tuple2('947583', '労災問題研究所'),
			_Utils_Tuple2('947584', 'ライブラリー・オートメーション研究会'),
			_Utils_Tuple2('947585', '労働経済社'),
			_Utils_Tuple2('947586', '労働者学習センター'),
			_Utils_Tuple2('947587', '労働者文学会議'),
			_Utils_Tuple2('947588', '労働大学出版局'),
			_Utils_Tuple2('947589', '労働法令実務センター'),
			_Utils_Tuple2('947590', '労働問題研究会議'),
			_Utils_Tuple2('947591', '労農通信社'),
			_Utils_Tuple2('947592', 'ローマ字教育会'),
			_Utils_Tuple2('947593', '労務研究所'),
			_Utils_Tuple2('947594', '六月書房'),
			_Utils_Tuple2('947595', 'ローカル通信舎'),
			_Utils_Tuple2('947596', 'ろごすの会'),
			_Utils_Tuple2('947597', '六人社'),
			_Utils_Tuple2('947598', 'ロジスティクス学会日本支部'),
			_Utils_Tuple2('947601', 'ロゴス書房'),
			_Utils_Tuple2('947603', '瀝々社'),
			_Utils_Tuple2('947604', 'ジオグラフィー'),
			_Utils_Tuple2('947605', '栗隆社'),
			_Utils_Tuple2('947606', '冷凍食品新聞社'),
			_Utils_Tuple2('947607', 'レジャー産業研究所'),
			_Utils_Tuple2('947608', '平成出版社'),
			_Utils_Tuple2('947609', 'リビングマガジン'),
			_Utils_Tuple2('947610', '良時会'),
			_Utils_Tuple2('947611', '漉林書房'),
			_Utils_Tuple2('947613', '朗文堂'),
			_Utils_Tuple2('947614', 'ローレル書房'),
			_Utils_Tuple2('947615', 'ライセンス情報センター'),
			_Utils_Tuple2('947616', '理工評論出版'),
			_Utils_Tuple2('947617', 'リック出版'),
			_Utils_Tuple2('947618', 'リーブル京都'),
			_Utils_Tuple2('947619', '洛東社'),
			_Utils_Tuple2('947620', 'リーブル'),
			_Utils_Tuple2('947621', 'ロバート議事規則研究所'),
			_Utils_Tuple2('947622', '旅行開発/ジャルパック出版'),
			_Utils_Tuple2('947623', '臨床医薬研究協会'),
			_Utils_Tuple2('947624', '流出版'),
			_Utils_Tuple2('947625', 'ジーワン・ブックス'),
			_Utils_Tuple2('947626', 'レインボー・コミューン出版'),
			_Utils_Tuple2('947627', 'ラッセル社'),
			_Utils_Tuple2('947628', 'ライフサイエンス・メディカ'),
			_Utils_Tuple2('947630', '労研'),
			_Utils_Tuple2('947631', 'ライフエンジニアリング'),
			_Utils_Tuple2('947632', '林道舎'),
			_Utils_Tuple2('947633', 'ライトプレス出版社'),
			_Utils_Tuple2('947634', 'ルックジャパン'),
			_Utils_Tuple2('947635', 'レターボックス社'),
			_Utils_Tuple2('947636', '鹿友館'),
			_Utils_Tuple2('947637', 'リベルタ出版'),
			_Utils_Tuple2('947638', 'ラヂオプレス'),
			_Utils_Tuple2('947639', 'レムナント出版'),
			_Utils_Tuple2('947640', 'リード・レックス'),
			_Utils_Tuple2('947641', 'ランドマーク出版'),
			_Utils_Tuple2('947642', 'らん書房'),
			_Utils_Tuple2('947643', 'ライクウォーターエプロン舎'),
			_Utils_Tuple2('947644', 'ロバ通信社'),
			_Utils_Tuple2('947645', 'ライフ企画'),
			_Utils_Tuple2('947646', '楽'),
			_Utils_Tuple2('947647', 'ランダムスケッチ'),
			_Utils_Tuple2('947649', '第一生命経済研究所'),
			_Utils_Tuple2('947650', 'ランディング'),
			_Utils_Tuple2('947651', '鈴豊'),
			_Utils_Tuple2('947652', 'ろっぽう新社'),
			_Utils_Tuple2('947653', '林檎プロモーション(創栄出版)'),
			_Utils_Tuple2('947654', 'りゅうぎん国際化振興財団'),
			_Utils_Tuple2('947656', 'リョーサン'),
			_Utils_Tuple2('947658', 'ルーツ出版局'),
			_Utils_Tuple2('947659', 'リング'),
			_Utils_Tuple2('947660', 'ろうどう出版'),
			_Utils_Tuple2('947661', '北斗インターナショナル'),
			_Utils_Tuple2('947662', '労働行政研究会'),
			_Utils_Tuple2('947663', 'リンパック'),
			_Utils_Tuple2('947664', '流通経済研究所'),
			_Utils_Tuple2('947665', 'りん書房'),
			_Utils_Tuple2('947666', '玲風書房'),
			_Utils_Tuple2('947668', 'リトン'),
			_Utils_Tuple2('947669', '理究'),
			_Utils_Tuple2('947670', '旅行綜研'),
			_Utils_Tuple2('947671', 'ラム'),
			_Utils_Tuple2('947672', 'ルーテル・ブックレット・プレス'),
			_Utils_Tuple2('947673', 'リアル出版'),
			_Utils_Tuple2('947674', 'ロゴ教育システム'),
			_Utils_Tuple2('947675', '盛岡リクルート'),
			_Utils_Tuple2('947677', '霊友会'),
			_Utils_Tuple2('947678', '六角出版'),
			_Utils_Tuple2('947680', 'ロゴス社'),
			_Utils_Tuple2('947681', 'ラ・テール出版局'),
			_Utils_Tuple2('947682', '料理王国社'),
			_Utils_Tuple2('947683', 'リトル・ガリヴァー社'),
			_Utils_Tuple2('947685', 'エムエムアイ出版局'),
			_Utils_Tuple2('947686', 'リブロス'),
			_Utils_Tuple2('947687', 'ランダム・プレス'),
			_Utils_Tuple2('947688', 'リーフ出版'),
			_Utils_Tuple2('947689', 'りいふ・しゅっぱん'),
			_Utils_Tuple2('947690', 'レブ・ジャポン'),
			_Utils_Tuple2('947691', 'リベーロイ社'),
			_Utils_Tuple2('947692', 'ＬＵＮＡ ＢＯＯＫＳ'),
			_Utils_Tuple2('947693', 'りんごの木'),
			_Utils_Tuple2('947694', 'リスト'),
			_Utils_Tuple2('947695', 'リード図書出版'),
			_Utils_Tuple2('947696', 'Ｒｏｕｎｄプランニングプロモーション'),
			_Utils_Tuple2('947697', '龍鳳書房'),
			_Utils_Tuple2('947698', '龍星出版'),
			_Utils_Tuple2('947699', 'ライテック'),
			_Utils_Tuple2('947700', 'ライフ・クオリティ社'),
			_Utils_Tuple2('947701', 'ラポールヨネヤマ'),
			_Utils_Tuple2('947702', '旅行人'),
			_Utils_Tuple2('947703', 'リベロ'),
			_Utils_Tuple2('947704', 'ライトハウス'),
			_Utils_Tuple2('947705', 'ライフクリエイション'),
			_Utils_Tuple2('947706', 'リーヴェル'),
			_Utils_Tuple2('947707', '酪農総合研究所'),
			_Utils_Tuple2('947708', 'リアルエステイト研究所'),
			_Utils_Tuple2('947709', 'レビック'),
			_Utils_Tuple2('947710', 'リトルグリーン'),
			_Utils_Tuple2('947711', '倫書房'),
			_Utils_Tuple2('947712', 'ＬＹＵ工房'),
			_Utils_Tuple2('947713', 'ローズブックス'),
			_Utils_Tuple2('947714', 'レイルロード'),
			_Utils_Tuple2('947715', '吉池道子'),
			_Utils_Tuple2('947716', 'レインボウ・プレス'),
			_Utils_Tuple2('947717', 'ラフ集合論研究会'),
			_Utils_Tuple2('947718', 'レイ'),
			_Utils_Tuple2('947719', 'ラティーナ'),
			_Utils_Tuple2('947720', '立命館大学人文科学研究所'),
			_Utils_Tuple2('947721', 'ロータリービジネス'),
			_Utils_Tuple2('947722', '鶴岡書店'),
			_Utils_Tuple2('947723', '理社出版'),
			_Utils_Tuple2('947724', 'ロータリー印刷'),
			_Utils_Tuple2('947725', 'レックス'),
			_Utils_Tuple2('947726', 'リバーフロント整備センター'),
			_Utils_Tuple2('947727', 'リーブル出版'),
			_Utils_Tuple2('947728', 'リブロテーコ東京'),
			_Utils_Tuple2('947729', 'リヴァープレス社'),
			_Utils_Tuple2('947730', 'ランテック'),
			_Utils_Tuple2('947731', '楽天舎書房'),
			_Utils_Tuple2('947732', 'リレーションズ'),
			_Utils_Tuple2('947733', '礼文出版'),
			_Utils_Tuple2('947734', '竜書房'),
			_Utils_Tuple2('947736', 'リトルアメリカ'),
			_Utils_Tuple2('947737', '雷韻出版'),
			_Utils_Tuple2('947738', 'リーブ企画'),
			_Utils_Tuple2('947739', '琉球出版社'),
			_Utils_Tuple2('947740', 'レッスンの友社'),
			_Utils_Tuple2('947741', 'ルック'),
			_Utils_Tuple2('947742', '龍文社'),
			_Utils_Tuple2('947743', '六一書房'),
			_Utils_Tuple2('947744', 'リステック'),
			_Utils_Tuple2('947745', 'リーガルブックス'),
			_Utils_Tuple2('947746', 'ユー・エム・ディー・エス研究所'),
			_Utils_Tuple2('947747', 'リンケージ倶楽部'),
			_Utils_Tuple2('947748', 'レトロウィルス研究会'),
			_Utils_Tuple2('947749', 'ログハウス'),
			_Utils_Tuple2('947750', 'リバティメディア'),
			_Utils_Tuple2('947751', 'ロジックワークス'),
			_Utils_Tuple2('947752', 'ラピュータ'),
			_Utils_Tuple2('947753', 'ライフウェア・サービス'),
			_Utils_Tuple2('947754', '稜和インターナショナル'),
			_Utils_Tuple2('947755', 'リューブン'),
			_Utils_Tuple2('947756', '論楽社'),
			_Utils_Tuple2('947757', '粒粒舎'),
			_Utils_Tuple2('947758', 'レッドハット'),
			_Utils_Tuple2('947759', 'ラベンダークラブ'),
			_Utils_Tuple2('947760', '蘭鵬社'),
			_Utils_Tuple2('947761', 'ラルル出版'),
			_Utils_Tuple2('947762', 'Ｒａｉｎｂｏｗ Ｅａｒｔｈ'),
			_Utils_Tuple2('947763', '檸檬新社'),
			_Utils_Tuple2('947764', '六稜出版会'),
			_Utils_Tuple2('947765', 'ライフウェル'),
			_Utils_Tuple2('947766', '林業機械化協会'),
			_Utils_Tuple2('947767', 'ロゼッタストーン'),
			_Utils_Tuple2('947768', 'ＲＡＫＵＤＡ ＰＵＢＬＩＳＨＩＮＧ'),
			_Utils_Tuple2('947769', '歴研'),
			_Utils_Tuple2('947770', '流星社'),
			_Utils_Tuple2('948701', 'ワーク・ショップガルダ'),
			_Utils_Tuple2('948702', 'ワーナーミュージックジャパン'),
			_Utils_Tuple2('948703', 'ワールドグリーン出版'),
			_Utils_Tuple2('948704', 'ワールドソニック'),
			_Utils_Tuple2('948705', 'インタータイムズ'),
			_Utils_Tuple2('948706', 'ワールド・トラベル'),
			_Utils_Tuple2('948707', '若い根っこの会'),
			_Utils_Tuple2('948708', '若樹書房'),
			_Utils_Tuple2('948709', '若草社'),
			_Utils_Tuple2('948710', '若葉社'),
			_Utils_Tuple2('948711', '和玄洞集古館'),
			_Utils_Tuple2('948712', '和広出版'),
			_Utils_Tuple2('948713', '和光社'),
			_Utils_Tuple2('948714', '若生出版'),
			_Utils_Tuple2('948715', 'ニューワークスコーポレーション'),
			_Utils_Tuple2('948716', '早稲田大学ウリ同窓会'),
			_Utils_Tuple2('948717', '早稲田文学会'),
			_Utils_Tuple2('948718', '若林出版企画'),
			_Utils_Tuple2('948719', '渡辺書店'),
			_Utils_Tuple2('948720', 'わらしべ書房'),
			_Utils_Tuple2('948721', 'わらび座'),
			_Utils_Tuple2('948722', '和書普及会'),
			_Utils_Tuple2('948723', 'ワールド・ブック・アジア・インコーポレーテッド日本支社'),
			_Utils_Tuple2('948724', 'ワークショップ８０'),
			_Utils_Tuple2('948725', '若菜出版'),
			_Utils_Tuple2('948726', 'ワイド企画印刷'),
			_Utils_Tuple2('948727', 'ワールド社'),
			_Utils_Tuple2('948728', 'ワイリー・ジャパン・インコーポレイテッド'),
			_Utils_Tuple2('948729', 'ワセダ企画'),
			_Utils_Tuple2('948730', 'ワイズマン・システム・ボード'),
			_Utils_Tuple2('948731', 'ワコー美術出版'),
			_Utils_Tuple2('948732', 'ワコー出版'),
			_Utils_Tuple2('948733', '渡辺音楽出版'),
			_Utils_Tuple2('948736', '早稲田大学図書館'),
			_Utils_Tuple2('948737', '和同ドクターズグループ'),
			_Utils_Tuple2('948738', '和歌山県'),
			_Utils_Tuple2('948739', '和光出版'),
			_Utils_Tuple2('948740', '若林靖宏(マンハウス)'),
			_Utils_Tuple2('948741', 'ワールド映画'),
			_Utils_Tuple2('948742', 'ワールドプランニング'),
			_Utils_Tuple2('948743', 'ワールド出版サービス'),
			_Utils_Tuple2('948744', '早稲田アカデミー創学社'),
			_Utils_Tuple2('948745', 'ワニコ書店'),
			_Utils_Tuple2('948746', '早稲田大学語学教育研究所'),
			_Utils_Tuple2('948747', 'ワールドスクール幼児教育教材研究所'),
			_Utils_Tuple2('948748', '早稲田大学日本語研究教育センター'),
			_Utils_Tuple2('948749', 'ワコーヴィスコム'),
			_Utils_Tuple2('948750', '早稲田イーエックスアカデミー'),
			_Utils_Tuple2('948751', 'ワン・ネットワーク'),
			_Utils_Tuple2('948752', 'ワイエス出版'),
			_Utils_Tuple2('948753', 'ワールドビジネスプランニング'),
			_Utils_Tuple2('948754', 'ワールドウォッチジャパン'),
			_Utils_Tuple2('948755', '若草書房'),
			_Utils_Tuple2('948756', 'ワン・ライン'),
			_Utils_Tuple2('948757', '早稲田大学古代エジプト調査室'),
			_Utils_Tuple2('948758', '早稲田大学坪内博士記念演劇博物館'),
			_Utils_Tuple2('948759', 'ワークスコーポレーション'),
			_Utils_Tuple2('948760', 'ワンダーマガジン'),
			_Utils_Tuple2('948761', 'ワールドマガジン社'),
			_Utils_Tuple2('948762', '早稲田大学現代政治経済研究所'),
			_Utils_Tuple2('948763', 'ワンダークラフト'),
			_Utils_Tuple2('948764', '早稲田大学英字新聞会'),
			_Utils_Tuple2('948765', 'ワールド・ラビット・ファンクラブ'),
			_Utils_Tuple2('948767', '早稲田大学建築史研究室'),
			_Utils_Tuple2('948768', '綜合教育センター'),
			_Utils_Tuple2('948769', 'ＹＣＣ出版部'),
			_Utils_Tuple2('948770', 'ワールドタイムス'),
			_Utils_Tuple2('948771', 'ワード書院'),
			_Utils_Tuple2('948772', '和歌山リビング新聞社'),
			_Utils_Tuple2('948773', 'ワンワールド・インタナショナル'),
			_Utils_Tuple2('948774', 'ワンダーファーム'),
			_Utils_Tuple2('948775', 'エキスパートギグ'),
			_Utils_Tuple2('949999', '日本図書コード管理センター'),
			_Utils_Tuple2('9900061', '海外医薬情報研究会'),
			_Utils_Tuple2('9900088', '第６回国際シンガーシンポジウムプロシーディング編集委員会'),
			_Utils_Tuple2('9900093', '第５回国際大麦遺伝学シンポジウム国内組織委員会'),
			_Utils_Tuple2('9900130', '日本薬学図書館協議会(日本学会事務センター)'),
			_Utils_Tuple2('9900136', '日本歯科薬品協議会'),
			_Utils_Tuple2('9900137', '三圭社'),
			_Utils_Tuple2('9900146', '大山祇神社'),
			_Utils_Tuple2('9900157', '日本医書出版協会'),
			_Utils_Tuple2('9900165', 'テレコム・トリビューン社'),
			_Utils_Tuple2('9900175', '栄研化学'),
			_Utils_Tuple2('9900197', '“現代の宗教”のための聖書注解書刊行委員会'),
			_Utils_Tuple2('9900202', '明広社'),
			_Utils_Tuple2('9900213', '西田泰也'),
			_Utils_Tuple2('9900218', '京都精華大学情報館'),
			_Utils_Tuple2('9900220', 'どん出版会'),
			_Utils_Tuple2('9900224', '楯築刊行会'),
			_Utils_Tuple2('9900242', '第３０回国際法中毒学会'),
			_Utils_Tuple2('9900245', '丹青研究所'),
			_Utils_Tuple2('9900246', '靱公園自然探究グループ'),
			_Utils_Tuple2('9900247', '第７回固体センサ国際会議出版委員会'),
			_Utils_Tuple2('9900253', '玉手道子'),
			_Utils_Tuple2('9900254', '第３回ＩＵＭＲＳ先進材料国際会議シンポジウムＶ'),
			_Utils_Tuple2('9900256', '田淵行男記念館'),
			_Utils_Tuple2('9900268', '「高橋徳太郎の仕事」刊行会'),
			_Utils_Tuple2('9900271', 'ミクプランニング'),
			_Utils_Tuple2('9900273', '岩波ブックサービスセンター'),
			_Utils_Tuple2('9900279', '第２回国際文化財生物劣化会議組織委員会'),
			_Utils_Tuple2('9900282', '日本音響学会・日本騒音制御工学会'),
			_Utils_Tuple2('9900287', '生物情報社'),
			_Utils_Tuple2('9900291', '日本映像学会'),
			_Utils_Tuple2('9900293', '高俊興業'),
			_Utils_Tuple2('9900305', '日本基督教団改革長老教会協議会'),
			_Utils_Tuple2('9900317', 'アラスカカンパニー'),
			_Utils_Tuple2('9900320', '高林洸子'),
			_Utils_Tuple2('9900328', 'アメニティタウン文化事業部'),
			_Utils_Tuple2('9900334', '東急文化村'),
			_Utils_Tuple2('9900337', '第１５回アジア生物学教育協議会隔年会議発表論文集編集委員会'),
			_Utils_Tuple2('9900350', 'アーサーホーランドミニストリー'),
			_Utils_Tuple2('9900354', '日本論理文法研究会'),
			_Utils_Tuple2('9900355', '田中真介'),
			_Utils_Tuple2('9900356', 'イメックスジャパン'),
			_Utils_Tuple2('9900358', 'ダンアンドブラッドストリートジャパン'),
			_Utils_Tuple2('9900360', '第一孔版社'),
			_Utils_Tuple2('9900361', '淡彩'),
			_Utils_Tuple2('9900382', '日本生物教育会'),
			_Utils_Tuple2('9900385', '日本鋼管テクノサービス'),
			_Utils_Tuple2('9900386', '宮原邦香'),
			_Utils_Tuple2('9900388', 'ビューヒナー・レーデ論集刊行会'),
			_Utils_Tuple2('9900391', '大伸社'),
			_Utils_Tuple2('9900398', '地域環境研究所'),
			_Utils_Tuple2('9900400', '太陽生命科学研究所'),
			_Utils_Tuple2('9900401', '第１２回国際木材機械加工セミナー組織委員会'),
			_Utils_Tuple2('9900402', 'ランガーメール'),
			_Utils_Tuple2('9900403', '神門政繁'),
			_Utils_Tuple2('9900405', '栃木タイムズ'),
			_Utils_Tuple2('9900409', 'アジア経済出版会'),
			_Utils_Tuple2('9900410', 'エンジニアリング・ジャーナル社'),
			_Utils_Tuple2('9900415', '第一ラジオアイソトープ研究所'),
			_Utils_Tuple2('9900416', 'クリスチャン・インターナショナル・アジア'),
			_Utils_Tuple2('9900421', '都市交通政策研究会'),
			_Utils_Tuple2('9900429', '工事管理研究会'),
			_Utils_Tuple2('9900430', '岡村修司'),
			_Utils_Tuple2('9900431', '竹田印刷'),
			_Utils_Tuple2('9900440', '輸入食品事典研究会'),
			_Utils_Tuple2('9900443', '田中省三'),
			_Utils_Tuple2('9900447', '谷岡学園芸術工学研究所'),
			_Utils_Tuple2('9900449', '国際教育研究所'),
			_Utils_Tuple2('9900451', 'トーマス・カンパニー'),
			_Utils_Tuple2('9900452', 'ウナックトウキョウ'),
			_Utils_Tuple2('9900453', '朝日生命ユネスコクラブ'),
			_Utils_Tuple2('9900454', '津田塾大学言語文化研究所Ｅ・Ａ・ポー研究会'),
			_Utils_Tuple2('9900471', '学生就職情報センター'),
			_Utils_Tuple2('9900473', '中小商工業研究所'),
			_Utils_Tuple2('9900480', '木下循'),
			_Utils_Tuple2('9900482', 'アスリート社'),
			_Utils_Tuple2('9900484', 'ダウ・ケミカル日本株式会社ダウ・エランコ事業部門'),
			_Utils_Tuple2('9900486', '日中提携社'),
			_Utils_Tuple2('9900490', '京阪電気鉄道'),
			_Utils_Tuple2('9900495', 'オフィス北上'),
			_Utils_Tuple2('9900496', '墨の美研究所'),
			_Utils_Tuple2('9900497', '第２回アジア作物学会議組織委員会'),
			_Utils_Tuple2('9900498', 'エスペラント将棋クラブ'),
			_Utils_Tuple2('9900499', 'ストーンシステム'),
			_Utils_Tuple2('9900501', '賓陽舎'),
			_Utils_Tuple2('9900507', 'ヒロシマ・ナガサキ平和基金'),
			_Utils_Tuple2('9900508', 'Ｐｈａｒｍａ＆Ｃａｒｅ研究所'),
			_Utils_Tuple2('9900509', '弘園社'),
			_Utils_Tuple2('9900512', '加藤裕'),
			_Utils_Tuple2('9900514', '周地社'),
			_Utils_Tuple2('9900515', 'ポレポレオフィス(連合出版)'),
			_Utils_Tuple2('9900519', '第７回室内空気環境国際会議組織委員会'),
			_Utils_Tuple2('9900522', '可成屋'),
			_Utils_Tuple2('9900532', 'スタジオ類'),
			_Utils_Tuple2('9900536', '日本青年協議会'),
			_Utils_Tuple2('9900538', '大武進'),
			_Utils_Tuple2('9900539', 'モタイクニコニットアート'),
			_Utils_Tuple2('9900541', '内航新聞社'),
			_Utils_Tuple2('9900544', '文芸はやかわ'),
			_Utils_Tuple2('9900549', '太平洋放送協会'),
			_Utils_Tuple2('9900554', '岩手大学地域共同研究センター(岩手ネットワークシステム)'),
			_Utils_Tuple2('9900559', 'ケイワイオコーポレーション'),
			_Utils_Tuple2('9900566', '随筆かごしま社'),
			_Utils_Tuple2('9900567', 'スタジオ・エトセトラ'),
			_Utils_Tuple2('9900570', 'ひまわり社(いのちのことば社)'),
			_Utils_Tuple2('9900577', 'たんぽぽの家'),
			_Utils_Tuple2('9900579', 'バイオスタット'),
			_Utils_Tuple2('9900580', '大久保等'),
			_Utils_Tuple2('9900581', '高野山真言宗開教局'),
			_Utils_Tuple2('9900583', '大広'),
			_Utils_Tuple2('9900585', '熊本子どもの本の研究会'),
			_Utils_Tuple2('9900590', '田井庸介'),
			_Utils_Tuple2('9900591', 'ＴａｋａｈａｓｈｉＴａｋａｏ'),
			_Utils_Tuple2('9900596', '名古屋市'),
			_Utils_Tuple2('9900600', '日本実務普及振興会'),
			_Utils_Tuple2('9900603', '菅原博文'),
			_Utils_Tuple2('9900605', 'ブックビジネスアソシエイツ社'),
			_Utils_Tuple2('9900608', '仙台経済界'),
			_Utils_Tuple2('9900609', '珍奇世界社'),
			_Utils_Tuple2('9900613', '田中智子'),
			_Utils_Tuple2('9900614', '第３回国際法医学シンポジウム'),
			_Utils_Tuple2('9900615', '石橋輝勝'),
			_Utils_Tuple2('9900619', '秋田平和学習センター'),
			_Utils_Tuple2('9900625', '横田健康研究所'),
			_Utils_Tuple2('9900627', '第４回植物生育促進性根圏細菌国際ワークショップ組織委員会'),
			_Utils_Tuple2('9900629', 'ビイ・エフ・ジェイ'),
			_Utils_Tuple2('9900633', 'ミヤガワ'),
			_Utils_Tuple2('9900640', 'バン・リサーチ(オーム社)'),
			_Utils_Tuple2('9900641', '高橋克己'),
			_Utils_Tuple2('9900645', '１７出版'),
			_Utils_Tuple2('9900649', '前田治療院'),
			_Utils_Tuple2('9900679', '編集工房シージーイー'),
			_Utils_Tuple2('9900685', '学校法人拓殖大学'),
			_Utils_Tuple2('9900687', 'マホロバ'),
			_Utils_Tuple2('9900693', '東方通信社'),
			_Utils_Tuple2('9900694', 'リヒト舎'),
			_Utils_Tuple2('9900699', 'ロゴヴィスタ'),
			_Utils_Tuple2('9900701', 'ダン・クリエイト'),
			_Utils_Tuple2('9900705', 'エヌ・アイ・プランニング'),
			_Utils_Tuple2('9900706', 'かんらん舎'),
			_Utils_Tuple2('9900709', '小堀グラフィックス'),
			_Utils_Tuple2('9900712', '聖母女学院'),
			_Utils_Tuple2('9900714', '錨といるか社'),
			_Utils_Tuple2('9900715', 'サンルイ・ワードバンク'),
			_Utils_Tuple2('9900717', 'ヒューマン・ヘルスケア・システム'),
			_Utils_Tuple2('9900721', 'ＤＯＭＩＣ'),
			_Utils_Tuple2('9900730', '鉄人社'),
			_Utils_Tuple2('9900742', '文藝出版'),
			_Utils_Tuple2('9900744', 'たたら研究会'),
			_Utils_Tuple2('9900748', 'テクノタイムズ社'),
			_Utils_Tuple2('9900752', '山梨新報社'),
			_Utils_Tuple2('9900756', 'ＮＰＯ ＫＯＭＡ'),
			_Utils_Tuple2('9900757', '寿郎社'),
			_Utils_Tuple2('9900758', '（株）高菅出版'),
			_Utils_Tuple2('9900766', 'アミダ'),
			_Utils_Tuple2('9900770', 'アイランドクラブ'),
			_Utils_Tuple2('9900773', 'タカラ印刷'),
			_Utils_Tuple2('9900776', 'ミリオン企画'),
			_Utils_Tuple2('9900778', '富士ゼロックス総合教育研究所'),
			_Utils_Tuple2('9900783', '大東文化大学経営学会'),
			_Utils_Tuple2('9900794', 'エム・ビー・カンパニー'),
			_Utils_Tuple2('9900807', '書美院'),
			_Utils_Tuple2('9900812', 'プレスポップギャラリー'),
			_Utils_Tuple2('9900813', 'エデュテ'),
			_Utils_Tuple2('9900856', '高林秀明'),
			_Utils_Tuple2('9900864', '第一コミュニケーション'),
			_Utils_Tuple2('9900884', '大山山麓リゾート・観光推進協議会'),
			_Utils_Tuple2('9900951', '高橋晋戒'),
			_Utils_Tuple2('9900955', 'ＤａｎｉｅｌＷｉｎｔｅｒｓ'),
			_Utils_Tuple2('9900960', '国際通信経済研究所'),
			_Utils_Tuple2('9900988', '竹長吉正'),
			_Utils_Tuple2('9901002', '第６回二酸化炭素国際会議組織委員会'),
			_Utils_Tuple2('9901037', 'ダニエル社'),
			_Utils_Tuple2('9901070', '教育図書出版社'),
			_Utils_Tuple2('9901078', '第６回日本在宅ケア学会'),
			_Utils_Tuple2('9901105', '第９回国際カテコールアミンシンポジウムサテライトシンポジウム'),
			_Utils_Tuple2('9901129', '田中満'),
			_Utils_Tuple2('9901138', '高橋新一'),
			_Utils_Tuple2('9901140', '武田和正'),
			_Utils_Tuple2('9901227', '武田薬品工業（株）アグロカンパニー'),
			_Utils_Tuple2('9901233', '武田書店'),
			_Utils_Tuple2('9901248', '（社）碧田迎保育園'),
			_Utils_Tuple2('9901269', 'ＱＵＥＳＴ出版'),
			_Utils_Tuple2('9901285', '第４回国際食虫植物会議'),
			_Utils_Tuple2('9901320', '第７回森林と市民を結ぶ全国の集い実行委員会'),
			_Utils_Tuple2('9901330', '大光通信社'),
			_Utils_Tuple2('9901334', '第１４巻日本外科感染症研究'),
			_Utils_Tuple2('9901358', '第１０回国際環境人間工学会'),
			_Utils_Tuple2('9901398', 'つくい書房'),
			_Utils_Tuple2('9901399', 'ＮＰＯピーエーエフ'),
			_Utils_Tuple2('9901400', 'ヒューマンブレイン・インコーポレイテッド'),
			_Utils_Tuple2('9901401', 'テレビ長崎'),
			_Utils_Tuple2('9901402', 'エイディーエイ'),
			_Utils_Tuple2('9901403', '根口勉'),
			_Utils_Tuple2('9901404', 'まる工房'),
			_Utils_Tuple2('9901405', 'カルビー'),
			_Utils_Tuple2('9901406', '恵友書房'),
			_Utils_Tuple2('9901407', 'プロジェクトシュリ'),
			_Utils_Tuple2('9901408', '名執出版'),
			_Utils_Tuple2('9901409', 'ナンシー'),
			_Utils_Tuple2('9901410', '水流徹'),
			_Utils_Tuple2('9901411', '鳥取県広報連絡協議会'),
			_Utils_Tuple2('9901412', '遠方社'),
			_Utils_Tuple2('9901413', '安達巧'),
			_Utils_Tuple2('9901414', 'パワー・オブ・ビューティ'),
			_Utils_Tuple2('9901415', '佐藤倫正'),
			_Utils_Tuple2('9901416', 'レイトとこぶしゲームクラブ'),
			_Utils_Tuple2('9901417', '日本農薬学会'),
			_Utils_Tuple2('9901418', 'ＴＯＰ'),
			_Utils_Tuple2('9901419', '愛媛県造園緑化事業協同組合'),
			_Utils_Tuple2('9901420', 'Ｈ＆Ｋ企画'),
			_Utils_Tuple2('9901421', 'ＮＫマネジメントセンター'),
			_Utils_Tuple2('9901422', '運用分析'),
			_Utils_Tuple2('9901423', 'ペイパーウエイトブックス'),
			_Utils_Tuple2('9901424', '日本野鳥の会大分県支部'),
			_Utils_Tuple2('9901425', '平成文芸社'),
			_Utils_Tuple2('9901426', '平野明子'),
			_Utils_Tuple2('9901427', '長原静龍'),
			_Utils_Tuple2('9901428', '光画舎'),
			_Utils_Tuple2('9901429', 'アトリエＢｌｕｅＷａｔｅｒ'),
			_Utils_Tuple2('9901430', '伊藤三千代'),
			_Utils_Tuple2('9901431', 'ＣＡＮ－ＬＢＳ研究会'),
			_Utils_Tuple2('9901432', 'プラネット'),
			_Utils_Tuple2('9901433', '埋橋正秋'),
			_Utils_Tuple2('9901434', '金芳外城雄'),
			_Utils_Tuple2('9901435', '千進総研'),
			_Utils_Tuple2('9901436', 'アルジェナ'),
			_Utils_Tuple2('9901437', 'ＫＢ社'),
			_Utils_Tuple2('9901438', 'ＩＴＳＪａｐａｎ'),
			_Utils_Tuple2('9901439', 'たかだ書房'),
			_Utils_Tuple2('9901440', 'アシスト'),
			_Utils_Tuple2('9901441', 'オルパ'),
			_Utils_Tuple2('9901442', 'いずみ学園'),
			_Utils_Tuple2('9901443', 'エイチビー・ジャパン'),
			_Utils_Tuple2('9901444', '創生社'),
			_Utils_Tuple2('9901445', 'デーリー東北新聞社'),
			_Utils_Tuple2('9901446', 'グラフィックス'),
			_Utils_Tuple2('9901447', 'ワールド・ライティング・フェア ｉｎ ＴＯＫＹＯ 運営委員会'),
			_Utils_Tuple2('9901448', '愛媛ナイトウォーカー'),
			_Utils_Tuple2('9901449', '日本蜘蛛学会'),
			_Utils_Tuple2('9901450', 'サウンド球貴'),
			_Utils_Tuple2('9901451', '三扇印刷'),
			_Utils_Tuple2('9901452', 'オールビューティー社'),
			_Utils_Tuple2('9901453', 'ワリス出版'),
			_Utils_Tuple2('9901455', '医薬情報センター'),
			_Utils_Tuple2('9901456', '農経新聞社'),
			_Utils_Tuple2('9901457', '内藤宗則'),
			_Utils_Tuple2('9901458', '異界書房'),
			_Utils_Tuple2('9901459', 'ＴＯＫＹＯ ＩＳＳＰ ＰＲＥＳＳ'),
			_Utils_Tuple2('9901460', '育流出版'),
			_Utils_Tuple2('9901461', 'アウラ'),
			_Utils_Tuple2('9901462', 'ヘリシティー出版'),
			_Utils_Tuple2('9901463', 'フクオ'),
			_Utils_Tuple2('9901464', '大阪外国語大学国際関係講座'),
			_Utils_Tuple2('9901465', '妙見閣寺出版部'),
			_Utils_Tuple2('9901466', '文陽舎'),
			_Utils_Tuple2('9901467', '常陽リビング社'),
			_Utils_Tuple2('9901468', 'アズクルー'),
			_Utils_Tuple2('9901469', 'ＴＯＫＹＯ ＰＯＣＫＥＴ ＧＵＩＤＥ'),
			_Utils_Tuple2('9901470', '地域リハビリテーション広域支援センター'),
			_Utils_Tuple2('9901471', 'クリエィティブオフィスノア'),
			_Utils_Tuple2('9901472', '中村義雄'),
			_Utils_Tuple2('9901473', 'イタリア会館出版部'),
			_Utils_Tuple2('9901474', 'ジェイ・エム・企画'),
			_Utils_Tuple2('9901475', 'ＩＣＵＳ'),
			_Utils_Tuple2('9901476', '北辰メディア'),
			_Utils_Tuple2('9901477', 'ピー・シー・コーポレーション'),
			_Utils_Tuple2('9901478', '東京自由出版'),
			_Utils_Tuple2('9901479', '基礎デザイン学会'),
			_Utils_Tuple2('9901480', 'イヴハワードコーポレーション'),
			_Utils_Tuple2('9901481', 'アーツェット'),
			_Utils_Tuple2('9901482', '阪神コンテンツリンク'),
			_Utils_Tuple2('9901483', 'リコルディアンドスフェラ'),
			_Utils_Tuple2('9901484', '泉川真紀'),
			_Utils_Tuple2('9901485', 'クエスト'),
			_Utils_Tuple2('9901486', 'アショフ・田原シンポジウム委員会'),
			_Utils_Tuple2('9901487', 'ＩＣＡＰＰ ２００１ ＹＯＮＥＺＡＷＡ'),
			_Utils_Tuple2('9901488', '新潟図書文化研究所'),
			_Utils_Tuple2('9901489', 'ドーヴィル'),
			_Utils_Tuple2('9901490', 'ペピランド'),
			_Utils_Tuple2('9901491', 'アクアマイクロ'),
			_Utils_Tuple2('9901492', 'ＲＩＣＨ“Ｄ”ＰＲＯＪＥＣＴ'),
			_Utils_Tuple2('9901493', '森林利用学会'),
			_Utils_Tuple2('9901494', '日本不動産データバンク'),
			_Utils_Tuple2('9901495', '北海道開発土木研究所'),
			_Utils_Tuple2('9901496', 'Ｍａｒｋ Ｇｒａｅｍｅ Ｍａｃｉｎｔｙｒｅ'),
			_Utils_Tuple2('9901497', '三戸印刷所'),
			_Utils_Tuple2('9901498', '総合ケアシーザル'),
			_Utils_Tuple2('9901499', '釣り東北社'),
			_Utils_Tuple2('9901500', 'オートメレビュー社'),
			_Utils_Tuple2('9901501', '全日本剣道連盟'),
			_Utils_Tuple2('9901502', '東大阪青年会議所'),
			_Utils_Tuple2('9901503', 'ファブリック'),
			_Utils_Tuple2('9901504', '笹徳印刷'),
			_Utils_Tuple2('9901505', 'グリーン美術出版社'),
			_Utils_Tuple2('9901506', '武蔵野短期大学'),
			_Utils_Tuple2('9901507', 'ノルコーポレーション'),
			_Utils_Tuple2('9901508', '日本能率協会総合研究所'),
			_Utils_Tuple2('9901509', 'デイジーコンサルティング'),
			_Utils_Tuple2('9901510', '国際大学国際開発プログラム出版委員会'),
			_Utils_Tuple2('9901511', '北海道矯正歯科医療研究会'),
			_Utils_Tuple2('9901512', 'トランズパシフィックエンタープライズ'),
			_Utils_Tuple2('9901513', '森晴進堂'),
			_Utils_Tuple2('9901514', '日本トータルアカデミー'),
			_Utils_Tuple2('9901515', '大谷一夫'),
			_Utils_Tuple2('9901516', '愉快企画'),
			_Utils_Tuple2('9901517', '都市問題研究会'),
			_Utils_Tuple2('9901518', '共立文化社'),
			_Utils_Tuple2('9901519', 'ＤａｒｕｎｅｅＲｕｊｋｏｒａｋａｒｎ'),
			_Utils_Tuple2('9901520', '書心社'),
			_Utils_Tuple2('9901521', '埼玉大学社会科教育研究会'),
			_Utils_Tuple2('9901522', 'ゴールデン・チャイルド'),
			_Utils_Tuple2('9901523', 'ミラクルソリューション'),
			_Utils_Tuple2('9901524', '敬和'),
			_Utils_Tuple2('9901525', '大谷綾子'),
			_Utils_Tuple2('9901526', '美味技術研究会'),
			_Utils_Tuple2('9901527', 'ＫＮ企画'),
			_Utils_Tuple2('9901528', '静岡昆虫同好会'),
			_Utils_Tuple2('9901529', '前田板金展開研究所'),
			_Utils_Tuple2('9901530', '石器原産地研究会'),
			_Utils_Tuple2('9901531', 'ＩＣＡ２００３組織委員会'),
			_Utils_Tuple2('9901532', 'ソフトマシン'),
			_Utils_Tuple2('9901533', 'ＲＥＰＲＥ'),
			_Utils_Tuple2('9901534', 'エムピーケー'),
			_Utils_Tuple2('9901535', 'ダイオキシン・環境ホルモン対策国民会議'),
			_Utils_Tuple2('9901536', '龍谷大学仏教文化研究所'),
			_Utils_Tuple2('9901537', 'フェブレ'),
			_Utils_Tuple2('9901538', 'もいづ肆'),
			_Utils_Tuple2('9901539', '江戸カルチャーセンター'),
			_Utils_Tuple2('9901540', '藤井洋書'),
			_Utils_Tuple2('9901542', 'ＺＥＮ出版'),
			_Utils_Tuple2('9901543', '捧武'),
			_Utils_Tuple2('9901544', '知書之屋本舗'),
			_Utils_Tuple2('9901545', '公益情報サービス(ＫＪＳ)'),
			_Utils_Tuple2('9901546', 'ＩＬＥＣ・滋賀県・ＵＮＥＰ-ＩＥＴＣ'),
			_Utils_Tuple2('9901547', '山鹿市地域振興公社'),
			_Utils_Tuple2('9901548', 'アベンティスファーマ'),
			_Utils_Tuple2('9901549', '多田良晴'),
			_Utils_Tuple2('9901550', '井上豊治'),
			_Utils_Tuple2('9901551', '吉岡裕子'),
			_Utils_Tuple2('9901552', '敦賀短期大学'),
			_Utils_Tuple2('9901553', '守谷隆一写真事務所'),
			_Utils_Tuple2('9901554', '料理文化社'),
			_Utils_Tuple2('9901555', '武田孝一'),
			_Utils_Tuple2('9901556', '日本笑顔健康センター'),
			_Utils_Tuple2('9901557', '東急ホーム（Ｍｉｌｌｃｒｅｅｋ Ｂｏｏｋｓ）'),
			_Utils_Tuple2('9901558', '三越通信販売事業本部'),
			_Utils_Tuple2('9901559', 'ファースト出版'),
			_Utils_Tuple2('9901560', '先駆舎'),
			_Utils_Tuple2('9901561', 'メディアバンクオフィス'),
			_Utils_Tuple2('9901562', '郵貯資金研究協会'),
			_Utils_Tuple2('9901563', 'ひまわり企画社'),
			_Utils_Tuple2('9901565', '北海道企画開発研究所'),
			_Utils_Tuple2('9901566', '岐阜新聞情報センター（テスト室）'),
			_Utils_Tuple2('9901567', '札幌聴力障害者協会'),
			_Utils_Tuple2('9901568', 'アルカディアシステムズ'),
			_Utils_Tuple2('9901569', '石橋洋二'),
			_Utils_Tuple2('9901570', 'ジェイマックシステム'),
			_Utils_Tuple2('9901571', 'ファイン'),
			_Utils_Tuple2('9901572', '美しい日本文化研究所'),
			_Utils_Tuple2('9901573', '草炭研究会'),
			_Utils_Tuple2('9901574', 'エディターズサード'),
			_Utils_Tuple2('9901575', 'ユナイテッドプロデュース'),
			_Utils_Tuple2('9901576', '証言社'),
			_Utils_Tuple2('9901577', '董振華'),
			_Utils_Tuple2('9901578', 'あすか社３５'),
			_Utils_Tuple2('9901579', '悠々房'),
			_Utils_Tuple2('9901580', '粲花舎'),
			_Utils_Tuple2('9901581', 'クラフトマンカンパニー'),
			_Utils_Tuple2('9901582', 'ホーゼル'),
			_Utils_Tuple2('9901583', 'シティライフ'),
			_Utils_Tuple2('9901584', '実践教育訓練研究協会'),
			_Utils_Tuple2('9901585', '片山書店'),
			_Utils_Tuple2('9901586', '日本労働弁護団'),
			_Utils_Tuple2('9901587', '理研グリーン'),
			_Utils_Tuple2('9901588', '鹿児島県環境技術協会'),
			_Utils_Tuple2('9901589', 'メディア・ネットワーク'),
			_Utils_Tuple2('9901590', 'あうん堂本舗'),
			_Utils_Tuple2('9901591', '奥村印刷出版部'),
			_Utils_Tuple2('9901592', '博文舎'),
			_Utils_Tuple2('9901593', '黄帽'),
			_Utils_Tuple2('9901594', 'ルイ・ヴィトンジャパン'),
			_Utils_Tuple2('9901595', '福島放送'),
			_Utils_Tuple2('9901596', '全日本郷土芸能協会'),
			_Utils_Tuple2('9901597', '農林水産技術情報協会'),
			_Utils_Tuple2('9901598', '小木曽助産学研究所'),
			_Utils_Tuple2('9901599', 'ライフスペック研究所'),
			_Utils_Tuple2('9901600', 'スピカートジャパン'),
			_Utils_Tuple2('9901601', 'ヘリシティ出版'),
			_Utils_Tuple2('9901602', 'メディット'),
			_Utils_Tuple2('9901603', '森田繁登'),
			_Utils_Tuple2('9901604', '新世紀研究会'),
			_Utils_Tuple2('9901605', '尼崎ひと・まち・赤とんぼセンター'),
			_Utils_Tuple2('9901606', '東京シティコミュニケーションズ'),
			_Utils_Tuple2('9901631', '浄土宗大阪教区布教師会'),
			_Utils_Tuple2('9901632', 'ベネット'),
			_Utils_Tuple2('9901633', 'スガワラ企画'),
			_Utils_Tuple2('9901634', 'ボーイズ'),
			_Utils_Tuple2('9901635', '三木卓雄'),
			_Utils_Tuple2('9901636', '横光克彦後援会'),
			_Utils_Tuple2('9901637', '月曜評論社'),
			_Utils_Tuple2('9901638', 'ラファの会'),
			_Utils_Tuple2('9901639', 'ＬＨＣ研究会'),
			_Utils_Tuple2('9901641', '日本芝草学会'),
			_Utils_Tuple2('9901642', 'なづな舎'),
			_Utils_Tuple2('9901643', '日華'),
			_Utils_Tuple2('9901644', 'ＦＯＯＤ ＢＩＺ出版'),
			_Utils_Tuple2('9901645', 'ヒューマンコミュニケーションプラニング'),
			_Utils_Tuple2('9901646', '播磨リビング新聞社'),
			_Utils_Tuple2('9901647', '写真工房シリウス'),
			_Utils_Tuple2('9901648', 'ＬＰＭ技術研究所'),
			_Utils_Tuple2('9901649', 'まつもとミュージック'),
			_Utils_Tuple2('9901650', 'ラーニングネットワーク'),
			_Utils_Tuple2('9901651', '道路システム高度化推進機構'),
			_Utils_Tuple2('9901652', '希少動物人工繁殖研究会'),
			_Utils_Tuple2('9901653', 'ながさきプレス'),
			_Utils_Tuple2('9901654', '南野研究所'),
			_Utils_Tuple2('9901655', '「癒しと安らぎの環境」フォーラム実行委員会'),
			_Utils_Tuple2('9901656', 'Ｂａｍｂｏｏ Ｓｈａｃｋ Ｐｕｂｌｉｓｈｉｎｇ'),
			_Utils_Tuple2('9901657', 'オプサイブ'),
			_Utils_Tuple2('9901658', '国際文化学園'),
			_Utils_Tuple2('9901659', 'バウハウス'),
			_Utils_Tuple2('9901660', '教育報道出版社'),
			_Utils_Tuple2('9901661', '浅野幸生'),
			_Utils_Tuple2('9901662', '一灯館'),
			_Utils_Tuple2('9901663', 'ゆっくり堂'),
			_Utils_Tuple2('9901664', 'あいむ出版社'),
			_Utils_Tuple2('9901665', 'インフロント'),
			_Utils_Tuple2('9901666', '児島宮'),
			_Utils_Tuple2('9901667', '富士マイクロ'),
			_Utils_Tuple2('9901668', 'ペンステーション'),
			_Utils_Tuple2('9901669', '進学社'),
			_Utils_Tuple2('9901670', 'エヌイー出版'),
			_Utils_Tuple2('9901671', '子どもの発達支援センター'),
			_Utils_Tuple2('9901672', '日本競売協会'),
			_Utils_Tuple2('9901673', 'メディアプランニング'),
			_Utils_Tuple2('9901674', '世界らん展組織委員会'),
			_Utils_Tuple2('9901675', 'ティプロ出版'),
			_Utils_Tuple2('9901676', '企画室リブラリア'),
			_Utils_Tuple2('9901677', '日本アンカー協会'),
			_Utils_Tuple2('9901678', '日本印刷'),
			_Utils_Tuple2('9901679', '創文'),
			_Utils_Tuple2('9901680', '東亜公論社'),
			_Utils_Tuple2('9901681', 'みんなのことば舎'),
			_Utils_Tuple2('9901682', 'ウィル出版'),
			_Utils_Tuple2('9901684', 'ワイ・ツー・プロダクツ'),
			_Utils_Tuple2('9901685', 'ルパート・スパイラ陶芸展実行委員会'),
			_Utils_Tuple2('9901686', 'グラ・スタイル'),
			_Utils_Tuple2('9901687', '南日本リビング新聞社'),
			_Utils_Tuple2('9901688', '日本鯨類研究所'),
			_Utils_Tuple2('9901689', 'コム・ブレイン'),
			_Utils_Tuple2('9901690', '北丹沢山岳センター'),
			_Utils_Tuple2('9901691', 'イズミヤ出版'),
			_Utils_Tuple2('9901692', '生天目章'),
			_Utils_Tuple2('9901693', 'コム・プロジェクト'),
			_Utils_Tuple2('9901694', 'Ｋｅｎｄｏ Ｗｏｒｌｄ Ｐｕｂｌｉｃａｔｉｏｎｓ'),
			_Utils_Tuple2('9901695', '大学における実務教育及び実務能力認定に関する研究会事務局'),
			_Utils_Tuple2('9901696', 'ティープライズコマース'),
			_Utils_Tuple2('9901697', '静岡聖文舎'),
			_Utils_Tuple2('9901698', '日本島嶼学会'),
			_Utils_Tuple2('9901699', '富士レビオ'),
			_Utils_Tuple2('9901700', '川島弘文社'),
			_Utils_Tuple2('9901701', '第１５回国際美学会議組織委員会'),
			_Utils_Tuple2('9901702', '島根大学教育学部附属小学校'),
			_Utils_Tuple2('9901703', '海象社'),
			_Utils_Tuple2('9901704', '大橋禅太郎'),
			_Utils_Tuple2('9901705', 'グラフィックセンター'),
			_Utils_Tuple2('9901706', '発行所吉報文庫'),
			_Utils_Tuple2('9901707', '横浜市'),
			_Utils_Tuple2('9901708', '松山みち子'),
			_Utils_Tuple2('9901709', '高橋康昭'),
			_Utils_Tuple2('9901710', 'ＷＩＮＤＣＨＩＭＥ ＢＯＯＫＳ'),
			_Utils_Tuple2('9901711', 'マップス'),
			_Utils_Tuple2('9901712', '谷村孝'),
			_Utils_Tuple2('9901713', 'ホンブロック'),
			_Utils_Tuple2('9901714', '広島大学五十年史編集専門委員会'),
			_Utils_Tuple2('9901715', '日仏腎臓研究交流会'),
			_Utils_Tuple2('9901716', 'エイブル・フォー'),
			_Utils_Tuple2('9901717', '鹿児島純心女子短期大学'),
			_Utils_Tuple2('9901718', '宮崎靖'),
			_Utils_Tuple2('9901719', '聖和大学キリスト教と教育研究所'),
			_Utils_Tuple2('9901720', 'ななに出版'),
			_Utils_Tuple2('9901721', '国際予防医学リスクマネージメント連盟'),
			_Utils_Tuple2('9901722', '最首哲也'),
			_Utils_Tuple2('9901723', '日本生活情報紙協会'),
			_Utils_Tuple2('9901724', '大阪市交通局'),
			_Utils_Tuple2('9901725', 'ウィメンズ・ステージ'),
			_Utils_Tuple2('9901726', '東宮'),
			_Utils_Tuple2('9901727', '耐震技術アソシエイツ'),
			_Utils_Tuple2('9901728', '東武出版'),
			_Utils_Tuple2('9901729', '宝珍'),
			_Utils_Tuple2('9901730', 'とっとりテクニカルプリント'),
			_Utils_Tuple2('9901731', 'もず工房'),
			_Utils_Tuple2('9901732', '宣報社'),
			_Utils_Tuple2('9901733', 'デジタル・トウキョー'),
			_Utils_Tuple2('9901734', 'オオゼキ写真印刷'),
			_Utils_Tuple2('9901735', 'ミュージアム・シティ・プロジェクト出版部'),
			_Utils_Tuple2('9901736', 'ニ・ニ・セ・フィニカンパニー'),
			_Utils_Tuple2('9901737', 'エピ・マガジン'),
			_Utils_Tuple2('9901738', 'クルーズ・コミュニケーションズ'),
			_Utils_Tuple2('9901739', '新潟総合テレビ'),
			_Utils_Tuple2('9901740', '鈴懸書房'),
			_Utils_Tuple2('9901741', '飯山教育出版'),
			_Utils_Tuple2('9901742', '山城眞'),
			_Utils_Tuple2('9901743', '生物多様性ＪＡＰＡＮ'),
			_Utils_Tuple2('9901744', '第１９回ＩＣＤＥＲＳ日本組織委員会'),
			_Utils_Tuple2('9901745', 'さくらんぼテレビジョン'),
			_Utils_Tuple2('9901746', 'うげやん'),
			_Utils_Tuple2('9901747', '半導体理工学研究センター'),
			_Utils_Tuple2('9901748', 'Ｔ・Ｏブックス'),
			_Utils_Tuple2('9901749', 'エヌ・ティ・ティ・ビジネスアソシエ北海道'),
			_Utils_Tuple2('9901750', '日本バイロン協会'),
			_Utils_Tuple2('9901751', 'マイクロバイオワールドデータベースグループ'),
			_Utils_Tuple2('9901752', '中国旅游研究会'),
			_Utils_Tuple2('9901753', '保健計画総合研究所'),
			_Utils_Tuple2('9901754', '明書苑'),
			_Utils_Tuple2('9901755', 'はりま情報出版'),
			_Utils_Tuple2('9901757', '東日本国際大学出版部'),
			_Utils_Tuple2('9901758', 'バイアス'),
			_Utils_Tuple2('9901759', '大西軍次写真集刊行会'),
			_Utils_Tuple2('9901760', 'ワイルド・イースト'),
			_Utils_Tuple2('9901761', 'ライフウッド・リサーチ'),
			_Utils_Tuple2('9901762', '広島県果実農業協同組合連合会'),
			_Utils_Tuple2('9901763', '書道研究社光辰会'),
			_Utils_Tuple2('9901764', '欧文日本学研究所'),
			_Utils_Tuple2('9901765', '国際通訳'),
			_Utils_Tuple2('9901766', '文工舎'),
			_Utils_Tuple2('9901767', '第１６回国際木材機械加工セミナー組織委員会'),
			_Utils_Tuple2('9901768', '北海道母親学父親学実践研究会'),
			_Utils_Tuple2('9901769', 'おおいたインフォメーションハウス'),
			_Utils_Tuple2('9901770', 'ＬＩＦＥ ＭＵＳＩＣ'),
			_Utils_Tuple2('9901771', 'アジア辞書学会'),
			_Utils_Tuple2('9901772', '品川文化振興事業団'),
			_Utils_Tuple2('9901773', '日米教育委員会フルブライトメモリアル基金'),
			_Utils_Tuple2('9901774', '前田博仁'),
			_Utils_Tuple2('9901775', '芝田肇'),
			_Utils_Tuple2('9901776', 'セザール２１舎'),
			_Utils_Tuple2('9901777', '原子力安全研究協会'),
			_Utils_Tuple2('9901778', '医誠'),
			_Utils_Tuple2('9901779', '川瀬碩美'),
			_Utils_Tuple2('9901780', 'イー・カルチャー'),
			_Utils_Tuple2('9901781', '弘文印刷'),
			_Utils_Tuple2('9901782', 'ニバイハン'),
			_Utils_Tuple2('9901783', 'クレー・インク'),
			_Utils_Tuple2('9901784', 'Ｓｐｏｒｅ 小島弘光'),
			_Utils_Tuple2('9901785', 'オフィス隈'),
			_Utils_Tuple2('9901786', '出版文化国際交流会'),
			_Utils_Tuple2('9901787', '学習ソフトウェア情報研究センター'),
			_Utils_Tuple2('9901788', 'デュナミス出版'),
			_Utils_Tuple2('9901789', 'サムホール'),
			_Utils_Tuple2('9901790', '文学表現と思想の会'),
			_Utils_Tuple2('9901791', 'モアクリエイティブ'),
			_Utils_Tuple2('9901792', '甘棠社'),
			_Utils_Tuple2('9901793', '伊吹島研究会'),
			_Utils_Tuple2('9901794', 'スタジオ・マラパルテ'),
			_Utils_Tuple2('9901795', '森林空間利用研究会'),
			_Utils_Tuple2('9901796', 'シノハラ企画'),
			_Utils_Tuple2('9901797', '松本陽介'),
			_Utils_Tuple2('9901798', '木のおもちゃアリス'),
			_Utils_Tuple2('9901799', 'プランナーエル'),
			_Utils_Tuple2('9901800', 'ライフデザイン社'),
			_Utils_Tuple2('9901801', 'サントリーミュージアム天保山'),
			_Utils_Tuple2('9901802', '萌芽舎'),
			_Utils_Tuple2('9901803', 'コロ'),
			_Utils_Tuple2('9901804', 'サットステーション'),
			_Utils_Tuple2('9901805', '民事法情報センター'),
			_Utils_Tuple2('9901806', 'ポエトリージャパン'),
			_Utils_Tuple2('9901807', '大越有近'),
			_Utils_Tuple2('9901808', '道路経済研究所'),
			_Utils_Tuple2('9901809', '高桑美術印刷'),
			_Utils_Tuple2('9901810', '教科書研究所'),
			_Utils_Tuple2('9901811', '科学教育研究会'),
			_Utils_Tuple2('9901812', '「風のフォーラム」'),
			_Utils_Tuple2('9901813', '山野繁'),
			_Utils_Tuple2('9901814', '北村禎三'),
			_Utils_Tuple2('9901815', '横浜市資源リサイクル事業協同組合'),
			_Utils_Tuple2('9901816', 'ありすみ印刷'),
			_Utils_Tuple2('9901817', '歴史探訪社'),
			_Utils_Tuple2('9901818', '木材改質研究グループ'),
			_Utils_Tuple2('9901819', 'イオン情報センター'),
			_Utils_Tuple2('9901820', 'ひかりライフ'),
			_Utils_Tuple2('9901821', 'カトリック南山教会広報委員会'),
			_Utils_Tuple2('9901822', 'ゴールデン佐渡'),
			_Utils_Tuple2('9901823', '越智菊男'),
			_Utils_Tuple2('9901824', 'パーフェクトランス'),
			_Utils_Tuple2('9901825', '二十一世紀叢書刊行会'),
			_Utils_Tuple2('9901826', 'ミシュマッシュインタービジネス'),
			_Utils_Tuple2('9901827', '大崎満'),
			_Utils_Tuple2('9901828', '林信吉'),
			_Utils_Tuple2('9901829', '星正宏'),
			_Utils_Tuple2('9901830', 'アートスクエア'),
			_Utils_Tuple2('9901831', 'サカモトミュージカルカンパニー'),
			_Utils_Tuple2('9901832', '和田経営研究所'),
			_Utils_Tuple2('9901833', '対角線'),
			_Utils_Tuple2('9901834', 'アトリエクライム'),
			_Utils_Tuple2('9901835', 'Ｉｎｄｉ＠ｎｓ Ｄｅｓｉｇｎ'),
			_Utils_Tuple2('9901836', '保健・医療・福祉サービス研究会'),
			_Utils_Tuple2('9901837', '岡ざきかずひろ'),
			_Utils_Tuple2('9901838', '厳島平成絵馬鑑刊行会'),
			_Utils_Tuple2('9901839', '情報処理ガイド編集委員会'),
			_Utils_Tuple2('9901840', 'ユナイテッドデザイン'),
			_Utils_Tuple2('9901841', 'ＫＲＩＣＴ'),
			_Utils_Tuple2('9901842', '大和ラヂエーター製作所'),
			_Utils_Tuple2('9901843', 'ことば文化研究所'),
			_Utils_Tuple2('9901844', 'イー・アイシー・ネット'),
			_Utils_Tuple2('9901845', 'アリスコーポレーション'),
			_Utils_Tuple2('9901846', '石文社'),
			_Utils_Tuple2('9901847', '「にいがた市民文学」運営委員会'),
			_Utils_Tuple2('9901848', '東冷書房'),
			_Utils_Tuple2('9901849', 'ホットキューブ'),
			_Utils_Tuple2('9901850', '長野県民新聞社'),
			_Utils_Tuple2('9901851', 'コミュニティ企画'),
			_Utils_Tuple2('9901852', '高橋印刷'),
			_Utils_Tuple2('9901853', '石川邦夫'),
			_Utils_Tuple2('9901854', '秋月稿房'),
			_Utils_Tuple2('9901855', '倉澤眞太郎'),
			_Utils_Tuple2('9901856', '筍書房'),
			_Utils_Tuple2('9901857', 'バーニング・スタッフ'),
			_Utils_Tuple2('9901858', 'コパン・コミュニケーションズ'),
			_Utils_Tuple2('9901859', 'スタジオグラフィコ'),
			_Utils_Tuple2('9901860', '嶋田洋平'),
			_Utils_Tuple2('9901861', '神戸市防災安全公社'),
			_Utils_Tuple2('9901862', '内外地図'),
			_Utils_Tuple2('9901863', '横河健'),
			_Utils_Tuple2('9901864', '健身会南越谷健身会クリニック'),
			_Utils_Tuple2('9901865', 'タカハシ'),
			_Utils_Tuple2('9901866', 'エクセル企画出版'),
			_Utils_Tuple2('9901867', '日本植物分類学会'),
			_Utils_Tuple2('9901868', '国際知的交流センター'),
			_Utils_Tuple2('9901869', '遊戯企画 工藤寛美'),
			_Utils_Tuple2('9901870', 'ＪＫ ＲＯＡＤ'),
			_Utils_Tuple2('9901871', '王福貴'),
			_Utils_Tuple2('9901872', '学生デザインレビュー実行委員会'),
			_Utils_Tuple2('9901873', '池本覺'),
			_Utils_Tuple2('9901874', 'ハンター企画'),
			_Utils_Tuple2('9901875', '草土社'),
			_Utils_Tuple2('9901876', '太秦保育園'),
			_Utils_Tuple2('9901877', 'Ｎａｎｃｙ Ｆｉｎｌｅｙ'),
			_Utils_Tuple2('9901878', '岩手産業統計所'),
			_Utils_Tuple2('9901879', 'やくそうの島「天草」社'),
			_Utils_Tuple2('9901880', 'フリップフロップ'),
			_Utils_Tuple2('9901881', 'アクティブ桜宮'),
			_Utils_Tuple2('9901882', 'コンサルアーツ貘出版'),
			_Utils_Tuple2('9901883', '加納ビジネス'),
			_Utils_Tuple2('9901884', 'オフィス３５８'),
			_Utils_Tuple2('9901885', 'アートグラフィック新潟'),
			_Utils_Tuple2('9901886', 'ＩＳＥＢ１６'),
			_Utils_Tuple2('9901887', 'アトラックス'),
			_Utils_Tuple2('9901888', 'こくぼ'),
			_Utils_Tuple2('9901889', 'ソフォス'),
			_Utils_Tuple2('9901890', 'アイ・ディー'),
			_Utils_Tuple2('9901891', 'タス'),
			_Utils_Tuple2('9901892', 'さざなみジャパン'),
			_Utils_Tuple2('9901893', 'わらべ出版'),
			_Utils_Tuple2('9901894', 'エイブル'),
			_Utils_Tuple2('9901895', 'オフィスネコ'),
			_Utils_Tuple2('9901896', 'アキューズ'),
			_Utils_Tuple2('9901897', '日本線虫学会'),
			_Utils_Tuple2('9901898', 'ミツロー事務所'),
			_Utils_Tuple2('9901899', 'ホノカ社'),
			_Utils_Tuple2('9901900', 'オフィス春花'),
			_Utils_Tuple2('9901901', '臨海物産'),
			_Utils_Tuple2('9901903', '栃木県農業者懇談会'),
			_Utils_Tuple2('9901904', '蓮見国際研究財団'),
			_Utils_Tuple2('9901905', 'サン・スキラ出版'),
			_Utils_Tuple2('9901906', 'アミ立舎'),
			_Utils_Tuple2('9901907', '日本バイオリン研究所 大正琴全国普及会'),
			_Utils_Tuple2('9901908', '石坂八郎'),
			_Utils_Tuple2('9901909', 'プレスアート'),
			_Utils_Tuple2('9901910', 'インターナショナル・アイ・ネットワーク'),
			_Utils_Tuple2('9901911', 'デザインコンビ出版'),
			_Utils_Tuple2('9901912', '東京大学気候システム研究センター'),
			_Utils_Tuple2('9901913', '芸術空間'),
			_Utils_Tuple2('9901914', 'ペンタトニック'),
			_Utils_Tuple2('9901915', '第１８回国際音響学会議組織委員会'),
			_Utils_Tuple2('9901916', 'テルモ'),
			_Utils_Tuple2('9901917', 'アクアコーラル企画'),
			_Utils_Tuple2('9901918', '熊本市保育園連盟'),
			_Utils_Tuple2('9901919', '電子出版'),
			_Utils_Tuple2('9901920', 'フィットネススポーツ'),
			_Utils_Tuple2('9901921', 'ＩＳＴＰＳＴ'),
			_Utils_Tuple2('9901922', '食品流通研究会'),
			_Utils_Tuple2('9901923', '百水社'),
			_Utils_Tuple2('9901924', 'ティーエム・ティーアンドディー'),
			_Utils_Tuple2('9901925', '西日本新聞社広告局'),
			_Utils_Tuple2('9901926', '増田洋美'),
			_Utils_Tuple2('9901927', '愛知教育大学技術教育講座'),
			_Utils_Tuple2('9901928', '守賀光江'),
			_Utils_Tuple2('9901929', '南川高志'),
			_Utils_Tuple2('9901930', 'フィンランド政府観光局'),
			_Utils_Tuple2('9901931', '情報通信学会'),
			_Utils_Tuple2('9901932', 'エムディー'),
			_Utils_Tuple2('9901933', '造形教育出版会'),
			_Utils_Tuple2('9901934', '石原書店'),
			_Utils_Tuple2('9901935', '慶應義塾大学２１世紀ＣＯＥプログラム「次世代メディア」'),
			_Utils_Tuple2('9901936', '平成１５年度藤原セミナー組織委員会'),
			_Utils_Tuple2('9901937', '日本シー・エッチ・エル'),
			_Utils_Tuple2('9901938', '上野大介'),
			_Utils_Tuple2('9901939', '桜雲会'),
			_Utils_Tuple2('9901940', '石川慶藏'),
			_Utils_Tuple2('9901941', '近代芸術社'),
			_Utils_Tuple2('9901942', 'フォーユアアンビエントすけの'),
			_Utils_Tuple2('9901943', 'ニューハウス工業'),
			_Utils_Tuple2('9901944', 'ウエップジャパン'),
			_Utils_Tuple2('9901945', 'ホテル格付研究所'),
			_Utils_Tuple2('9901946', '日本生物地理学会'),
			_Utils_Tuple2('9901947', '大阪輸出入協会'),
			_Utils_Tuple2('9901948', '経理研究会'),
			_Utils_Tuple2('9901949', 'ビーツー'),
			_Utils_Tuple2('9901950', 'ＨＩＤ ＢＯＯＫＳ'),
			_Utils_Tuple2('9901951', '寺田'),
			_Utils_Tuple2('9901952', '京都ＣＦＣ文書伝道部'),
			_Utils_Tuple2('9901953', '東北大学大学院工学研究科附属破壊制御システム研究施設'),
			_Utils_Tuple2('9901954', 'ガルマ・インターナショナル'),
			_Utils_Tuple2('9901955', 'サンゲツ'),
			_Utils_Tuple2('9901956', 'マーヴェリック出版'),
			_Utils_Tuple2('9901957', 'アートビーング'),
			_Utils_Tuple2('9901958', '川元スミレ'),
			_Utils_Tuple2('9901959', '宮城学院'),
			_Utils_Tuple2('9901960', '大西泰正'),
			_Utils_Tuple2('9901961', 'わらべ絵館'),
			_Utils_Tuple2('9901962', '曠野会'),
			_Utils_Tuple2('9901963', '日本産科婦人科学会'),
			_Utils_Tuple2('9901964', 'ホリスティック栄養学研究所'),
			_Utils_Tuple2('9980595', '朝日中央出版社'),
			_Utils_Tuple2('9980597', '美術現代社'),
			_Utils_Tuple2('9980598', '日本色彩学会'),
			_Utils_Tuple2('9980613', '東京ヴェリエ'),
			_Utils_Tuple2('9980617', 'ＰＡＣＨＡＭＡＭＡ ＥＤＩＴＩＯＮＳ'),
			_Utils_Tuple2('9980618', '稲穂堂'),
			_Utils_Tuple2('9980620', '渡辺弓子'),
			_Utils_Tuple2('9980624', '星の使い社'),
			_Utils_Tuple2('9980625', 'ＡＰＳ'),
			_Utils_Tuple2('9980629', 'パストラル・サウンド'),
			_Utils_Tuple2('9980634', 'ミック・ファンデーション'),
			_Utils_Tuple2('9980637', '翠光院'),
			_Utils_Tuple2('9980639', '芝山町立博物館友の会'),
			_Utils_Tuple2('9980645', '井上書林'),
			_Utils_Tuple2('9980653', 'しゅえっと'),
			_Utils_Tuple2('9980656', 'Ｌａｎｇｕａｇｅ Ｉｎｓｔｉｔｕｔｅ ｏｆ Ｊａｐａｎ'),
			_Utils_Tuple2('9980662', 'ＨＭ研究所'),
			_Utils_Tuple2('9980671', '田宮印刷'),
			_Utils_Tuple2('9980673', '本尊寺'),
			_Utils_Tuple2('9980679', '栗田書林'),
			_Utils_Tuple2('9980681', '書道一元會'),
			_Utils_Tuple2('9980684', '三井徹'),
			_Utils_Tuple2('9980685', '第４９回国際電気化学会事務局'),
			_Utils_Tuple2('9980686', '大峰閣'),
			_Utils_Tuple2('9980693', '弓倉恒男'),
			_Utils_Tuple2('9980696', '岩手アートフェスティバルＵＫ９８実行委員会'),
			_Utils_Tuple2('9980697', '第３回登山と高所環境に関する国際医学会議編集委員会'),
			_Utils_Tuple2('9980700', '日本スウェーデンボルグ協会'),
			_Utils_Tuple2('9980702', 'テレビ山梨'),
			_Utils_Tuple2('9980703', '山口県協力隊を育てる会'),
			_Utils_Tuple2('9980709', '遊楽・遊楽'),
			_Utils_Tuple2('9980710', '作本博昭'),
			_Utils_Tuple2('9980712', '大津久雄'),
			_Utils_Tuple2('9980713', '昭和音楽大学(音楽之友社)'),
			_Utils_Tuple2('9980715', '恵泉社'),
			_Utils_Tuple2('9980720', '戸野隆弘'),
			_Utils_Tuple2('9980721', 'アップルワン'),
			_Utils_Tuple2('9980725', 'ケイマックス'),
			_Utils_Tuple2('9980726', '目黒寄生虫館(松尾商事)'),
			_Utils_Tuple2('9980735', '安田ヨシ'),
			_Utils_Tuple2('9980737', 'ダイナゲイト'),
			_Utils_Tuple2('9980743', '大成経凡'),
			_Utils_Tuple2('9980745', 'ジャン・ジャック書房'),
			_Utils_Tuple2('9980747', '画集出版と喜寿を祝う会'),
			_Utils_Tuple2('9980749', '今泉忠雄'),
			_Utils_Tuple2('9980750', '地震予知総合研究振興会地震調査研究センター'),
			_Utils_Tuple2('9980752', '第４回新エネルギー・システム国際会議組織委員会'),
			_Utils_Tuple2('9980758', '中日新聞北陸本社'),
			_Utils_Tuple2('9980764', '軽井沢ヴィネット'),
			_Utils_Tuple2('9980770', '第１１回国際妊娠高血圧症会議組織委員会'),
			_Utils_Tuple2('9980774', '創想社'),
			_Utils_Tuple2('9980780', '和賀山塊自然学術調査会'),
			_Utils_Tuple2('9980782', '岡本絹雄'),
			_Utils_Tuple2('9980795', 'ウインズ出版'),
			_Utils_Tuple2('9980801', 'タケ・パブリッシング'),
			_Utils_Tuple2('9980815', '大旺堂'),
			_Utils_Tuple2('9980816', 'ダノン健康・栄養普及協会'),
			_Utils_Tuple2('9980834', 'ソニー・ヒューマンキャピタル'),
			_Utils_Tuple2('9980835', '田中氣學堂'),
			_Utils_Tuple2('9980841', '多摩ネットワークセンター'),
			_Utils_Tuple2('9980911', '大陸の対話社'),
			_Utils_Tuple2('9980914', '玉井道敏'),
			_Utils_Tuple2('9980928', 'ＦＯＴＯ ＡＲＴＥ ＭＡＨＩＡ'),
			_Utils_Tuple2('9980932', '第４回国際流体力学会議組織委員会')
		]));
var author$project$Main$getPub = function (isbn) {
	var key = author$project$Main$intsToString(isbn.publisher);
	var name = A2(elm$core$Dict$get, key, author$project$Main$dictPub);
	if (name.$ === 'Just') {
		var s = name.a;
		return _Utils_eq(
			isbn.nation,
			_List_fromArray(
				[4])) ? s : '（外国）';
	} else {
		return _Utils_eq(
			isbn.nation,
			_List_fromArray(
				[4])) ? ('（不明）: ' + key) : ('（外国）: ' + key);
	}
};
var author$project$Main$ISBN = F5(
	function (header, nation, publisher, book, digit) {
		return {book: book, digit: digit, header: header, nation: nation, publisher: publisher};
	});
var author$project$Main$dictHeader = _List_fromArray(
	['978-0', '978-1', '978-2', '978-3', '978-4', '978-5', '978-600', '978-601', '978-602', '978-603', '978-604', '978-605', '978-606', '978-607', '978-608', '978-609', '978-611', '978-612', '978-613', '978-614', '978-615', '978-616', '978-617', '978-618', '978-619', '978-620', '978-621', '978-7', '978-80', '978-81', '978-82', '978-83', '978-84', '978-85', '978-86', '978-87', '978-88', '978-89', '978-90', '978-91', '978-92', '978-93', '978-94', '978-950', '978-951', '978-952', '978-953', '978-954', '978-955', '978-956', '978-957', '978-958', '978-959', '978-960', '978-961', '978-962', '978-963', '978-964', '978-965', '978-966', '978-967', '978-968', '978-969', '978-970', '978-971', '978-972', '978-973', '978-974', '978-975', '978-976', '978-977', '978-978', '978-979', '978-980', '978-981', '978-982', '978-983', '978-984', '978-985', '978-986', '978-987', '978-988', '978-989', '978-9924', '978-9925', '978-9926', '978-9927', '978-9928', '978-9929', '978-9930', '978-9931', '978-9932', '978-9933', '978-9934', '978-9935', '978-9936', '978-9937', '978-9938', '978-9939', '978-9940', '978-9941', '978-9942', '978-9943', '978-9944', '978-9945', '978-9946', '978-9947', '978-9948', '978-9949', '978-9950', '978-9951', '978-9952', '978-9953', '978-9954', '978-9955', '978-9956', '978-9957', '978-9958', '978-9959', '978-9960', '978-9961', '978-9962', '978-9963', '978-9964', '978-9965', '978-9966', '978-9967', '978-9968', '978-9970', '978-9971', '978-9972', '978-9973', '978-9974', '978-9975', '978-9976', '978-9977', '978-9978', '978-9979', '978-9980', '978-9981', '978-9982', '978-9983', '978-9984', '978-9985', '978-9986', '978-9987', '978-9988', '978-9989', '978-99901', '978-99902', '978-99903', '978-99904', '978-99905', '978-99906', '978-99908', '978-99909', '978-99910', '978-99911', '978-99912', '978-99913', '978-99914', '978-99915', '978-99916', '978-99917', '978-99918', '978-99919', '978-99920', '978-99921', '978-99922', '978-99923', '978-99924', '978-99925', '978-99926', '978-99927', '978-99928', '978-99929', '978-99930', '978-99931', '978-99932', '978-99933', '978-99934', '978-99935', '978-99936', '978-99937', '978-99938', '978-99939', '978-99940', '978-99941', '978-99942', '978-99943', '978-99944', '978-99945', '978-99946', '978-99947', '978-99948', '978-99949', '978-99950', '978-99951', '978-99952', '978-99953', '978-99954', '978-99955', '978-99956', '978-99957', '978-99958', '978-99959', '978-99960', '978-99961', '978-99962', '978-99963', '978-99964', '978-99965', '978-99966', '978-99967', '978-99968', '978-99969', '978-99970', '978-99971', '978-99972', '978-99973', '978-99974', '978-99975', '978-99976', '978-99977', '978-99978', '978-99979', '979-10', '979-11', '979-12']);
var author$project$Main$find = F2(
	function (pred, list) {
		find:
		while (true) {
			if (list.b) {
				var x = list.a;
				var xs = list.b;
				if (pred(x)) {
					return elm$core$Maybe$Just(x);
				} else {
					var $temp$pred = pred,
						$temp$list = xs;
					pred = $temp$pred;
					list = $temp$list;
					continue find;
				}
			} else {
				return elm$core$Maybe$Nothing;
			}
		}
	});
var elm$core$Basics$ge = _Utils_ge;
var author$project$Main$isDigit = function (_char) {
	var num = elm$core$Char$toCode(_char);
	return ((num >= 48) && (num <= 57)) || ((num === 88) || (((num >= 65296) && (num <= 65305)) || (num === 65336)));
};
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var author$project$Main$stringToInts = function () {
	var toInt = function (_char) {
		var _n0 = elm$core$Char$toCode(_char);
		switch (_n0) {
			case 88:
				return 10;
			case 65336:
				return 10;
			default:
				var num = _n0;
				return (num <= 57) ? (num - 48) : (num - 65296);
		}
	};
	return A2(
		elm$core$Basics$composeR,
		elm$core$String$toList,
		A2(
			elm$core$Basics$composeR,
			elm$core$List$filter(author$project$Main$isDigit),
			elm$core$List$map(toInt)));
}();
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var author$project$Main$divideNation = function (isbn) {
	var digits = isbn.book;
	var len = elm$core$List$length(digits);
	var header = A2(elm$core$List$take, len - 10, digits);
	var digit = A2(elm$core$List$drop, len - 1, digits);
	var body = A2(
		elm$core$List$take,
		9,
		A2(elm$core$List$drop, len - 10, digits));
	var candidate = ((len === 10) ? '978' : '') + (author$project$Main$intsToString(header) + ('-' + author$project$Main$intsToString(
		A2(elm$core$List$take, 5, body))));
	var key = A2(
		author$project$Main$find,
		function (k) {
			return A2(elm$core$String$startsWith, k, candidate);
		},
		author$project$Main$dictHeader);
	var nation = function () {
		if (key.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var k = key.a;
			return author$project$Main$stringToInts(
				A2(elm$core$String$dropLeft, 4, k));
		}
	}();
	var book = A2(
		elm$core$List$drop,
		elm$core$List$length(nation),
		body);
	return A5(author$project$Main$ISBN, header, nation, _List_Nil, book, digit);
};
var author$project$Main$dictRange = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'978-0',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 2279999, 3]),
					_List_fromArray(
					[2280000, 2289999, 4]),
					_List_fromArray(
					[2290000, 6479999, 3]),
					_List_fromArray(
					[6480000, 6489999, 7]),
					_List_fromArray(
					[6490000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9499999, 6]),
					_List_fromArray(
					[9500000, 9999999, 7])
				])),
			_Utils_Tuple2(
			'978-1',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 5499999, 4]),
					_List_fromArray(
					[5500000, 7319999, 5]),
					_List_fromArray(
					[7320000, 7399999, 7]),
					_List_fromArray(
					[7400000, 7749999, 5]),
					_List_fromArray(
					[7750000, 7753999, 7]),
					_List_fromArray(
					[7754000, 8697999, 5]),
					_List_fromArray(
					[8698000, 9729999, 6]),
					_List_fromArray(
					[9730000, 9877999, 4]),
					_List_fromArray(
					[9878000, 9989999, 6]),
					_List_fromArray(
					[9990000, 9999999, 7])
				])),
			_Utils_Tuple2(
			'978-2',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 3499999, 3]),
					_List_fromArray(
					[3500000, 3999999, 5]),
					_List_fromArray(
					[4000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8399999, 4]),
					_List_fromArray(
					[8400000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9199429, 6]),
					_List_fromArray(
					[9199430, 9199689, 7]),
					_List_fromArray(
					[9199690, 9499999, 6]),
					_List_fromArray(
					[9500000, 9999999, 7])
				])),
			_Utils_Tuple2(
			'978-3',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 299999, 2]),
					_List_fromArray(
					[300000, 339999, 3]),
					_List_fromArray(
					[340000, 369999, 4]),
					_List_fromArray(
					[370000, 399999, 5]),
					_List_fromArray(
					[400000, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9499999, 6]),
					_List_fromArray(
					[9500000, 9539999, 7]),
					_List_fromArray(
					[9540000, 9699999, 5]),
					_List_fromArray(
					[9700000, 9899999, 7]),
					_List_fromArray(
					[9900000, 9949999, 5]),
					_List_fromArray(
					[9950000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-4',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9499999, 6]),
					_List_fromArray(
					[9500000, 9999999, 7])
				])),
			_Utils_Tuple2(
			'978-5',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 49999, 5]),
					_List_fromArray(
					[50000, 99999, 4]),
					_List_fromArray(
					[100000, 1999999, 2]),
					_List_fromArray(
					[2000000, 4209999, 3]),
					_List_fromArray(
					[4210000, 4299999, 4]),
					_List_fromArray(
					[4300000, 4309999, 3]),
					_List_fromArray(
					[4310000, 4399999, 4]),
					_List_fromArray(
					[4400000, 4409999, 3]),
					_List_fromArray(
					[4410000, 4499999, 4]),
					_List_fromArray(
					[4500000, 6039999, 3]),
					_List_fromArray(
					[6040000, 6049999, 7]),
					_List_fromArray(
					[6050000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9099999, 6]),
					_List_fromArray(
					[9100000, 9199999, 5]),
					_List_fromArray(
					[9200000, 9299999, 4]),
					_List_fromArray(
					[9300000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9500999, 7]),
					_List_fromArray(
					[9501000, 9799999, 4]),
					_List_fromArray(
					[9800000, 9899999, 5]),
					_List_fromArray(
					[9900000, 9909999, 7]),
					_List_fromArray(
					[9910000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-600',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-601',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8499999, 5]),
					_List_fromArray(
					[8500000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-602',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 799999, 2]),
					_List_fromArray(
					[800000, 899999, 4]),
					_List_fromArray(
					[900000, 1099999, 4]),
					_List_fromArray(
					[1100000, 1199999, 4]),
					_List_fromArray(
					[1200000, 1399999, 4]),
					_List_fromArray(
					[1400000, 1499999, 5]),
					_List_fromArray(
					[1500000, 1699999, 4]),
					_List_fromArray(
					[1700000, 1799999, 5]),
					_List_fromArray(
					[1800000, 1899999, 5]),
					_List_fromArray(
					[1900000, 1999999, 5]),
					_List_fromArray(
					[2000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 6199999, 5]),
					_List_fromArray(
					[6200000, 6749999, 4]),
					_List_fromArray(
					[6750000, 6999999, 4]),
					_List_fromArray(
					[7000000, 7499999, 5]),
					_List_fromArray(
					[7500000, 7999999, 4]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-603',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 499999, 2]),
					_List_fromArray(
					[500000, 4999999, 2]),
					_List_fromArray(
					[5000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-604',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9799999, 3]),
					_List_fromArray(
					[9800000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-605',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 99999, 0]),
					_List_fromArray(
					[100000, 299999, 2]),
					_List_fromArray(
					[300000, 399999, 3]),
					_List_fromArray(
					[400000, 999999, 2]),
					_List_fromArray(
					[1000000, 1999999, 3]),
					_List_fromArray(
					[2000000, 2399999, 4]),
					_List_fromArray(
					[2400000, 3999999, 3]),
					_List_fromArray(
					[4000000, 5999999, 4]),
					_List_fromArray(
					[6000000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-606',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 4999999, 2]),
					_List_fromArray(
					[5000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9099999, 4]),
					_List_fromArray(
					[9100000, 9199999, 3]),
					_List_fromArray(
					[9200000, 9749999, 5]),
					_List_fromArray(
					[9750000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-607',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 7499999, 3]),
					_List_fromArray(
					[7500000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-608',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 1999999, 2]),
					_List_fromArray(
					[2000000, 4499999, 3]),
					_List_fromArray(
					[4500000, 6499999, 4]),
					_List_fromArray(
					[6500000, 6999999, 5]),
					_List_fromArray(
					[7000000, 9999999, 1])
				])),
			_Utils_Tuple2(
			'978-609',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-611',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-612',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 4499999, 4]),
					_List_fromArray(
					[4500000, 4999999, 5]),
					_List_fromArray(
					[5000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-613',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 9999999, 1])
				])),
			_Utils_Tuple2(
			'978-614',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-615',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-616',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-617',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-618',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-619',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1499999, 2]),
					_List_fromArray(
					[1500000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-620',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 9999999, 1])
				])),
			_Utils_Tuple2(
			'978-621',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 3999999, 0]),
					_List_fromArray(
					[4000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 7999999, 0]),
					_List_fromArray(
					[8000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9499999, 0]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-7',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-80',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-81',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-82',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6899999, 3]),
					_List_fromArray(
					[6900000, 6999999, 6]),
					_List_fromArray(
					[7000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9899999, 5]),
					_List_fromArray(
					[9900000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-83',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 6999999, 5]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-84',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1399999, 2]),
					_List_fromArray(
					[1400000, 1499999, 3]),
					_List_fromArray(
					[1500000, 1999999, 5]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9199999, 4]),
					_List_fromArray(
					[9200000, 9239999, 6]),
					_List_fromArray(
					[9240000, 9299999, 5]),
					_List_fromArray(
					[9300000, 9499999, 6]),
					_List_fromArray(
					[9500000, 9699999, 5]),
					_List_fromArray(
					[9700000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-85',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 5499999, 3]),
					_List_fromArray(
					[5500000, 5999999, 4]),
					_List_fromArray(
					[6000000, 6999999, 5]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9249999, 6]),
					_List_fromArray(
					[9250000, 9449999, 5]),
					_List_fromArray(
					[9450000, 9599999, 4]),
					_List_fromArray(
					[9600000, 9799999, 2]),
					_List_fromArray(
					[9800000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-86',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-87',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 3999999, 0]),
					_List_fromArray(
					[4000000, 6499999, 3]),
					_List_fromArray(
					[6500000, 6999999, 0]),
					_List_fromArray(
					[7000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8499999, 0]),
					_List_fromArray(
					[8500000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9699999, 0]),
					_List_fromArray(
					[9700000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-88',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 3269999, 3]),
					_List_fromArray(
					[3270000, 3389999, 4]),
					_List_fromArray(
					[3390000, 5999999, 3]),
					_List_fromArray(
					[6000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9099999, 6]),
					_List_fromArray(
					[9100000, 9299999, 3]),
					_List_fromArray(
					[9300000, 9399999, 4]),
					_List_fromArray(
					[9400000, 9479999, 6]),
					_List_fromArray(
					[9480000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-89',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2499999, 2]),
					_List_fromArray(
					[2500000, 5499999, 3]),
					_List_fromArray(
					[5500000, 8499999, 4]),
					_List_fromArray(
					[8500000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9699999, 6]),
					_List_fromArray(
					[9700000, 9899999, 5]),
					_List_fromArray(
					[9900000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-90',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 6999999, 4]),
					_List_fromArray(
					[7000000, 7999999, 5]),
					_List_fromArray(
					[8000000, 8499999, 6]),
					_List_fromArray(
					[8500000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9099999, 2]),
					_List_fromArray(
					[9100000, 9399999, 0]),
					_List_fromArray(
					[9400000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-91',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 4999999, 2]),
					_List_fromArray(
					[5000000, 6499999, 3]),
					_List_fromArray(
					[6500000, 6999999, 0]),
					_List_fromArray(
					[7000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8499999, 0]),
					_List_fromArray(
					[8500000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9699999, 0]),
					_List_fromArray(
					[9700000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-92',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 1]),
					_List_fromArray(
					[6000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9899999, 5]),
					_List_fromArray(
					[9900000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-93',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'978-94',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 3]),
					_List_fromArray(
					[6000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-950',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9899999, 4]),
					_List_fromArray(
					[9900000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-951',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 8899999, 3]),
					_List_fromArray(
					[8900000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-952',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 5999999, 4]),
					_List_fromArray(
					[6000000, 6599999, 2]),
					_List_fromArray(
					[6600000, 6699999, 4]),
					_List_fromArray(
					[6700000, 6999999, 5]),
					_List_fromArray(
					[7000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9899999, 4]),
					_List_fromArray(
					[9900000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-953',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 1499999, 2]),
					_List_fromArray(
					[1500000, 5099999, 3]),
					_List_fromArray(
					[5100000, 5499999, 2]),
					_List_fromArray(
					[5500000, 5999999, 5]),
					_List_fromArray(
					[6000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-954',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2899999, 2]),
					_List_fromArray(
					[2900000, 2999999, 4]),
					_List_fromArray(
					[3000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9299999, 5]),
					_List_fromArray(
					[9300000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-955',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 4]),
					_List_fromArray(
					[2000000, 3799999, 2]),
					_List_fromArray(
					[3800000, 3899999, 5]),
					_List_fromArray(
					[3900000, 4099999, 4]),
					_List_fromArray(
					[4100000, 4399999, 5]),
					_List_fromArray(
					[4400000, 4499999, 5]),
					_List_fromArray(
					[4500000, 4999999, 4]),
					_List_fromArray(
					[5000000, 5499999, 5]),
					_List_fromArray(
					[5500000, 7199999, 3]),
					_List_fromArray(
					[7200000, 7499999, 4]),
					_List_fromArray(
					[7500000, 7999999, 4]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-956',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 899999, 2]),
					_List_fromArray(
					[900000, 999999, 5]),
					_List_fromArray(
					[1000000, 1999999, 2]),
					_List_fromArray(
					[2000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 6999999, 4]),
					_List_fromArray(
					[7000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-957',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 299999, 2]),
					_List_fromArray(
					[300000, 499999, 4]),
					_List_fromArray(
					[500000, 1999999, 2]),
					_List_fromArray(
					[2000000, 2099999, 4]),
					_List_fromArray(
					[2100000, 2799999, 2]),
					_List_fromArray(
					[2800000, 3099999, 5]),
					_List_fromArray(
					[3100000, 4399999, 2]),
					_List_fromArray(
					[4400000, 8199999, 3]),
					_List_fromArray(
					[8200000, 9699999, 4]),
					_List_fromArray(
					[9700000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-958',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5399999, 2]),
					_List_fromArray(
					[5400000, 5599999, 4]),
					_List_fromArray(
					[5600000, 5699999, 5]),
					_List_fromArray(
					[5700000, 5999999, 5]),
					_List_fromArray(
					[6000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-959',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-960',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6599999, 3]),
					_List_fromArray(
					[6600000, 6899999, 4]),
					_List_fromArray(
					[6900000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 9299999, 5]),
					_List_fromArray(
					[9300000, 9399999, 2]),
					_List_fromArray(
					[9400000, 9799999, 4]),
					_List_fromArray(
					[9800000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-961',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-962',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8699999, 5]),
					_List_fromArray(
					[8700000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-963',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-964',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1499999, 2]),
					_List_fromArray(
					[1500000, 2499999, 3]),
					_List_fromArray(
					[2500000, 2999999, 4]),
					_List_fromArray(
					[3000000, 5499999, 3]),
					_List_fromArray(
					[5500000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9699999, 5]),
					_List_fromArray(
					[9700000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-965',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 6999999, 0]),
					_List_fromArray(
					[7000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8999999, 0]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-966',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1299999, 2]),
					_List_fromArray(
					[1300000, 1399999, 3]),
					_List_fromArray(
					[1400000, 1499999, 2]),
					_List_fromArray(
					[1500000, 1699999, 4]),
					_List_fromArray(
					[1700000, 1999999, 3]),
					_List_fromArray(
					[2000000, 2789999, 4]),
					_List_fromArray(
					[2790000, 2899999, 3]),
					_List_fromArray(
					[2900000, 2999999, 4]),
					_List_fromArray(
					[3000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9099999, 5]),
					_List_fromArray(
					[9100000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9799999, 5]),
					_List_fromArray(
					[9800000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-967',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 99999, 2]),
					_List_fromArray(
					[100000, 999999, 4]),
					_List_fromArray(
					[1000000, 1999999, 5]),
					_List_fromArray(
					[2000000, 2499999, 4]),
					_List_fromArray(
					[2500000, 2999999, 0]),
					_List_fromArray(
					[3000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 5999999, 4]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9989999, 4]),
					_List_fromArray(
					[9990000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-968',
			_List_fromArray(
				[
					_List_fromArray(
					[100000, 3999999, 2]),
					_List_fromArray(
					[4000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 7999999, 4]),
					_List_fromArray(
					[8000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-969',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 2299999, 2]),
					_List_fromArray(
					[2300000, 2399999, 5]),
					_List_fromArray(
					[2400000, 3999999, 2]),
					_List_fromArray(
					[4000000, 7499999, 3]),
					_List_fromArray(
					[7500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-970',
			_List_fromArray(
				[
					_List_fromArray(
					[100000, 5999999, 2]),
					_List_fromArray(
					[6000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9099999, 4]),
					_List_fromArray(
					[9100000, 9699999, 5]),
					_List_fromArray(
					[9700000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-971',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 159999, 3]),
					_List_fromArray(
					[160000, 199999, 4]),
					_List_fromArray(
					[200000, 299999, 2]),
					_List_fromArray(
					[300000, 599999, 4]),
					_List_fromArray(
					[600000, 4999999, 2]),
					_List_fromArray(
					[5000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9099999, 4]),
					_List_fromArray(
					[9100000, 9599999, 5]),
					_List_fromArray(
					[9600000, 9699999, 4]),
					_List_fromArray(
					[9700000, 9899999, 2]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-972',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-973',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 1699999, 3]),
					_List_fromArray(
					[1700000, 1999999, 4]),
					_List_fromArray(
					[2000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7599999, 3]),
					_List_fromArray(
					[7600000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8899999, 5]),
					_List_fromArray(
					[8900000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-974',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 4]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-975',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 199999, 5]),
					_List_fromArray(
					[200000, 2399999, 2]),
					_List_fromArray(
					[2400000, 2499999, 4]),
					_List_fromArray(
					[2500000, 5999999, 3]),
					_List_fromArray(
					[6000000, 9199999, 4]),
					_List_fromArray(
					[9200000, 9899999, 5]),
					_List_fromArray(
					[9900000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-976',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-977',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 6999999, 4]),
					_List_fromArray(
					[7000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 8999999, 5]),
					_List_fromArray(
					[9000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-978',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 3]),
					_List_fromArray(
					[2000000, 2999999, 4]),
					_List_fromArray(
					[3000000, 7999999, 5]),
					_List_fromArray(
					[8000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-979',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 3]),
					_List_fromArray(
					[1000000, 1499999, 4]),
					_List_fromArray(
					[1500000, 1999999, 5]),
					_List_fromArray(
					[2000000, 2999999, 2]),
					_List_fromArray(
					[3000000, 3999999, 4]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-980',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-981',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1699999, 2]),
					_List_fromArray(
					[1700000, 1999999, 5]),
					_List_fromArray(
					[2000000, 2999999, 3]),
					_List_fromArray(
					[3000000, 3099999, 4]),
					_List_fromArray(
					[3100000, 3999999, 3]),
					_List_fromArray(
					[4000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-982',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9799999, 4]),
					_List_fromArray(
					[9800000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-983',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 199999, 2]),
					_List_fromArray(
					[200000, 1999999, 3]),
					_List_fromArray(
					[2000000, 3999999, 4]),
					_List_fromArray(
					[4000000, 4499999, 5]),
					_List_fromArray(
					[4500000, 4999999, 2]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9899999, 4]),
					_List_fromArray(
					[9900000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-984',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-985',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-986',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1199999, 2]),
					_List_fromArray(
					[1200000, 5599999, 3]),
					_List_fromArray(
					[5600000, 7999999, 4]),
					_List_fromArray(
					[8000000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-987',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 1999999, 4]),
					_List_fromArray(
					[2000000, 2999999, 5]),
					_List_fromArray(
					[3000000, 3599999, 2]),
					_List_fromArray(
					[3600000, 3999999, 4]),
					_List_fromArray(
					[4000000, 4199999, 4]),
					_List_fromArray(
					[4200000, 4399999, 2]),
					_List_fromArray(
					[4400000, 4499999, 4]),
					_List_fromArray(
					[4500000, 4899999, 5]),
					_List_fromArray(
					[4900000, 4999999, 4]),
					_List_fromArray(
					[5000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-988',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1199999, 2]),
					_List_fromArray(
					[1200000, 1499999, 5]),
					_List_fromArray(
					[1500000, 1699999, 5]),
					_List_fromArray(
					[1700000, 1999999, 5]),
					_List_fromArray(
					[2000000, 7699999, 3]),
					_List_fromArray(
					[7700000, 7999999, 5]),
					_List_fromArray(
					[8000000, 9699999, 4]),
					_List_fromArray(
					[9700000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-989',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 4]),
					_List_fromArray(
					[9500000, 9999999, 5])
				])),
			_Utils_Tuple2(
			'978-9924',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 0]),
					_List_fromArray(
					[3000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 4999999, 0]),
					_List_fromArray(
					[5000000, 6499999, 3]),
					_List_fromArray(
					[6500000, 8999999, 0]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9925',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7349999, 3]),
					_List_fromArray(
					[7350000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9926',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9927',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 4999999, 4]),
					_List_fromArray(
					[5000000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-9928',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 4999999, 4]),
					_List_fromArray(
					[5000000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-9929',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9930',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 9399999, 3]),
					_List_fromArray(
					[9400000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9931',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9932',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9933',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9934',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 4999999, 2]),
					_List_fromArray(
					[5000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9935',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9936',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9937',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 4999999, 2]),
					_List_fromArray(
					[5000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9938',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 7999999, 2]),
					_List_fromArray(
					[8000000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9939',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9940',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 4999999, 2]),
					_List_fromArray(
					[5000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9941',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9942',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 7499999, 2]),
					_List_fromArray(
					[7500000, 8499999, 3]),
					_List_fromArray(
					[8500000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9849999, 3]),
					_List_fromArray(
					[9850000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9943',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 9749999, 4]),
					_List_fromArray(
					[9750000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-9944',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 4]),
					_List_fromArray(
					[1000000, 4999999, 3]),
					_List_fromArray(
					[5000000, 5999999, 4]),
					_List_fromArray(
					[6000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-9945',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 99999, 2]),
					_List_fromArray(
					[100000, 799999, 3]),
					_List_fromArray(
					[800000, 3999999, 2]),
					_List_fromArray(
					[4000000, 5699999, 3]),
					_List_fromArray(
					[5700000, 5799999, 2]),
					_List_fromArray(
					[5800000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9946',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9947',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-9948',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9949',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 7499999, 3]),
					_List_fromArray(
					[7500000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9950',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9951',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9952',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9953',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9299999, 4]),
					_List_fromArray(
					[9300000, 9699999, 2]),
					_List_fromArray(
					[9700000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-9954',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9899999, 4]),
					_List_fromArray(
					[9900000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-9955',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 9299999, 3]),
					_List_fromArray(
					[9300000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9956',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9957',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 6499999, 3]),
					_List_fromArray(
					[6500000, 6799999, 2]),
					_List_fromArray(
					[6800000, 6899999, 3]),
					_List_fromArray(
					[6900000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8499999, 2]),
					_List_fromArray(
					[8500000, 8799999, 4]),
					_List_fromArray(
					[8800000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-9958',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 199999, 2]),
					_List_fromArray(
					[200000, 299999, 3]),
					_List_fromArray(
					[300000, 399999, 4]),
					_List_fromArray(
					[400000, 899999, 3]),
					_List_fromArray(
					[900000, 999999, 4]),
					_List_fromArray(
					[1000000, 1899999, 2]),
					_List_fromArray(
					[1900000, 1999999, 4]),
					_List_fromArray(
					[2000000, 4999999, 2]),
					_List_fromArray(
					[5000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9959',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9699999, 4]),
					_List_fromArray(
					[9700000, 9799999, 3]),
					_List_fromArray(
					[9800000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-9960',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 2]),
					_List_fromArray(
					[6000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9961',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9962',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5499999, 2]),
					_List_fromArray(
					[5500000, 5599999, 4]),
					_List_fromArray(
					[5600000, 5999999, 2]),
					_List_fromArray(
					[6000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9963',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 2499999, 4]),
					_List_fromArray(
					[2500000, 2799999, 3]),
					_List_fromArray(
					[2800000, 2999999, 4]),
					_List_fromArray(
					[3000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7349999, 3]),
					_List_fromArray(
					[7350000, 7499999, 4]),
					_List_fromArray(
					[7500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9964',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 6999999, 1]),
					_List_fromArray(
					[7000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-9965',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9966',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1499999, 3]),
					_List_fromArray(
					[1500000, 1999999, 4]),
					_List_fromArray(
					[2000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 7499999, 4]),
					_List_fromArray(
					[7500000, 9599999, 3]),
					_List_fromArray(
					[9600000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9967',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9968',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 9399999, 3]),
					_List_fromArray(
					[9400000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9970',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9971',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 1]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9972',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 1999999, 1]),
					_List_fromArray(
					[2000000, 2499999, 3]),
					_List_fromArray(
					[2500000, 2999999, 4]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9973',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 599999, 2]),
					_List_fromArray(
					[600000, 899999, 3]),
					_List_fromArray(
					[900000, 999999, 4]),
					_List_fromArray(
					[1000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 9699999, 3]),
					_List_fromArray(
					[9700000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9974',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7499999, 3]),
					_List_fromArray(
					[7500000, 8799999, 4]),
					_List_fromArray(
					[8800000, 9099999, 3]),
					_List_fromArray(
					[9100000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-9975',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 2999999, 3]),
					_List_fromArray(
					[3000000, 3999999, 4]),
					_List_fromArray(
					[4000000, 4499999, 4]),
					_List_fromArray(
					[4500000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9976',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 5999999, 4]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9977',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 8999999, 2]),
					_List_fromArray(
					[9000000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9978',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 2]),
					_List_fromArray(
					[3000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9979',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 6499999, 2]),
					_List_fromArray(
					[6500000, 6599999, 3]),
					_List_fromArray(
					[6600000, 7599999, 2]),
					_List_fromArray(
					[7600000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9980',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9981',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 2]),
					_List_fromArray(
					[1000000, 1599999, 3]),
					_List_fromArray(
					[1600000, 1999999, 4]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9982',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 7999999, 2]),
					_List_fromArray(
					[8000000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9983',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 7999999, 0]),
					_List_fromArray(
					[8000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9899999, 3]),
					_List_fromArray(
					[9900000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9984',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9985',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9986',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9399999, 4]),
					_List_fromArray(
					[9400000, 9699999, 3]),
					_List_fromArray(
					[9700000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-9987',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 2]),
					_List_fromArray(
					[4000000, 8799999, 3]),
					_List_fromArray(
					[8800000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9988',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5499999, 2]),
					_List_fromArray(
					[5500000, 7499999, 3]),
					_List_fromArray(
					[7500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-9989',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 1999999, 3]),
					_List_fromArray(
					[2000000, 2999999, 4]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9999999, 4])
				])),
			_Utils_Tuple2(
			'978-99901',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99902',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99903',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99904',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 1]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99905',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99906',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99908',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99909',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99910',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99911',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99912',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99913',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 3599999, 2]),
					_List_fromArray(
					[3600000, 5999999, 0]),
					_List_fromArray(
					[6000000, 6049999, 3]),
					_List_fromArray(
					[6050000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99914',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99915',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99916',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99917',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99918',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99919',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 8499999, 3]),
					_List_fromArray(
					[8500000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99920',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99921',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 8999999, 1]),
					_List_fromArray(
					[9000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99922',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99923',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99924',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99925',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99926',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 8699999, 3]),
					_List_fromArray(
					[8700000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99927',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99928',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99929',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99930',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99931',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99932',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 7999999, 1]),
					_List_fromArray(
					[8000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99933',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99934',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99935',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 1]),
					_List_fromArray(
					[9000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99936',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99937',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99938',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99939',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 1]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99940',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99941',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99942',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99943',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99944',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99945',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 1]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99946',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99947',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99948',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99949',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99950',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99951',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99952',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99953',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9399999, 3]),
					_List_fromArray(
					[9400000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99954',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 8799999, 3]),
					_List_fromArray(
					[8800000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99955',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99956',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 2]),
					_List_fromArray(
					[6000000, 8599999, 3]),
					_List_fromArray(
					[8600000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99957',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99958',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 9399999, 2]),
					_List_fromArray(
					[9400000, 9499999, 3]),
					_List_fromArray(
					[9500000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99959',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99960',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 999999, 1]),
					_List_fromArray(
					[1000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99961',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99962',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99963',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 2]),
					_List_fromArray(
					[5000000, 9199999, 3]),
					_List_fromArray(
					[9200000, 9999999, 2])
				])),
			_Utils_Tuple2(
			'978-99964',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99965',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 3999999, 3]),
					_List_fromArray(
					[4000000, 6299999, 2]),
					_List_fromArray(
					[6300000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99966',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2999999, 1]),
					_List_fromArray(
					[3000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9499999, 2]),
					_List_fromArray(
					[9500000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99967',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 8999999, 3]),
					_List_fromArray(
					[9000000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99968',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 5999999, 3]),
					_List_fromArray(
					[6000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99969',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99970',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99971',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 5999999, 1]),
					_List_fromArray(
					[6000000, 8499999, 2]),
					_List_fromArray(
					[8500000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99972',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 8999999, 2]),
					_List_fromArray(
					[9000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99973',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99974',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 0]),
					_List_fromArray(
					[4000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99975',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 3999999, 1]),
					_List_fromArray(
					[4000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99976',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 5999999, 2]),
					_List_fromArray(
					[6000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99977',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 1]),
					_List_fromArray(
					[2000000, 3999999, 0]),
					_List_fromArray(
					[4000000, 6999999, 2]),
					_List_fromArray(
					[7000000, 7999999, 3]),
					_List_fromArray(
					[8000000, 9999999, 0])
				])),
			_Utils_Tuple2(
			'978-99978',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'978-99979',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 4999999, 1]),
					_List_fromArray(
					[5000000, 7999999, 2]),
					_List_fromArray(
					[8000000, 9999999, 3])
				])),
			_Utils_Tuple2(
			'979-10',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 2]),
					_List_fromArray(
					[2000000, 6999999, 3]),
					_List_fromArray(
					[7000000, 8999999, 4]),
					_List_fromArray(
					[9000000, 9759999, 5]),
					_List_fromArray(
					[9760000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'979-11',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 2499999, 2]),
					_List_fromArray(
					[2500000, 5499999, 3]),
					_List_fromArray(
					[5500000, 8499999, 4]),
					_List_fromArray(
					[8500000, 9499999, 5]),
					_List_fromArray(
					[9500000, 9999999, 6])
				])),
			_Utils_Tuple2(
			'979-12',
			_List_fromArray(
				[
					_List_fromArray(
					[0, 1999999, 0]),
					_List_fromArray(
					[2000000, 2009999, 3]),
					_List_fromArray(
					[2010000, 9999999, 0])
				]))
		]));
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var author$project$Main$dividePublisher = function (isbn) {
	var headnat = (elm$core$List$isEmpty(isbn.header) ? '978' : author$project$Main$intsToString(isbn.header)) + ('-' + author$project$Main$intsToString(isbn.nation));
	var ranges = function () {
		var _n7 = A2(elm$core$Dict$get, headnat, author$project$Main$dictRange);
		if (_n7.$ === 'Just') {
			var dat = _n7.a;
			return dat;
		} else {
			return _List_fromArray(
				[
					_List_fromArray(
					[0, 0, 0])
				]);
		}
	}();
	var candidate = author$project$Main$intsToString(
		A2(elm$core$List$take, 7, isbn.book));
	var check = function (bounds) {
		if (((bounds.b && bounds.b.b) && bounds.b.b.b) && (!bounds.b.b.b.b)) {
			var lower = bounds.a;
			var _n5 = bounds.b;
			var upper = _n5.a;
			var _n6 = _n5.b;
			var n = _n6.a;
			return (_Utils_cmp(
				elm$core$String$fromInt(lower),
				candidate) < 1) && (_Utils_cmp(
				candidate,
				elm$core$String$fromInt(upper)) < 1);
		} else {
			return false;
		}
	};
	var range = function () {
		var _n0 = A2(author$project$Main$find, check, ranges);
		if (((((_n0.$ === 'Just') && _n0.a.b) && _n0.a.b.b) && _n0.a.b.b.b) && (!_n0.a.b.b.b.b)) {
			var _n1 = _n0.a;
			var lower = _n1.a;
			var _n2 = _n1.b;
			var upper = _n2.a;
			var _n3 = _n2.b;
			var n = _n3.a;
			return n;
		} else {
			return 0;
		}
	}();
	return A5(
		author$project$Main$ISBN,
		isbn.header,
		isbn.nation,
		A2(elm$core$List$take, range, isbn.book),
		A2(elm$core$List$drop, range, isbn.book),
		isbn.digit);
};
var author$project$Main$toISBN = function (digits) {
	return A5(author$project$Main$ISBN, _List_Nil, _List_Nil, _List_Nil, digits, _List_Nil);
};
var author$project$Main$intsToISBN = A2(
	elm$core$Basics$composeR,
	author$project$Main$toISBN,
	A2(elm$core$Basics$composeR, author$project$Main$divideNation, author$project$Main$dividePublisher));
var author$project$Main$stringToISBN = A2(elm$core$Basics$composeR, author$project$Main$stringToInts, author$project$Main$intsToISBN);
var elm$core$Basics$modBy = _Basics_modBy;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var author$project$Main$checksum13 = A2(
	elm$core$Basics$composeR,
	A2(
		elm$core$List$map2,
		elm$core$Basics$mul,
		_List_fromArray(
			[1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3])),
	A2(
		elm$core$Basics$composeR,
		elm$core$List$sum,
		A2(
			elm$core$Basics$composeR,
			elm$core$Basics$negate,
			elm$core$Basics$modBy(10))));
var author$project$Main$checksum10 = A2(
	elm$core$Basics$composeR,
	A2(
		elm$core$List$map2,
		elm$core$Basics$mul,
		_List_fromArray(
			[10, 9, 8, 7, 6, 5, 4, 3, 2])),
	A2(
		elm$core$Basics$composeR,
		elm$core$List$sum,
		A2(
			elm$core$Basics$composeR,
			elm$core$Basics$negate,
			elm$core$Basics$modBy(11))));
var elm$core$Basics$neq = _Utils_notEqual;
var author$project$Main$verify = function (digits) {
	var prefix = A2(elm$core$List$take, 3, digits);
	var len = elm$core$List$length(digits);
	var lastdigit = A2(elm$core$List$drop, len - 1, digits);
	return (!len) ? elm$core$Result$Err('') : (((len !== 10) && (len !== 13)) ? elm$core$Result$Err('Error: wrong length') : (((len === 10) && (!_Utils_eq(
		_List_fromArray(
			[
				author$project$Main$checksum10(digits)
			]),
		lastdigit))) ? elm$core$Result$Err('Error: bad check digit') : (((len === 13) && ((!_Utils_eq(
		prefix,
		_List_fromArray(
			[9, 7, 8]))) && (!_Utils_eq(
		prefix,
		_List_fromArray(
			[9, 7, 9]))))) ? elm$core$Result$Err('Error: invalid prefix') : (((len === 13) && (!_Utils_eq(
		_List_fromArray(
			[
				author$project$Main$checksum13(digits)
			]),
		lastdigit))) ? elm$core$Result$Err('Error: bad check digit') : elm$core$Result$Ok(digits)))));
};
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var author$project$Main$conv13 = function (digits) {
	var result = author$project$Main$verify(digits);
	var len = elm$core$List$length(digits);
	var body = A2(
		elm$core$List$append,
		_List_fromArray(
			[9, 7, 8]),
		A2(elm$core$List$take, 9, digits));
	if (result.$ === 'Err') {
		return result;
	} else {
		return (len === 13) ? result : elm$core$Result$Ok(
			_Utils_ap(
				body,
				_List_fromArray(
					[
						author$project$Main$checksum13(body)
					])));
	}
};
var author$project$Main$fromISBN = function (isbn) {
	return _List_fromArray(
		[isbn.header, isbn.nation, isbn.publisher, isbn.book, isbn.digit]);
};
var elm$core$Basics$not = _Basics_not;
var author$project$Main$hyphenate = function (result) {
	if (result.$ === 'Err') {
		var str = result.a;
		return str;
	} else {
		var ns = result.a;
		return A2(
			elm$core$String$join,
			'-',
			A2(
				elm$core$List$map,
				author$project$Main$intsToString,
				A2(
					elm$core$List$filter,
					A2(elm$core$Basics$composeR, elm$core$List$isEmpty, elm$core$Basics$not),
					author$project$Main$fromISBN(
						author$project$Main$intsToISBN(ns)))));
	}
};
var author$project$Main$to13h = A2(
	elm$core$Basics$composeR,
	author$project$Main$stringToInts,
	A2(elm$core$Basics$composeR, author$project$Main$conv13, author$project$Main$hyphenate));
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$index = _Json_decodeIndex;
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map3 = _Json_map3;
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Main$bookDecoder = F2(
	function (n, str) {
		var volume = A2(
			elm$core$Basics$composeL,
			A2(
				elm$core$Basics$composeL,
				elm$json$Json$Decode$field('items'),
				elm$json$Json$Decode$index(0)),
			elm$json$Json$Decode$field('volumeInfo'));
		var title = A3(
			elm$core$Basics$composeL,
			volume,
			elm$json$Json$Decode$field('title'),
			elm$json$Json$Decode$string);
		var isbn = author$project$Main$stringToISBN(str);
		var date = A3(
			elm$core$Basics$composeL,
			volume,
			elm$json$Json$Decode$field('publishedDate'),
			elm$json$Json$Decode$string);
		var authors = A2(
			elm$json$Json$Decode$map,
			elm$core$String$join(', '),
			A3(
				elm$core$Basics$composeL,
				volume,
				elm$json$Json$Decode$field('authors'),
				elm$json$Json$Decode$list(elm$json$Json$Decode$string)));
		return A4(
			elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {
						authors: y,
						input: str,
						isbn13: author$project$Main$to13h(str),
						nation: author$project$Main$getNation(isbn),
						order: n,
						pubdate: x,
						publisher: author$project$Main$getPub(isbn),
						remark: '',
						title: z
					};
				}),
			date,
			authors,
			title);
	});
var author$project$Main$unhyphenate = function (result) {
	if (result.$ === 'Err') {
		var str = result.a;
		return str;
	} else {
		var ns = result.a;
		return author$project$Main$intsToString(ns);
	}
};
var author$project$Main$to13 = A2(
	elm$core$Basics$composeR,
	author$project$Main$stringToInts,
	A2(elm$core$Basics$composeR, author$project$Main$conv13, author$project$Main$unhyphenate));
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var elm$http$Http$Timeout_ = {$: 'Timeout_'};
var elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			elm$core$Basics$identity,
			A2(elm$core$Basics$composeR, toResult, toMsg));
	});
var elm$http$Http$emptyBody = _Http_emptyBody;
var elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var elm$http$Http$init = elm$core$Task$succeed(
	A2(elm$http$Http$State, elm$core$Dict$empty, _List_Nil));
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Process$kill = _Scheduler_kill;
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _n2 = A2(elm$core$Dict$get, tracker, reqs);
					if (_n2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _n2.a;
						return A2(
							elm$core$Task$andThen,
							function (_n3) {
								return A3(
									elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2(elm$core$Dict$remove, tracker, reqs));
							},
							elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						elm$core$Task$andThen,
						function (pid) {
							var _n4 = req.tracker;
							if (_n4.$ === 'Nothing') {
								return A3(elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _n4.a;
								return A3(
									elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3(elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			elm$core$Task$andThen,
			function (reqs) {
				return elm$core$Task$succeed(
					A2(elm$http$Http$State, reqs, subs));
			},
			A3(elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _n0) {
		var actualTracker = _n0.a;
		var toMsg = _n0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? elm$core$Maybe$Just(
			A2(
				elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : elm$core$Maybe$Nothing;
	});
var elm$http$Http$onSelfMsg = F3(
	function (router, _n0, state) {
		var tracker = _n0.a;
		var progress = _n0.b;
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$filterMap,
					A3(elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var elm$http$Http$subMap = F2(
	function (func, _n0) {
		var tracker = _n0.a;
		var toMsg = _n0.b;
		return A2(
			elm$http$Http$MySub,
			tracker,
			A2(elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager(elm$http$Http$init, elm$http$Http$onEffects, elm$http$Http$onSelfMsg, elm$http$Http$cmdMap, elm$http$Http$subMap);
var elm$http$Http$command = _Platform_leaf('Http');
var elm$http$Http$subscription = _Platform_leaf('Http');
var elm$http$Http$request = function (r) {
	return elm$http$Http$command(
		elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var elm$http$Http$get = function (r) {
	return elm$http$Http$request(
		{body: elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: elm$core$Maybe$Nothing, tracker: elm$core$Maybe$Nothing, url: r.url});
};
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var author$project$Main$getBooksInfo = function () {
	var makeErrBook = F3(
		function (n, str, err) {
			return {
				authors: err,
				input: str,
				isbn13: author$project$Main$to13h(str),
				nation: author$project$Main$getNation(
					author$project$Main$stringToISBN(str)),
				order: n,
				pubdate: err,
				publisher: author$project$Main$getPub(
					author$project$Main$stringToISBN(str)),
				remark: err,
				title: err
			};
		});
	var expectISBN = F4(
		function (n, str, toMsg, decoder) {
			return A2(
				elm$http$Http$expectStringResponse,
				toMsg,
				function (response) {
					switch (response.$) {
						case 'BadUrl_':
							var url = response.a;
							return elm$core$Result$Ok(
								A3(makeErrBook, n, str, 'Error (Bad URL)'));
						case 'Timeout_':
							return elm$core$Result$Ok(
								A3(makeErrBook, n, str, 'Error (Timeout)'));
						case 'NetworkError_':
							return elm$core$Result$Ok(
								A3(makeErrBook, n, str, 'Network Error'));
						case 'BadStatus_':
							var metadata = response.a;
							var body = response.b;
							return elm$core$Result$Ok(
								A3(
									makeErrBook,
									n,
									str,
									'Error (Bad Status: ' + (elm$core$String$fromInt(metadata.statusCode) + ')')));
						default:
							var metadata = response.a;
							var body = response.b;
							var _n2 = A2(elm$json$Json$Decode$decodeString, decoder, body);
							if (_n2.$ === 'Ok') {
								var value = _n2.a;
								return elm$core$Result$Ok(value);
							} else {
								var _n3 = author$project$Main$verify(
									author$project$Main$stringToInts(str));
								if (_n3.$ === 'Ok') {
									return elm$core$Result$Ok(
										A3(makeErrBook, n, str, 'Not Found'));
								} else {
									return elm$core$Result$Ok(
										A3(makeErrBook, n, str, 'N/A (Bad ISBN)'));
								}
							}
					}
				});
		});
	var getBookInfo = function (_n0) {
		var n = _n0.a;
		var str = _n0.b;
		return elm$http$Http$get(
			{
				expect: A2(
					A2(expectISBN, n, str),
					author$project$Main$GotBookInfo,
					A2(author$project$Main$bookDecoder, n, str)),
				url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + (author$project$Main$to13(str) + '&country=JP')
			});
	};
	return A2(
		elm$core$Basics$composeR,
		elm$core$List$map(getBookInfo),
		elm$core$Platform$Cmd$batch);
}();
var author$project$Main$makeEmptyBook = function (n) {
	return {authors: '', input: '　', isbn13: '', nation: '', order: n, pubdate: '', publisher: '', remark: '', title: ''};
};
var elm$core$List$sortBy = _List_sortBy;
var elm$core$String$lines = _String_lines;
var author$project$Main$update = F2(
	function (msg, model) {
		var _enum = F3(
			function (acc, n, list) {
				_enum:
				while (true) {
					if (list.b) {
						var x = list.a;
						var xs = list.b;
						var $temp$acc = A2(
							elm$core$List$cons,
							_Utils_Tuple2(n, x),
							acc),
							$temp$n = n + 1,
							$temp$list = xs;
						acc = $temp$acc;
						n = $temp$n;
						list = $temp$list;
						continue _enum;
					} else {
						return elm$core$List$reverse(acc);
					}
				}
			});
		var enumerate = A2(_enum, _List_Nil, 0);
		switch (msg.$) {
			case 'Change':
				var newInput = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							content: enumerate(
								elm$core$String$lines(newInput)),
							input: newInput
						}),
					elm$core$Platform$Cmd$none);
			case 'Scroll':
				var newOffset = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{offset: newOffset}),
					elm$core$Platform$Cmd$none);
			case 'Retrieve':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{books: _List_Nil, status: author$project$Main$Loading, table: _List_Nil}),
					author$project$Main$getBooksInfo(model.content));
			default:
				var result = msg.a;
				if (_Utils_eq(
					elm$core$List$length(model.content) - 1,
					elm$core$List$length(model.books))) {
					if (result.$ === 'Ok') {
						var info = result.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									books: A2(elm$core$List$cons, info, model.books),
									status: author$project$Main$Done,
									table: A2(
										elm$core$List$sortBy,
										function ($) {
											return $.order;
										},
										A2(elm$core$List$cons, info, model.books))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									status: author$project$Main$Done,
									table: _List_fromArray(
										[
											author$project$Main$makeEmptyBook(0)
										])
								}),
							elm$core$Platform$Cmd$none);
					}
				} else {
					if (result.$ === 'Ok') {
						var info = result.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									books: A2(elm$core$List$cons, info, model.books),
									status: author$project$Main$Loading
								}),
							elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									books: _List_fromArray(
										[
											author$project$Main$makeEmptyBook(0)
										]),
									status: author$project$Main$Loading
								}),
							elm$core$Platform$Cmd$none);
					}
				}
		}
	});
var author$project$Main$Change = function (a) {
	return {$: 'Change', a: a};
};
var author$project$Main$Retrieve = {$: 'Retrieve'};
var author$project$Main$Scroll = function (a) {
	return {$: 'Scroll', a: a};
};
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$float = _Json_decodeFloat;
var author$project$Main$targetScrollTop = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'scrollTop']),
	elm$json$Json$Decode$float);
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var author$project$Main$onScroll = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'scroll',
		A2(elm$json$Json$Decode$map, tagger, author$project$Main$targetScrollTop));
};
var author$project$Main$conv10 = function (digits) {
	var result = author$project$Main$verify(digits);
	var len = elm$core$List$length(digits);
	var body = A2(
		elm$core$List$drop,
		3,
		A2(elm$core$List$take, len - 1, digits));
	if (result.$ === 'Err') {
		return result;
	} else {
		return (len === 10) ? result : (_Utils_eq(
			A2(elm$core$List$take, 3, digits),
			_List_fromArray(
				[9, 7, 9])) ? elm$core$Result$Err('ISBN-10 unavailable') : elm$core$Result$Ok(
			_Utils_ap(
				body,
				_List_fromArray(
					[
						author$project$Main$checksum10(body)
					]))));
	}
};
var author$project$Main$to10 = A2(
	elm$core$Basics$composeR,
	author$project$Main$stringToInts,
	A2(elm$core$Basics$composeR, author$project$Main$conv10, author$project$Main$unhyphenate));
var author$project$Main$to10m = A2(
	elm$core$Basics$composeR,
	elm$core$String$lines,
	A2(
		elm$core$Basics$composeR,
		elm$core$List$map(author$project$Main$to10),
		elm$core$String$join('\n')));
var author$project$Main$to10h = A2(
	elm$core$Basics$composeR,
	author$project$Main$stringToInts,
	A2(elm$core$Basics$composeR, author$project$Main$conv10, author$project$Main$hyphenate));
var author$project$Main$to10mh = A2(
	elm$core$Basics$composeR,
	elm$core$String$lines,
	A2(
		elm$core$Basics$composeR,
		elm$core$List$map(author$project$Main$to10h),
		elm$core$String$join('\n')));
var author$project$Main$to13m = A2(
	elm$core$Basics$composeR,
	elm$core$String$lines,
	A2(
		elm$core$Basics$composeR,
		elm$core$List$map(author$project$Main$to13),
		elm$core$String$join('\n')));
var author$project$Main$to13mh = A2(
	elm$core$Basics$composeR,
	elm$core$String$lines,
	A2(
		elm$core$Basics$composeR,
		elm$core$List$map(author$project$Main$to13h),
		elm$core$String$join('\n')));
var elm$html$Html$td = _VirtualDom_node('td');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$th = _VirtualDom_node('th');
var elm$html$Html$tr = _VirtualDom_node('tr');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var author$project$Main$viewBookInfo = function (model) {
	var makeRow = function (book) {
		var bk = (book.input === '') ? author$project$Main$makeEmptyBook(book.order) : book;
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('has-text-centered')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(bk.input)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('has-text-centered')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(bk.isbn13)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('has-text-centered')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							(bk.nation !== 'Japan') ? bk.nation : bk.publisher)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('has-text-centered')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							(bk.remark !== '') ? bk.remark : bk.pubdate)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('has-text-centered')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(bk.authors)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('has-text-centered')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(bk.title)
						]))
				]));
	};
	var header = A2(
		elm$html$Html$tr,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('has-text-centered')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' 入力 ')
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('has-text-centered')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' 検証結果 / ISBN-13 ')
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('has-text-centered')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' 圏域 / 出版者 ')
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('has-text-centered')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' 有無 / 出版年 ')
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('has-text-centered')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' 著者名 ')
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('has-text-centered')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' 書名 ')
					]))
			]));
	return A2(
		elm$core$List$cons,
		header,
		A2(elm$core$List$map, makeRow, model.table));
};
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$fieldset = _VirtualDom_node('fieldset');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$table = _VirtualDom_node('table');
var elm$html$Html$textarea = _VirtualDom_node('textarea');
var elm$html$Html$Attributes$cols = function (n) {
	return A2(
		_VirtualDom_attribute,
		'cols',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$placeholder = elm$html$Html$Attributes$stringProperty('placeholder');
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$property = elm$virtual_dom$VirtualDom$property;
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$readonly = elm$html$Html$Attributes$boolProperty('readOnly');
var elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		elm$core$String$fromInt(n));
};
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var elm$json$Json$Encode$float = _Json_wrap;
var author$project$Main$view = function (model) {
	var makeTextAreaAttr = F3(
		function (fun, bool, str) {
			return _List_fromArray(
				[
					elm$html$Html$Attributes$placeholder(str),
					elm$html$Html$Attributes$value(
					fun(model.input)),
					elm$html$Html$Attributes$readonly(bool),
					elm$html$Html$Events$onInput(author$project$Main$Change),
					author$project$Main$onScroll(author$project$Main$Scroll),
					elm$html$Html$Attributes$cols(20),
					elm$html$Html$Attributes$rows(20),
					A2(elm$html$Html$Attributes$style, 'font-size', '10pt'),
					A2(elm$html$Html$Attributes$style, 'font-family', '\'Fira Code\''),
					A2(
					elm$html$Html$Attributes$property,
					'scrollTop',
					elm$json$Json$Encode$float(model.offset)),
					elm$html$Html$Attributes$class('textarea')
				]);
		});
	var fieldsetAttr = _List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'display', 'inline'),
			elm$html$Html$Attributes$class('box')
		]);
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'whitespace', 'no-wrap'),
				A2(elm$html$Html$Attributes$style, 'margin', '10pt')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$h1,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('title is-4')
					]),
				_List_fromArray(
					[
						elm$html$Html$text('ISBN-10 ⇔ ISBN-13 ／ ハイフンあり ⇔ ハイフンなし （検証・変換ツール）')
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$fieldset,
				fieldsetAttr,
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('入力')
							])),
						A2(
						elm$html$Html$textarea,
						A3(makeTextAreaAttr, elm$core$Basics$identity, false, 'ISBNのリストをペースト'),
						_List_Nil)
					])),
				elm$html$Html$text('　　'),
				A2(
				elm$html$Html$fieldset,
				fieldsetAttr,
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('ISBN-13（ハイフンあり）')
							])),
						A2(
						elm$html$Html$textarea,
						A3(makeTextAreaAttr, author$project$Main$to13mh, true, ''),
						_List_Nil)
					])),
				elm$html$Html$text(' '),
				A2(
				elm$html$Html$fieldset,
				fieldsetAttr,
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('ISBN-10（ハイフンあり）')
							])),
						A2(
						elm$html$Html$textarea,
						A3(makeTextAreaAttr, author$project$Main$to10mh, true, ''),
						_List_Nil)
					])),
				elm$html$Html$text(' '),
				A2(
				elm$html$Html$fieldset,
				fieldsetAttr,
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('ISBN-13（ハイフンなし）')
							])),
						A2(
						elm$html$Html$textarea,
						A3(makeTextAreaAttr, author$project$Main$to13m, true, ''),
						_List_Nil)
					])),
				elm$html$Html$text(' '),
				A2(
				elm$html$Html$fieldset,
				fieldsetAttr,
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('ISBN-10（ハイフンなし）')
							])),
						A2(
						elm$html$Html$textarea,
						A3(makeTextAreaAttr, author$project$Main$to10m, true, ''),
						_List_Nil)
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$button,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(author$project$Main$Retrieve),
								elm$html$Html$Attributes$class(
								_Utils_eq(model.status, author$project$Main$Loading) ? 'button is-loading' : 'button')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('書籍情報を取得する')
							])),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(
						elm$html$Html$table,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('table is-bordered is-striped')
							]),
						author$project$Main$viewBookInfo(model))
					]))
			]));
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = elm$browser$Browser$element(
	{init: author$project$Main$init, subscriptions: author$project$Main$subscriptions, update: author$project$Main$update, view: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));