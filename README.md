SassyBitwise
============

Bitwise operators in Sass.

## And

```scss
$value: bitwise(42 '&' 48); // 32
```

## Or

```scss
$value: bitwise(42 '|' 48); // 58
```

## Xor

```scss
$value: bitwise(42 '^' 48); // 26
```

## Not

```scss
$value: bitwise('~' 42); // -43
```

## Shift left

```scss
$value: bitwise(42 '<<' 2); // 168
```

## Shift right

```scss
$value: bitwise(42 '>>' 2); // 10
```

## Note

Because Sass requires special characters to be either quoted or escaped, it is recommanded you always quote the operators.

## Thanks

A huge thanks to [Valérian Galliat](https://twitter.com/valeriangalliat) for his help.