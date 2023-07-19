// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Address: 'MultiAddress',
        LookupSource: 'MultiAddress'
      }
    },
    rpc: {
      proposals: {
        getProjectKitty: {
          description: "Get the escrow address associated with a project",
          params: [{
            name: "project_id",
            "type": "u32"
          }],
          type: "AccountId",
          isSubscription: false,
          jsonrpc: "proposals_getProjectKitty",
          method: "getProjectKitty",
          section: "proposals"
        }
      }
    }
  ]
};

export default definitions;
