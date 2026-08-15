---
title: How to Calculate Percentage in Excel — Formulas for Every Case
description: The exact Excel formulas for percent of a number, percent increase, percent change and percentage difference, with step-by-step examples.
datePublished: '2026-08-15'
category: Math
---

Excel handles percentages better than almost any tool — once you know the few formulas. Here's the complete guide.

## The golden rule: Excel stores percents as decimals

When you type `10%`, Excel actually stores `0.10`. A percentage cell is just a number formatted with the `%` symbol. This is why formulas often "just work" but sometimes look strange: you're always multiplying by the decimal, never by 100.

## Percentage of a number

To find **15% of 200**:

```
=A1*B1
```

where `A1 = 200` and `B1 = 15%`. The result is `30`. Alternatively use `=200*0.15` — same thing.

## Percent increase (calculate percent increase)

Going from `80` to `100` is a **25% increase**:

```
=(B1-A1)/A1
```

Then format the cell as a percentage. `(100-80)/80 = 0.25` → shows as `25%`. Need the new value instead? `=A1*(1+25%)` grows `20000` to `25000`.

## Percentage change (old vs new)

The percent change formula is the same pattern as increase, just with the sign doing the work:

```
=(new-old)/old
```

A value that falls from `120` to `90` gives `(90-120)/120 = -25%`. Negative result = decrease.

## Percentage difference between two numbers

Percent **difference** compares two values symmetrically — neither is treated as the "old" one:

```
=ABS(B1-A1)/AVERAGE(A1,B1)
```

For `80` and `100`: `ABS(20)/90 = 22.2%`.

## Percentage of a total (what percent of)

What percent is `30` of `200`?

```
=30/200
```

Format as percentage → `15%`. Or `=A1/B1` with the part in `A1` and the whole in `B1`.

## Percent off / discount price

A 25% discount on `2000`:

```
=A1*(1-25%)
```

The result is `1500`. To find the discount amount itself: `=A1*25%` → `500`.

## Worked spreadsheet

| Purpose | Formula | Example | Result |
| --- | --- | --- | --- |
| Percent of a number | `=A1*B1` | `200`, `15%` | `30` |
| Percent increase | `=(B1-A1)/A1` | `80` → `100` | `25%` |
| Percent change | `=(new-old)/old` | `120` → `90` | `-25%` |
| Percent difference | `=ABS(B1-A1)/AVERAGE(A1,B1)` | `80` vs `100` | `22.2%` |
| Part of total | `=A1/B1` | `30` of `200` | `15%` |
| Percent off | `=A1*(1-25%)` | `2000`, `25%` | `1500` |

## Common mistakes

- **Multiplying by 100 in the formula.** If you type `*100`, you get `25` instead of `25%` — only the cell formatting should add the `%`.
- **Wrong reference for the "old" value.** Increase is always relative to the starting value: `(new-old)/old`, not `/new`.
- **Using percent difference when you mean change.** Change is relative to one base; difference is relative to the average of both.

Prefer the browser? Try the [Percentage Calculator](/math/percentage-calculator/), [Percentage Increase Calculator](/math/percentage-increase-calculator/) or [Percentage Difference Calculator](/math/percentage-difference-calculator/) — instant results, no cells required.
