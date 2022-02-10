import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { CustomColors } from '../../colors/Colors';
import { GOOGLE } from '../../configs/apiEndpoints';
import { customFetch } from '../../customFunctions/customFetch';

const StyledOffline = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 50%;
`;

const StyledSpan = styled.span`
  margin-left: 12px;
  font-family: "Poppins";
  font-size: smaller;
`;

export const NetworkDetector = (props: { children: React.ReactNode }) => {
  const [isDisconnected, setIsDisconnected] = useState(false);

  useEffect(() => {
    handleConnectionChange();
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    };
  }, [isDisconnected]);

  const handleConnectionChange = () => {
    const condition = navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      const webPing = setInterval(async () => {
        try {
          await customFetch(GOOGLE, {
            mode: 'no-cors',
          });
          setIsDisconnected(() => {
            clearInterval(webPing);
            return false;
          });
        } catch (error) {
          setIsDisconnected(false);
        }
      }, 5000);
      return;
    }

    return setIsDisconnected(true);
  };

  return (
    <div>
      {isDisconnected && (
        <ThemeProvider theme={CustomColors}>
          <StyledOffline>
            <StyledSpan>Offline</StyledSpan>
          </StyledOffline>
        </ThemeProvider>
      )}
      {props.children}
    </div>
  );
};
