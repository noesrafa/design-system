import styled from "styled-components";

interface Props {
  status: "Activo" | "Positivo" | "Negativo";
}

export default function StatusBox({ status }: Props) {
  return (
    <StyledStatus status={status}>
      <div className="dot"></div>
      {status}
    </StyledStatus>
  );
}

const statusColor = (props: any) => {
  // Fallback value if we can't get access to props
  if (!props || !props.status) return "red";
  // If no variant is specified, return the primary colour in our theme
  if (!props.status) return "red";

  // Dynamically determine the background colour based on props
  let status;
  switch (props.status) {
    case "Activo":
      status = ["#F0FAEE", "#6CCC54"];
      break;
    case "Positivo":
      status = ["#E8F4FE", "#1D8FF3"];
      break;
    case "Negativo":
      status = ["#FEEBE8", "#F45C43"];
      break;
    default:
      status = "264px";
      break;
  }

  return status;
};

const StyledStatus = styled.div<Props>`
  display: flex;
  gap: 16px;
  align-items: center;
  background-color: ${(props) => statusColor(props)[0]};
  padding: 6px 16px;
  border-radius: 100px;
  color: #000000be;
  font-weight: 500;
  font-size: 14px;
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 100px;
    background-color: ${(props) => statusColor(props)[1]};
  }
`;
