import tw from "tailwind-styled-components";

export const Section = tw.section`
  w-full py-16 md:py-24
`;

export const Container = tw.div`
  container mx-auto px-4 md:px-6
`;

export const Eyebrow = tw.span`
  inline-block uppercase tracking-wider text-xs font-semibold text-emerald-600
`;

export const Title = tw.h2`
  text-3xl md:text-4xl font-bold tracking-tight
`;

export const Subtitle = tw.p`
  text-muted-foreground max-w-2xl
`;

export const Grid = tw.div`
  grid gap-6 sm:grid-cols-2 lg:grid-cols-3
`;

export const Pill = tw.span`
  inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium
`;

export const Kpi = tw.div`
  flex flex-col items-start justify-center gap-1 rounded-xl border bg-card p-4
`;
