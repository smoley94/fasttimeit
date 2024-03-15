import {
  makeStyles,
  shorthands,
  tokens,
  MessageBar,
  MessageBarProps,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
  },
});

export function HelpDrawerSection(props: MessageBarProps) {
  const styles = useStyles();
  return <MessageBar className={styles.root} {...props} />;
}
