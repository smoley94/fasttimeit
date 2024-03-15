import { useNavigate, useRouteError } from "react-router-dom";
import { Title1, Title3, Button } from "@fluentui/react-components";

export function RouteErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error(error);

  return (
    <>
      <Title3>
        <div>
          <Title1>404 Page not found</Title1>
          <div>
            <Button apperance="primary" onClick={() => navigate(-1)}>
              Go back
            </Button>
          </div>
        </div>
      </Title3>
    </>
  );
}
