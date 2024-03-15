import { PageLayout } from "../../../packages/shared/src/components/page-layout";
import { PageContent } from "../../../packages/shared/src/components/page-content";
import { PageSection } from "../../../packages/shared/src/components/page-section";
import { HelpDrawerSection } from "../../../packages/shared/src/components/help-drawer-section";

import {
  makeStyles,
  Title1,
  Button,
  shorthands,
  MessageBarBody,
  MessageBarTitle,
} from "@fluentui/react-components";

import { useState, useEffect, useRef } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  button: {
    display: "flex",
    columnGap: "15px",
  },
  helpDrawer: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.flex(0, 0, "300px"),
    ...shorthands.gap("40px"),
    ...shorthands.padding("80px", "40px"),
  },
});

const format = (time: number) => {
  let hours: string = Math.floor((time / 60 / 60) % 24).toString();
  let minutes: string = Math.floor((time / 60) % 60).toString();
  let seconds: string = Math.floor(time % 60).toString();

  hours = hours.length === 1 ? "0" + hours : hours;
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  seconds = seconds.length === 1 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};

export function Timer() {
  const styles = useStyles();

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const timeHandler = useRef<number | null>(null);
  useEffect(() => {
    if (running) {
      timeHandler.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000) as never;
    }
    return () => {
      clearInterval(timeHandler.current!);
    };
  }, [running]);

  return (
    <PageLayout>
      <PageContent>
        <Title1 block>Timer</Title1>
        <PageSection>
          <div className={styles.root}>
            <div>{format(time)}</div>
            <div className={styles.button}>
              <Button appearance="primary" onClick={() => setRunning(!running)}>
                Start
              </Button>
              <Button
                appearance="primary"
                onClick={() => {
                  if (running) clearInterval(timeHandler.current!);
                  setRunning(!running);
                }}
              >
                Stop
              </Button>
              <Button
                appearance="primary"
                onClick={() => {
                  setTime(0);
                  setRunning(!running);
                }}
              >
                Nulstil
              </Button>
              <Button appearance="primary">Submit</Button>
            </div>
          </div>
        </PageSection>
      </PageContent>
      <HelpDrawerSection className={styles.helpDrawer}>
        <MessageBarBody>
          <MessageBarTitle>HelpDrawer</MessageBarTitle>
        </MessageBarBody>
      </HelpDrawerSection>
    </PageLayout>
  );
}
