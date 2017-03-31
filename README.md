SassyBitwise [![Build Status](https://travis-ci.org/HugoGiraudel/SassyBitwise.svg)](https://travis-ci.org/HugoGiraudel/SassyBitwise) [![Gem Version](https://badge.fury.io/rb/SassyBitwise.svg)](http://badge.fury.io/rb/SassyBitwise)
============

[Bitwise operators](http://en.wikipedia.org/wiki/Bitwise_operation) in Sass (not Ruby). Read [API documentation](http://hugogiraudel.com/SassyBitwise).

## Installation

```
gem install SassyBitwise
```

```rb
# config.rb
require "SassyBitwise"
```

```scss
@include "SassyBitwise"
```

---

```sh
npm install sassybitwise
```

## API

### And

```scss
$value: bw-and(42, 48);
// or
$value: bitwise(42 '&' 48);

// -> 32
```

### Or

```scss
$value: bw-or(42, 48);
// or
$value: bitwise(42 '|' 48);

// -> 58
```

### Xor

```scss
$value: bw-xor(42, 48);
// or
$value: bitwise(42 '^' 48);

// -> 26
```

### Not

```scss
$value: bw-not(42);
// or
$value: bitwise('~' 42);

// -> -43
```

### Shift left

```scss
$value: bw-shift-left(42, 2);
// or
$value: bitwise(42 '<<' 2);

// -> 168
```

### Shift right

```scss
$value: bw-shift-right(42, 2);
// or
$value: bitwise(42 '>>' 2);

// -> 10
```

### All together

```scss
$value: bitwise(1 '|' 3 '|' 3 '|' 7);

// -> 7
```

## Notes

* Because Sass requires special characters to be either quoted or escaped, it is recommanded you always quote the operators.
* `bw()` is an alias for `bitwise()`

## Example

Encoding flags as a single int.
You know, because we *can*.

```scss
// Defining global flags,
// Bitwise encoded
$RECURSIVE: bw(1 '<<' 0);
$SAFE_MODE: bw(1 '<<' 1);
$MULTI: bw(1 '<<' 2);
$DEBUG: bw(1 '<<' 3);

// Helper function
// Checking for flag status
// ---
// @param [number] $int: flag encoded value
// @param [number] $flag: a global flag
// ---
// @return [bool]
// ---
@function has-flag($int, $flag) {
  @return bw($int '&' $flag) == $flag;
}

// Defining a mixin with many options
// Accepting a single encoded flag as argument
// ---
// @param [list] $int: list of flags, low-level prog' style
// ---
@mixin custom-test($int) {
  $flags: bw($int); // Bitwise parsing flags
  deep: has-flag($flags, $RECURSIVE);
  safe: has-flag($flags, $SAFE_MODE);
  multi: has-flag($flags, $MULTI);
  debug: has-flag($flags, $DEBUG);
}

// Sample test cast
test {
  @include custom-test($RECURSIVE '|' $SAFE_MODE '|' $MULTI);
}
```

```css
test {
  deep: true;
  safe: true;
  multi: true;
  debug: false;
}
```

## Thanks

A huge thanks to [Valérian Galliat](https://twitter.com/valeriangalliat) for his help, and [Fabrice Weinberg](https://twitter.com/fweinb) for Travis integration.
