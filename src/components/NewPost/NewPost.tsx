import React, { useState, useEffect } from "react";
import { bearerTokenAuthorization } from "../../configs/bearerTokenAuthorization";
import { CustomFormInput } from "../CustomInputForm/CustomInputForm";
import styled from "styled-components";
import { CustomSubmitButton } from "../CustomButtons/CustomSubmitButton/CustomSubmitButton";
import { CustomBackButton } from "../CustomButtons/CustomBackButton/CustomBackButton";
import { apiEndpoints, PUBLIC_V1 } from "../../configs/apiEndpoints";
import { appRoutesList } from "../../configs/appRoutesList";
import { AlertMessage } from "../AlertMessage/AlertMessage";
import { NoDataFound } from "../NoDataFound/NoDataFound";

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
  const [displayedToastr, setDisplayedToastr] = useState(false);
  const [responseFetchError, setResponseFetchError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayedToastr(false);
    }, 3000);
    const fetchFunc = async () => {
      try {
        const response = await fetch(
          apiEndpoints.USERS,
          bearerTokenAuthorization
        );
        const resJson = await response.json();
        setAllUsers({ users: resJson.data });
      } catch (error) {
        setResponseFetchError(true);
      }
    };
    fetchFunc();
  }, [displayedToastr]);

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    const fetchFuncPost = async () => {
      const response = await fetch(
        `${PUBLIC_V1}/users/${postData.userId}/posts`,
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

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = event.target;

    setPostData((prevState) => ({ ...prevState, [id]: value }));
  };

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
          <StyledSelect
            id="userId"
            onChange={handleChange}
            required
            value={postData.userId}
          >
            <option value=""> -- select an user -- </option>
            {allUsers.users.map(({ id, name }) => (
              <option key={id} value={id}>{`${name} [ID:${id}]`}</option>
            ))}
          </StyledSelect>

          <CustomFormInput
            id="title"
            value={postData.title}
            label="Title"
            onChange={handleChange}
            required
          />

          <CustomFormInput
            id="body"
            label="Description"
            value={postData.body}
            onChange={handleChange}
            required
          />

          <CustomBackButton url={appRoutesList.postsUrl}>Back</CustomBackButton>

          <CustomSubmitButton>Save</CustomSubmitButton>
        </form>
      )}
    </div>
  );
};