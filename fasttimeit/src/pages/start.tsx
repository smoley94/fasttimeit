import { makeStyles } from "@fluentui/react-components";
import { Title1 } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
});

export function Start() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Title1 block>Home</Title1>
    </div>
  );
}
