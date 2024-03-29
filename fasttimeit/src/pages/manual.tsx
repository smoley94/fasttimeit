import { PageLayout } from "../../../packages/shared/src/components/page-layout";
import { PageContent } from "../../../packages/shared/src/components/page-content";
import { PageSection } from "../../../packages/shared/src/components/page-section";

//import type { DatePickerProps } from "@fluentui/react-datepicker-compat";
//import type { TimePickerProps } from "@fluentui/react-timepicker-compat";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { TimePicker } from "@fluentui/react-timepicker-compat";

import {
  Calendar16Regular,
  CalendarLtr16Regular,
  Checkmark16Filled,
} from "@fluentui/react-icons";
import {
  Title1,
  Title3,
  Avatar,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
  makeStyles,
  Field,
  //MessageBarBody,
  //MessageBarTitle,
  shorthands,
  Textarea,
  Button,
  Divider,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  form: {
    display: "flex",
  },
  datePicker: {
    maxWidth: "300px",
  },
  timePicker: {
    maxWidth: "300px",
  },
  gridContent: {
    height: "100%",
    width: "500px",
  },
  helpDrawer: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.flex(0, 0, "300px"),
    ...shorthands.gap("40px"),
    ...shorthands.padding("80px", "40px"),
  },
});

type NameCell = {
  label: string;
};

type DateCell = {
  label: string;
  timestamp: number;
  icon: JSX.Element;
};

type TimeCell = {
  label: string;
  timestamp: number;
  icon: JSX.Element;
};

type Item = {
  name: NameCell;
  date: DateCell;
  time: TimeCell;
};

const items: Item[] = [
  {
    name: { label: "Camilla Kløjgaard" },
    date: { label: "12-03-2024", timestamp: 1, icon: <CalendarLtr16Regular /> },
    time: { label: "7 timer ", timestamp: 1, icon: <Calendar16Regular /> },
  },
  {
    name: { label: "Camilla Kløjgaard" },
    date: { label: "13-03-2024", timestamp: 2, icon: <CalendarLtr16Regular /> },
    time: { label: "5 timer ", timestamp: 2, icon: <Calendar16Regular /> },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "name",
    compare: (a, b) => {
      return a.name.label.localeCompare(b.name.label);
    },
    renderHeaderCell: () => {
      return "Navn";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={<Avatar aria-label={item.name.label} name={item.name.label} />}
        >
          {item.name.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "date",
    compare: (a, b) => {
      return a.date.timestamp - b.date.timestamp;
    },
    renderHeaderCell: () => {
      return "Dato";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.date.icon}>
          {item.date.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "time",
    compare: (a, b) => {
      return a.time.label.localeCompare(b.time.label);
    },
    renderHeaderCell: () => {
      return "Tid";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.time.icon}>
          {item.time.label}
        </TableCellLayout>
      );
    },
  }),
];

export function Manual() {
  const styles = useStyles();

  return (
    <PageLayout>
      <PageContent>
        <Title1 block>Fast TimeIt&trade;</Title1>
        <PageSection>
          <Title3>Manuel tidsregistrering</Title3>
        </PageSection>
        <PageSection>
          <div className={styles.root}>
            <div className="form">
              <Field label="Vælg en dato">
                <DatePicker
                  className={styles.datePicker}
                  placeholder="Vælg en dato..."
                />
              </Field>
              <Field label="Vælg tid">
                <TimePicker
                  className={styles.timePicker}
                  placeholder="Vælg tid"
                />
              </Field>
              <Field label="Beskrivelse">
                <Textarea size="small" placeholder="Beskrivelse" />
              </Field>
              <Button
                appearance="primary"
                type="submit"
                icon={<Checkmark16Filled />}
              >
                Submit
              </Button>
              <Divider />
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className={styles.root}>
            <DataGrid
              items={items}
              columns={columns}
              className={styles.gridContent}
            >
              <DataGridHeader>
                <DataGridRow>
                  {({ renderHeaderCell }) => (
                    <DataGridHeaderCell>
                      {renderHeaderCell()}
                    </DataGridHeaderCell>
                  )}
                </DataGridRow>
              </DataGridHeader>
              <DataGridBody<Item>>
                {({ item, rowId }) => (
                  <DataGridRow<Item> key={rowId}>
                    {({ renderCell }) => (
                      <DataGridCell>{renderCell(item)}</DataGridCell>
                    )}
                  </DataGridRow>
                )}
              </DataGridBody>
            </DataGrid>
          </div>
        </PageSection>
      </PageContent>
    </PageLayout>
  );
}
