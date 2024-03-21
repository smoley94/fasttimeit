import { TabList, TabListProps } from "@fluentui/react-components";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type NavTabListProps = Omit<
  TabListProps,
  "selectedValue" | "onTabSelect" | "defaultSelectedValue" | "defaultValue"
>;

export function NavTabList({ children, ...props }: NavTabListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = useMemo(() => {
    return location.pathname + location.search;
  }, [location]);

  return (
    <TabList
      selectedValue={currentPath}
      onTabSelect={(_e: any, data: { value: string }) => {
        navigate(data.value as string);
      }}
      {...props}
    >
      {children}
    </TabList>
  );
}
