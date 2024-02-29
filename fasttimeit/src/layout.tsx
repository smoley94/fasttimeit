import {
  InlineDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Tab,
  makeStyles,
  TabList,
} from "@fluentui/react-components";

import {
  TimerFilled,
  HomeFilled,
  SettingsFilled,
  AddSquareFilled,
  ArrowExitFilled,
} from "@fluentui/react-icons";

import { useNavigate } from "react-router-dom";

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
  },
});

export function Layout() {
  const styles = useStyles();

  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <InlineDrawer open>
        <DrawerHeader>
          <DrawerHeaderTitle>Fast TimeIt</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <div className={styles.drawerContent}>
            <TabList appearance="subtle" vertical>
              <Tab value="/" icon={<HomeFilled />}>
                Startsside
              </Tab>
              <Tab value="/timer" icon={<TimerFilled />}>
                Stopur
              </Tab>
              <Tab value="/manual" icon={<AddSquareFilled />}>
                Manuel tidsregistrering
              </Tab>
              <Tab value="/settings" icon={<SettingsFilled />}>
                Indstillinger
              </Tab>
              <Tab value="/logout" icon={<ArrowExitFilled />}>
                Log ud
              </Tab>
            </TabList>
          </div>
        </DrawerBody>
      </InlineDrawer>
    </div>
  );
}
