import {
  InlineDrawer,
  InlineDrawerProps,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground3,
    "& .fui-DrawerBody": {
      backgroundColor: tokens.colorNeutralBackground3,
      backgroundImage: "none",
    },
  },
});

export function NavigationDrawer(props: InlineDrawerProps) {
  const styles = useStyles();
  return <InlineDrawer className={styles.root} {...props} />;
}
