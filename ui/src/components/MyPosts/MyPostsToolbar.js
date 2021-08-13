import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";

import { Link as RouterLik } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";

const MyPostsListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <RouterLik to="write" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained">
          Ecrire un article
        </Button>
      </RouterLik>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Box>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchOutlined />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Entrer le nom d'un article"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Box>
    </Box>
  </Box>
);

export default MyPostsListToolbar;
