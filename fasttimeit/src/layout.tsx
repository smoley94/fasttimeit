import {
  InlineDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Tab,
  makeStyles,
} from "@fluentui/react-components";

import { TimerFilled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "flex-start",
  },
});

export function Layout() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <InlineDrawer open>
        <DrawerHeader>
          <DrawerHeaderTitle>Fast TimeIt</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <div className={styles.drawerContent}>
            <Tab value="/" icon={<TimerFilled />}>
              Stopur
            </Tab>
          </div>
        </DrawerBody>
      </InlineDrawer>
    </div>
  );
}
