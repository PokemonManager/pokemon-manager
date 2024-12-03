export type Range<
  N extends number,
  R extends number[] = []
> = R["length"] extends N ? R[number] : Range<N, [...R, R["length"]]>;
