require 'spec_helper'

RSpec.describe('Conditional scanning') do
  include_examples 'scan', /(a)(?(1)T|F)1/,       3  => [:conditional,  :open,            '(?',  3,  5]
  include_examples 'scan', /(a)(?(1)T|F)2/,       4  => [:conditional,  :condition_open,  '(',   5,  6]
  include_examples 'scan', /(a)(?(1)T|F)3/,       5  => [:conditional,  :condition,       '1',   6,  7]
  include_examples 'scan', /(a)(?(1)T|F)4/,       6  => [:conditional,  :condition_close, ')',   7,  8]
  include_examples 'scan', /(a)(?(1)T|F)5/,       7  => [:literal,      :literal,         'T',   8,  9]
  include_examples 'scan', /(a)(?(1)T|F)6/,       8  => [:conditional,  :separator,       '|',   9,  10]
  include_examples 'scan', /(a)(?(1)T|F)7/,       9  => [:literal,      :literal,         'F',   10, 11]
  include_examples 'scan', /(a)(?(1)T|F)8/,       10 => [:conditional,  :close,           ')',   11, 12]
  include_examples 'scan', /(a)(?(1)TRUE)9/,      8  => [:conditional,  :close,           ')',   12, 13]
  include_examples 'scan', /(a)(?(1)TRUE|)10/,    8  => [:conditional,  :separator,       '|',   12, 13]
  include_examples 'scan', /(a)(?(1)TRUE|)11/,    9  => [:conditional,  :close,           ')',   13, 14]
  include_examples 'scan', /(?<N>A)(?(<N>)T|F)1/, 5  => [:conditional,  :condition,       '<N>', 10, 13]
  include_examples 'scan', /(?'N'A)(?('N')T|F)2/, 5  => [:conditional,  :condition,       "'N'", 10, 13]

  include_examples 'scan', /(a(b(c)))(?(1)(?(2)d|(?(3)e|f))|(?(2)(?(1)g|h)))/,
    0  => [:group,        :capture,         '(',   0,  1],
    1  => [:literal,      :literal,         'a',   1,  2],
    2  => [:group,        :capture,         '(',   2,  3],
    3  => [:literal,      :literal,         'b',   3,  4],
    4  => [:group,        :capture,         '(',   4,  5],
    5  => [:literal,      :literal,         'c',   5,  6],
    6  => [:group,        :close,           ')',   6,  7],
    7  => [:group,        :close,           ')',   7,  8],
    8  => [:group,        :close,           ')',   8,  9],
    9  => [:conditional,  :open,            '(?',  9, 11],
    10 => [:conditional,  :condition_open,  '(',  11, 12],
    11 => [:conditional,  :condition,       '1',  12, 13],
    12 => [:conditional,  :condition_close, ')',  13, 14],
    13 => [:conditional,  :open,            '(?', 14, 16],
    14 => [:conditional,  :condition_open,  '(',  16, 17],
    15 => [:conditional,  :condition,       '2',  17, 18],
    16 => [:conditional,  :condition_close, ')',  18, 19],
    17 => [:literal,      :literal,         'd',  19, 20],
    18 => [:conditional,  :separator,       '|',  20, 21],
    19 => [:conditional,  :open,            '(?', 21, 23],
    20 => [:conditional,  :condition_open,  '(',  23, 24],
    21 => [:conditional,  :condition,       '3',  24, 25],
    22 => [:conditional,  :condition_close, ')',  25, 26],
    23 => [:literal,      :literal,         'e',  26, 27],
    24 => [:conditional,  :separator,       '|',  27, 28],
    25 => [:literal,      :literal,         'f',  28, 29],
    26 => [:conditional,  :close,           ')',  29, 30],
    27 => [:conditional,  :close,           ')',  30, 31],
    28 => [:conditional,  :separator,       '|',  31, 32],
    29 => [:conditional,  :open,            '(?', 32, 34],
    30 => [:conditional,  :condition_open,  '(',  34, 35],
    31 => [:conditional,  :condition,       '2',  35, 36],
    32 => [:conditional,  :condition_close, ')',  36, 37],
    33 => [:conditional,  :open,            '(?', 37, 39],
    34 => [:conditional,  :condition_open,  '(',  39, 40],
    35 => [:conditional,  :condition,       '1',  40, 41],
    36 => [:conditional,  :condition_close, ')',  41, 42],
    37 => [:literal,      :literal,         'g',  42, 43],
    38 => [:conditional,  :separator,       '|',  43, 44],
    39 => [:literal,      :literal,         'h',  44, 45],
    40 => [:conditional,  :close,           ')',  45, 46],
    41 => [:conditional,  :close,           ')',  46, 47],
    42 => [:conditional,  :close,           ')',  47, 48]

  include_examples 'scan', /((a)|(b)|((?(2)(c(d|e)+)?|(?(3)f|(?(4)(g|(h)(i)))))))/,
    0  => [:group,        :capture,         '(',   0,  1],
    1  => [:group,        :capture,         '(',   1,  2],
    2  => [:literal,      :literal,         'a',   2,  3],
    3  => [:group,        :close,           ')',   3,  4],
    4  => [:meta,         :alternation,     '|',   4,  5],
    5  => [:group,        :capture,         '(',   5,  6],
    6  => [:literal,      :literal,         'b',   6,  7],
    7  => [:group,        :close,           ')',   7,  8],
    8  => [:meta,         :alternation,     '|',   8,  9],
    9  => [:group,        :capture,         '(',   9, 10],
    10 => [:conditional,  :open,            '(?', 10, 12],
    11 => [:conditional,  :condition_open,  '(',  12, 13],
    12 => [:conditional,  :condition,       '2',  13, 14],
    13 => [:conditional,  :condition_close, ')',  14, 15],
    14 => [:group,        :capture,         '(',  15, 16],
    15 => [:literal,      :literal,         'c',  16, 17],
    16 => [:group,        :capture,         '(',  17, 18],
    17 => [:literal,      :literal,         'd',  18, 19],
    18 => [:meta,         :alternation,     '|',  19, 20],
    19 => [:literal,      :literal,         'e',  20, 21],
    20 => [:group,        :close,           ')',  21, 22],
    21 => [:quantifier,   :one_or_more,     '+',  22, 23],
    22 => [:group,        :close,           ')',  23, 24],
    23 => [:quantifier,   :zero_or_one,     '?',  24, 25],
    24 => [:conditional,  :separator,       '|',  25, 26],
    25 => [:conditional,  :open,            '(?', 26, 28],
    26 => [:conditional,  :condition_open,  '(',  28, 29],
    27 => [:conditional,  :condition,       '3',  29, 30],
    28 => [:conditional,  :condition_close, ')',  30, 31],
    29 => [:literal,      :literal,         'f',  31, 32],
    30 => [:conditional,  :separator,       '|',  32, 33],
    31 => [:conditional,  :open,            '(?', 33, 35],
    32 => [:conditional,  :condition_open,  '(',  35, 36],
    33 => [:conditional,  :condition,       '4',  36, 37],
    34 => [:conditional,  :condition_close, ')',  37, 38],
    35 => [:group,        :capture,         '(',  38, 39],
    36 => [:literal,      :literal,         'g',  39, 40],
    37 => [:meta,         :alternation,     '|',  40, 41],
    38 => [:group,        :capture,         '(',  41, 42],
    39 => [:literal,      :literal,         'h',  42, 43],
    40 => [:group,        :close,           ')',  43, 44],
    41 => [:group,        :capture,         '(',  44, 45],
    42 => [:literal,      :literal,         'i',  45, 46],
    43 => [:group,        :close,           ')',  46, 47],
    44 => [:group,        :close,           ')',  47, 48],
    45 => [:conditional,  :close,           ')',  48, 49],
    46 => [:conditional,  :close,           ')',  49, 50],
    47 => [:conditional,  :close,           ')',  50, 51],
    48 => [:group,        :close,           ')',  51, 52],
    49 => [:group,        :close,           ')',  52, 53]

  include_examples 'scan', /(a)(?(1)(b|c|d)|(e|f|g))(h)(?(2)(i|j|k)|(l|m|n))|o|p/,
    9  => [:meta,        :alternation, '|', 10, 11],
    11 => [:meta,        :alternation, '|', 12, 13],
    14 => [:conditional, :separator,   '|', 15, 16],
    17 => [:meta,        :alternation, '|', 18, 19],
    19 => [:meta,        :alternation, '|', 20, 21],
    32 => [:meta,        :alternation, '|', 34, 35],
    34 => [:meta,        :alternation, '|', 36, 37],
    37 => [:conditional, :separator,   '|', 39, 40],
    40 => [:meta,        :alternation, '|', 42, 43],
    42 => [:meta,        :alternation, '|', 44, 45],
    46 => [:meta,        :alternation, '|', 48, 49],
    48 => [:meta,        :alternation, '|', 50, 51]
end
