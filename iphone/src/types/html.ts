export type UListComponent = React.FC<React.HTMLAttributes<HTMLUListElement>>;
export type LIComponent = React.FC<React.HTMLAttributes<HTMLLIElement>>;

export type DivComponent<T = {}> = React.FC<
  React.HTMLAttributes<HTMLDivElement> & T
>;
export type HeadingComponent = React.FC<
  React.HTMLAttributes<HTMLHeadingElement>
>;
export type SpanComponent = React.FC<React.HTMLAttributes<HTMLSpanElement>>;
export type ButtonComponent = React.FC<React.HTMLAttributes<HTMLButtonElement>>;
