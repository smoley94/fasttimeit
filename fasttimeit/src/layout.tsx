import { NavigationDrawer } from "../../packages/shared/src/components/navigation-drawer";
import { NavTabList } from "../../packages/shared/src/components/nav-tab-list";

import {
  DrawerBody,
  DrawerHeader,
  makeStyles,
  Tab,
  Persona,
} from "@fluentui/react-components";

import {
  HomeRegular,
  TimerRegular,
  AddSquareRegular,
  SettingsRegular,
  ArrowExitRegular,
} from "@fluentui/react-icons";

import { Outlet } from "react-router-dom";

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
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
});

export function Layout() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <NavigationDrawer open>
        <DrawerHeader>
          <Persona
            size="huge"
            primaryText="Guest"
            secondaryText="Lokal konto"
            textAlignment="center"
          />
        </DrawerHeader>
        <DrawerBody>
          <div className={styles.drawerContent}>
            <NavTabList
              appearance="subtle"
              vertical
              size="large"
              className={styles.justifyStart}
            >
              <Tab value="/" icon={<HomeRegular />}>
                Startside
              </Tab>
              <Tab value="/timer" icon={<TimerRegular />}>
                Stopur
              </Tab>
              <Tab value="/manual" icon={<AddSquareRegular />}>
                Manuel tidsregistrering
              </Tab>
            </NavTabList>
            <NavTabList
              appearance="subtle"
              vertical
              size="large"
              className={styles.justifyEnd}
            >
              <Tab value="/settings" icon={<SettingsRegular />}>
                Indstillinger
              </Tab>
              <Tab value="/logout" icon={<ArrowExitRegular />}>
                Log ud
              </Tab>
            </NavTabList>
          </div>
        </DrawerBody>
      </NavigationDrawer>
      <Outlet />
    </div>
  );
}
