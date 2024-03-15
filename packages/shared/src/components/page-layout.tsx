import { makeStyles, shorthands } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.flex(1, 0, "0%"),
    ...shorthands.overflow("auto"),
  },
});

export function PageLayout({ children }: PropsWithChildren) {
  const styles = useStyles();
  return <main className={styles.root}>{children}</main>;
}
