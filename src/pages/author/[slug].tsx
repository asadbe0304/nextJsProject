import { Box } from "@mui/material";
import Layout from "./../../Layout/index"
const slugAuthor = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
        Author 404
      </Box>
    </Layout>
  );
}

export default slugAuthor;