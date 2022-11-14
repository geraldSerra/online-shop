import { createContext } from "react";

export interface AdminModeContextInt {
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminModeContext = createContext<AdminModeContextInt>({
  admin: false,
  setAdmin: () => {},
});
