import React, { useState, useEffect } from "react";
import { bearerTokenAuthorization } from "../../configs/bearerTokenAuthorization";
import { CustomFormInput } from "../CustomInputForm/CustomInputForm";
import styled from "styled-components";
import { CustomSubmitButton } from "../CustomButtons/CustomSubmitButton/CustomSubmitButton";
import { CustomBackButton } from "../CustomButtons/CustomBackButton/CustomBackButton";
import { apiEndpoints } from "../../configs/apiEndpoints";
import { appRoutesList } from "../../configs/appRoutesList";
import { AlertMessage } from "../AlertMessage/AlertMessage";
import { NoDataFound } from "../NoDataFound/NoDataFound";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../colors/Colors";

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledSelect = styled.select`
  width: 90%;
  height: 35px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  border: none;
  font-size: 16px;
  font-family: "Poppins";
`;

type UsersProps = {
  id: number;
  name: string;
};

type Users = {
  users: UsersProps[];
};

export const NewPost = () => {
  const [postData, setPostData] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const [allUsers, setAllUsers] = useState<Users>({ users: [] });
  const [statusMessage, setStatusMessage] = useState<number>(0);
  const [displayedToastr, setDisplayedToastr] = useState<boolean>(false);
  const [responseFetchError, setResponseFetchError] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayedToastr(false);
    }, 3000);
    const fetchFunc = async () => {
      try {
        const response = await fetch(apiEndpoints.USERS, bearerTokenAuthorization);
        const resJson = await response.json();
        setAllUsers({ users: resJson.data });
      } catch (error) {
        setResponseFetchError(true);
      }
    };
    fetchFunc();
  }, [displayedToastr]);

  const handleSubmit = async (event: any) => {
    const fetchFuncPost = async () => {
      const response = await fetch(
        `https://gorest.co.in/public/v1/users/${postData.userId}/posts`,
        {
          method: "POST",
          headers: bearerTokenAuthorization.headers,
          body: JSON.stringify(postData),
        }
      );
      setStatusMessage(response.status);
      setDisplayedToastr(true);
    };
    fetchFuncPost();
    event.preventDefault();
    setPostData({ userId: "", title: "", body: "" });
  };

  const handleChange = (event: any) => {
    const { id, value } = event.target;

    setPostData({ ...postData, [id]: value });
  };

  const { userId, title, body } = postData;
  const { users } = allUsers;

  return (
    <div>
      {displayedToastr ? (
        <AlertMessage
          isOpen={displayedToastr}
          responseStatus={statusMessage}
        ></AlertMessage>
      ) : null}

      <StyledH1>NEW POST</StyledH1>

      {responseFetchError ? (
        <NoDataFound />
      ) : (
        <form onSubmit={handleSubmit}>
          <ThemeProvider theme={CustomColors}>
            <StyledSelect
              id="userId"
              onChange={handleChange}
              required
              value={userId}
            >
              <option value=""> -- select an user -- </option>
              {users.map(({ id, name }) => (
                <option key={id} value={id}>{`${name} [ID:${id}]`}</option>
              ))}
            </StyledSelect>
          </ThemeProvider>

          <CustomFormInput
            id="title"
            value={title}
            label="Title"
            onChange={handleChange}
            required
          />

          <CustomFormInput
            id="body"
            label="Description"
            value={body}
            onChange={handleChange}
            required
          />

          <CustomBackButton url={appRoutesList.posts_url}>Back</CustomBackButton>

          <CustomSubmitButton>Save</CustomSubmitButton>
        </form>
      )}
    </div>
  );
};
