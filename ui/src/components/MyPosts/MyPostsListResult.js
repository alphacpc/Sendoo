import { useState } from "react";
import {Link} from "react-router-dom"
import { Box, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography} from "@material-ui/core";

const MyPostsListResults = ({ customers,posts, ...rest }) => {

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = posts.map((post) => post._id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box {...rest}>
      <>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead className="theadPost">
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === posts.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < posts.length
                    }
                    onChange={handleSelectAll}/>
                </TableCell>
                <TableCell>Titre</TableCell>
                <TableCell>Catégorie</TableCell>
                <TableCell>Extrait</TableCell>
                <TableCell>Date de publication</TableCell>
                <TableCell>Derniere mis à jour</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbodyPost">
              {posts.slice(0, limit).map((post) => (
                <TableRow hover key={post._id} selected={selectedCustomerIds.indexOf(post._id) !== -1}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={selectedCustomerIds.indexOf(post._id) !== -1} onChange={(event) => handleSelectOne(event, post._id)} value="true"/>
                  </TableCell>
                  <TableCell id="titleValue">
                    <Link to={`/single-post/${post._id}`}>{post.postTitle}</Link>
                  </TableCell>
                  <TableCell className="TableCellTitle">{post.postCategory[0]}</TableCell>
                  <TableCell id="bodyValue">{post.postBody}</TableCell>
                  <TableCell>{new Date(`${post.createdAt}`).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(`${post.updatedAt}`).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </>
      <TablePagination
        component="div"
        count={posts.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10]}
      />
    </Box>
  );
};

export default MyPostsListResults;
