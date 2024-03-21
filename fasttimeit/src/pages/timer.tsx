import { PageLayout } from "../../../packages/shared/src/components/page-layout";
import { PageContent } from "../../../packages/shared/src/components/page-content";
import { PageSection } from "../../../packages/shared/src/components/page-section";

import {
  Play16Filled,
  RecordStop16Filled,
  ArrowReset20Filled,
  Checkmark16Filled,
} from "@fluentui/react-icons";

import {
  makeStyles,
  Title1,
  Button,
  shorthands,
  Field,
} from "@fluentui/react-components";

import { useState, useEffect, useRef } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  timer: {
    display: "flex",
    ...shorthands.flex(0, 0, "15px"),
    ...shorthands.padding("15px", 0),
    fontSize: "30px",
  },
  buttons: {
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
        <div className={styles.root}>
          <PageSection>
            <Field className={styles.timer}>{format(time)}</Field>
            <div className={styles.buttons}>
              <Button
                appearance="primary"
                icon={<Play16Filled />}
                onClick={() => {
                  if (!running) {
                    setRunning(true);
                  }
                }}
              >
                Start
              </Button>
              <Button
                appearance="primary"
                icon={<RecordStop16Filled />}
                onClick={() => setRunning(false)}
              >
                Stop
              </Button>
              <Button
                appearance="primary"
                icon={<ArrowReset20Filled />}
                onClick={() => {
                  setTime(0);
                }}
              >
                Nulstil
              </Button>
              <Button appearance="primary" icon={<Checkmark16Filled />}>
                Submit
              </Button>
            </div>
          </PageSection>
        </div>
      </PageContent>
    </PageLayout>
  );
}
