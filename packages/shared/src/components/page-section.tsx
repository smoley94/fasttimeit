import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
});

export function PageSection({ children }: PropsWithChildren) {
  const styles = useStyles();
  return <div className={styles.root}>{children}</div>;
}
