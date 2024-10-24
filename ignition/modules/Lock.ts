// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("LockModule", (m) => {
  const lock = m.contract("sCore");
  const staking = m.contract("stakingContract", [lock]);

  return { lock, staking };
});

export default LockModule;
