SassyBitwise
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
$value: bw-shift-left(42, 48);
// or
$value: bitwise(42 '<<' 2);

// -> 168
```

## Shift right

```scss
$value: bw-shift-right(42, 48);
// or
$value: bitwise(42 '>>' 2);

// -> 10
```

## Note

Because Sass requires special characters to be either quoted or escaped, it is recommanded you always quote the operators.

## Thanks

A huge thanks to [Valérian Galliat](https://twitter.com/valeriangalliat) for his help.