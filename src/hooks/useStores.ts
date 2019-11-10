import { createContext, useContext } from "react";

import stores from "../stores";

const storeContext = createContext(stores);

export function useStores() {
  return useContext(storeContext);
}
