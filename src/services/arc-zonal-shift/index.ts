import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ARCZonalShift as _ARCZonalShift } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ARC Zonal Shift",
  version: "2022-10-30",
  protocol: "restJson1",
  sigV4ServiceName: "arc-zonal-shift",
  endpointPrefix: "arc-zonal-shift",
  operations: {
    CancelPracticeRun: "DELETE /practiceruns/{zonalShiftId}",
    CancelZonalShift: "DELETE /zonalshifts/{zonalShiftId}",
    CreatePracticeRunConfiguration: "POST /configuration",
    DeletePracticeRunConfiguration:
      "DELETE /configuration/{resourceIdentifier}",
    GetAutoshiftObserverNotificationStatus:
      "GET /autoshift-observer-notification",
    GetManagedResource: "GET /managedresources/{resourceIdentifier}",
    ListAutoshifts: "GET /autoshifts",
    ListManagedResources: "GET /managedresources",
    ListZonalShifts: "GET /zonalshifts",
    StartPracticeRun: "POST /practiceruns",
    StartZonalShift: "POST /zonalshifts",
    UpdateAutoshiftObserverNotificationStatus:
      "PUT /autoshift-observer-notification",
    UpdatePracticeRunConfiguration: "PATCH /configuration/{resourceIdentifier}",
    UpdateZonalAutoshiftConfiguration:
      "PUT /managedresources/{resourceIdentifier}",
    UpdateZonalShift: "PATCH /zonalshifts/{zonalShiftId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ARCZonalShift = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ARCZonalShift;
