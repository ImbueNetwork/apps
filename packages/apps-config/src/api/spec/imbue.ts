// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

const definitions: OverrideBundleDefinition = {
  rpc: {
    proposals: {
      getAllProjectData: {
        description: 'Get overall project data',
        params: [{
          name: 'project_id',
          type: 'u32'
        }],
        type: 'Option<(Vec<u8>, Vec<u8>)>'
      },
      getProjectKitty: {
        description: 'Get the escrow address associated with a project',
        params: [{
          name: 'project_id',
          type: 'u32'
        }],
        type: 'AccountId'
      }
    }
  },
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Address: 'MultiAddress',
        LookupSource: 'MultiAddress'
      }
    }]
};

export default definitions;
