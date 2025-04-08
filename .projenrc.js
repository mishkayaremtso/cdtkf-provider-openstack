/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");

const project = new CdktfProviderProject({
  description: 'Generates typescript interfaces out of JSON or YAML files in projen.',
  useCustomGithubRunner: false,
  terraformProvider: "terraform-provider-openstack/openstack@~> 3.0.0",
  cdktfVersion: "^0.20.0",
  constructsVersion: "^10.3.0",
  minNodeVersion: "18.12.0",
  typescriptVersion: "~5.5.0", // JSII and TS should always use the same major/minor version range
  jsiiVersion: "~5.5.0", // JSII and TS should always use the same major/minor version range
  devDeps: ["@cdktf/provider-project@^0.6.0"],
  isDeprecated: false,
});

project.synth();