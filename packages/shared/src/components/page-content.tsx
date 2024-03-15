import { makeStyles, shorthands } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("40px"),
    ...shorthands.flex(1, 0, "440px"),
    ...shorthands.padding("60px", "40px"),
  },
});

export function PageContent({ children }: PropsWithChildren) {
  const styles = useStyles();
  return <div className={styles.root}>{children}</div>;
}
