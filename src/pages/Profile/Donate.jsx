import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfileLayout from "../../Layouts/Profile/ProfileLayout";
import { Helmet } from "react-helmet";
import { fetchData, postData } from "../../utils/Request";

function Donate() {
  const username = window.location.pathname.split("/")[1];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const response = fetchData(`/user/profile/${username}`);
    response.then((data) => {
      if (data.status === 200) {
        setDisplayName(data.data.user.displayName);
        setLoading(false);
      } else {
        setError(true);
        setErrorMessage("User not found");
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{displayName} | Donate</title>
      </Helmet>
      <ProfileLayout>
        <Box>
          <Text>Donate</Text>
        </Box>
      </ProfileLayout>
    </>
  );
}

export default Donate;