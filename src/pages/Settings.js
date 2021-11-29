import CompleteNavbar from "../components/CompleteNavbar";
import SideMarginLayout from "../layouts/SideMarginLayout";
import AuthLayout from "../layouts/AuthLayout";

function Settings() {
  return (
    <div>
      <CompleteNavbar />
      <AuthLayout>
        <SideMarginLayout>
          <h1>This is the Settings Page!</h1>
        </SideMarginLayout>
      </AuthLayout>
    </div>
  );
}

export default Settings;
