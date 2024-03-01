import { NavigationDrawer } from "../../packages/shared/src/components/navigation-drawer";

import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  makeStyles,
  Tab,
  TabList,
  Persona,
} from "@fluentui/react-components";

import {
  HomeRegular,
  TimerRegular,
  AddSquareRegular,
  SettingsRegular,
  ArrowExitRegular,
} from "@fluentui/react-icons";

import { useNavigate, Outlet } from "react-router-dom";

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

  function handleClick(value: string) {
    navigate(value);
  }

  return (
    <div className={styles.root}>
      <NavigationDrawer open>
        <DrawerHeader>
          <DrawerHeaderTitle>Fast TimeIt</DrawerHeaderTitle>
          <Persona
            size="huge"
            primaryText="Guest"
            secondaryText="Lokal konto"
            textAlignment="center"
          />
        </DrawerHeader>
        <DrawerBody className={styles.drawerContent}>
          <div>
            <TabList appearance="subtle" vertical>
              <Tab
                value="/"
                icon={<HomeRegular />}
                onClick={() => handleClick("/")}
              >
                Startsside
              </Tab>
              <Tab
                value="/timer"
                icon={<TimerRegular />}
                onClick={() => handleClick("/timer")}
              >
                Stopur
              </Tab>
              <Tab
                value="/manual"
                icon={<AddSquareRegular />}
                onClick={() => handleClick("/manual")}
              >
                Manuel tidsregistrering
              </Tab>
              <Tab
                value="/settings"
                icon={<SettingsRegular />}
                onClick={() => handleClick("/settings")}
              >
                Indstillinger
              </Tab>
              <Tab
                value="/logout"
                icon={<ArrowExitRegular />}
                onClick={() => handleClick("/logout")}
              >
                Log ud
              </Tab>
            </TabList>
          </div>
        </DrawerBody>
      </NavigationDrawer>
      <Outlet />
    </div>
  );
}
