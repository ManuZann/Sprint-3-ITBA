import { Card, Stack, Image } from "@chakra-ui/react";
import LoginArea from "../../components/Login/Login";
import Layout from "../../components/Layout"

function LoginPage() {
  return (
    <Layout>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        justifyContent="center"
        align="center"
        bg="teal"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "500px" }}
          src="https://bestarion.com/wp-content/uploads/2021/05/digital-transformation-banking-pioneer.jpg"
          alt="BancPillier"
        />

        <Stack>
          <LoginArea />
        </Stack>
      </Card>
    </Layout>
  );
}

export default LoginPage;
