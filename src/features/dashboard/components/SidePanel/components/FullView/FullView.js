import {
  Table,
  Typography,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Link,
  TableRow,
} from "@mui/material";
import { useGraph } from "../../../../../../contexts/graph";

const FullView = () => {
  const { renderGraph, setCurrentNode } = useGraph();
  return (
    <div>
      <Box className="titleContainer">
        <Typography className="sidePanelTitle">
          <span className="boldTitle">
            Mapping Employment Discrimination with Intersectional Migrants in
            the Tech Sector
          </span>
        </Typography>
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>CATEGORIES</TableCell>
                <TableCell className="findingColumn">BASED ON</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderGraph.nodes
                .filter((node) => node.tagType === "category")
                .map((node) => (
                  <TableRow key={node.id}>
                    <TableCell>{node.name}</TableCell>
                    <TableCell className="findingColumn">
                      <Link
                        className="findingLink"
                        onClick={() => setCurrentNode(node)}
                      >
                        {node.findingCount} findings
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default FullView;
