// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0;

import './IPayable.sol';

/// @title Interface for event subscription service.
/// @notice Reactive contracts receive notifications about new events matching the criteria of their event subscriptions.
interface ISubscriptionService is IPayable {
    /// @notice Subscribes the calling contract to receive events matching the criteria specified.
    /// @param chain_id EIP155 source chain ID for the event (as a `uint256`), or `0` for all chains.
    /// @param _contract Contract address to monitor, or `0` for all contracts.
    /// @param topic_0 Topic 0 to monitor, or `REACTIVE_IGNORE` for all topics.
    /// @param topic_1 Topic 1 to monitor, or `REACTIVE_IGNORE` for all topics.
    /// @param topic_2 Topic 2 to monitor, or `REACTIVE_IGNORE` for all topics.
    /// @param topic_3 Topic 3 to monitor, or `REACTIVE_IGNORE` for all topics.
    function subscribe(
        uint256 chain_id,
        address _contract,
        uint256 topic_0,
        uint256 topic_1,
        uint256 topic_2,
        uint256 topic_3
    ) external;

    /// @notice Removes active subscription of the calling contract, matching the criteria specified, if one exists.
    /// @param chain_id Chain ID criterion of the original subscription.
    /// @param _contract Contract address criterion of the original subscription.
    /// @param topic_0 Topic 0 criterion of the original subscription.
    /// @param topic_1 Topic 0 criterion of the original subscription.
    /// @param topic_2 Topic 0 criterion of the original subscription.
    /// @param topic_3 Topic 0 criterion of the original subscription.
    function unsubscribe(
        uint256 chain_id,
        address _contract,
        uint256 topic_0,
        uint256 topic_1,
        uint256 topic_2,
        uint256 topic_3
    ) external;
}
