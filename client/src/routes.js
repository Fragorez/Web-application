import Admin from "./pages/Admin";
import RecordingForm from "./pages/RecordingForm";
import Auth from "./pages/Auth";
import Records from "./pages/Records";

import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  ONLINEFORM_ROUTE,
  RECORDS_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: RECORDS_ROUTE,
    Component: Records,
  },
];

export const publicRoutes = [
  {
    path: ONLINEFORM_ROUTE,
    Component: RecordingForm,
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
