import { CSSProperties } from "react";

declare module "react" {
  interface CSSProperties {
    "--size"?: string;
    "--distance"?: string;
    "--position"?: string;
    "--time"?: string;
    "--delay"?: string;
  }
}