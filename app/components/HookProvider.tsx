"use client";

import { Fragment } from "react";
import useTokenRefresh from "../hooks/useToken";

function HookProvider({ children }: { children: React.ReactNode }) {
  useTokenRefresh();

  return <Fragment>{children}</Fragment>;
}

export default HookProvider;
