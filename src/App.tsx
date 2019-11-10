import React from "react";

import { default as styled } from "styled-components";
import { Button, Icon, Badge } from "antd";
import { useObserver } from "mobx-react";
import { useStores } from "./hooks/useStores";

export default function App() {
  const { theme } = useStores();
  const switchTheme = () => theme.switchTheme();

  return useObserver(() => {
    return (
      <div style={{ height: "100%" }}>
        <AppBar style={{ backgroundColor: theme.current.get("appbarColor") }}>
          <div>
            <Icon
              type="profile"
              style={{
                marginRight: 20,
                fontSize: 20,
                color: theme.current.get("textAccentColor")
              }}
            />
            <Badge
              count={2}
              style={{ borderColor: "transparent" }}
              offset={[-18, 0]}
            >
              <Icon
                type="bulb"
                style={{
                  marginRight: 20,
                  fontSize: 20,
                  color: theme.current.get("textAccentColor")
                }}
              />
            </Badge>

            <Icon
              type="shopping-cart"
              style={{
                marginRight: 20,
                fontSize: 20,
                color: theme.current.get("textAccentColor")
              }}
            />
          </div>
        </AppBar>

        <div
          style={{ height: "100%", backgroundColor: "#ddd", width: "100%" }}
        />
        <Button
          icon="bulb"
          onClick={switchTheme}
          style={{
            position: "absolute",
            bottom: 20,
            right: 20
          }}
        >
          Switch Theme
        </Button>
      </div>
    );
  });
}

const AppBar = styled.div`
  height: 54px;
  width: 100%;

  transition: all 200ms;
  background-color: #00171f;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 40px 0px 40px;
`;
