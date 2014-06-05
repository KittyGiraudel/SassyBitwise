SassyBitwise [![Build Status](https://travis-ci.org/HugoGiraudel/SassyBitwise.svg)](https://travis-ci.org/HugoGiraudel/SassyBitwise) [![Gem Version](https://badge.fury.io/rb/SassyBitwise.svg)](http://badge.fury.io/rb/SassyBitwise)
============

[Bitwise operators](http://en.wikipedia.org/wiki/Bitwise_operation) in Sass (not Ruby).

## And

```scss
$value: bw-and(42, 48);
// or
$value: bitwise(42 '&' 48);

// -> 32
```

## Or

```scss
$value: bw-or(42, 48);
// or
$value: bitwise(42 '|' 48);

// -> 58
```

## Xor

```scss
$value: bw-xor(42, 48);
// or
$value: bitwise(42 '^' 48);

// -> 26
```

## Not

```scss
$value: bw-not(42);
// or
$value: bitwise('~' 42);

// -> -43
```

## Shift left

```scss
$value: bw-shift-left(42, 2);
// or
$value: bitwise(42 '<<' 2);

// -> 168
```

## Shift right

```scss
$value: bw-shift-right(42, 2);
// or
$value: bitwise(42 '>>' 2);

// -> 10
```

## All together

```scss
$value: bitwise(1 '|' 3 '|' 3 '|' 7);

// -> 7
```

## Notes

* Because Sass requires special characters to be either quoted or escaped, it is recommanded you always quote the operators.
* `bw()` is an alias for `bitwise()`

## Example

Encoding flags on a single bite.

```scss
// Defining global flags,
// Bitwise encoded
$DEEP_MODE: bw(1 '<<' 0);
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
@function flag($int, $flag) {
  @return bw($int '&' $flag) == $flag;
}

// Defining a mixin with many options
// Accepting a single encoded flag as argument
// ---
// @param [number] $int: flag encoded value
// ---
@mixin test($int) {
  $flags: bw($int); // Bitwise parsing flags
  deep: flag($flags, $DEEP_MODE);
  safe: flag($flags, $SAFE_MODE);
  multi: flag($flags, $MULTI);
  debug: flag($flags, $DEBUG);
}

// Sample test cast
test {
  @include test($DEEP_MODE '|' $SAFE_MODE '|' $MULTI);
}
```

## Thanks

A huge thanks to [Valérian Galliat](https://twitter.com/valeriangalliat) for his help.