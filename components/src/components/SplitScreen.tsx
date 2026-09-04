import { useEffect, type PropsWithChildren, type ReactNode } from "react";
import { styled } from "styled-components";
import { getUsers } from "../server/api";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Panel = styled.div`
  flex: 1;
  background-color: ${(p) => p.color};
  color: "white";
`;

type SplitScreenProps = PropsWithChildren & {
  left: ReactNode;
  right: ReactNode;
};

const SplitScreen = ({ left, right }: SplitScreenProps) => {
  useEffect(() => {
    async function fetchData() {
      const response = await getUsers();

      console.log({ response });
      return response;
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Panel color="burlywood">{left}</Panel>
      <Panel color="cadetblue">{right}</Panel>
    </Container>
  );
};

const LeftPanel = () => <div>I am a left Item</div>;
const RightPanel = () => <div>I am a right Item</div>;

const SplitScreenContainer = () => {
  return <SplitScreen left={<LeftPanel />} right={<RightPanel />} />;
};

export default SplitScreenContainer;
