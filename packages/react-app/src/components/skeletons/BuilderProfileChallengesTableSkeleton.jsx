import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, SkeletonText } from "@chakra-ui/react";

const BuilderProfileChallengesTableSkeleton = () => (
  <Box overflowX="auto">
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Contract</Th>
          <Th>Live Demo</Th>
          <Th>Updated</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {[1, 2].map(lineNumber => {
          return (
            <Tr key={lineNumber}>
              <Td>
                <SkeletonText noOfLines={1} py={4} />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} py={4} />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} py={4} />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} py={4} />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} py={4} />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  </Box>
);

export default BuilderProfileChallengesTableSkeleton;
