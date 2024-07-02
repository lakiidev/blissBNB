"use client";

import { FC, useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface errorStateProps {
  error: Error;
}

const errorState: FC<errorStateProps> = ({ error }) => {
  return <EmptyState title="Uh oh" subtitle="Something went wrong!" />;
};

export default errorState;
